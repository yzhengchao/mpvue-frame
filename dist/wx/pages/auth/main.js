require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(55);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
// export default {
//   config: {
//     // 注意，页面级可配置属性相当于只是`src/main.js`中配置里的`window`部分
//     "navigationBarTitleText": "个人中心"
//   }
// }

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_061ed43d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(88);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(56)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-061ed43d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_061ed43d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/auth/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-061ed43d", Component.options)
  } else {
    hotAPI.reload("data-v-061ed43d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 56:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_api__ = __webpack_require__(27);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            msg: "12131254",
            canIUse: wx.canIUse('button.open-type.getUserInfo'),
            navUrl: '',
            code: ""
        };
    },
    mounted: function mounted() {
        this.login();
    },

    methods: {
        login: function login() {
            var that = this;
            wx.login({
                success: function success(res) {
                    console.log(res);
                    if (res.code) {
                        that.code = res.code;
                    }
                }
            });
            console.log(wx.getStorageSync("navUrl"));
            if (wx.getStorageSync("navUrl")) {
                that.navUrl = wx.getStorageSync("navUrl");
            } else {
                that.navUrl = '/pages/index/main';
            }

            var userInfo = wx.getStorageSync('userInfo');
            var token = wx.getStorageSync('token');
            if (userInfo && token) {
                return;
            }
        },

        bindGetUserInfo: function bindGetUserInfo(e) {
            console.log(e);
            var that = this;
            var _shareId = wx.getStorageSync('shareId');
            console.log(_shareId);
            if (e.mp.detail.errMsg == "getUserInfo:ok") {
                if (that.code) {
                    __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_1__utils_api__["a" /* default */].AuthLoginByWeixin, {
                        code: that.code,
                        userInfo: e.mp.detail,
                        inviter_userId: _shareId
                    }, 'POST', 'application/json').then(function (res) {
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
                            });
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
                                success: function success(res) {
                                    console.log(res);
                                    if (res.code) {
                                        that.code = res.code;
                                    }
                                }
                            });
                        }
                    });
                }
            }
        }
    }
});

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "auth"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('view', {
    staticClass: "btn spacing"
  }, [(_vm.canIUse) ? _c('button', {
    staticClass: "weui_btn weui_btn_primary",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo
    }
  }, [_vm._v("授权登录")]) : _vm._e()], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "hd"
  }, [_c('image', {
    staticClass: "logo",
    attrs: {
      "src": "../../../static/images/logo1.png"
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "title"
  }, [_vm._v("有点东西")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "bd"
  }, [_c('view', {
    staticClass: "top_line"
  }), _vm._v(" "), _c('text', {
    staticClass: "m_name"
  }, [_vm._v("有点东西申请获得以下权限")]), _vm._v(" "), _c('text', {
    staticClass: "s_name"
  }, [_vm._v("· 获得你的公开信息（昵称、头像等）")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-061ed43d", esExports)
  }
}

/***/ })

},[54]);