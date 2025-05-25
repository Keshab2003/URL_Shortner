const express = require('express');
// import { type } from './../node_modules/path-to-regexp/dist/index.d';
// import { Timestamp } from './../node_modules/bson/src/timestamp';
const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    shortUrl : {
        type:String,
        required: true
    },
    redirect : {
        type: String,
        required: true
    },
    visitHistory : [{timestamp:{type:Number}}],
    
},{timestamp:true});


const URL = mongoose.model('url' , urlSchema);

module.exports = URL;