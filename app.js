const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/post');
const productRoutes = require('./routes/product');
const elasticRoutes = require('./routes/search');
import MOCKPRODUCTS from './mock/productMock';
import { initialIndex } from './services/elasticService';

initialIndex(MOCKPRODUCTS);

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use('/post', routes);
app.use('/', productRoutes);
app.use('/elastic', elasticRoutes);


app.listen(8080);