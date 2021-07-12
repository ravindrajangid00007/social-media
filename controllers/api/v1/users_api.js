const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

module.exports.createSession = async function(req,res) {
    let user = await User.findOne({email: req.body.email});

    if(!user || user.password != req.body.password) {
        return res.status(422).json({
            message: "Invalid username or password"
        });
    }

    return res.status(200).json({
        message: "Sign in successfully",
        data: {
            token: jwt.sign(user.toJSON() , 'secret', { expiresIn: '1h'})
        }
    });
}