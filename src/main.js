import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 引入样式
import '@/styles/index.css'
Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app')
