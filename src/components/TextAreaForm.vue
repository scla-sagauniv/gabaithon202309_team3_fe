<script setup>
import { ref } from 'vue'
// textareaに入力した文字をconsole.logで表示する
const textarea = ref('')
const handletextarea = () => {
  console.log(textarea.value)
}
</script>

<template>
  <textarea class="textarea" v-model="textarea" @textarea="handletextarea" placeholder="入力してください" maxlength="300"/>
</template>
<style scoped>
  .textarea {
    width: 100%;
    height: 170px;
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
  .textarea:focus {
    outline: none;
    box-shadow: inset 3px 3px 3px #363636,
            inset -3px -3px 3px #525252;
  }
  .textarea::placeholder {
    color: #565656;
  }
  .textarea:hover {
    box-shadow: inset 3px 3px 3px #363636,
            inset -3px -3px 3px #525252;
  }
  /* スクロールバー */
  .textarea::-webkit-scrollbar {
    width: 6px;
    height: 10px;
  }

  .textarea::-webkit-scrollbar-thumb {
    background-color: #ffffff12;
    /* 透過 */
    border-radius: 10px;
  }
</style>