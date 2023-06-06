const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');
console.log(news);

app.get('/', (req, res) => {
    res.send('Dragon is running');
});

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    if (id === 0) {
        res.send(news);
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id)
        res.send(categoryNews);
    }
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    console.log(selectedNews);
    res.send(selectedNews);
})

app.get('/categories', (req, res) => {
    res.send(categories);
})


app.listen(port, () => {
    console.log(`Dragon API is running on port ${port}`);
})