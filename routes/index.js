var express = require('express');
var router = express.Router();

/* GET home page. */

var url = require('url');
var superagent = require('superagent');
var cheerio = require('cheerio');

var article = require('../dbModel/article');

var allUrl = [];  //采集过得url保存
var baseUrl = 'http://lol.mingrent.com'; //入口初始url
router.get('/',function(req,res,next){
    res.render('index', { title: 'Express' });
})
router.get('/caiji', function(req, res, next) {

    var allUrl = [];  //采集过得url保存
    var nowUrl = []; //正在采集的url
    var waitUrl = []; //等待的url
    var bingfa = 300; //并发
    console.log('start:')
    function openLink(urlLink) {
        if(nowUrl.length>=bingfa){
            if(waitUrl.indexOf(urlLink)>-1){
                return
            }
            waitUrl.push(urlLink)
            console.log('加入等待'+waitUrl.length)
            return
        }
        allUrl.push(urlLink);
        nowUrl.push(urlLink);

        superagent.get(urlLink)
            .end(function (err, result) {
                //打开一次url 输出已经遍历的url 和 当前url
                console.log('open:' + urlLink,allUrl.length);
                if (err) {
                    console.error('这个页面出现错误' + err);
                    return;
                } else {
                    nowUrl.splice(nowUrl.indexOf(urlLink),1)
                    var $ = cheerio.load(result.text);
                    var articleContent = {
                        title: $('h1').text(),
                        time: $('.conarc address span:first-child').text(),
                        content: $('#kt').text(),
                        keywords: $("meta[name='keywords']").prop('content')
                    }
                    console.log(articleContent);

                    if(articleContent.title&&articleContent.content){
                        article.create(articleContent, function (err, result) {
                            if (err) {
                                console.log('添加错误')
                            } else {
                                console.log('添加成功')
                            }
                            if(waitUrl[0]){
                                openLink(waitUrl[0])
                                waitUrl.shift()
                                console.log('执行等待列队')
                            }
                        })
                    }
                    $('a').each(function (idx, element) {
                        if (element.attribs.href) {
                            var newUrl = url.resolve(baseUrl, element.attribs.href);
                            var index = newUrl.indexOf(baseUrl);
                            //判断连接是否同一域 和 是否已经打开过
                            if (index >= 0 && allUrl.indexOf(newUrl) == -1) {
                                openLink(newUrl);
                            }
                        }
                    })
                }
            });
    }
    openLink(baseUrl);
});

module.exports = router;
