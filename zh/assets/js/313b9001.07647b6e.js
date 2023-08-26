"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[559],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,y=d["".concat(u,".").concat(h)]||d[h]||p[h]||s;return r?o.createElement(y,n(n({ref:t},c),{},{components:r})):o.createElement(y,n({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,n=new Array(s);n[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,n[1]=i;for(var l=2;l<s;l++)n[l]=r[l];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=r(7462),a=(r(7294),r(4137));const s={sidebar_position:1},n="Good Practices",i={unversionedId:"unraid-os/manual/security/good-practices",id:"unraid-os/manual/security/good-practices",title:"Good Practices",description:"We have compiled a set of recommendations to help you secure your server. While not all may apply to your specific scenario, they provide a solid foundation to preserve the security and privacy of your system.",source:"@site/docs/unraid-os/manual/security/good-practices.md",sourceDirName:"unraid-os/manual/security",slug:"/unraid-os/manual/security/good-practices",permalink:"/zh/unraid-os/manual/security/good-practices",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/security/good-practices.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"unraidSidebar",previous:{title:"Security",permalink:"/zh/unraid-os/manual/security/"},next:{title:"Securing webGUI connections (SSL)",permalink:"/zh/unraid-os/manual/security/secure-webgui-ssl"}},u={},l=[{value:"#1 Set a strong root password",id:"1-set-a-strong-root-password",level:2},{value:"#2 Review port mappings on your router",id:"2-review-port-mappings-on-your-router",level:2},{value:"#3 Never put your server in your network&#39;s DMZ",id:"3-never-put-your-server-in-your-networks-dmz",level:2},{value:"#4 Set security on your shares to private",id:"4-set-security-on-your-shares-to-private",level:2},{value:"#5 Don&#39;t expose the flash share, and if you do, make it private",id:"5-dont-expose-the-flash-share-and-if-you-do-make-it-private",level:2},{value:"#6 Keep your server up-to-date",id:"6-keep-your-server-up-to-date",level:2},{value:"#7 Use a secure method for remote administration",id:"7-use-a-secure-method-for-remote-administration",level:2}],c={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"good-practices"},"Good Practices"),(0,a.kt)("p",null,"We have compiled a set of recommendations to help you secure your server. While not all may apply to your specific scenario, they provide a solid foundation to preserve the security and privacy of your system."),(0,a.kt)("h2",{id:"1-set-a-strong-root-password"},"#","1 Set a strong root password"),(0,a.kt)("p",null,"Similar to many routers, Unraid systems do not have a password set by default. This ensures you can quickly and easily access the management console immediately after initial installation. However, this doesn't mean you shouldn't set one. Doing this is simple. Just navigate to the ",(0,a.kt)("strong",{parentName:"p"},"Users")," tab and select the root user. Now set a password. From then on, you will be required to authenticate anytime you attempt to login to the webGUI."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"There is a plugin available in Community Apps called ",(0,a.kt)("strong",{parentName:"p"},"Dynamix Password Validator"),". This plugin will provide guidance on how strong of a password you're creating, based on complexity rules (how many capital vs. lowercase letters, numbers, symbols, and overall password length are all used to judge this). Consider installing this for extra guidance on password strength. Once installed it is available in the settings for any user to give guidance on the strength of any password you type in."),(0,a.kt)("p",{parentName:"admonition"},"You could also use ",(0,a.kt)("a",{parentName:"p",href:"https://bitwarden.com/password-strength/"},"this webpage")," to get a very quick assessment of the strength of any specific password.")),(0,a.kt)("h2",{id:"2-review-port-mappings-on-your-router"},"#","2 Review port mappings on your router"),(0,a.kt)("p",null,"Forwarding ports to your server is required for specific services that you want to be Internet-accessible such as Plex, FTP servers, game servers, VoIP servers, etc. But forwarding the wrong ports can expose your server to significant security risk."),(0,a.kt)("p",null,"Here are just a few ports you should be extra careful with when forwarding:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Port 80"),": Used to access the webGUI without SSL - unless you've rebound access to another port on the ",(0,a.kt)("strong",{parentName:"li"},"Management Access"),' settings page. Forwarding this port by default will allow you to access the webGUI remotely, but without SSL securing the connection, devices in between your browser and the server could "sniff" the packets to see what you\'re doing. If you want to make the webGUI remotely accessible, install the ',(0,a.kt)("a",{parentName:"li",href:"/zh/connect/about"},"Unraid Connect")," plugin, which can provide a secure remote access solution that utilizes SSL to ensure your connection is fully encrypted."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Port 443"),": Used to access the webGUI with SSL. This is only better than port 80 if you have a root password set. If no root password is set and you forward this port, unauthorized users can connect to your webGUI and have full access to your server and any data on it. In addition, if you forward this port without using the ",(0,a.kt)("a",{parentName:"li",href:"/zh/connect/about"},"Unraid Connect")," plugin, attempts to connect to the webGUI through a browser will present a security warning due to the lack of an SSL certificate.\nConsider making life easier for yourself and utilize the ",(0,a.kt)("a",{parentName:"li",href:"/zh/connect/about"},"Unraid Connect")," plugin to enable simple, safe, and secure remote access to your Unraid systems."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Port 445"),": Used for SMB (shares). If you forward this port to your server, any public shares can be connected to by any user over the internet. Generally speaking, it is never advisable to expose SMB shares directly over the internet. If you need the ability to access your shares remotely, we suggest utilizing a ",(0,a.kt)("a",{parentName:"li",href:"/zh/unraid-os/manual/security/vpn"},"WireGuard VPN")," to create a secure tunnel between your device and the server. In addition, if the flash device itself is exported using SMB and this port is forwarded, its contents can easily be deleted and your paid key could easily be stolen. Just don't do this."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Port 111/2049:")," Used for NFS (shares). Although NFS is disabled by default, if you need to use this protocol, make sure you aren't forwarding these ports through your router. Similar to SMB, just utilize WireGuard to create a secure tunnel from any remote devices that need to connect to the server over NFS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Port 22/23:")," Used by Telnet and SSH for console access.\nEspecially dangerous for users that don't have a root password set.\nSimilar to SMB, we don't recommend forwarding these ports at all, but rather, suggest users leverage a WireGuard VPN connection for the purposes of connecting using either of these protocols."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ports in the 57xx range:")," These ports are generally used by VMs for VNC access. While you can forward these ports to enable VNC access remotely for your VMs, the better and easier way to do this is through installing the ",(0,a.kt)("a",{parentName:"li",href:"/zh/connect/about"},"Unraid Connect")," plugin.\nThis ensures that those connections are secure via SSL and do not require individual ports to be forwarded for each VM.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Generally speaking, you really shouldn't need to forward many ports to your server. If you see a forwarding rule you don't understand, consider removing it, see if anyone complains, and if so, you can always put it back.")),(0,a.kt)("h2",{id:"3-never-put-your-server-in-your-networks-dmz"},"#","3 Never put your server in your network's DMZ"),(0,a.kt)("p",null,'We cannot stress this enough. No matter how locked down you think you have your server, it is never advisable to place it in the DMZ on your network. By doing so, you are essentially forwarding every port on your public IP address to your server directly, allowing all locally accessible services to be remotely accessible as well. Regardless of how "locked down" you think you actually have the server, placing it in the DMZ exposes it to unnecessary risks.'),(0,a.kt)("p",null,"Never, ",(0,a.kt)("em",{parentName:"p"},"ever"),", do this."),(0,a.kt)("h2",{id:"4-set-security-on-your-shares-to-private"},"#","4 Set security on your shares to private"),(0,a.kt)("p",null,"The convenience of password-less share access is pretty great. We know that and it's why we don't require you to set passwords for your shares. However, there is a security risk posed to your data when you do this, even if you don't forward any ports to your server and have a strong root password. If another device on your network such as a PC, Mac, phone, tablet, IoT device, etc... were to have its security breached, it could be used to make a local connection to your server's shares. By default, shares are set to be publicly readable/writeable, which means those rogue devices can be used to steal, delete, or encrypt the data within them. In addition, malicious users could also use this method to put data on your server that you don't want. It is for these reasons that if you are going to create public shares, we highly recommend setting access to read-only. Only authorized users with a strong password should be able to write data to your shares."),(0,a.kt)("h2",{id:"5-dont-expose-the-flash-share-and-if-you-do-make-it-private"},"#","5 Don't expose the flash share, and if you do, make it private"),(0,a.kt)("p",null,"The flash device itself can be exposed over SMB. This is convenient if you need to make advanced changes to your system such as modifying the go file in the config directory. However, the flash device itself contains the files needed to boot Unraid as well as your configuration data (disk assignments, shares, etc). Exposing this share publicly can be extremely dangerous, so we advise against doing so unless you absolutely have to, and when you do, it is advised to do so privately, requiring a username and password to see and modify the contents."),(0,a.kt)("h2",{id:"6-keep-your-server-up-to-date"},"#","6 Keep your server up-to-date"),(0,a.kt)("p",null,"Regardless of what other measures you take, keeping your server current with the latest release(s) is vital to ensuring security. There are constant security notices (CVEs) published for the various components used in Unraid OS. Here at Lime Technology we do our best to ensure all vulnerabilities are addressed in a timely manner with software updates. However, these updates are useless to you if you don't apply them in a timely manner as well. Keeping your OS up-to-date is easy. Just navigate to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Tools > Update OS"))," to check for and apply any updates. You can configure notifications to prompt you when a new update is available from the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Settings > Notifications"))," page."),(0,a.kt)("h2",{id:"7-use-a-secure-method-for-remote-administration"},"#","7 Use a secure method for remote administration"),(0,a.kt)("p",null,"It is possible to set up an Unraid server so that it can safely be administered remotely but this should never be done by simply exposing the Unraid webGUI to the internet."),(0,a.kt)("p",null,"A frequent way to secure such a connection is to use VPN technology. Unraid includes as standard the WireGuard VPN, and an OpenVPN plugin and Docker container is also available. In addition many routers have built in VPN support which can be used."),(0,a.kt)("p",null,"An alternative for making the webGUI remotely accessible is to install the ",(0,a.kt)("a",{parentName:"p",href:"/zh/connect/about"},"Unraid Connect")," plugin, which can provide a secure remote access solution that utilizes SSL to ensure your connection is fully encrypted."))}p.isMDXComponent=!0}}]);