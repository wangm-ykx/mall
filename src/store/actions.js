import {
  ADD_CONUT,
  ADD_TO_CART,
  SELECT_ALL,
  UNSELECT_ALL
} from "@/store/mutation-types";

export default {
  // 加入购物车
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let goodsIndex = context.state.cartList.findIndex(item => item.id === payload.id)
      if(goodsIndex > -1) {
        // 数量+1
        context.commit(ADD_CONUT, context.state.cartList[goodsIndex])
        resolve('数量+1')
      } else {
        // 商品+1
        payload.count = 1
        context.commit(ADD_TO_CART,payload)
        resolve('商品+1')
      }
    })
  },
  // 全选按钮点击
  selectALlOrNot({ commit }, payload) {
    if (payload) {
      // 目前全选，则全不选
      commit(UNSELECT_ALL)
    } else  {
      // 目前非全选，则全选
      commit(SELECT_ALL)
    }
  }
}
