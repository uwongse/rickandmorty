(function(){"use strict";var a={1842:function(a,e,t){var n=t(9242),r=t(3396);function o(a,e){const t=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(t)}var i=t(89);const s={},c=(0,i.Z)(s,[["render",o]]);var l=c,d=t(2483);function u(a,e,t,n,o,i){const s=(0,r.up)("all-Component"),c=(0,r.up)("footer-component");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(s),(0,r.Wm)(c)])}var p=t(6021),m=t(1204),v={name:"HomeView",components:{AllComponent:p.Z,FooterComponent:m.Z},data:function(){return{}}};const g=(0,i.Z)(v,[["render",u]]);var f=g;const h=[{path:"/",name:"home",component:f},{path:"/unknown",name:"unknown",component:()=>t.e(431).then(t.bind(t,431))},{path:"/female",name:"female",component:()=>t.e(659).then(t.bind(t,2659))},{path:"/male",name:"male",component:()=>t.e(351).then(t.bind(t,6351))},{path:"/genderless",name:"genderless",component:()=>t.e(758).then(t.bind(t,2758))}],_=(0,d.p7)({history:(0,d.PO)("/rickandmorty/"),routes:h});var b=_,y=t(65),w=(0,y.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});t(8937),t(7024);(0,n.ri)(l).use(w).use(b).mount("#app")},6021:function(a,e,t){t.d(e,{Z:function(){return Da}});var n=t(3396),r=t(9242),o=t(7139),i=t.p+"img/rm.ef941fb0.png",s=t.p+"img/bg.40d9afff.jpg",c=t.p+"img/close.20a130e0.svg";const l=a=>((0,n.dD)("data-v-4a17a260"),a=a(),(0,n.Cn)(),a),d={"data-bs-toggle":"modal"},u={id:"jumbo",class:"p-5 text-center bg-image rounded-3"},p={class:"mask"},m={class:"d-flex justify-content-center align-items-center h-100"},v={class:"text-white"},g=l((()=>(0,n._)("div",{id:"rickmorty"},[(0,n._)("img",{src:i,class:"img-fluid",alt:"rickymorty"})],-1))),f={class:"input-group rounded"},h={class:"container"},_={class:"row"},b={class:"col"},y={class:"mt-5"},w={class:"botones"},k={class:"modal fade bd-example-modal-lg",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},C={class:"modal-dialog modal-lg"},x={class:"card",id:"cardModal"},E=l((()=>(0,n._)("div",{class:"img1"},[(0,n._)("img",{id:"imgModal",src:s,alt:"",class:"img-fluid w-100"}),(0,n._)("img",{id:"botonModal",src:c})],-1))),D={class:"img2"},O=["src"],j={class:"datosArriba"},N={class:"modal-body"},A=l((()=>(0,n._)("b",{class:"titulo"},"Informacion",-1))),M={key:0},z={class:"episodecomponent"},S=l((()=>(0,n._)("b",{class:"titulo"},"Episodios",-1))),F={class:"episodes"},P={id:"cardpeli",class:"card px-1",style:{width:"18rem",height:"8rem"}},T={class:"card-text"},Z={class:"card-text"},W={class:"card-text"};function U(a,e,t,i,s,c){const l=(0,n.up)("nav-component"),U=(0,n.up)("card-componet");return(0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("div",u,[(0,n._)("div",p,[(0,n._)("div",m,[(0,n._)("div",v,[g,(0,n._)("div",f,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>s.search=a),class:"form-control rounded",placeholder:"Buscar personaje...",onKeyup:e[1]||(e[1]=(...a)=>c.searchData&&c.searchData(...a))},null,544),[[r.nr,s.search]])])])])])]),(0,n.Wm)(l),(0,n._)("div",h,[(0,n._)("div",_,[(0,n._)("div",b,[(0,n._)("div",null,[(0,n._)("nav",y,[(0,n._)("div",w,[(0,n._)("a",{type:"button",class:"btn btn-dark",onClick:e[2]||(e[2]=a=>c.changePage(s.page-1))},"Anterior"),(0,n._)("a",{type:"button",class:"btn btn-dark",onClick:e[3]||(e[3]=a=>c.changePage(s.page+1))},"Siguiente")]),(0,n._)("p",null,"Página: "+(0,o.zw)(s.page),1)]),(0,n.Wm)(U,{onShowModal:c.showModal,datacard:s.datacard},null,8,["onShowModal","datacard"]),(0,n._)("div",null,[(0,n._)("div",k,[(0,n._)("div",C,[(0,n._)("div",x,[E,(0,n._)("div",D,[(0,n._)("img",{src:`${s.currentCharacter.image}`,alt:"",class:"img-fluid"},null,8,O)]),(0,n._)("div",j,[(0,n._)("p",null,(0,o.zw)(s.currentCharacter.status),1),(0,n._)("p",null,(0,o.zw)(s.currentCharacter.name),1),(0,n._)("p",null,(0,o.zw)(s.currentCharacter.species),1)]),(0,n._)("div",N,[(0,n._)("div",null,[A,(0,n._)("div",null,[(0,n._)("p",null,"Gender: "+(0,o.zw)(s.currentCharacter.gender),1)]),(0,n._)("div",null,[(0,n._)("p",null,"Origin "+(0,o.zw)(s.originName),1)]),s.currentCharacter.type?((0,n.wg)(),(0,n.iD)("div",M,[(0,n._)("p",null,"Type: "+(0,o.zw)(s.currentCharacter.type),1)])):(0,n.kq)("",!0)]),(0,n._)("div",z,[S,(0,n._)("div",F,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.allEpisode,(a=>((0,n.wg)(),(0,n.iD)("div",{key:a.id},[(0,n._)("div",P,[(0,n._)("p",T,(0,o.zw)(a.name),1),(0,n._)("strong",Z,(0,o.zw)(a.episode),1),(0,n._)("p",W,(0,o.zw)(a.air_date),1)])])))),128))])])])])])])])])])])])])}var B=t(6265),L=t.n(B);const I=a=>((0,n.dD)("data-v-16bebd74"),a=a(),(0,n.Cn)(),a),$={class:"cards my-5"},K=["onClick"],H=["src","alt"],q={class:"card-body"},G={class:"card-text"},V={class:"card-title"},Y=I((()=>(0,n._)("div",null,[(0,n._)("p",{class:"card-text"},"Last Known location:")],-1))),J={class:"card-text"},Q=I((()=>(0,n._)("div",null,[(0,n._)("p",{class:"card-text"},"First seen in:")],-1))),R={class:"card-text"};function X(a,e,t,r,i,s){return(0,n.wg)(),(0,n.iD)("div",$,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.datacard,(a=>((0,n.wg)(),(0,n.iD)("div",{class:"all",key:a.id},[(0,n._)("div",{class:"card",onClick:e=>s.showMore(a.id),"data-bs-toggle":"modal","data-bs-target":"#staticBackdrop"},[(0,n._)("img",{src:`${a.image}`,class:"img-fluid",alt:`${a.name}`,style:{height:"15rem"}},null,8,H),(0,n._)("div",q,[(0,n._)("div",null,[(0,n._)("p",G,(0,o.zw)(a.status),1)]),(0,n._)("div",null,[(0,n._)("h6",V,(0,o.zw)(a.name),1)]),Y,(0,n._)("div",null,[(0,n._)("b",J,(0,o.zw)(a.location.name),1)]),(0,n._)("div",null,[Q,(0,n._)("b",R,(0,o.zw)(a.location.name),1)])])],8,K)])))),128))])}var aa={name:"CardComponent",props:{datacard:{type:Array}},methods:{showMore(a){this.$emit("showModal",a)}}},ea=t(89);const ta=(0,ea.Z)(aa,[["render",X],["__scopeId","data-v-16bebd74"]]);var na=ta;const ra=a=>((0,n.dD)("data-v-369e8d6e"),a=a(),(0,n.Cn)(),a),oa={class:"navbar navbar-expand-lg navbar-light bg-light"},ia={class:"container-fluid"},sa=ra((()=>(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1))),ca={class:"collapse navbar-collapse",id:"navbarNav"},la={class:"navbar-nav",id:"navbarNav"},da={class:"nav-item"},ua=(0,n.Uk)("All"),pa={class:"nav-item"},ma=(0,n.Uk)("Unknown"),va={class:"nav-item"},ga=(0,n.Uk)("Female"),fa={class:"nav-item"},ha=(0,n.Uk)("Male"),_a={class:"nav-item"},ba=(0,n.Uk)("Genderless");function ya(a,e,t,r,o,i){const s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",oa,[(0,n._)("div",ia,[sa,(0,n._)("div",ca,[(0,n._)("ul",la,[(0,n._)("li",da,[(0,n.Wm)(s,{class:"nav-link active","aria-current":"page",to:"/"},{default:(0,n.w5)((()=>[ua])),_:1})]),(0,n._)("li",pa,[(0,n.Wm)(s,{class:"nav-link active","aria-current":"page",to:"/unknown"},{default:(0,n.w5)((()=>[ma])),_:1})]),(0,n._)("li",va,[(0,n.Wm)(s,{class:"nav-link active","aria-current":"page",to:"/female"},{default:(0,n.w5)((()=>[ga])),_:1})]),(0,n._)("li",fa,[(0,n.Wm)(s,{class:"nav-link active","aria-current":"page",to:"/male"},{default:(0,n.w5)((()=>[ha])),_:1})]),(0,n._)("li",_a,[(0,n.Wm)(s,{class:"nav-link active","aria-current":"page",to:"/genderless"},{default:(0,n.w5)((()=>[ba])),_:1})])])])])])}var wa={name:"NavComponent"};const ka=(0,ea.Z)(wa,[["render",ya],["__scopeId","data-v-369e8d6e"]]);var Ca=ka,xa={name:"AllComponent",props:{gender:String},components:{CardComponet:na,NavComponent:Ca},created(){this.dataFilter()},methods:{dataFilter(){const a={page:this.page,name:this.search,gender:this.gender};L().get("https://rickandmortyapi.com/api/character/",{params:a}).then((a=>{this.datacard=a.data.results,this.pages=a.data.info.pages,console.log(this.pages)})).catch((a=>{console.log(a)}))},changePage(a){this.page=a<=0||a>this.pages?this.page:a,this.dataFilter()},searchData(){this.page=1,this.dataFilter()},showModal(a){this.fetchOne(a)},async fetchOne(a){await L().get(`https://rickandmortyapi.com/api/character/${a}`).then((a=>{this.currentCharacter=a.data,this.modal=!0,this.originName=a.data.origin["name"],this.name=a.data.name;let e=a.data.episode;this.allEpisode=[],e.forEach((async a=>{let e=a.substring(40,45);await L().get(`https://rickandmortyapi.com/api/episode/${e}`).then((a=>{this.allEpisode=this.allEpisode.concat(a.data),console.log(this.allEpisode)}))})),console.log(this.name)}))}},data(){return{datacard:[],pages:1,page:1,search:"",modal:!1,currentCharacter:{},idEpisode:"",originName:"",episodeData:"",allEpisode:[],dataEpisode:[]}}};const Ea=(0,ea.Z)(xa,[["render",U],["__scopeId","data-v-4a17a260"]]);var Da=Ea},1204:function(a,e,t){t.d(e,{Z:function(){return p}});var n=t(3396);const r=a=>((0,n.dD)("data-v-17380979"),a=a(),(0,n.Cn)(),a),o={class:"container-fluid",id:"all"},i=r((()=>(0,n._)("div",{class:"row"},[(0,n._)("div",{class:"col"})],-1))),s=[i];function c(a,e,t,r,i,c){return(0,n.wg)(),(0,n.iD)("div",o,s)}var l={name:"FooterComponent"},d=t(89);const u=(0,d.Z)(l,[["render",c],["__scopeId","data-v-17380979"]]);var p=u}},e={};function t(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={exports:{}};return a[n](o,o.exports,t),o.exports}t.m=a,function(){var a=[];t.O=function(e,n,r,o){if(!n){var i=1/0;for(d=0;d<a.length;d++){n=a[d][0],r=a[d][1],o=a[d][2];for(var s=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(t.O).every((function(a){return t.O[a](n[c])}))?n.splice(c--,1):(s=!1,o<i&&(i=o));if(s){a.splice(d--,1);var l=r();void 0!==l&&(e=l)}}return e}o=o||0;for(var d=a.length;d>0&&a[d-1][2]>o;d--)a[d]=a[d-1];a[d]=[n,r,o]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var n in e)t.o(e,n)&&!t.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:e[n]})}}(),function(){t.f={},t.e=function(a){return Promise.all(Object.keys(t.f).reduce((function(e,n){return t.f[n](a,e),e}),[]))}}(),function(){t.u=function(a){return"js/"+a+"."+{351:"68edc7a2",431:"ad2a5cb7",659:"03390c05",758:"58e1a298"}[a]+".js"}}(),function(){t.miniCssF=function(a){return"css/"+a+"."+{659:"5a67bcbe",758:"5a67bcbe"}[a]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){var a={},e="rickyandmorty-app:";t.l=function(n,r,o,i){if(a[n])a[n].push(r);else{var s,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==e+o){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",e+o),s.src=n),a[n]=[r];var p=function(e,t){s.onerror=s.onload=null,clearTimeout(m);var r=a[n];if(delete a[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(a){return a(t)})),e)return e(t)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){t.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){t.p="/rickandmorty/"}(),function(){var a=function(a,e,t,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||e,c=new Error("Loading CSS chunk "+a+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode.removeChild(r),n(c)}};return r.onerror=r.onload=o,r.href=e,document.head.appendChild(r),r},e=function(a,e){for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var r=t[n],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===a||o===e))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){r=i[n],o=r.getAttribute("data-href");if(o===a||o===e)return r}},n=function(n){return new Promise((function(r,o){var i=t.miniCssF(n),s=t.p+i;if(e(i,s))return r();a(n,s,r,o)}))},r={143:0};t.f.miniCss=function(a,e){var t={659:1,758:1};r[a]?e.push(r[a]):0!==r[a]&&t[a]&&e.push(r[a]=n(a).then((function(){r[a]=0}),(function(e){throw delete r[a],e})))}}(),function(){var a={143:0};t.f.j=function(e,n){var r=t.o(a,e)?a[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));n.push(r[2]=o);var i=t.p+t.u(e),s=new Error,c=function(n){if(t.o(a,e)&&(r=a[e],0!==r&&(a[e]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}};t.l(i,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===a[e]};var e=function(e,n){var r,o,i=n[0],s=n[1],c=n[2],l=0;if(i.some((function(e){return 0!==a[e]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(c)var d=c(t)}for(e&&e(n);l<i.length;l++)o=i[l],t.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return t.O(d)},n=self["webpackChunkrickyandmorty_app"]=self["webpackChunkrickyandmorty_app"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(1842)}));n=t.O(n)})();
//# sourceMappingURL=app.6479517c.js.map