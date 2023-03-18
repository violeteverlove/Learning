function jsonp(options) {
    // 动态创建script标签
    var script = document.createElement('script');
    var fnName = 'myJsonp' + +Date.now();
    //拼接字符串的变量
    var params = '';
    for (var attr in options.data) {
        params += '&' + attr + '=' + options.data[attr];
    }
    //已经不是全局函数了 把它放在window上变成全局函数
    window[fnName] = options.success;
    //为script表情添加src属性
    script.src = options.url + '?callback=' + fnName + params;
    //将script标签追加到页面中
    document.body.appendChild(script);
    //加载完成之后调用onload事件
    script.onload = function () {
        document.body.removeChild(script);
    }

}