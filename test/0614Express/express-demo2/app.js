const express = require('express');
const path =  require('path');

const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

const app = express();

//configurations
app.set('env', 'production');





//middlewares
// app.use('/abc', express.static(path.join(__dirname, 'resources')));
// app.use('/mycss', express.static(path.join(__dirname, 'resources','js')));

// app.use(express.urlencoded({extended: true}));

app.use('/product', productRouter);
app.use('/user', userRouter); // /user/*/*/*

// app.use('/', (req, res, next) => {
//     throw new Error('Whooooops!!!');
// });

// app.use('/abc', (req, res, next) => {
//     throw new Error('Whooo33333333333333333oops!!!');
// });

//Error handling

app.use((req, res, next) => { //every request
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use((err, req, res, next) => {
    console.log(err.message);
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send('500 something wrong!');
});


app.listen(3000);