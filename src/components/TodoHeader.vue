<template>
  <header class="header">
    <h1 ref="title">todos</h1>
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      v-model="isAll"
      @click="upDatechanegAll(isAll)"
    />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="tasks"
      @keyup.enter="send"
    />
  </header>
</template>

<script>
// import { mapActions } from 'vuex'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('skin')
const { mapActions } = createNamespacedHelpers('task')
export default {
  name: 'todoHeader',
  data () {
    return {
      tasks: '',
      // isAll: false,
      isDone: false,
      id:
        this.$store.state.task.tasks[this.$store.state.task.tasks.length - 1]
          .id || 1,
      isAll: true
    }
  },
  mounted () {
    // 将vuex中取到的数据传递给这个要改变的DOM元素
    this.$refs.title.style.color = this.skin
  },
  // updated () {
  //   this.$refs.title.style.color = this.skin
  // },
  watch: {
    skin (val) {
      this.$refs.title.style.color = val
    }
  },
  computed: {
    // skin () {
    //   return this.$store.state.skin.skin
    // },
    ...mapState(['skin']),
    task () {
      return {
        name: this.tasks,
        done: this.isDone,
        id: this.id
      }
    }
    // ...mapState(['skin'])
  },
  methods: {
    // ...mapActions[('task/updateAddTask', 'task/updateSubTask')],
    ...mapActions(['updateAddTask', 'updateSubTask', 'upDatechanegAll']),
    send () {
      this.id++
      this.updateAddTask(this.task)
      // this.$store.dispatch('task/updateAddTask', this.task)
      this.tasks = ''
    }
  }
}
</script>
