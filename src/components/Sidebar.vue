<template>
  <aside class="Sidebar">
    <h5 class="Sidebar__header">Channels</h5>
    <h5 v-if="username">
      Welcome, {{ username }}!
    </h5>
    <form @submit.prevent="onSubmit">
      <label>
        Name:
        <input name="username" value="" placeholder="" />
        <input type="submit" value="Save" />
      </label>
    </form>
    <nav class="Channels" />
  </aside>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Sidebar',
  data() {
    return {
      res: {},
    };
  },
  computed: mapState({
    username: state => state.user.username,
  }),
  created() {
    this.$options.sockets.onmessage = (message) => {
      this.setUsername(message);
    };
  },
  methods: {
    setUsername(message) {
      const json = JSON.parse(message.data);
      console.log(json);
    },
    onSubmit(event) {
      const username = event.target.username.value;

      this.$socket.sendObj({
        command: 'NICK',
        params: username,
      });

      this.$store.commit('setUsername', username);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}

.Sidebar {
  width: 200px;
  height: 100%;
  background-color: #f1f1f1;
}

.Sidebar__header {
  margin: 0;
  padding: 10px 15px;
}
</style>
