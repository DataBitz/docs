"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5236],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),g=a,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2173:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={},o=void 0,l={unversionedId:"unraid-os/release-notes/6.10.3",id:"unraid-os/release-notes/6.10.3",title:"6.10.3",description:"Version 6.10.3 2022-06-14",source:"@site/docs/unraid-os/release-notes/6.10.3.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.10.3",permalink:"/fr/unraid-os/release-notes/6.10.3",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.10.3.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"6.10.2",permalink:"/fr/unraid-os/release-notes/6.10.2"},next:{title:"6.9.0",permalink:"/fr/unraid-os/release-notes/6.9.0"}},s={},u=[{value:"Version 6.10.3 2022-06-14",id:"version-6103-2022-06-14",level:2},{value:"Improvements",id:"improvements",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Change Log vs. Unraid OS 6.10.2",id:"change-log-vs-unraid-os-6102",level:2},{value:"Base distro",id:"base-distro",level:3},{value:"Linux kernel",id:"linux-kernel",level:3},{value:"Management",id:"management",level:3}],d={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"version-6103-2022-06-14"},"Version 6.10.3 2022-06-14"),(0,a.kt)("h3",{id:"improvements"},"Improvements"),(0,a.kt)("p",null,'Fixed data corruption issue which could occur on some platforms, notably HP Microserver Gen8/9, when Intel VT-d was enabled.\nThis was fixed by changing the Linux kernel default IOMMU operation mode from "DMA Translation" to "Pass-through".'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Also removed 'tg3' blacklisting when Intel VT-d was enabled. This was added in abundance of caution because all early\nreports of data corruption involved platforms which also (coincidentally) used 'tg3' network driver. If you created a\nblank 'config/modprobe.d/tg3.conf' file you may remove it.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Plugin authors:")," A plugin file may include an ",(0,a.kt)("inlineCode",{parentName:"p"},"<ALERT>")," tag which displays a markdown formatted message when a new version is available.\nUse this to give instructions or warnings to users before the upgrade is done."),(0,a.kt)("p",null,"Brought back color-coding in logging windows."),(0,a.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,a.kt)("p",null,"Fix issue detecting Mellanox NIC."),(0,a.kt)("p",null,"Misc. webGUI bug fixes"),(0,a.kt)("h2",{id:"change-log-vs-unraid-os-6102"},"Change Log vs. Unraid OS 6.10.2"),(0,a.kt)("h3",{id:"base-distro"},"Base distro"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"no changes")),(0,a.kt)("h3",{id:"linux-kernel"},"Linux kernel"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"version 5.15.46-Unraid"),(0,a.kt)("li",{parentName:"ul"},"CONFIG_IOMMU_DEFAULT_PASSTHROUGH: Passthrough")),(0,a.kt)("h3",{id:"management"},"Management"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"startup: improve network device detection"),(0,a.kt)("li",{parentName:"ul"},"webgui: Added color coding in log files"),(0,a.kt)("li",{parentName:"ul"},"webgui: In case of flash corruption try the test again"),(0,a.kt)("li",{parentName:"ul"},"webgui: Improved syslog reading"),(0,a.kt)("li",{parentName:"ul"},"webgui: Added log size setting when viewing syslog"),(0,a.kt)("li",{parentName:"ul"},"webgui: Plugin manager: add ALERT message function"),(0,a.kt)("li",{parentName:"ul"},"webgui: Add INFO icon to banner"),(0,a.kt)("li",{parentName:"ul"},"webgui: Added translations to PageMap page"),(0,a.kt)("li",{parentName:"ul"},"webgui: Fix: non-correcting parity check actually correcting if non-English language pack installed"),(0,a.kt)("li",{parentName:"ul"},"webgui: Updated azure/gray themes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Better support for Firefox"),(0,a.kt)("li",{parentName:"ul"},"Move utilization and notification indicators to the right")))))}p.isMDXComponent=!0}}]);