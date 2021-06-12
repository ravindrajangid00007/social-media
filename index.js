const express = require('express');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded()) ;
app.use(cookieParser());
app.use('/', require('./routes/index'));

const db = require('./config/mongoose');
const User = require('./models/user');


app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running server: ${err}`);
        return;
    }

    console.log(`Server is running on ${port}`);
});