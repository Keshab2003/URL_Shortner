const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const connectDB = require('./config/connect');
const handleLink = require('./controller/handleLink');
const URL = require('./model/url');
const urlRoutes = require('./routes/url.routes');
const handleShortUrl = require('./controller/handleShortUrl')

connectDB();
app.use(express.json());

app.use('/url' , urlRoutes);


app.use('/url' , urlRoutes);




const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
    console.log(`The server is running at ${PORT}`);
});
