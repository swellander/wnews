const timeAgo = require('node-time-ago');

module.exports = (dataArr) => {
  return `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <a href="/posts"><header><img src="/logo.png"/>Wizard News</header></a>
      ${dataArr.map(post => {
  
        return `
        <div class='news-item'>
          <p>
            <span>${post.id}. </span>
            <span class="news-position"><a href="/posts/${post.id}">${post.title}</a>. ▲</span>${post.title}
            <small>(by ${post.name})</small>
          </p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${timeAgo(Date.now() + Date.now() - post.date)}
          </small>
        </div>`}
      ).join('')}
    </div>
  </body>
  </html>`;
}

