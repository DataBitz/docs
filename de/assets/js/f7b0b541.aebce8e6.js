"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2454],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=s,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||n;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7088:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(7462),s=(r(7294),r(4137));const n={sidebar_position:4},o="Network access",i={unversionedId:"unraid-os/manual/shares/network-access",id:"unraid-os/manual/shares/network-access",title:"Network access",description:"Communication protocols",source:"@site/docs/unraid-os/manual/shares/network-access.md",sourceDirName:"unraid-os/manual/shares",slug:"/unraid-os/manual/shares/network-access",permalink:"/de/unraid-os/manual/shares/network-access",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/shares/network-access.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"unraidSidebar",previous:{title:"Disk shares",permalink:"/de/unraid-os/manual/shares/disk-shares"},next:{title:"Create a new share",permalink:"/de/unraid-os/manual/shares/create-a-share"}},l={},c=[{value:"Communication protocols",id:"communication-protocols",level:2},{value:"Protocol selection",id:"protocol-selection",level:2},{value:"Access permissions at share level",id:"access-permissions-at-share-level",level:2},{value:"Share security",id:"share-security",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"network-access"},"Network access"),(0,s.kt)("h2",{id:"communication-protocols"},"Communication protocols"),(0,s.kt)("p",null,"For any type of share, you can control which protocols provide access to your Unraid server over the network. Unraid supports some of the most widely-used communication protocols for network access. These are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"SMB"),", or Server Message Block, is the standard protocol used by Windows systems. It is also widely implemented on other systems, including macOS X."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"NFS"),", or Network File System, is a widely-used protocol on Unix-compatible systems."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"FTP"),", or File Transfer Protocol, offers the flexibility of being supported through browsers and client software in different devices with different OSes.")),(0,s.kt)("admonition",{type:"important"},(0,s.kt)("p",{parentName:"admonition"},"As of Unraid 6.9, ",(0,s.kt)("strong",{parentName:"p"},"AFP")," support has been deprecated. For best interoperability with macOS, and to export a share for Time Machine purposes, in ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Settings > SMB"))," set the ",(0,s.kt)("strong",{parentName:"p"},"Enhanced macOS interoperability")," parameter to ",(0,s.kt)("em",{parentName:"p"},"Yes"),".")),(0,s.kt)("h2",{id:"protocol-selection"},"Protocol selection"),(0,s.kt)("p",null,"Your choice of protocol depends on the devices that exist on your network and the most common use case for file transfers. Modern versions of Windows and OS X support SMB and for this reason the protocol is enabled by default, while FTP and NFS are disabled. Each protocol also offers pros and cons, and is suited for different use cases."),(0,s.kt)("p",null,"For example, if you use an FTP client to access an FTP share on your Unraid server, and transfer large amounts of data, you can schedule a file upload or a download, or even resume a failed transfer."),(0,s.kt)("h2",{id:"access-permissions-at-share-level"},"Access permissions at share level"),(0,s.kt)("p",null,"Each protocol can be configured at the share level. On the ",(0,s.kt)("strong",{parentName:"p"},"Shares")," tab, select an existing share to display its settings. At the bottom of the share settings there is a security sub-section for any active network protocols. This section enables you to control the visibility of the share on the network. The setting is labelled ",(0,s.kt)("strong",{parentName:"p"},"Export")," and has the following options:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Yes")," - The share will be visible across the network."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Yes (Hidden)")," - The share can be accessed across the network but will not be listed when browsing the shares on the server. Users can still access the share as long as they know the name and the user is prepared to enter in manually."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"No")," - This will disable network access through that protocol, for that share.")),(0,s.kt)("h2",{id:"share-security"},"Share security"),(0,s.kt)("p",null,"Share security determines how a share enables user access. If you need, a share may request user credentials to allow read/write access, or may be publicly available."),(0,s.kt)("p",null,"For example, you may configure a ",(0,s.kt)("inlineCode",{parentName:"p"},"movies")," share on your Unraid server to request a valid username and password, just to read data from that share. You can also make it public, which requires no user credentials."),(0,s.kt)("p",null,"When you select an existing share on the ",(0,s.kt)("strong",{parentName:"p"},"Shares")," tab the share settings display. Here, you can find a security section that enables you to control access to the share, for each of the protocols ",(0,s.kt)("a",{parentName:"p",href:"#access-permissions-at-share-level"},"you have enabled"),"."),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Security")," setting has the following options:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Public")," - The share is unsecured and all users have both read and write access to the contents of the share."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Secure")," - The share is secured and all users, including guests, have read access. You can select which of your users have write access."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Private")," - The share is private, and you select which of your users have access. You can then pick if that user has read/write or read-only access.")),(0,s.kt)("admonition",{title:"Windows 'Gotcha'",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"There is an issue with the way Windows handles network shares: Windows only allows a single set of credentials to be in use on any one server. Any attempts to connect to a different share on the same server, that requires a different set of credentials, and that is not a public share, automatically fails."),(0,s.kt)("p",{parentName:"admonition"},"If you have any shares on the server set to ",(0,s.kt)("em",{parentName:"p"},"Private")," or ",(0,s.kt)("em",{parentName:"p"},"Secure")," access, it is important that you connect to that share first, before any shares set for ",(0,s.kt)("em",{parentName:"p"},"Public")," access."),(0,s.kt)("p",{parentName:"admonition"},"As a workaround you can access a server by both its network name and its IP address, that Windows identifies as different devices as far as authentication is concerned.")))}h.isMDXComponent=!0}}]);