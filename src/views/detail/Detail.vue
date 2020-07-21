<template>
  <div class="detail">
    <detail-nav @navClick="navClick" ref="nav"></detail-nav>
    <scroll class="content" ref="scroll" :pull-up-load="true" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :banners="banners"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info @imgLoad="imgLoad" :detail-info="detailInfo"></detail-goods-info>
      <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommendInfo"></goods-list>
    </scroll>
    <detail-bottom-nav @addCart="addToCart"></detail-bottom-nav>
    <back-top @click.native="topClick" v-show="isShow"></back-top>
    <toast message="加入购物车"></toast>
  </div>
</template>
<script>

  import Scroll from '@/components/common/scroll/Scroll'

  import DetailNav from './childComps/DetailNav'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import GoodsList from "@/components/content/goods/GoodsList";
  import DetailBottomNav from "./childComps/DetailBottomNav";

  import BackTop from '@/components/content/backtop/BackTop'
  import Toast from "@/components/common/toast/Toast";


  import {getDetail,goodsInfo,Shop,Param,recommendInfo} from '@/network/detail'

  export default {
    name: 'Detail',
    components: {
      Scroll,
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomNav,
      BackTop,
      Toast
    },
    data() {
      return {
        id: null,
        banners: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: [],
        recommendInfo: [],
        themeTopYs: [],
        currentIndex: 0,

        isShow: false
      }
    },
    created() {
      this.id = this.$route.params.id
      //获取数据
      getDetail(this.id).then(res => {
        // console.log(res);
        //获取顶部图片信息
        this.banners = res.result.itemInfo.topImages
        //获取商品信息
        this.goods = new goodsInfo(res.result.itemInfo,res.result.columns,res.result.shopInfo)
        //获取店铺信息
        this.shop = new Shop(res.result.shopInfo)
        //获取商品详细信息
        this.detailInfo = res.result.detailInfo
        //获取参数信息
        this.paramInfo = new Param(res.result.itemParams.info, res.result.itemParams.rule)
        //获取评论信息
        this.commentInfo = res.result.rate.list

        //获取推荐信息
        recommendInfo().then(res => {
          // console.log(res);
          this.recommendInfo = res.data.list
        })

        // this.$nextTick(() => {
        //   this.themeTopYs = []
        //   this.themeTopYs.push(0)
        //   this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        // })

      })
    },
    methods: {
      imgLoad() {
        this.$refs.scroll.scroll.refresh()

        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
        // console.log(this.themeTopYs);
      },
      navClick(index) {
        // console.log(index);
        this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index],500)
      },
      contentScroll(position) {

        this.isShow = -position.y > 1000

        const positionY = -position.y
        const length = this.themeTopYs.length
        for (let i = 0; i < length - 1; i++) {
          if (this.currentIndex != i && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]){
            this.currentIndex = i
            this.$refs.nav.currentIndex = i
            // console.log(i);
          }
        }

      },
      topClick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      addToCart() {
        // 获取购物车需要展示的信息

        const product = {}

        product.image = this.banners[0];

        product.title = this.goods.title;

        product.desc = this.goods.desc;

        product.price = this.goods.price;
        product.lowNowPrice = this.goods.lowNowPrice;

        product.iid = this.id;

        // this.$store.commit('addCart',product)
        this.$store.dispatch('addCart',product).then(res => {
          // console.log(res);
          this.$toast.show(res, 2000)
        })
      }
    }
  }
</script>

<style scoped>
  .detail{
    position: relative;
    z-index: 999;
    background-color: #fff;
    height: 100vh;
  }
  .content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
  }
</style>