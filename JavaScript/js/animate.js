//缓动动画公式：(目标值-现在位置)/10
function animate(obj, target, callback) {
    //当不断点击按钮，因为开启很多计时器，速度越来越快
    //解决方案： 让元素只有一个定时器
    clearInterval(obj.time);
    obj.time = setInterval(function () {
        //步长卸载定时器里
        //把步长改为整数 不要出现小数的问题 
        //考虑后退问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            //停止动画，本质停止计时器
            clearInterval(obj.time);
            //回调函数写在定时器结束里面
            // if (callback) {
            //     //调用
            //     callback();
            // }
            callback && callback();
        }
        //把步长改为一个慢慢改变小的值
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}