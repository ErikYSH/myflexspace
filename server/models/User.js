const mongoose = require ("mongoose")

const Schema = new mongoose.Schema({
    firstName : String,
    lastName: String,
})

module.exports = mongoose.model('User', Schema);