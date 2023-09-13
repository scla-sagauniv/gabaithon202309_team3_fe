<script setup>
import { uploadFileToBlob } from "../lib/blobUpload";
let file = null;
const handleFileUpload = (event) => {
  file = event.target.files[0];
}
const uploadFile = async () => {
  try {
    // アップロード写真のurlを取得
    const url = await uploadFileToBlob(file);
    console.log('ファイルがアップロードされました。');
    console.log("response: "+url);
  } catch (error) {
    console.error('アップロードエラー:', error);
  }
}
</script>

<template>
  <div>
    <input type="file" @change="handleFileUpload">
    <button @click="uploadFile">Upload</button>
  </div>
</template>

<style scoped>
</style>