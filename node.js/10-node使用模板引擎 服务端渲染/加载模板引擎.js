//客户端渲染不利于seo搜索引擎优化，通常是客户端渲染加服务端渲染
var template = require('art-template')
var fs = require('fs')

//为了方便的统一处理这些静态资源，我们约定把所有的静态资源（css img html lib）都存放在public目录下
var http = require('http');

var server = http.createServer()

server.on('request', function (req, res) {
    var url = req.url;
    if (url === '/') {
        fs.readFile('./tpl.html', function (err, data) {
            if (err) {
                console.log('读取失败');
            }
            else {
                //data默认二进制，模板引擎的render方法需要接受的是字符串
                var ret = template.render(data.toString(), {
                    name: 'jack'
                })
                res.end(ret);
            }
        })
    } else if (url == '/post') {
        fs.readFile('./post.html', function (err, data) {
            if (err) {
                console.log('读取失败');
            }
            else {
                //data默认二进制，模板引擎的render方法需要接受的是字符串
                var ret = template.render(data.toString(), {
                    name: 'jack'
                })
                res.end(ret);
            }
        })
    }
    else if (url.indexOf('../public/===0')) {

    }
    else {
        fs.readFile('./404.html', function (err, data) {
            if (err) {
                console.log('404 Not Found');
            }
            else {
                //data默认二进制，模板引擎的render方法需要接受的是字符串
                res.end(data);
            }
        })
    }
})


// fs.readFile('./tpl.html', function (err, data) {
//     if (err) {
//         console.log('读取失败');
//     }
//     else {
//         //data默认二进制，模板引擎的render方法需要接受的是字符串
//         var ret = template.render(data.toString(), {
//             name: 'jack'
//         })
//         console.log(ret);
//     }
// })

server.listen(3000, function () {
    console.log('running');
})
