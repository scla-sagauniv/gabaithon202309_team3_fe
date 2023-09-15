<script setup>
 defineProps(['title','text']);
import Button from "../components/Button.vue"
import ImgTail from "../components/ImgTail.vue";
</script>

<template>
  <div class="all">
        <div class="detailtail">
            <div class="imgparent">
                <ImgTail/>
            </div>
            <div class="ideatext">
                <div class="detailtitle">
                    {{ title  }}
                </div>
                <div class="detailtext">
                    {{ text }}
                </div>   
                <router-link to="/">
                    <Button button="戻る" class="cssbutton" />
                </router-link>
            </div>
        </div>
    </div>
</template>


<style>

.detailtail{
    width:70% ;
    height: 100%;
    padding: 40px;
    display: flex;
    margin: auto;
    margin-top: 40px;
    border-radius: 17px;
    border-radius: 17px;
    background: #444444;
    box-shadow: inset 10px 10px 20px #333333,
            inset -10px -10px 20px #555555;
    border: none;
    color: #55F065;
}
.imgparent{
   margin: auto;;
}
.ideatext{
    width: 70%;
    height: 100%;
    padding: 15px 20px;
    margin-left: 15px;
}
.detailtitle{

    padding: 0px;
    margin: 10px;
    font-size: 30px;
}
.detailtext{
    padding: 0px;
    margin: 10px;
    word-break: break-all;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    
 font-size: 20px;
 color: white;
}
.cssbutton{
    text-align: right;
    margin-top: 30px;
    border: none;
    
}
</style>