import Vue from 'vue'
import Vuex from 'vuex'
import skin from './modules/skin'
import task from './modules/task'
// 引入第三方插件之间将需要存储到本地的值填入即可
import createVuexPersisted from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    skin,
    task
  },
  plugins: [
    createVuexPersisted({
      reducer (val) {
        // 指定存储某个模块的数据
        return {
          task: val.task,
          skin: val.skin
        }
      }
    })
  ]
})
