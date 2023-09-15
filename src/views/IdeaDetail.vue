<script setup>
import Header from "../components/Header.vue"
import DetailTail from "../components/DetailTail.vue"
import { samples } from "../assets/sample.json";
defineProps(['id']);
</script>
<template>
  <div id="app">
    <div id="app" class="idea-container">
        <Header header="IdeaHub"/>
    <div class="home-wrapper">
        <DetailTail 
            title="コーヒーカップの蓋をコースターとして再利用" 
            text="コーヒーカップの蓋は、コースターとして再利用できます。カップの底に置くと、コーヒーや飲み物のシミを防げます。" 
            img="a.url"/>
    </div>
    </div>
  </div>
</template>

<style scoped>
.idea-container {
  padding: 30px 40px;
  background-color: #444444;
  min-height: 100vh;
}
</style>

