<template>
    <div class="service" :class="{'service-active': active}" @click="active = !active" >
     <img :src = "'/static/assets/images/services/' + name + '.svg'" >
    <h5>{{name}}</h5>
    <p>From {{price}}/-</p>
    </div>
</template>

<script>
export default {
/* eslint-disable */
    name: 'service',
    data(){
        return{

        }
    },
    props: ['name', 'price', 'index', 'active'],
    methods: {
        makeActive(){
            this.$emit('selectService', this.active)
        }
    }

}
</script>

<style lang="less">
    .service{
    width: 216px;
    height: fit-content;
    padding: 24px;   
    border-radius: 12px; 
    // border: solid 1px black;
    margin-right: 8px;
    margin-bottom: 8px;
    transition: 0.3s;
}
.service:hover{
    cursor: pointer;
    background: #d5d5d5;
}
.service-active{
    background: #E4192D !important;
    color: white;
    border: none;
}
.service img{
    margin-bottom: 20px;
    width: 96px;
    height: 96px;
}
</style>