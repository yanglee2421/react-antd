import{r as i,f as u}from"./antd-68413be4.js";function p(r){return i.useCallback(f(r),[r])}function f(r){const n=t=>t.map(e=>r[e]||e).join(" ")+" ";return t=>{if(Array.isArray(t))return n(t);if(typeof t=="string"){const o=t.replace(/ +/g,",").split(",");return n(o)}const e=Object.keys(t).filter(o=>t[o]);return n(e)}}const a=c();u.createContext(a);function c(){return{imgList:[]}}export{p as u};
