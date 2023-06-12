import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';  
import 'element-ui/lib/theme-chalk/index.css';
import './utils/axios' //引入axios
import Vant from 'vant';
import 'vant/lib/index.css';
// 引用axios触发其中的代码
import './utils/axios'
import BackTop from './components/back-top'
Vue.config.productionTip = false
Vue.use(ElementUI);   //注册组件
Vue.use(Vant);
Vue.use(BackTop);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
