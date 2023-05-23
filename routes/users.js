var express = require('express');
var router = express.Router();
var connection = require('../connection');

router.get('/', function(req, res, next) {
  var sql = "SELECT * FROM users";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;
