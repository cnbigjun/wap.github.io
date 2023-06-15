const express = require('express');
const path =  require('path');

const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

const app = express();

app.get('/', (req, res , next) => {
    console.log('1......');
    next();
}, (req, res, next) => {
    console.log('2......');
    next('route');
}, (req, res, next) => {
    console.log('3......');
    next();
},(req, res, next) => {
    console.log('4......');
    next();
});

app.use((req, res) => {
    console.log('5.....');
    res.send('Welcome');
});


app.use((err, req, res, next) => {
    res.status(500).send('Whoops!');
});

app.listen(3000);