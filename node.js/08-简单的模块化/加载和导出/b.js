var b = 'b内容'

exports.b;
exports.b = 'hello';
exports.add = (x, y) => {
    return x + y;
}

// 有时候我们只是想把一个对象封装到模块中，格式如下：

// module.exports = function() {
//   // ...
// }
// 例如:

// //hello.js 
// function Hello() { 
//     var name; 
//     this.setName = function(thyName) { 
//         name = thyName; 
//     }; 
//     this.sayHello = function() { 
//         console.log('Hello ' + name); 
//     }; 
// }; 
//            module.exports = Hello;
// 这样就可以直接获得这个对象了：

// //main.js 
// var Hello = require('./hello'); 
// hello = new Hello(); 
// hello.setName('BYVoid'); 
// hello.sayHello(); 
// 模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}。 在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。