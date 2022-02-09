require('dotenv').config();

const db = require('../models');
const fs = require('fs');

const userSeeds = JSON.parse(
    fs.readFileSync(`${__dirname}/users.json`)
)


const seedUsers = async() => {
    try {
        await db.User.create(userSeeds);
        console.log("Data Created")
    } catch (error) {
        console.log (error)
    }
}


const deleteUser = async() => {
    try {
        await db.User.deleteMany();
        console.log("deleted")
    } catch (error) {
        console.log(error);
    }
}

// seedUsers()
// deleteUser()

module.exports = {
  usersJSON : require('./users.json')
}