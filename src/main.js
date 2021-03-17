import Vue from 'vue'
import App from './app.vue'
import router from '@/router/index'
import utils from '@/tools/utils'

import "@/assets/styles/base.css";
import "@/assets/fonts/style.css";

Vue.config.productionTip = false

Vue.use(utils)

import CHeader from '@/components/common/c-header'
import CFooter from '@/components/common/c-footer'
import CBg2 from '@/components/common/c-bg-2'
import CBg5 from '@/components/common/c-bg-5'
import CBg6 from '@/components/common/c-bg-6'

Vue.component('c-header', CHeader)
Vue.component('c-footer', CFooter)
Vue.component('c-bg-2', CBg2)
Vue.component('c-bg-5', CBg5)
Vue.component('c-bg-6', CBg6)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
