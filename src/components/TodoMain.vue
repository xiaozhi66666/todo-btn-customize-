<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.done }"
      v-for="(item, index) in tasks"
      :key="index"
    >
      <div class="view">
        <input class="toggle" type="checkbox" @click="change(index)" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="sub(index)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
// 第一步将createNamespaceHelpers熊vuex中引入
// 第二步将辅助函数从指定的vuex模块进行引入
import { createNamespacedHelpers } from 'vuex'
// const { mapMapState } = createNamespacedHelpers('task')
const { mapState, mapActions } = createNamespacedHelpers('task')
// import { mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  name: 'todoMain',

  created () {},
  computed: {
    ...mapState(['tasks'])
    // task () {
    //   return this.$store.state.task.tasks
    // }

    // return this.
  },
  methods: {
    ...mapActions(['updateAddTask', 'updateSubTask', 'updateTaskIsDone']),
    sub (index) {
      // this.$store.dispatch('task/updateSubTask', index)
      this.updateSubTask(index)
    },
    change (index) {
      this.updateTaskIsDone(index)
      // this.$store.dispatch('task/updateTaskIsDone', index)
    }
  }
}
</script>
