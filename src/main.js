import Vue from 'vue'
import App from '@/app.vue'
import router from '@/router'
import { addClass } from '@/utils'

const util = {
	install(Vue, name = "$addClass") {
		Object.defineProperty(Vue.prototype, name, { value: addClass })
	}
}
Vue.use(util)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')