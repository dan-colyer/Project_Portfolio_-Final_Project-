var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, name: "MoneyCashBoard", url: "somewhere"},
    {id: 2, name: "Project2", url: "somewhere-else"},
  ]);
});

module.exports = router;
