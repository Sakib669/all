const express = require('express');
const phones = require('./phones.json');
const app = express();
const cors = require('cors');
const port = 6969;

app.use(cors());

app.get('/', (req, res) => {
  res.send('my phone information coming soon কুত্তা চোর কুদ্দুস');
})

app.get('/phones', (req, res) => {
  res.send(phones);
})

app.get('/phones/:id', (req, res) => {
    const id = parseFloat(req.params.id);
    console.log('i need data for id:', id);
    const phone = phones.find(phone => phone.id === id || {});
    res.send(phone);

})

app.listen(port, () => {
  console.log(`my phone server is running on port: ${port}`);
})