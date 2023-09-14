<script setup>
 defineProps(['img']);
</script>

<template>
    <div class="img-container">
        <div v-if="img==undefined">
        </div>
        <div v-else>
            <img v-bind:src="img" class="img">
        </div>
    </div>
</template>


<style>
.img-container{
    width: 250px;
    height: 250px;
    padding: 0px;
    display: flex;
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
           
            
           
