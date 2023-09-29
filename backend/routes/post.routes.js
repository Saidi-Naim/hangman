const express = require('express');
const { setPosts, getPosts } = require('../controllers/post.controller');
const router = express.Router();

router.post('/', setPosts);
router.get('/', getPosts);

module.exports = router;
