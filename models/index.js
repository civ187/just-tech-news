const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.belongsToMany(Post, {  // ============================
  through: Vote,            // With these two .belongsToMany() methods in place, we're allowing
  as: 'voted_posts',        // both the User and Post models to query each other's information in the
  foreignKey: 'user_id',
  onDelete: 'SET NULL'     // context of a vote
});                         //  
                            // the Vote table needs a row of data to be a unique pairing so
Post.belongsToMany(User, {  // that it knows which data to pull in when queried on. 
  through: Vote,            // So because the user_id and post_id pairings must be unique, 
  as: 'voted_posts',        // we're protected from the possibility of a single user voting 
  foreignKey: 'post_id',
  onDelete: 'SET NULL'     // on one post multiple times.  This layer of protection is called a foreign key constraint.
});                         //===============================

// Vote associations
Vote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

// Comment associations
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});


module.exports = { User, Post, Vote, Comment };