"use strict";(self.webpackChunklite=self.webpackChunklite||[]).push([[8594],{23448:(e,n,i)=>{i.d(n,{A:()=>d});var t,a=i(96540);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)({}).hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},o.apply(null,arguments)}const d=function(e){return a.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:25,height:25,fill:"none",viewBox:"0 0 25 25"},e),t||(t=a.createElement("path",{fill:"currentColor",d:"M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .805.396L12.5 17l5.695 4.396A.5.5 0 0 0 19 21v-8.5a.5.5 0 0 0-1 0v7.485l-5.195-4.012a.5.5 0 0 0-.61 0L7 19.985z"})))}},79766:(e,n,i)=>{i.d(n,{c:()=>o});var t=i(96540),a=i(39160);function o(e){var n=e.disabled,i=e.message,o=void 0===i?"Changes you made may not be saved.":i,d=(0,a.d4)((function(e){return e.client.hydrated}));t.useEffect((function(){if(!n&&d)return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)};function e(e){return e.preventDefault(),e.returnValue=o,o}}),[n,o,d])}},94405:(e,n,i)=>{i.d(n,{jq:()=>c,od:()=>r});var t=i(45458),a=i(62742),o=i(37561),d=i(20631),l=i(29306),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBase_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isPublished"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_post"}}]}}].concat((0,t.A)(a.CV.definitions))},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBaseQuery_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsContainingThis"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"LISTS"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}},{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"editCatalogItemsMutation_postViewerEdge"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useAddItemToPredefinedCatalog_postViewerEdge"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"WithToggleInsideCatalog_post"}}]}}].concat((0,t.A)(o.t.definitions),(0,t.A)(d.W.definitions),(0,t.A)(l.n.definitions))},c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"AddToCatalogBaseQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"isPostKind"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"isPostKind"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBaseQuery_post"}}]}}]}}]}}].concat((0,t.A)(s.definitions))}},93948:(e,n,i)=>{i.d(n,{f:()=>se});var t,a=i(58168),o=i(80045),d=i(80296),l=i(39181),r=i(96540),s=i(64467),c=i(45458),u=i(22554),m=i(11818),v=i(52290),g=i(86527),k=i(36557),p=i(44402),f=i(91830),b=i(30142),y=i(77662),N=i(46509),h=i(42976);function S(){return S=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)({}).hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},S.apply(null,arguments)}const C=function(e){return r.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",width:10,height:13,fill:"none",viewBox:"0 0 10 13"},e),t||(t=r.createElement("path",{fill:"#A8A8A8",fillRule:"evenodd",d:"M2.727 3.082C2.727 1.905 3.74.935 5 .935s2.273.973 2.273 2.147v2.436H2.727zM8.19 5.518h-.007V3.082C8.182 1.378 6.747 0 5 0 3.252 0 1.818 1.373 1.818 3.082v2.436h-.007c-.48.002-.941.2-1.28.55S0 6.892 0 7.387v3.744c0 .246.045.489.136.715.09.227.224.433.392.607s.368.311.588.405.457.142.695.142h6.378c.48-.002.941-.2 1.28-.55s.53-.824.531-1.319V7.387c0-.246-.045-.489-.136-.715a1.9 1.9 0 0 0-.392-.607 1.8 1.8 0 0 0-.588-.405 1.8 1.8 0 0 0-.695-.142",clipRule:"evenodd"})))};var I=i(15371),E=i(5521);function P(e){var n,i,t=e.children,a=e.target,o=e.kind,l=e.catalog,s=e.viewer,c=r.useMemo((function(){if(l.predefined){var e,n=null===(e=a.viewerEdge.catalogsConnection)||void 0===e?void 0:e.predefinedContainingThis.find((function(e){return e.predefined===l.predefined}));return[!!n,null==n?void 0:n.catalogItemIds]}var i,t=null===(i=a.viewerEdge.catalogsConnection)||void 0===i?void 0:i.catalogsContainingThis.find((function(e){return e.catalogId===l.id}));return[!!t,null==t?void 0:t.catalogItemIds]}),[l.predefined,l.id,a.viewerEdge]),u=(0,d.A)(c,2),m=u[0],v=u[1],g=(0,E.EH)(s.id,l.id,l.version,a.id,o,null!==(n=l.predefined)&&void 0!==n?n:void 0),k=(0,d.A)(g,2),p=k[0],f=k[1].loading,b=(0,E.$O)(s.id,l.id,l.version,[{entityId:a.id,entityType:o,catalogItemIds:v||[]}],null!==(i=l.predefined)&&void 0!==i?i:void 0),y=(0,d.A)(b,2),N=y[0],h=y[1].loading;return t({toggleInsideCatalog:m?N:p,isInsideCatalog:m,loading:f||h})}var T={display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"16px",paddingRight:"5px"},w=function(e){return{marginBottom:"1px","& path":{fill:e.colorTokens.border.neutral.secondary.base}}};function O(e){var n=e.catalog,i=e.target,t=e.kind,a=e.viewer,o=(0,p.l)();return r.createElement(P,{viewer:a,target:i,kind:t,catalog:n},(function(e){var i=e.toggleInsideCatalog,t=e.isInsideCatalog,a=e.loading,d=n.predefined?(0,I.cm)(n.predefined):n.name;return r.createElement("div",{className:o(T)},r.createElement(N.S,{key:n.id,checked:t,checkboxStyle:"OBVIOUS",onChange:i,disabled:a||n.visibility===h.y_.LOCKED,textScale:"L",clampText:1},d),n.visibility!==h.y_.PUBLIC&&r.createElement(v.a,{paddingLeft:"8px"},r.createElement(C,{className:o(w)})))}))}function A(e){var n=e.target,i=e.kind,t=e.catalogs,a=e.isLoading,o=e.viewer,d=e.fetchMore,l=e.scrollableEl;return a?r.createElement(v.a,{display:"flex",justifyContent:"center",padding:"40px 0"},r.createElement(k.kZ,{color:"DARKER",scale:"L",tag:"div"},r.createElement(y.k,null))):t?r.createElement(b.i,{fetchMore:d,scrollableEl:l},t.map((function(e){return r.createElement(O,{viewer:o,key:e.id,catalog:e,target:n,kind:i})}))):null}function F(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function D(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?F(Object(i),!0).forEach((function(n){(0,s.A)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):F(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var j={maxHeight:"240px",overflowY:"auto",padding:"24px 20px 16px 24px"};function V(e){var n,i,t,a=e.target,o=e.kind,d=e.showCreateModal,s=e.hidePanel,b=e.viewer,y=e.addToPredefinedLoading,N=r.useRef(null),h=(0,p.l)(),S=(0,u.e1)({limit:u.eB,userId:b.id}),C=(0,f.zF)(),I=(0,l.I)(m.j,{variables:S,skip:y}),E=I.data,P=I.error,T=I.loading,w=I.fetchMore,O=y||T;r.useEffect((function(){P&&C({toastStyle:"RETRYABLE_ERROR",duration:4e3})}),[P]);var F,V=r.useCallback((function(){d(),s()}),[d,s]),_=null==E?void 0:E.catalogsByUser.catalogs;return _&&"Catalog"===(null==E||null===(n=E.readingList)||void 0===n?void 0:n.__typename)&&(_=[E.readingList].concat((0,c.A)(_))),null!=E&&null!==(i=E.catalogsByUser)&&void 0!==i&&null!==(t=i.paging)&&void 0!==t&&t.nextPageCursor&&(F=function(){return w({variables:D(D({},S),{},{pagingOptions:D(D({},S.pagingOptions),{},{cursor:{id:E.catalogsByUser.paging.nextPageCursor.id}})})})}),r.createElement(v.a,{width:"300px"},r.createElement("div",{className:h(j),ref:N},r.createElement(A,{target:a,kind:o,viewer:b,catalogs:_,isLoading:O,fetchMore:F,scrollableEl:N.current})),!O&&r.createElement(v.a,{borderTop:"neutral.primary",padding:"20px 24px 24px"},r.createElement(k.kZ,{color:"ACCENT",scale:"L"},r.createElement(g.N,{onClick:V},"Create new list"))))}var _=i(86595),x=i(88055),B=i.n(x),L=i(95420),R=i(678),M=i(34317),H=i(97249),U=i(20631);function z(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function K(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?z(Object(i),!0).forEach((function(n){(0,s.A)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):z(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var G,Q="temp-catalog-id",q=i(24960),W=i(85864),Y=i(60603),Z=i(94405);function $(){return $=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)({}).hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},$.apply(null,arguments)}const X=function(e){return r.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),G||(G=r.createElement("path",{fill:"#000",d:"M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4z"})))};var J;function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)({}).hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},ee.apply(null,arguments)}const ne=function(e){return r.createElement("svg",ee({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},e),J||(J=r.createElement("path",{fill:"#000",d:"M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2z"})))};var ie=function(e){return{"& path":{fill:e.colorTokens.border.neutral.secondary.base}}},te=function(e){return{"& path":{fill:e.colorTokens.foreground.neutral.primary.hover}}},ae=function(){var e=(0,p.l)();return r.createElement(X,{className:e(ie)})},oe=function(){var e=(0,p.l)();return r.createElement(ne,{className:e(te)})};function de(e){return e.insideACatalog?r.createElement(oe,null):r.createElement(ae,null)}var le=["viewer","defaultToBookmarkIcon"];function re(e){var n=e.children,i=e.isPanelVisible,t=e.hidePanel,a=e.togglePanel,o=e.target,l=e.kind,s=e.viewer,c=e.bookmarkIcon,u=e.isInACatalog,m=e.isInReadingList,v=e.catalogsCount,g=e.popoverDisplay,k=(0,Y.e)(!1),p=(0,d.A)(k,3),f=p[0],b=p[1],y=p[2],N=function(e,n,i,t){var a=(0,M.$)(),o=(0,L.n)(U.M,{variables:{type:n,operation:{preprend:{type:t,id:i}}},optimisticResponse:{addToPredefinedCatalog:{__typename:"AddToPredefinedCatalogSucces",version:E.Xj,insertedItem:{__typename:"CatalogItemV2",catalogId:Q,catalogItemId:E.ue}}},onCompleted:function(e){if("AddToPredefinedCatalogSucces"===e.addToPredefinedCatalog.__typename&&t===h.Bd.POST){var n=e.addToPredefinedCatalog.insertedItem;a.event("post.addToList",{listId:n.catalogId,postId:n.catalogItemId})}},update:function(a,o){var d,l=null===(d=o.data)||void 0===d?void 0:d.addToPredefinedCatalog;if("AddToPredefinedCatalogSucces"===(null==l?void 0:l.__typename)){var r,s,c=l.insertedItem,u=l.version;if(c.catalogId!==Q&&((0,R.eq)(a,c.catalogId,u),(0,R.VP)(a,c.catalogId,[c.catalogItemId],t)),t===h.Bd.POST){r="PostViewerEdge:".concat((0,H.N)(i,e)),s=U.W;var m=a.readFragment({id:r,fragment:s});if(null!=m&&m.catalogsConnection){var v=B()(m.catalogsConnection.predefinedContainingThis),g=v.findIndex((function(e){return e.predefined===n}));if(-1!==g)v[g].catalogItemIds.push(c.catalogItemId);else{var k={catalogId:c.catalogId,predefined:n,version:u,catalogItemIds:[c.catalogItemId]};v.push(k)}a.writeFragment({id:r,fragment:s,data:K(K({},m),{},{catalogsConnection:K(K({},m.catalogsConnection),{},{predefinedContainingThis:v})})})}}}}}),l=(0,d.A)(o,2);return{addToPredefined:l[0],addToPredefinedLoading:l[1].loading}}(s.id,h.cA.READING_LIST,o.id,l),S=N.addToPredefined,C=N.addToPredefinedLoading,I=r.useCallback((function(){a(),m||u||S()}),[a,u,m,S]);return r.createElement(q.A,{isVisible:i,popoverRenderFn:function(){return r.createElement(V,{showCreateModal:b,hidePanel:t,target:o,kind:l,viewer:s,addToPredefinedLoading:C})},hide:t,targetDistance:15,display:g},r.createElement(_.a,{isVisible:f,hide:y,target:o,kind:l,viewer:s}),null==n?void 0:n({onClick:I,bookmarkIcon:c,catalogsCount:v,isPanelVisible:i}))}function se(e){var n,i,t,d=e.viewer,s=e.defaultToBookmarkIcon,c=(0,o.A)(e,le),u=r.useMemo((function(){return c.kind===h.Bd.POST?{postId:c.target.id,isPostKind:!0}:{postId:"",isPostKind:!1}}),[c.kind,c.target]),m=(0,l.I)(Z.jq,{ssr:!1,variables:u}).data,v=null,g=null;"Post"===(null==m||null===(n=m.postResult)||void 0===n?void 0:n.__typename)&&(v=m.postResult.viewerEdge.catalogsConnection,g=m.postResult);var k=(null===(i=v)||void 0===i?void 0:i.catalogsContainingThis)&&v.catalogsContainingThis.length>0,p=r.useMemo((function(){var e,n;return!!(null===(e=v)||void 0===e||null===(n=e.predefinedContainingThis)||void 0===n?void 0:n.find((function(e){return e.predefined===h.cA.READING_LIST})))}),[v]),f=r.useMemo((function(){var e;return((null===(e=v)||void 0===e?void 0:e.catalogsContainingThis.length)||0)+(p?1:0)}),[null===(t=v)||void 0===t?void 0:t.catalogsContainingThis.length,p]),b=r.createElement(de,{insideACatalog:!!k||p});return u.isPostKind?d&&v&&g?r.createElement(W.B,null,(function(e){var n=e.isVisible,i=e.toggle,t=e.hide;return r.createElement(re,(0,a.A)({},c,{target:g,viewer:d,isPanelVisible:n,togglePanel:i,hidePanel:t,bookmarkIcon:b,isInACatalog:!!k,isInReadingList:p,catalogsCount:f}))})):s||!c.children?b:c.children({onClick:function(){return null},bookmarkIcon:b,catalogsCount:f,isPanelVisible:!1,isDisabled:!0}):null}},52144:(e,n,i)=>{i.d(n,{P:()=>o});var t=i(45458),a=i(94405),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBookmarkButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBase_post"}}]}}].concat((0,t.A)(a.od.definitions))}},62464:(e,n,i)=>{i.d(n,{Q:()=>h});var t=i(58168),a=i(80045),o=i(64467),d=i(96540),l=i(27721),r=i(43634),s=i(28993),c=i(5600),u=i(44402),m=i(42976),v=i(23448),g=i(93948),k=["susiEntry","susiActionUrl","rules","testId","targetDistance"];function p(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}var f=function(e){return{color:e.colorTokens.foreground.neutral.secondary.base,"&:hover":{color:e.colorTokens.foreground.neutral.primary.hover}}},b=function(e,n){return function(i){var t=i.colorTokens.foreground.neutral.primary.hover,a=i.colorTokens.foreground.neutral.secondary.base;return function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?p(Object(i),!0).forEach((function(n){(0,o.A)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}({padding:"8px 2px",":hover:not(:disabled) svg path":{fill:n?a:t},":focus svg path":{fill:n?a:t},cursor:n?"not-allowed":"pointer",opacity:n?.3:void 0,"& svg path":{fill:a}},e)}},y="Add to list bookmark button",N=function(e){var n=e.bookmarkIcon,i=e.onClick,t=e.isPanelVisible,a=e.rules,o=e.disabled,l=e.testId;return d.createElement(s.P,{ariaControls:"addToCatalogBookmarkButton",ariaLabel:y,ariaExpanded:t?"true":"false",onClick:i,rules:b(a),disabled:o,testId:l},n)};function h(e){var n=e.susiEntry,i=void 0===n?"list":n,o=e.susiActionUrl,s=e.rules,p=e.testId,h=e.targetDistance,S=void 0===h?10:h,C=(0,a.A)(e,k),I=(0,u.l)(),E=(0,l.R)().value,P=C.kind===m.Bd.POST,T=P?C.target.isPublished:void 0;return P&&!T?d.createElement(c.G,{placement:"top",targetDistance:S,tooltipText:"You cannot Save a draft"},d.createElement("div",{className:I(b(s,!0)),"data-testid":p},d.createElement(v.A,{className:I(f),"aria-label":y,disabled:!0}))):E?d.createElement(c.G,{placement:"top",targetDistance:S,tooltipText:"Save"},d.createElement(g.f,(0,t.A)({},C,{viewer:E}),(function(e){var n=e.onClick,i=e.bookmarkIcon,t=e.isPanelVisible,a=e.isDisabled;return d.createElement(N,{bookmarkIcon:i,onClick:n,isPanelVisible:t,rules:s,disabled:a,testId:p})}))):d.createElement(c.G,{placement:"top",targetDistance:S,tooltipText:"Save"},d.createElement(r.r,{operation:"register",susiEntry:i,actionUrl:o,testId:p,post:P?C.target:void 0},d.createElement(v.A,{className:I([f,s]),"aria-label":y})))}},20631:(e,n,i)=>{i.d(n,{M:()=>a,W:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"useAddItemToPredefinedCatalog_postViewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}}]}}]}}]},a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"AddToPredefinedCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PredefinedCatalogType"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"operation"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PredefinedCatalogAddOperationInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addToPredefinedCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}},{kind:"Argument",name:{kind:"Name",value:"operation"},value:{kind:"Variable",name:{kind:"Name",value:"operation"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AddToPredefinedCatalogSucces"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"insertedItem"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"catalogItemId"}},{kind:"Field",name:{kind:"Name",value:"catalogId"}}]}}]}}]}}]}}]}},14029:(e,n,i)=>{i.d(n,{Q:()=>d});var t=i(45458),a=i(62742),o=i(52144),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BookmarkButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBookmarkButton_post"}}]}}].concat((0,t.A)(a.CV.definitions),(0,t.A)(o.P.definitions))}},96783:(e,n,i)=>{i.d(n,{T:()=>r});var t=i(96540),a=i(62464),o=i(42976),d=i(39160),l=i(46879);function r(e){var n=e.post,i=e.susiEntry,r=e.rules,s=e.targetDistance,c=e.testId,u=n.id,m=n.visibility,v=(0,d.d4)((function(e){return e.config.authDomain}));return m===o.dL.UNLISTED?null:t.createElement(a.Q,{kind:o.Bd.POST,target:n,rules:r,susiEntry:i,susiActionUrl:(0,l.are)(v,u),targetDistance:s,testId:c})}},74938:(e,n,i)=>{i.d(n,{q:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"auroraHooks_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isAuroraEligible"}},{kind:"Field",name:{kind:"Name",value:"isAuroraVisible"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isEditor"}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isAuroraVisible"}}]}}]}}]}},65550:(e,n,i)=>{i.d(n,{L:()=>d});var t=i(80296),a=i(96540),o=i(61333),d=function(){var e=a.useState(!1),n=(0,t.A)(e,2),i=n[0],d=n[1];return a.useEffect((function(){d((0,o.Gz)(navigator.userAgent))}),[]),i}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8594.4946d095.chunk.js.map