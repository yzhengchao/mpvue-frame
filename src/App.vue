<script>
/* 这部分相当于原生小程序的 app.js */
export default {
  created() {
    console.log("miniapp created!!!");
  }
};
</script>

<style>
/* 这部分相当于原生小程序的 app.wxss */

.container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
}
</style>
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import 'stylus/variables.styl';
</style>
