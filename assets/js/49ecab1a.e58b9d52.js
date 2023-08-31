"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3011],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(4137));const i={},o="Version 6.12.4 2023-08-31",s={unversionedId:"unraid-os/release-notes/6.12.4",id:"unraid-os/release-notes/6.12.4",title:"Version 6.12.4 2023-08-31",description:"Upgrade notes",source:"@site/docs/unraid-os/release-notes/6.12.4.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.12.4",permalink:"/unraid-os/release-notes/6.12.4",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.12.4.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Version 6.12.3 2023-07-14",permalink:"/unraid-os/release-notes/6.12.3"},next:{title:"6.11.0",permalink:"/unraid-os/release-notes/6.11.0"}},l={},u=[{value:"Upgrade notes",id:"upgrade-notes",level:2},{value:"Known issues",id:"known-issues",level:3},{value:"Rolling back",id:"rolling-back",level:3},{value:"Fix for macvlan call traces",id:"fix-for-macvlan-call-traces",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"To get a little more technical...",id:"to-get-a-little-more-technical",level:3},{value:"System Drivers page",id:"system-drivers-page",level:2},{value:"Other bug fixes and improvements",id:"other-bug-fixes-and-improvements",level:2},{value:"Changes vs. 6.12.3",id:"changes-vs-6123",level:2},{value:"Base distro",id:"base-distro",level:3},{value:"Package updates",id:"package-updates",level:4},{value:"Linux kernel",id:"linux-kernel",level:3},{value:"webGUI",id:"webgui",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"version-6124-2023-08-31"},"Version 6.12.4 2023-08-31"),(0,r.kt)("h2",{id:"upgrade-notes"},"Upgrade notes"),(0,r.kt)("h3",{id:"known-issues"},"Known issues"),(0,r.kt)("p",null,"Please see the ",(0,r.kt)("a",{parentName:"p",href:"/unraid-os/release-notes/6.12.0#known-issues"},"6.12.0 release notes")," for general known issues."),(0,r.kt)("h3",{id:"rolling-back"},"Rolling back"),(0,r.kt)("p",null,"Before rolling back to an earlier version, it is important to ensure Bridging is enabled:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Settings > Network Settings > eth0 > Enable Bridging"))," = Yes")),(0,r.kt)("p",null,"Then Start the array (along with the Docker and VM services) to update your Docker containers, VMs, and\nWireGuard tunnels back to their previous settings which should work in older releases."),(0,r.kt)("p",null,"Once in the older version, confirm these settings are correct for your setup:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Settings > Docker > Host access to custom networks"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Settings > Docker > Docker custom network type")))),(0,r.kt)("p",null,"If rolling back earlier than 6.12.0, also see the ",(0,r.kt)("a",{parentName:"p",href:"/unraid-os/release-notes/6.12.0#rolling-back"},"6.12.0 release notes"),"."),(0,r.kt)("h2",{id:"fix-for-macvlan-call-traces"},"Fix for macvlan call traces"),(0,r.kt)("p",null,"The big news in this release is that we have resolved issues related to macvlan call traces and crashes!"),(0,r.kt)("p",null,"The root of the problem is that macvlan used for custom Docker networks is unreliable when the parent interface is a\nbridge (like br0), it works best on a physical interface (like eth0). We believe this to be a longstanding kernel\nissue and have posted a ",(0,r.kt)("a",{parentName:"p",href:"https://bugzilla.kernel.org/show_bug.cgi?id=217777"},"bug report"),"."),(0,r.kt)("p",null,"If you are getting call traces related to macvlan, as a first step we recommend navigating to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Settings > Docker")),',\nswitch to advanced view, and change the "Docker custom network type" from macvlan to ipvlan. This is the default\nconfiguration that Unraid has shipped with since version 6.11.5 and should work for most systems.'),(0,r.kt)("p",null,"However, some users have reported issues with port forwarding from certain routers (Fritzbox) and reduced functionality\nwith advanced network management tools (Ubiquity) when in ipvlan mode."),(0,r.kt)("p",null,"For those users, we have a new method that reworks networking to avoid this. Tweak a few settings and your\nDocker containers, VMs, and WireGuard tunnels should automatically adjust to use them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Settings > Network Settings > eth0 > Enable Bridging"))," = No"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Settings > Docker > Host access to custom networks"))," = Enabled")),(0,r.kt)("p",null,"Note: if you previously used the ",(0,r.kt)("a",{parentName:"p",href:"https://forums.unraid.net/topic/137048-guide-how-to-solve-macvlan-and-ipvlan-issues-with-containers-on-a-custom-network/"},"2-nic docker segmentation method"),",\nyou will also want to revert that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Settings > Docker > custom network on interface eth0"))," (i.e. make sure eth0 is configured for the custom network, not eth1)")),(0,r.kt)("p",null,"When you Start the array, the host, VMs, and Docker containers will all be able to communicate, and there should be no more call traces!"),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'If your Docker containers with custom IPs are not starting, edit them and change the "Network type" to "Custom: eth0". We attempted\nto do this automatically, but depending on how things were customized you may need to do it manually.'),(0,r.kt)("li",{parentName:"ul"},'If your VMs are having network issues, edit them and set the Network Source to "vhost0". Also, ensure there is a MAC address assigned.'),(0,r.kt)("li",{parentName:"ul"},"If your WireGuard tunnels will not start, make a dummy change to each tunnel and save."),(0,r.kt)("li",{parentName:"ul"},"If you are having issues port forwarding to Docker containers (particularly with a Fritzbox router) delete and recreate the port\nforward in your router.")),(0,r.kt)("h3",{id:"to-get-a-little-more-technical"},"To get a little more technical..."),(0,r.kt)("p",null,"After upgrading to this release, if bridging remains enabled on eth0 then everything works as it used to. You can attempt to work\naround the call traces by disabling the custom Docker network, or using ipvlan instead of macvlan, or using the 2-nic Docker\nsegmentation method with containers on eth1."),(0,r.kt)("p",null,"Starting with this release, when you disable bridging on eth0 we create a new macvtap network for Docker containers and VMs to use.\nIt has a parent of eth0 instead of br0, which is how we avoid the call traces."),(0,r.kt)("p",null,"A side benefit is that macvtap networks are reported to be faster than bridged networks, so you may see speed improvements when\ncommunicating with Docker containers and VMs."),(0,r.kt)("p",null,"FYI: With bridging disabled for the main interface (eth0), then the Docker custom network type will be set to macvlan and hidden\nunless there are other interfaces on your system that have bridging enabled, in which case the legacy ipvlan option is available.\nTo use the new fix being discussed here you will want to keep that set to macvlan."),(0,r.kt)("h2",{id:"system-drivers-page"},"System Drivers page"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Tools > System Drivers"))," for visibility into the drivers available/in use on your system. 3rd party drivers installed\nby plugins (such as NVIDIA and Realtek) have an icon that links to the support page for that driver. You can also\nnow add/modify/delete the modeprobe.d config file for any driver without having to find that file on your flash drive."),(0,r.kt)("h2",{id:"other-bug-fixes-and-improvements"},"Other bug fixes and improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This release resolves corner cases in networking, Libvirt, Docker, WireGuard, NTP, NGINX, NFS and RPC. And includes an improvement\nto the VM Manager so it retains the VNC password during an update.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The shutdown process was modified to allow the NUT plugin to properly shut the system down.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The notification display time before auto-closing is now configugurable (see ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Settings > Notification Settings")),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A small change is that packages in /boot/extra are now treated more like packages installed by plugins, and the installation is\nlogged to syslog rather than to the console.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Update OS process will automatically update the Plugin-Update-Helper script if necessary."))),(0,r.kt)("h2",{id:"changes-vs-6123"},"Changes vs. ",(0,r.kt)("a",{parentName:"h2",href:"/unraid-os/release-notes/6.12.3"},"6.12.3")),(0,r.kt)("h3",{id:"base-distro"},"Base distro"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create_network_ini:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"fixed dhcp hook"),(0,r.kt)("li",{parentName:"ul"},"improved IP address collection"))),(0,r.kt)("li",{parentName:"ul"},"diagnostics:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add previous Unraid version to diagnostics version txt file."),(0,r.kt)("li",{parentName:"ul"},"Add ntp.conf, sshd.config, and servers.conf (with anonymized URLs)"),(0,r.kt)("li",{parentName:"ul"},"anonymize IP addresses"))),(0,r.kt)("li",{parentName:"ul"},"docker:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"add routing when shim or macvtap network is used"),(0,r.kt)("li",{parentName:"ul"},'fix routing when "host access" is enabled'),(0,r.kt)("li",{parentName:"ul"},"remove IPv6 from shim/vhost interface (some routers are incompatible)"))),(0,r.kt)("li",{parentName:"ul"},"libvirt, nginx, nfs, rpc: changed running process detection"),(0,r.kt)("li",{parentName:"ul"},"nfsclient: start negotiation with v4, turn off atime modification"),(0,r.kt)("li",{parentName:"ul"},"rc.6: leave /usr and /lib mounted during shutdown"),(0,r.kt)("li",{parentName:"ul"},"rc.docker:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"create same IPv6 network for containers and services"),(0,r.kt)("li",{parentName:"ul"},"add more logging when stopping dockerd"))),(0,r.kt)("li",{parentName:"ul"},"rc.inet1:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"do not use promiscuous mode for bridging"),(0,r.kt)("li",{parentName:"ul"},"add persistent option to dhcpcd"))),(0,r.kt)("li",{parentName:"ul"},"rc.library: interfaces always listed in the same order, fix show ipv6"),(0,r.kt)("li",{parentName:"ul"},"rc.libvirt: remove 'itco' watchdog from XML if present"),(0,r.kt)("li",{parentName:"ul"},"rc.local: annotate auto-generated /etc/modprobe.d/zfs.conf file"),(0,r.kt)("li",{parentName:"ul"},"rc.services:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"add logging"),(0,r.kt)("li",{parentName:"ul"},'exclude WireGuard "VPN tunneled access for docker" tunnels from services'),(0,r.kt)("li",{parentName:"ul"},"exclude WireGuard tunnels for ntp (code optimization)")))),(0,r.kt)("h4",{id:"package-updates"},"Package updates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"btrfs-progs: 6.3.3"),(0,r.kt)("li",{parentName:"ul"},"curl: version 8.2.0 (CVE-2023-32001)"),(0,r.kt)("li",{parentName:"ul"},"firefox: version 117.0.r20230824132758 (AppImage)"),(0,r.kt)("li",{parentName:"ul"},"kernel-firmware: version 20230724_59fbffa"),(0,r.kt)("li",{parentName:"ul"},"krb5: version 1.19.2 (CVE-2023-36054)"),(0,r.kt)("li",{parentName:"ul"},"openssh: version 9.3p2 (CVE-2023-38408)"),(0,r.kt)("li",{parentName:"ul"},"openssl: version 1.1.1v (CVE-2023-3817 CVE-2023-3446)"),(0,r.kt)("li",{parentName:"ul"},"samba: version 4.17.10 (CVE-2023-3496 CVE-2022-2127 CVE-2023-34968 CVE-2023-3496 CVE-2023-3347)")),(0,r.kt)("h3",{id:"linux-kernel"},"Linux kernel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"version 6.1.49 (CVE-2023-20593)"),(0,r.kt)("li",{parentName:"ul"},"CONFIG_SCSI_MPI3MR: Broadcom MPI3 Storage Controller Device Driver")),(0,r.kt)("h3",{id:"webgui"},"webGUI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dashboard: hide ZFS bar when no ZFS is used"),(0,r.kt)("li",{parentName:"ul"},"Docker settings: fix subnet sizes"),(0,r.kt)("li",{parentName:"ul"},"Feedback: refactor feedback script"),(0,r.kt)("li",{parentName:"ul"},"Network settings: fix DNS settings sometimes disappear"),(0,r.kt)("li",{parentName:"ul"},"Notifications: new notification option: auto-closure time, default is 5 seconds"),(0,r.kt)("li",{parentName:"ul"},"Pools: minimum free space: only enabled when array is stopped"),(0,r.kt)("li",{parentName:"ul"},'Shares and Pools: show "Minimum free space" as absolute number instead of percentage'),(0,r.kt)("li",{parentName:"ul"},"System Drivers: new page"),(0,r.kt)("li",{parentName:"ul"},"Translations: trim key and value in language files"),(0,r.kt)("li",{parentName:"ul"},"VM Manager: Retain VNC password during update."),(0,r.kt)("li",{parentName:"ul"},"VM Manager: Remove downloaded '.vv' files."),(0,r.kt)("li",{parentName:"ul"},"CSS: set overflow-x to 'auto'"),(0,r.kt)("li",{parentName:"ul"},"update monitor_nchan")))}c.isMDXComponent=!0}}]);