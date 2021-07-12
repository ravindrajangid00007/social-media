const { Router } = require('express');
const express = require('express');
const route = express.Router();
const homeController = require('../controllers/home_controller');

console.log('i am routes')
route.get('/', homeController.home);
route.use('/users', require('./users'));
route.use('/posts', require('./posts'));
route.use('/comments', require('./comment'));

route.use('/api' , require('./api'));

module.exports = route;