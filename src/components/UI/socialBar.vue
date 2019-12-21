
<template>
        <div class="social-bar">
            <i class="i-facebook"></i>
            <i class="i-instagram"></i>
            <i class="i-behance"></i>
            <i class="i-twitter"></i>
            <i class="i-dribbble"></i>
            <div class="vertical-line"></div>            
        </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'socialBar',
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scoped>

.vertical-line{
	margin-top: 12px;
	width: 2px;
	height: 96px;
	background: black;
}
i{
	padding: 4px;
	margin: 12px 32px;
	width: 32px;
	height: 32px;
	font-size: 24px;
    border-radius: 100%;
    transition: .5s;
    
}
i:hover{
    cursor: pointer;
    padding: 0px;
    color: #E4192D;
    font-size:32px;
}

</style>