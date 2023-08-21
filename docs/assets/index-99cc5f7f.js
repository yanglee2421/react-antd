var w=Object.defineProperty;var b=(_,t,e)=>t in _?w(_,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):_[t]=e;var i=(_,t,e)=>(b(_,typeof t!="symbol"?t+"":t,e),e),m=(_,t,e)=>{if(!t.has(_))throw TypeError("Cannot "+e)};var h=(_,t,e)=>(m(_,t,"read from private field"),e?e.call(_):t.get(_)),z=(_,t,e)=>{if(t.has(_))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(_):t.set(_,e)},o=(_,t,e,r)=>(m(_,t,"write to private field"),r?r.call(_,e):t.set(_,e),e);import{j as u}from"./index-4e0272e5.js";import{r as f}from"./antd-68413be4.js";import{u as g}from"./useResize-e80da418.js";import{u as j}from"./useCtxGallery-18ba1c5b.js";class p{constructor(t,e){this.min=t,this.max=e}get(){return Math.random()*(this.max-this.min)+this.min}}const y=new p(-1,1),M=new p(2,4);class x{constructor(t){i(this,"xv",y.get());i(this,"yv",y.get());i(this,"radius",M.get());i(this,"x");i(this,"y");i(this,"color");this.canvas=t,this.x=Math.random()*t.width,this.y=Math.random()*t.height,this.color=`rgba(254,250,255,${1-1/this.radius})`}draw(){const t=this.canvas.getContext("2d");t.beginPath(),t.arc(this.x,this.y,this.radius,0,Math.PI*2),t.closePath(),t.strokeStyle=this.color,t.stroke()}update(){const{width:t,height:e}=this.canvas;(this.x<0||this.x>t)&&(this.xv*=-1),(this.y<0||this.y>e)&&(this.yv*=-1),this.x+=this.xv,this.y+=this.yv,this.draw()}}var s,l,n,c;class E{constructor(t,e=100,r=100){z(this,s,[]);z(this,l,0);z(this,n,null);z(this,c,new AbortController);this.canvas=t,this.lineMax=r;for(let v=0;v<e;v++)h(this,s).push(new x(this.canvas))}drawLine(){h(this,s).forEach((t,e)=>{h(this,s).slice(e+1).forEach(r=>{const v=Math.abs(t.x-r.x);if(v>this.lineMax)return;const d=Math.abs(t.y-r.y);if(d>this.lineMax)return;const k=Math.sqrt(v**2+d**2);if(k>this.lineMax)return;const a=this.canvas.getContext("2d");a.beginPath(),a.moveTo(t.x,t.y),a.lineTo(r.x,r.y),a.closePath(),a.strokeStyle=`rgba(254,250,255, ${1-k/this.lineMax})`,a.lineWidth=.8,a.stroke()})})}animate(){o(this,l,requestAnimationFrame(this.animate.bind(this))),this.canvas.getContext("2d").clearRect(0,0,this.canvas.width,this.canvas.height),h(this,s).forEach(e=>e.update()),this.drawLine()}abortAnimate(){cancelAnimationFrame(h(this,l))}bindEvent(){o(this,c,new AbortController);const{signal:t}=h(this,c);this.canvas.addEventListener("mouseover",({offsetX:e,offsetY:r})=>{h(this,n)||(o(this,n,new x(this.canvas)),h(this,n).x=e,h(this,n).y=r,h(this,n).xv=0,h(this,n).yv=0,h(this,s).push(h(this,n)))},{signal:t}),this.canvas.addEventListener("mousemove",({offsetX:e,offsetY:r})=>{h(this,n)&&(h(this,n).x=e,h(this,n).y=r)},{signal:t}),this.canvas.addEventListener("mouseout",()=>{h(this,n)&&h(this,s).includes(h(this,n))&&(h(this,s).splice(h(this,s).indexOf(h(this,n)),1),o(this,n,null))},{signal:t})}abortEvent(){h(this,c).abort()}}s=new WeakMap,l=new WeakMap,n=new WeakMap,c=new WeakMap;const R="_page_1hzkv_1",P="_border_1hzkv_10",C="_shadow_1hzkv_18",A="_flex_1hzkv_302",L="_clearfix_1hzkv_633",T="_partcle_1hzkv_688",S={page:R,"m-center":"_m-center_1hzkv_5",border:P,"border-dash":"_border-dash_1hzkv_14",shadow:C,"shadow-light":"_shadow-light_1hzkv_22","w-25":"_w-25_1hzkv_26","h-25":"_h-25_1hzkv_30","wh-25":"_wh-25_1hzkv_34","w-50":"_w-50_1hzkv_39","h-50":"_h-50_1hzkv_43","wh-50":"_wh-50_1hzkv_47","w-75":"_w-75_1hzkv_52","h-75":"_h-75_1hzkv_56","wh-75":"_wh-75_1hzkv_60","w-100":"_w-100_1hzkv_65","h-100":"_h-100_1hzkv_69","wh-100":"_wh-100_1hzkv_73","p-0":"_p-0_1hzkv_78","px-0":"_px-0_1hzkv_82","py-0":"_py-0_1hzkv_86","pt-0":"_pt-0_1hzkv_90","pr-0":"_pr-0_1hzkv_94","pb-0":"_pb-0_1hzkv_98","pl-0":"_pl-0_1hzkv_102","p-1":"_p-1_1hzkv_106","px-1":"_px-1_1hzkv_110","py-1":"_py-1_1hzkv_114","pt-1":"_pt-1_1hzkv_118","pr-1":"_pr-1_1hzkv_122","pb-1":"_pb-1_1hzkv_126","pl-1":"_pl-1_1hzkv_130","p-2":"_p-2_1hzkv_134","px-2":"_px-2_1hzkv_138","py-2":"_py-2_1hzkv_142","pt-2":"_pt-2_1hzkv_146","pr-2":"_pr-2_1hzkv_150","pb-2":"_pb-2_1hzkv_154","pl-2":"_pl-2_1hzkv_158","p-3":"_p-3_1hzkv_162","px-3":"_px-3_1hzkv_166","py-3":"_py-3_1hzkv_170","pt-3":"_pt-3_1hzkv_174","pr-3":"_pr-3_1hzkv_178","pb-3":"_pb-3_1hzkv_182","pl-3":"_pl-3_1hzkv_186","m-0":"_m-0_1hzkv_190","mx-0":"_mx-0_1hzkv_194","my-0":"_my-0_1hzkv_198","mt-0":"_mt-0_1hzkv_202","mr-0":"_mr-0_1hzkv_206","mb-0":"_mb-0_1hzkv_210","ml-0":"_ml-0_1hzkv_214","m-1":"_m-1_1hzkv_218","mx-1":"_mx-1_1hzkv_222","my-1":"_my-1_1hzkv_226","mt-1":"_mt-1_1hzkv_230","mr-1":"_mr-1_1hzkv_234","mb-1":"_mb-1_1hzkv_238","ml-1":"_ml-1_1hzkv_242","m-2":"_m-2_1hzkv_246","mx-2":"_mx-2_1hzkv_250","my-2":"_my-2_1hzkv_254","mt-2":"_mt-2_1hzkv_258","mr-2":"_mr-2_1hzkv_262","mb-2":"_mb-2_1hzkv_266","ml-2":"_ml-2_1hzkv_270","m-3":"_m-3_1hzkv_274","mx-3":"_mx-3_1hzkv_278","my-3":"_my-3_1hzkv_282","mt-3":"_mt-3_1hzkv_286","mr-3":"_mr-3_1hzkv_290","mb-3":"_mb-3_1hzkv_294","ml-3":"_ml-3_1hzkv_298","flex-1":"_flex-1_1hzkv_302","flex-1-hidden":"_flex-1-hidden_1hzkv_306","flex-1-auto":"_flex-1-auto_1hzkv_311",flex:A,"flex-column":"_flex-column_1hzkv_321","flex-wrap":"_flex-wrap_1hzkv_327","justify-start":"_justify-start_1hzkv_332","align-start":"_align-start_1hzkv_336","start-start":"_start-start_1hzkv_340","start-center":"_start-center_1hzkv_345","start-end":"_start-end_1hzkv_350","start-stretch":"_start-stretch_1hzkv_355","start-between":"_start-between_1hzkv_360","start-around":"_start-around_1hzkv_365","start-evenly":"_start-evenly_1hzkv_370","justify-center":"_justify-center_1hzkv_375","align-center":"_align-center_1hzkv_379","center-start":"_center-start_1hzkv_383","center-center":"_center-center_1hzkv_388","center-end":"_center-end_1hzkv_393","center-stretch":"_center-stretch_1hzkv_398","center-between":"_center-between_1hzkv_403","center-around":"_center-around_1hzkv_408","center-evenly":"_center-evenly_1hzkv_413","justify-end":"_justify-end_1hzkv_418","align-end":"_align-end_1hzkv_422","end-start":"_end-start_1hzkv_426","end-center":"_end-center_1hzkv_431","end-end":"_end-end_1hzkv_436","end-stretch":"_end-stretch_1hzkv_441","end-between":"_end-between_1hzkv_446","end-around":"_end-around_1hzkv_451","end-evenly":"_end-evenly_1hzkv_456","justify-stretch":"_justify-stretch_1hzkv_461","align-stretch":"_align-stretch_1hzkv_465","stretch-start":"_stretch-start_1hzkv_469","stretch-center":"_stretch-center_1hzkv_474","stretch-end":"_stretch-end_1hzkv_479","stretch-stretch":"_stretch-stretch_1hzkv_484","stretch-between":"_stretch-between_1hzkv_489","stretch-around":"_stretch-around_1hzkv_494","stretch-evenly":"_stretch-evenly_1hzkv_499","justify-between":"_justify-between_1hzkv_504","align-between":"_align-between_1hzkv_508","between-start":"_between-start_1hzkv_512","between-center":"_between-center_1hzkv_517","between-end":"_between-end_1hzkv_522","between-stretch":"_between-stretch_1hzkv_527","between-between":"_between-between_1hzkv_532","between-around":"_between-around_1hzkv_537","between-evenly":"_between-evenly_1hzkv_542","justify-around":"_justify-around_1hzkv_547","align-around":"_align-around_1hzkv_551","around-start":"_around-start_1hzkv_555","around-center":"_around-center_1hzkv_560","around-end":"_around-end_1hzkv_565","around-stretch":"_around-stretch_1hzkv_570","around-between":"_around-between_1hzkv_575","around-around":"_around-around_1hzkv_580","around-evenly":"_around-evenly_1hzkv_585","justify-evenly":"_justify-evenly_1hzkv_590","align-evenly":"_align-evenly_1hzkv_594","evenly-start":"_evenly-start_1hzkv_598","evenly-center":"_evenly-center_1hzkv_603","evenly-end":"_evenly-end_1hzkv_608","evenly-stretch":"_evenly-stretch_1hzkv_613","evenly-between":"_evenly-between_1hzkv_618","evenly-around":"_evenly-around_1hzkv_623","evenly-evenly":"_evenly-evenly_1hzkv_628",clearfix:L,"particle-content":"_particle-content_1hzkv_633","float-left":"_float-left_1hzkv_639","float-right":"_float-right_1hzkv_643","overflow-auto":"_overflow-auto_1hzkv_647","overflow-hidden":"_overflow-hidden_1hzkv_652","text-center":"_text-center_1hzkv_656","text-end":"_text-end_1hzkv_660","text-primary":"_text-primary_1hzkv_664","text-success":"_text-success_1hzkv_668","text-warning":"_text-warning_1hzkv_672","text-danger":"_text-danger_1hzkv_676","text-info":"_text-info_1hzkv_680","pre-line":"_pre-line_1hzkv_684",partcle:T,"particle-canvas":"_particle-canvas_1hzkv_697"};function $(){const _=j(S),t=f.useRef(null),e=g(r=>{const v=t.current;if(!v)return;Object.assign(v,r);const d=setTimeout(()=>{const k=new E(v,r.width/1920*120,100);k.animate(),k.bindEvent()},500);return()=>{clearTimeout(d)}});return u.jsx("div",{ref:e,className:_("partcle"),children:u.jsx("canvas",{ref:t,className:_("particle-canvas")})})}export{$ as Component};
