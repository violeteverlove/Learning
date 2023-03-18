var ret = require('./b')//加载文件模块并执行里面的代码||拿到被加载文件模块导出的对象exports
// console.log(b);//只能访问里面的内容，而成员无法访问
// console.log(b);错误 
console.log(ret);
console.log(ret.b);
console.log(ret.add(10, 30));

