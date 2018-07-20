const express = require('express');
const app = express();
const postList = require('./views/postList');
const postDetail = require('./views/postDetail');
const db = require('./db');

app.use(express.static('public'));

app.get('/', async (req, res, next) => {
  try {
    const dataArr = await db.getAllPosts();
    res.send(postList(dataArr));
  } catch(err) {
    next(err);
  }
});

app.get('/:id', async (req, res, next) => {
  try {
    const post = await db.getPostById(req.params.id);
    res.send(postDetail(post));
  } catch(err) {
    next(err);
  }
})




module.exports = app;