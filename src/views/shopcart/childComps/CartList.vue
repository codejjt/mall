<template>
  <div>
    <cart-list-item v-for="item in cartList" :cart-list="item"></cart-list-item>
  </div>
</template>

<script>
  import CartListItem from "./CartListItem";
  export default {
    name: "CartList",
    components: {
      CartListItem
    },
    computed: {
      cartList() {
        return this.$store.state.cartList
      }
    }
  }
</script>

<style scoped>

</style>