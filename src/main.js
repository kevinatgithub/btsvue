import Vue from 'vue'
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import App from './App.vue'

Vue.config.productionTip = false

import routes from './routes'

new Vue({
  render: h => h(App),
  router : routes
}).$mount('#app')
