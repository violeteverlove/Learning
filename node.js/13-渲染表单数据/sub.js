const express = require('express');
const fs = require('fs');
const students = require('./students')
//1.创建一个路由容器
const router = express.Router();
//2.把所有路由挂载在router路由容器中
router.get('/', (req, res) => {//获取所有学生信息列表
    students.find(function (err, students) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.render('index.html', {
            students: students
        })
    })
})
router.get('/post', (req, res) => {
    res.send('你好我是express');
})
//3.把router导出
module.exports = router;