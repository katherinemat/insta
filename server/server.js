'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Controll-Allow-Origin", "*");
  res.header("Access-Controll-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use('/api', require('./routes/test'));
// app.use('/api', require('./routes/stories'));
// app.use('/api', require('./routes/police'));

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log('listening on port ', port);
});

module.exports = app;
