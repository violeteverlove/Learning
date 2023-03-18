//引入express框架
const express = require('express');
var fs = require('fs');


//创建web服务器  原来的http.createServer
const app = express();

//静态资源访问服务器功能 公开指定目录
// app.use(express.static(path.join(__dirname, 'public')));
//接收多个路劲字符串参数，把路径参数拼接起来然后再执行一下normalize
// app.use('/public', express.static('./public/'))
//设置允许跨域请求
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
    res.header('X-Powered-By', 'nodejs'); //自定义头信息，表示服务端用nodejs
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});


app.get('/', (req, res) => {
    res.send('hello node123');
})
app.get('/about', function (req, res) {
    fs.readFile("./users.json", function (err, data) {
        let user = data.toString();	//将Buffer转换成字符串
        // user = JSON.parse(user);		//将数据转换为 JavaScript对象。 
        // console.log(user);
        res.send(user)
    })
})

app.listen(8000, () => {
    console.log('is running');
})