(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d4407"],{"5fdd":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"m-nav"},[e("ul",[e("li",[e("a",{class:{active:0===t.listForm.platform_type_id},attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.handlePlatformTypeChange(0)}}},[e("span",{staticClass:"icon icon-hotgame"}),t._v("热门活动")])]),e("li",[e("a",{class:{active:1===t.listForm.platform_type_id},attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.handlePlatformTypeChange(1)}}},[e("span",{staticClass:"icon icon-sport"}),t._v("体育")])]),e("li",[e("a",{class:{active:3===t.listForm.platform_type_id},attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.handlePlatformTypeChange(3)}}},[e("span",{staticClass:"icon icon-happy"}),t._v("真人娱乐")])]),e("li",[e("a",{class:{active:5===t.listForm.platform_type_id},attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.handlePlatformTypeChange(5)}}},[e("span",{staticClass:"icon icon-game"}),t._v("小游戏")])]),e("li",[e("a",{class:{active:2===t.listForm.platform_type_id},attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.handlePlatformTypeChange(2)}}},[e("span",{staticClass:"icon icon-ticket"}),t._v("彩票")])]),e("li",[e("a",{class:{active:100===t.listForm.platform_type_id},attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.handlePlatformTypeChange(100)}}},[e("span",{staticClass:"icon icon-money"}),t._v("存提款")])]),t._m(0)])]),t._l(t.datas,function(a,i){return e("div",{key:i,class:"m-module"+(!0===a.autoHeight?" autoheight":"")},[e("div",{staticClass:"module-img pull-left"},[a.end_time<"2030-01-01"?e("p",[t._v("\n                "+t._s(a.start_time)+" - "+t._s(a.end_time)+"\n            ")]):t._e(),a.end_time>"2030-01-01"?e("p",[t._v("\n                "+t._s(t.$t("promotion.long_time"))+"\n            ")]):t._e(),e("img",{attrs:{src:a.image_url,alt:"",width:"324",height:"400"}})]),e("div",{staticClass:"module-info"},[t._m(1,!0),e("h4",[t._v("\n                "+t._s(a.title)+"\n                "),e("br"),e("span",[t._v(t._s(a.remark))])]),1===a.show_btn?e("a",{staticClass:"u-change",staticStyle:{"line-height":"40px"},attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.participate(a.activity_id)}}},[t._v("参与活动")]):t._e(),e("div",{domProps:{innerHTML:t._s(a.content)}}),e("div",{staticClass:"fold-link"},[e("a",{staticClass:"u-change",attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.toggleAutoheight(i)}}},[t._v("展开")])])])])})],2)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:""}},[e("i",{staticClass:"lab"}),e("i",{staticClass:"lab-txt"},[t._v("已结束")]),e("i",{staticClass:"lab red"}),e("i",{staticClass:"lab-txt"},[t._v("进行中")]),e("span",{staticClass:"icon icon-steam"}),t._v("Steam")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tally"},[e("span",{staticClass:"icon icon-game"})])}],o=e("9ab4"),r=e("60a3"),s=e("b32d"),c=function(t){return Object(s["a"])({url:"/activity/getActivityList",method:"post",data:t})},l=function(t){return Object(s["a"])({url:"/activity/participate",method:"post",data:t})};function u(t){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function f(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function p(t,a){for(var e=0;e<a.length;e++){var i=a[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function h(t,a,e){return a&&p(t.prototype,a),e&&p(t,e),t}function d(t,a){return!a||"object"!==u(a)&&"function"!==typeof a?v(t):a}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}function _(t,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(a&&a.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),a&&y(t,a)}function y(t,a){return y=Object.setPrototypeOf||function(t,a){return t.__proto__=a,t},y(t,a)}var b=function(t){function a(){var t;return f(this,a),t=d(this,m(a).apply(this,arguments)),t.listForm={platform_type_id:0,total:0,page:1,limit:25},t.datas=[],t}return _(a,t),h(a,[{key:"created",value:function(){this.fetchData()}},{key:"handlePlatformTypeChange",value:function(t){this.listForm.platform_type_id=t,this.fetchData()}},{key:"toggleAutoheight",value:function(t){this.datas[t].autoHeight=!this.datas[t]["autoHeight"],this.$forceUpdate()}},{key:"fetchData",value:function(){var t=this;c(this.listForm).then(function(a){if(1===a.code)for(var e in t.datas=a.data,t.datas)t.datas[e]["autoHeight"]=!1;else t.datas=[]})}},{key:"participate",value:function(t){var a=this,e=this;l({activity_id:t}).then(function(t){1===t.code&&e.fetchData(),a.$toasted.show(t.msg,{type:1===t.code?"success":"error"})})}}]),a}(r["c"]);b=o["a"]([Object(r["a"])({components:{}})],b);var g=b,C=g,k=e("2877"),j=Object(k["a"])(C,i,n,!1,null,null,null);a["default"]=j.exports}}]);