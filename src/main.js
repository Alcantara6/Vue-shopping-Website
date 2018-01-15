import Vue from 'vue';
import axios from 'axios';

import app from './App';
import router from './router';

// 引入外部CSS
import '../static/style/iconfont.css'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app }
})