// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
// 引入全局css
import './assets/style/style.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(dataV)
Vue.config.productionTip = false
import 'echarts'
import 'echarts-gl'
// import echartsGL from 'echarts-gl'
// Vue.prototype.$echartsGL = echartsGL // 引入组件（将echarts注册为全局）
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
