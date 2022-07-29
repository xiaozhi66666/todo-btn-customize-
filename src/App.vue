<template>
  <div>
    <button @click="changeSkin" ref="btn">换肤</button>
    <div class="todoapp">
      <TodoHeader></TodoHeader>
      <TodoMain></TodoMain>
      <TodoFooter></TodoFooter>
    </div>
    <div class="btnself">
      <span>自定义按钮：</span>
      <Zbtn
        color="#07c160"
        title="按钮"
        round
        size="mini"
        :disabled="false"
      ></Zbtn>
    </div>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader'
import TodoMain from '@/components/TodoMain'
import TodoFooter from '@/components/TodoFooter'
// 引入自己封装好的按钮组件
import Zbtn from '@/components/Zbtn'
// 引入vuex中的 state/actions辅助函数
// 其中mapState在计算属性中进行解构使用
// 其中mapMutations在方法中进行解构使用
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('skin')
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
    Zbtn
  },
  name: 'todo',
  data () {
    return {}
  },

  created () {},
  mounted () {
    this.$refs.btn.style.backgroundColor = this.skin
  },
  watch: {
    skin (val) {
      this.$refs.btn.style.backgroundColor = val
    }
  },
  computed: {
    ...mapState(['skin'])
  },

  methods: {
    ...mapActions(['upchangeSkin']),
    // 修改vuex中存储的背景色
    changeSkin () {
      this.upchangeSkin()
    }
  }
}
</script>

<style scoped>
.btnself {
  display: flex;
}
button {
  margin-top: 50px;
  width: 80px;
  height: 60px;
  border-radius: 10px;
  border: 2px solid #333;
  background-color: #ccc;
  cursor: pointer;
}
span {
  display: inline-block;
}
</style>
