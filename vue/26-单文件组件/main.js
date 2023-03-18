// 浏览器不能直接支持es的模块化语法，需要后续的脚手架
import App from './App.vue'
new Vue({
    el: '#root',
    template: `<App></App>`,
    components: {
        App
    }
})