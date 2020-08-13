const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create our User Model
class User extends Model {}

// define table columns and configuration
User.init(
    {//TABLE COLUMN DEFINITIONS GO HERE
        //define and id column
        id: {
            type: DataTypes.INTEGER,    //use the special Sequelize DataTypes object provide what type of data it is
            allowNull: false,           //this is the equivalent of SQL's `NOT NULL` option
            primaryKey: true,           //insturct that this is the Primary Key
            autoIncrement: true         //turn on auto increment
        },

        //define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        //define and email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,// there cannot be any duplicate email values in this table
            validate: {  // if allowNull is set to false, we can run our data through validators before creating the table data
                isEmail: true
            }
        },
        
        //define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]//this meand the password must be at least four characters long
            }

        }
    },

    {
        // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))
        sequelize,              //pass in our imported sequelize connection (the direct connection to our database)
        timestamps: false,      //dont automatically create createdAt/updatedAt timestamp fields
        freezeTableName: true,  //dont pluralize name of database table
        underscored: true,      //use underscores instead of camel-casing (i.e `comment_text` and not `commentText`)
        modelName: 'user'       //make it sour our model name stays lowercase in the database
    }
);

module.exports = User;