const port = 8000;
const express = require('express');
const app = express();

app.route('/')
    .get((req, res, next) => {
        return res.send({
            'message': 'Hello, world.'
        });
    });
    
app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`API is listening on port: ${port}`);
});