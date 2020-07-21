<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>
          购物街
        </div>
      </template>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
                  @tabClick="tabClick"
                  ref="tabControl1"
                  v-show="isFixed"
                  class="tab-control"></tab-control>
    <scroll class="content" ref="scroll" 
                            :probeType="3" 
                            @scroll="contentScroll"
                            :pull-up-load="true"
                            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>

      <recommend-view :recommends="recommends"></recommend-view>

      <feature-view></feature-view>

      <tab-control :titles="['流行','新款','精选']" 
                  @tabClick="tabClick"
                  ref="tabControl2"></tab-control>
  
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="topClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView';
  import FeatureView from './childComps/FeatureView';
  import TabControl from '@/components/content/tabcontrol/TabControl';
  import GoodsList from '@/components/content/goods/GoodsList';
  import Scroll from '@/components/common/scroll/Scroll'
  import BackTop from '@/components/content/backtop/BackTop'

  import {getHomeMultiData, getHomeGoods} from '@/network/home'

  export default {
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShow: false,
        tabOffsetTop: null,
        isFixed: false,
        topY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    mounted() {
      //3.监听item中图片加载完成
      this.$bus.$on('itemImageLoad', () => {
        this.$refs.scroll.scroll.refresh()
      })


      
      
    },
    methods: {
      
      // debounce(fn, time) {
      //   let timer = null
      //   return function(...args) {
      //     if(timer) clearTimeout(timer)
      //     timer = setTimeout(() => {
      //       fn.apply(this, args)
      //     }, time)
      //   }
      // },

      //事件监听相关方法
      tabClick(index) {
        switch(index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },

      topClick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentScroll(position) {
        // console.log(position);
        //判断BackTop是
        this.isShow = -position.y > 1000

        //判断tabControl是否吸顶
        this.isFixed = -position.y > this.tabOffsetTop
      },
      loadMore() {
				//下拉加载更多
				this.getHomeGoods(this.currentType);
      },
      
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

      //网络请求相关方法
      getHomeMultiData() {
        getHomeMultiData().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(res.data.recommend)
      })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          //完成上拉加载更多
          this.$refs.scroll.scroll.finishPullUp()
      })
      }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultiData()

      //2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },

    deactivated() {
      this.topY = this.$refs.scroll.scroll.y
      // console.log(this.topY);
    },
    activated() {
      // console.log(this.topY);
      this.$refs.scroll.scrollTo(0, this.topY, 1)
      this.$refs.scroll.scroll.refresh()
    },
  }
</script>

<style scoped>
  #home{
    position: relative;
    height: 100vh;
    /* padding-top: 44px; */
  }

  .home-nav{
    background-color: var(--color-text);
    color: #fff;
  }
  
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /* .content{
    height: calc(100% - 93px);
    overflow: hidden;
  } */
  .tab-control{
    position: relative;
    z-index: 999;
    background-color: #fff;
  }
</style>