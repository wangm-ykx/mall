<template>
  <div class="detail-param-info">
    <div v-for="item in paramsInfo" class="param-item">
      <div class="key">{{ item.key }}</div>
      <div class="value">{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramsInfo: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.detail-param-info{
  border-top: 5px solid #cccccc;
}
.param-item{
  display: flex;
  padding: 3vw 5vw;
  border-bottom: 1px solid #cccccc;
}
.key{
  flex-basis: 35%;
}
.value{
  color: var(--color-high-text);
}
</style>
