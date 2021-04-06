<template>
  <div class="detail-shop-info">
    <div class="shop">
      <img src="~assets/img/common/shop-logo.svg">
      <div>{{ shopInfo.name }}</div>
    </div>
    <div class="info">
      <div>
        <div>{{ shopInfo.totalSoldNum }}</div>
        <div class="div-second">总销量</div>
      </div>
      <div>
        <div>{{ shopInfo.babyNum }}</div>
        <div class="div-second">全部宝贝</div>
      </div>
      <div class="divider"></div>
      <div class="level-box">
        <div>描述相符
          <span class="level">{{ shopInfo.descLevel }}</span>
          <span class="tag" :style="{background: shopInfo.descLevel >= 4 ? 'green' : 'red'}">{{shopInfo.descLevel >= 4 ? '高' : '低'}}</span>
        </div>
        <div class="div-second">价格合理
          <span class="level">{{ shopInfo.priceLevel }}</span>
          <span class="tag" :style="{background: shopInfo.priceLevel >= 4 ? 'green' : 'red'}">{{shopInfo.priceLevel >= 4 ? '高' : '低'}}</span>
        </div>
        <div class="div-second">质量满意
          <span class="level">{{ shopInfo.qualityLevel }}</span>
          <span class="tag":style="{background: shopInfo.qualityLevel >= 4 ? 'green' : 'red'}">{{shopInfo.qualityLevel >= 4 ? '高' : '低'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-shop-info{
  border-top: 5px solid #cccccc;
  padding: 5vw 2.5vw;
  font-size: 12px;
}
.shop{
  display: flex;
  align-items: center;
  font-size: 14px;
}
.shop img{
  padding: 5vw;
  width: 15vw;
  margin-right: 2vw;
  border: 1px solid #cccccc;
  border-radius: 50%;
}
.info{
  display: flex;
  padding: 3vw 7vw 0 6vw;
  justify-content: space-between;
  align-items: center;
}
.info .div-second{
  margin-top: 3vw;
}
.info .divider{
  height: 40px;
  border-right: 1px solid #cccccc;
}
.level-box{
  font-size: 12px;
}
.level-box .tag{
  border-radius: 1px;
  padding: 3px;
  margin-left: 8px;
  color: white;
  font-size: 6px;
}
.level-box .level{
  margin-left: 8px;
  color: red;
}
</style>
