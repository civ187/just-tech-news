//imports the Sequelize constuctor from the library
const Sequelize = require('sequelize');

// Creates connection to our database, must contain your MySql username and Password
const sequelize = new Sequelize (process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;