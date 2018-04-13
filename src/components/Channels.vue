<template>
  <nav class="Channels" />
</template>

<script>
export default {
  name: 'Channels',
  created() {
    this.$socket.sendObj({
      command: 'JOIN',
      params: '#random'
    });
  }
}
</script>

