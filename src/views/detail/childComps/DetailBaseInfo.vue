<template>
  <div>
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <div class="new-price">{{goods.price}}</div>
      <div class="old-price">{{goods.oldPrice}}</div>
      <div class="discount-desc" v-if="goods.discountDesc">{{goods.discountDesc}}</div>
    </div>
    <div class="other-info">
      <div>{{goods.columns0}}</div>
			<div>{{goods.columns1}}</div>
			<div>{{goods.services}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .title{
    font-size: 15px;
    line-height: 20px;
    margin: 10px 0;
    padding: 0 5px;
    text-indent: 1em;
    color: black;
    font-weight: bold;
  }
  .price{
    display: flex;
    padding: 0 5px;
  }
  .new-price{
    color: var(--color-text);
    font-size: 20px;
  }
  .old-price{
    text-decoration: line-through;
    padding: 0 3px;
    font-size: 14px;
    margin-top: 5px;
  }
  .discount-desc{
    font-size: 12px;
    height: 14px;
    color: #fff;
    background-color: var(--color-text);
    padding: 1px 8px;
    border-radius: 100px;
  }
  .other-info{
    display: flex;
    font-size: 12px;
    padding: 10px 5px;
    border-bottom: 1px solid #ededed;
    text-align: center;
    color: #999;
  }
  .other-info div{
    flex: 1;
  }
  .other-info div:nth-child(1){
    text-align: left;
  }
  .other-info div:nth-child(3){
    text-align: right;
  }
</style>