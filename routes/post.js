const express = require('express');

const controller = require('../controllers/post-controller');

const router = express.Router();

// GET /feed/posts
router.get('/posts', controller.getPosts);

// POST /feed/post
router.post('/post', controller.createPost);

module.exports = router;