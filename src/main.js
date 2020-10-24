import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import './config/axios' // construído para tratar a expiração do token
import './config/mq' // construído para tratar a responsividade do menu

import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORÁRIO!
// require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik1hdGhldXMgTS4iLCJlbWFpbCI6Im1hdGhtYWdzb25AZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYwMjk3OTUxNywiZXhwIjoxNjAzMjM4NzE3fQ.b0PXyFgcpq1GnSkA4Icbzw8QaQa99gn6_8HAnJ7tehM'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')