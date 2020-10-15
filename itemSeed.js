const db = require("./models");
require("dotenv").config();
const { Mongoose } = require("mongoose");
const Item = require("./models/Item");

// Inserting data 

Item.insertMany([
    { name: 'Vegan',
    category: 'diet'},
    { name: 'Vegitarian',
    category: 'diet'},
    { name: 'Nothing',
    category: 'diet'},
    { name: 'Single Suite',
    category: 'cabin'},
    { name: 'Pent Capsule',
    category: 'cabin'},
    { name: 'Double Suite',
    category: 'cabin'},
]).then(function() {
    console.log("Data inserted")
}).catch(function(error){
    console.log(error)
})
