const express = require('express');
const route = express.Router();
const passport = require('passport');
const postsApi = require("../../../controllers/api/v1/posts_api");
route.get('/' , postsApi.index);
route.get('/delete/:id' , passport.authenticate('jwt', { session: false }) ,postsApi.delete);

module.exports = route ;