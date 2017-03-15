var express = require('express');
var router = express.Router();
var article = require('../dbModel/article');

/* GET home page. */

router.get('/',function(req,res,next){
    var webType = req.headers.host.split('.')[0];
    var resPromise = new Promise(function(resolve, reject){
        article(webType).find().exec(function(err,result){
            if(!err){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
    resPromise.then(function(result){
        if(result.length>0){
            res.render('index', {title: webType.split('.')[0],  detail: result});
        }
    })
})

module.exports = router;
