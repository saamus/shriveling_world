import{S as s,i as t,s as e,c as a,a as r,m as c,t as n,b as o,d as i,e as l,f as $,g as f,h as m,j as u,k as h,l as d,n as p,o as x}from"./client.e08ee26c.js";import{M as b}from"./menu.cbb3561b.js";function g(s){let t,e;return{c(){t=l("h1"),e=$("Great success!"),this.h()},l(s){t=f(s,"H1",{class:!0});var a=m(t);e=u(a,"Great success!"),a.forEach(h),this.h()},h(){d(t,"class","svelte-mbs4hh")},m(s,a){p(s,t,a),x(t,e)},d(s){s&&h(t)}}}function j(s){let t,e;return t=new b({props:{fixed:!1,$$slots:{default:[g]},$$scope:{ctx:s}}}),{c(){a(t.$$.fragment)},l(s){r(t.$$.fragment,s)},m(s,a){c(t,s,a),e=!0},p(s,[e]){const a={};1&e&&(a.$$scope={dirty:e,ctx:s}),t.$set(a)},i(s){e||(n(t.$$.fragment,s),e=!0)},o(s){o(t.$$.fragment,s),e=!1},d(s){i(t,s)}}}async function k(){return this.redirect(302,"marks/index")}export default class extends s{constructor(s){super(),t(this,s,null,j,e,{})}}export{k as preload};
