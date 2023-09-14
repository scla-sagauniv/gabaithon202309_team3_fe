<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue"
defineProps(['header']);
</script>

<template>
    <div class="header-container">
        <div class="header1">
            {{header}}
        </div>
        <div class="header2">
            <Button button="post"/>
        </div>
    </div> 
</template>


<style>
.header-container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    border-radius: 17px;
    background: linear-gradient(145deg, #3d3d3d, #494949);
    box-shadow:  15px 15px 13px #323232,
                -15px -15px 13px #565656;
}
.header1{
    color: #55F065;
    padding: 30px 10px;
    text-align: center;
    font-size: 30px;
}
.header2 {
    position: absolute;
    right: 0;
    margin-right: 30px;
}
</style>