(self.webpackChunklite=self.webpackChunklite||[]).push([[705],{21254:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(67294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}var r=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 9.68l.6-.6a5 5 0 0 1 1.02 7.87l-2.83 2.83a5 5 0 0 1-7.07-7.07l2.38-2.38c0 .43.05.86.12 1.3l-1.8 1.79a4 4 0 0 0 5.67 5.65l2.82-2.83a4 4 0 0 0-1.04-6.4l.14-.16zm-1 4.64l-.6.6a5 5 0 0 1-1.02-7.87l2.83-2.83a5 5 0 0 1 7.07 7.07l-2.38 2.39c0-.43-.05-.87-.12-1.3l1.8-1.8a4 4 0 1 0-5.67-5.65L10.6 7.76a4 4 0 0 0 1.04 6.4l-.13.16z",fill:"currentColor"});const l=function(e){return i.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),r)}},99171:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(67294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}var r=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.18 2.6a1.82 1.82 0 0 1 3.64 0v2.07H2.18V2.6zm4.37 2.07V2.6C6.55 1.17 5.4 0 4 0a2.58 2.58 0 0 0-2.55 2.6v2.07c-.39 0-.75.17-1.03.46-.27.3-.42.7-.42 1.12v3.17a1.7 1.7 0 0 0 .42 1.12c.14.14.3.26.47.34.18.08.37.12.56.12h5.1c.39 0 .75-.17 1.03-.47.27-.3.42-.7.42-1.11V6.25a1.7 1.7 0 0 0-.42-1.12c-.14-.14-.3-.26-.47-.34a1.35 1.35 0 0 0-.56-.12z",fill:"#757575"});const l=function(e){return i.createElement("svg",a({width:8,height:11,viewBox:"0 0 8 11",fill:"none"},e),r)}},44642:(e,t,n)=>{"use strict";n.d(t,{VK:()=>f,zn:()=>g,kw:()=>k});var i,a=n(96156),r=n(34699),l=n(67294),o=n(92661),c=n(77280),s=n(92305),u=n(71341);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e.Delete="delete",e.Reorder="reorder"}(i||(i={}));var p={showReorderView:!1,setShowReorderView:function(){},showBulkDeleteView:!1,setShowBulkDeleteView:function(){},moveOperations:[],deleteOperations:[],addMoveOperation:function(){},addDeleteOperation:function(){},removeDeleteOperation:function(){},resetOperations:function(){},isLoading:!1,setIsLoading:function(){},isBulkActionView:!1},v=(0,l.createContext)(p),f=function(){return(0,l.useContext)(v)},g=function(e){var t=e.children,n=(0,c.Wd)("action"),a=(0,l.useState)(n===i.Reorder),o=(0,r.Z)(a,2),s=o[0],u=o[1],d=(0,l.useState)(n===i.Delete),m=(0,r.Z)(d,2),p=m[0],f=m[1],g=(0,l.useState)([]),k=(0,r.Z)(g,2),b=k[0],E=k[1],h=(0,l.useState)([]),y=(0,r.Z)(h,2),C=y[0],w=y[1],O=(0,l.useState)(!1),S=(0,r.Z)(O,2),I=S[0],x=S[1],D=(0,l.useCallback)((function(e){E(b.concat({move:e}))}),[b]),R=(0,l.useCallback)((function(e){w(C.concat(e))}),[C]),V=(0,l.useCallback)((function(e){var t=C.filter((function(t){return t.entityId!==e.entityId}));w(t)}),[C]),N=(0,l.useCallback)((function(){s?E([]):w([])}),[s]);return l.createElement(v.Provider,{value:{showReorderView:s,setShowReorderView:u,showBulkDeleteView:p,setShowBulkDeleteView:f,moveOperations:b,deleteOperations:C,resetOperations:N,addMoveOperation:D,addDeleteOperation:R,removeDeleteOperation:V,isLoading:I,setIsLoading:x,isBulkActionView:s||p}},t)},k=function(e){var t=e.children,n=e.catalog,a=(0,o.di)("ShowUserList",{username:n.creator.username||"",catalogSlugId:(0,s.EJ)(n)}),r=(0,u.h)({queryParams:{action:i.Reorder}}),c=(0,u.h)({queryParams:{action:i.Delete}}),d=(0,l.useCallback)((function(){r(a)}),[r,a]),f=(0,l.useCallback)((function(){c(a)}),[c,a]);return l.createElement(v.Provider,{value:m(m({},p),{},{setShowReorderView:d,setShowBulkDeleteView:f})},t)}},97996:(e,t,n)=>{"use strict";n.d(t,{G:()=>Q});var i=n(22122),a=n(34699),r=n(67294),l=n(25267),o=n(38352),c=n(73917),s=n(38356),u=n(42130),d=n(68894),m=n(96156),p=n(96174),v=n(44642),f=n(19416),g=n(13791),k=n(77355),b=n(20113),E=n(87691),h=function(e){var t=e.isVisible,n=e.hide,i=e.onConfirm,a=e.loading,l=e.confirmText,o=e.title,c=e.text,s=e.isDestructiveAction;return r.createElement(g.v,{isVisible:t,hide:n,confirmText:r.createElement(f.I,{loading:a,text:l}),isDestructiveAction:s,onConfirm:i,disableConfirm:a,hideOnConfirm:!1},r.createElement(k.x,{paddingBottom:"6px"},r.createElement(b.X6,{scale:"L"},o)),r.createElement(k.x,{paddingBottom:"32px"},r.createElement(E.F,{scale:"L"},c)))};function y(e){var t=e.isVisible,n=e.hide,i=e.deleteCatalog,a=e.loading;return r.createElement(h,{isVisible:t,hide:n,confirmText:"Delete",isDestructiveAction:!0,onConfirm:i,loading:a,title:"Delete list",text:"Deleting this list will remove it from Your library. If others have saved this list, it will also be deleted and removed from their library. Deleting this list will not delete any stories in it."})}var C=n(85208),w=function(e){var t=e.isVisible,n=e.hide,i=e.onConfirm;return r.createElement(h,{isVisible:t,hide:n,loading:!1,text:"If others have saved this list, it will be removed from their library.",confirmText:"Make private",title:"Make list private",onConfirm:i})},O=n(1109),S=n(39967),I=n(93310),x=n(31379),D=n(52069),R=n(75221);function V(e){var t=e.isVisible,n=e.hide,i=e.catalog,l=e.updateCatalog,o=e.loading,c=i.name,s=i.description,u=i.visibility,m=i.id,p=i.type,v=(0,d.O)(!1),b=(0,a.Z)(v,3),h=b[0],y=b[1],C=b[2],V=(0,r.useState)(c),N=(0,a.Z)(V,2),P=N[0],j=N[1],L=(0,r.useState)(!!s),T=(0,a.Z)(L,2),Z=T[0],A=T[1],B=(0,r.useState)(s),F=(0,a.Z)(B,2),M=F[0],U=F[1],H=(0,r.useState)(u),z=(0,a.Z)(H,2),_=z[0],G=z[1],q=i.type===R.HQ.PREDEFINED_LIST,Q=(0,r.useCallback)((function(e){j(e.target.value)}),[]),X=(0,r.useCallback)((function(e){U(e.target.value)}),[]),K=(0,r.useCallback)((function(){G((function(e){return e===R.n2.PRIVATE?R.n2.PUBLIC:R.n2.PRIVATE}))}),[]),Y=(0,r.useCallback)((function(){var e=P.trim(),t=null==M?void 0:M.trim();l({variables:{catalogId:m,attributes:{type:p,title:e!==c?e:null,description:t!==s?t:null,visibility:_!==u?_:null}}})}),[P,M,_,l,m,p,c,s,u]),J=(0,r.useCallback)((function(){_===R.n2.PRIVATE&&u===R.n2.PUBLIC?y():Y()}),[Y,y,_,u]),W=(0,r.useCallback)((function(){C(),Y()}),[C,Y]),$=P.trim(),ee=(null!==M?M.trim():null)===s&&$===c&&_===u;return h?r.createElement(w,{hide:C,onConfirm:W,isVisible:!0}):r.createElement(g.v,{isVisible:t,hide:n,confirmText:r.createElement(f.I,{loading:o}),isDestructiveAction:!1,onConfirm:J,disableConfirm:!q&&!$||o||ee||(0,O.G6)(P)||(0,O.z6)(M),hideOnConfirm:!1},r.createElement(k.x,{height:"400px"},r.createElement(k.x,{paddingBottom:"60px"},r.createElement(D.Dx,{scale:"L"},"Edit list")),r.createElement(k.x,{textAlign:"left",width:"400px",sm:{width:"100%"}},!q&&r.createElement(k.x,{paddingBottom:"20px"},r.createElement(S.n,{value:P,onChange:Q,placeholder:"Give it a name",characterCountLimit:O.lp})),r.createElement(k.x,{paddingBottom:"20px"},Z?r.createElement(k.x,{maxHeight:"170px",overflow:"auto"},r.createElement(S.n,{value:null!=M?M:void 0,onChange:X,placeholder:"Description",isMultiline:!0,autoFocus:!0,characterCountLimit:O.B0})):r.createElement(I.r,{onClick:function(){return A(!0)}},r.createElement(E.F,{scale:"L",color:"ACCENT"},"Add a description"))),r.createElement(k.x,null,r.createElement(x.X,{checked:_===R.n2.PRIVATE,onChange:K,textScale:"L"},"Make it private")))))}var N=n(75675),P=n(70533),j=n(86801),L=n(92661),T=n(78285),Z=n(43487),A=n(71341),B=n(50458);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){(0,m.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e){var t=(0,d.O)(!1),n=(0,a.Z)(t,3),i=n[0],l=n[1],o=n[2];return[i,l,(0,r.useCallback)((function(){o(),e()}),[o,e])]}var H=function(e){var t=e.catalog,n=e.viewer,i=e.ariaExpanded,l=e.ariaId,c=e.hidePopover,s=t.visibility,u=t.id,d=t.name,m=t.description,f=t.type,g=t.postItemsCount,k=t.disallowResponses,b=(0,v.VK)(),h=b.setShowReorderView,O=b.setShowBulkDeleteView,S=(0,Z.v9)((function(e){return e.config.authDomain})),x=(0,T.w)(),D=(0,p.TH)(),F=(0,L.$B)(D.pathname),H="user-catalog"===(null==F?void 0:F.route.mediumAppPage),z=(0,A.h)(),_=(0,L.uk)(),G=(0,L.qt)("ShowYourLists",{}),q=(0,B.ykG)(t,S),Q=(0,P.sK)(u),X=(0,a.Z)(Q,2),K=X[0],Y=X[1],J=Y.loading,W=Y.error,$=(0,P.qz)(u),ee=(0,a.Z)($,2),te=ee[0],ne=ee[1],ie=ne.loading,ae=ne.error,re=U(c),le=(0,a.Z)(re,3),oe=le[0],ce=le[1],se=le[2],ue=U(c),de=(0,a.Z)(ue,3),me=de[0],pe=de[1],ve=de[2],fe=U(c),ge=(0,a.Z)(fe,3),ke=ge[0],be=ge[1],Ee=ge[2],he=U(c),ye=(0,a.Z)(he,3),Ce=ye[0],we=ye[1],Oe=ye[2],Se=(0,C.O2)(t,se,(function(e){window.history.replaceState(null,window.document.title,(0,B.ykG)(M(M({},t),{},{name:e}),S))})),Ie=(0,a.Z)(Se,2),xe=Ie[0],De=Ie[1],Re=De.loading,Ve=De.error,Ne=(0,r.useCallback)((function(){H&&(t.creator.username?z(_("ShowUserLists",{username:t.creator.username})):window.location.assign(G))}),[G,H,t.creator.username]),Pe=(0,C.h6)({catalog:t,userId:n.id,onCompleted:Ne}),je=Pe.deleteCatalog,Le=Pe.loading,Te=Pe.error,Ze=(0,r.useCallback)((function(){Oe(),Re||xe({variables:{catalogId:u,attributes:{title:d,type:f,visibility:s===R.n2.PRIVATE?R.n2.PUBLIC:R.n2.PRIVATE,description:m}}})}),[u,d,s,xe,Re,m,f,Oe]),Ae=(0,r.useCallback)((function(){s===R.n2.PUBLIC?we():Ze()}),[Ze,s,we]),Be=(0,r.useCallback)((function(){c(),h(!0)}),[c]),Fe=(0,r.useCallback)((function(){c(),O(!0)}),[c]);(0,r.useEffect)((function(){(Ve||Te||W||ae)&&x({toastStyle:"RETRYABLE_ERROR",duration:4e3})}),[Ve,Te,W,ae,x]);var Me=(0,r.useCallback)((function(){J||(K(),c())}),[J,c]),Ue=(0,r.useCallback)((function(){ie||(te(),c())}),[ie,c]);return r.createElement(r.Fragment,null,q&&r.createElement(j.E,{mediumUrl:q,onClick:c}),r.createElement(o.Sl,null,r.createElement(V,{isVisible:oe,hide:se,catalog:t,updateCatalog:xe,loading:Re}),r.createElement(I.r,{"aria-controls":l,"aria-expanded":i,onClick:ce},"Edit list info")),g>1&&r.createElement(o.Sl,null,r.createElement(I.r,{"aria-controls":l,"aria-expanded":i,onClick:Fe},"Remove items")),r.createElement(o.Sl,null,r.createElement(I.r,{"aria-controls":l,"aria-expanded":i,onClick:Ae},"Make list ",s===R.n2.PUBLIC?"private":"public")),g>1&&r.createElement(o.Sl,null,r.createElement(I.r,{"aria-controls":l,"aria-expanded":i,onClick:Be},"Reorder items")),r.createElement(o.Sl,null,r.createElement(N.w,{isVisible:ke,hide:Ee,onConfirm:Me,entityTypename:"Catalog"}),r.createElement(I.r,{"aria-controls":l,"aria-expanded":i,onClick:k?Ue:be},k?"Show responses":"Hide responses")),t.type!==R.HQ.PREDEFINED_LIST&&r.createElement(o.Sl,null,r.createElement(y,{isVisible:me,hide:ve,deleteCatalog:je,loading:Le}),r.createElement(I.r,{"aria-controls":l,"aria-expanded":i,onClick:pe},r.createElement(E.F,{scale:"M",color:"ERROR"},"Delete list"))),r.createElement(w,{isVisible:Ce,hide:Oe,onConfirm:Ze}))},z=n(18627),_=n(66411),G=function(e){var t=e.catalog,n=e.ariaExpanded,i=e.hidePopover,a=t.id,l=t.viewerEdge.clapCount,c=(0,C.ok)().clapCatalog,s=(0,C.es)().flagCatalog,u=(0,z.A)(),d=(0,_.pK)(),m=(0,Z.v9)((function(e){return e.config.authDomain})),p=(0,B.ykG)(t,m),v=r.useCallback((function(){l&&(c({catalogId:a,numClaps:-l}),u.event("list.clientUnvote",{listId:a,unvoteCount:l,source:d}),i())}),[a,l,d,c,i]),f=r.useCallback((function(){s({catalogId:a}),i()}),[a,s,i]);return r.createElement(r.Fragment,null,r.createElement(o.mX,null,p&&r.createElement(j.E,{mediumUrl:p,onClick:i}),0!==l&&r.createElement(o.Sl,null,r.createElement(I.r,{onClick:v,"aria-expanded":n},"Undo applause for this list")),r.createElement(o.Sl,null,r.createElement(I.r,{onClick:f,"aria-expanded":n},"Report this list"))))},q=function(e){var t=e.catalog,n=e.viewer,i=e.isResponsive,l=(0,d.O)(!1),m=(0,a.Z)(l,4),p=m[0],v=m[2],f=m[3],g="catalogContentMenu",k=p?"true":"false",b=n.id===t.creator.id,E=r.useCallback((function(){return r.createElement(o.mX,null,b?r.createElement(H,{catalog:t,ariaExpanded:k,ariaId:g,hidePopover:v,viewer:n}):r.createElement(G,{catalog:t,ariaExpanded:k,hidePopover:v}))}),[b,t,k,v,n]);return r.createElement(c.J,{ariaId:g,isVisible:p,hide:v,popoverRenderFn:E},r.createElement(s.u,{onClick:f,ariaLabel:"More options",icon:r.createElement(u.Z,null),text:i?"More":void 0,tooltipText:"More"}))},Q=function(e){return r.createElement(l.I,null,(function(t){return t?r.createElement(q,(0,i.Z)({viewer:t},e)):null}))}},70533:(e,t,n)=>{"use strict";n.d(t,{qz:()=>u,sK:()=>s,SM:()=>d,VC:()=>m});var i=n(34699),a=n(21919),r=n(75221),l=n(78285),o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateCatalogLockResponsesMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"attributes"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"UpdateCatalogInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}},{kind:"Argument",name:{kind:"Name",value:"attributes"},value:{kind:"Variable",name:{kind:"Name",value:"attributes"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"responsesLocked"}}]}}]}}]}}]},c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateCatalogDisallowResponsesMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"catalogId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"attributes"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"UpdateCatalogInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"catalogId"},value:{kind:"Variable",name:{kind:"Name",value:"catalogId"}}},{kind:"Argument",name:{kind:"Name",value:"attributes"},value:{kind:"Variable",name:{kind:"Name",value:"attributes"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"disallowResponses"}}]}}]}}]}}]},s=function(e){var t=(0,l.w)();return(0,a.D)(c,{variables:{catalogId:e,attributes:{type:r.HQ.LISTS,disallowResponses:!0}},onCompleted:function(){t({message:"Responses are now hidden for this list."})}})},u=function(e){var t=(0,l.w)();return(0,a.D)(c,{variables:{catalogId:e,attributes:{type:r.HQ.LISTS,disallowResponses:!1}},onCompleted:function(){t({message:"Responses are now shown for this list."})}})},d=function(e,t,n,l){var c=(0,a.D)(o,{variables:{catalogId:l,attributes:{type:r.HQ.LISTS,responsesLocked:!0}},onCompleted:function(){e.event("responses.locked",{catalogId:l,source:t}),n()}});return(0,i.Z)(c,1)[0]},m=function(e,t){var n=(0,a.D)(o,{variables:{catalogId:t,attributes:{type:r.HQ.LISTS,responsesLocked:!1}},onCompleted:function(){e()}});return(0,i.Z)(n,1)[0]}},86801:(e,t,n)=>{"use strict";n.d(t,{_:()=>f,E:()=>g});var i=n(96156),a=n(67294),r=n(77355),l=n(93310),o=n(18627),c=n(78285),s=n(21254),u=n(38352);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){return{display:"inline-flex",alignItems:"center",":hover path":{fill:e.colorTokens.foreground.neutral.primary.base}}},v=function(e){var t=e.copyStyle,n=e.children;switch(t){case"INLINE":return a.createElement(r.x,{display:"flex",alignItems:"center"},a.createElement(s.Z,null),a.createElement(r.x,{display:"inline",marginLeft:"12px"},"Copy link"));case"TEXT":return a.createElement(r.x,{display:"inline-block"},n);default:return null}},f=function(e){var t=e.url,n=e.onClick,i=e.reportData,r=void 0===i?{}:i,s=e.source,u=e.copyStyle,d=e.children,f=(0,c.w)(),g=(0,o.A)();return a.createElement(l.r,{onClick:function(){navigator.clipboard.writeText(t),f({message:"Link copied",toastStyle:"MESSAGE",duration:2e3}),g.event("copyStoryLink.clicked",m(m({},r),{},{source:s})),n&&n()},rules:"INLINE"===u?p:void 0},a.createElement(v,{copyStyle:u},d))},g=function(e){var t=e.mediumUrl,n=e.onClick;return a.createElement(u.Sl,null,a.createElement(f,{url:t,onClick:n,copyStyle:"TEXT"},"Copy link"))}},10648:(e,t,n)=>{"use strict";n.d(t,{b:()=>C});var i=n(67294),a=n(85208),r=n(6443),l=n(26350),o=n(77355),c=n(30020),s=n(38356),u=n(92661),d=n(45550);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},m.apply(this,arguments)}var p=i.createElement("path",{d:"M17.5 3.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7.75z",fill:"currentColor"}),v=i.createElement("path",{d:"M10.5 2.75h-6a2 2 0 0 0-2 2v11.5",stroke:"currentColor",strokeLinecap:"round"});const f=function(e){return i.createElement("svg",m({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),p,v)};var g=n(92305),k=n(78870),b=function(e){return e?"Remove from Your library":"Save list"},E=function(e){var t,n=e.isFollowing,a=e.isResponsive,r=e.onClick,l=e.disabled;return a&&(t=b(n)),i.createElement(s.u,{onClick:r,text:t,icon:n?i.createElement(d.Z,null):i.createElement(f,null),disabled:l,tooltipText:b(n),ariaLabel:b(n)})},h=function(e){var t=e.catalog,n=e.viewerId,r=e.isResponsive,l=(0,a.Yz)(n,t.id),o=l.followCatalog,c=l.loading,s=(0,a.mC)(n,t.id),u=s.unfollowCatalog,d=s.loading,m=t.viewerEdge.isFollowing,p=m?u:o;return i.createElement(E,{onClick:p,disabled:c||d,isResponsive:r,isFollowing:m})},y=function(e){var t=e.catalog,n=e.isResponsive,a=(0,u.qt)("ShowUserList",{username:t.creator.username||"",catalogSlugId:(0,g.EJ)(t)}),r=(0,k.Rk)(a,{save_list:"true"});return i.createElement(l.R,{operation:"register",susiEntry:"follow_list",redirectTo:r},i.createElement(E,{isResponsive:n}))},C=function(e){var t=e.catalog,n=e.marginLeft,a=e.marginRight,l=void 0===a?"8px":a,s=e.isResponsive,u=(0,r.H)(),d=u.value;return u.loading||t.creator.id===(null==d?void 0:d.id)?null:i.createElement(o.x,{marginLeft:n,marginRight:l,flexShrink:"0"},i.createElement(c._,{tooltipText:b(t.viewerEdge.isFollowing),targetDistance:10},d?i.createElement(h,{catalog:t,viewerId:d.id,isResponsive:s}):i.createElement(y,{catalog:t,isResponsive:s})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/705.e5898c57.chunk.js.map