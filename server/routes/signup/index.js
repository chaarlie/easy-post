const express = require('express');
const signupController = require('./signup.controller');
const router = express.Router();

router.post('/', signupController.create);

module.exports = router;