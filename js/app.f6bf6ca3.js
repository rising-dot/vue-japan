(function(t){function e(e){for(var n,o,r=e[0],s=e[1],l=e[2],d=0,u=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);f&&f(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),c()}function c(){for(var t,e=0;e<i.length;e++){for(var c=i[e],n=!0,r=1;r<c.length;r++){var s=c[r];0!==a[s]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=c[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=t,o.c=n,o.d=function(t,e,c){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(c,n,function(e){return t[e]}.bind(null,n));return c},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-japan/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var f=s;i.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"165b":function(t,e,c){t.exports=c.p+"img/b10.923a7a5f.jpg"},"18a1":function(t,e,c){},"1e4f":function(t,e,c){t.exports=c.p+"img/b11.5c3874de.jpg"},"208e":function(t,e,c){},"274c":function(t,e,c){},"2a2a":function(t,e,c){"use strict";c("cd1e")},"3d88":function(t,e,c){t.exports=c.p+"img/aoa.b486043a.gif"},"444d":function(t,e,c){"use strict";c("dc04")},"460c":function(t,e,c){"use strict";c("274c")},"49db":function(t,e,c){t.exports=c.p+"img/b16.34829174.jpg"},"4d94":function(t,e,c){"use strict";c("91aa")},"4e8f":function(t,e,c){t.exports=c.p+"img/b4.c6bc6f15.jpg"},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");function a(t,e,c,a,i,o){var r=Object(n["z"])("Navigation"),s=Object(n["z"])("router-view"),l=Object(n["z"])("FooterSama");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(r),Object(n["i"])(s),Object(n["i"])(l)],64)}var i=c("cf05"),o=c.n(i),r=Object(n["f"])("div",{class:"branding"},[Object(n["f"])("img",{src:o.a,alt:"logo"})],-1),s={class:"navigation"},l=Object(n["h"])("Home"),f=Object(n["h"])("Portolio"),d={class:"icon"},u=Object(n["g"])('<div id="barContainer"><div id="bar1" class="bar"></div><div id="bar2" class="bar"></div><div id="bar3" class="bar"></div><div id="bar4" class="bar"></div></div>',1),b=[u],m={class:"dropdown-nav"},g=Object(n["h"])("Home"),p=Object(n["h"])("Portolio");function v(t,e,c,a,i,o){var u=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["e"])("header",{class:Object(n["o"])({"scrolled-nav":i.scrolledNav})},[Object(n["f"])("nav",null,[r,Object(n["F"])(Object(n["f"])("ul",s,[Object(n["f"])("li",null,[Object(n["i"])(u,{class:"link",to:"/"},{default:Object(n["E"])((function(){return[l]})),_:1})]),Object(n["f"])("li",null,[Object(n["i"])(u,{class:"link",to:"/portolio"},{default:Object(n["E"])((function(){return[f]})),_:1})])],512),[[n["C"],!i.mobile]]),Object(n["f"])("div",d,[Object(n["F"])(Object(n["f"])("i",{onClick:e[0]||(e[0]=function(){return o.toggleMobileNav&&o.toggleMobileNav.apply(o,arguments)}),class:Object(n["o"])({"icon-active":i.mobileNav})},b,2),[[n["C"],i.mobile]])]),Object(n["i"])(n["b"],{name:"mobile-nav"},{default:Object(n["E"])((function(){return[Object(n["F"])(Object(n["f"])("ul",m,[Object(n["f"])("li",null,[Object(n["i"])(u,{onClick:o.clickMenu,class:"link",to:"/"},{default:Object(n["E"])((function(){return[g]})),_:1},8,["onClick"])]),Object(n["f"])("li",null,[Object(n["i"])(u,{onClick:o.clickMenu,class:"link",to:"/portolio"},{default:Object(n["E"])((function(){return[p]})),_:1},8,["onClick"])])],512),[[n["C"],i.mobileNav]])]})),_:1})])],2)}var j={name:"navigation",data:function(){return{scrolledNav:null,mobile:!0,mobileNav:null,windowWidth:null}},created:function(){window.addEventListener("resize",this.checkScreen),this.checkScreen()},mounted:function(){window.addEventListener("scroll",this.updateScroll)},methods:{clickMenu:function(){this.mobileNav=!1},toggleMobileNav:function(){this.mobileNav=!this.mobileNav},updateScroll:function(){var t=window.scrollY;this.scrolledNav=t>50},checkScreen:function(){this.windowWidth=window.innerWidth,this.windowWidth<=750?this.mobile=!0:(this.mobile=!1,this.mobileNav=!1)}}},O=(c("a9f8"),c("6b0d")),h=c.n(O);const y=h()(j,[["render",v]]);var C=y,w={id:"footerSama"},M=Object(n["g"])('<ul><li><a href=""><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.5 212.9"><path class="cls-1" d="M320.09,359.88c0,14.77,0,29.54.06,44.31,0,2.1-.63,2.54-2.6,2.52-12.09-.08-24.19-.1-36.28,0-2.19,0-2.68-.58-2.67-2.71.07-29.37,0-58.74.11-88.11,0-2.55-.65-3.13-3.13-3.09-9.41.16-18.83,0-28.24.11-2,0-2.44-.52-2.42-2.44q.14-16.85,0-33.69c0-1.82.5-2.32,2.32-2.3,9.67.09,19.35,0,29,.09,1.94,0,2.46-.49,2.44-2.44-.11-9.41-.15-18.83,0-28.24.16-11.81,2.71-23,10-32.58,7.47-9.82,17.7-14.91,29.68-16.68,12.88-1.89,25.65-.18,38.42,1.52,1.19.16,1.6.66,1.6,1.83,0,9.76,0,19.52,0,29.28,0,1.68-.85,1.74-2.11,1.75-6,.08-11.92-.28-17.87.22-11.51,1-18.22,8.14-18.33,19.7-.07,7.78,0,15.55-.06,23.33,0,1.8.45,2.32,2.29,2.31,10.62-.09,21.25,0,31.87-.09,2.08,0,2.59.44,2.25,2.55q-2.74,17.11-5.21,34.28c-.25,1.69-1.21,1.56-2.36,1.56-8.81,0-17.62.06-26.43-.06-2,0-2.42.57-2.41,2.47C320.13,330.16,320.09,345,320.09,359.88Z" transform="translate(-244.92 -193.82)"></path></svg></a></li><li><a href=""><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.92 212.9"><path class="cls-1" d="M213.05,59.22a59.2,59.2,0,0,0-1.71-14.33,57.61,57.61,0,0,0-19.89-31.56C180.34,4.23,167.45,0,153.09,0c-15.46,0-30.93,0-46.4,0H59.59C45.29,0,32.44,4.39,21.51,13.6,7.47,25.43.31,40.73.24,59.1c-.12,31.58-.07,63.15,0,94.72a57.08,57.08,0,0,0,13.57,37.74c11.84,14,27.13,21.2,45.51,21.27,31.57.12,63.15.06,94.72,0a57.1,57.1,0,0,0,37.73-13.57C205.84,187.4,213,172,213,153.6,213.13,122.14,213.06,90.68,213.05,59.22Zm-18.93,94.2c-.1,17-8.11,29.43-23.41,37-5.46,2.7-11.37,3.58-17.43,3.59H60c-8,0-15.57-1.8-22.31-6.25-11.06-7.31-17.34-17.55-18.34-30.86-.17-2.2-.2-4.41-.2-6.62q0-45.18,0-90.36c0-12.29,4.29-22.7,13.5-30.94a39.15,39.15,0,0,1,26.95-10c31.41,0,62.81-.16,94.21.05,17,.12,29.4,8.21,36.89,23.53a38,38,0,0,1,3.53,16.91C194.19,90.74,194.31,122.08,194.12,153.42ZM106.78,51.6c-30.06-.22-54.95,24.6-55,54.82a55,55,0,0,0,54.77,54.85c30.08.1,54.74-24.48,54.9-54.73C161.63,76.5,137.06,51.82,106.78,51.6Zm-.09,90.78a35.95,35.95,0,1,1,35.89-36A36,36,0,0,1,106.69,142.38ZM163.73,35.61a13.81,13.81,0,1,0,13.91,13.85A13.95,13.95,0,0,0,163.73,35.61Z" transform="translate(-0.17 0)"></path></svg></a></li><li><a href=""><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 213.34 212.9"><path class="cls-1" d="M408,340.69c0-1.45,0-2.89,0-4.33V328.8c0-5-.32-10-.56-15a84.71,84.71,0,0,0-1.13-11.46,69.8,69.8,0,0,0-5.16-17,38.55,38.55,0,0,0-20.2-20,61.69,61.69,0,0,0-19.68-4.5,67.16,67.16,0,0,0-14.45.52,47.33,47.33,0,0,0-33.18,20.7c-.2.3-.41.58-.62.87a2.34,2.34,0,0,1-.16-1q0-7.89,0-15.79c0-1.47-.38-1.86-1.83-1.92h-.56c-1.2,0-2.4.05-3.59.05-10.28,0-20.55.1-30.83-.05-1.41,0-2.83,0-4.25,0s-1.75.53-1.78,1.83c0,.28,0,.56,0,.83q0,22.95,0,45.88,0,23.16,0,46.33v43.29c0,.74,0,1.48,0,2.22a2,2,0,0,0,1.15,2.09h4.44c.17-.24.43-.19.67-.19l6.36,0,11.78,0h19.15l.27,0c.65-.1.84-.58.87-1.14s0-1.1,0-1.66q0-33.58,0-67.19a95.67,95.67,0,0,1,.57-11.6,39.21,39.21,0,0,1,3.5-12.74,20.39,20.39,0,0,1,15.05-11.45,32.52,32.52,0,0,1,13.47,0,17.5,17.5,0,0,1,12.62,10.37,37,37,0,0,1,3,10.61,65.71,65.71,0,0,1,.48,8.75q0,25.14.06,50.3c0,7.69,0,15.38,0,23.07,0,.28,0,.56,0,.83a1.82,1.82,0,0,0,1.16,2h3.32c.21-.27.51-.19.77-.19h37.6c.21,0,.43,0,.64.06.78,0,1.12-.47,1.24-1.17V341.37C407.9,341.18,408,340.93,408,340.69ZM243,364.43q0-48.8,0-97.58c0-2.25-.35-2.61-2.63-2.6-1.63,0-3.26.05-4.89.05q-9.42,0-18.83,0l-16.06,0c-.49,0-1,0-1.48,0a.88.88,0,0,0-.88.79,8,8,0,0,0-.06,1.47v66.1q0,35.87,0,71.73c0,1,.09,1.84,1.12,2.29h3.14c.18-.24.44-.19.68-.19l6.53,0h22l6.35,0c.24,0,.5-.05.68.19H242a2.2,2.2,0,0,0,1.1-2.24c0-.24,0-.49,0-.74Q243,384.09,243,364.43ZM238.91,201.3a25.16,25.16,0,0,0-16.33-7.48h-4.07c-.89.12-1.77.2-2.65.36a24.89,24.89,0,0,0-18,12.92,25.39,25.39,0,0,0-3.06,10.54v3.9a31.73,31.73,0,0,0,.51,3.65,25.86,25.86,0,1,0,43.61-23.9Z" transform="translate(-194.79 -193.82)"></path></svg></a></li><li><a href=""><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.56 212.56"><path class="cls-1" d="M301.46,194a106.29,106.29,0,0,0-40.29,204.65c-4.47-34.67,8.16-61,14.1-89-10.31-16.55,1.27-50,23-41.71,26.8,10.12-23.22,61.6,10.37,68,35,6.73,49.35-58,27.64-79-31.46-30.32-91.42-.67-84,42.74.91,5.4,9.76,13.88,9.76,13.88a107.1,107.1,0,0,1-2.72,14.68c-20.13-4.25-28.56-19.35-27.77-39.47,1.21-33,31-56,61-59.24h0c37.83-4.06,73.36,13.22,78.33,47.17,5.52,38.32-17.1,79.79-57.6,76.82-11-.79-15.58-6-24.19-11-4.56,22.82-10.09,44.73-25.89,56.86A106.29,106.29,0,1,0,301.46,194Z" transform="translate(-195.18 -193.99)"></path></svg></a></li><li><a href=""><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257.63 212.9"><path class="cls-1" d="M435.86,220.15c-.73-.76-1.18-.29-1.6.35-8.23,2.14-16.12,6-26.08,5.94,10.09-7.83,17.46-15.93,21.09-28.34a123.18,123.18,0,0,1-28.06,11.49c-3.55,1-6,.55-8.86-2-13.05-11.75-28.51-15.78-45.7-12.79A53.38,53.38,0,0,0,303.46,253c.65,6.76.43,6.9-6.27,6.12-39.78-4.61-73.22-21.58-99.75-51.71-3.29-3.74-4.37-2.36-5.86,1.11a53.51,53.51,0,0,0-.46,43c3.76,9.22,10,16.55,18.64,23.3a44.33,44.33,0,0,1-19.08-4.4c-4.21-2-4.78-.29-4.29,3.28,3,21.5,14.06,36.85,34.22,45.34,2,.84,4.21,1.21,5.77,3.12A39.35,39.35,0,0,1,210,323.26c-5.19-.82-4.26,1.4-2.86,4.39,8.07,17.29,21.52,27.67,40.21,31.37,2.05.41,4.41-.48,6.54,1.62-22.5,17-47.8,23.57-75.62,22a14.81,14.81,0,0,0,3.72,2.95C229.5,411.52,278.71,414.3,326.8,390c54.57-27.61,81.14-74.72,83.27-135.56.2-5.59,1.81-9.13,6.06-12.5l1.37-1.1c6.82-5.54,13.12-11.68,17.23-19.7h0Z" transform="translate(-178.23 -193.82)"></path></svg></a></li><li><a href=""><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304.02 212.9"><path class="cls-1" d="M304.45,193.88c33.54.65,67.8.5,101.93,3.91a81.37,81.37,0,0,1,16.92,3.1c13.63,4.4,22.16,13.77,25.6,27.63,3.38,13.62,4.4,27.57,5.14,41.52,1.63,30.66,1.29,61.27-3,91.72-1.41,10-3.59,19.71-10.94,27.46a38,38,0,0,1-20.47,11.64c-15.09,3.06-30.41,3.79-45.7,4.4-52.7,2.1-105.41,2.23-158.08-.94A215.42,215.42,0,0,1,187,401a38,38,0,0,1-30.15-29.27c-3.1-13.57-4.27-27.36-5-41.2-1.62-30.54-1.27-61,3-91.38,1.41-10,3.5-19.78,10.83-27.51a38.21,38.21,0,0,1,20.77-11.81c15.1-3,30.41-3.64,45.7-4.36C256,194.35,279.87,194.17,304.45,193.88ZM272.66,345.93l78.9-45.56-78.9-45.54Z" transform="translate(-150.92 -193.88)"></path></svg></a></li></ul>',1),x=[M];function k(t,e,c,a,i,o){return Object(n["s"])(),Object(n["e"])("div",w,x)}var z={};c("4d94");const E=h()(z,[["render",k]]);var N=E,T={name:"Home",components:{Navigation:C,FooterSama:N}};c("444d");const L=h()(T,[["render",a]]);var _=L,B=c("6c02"),S={class:"home"};function P(t,e,c,a,i,o){var r=Object(n["z"])("LandingPageTokyo"),s=Object(n["z"])("ColumnTwo"),l=Object(n["z"])("Columns"),f=Object(n["z"])("Div90Degree");return Object(n["s"])(),Object(n["e"])("div",S,[Object(n["i"])(r),Object(n["i"])(s),Object(n["i"])(l),Object(n["i"])(f)])}var q={id:"landingPageTokyo"},F=Object(n["f"])("div",{class:"imgContainer"},[Object(n["f"])("div",{class:"imgEffect"}),Object(n["f"])("div",{class:"containerText"},[Object(n["f"])("h1",null,"Tokyo"),Object(n["f"])("h2",{class:"line-1 anim-typewriter"},"Do you wanna go...")])],-1),I=[F];function H(t,e,c,a,i,o){return Object(n["s"])(),Object(n["e"])("div",q,I)}var A={};c("9558");const Z=h()(A,[["render",H]]);var D=Z,R={id:"columnTwo"},J=Object(n["f"])("div",{class:"parallax"},null,-1),K=Object(n["f"])("div",{id:"columnInner"},[Object(n["f"])("h1",null,[Object(n["h"])("TOKYO "),Object(n["f"])("br"),Object(n["h"])("STREET")]),Object(n["f"])("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore alias cum, natus, dicta voluptas tempore laboriosam cumque repellendus voluptate, quia architecto consequatur quam pariatur ducimus dolores soluta ut iste beatae sunt consectetur consequuntur nam. Delectus reprehenderit nihil, eveniet quis possimus veniam voluptatibus, perferendis porro nobis consequuntur ad. Sed, accusamus cupiditate.")],-1),W=[J,K];function Y(t,e,c,a,i,o){return Object(n["s"])(),Object(n["e"])("div",R,W)}var G={data:function(){return{}}};c("460c");const V=h()(G,[["render",Y]]);var Q=V,U={id:"columns"},X={class:"grid"},$={class:"grid-item"},tt=["src"],et={class:"grid-item featured"},ct=["src"],nt={class:"grid-item"},at=["src"],it={class:"grid-item"},ot=["src"],rt={class:"grid-item"},st=["src"],lt={class:"grid-item"},ft=["src"],dt={class:"grid-item"},ut=["src"],bt={class:"grid-item"},mt=["src"],gt={class:"grid-item"},pt=["src"],vt={class:"grid-item featured"},jt=["src"],Ot={class:"grid-item"},ht=["src"],yt={class:"grid-item"},Ct=["src"],wt={class:"grid-item"},Mt=["src"],xt={class:"grid-item featured"},kt=["src"],zt={class:"grid-item"},Et=["src"],Nt={class:"grid-item"},Tt=["src"],Lt={class:"grid-item"},_t=["src"],Bt={class:"grid-item featured"},St=["src"],Pt={class:"grid-item"},qt=["src"],Ft={class:"grid-item"},It=["src"];function Ht(t,e,c,a,i,o){return Object(n["s"])(),Object(n["e"])("div",U,[Object(n["f"])("div",X,[Object(n["f"])("div",$,[Object(n["f"])("img",{src:i.img1,alt:"City of toyko"},null,8,tt)]),Object(n["f"])("div",et,[Object(n["f"])("img",{src:i.img2,alt:"City of toyko"},null,8,ct)]),Object(n["f"])("div",nt,[Object(n["f"])("img",{src:i.img3,alt:"City of toyko"},null,8,at)]),Object(n["f"])("div",it,[Object(n["f"])("img",{src:i.img4,alt:"City of toyko"},null,8,ot)]),Object(n["f"])("div",rt,[Object(n["f"])("img",{src:i.img5,alt:"City of toyko"},null,8,st)]),Object(n["f"])("div",lt,[Object(n["f"])("img",{src:i.img6,alt:"City of toyko"},null,8,ft)]),Object(n["f"])("div",dt,[Object(n["f"])("img",{src:i.img7,alt:"City of toyko"},null,8,ut)]),Object(n["f"])("div",bt,[Object(n["f"])("img",{src:i.img8,alt:"City of toyko"},null,8,mt)]),Object(n["f"])("div",gt,[Object(n["f"])("img",{src:i.img9,alt:"City of toyko"},null,8,pt)]),Object(n["f"])("div",vt,[Object(n["f"])("img",{src:i.img10,alt:"City of toyko"},null,8,jt)]),Object(n["f"])("div",Ot,[Object(n["f"])("img",{src:i.img11,alt:"City of toyko"},null,8,ht)]),Object(n["f"])("div",yt,[Object(n["f"])("img",{src:i.img12,alt:"City of toyko"},null,8,Ct)]),Object(n["f"])("div",wt,[Object(n["f"])("img",{src:i.img13,alt:"City of toyko"},null,8,Mt)]),Object(n["f"])("div",xt,[Object(n["f"])("img",{src:i.img14,alt:"City of toyko"},null,8,kt)]),Object(n["f"])("div",zt,[Object(n["f"])("img",{src:i.img15,alt:"City of toyko"},null,8,Et)]),Object(n["f"])("div",Nt,[Object(n["f"])("img",{src:i.img16,alt:"City of toyko"},null,8,Tt)]),Object(n["f"])("div",Lt,[Object(n["f"])("img",{src:i.img17,alt:"City of toyko"},null,8,_t)]),Object(n["f"])("div",Bt,[Object(n["f"])("img",{src:i.img18,alt:"City of toyko"},null,8,St)]),Object(n["f"])("div",Pt,[Object(n["f"])("img",{src:i.img19,alt:"City of toyko"},null,8,qt)]),Object(n["f"])("div",Ft,[Object(n["f"])("img",{src:i.img20,alt:"City of toyko"},null,8,It)])])])}var At={data:function(){return{img1:c("71a7"),img2:c("621f"),img3:c("aaea"),img4:c("4e8f"),img5:c("a83a"),img6:c("ce86"),img7:c("a6c7"),img8:c("9526"),img9:c("d42e"),img10:c("165b"),img11:c("1e4f"),img12:c("d592"),img13:c("7769"),img14:c("6d06"),img15:c("cb4b"),img16:c("49db"),img17:c("72b4"),img18:c("f505"),img19:c("e9aa"),img20:c("ea67")}},mounted:function(){}};c("2a2a");const Zt=h()(At,[["render",Ht]]);var Dt=Zt,Rt={id:"div90Degree"},Jt={id:"run90",class:"container90"},Kt=Object(n["f"])("div",{class:"spinContainer"},[Object(n["f"])("h1",null,"THE"),Object(n["f"])("h1",{class:"nightlif"},[Object(n["h"])("NIGHTLIF"),Object(n["f"])("span",{id:"appendContent"},"E")])],-1),Wt=Object(n["f"])("h1",{class:"ofTokyo"},"OF TOKYO",-1);function Yt(t,e,c,a,i,o){var r=Object(n["z"])("class");return Object(n["s"])(),Object(n["e"])("div",Rt,[Object(n["f"])("div",Jt,[(Object(n["s"])(),Object(n["e"])(n["a"],null,Object(n["y"])(64,(function(t){return Object(n["f"])("div",{key:t,class:"rotate90"})})),64))]),Object(n["i"])(r,{class:"headlineContainer"},{default:Object(n["E"])((function(){return[Object(n["i"])(r,{class:"headlinerInner"},{default:Object(n["E"])((function(){return[Kt,Wt]})),_:1})]})),_:1})])}var Gt={data:function(){return{}},mounted:function(){var t=document.getElementById("run90").getElementsByTagName("div"),e=1,c=0;function n(){t[e].classList.add("addNoise"),e++,t[c].classList.remove("addNoise"),c++,e>63&&(e=1,c=0),setTimeout(n,240)}n()}};c("952e");const Vt=h()(Gt,[["render",Yt]]);var Qt=Vt,Ut={name:"Home",components:{LandingPageTokyo:D,ColumnTwo:Q,Columns:Dt,Div90Degree:Qt}};const Xt=h()(Ut,[["render",P]]);var $t=Xt,te={class:"about"},ee=Object(n["f"])("h1",null,"This is an about page",-1),ce=[ee];function ne(t,e){return Object(n["s"])(),Object(n["e"])("div",te,ce)}const ae={},ie=h()(ae,[["render",ne]]);var oe=ie,re={class:"portolio"};function se(t,e,c,a,i,o){var r=Object(n["z"])("JapanRandomText");return Object(n["s"])(),Object(n["e"])("div",re,[Object(n["i"])(r)])}var le={id:"JapanRandomText"},fe=Object(n["f"])("div",{class:"imgContainer"},[Object(n["f"])("div",{id:"appendContainer",class:"writeContainer"})],-1),de=[fe];function ue(t,e,c,a,i,o){return Object(n["s"])(),Object(n["e"])("div",le,de)}c("fb6a");var be={data:function(){return{}},mounted:function(){function t(){for(var t=[["Cherry Blossom ","さくらのはな "],["Fearless ","ごうたんな "],["Snow ","ゆき "],["Love ","あい "],["Rebel ","はんぎゃくしゃ "],["Flower ","はな "],["Bankai ","バンカイ "],["Cute ","かわいい "],["Kamehameha ","かめはめ波 "],["Sugoi ","すごい "],["Senpai ","せんぱい "],["Pirate ","パイレーツ "],["Oniisan ","お兄さん "],["Daijōbu ","大丈夫 "],["Otaku ","おたく "],["Speed ","スピード "],["Fire ","火の手 "],["Konnichiwa ","こんにちは "],["Shinigami ","しにがみ "],["Invasion ","しんりゃく "],["Dragon ","ドラゴン "],["Princess ","王女 "],["Hadouken ","はどうけん "],["Super ","素晴らしい "],["Enemy ","エネミー "],["Revenge ","ふくしゅう "]],e=[],c=0;c<t.length;c++)e[c]=[0,"","",0,0];for(var n=0;n<t.length;n++)document.getElementById("appendContainer").innerHTML+='<h3 class="typing"></h3>';function a(e,c,n,i){setTimeout((function(){0!==e[c][3]&&1!==e[c][3]||e[c][4]<t[c][e[c][3]].length&&(e[c][1]=t[c][e[c][3]],e[c][2]=e[c][1].slice(0,++e[c][0]),document.getElementsByClassName("typing")[c].textContent=e[c][2],document.getElementsByClassName("typing")[c].style.right=n+"%",document.getElementsByClassName("typing")[c].style.top=i+"%",1===e[c][3]&&e[c][2]===t[c][e[c][3]]&&(e[c][0]=0,e[c][1]="",e[c][2]="",e[c][3]=0,e[c][4]=-1)),0===e[c][3]&&e[c][4]>=t[c][e[c][3]].length&&(e[c][1]=t[c][e[c][3]],e[c][2]=e[c][1].slice(0,--e[c][0]),document.getElementsByClassName("typing")[c].textContent=e[c][2],0===e[c][2].length&&0===e[c][3]&&(e[c][3]++,e[c][4]=-1)),e[c][4]++,e[c][4]<2*t[0][e[c][3]].length&&a(e,c,n,i)}),550)}for(var i=0,o=0,r=90/t.length,s=0;s<e.length;s++){var l=Math.floor(65*Math.random());i=l,o+=r,a(e,s,i,o)}}t()}};c("920a");const me=h()(be,[["render",ue]]);var ge=me,pe={id:"fontAwesome"},ve=["src"],je=Object(n["f"])("div",{id:"fontImgContainer"},null,-1);function Oe(t,e,c,a,i,o){return Object(n["s"])(),Object(n["e"])("div",pe,[Object(n["f"])("img",{src:i.imgPath,alt:""},null,8,ve),je])}var he={data:function(){return{imgPath:c("3d88")}},mounted:function(){function t(t){var e=["fa-heart","fa-star","fa-glass-martini-alt","fa-grin-beam-sweat","fa-grin-hearts","fa-gem","fa-umbrella","fa-gripfire","fa-snowflake","fa-ghost","fa-wind"],c=Math.floor(Math.random()*e.length),n=Math.floor(100*Math.random()),a=Math.floor(256*Math.random()),i=Math.floor(256*Math.random()),o=Math.floor(256*Math.random());document.getElementById("fontImgContainer").innerHTML+='<i id="fas'+t+'" class="fas '+e[c]+'" style="left:'+n+"%; color:rgb("+a+","+i+","+o+');"></i>';var r=document.getElementById("fontAwesome").offsetHeight,s="fas"+t;console.log(s);var l=Math.floor(442*Math.random()),f=0-l;function d(){if(f>r){var t=document.getElementById(s);n=Math.floor(100*Math.random()),a=Math.floor(256*Math.random()),i=Math.floor(256*Math.random()),o=Math.floor(256*Math.random()),t.style.color="rgb("+a+","+i+","+o+")",t.style.left=n+"%",t.style.bottom="0px",f=0}else{f++,r=document.getElementById("fontAwesome").offsetHeight;t=document.getElementById(s);t.style.bottom=f+"%"}}setInterval(d,40)}for(var e=0;e<33;e++)t(e)}};c("de57");const ye=h()(he,[["render",Oe]]);var Ce=ye,we={name:"Portolio",components:{JapanRandomText:ge,FontAwesome:Ce}};const Me=h()(we,[["render",se]]);var xe=Me;const ke={},ze=ke;var Ee=ze,Ne=function(t){return Object(n["v"])("data-v-46fae537"),t=t(),Object(n["t"])(),t},Te={id:"section_NotFound"},Le=Object(n["g"])('<div id="notFoundContainer" data-v-46fae537><div id="notFound" data-v-46fae537><h1 id="not404" data-v-46fae537>404</h1><h1 data-v-46fae537>PAGE NOT FOUND</h1></div></div><div class="starClass" id="stars" data-v-46fae537></div><div class="starClass" id="stars2" data-v-46fae537></div><div class="starClass" id="stars3" data-v-46fae537></div>',4),_e=Ne((function(){return Object(n["f"])("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 311.5 430.5","enable-background":"new 0 0 311.5 430.5","xml:space":"preserve"},[Object(n["f"])("g",{id:"Layer_2"},[Object(n["f"])("g",null,[Object(n["f"])("path",{d:"M48.8,333c-1.2-0.3-2.1-0.6-3-0.9c-0.9-0.3-1.8-0.6-2.9-1c-2.4,5.8-6.4,10.1-12.5,12c-4.3,1.4-8.7,1.2-12.9-0.5\r\n\t\t\tc-4.7-1.9-8.2-5.3-10.3-9.9c-2.1-4.5-2.1-9.3-0.7-14.2c-2.1-0.8-4.2-1.6-6.4-2.4c1.3-3.8,2.5-7.6,3.8-11.4c3-8.8,6-17.5,9.1-26.2\r\n\t\t\tc7.5-21.6,15-43.3,22.5-64.9c2.8-8,5.4-16,8.3-24c0.5-1.4,1.5-2.5,2.1-3.9c3.8-9,9.1-17,15.5-24.4c4.7-5.5,10-10.3,15.7-14.7\r\n\t\t\tc0.8-0.6,1.5-1.2,2.4-1.9c-0.6-1-1.2-2-1.9-3c-5.4-7.8-9.3-16.4-11.9-25.5c-2.3-8.2-3.4-16.5-3.4-25c0-12.5,2.5-24.4,7.4-35.8\r\n\t\t\tc4.8-11,11.5-20.6,20.1-28.9c13.4-13,29.3-21.3,47.5-24.8c21.1-4,41.5-1.6,60.9,7.9c13.4,6.5,24.5,15.8,33.5,27.7\r\n\t\t\tc9,11.9,14.6,25.2,17,39.9c1.3,7.6,1.4,15.3,0.7,22.9c-1.5,15.3-6.5,29.4-15.3,42c-0.5,0.8-1.1,1.6-1.7,2.6c0.7,0.5,1.3,1.1,2,1.6\r\n\t\t\tc11,8.4,20.2,18.3,27,30.4c1.5,2.6,2.5,5.3,4,7.9c4.3,7.4,6.2,15.8,9.1,23.7c7.4,21,14.6,42.1,21.8,63.1\r\n\t\t\tc5,14.4,9.9,28.8,14.9,43.2c0.1,0.4,0.2,0.8,0.4,1.4c-2.1,0.8-4.2,1.5-6.4,2.4c1.8,6.1,1.3,11.9-2.4,17.1c-2.5,3.6-5.8,6.1-10,7.5\r\n\t\t\tc-7.6,2.4-18.5,0.5-24.1-12c-1.8,0.6-3.7,1.1-5.8,1.8c-6.2-17.9-12.3-35.6-18.4-53.3c-6.1-17.6-12.2-35.3-18.2-52.9\r\n\t\t\tc-0.2,0-0.4,0.1-0.6,0.1c0,33.9,0,67.8,0,101.7c0,33.9,0,67.8,0,101.8c-46.6,0-93.1,0-139.8,0c0-67.6,0-135.2,0-202.8\r\n\t\t\tc-0.2,0-0.4-0.1-0.6-0.1C73,262.7,60.9,297.8,48.8,333z M228.3,150c-19.7,21.7-43.6,33-72.7,33c-29-0.1-52.9-11.5-72.1-32.9\r\n\t\t\tc-0.4,0.2-0.6,0.3-0.8,0.5c-0.4,0.3-0.8,0.6-1.2,0.8c-6.7,5-12.7,10.7-17.9,17.3c-5.9,7.5-11,15.5-13.6,24.8c-0.6,2-1.2,4-1.8,5.9\r\n\t\t\tc-2.3,6.6-4.6,13.1-6.9,19.7c-6.1,17.6-12.1,35.2-18.2,52.7c-3.8,10.9-7.5,21.7-11.3,32.6c-0.8,2.4-1.6,4.8-2.4,7.3\r\n\t\t\tc11.6,4,23.1,8,34.6,11.9c11.8-34.1,23.4-67.9,35.1-101.6c4.7,0,9.2,0,13.9,0c0,64.5,0,128.8,0,193.5c9.5-4.9,19.3-6.4,29.4-6.5\r\n\t\t\tc10.2,0,20.1,1.4,29.7,6.2c0-24.1,0-47.8,0-71.6c2.6,0.1,4.9-0.3,7.5,0.3c0,23.7,0,47.3,0,71c19.6-8,38.9-8,58.6,0.1\r\n\t\t\tc0-64.4,0-128.6,0-192.9c4.8,0,9.4,0,14.1,0c11.7,33.9,23.3,67.7,35.1,101.6c11.6-4,23.2-7.9,34.6-12c-0.7-2.1-1.3-4-1.9-5.8\r\n\t\t\tc-7-20.4-14.1-40.7-21.1-61.1c-2.9-8.3-5.8-16.6-8.6-24.9c-2.7-7.8-5.3-15.7-8-23.6c-1.4-3.9-2.6-7.9-4.4-11.6\r\n\t\t\tc-4.9-10.3-12-19-20.3-26.8C234.8,155.2,231.6,152.7,228.3,150z M240.5,90.7c-0.1-1.6-0.3-4.1-0.5-6.7c-0.6-7.9-2.6-15.6-5.6-22.9\r\n\t\t\tc-4.8-11.6-11.9-21.6-21.3-30c-7.2-6.5-15.2-11.6-24.2-15.3c-11.5-4.7-23.5-6.8-36-6.4c-12.6,0.4-24.5,3.4-35.7,9\r\n\t\t\tc-9.4,4.7-17.7,11-24.8,18.9c-12.6,14-19.5,30.4-20.9,49c-0.7,9.3,0.3,18.5,3,27.4C82,138,97.3,155.3,120.1,166\r\n\t\t\tc15.6,7.3,32.1,9.4,49.1,6.8c20.5-3.2,37.7-12.6,51.4-28.3C233.6,129.4,240.1,111.7,240.5,90.7z M152.1,423.1\r\n\t\t\tc-3.3-2.9-6.8-4.3-10.4-5.3c-8.8-2.6-17.9-3.1-27-2.1c-5.3,0.6-10.4,1.7-15.3,3.8c-2,0.9-3.8,1.8-5.7,3.7\r\n\t\t\tC113.3,423.1,132.4,423.1,152.1,423.1z M218.1,423.1c-3.3-2.9-6.8-4.3-10.4-5.3c-8.8-2.6-17.9-3.1-27-2.1\r\n\t\t\tc-5.3,0.6-10.4,1.7-15.3,3.8c-2,0.9-3.8,1.8-5.6,3.7C179.3,423.1,198.4,423.1,218.1,423.1z M35.4,328.5\r\n\t\t\tc-7.1-2.5-14.2-4.9-21.3-7.3c-2.6,5.1,0.7,12.6,6.8,14.6C26.9,337.9,33.6,334.7,35.4,328.5z M276.1,328.6c1.4,5.4,8.5,10,15.5,6.9\r\n\t\t\tc5.5-2.5,8.4-9.3,5.8-14.3C290.4,323.7,283.2,326.1,276.1,328.6z"}),Object(n["f"])("path",{d:"M123.8,286.6c0-23.7,0-47.3,0-71c21.7,0,43.2,0,64.7,0c0.5,1.7,0.6,68.1,0.1,71C167.1,286.6,145.6,286.6,123.8,286.6z\r\n\t\t\t M182.6,280.3c0-19.6,0-39,0-58.3c-2.6-0.5-50.7-0.4-52.5,0.1c0,19.4,0,38.8,0,58.3C147.6,280.3,165,280.3,182.6,280.3z"}),Object(n["f"])("path",{d:"M156.1,47.6c5.5,0,11,0,16.5,0c1.2,0,2.4,0.3,3.6,0.4c2.2,0.3,4.4,0.5,6.6,0.8c1.6,0.3,3.2,0.8,4.9,1.1\r\n\t\t\tc3.7,0.6,7.2,1.6,10.8,2.7c6.6,1.9,12.6,4.8,18.2,8.5c3.9,2.6,6.8,6.2,8.5,10.6c0.8,2.1,1.8,4,2.4,6.2c0.7,2.8,1.4,5.6,1.6,8.4\r\n\t\t\tc0.2,5.9,0.1,11.8,0,17.7c0,1.3-0.4,2.5-0.6,3.8c-0.2,1.2-0.4,2.5-0.7,3.7c-0.1,0.6-0.2,1.3-0.4,1.9c-0.7,2.1-1.6,4.1-2.1,6.3\r\n\t\t\tc-1,3.8-2.8,7.2-4.6,10.6c-2.4,4.6-5.4,8.8-8.8,12.6c-4.4,4.8-9.1,9.2-14.7,12.8c-3.6,2.3-7.3,4.4-11.2,6.1\r\n\t\t\tc-3.2,1.4-6.6,2-9.9,3.2c-3.9,1.4-8.1,1.7-12.2,2.1c-6.6,0.8-13.2,0.9-19.7-0.5c-0.9-0.2-1.7-0.4-2.6-0.4c-3,0.3-5.7-0.9-8.4-1.7\r\n\t\t\tc-6.6-2-12.8-4.8-18.6-8.6c-7-4.5-12.8-10.1-18-16.6c-3.5-4.4-6.3-9.3-8.6-14.5c-1.3-2.9-2.2-6.1-3.1-9.2\r\n\t\t\tc-0.8-2.9-1.6-5.8-2.1-8.8c-0.4-2.4-0.5-4.9-0.5-7.4c0-4.5,0.1-8.9,0.2-13.4c0-1,0.3-2,0.5-3c0.2-1.2,0.4-2.5,0.7-3.7\r\n\t\t\tc0.5-1.8,0.9-3.6,1.6-5.2c1.3-3.1,2.7-6.2,5-8.8c2.5-2.9,5.5-5,8.8-6.8c2.6-1.4,5.2-2.7,7.9-3.9c1.8-0.8,3.7-1.3,5.6-1.9\r\n\t\t\tc2.4-0.8,4.8-1.5,7.3-2.2c0.5-0.2,1.1-0.2,1.6-0.3c1.5-0.3,2.9-0.6,4.4-0.9c0.9-0.2,1.9-0.4,2.8-0.5c2.3-0.3,4.6-0.6,6.9-0.8\r\n\t\t\tc1.8-0.2,3.6-0.4,5.5-0.4C146.2,47.6,151.1,47.6,156.1,47.6z"}),Object(n["f"])("path",{d:"M169.1,229.7c0,1.7,0,3.2,0,5c-11.8,0-23.6,0-35.5,0c0-1.6,0-3.2,0-5C145.5,229.7,157.2,229.7,169.1,229.7z"}),Object(n["f"])("path",{d:"M161.4,241.7c0,1.7,0,3.2,0,5c-9.3,0-18.5,0-27.9,0c0-1.6,0-3.2,0-5C142.9,241.7,152.1,241.7,161.4,241.7z"}),Object(n["f"])("path",{d:"M161.4,253.5c0.1,0.8,0.1,1.5,0.1,2.2c0,0.9,0,1.7,0,2.7c-9.5,0-18.7,0-28,0c0-1.7,0-3.2,0-5\r\n\t\t\tC142.9,253.5,152.1,253.5,161.4,253.5z"}),Object(n["f"])("path",{d:"M161.4,265.5c0,1.7,0,3.3,0,5c-9.3,0-18.6,0-27.9,0c0-1.7,0-3.3,0-5C142.9,265.5,152.1,265.5,161.4,265.5z"}),Object(n["f"])("path",{d:"M178.4,232.4c0,1.8-1.1,2.8-2.9,2.7c-1.5,0-2.7-1.3-2.7-2.7c0-1.6,1.2-2.8,2.9-2.8C177.4,229.6,178.4,230.6,178.4,232.4z"}),Object(n["f"])("path",{d:"M175.5,265.1c1.8-0.1,2.8,0.9,2.8,2.7c0,1.8-0.9,2.7-2.5,2.8c-1.6,0.1-3-1.1-3.1-2.6C172.7,266.4,173.9,265.1,175.5,265.1\r\n\t\t\tz"}),Object(n["f"])("path",{d:"M175.8,258.8c-1.6,0.1-3-1.2-3-2.7c-0.1-1.5,1.3-2.9,2.8-3c1.6-0.1,2.7,1.1,2.8,2.9C178.4,257.6,177.3,258.8,175.8,258.8z\r\n\t\t\t"}),Object(n["f"])("path",{d:"M175.6,241.4c1.6-0.1,2.7,1,2.8,2.6c0.1,1.7-1,3.1-2.5,3.1c-1.5,0.1-3-1.3-3-2.8C172.7,242.7,174,241.4,175.6,241.4z"}),Object(n["f"])("path",{d:"M164.9,244c0-1.7,1.1-2.7,2.7-2.7c1.7,0,2.8,1.2,2.8,2.9c0,1.7-1.2,2.9-2.8,2.8C165.9,247,164.9,245.8,164.9,244z"}),Object(n["f"])("path",{d:"M170.4,256c0,1.7-1.1,2.9-2.8,2.9c-1.6,0-2.6-1-2.6-2.7c0-1.8,1-3,2.6-3C169.2,253,170.4,254.3,170.4,256z"}),Object(n["f"])("path",{d:"M167.7,265.1c1.7,0,2.7,1.2,2.7,3c-0.1,1.6-1.2,2.6-2.8,2.6c-1.6,0-2.6-1.1-2.6-2.7C164.9,266,165.9,265.1,167.7,265.1z"})])])],-1)})),Be=[Le,_e];function Se(t,e){return Object(n["s"])(),Object(n["e"])("div",Te,Be)}c("a9c0");const Pe={},qe=h()(Pe,[["render",Se],["__scopeId","data-v-46fae537"]]);var Fe=qe,Ie=[{path:"/",name:"Home",component:$t},{path:"/about",name:"About",component:oe},{path:"/portolio",name:"Portolio",component:xe},{path:"/contact",name:"Contact",component:Ee},{path:"/:catchAll(.*)",name:"NotFound404",component:Fe}],He=Object(B["a"])({history:Object(B["b"])("/vue-japan/"),routes:Ie}),Ae=He;Object(n["d"])(_).use(Ae).mount("#app")},"621f":function(t,e,c){t.exports=c.p+"img/b2.ce5e5d75.jpg"},"6ae9":function(t,e,c){},"6d06":function(t,e,c){t.exports=c.p+"img/b14.7660d98f.jpg"},"71a7":function(t,e,c){t.exports=c.p+"img/b1.7588b8a9.jpg"},"72b4":function(t,e,c){t.exports=c.p+"img/b17.5d363060.jpg"},7769:function(t,e,c){t.exports=c.p+"img/b13.ce2634fe.jpg"},"84a8":function(t,e,c){},"91aa":function(t,e,c){},"920a":function(t,e,c){"use strict";c("ff83")},9526:function(t,e,c){t.exports=c.p+"img/b8.956f5c02.jpg"},"952e":function(t,e,c){"use strict";c("9bf9")},9558:function(t,e,c){"use strict";c("84a8")},"9bf9":function(t,e,c){},a6c7:function(t,e,c){t.exports=c.p+"img/b7.0a66df6e.jpg"},a83a:function(t,e,c){t.exports=c.p+"img/b5.115cc719.jpg"},a9c0:function(t,e,c){"use strict";c("6ae9")},a9f8:function(t,e,c){"use strict";c("18a1")},aaea:function(t,e,c){t.exports=c.p+"img/b3.63a3d4f1.jpg"},cb4b:function(t,e,c){t.exports=c.p+"img/b15.331eabf6.jpg"},cd1e:function(t,e,c){},ce86:function(t,e,c){t.exports=c.p+"img/b6.022217b6.jpg"},cf05:function(t,e,c){t.exports=c.p+"img/logo.de045bdc.png"},d42e:function(t,e,c){t.exports=c.p+"img/b9.63edff8f.jpg"},d592:function(t,e,c){t.exports=c.p+"img/b12.24561985.jpg"},dc04:function(t,e,c){},de57:function(t,e,c){"use strict";c("208e")},e9aa:function(t,e,c){t.exports=c.p+"img/b19.a797e93e.jpg"},ea67:function(t,e,c){t.exports=c.p+"img/b20.620e15f6.jpg"},f505:function(t,e,c){t.exports=c.p+"img/b18.32e2cca5.jpg"},ff83:function(t,e,c){}});
//# sourceMappingURL=app.f6bf6ca3.js.map