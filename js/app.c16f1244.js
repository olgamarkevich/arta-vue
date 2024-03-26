(function(){"use strict";var e={915:function(e,r,t){var i=t(5130),s=t(6768);const n={class:"wrapper"};function a(e,r,t,i,a,c){const l=(0,s.g2)("CloseBtn"),o=(0,s.g2)("Title"),u=(0,s.g2)("Features"),f=(0,s.g2)("ProductsForm"),d=(0,s.g2)("Links");return(0,s.uX)(),(0,s.CE)("main",n,[(0,s.bF)(l),(0,s.bF)(o),(0,s.bF)(u),(0,s.bF)(f),(0,s.bF)(d)])}const c={class:"features"},l=["src","srcset","alt"],o=["innerHTML"];function u(e,r,t,i,n,a){return(0,s.uX)(),(0,s.CE)("section",c,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.features,(r=>((0,s.uX)(),(0,s.CE)("div",{key:r.id,class:"features__item"},[(0,s.Lk)("img",{src:`${r.srcV}`,srcset:`${r.srcsetV}`,alt:`${r.alt}`,class:"features__img"},null,8,l),(0,s.Lk)("div",{class:"features__title",innerHTML:e.$t(r.title)},null,8,o)])))),128))])}var f={data(){return{features:[{id:1,alt:"Unlimited Art Creation",title:"Unlimited Art <br>Creation",srcV:"/img/features-1.jpg",srcsetV:"/img/features-1@2x.jpg 2x, /img/features-1@3x.jpg 3x"},{id:2,alt:"Exclusive Styles",title:"Exclusive <br>Styles",srcV:"/img/features-2.jpg",srcsetV:"/img/features-2@2x.jpg 2x, /img/features-2@3x.jpg 3x"},{id:3,alt:"Magic Avatars With 20% Off",title:"Magic Avatars <br>With 20% Off",srcV:"/img/features-3.jpg",srcsetV:"/img/features-3@1.5x.jpg 1.5x, /img/features-3@2x.jpg 2x, /img/features-3@3x.jpg 3x"}]}}},d=t(1241);const p=(0,d.A)(f,[["render",u],["__scopeId","data-v-d156b7c0"]]);var E=p,b=t(4232);const v={class:"nav"},C={href:"",class:"nav__link"};function A(e,r,t,i,n,a){return(0,s.uX)(),(0,s.CE)("nav",v,[(0,s.Lk)("ul",{class:(0,b.C4)(["nav__list",{"changed-height":i.heightExceededRef}]),ref:"elementRef"},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.links,(r=>((0,s.uX)(),(0,s.CE)("li",{key:r.id,class:"nav__item"},[(0,s.Lk)("a",C,(0,b.v_)(e.$t(r.title)),1)])))),128))],2)])}var m=t(144);function S(e){const r=(0,m.KR)(null),t=(0,m.KR)(!1),i=()=>{null!==r.value&&(t.value=r.value.clientHeight>e)};return(0,s.sV)((()=>{i()})),{elementRef:r,heightExceededRef:t}}var g=S,h={data(){return{links:[{id:1,title:"Terms of Use",href:"#"},{id:2,title:"Privacy Policy",href:"#"},{id:3,title:"Restore",href:"#"}]}},setup(){const{elementRef:e,heightExceededRef:r}=g(20);return{elementRef:e,heightExceededRef:r}}};const R=(0,d.A)(h,[["render",A],["__scopeId","data-v-fbe3a110"]]);var L=R;const O={class:"form"},y={class:"selectors"},F=["value"],_={class:"selectors__item"},k={class:"selectors__item-l"},x={class:"selectors__tariff"},T={key:0,class:"selectors__tariff-info"},U={class:"selectors__item-r"},I=["innerHTML"],P={key:0,class:"best-offer-label"},Y=["href"];function M(e,r,t,n,a,c){return(0,s.uX)(),(0,s.CE)("section",O,[(0,s.Lk)("div",y,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.radioList,(t=>((0,s.uX)(),(0,s.CE)("div",{class:"radio-line",key:t.id},[(0,s.bo)((0,s.Lk)("input",{type:"radio",class:"radio-input",value:`${t.urlRadio}`,"onUpdate:modelValue":r[0]||(r[0]=e=>a.url=e)},null,8,F),[[i.XL,a.url]]),(0,s.Lk)("div",_,[(0,s.Lk)("div",k,[(0,s.Lk)("div",x,(0,b.v_)(e.$t(`${t.title}`)),1),t.tariffInfo?((0,s.uX)(),(0,s.CE)("div",T,(0,b.v_)(e.$t("Just {price} per year",{price:"20$"})),1)):(0,s.Q3)("",!0)]),(0,s.Lk)("div",U,[(0,s.Lk)("div",{class:"selectors__item-price",innerHTML:e.$t(t.priceLabel,{price:t.price})},null,8,I)])]),t.BESTOFFER?((0,s.uX)(),(0,s.CE)("span",P,(0,b.v_)(e.$t("BEST OFFER")),1)):(0,s.Q3)("",!0)])))),128))]),(0,s.Lk)("a",{href:`${a.url}`,class:"button"},(0,b.v_)(e.$t("Continue")),9,Y)])}var w={data(){return{url:"https://apple.com/",radioList:[{id:1,urlRadio:"https://apple.com/",title:"YEARLY ACCESS",BESTOFFER:!0,tariffInfo:!0,priceLabel:"{price} <br>per week",price:"5$"},{id:2,urlRadio:"https://google.com/",title:"WEEKLY ACCESS",BESTOFFER:!1,tariffInfo:!1,priceLabel:"Just {price} per year",price:"50$"}]}}};const W=(0,d.A)(w,[["render",M],["__scopeId","data-v-7e7ae848"]]);var j=W;const J=["innerHTML"];function $(e,r){return(0,s.uX)(),(0,s.CE)("div",{class:"title",innerHTML:e.$t("Get Unlimited <br>Access")},null,8,J)}const B={},N=(0,d.A)(B,[["render",$],["__scopeId","data-v-8e979ddc"]]);var K=N;const X={href:"#",class:"cross-icon"};function H(e,r){return(0,s.uX)(),(0,s.CE)("a",X)}const G={},V=(0,d.A)(G,[["render",H],["__scopeId","data-v-2b8560a1"]]);var z=V,D={components:{Links:L,ProductsForm:j,Features:E,Title:K,CloseBtn:z}};const Z=(0,d.A)(D,[["render",a]]);var q=Z,Q=(t(4603),t(7566),t(8721),t(5384)),ee=JSON.parse('{"Get Unlimited <br>Access":"Erhalten Sie unbegrenzten <br>Zugriff","Unlimited Art <br>Creation":"Unbegrenzte <br>Kunstschaffung","Exclusive <br>Styles":"Exklusive <br>Stile","Magic Avatars <br>With 20% Off":"20 % Rabatt auf <br>KI-Avatare","YEARLY ACCESS":"JÄHRLICHER ZUGRIFF","BEST OFFER":"BESTES ANGEBOT","Just {price} per year":"Nur {price} pro Jahr","WEEKLY ACCESS":"WÖCHENTLICHER ZUGRIFF","{price} <br>per week":"{price} <br>pro Woche","Terms of Use":"Nutzungsbedingungen","Privacy Policy":"Datenschutzrichtlinie","Restore":"Wiederherstellen","Continue":"Weiter"}'),re=JSON.parse('{"Get Unlimited <br>Access":"Get Unlimited <br>Access","Unlimited Art <br>Creation":"Unlimited Art <br>Creation","Exclusive <br>Styles":"Exclusive <br>Styles","Magic Avatars <br>With 20% Off":"Magic Avatars <br>With 20% Off","YEARLY ACCESS":"YEARLY ACCESS","BEST OFFER":"BEST OFFER","Just {price} per year":"Just {price} per year","WEEKLY ACCESS":"WEEKLY ACCESS","{price} <br>per week":"{price} <br>per week","Terms of Use":"Terms of Use","Privacy Policy":"Privacy Policy","Restore":"Restore","Continue":"Continue"}'),te=JSON.parse('{"Get Unlimited <br>Access":"Obtén acceso <br>ilimitado","Unlimited Art <br>Creation":"Ilimitada creación <br>de arte","Exclusive <br>Styles":"Estilos <br>exclusivos","Magic Avatars <br>With 20% Off":"20 % de descuento en <br>avatares de IA","YEARLY ACCESS":"ACCESO ANUAL","BEST OFFER":"MEJOR OFERTA","Just {price} per year":"Solo {price} por año","WEEKLY ACCESS":"ACCESO SEMANAL","{price} <br>per week":"{price} <br>por semana","Terms of Use":"Términos de uso","Privacy Policy":"Política de privacidad","Restore":"Restaurar","Continue":"Continuar"}'),ie=JSON.parse('{"Get Unlimited <br>Access":"Obtenez un accès <br>illimité","Unlimited Art <br>Creation":"Création artistique <br>illimitée","Exclusive <br>Styles":"Styles <br>exclusifs","Magic Avatars <br>With 20% Off":"20&nbsp;% de réduction <br>sur les avatars IA","YEARLY ACCESS":"ACCÈS ANNUEL","BEST OFFER":"MEILLEURE OFFRE","Just {price} per year":"Seulement {price} par an","WEEKLY ACCESS":"ACCÈS HEBDOMADAIRE","{price} <br>per week":"{price} <br>par semaine","Terms of Use":"Conditions d’utilisation","Privacy Policy":"Politique de confidentialité","Restore":"Restaurer","Continue":"Continuer"}'),se=JSON.parse('{"Get Unlimited <br>Access":"無制限アクセス<br>を入手","Unlimited Art <br>Creation":"アート作品を<br>無制限に創造","Exclusive <br>Styles":"特別な<br>スタイル","Magic Avatars <br>With 20% Off":"AIアバターが<br>20%オフ","YEARLY ACCESS":"年間アクセス","BEST OFFER":"ベストオファー","Just {price} per year":"わずか{price}/年","WEEKLY ACCESS":"週ごとのアクセス","{price} <br>per week":"{price}/週<br>","Terms of Use":"利用規約","Privacy Policy":"プライバシーポリシー","Restore":"復元する","Continue":"続行する"}'),ne=JSON.parse('{"Get Unlimited <br>Access":"Obtenha Acesso <br>Ilimitado","Unlimited Art <br>Creation":"Criação de Arte <br>Ilimitada","Exclusive <br>Styles":"Estilos <br>Exclusivos","Magic Avatars <br>With 20% Off":"20% de Desconto em <br>Avatares de IA","YEARLY ACCESS":"ACESSO ANUAL","BEST OFFER":"MELHOR OFERTA","Just {price} per year":"Apenas {price} por ano","WEEKLY ACCESS":"ACESSO SEMANAL","{price} <br>per week":"{price} <br>por semana","Terms of Use":"Termos de Uso","Privacy Policy":"Política de Privacidade","Restore":"Restaurar","Continue":"Continuar"}');const ae=()=>{const e="en",r={de:ee,en:re,es:te,fr:ie,ja:se,pt:ne},t=Object.keys(r);let i=e;const s=window.location.search,n=new URLSearchParams(s),a=n.get("lang")?.toLowerCase();if(a&&t.includes(a)&&a!==e&&(i=a),!a){const r=navigator?.languages?.length?navigator.languages:[...navigator?.language],s=r.map((e=>e.split("-")[0]));let n=null;s.forEach((e=>{null===n&&t.includes(e)&&(n=e)})),null!==n&&n!==e&&(i=n)}const c=(0,Q.hU)({locale:i,fallbackLocale:e,messages:r});return c},ce=(0,i.Ef)(q),le=ae();ce.use(le),ce.mount("#app")}},r={};function t(i){var s=r[i];if(void 0!==s)return s.exports;var n=r[i]={exports:{}};return e[i].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(r,i,s,n){if(!i){var a=1/0;for(u=0;u<e.length;u++){i=e[u][0],s=e[u][1],n=e[u][2];for(var c=!0,l=0;l<i.length;l++)(!1&n||a>=n)&&Object.keys(t.O).every((function(e){return t.O[e](i[l])}))?i.splice(l--,1):(c=!1,n<a&&(a=n));if(c){e.splice(u--,1);var o=s();void 0!==o&&(r=o)}}return r}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[i,s,n]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var i in r)t.o(r,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={524:0};t.O.j=function(r){return 0===e[r]};var r=function(r,i){var s,n,a=i[0],c=i[1],l=i[2],o=0;if(a.some((function(r){return 0!==e[r]}))){for(s in c)t.o(c,s)&&(t.m[s]=c[s]);if(l)var u=l(t)}for(r&&r(i);o<a.length;o++)n=a[o],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(u)},i=self["webpackChunkarta_vue"]=self["webpackChunkarta_vue"]||[];i.forEach(r.bind(null,0)),i.push=r.bind(null,i.push.bind(i))}();var i=t.O(void 0,[504],(function(){return t(915)}));i=t.O(i)})();
//# sourceMappingURL=app.c16f1244.js.map