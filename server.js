// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
app.listen(3000);

// Root Route
app.get('/', function (req, res) {
    res.render('index');
});

const routes = require('./routes'); // Update the path accordingly
app.use('/', routes);
