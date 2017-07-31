var express = require('express');
var controller = require('./post.controller');
var router = express.Router();

router.get('/', controller.fetChAll);
router.post('/', controller.createPost);

module.exports = router;