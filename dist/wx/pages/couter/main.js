require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(104);



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

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3747420d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(111);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(105)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3747420d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3747420d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/couter/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3747420d", Component.options)
  } else {
    hotAPI.reload("data-v-3747420d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_click_counter__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_util__ = __webpack_require__(7);
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
  components: {
    ClickCounter: __WEBPACK_IMPORTED_MODULE_0__components_click_counter__["a" /* default */]
  },

  data: function data() {
    return {
      msg: "计算组件使用！",
      postNum: 10
    };
  },

  methods: {
    handleClickNum: function handleClickNum(data) {
      console.log(">>>>>>", data.num);
    },
    clickNums: function clickNums(data) {
      console.log(data);
      this.postNum = data;
    },
    toast: function toast() {
      __WEBPACK_IMPORTED_MODULE_1__utils_util__["a" /* default */].showErrorToastMessage("test");
    }
  }
});

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_click_counter_vue__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_dd975836_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_click_counter_vue__ = __webpack_require__(110);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(108)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-dd975836"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_click_counter_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_dd975836_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_click_counter_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/click-counter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] click-counter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dd975836", Component.options)
  } else {
    hotAPI.reload("data-v-dd975836", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 108:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  props: {
    initNum: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      num: this.initNum
    };
  },

  methods: {
    add: function add() {
      this.num += 1;
      this.notifyNum();
    },
    reduce: function reduce() {
      this.num -= 1;
      this.notifyNum();
    },
    parent: function parent() {
      var _par = 15;
      console.log(_par);
      this.$emit("changeParent", _par);
    },
    reset: function reset() {
      this.num = 0;
      this.notifyNum();
    },
    notifyNum: function notifyNum() {
      // this.$emit("clickNum", {
      //   num: this.num
      // });
    }
  },
  watch: {
    num: function num(oldValue, newValue) {
      console.log(oldValue, newValue);
    },
    initNum: function initNum(oldValue, newValue) {
      console.log(oldValue, newValue);
    }
  }
});

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "counter"
  }, [_c('div', {
    staticClass: "num"
  }, [_vm._v("当前数量:" + _vm._s(_vm.num))]), _vm._v(" "), _c('div', {
    staticClass: "btn-list"
  }, [_c('div', {
    staticClass: "add btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.add
    }
  }, [_vm._v("add+")]), _vm._v(" "), _c('div', {
    staticClass: "reduce btn",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.reduce
    }
  }, [_vm._v("reduce-")]), _vm._v(" "), _c('div', {
    staticClass: "reset btn",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.reset
    }
  }, [_vm._v("reset")]), _vm._v(" "), _c('div', {
    staticClass: "parent btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.parent
    }
  }, [_vm._v("parent")])]), _vm._v(" "), _c('div', {
    staticClass: "text-stylus"
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-dd975836", esExports)
  }
}

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wraper"
  }, [_c('div', {
    staticClass: "msg"
  }, [_vm._v(_vm._s(_vm.msg))]), _vm._v(" "), _c('click-counter', {
    attrs: {
      "init-num": _vm.postNum,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "changeParent": _vm.clickNums
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "methodsTest",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toast
    }
  }, [_vm._v("\n      showToast\n  ")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3747420d", esExports)
  }
}

/***/ })

},[103]);