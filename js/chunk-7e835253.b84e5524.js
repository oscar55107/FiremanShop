(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e835253"],{1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex justify-content-center mt-5"},[a("nav",{attrs:{"aria-label":"Page navigation example just"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getPage(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getPage(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getPage(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])])},o=[],i={props:["pages"],methods:{getPage:function(t){this.$emit("postPage",t)}}},r=i,c=a("2877"),n=Object(c["a"])(r,s,o,!1,null,null,null);e["a"]=n.exports},e6dc:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal(!0)}}},[t._v("建立新產品")])]),a("div",{staticClass:"table-responsive-sm"},[a("table",{staticClass:"table mt-5"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",[t._v(" "+t._s(e.category))]),a("td",[t._v(" "+t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(e.origin_price))+" ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(e.price))+" ")]),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("button",{staticClass:"btn btn-sm btn-outline-primary",on:{click:function(a){return t.openModal(!1,e)}}},[t._v("編輯")])]),a("td",[a("button",{staticClass:"btn btn-sm btn-outline-danger",on:{click:function(a){return t.openDelModal(e)}}},[t._v("刪除")])])])})),0)])]),a("Pagination",{attrs:{pages:t.pagination},on:{postPage:t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"Please Enter Image Url"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("上傳圖片 "),t.status.fileUpLoading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{alt:"",src:t.tempProduct.imageUrl}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("產品名稱")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"Please Enter Title"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"Please Enter Category"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"Please Enter Unit"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"Please Enter Price"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"Please Enter Sale"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"Please Enter Product Description"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"Please Enter Content"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,s=e.target,o=s.checked?1:0;if(Array.isArray(a)){var i=null,r=t._i(a,i);s.checked?r<0&&t.$set(t.tempProduct,"is_enabled",a.concat([i])):r>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"is_enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),t._m(3),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancle")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.delProduct}},[t._v("Commit")])])])])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",{attrs:{width:"120"}},[t._v("分類")]),a("th",[t._v("名稱")]),a("th",{attrs:{width:"120"}},[t._v("原價")]),a("th",{attrs:{width:"120"}},[t._v("售價")]),a("th",{attrs:{width:"140"}},[t._v("啟用")]),a("th",{attrs:{width:"80"}},[t._v("編輯")]),a("th",{attrs:{width:"120"}},[t._v("刪除")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-primary text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("Delete Product")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-body"},[t._v(" Sure to "),a("strong",{staticClass:"text-danger"}),t._v("delete product ? ")])}],i=(a("99af"),a("1157")),r=a.n(i),c=a("1799"),n={data:function(){return{products:[],tempProduct:{},isNew:!1,status:{fileUpLoading:!1},pagination:{}}},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("camp","/admin/products?page=").concat(t),a=this;a.$store.dispatch("updateLoading",!0),this.$http.get(e).then((function(t){a.products=t.data.products,a.$store.dispatch("updateLoading",!1),a.pagination=t.data.pagination}))},openModal:function(t,e){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=Object.assign({},e),this.isNew=!1),r()("#productModal").modal("show")},openDelModal:function(t){this.tempProduct=Object.assign({},t),r()("#delProductModal").modal("show")},updateProduct:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("camp","/admin/product"),e="post",a=this;a.isNew||(t="".concat("https://vue-course-api.hexschool.io","/api/").concat("camp","/admin/product/").concat(a.tempProduct.id),e="put"),this.$http[e](t,{data:a.tempProduct}).then((function(t){t.data.success,r()("#productModal").modal("hide"),a.getProducts()}))},delProduct:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("camp","/admin/product/").concat(t.tempProduct.id);this.$http.delete(e).then((function(e){e.data.success,r()("#delProductModal").modal("hide"),t.getProducts()}))},uploadFile:function(){var t=this,e=this.$refs.files.files[0],a=this,s=new FormData;s.append("file-to-upload",e);var o="".concat("https://vue-course-api.hexschool.io","/api/").concat("camp","/admin/upload");this.$store.dispatch("updateLoading",!0),this.$http.post(o,s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.$store.dispatch("updateLoading",!1),e.data.success?a.$set(a.tempProduct,"imageUrl",e.data.imageUrl):t.$bus.$emit("message:push",e.data.message,"danger")}))}},created:function(){this.getProducts()},components:{Pagination:c["a"]}},l=n,d=a("2877"),u=Object(d["a"])(l,s,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-7e835253.b84e5524.js.map