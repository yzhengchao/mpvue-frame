<template>
    <div>detail</div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    mounted(){ 
        // 获取小程序在 page onLoad 时候传递的 options
        console.log(this.$root.$mp.query);
    },
    onShow(){
        // 获取小程序在 page onLoad 时候传递的 options
        console.log(this.$root.$mp.query);
    },
    onLoad(options){
        console.log(options);
    }
}
</script>
<style scoped>

</style>

