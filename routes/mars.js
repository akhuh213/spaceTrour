const express = require('express');
const router = express.Router();
const { response } = require('express');

router.get('/', (req, res) => {
    res.render('mars')

})


module.exports = router;