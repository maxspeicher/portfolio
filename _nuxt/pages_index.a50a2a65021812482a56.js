webpackJsonp([1],{"/TYz":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("0qDp"),a=i("Pmg7"),n=!1;var r=function(t){n||i("zgwX")},o=i("VU/8")(s.a,a.a,!1,r,"data-v-1b011d9c",null);o.options.__file="pages\\index.vue",e.default=o.exports},"0qDp":function(t,e,i){"use strict";var s=i("fzEs"),a=i("YXP+"),n=i("yqLL");e.a={asyncData:function(t){return s.a},components:{MyHeader:a.a,MyFooter:n.a},data:function(){return{isMoreDisplayed:!1}},layout:"default",methods:{displayMore:function(t){t.preventDefault(),this.isMoreDisplayed=!0}}}},"3VcA":function(t,e,i){"use strict";e.a={data:function(){return{mRotation:0,sRotation:0,mStep:90,sStep:-45}},methods:{rotateCharacters:function(){this.mRotation=(this.mRotation+this.mStep)%360,this.sRotation=(this.sRotation+this.sStep)%360,document.querySelector(".m").style.transform="rotateZ("+this.mRotation+"deg)",document.querySelector(".s").style.transform="rotateZ("+this.sRotation+"deg)"}}}},IkvF:function(t,e,i){t.exports=i.p+"img/360anywhere.bd8fc2b.jpg"},"M+54":function(t,e,i){var s=i("cwES");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("b27719a0",s,!1,{sourceMap:!1})},Pmg7:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"template-container"},[i("div",{staticClass:"template-container-inner pa3 pa5-ns tc"},[i("my-header"),i("div",{staticClass:"dib f3 f1-ns fw6 measure-wide tl"},[t._v("\n      I'm a traditionally trained computer scientist who does design & research.\n      "),i("div",{staticClass:"f4 f3-ns fw4 mt4"},[t._v("\n        I make natural user interfaces & augmented reality.\n        "),t.isMoreDisplayed?t._e():i("a",{attrs:{href:"#"},on:{click:t.displayMore}},[t._v("More ...")]),t.isMoreDisplayed?i("span",[t._v("\n          Currently, I'm working on new physical & digital methods for designers to create & test\n          better AR/VR experiences.\n          At the University of Michigan School of Information, we are reinventing interaction design itself.\n        ")]):t._e()])]),i("div",{staticClass:"mt5 mt6-ns"},[i("a",{attrs:{id:"work",name:"work"}}),i("div",{staticClass:"f3 f2-ns fw6 mb4 mb5-ns tl"},[t._v("\n        Selected Work.\n      ")]),i("div",{staticClass:"cf"},[i("div",{staticClass:"fl pa2 w-100 w-50-m w-third-l"},[i("div",{staticClass:"box box-360anywhere f2 fw6 w-100"},[i("div",{staticClass:"box-padding"}),i("nuxt-link",{staticClass:"box-inner color-ivory",attrs:{to:"/work/360anywhere"}},[i("div",{staticClass:"center w-100"},[t._v("\n                360­Any­where\n                "),i("div",{staticClass:"separator-thin"}),i("span",{staticClass:"f3 fw2"},[t._v("U of Michigan")])])])],1)]),i("div",{staticClass:"fl pa2 w-100 w-50-m w-third-l"},[i("div",{staticClass:"box box-gesturewiz f2 fw6 w-100"},[i("div",{staticClass:"box-padding"}),i("nuxt-link",{staticClass:"box-inner color-ivory",attrs:{to:"/work/gesturewiz"}},[i("div",{staticClass:"center w-100"},[t._v("\n                Gesture­Wiz\n                "),i("div",{staticClass:"separator-thin"}),i("span",{staticClass:"f3 fw2"},[t._v("U of Michigan")])])])],1)]),t._m(0)])]),t._m(1),i("my-footer")],1)])};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl pa2 w-100 w-50-m w-third-l"},[e("div",{staticClass:"box f2 fw6 w-100"},[e("div",{staticClass:"box-padding"}),e("a",{staticClass:"box-inner mid-gray",staticStyle:{"background-color":"#eee"},attrs:{href:"https://2008.maxspeicher.com"}},[e("div",{staticClass:"center w-100"},[this._v("\n                Read my blog\n              ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt5 mt6-ns"},[e("a",{attrs:{id:"work",name:"work"}}),e("div",{staticClass:"f3 f2-ns fw6 mb4 mb5-ns tl"},[this._v("\n        Some Publications.\n      ")]),e("div",{}),e("div",{staticClass:"tl"},[e("a",{attrs:{href:"http://dblp.org/pers/hd/s/Speicher:Maximilian"}},[this._v("And some more ...")])])])}]};e.a=a},Xnp6:function(t,e,i){var s=i("kxFB");(t.exports=i("FZ+f")(!1)).push([t.i,".box-360anywhere[data-v-1b011d9c]{background-image:url("+s(i("IkvF"))+")}.box-gesturewiz[data-v-1b011d9c]{background-image:url("+s(i("k549"))+")}",""])},"YXP+":function(t,e,i){"use strict";var s=i("3VcA"),a=i("h9CM"),n=!1;var r=function(t){n||i("M+54")},o=i("VU/8")(s.a,a.a,!1,r,"data-v-46cf1d15",null);o.options.__file="components\\Header.vue",e.a=o.exports},cwES:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".rotate[data-v-46cf1d15]{display:inline-block;-webkit-transform-origin:center;transform-origin:center;-webkit-transition:all .5s;transition:all .5s}",""])},fWyS:function(t,e,i){"use strict";var s=function(){var t=this.$createElement;this._self._c;return this._m(0)};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"tc mt6"},[this._v("\n    Made with "),e("i",{staticClass:"fas fa-coffee"}),this._v(" in Ann Arbor, MI.\n    Powered by "),e("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[this._v("Nuxt.js")]),this._v(" and "),e("a",{attrs:{href:"http://tachyons.io/",target:"_blank"}},[this._v("Tachyons")]),this._v(".\n")])}]};e.a=a},fzEs:function(t,e,i){"use strict";for(var s={projects:[{id:"vfl-wehbach",occupation:"Owner",place:"Old West Site Usability",name:"VfL-Wehbach.de",year:2018,timeFrame:"since April 2018",teamSize:1,roles:["Design","Consulting"],summary:"",process:[{id:"step1",title:"Requirements Elicitation",description:"\n                        Blah blah blah\n                    "},{id:"step2",title:"Step 2",description:"Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos."},{id:"step3",title:"Step 3",description:"Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos."}]},{id:"gesturewiz",occupation:"Research Fellow",place:"University of Michigan",year:2017,name:"GestureWiz",roles:["Project Lead","Design","Code"]},{id:"xd-ar",occupation:"Research Fellow",place:"University of Michigan",year:2017,name:"XD-AR",roles:["Project Lead","Design"]},{id:"floorplan",occupation:"VP of Data Analytics",place:"bitstars GmbH",year:2016,name:"Floor Plan Feature for HoloBuilder.com",roles:["Feature Ownership","Interaction Design"]},{id:"sio",occupation:"Industrial Ph.D. Student",place:"Unister GmbH",year:2016,name:"Search Interaction Optimization",roles:["Project Lead","Design","Code"]},{id:"sos",occupation:"Industrial Ph.D. Student",place:"Unister GmbH",year:2015,name:"SERP Optimization Suite",roles:["Project Lead","Design","Code"]},{id:"w3touch",occupation:"Master's Student",place:"ETH Zürich",year:2012,name:"W3Touch",roles:["Design","Code"]},{id:"crowdadapt",occupation:"Research Assistant",place:"ETH Zürich",year:2011,name:"CrowdAdapt",roles:["Design","Code"]}],byOccupation:{},byOccupationKeys:[],byYear:{},byYearKeys:[]},a=0;a<s.projects.length;++a){var n=s.projects[a],r=n.occupation+" @ "+n.place;s.byOccupation[r]||(s.byOccupation[r]=[],s.byOccupationKeys.push(r)),s.byOccupation[r].push({id:n.id,name:n.name}),s.byYear[n.year]||(s.byYear[n.year]=[],s.byYearKeys.push(n.year)),s.byYear[n.year].push({id:n.id,name:n.name})}e.a=s},h9CM:function(t,e,i){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"cf mb6"},[e("div",{staticClass:"abril f3 fl tl w-100 w-50-ns"},[e("div",{staticClass:"dib",on:{mouseenter:this.rotateCharacters}},[e("nuxt-link",{attrs:{to:"/"}},[e("span",{staticClass:"rotate m"},[this._v("M")]),this._v("aximilian "),e("span",{staticClass:"rotate s"},[this._v("S")]),this._v("peicher.")])],1)]),e("div",{staticClass:"menu fl fw4 mt2 mt0-ns tl tr-ns w-100 w-50-ns"},[e("nuxt-link",{staticClass:"mr4",attrs:{to:"/about"}},[this._v("About")]),e("nuxt-link",{attrs:{to:"/#work"}},[this._v("Work")])],1)])};s._withStripped=!0;var a={render:s,staticRenderFns:[]};e.a=a},k549:function(t,e,i){t.exports=i.p+"img/gesturewiz.37f0153.jpg"},kxFB:function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},yqLL:function(t,e,i){"use strict";var s=i("fWyS"),a=i("VU/8")(null,s.a,!1,null,null,null);a.options.__file="components\\Footer.vue",e.a=a.exports},zgwX:function(t,e,i){var s=i("Xnp6");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("4a00ac25",s,!1,{sourceMap:!1})}});