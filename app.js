const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");   

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/openhub", {useNewUrlParser: true});

const Schema = {
    points: Number,
    skills: [String],
    project: [{
        projectName: String,
        projectTitle: String
    }]
};

const Item = mongoose.model("Projdocs", Schema);

const item = new Item({
    points: 50,
    skills: ["C++", "Javascript"],
    project: [
        {
            projectName: "openHub",
            projectTitle: "it is a nice project where people can find open source project and contribute to them and also rate them"
        },
        {
            projectName: "NeedBlood",
            projectTitle: "it is a noble project where people who are in need of blood can find blood donors near them"
        },
        {
            projectName: "Chatify",
            projectTitle: "it is chat room where people can come together and talk to each other"
        }
    ],
});

item.save();

app.listen(3000, function(){
    console.log("server its running")
});