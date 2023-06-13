const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html>');
        res.write('<head><title> Image </title></head>');
        res.write('<body><img src="./res.jpg" alt=""></body>');
        res.write('</html>');
        res.end();
    } else if (url === '/res.jpg') {
        const imagePath = path.join(__dirname, 'res.jpg');
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal server error');
                return;
            }
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(data);
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not found');
    }
}).listen(3100);
