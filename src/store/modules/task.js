export default {
  namespaced: true, // 开启命名空间
  state: {
    tasks: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  mutations: {
    // 添加
    addTasks (state, payload) {
      state.tasks.unshift(payload)
    },
    // 删除
    subtasks (state, index) {
      state.tasks.splice(index, 1)
    },
    // 修改
    changeTasks (state, index) {
      state.tasks[index].done = !state.tasks[index].done
    },
    // 修改全选状态
    chanegAll (state, statu) {
      state.tasks.forEach((item) => (item.done = statu))
    }
    //
  }, //
  actions: {
    // 触发添加commit
    updateAddTask (context, task) {
      context.commit('addTasks', task)
    },
    // 触发删除commit
    updateSubTask (context, index) {
      context.commit('subtasks', index)
    },
    // 触发修改类名commit
    updateTaskIsDone (context, index) {
      context.commit('changeTasks', index)
    },
    // 修改所有选框状态
    upDatechanegAll (context, statu) {
      context.commit('chanegAll', statu)
    }
  }, //
  getters: {}, //
  modules: {}
}
