<<<<<<< HEAD
const path = require('path');
=======
const path = require('path'); // module 14
>>>>>>> master
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
=======
app.use(express.static(path.join(__dirname, 'public')));  // module 14
>>>>>>> master

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});