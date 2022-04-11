const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');

app.use(express.json())

//const User = require('./model/userSchema');

app.use(require('./router/auth'));

const PORT = process.env.PORT;



//Middleware

const middleware = (req, res, next) => {
    console.log(`Hello My Middleware`);
    next();
}

/*
app.get('/', (req, res) => {
    res.send(`Hello Mern Stack`);
})
*/
app.get('/about', middleware, (req, res) => {
    res.send(`Hello Mern Stack. This is About Page`);
})

app.get('/contact', (req, res) => {
    res.send(`Hello Mern Stack. This is Contact Page`);
})

app.get('/signin', (req, res) => {
    res.send(`This is Sign is Page`);
})

app.get('/signup', (req, res) => {
    res.send(`This is Sign Up Page`);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})