//引入express框架
const express = require('express');

//创建web服务器  原来的http.createServer
const app = express();

//静态资源访问服务器功能 公开指定目录
app.use(express.static(path.join(__dirname, 'public')));
//接收多个路劲字符串参数，把路径参数拼接起来然后再执行一下normalize
// app.use('/public', express.static('./public/'))

app.get('/', (req, res) => {
    res.send('hello node123');
})
app.get('/about', (req, res) => {
    res.send('你好我是express');
})

app.listen(3000, () => {
    console.log('is running');
})