var fs = require('fs');
//第三个参数只接收一个参数 
fs.writeFile('./write.txt', '写入的内容！！！！', (result) => {
    if (error) {
        console.log('写入失败');
    } else {
        console.log('写入成功');
    }
})