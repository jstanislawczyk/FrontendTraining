import Vue from 'vue'
import App from './App'
import router from './router'
import TestMessageComponent from './components/TestMessageComponent';

Vue.config.productionTip = false

Vue.component('global-test-component', TestMessageComponent)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
