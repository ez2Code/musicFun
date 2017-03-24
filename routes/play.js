/**
 * Created by Levy on 2017/3/24.
 */

var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/video', function(req, res, next) {
    var filePath = './views/video.html';
    var file = fs.createReadStream(filePath);
    res.writeHead(200);
    file.pipe(res);
});

module.exports = router;
