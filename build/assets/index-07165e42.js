import{aS as C,Y as S,v as b,aT as P,R as $,aU as I,aV as U,f as x,h as l,x as D,r as f,j as e,F as o,aW as J,T as y,aX as K,D as X,B as Q,aY as h,M as ee,o as te,aZ as se,O as oe,N as ne,P as ie,V as re}from"./index-530f6618.js";import{B as w,C as ae,c as le,F as ce}from"./react-toastify.esm-7264a5d3.js";import{B as de}from"./index-a101b3f5.js";import{S as ue}from"./index-aa1a6825.js";import{i as xe}from"./index.esm-51a0b245.js";import{C as pe}from"./CheckIcon-44aceca1.js";import{T as B}from"./index-fa56e81c.js";import"./InfoIcon-1357a1ce.js";const R=/\btwitter\.com\/(?:@)?([\w_]+)(?:$|\?[^/]*$)/,fe=/(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/,ge=/(https?:\/\/)?(www\.)?youtube\.com\/live\/([A-Za-z0-9_-]+)/,he=/(https?:\/\/)?(www\.)?youtu\.be\/([A-Za-z0-9_-]+)/,we=/https:\/\/twitter\.com\/i\/spaces\/([A-Za-z0-9_-]+)/,me=/https:\/\/twitter\.com\/[^/]+\/status\/(\d+)/,be=/(https?:\/\/)?([A-Za-z0-9_-]+)\.mp3/,ye=/(https?:\/\/)?(.*\.)?.+\/(feed|rss|rss.xml|.*.rss|.*\?(feed|format)=rss)$/,je=/https?:\/\/(www\.)?youtube\.com\/(user\/)?(@)?([\w-]+)/,ve=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,Se=/https:\/\/twitter\.com\/i\/broadcasts\/([A-Za-z0-9_-]+)/;function $e(t){return[ge,Se,fe,he,we,be].some(i=>i.test(t))?C:je.test(t)?S:R.test(t)?b:me.test(t)?P:ye.test(t)?$:ve.test(t)?I:U}const _e=(t,s="")=>{const r=(s===b?R:/@(\w+)/).exec(t);return r?r[1]:null},N=t=>!!t&&[b,S,$].includes(t),Ee=({onClick:t,loading:s,type:i,error:r})=>{const n=D(d=>d.budget),[p,c]=f.useState(10),a=N(i)?"radar":"add_node";return f.useEffect(()=>{(async()=>{try{const u=await K(a);c(u.data.price)}catch(u){console.error("cannot fetch",u)}})()},[a]),e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Be,{children:"Approve Cost"})})}),e.jsxs(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ke,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[p," sats"]})]}),e.jsxs(ze,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[J(n)," sats"]})]})]}),e.jsx(o,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:s||!!r,onClick:t,size:"large",startIcon:s?e.jsx(ae,{size:24}):e.jsx(pe,{}),type:"submit",variant:"contained",children:"Approve"})}),r?e.jsxs(Re,{role:"tooltip",children:[e.jsxs(Ce,{children:[e.jsx(xe,{className:"errorIcon"}),e.jsx("span",{children:r})]}),e.jsx("div",{className:"tooltip",children:r})]}):null]})},ke=x(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${l.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${l.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${l.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,ze=x(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${l.secondaryText4};
  .title {
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`,Be=x(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ce=x(o)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;

  .errorIcon {
    display: block;
    font-size: 13px;
    min-height: 13px;
    min-width: 13px;
  }

  span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
    letter-spacing: 0.2px;
    cursor: pointer;
    padding-left: 4px;
    font-size: 13px;
    font-family: Barlow;
    line-height: 18px;
  }
`,Re=x(o)`
  display: flex;
  align-items: center;
  color: ${l.primaryRed};
  position: relative;
  margin-top: 20px;

  .tooltip {
    position: absolute;
    background-color: ${l.black};
    opacity: 0.8;
    border-radius: 4px;
    color: ${l.white};
    top: -10px;
    left: 335px;
    padding: 4px 8px;
    font-size: 13px;
    font-family: Barlow;
    visibility: hidden;
    width: 175px;
    z-index: 1;
  }

  &:hover .tooltip {
    visibility: visible;
  }

  &:focus .tooltip {
    visibility: visible;
  }
`,Ne=t=>{const s=Number(t);return s<-90||s>90?"Latitude must be between -90 and 90.":!s&&s!==0?"Latitude is required.":!0},Ae=t=>t<-180||t>180?"Longitude must be between -180 and 180.":!t&&t!==0?"Longitude is required.":!0,Le=/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/,Te=/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/,Pe=({latitude:t,longitude:s,onNextStep:i,form:r})=>{const n=()=>{const{errors:c}=r.formState;Object.keys(c).length||i()},p=()=>{r.setValue("latitude",""),r.setValue("longitude",""),i()};return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Ie,{children:"Add Location"})})}),e.jsxs(o,{direction:"row",mb:20,children:[e.jsx(o,{basis:"100px",grow:1,children:e.jsx(B,{id:"add-node-latitude",label:"Latitude",message:"Enter latitude coordinates",name:"latitude",placeholder:"-90 to 90",rules:{pattern:{message:"Incorrect longitude format",value:Le},validate:{latitude:Ne}}})}),e.jsx(o,{basis:"100px",grow:1,ml:20,children:e.jsx(B,{id:"add-node-location-longitude",label:"Longitude",message:"Enter longitude coordinates",name:"longitude",placeholder:"-180 to 180",rules:{pattern:{message:"Incorrect longitude format",value:Te},validate:{longitude:Ae}}})})]}),e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(Ue,{color:"secondary","data-testid":"skip-location-btn",disabled:!1,onClick:p,size:"large",variant:"contained",children:"Skip"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",disabled:!t||!s,onClick:n,size:"large",variant:"contained",children:"Next"})})]})]})},Ie=x(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,Ue=x(w)`
  && {
    background: ${l.white};
    color: ${l.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${l.white};
      color: ${l.BG2};
    }
  }
`,De=/^(https?:\/\/)/g,Oe=/(www\.)?/g,Ze=/[\w-]+(\.[\w-]+)*/g,Fe=/(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61})[a-zA-Z0-9](?:\.[a-zA-Z]{2,})/g,Ge=/(\/[^\s?]*)?/g,Me=/(\?[^\s]*)?/g,O=new RegExp(`${De.source}${Oe.source}${Ze.source}${Fe.source}?${Ge.source}${Me.source}$`,"i"),Z=t=>O.test(t),Ve=({type:t,onNextStep:s,allowNextStep:i})=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(Ye,{children:"Add Content"})})}),e.jsx(o,{mb:12,children:e.jsx(B,{id:"cy-youtube-channel-id",maxLength:250,name:"source",placeholder:"Paste your url here...",rules:{...X,...t!==C?{pattern:{message:"Please enter a valid URL",value:O},validate:{source:Z}}:{}}})}),e.jsx(o,{children:e.jsx(w,{color:"secondary","data-testid":"add-content-btn",disabled:!i,onClick:s,size:"large",variant:"contained",children:"Next"})})]}),Ye=x(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,z={[b]:{label:"Twitter handle",img:"twitter_default.svg"},[S]:{label:"Youtube channel",img:"youtube_default.svg"},[$]:{label:"RSS Feed",img:"rss_feed.svg"}},We=({onNextStep:t,onPrevStep:s,type:i,value:r})=>e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(He,{children:"Source Type"})})}),e.jsxs(o,{mb:20,children:[e.jsxs(Ke,{children:[e.jsx("img",{alt:z[i].label,className:"badge__img",src:z[i].img}),e.jsx(Je,{children:z[i].label})]}),e.jsx(qe,{children:_e(r,i)??r})]}),e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(Xe,{color:"secondary",disabled:!1,onClick:()=>s(),size:"large",variant:"contained",children:"Cancel"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(w,{color:"secondary","data-testid":"source_next_btn",onClick:()=>t(),size:"large",variant:"contained",children:"Next"})})]})]}),qe=x(o)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 15px;
  color: ${l.GRAY3};
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
`,He=x(y)`
  font-family: Barlow;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`,Je=x(y)`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: ${l.white};
`,Ke=x(o)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,Xe=x(w)`
  && {
    background: ${l.white};
    color: ${l.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${l.white};
      color: ${l.BG2};
    }
  }
`,F=async(t,s,i)=>{const r=N(s)?"radar":"add_node",n={};if(s===C)n.media_url=t.source,n.content_type="audio_video";else if(s===P){if(/(?:https?:\/\/)?(?:www\.)?twitter\.com\/\w+\/status\/\d+/s.test(t.source)){const d=/\/status\/(\d+)/,u=t.source.match(d);if(u!=null&&u[1]){const[,j]=u;n.tweet_id=j}}else n.tweet_id=t.source;n.content_type="tweet"}else if(s===I)n.content_type="webpage",n.web_page=t.source;else if(s===U)n.content_type="document",n.text=t.source;else if(s===b){const[,a]=(t.source||"").match(R)||[];if(a)n.source=a,n.source_type=s;else return}else(s===S||s===$)&&(n.source=t.source,n.source_type=s);t.latitude&&t.longitude&&(n.latitude=t.latitude,n.longitude=t.longitude);let p="",c;ee?c=await se.enable():c=await te.enable(),n.pubkey=c==null?void 0:c.pubkey,p=await oe();try{const a=await ne.post(`/${r}`,JSON.stringify(n),{Authorization:p});if(a.error){const{message:d}=a.error;throw new Error(d)}}catch(a){if(a.status===402)await ie(i),await re(i),await F(t,s,i);else{let d=h;if(a.status===400)try{const u=await a.json();d=u.message||u.errorCode||h}catch{d=h}else a instanceof Error&&(d=a.message||h);throw new Error(d)}}},at=()=>{const[t,s]=f.useState(0),{close:i,visible:r}=Q("addContent"),[n]=D(E=>[E.setBudget]),p=le({mode:"onChange"}),{watch:c,setValue:a,reset:d}=p,[u,j]=f.useState(!1),[G,A]=f.useState("");f.useEffect(()=>()=>{A(""),s(0),d()},[r,d]);const m=c("inputType"),L=c("source"),M=c("longitude"),V=c("latitude"),T=c("source"),Y=Z(L);f.useEffect(()=>{a("inputType",$e(T))},[T,a]);const W=()=>{i()},_=()=>{s(t+1)},q=()=>{s(t-1)},H=p.handleSubmit(async E=>{j(!0);try{await F(E,m,n),ue("Content Added"),W()}catch(g){let k=h;if((g==null?void 0:g.status)===400){const v=await g.json();k=v.errorCode||(v==null?void 0:v.status)||h}else g instanceof Error&&(k=g.message);A(String(k))}finally{j(!1)}});return e.jsx(de,{id:"addContent",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsx(ce,{...p,children:e.jsxs("form",{id:"add-node-form",onSubmit:H,children:[t===0&&e.jsx(Ve,{allowNextStep:Y,onNextStep:_,type:m}),t===1&&e.jsx(e.Fragment,{children:N(m)?e.jsx(We,{onNextStep:_,onPrevStep:q,type:m,value:L}):e.jsx(Pe,{form:p,latitude:V,longitude:M,onNextStep:_})}),t===2&&e.jsx(Ee,{error:G,loading:u,onClick:()=>null,type:m})]})})})};export{at as AddContentModal};
