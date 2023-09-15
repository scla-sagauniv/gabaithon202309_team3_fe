<script>
import Header from "../components/Header.vue"
import IdeaTail from "../components/IdeaTail.vue";
import { samples } from "../assets/sample.json";
import axios from 'axios';

export default {
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    getMessage() {
      axios.get('/database')
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.getMessage();
  },
};
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