const cors = require('cors');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');

exports.login = (req, res, next) =>{
  let username = req.body.username;
  let password = req.body.password;

  User.findOne({username:  username, password:  password}, (err, doc) => {
    if(err){
      console.log(err);
    }
    if(!doc){
      res.end("Invalid credentials");
    }
    else{
      let token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + 60, data: 'foobar'}, 'secret');
      res.status(200).json({ token: token});
    }
  });
};