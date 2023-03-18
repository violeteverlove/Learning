// 该文件是整个项目的入口文件
// 引入vue
import Vue from 'vue'
//引入App组件
import App from './App.vue'
import vuex from 'vuex'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(vuex)

Vue.prototype.$http = axios
//创建Vue实例对象
new Vue({
  render: h => h(App),
}).$mount('#app')
