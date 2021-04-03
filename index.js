const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();


//connect to mongo db
mongoose.connect('mongodb://localhost/ninjago');

mongoose.Promise = global.Promise;




app.use(bodyParser.json());
// app.use(express.json());
//use routes
//initialize routes
app.use('/api', require('./routes/api'));
/*
app.get('/api', function(req, res) {
    console.log('Get request');
    //end response
    //res.end();

    //send response
    res.send({ name: 'Gilbert' });
});
*/

//error handling middle ware
app.use(function(err, req, res, next) {
    //console.log(err);
    res.status(422).send({ err: err.message });
});
//listen to requests

//
app.listen(process.env.port || 4000, function() {
    console.log('API listening for requests on port 4000');
});