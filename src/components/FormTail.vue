<script setup>
import { ref } from 'vue'
import ImgTail from './ImgTail.vue';
import InputForm from './InputForm.vue';
import TextAreaForm from './TextAreaForm.vue';
import Button from './Button.vue';
import axios from 'axios';

let name = ref('');
let description = ref('');
let url = ref('');
let thumbnail = ref('');

const generateImage = async () => {
  try {
    const response = await axios.post('/generate', { 
      name: name.value, 
      description: description.value });
    url.value = response.data.url;
    console.log(url.value);
    thumbnail.value = url.value;
  } catch (error) {
    console.error(error);
  }
};

const postData = async () => {
  try {
    const response = await axios.post('/update', {
      name: name.value,
      description: description.value,
      category: "",
      thumbnail: thumbnail.value[0] // Replace with your thumbnail data
    });
    console.log(response.data.result);
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="tail">
    <div class="upload-container">
      <ImgTail v-bind:img="url"></ImgTail>
      <div class="upload-buttons-container">
        <Button class="upload-button upload-button-primary" @click="generateImage">画像を生成</Button>
        <Button class="upload-button upload-button-primary" @click="">画像を選択</Button>
      </div>
    </div>
    <div class="form-container">
      <form>
        <div class="form-title">
          <p>タイトル</p>
          <InputForm v-model="name" />
        </div>
        <div class="form-explain">
          <p>説明</p>
          <TextAreaForm v-model="description" />
        </div>
        <div class="form-button-container">
          <Button type="submit" class="upload-button upload-button-primary" @click="postData">投稿</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .tail {
    display: flex;
    background: #444444;
    padding: 10px 20px;
    border-radius: 7px;
    background: #444444;
    box-shadow: inset 6px 6px 6px #363636,
            inset -6px -6px 6px #525252;
    border: none;
  }
  .upload-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    padding: 30px 10px 10px 10px;
  }
  .upload-buttons-container {
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
  }
  .upload-buttons-container > :first-child {
    margin-right: 20px;
  }
 
  .form-container {
    width: 60%;
    height: 100%;
    padding: 10px;
  }
  .form-button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    margin-right: 10px;
  }
  .form-title {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
  .form-explain {
    width: 100%;
    height: 100%;
    padding: 10px;
  }

</style>