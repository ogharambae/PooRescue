const { mongoose } = require("mongoose");
const dotenv = require("dotenv");
const { BadRequestErr } = require("../utility/errorCodes");
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        await mongoose.connection.db.dropCollection("washrooms");
    } catch (err) {
        throw new BadRequestErr(err);
    }
}

module.exports = { connectDB }