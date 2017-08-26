import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import axios from 'axios'

window.axios=axios
Vue.use(Vuetify)
Vue.config.productionTip = false

window.Event= new Vue;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
