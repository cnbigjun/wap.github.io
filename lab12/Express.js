const express=require('express');
const path = require("path");
const app=express();

const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

function middleware(req,res,next){
    console.log('this is global middleware');
    next();
}
app.use(middleware);
app.use(express.static('public'));







app.use('/user',userRouter);
app.use('/product',productRouter);





app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})
app.use(function (err, req, res, next) {
    res.status(500).sendFile(path.join(__dirname, 'views', '500.html'));
});



app.listen(3000,()=>console.log('server is running'))