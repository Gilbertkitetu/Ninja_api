const express = require('express');

//set up express app
const app = express();

app.get('/', function() {
    console.log('Get request');
});

//listen to requests

app.listen(process.env.port || 4000, function() {
    console.log('API listening for requests on port 4000');
});