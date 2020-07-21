import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index'

import toast from '@/components/common/toast/index'

Vue.config.productionTip = false

//添加时间总线对象
Vue.prototype.$bus = new Vue()

//注册toast插件
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
