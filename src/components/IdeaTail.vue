<script setup>
  import { ref } from "vue";
  
  defineProps(['title','text']);
  
</script>

<template>
  <div class="all">
   
    <div class="center">
        
        <button  class="button1">
            <img src="https://picsum.photos/seed/picsum/200/200" class="img">
            <div class="ideatext">
                <div class="title">
                    {{ title  }}
                </div>
                <div class="text">
                    {{ text }}
                </div>

            </div>
        </button>
    </div>
  </div>
</template>


<style>
.center{
    padding: 30px;
}
.button1{
    width:70% ;
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
.img{
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

    padding: 0px;
    margin: 10px;
    font-size: 30px;
}
.text{
    padding: 0px;
    margin: 10px;
    word-break: break-all;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    
 font-size: 20px;
 color: white;
}
</style>