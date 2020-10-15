const { Router } = require('express');
const express = require('express');
const router = express.Router();

//learn about mars page
router.get('/', (req, res) => {
    res.render('mars')

})

// activities onboard page
router.get('/onboard', (req, res) => {
    res.render('onboard')

})

// become a martian page
router.get('/martian', (req, res) => {
    res.render('onboard')

})

// life on mars page
router.get('/life', (req, res) => {
    res.render('life')

})

//about trip page
router.get('/aboutTrip', (req, res) => {
    res.render('aboutTrip')

})



module.exports = router;