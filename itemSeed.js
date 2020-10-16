const db = require("./models");
require("dotenv").config();
const { Mongoose } = require("mongoose");
const Item = require("./models/Item");

// Inserting data 

// Item.insertMany([
//     { name: 'Vegan',
//     category: 'diet'},
//     { name: 'Vegitarian',
//     category: 'diet'},
//     { name: 'Nothing',
//     category: 'diet'},
//     { name: 'Single Suite',
//     category: 'cabin'},
//     { name: 'Pent Capsule',
//     category: 'cabin'},
//     { name: 'Double Suite',
//     category: 'cabin'},
// ]).then(function() {
//     console.log("Data inserted")
// }).catch(function(error){
//     console.log(error)
// })

// Item.insertMany([
//     { name: 'first',
//     category: 'departure',
//     time: '16 Oct 2120,12:35PM'
//     },
//     { name: 'second',
//     category: 'departure',
//     time: '17 Oct 2120,12:35PM'
//     },
//     { name: 'first',
//     category: 'departure',
//     time: '18 Oct 2120,12:35PM'
//     },
// ]).then(function() {
//     console.log("Data inserted")
// }).catch(function(error){
//     console.log(error)
// })

// Item.insertMany([
//     { name: 'S',
//     category: 'suit',
//     },
//     { name: 'M',
//     category: 'suit',
//     },
//     { name: 'L',
//     category: 'suit',
//     },
//     { name: 'red',
//     category: 'suit',
//     },
//     { name: 'white',
//     category: 'suit',
//     },
//     { name: 'yellow',
//     category: 'suit',
//     },
//     { name: 'blue',
//     category: 'suit',
//     }
// ]).then(function() {
//     console.log("Data inserted")
// }).catch(function(error){
//     console.log(error)
// })
