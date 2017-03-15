var mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
var webSchema = new mongoose.Schema({
    name: String,
    path: String,
    keywords: String,
    description: String
});
module.exports = function(dbname){
    return require('../util/database')(dbname).model('web', webSchema);
}