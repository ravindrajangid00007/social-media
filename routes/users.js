const express = require('express') ;
const route = express.Router() ;
const passport = require('passport');
const userController = require('../controllers/users_controller');
route.get('/profile' , passport.checkAuthentication ,userController.profile) ;

route.get('/sign-up', userController.signUp);
route.get('/sign-in', userController.signIn);
route.post('/create' , userController.create);
route.post('/create-session' , passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
) ,userController.createSession);
route.get('/logout' , userController.destroySession)
module.exports = route ;