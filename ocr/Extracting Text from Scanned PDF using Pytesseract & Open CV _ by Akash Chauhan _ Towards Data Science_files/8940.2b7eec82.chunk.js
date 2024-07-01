"use strict";(self.webpackChunklite=self.webpackChunklite||[]).push([[8940],{42581:(e,n,i)=>{i.d(n,{TX:()=>m});var t=i(45458),a=i(38517),l=i(33811),o=i(3531),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewByLine_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CardByline_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"ExpandablePostByline_user"}}]}}].concat((0,t.A)(a.a5.definitions),(0,t.A)(l._.definitions))},r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewByLine_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CardByline_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionLinkWithPopover_collection"}}]}}].concat((0,t.A)(a.bR.definitions),(0,t.A)(o.v.definitions))},m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewByLine_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewByLine_user"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewByLine_collection"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"CardByline_post"}}]}}].concat((0,t.A)(d.definitions),(0,t.A)(r.definitions),(0,t.A)(a.r2.definitions))}},34407:(e,n,i)=>{i.d(n,{O:()=>d});var t=i(96540),a=i(30279),l=i(77206),o=i(52290),d=function(e){var n=e.post,i=e.showAuthor,d=void 0===i||i,r=e.showCollectionName,m=void 0===r||r,c=e.marginBottom,s=n.collection||n.creator,u="User"===(null==s?void 0:s.__typename)&&n.collection?n.collection:n.creator;return d?t.createElement(o.a,{marginBottom:c,display:"flex",alignItems:"center"},n.creator?t.createElement(l.V,{author:n.creator,collection:m?n.collection:void 0,includeAvatar:!0,includeVerifiedAuthorBadge:!0,skipTab:!0}):u&&t.createElement(a.a,{publisher:u,publishedAt:void 0,post:n,isOneLine:!0})):null}},25703:(e,n,i)=>{i.d(n,{c:()=>l});var t=i(45458),a=i(59265),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"usePostUrl_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"domain"}},{kind:"Field",name:{kind:"Name",value:"slug"}}]}},{kind:"Field",name:{kind:"Name",value:"isSeries"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"Field",name:{kind:"Name",value:"sequence"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"}}]}},{kind:"Field",name:{kind:"Name",value:"uniqueSlug"}}]}}].concat((0,t.A)(a.v0.definitions))}},67459:(e,n,i)=>{i.d(n,{J:()=>c,g:()=>m});var t=i(96540),a=i(64122),l=i(56742),o=i(51260),d=i(39160),r=i(60213),m=function(){var e=(0,d.d4)((function(e){return e.config.authDomain})),n=(0,o.RW)(),i=n.type===l.S9.USER,m=(0,o.om)(),c=(0,r.u)(),s=(0,a.W)();return(0,t.useCallback)((function(n){var t,a=n.uniqueSlug||n.id;if(n.isSeries)return"https://".concat(e).concat(m("ShowSeries",{postId:a}));if(null!==(t=n.sequence)&&void 0!==t&&t.slug)return"https://".concat(e).concat(m("ShowSequencePost",{sequenceSlug:n.sequence.slug,postId:a}));if(n.collection&&!i){var l=c({id:n.collection.id,domain:n.collection.domain,slug:n.collection.slug});return"".concat(l,"/").concat(a)}if(n.creator){var o=s(n.creator);return"".concat(o,"/").concat(a)}return"https://".concat(e).concat(m("ShowPost",{postId:a}))}),[n,m,c,s])},c=function(e){return m()(e)}},75532:(e,n,i)=>{i.d(n,{N:()=>d});var t=i(96540),a=i(52290),l=i(44402),o=function(e){var n;return{fontWeight:null!==(n=e.newFonts.detail.boldWeight)&&void 0!==n?n:"bold"}},d=function(e){var n=e.collection,i=e.marginLeft,d=(0,l.l)();return n?t.createElement(a.a,{marginLeft:i,display:"inline-block"},t.createElement("strong",{className:d(o)},n.name)):null}},3531:(e,n,i)=>{i.d(n,{v:()=>o});var t=i(45458),a=i(59265),l=i(68715),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionLinkWithPopover_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionTooltip_collection"}}]}}].concat((0,t.A)(a.dl.definitions),(0,t.A)(l.n.definitions))}},43002:(e,n,i)=>{i.d(n,{w:()=>c});var t=i(96540),a=i(18599),l=i(60213),o=i(41299),d=i(86527),r=i(5600),m=i(36557),c=function(e){var n=e.collection,i=e.clamp,c=e.popoverPlacement,s=void 0===c?"bottom":c,u=e.scale,k=void 0===u?"M":u,v=e.testId,p=(0,l.z)(n);return t.createElement(o.R,{placement:s,targetDistance:10,mouseLeaveDelay:100,mouseEnterDelay:r.A,popoverRenderFn:function(){return t.createElement(a.a,{collection:n})},display:"block",noArrow:!0},t.createElement(d.N,{inline:!0,href:p,linkStyle:"SUBTLE",display:"flex",rules:{alignItems:"center"},"data-testid":v},t.createElement(m.kZ,{scale:k,color:"DARKER",clamp:i},n.name)))}},56746:(e,n,i)=>{i.d(n,{k:()=>l});var t=i(96540),a=i(86975),l=function(e){var n=e.children,i=e.className,l=void 0===i?"":i,o=e.href,d=e.onClick;return o?t.createElement(a.D,{className:l,href:o,onClick:d},n):n}},96623:(e,n,i)=>{i.d(n,{N:()=>a});var t=i(45458),a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"DraftStatus_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"pendingCollection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"BoldCollectionName_collection"}}]}},{kind:"Field",name:{kind:"Name",value:"statusForCollection"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"isPublished"}}]}}].concat((0,t.A)([{kind:"FragmentDefinition",name:{kind:"Name",value:"BoldCollectionName_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]))}},85123:(e,n,i)=>{i.d(n,{Q:()=>r});var t,a=i(96540),l=i(75532),o=i(27721),d=i(86329);!function(e){e.CollectionPendingAsEditorAndAuthor="CollectionPendingAsEditorAndAuthor",e.CollectionPendingKnown="CollectionPendingKnown",e.CollectionPending="CollectionPending",e.CollectionUnsubmitted="CollectionUnsubmitted",e.Normal="Normal"}(t||(t={}));var r=function(e){var n=e.post,i=m(n);if(!n||!i)return null;var o=n.pendingCollection,d=a.createElement(l.N,{collection:o,marginLeft:"4px"});switch(i){case t.CollectionPendingAsEditorAndAuthor:return a.createElement(a.Fragment,null,"Draft in",d);case t.CollectionPendingKnown:return a.createElement(a.Fragment,null,"Draft submitted to",d);case t.CollectionPending:return a.createElement(a.Fragment,null,"Submitted draft");case t.CollectionUnsubmitted:return a.createElement(a.Fragment,null,"Unsubmitted draft");case t.Normal:return a.createElement(a.Fragment,null,"Draft")}},m=function(e){var n,i=(0,o.R)().value,a=null==e?void 0:e.pendingCollection,l=null==e||null===(n=e.creator)||void 0===n?void 0:n.id,r=!!i&&!(null==a||!a.creator)&&a.creator.id===i.id,m=(0,d.J)(a).viewerEdge,c=null==m?void 0:m.isEditor,s=r||c,u=s||!!i&&i.id===l,k=u&&a;return!e||e.isPublished?null:u&&"PENDING"===e.statusForCollection?k?s&&i&&i.id===l?t.CollectionPendingAsEditorAndAuthor:t.CollectionPendingKnown:t.CollectionPending:"NOT_YET_SUBMITTED"===e.statusForCollection?t.CollectionUnsubmitted:t.Normal}},33811:(e,n,i)=>{i.d(n,{H:()=>o,_:()=>d});var t=i(45458),a=i(59265),l=i(55918),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ExpandablePostByline_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"domain"}},{kind:"Field",name:{kind:"Name",value:"slug"}}]}}]},d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ExpandablePostByline_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useIsVerifiedBookAuthor_user"}}]}}].concat((0,t.A)(a.v0.definitions),(0,t.A)(l.s.definitions))}},21546:(e,n,i)=>{i.d(n,{T:()=>d});var t=i(96540),a=i(44402),l=i(27715),o=function(e){return{color:e.colorTokens.foreground.neutral.secondary.base}},d=function(e){var n=e.readingTime,i=e.isLighterText,d=void 0!==i&&i,r=(0,a.l)();if(!n)return null;var m="".concat((0,l.M8)(n)," min read");return t.createElement("span",{className:d?r(o):void 0},m)}},38517:(e,n,i)=>{i.d(n,{a5:()=>s,bR:()=>u,r2:()=>c,z2:()=>k});var t=i(45458),a=i(96623),l=i(4424),o=i(28961),d=i(55918),r=i(59265),m=i(23445),c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CardByline_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"DraftStatus_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"Star_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"shouldShowPublishedInStatus_post"}}]}}].concat((0,t.A)(a.N.definitions),(0,t.A)(l.c.definitions),(0,t.A)(o.f.definitions))},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CardByline_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"mediumMemberAt"}},{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followerCount"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"useIsVerifiedBookAuthor_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}}]}}].concat((0,t.A)(d.s.definitions),(0,t.A)(r.v0.definitions),(0,t.A)(m.pB.definitions))},u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CardByline_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}}]}}].concat((0,t.A)(r.dl.definitions))},k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CardByline_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CardByline_user"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CardByline_collection"}}]}}]}}].concat((0,t.A)(s.definitions),(0,t.A)(u.definitions))}},30279:(e,n,i)=>{i.d(n,{a:()=>b,w:()=>P});var t=i(96540),a=i(39204),l=i(60213),o=i(64122),d=i(36469),r=i(88474),m=i(75532),c=i(56746),s=i(91271),u=i(66356),k=i(85123),v=i(87039),p=i(22841),N=i(52290),S=i(41299),f=i(27049),g=i(36557),F=i(9459),E=i(44402),h=i(46963),y=i(13161);function C(e,n){return n&&(0,F.n_)(e)?e[n]:e}var A=function(e){var n=e.author,i=e.forceSize,a=e.scale,l=void 0===a?"M":a,m=(0,h.U)(),s=(0,o.f)(n),u=(0,r.E)(n),k=m===f.i.xs;if(!n||!n.name)return null;var v=t.createElement(c.k,{href:s},t.createElement(N.a,{display:"flex",flexWrap:"nowrap",alignItems:"center"},t.createElement(g.kZ,{color:"ACCENT",scale:C(l,i)},n.name),u&&t.createElement(N.a,{marginLeft:"2px",marginTop:"1px"},t.createElement(d.b,{size:"S"}))));return t.createElement(N.a,{display:"flex",alignItems:"center"},k?v:t.createElement(S.R,{placement:"right",targetDistance:15,mouseLeaveDelay:200,noArrow:!0,popoverRenderFn:function(){return t.createElement(p.J,{user:n})}},v))},_=function(e){var n=e.collection,i=e.forceSize,a=e.scale,o=void 0===a?"M":a,d=e.post,r=(0,l.z)(n);return(0,y.I)(d)?t.createElement(c.k,{href:r},t.createElement(g.kZ,{scale:C(o,i),color:"DARKER"},"Published in",t.createElement(m.N,{collection:n,marginLeft:"4px"}))):null},D=function(e){var n=e.small,i=void 0!==n&&n,a=e.hideDot,l=void 0!==a&&a,o=(0,E.l)();return t.createElement("span",{className:o({margin:"0 ".concat(i?4:7,"px")})},l?null:"·")},P=function(e){var n=e.datePrefix,i=void 0===n?"":n,l=e.forceSize,o=e.isOneLine,d=e.withMidDot,r=void 0===d||d,m=e.href,v=e.onClick,p=e.publishedAt,S=e.scale,f=void 0===S?"M":S,F=e.showStar,E=void 0!==F&&F,h=e.showPinned,y=void 0!==h&&h,A=e.timeColor,_=void 0===A?"LIGHTER":A,P=e.timeToRead,b=e.post;if(!p&&!P)return null;var T=o?u.c:s.n9;return t.createElement(N.a,{display:"flex",alignItems:"center"},t.createElement(c.k,{href:m,onClick:v},t.createElement(g.kZ,{color:_,scale:C(f,l)},o&&r&&t.createElement(D,{small:!0,hideDot:!!P&&!!p}),p&&!y?t.createElement(t.Fragment,null,i,t.createElement(T,{hasPrefix:!(!o||!i)||void 0,timestamp:p})):null,y?t.createElement("span",null,"Pinned"):null,p&&P?t.createElement(D,null):null,P||null,!p&&t.createElement(t.Fragment,null,t.createElement(D,{small:o}),t.createElement(g.kZ,{color:"DARKER",scale:C(f,l),tag:"span"},t.createElement(k.Q,{post:b}))))),E&&t.createElement(a.F,{padding:"0 0 0 4px",post:b}))},b=function(e){var n=e.avatar,i=void 0===n?null:n,a=e.datePrefix,l=e.forceSize,o=e.hideAuthor,d=void 0!==o&&o,r=e.href,m=e.onClick,c=e.isOneLine,s=void 0!==c&&c,u=e.publisher,k=e.publishedAt,p=e.scale,N=e.showStar,S=void 0!==N&&N,f=e.showPinned,g=void 0!==f&&f,F=e.timeColor,E=e.timeToRead,h=e.post,y=null;"Collection"===u.__typename?y=t.createElement(_,{collection:u,forceSize:l,scale:p,post:h}):d||(y=t.createElement(A,{author:u,forceSize:l,scale:p}));var C="Collection"===u.__typename||!d;return t.createElement(v.K,{avatar:d?null:i,isOneLine:s,title:y,description:t.createElement(P,{datePrefix:a,publishedAt:k,timeToRead:E,withMidDot:C,href:r,onClick:m,showStar:S,showPinned:g,forceSize:l,scale:p,timeColor:F,isOneLine:s,post:h})})}},77206:(e,n,i)=>{i.d(n,{V:()=>N});var t=i(96540),a=i(64122),l=i(36469),o=i(88474),d=i(43002),r=i(23393),m=i(22841),c=i(52290),s=i(41299),u=i(86527),k=i(5600),v=i(36557),p=function(e){var n=e.author;return(0,o.E)(n)?t.createElement(c.a,{marginLeft:"2px",marginTop:"2px"},t.createElement(l.b,{size:"S"})):null},N=function(e){var n,i=(0,a.W)()(e.author),l=(0,t.useCallback)((function(){return e.author&&t.createElement(m.J,{user:e.author})}),[e.author]);return t.createElement(t.Fragment,null,e.includeAvatar&&t.createElement(c.a,{marginRight:"8px"},t.createElement(s.R,{targetDistance:15,mouseLeaveDelay:100,mouseEnterDelay:k.A,placement:"top",role:"tooltip",noArrow:!0,popoverRenderFn:l,display:"block"},t.createElement(r.H8,{scale:"XXXS",user:e.author,link:!0,showHoverState:!0,skipTab:e.skipTab}))),t.createElement(c.a,{paddingRight:"4px"},t.createElement(s.R,{targetDistance:15,mouseLeaveDelay:100,mouseEnterDelay:k.A,placement:"top",role:"tooltip",noArrow:!0,popoverRenderFn:l,display:"block"},t.createElement(u.N,{href:i,linkStyle:"SUBTLE",inline:!0,display:"flex",rules:{alignItems:"center"}},t.createElement(v.kZ,{scale:"S",color:"DARKER",clamp:1},e.author.name),e.includeVerifiedAuthorBadge&&t.createElement(p,{author:e.author})))),(null===(n=e.collection)||void 0===n?void 0:n.name)&&t.createElement(t.Fragment,null,t.createElement(c.a,{paddingRight:"4px"},t.createElement(v.kZ,{scale:"S",color:"LIGHTER"},"in")),t.createElement(c.a,null,t.createElement(d.w,{collection:e.collection,clamp:1,popoverPlacement:"top",scale:"S"}))))}},28961:(e,n,i)=>{i.d(n,{f:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"shouldShowPublishedInStatus_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"statusForCollection"}},{kind:"Field",name:{kind:"Name",value:"isPublished"}}]}}]}},13161:(e,n,i)=>{i.d(n,{I:()=>t});var t=function(e){return"APPROVED"===e.statusForCollection&&e.isPublished}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8940.2b7eec82.chunk.js.map