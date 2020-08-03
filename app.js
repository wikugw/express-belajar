const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Welcome to my website!");
});

app.get("/hello", function(req, res){
    res.send("Helo! Welcome to hello route!");
});

app.get("/game/:gameTitle/:gameCreator", function(req, res){
    const title = req.params.gameTitle;
    const creator = req.params.gameCreator;
    res.send("Enjoy the " + title + " game created by " + creator);
});

app.get("*", function(req,res){
    res.send("error! that route doesn't exist");
});

app.listen("3000", function(){
    console.log("Gaming Website has started up!");
});