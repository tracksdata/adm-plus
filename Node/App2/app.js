var express = require('express');
var app = express();

// api call...
app.get('/', function (req, res) {
   res.send('Welcome Page');
})


 
app.get('/home', function (req, res) {
    res.send('Home Page');
 })

 app.get('/products', function (req, res) {
     //
    res.send('Products Page');
 })

 app.get('/clients', function (req, res) {
    //
   res.send('Clients Page');
})

app.get('/login', function (req, res) {
    //
   res.send('Login Page');
})

app.post('/', function (req, res) {
    res.send('POST PAGE');
 })

 app.delete('/', function (req, res) {
    res.send('Delete PAGE');
 })

 app.put('/', function (req, res) {
    res.send('PUT PAGE');
 })

 app.patch('/', function (req, res) {
    res.send('PATCH PAGE');
 })



var server = app.listen(9090, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Server is  listening at http://%s:%s", host, port)
})