const timeAgo = require('node-time-ago');

module.exports = function(post) {
  return `<html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <a href="/posts"><header><img src="/logo.png"/>Wizard News</header></a>
      
        <div class='news-item'>
          <p>
            <span class="news-position">${post.id}. ▲</span>${post.title}
            <small>(by ${post.name})</small>
          </p>
          <p class="content">${post.content}</p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${timeAgo(Date.now() + Date.now() - post.date)}
          </small>
        </div>

    </div>
  </body>
</html>`;
}