<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>
  
<style>
  #tab-bar{
    display: flex;
    background: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, .1);
  }
</style>