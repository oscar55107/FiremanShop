(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2520f1b8"],{"057f":function(t,e,a){var r=a("fc6a"),n=a("241c").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return n(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?c(t):n(r(t))}},"159b":function(t,e,a){var r=a("da84"),n=a("fdbc"),i=a("17c2"),s=a("9112");for(var c in n){var o=r[c],l=o&&o.prototype;if(l&&l.forEach!==i)try{s(l,"forEach",i)}catch(f){l.forEach=i}}},"17c2":function(t,e,a){"use strict";var r=a("b727").forEach,n=a("a640"),i=a("ae40"),s=n("forEach"),c=i("forEach");t.exports=s&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,a){"use strict";var r=a("23e7"),n=a("17c2");r({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"47cd":function(t,e,a){},"4c64":function(t,e,a){"use strict";a("47cd")},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"746f":function(t,e,a){var r=a("428f"),n=a("5135"),i=a("e538"),s=a("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});n(e,t)||s(e,t,{value:i.f(t)})}},a4d3:function(t,e,a){"use strict";var r=a("23e7"),n=a("da84"),i=a("d066"),s=a("c430"),c=a("83ab"),o=a("4930"),l=a("fdbf"),f=a("d039"),u=a("5135"),d=a("e8b5"),b=a("861d"),v=a("825a"),p=a("7b0b"),m=a("fc6a"),h=a("c04e"),_=a("5c6c"),g=a("7c73"),C=a("df75"),y=a("241c"),O=a("057f"),w=a("7418"),S=a("06cf"),j=a("9bf2"),x=a("d1e7"),L=a("9112"),E=a("6eeb"),P=a("5692"),T=a("f772"),k=a("d012"),D=a("90e3"),M=a("b622"),N=a("e538"),F=a("746f"),$=a("d44e"),G=a("69f3"),A=a("b727").forEach,V=T("hidden"),q="Symbol",W="prototype",H=M("toPrimitive"),I=G.set,J=G.getterFor(q),R=Object[W],Y=n.Symbol,z=i("JSON","stringify"),B=S.f,K=j.f,Q=O.f,X=x.f,Z=P("symbols"),U=P("op-symbols"),tt=P("string-to-symbol-registry"),et=P("symbol-to-string-registry"),at=P("wks"),rt=n.QObject,nt=!rt||!rt[W]||!rt[W].findChild,it=c&&f((function(){return 7!=g(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,a){var r=B(R,e);r&&delete R[e],K(t,e,a),r&&t!==R&&K(R,e,r)}:K,st=function(t,e){var a=Z[t]=g(Y[W]);return I(a,{type:q,tag:t,description:e}),c||(a.description=e),a},ct=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},ot=function(t,e,a){t===R&&ot(U,e,a),v(t);var r=h(e,!0);return v(a),u(Z,r)?(a.enumerable?(u(t,V)&&t[V][r]&&(t[V][r]=!1),a=g(a,{enumerable:_(0,!1)})):(u(t,V)||K(t,V,_(1,{})),t[V][r]=!0),it(t,r,a)):K(t,r,a)},lt=function(t,e){v(t);var a=m(e),r=C(a).concat(vt(a));return A(r,(function(e){c&&!ut.call(a,e)||ot(t,e,a[e])})),t},ft=function(t,e){return void 0===e?g(t):lt(g(t),e)},ut=function(t){var e=h(t,!0),a=X.call(this,e);return!(this===R&&u(Z,e)&&!u(U,e))&&(!(a||!u(this,e)||!u(Z,e)||u(this,V)&&this[V][e])||a)},dt=function(t,e){var a=m(t),r=h(e,!0);if(a!==R||!u(Z,r)||u(U,r)){var n=B(a,r);return!n||!u(Z,r)||u(a,V)&&a[V][r]||(n.enumerable=!0),n}},bt=function(t){var e=Q(m(t)),a=[];return A(e,(function(t){u(Z,t)||u(k,t)||a.push(t)})),a},vt=function(t){var e=t===R,a=Q(e?U:m(t)),r=[];return A(a,(function(t){!u(Z,t)||e&&!u(R,t)||r.push(Z[t])})),r};if(o||(Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),a=function(t){this===R&&a.call(U,t),u(this,V)&&u(this[V],e)&&(this[V][e]=!1),it(this,e,_(1,t))};return c&&nt&&it(R,e,{configurable:!0,set:a}),st(e,t)},E(Y[W],"toString",(function(){return J(this).tag})),E(Y,"withoutSetter",(function(t){return st(D(t),t)})),x.f=ut,j.f=ot,S.f=dt,y.f=O.f=bt,w.f=vt,N.f=function(t){return st(M(t),t)},c&&(K(Y[W],"description",{configurable:!0,get:function(){return J(this).description}}),s||E(R,"propertyIsEnumerable",ut,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!o,sham:!o},{Symbol:Y}),A(C(at),(function(t){F(t)})),r({target:q,stat:!0,forced:!o},{for:function(t){var e=String(t);if(u(tt,e))return tt[e];var a=Y(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(u(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!o,sham:!c},{create:ft,defineProperty:ot,defineProperties:lt,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!o},{getOwnPropertyNames:bt,getOwnPropertySymbols:vt}),r({target:"Object",stat:!0,forced:f((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(p(t))}}),z){var pt=!o||f((function(){var t=Y();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));r({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,a){var r,n=[t],i=1;while(arguments.length>i)n.push(arguments[i++]);if(r=e,(b(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),n[1]=e,z.apply(null,n)}})}Y[W][H]||L(Y[W],H,Y[W].valueOf),$(Y,q),k[V]=!0},a640:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&r((function(){a.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,a){var r=a("23e7"),n=a("7b0b"),i=a("df75"),s=a("d039"),c=s((function(){i(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(t){return i(n(t))}})},d178:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"navbar-brand d-flex",attrs:{to:"/"}},[a("i",{staticClass:"fas fa-tree"}),a("h1",{staticClass:"h5 ml-3"},[t._v("Fireman")])]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto "},[a("li",{staticClass:"nav-item mr-4"},[a("router-link",{staticClass:"nav-link text-bold",attrs:{to:"/about"}},[t._v("品牌介紹")])],1),a("li",{staticClass:"nav-item mr-4"},[a("router-link",{staticClass:"nav-link text-bold",attrs:{to:"/customer_product"}},[t._v("露營用品")])],1),a("li",{staticClass:"nav-item mr-4"},[a("router-link",{staticClass:"nav-link text-bold",attrs:{to:"/login"}},[t._v("登入")])],1),a("li",{staticClass:"nav-item"},[a("div",{staticClass:"dropdown"},[a("router-link",{staticClass:"btn",attrs:{to:"/cart"}},[a("i",{staticClass:"trash fas fa-shopping-cart"},[t.len?a("div",{staticClass:"trash__text"},[t._v(t._s(t.len))]):t._e()])])],1)])])])],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],i={props:["len"]},s=i,c=(a("4c64"),a("2877")),o=Object(c["a"])(s,r,n,!1,null,"43f2efc3",null);e["a"]=o.exports},dbb4:function(t,e,a){var r=a("23e7"),n=a("83ab"),i=a("56ef"),s=a("fc6a"),c=a("06cf"),o=a("8418");r({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,a,r=s(t),n=c.f,l=i(r),f={},u=0;while(l.length>u)a=n(r,e=l[u++]),void 0!==a&&o(f,e,a);return f}})},e439:function(t,e,a){var r=a("23e7"),n=a("d039"),i=a("fc6a"),s=a("06cf").f,c=a("83ab"),o=n((function(){s(1)})),l=!c||o;r({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(t,e){return s(i(t),e)}})},e538:function(t,e,a){var r=a("b622");e.f=r},f820:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar",{attrs:{len:t.cart.carts.length}}),t._m(0),t._m(1),a("section",{staticClass:"section__bg mb-7 pb-7"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[t._m(2),a("div",{staticClass:" col-md-5 d-flex flex-column justify-content-center"},[a("div",{staticClass:"py-5 brand__content d-flex flex-column justify-content-center align-items-center",attrs:{"data-aos":"fade-up"}},[a("h3",{staticClass:"brand__title"},[t._v("經營理念")]),a("p",[t._v("Fireman 秉持著專業、品質的理念")]),a("P",[t._v("來服務每位即將踏上露營之旅的旅客")]),a("P",[t._v("猶如 Fireman 的 Fire")]),a("p",[t._v("永不熄滅")])],1)])])])]),t._m(3),t._m(4),a("Footer")],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"brand__banner"},[a("div",{staticClass:"brand__intro ml-3",attrs:{"data-aos":"fade-right"}},[a("p",{staticClass:"pl-4"},[t._v("大自然很美")]),a("p",{staticClass:"pl-5"},[t._v("只是你尚未踏上它的旅程")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section__bg py-5"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:" col-lg-5 col-md-6 mb-3 d-flex flex-column justify-content-center"},[a("div",{staticClass:"py-5 brand__content d-flex flex-column justify-content-center align-items-center",attrs:{"data-aos":"fade-right"}},[a("h3",{staticClass:"brand__title"},[t._v("品牌故事")]),a("p",[t._v("Fireman 是由 2 位熱愛露營的台灣人所創立")]),a("p",[t._v("除了提供美學兼機能性的各種露營用品")]),a("p",[t._v("更提供 相關露營知識 & 露營車租賃")]),a("p",[t._v("讓野營與車露能夠享受與安全")])])]),a("div",{staticClass:"col-lg-7 col-md-6 "},[a("div",{staticClass:"brand__about"})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-7"},[a("div",{staticClass:"brand__fire"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"pb-7"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"brand__car d-flex justify-content-center align-items-center"},[a("div",{staticClass:"brand__reservation p-5 d-flex flex-column justify-content-center",attrs:{"data-aos":"fade-up","data-aos-delay":"50"}},[a("h3",[t._v("露營車租賃")]),a("ul",[a("li",{staticClass:"my-4"},[t._v("承租人須年滿二十歲，取車時須備有效駕照且持有駕照，並以信用卡方式付費取車")]),a("li",{staticClass:"mb-4"},[t._v("承租人名下有罰單未繳者，恕本公司無法承租。")]),a("li",{staticClass:"mb-4"},[t._v("本公司提供ATM轉帳、現場現金付款、刷卡")])])])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section__bg py-7"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",[a("iframe",{staticClass:"brand__map",staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68346.46443609375!2d120.34817018918132!3d23.072430646859484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e64c4f73e4a0d%3A0xe1c7e4623bb89843!2z6Ie65Y2X5bGx5LiK6Iqx5ZyS5rC06YGT5Y2a54mp6aSoLea3qOawtOaxoOWNgA!5e0!3m2!1szh-TW!2stw!4v1607675256336!5m2!1szh-TW!2stw",width:"100%",height:"450",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}}),a("div",{staticClass:"brand__time d-flex flex-column align-items-center p-5"},[a("h4",[t._v("Fireman")]),a("h6",[a("span",[t._v("連絡電話 : 04-12345678")])]),a("h6",[a("span",[t._v("營業時間 : 9:00 - 20:00")])]),a("h6",[a("span",[t._v("地址 : 台南市大內區石林里131號")])])])])])])])])}],i=a("5530"),s=a("d178"),c=a("fd2d"),o=a("2f62"),l={data:function(){return{}},methods:Object(i["a"])({},Object(o["b"])("cartModule",["getCart"])),components:{Navbar:s["a"],Footer:c["a"]},computed:Object(i["a"])({},Object(o["c"])("cartModule",["cart"])),created:function(){this.getCart()}},f=l,u=a("2877"),d=Object(u["a"])(f,r,n,!1,null,null,null);e["default"]=d.exports},fd2d:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("footer",{staticClass:"footer"},[a("div",{staticClass:"container d-flex justify-content-around"},[a("div",{staticClass:"d-flex flex-column text-center pb-3"},[a("small",{staticClass:"pt-3"},[t._v("69 Camp Street, NY")]),a("small",[t._v("0985723611 | jerry55107@gmail.com")]),a("div",{staticClass:"footer__media"},[a("i",{staticClass:"fab fa-twitter-square mr-2"}),a("i",{staticClass:"fab fa-facebook-square mr-2"}),a("i",{staticClass:"fab fa-github"})]),a("small",{staticClass:"mt-2"},[t._v("Copyright 2020 | Web Designed by 皮傑先生")])])])])])}],i=a("2877"),s={},c=Object(i["a"])(s,r,n,!1,null,null,null);e["a"]=c.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-2520f1b8.4881a6b7.js.map