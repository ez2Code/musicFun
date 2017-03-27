/**
 * Created by Levy on 2017/3/27.
 */

var express = require('express');
var fs = require('fs');
var router = express.Router();
var config = require('../config/config');

router.get('/video/*',function (req, res, next) {
    var req_path = req.originalUrl.substr(9);
    var filePath = config.mediaPath + req_path;
    var file = fs.createReadStream(filePath);
    res.writeHead(200);
    file.pipe(res);
});
router.get('/audio/*',function (req, res, next) {
    var req_path = req.originalUrl.substr(9);
    var filePath = config.mediaPath + req_path;
    var file = fs.createReadStream(filePath);
    res.writeHead(200);
    file.pipe(res);
});

module.exports = router;