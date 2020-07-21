<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="@/assets/img/detail/fanhui.png" alt="">
        </div>
      </template>
      <template v-slot:center>
        <div class="titles">
          <div v-for="(item,index) in titles" :key="index" :class="{active: currentIndex == index}" @click="itemClick(index)">{{item}}</div>
        </div>  
      </template>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from '@/components/common/navbar/NavBar'

  export default {
    name: 'DetailNav',
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('navClick',index)
      },
      backClick() {
        this.$router.back()
      }
    },
  }
</script>

<style scoped>
  .titles{
    display: flex;
    font-size: 14px;
    text-align: center;
  }
  .titles div{
    flex: 1;
  }
  .active{
    color: var(--color-text);
  }
  .back img{
    width: 30px;
    margin-top: 8px;
  }
</style>