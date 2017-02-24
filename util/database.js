/**
 * Created by Laggo on 16/1/26.
 */
var mongoose = require("mongoose");
var opts = {user: '', pass: '' }
var db = function (dbname) {
    return mongoose.createConnection('localhost',dbname);
}
console.log('数据库连接成功')
module.exports = db;