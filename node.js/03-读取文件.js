//浏览器中的js是没有文件操作的能力
//但是Node中的js具有文件操作的能力

//fs 是file-system的简写（文件系统）
//想要进行文件操作，就必须引入fs这个模块（提供了所有的文件操作相关的api）

//引入模块
var fs = require('fs');

//读取文件
//第一个是文件路径，第二个是回调函数

//成功 
//result 数据
//error null

//失败
//result undefined
//error  错误对象
fs.readFile('./text.txt', (error, result) => {
    //文件读取的是二进制
    if (error) {
        console.log('读取失败');
    } else {
        console.log(result.toString());
    }
})