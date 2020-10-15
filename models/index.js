require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
// const ATLAS_URI = process.env.ATLAS_URI;

//Mongo connection
mongoose.connect(MONGO_URI, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//mongoose connection object
const db = mongoose.connection;

mongoose.connect(connectionString, configOptions)    
    .then(() => console.log('MongoDB successfully connected...'))    
    .catch((err) => console.log(`MongoDB connection error: ${err}`));

//set up an event listener to fire once when the connections "opens"
//console log what hose and port it's running on

db.once("open", () =>
{
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on("error", (err) =>
{
    console.log(`Database error \n ${err}`);
});

module.exports.User = require("./User");
module.exports.Item = require("./Item");
