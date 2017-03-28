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

var audio_index=0;

router.post('/changAudio',function (req, res, next) {
    fs.readdir(config.mediaPath+'/audio', function (err, files) {
        if (err) {
            console.log(err);
            res.json({'success':false,'msg':err});
            return;
        }
        var count = files.length;
        if(audio_index>0){
            audio_index-=1;
        }else {
            audio_index=count-1;
        }
        console.log(files[audio_index]);
        res.json({'success':true,'src':files[audio_index]});
    });
});

router.post('/getAudioList',function (req, res) {
    fs.readdir(config.mediaPath+'/audio', function (err, files) {
        if (err) {
            console.log(err);
            res.json({'success':false,'msg':err});
            return;
        }
        res.json({'success':true,'list':files});
    });
});

router.post('/getVideoList',function (req, res) {
    fs.readdir(config.mediaPath+'/video', function (err, files) {
        if (err) {
            console.log(err);
            res.json({'success':false,'msg':err});
            return;
        }
        res.json({'success':true,'list':files});
    });
});

module.exports = router;
