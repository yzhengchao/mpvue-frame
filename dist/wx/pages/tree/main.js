require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(123);



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

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6816229a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(136);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(124)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6816229a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6816229a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/tree/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6816229a", Component.options)
  } else {
    hotAPI.reload("data-v-6816229a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 124:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_date_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_computedDate__ = __webpack_require__(46);


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
    components: {
        dateComponent: __WEBPACK_IMPORTED_MODULE_2__components_date_component__["a" /* default */]
    },
    data: function data() {
        return {
            popupVisible: false,
            checkInTime: "请选择",
            checkOutTime: "请选择",
            weekday: ["日", "一", "二", "三", "四", "五", "六"],
            dateList: [],
            fistIndex: 0,
            totalPrice: 0,
            btnVisiby: true,
            num: 0,
            yuding: "立即预定",
            errorText: "您所选的日期包含满房日期",
            dateArray: [{
                month: "2020年3月",
                days: [{ date: "2020/03/01", price: "323" }, { date: "2020/03/02", price: "323" }, { date: "2020/03/03", price: "323" }, { date: "2020/03/04", price: "323" }, { date: "2020/03/05", price: "323" }, { date: "2020/03/06", price: "323", full: true }, { date: "2020/03/07", price: "323" }, { date: "2020/03/08", price: "323" }, { date: "2020/03/09", price: "323" }, { date: "2020/03/10", price: "323" }, { date: "2020/03/11", price: "323" }, { date: "2020/03/12", price: "323", full: true }, { date: "2020/03/13", price: "323", full: true }, { date: "2020/03/14", price: "323" }, { date: "2020/03/15", price: "323" }, { date: "2020/03/16", price: "323" }, { date: "2020/03/17", price: "323" }, { date: "2020/03/18", price: "323" }, { date: "2020/03/19", price: "323" }, { date: "2020/03/20", price: "323" }, { date: "2020/03/21", price: "323" }, { date: "2020/03/22", price: "323" }, { date: "2020/03/23", price: "323", full: true }, { date: "2020/03/24", price: "323" }, { date: "2020/03/25", price: "323" }, { date: "2020/03/26", price: "323" }, { date: "2020/03/27", price: "323" }, { date: "2020/03/28", price: "323" }, { date: "2020/03/29", price: "323" }, { date: "2020/03/30", price: "323" }, { date: "2020/03/33", price: "323" }]
            }, {
                month: "2020年4月",
                days: [{ date: "2020/04/01", price: "323" }, { date: "2020/04/02", price: "323" }, { date: "2020/04/03", price: "323" }, { date: "2020/04/04", price: "323" }, { date: "2020/04/05", price: "323" }, { date: "2020/04/06", price: "323", full: true }, { date: "2020/04/07", price: "323" }, { date: "2020/04/08", price: "323" }, { date: "2020/04/09", price: "323" }, { date: "2020/04/10", price: "323" }, { date: "2020/04/11", price: "323" }, { date: "2020/04/12", price: "323", full: true }, { date: "2020/04/13", price: "323", full: true }, { date: "2020/04/14", price: "323" }, { date: "2020/04/15", price: "323" }, { date: "2020/04/16", price: "323" }, { date: "2020/04/17", price: "323" }, { date: "2020/04/18", price: "323" }, { date: "2020/04/19", price: "323" }, { date: "2020/04/20", price: "323" }, { date: "2020/04/21", price: "323" }, { date: "2020/04/22", price: "323" }, { date: "2020/04/23", price: "323", full: true }, { date: "2020/04/24", price: "323" }, { date: "2020/04/25", price: "323" }, { date: "2020/04/26", price: "323" }, { date: "2020/04/27", price: "323" }, { date: "2020/04/28", price: "323" }, { date: "2020/04/29", price: "323" }, { date: "2020/0430", price: "323" }]
            }, {
                month: "2020年5月",
                days: [{ date: "2020/05/01", price: "323" }, { date: "2020/05/02", price: "323" }, { date: "2020/05/03", price: "323" }, { date: "2020/05/04", price: "323" }, { date: "2020/05/05", price: "323" }, { date: "2020/05/06", price: "323" }, { date: "2020/05/07", price: "323" }, { date: "2020/05/08", price: "323" }, { date: "2020/05/09", price: "323" }, { date: "2020/05/10", price: "323" }, { date: "2020/05/11", price: "323" }, { date: "2020/05/12", price: "323" }, { date: "2020/05/13", price: "323" }, { date: "2020/05/14", price: "323" }, { date: "2020/05/15", price: "323" }, { date: "2020/05/16", price: "323" }, { date: "2020/05/17", price: "323" }, { date: "2020/05/18", price: "323" }, { date: "2020/05/19", price: "323" }, { date: "2020/05/20", price: "323" }, { date: "2020/05/21", price: "323" }, { date: "2020/05/22", price: "323" }, { date: "2020/05/23", price: "323" }, { date: "2020/05/24", price: "323" }, { date: "2020/05/25", price: "323" }, { date: "2020/05/26", price: "323" }, { date: "2020/05/27", price: "323" }, { date: "2020/05/28", price: "323" }, { date: "2020/05/29", price: "323" }, { date: "2020/05/30", price: "323" }]
            }],
            allDays: [],
            startDay: "",
            endDay: "",
            today: ""
        };
    },
    onShow: function onShow() {
        this.getAllDates();
    },


    methods: {
        chooseTime: function chooseTime(item) {
            if (new Date(item.date).getTime() < new Date(this.today).getTime()) {
                return;
            } else {
                if (this.startDay === "") {
                    this.startDay = item.date;
                    //wx.setStorageSync('hotelFirstDate', item.date)
                    item.isFirstDay = true;
                } else if (this.startDay != "" && this.startDay !== item.date && this.endDay === "") {
                    //已经有起始时间 第二次点击的时间不等于起始时间
                    if (new Date(item.date).getTime() > new Date(this.startDay).getTime()) {
                        // 如果第二个时间大于起始时间
                        this.endDay = item.date;
                        item.isEndDay = true;
                        item.isFirstDay = false;
                        item.ischeckd = false;
                        var timeSection = Object(__WEBPACK_IMPORTED_MODULE_4__utils_computedDate__["a" /* getBetweenDateStr */])(this.startDay, this.endDay);
                        var emitArr = JSON.parse(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(timeSection));
                        console.log(emitArr);
                        emitArr.pop();
                        emitArr.shift();
                        console.log(emitArr);
                        for (var i = 0; i < this.dateArray.length; i++) {
                            console.log(i);
                            for (var j = 0; j < this.dateArray[i].days.length; j++) {
                                if (emitArr.includes(this.dateArray[i].days[j].date)) {
                                    console.log(this.dateArray[i].days[j]);
                                    this.dateArray[i].days[j].isFirstDay = false;
                                    this.dateArray[i].days[j].isEndDay = false;
                                    this.dateArray[i].days[j].ischeckd = true;
                                } else {
                                    this.dateArray[i].days[j].ischeckd = false;
                                }
                            }
                        }
                        this.getChooseDate(timeSection);
                    } else {
                        // 如果第二个时间小于起始时间
                        // if(this.startDay.substring(0,7)!==item.date.substring(0,7)){  // 没在同一个月
                        this.endDay = this.startDay;
                        this.startDay = item.date;
                        item.isEndDay = false;
                        item.isFirstDay = true;
                        item.ischeckd = false;
                        var _timeSection = Object(__WEBPACK_IMPORTED_MODULE_4__utils_computedDate__["a" /* getBetweenDateStr */])(this.startDay, this.endDay);
                        var _emitArr = JSON.parse(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(_timeSection));
                        console.log(_emitArr);
                        _emitArr.pop();
                        _emitArr.shift();
                        console.log(_emitArr);
                        for (var _i = 0; _i < this.dateArray.length; _i++) {
                            console.log(_i);
                            for (var _j = 0; _j < this.dateArray[_i].days.length; _j++) {
                                if (this.dateArray[_i].days[_j].date == this.endDay) {
                                    this.dateArray[_i].days[_j].isFirstDay = false;
                                    this.dateArray[_i].days[_j].isEndDay = true;
                                    this.dateArray[_i].days[_j].ischeckd = false;
                                }
                                if (_emitArr.includes(this.dateArray[_i].days[_j].date)) {
                                    console.log(this.dateArray[_i].days[_j]);
                                    this.dateArray[_i].days[_j].isFirstDay = false;
                                    this.dateArray[_i].days[_j].isEndDay = false;
                                    this.dateArray[_i].days[_j].ischeckd = true;
                                } else {
                                    this.dateArray[_i].days[_j].ischeckd = false;
                                }
                            }
                        }
                        this.getChooseDate(_timeSection);
                        //}
                    }
                } else if (this.startDay !== "" && this.startDay === item.date && this.endDay === "") {
                    //已经有起始时间 第二次点击的时间等于起始时间并且没有结束时间
                    this.startDay = "";
                    item.isEndDay = false;
                    item.isFirstDay = false;
                    item.ischeckd = false;
                    this.yuding = "立即预定";
                } else if (this.startDay !== "" && this.endDay !== "") {
                    for (var _i2 = 0; _i2 < this.dateArray.length; _i2++) {
                        for (var _j2 = 0; _j2 < this.dateArray[_i2].days.length; _j2++) {
                            this.dateArray[_i2].days[_j2].isFirstDay = false;
                            this.dateArray[_i2].days[_j2].isEndDay = false;
                            this.dateArray[_i2].days[_j2].ischeckd = false;
                        }
                    }
                    this.startDay = item.date;
                    this.endDay = "";
                    item.isFirstDay = true;
                    this.yuding = "立即预定";
                }
            }
        },
        reset: function reset() {
            wx.removeStorageSync("hotelChooseDate");
            wx.removeStorageSync("hotelFirstDate");
            this.checkInTime = "";
            this.checkOutTime = "";
            this.btnVisiby = true;
            this.yuding = "立即预定";
            this.totalPrice = 0;
            this.num = 0;
            this.dateList = [];
            for (var i = 0; i < this.dateArray.length; i++) {
                var _item = this.dateArray[i].days;
                for (var j = 0; j < _item.length; j++) {
                    _item[j].isEndDay = false;
                    _item[j].isFirstDay = false;
                    _item[j].ischeckd = false;
                }
            }
        },
        getChooseDate: function getChooseDate(data) {
            console.log(data);
            var arr = data;
            this.totalPrice = 0;
            if (Array.isArray(arr)) {
                this.num = data.length - 1;
                this.checkInTime = data[0];
                this.checkOutTime = data[data.length - 1];
                this.dateList = JSON.parse(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(arr));
                var getlist = JSON.parse(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(arr));
                getlist.pop();
                for (var i = 0; i < this.allDays.length; i++) {
                    if (getlist.includes(this.allDays[i].date) && this.allDays[i].full !== true) {
                        this.totalPrice += this.allDays[i].price * 1;
                    } else if (getlist.includes(this.allDays[i].date) && this.allDays[i].full === true) {
                        this.btnVisiby = false;
                        this.totalPrice = 0;
                        return;
                    }
                }
                console.log(this.totalPrice);
                if (this.totalPrice === 0) {
                    this.btnVisiby = false;
                    this.yuding = "立即预定";
                } else {
                    this.btnVisiby = true;
                    this.yuding = "￥" + this.totalPrice + " 立即预定";
                }
            }
        },
        booking: function booking() {
            if (this.dateList.length !== 0) {
                console.log(this.dateList);
                console.log(this.totalPrice);
            } else {
                __WEBPACK_IMPORTED_MODULE_3__utils_util__["a" /* default */].showErrorToastMessage("请选择入住日期");
                return;
            }
        },
        showModel: function showModel() {
            this.popupVisible = !this.popupVisible;
        },
        closeModel: function closeModel() {
            this.popupVisible = false;
        },
        noChoose: function noChoose() {
            this.yuding = "立即预定";
        },
        getAllDates: function getAllDates() {
            var week = ["日", "一", "二", "三", "四", "五", "六"];
            var today = new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate();
            this.today = today;
            var _list = this.dateArray;
            for (var i = 0; i < _list.length; i++) {
                var _item = _list[i].days;
                var _monthF = _item[0];
                var firstDay = new Date(Date.parse(_monthF.date));
                var firstWeek = firstDay.getDay(); // 获取每月第一天是星期几
                _list[i].days[0].marginleft = firstWeek * 100 + "rpx";
                for (var j = 0; j < _item.length; j++) {
                    if (new Date(_item[j].date).getTime() >= new Date(today).getTime()) {
                        _item[j].afterToday = true;
                        _item[j].isFirstDay = false;
                        _item[j].isEndDay = false;
                    } else {
                        _item[j].afterToday = false;
                    }
                }
            }
            this.dateArray = _list;
            for (var _i3 = 0; _i3 < this.dateArray.length; _i3++) {
                var _allDays;

                (_allDays = this.allDays).push.apply(_allDays, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.dateArray[_i3].days));
            }
            //console.log(this.allDays);
        },
        nextMonth: function nextMonth() {
            if (this.fistIndex === this.dateArray.length - 1) {
                this.fistIndex = this.dateArray.length - 1;
            } else {
                this.fistIndex = this.fistIndex + 1;
            }
        },
        prevMonth: function prevMonth() {
            if (this.fistIndex > 0) {
                this.fistIndex = this.fistIndex - 1 * 1;
            } else {
                this.fistIndex = 0;
            }
        }
    }
});

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_date_component_vue__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_728245e0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_date_component_vue__ = __webpack_require__(135);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(133)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-728245e0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_date_component_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_728245e0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_date_component_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/date-component.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] date-component.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-728245e0", Component.options)
  } else {
    hotAPI.reload("data-v-728245e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 133:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_computedDate__ = __webpack_require__(46);

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
    props: {
        daysArray: {
            type: Object
        }
    },
    data: function data() {
        return {
            days: this.daysArray,
            monthDays: this.daysArray.days,
            today: "",
            startDay: "",
            endDay: ""
        };
    },

    methods: {
        init: function init() {
            console.log("init 事件");
            var week = ["日", "一", "二", "三", "四", "五", "六"];
            var firstDay = new Date(Date.parse(this.daysArray.days[0].date));
            console.log(firstDay.getDay());
            var firstWeek = firstDay.getDay();
            var today = new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate();
            this.today = today;
            console.log(today);
        },
        chooseTime: function chooseTime(item, e) {
            console.log(item);
            console.log(e);
            if (new Date(item.date).getTime() < new Date(this.today).getTime()) {
                return;
            } else {
                if (this.startDay === "") {
                    this.startDay = item.date;
                    wx.setStorageSync('hotelFirstDate', item.date);
                    item.isFirstDay = true;
                } else if (this.startDay != "" && this.startDay !== item.date && this.endDay === "") {
                    //已经有起始时间 第二次点击的时间不等于起始时间
                    if (new Date(item.date).getTime() > new Date(this.startDay).getTime()) {
                        // 如果第二个时间大于起始时间
                        this.endDay = item.date;
                        item.isEndDay = true;
                        item.isFirstDay = false;
                        item.ischeckd = false;
                        var timeSection = Object(__WEBPACK_IMPORTED_MODULE_1__utils_computedDate__["a" /* getBetweenDateStr */])(this.startDay, this.endDay);
                        var emitArr = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(timeSection));
                        console.log(emitArr);
                        emitArr.pop();
                        emitArr.shift();
                        console.log(emitArr);
                        for (var i = 0; i < this.daysArray.days.length; i++) {
                            if (emitArr.includes(this.daysArray.days[i].date)) {
                                // this.$set(this.daysArray.days[i], "isFirstDay", false);
                                // this.$set(this.daysArray.days[i], "isEndDay", false);
                                // this.$set(this.daysArray.days[i], "ischeckd", true);
                                this.daysArray.days[i].isFirstDay = false;
                                this.daysArray.days[i].isEndDay = false;
                                this.daysArray.days[i].ischeckd = true;
                            } else {
                                //this.$set(this.daysArray.days[i], "ischeckd", false);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                                this.daysArray.days[i].ischeckd = false;
                            }
                        }
                        //wx.setStorageSync("hotelChooseDate",JSON.stringify(emitArr));
                        this.$emit("chooseDate", timeSection);
                        wx.setStorageSync("hotelChooseDate", emitArr);
                    } else {
                        // 如果第二个时间小于起始时间
                        wx.setStorageSync('hotelFirstDate', item.date);
                        console.log(this.startDay);
                        // 判断是否在同一个月
                        if (this.startDay.substring(0, 7) !== item.date.substring(0, 7)) {
                            // 没在同一个月
                            this.endDay = this.startDay;
                            this.startDay = item.date;
                            console.log(this.startDay, this.endDay);
                            item.isEndDay = false;
                            item.isFirstDay = true;
                            item.ischeckd = false;
                            var _timeSection = Object(__WEBPACK_IMPORTED_MODULE_1__utils_computedDate__["a" /* getBetweenDateStr */])(this.startDay, this.endDay);
                            var _emitArr = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(_timeSection));
                            console.log(_emitArr);
                            _emitArr.pop();
                            _emitArr.shift();
                            console.log(_emitArr);
                            for (var _i = 0; _i < this.daysArray.days.length; _i++) {
                                if (_emitArr.includes(this.daysArray.days[_i].date)) {
                                    this.daysArray.days[_i].isFirstDay = false;
                                    this.daysArray.days[_i].isEndDay = false;
                                    this.daysArray.days[_i].ischeckd = true;
                                    // this.$set(this.daysArray.days[i], "isFirstDay", false);
                                    // this.$set(this.daysArray.days[i], "isEndDay", false);
                                    // this.$set(this.daysArray.days[i], "ischeckd", true);
                                } else {
                                    this.daysArray.days[_i].ischeckd = false;
                                    //this.$set(this.daysArray.days[i], "ischeckd", false);
                                }
                            }
                            this.$emit("chooseDate", _timeSection);
                            wx.setStorageSync("hotelChooseDate", __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(_emitArr));
                        } else {
                            // 在同一个月
                            this.endDay = this.startDay;
                            this.startDay = item.date;
                            console.log(this.startDay, this.endDay);
                            //let _days=this.monthDays;
                            console.log(this.daysArray.days);
                            for (var _i2 = 0; _i2 < this.daysArray.days.length; _i2++) {
                                if (this.daysArray.days[_i2].date == this.endDay) {
                                    console.log(this.daysArray.days[_i2].isFirstDay);
                                    //this.$set(this.daysArray.days[i], "isFirstDay", false);
                                    //this.$set(this.daysArray.days[i], "isEndDay", true);
                                    this.daysArray.days[_i2].isFirstDay = false;
                                    this.daysArray.days[_i2].isEndDay = true;
                                }
                            }
                            console.log(this.daysArray.days);
                            //this.monthDays=_days;
                            item.isEndDay = false;
                            item.isFirstDay = true;
                            item.ischeckd = false;
                            var _timeSection2 = Object(__WEBPACK_IMPORTED_MODULE_1__utils_computedDate__["a" /* getBetweenDateStr */])(this.startDay, this.endDay);
                            var _emitArr2 = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(_timeSection2));
                            _emitArr2.pop();
                            _emitArr2.shift();
                            console.log(_emitArr2);
                            for (var _i3 = 0; _i3 < this.daysArray.days.length; _i3++) {
                                if (_emitArr2.includes(this.daysArray.days[_i3].date)) {
                                    //this.$set(this.daysArray.days[i], "isFirstDay", false);
                                    //this.$set(this.daysArray.days[i], "isEndDay", false);
                                    //this.$set(this.daysArray.days[i], "ischeckd", true);
                                    this.daysArray.days[_i3].isFirstDay = false;
                                    this.daysArray.days[_i3].isEndDay = false;
                                    this.daysArray.days[_i3].ischeckd = true;
                                } else {
                                    //this.$set(this.daysArray.days[i], "ischeckd", false);
                                    this.daysArray.days[_i3].ischeckd = false;
                                }
                            }
                            this.$emit("chooseDate", _timeSection2);
                            wx.setStorageSync("hotelChooseDate", __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(_emitArr2));
                        }
                    }
                } else if (this.startDay !== "" && this.startDay === item.date && this.endDay === "") {
                    //已经有起始时间 第二次点击的时间等于起始时间并且没有结束时间
                    this.startDay = "";
                    wx.removeStorageSync("hotelChooseDate");
                    wx.removeStorageSync("hotelFirstDate");
                    item.isEndDay = false;
                    item.isFirstDay = false;
                    item.ischeckd = false;
                    this.$emit("nochoose", "0");
                } else if (this.startDay !== "" && this.endDay !== "") {
                    // 已有起始时间 结束时间，第三次点击
                    for (var _i4 = 0; _i4 < this.daysArray.days.length; _i4++) {
                        //this.$set(this.daysArray.days[i], "isFirstDay", false);
                        //this.$set(this.daysArray.days[i], "isEndDay", false);
                        //this.$set(this.daysArray.days[i], "ischeckd", false);
                        this.daysArray.days[_i4].isFirstDay = false;
                        this.daysArray.days[_i4].isEndDay = false;
                        this.daysArray.days[_i4].ischeckd = false;
                    }
                    this.startDay = item.date;
                    this.endDay = "";
                    item.isFirstDay = true;
                    wx.removeStorageSync("hotelChooseDate");
                    wx.setStorageSync('hotelFirstDate', item.date);
                    this.$emit("nochoose", "0");
                }
            }
        }
    },
    watch: {
        daysArray: function daysArray(newValue, oldValue) {
            console.log(newValue, oldValue);
            console.log(this.startDay, this.endDay);
            var chooseHotel = wx.getStorageSync("hotelChooseDate");
            var _firstDay = wx.getStorageSync("hotelFirstDate");
            console.log(_firstDay);
            console.log(chooseHotel);
            if (chooseHotel !== null) {
                for (var i = 0; i < newValue.days.length; i++) {
                    if (chooseHotel.includes(newValue.days[i].date)) {
                        //this.$set(newValue.days[i], "isFirstDay", false);
                        //this.$set(newValue.days[i], "isEndDay", false);
                        //this.$set(newValue.days[i], "ischeckd", true);
                        this.daysArray.days[i].isFirstDay = false;
                        this.daysArray.days[i].isEndDay = false;
                        this.daysArray.days[i].ischeckd = true;
                    } else {
                        this.daysArray.days[i].ischeckd = false;
                        //this.$set(newValue.days[i], "ischeckd", false);
                    }
                    if (newValue.days[i].date != _firstDay && newValue.days[i].isFirstDay == true) {
                        // this.$set(newValue.days[i], "isFirstDay", false);
                        // this.$set(newValue.days[i], "isEndDay", true);
                        // this.$set(newValue.days[i], "ischeckd", false);
                        this.daysArray.days[i].isFirstDay = false;
                        this.daysArray.days[i].isEndDay = true;
                        this.daysArray.days[i].ischeckd = false;
                    }
                    if (newValue.days[i].isFirstDay == true && newValue.days[i].date != this.startDay) {
                        //this.$set(newValue.days[i], "isFirstDay", false);
                        this.daysArray.days[i].isFirstDay = false;
                    }
                    if (newValue.days[i].isEndDay == true && newValue.days[i].date != this.endDay) {
                        //this.$set(newValue.days[i], "isEndDay", false);
                        this.daysArray.days[i].isEndDay = false;
                    }
                }
            } else {}
        }
    },
    destroyed: function destroyed() {
        wx.removeStorageSync("hotelChooseDate");
        wx.removeStorageSync("hotelFirstDate");
    },
    created: function created() {
        console.log("created");
        this.init();
    }
});

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dateComponent"
  }, _vm._l((_vm.daysArray.days), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "day-item",
      class: [item.isFirstDay === true ? 'check-in-day' : '', item.isEndDay === true ? 'check-out-day' : '', item.ischeckd === true ? 'choose-date' : ''],
      style: ({
        marginLeft: item.marginleft
      }),
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.chooseTime(item, $event)
        }
      }
    }, [(item.full === true) ? _c('span', {
      staticClass: "red"
    }, [_vm._v("满房")]) : _c('span', [_vm._v(_vm._s(index + 1))]), _vm._v(" "), (item.afterToday == true && item.isFirstDay != true && item.isEndDay != true) ? _c('span', [_vm._v(_vm._s(item.price))]) : (item.afterToday == true && item.isFirstDay == true) ? _c('span', [_vm._v("入住")]) : (item.afterToday == true && item.isEndDay == true) ? _c('span', [_vm._v("退房")]) : _vm._e()])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-728245e0", esExports)
  }
}

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tree"
  }, [_c('div', {
    staticClass: "choose-date",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.showModel
    }
  }, [_vm._v("选择日期1")]), _vm._v(" "), _c('div', {
    class: {
      'zan-dialog-show': _vm.popupVisible
    }
  }, [(_vm.popupVisible) ? _c('div', {
    staticClass: "popup",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.closeModel
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "popup-wraper service-popup-wraper"
  }, [_c('div', {
    staticClass: "po-rela"
  }, [_c('div', {
    staticClass: "popup-fixed-title"
  }, [_c('div', {
    staticClass: "blue",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.closeModel
    }
  }, [_vm._v("关闭")]), _vm._v(" "), _c('div', [_vm._v("日期选择")]), _vm._v(" "), _c('div', {
    staticClass: "blue",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.reset
    }
  }, [_vm._v("清空")])]), _vm._v(" "), _c('div', {
    staticClass: "popup-fixed-dateNum"
  }, [_c('div', {
    staticClass: "ruzhu-date"
  }, [_c('span', [_vm._v("入住时间")]), _vm._v(" "), _c('p', {
    staticClass: "checkInTime"
  }, [_vm._v(_vm._s(_vm.checkInTime))])], 1), _vm._v(" "), _c('div', {
    staticClass: "date-num"
  }, [_vm._v("\n                        共"), _c('span', [_vm._v(_vm._s(_vm.num))]), _vm._v("晚\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "tuifang-date"
  }, [_c('span', [_vm._v("退房时间")]), _vm._v(" "), _c('p', {
    staticClass: "checkOutTime"
  }, [_vm._v(_vm._s(_vm.checkOutTime))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "weekday"
  }, _vm._l((_vm.weekday), function(item, index) {
    return _c('div', {
      key: item,
      staticClass: "weekday-item"
    }, [_vm._v(_vm._s(item))])
  })), _vm._v(" "), _c('div', {
    staticClass: "dateArray-wrapper"
  }, _vm._l((_vm.dateArray), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('p', {
      staticClass: "dateArray-wrapper-month"
    }, [_vm._v(_vm._s(item.month))]), _vm._v(" "), _c('div', {
      staticClass: "days-content"
    }, _vm._l((item.days), function(child, childIndex) {
      return _c('div', {
        key: childIndex,
        staticClass: "days-item",
        class: [child.isFirstDay === true ? 'check-in-day' : '', child.isEndDay === true ? 'check-out-day' : '', child.ischeckd === true ? 'choose-date-day' : ''],
        style: ({
          marginLeft: child.marginleft
        }),
        attrs: {
          "eventid": '4_' + index + '-' + childIndex
        },
        on: {
          "click": function($event) {
            _vm.chooseTime(child)
          }
        }
      }, [(child.full === true && child.afterToday == true) ? _c('span', {
        staticClass: "red"
      }, [_vm._v("满房")]) : _c('span', {
        class: [child.afterToday == true ? 'is-afterToday' : 'not-afterToday']
      }, [_vm._v(_vm._s(childIndex + 1))]), _vm._v(" "), (child.afterToday == true && child.isFirstDay != true && child.isEndDay != true) ? _c('span', {
        staticClass: "span-day-price"
      }, [_vm._v("￥" + _vm._s(child.price))]) : (child.afterToday == true && child.isFirstDay == true) ? _c('span', [_vm._v("入住")]) : (child.afterToday == true && child.isEndDay == true) ? _c('span', [_vm._v("退房")]) : _vm._e()])
    }))], 1)
  })), _vm._v(" "), (_vm.btnVisiby) ? _c('div', {
    staticClass: "ebooking",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.booking
    }
  }, [_vm._v(_vm._s(_vm.yuding))]) : _vm._e(), _vm._v(" "), (!_vm.btnVisiby) ? _c('div', {
    staticClass: "ebooking-error"
  }, [_vm._v(_vm._s(_vm.errorText))]) : _vm._e()])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6816229a", esExports)
  }
}

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBetweenDateStr;
function getBetweenDateStr(start, end) {
    var result = [];
    var beginDay = start.split("/");
    var endDay = end.split("/");
    var diffDay = new Date();
    var dateList = new Array();
    var i = 0;
    diffDay.setDate(beginDay[2]);
    diffDay.setMonth(beginDay[1] - 1);
    diffDay.setFullYear(beginDay[0]);
    result.push(start);
    while (i == 0) {
        var countDay = diffDay.getTime() + 24 * 60 * 60 * 1000;
        diffDay.setTime(countDay);
        dateList[2] = diffDay.getDate();
        dateList[1] = diffDay.getMonth() + 1;
        dateList[0] = diffDay.getFullYear();
        if (String(dateList[1]).length == 1) {
            dateList[1] = "0" + dateList[1];
        };
        if (String(dateList[2]).length == 1) {
            dateList[2] = "0" + dateList[2];
        };
        result.push(dateList[0] + "/" + dateList[1] + "/" + dateList[2]);
        if (dateList[0] == endDay[0] && dateList[1] == endDay[1] && dateList[2] == endDay[2]) {
            i = 1;
        }
    }
    console.log(result);
    return result;
}

/***/ })

},[122]);