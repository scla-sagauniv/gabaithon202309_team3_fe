<script setup>
import { ref } from 'vue'
import ImgTail from './ImgTail.vue';
import InputForm from './InputForm.vue';
import TextAreaForm from './TextAreaForm.vue';
import Button from './Button.vue'
// @app.post("/update")
// async def update_idea(data: Idea):
//     database = firebase.get_database(FIREBASE)
    
//     if data.name not in [idea["name"] for idea in database] and data.update:
//         ids = [int(idea["id"]) for idea in database]
//         ids.sort()
//         id = [id for id in list(range(1, ids[-1] + 2)) if id not in [int(idea["id"]) for idea in database]][0]
//         database.append({"id": id, "name": data.name, "description": data.description, "category": data.category, "thumbnail": data.thumbnail})
        
//         firebase.write_database(FIREBASE, database)
        
//         return {"result": "データが正常に受信され、処理された"}
//     else:
//         return {"result": "重複データが存在し、処理に失敗した"}
const write_idea = () => {
  const data = {
    name: title.value,
    description: text.value,
    category: "test",
    thumbnail: "test",
    update: true
  }
  axios.post('/update', data)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
const title = ref('')
const text = ref('')
const handleInput = () => {
  console.log(title.value)
  console.log(text.value)
}
const url = ref('')

</script>
<template>
  <div class="tail">
    <div class="upload-container">
      <ImgTail v-bind:img="url"></ImgTail>
      <div class="upload-buttons-container">
        <Button class="upload-button upload-button-primary" button="画像を選択"></Button>
        <Button class="upload-button upload-button-primary" button="画像を生成"></Button>
      </div>  
    </div>
    <div class="form-container">
      <form>
        <div class="form-title">
          <p>タイトル</p>
          <InputForm />
        </div>
        <div class="form-explain">
          <p>説明</p>
          <TextAreaForm />
        </div>
        <div class="form-button-container">
          <Button type="submit" class="upload-button upload-button-primary" button="投稿"></Button>
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