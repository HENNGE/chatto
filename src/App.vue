<template>
  <div id="App">
    <router-view name="Header" />
    <router-view name="Sidebar" />
    <router-view name="Channels" />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

html,
body,
#App {
  width: 100%;
  height: 100%;
  margin: 0;
}

#App {
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0;
  padding: 10px 15px;
}
</style>
