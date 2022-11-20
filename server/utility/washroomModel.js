const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    "recordid": String,
    "datasetId": String,
    "recordId": String,
    "fields": {
        "summer_hours": String,
        "location": String,
        "name": String,
        "address": String,
        "primaryind": Number,
        "type": String,
        "winter_hours": String,
        "geo_local_area": String,
        "note": String,
        "geom": {
            "coordinates": [Number],
            "type": String
        },
        "wheel_access": String,
        "maintainer": String
    },
    "record_timestamp": String
},
    { typeKey: "$type" }
)

module.exports = mongoose.model("washrooms", schema) //washroom is the name of the collection in the db
