(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df467"],{"88e6":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"game-wrap"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9"},[e("div",{staticClass:"m-sorts"},[e("ul",[e("li",{class:{cur:0===t.listForm.thirdparty_parent_id},on:{click:function(a){return t.handleThirdpartyChange(0)}}},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.handleThirdpartyChange(0)}}},[t._v("ALL")])]),e("li",{class:{cur:14e4===t.listForm.thirdparty_parent_id}},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.handleThirdpartyChange(14e4)}}},[t._v("BBIN")])]),e("li",{class:{cur:18e4===t.listForm.thirdparty_parent_id}},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.handleThirdpartyChange(18e4)}}},[t._v("AG")])])])]),e("div",{staticClass:"search-form clearfix"},[e("div",{staticClass:"u-input pull-left"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.listForm.title,expression:"listForm.title"}],attrs:{type:"text",placeholder:"关键字"},domProps:{value:t.listForm.title},on:{input:function(a){a.target.composing||t.$set(t.listForm,"title",a.target.value)}}}),e("input",{staticClass:"btn",attrs:{type:"button",value:"搜索"},on:{click:function(a){return t.onSearch()}}})])]),e("ul",{staticClass:"game-nav"},[e("li",{class:{active:""===t.category}},[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.handleCategoryChange("")}}},[t._v("全部游戏")])]),e("li",{class:{active:"hot"===t.category}},[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.handleCategoryChange("hot")}}},[t._v("\n                                热门游戏\n                            ")])]),e("li",{class:{active:"fav"===t.category}},[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.handleCategoryChange("fav")}}},[t._v("\n                                收藏游戏\n                            ")])]),e("li",{class:{active:"history"===t.category}},[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.handleCategoryChange("history")}}},[t._v("\n                                历史游戏\n                            ")])]),e("li",{class:{active:"tiger"===t.category}},[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.handleCategoryChange("tiger")}}},[t._v("\n                                老虎机\n                            ")])]),e("li",{class:{active:"fish"===t.category}},[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.handleCategoryChange("fish")}}},[t._v("\n                                捕鱼游戏\n                            ")])]),e("li",{class:{active:"desktop"===t.category}},[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.handleCategoryChange("desktop")}}},[t._v("\n                                桌面游戏\n                            ")])]),e("li",{class:{active:"game"===t.category}},[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.handleCategoryChange("game")}}},[t._v("\n                                游戏厅\n                            ")])])]),e("div",{staticClass:"game-main"},[e("div",{staticClass:"game-hot"},[e("h2",[t._v("推荐游戏")]),e("div",{staticClass:"game-swiper"},[e("div",{staticClass:"swiper-container"},[e("ul",{staticClass:"swiper-wrapper"},t._l(t.recommendedData,function(a,i){return e("li",{key:i,staticClass:"swiper-slide"},[1===a.is_hot?e("span",{staticClass:"label hot"},[t._v("HOT")]):1===a.is_new?e("span",{staticClass:"label new"},[t._v("NEW")]):t._e(),e("img",{attrs:{src:a.pc_image_url,alt:""}}),e("span",{staticClass:"name"},[t._v(t._s(a.pc_title))]),e("div",{staticClass:"layer"},[e("div",{staticClass:"links"},[e("a",{staticClass:"away",attrs:{href:"/game/play?id="+a.id,target:"play"}},[t._v("马上开始")]),1===a.pc_test?e("a",{attrs:{href:"/game/play?test=1&id="+a.id,target:"play"}},[t._v("免费试玩")]):t._e()]),1!==a.is_favorite?e("a",{staticClass:"star-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.handleFavorite(a.id)}}},[e("span",{staticClass:"icon icon-star"}),t._v("收藏")]):t._e(),1===a.is_favorite?e("a",{staticClass:"star-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.handleFavorite(a.id)}}},[e("span",{staticClass:"icon icon-star"}),t._v("取消收藏")]):t._e()])])}),0)]),e("div",{staticClass:"swiper-pagination"}),e("div",{staticClass:"swiper-button-next"}),e("div",{staticClass:"swiper-button-prev"})])]),e("div",{staticClass:"game-list"},[e("ul",{staticClass:"clearfix"},t._l(t.datas,function(a,i){return e("li",{key:i,staticClass:"swiper-slide"},[1===a.is_hot?e("span",{staticClass:"label hot"},[t._v("HOT")]):1===a.is_new?e("span",{staticClass:"label new"},[t._v("NEW")]):t._e(),e("img",{attrs:{src:a.pc_image_url,alt:""}}),e("span",{staticClass:"name"},[t._v(t._s(a.pc_title))]),e("div",{staticClass:"layer"},[e("div",{staticClass:"links"},[e("a",{staticClass:"away",attrs:{href:"/game/play?id="+a.id,target:"play"}},[t._v("马上开始")]),1===a.pc_test?e("a",{attrs:{href:"/game/play?test=1&id="+a.id,target:"play"}},[t._v("免费试玩")]):t._e()]),1!==a.is_favorite?e("a",{staticClass:"star-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.handleFavorite(a.id)}}},[e("span",{staticClass:"icon icon-star"}),t._v("收藏")]):t._e(),1===a.is_favorite?e("a",{staticClass:"star-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.handleFavorite(a.id)}}},[e("span",{staticClass:"icon icon-star"}),t._v("取消收藏")]):t._e()])])}),0),Math.ceil(t.listForm.total/t.listForm.limit)>t.listForm.page?e("a",{staticClass:"more",attrs:{href:"javascript:void(0)"},on:{click:t.onNext}},[t._v("更多")]):t._e()])])]),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"ad-wrap"},[e("h4",[t._v("热门游戏")]),e("div",{staticClass:"ad-swiper-container"},[e("ul",{staticClass:"swiper-wrapper"},t._l(t.featureData,function(a,i){return e("li",{key:i,staticClass:"swiper-slide"},[e("a",{attrs:{href:"/game/play?id="+a.id,target:"play"}},[e("span",{staticClass:"label"},[t._v("\n                                            RTP"),e("br"),t._v(t._s(a.return_reward_rate)+"%\n                                        ")]),e("img",{attrs:{src:a.pc_image_url,alt:""}}),e("span",{staticClass:"name"},[t._v(t._s(a.pc_title))])])])}),0)])]),e("div",{staticClass:"game-tab"},[t._m(0),e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane active"},[e("ul",t._l(t.returnRewardRateData,function(a,i){return e("li",{key:i,staticClass:"swiper-slide"},[e("a",{attrs:{href:"/game/play?id="+a.id,target:"play"}},[e("span",[t._v(t._s(i+1))]),e("img",{attrs:{src:a.pc_image_url}}),e("p",[e("strong",[t._v(t._s(a.return_reward_rate)+"%")]),t._v("\n                                                "+t._s(a.pc_title)+"\n                                            ")])])])}),0)])])])])])])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav nav-tabs"},[e("span",[t._v("返奖率排名")])])}],r=e("9ab4"),n=e("60a3"),c=e("f727"),o=e("41d6");function l(t){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function d(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function u(t,a){for(var e=0;e<a.length;e++){var i=a[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function v(t,a,e){return a&&u(t.prototype,a),e&&u(t,e),t}function h(t,a){return!a||"object"!==l(a)&&"function"!==typeof a?f(t):a}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function _(t,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(a&&a.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),a&&m(t,a)}function m(t,a){return m=Object.setPrototypeOf||function(t,a){return t.__proto__=a,t},m(t,a)}var y=function(t){function a(){var t;return d(this,a),t=h(this,p(a).apply(this,arguments)),t.listForm={thirdparty_parent_id:0,category_id:0,title:"",is_pc:1,total:0,page:1,limit:25},t.category="",t.recommendedData=[],t.featureData=[],t.newData=[],t.returnRewardRateData=[],t.datas=[],t}return _(a,t),v(a,[{key:"mounted",value:function(){new o["a"](".swiper-container",{autoplay:!0,slidesPerView:4,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"},initialSlide:0,observer:!0,observeParents:!0}),new o["a"](".ad-swiper-container",{autoplay:!0,slidesPerView:2,loopedSlides:2,spaceBetween:8,initialSlide:0,observer:!0,observeParents:!0,direction:"vertical"})}},{key:"created",value:function(){this.fetchRecommendedData(),this.fetchFeatureData(),this.fetchReturnRewardData(),this.fetchData()}},{key:"handleThirdpartyChange",value:function(t){this.listForm.thirdparty_parent_id=t,this.resetData(),this.fetchData()}},{key:"handleCategoryChange",value:function(t){switch(this.resetData(),this.category=t,t){case"hot":this.fetchHotData();break;case"fav":this.fetchFavData();break;case"history":this.fetchHistoryData();break;case"tiger":this.listForm.category_id=3,this.fetchData();break;case"desktop":this.listForm.category_id=2,this.fetchData();break;case"game":this.listForm.category_id=6,this.fetchData();break;case"fish":this.listForm.category_id=8,this.fetchData();break;default:this.listForm.category_id=0,this.fetchData();break}}},{key:"handleFavorite",value:function(t){var a=this;Object(c["a"])("/game/doFavorite",{game_id:t}).then(function(e){if(1===e.code){for(var i in a.datas)a.datas[i].id===t&&(a.datas[i].is_favorite=1===a.datas[i].is_favorite?2:1);for(var s in a.recommendedData)a.recommendedData[s].id===t&&(a.recommendedData[s].is_favorite=1===a.recommendedData[s].is_favorite?2:1);for(var r in a.featureData)a.featureData[r].id===t&&(a.featureData[r].is_favorite=1===a.featureData[r].is_favorite?2:1);for(var n in a.newData)a.newData[n].id===t&&(a.newData[n].is_favorite=1===a.newData[n].is_favorite?2:1)}a.$toasted.show(e.msg,{type:1===e.code?"success":"error"})})}},{key:"fetchHotData",value:function(){var t=this;this.resetData(),Object(c["a"])("/game/index",{is_pc:1,is_hot:1,limit:8}).then(function(a){1===a.code&&(t.datas=a.data.datas,t.listForm.page=1,t.listForm.total=a.data.total)})}},{key:"fetchRecommendedData",value:function(){var t=this;Object(c["a"])("/game/index",{is_pc:1,is_recommended:1,limit:8,pic_w:235,pic_h:180}).then(function(a){1===a.code&&(t.recommendedData=a.data.datas)})}},{key:"fetchFeatureData",value:function(){var t=this;Object(c["a"])("/game/index",{is_pc:1,is_feature:1,limit:8,pic_w:270,pic_h:270}).then(function(a){1===a.code&&(t.featureData=a.data.datas)})}},{key:"fetchReturnRewardData",value:function(){var t=this;Object(c["a"])("/game/index",{is_pc:1,limit:10,order_by:"return_reward_rate",order_sort:"desc"}).then(function(a){1===a.code&&(t.returnRewardRateData=a.data.datas)})}},{key:"fetchFavData",value:function(){var t=this;this.resetData(),Object(c["a"])("/game/favorite",{is_pc:1,pic_w:150,pic_h:150}).then(function(a){1===a.code&&(t.datas=a.data.datas)})}},{key:"fetchHistoryData",value:function(){var t=this;this.resetData(),Object(c["a"])("/game/history",{is_pc:1,pic_w:150,pic_h:150}).then(function(a){1===a.code&&(t.datas=a.data.datas)})}},{key:"fetchData",value:function(){var t=this;Object(c["a"])("/game/index",this.listForm).then(function(a){if(1===a.code){var e=!0,i=!1,s=void 0;try{for(var r,n=a.data.datas[Symbol.iterator]();!(e=(r=n.next()).done);e=!0){var c=r.value;t.datas.push(c)}}catch(o){i=!0,s=o}finally{try{e||null==n.return||n.return()}finally{if(i)throw s}}t.listForm.total=a.data.total}})}},{key:"onSearch",value:function(){var t=this;this.listForm.thirdparty_parent_id=0,this.listForm.category_id=0,this.category="",this.resetData(),Object(c["a"])("/game/index",this.listForm).then(function(a){1===a.code&&(t.datas=a.data.datas,t.listForm.total=a.data.total)})}},{key:"onNext",value:function(){this.listForm.page+=1,this.fetchData()}},{key:"resetData",value:function(){this.datas=[],this.listForm.page=1,this.listForm.total=0}}]),a}(n["c"]);y=r["a"]([Object(n["a"])({components:{}})],y);var g=y,C=g,w=e("2877"),b=Object(w["a"])(C,i,s,!1,null,null,null);a["default"]=b.exports}}]);