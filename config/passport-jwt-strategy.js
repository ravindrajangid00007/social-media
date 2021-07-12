const passport = require('passport');

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log("jwt payload at confif jwt",jwt_payload);
    User.findById({_id: jwt_payload._id}, function(err, user) {
        if (err) {
            console.log(err);
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {

            return done(null, false);
        }
    });
}));


module.exports = passport ;