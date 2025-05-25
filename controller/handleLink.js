const express = require('express');
const shortid = require('shortid');
const URL = require('../model/url');

const  handleLink = async (req, res) =>{
    const body = req.body;
    if(!body || !body.url){
        return res.status(400).json({error: 'Error ! request body is missing'});
    }
    const shortId = shortid();
    await URL.create({
        shortUrl : shortId,
        redirect : body.url,
        visitHistory:[]
    })

    return res.json({id:shortId});
}

 

module.exports = handleLink;
