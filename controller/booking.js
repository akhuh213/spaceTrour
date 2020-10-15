require("dotenv").config();
const express = require('express');
const router = express.Router();
const { response } = require('express');

const db = require("../models");

// booking page 

router.get('/', (req, res) => {
    db.Item.find()
    .then((items) => {
    console.log(items)
    res.render('booking', {items})
    })
    // .catch(err=>{
    //     console.log(err)
    //     res.status.apply(503).send({message: 'Database asleep?'})
    // })
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

//dining page
router.get('/dining', (req, res) => {
    db.Item.find( { category: 'diet' })
    .then((items) => {
    console.log(items)
    res.render('cabin', {items})
    })
    .catch(err=>{
    console.log(err)
    res.status.apply(503).send({message: 'Database asleep?'})
    })

})

// cabin page 
router.get('/cabin', (req, res) => {
    db.Item.find( { category: 'cabin' })
    .then((items) => {
    console.log(items)
    res.render('cabin', {items})
    })
    .catch(err=>{
    console.log(err)
    res.status.apply(503).send({message: 'Database asleep?'})
    })

})
module.exports = router;