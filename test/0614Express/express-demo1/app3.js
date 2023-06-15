const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.urlencoded({ extended: true })); //req.body

//   /welcome/*/*
app.all('/welcome', (req, res, next) => {
    res.send('Welcome');
});

app.get('/add-product', (req, res, next) => {
    res.send(fs.readFileSync('add-product.html', 'utf-8'));
});


app.post('/add-product', (req, res, next) => {
    console.log('save product--------');
    console.log(req.body);
    res.send('save successfully');
});


app.listen(3000, () => console.log('listen on 3000'));
