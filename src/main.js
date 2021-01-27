// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './plugin/element'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import './assets/common.css'
import less from 'less'
Vue.use(less)
Vue.config.productionTip = false
Vue.use(elementUI)
axios.defaults.baseURL ='https://cnodejs.org/api/v1';

Vue.prototype.$http = axios;
console.log(Vue.$http)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
