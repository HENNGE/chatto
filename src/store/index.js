import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import socket from './sockets';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    socket,
  },
});
