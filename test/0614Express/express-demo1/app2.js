const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.disable('case sensitive routing');
// app.set('case sensitive routing', true);

console.log(process.env.PORT, process.env.NODE_ENV);
app.set('env', process.env.NODE_ENV || 'development');



// app.use(express.urlencoded({ extended: true })); //req.body

app.use((req, res, next) => {
    console.log(req.query);
    next();
});

app.use('/students', (req, res, next) => {
    let data = [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi"
    }
    ];

    res.status(200).json(data); //content-type: application/json
});

app.use('/welcome', (req, res, next) => {
    res.status(200).send('welcome');
});

app.use('/search', (req, res, next) => {
    console.log(req.query);
    res.send('Result is here');
});

// /users/1234/posts/p9999
app.use('/users/:userid/posts/:postid', (req, res, next) => {
    console.log(req.params);
    res.send('req.params check console');
});

app.use('/add-product', (req, res, next) => {
    res.send(fs.readFileSync('add-product.html', 'utf-8'));
});


app.use('/save-product', (req, res, next) => {
    console.log('save product--------');
    console.log(req.body);
    res.send('save successfully');
});


app.listen(3000, () => console.log('listen on 3000'));
