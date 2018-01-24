var express = require('express');
var router = express.Router();
router.use('/projects', require('./projects.js'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
