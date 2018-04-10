const state = {
  isConnected: false,
  message: '',
  reconnectError: false,
};

const mutations = {
  SOCKET_ONOPEN(state) {
    state.socket.isConnected = true;
  },
  SOCKET_ONCLOSE(state) {
    state.socket.isConnected = false;
  },
  SOCKET_ONERROR(state, event) {
    console.error(state, event);
  },
  // default handler called for all methods
  SOCKET_ONMESSAGE(state, message) {
    state.message = message;
  },
  // mutations for reconnect methods
  SOCKET_RECONNECT(state, count) {
    console.info(state, count);
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true;
  },
  setUsername(state, username) {
    state.username = username;
  },
  addChannel(state, channel) {
    state.channels.push(channel);
  },
};

export default {
  state,
  mutations,
};
