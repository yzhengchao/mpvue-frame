import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    pages: [
      '^pages/index/main',
      "pages/center/main",
      "pages/couter/main",
      "pages/tree/main",
      "pages/cart/main",
      "pages/auth/main",
      "pages/detail/main"
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '第一个小程序',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      backgroundColor: "#ffffff",
      borderStyle: "black",
      selectedColor: "#D53333",
      color: "#4d4d4d",
      list: [
        {
          pagePath: "pages/index/main",
          iconPath: "static/tabs/home-nomal.png",
          selectedIconPath: "static/images/home-selected.png",
          text: "首页"
        },
        {
          pagePath: "pages/center/main",
          iconPath: "static/tabs/center-nomal.png",
          selectedIconPath: "static/images/center-selected.png",
          text: "个人中心"
        },
        {
          pagePath: "pages/center/main",
          iconPath: "static/tabs/tree-nomal.png",
          selectedIconPath: "static/images/tree-selected.png",
          text: "摇钱树"
        },
        {
          pagePath: "pages/center/main",
          iconPath: "static/tabs/cart-nomal.png",
          selectedIconPath: "static/images/cart-selected.png",
          text: "购物车"
        }
      ]
    }
  }
}