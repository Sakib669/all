const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello! from my ever server');
})

app.get('/data', (req, res) => {
    res.send('more data coming soooon');
})

app.listen(port, () => {
    console.log(`my first server is running on port: ${port}`)
})