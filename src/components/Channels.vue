<template>
  <nav class="Channels">
    <button 
      v-if="username"
      @click="createChannel">
      Create Channel
    </button>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Channels',
  computed: mapState({
    username: state => state.user.username
  }),
  created() {
    this.$options.sockets.onmessage = (data) => {
      this.showMessage(data);
    }
  },
  methods: {
    showMessage(data) {
      console.log(data);
    },
    createChannel() {
      this.$socket.sendObj({
        command: 'JOIN',
        params: '#random'
      });
    }
  },
}
</script>

