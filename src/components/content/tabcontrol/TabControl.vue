<template>
  <div class="tabControl">
    <div v-for="(item,index) in titles" :key="item.index" 
    @click="tabClick(index)" :class="{active: currentIndex == index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabClick(index) {
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .tabControl{
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
  }
  .tabControl div{
    flex: 1;
  }
  .tabControl div span{
    padding: 0 2px 3px;
  }
  .active span{
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-high-text);
  }
</style>