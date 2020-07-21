<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .nav-bar{
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
    box-shadow: 0 2px 1px rgba(100, 100, 100, .1);
  }
  .left,.right{
    width: 60px;
    /* background-color:blue; */
  }
  .center{
    flex: 1;
    /* background-color:red; */
  }
</style>