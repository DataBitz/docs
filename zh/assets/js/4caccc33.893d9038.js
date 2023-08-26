"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3967],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(4137));const o={sidebar_position:5},r="Docker Management",s={unversionedId:"unraid-os/manual/docker-management",id:"unraid-os/manual/docker-management",title:"Docker Management",description:"Docker is a technology that allows users to provide each application",source:"@site/docs/unraid-os/manual/docker-management.md",sourceDirName:"unraid-os/manual",slug:"/unraid-os/manual/docker-management",permalink:"/zh/unraid-os/manual/docker-management",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/docker-management.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"unraidSidebar",previous:{title:"Storage Management",permalink:"/zh/unraid-os/manual/storage-management"},next:{title:"VM Support",permalink:"/zh/unraid-os/manual/vm-support"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Concepts in Unraid Docker Implementation",id:"concepts-in-unraid-docker-implementation",level:2},{value:"appdata",id:"appdata",level:3},{value:"Templates",id:"templates",level:3},{value:"Container binaries",id:"container-binaries",level:3},{value:"Adding Applications as Containers",id:"adding-applications-as-containers",level:2},{value:"Community Applications",id:"community-applications",level:3},{value:"Configuring a container",id:"configuring-a-container",level:3},{value:"Network Type",id:"network-type",level:4},{value:"Volume Mappings",id:"volume-mappings",level:4},{value:"Port Mappings",id:"port-mappings",level:4},{value:"Environment Variables",id:"environment-variables",level:4},{value:"Container Creation Process",id:"container-creation-process",level:3},{value:"Controlling container auto-start",id:"controlling-container-auto-start",level:2},{value:"Controlling Your Application",id:"controlling-your-application",level:2},{value:"Accessing a Volume Mapping Inside a Container",id:"accessing-a-volume-mapping-inside-a-container",level:2},{value:"Re-Create the Docker image file",id:"re-create-the-docker-image-file",level:2},{value:"Re-Installing Docker Applications",id:"re-installing-docker-applications",level:2},{value:"Docker Custom Networks",id:"docker-custom-networks",level:2},{value:"Starting and stopping Docker containers on a schedule",id:"starting-and-stopping-docker-containers-on-a-schedule",level:2},{value:"Command to start a docker",id:"command-to-start-a-docker",level:3},{value:"Command to stop a docker",id:"command-to-stop-a-docker",level:4},{value:"Other Tips and Tricks",id:"other-tips-and-tricks",level:2}],c={toc:p},h="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(h,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"docker-management"},"Docker Management"),(0,i.kt)("p",null,"Docker is a technology that allows users to provide each application\nwith its own isolated operating Linux environment, isolating\ncompatibility or coexistence conflicts with other applications. If you\nwant more information on docker and its underlying technology than is\nprovided in this guide then you should visit the ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"docker web\nsite"),". There is also a ",(0,i.kt)("a",{parentName:"p",href:"https://forums.unraid.net/topic/57181-docker-faq/page/2/?tab=comments#comment-934358"},"Docker\nFAQ"),"\nin the Unraid forums that covers many commonly asked questions."),(0,i.kt)("p",null,"Using Docker, Unraid can run any Linux application regardless of the\ndistribution format as long as it is available as a Docker container.\nThat means whether an app was written for Ubuntu, CentOS, Arch, Red Hat,\nor any other variant, Unraid can run it. This is accomplished through\nthe use of Docker Containers, which allows each application to be\nprovided with its own isolated operating environment in which it cannot\ncreate software compatibility or coexistence conflicts with other\napplications. This also means that the application is isolated from the\nhosting Unraid system so that it is not affected by new releases of\nUnraid, and conversely, it will not install software components into\nUnraid that might lead to system instability"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A system up and running with Unraid 6 and you are connected via a\nweb browser to the Unraid webGui"),(0,i.kt)("li",{parentName:"ul"},'A share created called "appdata" that will be used to store\napplication metadata (also often referred to as an application\'s\n',(0,i.kt)("em",{parentName:"li"},"working set"),"). Strictly speaking you could use any name for the\nshare to store application metadata but it is wise to stick to the\nrecommended name as it simplifies any support questions/issues if\nyou conform to the recommended name.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NOTE: Applications are made available and supported by both the Docker\nand Unraid user communities respectively.")),(0,i.kt)("h2",{id:"concepts-in-unraid-docker-implementation"},"Concepts in Unraid Docker Implementation"),(0,i.kt)("p",null,"There are a number of concepts about the Unraid implementation of Docker\nsupport that you want to make sure you understand as it makes running\nDocker containers much easier."),(0,i.kt)("h3",{id:"appdata"},"appdata"),(0,i.kt)("p",null,'The folder the container puts in appdata contains the "working\nstorage" for the application. By convention the ',(0,i.kt)("strong",{parentName:"p"},"appdata")," share is\nused for this purpose, with each container using a container specific\nsub-folder in this location. This will be the data that the application\nitself uses to keep track of what it is doing. For example, plex keeps\nits library there, which is a database it uses to keep track of all your\nmedia."),(0,i.kt)("h3",{id:"templates"},"Templates"),(0,i.kt)("p",null,"Typically, you will install a new docker by going to the Apps page and\nclicking the download icon on the listing for the docker. This takes you\nto the Add/Edit Container page, a form with many things already filled\nin. The Apps page (Community Applications) fills those in for you based\non a template the docker author has provided. After you make any needed\nchanges or additions and submit the form by clicking the Apply button,\nthe contents of the form, including your changes and additions, is\nstored on the flash drive as a template, which can be used again to edit\nthe docker or even reinstall it exactly as it was, using the\nPrevious Apps feature on the Apps page."),(0,i.kt)("h3",{id:"container-binaries"},"Container binaries"),(0,i.kt)("p",null,"Each container will have its own unique set of binaries that are the\nprograms used within the container. Under Unraid the contents of the\ntemplate form (Add Container) are used to put together the docker run\ncommand with its parameters taken from that form. The docker run command\ndownloads the executable code of the docker and stores that code in the\ndocker.img, then runs the container."),(0,i.kt)("h2",{id:"adding-applications-as-containers"},"Adding Applications as Containers"),(0,i.kt)("p",null,"By default, you will have access to any and all applications that Lime\nTechnology publishes to its public Docker repository. To add them to\nyour system, perform the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add Container")," on the ",(0,i.kt)("strong",{parentName:"li"},"Docker")," tab in the webGui."),(0,i.kt)("li",{parentName:"ul"},"Click the ",(0,i.kt)("em",{parentName:"li"},"Template")," drop-down and select an application."),(0,i.kt)("li",{parentName:"ul"},"Read the description and instructions for using this application."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create")," to begin downloading the application to your system\nas a Docker container.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This method is now deprecated and the recommended way to add all\ncontainers is via Community Applications")),(0,i.kt)("h3",{id:"community-applications"},"Community Applications"),(0,i.kt)("p",null,"To gain access to a wider set of applications, see ",(0,i.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?topic=40262.0"},"this\npost")," in the\nLime Technology forums for information on installing the Community\nApplications plugin. This plugin will allow you to add more applications\nto your system through an app store interface."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NOTE: The applications available on this store come in multiple forms\n(containers and plugins) and are not directly supported by Lime\nTechnology. Support for community-maintained Docker containers can be\nfound in the ",(0,i.kt)("a",{parentName:"em",href:"https://forums.unraid.net/forum/index.php?board=56.0"},"Docker Containers\nsubforum"),".")),(0,i.kt)("h3",{id:"configuring-a-container"},"Configuring a container"),(0,i.kt)("h4",{id:"network-type"},"Network Type"),(0,i.kt)("p",null,"If the Bridge type is selected, the application's network access will be\nrestricted to only communicating on the ports specified in the port\nmappings section. If the Host type is selected, the application will be\ngiven access to communicate using ",(0,i.kt)("strong",{parentName:"p"},"any port")," on the host that isn't\nalready mapped to another in-use application/service. Generally\nspeaking, it is recommended to leave this setting to its default value\nas specified per application template."),(0,i.kt)("h4",{id:"volume-mappings"},"Volume Mappings"),(0,i.kt)("p",null,"Applications can be given read and write access to files on the host by\nmapping a directory path from the container to a directory path on the\nhost."),(0,i.kt)("p",null,"When looking at the volume mappings section"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Container volume represents the path from the container that\nwill be mapped."),(0,i.kt)("li",{parentName:"ul"},"The Host path represents the path the Container volume will map to\non your Unraid system."),(0,i.kt)("li",{parentName:"ul"},"The Access Mode specifies what the container can do with the\nfiles/folders to which it has been given access. It is good practice\nto give the most restrictive access that is consistent with the\ncontainer being able to run successfully.")),(0,i.kt)("p",null,"Clicking on the ",(0,i.kt)("strong",{parentName:"p"},"Edit"),' button brings up a dialog allowing you to alter\na volume mapping. Clicking inside the resulting fields provides a\n"picker" that will let you navigate to where the mapping should point.'),(0,i.kt)("p",null,"For applications that are installed via Community Applications (i.e. the\nApps tab) then you are typically provided with many of the settings for\na particular container pre-set to sensible values. You should review\nthese as being what you actually want on your system. Additional\nmappings can be manually created by clicking the ",(0,i.kt)("em",{parentName:"p"},"Add another Path,\nPort, Variable, Label or Device")," option."),(0,i.kt)("p",null,"Note that this means that the path to any particular file/folder can be\ndifferent when viewed from insides the container to that when viewed\nfrom the host level."),(0,i.kt)("p",null,"All applications should require at least one volume mapping to store\napplication metadata (e.g., media libraries, application settings, user\nprofile data, etc.). The expectation is that all dynamic data will be\nconfigured to exist outside the container (although docker does not make\nthis mandatory) so that the docker image file ends up only containing\nall the binaries associated with the docker container and none of the\nvariable data."),(0,i.kt)("p",null,"Most applications will need you to specify additional mappings in order\nfor the application to interact with other data on the system (e.g.,\nwith Plex Media Server, you should specify an additional mapping to give\nit access to your media files). It is important that when naming\nContainer volumes that you specify a path that won't conflict with\nalready existing folders present in the container. If unfamiliar with\nLinux, using a prefix such as \"unraid","_",'" for the volume name is a safe\nbet (e.g., "/unraid_media" is a valid Container volume name).'),(0,i.kt)("p",null,"Special points to note when setting up volume mappings are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Path names are case significant both at the host level and the\ncontainer level."),(0,i.kt)("li",{parentName:"ul"},"Container paths should start with a / character. If this is omitted\nthe path is a relative path so it will not be clear where inside the\ncontainer the path can be found."),(0,i.kt)("li",{parentName:"ul"},"If you are setting up a mapping that will use an Unassigned Device\nat the host level then it is important that you set the Access Mode\nto use one of the Slave access modes. If you do not do this then\ndynamic paths nay not be seen until the docker sub-system is\nrestarted.")),(0,i.kt)("p",null,"Host paths mentioned in a container's volume mappings are created when\nthe container starts if they do not already exist. If you find that you\nget unexpected folders appearing at the Unraid level then this can be a\ngood indication that you have got a container mapping wrong and so the\nfolder gets recreated every time the container is run."),(0,i.kt)("h4",{id:"port-mappings"},"Port Mappings"),(0,i.kt)("p",null,"While applications may internally be configured to talk to a specific\nport by default, we can remap those to different ports on our host with\nDocker."),(0,i.kt)("p",null,"When the network type is set to Bridge, you will be given the option of\ncustomizing what ports the container will use. This means that while\nthree different apps may all want to use port 8000 internally, we can\nmap each app to a unique port at the host level (e.g., 8000, 8001, and\n8002)."),(0,i.kt)("p",null,"When the network type is set to Host, the container will be allowed to\nuse any available port on your system. In this case, it is up to you to\nmake sure that you are not trying to run two containers using the same\nport as they would then interfere with each other."),(0,i.kt)("p",null,"Additional Port mappings can be created, similar to Volume mappings,\nalthough this is not typically necessary when working with containers\nusing templates provided through Community Applications as port mappings\nexpected by the container should already be specified."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"IMPORTANT NOTE: If adjusting port mappings, do ",(0,i.kt)("strong",{parentName:"em"},"not")," modify the\nsettings for the Container port as only the Host port can be adjusted.")),(0,i.kt)("h4",{id:"environment-variables"},"Environment Variables"),(0,i.kt)("p",null,"TBD"),(0,i.kt)("h3",{id:"container-creation-process"},"Container Creation Process"),(0,i.kt)("p",null,"With your network, volume and port mappings and environment variables\nconfigured, you are now ready to create your first Docker container.\nClick the ",(0,i.kt)("strong",{parentName:"p"},"Create")," button and the download process will begin. A few\nthings worth noting while the image is downloading:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After clicking Create, do not close your browser window or attempt\nto navigate to other tabs using the browser until the download is\ncomplete."),(0,i.kt)("li",{parentName:"ul"},"Initial downloads per template repository may take longer than\nsubsequent downloads per repository."),(0,i.kt)("li",{parentName:"ul"},"When the download process completes, you can click the Done button\nto return to the Docker page and continue adding applications.")),(0,i.kt)("h2",{id:"controlling-container-auto-start"},"Controlling container auto-start"),(0,i.kt)("p",null,"On the Docker page, you can set the Auto-Start option to ",(0,i.kt)("strong",{parentName:"p"},"ON")," for any\ndocker container you want to always be started whenever the Array is\nstarted."),(0,i.kt)("p",null,"The default behavior when starting up the Docker sub-system is to simply\nattempt to start all the Docker containers that are listed on the Docker\ntab to be auto-started as fast as possible in the order they are listed."),(0,i.kt)("p",null,"There are times when the order in which containers are started and their\ntiming with relation to other containers becomes important."),(0,i.kt)("p",null,"Example cases that spring to mind are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Starting a container running a database before any application that\nattempts to use it is started."),(0,i.kt)("li",{parentName:"ul"},"Starting a container that runs a specialist network link (e.g. a\nVPN) before any other container attempts to use it.")),(0,i.kt)("p",null,"You can alter the container start-up behavior from the default in the\nfollowing ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Changing the order"),":")),(0,i.kt)("p",null,"The simplest capability is to simply change the order in which the\ndocker containers are listed on the Docker tab. If you use a mouse\nto click-and-hold on the container name then you will find that you\ncan use drag-and-drop to move the container to another position in\nthe list."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Adding wait times"),":")),(0,i.kt)("p",null,"If simply changing the startup order is not sufficient because some\ncontainers take a while to finish their startup process then you can\nalso add delays into the start-up sequence. You can do this by the\nfollowing steps. - Switch to Advanced View using the toggle at the top right. - A ",(0,i.kt)("em",{parentName:"p"},"wait")," field will appear in the ",(0,i.kt)("em",{parentName:"p"},"AutoStart")," column. It will\ninitially be set to 0 indicating no delay before starting the\nnext container. - Enter a value into the ",(0,i.kt)("em",{parentName:"p"},"wait")," field indicating the delay (in\nseconds) to be used before attempting to start the ",(0,i.kt)("strong",{parentName:"p"},"next"),"\ncontainer in the list. That gives this container time to finish\nits startup process. You may have to do some trial-and-error to\ndetermine what are appropriate values for this wait time."),(0,i.kt)("p",null,"Using these mechanisms should allow you to control the container startup\nprocess to achieve the results that you want."),(0,i.kt)("h2",{id:"controlling-your-application"},"Controlling Your Application"),(0,i.kt)("p",null,"Once the download is complete, the application is started automatically.\nTo interact with your application, we begin by clicking on the icon\nvisible on the Docker page of the Unraid web interface or on the icon\nfor the docker on the dashboard page. Doing so will make a context menu\nappear with multiple options:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(891).Z,width:"286",height:"301"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"WebUI"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Most apps added through Docker will have a web interface that\nyou can access to configure and use them, but not all."),(0,i.kt)("li",{parentName:"ul"},"Clicking this option will launch a new browser tab/window\ndirectly to the application's web interface."),(0,i.kt)("li",{parentName:"ul"},"For apps that do NOT have a web interface, read the description\nwhen adding the container for instructions on how to make use of\nthe app once it's running."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Update"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This option only appears after clicking Check for Updates (if\navailable)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Start/Stop"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This will toggle the active state of the container."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Logs"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you are having difficulties with your application, useful\ninformation may be present in the application's log."),(0,i.kt)("li",{parentName:"ul"},"Logs for applications are stored separately from Unraid's system\nlog itself."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Edit"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Container settings such as port and volume mappings can be\nchanged by clicking this option."),(0,i.kt)("li",{parentName:"ul"},"Once changes are applied, the container will start\nautomatically, even if it is stopped initially."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enable/Disable autostart"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Toggling this will change the default behavior of the\napplication when the Docker service is started."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Remove"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allows you to remove either the entire application or just the\ncontainer."),(0,i.kt)("li",{parentName:"ul"},'Removing a container without its "image" will make adding the\napplication again later a much faster process (as it will not\nneed to be redownloaded).')))),(0,i.kt)("h2",{id:"accessing-a-volume-mapping-inside-a-container"},"Accessing a Volume Mapping Inside a Container"),(0,i.kt)("p",null,"One of the first things you will do after your application is running\nwill be to configure it. Configuration typically will involve specifying\nstorage locations from within the application's web interface. When\ndoing so, remember to look for the volume mappings you defined when\nadding your container. For example, if I needed to specify a folder path\nin the BT Sync app that would point to my Media share, I would specify\nthe path of \"/unraid_media\" in the application's interface, as depicted\nbelow."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2231).Z,width:"1264",height:"559"})),(0,i.kt)("h2",{id:"re-create-the-docker-image-file"},"Re-Create the Docker image file"),(0,i.kt)("p",null,"If for any reason your docker image file gets corrupted it is easy to\nrecreate it from scratch. The commonest cause for this seems to be the\ncase where the docker image file is located on the cache and the cache\nruns out of free space. Probably the next most common cause is when an\nunclean shutdown has occurred for some reason."),(0,i.kt)("p",null,"Since a properly set up docker container stores all its variable data\nexternally to the docker image. The docker image file should only hold\nthe binaries for the container so it is easy to get back to the last\nworking state with the applications in the same state they were before\nthe problem occurred."),(0,i.kt)("p",null,"The steps to recreate the docker image file are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to Settings-",">","Docker in the Unraid GUI"),(0,i.kt)("li",{parentName:"ul"},"Set the ",(0,i.kt)("strong",{parentName:"li"},"Enable Docker")," option to ",(0,i.kt)("strong",{parentName:"li"},"No")," and click ",(0,i.kt)("strong",{parentName:"li"},"Apply")," to\nstop the docker service"),(0,i.kt)("li",{parentName:"ul"},"Select the option to delete the Docker vdisk file and click apply\n(you can also delete this file manually if you prefer)."),(0,i.kt)("li",{parentName:"ul"},"Check that the location for the docker vdisk file points to where\nyou want the new file to be placed. Note that this setting includes\nthe filename for the vdisk file not just the path to the folder\nwhere it is to be located."),(0,i.kt)("li",{parentName:"ul"},"Check that the amount of space to be allocated to the disk file is\nwhat you want. Unless you are an exceptionally heavy user of docker\napplications the default value is likely to be fine."),(0,i.kt)("li",{parentName:"ul"},"Set the ",(0,i.kt)("strong",{parentName:"li"},"Enable Docker")," option to ",(0,i.kt)("strong",{parentName:"li"},"Yes")," and click ",(0,i.kt)("strong",{parentName:"li"},"Apply")," to\nstart the docker service. A new vdisk file will be created and\nformatted internally to BTRFS as part of starting the service.")),(0,i.kt)("p",null,"At his point, you will probably want to re-install your applications\nwith the same settings as previously used. This is easily achieved as\ndescribed below."),(0,i.kt)("h2",{id:"re-installing-docker-applications"},"Re-Installing Docker Applications"),(0,i.kt)("p",null,"Every time an application is installed as a docker container then a\ntemplate with the settings used is stored on the flash drive. This\ntemplate will be updated any time you edit the settings for this\ncontainer."),(0,i.kt)("p",null,"If you ever need to re-install an application (perhaps after deleting\nthe docker.img file) with the same settings as you used previously then\nthis can be done by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Apps")," tab in the Unraid GUI."),(0,i.kt)("li",{parentName:"ul"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Previous Apps")," section. Any apps you have installed\npreviously that are not currently installed will be displayed."),(0,i.kt)("li",{parentName:"ul"},"Indicate which apps you want to re-install"),(0,i.kt)("li",{parentName:"ul"},"Proceed with the installation and the docker container will be\nre-downloaded and your previous settings applied.")),(0,i.kt)("h2",{id:"docker-custom-networks"},"Docker Custom Networks"),(0,i.kt)("p",null,"For any Docker Custom Networks created, it is necessary to recreate\nthese networks if a vDisk is deleted. They do no persist."),(0,i.kt)("p",null,"Please make note of any Docker Custom Networks before deleting and it is\nnecessary to recreate these network(s) ","*","with the same name(s)","*"," prior\nto re-adding the containers."),(0,i.kt)("p",null,"Normally Docker does not allow Docker containers to directly access the\nsame subnet as the one used by the host. You can allow this under\n",(0,i.kt)("em",{parentName:"p"},"Settings-",">","Docker")," by changing ",(0,i.kt)("strong",{parentName:"p"},"Host access to custom networks")," from\n",(0,i.kt)("strong",{parentName:"p"},"disabled")," to ",(0,i.kt)("strong",{parentName:"p"},"enabled"),"."),(0,i.kt)("h2",{id:"starting-and-stopping-docker-containers-on-a-schedule"},"Starting and stopping Docker containers on a schedule"),(0,i.kt)("p",null,"A number of users have requested a way to start and/or stop their docker\ncontainers on a specified schedule. This is not currently a standard\nfeature of Unraid but is easy to achieve using the ",(0,i.kt)("strong",{parentName:"p"},"User Scripts"),"\nplugin."),(0,i.kt)("p",null,"The basic process is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install the ",(0,i.kt)("a",{parentName:"li",href:"https://forums.unraid.net/topic/48286-plugin-ca-user-scripts/"},"User\nScripts"),"\nplugin via the ",(0,i.kt)("em",{parentName:"li"},"Apps")," tab if you do not already have it installed."),(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("em",{parentName:"li"},"Settings -",">"," User Scripts")," to setup and control your scripts."),(0,i.kt)("li",{parentName:"ul"},"Create a new script for each separate time you want to schedule. A\nsingle script can be used to start and/or stop multiple Docker\ncontainers if you want them on the same schedule point."),(0,i.kt)("li",{parentName:"ul"},"Set the schedule at which the script is to be run. If (as is likely)\nthe simple scheduling options available via the dropdown list is not\nsufficient then you can set up a Custom schedule by creating an entry\nin ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cron#Overview"},"crontab")," format as\nthis provides far more precise control."),(0,i.kt)("li",{parentName:"ul"},"Hit ",(0,i.kt)("strong",{parentName:"li"},"Apply")," to activate the new script together with its schedule.")),(0,i.kt)("h3",{id:"command-to-start-a-docker"},"Command to start a docker"),(0,i.kt)("p",null,"In most cases this is the simply a command of the form:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'docker\xa0start\xa0"container-name"')),(0,i.kt)("p",null,"where ",(0,i.kt)("em",{parentName:"p"},"container-name")," is the name you gave the container on the Docker\ntab. This starts an existing docker container that you have previously\nset up."),(0,i.kt)("p",null,"You can also see the ",(0,i.kt)("em",{parentName:"p"},"container-name")," in the ",(0,i.kt)("em",{parentName:"p"},"docker run")," command that\nUnraid uses to both create a container (if it does not exist) and also\nstart it with the parameters provided via the docker template for that\ncontainer. The ",(0,i.kt)("em",{parentName:"p"},"container-name")," is that provided via the ",(0,i.kt)("em",{parentName:"p"},"name"),"\nparameter to the ",(0,i.kt)("em",{parentName:"p"},"docker run")," command. You can see the ",(0,i.kt)("em",{parentName:"p"},"docker run"),"\ncommand that Unraid will use when you install / edit the application\n(you can always make any change and then change it back and hit Apply to\nget the docker run command to appear). The following is an example of\nwhat this might look like:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5306).Z,width:"1000",height:"55"})),(0,i.kt)("h4",{id:"command-to-stop-a-docker"},"Command to stop a docker"),(0,i.kt)("p",null,"This is the simply a command of the form:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'docker\xa0stop\xa0"container-name"')),(0,i.kt)("p",null,"where ",(0,i.kt)("em",{parentName:"p"},"container-name")," is the name you gave the container on the Docker\ntab."),(0,i.kt)("h2",{id:"other-tips-and-tricks"},"Other Tips and Tricks"),(0,i.kt)("p",null,"Using Docker containers to run applications on Unraid is incredibly easy\nand very powerful. Here are some additional tips to improve your\nexperience:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using a cache device or pool for storing your Docker virtual disk\nimage and application data can improve performance."),(0,i.kt)("li",{parentName:"ul"},"Run multiple instances of the same app at the same time, which is\nuseful for testing out alternate versions before upgrading."),(0,i.kt)("li",{parentName:"ul"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Advanced View")," toggle on the top right when viewing the\nDocker page or adding applications to see additional configuration\noptions."),(0,i.kt)("li",{parentName:"ul"},"Learn more about Docker containers from our ",(0,i.kt)("a",{parentName:"li",href:"https://forums.unraid.net/forum/47-docker-containers/"},"helpful user\ncommunity"),".")))}d.isMDXComponent=!0},5306:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Docker_run-bd9456c5748e6eaf250adbe6090a8fd8.png"},891:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Dockerguide-controlling-e991c64c34a7a591841aceadff407e63.png"},2231:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Dockerguide-usingvolumes-eeebd412480931feeab950da55aa72b3.png"}}]);