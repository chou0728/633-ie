(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e904f"],{"8c6d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"m-userInfo"},[n("h4",{staticClass:"u-title"},[t._v("\n            VIP中心\n        ")]),n("div",{staticClass:"m-power clearfix"},[n("div",{staticClass:"power-user clearfix"},[n("div",{staticClass:"user"},[n("div",{staticClass:"photo"},[n("img",{attrs:{src:t.member.avatar,alt:""}})]),n("strong",[t._v(t._s(t.memberVip.member))])]),n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar progress-success",style:{width:t.memberVip.vip_progress_bar+"%"}})]),n("div",{staticClass:"vip"},[n("span",{staticClass:"icon icon-vip1"}),n("strong",[t._v(t._s(t.memberVip.next_vip_title))])]),n("p",[t._v("\n                    下个月晋级"+t._s(t.memberVip.next_vip_title)+"还需积分： "+t._s(t.memberVip.owned_point)+" / "+t._s(t.memberVip.next_point)+"\n                ")])]),t._m(0),t._m(1)])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"power-info"},[n("h4",[t._v("\n                    您当前为\n                    VIP0\n                    会员，可享受以下权益\n                ")]),n("ol",[n("li",[n("i",[t._v("沙巴体育基础返水0.18%，无上限")])]),n("li",[n("i",[t._v("真人娱乐基础返水0.58%，无上限")])]),n("li",[n("i",[t._v("小游戏[仅老虎机]基础返水0.76%，无上限")])]),n("li",[n("i",[t._v("棋牌基础返水0.76%，无上限")])]),n("li",[n("i",[t._v("彩票基础返水0.5%，无上限")])]),n("li",[n("i",[t._v("每周免费提款7次")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"power-info power-info-next"},[n("h4",[t._v("\n                    晋级\n                    VIP1\n                    ，可享受以下权益\n                    "),n("a",{staticClass:"pull-right u-change",attrs:{href:"#"}},[t._v("\n                        查看更多\n                    ")])]),n("ol",[n("li",[n("i",[t._v("生日礼金"),n("strong",[t._v("588")]),t._v("元（5倍流水可提）")])]),n("li",[n("i",[t._v("VIP晋升奖金"),n("strong",[t._v("888")]),t._v("元（5倍流水可提）")])]),n("li",[n("i",[t._v("每月复活金最高"),n("strong",[t._v("500")]),t._v("元（负盈利5%）")])]),n("li",[n("i",[t._v("沙巴体育返水从0.18%升为"),n("strong",[t._v("0.28%")]),t._v("，无上限")])]),n("li",[n("i",[t._v("真人娱乐返水从0.58%升为"),n("strong",[t._v("0.7%")]),t._v("，无上限")])]),n("li",[n("i",[t._v("小游戏[仅老虎机]返水从0.76%升为"),n("strong",[t._v("0.9%")])])]),n("li",[n("i",[t._v("棋牌返水从0.76%升为"),n("strong",[t._v("0.9%")])])]),n("li",[n("i",[t._v("彩票返水从0.5%升为"),n("strong",[t._v("0.7%")]),t._v("，无上限")])]),n("li",[n("i",[t._v("每周免费提款"),n("strong",[t._v("8")]),t._v("次")])])])])}],o=n("9ab4"),u=n("60a3"),a=n("0290"),s=n("a34a"),c=n.n(s),l=n("0613"),p=n("6fc5"),_=n("0f8a");function f(t){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function m(t,e,n,r,i,o,u){try{var a=t[o](u),s=a.value}catch(c){return void n(c)}a.done?e(s):Promise.resolve(s).then(r,i)}function v(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function u(t){m(o,r,i,u,a,"next",t)}function a(t){m(o,r,i,u,a,"throw",t)}u(void 0)})}}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t}function h(t,e){return!e||"object"!==f(e)&&"function"!==typeof e?g(t):e}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}function O(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}function V(t,e){return V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},V(t,e)}var P=function(t){function e(){var t;return b(this,e),t=h(this,w(e).apply(this,arguments)),t.memberVip={member:"",next_point:"",owned_point:"",next_vip_title:"",require_point:"",curr_vip:{title:"",upgrade_gift_amount:"",upgrade_gift_multiple:"",birthday_gift_amount:"",birthday_gift_multiple:"",topped_gift_amount:"",topped_gift_multiple:"",deposit_bonus:"",deposit_bonus_limit:"",deposit_bonus_multiple:"",rescue_amount:"",rescue_amount_limit:"",rescue_amount_multiple:"",free_withdrawal_num:0},next_vip:{title:"",upgrade_gift_amount:"",upgrade_gift_multiple:"",birthday_gift_amount:"",birthday_gift_multiple:"",topped_gift_amount:"",topped_gift_multiple:"",deposit_bonus:"",deposit_bonus_limit:"",deposit_bonus_multiple:"",rescue_amount:"",rescue_amount_limit:"",rescue_amount_multiple:"",free_withdrawal_num:0}},t}return O(e,t),d(e,[{key:"SET_MEMBER_VIP",value:function(t){this.memberVip=t}},{key:"getMemberVip",value:function(){var t=v(c.a.mark(function t(){var e,n;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(_["h"])();case 2:e=t.sent,n=e.data,this.SET_MEMBER_VIP(n);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}]),e}(p["d"]);o["a"]([p["c"]],P.prototype,"SET_MEMBER_VIP",null),o["a"]([p["a"]],P.prototype,"getMemberVip",null),P=o["a"]([Object(p["b"])({dynamic:!0,store:l["a"],name:"vip"})],P);var j=Object(p["e"])(P);function E(t){return E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t,e,n){return e&&C(t.prototype,e),n&&C(t,n),t}function k(t,e){return!e||"object"!==E(e)&&"function"!==typeof e?M(t):e}function M(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}function T(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}function R(t,e){return R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},R(t,e)}var B=function(t){function e(){return x(this,e),k(this,I(e).apply(this,arguments))}return T(e,t),S(e,[{key:"created",value:function(){j.getMemberVip()}},{key:"member",get:function(){return a["a"].member}},{key:"memberVip",get:function(){return j.memberVip}}]),e}(u["c"]);B=o["a"]([u["a"]],B);var $=B,J=$,q=n("2877"),z=Object(q["a"])(J,r,i,!1,null,null,null);e["default"]=z.exports}}]);