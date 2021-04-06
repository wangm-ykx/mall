<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-base-info">
    <div class="title">{{goods.title}}</div>
    <div class="price">¥{{goods.price}}</div>
    <div class="other-info">
      <span>销量：{{ goods.soldNum }}</span>
      <span>收藏：{{ goods.collectNum }}人</span>
      <span>{{ goods.deliver }}</span>
    </div>
    <div class="services">
      <div v-for="item in goods.services" class="item">
        <img v-if="item.icon" src="~assets/img/common/tick.svg">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
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
.detail-base-info{
  padding: 3vw 2.5vw 0 2.5vw;
  font-size: 13px;
  color: black;
}
.price{
  color: var(--color-high-text);
  padding: 3vw 0;
  font-size: 16px;
}
.other-info{
  display: flex;
  justify-content: space-between;
  padding-bottom: 2vw;
  font-size: 12px;
  color: var(--color-text);
}
.services{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: var(--color-text);
}
.services {
  padding: 3.5vw;
  border-top: .5px solid #cccccc;
}
.services .item img{
  width: 3.5vw;
}
</style>
