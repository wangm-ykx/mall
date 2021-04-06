<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll
        ref="scroll"
        class="content">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
      <detail-goods-info
          :detail-images="detailImages"
          @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :params-info="paramsInfo"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import DetailNavBar from "@/views/detail/components/DetailNavBar";
import DetailSwiper from "@/views/detail/components/DetailSwiper";
import DetailBaseInfo from "@/views/detail/components/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/components/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/components/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/components/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/components/DetailCommentInfo";
import { getDetail } from "@/network/detail";

export default {
  name: "Detail",
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo
  },
  data() {
    return {
      id: null,
      // 顶部轮播图
      topImages: [],
      // 商品基本信息
      goods: {},
      // 店铺信息
      shopInfo: {},
      // 商品详情信息
      detailImages: [],
      // 商品参数
      paramsInfo: [],
      // 评论信息
      commentInfo: []
    }
  },
  created() {
    // 1.保存详情id
    this.id = this.$route.params.id

    // 2.根据详情id请求详情
    this.getDetail(this.id)
  },
  methods: {
    /*监听事件*/
    imageLoad() {
      this.$refs.scroll.refresh()
    },
    /*接口请求*/
    getDetail(id) {
      getDetail(id).then(res => {
        const { result }= res
        const { topImages, itemInfo, services, shopInfo,
          detailImages, itemParams, commentInfo } = result
        this.topImages = topImages
        this.goods = {
          ...itemInfo,
          services
        }
        this.shopInfo = shopInfo
        this.detailImages = detailImages
        this.paramsInfo = itemParams
        this.commentInfo = commentInfo
      })
    }
  }
}
</script>

<style scoped>
.detail{
  position: relative;
  background: #fff;
  z-index: 9;
  height: 100vh;
}
.detail-nav{
  position: relative;
  z-index: 9;
  background: white;
}
.content{
  height: calc(100% - 44px);
}
</style>
