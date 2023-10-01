/* 
   File: users.js
   Student: Aldar Zhambalov
   StudentID: 301275745
   Date: September 30, 2023
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
