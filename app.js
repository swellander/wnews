const express = require('express');
const app = express();
const postList = require('./views/postList');
const db = require('./db');



app.get('/', async (req, res, next) => {
  try {
    const dataArr = await db.getAllPosts();
    res.send(postList(dataArr));
  } catch(err) {
    next(err);
  }
})




module.exports = app;