var express = require('express');
var router = express.Router();
var article = require('../dbModel/article');

/* GET home page. */

router.get('/list/:currentPage/:pageSize',function(req,res,next){
    var webType = req.headers.host.split('.')[0];
    var pageSize = Number(req.params.pageSize) || 50;
    var currentPage = Number(req.params.currentPage) || 1;
    var resPromise = new Promise(function(resolve, reject){
        article(webType).find().skip((currentPage - 1) * pageSize).limit(pageSize).exec(function(err,result){
            if(!err){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
    var countPromise = new Promise(function (resolve, reject){
        article(webType).count().exec(function(err,result){
            if(!err){
                resolve(result)
            }else{
                reject(err)
            }
        })
    })
    Promise.all([resPromise, countPromise]).then(function(result){
        res.json({
            status: 'ok',
            data: {
                artData: result[0],
                pageInfo: {
                    pageSize: pageSize,
                    currentPage: currentPage,
                    count: result[1]
                }
            }
        })
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
