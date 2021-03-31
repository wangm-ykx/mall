<template>
  <div class="goods-list-item">
    <img class="img" :src="goodsItem.img">
    <div class="desc">{{goodsItem.desc}}</div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-list-item{
  font-size: 14px;
  width: 48%;
  margin-bottom: 2vw;
}
.img{
  display: block;
  border-radius: 3vw;
}
.desc{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 1vw;
}
</style>
