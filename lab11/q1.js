const dns = require('dns');

dns.resolve4('www.miu.edu', (err, addresses) => {
    if (err) {
        console.log(err);
    } else {
        console.log(addresses);
    }
});
