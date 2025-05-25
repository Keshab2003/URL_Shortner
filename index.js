const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const connectDB = require('./config/connect');
const handleLink = require('./controller/handleLink');
const URL = require('./model/url');

connectDB();
app.use(express.json());

app.get('/url', (req, res) =>{
    console.log(`hello gandu`)
});

app.post('/url' , handleLink);


app.get('/:shortid' , async (req,res) =>{
    const shortid = req.params.shortid;
    const entry = await URL.findOneAndUpdate({shortUrl:shortid},
        {$push:{visitHistory:{timestamp:Date.now()}}},
        {new:true}
    );

    if (!entry) {
        return res.status(404).send('Short URL not found');
    }

    res.redirect(entry.redirect);
})




const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
    console.log(`The server is running at ${PORT}`);
});
