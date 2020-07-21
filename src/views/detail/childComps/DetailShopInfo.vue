<template>
  <div>
    <div class="title">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-other-info">
      <div class="shop-other-left">
        <div>
          <p class="f16">{{shop.cSells | isnum}}</p>
          <p>总销量</p>
        </div>
        <div>
          <p class="f16">{{shop.cGoods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-other-right">
        <div v-for="(item,index) in shop.score" :key="index">
          {{item.name}}&nbsp;
          <span class="num" :class="{active: item.isBetter}">{{item.score}}</span>
          <span :class="{active: item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
        </div>
      </div>
    </div>
    <div class="enter">
      <div>进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShopInfo',
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      isnum(value) {
        if(value < 10000) return value
        return (value/10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style scoped>
  .title{
    margin: 20px 5px;
  }
  .title img{
    width: 35px;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
  .title span{
    font-size: 16px;
    vertical-align: top;
    margin-left: 7px;
    line-height: 40px;
  }
  .active{
    color: #f60;
  }
  .shop-other-info{
    display: flex;
    text-align: center;
  }
  .shop-other-info>div{
    flex: 1;
  }
  .shop-other-left{
    border-right: 1px solid #ccc;
  }
  .shop-other-left div{
    display: inline-block;
    font-size: 14px;
    padding: 10px;
  }
  .shop-other-left .f16{
    font-size: 18px;
    padding: 5px 0;
  }
  .shop-other-right div{
    font-size: 14px;
    line-height: 25px;
  }
  .shop-other-right .num{
    display: inline-block;
    width: 30px;
    padding: 0 5px;
  }
  .enter{
    text-align: center;
  }
  .enter div{
    display: inline-block;
    padding: 5px 40px;
    background-color: #f2f2f2;
    border-radius: 100px;
    font-size: 14px;
    margin: 15px;
  }
</style>