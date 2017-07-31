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
const register = require('./routes/register/index');
const post = require('./routes/post/index');
const tags = require('./routes/tags/index');

app.use('/api/login', login);
app.use('/api/register', register);
app.use('/api/post', post);
app.use('/api/tags', tags);

app.get('/test', function(req, res) {
   const ob = [
     {"key":"value"},
     {"key":"value"}
   ];
   res.json(ob);
});

mongoose.Promise = global.Promise;
mongoose.connect(url); 

app.set('port', 8080);
app.listen(app.get('port'));
console.log(`app listening at port: ${app.get('port')}`);