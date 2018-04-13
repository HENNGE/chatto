<template>
  <aside class="Sidebar">
    <h5 class="Sidebar__header">Channels</h5>
    <h5>
      Welcome
      <span v-if="username">{{ username }}!</span>
      <span v-else>...wait, who are you?</span>
    </h5>
    <nav class="Channels" />
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
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
