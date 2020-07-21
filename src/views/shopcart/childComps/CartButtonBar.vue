<template>
  <div class="cart-button-bar">
    <div class="check">
      <check-button class="check-button" @click.native="checkClick" :is-check="isSelectAll"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      总价:{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkButton/CheckButton";
  export default {
    name: "CartButtonBar",
    components: {
      CheckButton
    },
    methods: {
      checkClick() {
        if (this.isSelectAll){
          this.$store.state.cartList.forEach(item => item.isCheck = false)
        }else{
          this.$store.state.cartList.forEach(item => item.isCheck = true)
        }
      },
      calcClick() {
        if (!this.checkLength) {
          this.$toast.show('选择购买的商品', 2000)
        }
      }
    },
    computed: {
      totalPrice() {
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.isCheck
        }).reduce((value, item) => {
          return value + item.lowNowPrice * item.count
        },0).toFixed(2)
      },
      checkLength() {
        return this.$store.state.cartList.filter(item => item.isCheck).length
      },
      isSelectAll() {
        if (this.$store.state.cartList.length ===0) return false
        // return !this.$store.state.cartList.filter(item => !item.isCheck).length
        return !this.$store.state.cartList.find(item => !item.isCheck)
      }
    }
  }
</script>

<style scoped>
  .cart-button-bar{
    background-color: #eee;
    height: 40px;
    display: flex;
    font-size: 14px;

  }
  .check-button{
    margin: 9px 5px 0 5px;
  }
  .check{
    display: flex;
    width: 80px;
  }
  .check span{
    line-height: 40px;
  }
  .price{
    flex: 1;
    text-align: center;
    line-height: 40px;
  }
  .calculate{
    width: 80px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background-color: #D81E06;
  }
</style>