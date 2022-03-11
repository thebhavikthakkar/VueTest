import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router'
// import Icon from 'vue-awesome/components/Icon'
Vue.config.productionTip = false
// Vue.component('v-icon', Icon)

new Vue({
  render: h => h(App),
  router,
  vuetify
}).$mount('#app')
