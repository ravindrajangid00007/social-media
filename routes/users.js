const express = require('express') ;
const route = express.Router() ;

const userController = require('../controllers/users_controller');
route.get('/profile' , userController.profile) ;


module.exports = route ;