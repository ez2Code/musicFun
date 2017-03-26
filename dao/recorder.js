/**
 * Created by Levy on 2017/3/26.
 */
var pool = require('./pool');

var recordIp = function (data) {
    var sql = 'insert into view_history(ip,page) values(?,?) ON DUPLICATE KEY UPDATE times=tims+1';
    pool.execute(sql,data,function(err,rows,fields){
        if (err) {
            console.log(err)
        }
    });
};

module.exports.recordIp = recordIp;