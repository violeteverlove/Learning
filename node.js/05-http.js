//使用node构建一个web服务器
//在node中专门提供了一个核心模块：http
//它的职责就是帮你创建编写服务器的

var http = require('http');
//使用http.createServer（）创建一个web服务器
var server = http.createServer();

//服务器：
//提供服务：对数据的服务
//发请求
//接收请求
//处理请求
//发送响应

//客户端请求过来，自动触发request请求事件，然后执行第二个函数
server.on('request', function () {
    console.log('收到请求了');
})

//绑定端口号，启动服务器
server.listen(3000, function () {
    console.log('启动成功');
});