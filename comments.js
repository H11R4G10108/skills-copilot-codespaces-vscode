// Create web server
// Create a web server that listens on port 3000. The server should respond to a request to /comments with a JSON object that represents a list of comments. Each comment should have an id, author, and content. The id should be unique for each comment.

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  const comments = [
    { id: 1, author: 'author1', content: 'content1' },
    { id: 2, author: 'author2', content: 'content2' },
    { id: 3, author: 'author3', content: 'content3' }
  ];
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});