var mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
var friendlinkSchema = new mongoose.Schema({
    name: String,
    http: String
});
module.exports = function(dbname){
    return require('../util/database')(dbname).model('friendlink', friendlinkSchema);
}