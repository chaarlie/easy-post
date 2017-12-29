const cors = require('cors');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');

let validateCredentials = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  User.findOne({username:  username, password:  password}, (err, user) => {
    if(err) {
      res.res.status(500).json({mesage: err.message});
    }
    if(!user) {
      res.status(401).json({mesage: 'Invalid credentials'});
    }
    else {
      let token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + 60, data: 'foobar'}, 'secret');
      res.status(200).json({message:'Login succesful', token: token});
    }
  });
};

module.exports = {
  validateCredentials
}