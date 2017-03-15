var mongoose = require("mongoose");
var articleSchema = new mongoose.Schema({
    title: String,
    tag: String,
    keywords: String,
    content: String,
    type: String,
    description: String,
    time: String,
    addTime: {type: Date, default: Date.now}
});
module.exports = function(dbname){
    return require('../util/database')(dbname).model('article', articleSchema);
}