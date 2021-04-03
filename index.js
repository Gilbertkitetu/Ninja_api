const express = require('express');

//initialize routes
const routes = require('./routes/api')
    //set up express app
const app = express();

//use routes
app.use('/api', routes);
/*
app.get('/api', function(req, res) {
    console.log('Get request');
    //end response
    //res.end();

    //send response
    res.send({ name: 'Gilbert' });
});
*/
//listen to requests

app.listen(process.env.port || 4000, function() {
    console.log('API listening for requests on port 4000');
});