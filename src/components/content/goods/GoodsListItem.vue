<template>
  <div class="goods-list-item" @click="itemClick">
    <img class="img" v-lazy="goodsItem.img" @load="imageLoad">
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
  },
  methods: {
    imageLoad() {
      if(this.$route.path.indexOf('home') > -1) {
        // 首页list图片加载完成
        this.$bus.$emit('homeItemImageLoad')
      } else if(this.$route.path.indexOf('detail') > -1){
        // 详情页list图片加载完成
        this.$bus.$emit('detailItemImageLoad')
      }
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.id)
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
