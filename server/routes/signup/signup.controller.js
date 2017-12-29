
const  User = require('../../models/user');

let create = (req, res) => {
    let newUser = new User(req.body);
    let username = req.body.username;

    User.findOne({username}, (err, foundUser) => {
        if(err) {
            res.status(500).json({ message: err.message });
        }
        if(foundUser) {
           res.status(303).json({ message: 'Username already in use'});
        }
        else {
           newUser.save((saveUserError) => {
               if(saveUserError) {
                    res.status(500).json({ message: saveUserError.message});
                }
                else {
                    res.json({good: true, message: 'Account created successfully'});
                }
            });  
       } 
  });
};

module.exports = {
    create
};