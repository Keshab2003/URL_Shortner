const URL = require('../model/url');

const handleShortUrl = async (req,res) =>{
    const shortid = req.params.shorturl;
    const entry = await URL.findOneAndUpdate({shortUrl : shortid},
        {$push:{visitHistory:{timestamp:Date.now()}}},
        {new:true}
    );

    if(!entry){
        return res.status(404).json({message : "URL not found"});
    }

    res.redirect(entry.redirect);
}

module.exports = handleShortUrl;

// const shortid = req.params.shortid;
//     const entry = await URL.findOneAndUpdate({shortUrl:shortid},
//         {$push:{visitHistory:{timestamp:Date.now()}}},
//         {new:true}
//     );

//     if (!entry) {
//         return res.status(404).send('Short URL not found');
//     }

//     res.redirect(entry.redirect);