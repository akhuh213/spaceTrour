const express = require('express');
const router = express.Router();
const { response } = require('express');

router.get('/', (req, res) => {
    db.User.find()
        .then(foundUser => {
            // console.log(foundPost)
            res.send(foundUser)
        })
        .catch(err=>{
            console.log(err)
            res.status.apply(503).send({message: 'Database asleep?'})
        })
    res.render('booking')

})
router.post("/", (req,res) => 
{   
    db.User.create(req.body)
    .then(createdUser => {
        // console.log(createdPost)
        res.status(201).send(createdUser)
    })
    .catch(err => {
        console.log('Error while creating new post', err)
        if(err.name === 'Valication Error'){
            res.status(406).send({message: 'Validation Error'})
        } else {
            res.status(503).send({message: "Database or server error!"})
        }
    })
})


// suit page 
router.get('/suit', (req, res) => {
    res.render('suit')

})

router.get('/dining', (req, res) => {
    res.render('dining')

})

router.get('/cabin', (req, res) => {
    res.render('cabin')

})
module.exports = router;