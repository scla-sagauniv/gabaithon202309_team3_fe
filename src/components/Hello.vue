<script setup>
  import { ref } from "vue";
  let count = ref(0);
  defineProps(['title']);
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>


<style>
</style>