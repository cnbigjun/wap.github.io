const express = require('express');
const app = express();

app.disable('case sensitive routing');
// app.set('case sensitive routing', true);

console.log(process.env.PORT, process.env.NODE_ENV);
app.set('env', process.env.NODE_ENV || 'development');




app.use('/users', function(req, res, next){
    console.log('hi ....');
    // res.send('Hi');
    next();
});

app.use('/users', function(req, res, next){
    console.log('hi ....');
    res.send('abc......');
});

app.use((req, res, next) => { //auditing/log //all requests
    console.log('hello ....');
    // res.send('Hello');
    next();
});


app.listen(3000, () => console.log('listen on 3000'));
