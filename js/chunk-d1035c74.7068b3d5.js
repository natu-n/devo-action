(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1035c74"],{"0fd9":function(t,i,e){"use strict";e("4b85");var s=e("5ee5"),n=e.n(s),a=e("d9f7"),r=e("80d2");const o=["sm","md","lg","xl"],h=["start","end","center"];function l(t,i){return o.reduce((e,s)=>{return e[t+Object(r["D"])(s)]=i(),e},{})}const c=t=>[...h,"baseline","stretch"].includes(t),u=l("align",()=>({type:String,default:null,validator:c})),d=t=>[...h,"space-between","space-around"].includes(t),p=l("justify",()=>({type:String,default:null,validator:d})),v=t=>[...h,"space-between","space-around","stretch"].includes(t),g=l("alignContent",()=>({type:String,default:null,validator:v})),m={align:Object.keys(u),justify:Object.keys(p),alignContent:Object.keys(g)},f={align:"align",justify:"justify",alignContent:"align-content"};function b(t,i,e){let s=f[t];if(null!=e){if(i){const e=i.replace(t,"");s+=`-${e}`}return s+=`-${e}`,s.toLowerCase()}}const w=new Map;i["a"]=n.a.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...p,alignContent:{type:String,default:null,validator:v},...g},render(t,{props:i,data:e,children:s}){let n="";for(const a in i)n+=String(i[a]);let r=w.get(n);if(!r){let t;for(t in r=[],m)m[t].forEach(e=>{const s=i[e],n=b(t,e,s);n&&r.push(n)});r.push({"no-gutters":i.noGutters,"row--dense":i.dense,[`align-${i.align}`]:i.align,[`justify-${i.justify}`]:i.justify,[`align-content-${i.alignContent}`]:i.alignContent}),w.set(n,r)}return t(i.tag,Object(a["a"])(e,{staticClass:"row",class:r}),s)}})},7958:function(t,i,e){},af4f:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-dialog",{staticClass:"justify-start",attrs:{height:"300",width:"300"},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[e("v-navigation-drawer",{attrs:{permanent:"",width:"100%"}},[e("v-row",{staticClass:"fill-height"},[e("v-navigation-drawer",{attrs:{dark:"","mini-variant":"","mini-variant-width":"46",permanent:""}},[e("v-list",{attrs:{nav:""}},t._l(t.items,(function(i){return e("v-list-item",{key:i.title,attrs:{to:i.link}},[e("v-layout",{attrs:{"justify-space-between":""}},[e("v-list-item-action",[e("v-icon",[t._v(t._s(i.icon))])],1)],1),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(i.title))])],1)],1)})),1)],1),e("v-list",{staticClass:"grow",attrs:{nav:""}},t._l(t.items,(function(i){return e("v-list-item",{key:i.title,attrs:{to:i.link}},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(i.title))])],1)],1)})),1)],1)],1)],1)},n=[],a={data(){return{items:[{title:"Home",icon:"home",link:"/"},{title:"About",icon:"event_note",link:"/about"},{title:"contact",icon:"question_answer",link:"/contact"},{title:"Daily blood pressure",icon:"table_chart",link:"/table"},{title:"Blood pressure graph",icon:"multiline_chart",link:"/line"}],drawer2:!0}}},r=a,o=e("2877"),h=e("6544"),l=e.n(h),c=e("169a"),u=e("132d"),d=e("a722"),p=e("8860"),v=e("da13"),g=e("1800"),m=e("5d23"),f=(e("7958"),e("adda")),b=e("3a66"),w=e("a9ad"),y=e("b848"),A=e("e707"),M=e("d10f"),$=e("7560"),C=e("a293"),O=e("dc22"),k=e("c3f0"),B=e("80d2"),j=e("58df");const V=Object(j["a"])(Object(b["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),w["a"],y["a"],A["a"],M["a"],$["a"]);var _=V.extend({name:"v-navigation-drawer",provide(){return{isInNav:"nav"===this.tag}},directives:{ClickOutside:C["a"],Resize:O["a"],Touch:k["a"]},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:80},mobileBreakPoint:{type:[Number,String],default:1264},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:{required:!1}},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom?100:this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&this.$vuetify.breakpoint.width<parseInt(this.mobileBreakPoint,10)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX",i={height:Object(B["f"])(this.height),top:this.isBottom?"auto":Object(B["f"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${Object(B["f"])(this.computedMaxHeight)})`:void 0,transform:`${t}(${Object(B["f"])(this.computedTransform,"%")})`,width:Object(B["f"])(this.computedWidth)};return i}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,i){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=i&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const i=t.getBoundingClientRect();this.touchArea={left:i.left+50,right:i.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},i=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(f["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[i])},genDirectives(){const t=[{name:"click-outside",value:()=>this.isActive=!1,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={transitionend:t=>{if(t.target!==t.currentTarget)return;this.$emit("transitionend",t);const i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),this.expandOnHover&&(t.mouseenter=()=>this.isMouseover=!0,t.mouseleave=()=>this.isMouseover=!1),t},genPosition(t){const i=Object(B["r"])(this,t);return i?this.$createElement("div",{staticClass:`v-navigation-drawer__${t}`},i):i},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const i=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(B["r"])(this,"img"))&&i.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),i)}}),x=e("0fd9"),T=Object(o["a"])(r,s,n,!1,null,null,null);i["default"]=T.exports;l()(T,{VDialog:c["a"],VIcon:u["a"],VLayout:d["a"],VList:p["a"],VListItem:v["a"],VListItemAction:g["a"],VListItemContent:m["a"],VListItemTitle:m["b"],VNavigationDrawer:_,VRow:x["a"]})}}]);
//# sourceMappingURL=chunk-d1035c74.7068b3d5.js.map