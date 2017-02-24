var express = require('express');
var router = express.Router();
var article = require('../dbModel/article');

/* GET home page. */

router.get('/',function(req,res,next){

    var webType = req.headers.host;

    var resPromise = new Promise(function(resolve, reject){
        article(webType.split('.')[0]).find().exec(function(err,result){
            if(!err){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
    resPromise.then(function(result){
        if(result.length>0){
            res.render('index', {detail: result});
        }
    })


})

module.exports = router;
