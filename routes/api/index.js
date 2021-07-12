const express = require('express');
const route = express.Router();
route.use('/v1' , require('./v1'));  
route.use('/v2' , require('./v2'));
module.exports = route ;