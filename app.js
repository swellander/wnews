const express = require('express');
const app = express();
const postList = require('./views/postList');
const postDetail = require('./views/postDetail');
const db = require('./db');

app.use(express.static('public'));

app.get('/posts', async (req, res, next) => {
  try {
    const dataArr = await db.getAllPosts();
    res.send(postList(dataArr));
  } catch(err) {
    next(err);
  }
});

app.get('/posts/:id', async (req, res, next) => {
  try {
    const post = await db.getPostById(req.params.id);
    res.send(postDetail(post));
  } catch(err) {
    next(err);
  }
})




module.exports = app;