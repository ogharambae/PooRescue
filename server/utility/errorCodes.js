class BadRequestErr extends Error {
    constructor(message) {
        super(message);
        this.name = "BadRequest";
        this.errorCode = 400;
    }
}

module.exports = { BadRequestErr }