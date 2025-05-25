const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect(process.env.URI)
    .then(()=>{
        console.log(`connect to database`);
    })
    .catch(()=>{
        console.log(`error connect to database`);
    })

};

module.exports = connectDB;
