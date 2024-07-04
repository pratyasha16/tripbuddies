"use strict";(self.webpackChunktripbuddies_cms=self.webpackChunktripbuddies_cms||[]).push([[8477],{8477:(x,O,t)=>{t.r(O),t.d(O,{default:()=>U});var a=t(92132),c=t(21272),m=t(33544),s=t.n(m),h=t(52993),v=t(7153),C=t(83997),f=t(8361),A=t(16918),R=t(10229),y=t(68802),T=t(55506),B=t(54894),I=t(63891);const L=n=>{const{selectProps:d}=n,i=p=>o=>{o.preventDefault(),d.onChange(d.value.filter(_=>_!==p))};return(0,a.jsx)(h.v,{type:"button",tabIndex:-1,icon:(0,a.jsx)(y.A,{}),onClick:i(n.data),children:n.data.label})},K=(0,I.default)(T._8)`
  .select-control {
    height: auto;

    & > div:first-child {
      padding: 4px;
      gap: 4px;

      & > div {
        padding-left: 8px;
      }
    }

    .select-multi-value-container {
      margin-right: -8px;
    }
  }
`,M=({value:n,onChange:d,name:i,intlLabel:p,required:o,attribute:_,description:P,placeholder:W,disabled:b,error:D})=>{const{formatMessage:u}=(0,B.A)(),r=(0,c.useMemo)(()=>(_.options||[]).map(e=>{const[l,E]=[...e.split(/:(.*)/s),e];return!l||!E?null:{label:l,value:E}}).filter(Boolean),[_]),j=(0,c.useMemo)(()=>{let e;try{e=JSON.parse(n||"[]")}catch{e=[]}return Array.isArray(e)?r.filter(l=>e.some(E=>l.value===E)):[]},[n,r]),g=(0,c.useMemo)(()=>D||(o&&!r.length?"No options":null),[o,D,r]);return(0,a.jsx)(v.D,{hint:P&&u(P),error:g,name:i,required:o,children:(0,a.jsxs)(C.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,a.jsx)(f.d,{children:u(p)}),(0,a.jsx)(K,{isSearchable:!0,isMulti:!0,error:g,name:i,id:i,disabled:b||r.length===0,placeholder:W,defaultValue:j.map(e=>({label:u({id:e.label,defaultMessage:e.label}),value:e.value})),components:{MultiValueContainer:L},options:r.map(e=>({...e,label:u({id:e.label,defaultMessage:e.label})})),onChange:e=>{d({target:{name:i,value:e?.length&&e.filter(l=>!!l)?JSON.stringify(e.filter(l=>!!l).map(l=>l.value)):null,type:_.type}})},classNames:{control:e=>"select-control",multiValue:e=>"select-multi-value",placeholder:e=>"select-placeholder"}}),(0,a.jsx)(A.o,{}),(0,a.jsx)(R.b,{})]})})};M.defaultProps={description:null,disabled:!1,error:null,labelAction:null,required:!1,value:""},M.propTypes={intlLabel:s().object.isRequired,onChange:s().func.isRequired,attribute:s().object.isRequired,name:s().string.isRequired,description:s().object,disabled:s().bool,error:s().string,labelAction:s().object,required:s().bool,value:s().string};const U=M}}]);
