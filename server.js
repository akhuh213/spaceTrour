
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




app.get('/', (req, res) => {
    res.send('<h1>Space<h1>')
})




app.listen(3000, ()=>{
    console.log("I am listening");
});

app.use('/mars', require('./routes/mars'));