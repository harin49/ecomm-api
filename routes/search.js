// import { Router } from 'express';

// import { getSearch } from '../controllers/search-controller';

const express = require('express');
const controller = require('../controllers/search-controller');

const router = express.Router();

//create a sample request to index data
router.post('/index', controller.index);

//pass search query to search function
router.get('/search', controller.search);

module.exports = router;
