const path = require("path");
const express = require('express');

const router = express.Router();


router.get('/',(req,res)=>{
    res.send('hello express');
})
router.get('/users',(req,res)=>{
    res.send('hello users!!!!');
})

router.post('/users',(req,res)=>{
    res.send('hello users!!!!------post');
})

module.exports=router;