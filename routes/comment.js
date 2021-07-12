const express = require('express') ;
const passport = require('passport');
const route = express.Router() ;
const commentController = require('../controllers/comment_controller');
route.post('/create' ,passport.checkAuthentication, commentController.create);
route.get('/destroy/:id', passport.checkAuthentication, commentController.destroy);


module.exports = route;