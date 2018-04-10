import Vue from 'vue';
import VueNativeSock from 'vue-native-websocket';

import App from './App';
import router from './router';

Vue.use(VueNativeSock, 'wss://simple-golang-chat-demo.herokuapp.com/ws');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
