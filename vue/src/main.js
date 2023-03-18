// 该文件是整个项目的入口文件
// 引入vue
import Vue from 'vue'
//引入App组件
import App from './App.vue'

Vue.config.productionTip = false
//创建Vue实例对象
new Vue({
  render: h => h(App),
}).$mount('#app')
