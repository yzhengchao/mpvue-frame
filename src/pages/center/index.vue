<template>
  <view>{{msg}}</view>
</template>
<script>
import util from "@/utils/util";
import api from "@/utils/api";
export default {
  data() {
    return {
      msg: "center center center"
    };
  },
  onShow() {
    console.log("onShow");
    this.getData();
  },
  mounted() {
    console.log("mounted");
    this.getData();
  },
  methods: {
    getData() {
      console.log("getData");
      wx.showLoading({
        title: "加载中...",
        icon: "loading"
      });
      util.request(api.GetUserInfo).then(res => {
        console.log(res);
        wx.hideLoading();
      }).catch(error=>{
          console.log(error);
      });
    }
  }
};
</script>

