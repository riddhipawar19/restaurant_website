const mongoose = require("mongoose")

const MenuSchema = mongoose.Schema({
    "name":{
        type: String,
        required: true
    },
    "price":{
        type: String,
        required: true
    },
    "category":{
        type: String,
        required: true
    },
    "image":{
        type: String,
        data: Buffer
    }
})

module.exports = mongoose.model("menu", MenuSchema)