import{r as u,R as S,j as i,a as O}from"./jsx-runtime-96806aeb.js";import{r as P,T as v,g as T,d as w,a as f,b as A,c as z,e as F,f as p,u as Y,C as D}from"./index-dcd7ef69.js";import{P as L}from"./zh_CN-e3fa3ed8.js";import{r as R,u as C,a as k,R as I,b,c as E,s as B}from"./routes-c418275a.js";import"./class-particle-2983fd0e.js";import{P as H}from"./api-rtkq-95c736af.js";import{c as N}from"./index-e0310117.js";import{I as y}from"./index-1e1905a4.js";import"./index-00689c9c.js";import"./index-5d6fcbf9.js";import"./EyeOutlined-58794dda.js";import"./css-8da33459.js";import"./RightOutlined-a8bb9a2b.js";import"./zoom-11727d43.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();var h={},$=P;h.createRoot=$.createRoot,h.hydrateRoot=$.hydrateRoot;const d=(l,e)=>new v(l).setAlpha(e).toRgbString(),m=(l,e)=>new v(l).lighten(e).toHexString(),q=l=>{const e=T(l,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},X=(l,e)=>{const o=l||"#000",t=e||"#fff";return{colorBgBase:o,colorTextBase:t,colorText:d(t,.85),colorTextSecondary:d(t,.65),colorTextTertiary:d(t,.45),colorTextQuaternary:d(t,.25),colorFill:d(t,.18),colorFillSecondary:d(t,.12),colorFillTertiary:d(t,.08),colorFillQuaternary:d(t,.04),colorBgElevated:m(o,12),colorBgContainer:m(o,8),colorBgLayout:m(o,0),colorBgSpotlight:m(o,26),colorBorder:m(o,26),colorBorderSecondary:m(o,19)}},G=(l,e)=>{const o=Object.keys(w).map(r=>{const a=T(l[r],{theme:"dark"});return new Array(10).fill(1).reduce((s,c,g)=>(s[`${r}-${g+1}`]=a[g],s),{})}).reduce((r,a)=>(r=Object.assign(Object.assign({},r),a),r),{}),t=e??f(l);return Object.assign(Object.assign(Object.assign({},t),o),A(l,{generateColorPalettes:q,generateNeutralColorPalettes:X}))},Q=G;function U(l){const{sizeUnit:e,sizeStep:o}=l,t=o-2;return{sizeXXL:e*(t+10),sizeXL:e*(t+6),sizeLG:e*(t+2),sizeMD:e*(t+2),sizeMS:e*(t+1),size:e*t,sizeSM:e*t,sizeXS:e*(t-1),sizeXXS:e*(t-1)}}const V=(l,e)=>{const o=e??f(l),t=o.fontSizeSM,r=o.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},o),U(e??l)),z(t)),{controlHeight:r}),F(Object.assign(Object.assign({},o),{controlHeight:r})))},W=V;function _(){const[l,e,o]=Y();return{theme:l,token:e,hashId:o}}const J={defaultConfig:p,defaultSeed:p.token,useToken:_,defaultAlgorithm:f,darkAlgorithm:Q,compactAlgorithm:W};var K={locale:"zh_CN",today:"今天",now:"此刻",backToToday:"返回今天",ok:"确定",timeSelect:"选择时间",dateSelect:"选择日期",weekSelect:"选择周",clear:"清除",month:"月",year:"年",previousMonth:"上个月 (翻页上键)",nextMonth:"下个月 (翻页下键)",monthSelect:"选择月份",yearSelect:"选择年份",decadeSelect:"选择年代",yearFormat:"YYYY年",dayFormat:"D日",dateFormat:"YYYY年M月D日",dateTimeFormat:"YYYY年M月D日 HH时mm分ss秒",previousYear:"上一年 (Control键加左方向键)",nextYear:"下一年 (Control键加右方向键)",previousDecade:"上一年代",nextDecade:"下一年代",previousCentury:"上一世纪",nextCentury:"下一世纪"};const Z={placeholder:"请选择时间",rangePlaceholder:["开始时间","结束时间"]},M=Z,j={lang:Object.assign({placeholder:"请选择日期",yearPlaceholder:"请选择年份",quarterPlaceholder:"请选择季度",monthPlaceholder:"请选择月份",weekPlaceholder:"请选择周",rangePlaceholder:["开始日期","结束日期"],rangeYearPlaceholder:["开始年份","结束年份"],rangeMonthPlaceholder:["开始月份","结束月份"],rangeQuarterPlaceholder:["开始季度","结束季度"],rangeWeekPlaceholder:["开始周","结束周"]},K),timePickerLocale:Object.assign({},M)};j.lang.ok="确定";const x=j,n="${label}不是一个有效的${type}",ee={locale:"zh-cn",Pagination:L,DatePicker:x,TimePicker:M,Calendar:x,global:{placeholder:"请选择"},Table:{filterTitle:"筛选",filterConfirm:"确定",filterReset:"重置",filterEmptyText:"无筛选项",filterCheckall:"全选",filterSearchPlaceholder:"在筛选项中搜索",selectAll:"全选当页",selectInvert:"反选当页",selectNone:"清空所有",selectionAll:"全选所有",sortTitle:"排序",expand:"展开行",collapse:"关闭行",triggerDesc:"点击降序",triggerAsc:"点击升序",cancelSort:"取消排序"},Modal:{okText:"确定",cancelText:"取消",justOkText:"知道了"},Tour:{Next:"下一步",Previous:"上一步",Finish:"结束导览"},Popconfirm:{cancelText:"取消",okText:"确定"},Transfer:{titles:["",""],searchPlaceholder:"请输入搜索内容",itemUnit:"项",itemsUnit:"项",remove:"删除",selectCurrent:"全选当页",removeCurrent:"删除当页",selectAll:"全选所有",removeAll:"删除全部",selectInvert:"反选当页"},Upload:{uploading:"文件上传中",removeFile:"删除文件",uploadError:"上传错误",previewFile:"预览文件",downloadFile:"下载文件"},Empty:{description:"暂无数据"},Icon:{icon:"图标"},Text:{edit:"编辑",copy:"复制",copied:"复制成功",expand:"展开"},PageHeader:{back:"返回"},Form:{optional:"（可选）",defaultValidateMessages:{default:"字段验证错误${label}",required:"请输入${label}",enum:"${label}必须是其中一个[${enum}]",whitespace:"${label}不能为空字符",date:{format:"${label}日期格式无效",parse:"${label}不能转换为日期",invalid:"${label}是一个无效日期"},types:{string:n,method:n,array:n,object:n,number:n,date:n,boolean:n,integer:n,float:n,regexp:n,email:n,url:n,hex:n},string:{len:"${label}须为${len}个字符",min:"${label}最少${min}个字符",max:"${label}最多${max}个字符",range:"${label}须在${min}-${max}字符之间"},number:{len:"${label}必须等于${len}",min:"${label}最小值为${min}",max:"${label}最大值为${max}",range:"${label}须在${min}-${max}之间"},array:{len:"须为${len}个${label}",min:"最少${min}个${label}",max:"最多${max}个${label}",range:"${label}数量须在${min}-${max}之间"},pattern:{mismatch:"${label}与模式不匹配${pattern}"}}},Image:{preview:"预览"},QRCode:{expired:"二维码过期",refresh:"点击刷新"}},te=ee;function re(l){u.useEffect(()=>{const e=matchMedia("(prefers-color-scheme: dark)");l(e);const o=new AbortController,{signal:t}=o;return e.addEventListener("change",()=>{l(e)},{signal:t}),()=>{o.abort()}},[])}function oe(l,e){return S.forwardRef((o,t)=>{const{children:r,...a}=o;let s=document.body;const c=document.querySelector(e||"body");return c instanceof HTMLElement&&(s=c),P.createPortal(i(l,{...a,ref:t,children:r}),s)})}const le=N(R),{darkAlgorithm:ae,defaultAlgorithm:ne}=J,se=oe(ie);function ce(){const l=C();re(r=>l(E(r.matches)));const{isDark:e,galleryIsShow:o}=k(r=>r.theme),t=u.useMemo(()=>e?ae:ne,[e]);return O(D,{locale:te,theme:{algorithm:t},children:[i(I,{router:le}),o&&i(se,{})]})}function ie(){const[l,e]=u.useState(!1),{galleryIsShow:o,galleryList:t}=k(c=>c.theme);u.useEffect(()=>e(o),[o]);const r=C(),a=u.useCallback(c=>{e(c),c?r(b(!0)):setTimeout(()=>r(b(!1)),300)},[]),s=u.useMemo(()=>t.map((c,g)=>i(y,{src:c},g)),[t]);return i("div",{className:"none",children:i(y.PreviewGroup,{preview:{visible:l,onVisibleChange:a},children:s})})}const de=document.querySelector("#root");h.createRoot(de).render(i(S.StrictMode,{children:i(H,{store:B,children:i(ce,{})})}));