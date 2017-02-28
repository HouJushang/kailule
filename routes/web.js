var express = require('express');
var router = express.Router();
var web = require('../dbModel/web');


router.post('/web',function(req,res,next){

    // var resPromise = new Promise(function(resolve, reject){
    //     article(webType.split('.')[0]).find().exec(function(err,result){
    //         if(!err){
    //             resolve(result)
    //         }else{
    //             reject(err)
    //         }
    //     })
    // })
    // resPromise.then(function(result){
    //     if(result.length>0){
    //         res.render('index', {detail: result});
    //     }
    // })

    var webType = req.headers.host;
    res.json({
        name: 111
    })


})

module.exports = router;
