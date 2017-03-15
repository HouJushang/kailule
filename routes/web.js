var express = require('express');
var router = express.Router();
var web = require('../dbModel/web');


router.get('/list',function(req,res,next){
    var webType = req.headers.host.split('.')[0];
    web(webType).find().exec(function(err,result){
        if(!err){
            res.json({
                status: 'ok',
                data: result
            })
        }else{
            res.json({
                status: 'fail',
                err: err
            })
        }
    })
})
router.post('/add',function(req,res,next){
    var webType = req.headers.host;
    web(webType).create(req.body, function (err, result) {
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
