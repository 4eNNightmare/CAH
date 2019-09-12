import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from './plugins/firebase'
import lodash from './plugins/lodash'
import dialog from './plugins/dialog'

Vue.use(firebase)
Vue.use(lodash)
Vue.use(dialog)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
