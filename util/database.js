/**
 * Created by Laggo on 16/1/26.
 */
var mongoose = require("mongoose");
var opts = {user: '', pass: '' }
var db = function (dbname) {
    return mongoose.createConnection('localhost',dbname);
}
module.exports = db;