<template>
  <div class="tab-bar-item">
    <div v-if="isActive" @click="btnClick"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
        path: String,
        activeColor: {
          type: String,
          default: 'red'
        }
      },
  data() {
    return {
      // isActive: true,
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path)
    },
    activeStyle() {
      return !this.isActive ? {color:this.activeColor} : {}
    }
    
  },
  methods: {
    btnClick() {
      // console.log(this.$router)
      if(this.$route.path != this.path){
        this.$router.push(this.path)
      }   
    }
  },
}
</script>

<style>
  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
    font-size: 12px;
  }
  .tab-bar-item img{
    width: 24px;
    margin-top: 3px;
    margin-bottom: 3px;
    vertical-align: middle;
  }
</style>