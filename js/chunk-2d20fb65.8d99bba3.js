(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fb65"],{b595:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-game",style:"background-image:url("+t.info.bg_image_url+")"},[r("div",{staticClass:"container"},[r("div",{staticClass:"m-head"},[t._m(0),r("p",{staticClass:"u-name pull-left"},[r("span",[t._v(t._s(t.info.pc_title))]),1===t.test?r("a",{staticClass:"u-change",attrs:{href:"/game/play?id="+t.id}},[t._v("\n                    进入游戏\n                ")]):t._e()]),t._m(1)]),r("div",{staticClass:"m-info"},[r("iframe",{ref:"thirdPartyGameFrame",staticClass:"thirdPartyGameFrame",staticStyle:{margin:"0px auto"},attrs:{src:t.src,frameborder:"0",scrolling:"auto",width:"100%"}})])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"refresh pull-left",attrs:{href:"javascript:window.location.reload();"}},[r("span",{staticClass:"icon icon-refresh"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"close pull-right",attrs:{href:"javascript:window.close();"}},[r("span",{staticClass:"icon icon-close"})])}],o=r("9ab4"),a=r("60a3"),s=r("4eda"),c=r("f727");function l(t){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function p(t,e,r){return e&&f(t.prototype,e),r&&f(t,r),t}function m(t,e){return!e||"object"!==l(e)&&"function"!==typeof e?h(t):e}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function y(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}function b(t,e){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(t,e)}var _=function(t){function e(){var t;return u(this,e),t=m(this,d(e).apply(this,arguments)),t.src="/loading",t.id=0,t.test=0,t.info={pc_title:"",m_title:"",bg_image_url:"/static/images/game-main.jpg"},t}return y(e,t),p(e,[{key:"created",value:function(){this.id=this.$route.query.id,this.test=this.$route.query.test,this.getUrl()}},{key:"getUrl",value:function(){var t=this,e=this;Object(c["b"])("/game/detail",{game_id:this.id,is_pc:1,test:this.test}).then(function(r){1===r.code?(e.src=r.url,e.info=r.data):t.$toasted.show(window.i18n.t("apiError"),{type:"error"})})}}]),e}(a["c"]);_=o["a"]([Object(a["a"])({components:{CommonHeader:s["c"],CommonFixapp:s["a"]}})],_);var g=_,v=g,w=r("2877"),C=Object(w["a"])(v,n,i,!1,null,null,null);e["default"]=C.exports}}]);