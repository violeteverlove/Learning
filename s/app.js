//引入express框架
const { response } = require('express');
const express = require('express');
const { request } = require('http');

//引入路径处理模块
const path = require('path')

const bodyParser = require('body-parser');
const formmidable = require('formidable');
const fs = require('fs');

//创建web服务器
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//静态资源访问服务器功能
app.use(express.static(path.join(__dirname, 'public')));
//拦截所有的请求
app.use((req, res, next) => {
    //1.允许哪些客户端访问我 '*'允许所有客户端访问我  
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    //2.允许客户端使用哪些请求方法访问我
    res.header('Access-Control-Allow-Methods', 'get,post');
    //允许客户端发送跨域请求时携带cookie信息
    res.header('Access-Control-Allow-Credentials', true);
    //执行下面函数 匹配路由
    next();
})
//创建路由 地址要对应
app.get('/first', (req, res) => {
    res.send('hello ajax');
})
app.get('/responseData', (req, res) => {
    res.send({ 'name': '张三' });
})
app.get('/get', (req, res) => {
    //服务器端接收客户端发送请求的参数
    res.send(req.query);
})
app.post('/post', (req, res) => {
    //服务器端接收客户端发送请求的参数
    res.send(req.body);
})
app.post('/json', (req, res) => {
    //服务器端接收客户端发送请求的参数
    res.send(req.body);
})
app.get('/readystate', (req, res) => {
    //服务器端接收客户端发送请求的参数
    res.send('hello');
})
app.get('/cache', (req, res) => {
    //服务器端接收客户端发送请求的参数
    //当前目录下的txt
    fs.readFile('./test.txt', (error, result) => {
        res.send(result);
    });
})
app.get('/address', (req, res) => {
    res.send({ 'name': '张三' });
    // res.status[400].send({ 'name': '李四' });
})

app.get('/searchauto', (req, res) => {
    res.send(['123', '1234', '12345']);

})
app.get('/province', (req, res) => {
    res.send([{ id: '001', name: '山东省' }, { id: '002', name: '广东省' },
    { id: '003', name: '湖南省' }]);

})
app.get('/cities', (req, res) => {
    res.send([{ id: '301', name: '山东' }, { id: '302', name: '345' },
    { id: '303', name: '567' }]);
});
app.post('/formData', (req, res) => {
    // 创建formidable表单解析对象
    const form = new formmidable.IncomingForm();
    //解析客户端传递过来的formData对象
    form.parse(req, (err, fields, files) => {
        res.send(fields);
    });
});
app.post('/files', (req, res) => {
    //创建formidable表单解析对象
    var form = new formmidable.IncomingForm();
    //设置客户端传递过来的存储路径  __dirname 当前文件的根目录server
    form.uploadDir = path.join(__dirname, 'public', 'uploads');
    //保留上传文件的后缀名字
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        //将客户端传过来的文件地址响应到客户端

        res.send({
            path: files.attrName.path.split('public')[1]
        });
    })
})
app.get('/test', (req, res) => {
    // const result = 'fn()';
    res.send('ok');
})
app.get('/test2', (req, res) => {
    const result = 'fn({name:"张三"})';
    res.send(result);
})
app.get('/better', (req, res) => {
    //接收server客户端传递过来的名称 
    // const fnName = req.query.callback;
    // //将函数名称对应的函数调用代码返回给客户端 避免前后端函数名称不一致 修改麻烦
    // const data = JSON.stringify({ name: "张三" });
    // const result = fnName + '(' + data + ')';
    // res.send(result);
    //express框架提供了jsonp方法实现上面步骤
    res.jsonp({ name: 'lisi', age: 30 })
})

app.get('/cross', (req, res) => {
    res.send('ok');
})

app.post('/data2', (req, res) => {
    //创建formidable表单解析对象
    const form = new formmidable.IncomingForm();
    //解析formData对象
    form.parse(req, (err, fields, files) => {
        //接收客户端传递过来的用户名和密码
        const { username, password } = fields;
        //用户名密码对比
        if (username == 'zhangsan' && password == '123456') {
            //设置session
            // req.session.isLogin = true;
            res.send({ message: "登录成功" });
        }
        else {
            res.send({ message: "登录失败，用户名或密码错误" });
        }
    })

});
app.get('/checkLogin', (req, res) => {
    res.send('ok')
})


//监听端口
app.listen(3001);

//控制台提示输出
console.log('服务器启动成功')
// http://localhost:3001/