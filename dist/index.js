var l=Object.defineProperty;var g=t=>l(t,"__esModule",{value:!0});var P=(t,e)=>{for(var n in e)l(t,n,{get:e[n],enumerable:!0})};g(exports);P(exports,{getDiff:()=>M});var u;(function(o){o.ADDITION="ADDITION",o.REMOVAL="REMOVAL",o.CHANGE="CHANGE"})(u||(u={}));var x=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),S=t=>Boolean(Object.keys(t).length),b=t=>Boolean(t&&typeof t=="object"),h=(t,e)=>e.reduce((n,o)=>n==null?void 0:n[o],t),d=t=>t[t.length-1];function O(t,e,n=""){let o={},s=[];for(let r in t){let f=n+r,i=t[r],a=e[r];if(!x(e,r))o[r]=t[r],s.push(f);else if(b(i)&&b(a)){let[p,c]=O(i,a,f+".");S(p)&&(o[r]=p),c.size&&s.push(...c)}else i!==a&&(o[r]=i,s.push(f))}return[o,new Set(s)]}function m(t,e){return new Set([...t].filter(n=>e.has(n)))}function j(t,e){return new Set([...t].filter(n=>!e.has(n)))}function D(t,e,n,o){var r;let s=new Map;for(let f of o){let i=f.split("."),a=h(e,i),p=h(t,i),c=(r=i[1])!=null?r:d(i);s.set(f,{type:n,propPath:f,propName:c,value:{before:a,after:p}})}return s}function A(t,e){let[n,o]=t,[s,r]=e,f=m(o,r),i=j(o,f),a=j(r,f),p=D(n,s,u.ADDITION,i),c=D(n,s,u.REMOVAL,a),T=D(n,s,u.CHANGE,f);return{additions:p,removals:c,changes:T}}function M(t,e){let n=O(t,e),o=O(e,t);return A(n,o)}0&&(module.exports={getDiff});
//# sourceMappingURL=index.js.map