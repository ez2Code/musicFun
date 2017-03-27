var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var filePath = './views/index.html';
  var file = fs.createReadStream(filePath);
  res.writeHead(200);
  file.pipe(res);
});

module.exports = router;
