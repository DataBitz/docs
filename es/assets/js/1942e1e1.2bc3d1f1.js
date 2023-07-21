"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),p=o,m=c["".concat(l,".").concat(p)]||c[p]||h[p]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={},i="Additional Settings",s={unversionedId:"unraid-os/manual/additional-settings",id:"unraid-os/manual/additional-settings",title:"Additional Settings",description:"While Unraid is configured to work automatically, you may wish to",source:"@site/docs/unraid-os/manual/additional-settings.md",sourceDirName:"unraid-os/manual",slug:"/unraid-os/manual/additional-settings",permalink:"/es/unraid-os/manual/additional-settings",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/additional-settings.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Troubleshooting",permalink:"/es/unraid-os/manual/troubleshooting"},next:{title:"Changing the Flash Device",permalink:"/es/unraid-os/manual/changing-the-flash-device"}},l={},d=[{value:"CPU Isolation",id:"cpu-isolation",level:2},{value:"Date &amp; Time",id:"date--time",level:2},{value:"Disk Settings",id:"disk-settings",level:2},{value:"Docker",id:"docker",level:2},{value:"Identification",id:"identification",level:2},{value:"Network Settings",id:"network-settings",level:2},{value:"Global Share Settings",id:"global-share-settings",level:2},{value:"UPS Settings",id:"ups-settings",level:2},{value:"VM Manager",id:"vm-manager",level:2},{value:"AFP (Apple File Protocol)",id:"afp-apple-file-protocol",level:2},{value:"NFS (Network File System)",id:"nfs-network-file-system",level:2},{value:"SMB (Server Message Block)",id:"smb-server-message-block",level:2},{value:"FTP (File Transfer Protocol)",id:"ftp-file-transfer-protocol",level:2},{value:"Syslog",id:"syslog",level:2},{value:"WireGuard",id:"wireguard",level:2},{value:"Confirmations",id:"confirmations",level:2},{value:"Display Settings",id:"display-settings",level:2},{value:"Notifications Settings",id:"notifications-settings",level:2},{value:"Scheduler",id:"scheduler",level:2},{value:"Parity Checks (Read Checks)",id:"parity-checks-read-checks",level:3},{value:"Notes",id:"notes",level:4},{value:"Mover",id:"mover",level:3},{value:"Notes",id:"notes-1",level:4},{value:"Other",id:"other",level:3}],u={toc:d},c="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"additional-settings"},"Additional Settings"),(0,o.kt)("p",null,"While Unraid is configured to work automatically, you may wish to\nfurther refine your setup by customizing your IP address, hostname, disk\ntunables, and other settings. This section goes over the various\nsettings you can configure from the Unraid webGui. All settings controls\ncan be found under the ",(0,o.kt)("em",{parentName:"p"},"Settings")," tab on the Unraid task bar unless\notherwise specified."),(0,o.kt)("p",null,"The Unraid GUI has extensive online help built-in that can help with\nchoosing appropriate values for the settings that are available. This\nhelp can ban be displayed for specific fields by clicking on the prompt\nfor that field. It can also be toggled on/off for all fields on a page\nby clicking on the ",(0,o.kt)("strong",{parentName:"p"},"Help"),"\nicon at the top right of each page."),(0,o.kt)("h2",{id:"cpu-isolation"},"CPU Isolation"),(0,o.kt)("p",null,"CPU isolation allows the user to specify CPU cores that are to be explicitly reserved for assignment (to VMs or Docker containers).\nThis is incredibly important for gaming VMs to run smoothly because even if you manually pin your Docker containers to not overlap with your gaming VM, the host OS can still utilize those same cores as the guest VM needs for things like returning responses for the webGui, running a parity check, btrfs operations, etc."),(0,o.kt)("p",null,"So, when you pin a core to a VM or Docker, that core is allocated to the VM/Docker, but the unRAID OS may still access it and use it for various tasks."),(0,o.kt)("p",null,"When you isolate a core, it is no longer accessible even by unRaid for routine tasks and should therefore be 100% dedicated to wherever it's pinned."),(0,o.kt)("p",null,"You can pin cores without requiring a system restart. You must restart your unRaid server to effect any isolation changes."),(0,o.kt)("h2",{id:"date--time"},"Date & Time"),(0,o.kt)("p",null,"From this page, you can set your time zone and toggle the use of up to 3\nNTP servers. It is recommended that you adjust Unraid to your time zone\nfor accurate timekeeping."),(0,o.kt)("h2",{id:"disk-settings"},"Disk Settings"),(0,o.kt)("p",null,"You can configure additional settings for your disk devices from this\npage. Enable your array to auto-start on boot, adjust disk spin-down\ntimers, and even adjust advanced driver settings such as SMART polling\nfrequency."),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"Docker containers allow users to add a variety of pre-configured Linux\napplications to their systems. See the ",(0,o.kt)("a",{parentName:"p",href:"/es/unraid-os/manual/docker-management"},"Docker\nManagement")," page for more\ninformation on setting up applications using Docker."),(0,o.kt)("h2",{id:"identification"},"Identification"),(0,o.kt)("p",null,"Unraid automatically uses the hostname of ",(0,o.kt)("inlineCode",{parentName:"p"},"tower"),", but you can adjust\nthat from this page. You can also give your system a description / model\nnumber (useful for system builders). In addition, this page also allows\nyou to enable or disable SSL support, change what port the webGui uses,\nand even provision an SSL certificate for your server."),(0,o.kt)("h2",{id:"network-settings"},"Network Settings"),(0,o.kt)("p",null,"By default, Unraid will attempt to get an IP address from a DHCP server\npresent on your local network (typically by your router). From this\npage, you can configure a static IP address, set up bonding / bridging,\nor other options. Setting a static IP is recommended, but not required\nto use Unraid."),(0,o.kt)("h2",{id:"global-share-settings"},"Global Share Settings"),(0,o.kt)("p",null,"As described earlier, user shares can vastly simplify how content can be\norganized and accessed across multiple disks in the array. You can\nspecify what disks are allowed to participate in user shares (global\ninclusion/exclusion) and if a cache device/pool is present, you can\nconfigure its use with user shares from here."),(0,o.kt)("h2",{id:"ups-settings"},"UPS Settings"),(0,o.kt)("p",null,"Unraid can be connected to an APC UPS (uninterruptable power supply) so\nthat in the event of a power loss, the system can be commanded to shut\ndown while being supplied power through a battery. From this page, you\ncan configure the connection to your specific UPS and define policies\nfor when the shutdown command should be issued. For a complete manual,\nvisit: ",(0,o.kt)("a",{parentName:"p",href:"http://apcupsd.org/manual/manual.html"},"http://apcupsd.org/manual/manual.html")),(0,o.kt)("h2",{id:"vm-manager"},"VM Manager"),(0,o.kt)("p",null,"Virtual machines can be used to turn your server into a desktop, a media\nplayer, or just to run applications that weren't designed for Linux.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/es/unraid-os/manual/vm-management"},"VM Management")," and ",(0,o.kt)("a",{parentName:"p",href:"/es/unraid-os/manual/vm-support"},"VM Guest\nSupport")," for more information on\ncreating and managing VMs on Unraid."),(0,o.kt)("h2",{id:"afp-apple-file-protocol"},"AFP (Apple File Protocol)"),(0,o.kt)("p",null,"From this page you can enable user shares for use with the Apple File\nProtocol, allowing them to be used as valid Time Machine backup targets\nfor your Mac OS X devices."),(0,o.kt)("h2",{id:"nfs-network-file-system"},"NFS (Network File System)"),(0,o.kt)("p",null,"NFSv4 support has been included in Unraid 6. You can enable or disable\nits use with user shares from this page, as well as adjust the\n",(0,o.kt)("inlineCode",{parentName:"p"},"fuse_remember")," tunable which can help with resolving ",(0,o.kt)("em",{parentName:"p"},"NFS Stale File\nHandles")," error messages."),(0,o.kt)("h2",{id:"smb-server-message-block"},"SMB (Server Message Block)"),(0,o.kt)("p",null,"The SMB protocol is the standard used by Microsoft Windows-based\nclients. From this page, you can enable its use, define a Windows\nworkgroup, or even join an active directory domain."),(0,o.kt)("h2",{id:"ftp-file-transfer-protocol"},"FTP (File Transfer Protocol)"),(0,o.kt)("p",null,"Users can connect via FTP if they are added to the ",(0,o.kt)("strong",{parentName:"p"},"FTP user(s)")," field\non this page. If no users are added, the FTP service will not be\nstarted."),(0,o.kt)("h2",{id:"syslog"},"Syslog"),(0,o.kt)("p",null,"Users can set up logging of the syslog to permanent storage"),(0,o.kt)("h2",{id:"wireguard"},"WireGuard"),(0,o.kt)("p",null,"WireGuard VPN Server"),(0,o.kt)("p",null,"Users can set up a VPN connection using\n",(0,o.kt)("a",{parentName:"p",href:"/es/unraid-os/manual/security#wireguard%22"},"WireGuard")," for secure connections\nto/from the internet"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.wireguard.com/"},'"WireGuard" and the "WireGuard" logo are registered trademarks of Jason A. Donenfeld.')),(0,o.kt)("h2",{id:"confirmations"},"Confirmations"),(0,o.kt)("p",null,"From here, you can disable the need for confirmations to perform various\ntasks."),(0,o.kt)("h2",{id:"display-settings"},"Display Settings"),(0,o.kt)("p",null,"Customize the appearance of the Unraid webGui from this page. This\nincludes adjusting the date and time format, number format, toggles for\ntabbed/non-tabbed view modes, temperature unit, and much more. You can\nalso toggle between various themes for how the UI itself is presented."),(0,o.kt)("h2",{id:"notifications-settings"},"Notifications Settings"),(0,o.kt)("p",null,"Browser and e-mail-based system notifications can be configured from\nthis page. You can subscribe to different types of notifications for\neach method and even add custom alerts for SMART values attribute\nmonitoring."),(0,o.kt)("h2",{id:"scheduler"},"Scheduler"),(0,o.kt)("p",null,"The scheduler settings page presents a standard view to configure the\nfrequency for two types of automated system tasks: parity checks and the\ncache mover."),(0,o.kt)("h3",{id:"parity-checks-read-checks"},"Parity Checks (Read Checks)"),(0,o.kt)("p",null,"The parity disk contents need to be correct for Unraid to be able to\nrecover a failed drive successfully without any data loss or corruption.\nThe purpose of a Parity Check is to confirm that the data on the array\ndata drives is consistent with that held on the parity disk(s). ",(0,o.kt)("strong",{parentName:"p"},"Parity\nis updated in real-time")," during normal Unraid use so one should only\nexpect there to be any mismatch between the parity calculated from\nreading the data drives and that actually present on the parity\ndrives(s) if there have been any system events such as an unclean\nshutdown or if there have been write errors reported."),(0,o.kt)("p",null,"It is recommended that Parity Checks are run at regular intervals as\npart of normal system maintenance. You do not want to do this too\nfrequently as the check can adversely affect system performance while it\nis running (typical frequencies used are ",(0,o.kt)("strong",{parentName:"p"},"monthly")," or ",(0,o.kt)("strong",{parentName:"p"},"quarterly"),").\nIt is recommended that such checks are run as ",(0,o.kt)("strong",{parentName:"p"},"non-correcting")," so that\nif a data drive is playing up for any reason you do not corrupt the\nparity. ",(0,o.kt)("strong",{parentName:"p"},"Correcting")," parity checks do have to be run if any problem\nhas been identified (and corrected) to get parity disk contents to once\nagain be consistent with the contents of the data drives and this can be\ndone manually from the ",(0,o.kt)("em",{parentName:"p"},"Main")," page in the Unraid GUI."),(0,o.kt)("h4",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The only acceptable number of errors reported by a parity check\nis 0. If you get any other result then you need to look into why\nthis has happened as it can compromise Unraid's ability to recover\nfailed drives without any data corruption/loss."),(0,o.kt)("li",{parentName:"ul"},"If you do not have a parity disk present in the system then this\noption will run a Read-Check which simply involves reading through\nall the data drives to ensure they can be read without error. This\nis still a useful maintenance function as any read errors need to be\ninvestigated as they could lead to problems later,")),(0,o.kt)("h3",{id:"mover"},"Mover"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mover")," is used to handle the automated transfer of data belonging to\nUser Shares between a cache pool and the main array. Whether\nit actually moves files and in which direction is controlled by the\nvalue of the ",(0,o.kt)("em",{parentName:"p"},"Use Cache")," setting on each share."),(0,o.kt)("p",null,"The Mover task is normally scheduled to run automatically in the middle\nof the night when the system its likely to be otherwise inactive."),(0,o.kt)("h4",{id:"notes-1"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mover can never move files off a cache pool as fast as a user can\npotentially write to it. For this reason it is typically recommended\nthat User Shares are set to not use a cache pool during the initial\nload of data into a new Unraid system as this is almost certainly to\nbe more than the cache pool can handle so the benefit is marginal at\nbest. This option should only be enabled when the volume of data on\na daily basis is likely to be less that the cache pool can handle."),(0,o.kt)("li",{parentName:"ul"},"Mover will never move files that are currently open in any\napplication. In particular this can apply to the ",(0,o.kt)("strong",{parentName:"li"},"System")," share if\nthe ",(0,o.kt)("strong",{parentName:"li"},"Docker")," or ",(0,o.kt)("strong",{parentName:"li"},"VM")," services are not disabled as they hold\nfiles in that location open all the time they are running."),(0,o.kt)("li",{parentName:"ul"},"Mover will never moves any files that are found to exist on both a\ncache pool and the main array. In normal use this should not happen\nas files are only meant to exist at one of these locations. However\nit can happen if the user has moved files manually between drives\nthus by-passing Unraid's normal handling of files for User Shares."),(0,o.kt)("li",{parentName:"ul"},"Mover can be run manually by using the Mover button on the Main page\nin the Unraid GUI.")),(0,o.kt)("h3",{id:"other"},"Other"),(0,o.kt)("p",null,"Plugins offered by 3rd parties can add additional sections to the\n",(0,o.kt)("strong",{parentName:"p"},"Scheduler")," settings page of the Unraid GUI. Typically they are\nrelated to enhancing/tuning the ",(0,o.kt)("strong",{parentName:"p"},"Parity Check")," or ",(0,o.kt)("strong",{parentName:"p"},"Mover"),"\nfunctionality although this is not mandated."))}h.isMDXComponent=!0}}]);