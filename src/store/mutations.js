import {
  ADD_CONUT,
  ADD_TO_CART,
  SELECT_ALL,
  UNSELECT_ALL
} from "@/store/mutation-types";

export default {
  // 数量+1
  [ADD_CONUT](state, payload) {
    payload.count++
  },
  // 商品+1
  [ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  // 全选
  [SELECT_ALL](state) {
   state.cartList.map(item => {
      item.checked = true
    })
  },
  // 全不选
  [UNSELECT_ALL](state) {
    state.cartList.map(item => {
      item.checked = false
    })
  }
}
