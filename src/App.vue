<script setup>
  import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #55F065;
  min-height: 100vh;
  background: #444444;
}
</style>