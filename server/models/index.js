const mongoose = require('mongoose');
const db = mongoose.connection;
const dbUrl = process.env.MONGO_URL;


mongoose 
    .connect(dbUrl)
    .then(() => {
        console.log(`mongo db connected at `)
    })
    .catch ((err) => { console.log(`Failed to connect`)})


module.exports = {
    User: require('./User')
}