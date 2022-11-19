const {
    BadRequestErr
} = require("./utility/errorCodes")
const { asyncWrapper } = require("./utility/asyncWrapper")
const { connectAuth } = require("./utility/connectAuth")
const userModel = require("./utility/userModel")
const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const app = express();
dotenv.config();

const start = async () => {
    await connectAuth();
    app.listen(process.env.serverPort, (err) => {
        if (err) {
            throw new BadRequestErr(err)
        }
        else {
            console.log(`Server is running on port: ${process.env.serverPort}`);
        }
    })
}
start()

app.use(express.json())
app.use(cookieParser())

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
app.get("/getWashrooms", asyncWrapper(async (req, res) => {

    res.send("hello from getWashroom");
}))

// add new washroom
app.put("/addWashrooms", asyncWrapper(async (req, res) => {
    res.send("hello from addWashroom");

}))

// update a washroom
app.patch("/updateWashrooms", asyncWrapper(async (req, res) => {
    res.send("hello from updateWashroom");

}))

// delete a washroom
app.delete("/deleteWashrooms", asyncWrapper(async (req, res) => {
    res.send("hello from delWashroom");

}))

app.get('*', (req, res) => {
    throw new BadRequestErr("Error 404: improper routes.");
})