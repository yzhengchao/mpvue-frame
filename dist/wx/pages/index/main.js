require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(118);



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
//     "navigationBarTitleText": "首页"
//   }
// }

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_54e9df33_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(121);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(119)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-54e9df33"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_54e9df33_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54e9df33", Component.options)
  } else {
    hotAPI.reload("data-v-54e9df33", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 119:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 120:
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
      msg: "Hello",
      hotGoods: [],
      navList: [],
      currentCategory: {},
      banner: [],
      testId: 123
    };
  },
  created: function created() {
    //this.getHots();
  },


  methods: {
    getAtterbute: function getAtterbute(e) {
      console.log(e.currentTarget.dataset.order);
    },
    goDetail: function goDetail() {
      wx.navigateTo({
        url: "../detail/main?id=" + this.testId
      });
    },
    getHots: function getHots() {
      var _this = this;

      wx.showLoading({
        title: "加载中..."
      });
      __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_1__utils_api__["a" /* default */].IndexUrlHotGoods).then(function (res) {
        // 获取热销商品
        console.log(res);
        if (res.errno === 0) {
          _this.hotGoods = res.data.hotGoodsList;
        }
        wx.hideLoading();
      });
      __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_1__utils_api__["a" /* default */].CatalogList).then(function (res) {
        // 顶部分类导航栏
        console.log(res);
        if (res.errno === 0) {
          _this.navList = res.data.categoryList;
          _this.currentCategory = res.data.currentCategory;
        }
      });
      __WEBPACK_IMPORTED_MODULE_0__utils_util__["a" /* default */].request(__WEBPACK_IMPORTED_MODULE_1__utils_api__["a" /* default */].IndexUrlBanner).then(function (res) {
        // banner
        console.log(res);
        if (res.errno === 0) {
          _this.banner = res.data.banner;
        }
      });
    },
    switchCate: function switchCate(_id) {
      console.log(_id);
      this.currentCategory.id = _id;
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    // 增加下拉刷新数据的功能
    this.getHots();
    wx.stopPullDownRefresh();
  },

  onShareAppMessage: function onShareAppMessage(res) {
    var that = this;
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target);
      return {
        title: "快来帮好友助力领取金币吧！",
        path: "/pages/index/main"
      };
    } else {
      console.log(res);
      return {
        title: "快来帮好友助力领取金币吧！",
        path: "/pages/index/main"
      };
    }
  }
});

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "container"
  }, [_c('view', {
    staticClass: "scroll-top"
  }, [_c('scroll-view', {
    staticClass: "scroll-view_hot",
    attrs: {
      "scroll-x": "true"
    }
  }, _vm._l((_vm.navList), function(item, index) {
    return _c('view', {
      key: index,
      staticClass: "scroll-view_hot-item",
      class: [_vm.currentCategory.id == item.id ? 'scroll-view_hot-item-active' : ''],
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.switchCate(item.id)
        }
      }
    }, [_vm._v(_vm._s(item.name))])
  }))], 1), _vm._v(" "), _c('swiper', {
    staticClass: "banner",
    attrs: {
      "circular": "true",
      "indicator-dots": "true",
      "autoplay": "true",
      "indicator-active-color": "#fff",
      "interval": "3000",
      "duration": "1000"
    }
  }, _vm._l((_vm.banner), function(item, index) {
    return _c('swiper-item', {
      key: index,
      staticClass: "index-swiper-item",
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('navigator', {
      staticClass: "swiper-item-navigator"
    }, [_c('image', {
      attrs: {
        "src": item.image_url,
        "background-size": "cover"
      }
    })])], 1)
  })), _vm._v(" "), _c('view', {
    staticClass: "hr-bg"
  }), _vm._v(" "), _c('view', {
    staticClass: "classification"
  }, [_c('view', {
    staticClass: "classification-list"
  }, [_c('navigator', {
    staticClass: "classification-list-url youfei"
  }, [_c('image', {
    attrs: {
      "src": "../../../static/images/postage.png"
    }
  }), _vm._v(" "), _c('view', [_vm._v("付邮得物")])])], 1), _vm._v(" "), _c('view', {
    staticClass: "classification-list"
  }, [_c('navigator', {
    staticClass: "classification-list-url youfei"
  }, [_c('image', {
    attrs: {
      "src": "../../../static/images/wish.png"
    }
  }), _vm._v(" "), _c('view', [_vm._v("愿望清单")])])], 1), _vm._v(" "), _c('view', {
    staticClass: "classification-list"
  }, [_c('navigator', {
    staticClass: "classification-list-url youfei"
  }, [_c('image', {
    attrs: {
      "src": "../../../static/images/draw.png"
    }
  }), _vm._v(" "), _c('view', [_vm._v("0元抽奖")])])], 1), _vm._v(" "), _c('view', {
    staticClass: "classification-list"
  }, [_c('navigator', {
    staticClass: "classification-list-url youfei"
  }, [_c('image', {
    attrs: {
      "src": "../../../static/images/gold-icon.png"
    }
  }), _vm._v(" "), _c('view', [_vm._v("金币专区")])])], 1), _vm._v(" "), _c('view', {
    staticClass: "classification-list"
  }, [_c('view', {
    staticClass: "classification-list-url youfei",
    attrs: {
      "data-order": "21",
      "eventid": '1'
    },
    on: {
      "click": _vm.getAtterbute
    }
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/search.png"
    }
  }), _vm._v(" "), _c('view', [_vm._v("商品搜索")])])])]), _vm._v(" "), _c('view', {
    staticClass: "hot-goods"
  }, [_vm._m(0), _vm._v(" "), _c('view', {
    staticClass: "hot-goods-content"
  }, _vm._l((_vm.hotGoods), function(item, index) {
    return _c('view', {
      key: index,
      staticClass: "hot-goods-content-item"
    }, [_c('navigator', {
      staticClass: "hot-goods-content-item-url",
      attrs: {
        "url": '../detail/main?id=' + item.id
      }
    }, [_c('image', {
      attrs: {
        "src": item.list_pic_url
      }
    }), _vm._v(" "), _c('view', {
      staticClass: "hot-goods-content-item-info"
    }, [_c('view', {
      staticClass: "hot-goods-content-item-name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('view', {
      staticClass: "vip-back"
    }, [_c('text', {
      staticClass: "vip-back-left"
    }, [_vm._v("返利:￥" + _vm._s(item.rebate_price))]), _vm._v(" "), _c('text', {
      staticClass: "vip-back-right"
    }, [_vm._v("+ ￥" + _vm._s(item.sub_rebate_price) + "(会员)")])]), _vm._v(" "), _c('view', {
      staticClass: "sale-num"
    }, [_c('view', {
      staticClass: "sale-num-left"
    }, [_vm._v("￥" + _vm._s(item.retail_price))]), _vm._v(" "), _c('view', {
      staticClass: "sale-num-right"
    }, [_vm._v("已售:" + _vm._s(item.sell_volume))])])])])], 1)
  }))]), _vm._v(" "), _c('view', {
    staticClass: "query-test",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.goDetail
    }
  }, [_vm._v("click me")])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "hot-goods-title"
  }, [_c('view', {
    staticClass: "hot-goods-title-left"
  }, [_c('image', {
    attrs: {
      "src": "../../../static/images/hot-goods.png"
    }
  }), _vm._v(" "), _c('text', [_vm._v("热卖商品")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-54e9df33", esExports)
  }
}

/***/ })

},[117]);