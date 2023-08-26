"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4863],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=d(r),c=n,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||s;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=r(7462),n=(r(7294),r(4137));const s={sidebar_position:2},i="Disk shares",o={unversionedId:"unraid-os/manual/shares/disk-shares",id:"unraid-os/manual/shares/disk-shares",title:"Disk shares",description:"Enable or disable disk shares in Settings > Global Share Settings. Disk shares are disabled by default.",source:"@site/docs/unraid-os/manual/shares/disk-shares.md",sourceDirName:"unraid-os/manual/shares",slug:"/unraid-os/manual/shares/disk-shares",permalink:"/de/unraid-os/manual/shares/disk-shares",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/shares/disk-shares.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"unraidSidebar",previous:{title:"User shares",permalink:"/de/unraid-os/manual/shares/user-shares"},next:{title:"Network access",permalink:"/de/unraid-os/manual/shares/network-access"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Disk share constraints",id:"disk-share-constraints",level:2}],p={toc:d},h="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"disk-shares"},"Disk shares"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Enable or disable disk shares in ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Settings > Global Share Settings")),". Disk shares are disabled by default.")),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Disk shares correspond to individual array drives or pools within the Unraid system and are visible over the network. Once enabled, disk shares appear in the Unraid GUI under a ",(0,n.kt)("strong",{parentName:"p"},"Disk Shares")," section on the ",(0,n.kt)("strong",{parentName:"p"},"Shares")," tab. If you create a disk share, you should modify the user ",(0,n.kt)("a",{parentName:"p",href:"/de/unraid-os/manual/shares/network-access#access-permissions-at-share-level"},"access permissions")," to restrict network user access."),(0,n.kt)("p",null,"When viewed at the Linux level, the physical devices or pools will appear directly under ",(0,n.kt)("inlineCode",{parentName:"p"},"/mnt")," with a name corresponding to the array drive or pool. This happens regardless of whether Disk Shares are enabled."),(0,n.kt)("p",null,"Examples of such names are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/mnt/diskX:")," - these are individual drives in the array where X corresponds to the disk number that shows in the Unraid GUI. The corresponding disk share at the network level would be ",(0,n.kt)("em",{parentName:"li"},"diskX"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/mnt/pool-name:")," - these are pools of disks. A single pool can actually consist of multiple drives but Unraid treats them as if they were one drive. The most common example of a pool name is 'cache', but you can set any name. The corresponding disk share at the network level would be ",(0,n.kt)("inlineCode",{parentName:"li"},"pool-name"),".")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The Unraid flash device, used to boot Unraid and store all user settings, is also a physical device. However, it is not considered to be a disk share. If you want it visible on the network then you can click on it in the ",(0,n.kt)("strong",{parentName:"p"},"Main")," tab and set it to appear at the network level as the 'flash' share. At the Linux level it is mounted at ",(0,n.kt)("inlineCode",{parentName:"p"},"/boot"),"."),(0,n.kt)("p",{parentName:"admonition"},"Due to the nature of the Unraid boot device, we recommend you maintain your shares in ",(0,n.kt)("em",{parentName:"p"},"Private")," mode, with read/write access given to trusted users.")),(0,n.kt)("h2",{id:"disk-share-constraints"},"Disk share constraints"),(0,n.kt)("p",null,"If you have both disk shares and user shares enabled in ",(0,n.kt)("strong",{parentName:"p"},"Global Share Settings"),", then there is an important restriction that you must observe to avoid potential data loss."),(0,n.kt)("p",null,"You must ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"never"))," copy between a user share and a disk share in the same copy operation where the folder name on the disk share matches the name of the user share. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"cp /mnt/user/share/file /mnt/disk1/share/file"),"."),(0,n.kt)("p",null,"At the base system level, Linux does not understand user shares, and cannot tell apart a file in a disk share from one in a user share. If you mix the share types in the same copy command you can end up trying to copy the file to itself which results in the file being truncated to zero length and its content being lost."),(0,n.kt)("p",null,"There is no problem if the copy is between shares of the same type, or copying to/from a disk mounted as an ",(0,n.kt)("a",{parentName:"p",href:"/de/unraid-os/manual/storage-management#unassigned-drives"},"Unassigned Disk"),"."))}u.isMDXComponent=!0}}]);