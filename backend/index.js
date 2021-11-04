//imports

const express = require("express")
const connectToDb = require("./db")
const cors = require("cors")

const PORT = 5000
connectToDb()
//middlewares
app = express()
app.use(express.json())
app.use(cors())

//routes
app.use("/", require("./routes/restaurant"))

//listen to server
app.listen(PORT, ()=>{
    console.log(`Server is at PORT ${PORT}`);
})


