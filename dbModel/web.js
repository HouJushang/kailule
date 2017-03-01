var mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
var webSchema = new mongoose.Schema({
    name: String,
    path: String,
});
module.exports = function(dbname){
    if(!dbname){
        dbname = 'kll'
    }
    console.log('dbname:'+dbname)
    return require('../util/database')(dbname).model('web', webSchema);
}