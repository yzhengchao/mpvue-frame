require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(49);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    pages: ['^pages/index/main', "pages/center/main", "pages/couter/main", "pages/tree/main", "pages/cart/main", "pages/auth/main", "pages/detail/main"],
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
      list: [{
        pagePath: "pages/index/main",
        iconPath: "static/tabs/home-nomal.png",
        selectedIconPath: "static/images/home-selected.png",
        text: "首页"
      }, {
        pagePath: "pages/center/main",
        iconPath: "static/tabs/center-nomal.png",
        selectedIconPath: "static/images/center-selected.png",
        text: "个人中心"
      }, {
        pagePath: "pages/center/main",
        iconPath: "static/tabs/tree-nomal.png",
        selectedIconPath: "static/images/tree-selected.png",
        text: "摇钱树"
      }, {
        pagePath: "pages/center/main",
        iconPath: "static/tabs/cart-nomal.png",
        selectedIconPath: "static/images/cart-selected.png",
        text: "购物车"
      }]
    }
  }
});

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(53);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(50)
  __webpack_require__(52)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46cfd7ea", Component.options)
  } else {
    hotAPI.reload("data-v-46cfd7ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 50:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* 这部分相当于原生小程序的 app.js */
/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    console.log("miniapp created!!!");
  }
});

/***/ })

},[47]);