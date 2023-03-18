var http = require('http')
var fs = require('fs');

var server = http.createServer()


server.on('request', function (req, res) {

    //服务器端默认发送数据为utf-8
    //但浏览器不知道你是utf-8内容，它采用当前操作系统GBK
    //用res。setHeader设置content-Type设置数据内容类型
    var url = req.url;
    if (url === '/') {
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                res.end('文件读取失败')
            } else {
                //data默认是二进制数据
                //res.end（）支持两种数据类型，一种二进制，一种是字符串
                res.end(data)
            }
        })
    }
    if (url === '/img') {
        fs.readFile('./image.jpg', function (err, data) {
            if (err) {
                res.end('文件读取失败')
            } else {
                //data默认是二进制数据
                //res.end（）支持两种数据类型，一种二进制，一种是字符串
                res.end(data)
            }
        })
    }
    //  else if (url === '/login') {
    //     res.end('login');
    // } else {
    //     console.log('404 not Found');
    // }
})
server.listen(3000, function () {
    console.log('111');
})