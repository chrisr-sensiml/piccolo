/*
Copyright 2017-2024 SensiML Corporation

This file is part of SensiML™ Piccolo AI™.

SensiML Piccolo AI is free software: you can redistribute it and/or
modify it under the terms of the GNU Affero General Public License
as published by the Free Software Foundation, either version 3 of
the License, or (at your option) any later version.

SensiML Piccolo AI is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public
License along with SensiML Piccolo AI. If not, see <https://www.gnu.org/licenses/>.
*/

"use strict";(self.webpackChunksensiml_web=self.webpackChunksensiml_web||[]).push([[67],{78960:(e,t,a)=>{a.d(t,{A:()=>r});const r=a(99640).A},78578:(e,t,a)=>{a.d(t,{A:()=>u});var r=a(65043),i=a(53536),o=a.n(i),n=a(3156),s=a(7478),l=a(96446),d=a(12008),c=a(70579);const u=e=>{let{children:t,isError:a,onDrop:i}=e;const u=(0,s.A)((e=>({root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:e.spacing(.5),width:"100%",height:"100%",border:"1px solid ".concat(e.palette.primary.light)},draggingIn:{borderColor:e.palette.primary.light,borderStyle:"dashed",transition:e.transitions.create(["border-color"],{duration:e.transitions.duration.complex})},isError:{borderColor:e.palette.error.light,borderWidth:"2px",transition:e.transitions.create(["border-color"],{duration:e.transitions.duration.complex})},draggingWrapper:{position:"absolute",backgroundColor:e.backgroundLoaderBackdrop,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:e.spacing(2),top:0,bottom:0,left:0,right:0,zIndex:9999}})))(),p=(0,r.useRef)();let m=0;const[v,g]=(0,r.useState)(!1),h=e=>{e.preventDefault(),e.stopPropagation()},f=e=>{e.preventDefault(),e.stopPropagation()},x=e=>{e.preventDefault(),e.stopPropagation(),m++,g(!0)},A=e=>{e.preventDefault(),e.stopPropagation(),m--,0===m&&g(!1)},j=e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer.files&&!o().isEmpty(e.dataTransfer.files)&&(i(e.dataTransfer.files),m=0,g(!1))};return(0,r.useEffect)((()=>((()=>{const e=p.current;e.removeEventListener("dragover",h),e.removeEventListener("dragenter",x),e.removeEventListener("dragleave",A),e.removeEventListener("drop",j),e.removeEventListener("dropend",f)})(),(()=>{const e=p.current;e.addEventListener("dragover",h),e.addEventListener("dragenter",x),e.addEventListener("dragleave",A),e.addEventListener("drop",j),e.addEventListener("dropend",f)})())),[]),(0,c.jsxs)(l.A,{ref:p,className:"".concat(u.root," ").concat(v?u.draggingIn:a?u.isError:""),p:6,children:[(0,c.jsx)(d.A,{in:v,children:(0,c.jsxs)(l.A,{className:u.draggingWrapper,children:[(0,c.jsx)(n.A,{color:"primary",fontSize:"large"}),"Drop here"]})}),t]})}},59352:(e,t,a)=>{a.d(t,{A:()=>u});a(65043);var r=a(7478),i=a(96446),o=a(85865),n=a(77739),s=a(11906),l=a(7426),d=a(78960),c=a(70579);const u=e=>{let{title:t,isOpen:a,columns:u=[],data:p=[],onClose:m,onSelect:v}=e;const{t:g}=(0,l.B)("components"),h=(0,r.A)((e=>({infoTitle:{marginBottom:e.spacing(4),marginTop:e.spacing(2),fontSize:e.spacing(4),fontWeight:500,textAlign:"center"},dialogTable:{marginTop:e.spacing(1),width:"100%"},selectedRow:{background:"#76ccfd24"},dialogTableRow:{"& h6":{display:"table-cell",padding:e.spacing(.5),borderBottom:"1px solid silver"}},utitCell:{width:"100px",textAlign:"center"}})))();return(0,c.jsx)(d.A,{isOpen:a,onClose:m,children:(0,c.jsxs)(i.A,{children:[(0,c.jsx)(o.A,{variant:"h2",className:h.infoTitle,children:t}),(0,c.jsxs)(i.A,{className:h.dialogTable,display:"table",children:[(0,c.jsxs)(i.A,{className:h.dialogTableRow,display:"table-row",children:[u.map((e=>(0,c.jsx)(o.A,{variant:"subtitle1",gutterBottom:!0,children:(0,c.jsx)("b",{children:e.title})},"header_".concat(e.field)))),(0,c.jsx)(o.A,{variant:"subtitle1",gutterBottom:!0,children:""},"header_select_empty")]}),p.map(((e,t)=>(0,c.jsxs)(i.A,{display:"table-row",className:"".concat(h.dialogTableRow," ").concat((null===e||void 0===e?void 0:e.isSelected)&&h.selectedRow),children:[u.map(((t,a)=>(0,c.jsx)(o.A,{variant:"subtitle1",gutterBottom:!0,children:null!==t&&void 0!==t&&t.render?null===t||void 0===t?void 0:t.render(e):e[t.field]},"".concat(t.field,"-").concat(a)))),(0,c.jsx)(o.A,{variant:"subtitle1",gutterBottom:!0,children:(0,c.jsx)(n.A,{title:g("dialog-table-select.btn-select-tooltip"),children:(0,c.jsx)("span",{children:(0,c.jsx)(s.A,{variant:"outlined",color:"primary",onClick:()=>v(e),disabled:(null===e||void 0===e?void 0:e.isSelected)||!1,children:null!==e&&void 0!==e&&e.isSelected?g("dialog-table-select.btn-selected"):g("dialog-table-select.btn-select")})})})})]},"row_".concat(t))))]})]})})}},55692:(e,t,a)=>{a.d(t,{A:()=>m});a(65043);var r=a(94109),i=a(96446),o=a(85865),n=a(67254),s=a(11906),l=a(26240),d=a(35875),c=a(7478);const u=()=>(0,c.A)((e=>{var t;return{...e.common,drawerHeader:{marginBottom:e.spacing(2),marginTop:e.spacing(2),fontSize:e.spacing(3),fontWeight:600,color:null===(t=e.palette.notSelected)||void 0===t?void 0:t.main},formDrawerRoot:{zIndex:e.zIndex.drawer+3},formDrawerSizing:{boxSizing:"border-box",width:"55vw","@media (max-width: 900px)":{width:"95vw"}},formStepDrawerContext:{padding:e.spacing(4),paddingTop:e.spacing(8),paddingRight:e.spacing(8),paddingBottom:e.spacing(10)},drawerContent:{whiteSpace:"pre-wrap"},drawerFormButtonWrapper:{zIndex:e.zIndex.drawer+3,boxSizing:"border-box",position:"fixed",right:0,bottom:0,display:"flex",marginTop:e.spacing(2),justifyContent:"flex-end",padding:e.spacing(2),background:e.backgroundElements,borderTop:"1px solid ".concat(e.palette.primary.main),width:"55vw","@media (min-width: 1650px)":{width:"55vw"},"@media (max-width: 900px)":{width:"95vw"}},drawerFormButton:{minWidth:e.spacing(15),textTransform:"uppercase","&:first-child":{marginRight:"1rem"}}}}))();var p=a(70579);const m=e=>{let{title:t,subTitle:a,children:c,isOpen:m,onClose:v,onSubmit:g,alertMessage:h,alertSeverity:f="info",isConfirmDisabled:x=!1}=e;const A=u(),j=(0,l.A)();return(0,p.jsx)(r.Ay,{BackdropProps:{style:{backgroundColor:j.backgroundBackDoor}},classes:{root:A.formDrawerRoot,paperAnchorRight:A.formDrawerSizing},open:m,onClose:v,anchor:"right",variant:"temporary",children:(0,p.jsxs)(i.A,{className:A.formStepDrawerContext,children:[(0,p.jsx)(o.A,{variant:"h2",className:A.drawerHeader,children:t}),(0,p.jsx)(o.A,{paragraph:!0,className:A.drawerInfoText,children:a}),h?(0,p.jsx)(n.A,{severity:f,children:h}):null,(0,p.jsx)(i.A,{"data-test":"drawer-edit-step-form",className:A.drawerContent,children:c}),(0,p.jsxs)(i.A,{className:A.drawerFormButtonWrapper,children:[(0,p.jsx)(s.A,{className:"".concat(A.drawerFormButton," ").concat(A.mr2),size:"large",startIcon:(0,p.jsx)(d.A,{}),variant:"outlined",color:"primary",onClick:v,"data-testid":"edit-step-form-close",children:"Cancel"}),(0,p.jsx)(s.A,{onClick:g,className:A.drawerFormButton,size:"large",variant:"contained",color:"primary","data-testid":"edit-step-form-submit",disabled:x,children:"Save"})]})]})})}},5011:(e,t,a)=>{a.d(t,{H:()=>l});a(65043);var r=a(77739),i=a(88446),o=a(7478);const n=()=>(0,o.A)((e=>({...e.common,baseLink:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"none",cursor:"pointer",color:e.palette.primary.dark}}})))();var s=a(70579);const l=e=>{let{children:t,tooltipTitle:a,...o}=e;const l=n();return(0,s.jsx)(r.A,{title:a,children:(0,s.jsx)(i.A,{...o,className:l.baseLink,children:t})})}},45330:(e,t,a)=>{a.d(t,{P:()=>r});const r=a(65043).createContext()},27067:(e,t,a)=>{a.r(t),a.d(t,{default:()=>We});var r=a(97508),i=a(26481),o=a(50440),n=a(47576),s=a(65043),l=a(53536),d=a.n(l),c=a(7426),u=a(91688),p=a(96446),m=a(59352),v=a(97111),g=a(33206),h=a(34815),f=a(16932),x=a(56604);const A=(e,t)=>{const a=(0,f.Ay)(e),r=(0,x.CE)(t)(e);return a.filter((e=>null===e||void 0===e?void 0:e.metadata)).map((e=>{const t=d().isEmpty(e.label_values)?{}:e.label_values.find((t=>t.uuid===(e=>{var t;return(null===(t=r.find((t=>t.label===e)))||void 0===t?void 0:t.label_value)||""})(e.uuid)));return{name:e.uuid,label:e.name,formType:e.is_dropdown?h.XF.FORM_SELECT_TYPE:h.XF.FORM_STRING_TYPE,defaultValue:e.is_dropdown?(null===t||void 0===t?void 0:t.uuid)||"":(null===t||void 0===t?void 0:t.value)||"",options:d().map(null===e||void 0===e?void 0:e.label_values,(e=>({name:e.value,value:e.uuid})))}}))};var j=a(39338);const y=(e,t)=>{var a;const r=(0,j.dm)(t)(e),i=null===(a=e.captureConfigurations)||void 0===a?void 0:a.data;return[{name:"capture_configuration_uuid",label:"Sensor Configuration",formType:"select",defaultValue:(null===r||void 0===r?void 0:r.capture_configuration_uuid)||"",options:d().map(i,(e=>({name:e.name,value:e.uuid})))}]};var b=a(7996),C=a(58189),S=a(67500),E=a(41104);const w=(e,t,a)=>{const r=[],i=[],o=[];return d().forEach(t,(t=>{d().entries(a).forEach((a=>{let[n,s]=a;const l=(0,x.uA)(t,n)(e),d={capture:t,label:n,label_value:s};l&&s?r.push({...d,uuid:l}):l?o.push(l):s&&i.push(d)}))})),[r,i,o]};var D=a(26941);const M=e=>async(t,a)=>{const r=a(),i=(0,j.bo)(r);t({type:D.z}),await t((0,C._G)(e));let o=[];if(!E.A.isNullOrEmpty(e))try{const{data:t}=await b.Ay.post("/project/".concat(e,"/capture-metadata-relationship/"),{capture_uuid_list:i});o=t}catch(n){S.A.logError("",n,"".concat(E.A.getResponseErrorDetails(n)," \n--projectId:").concat(e),"loadMetadata")}t({type:D.O,metadata:o})};var F=a(53004),T=a(34455),_=a(62482),N=a(3156),U=a(39568),I=a(7478),R=a(85865),L=a(34294),B=a(99640),k=a(1577),P=a(63471),z=a(11313),W=a(15469),O=a(41916),H=a(95540),G=a(77739),V=a(17392),$=a(67254),q=a(53193),X=a(65970);const Y=()=>(0,I.A)((e=>({...e.common,formControl:{marginTop:e.spacing(2),marginBottom:e.spacing(2),position:"relative"},helpIcon:{cursor:"pointer",color:e.colorInfoLinks,position:"absolute",right:"-".concat(e.spacing(4)),top:"30%"}})))();var J=a(70579);const Z=e=>{let{captureMetadataFormData:t,captureConfigurationFromData:a,onUpdateCaptureField:r,onUpdateMetadataField:i,alertMessage:o,validationErrors:n=[],alertType:s="info"}=e;const l=Y(),c=(e,t)=>{r(e,t)},u=(e,t)=>{i(e,t)};return(0,J.jsxs)(J.Fragment,{children:[d().isEmpty(n)?null:(0,J.jsx)($.A,{severity:"error",children:n.map((e=>(0,J.jsx)("p",{children:e})))}),o?(0,J.jsx)($.A,{severity:s,children:o}):null,!d().isEmpty(a)&&a.map((e=>(0,J.jsx)(q.A,{fullWidth:!0,className:l.formControl,children:(0,J.jsx)(X.A,{isUpdateWithDefault:!1,...e,onChange:c})},e.name))),!d().isEmpty(t)&&t.map((e=>(0,J.jsx)(q.A,{fullWidth:!0,className:l.formControl,children:(0,J.jsx)(X.A,{isUpdateWithDefault:!1,...e,onChange:u})},e.name)))]})},K=Z;Z.defaultProps={onUpdateCaptureField:()=>{},onUpdateMetadataField:()=>{}};const Q=K;var ee=a(5259),te=a(55692),ae=a(95004),re=a(52437),ie=a(6011),oe=a(81131),ne=a(5011),se=a(98424);const le=()=>(0,I.A)((e=>({...e.common})))(),de=e=>{let{projectUUID:t,captures:a=[],isLoadingMetadata:r,metadataTableColumnData:i,loadCaptures:o,loadCapturesMetadata:n,getCaptureMetadataFormData:l,getCaptureConfigurationFormData:m,updateCapturesMetadata:v,deleteCapture:g,updateCapture:h,downloadCapture:f}=e;const{t:x}=(0,c.B)("components"),A=(0,u.useHistory)(),j=le(),[y,b]=(0,s.useState)([]),[C,S]=(0,s.useState)(""),[E,w]=(0,s.useState)([]),[D,M]=(0,s.useState)([]),[F,T]=(0,s.useState)(!1),[_,N]=(0,s.useState)(!1),[U,I]=(0,s.useState)(""),[R,B]=(0,s.useState)({}),[k,$]=(0,s.useState)({}),[q,X]=(0,s.useState)([]),Y=(0,s.useMemo)((()=>d().isEmpty(y)),[y]),Z=(0,s.useMemo)((()=>d().union(y,[C]).filter((e=>e))),[y,C]),K=(0,s.useMemo)((()=>({data:d().map(null===a||void 0===a?void 0:a.data,(e=>e)),isFetching:(null===a||void 0===a?void 0:a.isFetching)||r||!1})),[r,a]),de=e=>{A.push(e)},ce=e=>{N(!1),e&&S(e),w(l(e)),M(m(e))},ue=()=>{d().isEmpty(q)||X([]),S(""),w([]),M([]),$({}),B({})},pe=e=>{T(!0),e&&S(e)},me=()=>{T(!1),S("")};(0,s.useEffect)((()=>{n(t)}),[]);const ve=[{title:x("captures-table.header-name"),field:"name",primary:!0,sortable:!0,type:re.$.Text,filterable:!0,render:(e,t)=>(0,J.jsx)(ne.H,{color:"primary",onClick:e=>de(t.openFileURL),tooltipTitle:x("captures-table.tooltip-open-file"),children:e})},{title:x("captures-table.header-segments"),field:"total_events",primary:!0,sortable:!0,type:re.$.Numeric,filterable:!0},{title:x("captures-table.header-size"),field:"file_size_mb",sortable:!0,type:re.$.Numeric,filterable:!0},{title:x("captures-table.header-created-date"),field:"created",sortable:!0,type:re.$.Date,filterable:!0,render:e=>(0,J.jsx)(J.Fragment,{children:(0,se.AB)(e)})},...i,{title:"Open",field:"openFileURL",render:e=>(0,J.jsx)(G.A,{title:x("captures-table.tooltip-open-file"),children:(0,J.jsx)(p.A,{children:(0,J.jsx)(V.A,{variant:"contained",color:"primary",size:"small",onClick:t=>de(e),children:(0,J.jsx)(W.A,{})})})})},{title:x("captures-table.header-export"),field:"uuid",render:(e,t)=>(0,J.jsx)(G.A,{title:x("captures-table.tooltip-download"),children:(0,J.jsx)(V.A,{variant:"contained",color:"primary",size:"small",onClick:()=>((e,t)=>{f(e,t)})(e,t.name),children:(0,J.jsx)(z.A,{})})})},{title:x("captures-table.header-metadata"),field:"uuid",render:e=>(0,J.jsx)(G.A,{title:x("captures-table.tooltip-edit-metadata"),children:(0,J.jsx)(p.A,{children:(0,J.jsx)(V.A,{variant:"contained",color:"primary",size:"small",onClick:()=>ce(e),disabled:!Y,children:(0,J.jsx)(H.A,{})})})})},{title:x("captures-table.header-delete"),field:"uuid",render:e=>(0,J.jsx)("span",{children:(0,J.jsx)(G.A,{title:x("captures-table.tooltip-delete-file"),children:(0,J.jsx)(p.A,{children:(0,J.jsx)(V.A,{variant:"contained",color:"primary",size:"small",sx:{input:{cursor:"pointer"}},onClick:t=>pe(e),disabled:!Y,children:(0,J.jsx)(P.A,{})})})})})}],ge=x("captures-table.title"),he={rowsPerPage:25,rowsPerPageOptions:[10,25,50,100,"All"],showPagination:!0,applyFilters:!0,isDarkHeader:!0,selectionField:"uuid",onSelectInTable:e=>{b(e)},isShowSelection:!0,noContentText:x("captures-table.empty-content")};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(ie.f,{title:ge,onRefresh:()=>o(t),ActionComponent:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(L.U,{variant:"outlined",color:"primary",onClick:()=>ce(),className:j.mr1,disabled:Y,tooltip:"Edit Selected Files Metadata",text:"Metadata",icon:(0,J.jsx)(O.A,{})}),(0,J.jsx)(L.U,{variant:"outlined",color:"primary",onClick:()=>pe(),disabled:Y,tooltip:"Delete Selected Captures",text:"Delete",icon:(0,J.jsx)(P.A,{})})]})}),(0,J.jsx)(ee.A,{tableId:"capturesTable",tableData:K,tableColumns:ve,tableOptions:he,isResetPageAfterUpdateTableData:!1}),(0,J.jsx)(ae.Z,{isOpen:F,title:x("captures-table.alert-deleting-title"),text:x("captures-table.alert-deleting-text"),onConfirm:()=>{Z.forEach((e=>{g(t,e)})),me(),b([])},onCancel:me,cancelText:x("dialog-confirm-delete.cancel"),confirmText:x("dialog-confirm-delete.delete")}),(0,J.jsx)(te.A,{isOpen:!d().isEmpty(E),title:"Change Metadata",onClose:ue,onSubmit:async()=>{const e=[];N(!0);try{if(!d().isEmpty(k))for(const e of Z){const a=K.data.find((t=>t.uuid===e));I(a.name),await h(t,e,k)}}catch(a){e.push("Sensor Configuration: ".concat(" ",a.message))}try{await v(t,Z,R)}catch(a){e.push("Metadata: ".concat(" ",a.message))}d().isEmpty(e)?(n(t),o(t),ue()):X(e),N(!1),I("")},isConfirmDisabled:_,children:_?(0,J.jsx)(oe._S,{isOpen:!0,type:"TailSpin",message:x("captures-table.updating-message",{name:U})}):(0,J.jsx)(Q,{validationErrors:q,captureConfigurationFromData:D,captureMetadataFormData:E,onUpdateCaptureField:(e,t)=>{d().isEmpty(q)||X([]),t&&$((a=>({...a,[e]:t})))},onUpdateMetadataField:(e,t)=>{d().isEmpty(q)||X([]),B((a=>({...a,[e]:t})))}})})]})},ce=de;var ue=a(76839),pe=a(25078),me=a(12299),ve=a(88911),ge=a(11906),he=a(35721),fe=a(71322),xe=a(2050),Ae=a(48734),je=a(65631),ye=a(71612),be=a(49359);const Ce=()=>(0,I.A)((e=>({...e.common,importDialogStepperRoot:{padding:"".concat(e.spacing(1)," ").concat(e.spacing(2)),marginBottom:e.spacing(2)},builderContainer:{padding:e.spacing(2),width:"750px",minHeight:"60vh",margin:"auto",alignItems:"center"},importFormWrapper:{padding:0,display:"flex",flexDirection:"column",justifyContent:"space-around"},importFormWrap:{width:"100%",display:"flex",marginBottom:e.spacing(3),flexDirection:"row"},importFormWrapAction:{display:"flex",alignItems:"top",marginLeft:e.spacing(2),marginTop:e.spacing(1.5)},importFormDescriptionWrapper:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",margin:"0 0 1rem 0"},submitBtn:{marginTop:e.spacing(2)},alertMessage:{overflowY:"auto",width:"100%",whiteSpace:"pre-line"}})))();var Se=a(12008),Ee=a(67784),we=a(78578);const De=e=>{let{onUpload:t,validationError:a}=e;const r=(0,I.A)((e=>({uploadWrapper:{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",gap:e.spacing(1)},errorMsg:{color:e.palette.error.main,whiteSpace:"pre-wrap"}})))(),{t:i}=(0,c.B)("forms"),[o,n]=(0,s.useState)(""),l=(0,s.useMemo)((()=>d().trim("".concat(a," ").concat(o))),[a,o]),u=e=>{n(""),null!==e&&void 0!==e&&e.length&&d().entries(e).forEach((e=>{let[a,r]=e;const o=new FileReader;o.readAsArrayBuffer(r),o.onload=()=>{t(r,r.name)},o.onerror=()=>{n(i("upload-json.error-reader"))}}))};return(0,J.jsx)(we.A,{onDrop:u,isError:Boolean(l),children:(0,J.jsxs)(p.A,{className:r.uploadWrapper,children:[(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(ge.A,{variant:"outlined",color:"primary",component:"label",onChange:e=>{const{files:t}=e.target;u(t)},children:[i("upload-json.btn-upload"),(0,J.jsx)("input",{type:"file",multiple:"multiple",hidden:!0})]}),i("upload-json.text-drag")]}),l?(0,J.jsx)(R.A,{className:r.errorMsg,children:l}):null]})})};De.defaultProps={validationError:""};const Me=De;var Fe=a(61689);const Te=["csv","wav"],_e=e=>{let{captureNames:t,onSubmit:a,errorUpload:r}=e;const{t:i}=(0,c.B)("components"),o=Ce(),[n,l]=(0,s.useState)({}),u=(0,s.useMemo)((()=>d().entries(n).map((e=>{let[t,a]=e;return[t,a.name]}))||[]),[n]),m=e=>d().toLower((0,Fe.WP)(e)),v=(0,s.useMemo)((()=>d().isEmpty(u)?{}:u.reduce(((e,a)=>{let[r,o]=a;const n=(0,Fe.dU)(o);return n&&Te.includes(n)||(e[r]=i("capture-form-import.error-capture-name-extention",{extentions:d().join(Te,", ")})),t.map((e=>m(e))).includes(m(o))&&(e[r]=i("capture-form-import.error-capture-name-exist",{name:o})),u.filter((e=>{let[t,a]=e;return t!==r})).map((e=>{let[t,a]=e;return m(a)})).includes(m(o))&&(e[r]=i("capture-form-import.error-capture-should-be-unique")),e}),{})),[n,t]),g=(0,s.useMemo)((()=>Boolean(!d().isEmpty(v))),[v]);return(0,J.jsxs)(p.A,{children:[d().isEmpty(n)?null:u.map(((e,t)=>{let[a,r]=e;return(0,J.jsx)(Se.A,{in:Boolean(!d().isEmpty(n)),children:(0,J.jsxs)(q.A,{className:o.importFormWrap,children:[(0,J.jsx)(Ee.A,{id:"name",name:"name",fullWidth:!0,variant:"outlined",value:r,onChange:e=>((e,t)=>{l((a=>{const r={...a};return r[e].name=t.target.value,r}))})(a,e),error:Boolean(v[a]),helperText:v[a]}),(0,J.jsx)(p.A,{className:o.importFormWrapAction,children:(0,J.jsx)(L.tA,{"aria-label":"delete",color:"primary",onClick:()=>(e=>{l((t=>{const a={...t};return d().entries(a).reduce(((t,a)=>{let[r,i]=a;return r!==e&&(t[r]={...i}),t}),{})}))})(a),children:(0,J.jsx)(P.A,{})})})]})},"imported-".concat(a,"-").concat(t))})),(null===u||void 0===u?void 0:u.length)>=20?(0,J.jsx)($.A,{severity:"info",variant:"outlined",children:i("capture-form-import.alert-importing-limit")}):(0,J.jsx)(p.A,{className:o.importFormWrap,children:(0,J.jsx)(Me,{onUpload:e=>{l((t=>{const a={...t};return a[d().uniqueId()]={name:e.name,file:e},a}))},validationError:r})}),(0,J.jsx)(p.A,{className:o.importFormWrapper,children:(0,J.jsx)(ge.A,{className:o.submitBtn,color:"primary",variant:"contained",onClick:()=>{a(n)},disabled:g,children:i("capture-form-import.btn-import-submit")})})]})},Ne=e=>{let{projectUUID:t,queriesFormOptions:a,captureNames:r=[],loadCaptures:i,loadCapturesMetadata:o,loadDataAfterUpload:n,updateCapturesMetadata:l,updateCapture:u,onClose:m,onSubmitFile:v,getCaptureMetadataFormData:g,getCaptureConfigurationFormData:h,getSampleRate:f}=e;const{t:x}=(0,c.B)("components"),A=[x("capture-form-import.step-header-import"),x("capture-form-import.step-header-metadata")],j=Ce(),[y,b]=(0,s.useState)(0),[C,E]=(0,s.useState)(!0),[w,D]=(0,s.useState)(!1),[M,F]=(0,s.useState)({}),[T,_]=(0,s.useState)({}),[N,U]=(0,s.useState)([]),[I,L]=(0,s.useState)([]),[B,k]=(0,s.useState)([]),[P,z]=(0,s.useState)({}),[W,O]=(0,s.useState)(""),[H,G]=(0,s.useState)([]);let V=0,q=null;const X=(0,s.useMemo)((()=>B.filter((e=>{var t;let[a]=e;return!(null!==(t=P[a])&&void 0!==t&&t.error)}))),[B,P]),Y=()=>{U(g()),L(h()),b(1)};return(0,s.useEffect)((()=>()=>{S.A.logInfo("","import_files",{number_of_files:V,sample_rate:q,project_uuid:t})}),[]),(0,J.jsxs)(p.A,{className:j.dialogFormContainer,children:[(0,J.jsx)(ue.A,{classes:{root:j.importDialogStepperRoot},alternativeLabel:!0,activeStep:y,children:A.map((e=>(0,J.jsx)(pe.A,{children:(0,J.jsx)(me.A,{children:e})},e)))}),(0,J.jsx)(p.A,{className:j.importFormWrapper,children:0===y?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(p.A,{xs:12,md:12,className:j.importFormDescriptionWrapper,children:w?(0,J.jsxs)(p.A,{width:"100%",children:[(0,J.jsx)($.A,{severity:"warning",classes:{root:j.alertMessage},children:x("capture-form-import.alert-importing-error-form")}),(0,J.jsxs)(ve.A,{mt:2,direction:"row",justifyContent:"center",gap:2,children:[(0,J.jsx)(ge.A,{onClick:()=>{D(!1),k(X),E(!0)},color:"primary",variant:"outlined",children:x("capture-form-import.btn-import-more-files")}),(0,J.jsx)(ge.A,{onClick:Y,color:"primary",variant:"outlined",disabled:d().isEmpty(X),children:x("capture-form-import.btn-import-open-metadata-form")})]})]}):(0,J.jsx)($.A,{severity:"info",classes:{root:j.alertMessage},children:x("capture-form-import.help-text")})}),C?(0,J.jsx)(_e,{captureNames:r,queriesFormOptions:a,onSubmit:async e=>{E(!1),D(!1);let t=!0;for(const[r,i]of d().entries(e)){const e={name:i.name};k((e=>[[r,i.name],...e]));try{e.uuid=await v(i.file,i.name),V+=1}catch(a){t=!1,e.error=a.message}z((t=>({...t,[r]:e})))}t?Y():D(!0),n()}}):null,d().isEmpty(B)?null:(0,J.jsxs)(J.Fragment,{children:[C?(0,J.jsx)(R.A,{mt:2,variant:"h3",color:"primary",children:x("capture-form-import.header-imported-files")}):null,(0,J.jsx)(he.A,{dense:!0,children:B.map((e=>{var t,a,r;let[i,o]=e;return(0,J.jsxs)(fe.Ay,{children:[(0,J.jsx)(xe.A,{children:null!==(t=P[i])&&void 0!==t&&t.uuid?(0,J.jsx)(je.A,{color:"success"}):null!==(a=P[i])&&void 0!==a&&a.error?(0,J.jsx)(J.Fragment,{children:(0,J.jsx)(ye.A,{color:"error"})}):(0,J.jsx)(be.x3,{color:"primary"})}),(0,J.jsx)(Ae.A,{primary:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(R.A,{variant:"subtitle1",children:o}),(0,J.jsx)(R.A,{variant:"caption",gutterBottom:!0,color:"error",style:{whiteSpace:"pre-wrap"},children:null===(r=P[i])||void 0===r?void 0:r.error})]})})]},"uploaded-capture-".concat(o))}))})]})]}):(0,J.jsxs)(p.A,{className:j.dialogFormContainer,children:[(0,J.jsx)($.A,{children:x("capture-form-import.alert-success-import",{})}),d().isEmpty(W)?(0,J.jsx)(Q,{validationErrors:H,captureMetadataFormData:N,captureConfigurationFromData:I,onUpdateCaptureField:(e,t)=>{d().isEmpty(H)||G([]),q=f(t),_((a=>({...a,[e]:t})))},onUpdateMetadataField:(e,t)=>{d().isEmpty(H)||G([]),F((a=>({...a,[e]:t})))}}):(0,J.jsx)(oe._S,{isOpen:!0,type:"TailSpin",message:x("captures-table.updating-message",{name:W})}),(0,J.jsx)(p.A,{className:j.importFormWrapper,children:(0,J.jsx)(ge.A,{className:j.submitBtn,color:"primary",variant:"contained",onClick:async()=>{const e=[];try{if(!d().isEmpty(T))for(const[e]of B)O(P[e].name),await u(t,P[e].uuid,T)}catch(a){e.push("Sensor Configuration: ".concat(" ",a.message))}try{await l(t,X.map((e=>{let[t]=e;return P[t].uuid})),M)}catch(a){e.push("Metadata: ".concat(" ",a.message))}d().isEmpty(e)?(o(t),i(t),m()):G(e),O("")},children:x("capture-form-import.btn-submit")})})]})})]})},Ue=Ne;var Ie=a(45330);const Re=e=>{let{selectedSessionUUID:t,selectedSession:a,loadCapturesMetadata:r,updateCapturesMetadata:i,uploadCapture:o,updateCapture:n,getCaptureMetadataFormData:l,getCaptureConfigurationFormData:m,getSampleRate:v,captures:h,metadataTableColumnData:f,isLoadingMetadata:x,loadCapture:A,loadCapturesStatistics:j,loadSources:y,deleteCapture:b}=e;const C=(0,I.A)((e=>({...e.common,createDialogTitle:{marginBottom:e.spacing(2),textAlign:"center"},chartInformationHeader:{color:e.palette.primary.main,fontWeight:500,marginRight:e.spacing(1)}})))(),{projectUUID:S}=(0,u.useParams)(),{t:E}=(0,c.B)("data-manager"),[w,D]=(0,s.useState)(!1),{onOpenSelectSessionDialog:M}=(0,s.useContext)(Ie.P),F=(0,g.fN)(),T=async()=>{await j(S,t)},_=()=>{D(!1)},P=(0,s.useMemo)((()=>d().isEmpty(null===h||void 0===h?void 0:h.data)?[]:h.data.map((e=>e.name))),[h]);return(0,s.useEffect)((()=>{(async()=>{d().isEmpty(null===h||void 0===h?void 0:h.data)&&await T(),d().isEmpty(f)&&await r(S)})()}),[]),(0,s.useEffect)((()=>{T()}),[t]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(p.A,{mb:2,children:(0,J.jsx)(k.A,{title:(0,J.jsx)(J.Fragment,{children:"Data Manager"}),subtitle:F?"":(0,J.jsxs)(R.A,{variant:"subtitle1",children:[(0,J.jsx)("span",{className:C.chartInformationHeader,color:"primary",children:"".concat(E("capture-screen.session"),":")}),null===a||void 0===a?void 0:a.name]}),actionsBtns:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(L.U,{variant:"outlined",color:"primary",onClick:()=>M(),tooltip:E("capture-screen.panel-btn-session"),text:E("capture-screen.panel-btn-session"),icon:(0,J.jsx)(U.A,{})}),(0,J.jsx)(L.U,{variant:"outlined",color:"primary",onClick:()=>{D(!0)},tooltip:E("capture-screen.panel-btn-import-tooltip"),text:E("capture-screen.panel-btn-import-text"),icon:(0,J.jsx)(N.A,{})})]})})}),(0,J.jsxs)(B.A,{isOpen:w,onClose:_,children:[(0,J.jsx)(R.A,{variant:"h2",className:C.createDialogTitle,children:E("Import capture file")}),(0,J.jsx)(Ue,{projectUUID:S,onSubmitFile:(e,t)=>o(S,e,t),updateCapturesMetadata:i,updateCapture:n,onSubmitCaptureForm:async(e,t,a)=>{const o=[];try{await n(S,e,t)}catch(s){o.push("Sensor Configuration: ".concat(" ",s.message))}try{await i(S,[e],a)}catch(s){o.push("Metadata: ".concat(" ",s.message))}r(S),D(!1),d().isEmpty(o)&&T()},loadCaptures:T,loadCapturesMetadata:r,loadDataAfterUpload:()=>{T(),y(S)},onClose:_,captureNames:P,getCaptureMetadataFormData:l,getCaptureConfigurationFormData:m,getSampleRate:v})]}),(0,J.jsx)(ce,{updateCapturesMetadata:i,deleteCapture:b,updateCapture:n,loadCaptures:T,loadCapturesMetadata:r,projectUUID:S,getCaptureMetadataFormData:l,getCaptureConfigurationFormData:m,captures:h,isLoadingMetadata:x,downloadCapture:async(e,t)=>{await A(S,e,t,!0)},metadataTableColumnData:f})]})},Le={loadCapturesMetadata:M,updateCapturesMetadata:(e,t,a)=>async(r,i)=>{const o=i(),n={...a};await Promise.all(d().entries(a).map((async t=>{var a;let[i,s]=t;const l=(null===(a=(0,f.cH)(i)(o))||void 0===a?void 0:a.label_values)||[];if(!l.find((e=>e.uuid===s))&&s){const t=l.find((e=>e.value===s));if(t)n[i]=t.uuid;else{const t=await r((0,C.JC)(e,i,s));n[i]=t.data.uuid}}}),[]));const[s,l,c]=w(o,t,n);if(!E.A.isNullOrEmpty(e))try{d().isEmpty(s)||await b.Ay.put("/project/".concat(e,"/metadata-relationship/"),s),d().isEmpty(l)||await b.Ay.post("/project/".concat(e,"/metadata-relationship/"),l),d().isEmpty(c)||await b.Ay.post("v2/project/".concat(e,"/metadata-relationship/delete/"),c)}catch(u){S.A.logError("",u,"".concat(E.A.getResponseErrorDetails(u)," \n--projectId:").concat(e),"loadMetadata"),(0,b.M3)(u,"capture metadata updating")}},uploadCapture:T.eX,updateCapture:T.Op,loadCapture:T.Pr,loadCapturesStatistics:T.dA,loadSources:F.D,deleteCapture:T.Oq},Be=(0,r.Ng)((e=>{var t;return{captures:(0,j.BW)(e),getCaptureMetadataFormData:t=>A(e,t),getCaptureConfigurationFormData:t=>y(e,t),getSampleRate:t=>(0,_.G)(t)(e),selectedSessionUUID:(0,o.ju)(e),metadataTableColumnData:(0,f.AG)(e),isLoadingMetadata:(null===(t=e.metadata)||void 0===t?void 0:t.isFetching)||!1}}),Le)(Re),ke=(0,s.lazy)((()=>Promise.all([a.e(357),a.e(976),a.e(132),a.e(478),a.e(239),a.e(12)]).then(a.bind(a,91012)))),Pe=e=>{let{sessions:t,selectedSessionUUID:a,isDemoTeam:r,setSelectedSession:i,loadSessions:o}=e;const n=(0,u.useHistory)(),[l]=(0,g.NN)(),h=(0,u.useLocation)(),{projectUUID:f}=(0,u.useParams)(),{t:x}=(0,c.B)("data-manager"),A=(0,s.useMemo)((()=>t.map((e=>({...e,isSelected:e.uuid===a})))),[t,a]),j=(0,s.useMemo)((()=>t.find((e=>e.uuid===a))),[t,a]),y=(0,s.useMemo)((()=>!1===(null===j||void 0===j?void 0:j.custom)),[j]),b=(0,s.useMemo)((()=>r),[r]),[C,S]=(0,s.useState)(!1),E=()=>{S(!0)},w=()=>{S(!1)},D=e=>{l.set("session",e),n.replace({search:l.toString()}),w()};return(0,s.useEffect)((()=>{const e=l.get("session");e&&e!==a&&i(e)}),[h]),(0,s.useEffect)((()=>{o(f)}),[]),(0,s.useEffect)((()=>{var e;d().isEmpty(j)&&!d().isEmpty(t)&&D(null===(e=t[0])||void 0===e?void 0:e.uuid)}),[t]),(0,J.jsxs)(p.A,{children:[(0,J.jsxs)(u.Switch,{children:[(0,J.jsx)(u.Route,{path:v.bw.MAIN.DATA_MANAGER.child.CAPTURES_SCREEN.path,children:(0,J.jsx)(Ie.P.Provider,{value:{onOpenSelectSessionDialog:E},children:(0,J.jsx)(Be,{selectedSession:j})})}),(0,J.jsx)(u.Route,{path:v.bw.MAIN.DATA_MANAGER.child.CAPTURE_DETAILS_SCREEN.path,children:(0,J.jsx)(Ie.P.Provider,{value:{onOpenSelectSessionDialog:E},children:(0,J.jsx)(s.Suspense,{fallback:oe.HE,children:(0,J.jsx)(ke,{selectedSession:j,isDisabledByAutoSession:y,isReadOnlyMode:b})})})}),(0,J.jsx)(u.Route,{children:(0,J.jsx)(u.Redirect,{from:v.bw.MAIN.DATA_MANAGER.path,to:{pathname:(0,u.generatePath)(v.bw.MAIN.DATA_MANAGER.child.CAPTURES_SCREEN.path,{projectUUID:f})}})})]}),(0,J.jsx)(m.A,{title:x("dialog-session-select.title"),isOpen:C,data:A,columns:[{title:"Name",field:"name"},{title:"Type",field:"type"},{title:"Algorithm",field:"algorithm"}],onClose:w,onSelect:e=>D(e.uuid)})]})},ze={createSession:i.jw,setSelectedSession:i.ci,loadSessions:i.yO},We=(0,r.Ng)((e=>({sessions:(0,o.WV)(e)||[],selectedSessionUUID:e.sessions.selectedSessionUUID||"",isDemoTeam:(0,n.lx)(e)||!1})),ze)(Pe)},62482:(e,t,a)=>{a.d(t,{G:()=>o});var r=a(53536),i=a.n(r);const o=e=>t=>{var a;const r=(null===(a=t.captureConfigurations)||void 0===a?void 0:a.data)||[];let o;if(i().isArray(r)&&r.length>0){let t={};var n,s;if(e)t=(null===(n=r.find((t=>t.uuid===e)))||void 0===n?void 0:n.configuration)||{};else t=(null===(s=r[0])||void 0===s?void 0:s.configuration)||{};if(!i().isEmpty(t)){const{capture_sources:e}=t;i().isArray(e)&&i().forEach(e,(e=>{o=e.sample_rate}))}}return o}},56604:(e,t,a)=>{a.d(t,{Bz:()=>l,CE:()=>n,uA:()=>s});var r=a(53536),i=a.n(r),o=a(16932);const n=e=>t=>{var a;return i().isEmpty(null===(a=t.captureMetadata)||void 0===a?void 0:a.data)?[]:t.captureMetadata.data.filter((t=>t.capture===e))},s=(e,t)=>a=>{var r;if(!i().isEmpty(null===(r=a.captureMetadata)||void 0===r?void 0:r.data)){const r=a.captureMetadata.data.find((a=>a.capture===e&&a.label===t));return(null===r||void 0===r?void 0:r.uuid)||""}return""},l=e=>t=>{var a;if(!i().isEmpty(null===(a=t.captureMetadata)||void 0===a?void 0:a.data)){return t.captureMetadata.data.filter((t=>t.capture===e)).reduce(((e,a)=>{var r;const n=(0,o.cH)(a.label)(t);return e[n.name]=(null===(r=i().find(n.label_values,(e=>e.uuid===a.label_value)))||void 0===r?void 0:r.value)||"",e}),{})}return{}}},39338:(e,t,a)=>{a.d(t,{$S:()=>m,BW:()=>u,bo:()=>p,dm:()=>c});var r=a(53536),i=a.n(r),o=a(97111),n=a(91688),s=a(61689),l=a(12826),d=a(50440);const c=e=>t=>{var a,r;return i().isEmpty(null===(a=t.captures)||void 0===a||null===(r=a.capturesStatistics)||void 0===r?void 0:r.data)?"":t.captures.capturesStatistics.data.find((t=>t.uuid===e))},u=e=>{var t,a,r,c,u,p;const m=null===(t=e.projects)||void 0===t||null===(a=t.selectedProject)||void 0===a?void 0:a.uuid,v=(0,l.V7)(e),g=(0,d.ju)(e);var h,f;return i().isEmpty(null===(r=e.captures)||void 0===r||null===(c=r.capturesStatistics)||void 0===c?void 0:c.data)?{data:[],isFetching:(null===(u=e.captures)||void 0===u||null===(p=u.capturesStatistics)||void 0===p?void 0:p.isFetching)||!1}:{data:e.captures.capturesStatistics.data.sort(((e,t)=>(0,s.tu)(e.name,t.name))).map((e=>({...e,openFileURL:"".concat((0,n.generatePath)(o.bw.MAIN.DATA_MANAGER.child.CAPTURE_DETAILS_SCREEN.path,{projectUUID:m,captureUUID:e.uuid}),"?label=").concat(v,"&session=").concat(g)}))),isFetching:(null===(h=e.captures)||void 0===h||null===(f=h.capturesStatistics)||void 0===f?void 0:f.isFetching)||!1}},p=e=>{var t,a;return i().isEmpty(null===(t=e.captures)||void 0===t||null===(a=t.capturesStatistics)||void 0===a?void 0:a.data)?"":e.captures.capturesStatistics.data.map((e=>{let{uuid:t}=e;return t}))},m=e=>{var t,a,r,o;return i().isEmpty(null===(t=e.captures)||void 0===t||null===(a=t.captureSensorData)||void 0===a?void 0:a.data)?[[]]:null===(r=e.captures)||void 0===r||null===(o=r.captureSensorData)||void 0===o?void 0:o.data}},16932:(e,t,a)=>{a.d(t,{AG:()=>u,Ay:()=>d,_8:()=>c,cH:()=>l});var r=a(53536),i=a.n(r),o=a(52437),n=a(34815),s=a(61689);const l=e=>t=>{var a,r;return i().isEmpty(null===(a=t.metadata)||void 0===a?void 0:a.data)?{}:(null===(r=t.metadata)||void 0===r?void 0:r.data.find((t=>t.uuid===e)))||{}},d=e=>{var t,a;return i().isEmpty(null===(t=e.metadata)||void 0===t?void 0:t.data)?[]:null===(a=e.metadata)||void 0===a?void 0:a.data.map((e=>({...e,label_values:i().isEmpty(null===e||void 0===e?void 0:e.label_values)?[]:e.label_values.sort(((e,t)=>(0,s.tu)(e.value,t.value)))})))},c=e=>{var t,a;return i().isEmpty(null===(t=e.metadata)||void 0===t?void 0:t.data)?[]:null===(a=e.metadata)||void 0===a?void 0:a.data.map((e=>({...e,label_values:i().isEmpty(null===e||void 0===e?void 0:e.label_values)?[]:e.label_values.sort(((e,t)=>(0,s.tu)(e.value,t.value)))})))},u=e=>{var t,a;return i().isEmpty(null===(t=e.metadata)||void 0===t?void 0:t.data)?[]:null===(a=e.metadata)||void 0===a?void 0:a.data.filter((e=>null===e||void 0===e?void 0:e.metadata)).map((e=>({title:null===e||void 0===e?void 0:e.name,field:null===e||void 0===e?void 0:e.name,lookup:i().isArray(e.label_values)?e.label_values.reduce(((e,t)=>(e[t.value]=t.value,e)),{}):[],formType:e.is_dropdown?n.XF.FORM_SELECT_TYPE:n.XF.FORM_STRING_TYPE,sortable:!0,filterable:!0,type:o.$.Text})))}},50440:(e,t,a)=>{a.d(t,{W8:()=>o,WV:()=>d,Wn:()=>s,f_:()=>n,ju:()=>l});var r=a(53536),i=a.n(r);const o=e=>t=>{var a;return i().isEmpty(null===t||void 0===t||null===(a=t.sessions)||void 0===a?void 0:a.data)?{}:t.sessions.data.find((t=>i().toString(t.id)===i().toString(e)))||{}},n=e=>t=>{var a,r,o;return i().isArray(null===t||void 0===t||null===(a=t.sessions)||void 0===a?void 0:a.data)&&!i().isEmpty(null===t||void 0===t||null===(r=t.sessions)||void 0===r?void 0:r.data)?(null===(o=t.sessions.data.find((t=>t.id===e)))||void 0===o?void 0:o.name)||{}:""},s=e=>{var t,a;return null!==e&&void 0!==e&&null!==(t=e.sessions)&&void 0!==t&&null!==(a=t.data)&&void 0!==a&&a.length?e.sessions.data[0]:{}},l=e=>{var t;let a=null===(t=(e=>{var t,a;return null!==(t=e.sessions)&&void 0!==t&&t.data&&null!==e&&void 0!==e&&null!==(a=e.sessions)&&void 0!==a&&a.selectedSessionUUID?e.sessions.data.find((t=>{var a;return i().toString(t.id)===i().toString(null===e||void 0===e||null===(a=e.sessions)||void 0===a?void 0:a.selectedSessionUUID)})):{}})(e))||void 0===t?void 0:t.id;var r;a||(a=null===(r=s(e))||void 0===r?void 0:r.id);return i().toString(a)||""},d=e=>{var t,a;const r=e=>{const t=JSON.parse(e);return(null===t||void 0===t?void 0:t.name)||""};return null!==e&&void 0!==e&&null!==(t=e.sessions)&&void 0!==t&&null!==(a=t.data)&&void 0!==a&&a.length?e.sessions.data.map((e=>({name:e.name,type:e.custom?"Manual":"Auto",algorithm:r(e.parameters)||"",uuid:i().toString(e.id),custom:e.custom}))):[]}},35875:(e,t,a)=>{var r=a(24994);t.A=void 0;var i=r(a(40039)),o=a(70579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"}),"CancelOutlined")},65631:(e,t,a)=>{var r=a(24994);t.A=void 0;var i=r(a(40039)),o=a(70579);t.A=(0,i.default)((0,o.jsx)("path",{d:"m18 7-1.41-1.41-6.34 6.34 1.41 1.41zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12zM.41 13.41 6 19l1.41-1.41L1.83 12z"}),"DoneAllOutlined")},95540:(e,t,a)=>{var r=a(24994);t.A=void 0;var i=r(a(40039)),o=a(70579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},15469:(e,t,a)=>{var r=a(24994);t.A=void 0;var i=r(a(40039)),o=a(70579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"LaunchOutlined")},39568:(e,t,a)=>{var r=a(24994);t.A=void 0;var i=r(a(40039)),o=a(70579);t.A=(0,i.default)((0,o.jsx)("path",{d:"m11.99 18.54-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27zm0-11.47L17.74 9 12 13.47 6.26 9z"}),"LayersOutlined")},41916:(e,t,a)=>{var r=a(24994);t.A=void 0;var i=r(a(40039)),o=a(70579);t.A=(0,i.default)((0,o.jsx)("path",{d:"M19.02 10v9H5V5h9V3H5.02c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9zM17 10l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7l2.06.94zm-3.75.75L12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12z"}),"PhotoFilter")}}]);
//# sourceMappingURL=67.e6c30fe1.chunk.js.map