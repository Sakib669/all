const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());
const data = require('./data/data.json')

app.get('/', (req, res) => {
    res.send(data);
  })

app.get('/:id', (req,res) => {
  const id = parseInt(req.params.id);
  const chefData = data.chefs.find(chef => chef.id === id);
  res.send(chefData);
})
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })