const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const { asyncWrapper } = require("./utility/asyncWrapper");
const { connectAuth } = require("./utility/connectAuth");
const { connectDB } = require("./utility/connectDB");
const userModel = require("./utility/userModel");
const {
    BadRequestErr
} = require("./utility/errorCodes");
const washroomSchema = require("./utility/washroomModel");
const cors = require("cors");

const app = express();
dotenv.config();

let washroomModel = null;

const start = async () => {
    await connectAuth();
    await connectDB();

    app.listen(process.env.serverPort, async () => {
        try {
            const washroomData = await axios.get("https://opendata.vancouver.ca/api/records/1.0/search/?dataset=public-washrooms&q=&rows=200&facet=type&facet=summer_hours&facet=winter_hours&facet=wheel_access&facet=maintainer&facet=geo_local_area")
            if (!washroomData || !washroomData.data || washroomData.status != 200) {
                throw new Error("Error: could not load washroom data.")
            }
            washroomModel = await washroomSchema;
            await washroomModel.create(washroomData.data.records);
            await console.log(`Server is running on port: ${process.env.serverPort}`);
        } catch (err) {
            throw new BadRequestErr(err)
        }
    })
}
start()

app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

// register a user using username and password
app.post('/register', asyncWrapper(async (req, res) => {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPW = await bcrypt.hash(password, salt);
    const userWithHashedPW = { ...req.body, password: hashedPW };
    const user = await userModel.create(userWithHashedPW);
    res.send(user);
}))

// login a registered user using username and password
app.post('/login', asyncWrapper(async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });
    if (!user) {
        throw new BadRequestErr("User not found.");
    }
    const isPWCorrect = await bcrypt.compare(password, user.password);
    if (!isPWCorrect) {
        throw new BadRequestErr("Password is incorrect.");
    }
    // create a cookie, attach token to cookie, assign the token to the user in mongodb
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
    res.cookie("auth_token", token, { maxAge: 2 * 60 * 60 * 1000 });
    res.header("auth_token", token);
    await userModel.findOneAndUpdate({ username }, { token: token });
    res.send(user);
}))

// logout and clear user token
app.get("/logout", asyncWrapper(async (req, res) => {
    res.clearCookie("auth_token");
    res.json({ Message: "You have been successfully logged out." });
})
);

// get washroom data
app.get("/washrooms", asyncWrapper(async (req, res) => {
    let query = washroomModel.find({}).sort("primaryind");
    query.exec().then((d) => {
        if (d.length > 0) {
            res.json(d);
        } else {
            throw new BadRequestErr("No washrooms found.");
        }
    })
}))

// get washroom with id
app.get("/washrooms/:primaryind", asyncWrapper(async (req, res) => {
    if (!req.params.primaryind) {
        throw new BadRequestErr("ID of washroom must be provided.");
    }
    await washroomModel.find({ "fields.primaryind": req.params.primaryind })
        .then((d) => {
            if (d.length > 0) {
                res.json(d);
            } else {
                throw new BadRequestErr("No washrooms found.")
            }
        })
        .catch((err) => {
            throw new BadRequestErr(err);
        })
}))

// add new washroom
app.put("/washrooms/:primaryind", asyncWrapper(async (req, res) => {
    const selection = { "fields.primaryind": req.params.primaryind };
    console.log(selection)
    const update = req.body
    const options = {
        new: true,
        runValidators: true,
        upsert: true
    }
    const doc = await washroomModel.findOneAndUpdate(selection, update, options);
    console.log(doc);
    if (doc) {
        res.json({ msg: "Washroom upserted successfully.", data: doc })
    } else {
        throw new BadRequestErr("Error: problem upserting washroom.");
    }
}))

// update a washroom
app.patch("/updateWashrooms/:primaryind", asyncWrapper(async (req, res) => {
    const selection = { "fields.primaryind": req.params.primaryind };
    const update = { $set: req.body }
    const options = {
        new: true,
        runValidators: true
    }
    const doc = await washroomModel.findOneAndUpdate(selection, update, options)
    console.log(doc)
    if (doc) {
        res.json({
            msg: "Washroom patched Successfully.",
            doc: doc
        })
    } else {
        throw new BadRequestErr("Error patching a washroom.");
    }
}))

// delete a washroom
app.delete("/deleteWashrooms", asyncWrapper(async (req, res) => {
    res.send("hello from delWashroom");
}))

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('*', (req, res) => {
    throw new BadRequestErr("Error 404: improper routes.");
})