import{c as B,d as w,u as Q,Q as S,a as k,b as x}from"./use-quasar.69761412.js";import{c as M,a as c,h as T,g as V,D as q,r as h,o as z,z as _,A as D,B as p,C as o,F as v,$ as E,a0 as b,a1 as C,a2 as I,a3 as L,G as F,Q as $}from"./index.42b68e9e.js";import{u as j,b as A,Q as P,s as U}from"./socket.f1220868.js";const H={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},y={xs:2,sm:4,md:8,lg:16,xl:24};var N=M({name:"QSeparator",props:{...B,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const i=V(),u=w(e,i.proxy.$q),d=c(()=>e.vertical===!0?"vertical":"horizontal"),n=c(()=>` q-separator--${d.value}`),t=c(()=>e.inset!==!1?`${n.value}-${H[e.inset]}`:""),g=c(()=>`q-separator${n.value}${t.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(u.value===!0?" q-separator--dark":"")),m=c(()=>{const l={};if(e.size!==void 0&&(l[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const f=e.spaced===!0?`${y.md}px`:e.spaced in y?`${y[e.spaced]}px`:e.spaced,s=e.vertical===!0?["Left","Right"]:["Top","Bottom"];l[`margin${s[0]}`]=l[`margin${s[1]}`]=f}return l});return()=>T("hr",{class:g.value,style:m.value,"aria-orientation":d.value})}});const W={class:"messages"},G={class:"title"},R={class:"messages--body"},J={id:"scrollArea",class:"messages--conversation-area"},K=["innerHTML"],Z=q({__name:"ChatPage",setup(e){const i=j(),u=h("Send"),d=h(null);let n="Type a message here ...";const t=h(n),g=Q();function m(){if(t.value===n||t.value===""){g.notify({message:"Write something!",color:"negative"});return}U(i.getUsername,t.value),t.value=""}const l=()=>{let s=document.getElementById("jimi");(s==null?void 0:s.offsetWidth)<100&&(u.value="")};A.on("scroll",()=>{f()});const f=()=>{const a=document.getElementById("scrollArea").lastElementChild;a==null||a.scrollIntoView()};return z(()=>{l()}),(s,a)=>(_(),D(P,{class:"row items-center justify-evenly"},{default:p(()=>[o(x,{class:"main-area"},{default:p(()=>[v("div",W,[v("p",G,E(b(i).getUsername),1),o(N),v("div",R,[v("div",J,[(_(!0),C(L,null,I(b(i).getContent,r=>(_(),C("span",{key:r,innerHTML:r,ref_for:!0,ref_key:"scrollToMe",ref:d},null,8,K))),128))])])]),o(S,{onSubmit:F(m,["prevent"]),class:"messages--input"},{default:p(()=>[o(k,{outlined:"",modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=r=>t.value=r),class:"second-input",dense:"",onFocus:a[1]||(a[1]=r=>t.value=t.value==b(n)?"":t.value)},null,8,["modelValue"]),o($,{id:"jimi",label:u.value,class:"send-button shadow-1","icon-right":"send","no-caps":"",unelevated:"",onClick:m},null,8,["label"])]),_:1},8,["onSubmit"]),o($,{id:"videoCall",label:"Video",class:"video-call-button full-width shadow-1 q-mt-md",icon:"videocam",color:"primary","no-caps":"",unelevated:"","full-width":"",to:"/videoCall"})]),_:1})]),_:1}))}});export{Z as default};