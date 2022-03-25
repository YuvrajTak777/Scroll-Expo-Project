const express = require("express");
const port =   80;
const app = express();
// require()

app.use(express.urlencoded({extended:false}));

//Serving Files In public
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));

//importing mongoose
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Expo");



const Schema = new mongoose.Schema({
    first: {
        type : String,
        required : true
    },
    last: {
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true,
        // unique : true,
    },
    number: {
        type : String,
        required : true,
    },
    timeOfA: {
        type : String,
        required : true,
    },
    stay: {
        type : String,
        required : true,
    },
    slot :{
        type : String,
        required :true,
    }
});



const Form = mongoose.model('UserInfo', Schema);


//Body-parser import
const bodyparser = require("body-parser");

//Post request


//GEt 
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
    // res.sendFile(__dirname + '/views/index.html');3
})


app.post("", (req, res) => {
    var myData = new Form(req.body);
    myData.save().then(() => {
        res.sendFile(__dirname + '/views/index2.html');
    }).catch(() => {
        res.status(400).send("item was not saved to the databse")
    })
})

    //Server Listening
app.listen(port, () => {
    console.log("Server Sarted At Port " + port);
})