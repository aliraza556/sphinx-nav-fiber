import{r,j as e,z as F,v as A,F as u,A as E,f as l,T as k,B as I,a5 as O,h as T,C as z}from"./index-d939ea8c.js";import{B as N}from"./index-7bef8ad5.js";import{b as D,c as M,F as Y,C as _,B as P}from"./react-toastify.esm-cf8782e0.js";import{a as X,N as G,F as H,b as R}from"./index-e560e4ff.js";import{A as L,T as W}from"./index-31f9e032.js";import{S as $,A as q}from"./index-37ba1bf2.js";import"./generateCategoricalChart-3c01134b.js";import"./Popover-144bfca7.js";import"./useSlotProps-e80d3e5c.js";import"./InfoIcon-d7130bbb.js";import"./index.esm-289835b5.js";import"./NoFilterResultIcon-7075db24.js";import"./index-134efb9a.js";import"./index-6fe2dc08.js";import"./PlusIcon-46d7f62d.js";import"./CheckIcon-299d14a4.js";import"./index-e0c3cdc4.js";import"./Popper-f5917873.js";const J=({selectedType:t,setSelectedType:c})=>{const[p,d]=r.useState([]);r.useEffect(()=>{(async()=>{try{const{data:x}=await F();d(x.edge_types)}catch(x){console.warn(x)}})()},[d]);const i=o=>({label:o,value:o}),h=o=>{c((o==null?void 0:o.value)||"")};return e.jsx(L,{onSelect:h,options:p.map(i),selectedValue:t?i(t):null})},K=({onSelect:t,selectedValue:c,topicId:p})=>{const[d,i]=r.useState([]),[h,o]=r.useState(!1),x=r.useMemo(()=>{const s=async b=>{const a={is_muted:"False",sort_by:q,search:b,skip:"0",limit:"1000"};o(!0);try{const w=(await E(a.search)).data.filter(y=>(y==null?void 0:y.ref_id)!==p);i(w)}catch{i([])}finally{o(!1)}};return A.debounce(s,300)},[p]),g=s=>{if(!s){i([]);return}s.length>2&&x(s)},j=s=>{const b=s?d.find(a=>a.ref_id===s.value):null;t(b||null)},n=s=>({label:s.search_value,value:s.ref_id,type:s.node_type}),v=s=>s.map(n);return c?e.jsxs(u,{align:"center",basis:"100%",direction:"row",grow:1,shrink:1,children:[e.jsx("span",{children:c.search_value}),e.jsx($,{onClick:()=>t(null),size:"medium",children:e.jsx(D,{})})]}):e.jsx(L,{handleInputChange:g,isLoading:h,onSelect:j,options:v(d)||X,selectedValue:c?n(c):null})},Q=({from:t,onSelect:c,selectedType:p,setSelectedType:d,selectedToNode:i,setIsSwapped:h,isSwapped:o})=>{const x=()=>{h()},g=t&&("search_value"in t?t.search_value:t.name);return e.jsxs(u,{mb:20,children:[e.jsx(u,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(u,{align:"center",direction:"row",children:e.jsx(V,{children:"Add Edge"})})}),e.jsxs(Z,{swap:o,children:[e.jsx(u,{children:e.jsx(ee,{disabled:!0,label:o?"To":"From",swap:o,value:g})}),e.jsxs(u,{my:16,children:[e.jsx(oe,{children:"Type"}),e.jsx(J,{selectedType:p,setSelectedType:d})]}),e.jsx(u,{children:e.jsxs(te,{children:[e.jsx(se,{children:o?"From":"To"}),e.jsx(K,{onSelect:c,selectedValue:i,topicId:t==null?void 0:t.ref_id})]})}),e.jsxs(U,{children:[e.jsx(ne,{children:e.jsx(G,{})}),e.jsx(ie,{onClick:x,children:e.jsx(H,{})}),e.jsx(ae,{children:e.jsx(R,{})})]})]})]})},U=l.div`
  position: absolute;
  top: 26px;
  bottom: 26px;
  left: 4px;
  width: 35px;
  border-left: 1.5px solid #6b7a8d4d;
  border-top: 1.5px solid #6b7a8d4d;
  border-bottom: 1.5px solid #6b7a8d4d;
  border-radius: 12px 0 0 12px;
`,V=l(k)`
  font-size: 22px;
  font-weight: 600;
`,Z=l.div`
  position: relative;
  color: white;
  font-family: 'Barlow';
  display: flex;
  flex-direction: ${t=>t.swap?"column-reverse":"column"};
  margin-bottom: 10px;
  padding-left: 38px;
`,ee=l(W)`
  position: relative;
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
`,te=l.div`
  position: relative;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-radius: 6px;
  border: 1.4px solid #6b7a8d4d;
  opacity: 0px;
  display: flex;
  align-items: center;
`,oe=l.label`
  color: #bac1c6;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 6px;
`,se=l.label`
  color: #bac1c6;
  background-color: #23252f;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  position: absolute;
  left: 15px;
  top: -10px;
`,ne=l.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(50%);
  color: #23252f;
`,ie=l.div`
  position: absolute;
  color: transparent;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(-50%);
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-color: #303342;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`,ae=l.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(10px) translateX(3px);
  color: #6b7a8d;
  line-height: 1;
`,re=()=>{const{close:t}=I("addEdgeToNode"),c=M({mode:"onChange"}),[p,d]=r.useState(!1),[i,h]=r.useState(""),[o,x]=r.useState(!1),[g,j]=r.useState(!1),[n,v]=r.useState(null),[s,b]=r.useState(),a=O();r.useEffect(()=>{(async()=>{if(a){j(!0);try{if(a.type==="topic"){const{data:m}=await E(a==null?void 0:a.name,{exact_match:"true",node_type:"topic"}),C=m.find(B=>B.node_type==="topic");b(C)}}catch(m){console.log(m)}finally{j(!1)}}})()},[a]);const S=()=>{t()},w=async()=>{const f=s||a;if(!(!n||!(f!=null&&f.ref_id))){d(!0);try{await z({relationship:i,...o?{to:f.ref_id,from:n==null?void 0:n.ref_id}:{from:f.ref_id,to:n==null?void 0:n.ref_id}});const{ref_id:m}=f,{ref_id:C}=n;console.log(m,C),S()}catch(m){console.warn(m)}finally{d(!1)}}},y=p||!n||!i;return e.jsxs(Y,{...c,children:[g?e.jsx(u,{align:"center",my:24,children:e.jsx(_,{color:T.lightGray,size:24})}):e.jsx(Q,{from:s??a,isSwapped:o,onSelect:v,selectedToNode:n,selectedType:i,setIsSwapped:()=>x(!o),setSelectedType:h}),e.jsxs(le,{color:"secondary",disabled:y,onClick:w,size:"large",variant:"contained",children:["Confirm",p&&e.jsx(ce,{children:e.jsx(_,{color:T.lightGray,size:12})})]})]})},le=l(P)`
  width: 293px !important;
  margin: 0 0 10px auto !important;
`,ce=l.span`
  margin-top: 2px;
`,Ie=()=>{const{close:t}=I("addEdgeToNode");return e.jsx(N,{id:"addEdgeToNode",kind:"small",onClose:t,preventOutsideClose:!0,children:e.jsx(re,{})})};export{Ie as AddNodeEdgeModal};
