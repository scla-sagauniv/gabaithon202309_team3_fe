<script setup>
import Header from "../components/Header.vue"
import IdeaTail from "../components/IdeaTail.vue";
import { samples } from "../assets/sample.json";
console.log(samples);
console.log(samples[0].name);
</script>

<template>
  <div id="app" class="home-container">
    <Header header="IdeaHub"/>
    <div class="home-wrapper">
      <IdeaTail v-for="a in samples" :key="a.id" :title="a.name" :text="a.text" :img="a.url"/>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  padding: 30px 40px;
  background-color: #444444;
  min-height: 100vh;
}
</style>