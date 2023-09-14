<script setup>
 defineProps(['img']);
</script>

<template>
  <div class="all">
   
    <div class="center">
        <div  class="button1">
            <div v-if="img==undefined">
            </div>
            <div v-else>
                <img v-bind:src="img" class="img">
                
            </div>
        </div>
    </div>
  </div>
</template>


<style>
.center{
    padding: 30px;
}
.button1{
    width:200px ;
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
    border-radius: 17px;
    margin-top: auto;
    margin-bottom: auto;
}

</style>
           
            
           
