var http = require('http')

var server = http.createServer()



server.on('request', function (req, res) {
    // console.log(req.url);
    // res.write('hello');
    // res.end();
    // res.end('hello wrold');

    //根据不同请求路径发送不同内容
    //req.url获得的是端口号之后的路径
    var url = req.url;
    if (url === '/') {
        res.end('index');
    } else if (url === '/login') {
        res.end('login');
    } else {
        console.log('404 not Found');
    }
})


server.listen(3000, function () {
    console.log('启动成功');
})