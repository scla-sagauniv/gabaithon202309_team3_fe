<script setup>
import { ref } from "vue";
defineProps(['header']);
</script>

<template>

    <body>
        <div class="header2">
        <div class="header1">{{header}}
        </div>   
        </div>
    </body>
</template>


<style>
.header1{
    border-radius: 17px;
    background: linear-gradient(145deg, #3d3d3d, #494949);
    box-shadow:  15px 15px 13px #323232,
                -15px -15px 13px #565656;
    color: #55F065;
    padding: 30px 10px;
    text-align: center;
    font-size: 30px;
}
.header2{
    margin: 20px 100px;
}
</style>