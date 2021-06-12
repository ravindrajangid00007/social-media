const User = require("../models/user");

module.exports.profile = function (req, res) {
    return res.render('profile', {
        title: "Profile"
    });
}

module.exports.signUp = function (req, res) {
    return res.render('signUP', {
        title: "signUp"
    });
}

module.exports.signIn = function (req, res) {
    return res.render('signIn', {
        title: "signIn"
    });
}

// get the sign up data
// var popup = require('popups');
module.exports.create = function (req, res) {
    if (req.body.password != req.body.confirm_password) {
        // popup.alert('password are not matching') ;
        console.log("password is not matching");
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { console.log('error in finding user in signing up'); return }

        if (!user) {
            User.create(req.body, function (err) {
                if (err) { console.log('error in creating user while signup'); return }

                return res.redirect('/users/sign-in');
            });
        } else {
            // popup.alert('user is alredy present in database');
            console.log("user is already present");
            return res.redirect('back');
        }
    });

}


// sign in and create a session for user
module.exports.createSession = function (req, res) {
    //todo letter
}