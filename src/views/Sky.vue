<script setup>
import Header from "../components/Header.vue";
import FormTail from "../components/FormTail.vue";
</script>


<template>
    <div class="fuyu">
        <Header header=Ideahub class="natu" />
        <FormTail class="sui" />
    </div>
</template>

<style scoped>
.natu{
    margin: 0px 60px 60px 60px;
    
}
.sui{
    margin: 0px 60px 0px 60px;
}
.fuyu {
  padding: 40px 40px;
  background-color: #444444;
  min-height: 100vh;
}
</style>