const express = require("express");

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const userData = require("./schema.js");

const MONGO_URI = process.env.MONGO_URI

app.get("/userdata",(req,res)=>{
    try {
        return res.status(200).send({message:"Sucessfull"});
    } catch (error) {
        return res.status(500).send({message:"Some thing went wrong"});
    }
})


app.post("/Userliberary",(req,res)=>{
    try {
        const liberary = {Name:"kushal",city:"rajahmundry",books:"the evil"}
        userData.push(liberary)
        return res.status(201).send({message:"Created sucessfully",userData});
    } catch (error) {
        return res.status(500).send({message:"Some thing went wrong"});
    }
})

app.post("/Userbooks",(req,res)=>{
    try {
        const books = {title:"kushal",author:"rajahmundry",isbn:"012345678"}
        userId.push(books)
        return res.status(201).send({message:"Created sucessfully",userId});
    } catch (error) {
        return res.status(500).send({message:"Some thing went wrong"});
    }
})


app.listen(8080,()=>{
    console.log("Server connected successfully")
})