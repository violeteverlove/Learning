
function ajax(options) {
    //存储的是默认值
    var defaults = {
        type: 'get',
        url: '',
        data: {},
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function () { },
        error: function () { }
    };
    //使用options对象中的属性覆盖defaults对象中的属性
    Object.assign(defaults, options);
    //创建ajax对象
    var xhr = new XMLHttpRequest();
    // 拼接请求参数的变量
    var params = '';
    //遍历传递进来的对象格式参数
    for (var attr in defaults.data) {
        //将参数转换为字符串格式
        params += attr + '=' + defaults.data[attr] + '&';
        //发现字符串最后有多余的& 采用字符串截取在返回结果
        params = params.substr(0, params.length - 1);
    }
    // console.log(params);//发现字符串最后有多余的& 采用字符串截取

    //判断请求方式
    if (defaults.type == 'get') {
        defaults.url = options.url + '?' + params;
    }
    //配置ajax对象
    xhr.open(defaults.type, defaults.url);
    //发送请求
    if (defaults.type == 'post') {
        //设置请求参数类型
        // 用户希望的向服务器端传递的请求参数的类型
        var contentType = defaults.header['Content-Type'];
        xhr.setRequestHeader('Content-Type', contentType);
        if (contentType == 'application/json') {
            //将json对象转换为JSON字符串 向服务器端传递json数据格式的参数
            xhr.send(JSON.stringify(defaults.data));
        }
        else {
            //向服务器端传递普通类型的参数
            xhr.send(params);
        }
    }
    else {
        xhr.send();
    }
    //监听xhr对象下面的onload事件
    xhr.onload = function () {
        //获取响应头的数据   xhr.getResponseHeader()
        var contentType = xhr.getResponseHeader('Content-Type');
        //服务器端返回的数据
        var responseText = xhr.responseText;
        //判断响应头数据是否有application/json
        if (contentType.includes('application/json')) {
            //json字符串转换为json对象
            responseText = JSON.parse(responseText);

        }
        if (xhr.status >= 200 && xhr.status < 300) {
            //请求成功 调用处理成功的函数
            options.success(responseText, xhr);
        }
        else {
            //请求失败
            options.error(responseText, xhr);
        }


    }
}