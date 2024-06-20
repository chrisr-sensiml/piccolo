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

"use strict";(self.webpackChunksensiml_web=self.webpackChunksensiml_web||[]).push([[464],{60137:(e,t,a)=>{a.d(t,{A:()=>h});var s=a(97508),n=a(65043),i=a(77739),l=a(85865),r=a(5259),o=a(7426),c=a(7478);const u=()=>(0,c.A)((e=>({grid:{},box:{minWidth:245,paddingRight:20},headerDataLabel:{backgroundColor:e.palette.primary.main,color:e.palette.common.white},centered:{display:"flex",alignItems:"center",flexDirection:"column",marginRight:"2em",marginBottom:"2em"}})))();var d=a(70579);const m={TOTAL:"Predicted",SUPPORT:"Support",UNC:"UNC",UNK:"UNK",POSTPRED:"Pos_Predic(%)",SENSPERC:"Sensitivity(%)",GroundTruth_Total:"GroundTruth_Total",GroundTruth_Title:"Ground Truth"},p=e=>{let{model:t,showTitle:a,modelName:s,fileName:c}=e;const p=u(),[h,f]=(0,n.useState)({data:null,isFetching:t.isFetching}),[x,b]=(0,n.useState)(),{t:g}=(0,o.B)("models"),y=(e,t,a)=>a.tableMainCell,A=(e,t,a)=>{const s=t[e.field],n=t.support;let i=null;if(0!==s&&0!==n){const l=10*Math.round(s/n*100/10);i=t.label===e.title?((e,t)=>{switch(e){case 0:default:return t.tableRowGreen;case 10:return t.tableRowGreen10;case 20:return t.tableRowGreen20;case 30:return t.tableRowGreen30;case 40:return t.tableRowGreen40;case 50:return t.tableRowGreen50;case 60:return t.tableRowGreen60;case 70:return t.tableRowGreen70;case 80:return t.tableRowGreen80;case 90:return t.tableRowGreen90;case 100:return t.tableRowGreen100}})(l,a):((e,t)=>{switch(e){case 0:return t.tableRowRed;case 10:return t.tableRowRed10;case 20:return t.tableRowRed20;case 30:return t.tableRowRed30;case 40:return t.tableRowRed40;case 50:return t.tableRowRed50;case 60:return t.tableRowRed60;case 70:return t.tableRowRed70;case 80:return t.tableRowRed80;case 90:return t.tableRowRed90;case 100:return t.tableRowRed100;default:return t.tableRowGreen}})(l,a)}return t.label===m.POSTPRED&&(i=null),t.label!==m.TOTAL&&e.title!==m.SUPPORT&&e.title!==m.GroundTruth_Title||(i=a.tableDelimiteddBlue),"".concat(a.tableGenericCenteredCell," ").concat(i)},S=(e,t,a)=>"".concat(a.tableGenericCenteredCell," ").concat(t.label===m.TOTAL||e.title===m.SUPPORT||e.title===m.GroundTruth_Title?a.tableDelimiteddBlue:null),j=e=>e.title,v=e=>(0,d.jsx)(i.A,{title:g("confusion-matrix.support"),children:(0,d.jsxs)(l.A,{children:[" ",e.title," "]})}),R=e=>(0,d.jsx)(i.A,{title:g("confusion-matrix.ground-truth"),children:(0,d.jsxs)(l.A,{children:[" ",e.title," "]})}),C=e=>(0,d.jsx)(i.A,{title:g("confusion-matrix.sensitivity"),children:(0,d.jsxs)(l.A,{children:[" ",e.title," "]})}),w=e=>(0,d.jsx)(i.A,{title:g("confusion-matrix.unk"),children:(0,d.jsxs)(l.A,{children:[" ",e.title," "]})}),_=e=>e&&e===m.TOTAL?(0,d.jsx)(i.A,{title:g("confusion-matrix.predicted"),children:(0,d.jsxs)(l.A,{children:[" ",e," "]})}):e&&e===m.POSTPRED?(0,d.jsx)(i.A,{title:g("confusion-matrix.positive-predictivity"),children:(0,d.jsxs)(l.A,{children:[" ",e," "]})}):!e||isNaN(e)||""===e?e:Number(e).toFixed(2),N=(e,t)=>{const a=e.field,s=t.field;let n=0;return a>s?n=1:a<s&&(n=-1),n},T=(e,t)=>{const a=e.label,s=t.label;let n=0;return a>s?n=1:a<s&&(n=-1),n};(0,n.useEffect)((()=>{f({data:[],isFetching:t.isFetching});const e=[];let a=!1,s=[],n=0;if(t.data){const l=t.data;s.push({title:"",field:"label",primary:!0,renderLabel:j,render:_,handleCellStyles:y});let r=0;const o={label:m.TOTAL};let c=[];for(const t in l){const s={label:t};let u=0;for(const e in l[t])o[e]=o[e]?o[e]:0,0===r&&(c.push({title:e,field:e,primary:!0,renderLabel:j,handleCellStyles:A}),e===m.GroundTruth_Total&&(a=!0)),s[e]=(i=l[t][e],+"".concat(Math.round("".concat(i,"e+2")),"e-2")),e===m.UNC?o[e]-=s[e]?s[e]:0:o[e]+=s[e]?s[e]:0,e===m.UNK&&"unknown"===t.toLowerCase()&&(n+=l[t][e]?l[t][e]:0),e!==m.GroundTruth_Total&&(u+=l[t][e]?l[t][e]:0);s.support=u,s.sense_perc=0===u?"":Number(100*(s[t]+n)/u).toFixed(2),o.support=(o.support?o.support:0)+s.support,o.sense_perc="",r++,e.push(s)}e.sort(T),e.push(o),c=c.filter((e=>![m.UNC,m.UNK,m.GroundTruth_Total].includes(e.field))),c.sort(N),c.push({title:m.UNK,field:m.UNK,primary:!0,renderLabel:w,handleCellStyles:S}),s=s.concat(c);const u={label:m.POSTPRED};let d=0;for(const t in s){const a=s[t].field;if("label"!==a){const t=e.find((e=>e.label===a));t&&(d+=t[a],o[a]&&0!==o[a]?u[a]=Number(t[a]/o[a]*100).toFixed(2):u[a]=null)}}u.support="Acc(%)",u.sense_perc=0===o.support?null:Number(100*(d+n)/o.support).toFixed(2),e.push(u),a&&s.push({title:m.GroundTruth_Title,field:m.GroundTruth_Total,primary:!0,renderLabel:R,handleCellStyles:S}),s.push({title:m.SUPPORT,field:"support",primary:!0,renderLabel:v,handleCellStyles:S},{title:m.SENSPERC,field:"sense_perc",primary:!0,renderLabel:C,render:_,handleCellStyles:S})}var i;f({data:e,isFetching:!1}),b(s)}),[t]);return(0,d.jsxs)("div",{className:p.centered,children:[a?(0,d.jsx)(l.A,{variant:"h2",className:p.title,children:"".concat("").concat(s?"".concat(s):"").concat(c?" - ".concat(c):"")}):null,(0,d.jsx)(r.A,{tableColumns:x,tableData:h,tableOptions:{rowsPerPage:100,showPagination:!1,noContentText:"No Data for Confusion Matrix",excludePrimaryFromDetails:!0,headersCentered:!0,isDarkHeader:!0},tableXS:null})]})},h=(0,s.Ng)(null,null)(p)},1577:(e,t,a)=>{a.d(t,{A:()=>m});a(65043);var s=a(68903),n=a(85865),i=a(96446),l=a(69120),r=a(7478),o=a(98424),c=a(6011),u=a(34294),d=a(70579);const m=e=>{let{title:t,subtitle:a,onClickBack:m,actionsBtns:p,turncateLenght:h=0}=e;const f=(0,r.A)((e=>({panelWrapper:{padding:"0.75rem 1rem"},textWrapper:{display:"flex",alignItems:"center"},actionWrapper:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:e.spacing(.5),marginLeft:"auto"},stepperBackButton:{marginRight:e.spacing(2)},titleRoot:{fontSize:e.spacing(2.5)}})))();return(0,d.jsx)(c.W,{children:(0,d.jsxs)(s.Ay,{container:!0,className:f.panelWrapper,children:[(0,d.jsxs)(s.Ay,{item:!0,className:f.textWrapper,children:[m?(0,d.jsx)(u.tA,{className:f.stepperBackButton,onClick:m,color:"primary",size:"small",children:(0,d.jsx)(l.A,{})}):null,(0,d.jsx)(n.A,{variant:"h2",classes:{root:f.titleRoot},children:t&&(0,o.Ud)(t,h)}),(0,d.jsx)(i.A,{alignItems:"center",ml:2,children:a})]}),(0,d.jsx)(s.Ay,{item:!0,className:f.actionWrapper,children:p})]})})}},80923:(e,t,a)=>{a.d(t,{A:()=>f});var s=a(65043),n=a(1577),i=a(91688),l=a(69120),r=a(17022),o=a(36631),c=a(7426),u=a(97111),d=a(33206),m=a(34815),p=a(34294),h=a(70579);const f=e=>{let{modelData:t,isChangePlatform:a,onChangePlatform:f,downloading:x,handleDownloadRequest:b}=e;const{t:g}=(0,c.B)("models"),y=(0,i.useHistory)(),{pathname:A}=(0,i.useLocation)(),S=()=>{const e=(0,i.generatePath)(u.bw.MAIN.MODEL_SELECT.path,{selectionMode:u.bw.MAIN.MODEL_SELECT.MODES.CHANGE});y.push(e,{parentPath:A})},[j,v]=(0,s.useState)(!1);return(0,d.G4)((e=>{v(e.innerWidth<m.xp.WIDTH_FOR_SHORT_TEXT)})),(0,h.jsx)(n.A,{title:j?null===t||void 0===t?void 0:t.name:g("model-select.control-panel-change",{modelName:null===t||void 0===t?void 0:t.name}),onClickBack:j?null:S,turncateLenght:j?m.xp.TRUNCATE_NAME_OVER_SHORT_TEXT:m.xp.TRUNCATE_NAME_OVER,actionsBtns:(0,h.jsxs)(h.Fragment,{children:[a?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.bw,{variant:"outlined",color:"primary",disabled:!1,onClick:()=>{f()},isShort:j,tooltip:g("model-panel.change-platform-btn"),text:g("model-panel.change-platform-btn"),icon:(0,h.jsx)(r.A,{})}),(0,h.jsx)(p.bw,{variant:"outlined",color:"primary",disabled:x,onClick:()=>b(),isShort:j,tooltip:g("model-panel.download-model-btn"),text:g("model-panel.download-model-btn"),icon:(0,h.jsx)(o.A,{})})]}):null,(0,h.jsx)(p.bw,{variant:"outlined",color:"primary",onClick:()=>S(),isShort:j,tooltip:g("model-panel.change-btn"),text:g("model-panel.change-btn"),icon:(0,h.jsx)(l.A,{})})]})})}},29765:(e,t,a)=>{a.d(t,{A:()=>r});a(65043);var s=a(85865),n=a(63336),i=a(96446),l=a(70579);const r=e=>{const{children:t,value:a,index:r,p:o=2,mt:c=2,...u}=e;return(0,l.jsx)(s.A,{component:"div",role:"tabpanel",hidden:a!==r,id:"full-width-tabpanel-".concat(r),"aria-labelledby":"full-width-tab-".concat(r),...u,children:a===r&&(0,l.jsx)(n.A,{elevation:0,children:(0,l.jsx)(i.A,{p:o,mt:c,children:t})})})}},58256:(e,t,a)=>{a.d(t,{A:()=>s});const s=a(75882).A},92464:(e,t,a)=>{a.r(t),a.d(t,{default:()=>De});var s=a(97508),n=a(7996),i=a(41104),l=a(340);const r=e=>{if(!e)return 0;let t=0,a=0;return Object.keys(e).map((s=>{Object.keys(e[s]).map((n=>{"GroundTruth_Total"!==n&&(t+=e[s][n]),(s===n||"UNK"===n&&"unknown"===s.toLowerCase())&&(a+=e[s][n])}))})),0!==t?(a/t*100).toFixed(2):null},o=(e,t,a)=>"".concat(e,"-").concat(t,"-").concat(a);var c=a(34455),u=a(65043),d=a(53536),m=a.n(d),p=a(96446),h=a(68903),f=a(63336),x=a(67254),b=a(40490),g=a(53193),y=a(79190),A=a(72221),S=a(32143),j=a(10611),v=a(1995),R=a(58256),C=a(90537),w=a(34109),_=a(26581),N=a(49167),T=a(24176),E=a(19280),k=a(54469),P=a(85865),O=a(77739),F=a(17392),D=a(11906),z=a(5259),I=a(52437),M=a(6011),L=a(34294),G=a(7478);const U=()=>(0,G.A)((()=>({container:{},contextMenu:{zIndex:101},mr1:{marginRight:"0.5rem"}})))();var H=a(67395),B=a(5180),V=a(50044),W=a(95622),K=a(86328),q=a(30922),$=a(2050),X=a(39336),J=a(70579);function Y(e){let{closeAction:t,menuActions:a,openMenu:s,anchor:n}=e;const i=U(),[l,r]=(0,u.useState)(s),[o,c]=(0,u.useState)(n);(0,u.useEffect)((()=>{r(s)}),[s]);const d=e=>{o.current&&o.current.contains(e.target)||(r(!1),t(e))},m=e=>{"Tab"===e.key&&(e.preventDefault(),r(!1))},p=u.useRef(l);u.useEffect((()=>{!0===p.current&&!1===l&&o&&o.current&&o.current.focus(),p.current=l}),[l]),u.useEffect((()=>{c(n)}),[n]);const h=e=>{a&&a.selectAllInTable(e),d(e)},x=e=>{a&&a.unSelectAllInTable(e),d(e)};return(0,J.jsx)(W.A,{open:l,anchorEl:()=>o||null,role:void 0,transition:!0,disablePortal:!0,className:i.contextMenu,children:e=>{let{TransitionProps:t,placement:a}=e;return(0,J.jsx)(K.A,{...t,style:{transformOrigin:"bottom"===a?"center top":"center bottom"},children:(0,J.jsx)(f.A,{children:(0,J.jsx)(V.x,{onClickAway:d,children:(0,J.jsxs)(q.A,{autoFocusItem:l,id:"menu-list-grow",onKeyDown:m,children:[(0,J.jsxs)(S.A,{onClick:h,children:[(0,J.jsx)($.A,{children:(0,J.jsx)(H.A,{fontSize:"small",color:"primary"})}),(0,J.jsx)(P.A,{variant:"inherit",children:"Select All"})]}),(0,J.jsx)(X.A,{}),(0,J.jsxs)(S.A,{onClick:x,children:[(0,J.jsx)($.A,{children:(0,J.jsx)(B.A,{fontSize:"small",color:"primary"})}),(0,J.jsx)(P.A,{variant:"inherit",children:"Unselect All"})]})]})})})})}})}const Q={width:55,height:55,margin:{t:0,b:0,l:0,r:0},paper_bgcolor:"rgba(0,0,0,0)",plot_bgcolor:"rgba(0,0,0,0)"},Z={domain:{x:[0,1],y:[0,1]},value:0,type:"indicator",mode:"gauge+number",gauge:{borderwidth:.2,axis:{visible:!1,range:[0,100]}}},ee="uuid",te="captureSelected",ae="captureHasBeenRun",se="accuracy",ne="pipelineId",ie="modelId",le={total_events:"Segments",file_size_mb:"Size(MB)"},re=e=>{let{capturesStatistics:t,reRender:a,headerText:s,metadata:n,onRowSelectionAction:l,onRowsSelectionAction:r,showResultsAction:o,recognizingSignal:c,onRefresh:d,getResultFromcache:p,isInTestModel:h,selectedPipeline:f,selectedModel:x,activeSession:b,handleClassifierRun:g,handleComputeSummary:y,handleStopClassierRun:A,classiferIsRunning:S}=e;const j=U(),[v,R]=(0,u.useState)([]),[G,H]=(0,u.useState)(!1),[B,V]=(0,u.useState)(null),[W,K]=(0,u.useState)([]),[q,$]=(0,u.useState)(!1),[X,re]=(0,u.useState)([]),[oe,ce]=(0,u.useState)(b),ue=e=>{e&&R(e.map((e=>e.uuid)))},de=e=>{if(W&&W.data){const t=W.data.find((t=>t[ee]===e));t&&(t[te]=1===t[te]?0:1)}},me=e=>(0,J.jsx)(P.A,{variant:"button",children:e.title.toUpperCase()}),pe=(e,t)=>xe(t[te],t[ee]),he=(e,t)=>fe(t[ae],t[ne],t[ie],t[ee]),fe=(e,t,a,s)=>1===e?(0,J.jsx)(O.A,{title:"Click here to show results",children:(0,J.jsx)(D.A,{size:"small",id:"show_capture_results",variant:"contained",color:"primary",startIcon:(0,J.jsx)(N.A,{}),onClick:e=>{o(t,a,s)},children:"Results"})}):null,xe=(e,t)=>1===e?(0,J.jsx)(O.A,{title:t?"Capture Is Selected":"Captures Selected",children:(0,J.jsx)(F.A,{variant:"contained",color:"primary",size:"small",children:(0,J.jsx)(_.A,{color:"primary",captureuuid:t})})}):(0,J.jsx)(O.A,{title:t?"Click to Select Capture":"Captures Not Selected",children:(0,J.jsx)(F.A,{variant:"contained",color:"primary",size:"small",children:(0,J.jsx)(w.A,{color:"disabled",captureuuid:t})})}),be=(e,t)=>{K((a=>{const s=a.data.map((e=>({...e,[te]:t&&v.includes(e.uuid)?1:0})));return r(e,s),{isFetching:!1,data:s}}))},ge={unSelectAllInTable:function(e){be(e,!1)},selectAllInTable:function(e){be(e,!0)}};(0,u.useEffect)((()=>{ye()}),[a]);const ye=()=>{if(h&&W&&W.data){const e=W;e.data.forEach((e=>{const t=p(e[ee]);e[ne]=f,e[ie]=x,e[ae]=t?1:0,e[se]=t?t.accuracy[oe]:null})),K(e)}},Ae=(e,t)=>{if(!t[ae])return null;const a={...Z,value:t[se]||"NA"};let s="rgb(0,0,0)",n="Capture does'nt have Ground Truth. Accuracy could not be computed";return t[se]&&(s=parseInt(t[se],10)>=80?"rgb(75,152,26)":"rgb(230,70,70)",n="".concat(t[se]," %")),a.gauge={...a.gauge,bar:{color:s,thickness:1}},(0,J.jsx)(O.A,{title:n,children:(0,J.jsx)("div",{children:(0,J.jsx)(C.A,{data:[a],layout:Q,useResizeHandler:!0,config:{displayModeBar:!1,responsive:!0}})})})};(0,u.useEffect)((()=>{const e=X;ce(b);const a=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];0===e.filter((e=>e.field===t.field)).length&&(a?e.unshift(t):e.push(t))};let s=[];const l=[ae,se,te];if(t&&t.data&&t.data.length>0){s=t.data;["name","uuid","total_events","file_size_mb","created","capture_uuid","capture_configuration_uuid",...m().keys(s[0])].forEach((function(e){if(!["Id",ne,ie].includes(e)){if(!0===h&&e===ee)return void a({title:"Accuracy",field:se,sortable:!0,type:I.$.Numeric,filterable:!0,filterHasIcons:!0,renderLabel:me,render:Ae});if(!l.includes(e)){const t={title:le[e]||e,field:e,primary:"name"===e,sortable:!0,type:i.A.isNumber(s[0][e])||"file_size_mb"===e?I.$.Numeric:I.$.Text,filterable:!0,renderLabel:me},l=((e,t)=>{let a=null;if(!e)return a;const s=e.find((e=>e.name===t));return s&&!0===s.is_dropdown&&s.label_values&&(a={},s.label_values.forEach((e=>a[e.value]=e.value))),a})(n,e);l&&(t.lookup=l),a(t)}!0===h&&"file_size_mb"===e&&a({title:"Results",field:ae,sortable:!0,type:I.$.Numeric,filterable:!0,filterHasIcons:!0,lookup:{0:"",1:(t=1,1===t?(0,J.jsx)(O.A,{title:"Cached Capture Classifications",children:(0,J.jsx)(F.A,{variant:"contained",color:"primary",size:"small",children:(0,J.jsx)(N.A,{color:"primary",size:"small"})})}):null)},renderLabel:me,render:he})}var t}))}!0===h&&a({title:" ",field:te,sortable:!0,type:I.$.Numeric,filterable:!0,filterHasIcons:!0,lookup:{0:"Unselected",1:"Selected"},renderLabel:me,render:pe},!0),h&&m().isArray(s)&&s.forEach((e=>{const t=p(e[ee]);e[ne]=f,e[ie]=x,e[te]=0,e[ae]=t?1:0,e[se]=t?t.accuracy[b]:0})),K({data:s,isFetching:t.isFetching}),ue(s),re(e)}),[t,b,n]),(0,u.useEffect)((()=>{$(h)}),[h]),(0,u.useEffect)((()=>{ye()}),[x,f]);const Se=s||"",je={rowsPerPage:10,showPagination:!0,noContentText:"No ".concat(s||"Capture Files"),excludePrimaryFromDetails:!0,onRowSelection:(e,t)=>{if(!0===q){if("show_capture_results"===e.target.id||void 0!==e.target.parentNode&&"show_capture_results"===e.target.parentNode.id)return;if(!0===c())return;de(t.uuid),l(e,t)}},rowsPerPageOptions:[5,10,25,50,100,"All"],applyFilters:!0,getCustomRowProps:h?(e,t,a)=>e[ae]?e[se]?e[se]>=80?a.tableRowGreen:a.tableRowRed:a.tableRowGrey:"":null,contextMenuAction:h?e=>{H(!0),V(e.currentTarget)}:null,captureTableData:ue,isDarkHeader:!0};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(M.f,{title:Se,onRefresh:d,ActionComponent:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(L.U,{variant:"outlined",color:"primary",className:j.mr1,disabled:S,onClick:()=>g(),tooltip:"Test the model against the File Data using Emulation",text:"Recognize",icon:(0,J.jsx)(k.A,{})}),(0,J.jsx)(L.U,{variant:"outlined",color:"primary",className:j.mr1,disabled:S,onClick:()=>y(),tooltip:"Summarize the Results across all selected Files",text:"Summarize",icon:(0,J.jsx)(T.A,{})}),(0,J.jsx)(L.U,{variant:"outlined",color:"primary",disabled:!1,onClick:()=>A,tooltip:"Stop The Currently Executing Test",text:"Stop",icon:(0,J.jsx)(E.A,{}),className:j.mr1})]})}),(0,J.jsx)(z.A,{tableId:"projectStatisticsTable",tableColumns:X,tableData:W,tableOptions:je}),(0,J.jsx)(Y,{closeAction:e=>{H(!1)},openMenu:G,menuActions:ge,anchor:B})]})},oe=(0,s.Ng)(((e,t)=>({capturesStatistics:e.captures.capturesStatistics||{},headerText:t.headerText,metadata:e.metadata.data,onRowSelectionAction:t.onRowSelectionAction})),null)(re);var ce=a(80923),ue=a(81131);const de=()=>(0,G.A)((e=>({root:{flexGrow:1},mainHeader:{paddingLeft:10},box:{minWidth:245,minHeight:400},grid:{},sessionWrapper:{padding:"".concat(e.spacing(2)),marginTop:e.spacing(2),marginBottom:e.spacing(2)},fileTypes:{marginTop:-20},actionButton:{marginTop:10},actionStopButton:{marginTop:10,marginLeft:30},progressbar:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},classificationChart:{width:"100%"},classifierResults:{paddingTop:10},classifierResultsTabGrid:{maxWidth:"100%"},classifierResultsTabPanel:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}})))();var me=a(92314),pe=a(20991),he=a(24056),fe=a(29765),xe=a(60137),be=a(62911),ge=a.n(be);const ye=["#1f77b4","#2ca02c","#9467bd","#8c564b","#d62728","#7f7f7f","#bcbd22","#ff7f0e","#17becf","#e377c2"],Ae="classificationChart",Se=(e,t)=>{let{classificationData:a,classMap:s,activeSession:n,modelName:i,captureFileName:l}=e;const r="Unknown",o="Roboto, Helvetica, Arial, sans-serif",[c,d]=(0,u.useState)(null),[f,x]=(0,u.useState)({shapes:[]}),[b,g]=(0,u.useState)(null);(0,u.useImperativeHandle)(t,(()=>({handleHeatMapHover(e){try{const t=a.results[e.points[0].x],n=s.indexOf(t.ClassificationName),i=b[n].x.indexOf(t.SegmentStart),l={curveNumber:n,pointNumber:i,pointIndex:i};ge().Fx.hover(Ae,[l])}catch(t){}}})));const y={autosize:!0,title:"<b>Classification Chart - ".concat(i," - ").concat(l,"</b>"),titlefont:{family:o,size:20},hoverdistance:5,xaxis:{tickformat:",d",showline:!0,zeroline:!1,title:"Time (Samples)",titlefont:{family:o,size:20},fixedrange:!0},yaxis:{title:"Classification",showline:!0,zeroline:!1,automargin:!0,titlefont:{family:o,size:20},fixedrange:!0,categoryorder:"array",categoryarray:[...s,r].reverse(),range:[0,s.length+1]},shapes:[],yaxis2:{fixedrange:!0,overlaying:"y",side:"right",showgrid:!1,visible:!1,range:[0,2]},yaxis3:{fixedrange:!0,overlaying:"y",side:"right",showgrid:!1,visible:!1,range:[0,1]}};(0,u.useEffect)((()=>{const e=(e,t)=>({x:[null],y:[e],mode:"markers",xaxis:"x",name:e,yaxis:"y2",hovertemplate:"Labeled : ".concat(e,"<extra></extra>"),showlegend:!1,marker:{opacity:[.005],color:t}}),t={},i=[],l={x:[],y:[],mode:"markers",marker:{symbol:"x",color:"#e64646",size:10},showlegend:!0,xaxis:"x",name:"Mismatch",yaxis:"y3",hoverinfo:"none"};if(a&&a.results){const o={},c={},u=a.ground_truth.filter((e=>e.Session===n));[...s,r].forEach(((a,s)=>{var n,i;t[a]||(t[a]=ye[s]),o[a]=(n=a,i=t[a],{x:[null],y:[n],type:"scatter",hovertemplate:"Predicted : ".concat(n,"<extra></extra>"),name:n,mode:"lines",line:{color:i}}),c[a]=e(a,t[a])})),a.results.forEach((e=>{o[e.ClassificationName].x.push(e.SegmentStart,e.SegmentEnd,null),o[e.ClassificationName].y.push(e.ClassificationName,e.ClassificationName,e.ClassificationName),u.length>0&&!u.some((t=>m().inRange((e.SegmentStart+e.SegmentEnd)/2,t.SegmentStart,t.SegmentEnd)&&e.ClassificationName===t.Label_Value))&&(l.x.push((e.SegmentStart+e.SegmentEnd)/2),l.y.push(.97))})),u.forEach((a=>{if(!c[a.Label_Value]){const s=Object.keys(t).length+1;t[a.Label_Value]=ye[s],c[a.Label_Value]=e(a.Label_Value,t[a.Label_Value])}var s,n,l;i.push((s=a.SegmentStart,n=a.SegmentEnd,l=t[a.Label_Value],{type:"rect",xref:"x",yref:"paper",x0:s,y0:0,x1:n,y1:.89,fillcolor:l,opacity:.2,line:{width:0}})),c[a.Label_Value].x.push(a.SegmentStart,a.SegmentEnd),c[a.Label_Value].y.push(.7,.7)}));const p=[...Object.values(o),...Object.values(c),l];g(Object.values(o)),x({shapes:i}),d(p)}}),[a,n]);const A=de();return(0,J.jsx)(p.A,{p:1,children:(0,J.jsx)(h.Ay,{container:!0,direction:"column",className:A.grid,spacing:0,children:(0,J.jsxs)(h.Ay,{item:!0,xs:12,children:[" ",c?(0,J.jsx)(C.A,{className:A.classificationChart,divId:Ae,data:c,layout:{...y,...f},useResizeHandler:!0,config:{displayModeBar:!1,responsive:!0}}):(0,J.jsx)(P.A,{variant:"h4",children:"No Classification Data"})]})})})},je=(0,u.forwardRef)(Se),ve=e=>{let{classificationData:t,featureSummary:a,onHover:s,modelName:n,captureFileName:i}=e;const[l,r]=(0,u.useState)(null),o="Roboto, Helvetica, Arial, sans-serif",c={autosize:!0,title:"<b>Feature Vector Heat Map - ".concat(n," - ").concat(i,"</b>"),xaxis:{title:"Segment ID",titlefont:{family:o,size:20}},yaxis:{title:"Feature",titlefont:{family:o,size:20},automargin:!0,showticklabels:!1}};(0,u.useEffect)((()=>{const e={type:"heatmap",colorscale:"YlOrRd",reversescale:!0,hovertemplate:"Segment ID: %{x} <br>Feature: %{y} <br>Value: %{z} <br><extra></extra>",y:[],z:[]};t&&(t.forEach((t=>{e.z.push(t.FeatureVector)})),e.z=m().zip.apply(m(),e.z),e.y=a.map((e=>e.Feature)),r([e]))}),[t]);const d=de();return(0,J.jsxs)(p.A,{p:1,children:[" ",l?(0,J.jsx)(C.A,{className:d.classificationChart,data:l,layout:c,useResizeHandler:!0,config:{displayModeBar:!1,responsive:!0},onHover:e=>{s(e)}}):(0,J.jsx)(P.A,{variant:"h4",children:"No Feature Vector Data"})]})},Re=e=>{let{classifierResults:t,modelName:a,classMap:s,featureSummary:n,activeSession:i,showSummary:l,summaryConfusionMatrix:r}=e;const o=de(),c=(0,u.useRef)(),[d,p]=(0,u.useState)(0),[f,x]=(0,u.useState)(""),[b,g]=(0,u.useState)("");function y(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}return(0,u.useEffect)((()=>{p(0)}),[l]),(0,u.useEffect)((()=>{g(i)}),[i]),(0,u.useEffect)((()=>{x(a)}),[a]),(0,J.jsxs)("div",{className:o.classifierResultsTabPanel,children:[(0,J.jsx)(me.A,{position:"static",color:"default",children:(0,J.jsx)(pe.A,{value:d,onChange:(e,t)=>{p(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",children:l?(0,J.jsx)(he.A,{label:"Summary",...y(0)}):t.map(((e,t)=>(0,J.jsx)(he.A,{label:e.fileName,...y(t+(l?1:0))},e.captureUuid)))})}),l?(0,J.jsx)(fe.A,{p:2,value:d,index:0,children:(0,J.jsx)(xe.A,{model:{isFetching:!1,data:r&&!m().isEmpty(r)?r:null},showTitle:!0})}):t.map(((e,t)=>(0,J.jsx)(fe.A,{value:d,index:t+(l?1:0),children:(0,J.jsxs)(h.Ay,{container:!0,className:o.classifierResultsTabGrid,spacing:1,children:[(0,J.jsx)(h.Ay,{item:!0,xs:12,children:e.confusion_matrices[b]?(0,J.jsx)(xe.A,{model:{isFetching:!1,data:e.confusion_matrices[b]},modelName:a,fileName:"".concat(e.fileName),showTitle:!0,fea:!0}):(0,J.jsx)(P.A,{variant:"h6",children:"".concat(e.fileName," - Session ").concat(b," has no confusion matrix")})}),(0,J.jsx)(h.Ay,{item:!0,xs:12,children:(0,J.jsx)(je,{ref:c,classificationData:e,classMap:s,activeSession:b,modelName:f,captureFileName:e.fileName})}),(0,J.jsx)(h.Ay,{item:!0,xs:12,children:(0,J.jsx)(ve,{classificationData:e.results,featureSummary:n,onHover:e=>((e,t)=>{t.current&&t.current.handleHeatMapHover(e)})(e,c),modelName:f,captureFileName:e.fileName})})]})},e.captureUuid)))]})},Ce="Summary has been computed and displayed below.",we='Accuracy Computation completed, click on the "Results" button to view the results',_e="STOPPED",Ne="SUCCESS",Te="ERROR",Ee="Captures",ke="error",Pe="success",Oe=e=>{let{selectedProject:t,isFetchingModelData:a,modelData:s,sessions:n,classifierCache:i,submitClassifier:l,stopClassifierRun:r,checkClassifierRunStatus:o,loadCapturesStatistics:c}=e,d=null;const C=(0,u.useRef)(),[w,_]=(0,u.useState)(!0),[N,T]=(0,u.useState)(Ee),[E,k]=(0,u.useState)(t),[P,O]=(0,u.useState)(s),[F,D]=(0,u.useState)(i),[z,I]=(0,u.useState)(!1),[M,L]=(0,u.useState)({}),[G,U]=(0,u.useState)(!1),[H,B]=(0,u.useState)(null),[V,W]=(0,u.useState)(!1),[K,q]=(0,u.useState)([]),[$,X]=(0,u.useState)(!1),[Y,Q]=(0,u.useState)(!0),[Z,ee]=(0,u.useState)("success"),[te,ae]=(0,u.useState)(""),[se,ne]=u.useState(0),[ie,le]=u.useState(""),[re,me]=u.useState(""),[pe,he]=(0,u.useState)([]),fe=()=>{null!==d&&clearInterval(d)},xe=()=>{ne((e=>{if(100===e)return 0;const t=20*Math.random();return Math.min(e+t,100)}))},be=(e,t,a)=>"".concat(e,"-").concat(t,"-").concat(a),ge=e=>{if(Q(!1),ne(0),W(!1),U(!0),B([]),K&&0!==K.length){const t=K.filter((e=>!F[be(null===s||void 0===s?void 0:s.sandbox_uuid,null===s||void 0===s?void 0:s.uuid,e.uuid)]));if(!t||0===t.length)return!0===e&&(je(),Ie(Pe,"")),ve([],e),void Ie(Pe,e?Ce:we);let a=null;P&&P.knowledgepack_description&&P.knowledgepack_description.Parent&&(a=P.knowledgepack_description,delete a.Parent.source),l(E,null===s||void 0===s?void 0:s.sandbox_uuid,null===s||void 0===s?void 0:s.uuid,t,P&&P.query_summary?P.query_summary.label_column:null,a?JSON.stringify(a):null),xe(),d=setTimeout(Se,"5000")}else Ie(ke,"A Capture or Data File is required to compute summary."),B([]),U(!1)},ye=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C.current.offsetTop;window.scrollTo({left:0,top:e,behavior:"smooth"})},Ae=(e,t,a)=>{if(I(!1),!a)return;const s=F[be(e,t,a)];s?(B([s]),W(!0),Ie(Pe,"Test results for ".concat(s.fileName," are displayed below.")),ye()):W(!1)},Se=()=>{o(E,null===s||void 0===s?void 0:s.sandbox_uuid,null===s||void 0===s?void 0:s.uuid,K,ie).then((e=>{if(e)if(xe(),e.status===Ne)je(),ve([],z),Ie(Pe,z?Ce:we);else if(e.status===Te){let t="Classification Run Failed.";e.response&&e.response.message&&(t=e.response.message.includes("Status: Pipeline was terminated.")?"Classifier run was terminated.":e.response.message),Ie(ke,t),fe(),U(!1)}else U(!0),d=setTimeout(Se,"5000")}))},je=()=>{const e={},t=[];K.map((a=>{const n=be(null===s||void 0===s?void 0:s.sandbox_uuid,null===s||void 0===s?void 0:s.uuid,a.uuid),i=F[n]&&ie?F[n].confusion_matrices[ie]:null;i&&(t.push(a.uuid),Object.keys(i).map((t=>{e[t]||(e[t]={}),Object.keys(i[t]).map((a=>{e[t][a]=(e[t][a]?e[t][a]:0)+i[t][a]}))})))})),L(e)},ve=(e,t)=>{_((e=>!e)),ne(99),B(e),ne(100),fe(),U(!1),W(t)};(0,u.useEffect)((()=>{D(i)}),[i]),(0,u.useEffect)((()=>{k(t),W(!1),B(null)}),[t]),(0,u.useEffect)((()=>{if(O(s),n&&me(n),s&&s.class_map){const t=Object.values(s.class_map);if(s.child_models)for(var e in s.child_models){let a=s.child_models[e].data.class_map;Object.keys(a).forEach((e=>{t.includes(a[e])||t.push(a[e])}))}he(t)}s&&s.query_summary&&n&&le((n.find((e=>e.id===s.query_summary.segmenter.id))||{name:""}).name)}),[s,n]),(0,u.useEffect)((()=>{Ae&&ye(C.current.offsetTop)}),[V]);const Oe=e=>e.map((e=>{const t=e.uuid;return void 0===K.find((e=>e.uuid===t))?N===Ee?{uuid:t,name:e.name,type:"capture"}:{uuid:t,name:De(e.name),type:"featurefile"}:{}})),Fe=e=>{const t=e.filter((e=>1===e.captureSelected)),a=e.map((e=>0===e.captureSelected?e.uuid:""));let s=[...K.filter((e=>void 0!==e&&!a.includes(e.uuid))),...Oe(t)].filter((e=>void 0!==e));q(s)},De=e=>(e&&((e=e.trim()).endsWith(".csv")||(e="".concat(e,".csv"))),e),ze=(e,t)=>{"clickaway"!==t&&X(!1)},Ie=(e,t)=>{ee(e),ae(t),X(!0)},Me=de();return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(p.A,{className:Me.box,children:[(0,J.jsx)(h.Ay,{item:!0,xs:12,children:(0,J.jsx)(ce.A,{modelData:s})}),(0,J.jsx)(f.A,{elevation:0,children:(0,J.jsxs)(h.Ay,{container:!0,className:Me.sessionWrapper,spacing:2,children:[(0,J.jsx)(h.Ay,{item:!0,xs:12,md:6,children:(0,J.jsx)(x.A,{severity:"info",children:(0,J.jsx)(b.A,{children:"Evaluate your model by selecting one or more capture files for classification."})})}),(0,J.jsx)(h.Ay,{item:!0,xs:12,md:6,children:(0,J.jsx)(g.A,{fullWidth:!0,children:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(y.A,{htmlFor:"session",children:"Session"}),(0,J.jsxs)(A.A,{label:"Sessions",name:"session",value:ie,onChange:e=>{le(e.target.value)},children:[(0,J.jsx)(S.A,{value:"",disabled:!0},""),re&&re.map((e=>(0,J.jsx)(S.A,{value:e.name,children:e.name},e.id)))]})]})})})]})}),(0,J.jsx)(h.Ay,{item:!0,xs:!0,children:(0,J.jsx)(h.Ay,{container:!0,className:Me.grid,spacing:0,children:(0,J.jsxs)(h.Ay,{item:!0,xs:12,children:[(0,J.jsx)(h.Ay,{container:!0,className:Me.testModelControlGrid,spacing:0,children:m().isEmpty(s)?null:(0,J.jsxs)(h.Ay,{item:!0,xs:12,children:[se?(0,J.jsx)(j.A,{className:Me.progressbar,variant:"determinate",value:se}):null,"Captures"===N?(0,J.jsx)(oe,{headerText:"Captures",reRender:w,onRowSelectionAction:(e,t)=>{Fe([t])},onRowsSelectionAction:(e,t)=>{Fe(t)},showResultsAction:Ae,recognizingSignal:()=>G,getResultFromcache:e=>F[be(null===s||void 0===s?void 0:s.sandbox_uuid,null===s||void 0===s?void 0:s.uuid,e)],selectedPipeline:null===s||void 0===s?void 0:s.sandbox_uuid,selectedModel:null===s||void 0===s?void 0:s.uuid,activeSession:ie,isInTestModel:!0,onRefresh:()=>{c(t)},handleClassifierRun:()=>{I(!1),ge(!1)},handleComputeSummary:()=>{I(!0),ge(!0)},handleStopClassierRun:()=>{Q(!0),r(E,null===s||void 0===s?void 0:s.sandbox_uuid,null===s||void 0===s?void 0:s.uuid).then((e=>{e.status===_e?fe():e.status===Te&&(Ie(ke,e.response),fe(),U(!1))}))},classiferIsRunning:G}):(0,J.jsx)("div",{})]})}),(0,J.jsx)(h.Ay,{item:!0,xs:!0,children:(0,J.jsxs)(h.Ay,{container:!0,direction:"row",justifyContent:"flex-start",alignContent:"flex-start",children:[(0,J.jsx)(h.Ay,{item:!0,xs:12,children:(0,J.jsx)(v.A,{anchorOrigin:{vertical:"top",horizontal:"right"},open:$,autoHideDuration:6e3,onClose:ze,children:(0,J.jsx)(R.A,{onClose:ze,variant:Z,message:te})})}),(0,J.jsx)(h.Ay,{ref:C,item:!0,xs:12,className:Me.classifierResults,children:V?(0,J.jsx)(Re,{classifierResults:H,modelName:P?P.name:"",classMap:pe,featureSummary:P?P.feature_summary:[],activeSession:ie,showSummary:z,summaryConfusionMatrix:M}):null})]})})]})})})]}),(0,J.jsx)(ue.HE,{isOpen:a})]})};const Fe={submitClassifier:(e,t,a,s,r,o)=>async c=>{try{if(c({type:l.Pk,status:"SUBMITTING",response:null}),!i.A.isNullOrEmpty(e)&&!i.A.isNullOrEmpty(t)&&!i.A.isNullOrEmpty(a))try{const i=s.map((e=>{if("capture"===e.type)return e.name})),l={stop_step:!1,platform:"emulator",compare_labels:r||!1,segmenter:!0,capture:i,kb_description:o};await n.Ay.post("project/".concat(e,"/sandbox/").concat(t,"/knowledgepack/").concat(a,"/recognize_signal/"),l)}catch(u){c({type:l._I,status:"ERROR",response:u.message})}}catch(d){c({type:l._I,uuid:"Project:".concat(e,",Pipeline:").concat(t,",Model:").concat(a),status:"ERROR",response:d.message})}},stopClassifierRun:(e,t,a)=>async s=>{s({type:l.HX,uuid:a,status:"STOPPING",response:null});let r={};if(!i.A.isNullOrEmpty(e)&&!i.A.isNullOrEmpty(t)&&!i.A.isNullOrEmpty(a))try{await n.Ay.delete("project/".concat(e,"/sandbox/").concat(t,"/knowledgepack/").concat(a,"/recognize_signal/")),r={type:l.AR,uuid:a,status:"STOPPED",response:null}}catch(o){r={type:l._I,uuid:a,status:"ERROR",response:o.message}}return s(r),r},checkClassifierRunStatus:(e,t,a,s,i)=>async i=>{const{data:c}=await n.Ay.get("project/".concat(e,"/sandbox/").concat(t,"/knowledgepack/").concat(a,"/recognize_signal/"));let u={};if(c&&!c.status){const e=((e,t,a,s,n)=>{const i={};return Object.values(a).map((a=>{i[a.name]={cacheKey:o(e,t,a.uuid),accuracy:{},captureUuid:a.uuid,fileName:a.name,results:[],ground_truth:[],confusion_matrices:{},sessions:[]}})),n.confusion_matrix&&Object.keys(n.confusion_matrix).map((e=>{Object.keys(n.confusion_matrix[e]).map((t=>{i[t]&&(i[t].confusion_matrices[e]=n.confusion_matrix[e][t],i[t].accuracy[e]=r(n.confusion_matrix[e][t]),i[t].sessions.push(e))}))})),n.results&&n.results.map((e=>{i[e.Capture]&&i[e.Capture].results.push(e)})),n.ground_truth&&n.ground_truth.map((e=>{i[e.Capture]&&i[e.Capture].ground_truth.push(e)})),i})(t,a,s,0,c),n=e?e[Object.keys(e)[Object.keys(e).length-1]]:{uuid:"00000000-0000-0000-0000-000000000000",results:[]};i({type:l.pg,classifierData:e}),u={type:l.Pk,uuid:e.uuid,status:"SUCCESS",response:n}}else u=c&&"FAILURE"===c.status||"REVOKED"===c.status?{type:l._I,status:"ERROR",response:c}:{type:l.Pk,status:c.status};return i(u),u},loadCapturesStatistics:c.dA},De=(0,s.Ng)((function(e){var t,a;return{selectedProjectName:e.projects.selectedProject.name,selectedProject:e.projects.selectedProject.uuid,isFetchingModelData:(null===(t=e.models)||void 0===t||null===(a=t.modelData)||void 0===a?void 0:a.isFetching)||!1,modelData:e.models.modelData.data,modelList:e.models.modelList.data,sessions:e.sessions.data,captureConfigurations:e.captureConfigurations.data,classifierCache:e.classifiers.classifierCache}}),Fe)(Oe)}}]);
//# sourceMappingURL=464.98f7d60f.chunk.js.map