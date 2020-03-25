<template>
  <view class="container">
    <view class="scroll-top">
      <scroll-view class="scroll-view_hot" scroll-x="true">
        <view
          class="scroll-view_hot-item"
          :class="[currentCategory.id == item.id ? 'scroll-view_hot-item-active' : '']"
          @click="switchCate(item.id)"
          v-for="(item,index) in navList"
          :key="index"
        >{{item.name}}</view>
      </scroll-view>
    </view>
    <swiper class="banner" circular="true" indicator-dots="true" autoplay="true" indicator-active-color="#fff" interval="3000" duration="1000">
        <swiper-item class="index-swiper-item" v-for="(item,index) in banner" :key="index">
            <navigator class="swiper-item-navigator">
                <image :src="item.image_url" background-size="cover"></image>
            </navigator>
        </swiper-item>
    </swiper>
    <view class="hr-bg"></view>
    <view class="classification">
        <view class="classification-list">
            <navigator class="classification-list-url youfei">
                <image src="../../../static/images/postage.png"></image>
                <view>付邮得物</view>
            </navigator>
        </view>
        <view class="classification-list">
            <navigator  class="classification-list-url youfei">
                <image src="../../../static/images/wish.png"></image>
                <view>愿望清单</view>
            </navigator>
        </view>
        <view class="classification-list">
            <navigator  class="classification-list-url youfei">
                <image src="../../../static/images/draw.png"></image>
                <view>0元抽奖</view>
            </navigator>
        </view>
        <view class="classification-list">
            <navigator  class="classification-list-url youfei">
                <image src="../../../static/images/gold-icon.png"></image>
                <view>金币专区</view>
            </navigator>
        </view>
        <view class="classification-list">
            <view class="classification-list-url youfei" @click="getAtterbute" data-order="21">
                <img src="../../../static/images/search.png"></img>
                <view>商品搜索</view>
            </view>
        </view>
    </view>
        <!-- 热卖商品 -->
    <view class="hot-goods">
        <view class="hot-goods-title">
            <view class="hot-goods-title-left">
                <image src="../../../static/images/hot-goods.png"></image>
                <text>热卖商品</text>
            </view>
        </view>
        <view class="hot-goods-content">
            <view class="hot-goods-content-item"  v-for="(item,index) in hotGoods" :key="index">
                <navigator :url="'../detail/main?id='+item.id" class="hot-goods-content-item-url">
                    <image :src="item.list_pic_url"></image>
                    <view class="hot-goods-content-item-info">
                         <view class="hot-goods-content-item-name">{{item.name}}</view>
                         <view class="vip-back">
                            <text class="vip-back-left">返利:￥{{item.rebate_price}}</text>
                            <text class="vip-back-right">+ ￥{{item.sub_rebate_price}}(会员)</text>
                         </view>
                         <view class="sale-num">
                            <view class="sale-num-left">￥{{item.retail_price}}</view>
                            <view class="sale-num-right">已售:{{item.sell_volume}}</view>
                         </view>
                    </view>

                </navigator>
            </view>
        </view>
    </view>
    <view class="query-test" @click="goDetail">click me</view>
  </view>
</template>

<script>
import util from "@/utils/util";
import api from "@/utils/api";
export default {
  data() {
    return {
      msg: "Hello",
      hotGoods: [],
      navList: [],
      currentCategory: {},
      banner: [],
      testId:123
    };
  },
  created() {
    //this.getHots();
  },

  methods: {
    getAtterbute(e){
      console.log(e.currentTarget.dataset.order);
    },
    goDetail(){
        wx.navigateTo({
          url:"../detail/main?id="+this.testId
        })
    },
    getHots() {
      wx.showLoading({
        title: "加载中..."
      });
      util.request(api.IndexUrlHotGoods).then(res => {
        // 获取热销商品
        console.log(res);
        if (res.errno === 0) {
          this.hotGoods = res.data.hotGoodsList;
        }
        wx.hideLoading();
      });
      util.request(api.CatalogList).then(res => {
        // 顶部分类导航栏
        console.log(res);
        if (res.errno === 0) {
          this.navList = res.data.categoryList;
          this.currentCategory = res.data.currentCategory;
        }
      });
      util.request(api.IndexUrlBanner).then(res => {
        // banner
        console.log(res);
        if (res.errno === 0) {
          this.banner = res.data.banner;
        }
      });
    },
    switchCate(_id) {
      console.log(_id);
      this.currentCategory.id = _id;
    },
  },
  onPullDownRefresh() {
        // 增加下拉刷新数据的功能
        this.getHots();
        wx.stopPullDownRefresh();
  },
      onShareAppMessage: function (res) {
        let that=this;
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
            return{
                title:"快来帮好友助力领取金币吧！",
                path: "/pages/index/main"
            }
        }else{
            console.log(res);
            return {
                title: "快来帮好友助力领取金币吧！",
                path: "/pages/index/main"
            }
        }
    },
};
</script>

<style scoped lang="stylus">
/* 顶部滚动导航栏 */
.scroll-top {
  width: 100%;
  height: 156rpx;
  background: #d53333;
  border-bottom-left-radius: 16rpx;
  border-bottom-right-radius: 16rpx;
  .scroll-view_hot {
    white-space: nowrap;
    width: 690rpx;
    margin: 6rpx auto 0 auto;
    .scroll-view_hot-item {
      opacity: 0.8;
      font-family: PingFangSC-Regular;
      font-size: 28rpx;
      color: #ffffff;
      display: inline-block;
      position: relative;
      height: 60rpx;
    }
    .scroll-view_hot-item:first-child {
      margin-left: 8rpx;
    }
    .scroll-view_hot-item:nth-child(2) {
      margin-left: 32rpx;
    }
    .scroll-view_hot-item:not(:first-child) {
      margin-left: 40rpx;
    }
    .scroll-view_hot-item-active {
      font-family: PingFangSC-Semibold;
      font-size: 36rpx;
      opacity: 1;
      &:after {
        position: absolute;
        content: '';
        width: 48rpx;
        height: 4rpx;
        background-color: #fff;
        left: 24rpx;
        top: 60rpx;
      }
    }
  }
}
.banner{
    height: 320rpx;
    width: 690rpx;
    position: absolute;
    top: 100rpx;
    z-index: 9;
    border-radius: 8rpx;
    overflow: hidden;
    .index-swiper-item{
        border-radius: 8rpx;
        overflow: hidden;
        .swiper-item-navigator{
            width: 100%;
            height: 100%;
            border-radius: 8rpx;
            overflow: hidden;
            image{
                width: 100%;
                height: 100%;
                border-radius: 8rpx;
            }
        }
    }
}
.hr-bg{
    height: 26rpx;
    width: 100%;
    background-image: linear-gradient(-180deg, rgba(255,255,255,0.00) 0%, #FFFFFF 100%);
    margin-top: 275rpx;
}
.classification{
    width: 690rpx;
    font-family: PingFangSC-Regular;
    font-size: 24rpx;
    color: #666666;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
}
.classification-list{

}
.classification-list:not(:first-child){
    margin-left: 50rpx;
}
.classification-list-url{
    display: block;
}
.youfei image{
    width: 94rpx;
    height: 90rpx;
}
/* 热卖商品 */
.hot-goods{
    width: 100%;
    margin-top: 30rpx;
    background-color: #f2f2f2;
    padding: 30rpx 0;
}
.hot-goods-title{
    display: flex;
    flex-flow:row nowrap;
    justify-content: space-between;
    width: 690rpx;
    height: 56rpx;
    align-items: center;
    margin: 0 auto;
}
.hot-goods-title-left{
    font-family: PingFangSC-Medium;
    font-size: 36rpx;
    color: #333333;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    font-weight: bold;
}
.hot-goods-title-left image{
    width: 44rpx;
    height: 44rpx;
    margin-right: 16rpx;
}
.hot-goods-title-right{
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #AAAAAA;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}
.hot-goods-title-right image{
    width:13rpx;
    height:26rpx;
    margin-left: 16rpx;
}
.hot-goods-content{
    width: 690rpx;
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto 0 auto;
}
.hot-goods-content-item{
    width: 340rpx;
    height: auto;
    background-color: #fff;
    margin-top: 20rpx;
    padding-bottom: 20rpx;
    border-radius: 8rpx;
}
.hot-goods-content-item:nth-child(2n){
    margin-left: 10rpx;
}
.hot-goods-content-item-url{
    width: 340rpx;
}

.hot-goods-content-item-url image{
    width: 340rpx;
    height: 340rpx;
    border-top-left-radius: 10rpx;
    border-top-right-radius: 10rpx;
}
.hot-goods-content-item-info{
    width: 308rpx;
    margin: 0 auto;
}
.hot-goods-content-item-name{
    width: 100%;
    font-family: PingFangSC-Medium;
    font-size: 28rpx;
    color: #333333;
    text-overflow: ellipsis;
    display: -webkit-box;
    text-align: left;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical !important;
    font-weight: bold;
    overflow: hidden;
}
.vip-back-left{
    font-family: PingFangSC-Semibold;
    font-size: 20rpx;
    color: #FFFFFF;
    background: #D54141;
    border-radius: 4rpx;
    padding: 8rpx 10rpx;
}
.vip-back-right{
    font-family: PingFangSC-Medium;
    font-size: 22rpx;
    color: #DF9819;
    margin-left: 10rpx;
}
.sale-num{
    display: flex;
    flex-flow: row nowrap;
    margin-top: 16rpx;
    justify-content: space-between;
}
.sale-num-left{
    font-family: PingFangSC-Medium;
    font-size: 28rpx;
    color: #D53333;
    font-weight: bold;
}
.sale-num-right{
    font-family: PingFangSC-Regular;
    font-size: 24rpx;
    color: #999999;
}
</style>
