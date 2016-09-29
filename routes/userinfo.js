var express = require('express');
var db = require('../util/db.js');
var router = express.Router();

router.get('/me', function(req, res){

  var queryData = 'SELECT userid, nickname, userprofileimage ';
  queryData += 'FROM user ';
  queryData += 'WHERE userid = ? ';

  db.query(queryData, req.user.userid, function (err, results) {
      if (err) {
        res.send(500);
      }
      res.json(results);
  });
});



module.exports = router;
