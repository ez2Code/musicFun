var pool = require('./pool');

var register = function(data,callback){
    var params = [data.user_id,data.passwd];
    var sql = 'insert into users(user_id,passwd) values(?,?)';
    pool.execute(sql,params,function(err,result){
        if (err) {
            callback('-1');
        }else{
            callback(null);
        }
    });
};

var validate = function(data,callback){
    var params = [data.user_id,data.passwd];
    var sql = 'select user_id from users where user_id=? and passwd=?';
    pool.execute(sql,params,function(err,rows,fields){
        if (err) {
            callback('-1');
        }else{
            if(rows.length>0){
                callback(null);
            }else{
                callback('1');
            }
        }
    });
};

module.exports.register = register;
module.exports.validate = validate;