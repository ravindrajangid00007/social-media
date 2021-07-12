const express = require('express');
const route = express.Router();

route.use('/posts' , require('./posts'));


module.exports = route ;