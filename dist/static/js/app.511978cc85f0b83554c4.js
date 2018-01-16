webpackJsonp([1],{NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n=s("mtWM"),c=s.n(n),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]},r=s("VU/8")({name:"app"},a,!1,function(t){s("gg0c")},null,null).exports,o=s("/ocq"),d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"dialog-delete"}},[s("div",{attrs:{id:"shade"}}),t._v(" "),s("div",{attrs:{id:"dialog-delete-box"}},[s("div",{staticClass:"box-top"},[s("span",{on:{click:t.clickNo}},[t._v("×")])]),t._v(" "),s("div",{staticClass:"box-content"},[s("p",[t._v("你确认删除此订单信息吗?")]),t._v(" "),s("div",{staticClass:"btn-wrap"},[s("button",{staticClass:"btn-confirm",on:{click:t.clickYes}},[t._v("Yes")]),t._v(" "),s("button",{staticClass:"btn-cancel",on:{click:t.clickNo}},[t._v("No")])])])])])},staticRenderFns:[]},l={name:"home",components:{dialogDelete:s("VU/8")({name:"dialog-delete",methods:{clickYes:function(){this.$emit("confirmDel")},clickNo:function(){this.$emit("cancelDel")}}},d,!1,function(t){s("jups")},"data-v-82eb2474",null).exports},data:function(){return{productList:[],selectAllFlag:!1,showDeleteBox:!1,deleteNth:0}},mounted:function(){this.$nextTick(function(){this.cartView()})},computed:{totalMoney:function(){var t=0;return this.productList.forEach(function(e){e.isChecked&&(t+=e.productPrice*e.productQuantity)}),t}},filters:{formatMoney:function(t,e){return e?"￥"+t.toFixed(2)+e:"￥"+t.toFixed(2)}},methods:{cartView:function(){var t=this;this.$axios.get("../static/productList.json",{id:"productlist"}).then(function(e){t.productList=e.data.result.list})},changeQuantity:function(t,e){-1===e&&t.productQuantity<=1?t.productQuantity=1:t.productQuantity+=e},selectItem:function(t){void 0===t.isChecked?this.$set(t,"isChecked",!0):t.isChecked=!t.isChecked,this.selectAllFlag=this.productList.every(function(t){return t.isChecked})},selectAll:function(t){var e=this;this.selectAllFlag=t,this.productList.forEach(function(t){void 0===t.isChecked?e.$set(t,"isChecked",e.selectAllFlag):t.isChecked=e.selectAllFlag})},delItem:function(t){this.showDeleteBox=!0,this.deleteNth=t},confirmDel:function(){this.productList.splice(this.deleteNth,1),this.showDeleteBox=!1}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("div",{attrs:{id:"cart"}},[t._m(0),t._v(" "),s("section",{attrs:{id:"cart-item"}},[t._m(1),t._v(" "),s("div",{staticClass:"cart-item-list"},[s("ul",t._l(t.productList,function(e,i){return s("li",[s("div",{staticClass:"cart-tab1"},[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(s){t.selectItem(e)}}},[s("i",{class:["iconfont",{"icon-notchecked":!e.isChecked},{"icon-checked":e.isChecked}]})]),t._v(" "),s("img",{staticClass:"item-pic",attrs:{src:e.productImg,alt:e.productName}}),t._v(" "),s("div",{staticClass:"item-info"},[s("p",{staticClass:"item-title",domProps:{textContent:t._s(e.productName)}}),t._v(" "),s("div",{staticClass:"item-include"},[s("dl",[s("dt",[t._v("赠送：")]),t._v(" "),t._l(e.parts,function(e){return s("dd",{domProps:{textContent:t._s(e.partsName)}})})],2)])])]),t._v(" "),s("div",{staticClass:"cart-tab2"},[s("p",{staticClass:"item-price"},[t._v("\n                            "+t._s(t._f("formatMoney")(e.productPrice))+"\n                            ")])]),t._v(" "),s("div",{staticClass:"cart-tab3"},[s("div",{staticClass:"item-quantity"},[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(s){t.changeQuantity(e,-1)}}},[t._v("-")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.productQuantity,expression:"item.productQuantity"}],attrs:{type:"text",disabled:""},domProps:{value:e.productQuantity},on:{input:function(s){s.target.composing||t.$set(e,"productQuantity",s.target.value)}}}),t._v(" "),s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(s){t.changeQuantity(e,1)}}},[t._v("+")])])]),t._v(" "),s("div",{staticClass:"cart-tab4"},[s("p",{staticClass:"price-total"},[t._v("\n              \t                "+t._s(t._f("formatMoney")(e.productPrice*e.productQuantity,"元"))+"\n              \t            ")])]),t._v(" "),s("div",{staticClass:"cart-tab5"},[s("i",{staticClass:"iconfont icon-delete",on:{click:function(e){t.delItem(i)}}})])])}))])]),t._v(" "),s("div",[s("div",{staticClass:"item-all-check"},[s("a",{attrs:{href:"javascript:void(0)"}},[s("i",{staticClass:"iconfont",class:[{"icon-notchecked":!t.selectAllFlag},{"icon-checked":t.selectAllFlag}],on:{click:function(e){t.selectAll(!0)}}})]),t._v(" "),s("a",{staticClass:"check-all-btn",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.selectAll(!0)}}},[t._v("全选")]),t._v(" "),s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.selectAll(!1)}}},[t._v("取消全选")])]),t._v(" "),s("div",{staticClass:"checkout-account"},[s("div",{staticClass:"total-money"},[t._v("\n    \t              总价格："+t._s(t._f("formatMoney")(t.totalMoney,"元"))+"\n    \t          ")]),t._v(" "),s("div",{staticClass:"checkout-btn"},[s("keep-alive",[s("router-link",{attrs:{to:"/order"}},[t._v("结账")])],1)],1)])])]),t._v(" "),s("dialog-delete",{directives:[{name:"show",rawName:"v-show",value:t.showDeleteBox,expression:"showDeleteBox"}],on:{confirmDel:t.confirmDel,cancelDel:function(e){t.showDeleteBox=!1}}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{attrs:{id:"checkout-title"}},[e("h2",[this._v("购物车")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cart-item-header"},[e("ul",[e("li",[this._v("商品信息")]),this._v(" "),e("li",[this._v("商品金额")]),this._v(" "),e("li",[this._v("商品数量")]),this._v(" "),e("li",[this._v("总金额")]),this._v(" "),e("li",[this._v("编辑")])])])}]},v=s("VU/8")(l,u,!1,function(t){s("pkvL")},null,null).exports,p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"orderProcedure"}},[s("header",{staticClass:"procedure-title"},[s("div",{class:{"current-procedure":1===t.stepIndex}},[t._v("地址确认")]),t._v(" "),s("div",{class:{"current-procedure":2===t.stepIndex}},[t._v("查看订单")]),t._v(" "),s("div",{class:{"current-procedure":3===t.stepIndex}},[t._v("支付")]),t._v(" "),s("div",{class:{"current-procedure":4===t.stepIndex}},[t._v("订单确认")])]),t._v(" "),s("keep-alive",[s("router-view")],1),t._v(" "),s("footer",[s("router-link",{staticClass:"next-step-btn",attrs:{to:t.currentRouter},nativeOn:{click:function(e){t.gotoNextStep(e)}}},[t._v("下一步")])],1)],1)},staticRenderFns:[]},h=s("VU/8")({name:"orderProcedure",data:function(){return{step:["address","view","pay","confirm"],stepIndex:1}},computed:{currentRouter:function(){return this.stepIndex<this.step.length?"/order/"+this.step[this.stepIndex]:this.stepIndex===this.step.length?"/complete":void 0}},methods:{gotoNextStep:function(){this.stepIndex<this.step.length?this.stepIndex++:this.stepIndex=99}}},p,!1,function(t){s("rNz1")},"data-v-218beb82",null).exports,f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"post-address"}},[s("section",{attrs:{id:"address-list"}},[t._m(0),t._v(" "),s("ul",[t._l(t.filterAddress,function(e,i){return s("li",{class:[{selected:i===t.currentIndex},"adr-list-card"],on:{mouseover:function(s){t.showAdrEdite(e)},mouseout:function(t){e.appear=!1},click:function(e){t.currentIndex=i}}},[s("h3",{domProps:{textContent:t._s(e.userName)}}),t._v(" "),s("p",{domProps:{textContent:t._s(e.streetName)}}),t._v(" "),s("br"),t._v(" "),s("p",{domProps:{textContent:t._s(e.tel)}}),t._v(" "),e.isDefault?s("p",{staticClass:"default-address"},[t._v("默认地址")]):t._e(),t._v(" "),e.appear?[e.isDefault?t._e():s("a",{staticClass:"set-default-address",attrs:{href:"javascript:void(0)"},on:{click:function(s){t.setAsDefaultAdr(e)}}},[t._v("\n\t\t\t\t\t设为默认地址\n\t\t\t\t\t")]),t._v(" "),s("i",{staticClass:"iconfont icon-edit"}),t._v(" "),s("i",{staticClass:"iconfont icon-delete",on:{click:function(e){t.deleteAddress(i)}}})]:t._e()],2)}),t._v(" "),t._m(1)],2),t._v(" "),s("div",{staticClass:"more-address"},[t.addressNum===t.addressList.length?s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.addressNum=3}}},[t._v("\n\t\t\t收起\n\t\t\t"),s("i",{staticClass:"iconfont icon-up"})]):s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.addressNum=t.addressList.length}}},[t._v("\n\t\t\tmore\n\t\t\t"),s("i",{staticClass:"iconfont icon-down"})])])]),t._v(" "),s("section",{attrs:{id:"shipping"}},[t._m(2),t._v(" "),s("ul",[s("li",{class:{selected:1===t.shippingMethod},on:{click:function(e){t.shippingMethod=1}}},[s("h3",[t._v("标准配送")]),t._v(" "),s("p",[t._v("Free")])]),t._v(" "),s("li",{class:{selected:2===t.shippingMethod},on:{click:function(e){t.shippingMethod=2}}},[s("h3",[t._v("高级配送")]),t._v(" "),s("p",[t._v("180")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"address-title"},[e("span",[this._v("配送地址")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"add-address"},[e("i",{staticClass:"iconfont icon-add"}),this._v(" "),e("p",[this._v("添加新地址")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"shipping-title"},[e("span",[this._v("配送方式")])])}]},_=s("VU/8")({name:"post-address",data:function(){return{addressList:[],addressNum:3,currentIndex:0,shippingMethod:1}},mounted:function(){this.$nextTick(function(){this.addressView()})},computed:{filterAddress:function(){return this.addressList.slice(0,this.addressNum)}},methods:{addressView:function(){var t=this;this.$axios.get("../static/address.json",{id:"addressId"}).then(function(e){0===e.data.status&&(t.addressList=e.data.result)})},showAdrEdite:function(t){void 0===t.appear?this.$set(t,"appear","true"):t.appear=!0},setAsDefaultAdr:function(t){this.filterAddress.forEach(function(t){t.isDefault=!1}),t.isDefault=!0},deleteAddress:function(t){this.addressList.splice(t,1)}}},f,!1,function(t){s("p4CE")},"data-v-47d164ca",null).exports,m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"viewOrder"}},[this._v("\n\tviewOrder\n")])},staticRenderFns:[]},C=s("VU/8")({name:"viewOrder"},m,!1,null,null,null).exports,k={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"payOrder"}},[this._v("\n\tpayOrder\n")])},staticRenderFns:[]},x=s("VU/8")({name:"payOrder"},k,!1,null,null,null).exports,g={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"confirmOrder"}},[this._v("\n\tconfirmOrder\n")])},staticRenderFns:[]},y=s("VU/8")({name:"confirmOrder"},g,!1,null,null,null).exports;i.a.use(o.a);var w=new o.a({mode:"history",routes:[{path:"/",component:v},{path:"/order",component:h,children:[{path:"",component:_},{path:"address",component:_},{path:"view",component:C},{path:"pay",component:x},{path:"confirm",component:y}]}]});s("STT/");i.a.prototype.$axios=c.a,i.a.config.productionTip=!1,new i.a({el:"#app",router:w,template:"<app/>",components:{app:r}})},"STT/":function(t,e){},gg0c:function(t,e){},jups:function(t,e){},p4CE:function(t,e){},pkvL:function(t,e){},rNz1:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.511978cc85f0b83554c4.js.map