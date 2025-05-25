const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const connectDB = require('./config/connect');
const handleLink = require('./controller/handleLink');
const URL = require('./model/url');
const urlRoutes = require('./routes/url.routes');
const handleShortUrl = require('./controller/handleShortUrl')
// const home = require('./views/home.ejs');

app.set("view engine",'ejs');
app.use(express.urlencoded({extended:false}));

connectDB();
app.use(express.json());

app.get('/home',async (req,res) => {
    const urls = await URL.find();
    res.render('home' , {urls:urls});
})
app.use('/url' , urlRoutes);


app.use('/url' , urlRoutes);




const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
    console.log(`The server is running at ${PORT}`);
});
