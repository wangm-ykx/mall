<template>
  <div class="item">
    <div class="item-selector">
      <check-button class="check-button" :isChecked="product.checked" @click.native="checkClick"/>
    </div>
    <img :src="product.image">
    <div class="info">
      <div class="title">{{product.title}}</div>
      <div>
        <div class="price">¥{{product.price}}</div>
        <div class="number">X{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";

export default {
  name: "CartListItem",
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style scoped>
.item{
  display: flex;
  padding: 2vw;
  border-bottom: 1px solid #cccccc;
  justify-content: space-between;
}
.item-selector{
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.check-button{
  height: 20px;
  width: 20px;
}
.item img{
  height: 30vw;
  width: 40vw;
  border-radius: 3vw;
}
.info{
  margin-left: 2vw;
  padding-top: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title{
  width: 45vw;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.price{
  color: red;
  float: left;
}
.number{
  float: right;
}
</style>
