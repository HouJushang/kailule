var express = require('express');
var router = express.Router();
var article = require('../dbModel/article');

/* GET home page. */

router.get('/list',function(req,res,next){
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
        console.log(result)
        if (!result.length>0) {
            res.json({
                status: 'fail',
                err: result
            });
        } else {
            res.json({
                status: 'ok',
                data: result
            });
        }
    })
})

module.exports = router;
