<script setup>
import { ref } from "vue";
let count = ref(0);
defineProps(['button']);
</script>

<template>
    <div>
        <button type="button" class="name" value="value">{{ button }}</button>
    </div>
</template>


<style>
   .name{
    border-radius: 17px;
    background: linear-gradient(145deg, #3d3d3d, #494949);
    box-shadow:  15px 15px 13px #323232,
                -15px -15px 13px #565656;
    color: #55F065;
    text-align: center;
    padding: 15px 35px;
    font-size: 20px;
  }
</style>