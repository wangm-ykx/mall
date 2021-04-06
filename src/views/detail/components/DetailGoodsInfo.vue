<template>
  <div class="detail-goods-info">
    <img
        v-for="item in detailImages"
        :src="item"
        @load="imageLoad"
    />
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    detailImages: Array,
    default() {
      return []
    }
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    // 监听图片加载完毕，解决better-scroll滚动区域高度计算不准问题
    imageLoad() {
      if(++this.counter === this.detailImages.length) {
        // 所有图片加载完再去刷新，且只调用一次
        this.$emit('imageLoad')
      }
    }
  }
}
</script>

<style scoped>
.detail-goods-info{
  border-top: 5px solid #cccccc;
}
</style>
