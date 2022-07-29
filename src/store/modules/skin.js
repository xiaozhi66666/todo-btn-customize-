export default {
  namespaced: true,
  state: {
    skin: 'rgb(122, 122, 232)'
  },
  mutations: {
    changeSkin (state) {
      const num = parseInt(Math.random() * 255)
      const num1 = parseInt(Math.random() * 255)
      const num2 = parseInt(Math.random() * 255)
      const bgc = `rgb(${num},${num1},${num2})`
      state.skin = bgc
    }
  }, //
  actions: {
    upchangeSkin (context) {
      context.commit('changeSkin')
    }
  }, //
  getters: {} //
}
