/**
 * router.js模块
 * 处理路由
 * 根据不同的请求方法请求路径设置具体的请求函数
 */

// module.exports = function (app) {
//     //res.render('html模板名',{模板数据})
// //第一个参数不能写路径，默认会去项目中的views目录查找该模板文件，（开发人员会把视图文件放到views中）
// app.get('/', (req, res) => {
//     res.render('index.html', {
//         title: '渲染结果'
//     })
// })
// app.get('/post', (req, res) => {
//     res.send('你好我是express');
// })
// }


//express提供了更好的方式 专门包装路由的
const express = require('express');
const fs = require('fs');
//1.创建一个路由容器
const router = express.Router();
//2.把所有路由挂载在router路由容器中
router.get('/', (req, res) => {
        res.render('index.html', {
            title: '渲染结果'
        })
    })
    router.get('/post', (req, res) => {
        res.send('你好我是express');
    })
//3.把router导出
module.exports = router;