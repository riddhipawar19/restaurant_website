const mongoose = require("mongoose")
const URI = "mongodb://localhost:27017/restaurant"

const connectToDb = () =>{
    mongoose.connect(URI, ()=>{
        console.log("Connected to DB..");
    })
}

module.exports = connectToDb