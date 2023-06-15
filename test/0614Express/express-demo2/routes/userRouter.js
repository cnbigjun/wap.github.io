const express = require('express');
const router = express.Router();

//middlewares
router.get('/add-user', (req, res, next) => {
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="add-user" method="post">
        <p>username <input name="username" /></p>
        <p>password <input name="password" /></p>
        <button>Save</button>
    </form>
</body>
</html>`);
});

router.post('/add-user', (req, res, next) => {
    res.json(req.body);
});

module.exports = router;