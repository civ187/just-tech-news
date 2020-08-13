//imports the Sequelize constuctor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// Creates connection to our database, must contain your MySql username and Password
// const sequelize = new Sequelize ('just_tech_news_db', 'root', 'CC@0805xx#1973', 
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,
    {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;