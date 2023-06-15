const express=require('express');
const path = require("path");
const app=express();

const user = express.Router();
const product = express.Router();

function middleware(req,res,next){
    console.log('this is global middleware');
    next();
}
app.use(middleware);
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send('hello express');
})
user.get('/users',(req,res)=>{
    res.send('hello users!!!!');
})
product.get('/products',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','product.html'));
})

user.post('/users',(req,res)=>{
    res.send('hello users!!!!------post');
})
product.post('/products',()=>console.log('this is a middleware of part'),(req,res)=>{
    res.send('hello products! ----post');
})




app.use('/',user);
app.use('/',product);
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