var mongoose = require("mongoose");
var webSchema = new mongoose.Schema({
    web: String,
    path: String,
    addTime: {type: Date, default: Date.now}
});
module.exports = function(dbname){
    if(!dbname){
        dbname = 'kll'
    }
    return require('../util/database')(dbname).model('web', webSchema);
}