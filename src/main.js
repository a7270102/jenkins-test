import Vue from 'vue'
import App from './App'

import router from './router'
import axios from 'axios' 
// i18n
import i18n from './i18n/i18n'
import Lang from './lang/lang'
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  ...App
}).$mount('#app');
