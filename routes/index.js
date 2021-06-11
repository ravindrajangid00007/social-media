const express = require('express') ;
const route = express.Router() ;
const homeController = require('../controllers/home_controller') ;

console.log('i am routes')
route.get('/' , homeController.home) ;

module.exports = route ;