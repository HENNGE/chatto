import Vue from 'vue';
import VueNativeSock from 'vue-native-websocket';

import router from './router';
import store from './store/index';

Vue.use(
  VueNativeSock,
  'wss://simple-golang-chat-demo.herokuapp.com/ws',
  {
    store,
    format: 'json',
  },
);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  store,
  router,
}).$mount('#app');
