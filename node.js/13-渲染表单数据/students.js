var fs = require('fs');


var dbPath = '../db.json'

//获取所有学生信息列表
exports.find = function (callback) {
    fs.readFile(dbPath, 'utf-8', function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}
