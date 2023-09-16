<script setup>
import Header from "../components/Header.vue"
import IdeaTail from "../components/IdeaTail.vue";
// import { samples } from "../assets/sample.json";
import axios from "axios";
import { onMounted } from "vue";
import { ref } from 'vue';

let msg = ref('');

async function fetchData() {
  try {
    const response = await axios.get('/database');
    msg.value = response.data;
    console.log(msg.value);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  fetchData();
});
</script>

<template>
  <Suspense>
    <template #default>
      <div id="app" class="home-container">
        <Header header="IdeaHub"></Header>
        <div class="home-wrapper">
          <IdeaTail v-for="data in msg" :key="data.id" :title="data.name" :text="data.description" :img="data.thumbnail"/>
        </div>
      </div>
    </template>
    <template #fallback>
      <!-- Loading state content goes here -->
      <p>Loading...</p>
    </template>
  </Suspense>
</template>

<style scoped>
.home-container {
  padding: 30px 40px;
  background-color: #444444;
  min-height: 100vh;
}
</style>