<template>
    <div class="cart">
        <div class="cart-dom">demo</div>
        <div class="btn" @click="domTest">click me!</div>
        <view :style="{ color: activeColor}">view color</view>
        <div @click="goCounter">go couter</div>
        <props :dataArray="parentData"></props>
    </div>
</template>
<script>
import props from "@/components/props";
export default {
    components:{
        props:props
    },
    data(){
        return{
            activeColor:"red",
            parentData:[{
                name:"sunlin",age:18,id:1
            },
            {
                name:"zhangsan",age:19,id:2
            },
            {
                name:"lisi",age:20,id:3
            },
            {
                name:"laowang",age:21,id:4
            }
            ]
        }
    },
    methods:{
        domTest(e){
            console.log(123);
            console.log(e);
           
        },
        goCounter(){
            wx.navigateTo({
                url:"../couter/main"
            })
        }
    }
}
</script>
<style>

</style>

