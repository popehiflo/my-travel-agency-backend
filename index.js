const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json('Hi, response to GET /');
});

app.listen(8080, () => {
  console.log("I'm here ... I'm server!");
});


