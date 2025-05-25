const express = require('express');
const router = express.Router();
const handleLink = require('../controller/handleLink');
const handleShortUrl = require('../controller/handleShortUrl');

//assigning new url to DB
router.post('/',handleLink);

//get the link of the shorturl being made
router.get('/:shorturl',handleShortUrl);

module.exports = router;
