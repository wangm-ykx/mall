import Vue from 'vue'
import Vuex from 'vuex'
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

Vue.use(Vuex)

const state = {
  cartList: [
    {
      id: "10000",
      image: "http://dummyimage.com/375x195/a5f279/FFFFFF&text=detail even",
      title: "过只千毛打给至酸深而合气做海们了千程称厂空即何压作省细什号劳根报将关带质识社知属自便别何安点处很电红",
      price: 87,
      checked: true,
      count: 2
    }
  ]
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {}
})
