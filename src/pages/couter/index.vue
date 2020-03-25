<template>
  <div class="wraper">
    <div class="msg">{{msg}}</div>
    <click-counter :init-num="postNum" @changeParent="clickNums"></click-counter>
    <!-- <click-counter :init-num="20" @clickNum="handleClickNum"></click-counter>
    <click-counter :init-num="30" @clickNum="handleClickNum"></click-counter> -->
    <div class="methodsTest" @click="toast">
        showToast
    </div>
  </div>
</template>
<script>
import ClickCounter from "@/components/click-counter";
import util from "../../utils/util"
export default {
  components: {
    ClickCounter
  },
  
  data() {
    return {
      msg: "计算组件使用！",
      postNum:10
    };
  },
  methods:{
      handleClickNum(data){
           console.log(">>>>>>", data.num);
      },
      clickNums(data){
        console.log(data);
        this.postNum=data;
      },
      toast(){
          util.showErrorToastMessage("test");
      }
  }
};
</script>
<style scoped lang="stylus">
.wraper {
  width: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
  .methodsTest{

  }
}
.msg{
    width: 100%;
    text-align: center;
    padding: 20rpx 0;
    font-size: 32rpx;
}
</style>


