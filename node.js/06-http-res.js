var http = require('http');
//使用http.createServer（）创建一个web服务器
var server = http.createServer();

//监听request请求事件
server.on('request', function (request, response) {
    console.log('收到请求了,路径是' + request.url);

    //respnse对象有一个方法:write可以用来给客户端发送响应数据
    //write可使用多次，但最后一定要用end来结束响应，否则客户端一直等到
    response.write('hello');
    response.end();
})

//绑定端口号，启动服务器
server.listen(3000, function () {
    console.log('启动成功');
});