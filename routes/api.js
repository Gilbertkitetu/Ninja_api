const express = require('express');
const Ninja = require('../models/ninja');
const router = express.Router();
//const bodyParser = require('body-parser');

//router.use(bodyParser.json());

//get a list of ninjas from the db
router.get('/ninjas', function(req, res) {
    res.send({ type: 'GET' });
});

//add a new ninjas to db
router.post('/ninjas', function(req, res) {
    /*console.log(req.body);*/
    // var ninja = new Ninja(req.body);
    // ninja.save();

    //or
    Ninja.create(req.body).then(function(ninja) {
        res.send(
            //{
            //     // type: 'POST',
            //     // name: req.body.name,
            //     // rank: req.body.rank

            // } 
            //send back the ninja we have saves to the db
            ninja
        );
    });


});

//update a ninja in the db
router.put('/ninjas/:id', function(req, res) {
    res.send({ type: 'PUT' });
});

//delete a ninja from the db
router.delete('/ninjas/:id', function(req, res) {
    res.send({ type: 'DELETE' });
});



module.exports = router;