/**
 * Created by Levy on 2017/3/24.
 */

var express = require('express');
var fs = require('fs');
var router = express.Router();
var config = require('../config/config');

/* GET home page. */
router.get('/video', function(req, res, next) {
    var filePath = './views/video.html';
    var file = fs.createReadStream(filePath);
    res.writeHead(200);
    file.pipe(res);
});

router.get('/audio', function(req, res, next) {
    var filePath = './views/audio.html';
    var file = fs.createReadStream(filePath);
    res.writeHead(200);
    file.pipe(res);
});

var index=0;

router.post('/changResource',function (req, res, next) {
    fs.readdir(config.audioDir, function (err, files) {
        if (err) {
            console.log(err);
            return;
            res.json({'success':false,'msg':err})
        }
        var count = files.length;
        if(index>0){
            index-=1;
        }else {
            index=count-1;
        }
        console.log(files[index]);
        res.json({'success':true,'src':files[index]});
    });
});

router.post('/getAudioList',function (req, res) {
    fs.readdir(config.audioDir, function (err, files) {
        if (err) {
            console.log(err);
            return;
            res.json({'success':false,'msg':err})
        }
        var count = files.length;
        if(index>0){
            index-=1;
        }else {
            index=count-1;
        }
        var list = [];
        for(var i=0;i<files.length;i++){
            list.push(files[i]);
        }
        res.json({'success':true,'list':list});
    });
});

module.exports = router;
