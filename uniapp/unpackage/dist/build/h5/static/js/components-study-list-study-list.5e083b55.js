(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components-study-list-study-list"],{"0663":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".study-li-play[data-v-0aed2318]{position:absolute;width:%?68?%;height:%?68?%;right:40%;top:21%}.study-li-date[data-v-0aed2318]{font-size:%?28?%;color:#969696}.study-li-des[data-v-0aed2318]{letter-spacing:%?1?%;width:100%;-webkit-line-clamp:2;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;height:%?92?%;overflow:hidden;font-size:%?32?%}.study-li-img[data-v-0aed2318]{width:100%;height:%?230?%}.study-li[data-v-0aed2318]{width:48.5%;float:left;margin-top:%?20?%;position:relative}.study-li[data-v-0aed2318]:nth-of-type(2n){margin-left:3%}",""]),t.exports=i},1091:function(t,i,e){"use strict";e.r(i);var a=e("199c"),n=e("86f4");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("df25");var d,u=e("f0c5"),l=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"0aed2318",null,!1,a["a"],d);i["default"]=l.exports},"199c":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t._l(t.list,(function(i,a){return[e("v-uni-view",{staticClass:"study-li",attrs:{"data-index":a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goH5.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"study-li-img",attrs:{src:i.thumb}}),i.url_a||"1"==t.listType?t._e():e("v-uni-image",{staticClass:"study-li-play",attrs:{src:"/static/images/play.png"}}),e("v-uni-view",{staticClass:"study-li-des"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"study-li-date"},[t._v(t._s(i.addtime))])],1)]}))],2)},s=[]},"86f4":function(t,i,e){"use strict";e.r(i);var a=e("d64c"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},d64c:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={props:{list:{type:Array,value:[]},listType:{type:String,value:""}},data:function(){return{}},methods:{goH5:function(t){var i=t.currentTarget.dataset.index;this.list[i].url_a?uni.navigateTo({url:"/pages/webview/index?url="+this.list[i].url_a}):"1"==this.listType?uni.navigateTo({url:"/pages/danghistory/index?id="+this.list[i].id}):uni.navigateTo({url:"/pages/reading_list/index?id="+this.list[i].id})}}};i.default=a},df25:function(t,i,e){"use strict";var a=e("eafa"),n=e.n(a);n.a},eafa:function(t,i,e){var a=e("0663");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("4e4de288",a,!0,{sourceMap:!1,shadowMode:!1})}}]);