<template>
  <div class="btoom-bar">
    <div class="item">
      <img src="~assets/img/detail/customer.svg">
      <div>客服</div>
    </div>
    <div class="item">
      <img src="~assets/img/detail/shop.svg">
      <div>店铺</div>
    </div>
    <div class="item">
      <img src="~assets/img/detail/collect.svg">
      <div>收藏</div>
    </div>
    <div class="item cart" @click="addToCart">加入购物车</div>
    <div class="item buy">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
.btoom-bar{
  height: 49px;
  background: white;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  /*justify-content: space-evenly;*/
  align-items: center;
  text-align: center;
  font-size: 13px;
}
.item{
  padding: 1vw;
  flex: 1;
}
.item img{
  width: 5vw;
  margin-bottom: .5vw;
}
.cart{
  background: #FFDD11;
  height: 49px;
  line-height: 46px;
}
.buy{
  color: white;
  background: var(--color-high-text);
  height: 49px;
  line-height: 46px;
}
</style>
