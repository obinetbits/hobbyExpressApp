var express =  require("express");
var app = express();

// when you goto "/" => "Hi there"
app.get("/", function(req, res){
    res.send("Hi there");
});
// when you goto "/bye" => "Goodbye"
app.get("/bye", function(req, res){
    res.send("Goodbye");
});
// when you goto "dog" => "MEOW"
app.get("/dog", function(req, res){
    res.send("MEOW");
});

//route variable/parameter
app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " Subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    res.send("Welcome to the comments page");
});

// when you goto anyother link => "You are a Star"
app.get("*", function(req, res){
    res.send("You are a Star");
});

//Tell Express to listen for request(start over)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER HAS STARTED!!!");
});