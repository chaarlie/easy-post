
const  User = require('../../models/user');

exports.register = (req, res, next) => {
    let entry = new User({
      firstName: req.body.user.firstName,
      lastName: req.body.user.lastName,
      username: req.body.user.username,
      password: req.body.user.password,
      email: req.body.user.email,
      phone: req.body.user.phone
    });
    
    User.findOne({
        username: req.body.user.username
    }).exec((err, user) => {
        if(err){
            console.log(err);
        }
        if(user){
            res.end('Username already in use.');
        }
        else{
            entry.save((err) =>{
                if(err){
                    console.log("Error creating account", err);
                    res.end('error creating account');
                }
                else{
                    res.end('Account created successfully');
                }
            });  
       } 
  });
};