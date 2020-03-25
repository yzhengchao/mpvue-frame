<template>
  <div class="counter">
    <div class="num">当前数量:{{num}}</div>
    <div class="btn-list">
      <div class="add btn" @click="add">add+</div>
      <div class="reduce btn" @click="reduce">reduce-</div>
      <div class="reset btn" @click="reset">reset</div>
      <div class="parent btn" @click="parent">parent</div>
    </div>
    <div class="text-stylus"></div>
  </div>
</template>
<script>
export default {
  props: {
    initNum: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      num: this.initNum
    };
  },
  methods: {
    add() {
      this.num += 1;
      this.notifyNum();
    },
    reduce() {
      this.num -= 1;
      this.notifyNum();
    },
    parent(){
      let _par=15;
      console.log(_par)
      this.$emit("changeParent",_par);
    },
    reset() {
      this.num = 0;
      this.notifyNum();
    },
    notifyNum() {
      // this.$emit("clickNum", {
      //   num: this.num
      // });
    }
  },
  watch: {
    num(oldValue, newValue) {
      console.log(oldValue, newValue);
    },
    initNum(oldValue, newValue) {
      console.log(oldValue, newValue);
    }
  }
};
</script>
<style lang="stylus" scoped>
.counter {
  width: 100%;
}
.num {
  width: 100%;
  text-align: center;
  margin: 20rpx;
  font-size: 28rpx;
}
.btn-list {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.text-stylus{
    width 200rpx;
    height  200rpx;
    background-color themeColor ;
}
.btn {
  width: 150rpx;
  height: 60rpx;
  border-radius: 8rpx;
  text-align: center;
  line-height: 60rpx;
  border: 1rpx solid #ed4864;
  background-color: #ed4864;
  color: #fff;
  font-size: 28rpx;
}
</style>


