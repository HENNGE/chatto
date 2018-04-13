<template>
  <form @submit.prevent="onSubmit">
    <label>
      Name:
      <input name="username" value="" placeholder="Enter" />
      <input type="submit" value="Save" />
    </label>
  </form>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Username",
  computed: mapState({
    username: state => state.user.username,
  }),
  methods: {
    onSubmit(event) {
      const username = event.target.username.value;

      this.setUserName(username);
    },
    setUserName(username) {
      this.$socket.sendObj({
        command: 'NICK',
        params: username,
      });

      this.$store.commit('setUsername', username);
    },
  },
}
</script>

