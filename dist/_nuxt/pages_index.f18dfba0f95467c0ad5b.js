webpackJsonp([5],{"/TYz":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("0qDp"),i=s("iA8U"),n=!1;var r=function(t){n||s("S5nK")},o=s("VU/8")(a.a,i.a,!1,r,null,null);o.options.__file="pages\\index.vue",e.default=o.exports},"0qDp":function(t,e,s){"use strict";var a=s("fzEs"),i=s("YXP+"),n=s("yqLL"),r=s("dJon");e.a={asyncData:function(t){return a.a},components:{MyHeader:i.a,MyFooter:n.a,Box:r.a},data:function(){return{isMoreDisplayed:!1}},layout:"default",methods:{displayMore:function(t){t.preventDefault(),this.isMoreDisplayed=!0}}}},"27cA":function(t,e,s){t.exports=s.p+"img/w3touch-thumb.a146b40.jpg"},"3VcA":function(t,e,s){"use strict";e.a={data:function(){return{mRotation:0,sRotation:0,mStep:90,sStep:-45}},methods:{rotateCharacters:function(){this.mRotation=(this.mRotation+this.mStep)%360,this.sRotation=(this.sRotation+this.sStep)%360,document.querySelector(".m").style.transform="rotateZ("+this.mRotation+"deg)",document.querySelector(".s").style.transform="rotateZ("+this.sRotation+"deg)"}}}},ImTp:function(t,e,s){var a=s("kxFB");(t.exports=s("FZ+f")(!1)).push([t.i,".box-360anywhere{background-image:url("+a(s("mqNq"))+")}.box-gesturewiz{background-image:url("+a(s("tYDd"))+")}.box-holobuilder{background-image:url("+a(s("ZB2x"))+")}.box-sio{background-image:url("+a(s("yZUI"))+")}.box-w3touch{background-image:url("+a(s("27cA"))+")}",""])},JUgP:function(t,e,s){"use strict";e.a={methods:{strikeMeDownWithAllYourHatred:function(t){t.preventDefault(),window.toggleNerdMode()}}}},"M+54":function(t,e,s){var a=s("cwES");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("b27719a0",a,!1,{sourceMap:!1})},Q8pV:function(t,e,s){var a=s("yIBr");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("7c16afe4",a,!1,{sourceMap:!1})},S5nK:function(t,e,s){var a=s("ImTp");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("707df2a8",a,!1,{sourceMap:!1})},"YXP+":function(t,e,s){"use strict";var a=s("3VcA"),i=s("h9CM"),n=!1;var r=function(t){n||s("M+54")},o=s("VU/8")(a.a,i.a,!1,r,"data-v-46cf1d15",null);o.options.__file="components\\Header.vue",e.a=o.exports},ZB2x:function(t,e,s){t.exports=s.p+"img/holobuilder-thumb.44d4a1c.jpg"},cwES:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".rotate[data-v-46cf1d15]{display:inline-block;-webkit-transform-origin:center;transform-origin:center;-webkit-transition:all .5s;transition:all .5s}",""])},dJon:function(t,e,s){"use strict";var a=s("zSu8"),i=s("f/c0"),n=!1;var r=function(t){n||s("Q8pV")},o=s("VU/8")(a.a,i.a,!1,r,"data-v-5359d273",null);o.options.__file="components\\Box.vue",e.a=o.exports},"f/c0":function(t,e,s){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl pa2 w-100 w-50-m w-third-l"},[e("div",{class:"box f2 f3-m fw6 w-100 box-"+this.id},[e("div",{staticClass:"box-padding"}),e("nuxt-link",{staticClass:"box-inner color-ivory",attrs:{to:"/work/"+this.id}},[e("div",{staticClass:"center w-100"},[e("span",{domProps:{innerHTML:this._s(this.title)}}),e("div",{staticClass:"separator-thin"}),e("span",{staticClass:"f3 f4-m fw2",domProps:{innerHTML:this._s(this.workplace)}})])])],1)])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},fWyS:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"tc mt6"},[t._v("\n    Made with "),s("i",{staticClass:"fas fa-coffee"}),t._v(" in Ann Arbor, MI.\n    Powered by "),s("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[t._v("Nuxt.js")]),t._v(" and "),s("a",{attrs:{href:"http://tachyons.io/",target:"_blank"}},[t._v("Tachyons")]),t._v(".\n    "),t._m(0),s("div",{staticClass:"social-media mv4"},[t._m(1),t._m(2),t._m(3),s("a",{staticClass:"dim",attrs:{href:"#"},on:{click:t.strikeMeDownWithAllYourHatred}},[s("i",{staticClass:"fab fa-sith fa-2x mh2"})]),t._m(4)])])};a._withStripped=!0;var i={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt4"},[e("a",{staticClass:"iubenda-white iubenda-embed ",attrs:{href:"https://www.iubenda.com/privacy-policy/16529602",title:"Privacy Policy"}},[this._v("Privacy Policy")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"dim",attrs:{href:"https://www.researchgate.net/profile/Maximilian_Speicher"}},[e("i",{staticClass:"fab fa-researchgate fa-2x mh2"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"dim",attrs:{href:"https://www.linkedin.com/in/maximilianspeicher/"}},[e("i",{staticClass:"fab fa-linkedin-in fa-2x mh2"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"dim",attrs:{href:"https://github.com/maxspeicher/"}},[e("i",{staticClass:"fab fa-github fa-2x mh2"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"dim",attrs:{href:"https://medium.com/@maxspeicher"}},[e("i",{staticClass:"fab fa-medium-m fa-2x mh2"})])}]};e.a=i},fzEs:function(t,e,s){"use strict";for(var a={projects:[{id:"vfl-wehbach",occupation:"Owner",place:"Old West Site Usability",name:"VfL-Wehbach.de",year:2018,timeFrame:"since April 2018",teamSize:1,roles:["Design","Consulting"],summary:"",process:[{id:"step1",title:"Requirements Elicitation",description:"\n                        Blah blah blah\n                    "},{id:"step2",title:"Step 2",description:"Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos."},{id:"step3",title:"Step 3",description:"Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos."}]},{id:"gesturewiz",occupation:"Research Fellow",place:"University of Michigan",year:2017,name:"GestureWiz",roles:["Project Lead","Design","Code"]},{id:"xd-ar",occupation:"Research Fellow",place:"University of Michigan",year:2017,name:"XD-AR",roles:["Project Lead","Design"]},{id:"floorplan",occupation:"VP of Data Analytics",place:"bitstars GmbH",year:2016,name:"Floor Plan Feature for HoloBuilder.com",roles:["Feature Ownership","Interaction Design"]},{id:"sio",occupation:"Industrial Ph.D. Student",place:"Unister GmbH",year:2016,name:"Search Interaction Optimization",roles:["Project Lead","Design","Code"]},{id:"sos",occupation:"Industrial Ph.D. Student",place:"Unister GmbH",year:2015,name:"SERP Optimization Suite",roles:["Project Lead","Design","Code"]},{id:"w3touch",occupation:"Master's Student",place:"ETH Zürich",year:2012,name:"W3Touch",roles:["Design","Code"]},{id:"crowdadapt",occupation:"Research Assistant",place:"ETH Zürich",year:2011,name:"CrowdAdapt",roles:["Design","Code"]}],byOccupation:{},byOccupationKeys:[],byYear:{},byYearKeys:[]},i=0;i<a.projects.length;++i){var n=a.projects[i],r=n.occupation+" @ "+n.place;a.byOccupation[r]||(a.byOccupation[r]=[],a.byOccupationKeys.push(r)),a.byOccupation[r].push({id:n.id,name:n.name}),a.byYear[n.year]||(a.byYear[n.year]=[],a.byYearKeys.push(n.year)),a.byYear[n.year].push({id:n.id,name:n.name})}e.a=a},h9CM:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"cf mb6"},[s("div",{staticClass:"abril f3 fl tl w-100 w-50-ns"},[s("div",{staticClass:"dib",on:{mouseenter:t.rotateCharacters}},[s("nuxt-link",{attrs:{to:"/"}},[s("span",{staticClass:"rotate m"},[t._v("M")]),t._v("aximilian "),s("span",{staticClass:"rotate s"},[t._v("S")]),t._v("peicher.")])],1)]),s("div",{staticClass:"menu fl fw4 mt2 mt0-ns tl tr-ns w-100 w-50-ns"},[s("nuxt-link",{staticClass:"mr4",attrs:{to:"/about"}},[t._v("About")]),s("a",{staticClass:"mr4",attrs:{href:"/#work"}},[t._v("Work")]),s("a",{attrs:{href:"/#publications"}},[t._v("Publications")])],1)])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},iA8U:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"template-container"},[s("div",{staticClass:"template-container-inner pa3 pa5-ns tc"},[s("my-header"),s("div",{staticClass:"dib f3 f1-ns fw6 lh-title measure-wide tl"},[t._v("\n      I'm a researcher, designer, & computer scientist\n      "),s("div",{staticClass:"f4 f3-ns fw4 mt4"},[t._v("\n        who does augmented reality, UX design, & usability.\n        "),t.isMoreDisplayed?t._e():s("a",{attrs:{href:"#"},on:{click:t.displayMore}},[t._v("More ...")]),t.isMoreDisplayed?s("span",[t._v("\n          Currently, I'm working on new physical & digital methods for designers to create & test\n          better AR/VR experiences.\n          At the University of Michigan School of Information, we are reinventing UX design itself.\n        ")]):t._e()])]),s("div",{staticClass:"mt5 mt6-ns"},[s("a",{attrs:{id:"work",name:"work"}}),s("div",{staticClass:"f3 f2-ns fw6 mb4 mb5-ns tl"},[t._v("\n        Selected Work.\n      ")]),s("div",{staticClass:"cf"},[s("box",{attrs:{id:"360anywhere",title:"360&shy;Any&shy;where",workplace:"U of Michigan"}}),s("box",{attrs:{id:"gesturewiz",title:"Gesture&shy;Wiz",workplace:"U of Michigan"}}),s("box",{attrs:{id:"holobuilder",title:"Holo&shy;Builder",workplace:"bitstars GmbH"}}),s("box",{attrs:{id:"sio",title:"Search<br />Inter&shy;action<br />Optimi&shy;zation",workplace:"Unister GmbH"}}),s("box",{attrs:{id:"w3touch",title:"W3Touch",workplace:"ETH Zurich"}}),t._m(0)],1)]),t._m(1),s("my-footer")],1)])};a._withStripped=!0;var i={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl pa2 w-100 w-50-m w-third-l"},[e("div",{staticClass:"box f2 f3-m fw6 w-100"},[e("div",{staticClass:"box-padding"}),e("a",{staticClass:"box-inner mid-gray",staticStyle:{"background-color":"#eee"},attrs:{href:"https://2008.maxspeicher.com"}},[e("div",{staticClass:"center w-100"},[this._v("\n                Read my blog\n              ")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt5 mt6-ns"},[s("a",{attrs:{id:"publications",name:"publications"}}),s("div",{staticClass:"f3 f2-ns fw6 mb4 mb5-ns tl"},[t._v("\n        Some Publications.\n      ")]),s("div",{staticClass:"tl mb4 mb5-ns"},[s("div",{staticClass:"mb4"},[s("div",{staticClass:"relative f4 fw4 lh-title mb3"},[s("span",{staticClass:"dn db-ns fa-layers fa-fw",staticStyle:{position:"absolute",transform:"translateX(-105%) translateY(15%)"}},[s("i",{staticClass:"fas fa-certificate"}),s("span",{staticClass:"fa-layers-text fa-inverse",attrs:{"data-fa-transform":"shrink-11.5 rotate--30"}},[t._v("NEW")])]),s("a",{staticClass:"dim",attrs:{href:"http://eics.acm.org/2018/"}},[t._v("360Anywhere: Mobile Ad-hoc Collaboration in Any Environment using 360 Video and Augmented Reality")])]),s("div",{staticClass:"lh-copy"},[s("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", J. Cao, A. Yu, H. Zhang, M. Nebeling\n            • "),s("span",{staticClass:"fw4"},[t._v("EICS '18")]),t._v(" • #AR\n          ")])]),s("div",{staticClass:"mb4"},[s("div",{staticClass:"f4 fw4 lh-title mb3"},[s("span",{staticClass:"dn db-ns fa-layers fa-fw",staticStyle:{position:"absolute",transform:"translateX(-105%) translateY(15%)"}},[s("i",{staticClass:"fas fa-certificate"}),s("span",{staticClass:"fa-layers-text fa-inverse",attrs:{"data-fa-transform":"shrink-11.5 rotate--30"}},[t._v("NEW")])]),s("a",{staticClass:"dim",attrs:{href:"http://eics.acm.org/2018/"}},[t._v("XD-AR: Challenges and Opportunities in Cross-Device Augmented Reality Application Development")])]),s("div",{staticClass:"lh-copy"},[s("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", B.D. Hall, A. Yu, B. Zhang, H. Zhang, J. Nebeling, M. Nebeling\n            • "),s("span",{staticClass:"fw4"},[t._v("EICS '18")]),t._v(" • #AR\n          ")])]),s("div",{staticClass:"mb4"},[s("div",{staticClass:"f4 fw4 lh-title mb3"},[s("a",{staticClass:"dim",attrs:{href:"https://www.researchgate.net/publication/324665021_GestureWiz_A_Human-Powered_Gesture_Design_Environment_for_User_Interface_Prototypes"}},[t._v("GestureWiz: A Human-Powered Gesture Design Environment for User Interface Prototypes")])]),s("div",{staticClass:"lh-copy"},[s("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", M. Nebeling\n            • "),s("span",{staticClass:"fw4"},[t._v("CHI '18")]),t._v(" • #UX design\n          ")])]),s("div",{staticClass:"mb4"},[s("div",{staticClass:"f4 fw4 lh-title mb3"},[s("a",{staticClass:"dim",attrs:{href:"https://www.researchgate.net/publication/282441131_SOS_Does_Your_Search_Engine_Results_Page_SERP_Need_Help"}},[t._v("S.O.S.: Does Your Search Engine Results Page (SERP) Need Help?")])]),s("div",{staticClass:"lh-copy"},[s("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", A. Both, M. Gaedke\n            • "),s("span",{staticClass:"fw4"},[t._v("CHI '15")]),t._v(" "),s("i",{staticClass:"fas fa-trophy"}),t._v(" • #UX design\n          ")])]),s("div",{staticClass:"mb4"},[s("div",{staticClass:"f4 fw4 lh-title mb3"},[s("a",{staticClass:"dim",attrs:{href:"https://www.researchgate.net/publication/249009504_W3touch_Metrics-based_Web_Page_Adaptation_for_Touch"}},[t._v("W3Touch: Metrics-based Web Page Adaptation for Touch")])]),s("div",{staticClass:"lh-copy"},[t._v("\n            M. Nebeling, "),s("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", M.C. Norrie\n            • "),s("span",{staticClass:"fw4"},[t._v("CHI '13")]),t._v(" • #usability\n          ")])]),s("div",{staticClass:"mb4"},[s("div",{staticClass:"f4 fw4 lh-title mb3"},[s("a",{staticClass:"dim",attrs:{href:"https://www.researchgate.net/publication/301430241_TellMyRelevance_Predicting_the_Relevance_of_Web_Search_Results_from_Cursor_Interactions"}},[t._v("TellMyRelevance! Predicting the Relevance of Web Search Results from Cursor Interactions")])]),s("div",{staticClass:"lh-copy"},[s("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", A. Both, M. Gaedke\n            • "),s("span",{staticClass:"fw4"},[t._v("CIKM '13")]),t._v(" • #usability\n          ")])]),s("div",{staticClass:"mb4"},[s("div",{staticClass:"f4 fw4 lh-title mb3"},[s("a",{staticClass:"dim",attrs:{href:"https://www.researchgate.net/publication/271269916_Ensuring_Web_Interface_Quality_through_Usability-Based_Split_Testing"}},[t._v("Ensuring Web Interface Quality through Usability-Based Split Testing")])]),s("div",{staticClass:"lh-copy"},[s("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", A. Both, M. Gaedke\n            • "),s("span",{staticClass:"fw4"},[t._v("ICWE '14")]),t._v(" • #usability\n          ")])])]),s("div",{staticClass:"tl"},[s("a",{attrs:{href:"http://dblp.org/pers/hd/s/Speicher:Maximilian"}},[t._v("And some more ...")])])])}]};e.a=i},kxFB:function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},mqNq:function(t,e,s){t.exports=s.p+"img/360anywhere-thumb.9dd1e08.jpg"},tYDd:function(t,e,s){t.exports=s.p+"img/gesturewiz-thumb.e6c4531.jpg"},yIBr:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"",""])},yZUI:function(t,e,s){t.exports=s.p+"img/sio-thumb.24a6124.jpg"},yqLL:function(t,e,s){"use strict";var a=s("JUgP"),i=s("fWyS"),n=s("VU/8")(a.a,i.a,!1,null,null,null);n.options.__file="components\\Footer.vue",e.a=n.exports},zSu8:function(t,e,s){"use strict";e.a={props:["id","title","workplace"]}}});