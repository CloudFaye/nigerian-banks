var qn=Array.isArray,Xt=Array.prototype.indexOf,Yn=Array.from,Hn=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,tn=Object.getOwnPropertyDescriptors,jn=Object.prototype,Bn=Array.prototype,nn=Object.getPrototypeOf;function Un(t){return typeof t=="function"}const rn=()=>{};function Vn(t){return t()}function en(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,yt=4,j=8,at=16,m=32,J=64,tt=128,S=256,K=512,d=1024,R=2048,B=4096,b=8192,k=16384,sn=32768,wt=65536,Gn=1<<17,ln=1<<19,Tt=1<<20,pt=Symbol("$state"),Kn=Symbol("legacy props"),$n=Symbol("");function mt(t){return t===this.v}function an(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!an(t,this.v)}function un(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function on(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function _n(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Qn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function vn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Q=!1;function Wn(){Q=!0}const Xn=1,tr=2,nr=4,rr=8,er=16,sr=1,lr=2,ar=4,ur=8,or=16,ir=1,fr=2,_r=4,cr=1,vr=2,pn="[",hn="[!",dn="]",gt={},pr=Symbol();function ut(t,n){var r={f:0,v:t,reactions:null,equals:mt,rv:0,wv:0};return r}function hr(t){return It(ut(t))}function En(t,n=!1){var e;const r=ut(t);return n||(r.equals=At),Q&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function dr(t,n=!1){return It(En(t,n))}function It(t){return i!==null&&i.f&y&&(T===null?Dn([t]):T.push(t)),t}function xt(t,n){return i!==null&&_t()&&i.f&(y|at)&&(T===null||!T.includes(t))&&vn(),yn(t,n)}function yn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Vt(),Rt(t,R),_t()&&u!==null&&u.f&d&&!(u.f&m)&&(h!==null&&h.includes(t)?(w(u,R),X(u)):g===null?Nn([t]):g.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=_t(),s=r.length,l=0;l<s;l++){var a=r[l],f=a.f;f&R||!e&&a===u||(w(a,n),f&(d|S)&&(f&y?Rt(a,B):X(a)))}}function Ot(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let C=!1;function Er(t){C=t}let A;function M(t){if(t===null)throw Ot(),gt;return A=t}function yr(){return M(P(A))}function wr(t){if(C){if(P(A)!==null)throw Ot(),gt;A=t}}function Tr(){for(var t=0,n=A;;){if(n.nodeType===8){var r=n.data;if(r===dn){if(t===0)return n;t-=1}else(r===pn||r===hn)&&(t+=1)}var e=P(n);n.remove(),n=e}}var ht,St,Dt;function mr(){if(ht===void 0){ht=window;var t=Element.prototype,n=Node.prototype;St=vt(n,"firstChild").get,Dt=vt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return St.call(t)}function P(t){return Dt.call(t)}function Ar(t,n){if(!C)return rt(t);var r=rt(A);if(r===null)r=A.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),M(e),e}return M(r),r}function gr(t,n){if(!C){var r=rt(t);return r instanceof Comment&&r.data===""?P(r):r}return A}function Ir(t,n=1,r=!1){let e=C?A:t;for(var s;n--;)s=e,e=P(e);if(!C)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=nt();return e===null?s==null||s.after(a):e.before(a),M(a),a}return M(e),e}function xr(t){t.textContent=""}function wn(t){var n=y|R;u===null?n|=S:u.f|=Tt;var r=i!==null&&i.f&y?i:null;const e={children:null,ctx:o,deps:null,equals:mt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Rr(t){const n=wn(t);return n.equals=At,n}function Nt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ot(e):O(e)}}}function Tn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function bt(t){var n,r=u;z(Tn(t));try{Nt(t),n=Gt(t)}finally{z(r)}return n}function Ct(t){var n=bt(t),r=(x||t.f&S)&&t.deps!==null?B:d;w(t,r),t.equals(n)||(t.v=n,t.wv=Vt())}function ot(t){Nt(t),H(t,0),w(t,k),t.v=t.children=t.deps=t.ctx=t.reactions=null}function kt(t){u===null&&i===null&&fn(),i!==null&&i.f&S&&on(),ft&&un()}function mn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&J)!==0,l=u,a={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r){var f=D;try{dt(!0),U(a),a.f|=sn}catch(c){throw O(a),c}finally{dt(f)}}else n!==null&&X(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&Tt)===0;if(!_&&!s&&e&&(l!==null&&mn(a,l),i!==null&&i.f&y)){var p=i;(p.children??(p.children=[])).push(a)}return a}function Or(t){const n=F(j,null,!1);return w(n,d),n.teardown=t,n}function Sr(t){kt();var n=u!==null&&(u.f&m)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:i})}else{var e=Pt(t);return e}}function Dr(t){return kt(),it(t)}function Nr(t){const n=F(J,t,!0);return(r={})=>new Promise(e=>{r.outro?In(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Pt(t){return F(yt,t,!1)}function br(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=it(()=>{t(),!e.ran&&(e.ran=!0,xt(r.l.r2,!0),Qt(n))})}function Cr(){var t=o;it(()=>{if(Jt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&d&&w(r,B),L(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function it(t){return F(j,t,!0)}function kr(t){return An(t)}function An(t,n=0){return F(j|at|n,t,!0)}function Pr(t,n=!0){return F(j|m,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=ft,e=i;Et(!0),Z(null);try{n.call(null)}finally{Et(r),Z(e)}}}function Lt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ot(n[r])}}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function gn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&ln)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:P(e);e.remove(),e=l}r=!0}Mt(t,n&&!r),Lt(t),H(t,0),w(t,k);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Ft(t);var f=t.parent;f!==null&&f.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function In(t,n){var r=[];Yt(t,r,!0),xn(r,()=>{O(t),n&&n()})}function xn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Yt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&wt)!==0||(e.f&m)!==0;Yt(e,n,l?r:!1),e=s}}}function Fr(t){Ht(t,!0)}function Ht(t,n){if(t.f&b){L(t)&&U(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&wt)!==0||(r.f&m)!==0;Ht(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let $=!1,et=[];function jt(){$=!1;const t=et.slice();et=[],en(t)}function Lr(t){$||($=!0,queueMicrotask(jt)),et.push(t)}function Rn(){$&&jt()}function On(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Bt=0,Sn=1;let V=!1,G=Bt,q=!1,Y=null,D=!1,ft=!1;function dt(t){D=t}function Et(t){ft=t}let I=[],N=0;let i=null;function Z(t){i=t}let u=null;function z(t){u=t}let T=null;function Dn(t){T=t}let h=null,E=0,g=null;function Nn(t){g=t}let Ut=1,st=0,x=!1,o=null;function Vt(){return++Ut}function _t(){return!Q||o!==null&&o.l===null}function L(t){var p;var n=t.f;if(n&R)return!0;if(n&B){var r=t.deps,e=(n&S)!==0;if(r!==null){var s,l,a=(n&K)!==0,f=e&&u!==null&&!x,_=r.length;if(a||f){for(s=0;s<_;s++)l=r[s],(a||!((p=l==null?void 0:l.reactions)!=null&&p.includes(t)))&&(l.reactions??(l.reactions=[])).push(t);a&&(t.f^=K)}for(s=0;s<_;s++)if(l=r[s],L(l)&&Ct(l),l.wv>t.wv)return!0}(!e||u!==null&&!x)&&w(t,d)}return!1}function bn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw V=!1,t}function Cn(t){return(t.f&k)===0&&(t.parent===null||(t.parent.f&tt)===0)}function W(t,n,r,e){if(V){if(r===null&&(V=!1),Cn(n))throw t;return}r!==null&&(V=!0);{bn(t,n);return}}function Gt(t){var ct;var n=h,r=E,e=g,s=i,l=x,a=T,f=o,_=t.f;h=null,E=0,g=null,i=_&(m|J)?null:t,x=!D&&(_&S)!==0,T=null,o=t.ctx,st++;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(H(t,E),c!==null&&E>0)for(c.length=E+h.length,v=0;v<h.length;v++)c[E+v]=h[v];else t.deps=c=h;if(!x)for(v=E;v<c.length;v++)((ct=c[v]).reactions??(ct.reactions=[])).push(t)}else c!==null&&E<c.length&&(H(t,E),c.length=E);return p}finally{h=n,E=r,g=e,i=s,x=l,T=a,o=f}}function kn(t,n){let r=n.reactions;if(r!==null){var e=Xt.call(r,t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(w(n,B),n.f&(S|K)||(n.f^=K),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)kn(t,r[e])}function U(t){var n=t.f;if(!(n&k)){w(t,d);var r=u,e=o;u=t;try{n&at?gn(t):Mt(t),Lt(t),Ft(t);var s=Gt(t);t.teardown=typeof s=="function"?s:null,t.wv=Ut;var l=t.deps,a}catch(f){W(f,t,r,e||t.ctx)}finally{u=r}}}function Kt(){if(N>1e3){N=0;try{_n()}catch(t){if(Y!==null)W(t,Y,null);else throw t}}N++}function $t(t){var n=t.length;if(n!==0){Kt();var r=D;D=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&d||(s.f^=d);var l=[];Zt(s,l),Pn(l)}}finally{D=r}}}function Pn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(k|b)))try{L(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(s){W(s,e,null,e.ctx)}}}function Fn(){if(q=!1,N>1001)return;const t=I;I=[],$t(t),q||(N=0,Y=null)}function X(t){G===Bt&&(q||(q=!0,queueMicrotask(Fn))),Y=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(J|m)){if(!(r&d))return;n.f^=d}}I.push(n)}function Zt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&m)!==0,a=l&&(s&d)!==0,f=r.next;if(!a&&!(s&b))if(s&j){if(l)r.f^=d;else try{L(r)&&U(r)}catch(v){W(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else s&yt&&e.push(r);if(f===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=f}for(var c=0;c<e.length;c++)_=e[c],n.push(_),Zt(_,n)}function zt(t){var n=G,r=I;try{Kt();const s=[];G=Sn,I=s,q=!1,$t(r);var e=t==null?void 0:t();return Rn(),(I.length>0||s.length>0)&&zt(),N=0,Y=null,e}finally{G=n,I=r}}async function Mr(){await Promise.resolve(),zt()}function Jt(t){var c;var n=t.f,r=(n&y)!==0;if(r&&n&k){var e=bt(t);return ot(t),e}if(i!==null){T!==null&&T.includes(t)&&cn();var s=i.deps;t.rv<st&&(t.rv=st,h===null&&s!==null&&s[E]===t?E++:h===null?h=[t]:h.push(t),g!==null&&u!==null&&u.f&d&&!(u.f&m)&&g.includes(t)&&(w(u,R),X(u)))}else if(r&&t.deps===null)for(var l=t,a=l.parent,f=l;a!==null;)if(a.f&y){var _=a;f=_,a=_.parent}else{var p=a;(c=p.deriveds)!=null&&c.includes(f)||(p.deriveds??(p.deriveds=[])).push(f);break}return r&&(l=t,L(l)&&Ct(l)),t.v}function Qt(t){const n=i;try{return i=null,t()}finally{i=n}}const Ln=-7169;function w(t,n){t.f=t.f&Ln|n}function qr(t){return Wt().get(t)}function Yr(t,n){return Wt().set(t,n),n}function Wt(t){return o===null&&On(),o.c??(o.c=new Map(Mn(o)||void 0))}function Mn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Hr(t,n=1){var r=Jt(t),e=n===1?r++:r--;return xt(t,r),e}function jr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},Q&&!n&&(o.l={s:null,u:null,r1:[],r2:ut(!1)})}function Br(t){const n=o;if(n!==null){const a=n.e;if(a!==null){var r=u,e=i;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];z(l.effect),Z(l.reaction),Pt(l.fn)}}finally{z(r),Z(e)}}o=n.p,n.m=!0}return{}}function Ur(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=nn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=tn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}function Vr(t,n,r){if(t==null)return n(void 0),rn;const e=Qt(()=>t.subscribe(n,r));return e.unsubscribe?()=>e.unsubscribe():e}export{pt as $,O as A,rt as B,dn as C,i as D,wt as E,Lr as F,Xn as G,hn as H,b as I,tr as J,En as K,ut as L,nr as M,rr as N,er as O,P,$n as Q,nn as R,tn as S,Dr as T,pr as U,Vn as V,en as W,Jt as X,Ur as Y,wn as Z,Wn as _,yr as a,jn as a0,Bn as a1,Jn as a2,xt as a3,vt as a4,Qn as a5,Or as a6,zn as a7,Gn as a8,ar as a9,ln as aA,pn as aB,cr as aC,vr as aD,mr as aE,gt as aF,Ot as aG,Zn as aH,Nr as aI,at as aJ,sn as aK,Un as aL,ir as aM,fr as aN,_r as aO,Yr as aP,qr as aQ,br as aR,Cr as aS,At as aa,Hr as ab,m as ac,J as ad,z as ae,sr as af,lr as ag,ur as ah,Kn as ai,Rr as aj,or as ak,jr as al,gr as am,kr as an,Br as ao,Ar as ap,wr as aq,Ir as ar,dr as as,Pt as at,it as au,zt as av,Hn as aw,Mr as ax,hr as ay,Z as az,An as b,Er as c,Fr as d,Pr as e,A as f,o as g,C as h,Q as i,Qt as j,Vr as k,On as l,an as m,rn as n,nt as o,In as p,qn as q,Tr as r,M as s,Yn as t,Sr as u,u as v,yn as w,Yt as x,xr as y,xn as z};
