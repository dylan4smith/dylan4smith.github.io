'use strict';

const express = require('express');
const app = express();

// Exercise 1
app.get('/math/circle/:r', (req, res) => {
  let radius = parseFloat(req.params.r);
  if (isNaN(radius) || radius < 0) {
    res.type('text').status(400).send('Error: Radius must be a non-negative number.');
    return;
  }

  let area = Math.PI * radius * radius;
  let circumference = 2 * Math.PI * radius;

  res.type('json').send({
    area: area,
    circumference: circumference
  });
});

// Exercise 2
app.get('/hello/name', (req, res) => {
  let first = req.query['first'];
  let last = req.query['last'];
  let missing = [];

  if (!first) missing.push('first');
  if (!last) missing.push('last');

  if (missing.length > 0) {
    let errorMessage = 'Missing Required GET parameter' + (missing.length > 1 ? 's: ' : ': ') + missing.join(', ');
    res.type('text').status(400).send(errorMessage);
  } else {
    res.type('text').send(`Hello ${first} ${last}`);
  }
});

// Serve static files from "public"
app.use(express.static('public'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
