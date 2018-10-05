// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueRx from 'vue-rx'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'

// import elementUi from "element-ui"

Vue.use(MintUI)

Vue.use(VueRx)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
