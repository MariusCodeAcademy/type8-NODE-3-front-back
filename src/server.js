const express = require('express');
const cors = require('cors');
const { port } = require('./config');
const { findById } = require('./helper/helper');
const { posts } = require('./data/db');
const app = express();

// Middleware
app.use(cors()); // nebutu CORS error jungianti is front
app.use(express.json()); // BA gali matyti atkoduota json formatu atsiustus duomenis

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
  const found = findById(posts, postId);
  const ats = found === false ? 'User not found' : found;
  response.json(ats);
});

app.post('/api/posts', (request, response) => {
  const body = request.body;
  console.log('body ===', body);
  response.json('trying to create post');
});

app.listen(port, () => console.log('Heloo express is online', port));
