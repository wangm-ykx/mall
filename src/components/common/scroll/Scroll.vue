<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  props: {
    // 是否实时侦测，开启后影响性能，所以需要时才开启
    //（0是默认不侦测，1是显示定义不侦测，2是手指滚动过程中侦测，手指离开后的惯性滚动不侦测，3是只要是滚动都侦测
    probeType: {
      type: Number,
      default : 0
    },
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // 1.创建，vue中准确获取元素的方法refs
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 2.监听滚动的位置，是否显示回到顶部
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })
    // 3.监听上拉事件（需要监听的再监听）
    if(this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}

</script>

<style scoped>

</style>
