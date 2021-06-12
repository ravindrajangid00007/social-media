const express = require('express') ;
const route = express.Router() ;

const userController = require('../controllers/users_controller');
route.get('/profile' , userController.profile) ;

route.get('/sign-up', userController.signUp);
route.get('/sign-in', userController.signIn);
route.post('/create' , userController.create);
route.post('/create-session' , userController.createSession);
module.exports = route ;