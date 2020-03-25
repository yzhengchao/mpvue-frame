<template>
    <div class="auth">
          <view class="hd">
            <image class="logo" src="../../../static/images/logo1.png"></image>
            <view class="title">有点东西</view>
        </view>
        <view class="bd">
            <view class="top_line"></view>
            <text class="m_name">有点东西申请获得以下权限</text>
            <text class="s_name">· 获得你的公开信息（昵称、头像等）</text>
        </view>
        <view class="btn spacing">
            <!-- 需要使用 button 来授权登录 -->
            <button v-if="canIUse" open-type="getUserInfo" class="weui_btn weui_btn_primary" @getuserinfo="bindGetUserInfo">授权登录</button>
            <!-- <view wx:else>请升级微信版本</view> -->
        </view>
    </div>
</template>
<script>
import util from "@/utils/util";
import api from "@/utils/api";
export default {
    data(){
        return{
            msg:"12131254",
            canIUse: wx.canIUse('button.open-type.getUserInfo'),
            navUrl: '',
            code:""
        }
    },
    mounted(){
        this.login();
    },
    methods:{
        login(){
            let that=this;
            wx.login({
                success: function (res) {
                    console.log(res);
                    if (res.code) {
                        that.code=res.code
                    }
                }
            });
            console.log(wx.getStorageSync("navUrl"));
            if (wx.getStorageSync("navUrl")) {
                that.navUrl= wx.getStorageSync("navUrl")
            } else {
                that.navUrl= '/pages/index/main'
            }

            let userInfo = wx.getStorageSync('userInfo');
            let token = wx.getStorageSync('token');
            if (userInfo && token) {
                return;
            }
        },
        bindGetUserInfo: function (e) {
            console.log(e);
            let that = this;
            let _shareId = wx.getStorageSync('shareId');
            console.log(_shareId);
            if (e.mp.detail.errMsg == "getUserInfo:ok"){
                if(that.code){
                util.request(api.AuthLoginByWeixin, {
                    code: that.code,
                    userInfo: e.mp.detail,
                    inviter_userId: _shareId
                }, 'POST', 'application/json').then(res => {
                    console.log(res);
                    if (res.errno === 0) {
                        wx.removeStorageSync('shareId');
                        //存储用户信息
                        wx.setStorageSync('userInfo', res.data.userInfo);
                        wx.setStorageSync('token', res.data.token);
                        wx.setStorageSync('userId', res.data.userId);
                        wx.setStorageSync('openId', res.data.openId);
                        console.log(wx.getStorageSync("navUrl"));
                        console.log(that.navUrl);
                          wx.switchTab({
                                url: "/pages/center/main"
                            })
                        // if (that.navUrl && that.navUrl == 'pages/index/main') {
                        //     wx.switchTab({
                        //         url: that..navUrl,
                        //     })
                        // } else if (that.navUrl && that.navUrl == 'pages/cart/main') {
                        //     console.log("cart");
                        //     wx.switchTab({
                        //         url: "/pages/cart/main"
                        //     })
                        // }
                        // else if (that.navUrl && that.navUrl == 'pages/center/main') {
                        //     console.log("center");
                        //     wx.switchTab({
                        //         url: "/pages/center/main"
                        //     })
                        // }
                        // else if (that.navUrl && that.navUrl == 'pages/tree/main') {
                        //     console.log("tree");
                        //     wx.switchTab({
                        //         url: "/pages/tree/main"
                        //     })
                        // } else if (that.navUrl && that.navUrl == 'pages/auth/main'){
                        //     console.log(3339);
                        //     wx.switchTab({
                        //         url: "/pages/index/index"
                        //     })
                        // }
                        // else if (that.navUrl) {
                        //     console.log(that.navUrl);
                        //     let newUrl = that.navUrl.substring(6);
                        //     console.log(newUrl);
                        //     wx.redirectTo({
                        //         url: navUrl
                        //     })
                        // }
                    } else {
                        // util.showErrorToast(res.errmsg)
                        wx.showModal({
                            title: '提示',
                            content: res.errmsg,
                            showCancel: false
                        });
                        wx.login({
                            success: function (res) {
                                console.log(res);
                                if (res.code) {
                                    that.code= res.code
                                }
                            }
                        });
                    }
                });
                }
            }
        },
    }
}
</script>
<style scoped lang="stylus">
.auth{
    width 100%;
    min-height 100vh;
    background-color #f2f2f2;
}
view, text {
  font-family: PingFangSC-Light, helvetica, 'Heiti SC';
  font-size: 29rpx;
  color: #333;
}

.hd {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hd .logo {
  width: 220rpx;
  height: 220rpx;
  margin-top: 40rpx;
}

.hd .title {
  text-align: center;
  font-size: 36rpx;
  color: #000;
  margin-top: 20rpx;
}

.bd {
  width: 100%;
  padding: 50rpx;
}

.bd .top_line {
  width: 100%;
  height: 1rpx;
  background: #ccc;
  margin-top: 20rpx;
  margin-bottom: 50rpx;
}

.bd .m_name {
  display: block;
  font-size: 36rpx;
  color: #000;
}

.bd .s_name {
  margin-top: 25rpx;
  display: block;
  font-size: 34rpx;
  color: #8a8a8a;
}

.btn {
  padding: 120rpx 50rpx 0;
}

.weui_btn_primary {
  background-color: #04be02;
}

.weui_btn {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  line-height: 2.33333333;
  border-radius: 5px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow: hidden;
}

.weui_btn:after {
  content: " ";
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-transform: scale(0.5);
  -ms-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  box-sizing: border-box;
  border-radius: 10px;
}

</style>


