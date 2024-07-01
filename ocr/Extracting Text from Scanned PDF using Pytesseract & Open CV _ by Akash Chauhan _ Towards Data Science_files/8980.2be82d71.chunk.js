"use strict";(self.webpackChunklite=self.webpackChunklite||[]).push([[8980],{18591:(e,n,t)=>{t.d(n,{e:()=>m});var i=t(45458),a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GridPostPreviewImage_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"previewImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GridPostPreviewImage_imageMetadata"}}]}}]}}].concat((0,i.A)([{kind:"FragmentDefinition",name:{kind:"Name",value:"GridPostPreviewImage_imageMetadata"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ImageMetadata"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"focusPercentX"}},{kind:"Field",name:{kind:"Name",value:"focusPercentY"}},{kind:"Field",name:{kind:"Name",value:"alt"}}]}}]))},r=t(57426),o=t(42581),l=t(99142),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GridPostPreviewContent_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"extendedPreviewContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subtitle"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"GridPostPreviewImage_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewFooter_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewByLine_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewInformation_post"}}]}}].concat((0,i.A)(a.definitions),(0,i.A)(r.v.definitions),(0,i.A)(o.TX.definitions),(0,i.A)(l.Q.definitions))},s=t(29371),m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GridPostPreview_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"GridPostPreviewContent_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewContainer_post"}}]}}].concat((0,i.A)(d.definitions),(0,i.A)(s.V.definitions))}},18302:(e,n,t)=>{t.d(n,{h:()=>O});var i=t(96540),a=t(77865),r=t(73916),o=t.n(r),l=t(60641),d=t(52290),s=t(86527),m=t(39410),c=t(27622),u=t(36557),p=t(49287),v=t(44402),k=t(79959),f=t(88726),g=t(85050),w=t(27049),h=t(20239);function S(e){var n=e.dividerBreakpoints,t=e.dividerColor,a=(0,h.D)(),r=(0,l.f)();return i.createElement(g.V,{xl:n.includes(w.i.xl),lg:n.includes(w.i.lg),md:n.includes(w.i.md),sm:n.includes(w.i.sm),xs:n.includes(w.i.xs)},i.createElement(f.i,{marginTop:r?"0px":"32px",borderColor:null!=t?t:a.colorTokens.border.neutral.primary.base}))}var x=t(90280),E=t(90383),N=t(93694);function P(e,n){return e.includes(n)?"block":"none"}function F(e){return e?Math.round(e):e}function y(e){var n=e.post,t=e.scales,r=e.aspectRatio,o=void 0===r?x.l8.ThreeToTwo:r,l=e.miroImgFetchedWidth,s=e.webp,m=e.freezeGifs,c=void 0!==m&&m,u=e.imgLoading,p=void 0===u?a.u.LAZY:u,v=(0,N.y2)(t),k=n.previewImage,f=n.title,g=(null==k?void 0:k.id)||"1*yuVzMhCJyDENbyhwAsrkwA.png",w=(0,E.rP)({miroId:g,width:l,strategy:E.qY.Resample,freezeGifs:c,webp:!!s}),h=(null==k?void 0:k.alt)||f||"",S=function(e,n,t){return function(i){var a,r,o=null!==(a=F(n))&&void 0!==a?a:50,l=null!==(r=F(t))&&void 0!==r?r:50;return{width:"100%",borderRadius:"2px",aspectRatio:"string"==typeof e?x.au[e]:{xs:x.au[e.xs],sm:x.au[e.sm],md:x.au[e.md],lg:x.au[e.lg],xl:x.au[e.xl]},objectFit:"cover",objectPosition:"".concat(o,"% ").concat(l,"%"),backgroundColor:i.colorTokens.background.neutral.tertiary.base}}}(o,null==k?void 0:k.focusPercentX,null==k?void 0:k.focusPercentY);return i.createElement("div",{"aria-label":h||"Post Preview Image"},Object.keys(v).map((function(e){var n=v[e];return n.length?i.createElement(d.a,{display:{xs:P(n,"xs"),sm:P(n,"sm"),md:P(n,"md"),lg:P(n,"lg"),xl:P(n,"xl")},key:"grid-image-".concat(e)},i.createElement(a._,{src:w,alt:h,rules:S,loading:p})):null})))}var b=t(7380),C=t(34407),T=t(65648),I=t(31714),A="image",G="content";function D(e){return new Array(12).fill(null).map(e).join(" ")}function L(e){switch(e){case"L":return'"'.concat(D((function(e,n){return n>=7?G:A})),'"');case"M":case"S":var n=D((function(){return A})),t=D((function(){return G}));return'"'.concat(n,'" "').concat(t,'"')}}var M=function(e,n){return{position:"relative",height:"100%",display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridTemplateRows:"auto 1fr",gap:e,gridTemplateAreas:n}},R=function(e){return{gridArea:e}},_={display:"flex",justifyContent:"center",flexDirection:"column"},B=function(e){var n,t,r=e.post,f=e.postUrl,g=e.scales,w=e.aspectRatio,h=e.showCollectionName,x=e.showAuthor,E=e.showDivider,P=e.dividerBreakpoints,F=e.dividerColor,D=e.miroImgFetchedWidth,B=e.webp,z=void 0!==B&&B,O=e.freezeGifs,j=e.prependOverflowMenuItems,Y=e.imgLoading,U=void 0===Y?a.u.LAZY:Y,W=(0,l.f)(),Z=(0,v.l)(),V=(0,p.jI)(),X=r.title,K=null==r||null===(n=r.extendedPreviewContent)||void 0===n?void 0:n.subtitle,q=(0,N.Lk)((t=W,{S:{subElementSpacing:"16px",titleScale:"S",titleClamp:2,gridTemplateAreas:L("S"),gap:"24px 0",hasDivider:!0,flexGrowTitle:"1"},M:{subElementSpacing:t?"16px":"20px",titleScale:"M",titleClamp:2,gridTemplateAreas:L("M"),gap:"32px 0",hasDivider:!0,flexGrowTitle:"1"},L:{subElementSpacing:"24px",titleScale:"L",titleClamp:3,gridTemplateAreas:L("L"),gap:"0 56px",hasDivider:!1,flexGrowTitle:void 0}}),g),H=o()(q,(function(e){return e.subElementSpacing})),J=o()(q,(function(e){return e.titleScale})),Q=o()(q,(function(e){return e.titleClamp})),$=o()(q,(function(e){return e.gap})),ee=o()(q,(function(e){return e.gridTemplateAreas})),ne=o()(q,(function(e){return e.hasDivider})),te=o()(q,(function(e){return e.flexGrowTitle})),ie=X&&X.length>70,ae=E&&ne,re=X||K?W?"12px":H:void 0;return i.createElement("div",{className:Z(M($,ee)),role:"link","data-href":f,tabIndex:0,onKeyDown:function(e){e&&"Enter"===e.key&&window.location.assign((0,k.ST)(f,{source:V}))}},i.createElement("div",{className:Z(R(A))},i.createElement(y,{post:r,scales:g,aspectRatio:w,miroImgFetchedWidth:D,webp:z,freezeGifs:O,imgLoading:U})),i.createElement("div",{className:Z([R(G),_])},i.createElement(b.p,{rules:{display:"flex",flexDirection:"column",flexGrow:1}},i.createElement(i.Fragment,null,i.createElement(C.O,{post:r,marginBottom:H,showCollectionName:h,showAuthor:x}),i.createElement(d.a,{wordBreak:"break-word",paddingBottom:re,flexGrow:te},i.createElement(b.o,null,i.createElement(s.N,{href:f},X&&i.createElement("div",{title:ie?X:""},i.createElement(m.hE,{scale:J,clamp:Q},X)),K&&i.createElement(d.a,{paddingTop:"8px"},i.createElement(c.Pd,{scale:"S",clamp:2},K))))),W?i.createElement(u.kZ,{scale:"S",tag:"span"},i.createElement(T.u,{type:T.E.GRID,post:r,postUrl:f,scales:g,prependOverflowMenuItems:j,isCondensedFooter:!0})):i.createElement(i.Fragment,null,i.createElement(u.kZ,{scale:"S",tag:"span"},i.createElement(d.a,{display:"flex",alignItems:"center"},i.createElement(I.h,{post:r,isShorthand:!0}))),i.createElement(d.a,{paddingTop:H},i.createElement(T.u,{type:T.E.GRID,post:r,postUrl:f,scales:g,prependOverflowMenuItems:j}))),ae&&i.createElement(S,{dividerBreakpoints:P,dividerColor:F})))))},z=t(98237);function O(e){var n=e.post,t=e.index,r=e.lastIndex,o=e.presentationTrackerReferrerSource,l=e.scale,d=e.aspectRatio,s=e.showCollectionName,m=e.showAuthor,c=e.dividerBreakpoints,u=e.dividerColor,p=e.miroImgFetchedWidth,v=e.webp,k=void 0!==v&&v,f=e.freezeGifs,g=e.prependOverflowMenuItems,w=e.imgLoading,h=void 0===w?a.u.LAZY:w,S="string"==typeof l?(0,N.Kb)(l):l;return i.createElement(z._,{post:n,presentationTrackerReferrerSource:o,index:t,isFullHeight:!0},(function(e){var a=e.postUrl;return i.createElement(B,{post:n,postUrl:a,scales:S,aspectRatio:d,showDivider:t!==r,showCollectionName:s,showAuthor:m,dividerBreakpoints:c,dividerColor:u,miroImgFetchedWidth:p,webp:k,freezeGifs:f,prependOverflowMenuItems:g,imgLoading:h})}))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8980.2be82d71.chunk.js.map