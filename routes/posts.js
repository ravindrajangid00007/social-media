const express = require('express') ;
const passport = require('passport');
const route = express.Router() ;
const postController = require('../controllers/posts_controller');

route.post('/create-post',passport.checkAuthentication ,postController.create);
route.get('/destroy/:id', passport.checkAuthentication, postController.destroy);

module.exports = route ;