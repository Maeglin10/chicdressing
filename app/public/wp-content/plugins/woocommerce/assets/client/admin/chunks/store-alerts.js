"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[8597],{83619:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(69307),a=r(70444);const s=(0,o.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(a.Path,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"}))},15833:(e,t,r)=>{r.r(t),r.d(t,{StoreAlerts:()=>f,default:()=>T});var o=r(69307),a=r(65736),s=r(55609),n=r(87608),l=r.n(n),i=r(76357),c=r(94333),m=r(9818),d=r(76292),u=r.n(d),p=r(23374),h=r(70048),g=r(83619),_=r(67221),w=r(14599),E=r(14812),N=r(10431),v=r(88502),A=r(7862),b=r.n(A);class x extends o.Component{render(){const{hasMultipleAlerts:e}=this.props;return(0,o.createElement)(s.Card,{className:"woocommerce-store-alerts is-loading","aria-hidden":!0,size:null},(0,o.createElement)(s.CardHeader,{isBorderless:!0},(0,o.createElement)("span",{className:"is-placeholder"}),e&&(0,o.createElement)("span",{className:"is-placeholder"})),(0,o.createElement)(s.CardBody,null,(0,o.createElement)("div",{className:"woocommerce-store-alerts__message"},(0,o.createElement)("span",{className:"is-placeholder"}),(0,o.createElement)("span",{className:"is-placeholder"}))),(0,o.createElement)(s.CardFooter,{isBorderless:!0},(0,o.createElement)("span",{className:"is-placeholder"})))}}const S=x;x.propTypes={hasMultipleAlerts:b().bool},x.defaultProps={hasMultipleAlerts:!1};var C=r(61935);class f extends o.Component{constructor(e){super(e),this.state={currentIndex:0},this.previousAlert=this.previousAlert.bind(this),this.nextAlert=this.nextAlert.bind(this)}previousAlert(e){e?.stopPropagation();const{currentIndex:t}=this.state;t>0&&this.setState({currentIndex:t-1})}nextAlert(e){e.stopPropagation();const t=this.getAlerts(),{currentIndex:r}=this.state;r<t.length-1&&this.setState({currentIndex:r+1})}renderActions(e){const{triggerNoteAction:t,updateNote:r,createNotice:n}=this.props,l=e.actions.map((r=>(0,o.createElement)(s.Button,{key:r.name,isPrimary:r.primary,isSecondary:!r.primary,href:r.url||void 0,onClick:async o=>{const s=o.currentTarget.getAttribute("href");o.preventDefault(),this.previousAlert();try{await t(e.id,r.id),s&&"#"!==s&&(0,N.parseAdminUrl)(s).href!==window.location.href&&(0,N.navigateTo)({url:s})}catch(e){throw n("error",(0,a.__)("Something went wrong while triggering this note's action.","woocommerce")),e}}},r.label))),i=[{value:u()().add(4,"hours").unix().toString(),label:(0,a.__)("Later Today","woocommerce")},{value:u()().add(1,"day").hour(9).minute(0).second(0).millisecond(0).unix().toString(),label:(0,a.__)("Tomorrow","woocommerce")},{value:u()().add(1,"week").hour(9).minute(0).second(0).millisecond(0).unix().toString(),label:(0,a.__)("Next Week","woocommerce")},{value:u()().add(1,"month").hour(9).minute(0).second(0).millisecond(0).unix().toString(),label:(0,a.__)("Next Month","woocommerce")}],c=e.is_snoozable&&(0,o.createElement)(s.SelectControl,{className:"woocommerce-store-alerts__snooze",options:[{label:(0,a.__)("Remind Me Later","woocommerce"),value:"0"},...i],onChange:t=>{if("0"===t)return;const o=i.find((e=>e.value===t));(t=>{r(e.id,{status:"snoozed",date_reminder:t.value});const o={alert_name:e.name,alert_title:e.title,snooze_duration:t.value,snooze_label:t.label};(0,w.recordEvent)("store_alert_snooze",o)})({value:t,label:o&&o.label})}});if(l||c)return(0,o.createElement)("div",{className:"woocommerce-store-alerts__actions"},l,c)}getAlerts(){return(this.props.alerts||[]).filter((e=>"unactioned"===e.status))}render(){const e=this.getAlerts(),t=(0,C.O3)("alertCount",0,(e=>parseInt(e,10)));if(t>0&&this.props.isLoading)return(0,o.createElement)(S,{hasMultipleAlerts:t>1});if(0===e.length)return null;const{currentIndex:r}=this.state,n=e.length,c=e[r],m=c.type,d=l()("woocommerce-store-alerts",{"is-alert-error":"error"===m,"is-alert-update":"update"===m});return(0,o.createElement)(s.Card,{className:d,size:null},(0,o.createElement)(s.CardHeader,{isBorderless:!0},(0,o.createElement)(E.Text,{variant:"title.medium",as:"h2",size:"24",lineHeight:"32px"},c.title),n>1&&(0,o.createElement)("div",{className:"woocommerce-store-alerts__pagination"},(0,o.createElement)(s.Button,{onClick:this.previousAlert,disabled:0===r,label:(0,a.__)("Previous Alert","woocommerce")},(0,o.createElement)(p.Z,{icon:h.Z,className:"arrow-left-icon"})),(0,o.createElement)("span",{className:"woocommerce-store-alerts__pagination-label",role:"status","aria-live":"polite"},(0,i.Z)({mixedString:(0,a.__)("{{current /}} of {{total /}}","woocommerce"),components:{current:(0,o.createElement)(o.Fragment,null,r+1),total:(0,o.createElement)(o.Fragment,null,n)}})),(0,o.createElement)(s.Button,{onClick:this.nextAlert,disabled:n-1===r,label:(0,a.__)("Next Alert","woocommerce")},(0,o.createElement)(p.Z,{icon:g.Z,className:"arrow-right-icon"})))),(0,o.createElement)(s.CardBody,null,(0,o.createElement)("div",{className:"woocommerce-store-alerts__message",dangerouslySetInnerHTML:(0,v.ZP)(c.content)})),(0,o.createElement)(s.CardFooter,{isBorderless:!0},this.renderActions(c)))}}const y={page:1,per_page:_.QUERY_DEFAULTS.pageSize,type:"error,update",status:"unactioned"},T=(0,c.compose)((0,m.withSelect)((e=>{const{getNotes:t,isResolving:r}=e(_.NOTES_STORE_NAME);return{alerts:t(y),isLoading:r("getNotes",[y])}})),(0,m.withDispatch)((e=>{const{triggerNoteAction:t,updateNote:r}=e(_.NOTES_STORE_NAME),{createNotice:o}=e("core/notices");return{triggerNoteAction:t,updateNote:r,createNotice:o}})))(f)}}]);