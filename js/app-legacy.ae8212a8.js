(function(e){function t(t){for(var a,s,i=t[0],l=t[1],c=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css"}}),a("div",{staticClass:"header"},[a("img",{attrs:{alt:"flatScan logo",src:n("f904"),id:"logo"}}),e._m(0),e.$installer.canInstall?a("section",[a("b-button",{on:{click:e.$installer.prompt}},[e._v("Add to homescreen")])],1):e._e()]),a("CardList")],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"hero"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v("Welcome to flatScan")])])])])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-list"},[n("transition",{attrs:{appear:"",name:"fade",mode:"out-in"}},[e.isLoading?n("div",{key:"loading",staticClass:"subtitle is-5"},[e._v("LOADING...")]):n("div",{key:"flat-list",staticClass:"content-wrapper"},[n("h1",{staticClass:"subtitle"},[e._v(e._s(e.availableFlats))]),n("div",{staticClass:"grid-container"},e._l(e.flats,(function(e){return n("Card",{key:e.id,attrs:{data:[e.data],mapUrl:"A map URL",imgUrl:e.imgUrl,url:e.url,dateUpdated:"asd"}})})),1)])])],1)},i=[],l=(n("5db7"),n("73d9"),n("d3b7"),n("2909")),c=(n("96cf"),n("1da1")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"},[n("figure",{staticClass:"image is-1by1"},[n("a",{attrs:{href:e.url}},[n("img",{attrs:{src:e.imgUrl}})])])]),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[n("b-table",{attrs:{data:e.data,columns:e.columns,narrowed:!1}}),n("a",{attrs:{href:e.mapUrl}},[e._v("View on Google maps")]),n("p",{staticClass:"subtitle is-6"},[e._v("Date updated: "+e._s(e.dateUpdated))])],1)])])},d=[],f={name:"Card",props:{title:String,data:Array,dateUpdated:String,imgUrl:String,mapUrl:String,url:String},data:function(){return{columns:[{field:"Hyra",label:"Rent"},{field:"Bostadsyta",label:"Size"},{field:"Antal rum",label:"Rooms"},{field:"Antal sovrum",label:"Bedrooms"},{field:"Antal badrum",label:"Bathrooms"},{field:"Våningsplan",label:"Floor"},{field:"Antal våningar",label:"Number of floors"}]}}},p=f,b=(n("bd0b"),n("2877")),g=Object(b["a"])(p,u,d,!1,null,"ffa2e2ee",null),v=g.exports,m=Object({VUE_APP_API_KEY:"Yg0SAzdhgV1jirIXPDy941lvR4pW1AXB8iccJGjd",VUE_APP_URL:"https://k8b2vri9ga.execute-api.eu-north-1.amazonaws.com/test/flats",NODE_ENV:"production",BASE_URL:""}),h={name:"CardList",components:{Card:v},data:function(){return{isLoading:!1,flats:[]}},computed:{availableFlats:function(){return this.flats.length>0?"Here are the current available flats.":"There are no new flats available..."}},created:function(){this.isLoading=!0,this.getData()},methods:{getData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={headers:{"x-api-key":m.VUE_APP_API_KEY}},t.next=3,fetch(m.VUE_APP_URL,n);case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,o=r.flatMap((function(e){return Object(l["a"])(e.flats)})),console.log(o),setTimeout((function(){e.isLoading=!1,e.flats=o||[]}),800);case 10:case"end":return t.stop()}}),t)})))()}}},_=h,y=(n("72fd"),Object(b["a"])(_,s,i,!1,null,"7846f93d",null)),w=y.exports,C={name:"App",components:{CardList:w}},A=C,O=(n("5c0b"),Object(b["a"])(A,r,o,!1,null,null,null)),j=O.exports,P=n("289d"),U=(n("5abe"),n("9483"));Object(U["a"])("".concat("","service-worker.js"),{registrationOptions:{scope:"./"},ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(e){console.log("Service worker has been registered with scope: ",e.scope)},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var k=n("5c47"),S=n.n(k);a["a"].use(S.a),a["a"].config.productionTip=!1,a["a"].use(P["a"]),new a["a"]({render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"72fd":function(e,t,n){"use strict";var a=n("ddfa"),r=n.n(a);r.a},"8f1d":function(e,t,n){},"9c0c":function(e,t,n){},bd0b:function(e,t,n){"use strict";var a=n("8f1d"),r=n.n(a);r.a},ddfa:function(e,t,n){},f904:function(e,t,n){e.exports=n.p+"img/bunny.f2e90107.png"}});
//# sourceMappingURL=app-legacy.ae8212a8.js.map