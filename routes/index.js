var express = require('express');
var fs = require('fs');
var router = express.Router();
var recorder = require('../dao/recorder');

/* GET home page. */
router.get('/', function(req, res, next) {
  var real_ip = req.get("X-Real-IP") || req.get("X-Forwarded-For") || req.ip;
  recorder.recordIp([real_ip,'/index']);
  var filePath = './views/index.html';
  var file = fs.createReadStream(filePath);
  res.writeHead(200);
  file.pipe(res);
});

module.exports = router;
