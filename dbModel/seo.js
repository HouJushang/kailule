var mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
var seoSchema = new mongoose.Schema({
    title: String,
    description: String,
    keywords: String
});
module.exports = function(dbname){
    return require('../util/database')(dbname).model('seo', seoSchema);
}