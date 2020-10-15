
const express = require('express'); 
const app = express();
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {

    res.render('index')
})

app.get('/space', (req, res) => {
    res.send('<h1>Space Page<h1>')
})

app.get('/', (req, res) => {
    res.send('<h1>Space<h1>')
})




app.listen(3000, ()=>{
    console.log("I am listening");
});

app.use('/mars', require('./routes/mars'));