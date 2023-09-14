<script setup>
  import { ref } from "vue";
  let count = ref(0);
  defineProps(['title']);
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="center">

      <button @click="count++" class="button1">You clicked me {{ count }} times.</button>
    </div>
  </div>
</template>


<style>


</style>