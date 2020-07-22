import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import '../scss/custom.scss'
import './assets/css/style.css'
import './assets/css/sidemenu.css'


//importing bootstrap & bootstrap css
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



// Installing the module bundlers
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  el: '#app',
  render: h => h(App),
  // router
})
