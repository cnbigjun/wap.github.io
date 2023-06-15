const fs = require('fs');
const server = require('http').createServer();

server.on('request',(req,res)=>{
    const img= require('fs').createReadStream('./res.jpg');
    img.pipe(res);
}).listen(8080,()=>console.log('server is running'));
