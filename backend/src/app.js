const path = require('path');
const express = require('express');
const app  = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const data = require('../products.json');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '..','build')));

app.get('/products/1', (req,res) => {
    res.status(200).send(data.products[0]);
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;