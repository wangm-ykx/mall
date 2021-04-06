<template>
  <div class="back-top" @click="backTopClick">
    <img src="~assets/img/common/top.png">
  </div>
</template>

<script>
export default {
  name: "backTop",
  methods: {
    backTopClick() {

    }
  }
}
</script>

<style scoped>
.back-top{
  position: fixed;
  right: 10px;
  bottom: 55px;
}
img{
  width: 43px;
}
</style>
