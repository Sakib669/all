const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());

const lists = require('./data/lists.json');

app.get('/', (req, res) => {
    res.send(lists);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})