const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(new LocalStrategy(
    function (email, password, done) {
        User.findOne({ email: email }, function (err, user) {
            if (err) { return done(err); }

            if (!user) {
                return done(null, false);
            }

            if (user.password != password) {
                return done(null, false);
            }

            return done(null, user);
        });
    }
));


//serializing the user to decide which key is yo be kept in cookies
passport.serializeUser(function(user , done) 
{
    done(null , user.id) ;
});

//seserializeing the user from the key in the cookies

passport.deserializeUser(function(id , done) {
    User.findById(iid , function(err , user) {
        if(err) {console.log("error") ;
        return done(err)
    }
    return done(null , user)  ;
    });
});
module.exports = passport ; 