<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImg" alt="" @load="imageLoad">
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="text-active">{{goodsItem.price}}</span>
      <span><i class="collect-icon"></i>{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    },
    computed: {
      showImg() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    }
  }
</script>

<style scoped>
  .goods-item{
    width: 48%;
    text-align: center;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
    margin-top: 5px;
  }
  .goods-item p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    margin: 3px 0 0;
  }
  .goods-item span{
    font-size: 14px;
  }
  .collect-icon {
				display: inline-block;
				width: 12px;
				height: 12px;
				background: url('~@/assets/img/detail/icon03.png') no-repeat;
				background-size: cover;
        /* vertical-align: bottom; */
        margin: 0 3px 0 7px;
  }
  .text-active{
    color: var(--color-text);
  }
</style>