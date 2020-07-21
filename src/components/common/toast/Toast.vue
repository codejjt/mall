<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message='默认文字', time=2000) {
        this.message = message
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
          this.message = ''
        },time)
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    z-index: 999999;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 6px 10px;
    color: #fff;
    background: rgba(0,0,0,.75);
  }
</style>