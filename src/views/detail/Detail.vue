<template>
  <div class="detail">
    <detail-nav-bar
        ref="navBar"
        class="detail-nav"
        @titleClick="titleClick"></detail-nav-bar>
    <scroll
        ref="scroll"
        class="content"
        :probe-type="3"
        @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
      <detail-goods-info
          :detail-images="detailImages"
          @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="param" :params-info="paramsInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <div ref="recommend" class="recommends">推荐</div>
      <goods-list :goods="recommends"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="backTopShow"></back-top>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
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
import DetailBottomBar from "@/views/detail/components/DetailBottomBar";
import GoodsList from "@/components/content/goods/GoodsList";
import Toast from "@/components/common/toast/Toast";
import { getDetail, getRecommend } from "@/network/detail";
import { debounce } from 'common/utils'
import { backMixin } from "@/common/mixinx";
import { mapActions } from 'vuex'

export default {
  name: "Detail",
  mixins: [backMixin],
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    Toast
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
      commentInfo: [],
      // 推荐信息
      recommends: [],
      // 标题对应位置
      themeTopYs: [],
      // 内容对应标题
      currentIndex: 0
    }
  },
  created() {
    // 1.保存详情id
    this.id = this.$route.params.id

    // 2.根据详情id请求详情
    this.getDetail(this.id)
    // 3.请求推荐数据
    this.getRecommend()
  },
  mounted() {
    /*图片加载完成的事件监听*/
    // 防抖包装
    const refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on('detailItemImageLoad', () => {
      refresh()
    })
  },
  methods: {
    ...mapActions(['addCart']),
    /*监听事件*/
    imageLoad() {
      this.$refs.scroll.refresh()
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 44, 100)
    },
    contentScroll(position) {
      // 判断backTop是否显示
      this.backTopShow = (-position.y) > 600
      // 滚动到对应内容显示对应标题
      let compareY =  -position.y + 44
      // let [ goodsTopY, paramTopY, commentTopY, recommendTopY ] = this.themeTopYs
      // if( compareY < paramTopY ) {
      //   this.$refs.navBar.currentIndex = 0
      // } else if( compareY >= paramTopY && compareY < commentTopY) {
      //   this.$refs.navBar.currentIndex = 1
      // } else if( compareY >= commentTopY && compareY < recommendTopY) {
      //   this.$refs.navBar.currentIndex = 2
      // } else {
      //   this.$refs.navBar.currentIndex = 3
      // }
      for(let i = 0; i < this.themeTopYs.length - 1; i++) {
        if(this.currentIndex !== i && (compareY >= this.themeTopYs[i] && compareY < this.themeTopYs[i + 1])) {
          this.currentIndex = i
          this.$refs.navBar.currentIndex = this.currentIndex
        }
      }
    },
    // 加入购物车
    addToCart() {
      // 获取购物车需要展示的信息
      const product = {}
      product.id = this.id
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.price = this.goods.price
      this.addCart(product).then(res => {
        this.$toast.show(res)
      })
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
    },
    getRecommend() {
      getRecommend().then(res => {
        this.recommends = res.result.list
        // this.$nextTick中，根据最新的数据，对应的dom已经渲染出来了，但是图片没有加载完
        // offsetTop值不对，一般都是因为图片异步加载还没完成，没有计算在内
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
  height: calc(100% - 44px - 49px);
}
.recommends{
  border-top: 5px solid #cccccc;
  padding: 4vw 2.5vw;
}
</style>
