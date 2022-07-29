<template>
  <div>
    <button
      :color="color"
      ref="btn"
      :title="title"
      :round="round"
      :disabled="disabled"
    >
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'to-button',
  props: {
    color: {
      type: String,
      default: 'skyblue'
    },
    title: {
      type: String,
      default: '按钮'
    },
    round: {
      type: Boolean
      // default: '10px'
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  data () {
    return {}
  },

  created () {},
  mounted () {
    // 背景色
    this.$refs.btn.style.backgroundColor = this.color
    // console.log(this.$refs.btn.style)
    // 是否为圆型
    if (this.round) {
      this.$refs.btn.style.borderRadius = '20px'
    }
    // 尺寸
    if (this.size === 'large') {
      this.$refs.btn.style.width = '100px'
      this.$refs.btn.style.height = '60px'
    } else if (this.size === 'small') {
      this.$refs.btn.style.width = '80px'
      this.$refs.btn.style.height = '40px'
    } else if (this.size === 'mini') {
      this.$refs.btn.style.width = '60px'
      this.$refs.btn.style.height = '20px'
    }
    // 是否禁用
    if (this.disabled) {
      this.$refs.btn.style.disabled = 'true'
    } else {
      this.$refs.btn.style.disabled = 'false'
    }
  },
  watch: {
    // 颜色
    color (val) {
      this.$refs.btn.style.backgroundColor = val
    },
    // 是否为圆边框
    round (val) {
      if (val) {
        this.$refs.btn.style.borderRadius = '10px'
      } else {
        this.$refs.btn.style.borderRadius = '0'
      }
    },
    // 尺寸
    size (val) {
      // 尺寸
      if (val === 'large') {
        this.$refs.btn.style.width = '100px'
        this.$refs.btn.style.height = '60px'
      } else if (val === 'small') {
        this.$refs.btn.style.width = '80px'
        this.$refs.btn.style.height = '40px'
      } else if (val === 'mini') {
        this.$refs.btn.style.width = '60px'
        this.$refs.btn.style.height = '20px'
      }
    },
    // 是否禁用
    disabled (val) {
      if (val) {
        this.$refs.btn.style.disabled = 'true'
      } else {
        this.$refs.btn.style.disabled = 'false'
      }
    }
  },

  methods: {}
}
</script>

<style scoped>
button {
  width: 80px;
  height: 40px;
  background-color: #ccc;
  padding: 0 10px;
  font-size: 14px;
  /* border-radius: 10px; */
}
</style>
