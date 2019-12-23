<template>
    <div class="text-center cover-box">
        <img class ="pebble-1" height="324" src="/static/assets/images/pebble-shape-1.svg" />
        <img class ="pebble-2" height="324" src="/static/assets/images/pebble-shape-2.svg"/>
       
            <img src="/static/assets/images/hey-cover.svg" height="480">
                      
    </div>
        
</template>

<script>
/* eslint-disable */
export default {
    name: 'cover'
}
</script>

<style lang="less">
    .pebble-1{
        position: fixed;
        top:-168px;
        left: 420px;
        z-index: 1000;
    }
    .pebble-2{
        position: fixed;
        bottom:-168px;
        right: -100px;
        z-index: 1000;
    }

    @media only screen and (max-width: 1280px){
        .cover-box{
            display: none;
        }
    }   
    
    
    
</style>