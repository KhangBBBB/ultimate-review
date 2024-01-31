var ae=Object.defineProperty;var de=(t,e,n)=>e in t?ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var D=(t,e,n)=>(de(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function k(){}function se(t){return t()}function X(){return Object.create(null)}function N(t){t.forEach(se)}function ce(t){return typeof t=="function"}function z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function he(t){return Object.keys(t).length===0}function h(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode&&t.parentNode.removeChild(t)}function K(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function P(){return $(" ")}function fe(){return $("")}function x(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function me(t){return Array.from(t.childNodes)}function S(t,e){e=""+e,t.data!==e&&(t.data=e)}function A(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}let Q;function I(t){Q=t}const E=[],Y=[];let L=[];const Z=[],pe=Promise.resolve();let F=!1;function _e(){F||(F=!0,pe.then(ue))}function G(t){L.push(t)}const W=new Set;let q=0;function ue(){if(q!==0)return;const t=Q;do{try{for(;q<E.length;){const e=E[q];q++,I(e),ge(e.$$)}}catch(e){throw E.length=0,q=0,e}for(I(null),E.length=0,q=0;Y.length;)Y.pop()();for(let e=0;e<L.length;e+=1){const n=L[e];W.has(n)||(W.add(n),n())}L.length=0}while(E.length);for(;Z.length;)Z.pop()();F=!1,W.clear(),I(t)}function ge(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}function we(t){const e=[],n=[];L.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),L=e}const B=new Set;let y;function R(){y={r:0,c:[],p:y}}function V(){y.r||N(y.c),y=y.p}function m(t,e){t&&t.i&&(B.delete(t),t.i(e))}function b(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),y.c.push(()=>{B.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function C(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function H(t){t&&t.c()}function j(t,e,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),G(()=>{const c=t.$$.on_mount.map(se).filter(ce);t.$$.on_destroy?t.$$.on_destroy.push(...c):N(c),t.$$.on_mount=[]}),o.forEach(G)}function M(t,e){const n=t.$$;n.fragment!==null&&(we(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function be(t,e){t.$$.dirty[0]===-1&&(E.push(t),_e(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(t,e,n,r,o,c,d=null,u=[-1]){const f=Q;I(t);const l=t.$$={fragment:null,ctx:[],props:c,update:k,not_equal:o,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:X(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};d&&d(l.root);let i=!1;if(l.ctx=n?n(t,e.props||{},(a,s,...p)=>{const J=p.length?p[0]:s;return l.ctx&&o(l.ctx[a],l.ctx[a]=J)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](J),i&&be(t,a)),s}):[],l.update(),i=!0,N(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const a=me(e.target);l.fragment&&l.fragment.l(a),a.forEach(_)}else l.fragment&&l.fragment.c();e.intro&&m(t.$$.fragment),j(t,e.target,e.anchor),ue()}I(f)}class U{constructor(){D(this,"$$");D(this,"$$set")}$destroy(){M(this,1),this.$destroy=k}$on(e,n){if(!ce(n))return k;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!he(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $e="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add($e);const O=[{title:"Lecture 2",flashcards:[{question:"What is an operating system?",answer:"Operating system is a program that acts as an intermediary between a user of a computer and the computer hardware."},{question:"What are operating system goals?",answer:`* Execute user programs and make solving user problems easier.
* Make the computer system convenient to use.
* Use the computer hardware in an efficient manner.`}]},{title:"Lecture 3",flashcards:[{question:"What are the different user interfaces in operating systems?",answer:"Command-Line (CLI), Graphical User Interface (GUI), Batch"}]}];function ye(t){let e;return{c(){e=$(t[0])},m(n,r){g(n,e,r)},p(n,r){r&1&&S(e,n[0])},d(n){n&&_(e)}}}function ve(t){let e;return{c(){e=$(t[1])},m(n,r){g(n,e,r)},p(n,r){r&2&&S(e,n[1])},d(n){n&&_(e)}}}function ke(t){let e,n,r,o,c,d,u;function f(a,s){return a[2]?ve:ye}let l=f(t),i=l(t);return{c(){e=w("div"),n=w("div"),r=$(t[3]),o=P(),c=w("div"),i.c(),v(n,"class","question-answer svelte-1a4f33f"),A(c,"font-size","16px"),A(c,"white-space","pre-wrap"),A(c,"text-align","left"),v(e,"class","flashcard svelte-1a4f33f")},m(a,s){g(a,e,s),h(e,n),h(n,r),h(e,o),h(e,c),i.m(c,null),d||(u=[x(e,"click",t[4]),x(e,"keypress",t[4])],d=!0)},p(a,[s]){s&8&&S(r,a[3]),l===(l=f(a))&&i?i.p(a,s):(i.d(1),i=l(a),i&&(i.c(),i.m(c,null)))},i:k,o:k,d(a){a&&_(e),i.d(),d=!1,N(u)}}}function qe(t,e,n){let r,{question:o}=e,{answer:c}=e,d=!1;function u(){d&&n(2,d=!1)}function f(){n(2,d=!d)}return t.$$set=l=>{"question"in l&&n(0,o=l.question),"answer"in l&&n(1,c=l.answer)},t.$$.update=()=>{t.$$.dirty&4&&n(3,r=d?"Answer":"Question")},[o,c,d,r,f,u]}class Ee extends U{constructor(e){super(),T(this,e,qe,ke,z,{question:0,answer:1,resetState:5})}get resetState(){return this.$$.ctx[5]}}function ee(t,e,n){const r=t.slice();return r[1]=e[n].question,r[2]=e[n].answer,r}function te(t){let e,n;return e=new Ee({props:{question:t[1],answer:t[2]}}),{c(){H(e.$$.fragment)},m(r,o){j(e,r,o),n=!0},p(r,o){const c={};o&1&&(c.question=r[1]),o&1&&(c.answer=r[2]),e.$set(c)},i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){M(e,r)}}}function Oe(t){let e,n,r=t[0].title+"",o,c,d,u=C(t[0].flashcards),f=[];for(let i=0;i<u.length;i+=1)f[i]=te(ee(t,u,i));const l=i=>b(f[i],1,1,()=>{f[i]=null});return{c(){e=w("div"),n=w("h1"),o=$(r),c=P();for(let i=0;i<f.length;i+=1)f[i].c();v(n,"class","svelte-1l20dq8")},m(i,a){g(i,e,a),h(e,n),h(n,o),h(e,c);for(let s=0;s<f.length;s+=1)f[s]&&f[s].m(e,null);d=!0},p(i,[a]){if((!d||a&1)&&r!==(r=i[0].title+"")&&S(o,r),a&1){u=C(i[0].flashcards);let s;for(s=0;s<u.length;s+=1){const p=ee(i,u,s);f[s]?(f[s].p(p,a),m(f[s],1)):(f[s]=te(p),f[s].c(),m(f[s],1),f[s].m(e,null))}for(R(),s=u.length;s<f.length;s+=1)l(s);V()}},i(i){if(!d){for(let a=0;a<u.length;a+=1)m(f[a]);d=!0}},o(i){f=f.filter(Boolean);for(let a=0;a<f.length;a+=1)b(f[a]);d=!1},d(i){i&&_(e),K(f,i)}}}function Le(t,e,n){let{topic:r}=e;return t.$$set=o=>{"topic"in o&&n(0,r=o.topic)},[r]}class Ce extends U{constructor(e){super(),T(this,e,Le,Oe,z,{topic:0})}}function ne(t,e,n){const r=t.slice();return r[5]=e[n],r}function re(t){let e,n=t[5].label+"",r,o,c,d;function u(){return t[4](t[5])}return{c(){e=w("button"),r=$(n),o=P(),v(e,"class","dropdown-item svelte-fzmks0")},m(f,l){g(f,e,l),h(e,r),h(e,o),c||(d=x(e,"click",u),c=!0)},p(f,l){t=f,l&2&&n!==(n=t[5].label+"")&&S(r,n)},d(f){f&&_(e),c=!1,d()}}}function Ne(t){let e,n,r,o,c,d,u,f=C(t[1]),l=[];for(let i=0;i<f.length;i+=1)l[i]=re(ne(t,f,i));return{c(){e=w("div"),n=w("button"),r=$(t[0]),o=P(),c=w("div");for(let i=0;i<l.length;i+=1)l[i].c();v(n,"class","dropdown-button svelte-fzmks0"),v(c,"class","dropdown-content svelte-fzmks0"),A(c,"display",t[2]?"block":"none"),v(e,"class","dropdown svelte-fzmks0")},m(i,a){g(i,e,a),h(e,n),h(n,r),h(e,o),h(e,c);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(c,null);d||(u=x(n,"click",t[3]),d=!0)},p(i,[a]){if(a&1&&S(r,i[0]),a&6){f=C(i[1]);let s;for(s=0;s<f.length;s+=1){const p=ne(i,f,s);l[s]?l[s].p(p,a):(l[s]=re(p),l[s].c(),l[s].m(c,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=f.length}a&4&&A(c,"display",i[2]?"block":"none")},i:k,o:k,d(i){i&&_(e),K(l,i),d=!1,u()}}}function Se(t,e,n){let{label:r}=e,{items:o}=e,c=!1;function d(){n(2,c=!c)}const u=f=>{f.onClick(),n(2,c=!1)};return t.$$set=f=>{"label"in f&&n(0,r=f.label),"items"in f&&n(1,o=f.items)},[r,o,c,d,u]}class Ae extends U{constructor(e){super(),T(this,e,Se,Ne,z,{label:0,items:1})}}function le(t,e,n){const r=t.slice();return r[4]=e[n],r[1]=n,r}function oe(t){let e,n;return e=new Ce({props:{topic:t[4]}}),{c(){H(e.$$.fragment)},m(r,o){j(e,r,o),n=!0},i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){M(e,r)}}}function ie(t){let e,n,r=t[0]===t[1]&&oe(t);return{c(){r&&r.c(),e=fe()},m(o,c){r&&r.m(o,c),g(o,e,c),n=!0},p(o,c){o[0]===o[1]?r?c&1&&m(r,1):(r=oe(o),r.c(),m(r,1),r.m(e.parentNode,e)):r&&(R(),b(r,1,1,()=>{r=null}),V())},i(o){n||(m(r),n=!0)},o(o){b(r),n=!1},d(o){o&&_(e),r&&r.d(o)}}}function Ie(t){let e,n,r,o,c;n=new Ae({props:{label:"Select Topic",items:O.map(t[2])}});let d=C(O),u=[];for(let l=0;l<d.length;l+=1)u[l]=ie(le(t,d,l));const f=l=>b(u[l],1,1,()=>{u[l]=null});return{c(){e=w("div"),H(n.$$.fragment),r=P();for(let l=0;l<u.length;l+=1)u[l].c();o=fe()},m(l,i){g(l,e,i),j(n,e,null),g(l,r,i);for(let a=0;a<u.length;a+=1)u[a]&&u[a].m(l,i);g(l,o,i),c=!0},p(l,[i]){const a={};if(i&1&&(a.items=O.map(l[2])),n.$set(a),i&1){d=C(O);let s;for(s=0;s<d.length;s+=1){const p=le(l,d,s);u[s]?(u[s].p(p,i),m(u[s],1)):(u[s]=ie(p),u[s].c(),m(u[s],1),u[s].m(o.parentNode,o))}for(R(),s=d.length;s<u.length;s+=1)f(s);V()}},i(l){if(!c){m(n.$$.fragment,l);for(let i=0;i<d.length;i+=1)m(u[i]);c=!0}},o(l){b(n.$$.fragment,l),u=u.filter(Boolean);for(let i=0;i<u.length;i+=1)b(u[i]);c=!1},d(l){l&&(_(e),_(r),_(o)),M(n),K(u,l)}}}function Pe(t,e,n){O.map(d=>d.title);const r=O.map((d,u)=>u);let o=0;return[o,r,(d,u)=>({label:d.title,onClick:()=>{n(0,o=u)}})]}class Be extends U{constructor(e){super(),T(this,e,Pe,Ie,z,{})}}new Be({target:document.getElementById("app")});
