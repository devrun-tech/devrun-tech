function M(){}const yt=t=>t;function gt(t,e){for(const n in e)t[n]=e[n];return t}function rt(t){return t()}function Z(){return Object.create(null)}function E(t){t.forEach(rt)}function Q(t){return typeof t=="function"}function Kt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let L;function Qt(t,e){return L||(L=document.createElement("a")),L.href=e,t===L.href}function wt(t){return Object.keys(t).length===0}function bt(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ut(t,e,n){t.$$.on_destroy.push(bt(e,n))}function Vt(t,e,n,i){if(t){const s=st(t,e,n,i);return t[0](s)}}function st(t,e,n,i){return t[1]&&i?gt(n.ctx.slice(),t[1](i(e))):n.ctx}function Xt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Yt(t,e,n,i,s,l){if(s){const r=st(e,n,i,l);t.p(r,s)}}function Zt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function te(t,e,n){return t.set(n),e}const ot=typeof window<"u";let xt=ot?()=>window.performance.now():()=>Date.now(),U=ot?t=>requestAnimationFrame(t):M;const A=new Set;function ct(t){A.forEach(e=>{e.c(t)||(A.delete(e),e.f())}),A.size!==0&&U(ct)}function $t(t){let e;return A.size===0&&U(ct),{promise:new Promise(n=>{A.add(e={c:t,f:n})}),abort(){A.delete(e)}}}let I=!1;function vt(){I=!0}function Et(){I=!1}function kt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:kt(1,s,h=>e[n[h]].claim_order,u))-1;i[c]=n[f]+1;const d=f+1;n[d]=c,s=Math.max(d,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<l.length&&r[c].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(r[c],f)}}function lt(t,e){t.appendChild(e)}function ut(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function St(t){const e=X("style");return At(ut(t),e),e.sheet}function At(t,e){return lt(t.head||t,e),e.sheet}function Ct(t,e){if(I){for(Nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ee(t,e,n){I&&!n?Ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function ne(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Y(t){return document.createTextNode(t)}function ie(){return Y(" ")}function re(){return Y("")}function tt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function se(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function oe(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function ce(t){return t===""?null:+t}function jt(t){return Array.from(t.childNodes)}function zt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function at(t,e,n,i,s=!1){zt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ft(t,e,n,i){return at(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function le(t,e,n){return ft(t,e,n,X)}function ue(t,e,n){return ft(t,e,n,Mt)}function Ot(t,e){return at(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Y(e),!0)}function ae(t){return Ot(t," ")}function fe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function de(t,e){t.value=e??""}function _e(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let R;function Dt(){if(R===void 0){R=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{R=!0}}return R}function he(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=X("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Dt();let l;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=tt(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=tt(i.contentWindow,"resize",e),e()}),lt(t,i),()=>{(s||l&&i.contentWindow)&&l(),V(i)}}function me(t,e,n){t.classList[n?"add":"remove"](e)}function dt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function pe(t,e){return new t(e)}const W=new Map;let B=0;function Pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function qt(t,e){const n={stylesheet:St(e),rules:{}};return W.set(t,n),n}function et(t,e,n,i,s,l,r,o=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);u+=y*100+`%{${r(g,1-g)}}
`}const f=u+`100% {${r(n,1-n)}}
}`,d=`__svelte_${Pt(f)}_${o}`,h=ut(t),{stylesheet:a,rules:_}=W.get(h)||qt(h,t);_[d]||(_[d]=!0,a.insertRule(`@keyframes ${d} ${f}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${d} ${i}ms linear ${s}ms 1 both`,B+=1,d}function Lt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),B-=s,B||Rt())}function Rt(){U(()=>{B||(W.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&V(e)}),W.clear())})}let D;function O(t){D=t}function j(){if(!D)throw new Error("Function called outside component initialization");return D}function ye(t){j().$$.on_mount.push(t)}function ge(t){j().$$.after_update.push(t)}function we(t){j().$$.on_destroy.push(t)}function be(){const t=j();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=dt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function xe(t,e){return j().$$.context.set(t,e),e}function $e(t){return j().$$.context.get(t)}const S=[],nt=[];let C=[];const it=[],_t=Promise.resolve();let K=!1;function ht(){K||(K=!0,_t.then(mt))}function ve(){return ht(),_t}function F(t){C.push(t)}const G=new Set;let N=0;function mt(){if(N!==0)return;const t=D;do{try{for(;N<S.length;){const e=S[N];N++,O(e),Tt(e.$$)}}catch(e){throw S.length=0,N=0,e}for(O(null),S.length=0,N=0;nt.length;)nt.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];G.has(n)||(G.add(n),n())}C.length=0}while(S.length);for(;it.length;)it.pop()();K=!1,G.clear(),O(t)}function Tt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}function Wt(t){const e=[],n=[];C.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),C=e}let z;function Bt(){return z||(z=Promise.resolve(),z.then(()=>{z=null})),z}function J(t,e,n){t.dispatchEvent(dt(`${e?"intro":"outro"}${n}`))}const T=new Set;let x;function Ee(){x={r:0,c:[],p:x}}function ke(){x.r||E(x.c),x=x.p}function pt(t,e){t&&t.i&&(T.delete(t),t.i(e))}function Ft(t,e,n,i){if(t&&t.o){if(T.has(t))return;T.add(t),x.c.push(()=>{T.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const It={duration:0};function Ne(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,u=null;function f(){u&&Lt(t,u)}function d(a,_){const p=a.b-r;return _*=Math.abs(p),{a:r,b:a.b,d:p,duration:_,start:a.start,end:a.start+_,group:a.group}}function h(a){const{delay:_=0,duration:p=300,easing:y=yt,tick:g=M,css:$}=l||It,k={start:xt()+_,b:a};a||(k.group=x,x.r+=1),o||c?c=k:($&&(f(),u=et(t,r,a,p,_,y,$)),a&&g(0,1),o=d(k,p),F(()=>J(t,a,"start")),$t(v=>{if(c&&v>c.start&&(o=d(c,p),c=null,J(t,o.b,"start"),$&&(f(),u=et(t,r,o.b,o.duration,0,y,l.css))),o){if(v>=o.end)g(r=o.b,1-r),J(t,o.b,"end"),c||(o.b?f():--o.group.r||E(o.group.c)),o=null;else if(v>=o.start){const P=v-o.start;r=o.a+o.d*y(P/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(a){Q(l)?Bt().then(()=>{l=l(s),h(a)}):h(a)},end(){f(),o=c=null}}}function Se(t,e){Ft(t,1,1,()=>{e.delete(t.key)})}function Ae(t,e,n,i,s,l,r,o,c,u,f,d){let h=t.length,a=l.length,_=h;const p={};for(;_--;)p[t[_].key]=_;const y=[],g=new Map,$=new Map,k=[];for(_=a;_--;){const m=d(s,l,_),w=n(m);let b=r.get(w);b?i&&k.push(()=>b.p(m,e)):(b=u(w,m),b.c()),g.set(w,y[_]=b),w in p&&$.set(w,Math.abs(_-p[w]))}const v=new Set,P=new Set;function H(m){pt(m,1),m.m(o,f),r.set(m.key,m),f=m.first,a--}for(;h&&a;){const m=y[a-1],w=t[h-1],b=m.key,q=w.key;m===w?(f=m.first,h--,a--):g.has(q)?!r.has(b)||v.has(b)?H(m):P.has(q)?h--:$.get(b)>$.get(q)?(P.add(b),H(m)):(v.add(q),h--):(c(w,r),h--)}for(;h--;){const m=t[h];g.has(m.key)||c(m,r)}for(;a;)H(y[a-1]);return E(k),y}function Ce(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Me(t){return typeof t=="object"&&t!==null?t:{}}function je(t){t&&t.c()}function ze(t,e){t&&t.l(e)}function Ht(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||F(()=>{const r=t.$$.on_mount.map(rt).filter(Q);t.$$.on_destroy?t.$$.on_destroy.push(...r):E(r),t.$$.on_mount=[]}),l.forEach(F)}function Gt(t,e){const n=t.$$;n.fragment!==null&&(Wt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Jt(t,e){t.$$.dirty[0]===-1&&(S.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Oe(t,e,n,i,s,l,r,o=[-1]){const c=D;O(t);const u=t.$$={fragment:null,ctx:[],props:l,update:M,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Z(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(d,h,...a)=>{const _=a.length?a[0]:h;return u.ctx&&s(u.ctx[d],u.ctx[d]=_)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](_),f&&Jt(t,d)),h}):[],u.update(),f=!0,E(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){vt();const d=jt(e.target);u.fragment&&u.fragment.l(d),d.forEach(V)}else u.fragment&&u.fragment.c();e.intro&&pt(t.$$.fragment),Ht(t,e.target,e.anchor,e.customElement),Et(),mt()}O(c)}class De{$destroy(){Gt(this,1),this.$destroy=M}$on(e,n){if(!Q(n))return M;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!wt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{tt as $,Ht as A,Gt as B,Ct as C,M as D,Ut as E,yt as F,F as G,Ne as H,Qt as I,Vt as J,Yt as K,Zt as L,Xt as M,Ae as N,be as O,we as P,Se as Q,ne as R,De as S,te as T,xe as U,he as V,Mt as W,ue as X,$e as Y,me as Z,de as _,ie as a,E as a0,ce as a1,oe as a2,gt as a3,Ce as a4,Me as a5,bt as a6,Q as a7,ee as b,ae as c,Ft as d,re as e,ke as f,pt as g,V as h,Oe as i,ge as j,X as k,le as l,jt as m,se as n,ye as o,_e as p,Y as q,Ot as r,Kt as s,ve as t,fe as u,Ee as v,nt as w,pe as x,je as y,ze as z};
