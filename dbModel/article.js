var mongoose = require("mongoose");
var articleSchema = new mongoose.Schema({
    title: String,
    tag: String,
    content: String,
    description: String,
    time: String,
    addTime: {type: Date, default: Date.now}
});
module.exports = function(dbname){
    return require('../util/database')(dbname).model('article', articleSchema);
}