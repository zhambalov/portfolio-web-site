/* 
   File: index.js
   Student: Aldar Zhambalov
   StudentID: 301275745
   Date: September 30, 2023
*/


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET portfolio page. */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'My Portfolio' });
});

/* GET skills page. */
router.get('/skills', function(req, res, next) {
  res.render('skills', { title: 'My skills' });
});

module.exports = router;
