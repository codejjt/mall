<template>
  <div class="check-button" :class="{active: isCheck}">
    <img src="@/assets/img/detail/check_active.png" alt="" v-show="isCheck">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isCheck: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check-button{
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #aaa;
  }
  .active{
    border-color: #D81E06;
  }
  .check-button img{
    width: 18px;
  }
</style>