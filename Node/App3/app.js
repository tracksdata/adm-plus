var express = require('express');
var app = express();
var fs = require("fs");

var user = {
    "user4" : {
       "name" : "Praveen",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }


 // listing of all users
app.get('/', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );

      
    });
 })
 

 app.post('/addUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       //data["user4"] = user["user4"];
       data={...data,user}
       console.log( data );
       res.send( data);
       res.end();
    });
 })

 app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })


// listing of all users
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
     
   });
})



var server = app.listen(9090, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Server app listening at http://%s:%s", host, port)
})