(self.webpackChunklite=self.webpackChunklite||[]).push([[8051],{14524:(e,n,i)=>{"use strict";i.d(n,{xO:()=>c});var t=i(87329),a=i(89748),l=i(8994),o=i(89080),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewByLine_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CardByline_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"ExpandablePostByline_user"}}]}}].concat((0,t.Z)(a.br.definitions),(0,t.Z)(l.A.definitions))},r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewByLine_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CardByline_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionLinkWithPopover_collection"}}]}}].concat((0,t.Z)(a.We.definitions),(0,t.Z)(o.W.definitions))},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewByLine_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewByLine_user"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewByLine_collection"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"CardByline_post"}}]}}].concat((0,t.Z)(d.definitions),(0,t.Z)(r.definitions),(0,t.Z)(a.yu.definitions))}},9842:(e,n,i)=>{"use strict";i.d(n,{G:()=>d});var t=i(67294),a=i(68717),l=i(36764),o=i(77355),d=function(e){var n=e.post,i=e.showAuthor,d=void 0===i||i,r=e.showCollectionName,c=void 0===r||r,m=e.marginBottom,s=n.collection||n.creator,u="User"===(null==s?void 0:s.__typename)&&n.collection?n.collection:n.creator;return d?t.createElement(o.x,{marginBottom:m,display:"flex",alignItems:"center"},n.creator?t.createElement(l.h,{author:n.creator,collection:c?n.collection:void 0,includeAvatar:!0,includeVerifiedAuthorBadge:!0,skipTab:!0}):u&&t.createElement(a.u,{publisher:u,publishedAt:void 0,post:n,isOneLine:!0})):null}},4088:(e,n,i)=>{"use strict";i.d(n,{u:()=>l});var t=i(87329),a=i(68216),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"usePostUrl_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"domain"}},{kind:"Field",name:{kind:"Name",value:"slug"}}]}},{kind:"Field",name:{kind:"Name",value:"isSeries"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"Field",name:{kind:"Name",value:"sequence"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"}}]}},{kind:"Field",name:{kind:"Name",value:"uniqueSlug"}}]}}].concat((0,t.Z)(a.$m.definitions))}},25145:(e,n,i)=>{"use strict";i.d(n,{D:()=>c,L:()=>m});var t=i(67294),a=i(84739),l=i(60671),o=i(92661),d=i(43487),r=i(68427),c=function(){var e=(0,d.v9)((function(e){return e.config.authDomain})),n=(0,o.k6)(),i=n.type===l.Cr.USER,c=(0,o.uk)(),m=(0,r.B)(),s=(0,a.I)();return(0,t.useCallback)((function(n){var t,a=n.uniqueSlug||n.id;if(n.isSeries)return"https://".concat(e).concat(c("ShowSeries",{postId:a}));if(null!==(t=n.sequence)&&void 0!==t&&t.slug)return"https://".concat(e).concat(c("ShowSequencePost",{sequenceSlug:n.sequence.slug,postId:a}));if(n.collection&&!i){var l=m({id:n.collection.id,domain:n.collection.domain,slug:n.collection.slug});return"".concat(l,"/").concat(a)}if(n.creator){var o=s(n.creator);return"".concat(o,"/").concat(a)}return"https://".concat(e).concat(c("ShowPost",{postId:a}))}),[n,c,m,s])},m=function(e){return c()(e)}},21309:(e,n,i)=>{"use strict";i.d(n,{t:()=>d});var t=i(67294),a=i(77355),l=i(14646),o=function(e){var n;return{fontWeight:null!==(n=e.newFonts.detail.boldWeight)&&void 0!==n?n:"bold"}},d=function(e){var n=e.collection,i=e.marginLeft,d=(0,l.I)();return n?t.createElement(a.x,{marginLeft:i,display:"inline-block"},t.createElement("strong",{className:d(o)},n.name)):null}},89080:(e,n,i)=>{"use strict";i.d(n,{W:()=>o});var t=i(87329),a=i(68216),l=i(98598),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionLinkWithPopover_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionTooltip_collection"}}]}}].concat((0,t.Z)(a.nf.definitions),(0,t.Z)(l.g.definitions))}},26700:(e,n,i)=>{"use strict";i.d(n,{q:()=>m});var t=i(67294),a=i(18978),l=i(68427),o=i(69992),d=i(93310),r=i(30020),c=i(87691),m=function(e){var n=e.collection,i=e.clamp,m=e.popoverPlacement,s=void 0===m?"bottom":m,u=e.scale,k=void 0===u?"M":u,v=e.testId,p=(0,l.R)(n);return t.createElement(o.$,{placement:s,targetDistance:10,mouseLeaveDelay:100,mouseEnterDelay:r.w,popoverRenderFn:function(){return t.createElement(a.L,{collection:n})},display:"block",noArrow:!0},t.createElement(d.r,{inline:!0,href:p,linkStyle:"SUBTLE",display:"flex",rules:{alignItems:"center"},"data-testid":v},t.createElement(c.F,{scale:k,color:"DARKER",clamp:i},n.name)))}},60765:(e,n,i)=>{"use strict";i.d(n,{g:()=>l});var t=i(67294),a=i(27323),l=function(e){var n=e.children,i=e.className,l=void 0===i?"":i,o=e.href,d=e.onClick;return o?t.createElement(a.P,{className:l,href:o,onClick:d},n):n}},62549:(e,n,i)=>{"use strict";i.d(n,{t:()=>a});var t=i(87329),a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"DraftStatus_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"pendingCollection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"BoldCollectionName_collection"}}]}},{kind:"Field",name:{kind:"Name",value:"statusForCollection"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"isPublished"}}]}}].concat((0,t.Z)([{kind:"FragmentDefinition",name:{kind:"Name",value:"BoldCollectionName_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]))}},34796:(e,n,i)=>{"use strict";i.d(n,{F:()=>r});var t,a=i(67294),l=i(21309),o=i(6443),d=i(39727);!function(e){e.CollectionPendingAsEditorAndAuthor="CollectionPendingAsEditorAndAuthor",e.CollectionPendingKnown="CollectionPendingKnown",e.CollectionPending="CollectionPending",e.CollectionUnsubmitted="CollectionUnsubmitted",e.Normal="Normal"}(t||(t={}));var r=function(e){var n=e.post,i=c(n);if(!n||!i)return null;var o=n.pendingCollection,d=a.createElement(l.t,{collection:o,marginLeft:"4px"});switch(i){case t.CollectionPendingAsEditorAndAuthor:return a.createElement(a.Fragment,null,"Draft in",d);case t.CollectionPendingKnown:return a.createElement(a.Fragment,null,"Draft submitted to",d);case t.CollectionPending:return a.createElement(a.Fragment,null,"Submitted draft");case t.CollectionUnsubmitted:return a.createElement(a.Fragment,null,"Unsubmitted draft");case t.Normal:return a.createElement(a.Fragment,null,"Draft")}},c=function(e){var n,i=(0,o.H)().value,a=null==e?void 0:e.pendingCollection,l=null==e||null===(n=e.creator)||void 0===n?void 0:n.id,r=!!i&&!(null==a||!a.creator)&&a.creator.id===i.id,c=(0,d.g)(a).viewerEdge,m=null==c?void 0:c.isEditor,s=r||m,u=s||!!i&&i.id===l,k=u&&a;return!e||e.isPublished?null:u&&"PENDING"===e.statusForCollection?k?s&&i&&i.id===l?t.CollectionPendingAsEditorAndAuthor:t.CollectionPendingKnown:t.CollectionPending:"NOT_YET_SUBMITTED"===e.statusForCollection?t.CollectionUnsubmitted:t.Normal}},8994:(e,n,i)=>{"use strict";i.d(n,{Z:()=>o,A:()=>d});var t=i(87329),a=i(68216),l=i(18821),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ExpandablePostByline_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"domain"}},{kind:"Field",name:{kind:"Name",value:"slug"}}]}}]},d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ExpandablePostByline_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useIsVerifiedBookAuthor_user"}}]}}].concat((0,t.Z)(a.$m.definitions),(0,t.Z)(l.H.definitions))}},48342:(e,n,i)=>{"use strict";i.d(n,{K:()=>d});var t=i(67294),a=i(14646),l=i(21372),o=function(e){return{color:e.colorTokens.foreground.neutral.secondary.base}},d=function(e){var n=e.readingTime,i=e.isLighterText,d=void 0!==i&&i,r=(0,a.I)();if(!n)return null;var c="".concat((0,l.Vd)(n)," min read");return t.createElement("span",{className:d?r(o):void 0},c)}},89748:(e,n,i)=>{"use strict";i.d(n,{yu:()=>m,br:()=>s,We:()=>u,Gk:()=>k});var t=i(87329),a=i(62549),l=i(82864),o=i(17828),d=i(18821),r=i(68216),c=i(54341),m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CardByline_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"DraftStatus_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"Star_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"shouldShowPublishedInStatus_post"}}]}}].concat((0,t.Z)(a.t.definitions),(0,t.Z)(l.W.definitions),(0,t.Z)(o.w.definitions))},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CardByline_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"mediumMemberAt"}},{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followerCount"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"useIsVerifiedBookAuthor_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}}]}}].concat((0,t.Z)(d.H.definitions),(0,t.Z)(r.$m.definitions),(0,t.Z)(c.OJ.definitions))},u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CardByline_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}}]}}].concat((0,t.Z)(r.nf.definitions))},k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CardByline_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CardByline_user"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CardByline_collection"}}]}}]}}].concat((0,t.Z)(s.definitions),(0,t.Z)(u.definitions))}},68717:(e,n,i)=>{"use strict";i.d(n,{Q:()=>b,u:()=>w});var t=i(67294),a=i(35989),l=i(68427),o=i(84739),d=i(65968),r=i(64238),c=i(21309),m=i(60765),s=i(63459),u=i(17311),k=i(34796),v=i(35473),p=i(28695),S=i(77355),f=i(69992),N=i(21755),g=i(87691),F=i(18155),E=i(14646),h=i(17583),y=i(58992);function C(e,n){return n&&(0,F.nE)(e)?e[n]:e}var _=function(e){var n=e.author,i=e.forceSize,a=e.scale,l=void 0===a?"M":a,c=(0,h.s)(),s=(0,o.B)(n),u=(0,r.o)(n),k=c===N.j.xs;if(!n||!n.name)return null;var v=t.createElement(m.g,{href:s},t.createElement(S.x,{display:"flex",flexWrap:"nowrap",alignItems:"center"},t.createElement(g.F,{color:"ACCENT",scale:C(l,i)},n.name),u&&t.createElement(S.x,{marginLeft:"2px",marginTop:"1px"},t.createElement(d._,{size:"S"}))));return t.createElement(S.x,{display:"flex",alignItems:"center"},k?v:t.createElement(f.$,{placement:"right",targetDistance:15,mouseLeaveDelay:200,noArrow:!0,popoverRenderFn:function(){return t.createElement(p.K,{user:n})}},v))},P=function(e){var n=e.collection,i=e.forceSize,a=e.scale,o=void 0===a?"M":a,d=e.post,r=(0,l.R)(n);return(0,y.l)(d)?t.createElement(m.g,{href:r},t.createElement(g.F,{scale:C(o,i),color:"DARKER"},"Published in",t.createElement(c.t,{collection:n,marginLeft:"4px"}))):null},D=function(e){var n=e.small,i=void 0!==n&&n,a=e.hideDot,l=void 0!==a&&a,o=(0,E.I)();return t.createElement("span",{className:o({margin:"0 ".concat(i?4:7,"px")})},l?null:"·")},b=function(e){var n=e.datePrefix,i=void 0===n?"":n,l=e.forceSize,o=e.isOneLine,d=e.withMidDot,r=void 0===d||d,c=e.href,v=e.onClick,p=e.publishedAt,f=e.scale,N=void 0===f?"M":f,F=e.showStar,E=void 0!==F&&F,h=e.showPinned,y=void 0!==h&&h,_=e.timeColor,P=void 0===_?"LIGHTER":_,b=e.timeToRead,w=e.post;if(!p&&!b)return null;var x=o?u.h:s.Ej;return t.createElement(S.x,{display:"flex",alignItems:"center"},t.createElement(m.g,{href:c,onClick:v},t.createElement(g.F,{color:P,scale:C(N,l)},o&&r&&t.createElement(D,{small:!0,hideDot:!!b&&!!p}),p&&!y?t.createElement(t.Fragment,null,i,t.createElement(x,{hasPrefix:!(!o||!i)||void 0,timestamp:p})):null,y?t.createElement("span",null,"Pinned"):null,p&&b?t.createElement(D,null):null,b||null,!p&&t.createElement(t.Fragment,null,t.createElement(D,{small:o}),t.createElement(g.F,{color:"DARKER",scale:C(N,l),tag:"span"},t.createElement(k.F,{post:w}))))),E&&t.createElement(a.U,{padding:"0 0 0 4px",post:w}))},w=function(e){var n=e.avatar,i=void 0===n?null:n,a=e.datePrefix,l=e.forceSize,o=e.hideAuthor,d=void 0!==o&&o,r=e.href,c=e.onClick,m=e.isOneLine,s=void 0!==m&&m,u=e.publisher,k=e.publishedAt,p=e.scale,S=e.showStar,f=void 0!==S&&S,N=e.showPinned,g=void 0!==N&&N,F=e.timeColor,E=e.timeToRead,h=e.post,y=null;"Collection"===u.__typename?y=t.createElement(P,{collection:u,forceSize:l,scale:p,post:h}):d||(y=t.createElement(_,{author:u,forceSize:l,scale:p}));var C="Collection"===u.__typename||!d;return t.createElement(v.Y,{avatar:d?null:i,isOneLine:s,title:y,description:t.createElement(b,{datePrefix:a,publishedAt:k,timeToRead:E,withMidDot:C,href:r,onClick:c,showStar:f,showPinned:g,forceSize:l,scale:p,timeColor:F,isOneLine:s,post:h})})}},36764:(e,n,i)=>{"use strict";i.d(n,{h:()=>S});var t=i(67294),a=i(84739),l=i(65968),o=i(64238),d=i(26700),r=i(17193),c=i(28695),m=i(77355),s=i(69992),u=i(93310),k=i(30020),v=i(87691),p=function(e){var n=e.author;return(0,o.o)(n)?t.createElement(m.x,{marginLeft:"2px",marginTop:"2px"},t.createElement(l._,{size:"S"})):null},S=function(e){var n,i=(0,a.I)()(e.author),l=(0,t.useCallback)((function(){return e.author&&t.createElement(c.K,{user:e.author})}),[e.author]);return t.createElement(t.Fragment,null,e.includeAvatar&&t.createElement(m.x,{marginRight:"8px"},t.createElement(s.$,{targetDistance:15,mouseLeaveDelay:100,mouseEnterDelay:k.w,placement:"top",role:"tooltip",noArrow:!0,popoverRenderFn:l,display:"block"},t.createElement(r.Yt,{scale:"XXXS",user:e.author,link:!0,showHoverState:!0,skipTab:e.skipTab}))),t.createElement(m.x,{paddingRight:"4px"},t.createElement(s.$,{targetDistance:15,mouseLeaveDelay:100,mouseEnterDelay:k.w,placement:"top",role:"tooltip",noArrow:!0,popoverRenderFn:l,display:"block"},t.createElement(u.r,{href:i,linkStyle:"SUBTLE",inline:!0,display:"flex",rules:{alignItems:"center"}},t.createElement(v.F,{scale:"S",color:"DARKER",clamp:1},e.author.name),e.includeVerifiedAuthorBadge&&t.createElement(p,{author:e.author})))),(null===(n=e.collection)||void 0===n?void 0:n.name)&&t.createElement(t.Fragment,null,t.createElement(m.x,{paddingRight:"4px"},t.createElement(v.F,{scale:"S",color:"LIGHTER"},"in")),t.createElement(m.x,null,t.createElement(d.q,{collection:e.collection,clamp:1,popoverPlacement:"top",scale:"S"}))))}},17828:(e,n,i)=>{"use strict";i.d(n,{w:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"shouldShowPublishedInStatus_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"statusForCollection"}},{kind:"Field",name:{kind:"Name",value:"isPublished"}}]}}]}},58992:(e,n,i)=>{"use strict";i.d(n,{l:()=>t});var t=function(e){return"APPROVED"===e.statusForCollection&&e.isPublished}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8051.d7f75bb3.chunk.js.map