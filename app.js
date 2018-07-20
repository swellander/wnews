const express = require('express');
const app = express();
const postList = require('./views/postList');
const db = require('./db');



app.get('/', (req, res) => {
  res.send(postList([]));
})




module.exports = app;