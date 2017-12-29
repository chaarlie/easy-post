const express = require('express');
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb://localhost/easyPost';
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const User = require('./models/user');  

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const login = require('./routes/login/index');
const signup = require('./routes/signup/index');
const post = require('./routes/post/index');
const tags = require('./routes/tags/index');

app.use('/api/login', login);
app.use('/api/signup', signup);
app.use('/api/post', post);
app.use('/api/tags', tags);

mongoose.Promise = global.Promise;
mongoose.connect(url); 

app.set('port', 8080);
app.listen(app.get('port'));
console.log(`app listening at port: ${app.get('port')}`);

module.exports = app;