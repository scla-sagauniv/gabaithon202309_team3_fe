<script setup>
import ImgTail from "../components/ImgTail.vue"
import DetailTail from "../components/DetailTail.vue";
import IdeaTail from "../components/IdeaTail.vue";
import InputForm from "../components/InputForm.vue";
import TextAreaForm from "../components/TextAreaForm.vue";
import Button from "../components/Button.vue"
import Header from "../components/Header.vue"
import FormTail from "../components/FormTail.vue";
</script>

<template>
  <div id="app" class="kuso">
    <h1>sample
    </h1>
    <IdeaTail/>
    <Button />
    <Header />
    <InputForm/>
    <TextAreaForm />
    <FormTail />
    <ImgTail img="https://picsum.photos/seed/picsum/250/250"/>
    <DetailTail title="タイトルだよ" text="うおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおお"/>
  </div>
</template>

<style scoped>
.kuso {
  padding: 40px;
}
</style>