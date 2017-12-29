const express = require('express');
const postController = require('./post.controller');
const router = express.Router();


router.get('/:id', postController.fetch);
router.get('/', postController.fetchAll);
router.post('/', postController.create);
router.patch('/:id', postController.update);
router.delete('/:id', postController.deleteOne);

module.exports = router;