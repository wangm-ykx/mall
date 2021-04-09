<template>
  <div class="bottom-bar">
    <div class="check-box">
      <check-button
          class="check-button"
          :is-checked="allChecked"
          @click.native="totalCheckClick"></check-button>
      <span>全选</span>
    </div>
    <div class="total">合计¥：{{totalPrice}}</div>
    <div class="calculate" @click="calculateHandler">去结算({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList.filter(item => item.checked)
      .reduce((currentTotal, currentItem) => {
        return currentTotal + currentItem.price * currentItem.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    allChecked() {
      return this.$store.state.cartList.length > 0 && this.$store.state.cartList.every(item => item.checked)
    }
  },
  methods: {
    totalCheckClick() {
      this.$store.dispatch('selectALlOrNot', this.allChecked)
    },
    calculateHandler() {
      if(!this.checkLength) {
        this.$toast.show('请选择要结算的商品')
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  height: 40px;
  background: #eee;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
}
.check-box{
  display: flex;
  /*align-items: center;*/
  /*height: 100%;*/
  padding-left: 2vw;
}
.check-box span{
  margin-left: 5px;
}
.check-button{
  width: 20px;
  height: 20px;
}
.total{
  margin-left: 20px;
}
.calculate{
  background: #FF6B05;
  height: 100%;
  margin-left: auto;
  color: white;
  line-height:40px;
  padding: 0 4vw;
}
</style>
