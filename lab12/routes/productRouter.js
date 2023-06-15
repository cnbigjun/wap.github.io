const path = require("path");
const express = require('express');

const router = express.Router();


router.get('/products',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','product.html'));
})

router.post('/products',()=>console.log('this is a middleware of part'),(req,res)=>{
    res.send('hello products! ----post');
})

module.exports=router;