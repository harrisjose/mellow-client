import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/app.css'
import './assets/styles/tailwind.css'
import vuetify from './plugins/vuetify'
import InlineSvg from '@/components/InlineSvg.vue'

Vue.config.productionTip = false
Vue.component('InlineSvg', InlineSvg)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
