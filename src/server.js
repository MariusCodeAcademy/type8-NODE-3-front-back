const express = require('express');
const cors = require('cors');
const { port } = require('./config');
// const { lg } = require('./helper/helper');
const app = express();

const { posts } = require('./data/db');

app.get('/', (request, response) => {
  response.json('Hello world');
});

// posts routes
app.get('/api/posts', postsController);

function postsController(request, response) {
  response.json(posts);
}

app.get('/api/posts/3', (request, response) => {
  const postId = 3;
  // panaudoti getPostById() server.js su posts ir postId
  response.json(posts);
});

app.listen(port, () => console.log('Heloo express is online', port));
