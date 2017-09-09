import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import axios from 'axios'

window.token=localStorage.getItem('token');

window.axios=axios
window.axios.defaults.baseURL='http://weblloapi.dev'
window.axios.defaults.params={api_token:window.token}

Vue.use(Vuetify)
Vue.config.productionTip = false

window.Event= new Vue;
// window.baseApiUrl="http://weblloapi.dev/";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
