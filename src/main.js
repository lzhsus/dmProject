// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css';
import store from './vuex/stork'

// import Axios from "axios";

// Vue.config.productionTip.Axios=Axios
Vue.use(Vuex)
Vue.use(ElementUI);
// App.use('/mock', mock());
Vue.config.productionTip = false

// 如果使用模块系统，确保之前调用过 Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
