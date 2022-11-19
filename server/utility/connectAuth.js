const { mongoose } = require("mongoose")
const { BadRequestErr } = require("../utility/errorCodes")
const dotenv = require("dotenv")
dotenv.config();


const connectAuth = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
    } catch (err) {
        throw new BadRequestErr(err);
    }
}

module.exports = { connectAuth }