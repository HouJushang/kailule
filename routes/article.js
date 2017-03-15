var express = require('express');
var router = express.Router();
var article = require('../dbModel/article');

/* GET home page. */

router.get('/list',function(req,res,next){
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
router.post('/add',function(req,res,next){
    var webType = req.headers.host.split('.')[0];
    article(webType).create(req.body, function (err, result) {
        if (err) {
            res.json({
                status: 'fail',
                err: err
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
