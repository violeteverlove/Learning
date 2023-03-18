/**
 * app入门模块
 * 职责：
 * 创建服务
 * 做服务配置
 * 模板引擎、body-parser解析表单post请求体
 * 提供静态资源服务
 * 挂载路由
 * 监听端口启动服务
 */





//引入express框架
const express = require('express');
const path = require('path')
const router = require('./router');
const fs = require('fs');
const bodyParser = require('body-parser');

//创建web服务器  原来的http.createServer
const app = express();

//静态资源访问服务器功能 公开指定目录
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//配置使用art-template模板引擎，第一个参数表示当渲染以.art为结尾的文件的时候，使用art-template模板引擎
app.engine('html', require('express-art-template'));

// https://aui.github.io/art-template/

//把路由容器挂载到app服务中
app.use(router);




app.listen(3000, () => {
    console.log('is running');
})