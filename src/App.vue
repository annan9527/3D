<template>
  <div id="app">
    <!-- 首页 -->
   <Home></Home>
  </div>
</template>

<script>
import Home from './views/home/index.vue';
export default {
    name: "App",
    components: { Home }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
