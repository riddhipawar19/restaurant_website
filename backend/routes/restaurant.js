const express = require("express");
const router = express.Router()
const Menu = require("../models/menuSchema")

router.post("/insert", (req,res)=>{
    console.log("In POST..");
    // res.send(req.body)
    menu = Menu(req.body)
    menu.save()
    .then(() =>{
        res.send("saved..")
    })
})

router.get("/", (req,res)=>{
    console.log("In GET..");
    // res.send(req.body)
    Menu.find()
    .exec()
    .then(result =>{
        res.send(result)
        console.log(result);
    })
})

module.exports = router