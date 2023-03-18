window.addEventListener('load', function () {
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var promo = document.querySelector('.promo');
    //鼠标经过显示按钮
    promo.addEventListener('mouseenter', function () {
        prev.style.display = 'block';
        next.style.display = 'block';
        clearInterval(time);
        time = null;//清除定时器变量
    })
    //鼠标离开隐藏按钮
    promo.addEventListener('mouseleave', function () {
        prev.style.display = 'none';
        next.style.display = 'none';
        time = setInterval(function () {
            //手动调用右侧按钮事件
            next.click();
        }, 2000);
    })
    //动态生成小圆点
    var ul = promo.querySelector('ul');
    var ol = document.querySelector('.promo-nav');
    var promoWidth = promo.offsetWidth;
    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        // 设置索引号 
        li.setAttribute('index', i);
        ol.appendChild(li);
        //生成小圆圈同时绑定事件
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            //点击小圆圈移动图片 移动的是ul
            //移动距离：索引号乘图片宽度
            var index = this.getAttribute('index');
            //当我们点击某个小li，就要把这个小li的索引号给num
            //当我们点击某个小li，就要把这个小li的索引号给circle
            num = index;
            circle = index;
            // console.log(index);
            console.log(promoWidth);
            animate(ul, -index * promoWidth);
        })
    }
    //把第一个li设置属性
    ol.children[0].className = 'current';
    //6.克隆第一张图片放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);


    //点击按钮让图片滚动一张
    //声明一个变量num，点击一次自增1，让这个变量乘以图片宽度就是ul的滚动距离
    //无缝滚动原理
    //把ul第一个li复制一份，放到ul的后面
    // 当图片滚动到克隆的最后一张，让ul快速的不做动画的跳到最左侧 left=0
    //最后num赋值为0，重新开始滚动
    var num = 0;
    //控制小圆圈跟随按钮变化
    var circle = 0;
    //flag 节流阀（让事件无法连续触发）  用回调函数添加一个变量控制，锁住函数和解锁函数
    var flag = true;
    //右侧按钮
    next.addEventListener('click', function () {
        if (flag == true) {
            flag = false;
            // alert(1);
            //走到最后一张时
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * promoWidth, function () {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;

            }
            circleChange();
        }
    })
    //左侧按钮
    prev.addEventListener('click', function () {
        if (flag == true) {
            flag = false;
            // alert(1);
            //走到最后一张时
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * promoWidth + 'px';

            }
            num--;
            animate(ul, -num * promoWidth, function () {
                flag = true;
            });
            circle--;
            // if (circle < 0) {
            //     circle = ol.children.length - 1;
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle;
            //先自减 不然circle为负值 代入函数会报错

            //调用函数
            circleChange();
        }

    })
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            //排他思想
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    //自动播放轮播图 类似点击了右侧按钮
    var time = setInterval(function () {
        //手动调用右侧按钮事件
        next.click();
    }, 2000);



})