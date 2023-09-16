<script setup>
    import { ref } from "vue";
    defineProps(['title','text','img']);
    let defaultUrl = "https://picsum.photos/seed/picsum/250/250";
</script>

<template>
  <div class="all">
    <div class="center">
        <router-link to="/ideaDetail" class="line">

            <button  class="button1">
                
                <img v-bind:src="img || defaultUrl" class="imgimg">
                <div class="ideatext">
                    <div class="title">
                        {{ title  }}
                    </div>
                    <div class="text">
                        {{ text }}
                    </div>
                    
                </div>
            </button>
        </router-link>
    </div>
  </div>
</template>


<style>
.center{
    padding: 30px;
}
.line{
    text-decoration: none;
}
.button1{
    width:100% ;
    height: 200px;
    padding: 0px;
    display: flex;
    margin: auto;
    border-radius: 17px;
    background: linear-gradient(145deg, #3d3d3d, #494949);
    box-shadow:  15px 15px 13px #323232,
                -15px -15px 13px #565656;
    color: #55F065;
    border: none;
}
.imgimg{
    width: 200px;
    height: 200px;
    border-radius: 17px 0 0 17px;
    margin-top: auto;
    margin-bottom: auto;
}
.ideatext{
    width: 70%;
    height: 100%;
    padding: 15px 20px;
}
.title{
    text-decoration-line: none;
    padding: 0px;
    margin: 10px;
    font-size: 18px;
}
.text{
    padding: 0px;
    margin: 10px;
    word-break: break-all;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 15px;
    color: white;
 
}
.button1:hover{
    background: linear-gradient(145deg, #3d3d3d, #494949);
    box-shadow:  5px 5px 3px #323232,
                -5px -5px 3px #565656;
    transition-duration: 0.5s;
}
</style>