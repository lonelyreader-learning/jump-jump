(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1557a9b6"],{9406:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-main",[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:5}},[e("el-card",[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("短链接域名")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:2===t.role,expression:"role === 2"}],staticStyle:{float:"right"}},[e("el-button",{attrs:{icon:"el-icon-refresh",size:"mini",circle:""},on:{click:function(n){return t.getConfig()}}}),t._v(" "),e("el-button",{attrs:{icon:"el-icon-plus",size:"mini",circle:""},on:{click:function(n){return t.addLandingHost()}}}),t._v(" "),e("el-button",{attrs:{icon:"el-icon-check",size:"mini",circle:""},on:{click:function(n){return t.updateLadingHosts()}}})],1)]),t._v(" "),e("el-form",{ref:"landingHostsForm",attrs:{model:t.landingHostsForm,"label-position":"left","label-width":"0px",size:"mini"}},t._l(t.landingHostsForm.hosts,(function(n,o){return e("el-form-item",{key:n.key,attrs:{prop:"hosts."+o+".value",rules:t.landingHostRules}},[e("el-input",{staticStyle:{width:"90%"},attrs:{readonly:2!==t.role},model:{value:n.value,callback:function(e){t.$set(n,"value",e)},expression:"host.value"}}),t._v(" "),e("el-button",{directives:[{name:"show",rawName:"v-show",value:t.landingHostsForm.hosts.length>1&&2===t.role,expression:"landingHostsForm.hosts.length > 1 && role === 2"}],staticStyle:{padding:"1px"},attrs:{icon:"el-icon-minus",size:"mini",type:"danger",circle:""},on:{click:function(n){return t.removeLandingHost(o)}}})],1)})),1)],1)],1)],1)],1)},s=[],i=(e("ac6a"),e("db72")),a=e("da71"),r=e("61f7"),l=e("2f62"),c={name:"Dashboard",data:function(){var t=function(t,n,e){if(""===n)e(new Error("请输入域名/IP地址"));else{if(!Object(r["b"])(n))return void e(new Error("这不是一个合法的域名/IP地址"));e()}};return{landingHostsForm:{hosts:[]},landingHostRules:{validator:t,trigger:"blur"}}},computed:Object(i["a"])({},Object(l["b"])(["role"])),created:function(){this.getConfig()},methods:{getConfig:function(){var t=this;this.landingHostsForm.hosts=[],Object(a["a"])().then((function(n){n.data.config.landingHosts.forEach((function(n,e){t.landingHostsForm.hosts.push({value:n,key:Date.now()+e})})),0===n.data.config.landingHosts.length&&t.addLandingHost()}))},addLandingHost:function(){this.landingHostsForm.hosts.push({value:"",key:Date.now()})},removeLandingHost:function(t){this.landingHostsForm.hosts.splice(t,1)},updateLadingHosts:function(){var t=this;this.$refs["landingHostsForm"].validate((function(n){if(!n)return!1;var e=[];t.landingHostsForm.hosts.forEach((function(t){e.push(t.value)})),Object(a["b"])({hosts:e}).then((function(n){t.$notify({title:"更新成功",message:"成功更新短链接域名",type:"success"})}))}))}}},u=c,d=(e("f8a7"),e("2877")),f=Object(d["a"])(u,o,s,!1,null,null,null);n["default"]=f.exports},acf4:function(t,n,e){},da71:function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return i}));var o=e("b775");function s(){return Object(o["a"])({url:"/v1/config",method:"get"})}function i(t){return Object(o["a"])({url:"/v1/config",method:"patch",data:t})}},f8a7:function(t,n,e){"use strict";var o=e("acf4"),s=e.n(o);s.a}}]);