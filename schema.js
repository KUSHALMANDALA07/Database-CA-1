const mongoose = require("mongoose");

const liberary = new mongoose.Schema({
    Name:{
        require:"yes",
        type:"string",
        trim:"yes"
    },
    city:{
        require:"yes",
        type:"string"
    },
    books:[
       bookName,bookId,booktype
    ]
    
})

const Books = new mongoose.Schema({
        tytle:{
            require:"yes",
            type:"string"
        },
        author:{
            require:"yes",
            type:"string",
        },
        isbn:{
            require:"no",
            type:"number"
        }
})


const userData = mongoose.model("user",liberary)

const userId = mongoose.model("data",Books)

mongoose.exports = userData
mongoose.exports = userId