const express = require('express'); 
const app = express();



app.get('/', (req, res) => {
    res.send('<h1>Space<h1>')
})



app.listen(3000, ()=>{
    console.log("I am listening");
});