const fs = require('fs');
const server = require('http').createServer();

server.on('request',(req,res)=>{
    fs.createReadStream('./res.jpg').pipe(res);
});
server.listen(8080);


