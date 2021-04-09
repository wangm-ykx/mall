import BackTop from "components/content/backTop/BackTop";

export const backMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      backTopShow: false
    }
  },
  methods: {
    // 回到顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}
