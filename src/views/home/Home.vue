<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
        ref="tabControl1"
        v-show="isTabFixedShow"
        class="fixed-tab-control"
        :titles="['流行','新款','精选']"
        @itemClick="tabClick"></tab-control>
    <scroll
        class="content"
        ref="scroll"
        :probe-type="3"
        :pull-up-load="true"
        @scroll="contentScroll"
        @pullingUp="loadMore">
      <home-swiper
          :banners="banners"
          @swiperImageLoad="swiperImageLoad"
      />
      <tab-control
          ref="tabControl2"
          :titles="['流行','新款','精选']"
          @itemClick="tabClick"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="backTopShow"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";
import HomeSwiper from './components/HomeSwiper';

import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper
  },
  data() {
    return {
      // 轮播图
      banners: [],
      // 商品信息
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: 'pop',
      // 回到顶部
      backTopShow: false,
      // 吸顶tab
      tabOffsetTop: 0,
      isTabFixedShow: false,
      // 离开位置信息
      saveY: 0
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  activated() {
    // this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  mounted() {
    /*图片加载完成的事件监听*/
    // 防抖包装
    const refresh = this.debounce(this.$refs.scroll.refresh)
    // 监听item中图片加载完成
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })
  },
  methods: {
    /*监听事件*/
    // bscrol刷新防抖
    debounce(func, delay = 1000) {
      let timer = null
      return function () {
        if(timer) clearTimeout()
        timer = setTimeout(() => {
          func.apply(this)
        }, delay)
      }
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.indexChange(index)
      this.$refs.tabControl2.indexChange(index)
    },
    // 回到顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    // 回到顶部显示控制
    contentScroll(position) {
      // 判断backTop是否显示
      this.backTopShow = (-position.y) > 630
      // 决定tabControl是否吸顶
      this.isTabFixedShow = (-position.y) > this.tabOffsetTop
    },
    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad() {
      // 获取tabControl的offsetTop
      // 所有的组件都有一个属性$el：用于获取组件中的元素，元素才能获取offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    /*接口请求*/
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.result.list)
        this.goods[type].page += 1
        // 等接口请求完成之后才能再加载下一次，避免多次请求？所以才在这个地方完成加载更多
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.fixed-tab-control{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>
