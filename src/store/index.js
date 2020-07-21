import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

//创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    goodsAddOne(state, oldProduct) {
      oldProduct.count += 1
    },
    addGoods(state, payload) {
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        let oldProduct = null
        for (let item of context.state.cartList) {
          if (item.iid == payload.iid){
            oldProduct = item
          }
        }
        if (oldProduct) {
          context.commit('goodsAddOne', oldProduct)
          resolve('当前商品数量+1')
        }else {
          payload.count = 1;
          payload.isCheck = true;
          context.commit('addGoods', payload)
          resolve('添加了新的商品')
        }
      })
    }
  }
})

//挂载到vue实例上
export default store