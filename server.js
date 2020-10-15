const express = require('express'); 
const app = express();
const router = express.Router();

const controller = require('./controller/ctrl')


// Set Engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.static(`${__dirname}/public`));


//Routers

app.get('/', (req, res) => {
    res.render('home.ejs');
});




app.listen(3000, ()=>{
    console.log("I am listening");
});