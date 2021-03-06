const express = require('express');
const Ninja = require('../models/ninja');
const router = express.Router();
//const bodyParser = require('body-parser');

//router.use(bodyParser.json());

//get a list of ninjas from the db
router.get('/ninjas', function(req, res, next) {
    /* res.send({ type: 'GET' });*/

    //find all the ninjas in the db
    /* 
    Ninja.find({}).then(function(ninjas) {
         res.send(ninjas);
     });
     */
    Ninja.geoNear({ type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)] }, { maxDistance: 100000, spherical: true }).then(function(ninjas) {
        res.send(ninjas);
    });
});

//add a new ninjas to db
router.post('/ninjas', function(req, res, next) {
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
    }).catch(next);


});

//update a ninja in the db
router.put('/ninjas/:id', function(req, res, next) {
    Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {

        Ninja.findOne({ _id: req.params.id }).then(function(ninja) {
            res.send(ninja);
        });
    });
    //res.send({ type: 'PUT' });
});

//delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next) {
    //console.log(req.params.id);
    Ninja.findByIdAndRemove({ _id: req.params.id }).then(function(ninja) {
        //res.send({ type: 'DELETE' });
        res.send(ninja);
    });
});


module.exports = router;