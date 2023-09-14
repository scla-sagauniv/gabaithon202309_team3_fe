<script setup>
import { ref } from 'vue'
// inputに入力した文字をconsole.logで表示する
const input = ref('')
const handleInput = () => {
  console.log(input.value)
}

</script>
<template>
  <input class="input" type="text" v-model="input" @input="handleInput" placeholder="入力してください">
</template>
<style scoped>
  .input {
    width: 100%;
    color: #ffffff;
    background: #444444;
    font-size: 1.2rem;
    padding: 10px 20px;
    border-radius: 7px;
    background: #444444;
    box-shadow: inset 6px 6px 6px #363636,
            inset -6px -6px 6px #525252;
    border: none;
    transition: 0.3s;
  }
  .input:focus {
    outline: none;
    box-shadow: inset 3px 3px 3px #363636,
            inset -3px -3px 3px #525252;
  }
  .input::placeholder {
    color: #565656;
  }
  .input:hover {
    box-shadow: inset 3px 3px 3px #363636,
            inset -3px -3px 3px #525252;
  }
</style>