<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物车({{cartLength}})</div>
      </template>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-button-bar></cart-button-bar>
  </div>
</template>

<script>

  import Scroll from "@/components/common/scroll/Scroll";

  import NavBar from "@/components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";
  import CartButtonBar from "./childComps/CartButtonBar";
export default {
  components: {
    Scroll,
    NavBar,
    CartList,
    CartButtonBar
  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length
    }
  },
  activated() {
    // console.log('~~');
    this.$refs.scroll.scroll.refresh()
  }
}
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-high-text);
    color: #fff;
    font-weight: bold;
  }
  .cart{
    height: 100vh;
  }
  .content{
    height: calc(100% - 133px);
    overflow: hidden;
  }
</style>