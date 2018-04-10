const state = {
  username: '',
};

const mutations = {
  setUsername(state, username) {
    state.username = username;
  },
};

export default {
  state,
  mutations,
};
