<template>
  <div class="p-2">
    <HomeColabora/>
  </div>
  
</template>

<script>

import HomeColabora from './components/layouts/HomeColabora.vue'


export default {
  name: 'App',
  components: {
    HomeColabora
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303030;
  margin-top: 60px;
}
body{
  background-color: #303030;
}
</style>
