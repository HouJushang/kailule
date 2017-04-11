/**
 * Created by hou on 2017/4/11.
 */
var express = require('express');
var router = express.Router();
var friendlink = require('../dbModel/friendlink');


router.get('/list',function(req,res,next){
    var webType = req.headers.host.split('.')[0];
    friendlink(webType).find().exec(function(err,result){
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
    var webType = req.headers.host.split('.')[0];
    console.log(webType, req.body)
    friendlink(webType).create(req.body, function (err, result) {
        if (err) {
            res.json({
                status: 'fail',
                err: err
            });
        } else {
            res.json({
                status: 'ok',
            });
        }
    })
})

module.exports = router;
