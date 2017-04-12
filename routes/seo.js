/**
 * Created by hou on 2017/4/11.
 */
var express = require('express');
var router = express.Router();
var seo = require('../dbModel/seo');


router.get('/detail',function(req,res,next){
    var webType = req.headers.host.split('.')[0];
    seo(webType).find().exec(function(err,result){
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
    seo(webType).find({},function(err, result){
        if(result.length == 0) {
            seo(webType).create(req.body, function (err, result2) {
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
        }else{
            seo(webType).update({_id: result[0]._id},req.body,{multi: true},function(err, result3){
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
        }
    })
})

module.exports = router;
