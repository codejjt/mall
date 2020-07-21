<template>
  <div>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tab-bar>
      <tab-bar-item path="/home" activeColor='blue'>
        <template v-slot:item-icon>
          <img src="~@/assets/img/tabbar/home.svg" alt="" srcset="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~@/assets/img/tabbar/home.active.svg" alt="" srcset="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor='blue'>
        <template v-slot:item-icon>
          <img src="~@/assets/img/tabbar/category.svg" alt="" srcset="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~@/assets/img/tabbar/category.active.svg" alt="" srcset="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor='blue'>
        <template v-slot:item-icon>
          <img src="~@/assets/img/tabbar/shopcart.svg" alt="" srcset="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~@/assets/img/tabbar/shopcart.active.svg" alt="" srcset="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor='blue'>
        <template v-slot:item-icon>
          <img src="~@/assets/img/tabbar/profile.svg" alt="" srcset="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~@/assets/img/tabbar/profile.active.svg" alt="" srcset="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar'
  import TabBarItem from '@/components/common/tabbar/TabBarItem'
  export default {
    components: {
        TabBar,
        TabBarItem
      }
  }
</script>

<style>

</style>