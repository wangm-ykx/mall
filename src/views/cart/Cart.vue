<template>
  <div class="cart">
<!--    导航-->
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
<!--    列表-->
    <cart-list></cart-list>
<!--    汇总-->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/cart/components/CartList";
import CartBottomBar from "@/views/cart/components/CartBottomBar";
import { mapGetters } from 'vuex'

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters([
        'cartLength'
    ])
  }
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.cart-nav{
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}
</style>
