const express = require('express');
const route = express.Router();
const postsApi = require("../../../controllers/api/v2/posts_api");
route.get('/' , postsApi.index);


module.exports = route ;