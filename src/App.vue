<script setup>
  import Hello from './components/Hello.vue';
  import BlobUpload from './components/BlobUpload.vue';
  import Button from './components/button.vue';
</script>

<template>
  <div class="kuro" id="app">
      <Hello />
      <BlobUpload />
      <Button  class="buttonsize" button="aaa"/>
  </div>
</template>

<style scoped>
  .kuro{
    background-color: #444444;
    min-height: 100vh;
  }
  .buttonsize{
    text-align: center;
    padding: 50px;
  }

</style>