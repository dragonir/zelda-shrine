import{r as m,o as h,b as g,e as p,f as d,g as y,t as v,j as w,k as L,l as P,m as R}from"./@vue/@vue.f12c5e7d.js";import{c as b,a as E}from"./vendor/vendor.d927beba.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(o){if(o.ep)return;o.ep=!0;const t=e(o);fetch(o.href,t)}})();const k=[new URL(""+new URL("px-09c44bc0.jpg",import.meta.url).href,self.location).href,new URL(""+new URL("nx-87600fc2.jpg",import.meta.url).href,self.location).href,new URL(""+new URL("py-4a145873.jpg",import.meta.url).href,self.location).href,new URL(""+new URL("ny-8e235718.jpg",import.meta.url).href,self.location).href,new URL(""+new URL("pz-8001fb60.jpg",import.meta.url).href,self.location).href,new URL(""+new URL("nz-3edf24d3.jpg",import.meta.url).href,self.location).href];class U{constructor(){this.data=[],this.self={},this.load={},this.setupSelf(),this.setupLoad()}setupSelf(){const n=this,e={};e.allType={image:["jpg","png"],json:["json"],audio:["mp3"]},e.getType=function(r){const o=r.match(/[^\.]+$/)[0];let t=null;for(let s in e.allType)if(e.allType[s].join(",").indexOf(o)!==-1){t=s;break}else t="nonsupport";return t},e.setData=function(r){const o=[];r.forEach(function(t,s,u){const f=t.url||t,c=e.getType(f),l=t.callback||null;o.push({url:f,type:c,callback:l})}),this.data=o,n.data=o},this.self=e}setupLoad(){const n=this,e={};e.events={start:null,loading:null,complete:null,error:null},e.on=function(r,o){e.events[r]=o},e.off=function(r){e.events[r]=null},e.start=function(r){const o=r||n.data;e.nowProgress=0,e.allProgress=o.length,e._runEvent("start"),o.forEach(function(t,s,u){t.type!=="nonsupport"&&e[`_${t.type}`](t)})},e._complete=function(r,o){r.callback&&r.callback(o),e.nowProgress++,e._runEvent("loading"),e._runEvent("complete")},e._error=function(r,o){e._runEvent("error")},e._runEvent=function(r){switch(r){case"start":e.events.start&&e.start();break;case"loading":e.events.loading&&e.events.loading({nowProgress:e.nowProgress,allProgress:e.allProgress});break;case"complete":e.events.complete&&e.nowProgress===e.allProgress&&e.events.complete();break;case"error":e.events.error&&e.events.error();break}},e._get=function(r,o){const t=new XMLHttpRequest;t.open("post",r.url,!0),t.responseType=o,t.send(),t.onload=function(s){e._complete(r,s.currentTarget.response)},t.onerror=function(s){console.log(`error:${s}`)}},e._image=function(r){const o=new Image;o.src=r.url,o.onload=function(t){e._complete(r,t)},o.error=function(t){e.error(r,t)}},e._json=function(r){e._get(r,"json")},e._audio=function(r){e._get(r,"arraybuffer")},this.load=e}}const j=(a,n)=>{const e=a.__vccOpts||a;for(const[r,o]of n)e[r]=o;return e},B={class:"layout"},O={key:0,class:"loading"},x={class:"progress"},T={__name:"Layout",setup(a){const n=m({loadingComplete:!1,percentBefore:0,percent:0});return h(()=>{const e=new U;e.self.setData(k),e.load.start(),e.load.on("loading",function(o){n.percentBefore=0+Math.floor(o.nowProgress/o.allProgress*100)}),e.load.on("complete",function(){});const r=setInterval(()=>{n.percent>=100&&(clearInterval(r),n.loadingComplete=!0),n.percent<n.percentBefore&&n.percent++},20)}),(e,r)=>{const o=g("router-view");return p(),d("div",B,[n.loadingComplete?w("",!0):(p(),d("div",O,[y("span",x,v(`${n.percent}%`),1)])),L(o)])}}},C=j(T,[["__scopeId","data-v-1d81946e"]]),S={__name:"App",setup(a){return(n,e)=>(p(),P(C))}},$="modulepreload",N=function(a,n){return new URL(a,n).href},_={},I=function(n,e,r){if(!e||e.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(e.map(t=>{if(t=N(t,r),t in _)return;_[t]=!0;const s=t.endsWith(".css"),u=s?'[rel="stylesheet"]':"";if(!!r)for(let l=o.length-1;l>=0;l--){const i=o[l];if(i.href===t&&(!s||i.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${u}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":$,s||(c.as="script",c.crossOrigin=""),c.href=t,document.head.appendChild(c),s)return new Promise((l,i)=>{c.addEventListener("load",l),c.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>n()).catch(t=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=t,window.dispatchEvent(s),!s.defaultPrevented)throw t})},A=[{path:"/",name:"home",component:()=>I(()=>import("./home/index.daa5514f.js"),["./home\\index.daa5514f.js","./three\\three.3855f573.js","./vendor\\vendor.d927beba.js","./@vue\\@vue.f12c5e7d.js","./index-89322fce.css"],import.meta.url)}],D=b({history:E(),routes:A}),V=R(S);V.use(D).mount("#app");export{j as _};