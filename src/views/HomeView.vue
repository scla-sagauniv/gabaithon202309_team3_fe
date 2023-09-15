<script setup>
import Header from "../components/Header.vue"
import IdeaTail from "../components/IdeaTail.vue";
import { samples } from "../assets/sample.json";
import axios from 'axios';
// export default {
//   data() {
//     return {
//       formData: {
//         name: '',
//         description: '',
        
//       },
//       result: "",
//     };
//   },
//   methods: {
//     postData() {
//       axios.get('/database')
//         .then(response => {
//           console.log('Data sent successfully:', response.data);
//           this.result = response.data;
//         })
//         .catch(error => {
//           console.error('Error sending data:', error);
//         });
//     },
//   },
// };
</script>

<template>
  <div id="app" class="home-container">
    <Header header="IdeaHub"/>
    <div class="home-wrapper">
      <IdeaTail v-for="data in samples" :key="data.id" :title="data.name" :text="data.description" :img="data.url"/>
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