<script setup>
import { ref } from "vue";
let count = ref(0);
defineProps(['button']);
</script>

<template>
    <div>
        <button type="button" class="name" value="value">
          <slot>
            {{ button }}
          </slot>
        </button>
    </div>
</template>


<style>
  .name{
    border-radius: 17px;
    background: linear-gradient(145deg, #3d3d3d, #494949);
    box-shadow:  6px 6px 5px #323232,
                -6px -6px 5px #565656;
    color: #55F065;
    text-align: center;
    padding: 10px 25px;
    font-size: 12px;
  }
</style>