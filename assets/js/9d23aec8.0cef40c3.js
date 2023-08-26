"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1754],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(a),u=n,d=h["".concat(s,".").concat(u)]||h[u]||m[u]||o;return a?r.createElement(d,l(l({ref:t},c),{},{components:a})):r.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6419:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(4137));const o={sidebar_position:6},l="Delete a share",i={unversionedId:"unraid-os/manual/shares/delete-a-share",id:"unraid-os/manual/shares/delete-a-share",title:"Delete a share",description:"To delete a share on your Unraid server the share must contain no data.",source:"@site/docs/unraid-os/manual/shares/delete-a-share.md",sourceDirName:"unraid-os/manual/shares",slug:"/unraid-os/manual/shares/delete-a-share",permalink:"/unraid-os/manual/shares/delete-a-share",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/shares/delete-a-share.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"unraidSidebar",previous:{title:"Create a new share",permalink:"/unraid-os/manual/shares/create-a-share"},next:{title:"Overview",permalink:"/unraid-os/manual/what-is-unraid"}},s={},p=[{value:"Delete an empty share",id:"delete-an-empty-share",level:2},{value:"Delete a share that contains data",id:"delete-a-share-that-contains-data",level:2}],c={toc:p},h="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"delete-a-share"},"Delete a share"),(0,n.kt)("p",null,"To delete a share on your Unraid server the share must contain no data."),(0,n.kt)("h2",{id:"delete-an-empty-share"},"Delete an empty share"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Shares"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the share you want to delete."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Delete")," checkbox. The ",(0,n.kt)("strong",{parentName:"li"},"Apply")," button switches to a ",(0,n.kt)("strong",{parentName:"li"},"Delete")," button."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Delete")," button."),(0,n.kt)("li",{parentName:"ol"},"The system confirms the share has been deleted. Select ",(0,n.kt)("strong",{parentName:"li"},"Done"),".")),(0,n.kt)("h2",{id:"delete-a-share-that-contains-data"},"Delete a share that contains data"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Apps"),"."),(0,n.kt)("li",{parentName:"ol"},"Install a file management plugin from Community, such as Dynamix File Manager."),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Shares"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the browse icon to the left of the name of the share you wish to delete. This displays the content of the drive."),(0,n.kt)("li",{parentName:"ol"},"If you have installed a file manager, this view is enhanced with extra functionality to perform different file operations, including deletion."),(0,n.kt)("li",{parentName:"ol"},"Delete the data or move it to another share on the server."),(0,n.kt)("li",{parentName:"ol"},"Return to ",(0,n.kt)("strong",{parentName:"li"},"Shares"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the share you want to delete. This will open the share settings. If no data is left in the share, a ",(0,n.kt)("strong",{parentName:"li"},"Delete")," checkbox is available."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Delete")," checkbox. The ",(0,n.kt)("strong",{parentName:"li"},"Apply")," button switches to a ",(0,n.kt)("strong",{parentName:"li"},"Delete")," button."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Delete")," button."),(0,n.kt)("li",{parentName:"ol"},"The system confirms the share has been deleted."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Done")," to return to ",(0,n.kt)("strong",{parentName:"li"},"Shares"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Optionally, if you have read/write access to the shared folder over the network, you can use, for example, Windows Explorer or macOS Finder, to access the share and delete the data.")))}m.isMDXComponent=!0}}]);