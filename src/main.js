import Vue from 'vue'
import App from './App.vue'
import '../scss/custom.scss'
import './assets/css/style.css'
import './assets/css/sidemenu.css'
//Importing vue router
import VueRouter from 'vue-router'
//importing bootstrap & bootstrap css
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Routes from './routes';


// Installing thex router
Vue.use(VueRouter)
const router = new VueRouter({
  routes:Routes,
  mode:'history'
})

// Installing the module bundlers
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
