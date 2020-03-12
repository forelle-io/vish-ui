import Vue from 'vue'
import App from './App.vue'
import VishUI from './index'
Vue.use(VishUI)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
