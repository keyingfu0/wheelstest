(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{202:function(t,e,n){},203:function(t,e,n){},204:function(t,e,n){},205:function(t,e,n){},211:function(t,e,n){},220:function(t,e,n){"use strict";var i=n(202);n.n(i).a},221:function(t,e,n){"use strict";var i=n(203);n.n(i).a},222:function(t,e,n){"use strict";var i=n(204);n.n(i).a},223:function(t,e,n){"use strict";var i=n(205);n.n(i).a},228:function(t,e,n){"use strict";n(53),n(14),n(23);var i={name:"WheelsLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"WheelsSider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},s=(n(220),n(1)),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"88253ccc",null);e.a=a.exports},229:function(t,e,n){"use strict";n(223);var i=n(1),s=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"w-content"},[this._t("default")],2)}),[],!1,null,"31ed46de",null);e.a=s.exports},230:function(t,e,n){"use strict";n(222);var i=n(1),s=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"618625e8",null);e.a=s.exports},231:function(t,e,n){"use strict";n(221);var i=n(1),s=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"1cd8b514",null);e.a=s.exports},241:function(t,e,n){"use strict";var i=n(211);n.n(i).a},242:function(t,e,n){},253:function(t,e,n){"use strict";var i={name:"WheelsSider",data:function(){return{visible:!0}}},s=(n(241),n(1)),a=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"side"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"2faa1a65",null);e.a=a.exports},270:function(t,e,n){"use strict";var i=n(242);n.n(i).a},290:function(t,e,n){"use strict";n.r(e);var i=n(228),s=n(231),a=n(230),c=n(229),r=n(253),u={components:{"w-layout":i.a,"w-header":s.a,"w-footer":a.a,"w-content":c.a,"w-sider":r.a}},l=(n(270),n(1)),o=Object(l.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("w-layout",{staticStyle:{color:"white",overflow:"hidden"}},[e("w-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[this._v("\n            header\n        ")]),this._v(" "),e("w-layout",[e("w-sider",{staticStyle:{height:"100px",background:"#7cb8ff",width:"200px",color:"black"}},[this._v("\n                sider\n            ")]),this._v(" "),e("w-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[this._v("\n                content\n            ")])],1),this._v(" "),e("w-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[this._v("\n            footer\n        ")])],1)],1)}),[],!1,null,"5f5c3a99",null);e.default=o.exports}}]);