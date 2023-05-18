const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/post');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use('/post', routes);

app.listen(8080);