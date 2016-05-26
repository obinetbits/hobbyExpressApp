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

//Tell Express to listen for request(start over)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER HAS STARTED!!!");
});