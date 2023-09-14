"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5450],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),h=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=h(a),p=i,m=u["".concat(l,".").concat(p)]||u[p]||c[p]||n;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var h=2;h<n;h++)o[h]=a[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3135:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>I,contentTitle:()=>M,default:()=>E,frontMatter:()=>x,metadata:()=>U,toc:()=>O});var r=a(7462),i=a(7294),n=a(4137),o=a(4334),s=a(2957),l=a(6550),h=a(5238),d=a(3609),u=a(2560);function c(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:i}}=e;return{value:t,label:a,attributes:r,default:i}}))}function p(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,h._X)(n),(0,i.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})}),[n,r])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=p(e),[o,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[l,h]=f({queryString:a,groupId:r}),[d,c]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,u.Nk)(a);return[r,(0,i.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),y=(()=>{const e=l??d;return m({value:e,tabValues:n})?e:null})();(0,i.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);s(e),h(e),c(e)}),[h,c,n]),tabValues:n}}var k=a(1048);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:h}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),r=h[a].value;r!==n&&(u(t),l(r))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},h.map((e=>{let{value:t,label:a,attributes:s}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:c},s,{className:(0,o.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function b(e){const t=y(e);return i.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},i.createElement(g,(0,r.Z)({},e,t)),i.createElement(w,(0,r.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return i.createElement(b,(0,r.Z)({key:String(t)},e))}const T={tabItem:"tabItem_Ymn6"};function S(e){let{children:t,hidden:a,className:r}=e;return i.createElement("div",{role:"tabpanel",className:(0,o.Z)(T.tabItem,r),hidden:a},t)}const x={sidebar_position:0},M="User shares",U={unversionedId:"unraid-os/manual/shares/user-shares",id:"unraid-os/manual/shares/user-shares",title:"User shares",description:"Enable or disable user shares in Settings > Global Share Settings. User shares are enabled by default.",source:"@site/docs/unraid-os/manual/shares/user-shares.md",sourceDirName:"unraid-os/manual/shares",slug:"/unraid-os/manual/shares/user-shares",permalink:"/zh/unraid-os/manual/shares/user-shares",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/shares/user-shares.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"unraidSidebar",previous:{title:"Shares",permalink:"/zh/unraid-os/manual/shares/"},next:{title:"Disk shares",permalink:"/zh/unraid-os/manual/shares/disk-shares"}},I={},O=[{value:"Overview",id:"overview",level:2},{value:"Share settings",id:"share-settings",level:2},{value:"Minimum free space",id:"minimum-free-space",level:3},{value:"Primary and Secondary storage (Unraid 6.12)",id:"primary-and-secondary-storage-unraid-612",level:3},{value:"Use Cache and mover behavior with user shares (Unraid 6.11 and earlier)",id:"use-cache-and-mover-behavior-with-user-shares-unraid-611-and-earlier",level:3},{value:"Moving Files from a Pool (cache) to the Array",id:"moving-files-from-a-pool-cache-to-the-array",level:3},{value:"Moving Files from the Array to a Pool (cache)",id:"moving-files-from-the-array-to-a-pool-cache",level:3},{value:"Allocation method",id:"allocation-method",level:3},{value:"High-water method",id:"high-water-method",level:4},{value:"Fill-up method",id:"fill-up-method",level:4},{value:"Most-free method",id:"most-free-method",level:4},{value:"Split level",id:"split-level",level:3},{value:"Automatically split any directory as required",id:"automatically-split-any-directory-as-required",level:4},{value:"Automatically split only the top level directory as required",id:"automatically-split-only-the-top-level-directory-as-required",level:4},{value:"Automatically split only the top &quot;N&quot; level directories as required",id:"automatically-split-only-the-top-n-level-directories-as-required",level:4},{value:"Manual - do not automatically split directories",id:"manual---do-not-automatically-split-directories",level:4},{value:"Included or excluded disks",id:"included-or-excluded-disks",level:3},{value:"Included disk(s)",id:"included-disks",level:4},{value:"Excluded disk(s)",id:"excluded-disks",level:4},{value:"Default Shares",id:"default-shares",level:3}],C={toc:O},A="wrapper";function E(e){let{components:t,...a}=e;return(0,n.kt)(A,(0,r.Z)({},C,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"user-shares"},"User shares"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Enable or disable user shares in ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Settings > Global Share Settings")),". User shares are enabled by default.")),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"User shares provide an aggregated view of all top level folders of the same name across the cache and the array drives. The name of this top level folder is used as the share name. From a user perspective this gives a view that can span multiple drives when viewed at the network level. Note that no individual file spans multiple drives - it is just the directory level that is given a unified view."),(0,n.kt)("p",null,"You manage ",(0,n.kt)("strong",{parentName:"p"},"User Shares")," from the ",(0,n.kt)("strong",{parentName:"p"},"Shares")," tab. There, you can see an overview off all shares on your Unraid server, you can create new shares, and edit or delete existing ones. If you manually create a top level folder on any drive, the system will automatically consider this to be a User Share and assign it default attributes."),(0,n.kt)("p",null,"When viewed at the Linux level, user shares appear under the path ",(0,n.kt)("inlineCode",{parentName:"p"},"/mnt/user"),". This includes the files on the main array and also any for the share on any pool. A user share is a logical view imposed on top of the underlying physical file system so you can see the same files if you look at the physical level, as described for ",(0,n.kt)("a",{parentName:"p",href:"/zh/unraid-os/manual/shares/disk-shares"},"Disk Shares"),"."),(0,n.kt)("p",null,"Note that current releases of Unraid also include the mount point ",(0,n.kt)("inlineCode",{parentName:"p"},"/mnt/user0")," that shows the files in ",(0,n.kt)("strong",{parentName:"p"},"User Shares")," omitting any files for a share that are on any pool. This is a different view of the files on your server. However, this mount point is now deprecated and may stop being available in a future Unraid release."),(0,n.kt)("p",null,"The physical drive in the main array, used to store a physical file, is controlled by a number of settings for the share, including the ",(0,n.kt)("a",{parentName:"p",href:"#allocation-method"},"allocation method"),", ",(0,n.kt)("a",{parentName:"p",href:"#included-or-excluded-disks"},"included or excluded disks"),", and the ",(0,n.kt)("a",{parentName:"p",href:"#split-level"},"split level"),"."),(0,n.kt)("p",null,"If you change the settings for an existing share, the changes only affect where new files are put after the new settings are applied. Any files already present in the share are left where they are. To move existing files takes manual action."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"There is a quirk of the interaction between Linux and the Unraid user share system that users can encounter if they are working at the disk share level. The Linux command for 'move' is implemented by first trying a rename on the file (which is faster) and only if that fails does it do a copy-and-delete operation."),(0,n.kt)("p",{parentName:"admonition"},"This can mean when you try to move files from one user share to another from the command line, Linux will often simply rename the files so they have a different path on the same disk, in violation of any user share settings such as included disks. The workaround for this is to instead explicitly copy from source to destination so that new files get created following the user share settings, then deleting from the source.")),(0,n.kt)("h2",{id:"share-settings"},"Share settings"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"When you configure the settings for the share, select the ",(0,n.kt)("strong",{parentName:"p"},"Help")," icon in the top-right of the Unraid webGUI for detailed information on the individual settings.")),(0,n.kt)("h3",{id:"minimum-free-space"},"Minimum free space"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Minimum free space")," setting is used with the ",(0,n.kt)("a",{parentName:"p",href:"#allocation-method"},"allocation method")," and ",(0,n.kt)("a",{parentName:"p",href:"#split-level"},"split level"),". This setting controls how much space must be free for a drive to be chosen for a new file. If the condition is met, Unraid stops putting new data onto the disk (as long as the Split Level setting indicates it can be split to a new disk)."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This parameter must be used when the fill-up allocation method is configured, or disk full errors will occur when there isn't enough space to fit a file you are trying to write.")),(0,n.kt)("p",null,"When Unraid receives a request to store a file, say for example ",(0,n.kt)("inlineCode",{parentName:"p"},"file.eg"),", it has no idea how big the file is. Unraid will pick a spot to place it and begin to store the file data as the data is transferred over the network. Now, this may result in Unraid picking a storage disk with insufficient storage space for the complete file. Unraid is unaware there isn't enough space when it first places the file so it will only find out when the disk is full. At this point, the transfer will fail with a 'disk full' error. So, Unraid will write to a different disk if the minimum free space is set to a value larger than the biggest file size you will ever transfer."),(0,n.kt)("p",null,"We recommend setting the value to twice the size of the largest file you will ever transfer. For example, if the largest file you have is 8GB in size then set the minimum free space to 16GB. This allows you to transfer files that may vary in size somewhat and not accidentally transfer one too large."),(0,n.kt)("p",null,"The minimum free space is set in kilobytes (KB), megabytes (MB), gigabytes (GB), or terabytes (TB). Enter the value and units without any spaces. For example, if you want to set the value at 50 Gigabytes, enter ",(0,n.kt)("em",{parentName:"p"},"50GB"),". Note that new user shares will have a default 10% minimum free space assignment."),(0,n.kt)("p",null,"Unraid will still place files on the disk if the ",(0,n.kt)("a",{parentName:"p",href:"#split-level"},"split level")," does not allow the files to be placed on another disk with more free space. Note that Unraid will typically not move a file onto a new disk if you're overwriting or updating it. For example, a backup file that grows in size over time could end up filling a disk and causing a disk full error."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"There is also a ",(0,n.kt)("strong",{parentName:"p"},"Minimum Free Space")," setting for cache pools. This is used to determine if a new file for a user share, with the ",(0,n.kt)("strong",{parentName:"p"},"Use Cache")," setting of ",(0,n.kt)("em",{parentName:"p"},"Yes")," or ",(0,n.kt)("em",{parentName:"p"},"Prefer"),", should be written to the\ncache or, instead, bypass the cache and go directly to the array."),(0,n.kt)("p",{parentName:"admonition"},"This needs to be set if you want to avoid filling a cache pool which can cause problems. As for this value when used with a User Share it should be larger than the largest file you intend to write, and some people like to make it significantly larger. You get to this setting by clicking on a pool on the Main tab.")),(0,n.kt)("h3",{id:"primary-and-secondary-storage-unraid-612"},"Primary and Secondary storage (Unraid 6.12)"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Primary storage")," parameter defines the location - ",(0,n.kt)("em",{parentName:"p"},"Cache"),", ",(0,n.kt)("em",{parentName:"p"},"Array"),", or any named pool - to which new files will be written for the selected share. The ",(0,n.kt)("strong",{parentName:"p"},"Secondary storage")," parameter sets the location where files will be moved to if there is not enough room in primary storage."),(0,n.kt)("p",null,"When primary storage is below the ",(0,n.kt)("a",{parentName:"p",href:"#minimum-free-space"},"Minimum Free Space")," value, new files and folders are created in secondary storage."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you select an ",(0,n.kt)("em",{parentName:"p"},"array")," or any named pool for your primary or secondary storage, you must also configure its allocation method, split level, and any included or excluded disks.")),(0,n.kt)("p",null,"Unraid 6.12 introduces new terminology to make it clearer to users where files are initially placed, and where they will end up. The same functionality is present in earlier releases, but has often been misunderstood by new users."),(0,n.kt)("p",null,"For the ",(0,n.kt)("strong",{parentName:"p"},"Primary storage")," drop-down:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This setting is mandatory. You must select a primary storage device or pool. Primary storage has a default value of ",(0,n.kt)("em",{parentName:"li"},"Cache"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"any named pool can be selected."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Array")," can be selected.")))),(0,n.kt)("p",null,"For the ",(0,n.kt)("strong",{parentName:"p"},"Secondary storage")," drop-down:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"None"),": This means that there is no secondary storage set for this share. Note that secondary storage is optional.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"if Primary storage is a pool name, then the only options are ",(0,n.kt)("em",{parentName:"li"},"None")," and ",(0,n.kt)("em",{parentName:"li"},"Array"),"."),(0,n.kt)("li",{parentName:"ul"},"if Primary storage is ",(0,n.kt)("em",{parentName:"li"},"Array"),", then only ",(0,n.kt)("em",{parentName:"li"},"None")," appears as an option.")))),(0,n.kt)("h3",{id:"use-cache-and-mover-behavior-with-user-shares-unraid-611-and-earlier"},"Use Cache and mover behavior with user shares (Unraid 6.11 and earlier)"),(0,n.kt)("p",null,"The following settings are only found in Unraid 6.11 and earlier. They achieve the same functionality as the settings available in 6.12 but are presented differently."),(0,n.kt)("admonition",{title:"INFO",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Starting with Unraid 6.9, multiple pools can exist and they can have any name you choose. Any of these pools can act as a cache in the way Unraid uses the term. The word cache therefore is referring to this functionality and not necessarily to the pool name.")),(0,n.kt)("p",null,"Unraid includes an application called ",(0,n.kt)("strong",{parentName:"p"},"Mover")," that is used in conjunction with user shares. It's behavior is controlled by the ",(0,n.kt)("strong",{parentName:"p"},"Use Cache for new files")," setting under each user share. The way these settings operate is as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Yes"),": Write new files to the cache as long as the free space on the cache is above the ",(0,n.kt)("strong",{parentName:"p"},"Minimum free space")," value. If the free space is below that then bypass the cache and write the files directly to the main array."),(0,n.kt)("p",{parentName:"li"},"When ",(0,n.kt)("strong",{parentName:"p"},"Mover")," runs it will attempt to move files to the main array as long as they are not currently open. Which array drive will get the file is controlled by the combination of the ",(0,n.kt)("strong",{parentName:"p"},"Allocation Method"),", ",(0,n.kt)("strong",{parentName:"p"},"Split Level"),", and ",(0,n.kt)("strong",{parentName:"p"},"Minimum Free Space")," setting for the share.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"No"),": Write new files directly to the array. Which array drive will get the file is controlled by the combination of the ",(0,n.kt)("strong",{parentName:"p"},"Allocation method"),", ",(0,n.kt)("strong",{parentName:"p"},"Split level"),", and ",(0,n.kt)("strong",{parentName:"p"},"Minimum Free Space")," setting for the share."),(0,n.kt)("p",{parentName:"li"},"When ",(0,n.kt)("strong",{parentName:"p"},"Mover")," runs it will take no action on files for this share even if there are files on the cache that logically belong to this share.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Only"),": Write new files directly to the cache. If the free space on the cache is below the ",(0,n.kt)("strong",{parentName:"p"},"Minimum free space")," setting for the cache then the write will fail with an out-of-space error."),(0,n.kt)("p",{parentName:"li"},"When ",(0,n.kt)("strong",{parentName:"p"},"Mover")," runs it will take no action on files for this share even if there are files on the main array that logically belong to this share.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Prefer"),": Write new files to the cache if the free space on the cache is above the ",(0,n.kt)("strong",{parentName:"p"},"Minimum free space")," setting for the share, and if the free space falls below that value then write the files to the main array instead."),(0,n.kt)("p",{parentName:"li"},"When ",(0,n.kt)("strong",{parentName:"p"},"Mover")," runs it will attempt to move any files for this share that are on the main array back to the cache as long as the free space on the cache is above the ",(0,n.kt)("em",{parentName:"p"},"Minimum free space")," setting for the cache"),(0,n.kt)("p",{parentName:"li"},"It is the default setting for the ",(0,n.kt)("inlineCode",{parentName:"p"},"appdata")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"system")," shares that support the Docker and VM subsystems. Generally, you want the files/folders belonging to these shares to reside on the cache as it provides better performance for Docker containers and VMs if their files are not on the main array. This is due to the performance overhead of maintaining parity on the main array which slows down write operations."),(0,n.kt)("p",{parentName:"li"},"This setting works for a share even if you do not (yet) have a physical cache drive(s) as files will be written directly to the array. If at a later date you add a cache drive, ",(0,n.kt)("strong",{parentName:"p"},"Mover")," will automatically try and move the files in any share set to ",(0,n.kt)("em",{parentName:"p"},"Prefer")," to the pool defined as the cache for the share. This is why ",(0,n.kt)("em",{parentName:"p"},"Prefer")," is the default for shares that are located on the cache rather than ",(0,n.kt)("em",{parentName:"p"},"Only")," as it caters to those who do not (yet) have a cache drive."))),(0,n.kt)("h3",{id:"moving-files-from-a-pool-cache-to-the-array"},"Moving Files from a Pool (cache) to the Array"),(0,n.kt)("p",null,"This is the more traditional usage of a pool for caching where you want the files for a particular share initially written to a pool that acts as a cache to maximize write speed, but later you want it to be moved to the main array for long term storage."),(0,n.kt)("p",null,"Sometimes, however, you may find that the files seem to be 'stuck' in a pool. In this situation, the way to get the files belonging to a share from a pool onto the main array is:"),(0,n.kt)(N,{mdxType:"Tabs"},(0,n.kt)(S,{value:"6.12",label:"Unraid 6.12",default:!0,mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Make sure that ",(0,n.kt)("b",null,"Primary Storage")," is set to ",(0,n.kt)("i",null,"Cache")," and ",(0,n.kt)("b",null,"Secondary Storage")," is set to ",(0,n.kt)("i",null,"Array"),", for any shares you want to move files from."),(0,n.kt)("li",null,"Set the ",(0,n.kt)("b",null,"Mover action")," field to ",(0,n.kt)("i",null,"Cache -> Array"),"."),(0,n.kt)("li",null,"Disable Docker and VM services, if they are enabled, as files open in these services cannot be moved."),(0,n.kt)("li",null,"Go to ",(0,n.kt)("b",null,(0,n.kt)("i",null,"Main > Array Operation")),", and select ",(0,n.kt)("b",null,"Move")," to manually move files from the pool (cache) to the array."),(0,n.kt)("li",null,"When mover finishes, you can re-enable the Docker and/or VMs services you use if you disabled them earlier."))),(0,n.kt)(S,{value:"6.11",label:"Unraid 6.11 or below",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Disable any Docker and VM services, if they are enabled (as files open in these services cannot be moved)."),(0,n.kt)("li",null,"Change the Use Cache setting for the share to ",(0,n.kt)("i",null,"Yes"),"."),(0,n.kt)("li",null,"Go to ",(0,n.kt)("b",null,(0,n.kt)("i",null,"Main > Array Operation")),", and select ",(0,n.kt)("b",null,"Move")," to manually move files from the pool (cache) to the array."),(0,n.kt)("li",null,"When mover finishes, you can re-enable the Docker and/or VMs services you use if you disabled them earlier."),(0,n.kt)("li",null,"Change the ",(0,n.kt)("b",null,"Use Cache")," setting to ",(0,n.kt)("i",null,"Only")," to say files for this share can never be written to the array.")))),(0,n.kt)("h3",{id:"moving-files-from-the-array-to-a-pool-cache"},"Moving Files from the Array to a Pool (cache)"),(0,n.kt)("p",null,"You typically want files associated with running Docker containers or VMs on a pool to maximize performance. It is not unusual, for one reason or another, to find that you have files on the main array which you really want to have in a pool. In particular, this is likely to happen for the ",(0,n.kt)("inlineCode",{parentName:"p"},"appdata")," or default system shares."),(0,n.kt)("p",null,"The way to proceed to get the files belonging to a share from the main array onto a pool is:"),(0,n.kt)(N,{mdxType:"Tabs"},(0,n.kt)(S,{value:"6.12",label:"Unraid 6.12",default:!0,mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Make sure that ",(0,n.kt)("b",null,"Primary Storage")," is set to ",(0,n.kt)("i",null,"Cache")," and ",(0,n.kt)("b",null,"Secondary Storage")," is set to ",(0,n.kt)("i",null,"Array"),", for any shares you want to move files from."),(0,n.kt)("li",null,"Set the ",(0,n.kt)("b",null,"Mover action")," field to ",(0,n.kt)("i",null,"Array -> Cache"),"."),(0,n.kt)("li",null,"Disable any Docker and VM services, if they are enabled, as files open in these services cannot be moved."),(0,n.kt)("li",null,"Go to ",(0,n.kt)("b",null,(0,n.kt)("i",null,"Main > Array Operation")),", and select ",(0,n.kt)("b",null,"Move")," to manually move files from the array to the pool (cache)."),(0,n.kt)("li",null,"When mover finishes, you can re-enable the Docker and/or VMs services you use if you disabled them earlier."))),(0,n.kt)(S,{value:"6.11",label:"Unraid 6.11 or below",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Disable any Docker and VM services if they are enabled (as files open in these services cannot be moved)."),(0,n.kt)("li",null,"Change the ",(0,n.kt)("b",null,"Use Cache")," setting for the share to ",(0,n.kt)("i",null,"Prefer"),"."),(0,n.kt)("li",null,"Go to ",(0,n.kt)("b",null,(0,n.kt)("i",null,"Main > Array Operation")),", and select ",(0,n.kt)("b",null,"Move")," to manually move files from the array to the pool (cache)."),(0,n.kt)("li",null,"When mover finishes, you can re-enable the Docker and/or VMs services you use if you disabled them earlier."),(0,n.kt)("li",null,"Change the ",(0,n.kt)("b",null,"Use Cache")," setting to ",(0,n.kt)("i",null,"No")," to say files for this share can never be written to the array.")))),(0,n.kt)("h3",{id:"allocation-method"},"Allocation method"),(0,n.kt)("p",null,"When you create a new user share, or when any object (file or directory) is created within a user share, the system must determine which data disk the user share or object will be stored on. In general, a new user\nshare, or object within a user share, is created on the data disk with the most free space. However, there are a set of configuration parameters available to fine-tune disk allocation."),(0,n.kt)("p",null,"The basic allocation strategy for a share is defined by its allocation method configuration parameter. You may select one of three allocation methods for the system to use: ",(0,n.kt)("strong",{parentName:"p"},"High-water"),", ",(0,n.kt)("strong",{parentName:"p"},"Most-free"),", or ",(0,n.kt)("strong",{parentName:"p"},"Fill-up"),"."),(0,n.kt)("h4",{id:"high-water-method"},"High-water method"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"High-water")," setting works with switch points based on continually halving the size of the largest drive in the array. It does multiple passes to fill each disk so at the end of each step there is equal free space left on each disk. This progressively fills each disk but without constantly going back and forth between disks each time new data is written. Most times, only a single disk will be needed when writing a series of files to the array so the array will only spin-up the needed disk. The high-water level is initially set equal to one-half of the size of the largest disk. A new high water level is again set to one-half of the previous high level once all the disks have less free space than the current high water level."),(0,n.kt)("admonition",{title:"Example",type:"important"},(0,n.kt)("p",{parentName:"admonition"},"If you have an array that consists of drives of 8 TB, 3 TB and 2 TB, the largest drive is the one that sets the switch points at 4 TB, 2 TB, 1 TB, and so on, halving the amount in each pass."),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"While the 4 TB switch point is active the 8 TB drive one is filled to 4 TB free space left."),(0,n.kt)("li",{parentName:"ul"},"When the 2 TB switch point becomes active, the 8 TB and 3 TB drives each get used in disk order until they have 2 TB free space"),(0,n.kt)("li",{parentName:"ul"},"Finally, the 1 TB switch point becomes active, so each drive now gets used in disk order until there is only 1 TB free space.")),(0,n.kt)("p",{parentName:"admonition"},"This pattern continues with progressively smaller high-water levels until the disks are full.")),(0,n.kt)("h4",{id:"fill-up-method"},"Fill-up method"),(0,n.kt)("p",null,"The fill-up allocation method attempts to fill each disk in order from the lowest numbered disk to the highest numbered disk. The fill-up allocation method must be used in conjunction with the minimum free\nspace setting. Otherwise, Unraid will begin to give disk full errors and not allow any more transfers once the first disk gets close to being full."),(0,n.kt)("h4",{id:"most-free-method"},"Most-free method"),(0,n.kt)("p",null,"The most free allocation method picks the disk with the most free space and writes the data to that disk. Each time a file is written Unraid will check the free space on the included disks and pick the one with the\nmost free space."),(0,n.kt)("h3",{id:"split-level"},"Split level"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Split level")," setting tells Unraid how many folder levels are allowed to be created on multiple disks. The split level can be used to ensure that the contents of a folder are kept on the same disk. The split level\nnumbering starts with the user share being the top level and given the number 1."),(0,n.kt)("h4",{id:"automatically-split-any-directory-as-required"},"Automatically split any directory as required"),(0,n.kt)("p",null,"When a new file or subdirectory is created in a share, Unraid OS first chooses which disk it is created on, according to the configured ",(0,n.kt)("a",{parentName:"p",href:"#allocation-method"},"Allocation method"),". If the parent directory containing the new file or subdirectory does not exist on this disk, then Unraid OS will first create all necessary parent directories, and then create the new file or subdirectory."),(0,n.kt)("h4",{id:"automatically-split-only-the-top-level-directory-as-required"},"Automatically split only the top level directory as required"),(0,n.kt)("p",null,"When a new file or subdirectory is being created in the first level subdirectory of a share, if that first level subdirectory does not exist on the disk being written, then the subdirectory will be created first. If a new file or subdirectory is being created in the second or lower level subdirectory of a share, the new file or subdirectory is created on the same disk as the new file or subdirectory's parent directory."),(0,n.kt)("h4",{id:"automatically-split-only-the-top-n-level-directories-as-required"},'Automatically split only the top "N" level directories as required'),(0,n.kt)("p",null,'Similar to the previous option. When a new file or subdirectory is being created, if the parent directory is at level "N", and does not exist on the chosen disk, Unraid OS will first create all necessary parent directories. If the parent directory of the new file or subdirectory is beyond level "N", then the new file or subdirectory is created on the same disk where the parent directory exists.'),(0,n.kt)("h4",{id:"manual---do-not-automatically-split-directories"},"Manual - do not automatically split directories"),(0,n.kt)("p",null,"When a new file or subdirectory needs to be created in a share, Unraid OS will only consider disks where the parent directory already exists."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"In the event of there being conflicts between the ",(0,n.kt)("strong",{parentName:"p"},"Minimum free space"),", ",(0,n.kt)("strong",{parentName:"p"},"Split Level")," and the ",(0,n.kt)("strong",{parentName:"p"},"Allocation method")," settings in deciding which would be an appropriate drive to use, the ",(0,n.kt)("strong",{parentName:"p"},"Split level")," setting always wins. This means that you can get an out-of-space error even though there is plenty of space on other array drives that the share can logically use.")),(0,n.kt)("h3",{id:"included-or-excluded-disks"},"Included or excluded disks"),(0,n.kt)("p",null,"These settings allow you to control which array drives can hold files for the share. Never set both values, set only the one that is most convenient for you. If no drives are specified under these settings then all drives allowed under ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Settings > Global Share settings"))," are allowed."),(0,n.kt)("p",null,"Unraid will first check the included disks(s) set and then the excluded disk(s) set when deciding which disk to place a file on. Then, it will use the split level and allocation method to pick a disk which is allowed to hold the file."),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},"The include/exclude settings at the individual share level only control which disks new files can be written to. Files on other disks that are in a folder corresponding to the share name will still show up under that share for read purposes.")),(0,n.kt)("h4",{id:"included-disks"},"Included disk(s)"),(0,n.kt)("p",null,'The included disks(s) parameter defines the set of disks which are candidates for allocation to that share. All disks may be used by the user share when the Included disk(s) parameter is left blank. Specify the disks to include here. For example, set the included disk(s) to "disk1,disk2,disk3" to allow the share to only use disk1, disk2 and disk3.'),(0,n.kt)("h4",{id:"excluded-disks"},"Excluded disk(s)"),(0,n.kt)("p",null,'The excluded disk(s) parameter defines the set of disks which are excluded from use by the user share. No disks are excluded from use by the user share when the excluded disk(s) parameter is left blank. Specify the disks to exclude here. For example, set the excluded disk(s) to "disk1,disk2" to restrict a share from using disk1 and disk2.'),(0,n.kt)("h3",{id:"default-shares"},"Default Shares"),(0,n.kt)("p",null,"If ",(0,n.kt)("a",{parentName:"p",href:"/zh/unraid-os/manual/docker-management"},"Docker")," or ",(0,n.kt)("a",{parentName:"p",href:"/zh/unraid-os/manual/vm-support"},"VMs")," are enabled then, Unraid automatically sets up a number of default shares to support their use. You are not required to use these shares, and the system will let you remove them if you do not want to use them for their standard purpose. However, we recommend their use, as it makes it easier to support users who encounter problems."),(0,n.kt)("p",null,"The shares that fall into this category are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"appdata")," - This is the default location for storing working files associated with docker containers. Typically there will be a sub-folder for each docker container."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"system")," - This is the default location for storing the docker application binaries, and VM XML templates"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"domains")," - This is the default location for storing virtual disk images (vdisks) that are used by VMs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"isos")," - This is the default location for storing CD ISO images for use with VMs.")),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},"We do not recommend changing the permissions on most default shares, as these may impact the functioning of docker containers and VMs. The exception is the ",(0,n.kt)("inlineCode",{parentName:"p"},"isos")," share that can be shared over the network so you can place new ISOs to use in virtual machines.")))}E.isMDXComponent=!0}}]);