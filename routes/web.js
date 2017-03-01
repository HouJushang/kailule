var express = require('express');
var router = express.Router();
var web = require('../dbModel/web');


router.post('/list',function(req,res,next){
    web().find().exec(function(err,result){
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
    console.log(req.body);
    web().create(req.body, function (err, result) {
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
