"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),h=r,c=m["".concat(s,".").concat(h)]||m[h]||d[h]||o;return n?a.createElement(c,i(i({ref:t},p),{},{components:n})):a.createElement(c,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"legacy/FAQ/Understanding_SMART_Reports",id:"legacy/FAQ/Understanding_SMART_Reports",title:"Understanding_SMART_Reports",description:"under\xa0construction,\xa0only\xa0slightly\xa0usable\xa0so\xa0far,\xa0please\xa0report\xa0errors\xa0in\xa0the\xa0talk\xa0page",source:"@site/docs/legacy/FAQ/Understanding_SMART_Reports.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/Understanding_SMART_Reports",permalink:"/zh/legacy/FAQ/Understanding_SMART_Reports",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/Understanding_SMART_Reports.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"USB_Flash_Drive_Preparation",permalink:"/zh/legacy/FAQ/USB_Flash_Drive_Preparation"},next:{title:"Contribute",permalink:"/zh/category/contribute"}},s={},u=[{value:"Prologue",id:"prologue",level:2},{value:"General information section",id:"general_information_section",level:3},{value:"1 Raw_Read_Error_Rate",id:"1-raw_read_error_rate",level:3},{value:"3 Spin_Up_Time",id:"3-spin_up_time",level:3},{value:"4 Start_Stop_Count",id:"4-start_stop_count",level:3},{value:"5 Reallocated_Sector_Ct",id:"5-reallocated_sector_ct",level:3},{value:"7 Seek_Error_Rate",id:"7-seek_error_rate",level:3},{value:"9 Power_On_Hours",id:"9-power_on_hours",level:3}],p={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"under\xa0construction,\xa0only\xa0slightly\xa0usable\xa0so\xa0far,\xa0please\xa0report\xa0errors\xa0in\xa0the\xa0talk\xa0page")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Disclaimer: this page is based on personal experience gained from\nexamining numerous SMART reports, therefore it should not be considered\nauthoritative. Accuracy however is highly desired, so please feel free\nto correct it as needed, or suggest corrections or question its\nstatements on the associated Talk page."))),(0,r.kt)("h2",{id:"prologue"},"Prologue"),(0,r.kt)("p",null,"There is a lot of ignorance and misinformation out there about SMART\nreports, so this will be an effort to help users to a better\nunderstanding of the content of SMART reports."),(0,r.kt)("p",null,"Consider the following SMART report extract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Vendor Specific SMART Attributes with Thresholds:\nID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE\n  1 Raw_Read_Error_Rate     0x000f   112   099   006    Pre-fail  Always       -       42208416\n  3 Spin_Up_Time            0x0003   096   096   000    Pre-fail  Always       -       0\n  4 Start_Stop_Count        0x0032   100   100   020    Old_age   Always       -       7\n  5 Reallocated_Sector_Ct   0x0033   100   100   036    Pre-fail  Always       -       0\n  7 Seek_Error_Rate         0x000f   056   055   030    Pre-fail  Always       -       25772440425\n  9 Power_On_Hours          0x0032   100   100   000    Old_age   Always       -       72\n 10 Spin_Retry_Count        0x0013   100   100   097    Pre-fail  Always       -       0\n 12 Power_Cycle_Count       0x0032   100   100   020    Old_age   Always       -       7\n183 Runtime_Bad_Block       0x0032   100   100   000    Old_age   Always       -       0\n184 End-to-End_Error        0x0032   100   100   099    Old_age   Always       -       0\n187 Reported_Uncorrect      0x0032   100   100   000    Old_age   Always       -       0\n188 Command_Timeout         0x0032   100   100   000    Old_age   Always       -       0\n189 High_Fly_Writes         0x003a   100   100   000    Old_age   Always       -       0\n190 Airflow_Temperature_Cel 0x0022   057   048   045    Old_age   Always       -       43 (Min/Max 36/43)\n191 G-Sense_Error_Rate      0x0032   100   100   000    Old_age   Always       -       0\n192 Power-Off_Retract_Count 0x0032   100   100   000    Old_age   Always       -       5\n193 Load_Cycle_Count        0x0032   100   100   000    Old_age   Always       -       19\n194 Temperature_Celsius     0x0022   043   052   000    Old_age   Always       -       43 (0 28 0 0)\n197 Current_Pending_Sector  0x0012   100   100   000    Old_age   Always       -       0\n198 Offline_Uncorrectable   0x0010   100   100   000    Old_age   Offline      -       0\n199 UDMA_CRC_Error_Count    0x003e   200   200   000    Old_age   Always       -       0\n240 Head_Flying_Hours       0x0000   100   253   000    Old_age   Offline      -       260348032581703\n241 Total_LBAs_Written      0x0000   100   253   000    Old_age   Offline      -       423266408125\n242 Total_LBAs_Read         0x0000   100   253   000    Old_age   Offline      -       97907054046\n")),(0,r.kt)("p",null,'Looks rather intimidating, doesn\\\'t it, with huge scary numbers! But\nwith a little knowledge from this page, you should be able to quickly\nsay \\"That drive looks fine! A little warm though!\\"'),(0,r.kt)("p",null,"\\\n==Introduction to SMART=="),(0,r.kt)("p",null,"From ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/S.M.A.R.T"},"SMART on Wikipedia"),',\n\\"S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Technology; often\nwritten as SMART) is a monitoring system for computer hard disk drives\nto detect and report on various indicators of reliability, in the hope\nof anticipating failures.\\" It was a laudable effort by the drive\nmanufacturers to provide standard ways to both report current drive\nparameters and status, and also indicate issues, especially those that\nmight be predictive of imminent drive failure. Unfortunately, the\nstandard had considerable ambiguity, and the various drive engineers\nhave often differed greatly in their interpretations and implementations\nof both the common attributes, and the introduction of new attributes.'),(0,r.kt)("p",null,"This page is primarily a guide to understanding SMART attributes, in\nreal world usage. They are unfortunately very inconsistent in their\nbehavior, not only between the different attributes, but between the\nvarious drive models, and especially between brands. In some cases, the\nRAW_VALUE is the counter to watch, in others, it is more important to\nwatch what the VALUE does, and there are yet other behaviors too. To\nunderstand a particular attribute report line, you have to understand\nhow that SMART attribute is usually handled, keeping in mind who the\nmanufacturer is, and to a lesser extent, what drive model it is. You can\ntry researching it online, but information is really skimpy, nothing\nauthoritative at all from the manufacturers themselves. The table of\nSMART attributes below should help you understand them, but every\nmanufacturer uses a different set of SMART attributes, even using the\ncommon ones in differing ways, even across their own drive models."),(0,r.kt)("p",null,"There are many computer professionals with a very low opinion of SMART\nreporting, and they generally discount SMART reports, partly because of\nall the inconsistency, but also because many drives fail with no SMART\nwarnings at all. I find that once you understand the inconsistencies,\nand keep some perspective, there is much that can still be learned. For\none example, the Seek_Error_Rate (a critical attribute) on Seagate\ndrives generally starts and stays in the mid 50\\'s to high 60\\'s\n(attribute values generally start at 100 and drop to 1). Not knowing\nthis, you might immediately think there is a serious issue with your new\nSeagate drive. But now that you do know this, you won\\'t be concerned\nuntil it drops into the low 50\\'s or below. The same Seek_Error_Rate\nvalue on any other brand would be immediately concerning. Hopefully the\ntable below will help you understand what \\'normal\\' looks like, for the\ndifferent attributes on different drives by different makers."),(0,r.kt)("p",null,"\\\n==SMART report structure== ",(0,r.kt)("em",{parentName:"p"},"Each section below includes an example of\nthat section, in a gray box with dotted border. It\\'s just an example,\nyours may greatly differ.")),(0,r.kt)("h3",{id:"general_information_section"},"General information section"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Identifying information for the SMART program and the drive - its\nmodel, serial number, firmware, capacity/size, time of this report,\nand SMART support status")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{=html}"},"\x3c!-- --\x3e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"smartctl 5.39.1 2010-01-28 r3054 [i486-slackware-linux-gnu] (local build)\nCopyright (C) 2002-10 by Bruce Allen, http://smartmontools.sourceforge.net\n\n=== START OF INFORMATION SECTION ===\nDevice Model:     ST1500DL003-9VT16L\nSerial Number:    5YD3D71H\nFirmware Version: CC32\nUser Capacity:    1,500,301,910,016 bytes\nDevice is:        Not in smartctl database [for details use: -P showall]\nATA Version is:   8\nATA Standard is:  ATA-8-ACS revision 4\nLocal Time is:    Fri Nov 18 16:11:43 2011 EST\nSMART support is: Available - device has SMART capability.\nSMART support is: Enabled\n")),(0,r.kt)("p",null,"\\\n===SMART overall health test==="),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Basic overall health test of the drive, only 2 choices - PASSED or\nFAILED"),(0,r.kt)("li",{parentName:"ul"},"If test result is FAILED, then that means the SMART firmware\nbelieves that the drive is in imminent danger of catastrophic\nfailure, so it is imperative to copy off ALL important data.\nUsually, it is best to copy off the most important files, then the\nnext most important files, then the next, and so on, because the\ndrive may completely quit before you finish copying.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{=html}"},"\x3c!-- --\x3e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SMART overall-health self-assessment test result: PASSED\n")),(0,r.kt)("p",null,"\\\n===SMART parameters section==="),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These are generally of little interest to us"),(0,r.kt)("li",{parentName:"ul"},"They do include the recommended polling time for the short and long\ntests, in other words don\\'t request a SMART report any sooner than\nthis recommendation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Unfortunately the original standard must have stipulated using a\nsingle byte to store the polling times, which caps their maximum\nvalue at 255. That makes the \\'Extended self-test\\' (the long\ntest) polling time of 255 rather useless."))),(0,r.kt)("li",{parentName:"ul"},"I have seen a case where an unusually long \\'Total time to complete\nOffline data collection\\' for one unusually slow drive was the only\nindication of a faulty drive. The SMART reports for other drives\nthat were exactly the same model had essentially identical SMART\nreports, with no issues, except for the difference in this\nparameter.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{=html}"},"\x3c!-- --\x3e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Offline data collection status:  (0x82) Offline data collection activity\n                    was completed without error.\n                    Auto Offline Data Collection: Enabled.\nSelf-test execution status:      (   0) The previous self-test routine completed\n                    without error or no self-test has ever\n                    been run.\nTotal time to complete Offline\ndata collection:         ( 623) seconds.\nOffline data collection\ncapabilities:            (0x7b) SMART execute Offline immediate.\n                    Auto Offline data collection on/off support.\n                    Suspend Offline collection upon new\n                    command.\n                    Offline surface scan supported.\n                    Self-test supported.\n                    Conveyance Self-test supported.\n                    Selective Self-test supported.\nSMART capabilities:            (0x0003) Saves SMART data before entering\n                    power-saving mode.\n                    Supports SMART auto save timer.\nError logging capability:        (0x01) Error logging supported.\n                    General Purpose Logging supported.\nShort self-test routine\nrecommended polling time:    (   1) minutes.\nExtended self-test routine\nrecommended polling time:    ( 255) minutes.\nConveyance self-test routine\nrecommended polling time:    (   2) minutes.\n")),(0,r.kt)("p",null,"\\\n===SMART attributes section==="),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is the table of SMART attributes for this drive. The columns\nare described below the example. Yours may greatly differ from this\nexample, as some drives report more attributes, and some drives\nreport considerably fewer. The newest drives often introduce new\nattributes.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{=html}"},"\x3c!-- --\x3e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SMART Attributes Data Structure revision number: 10\nVendor Specific SMART Attributes with Thresholds:\nID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE\n  1 Raw_Read_Error_Rate     0x000f   111   100   006    Pre-fail  Always       -       32796080\n  3 Spin_Up_Time            0x0003   095   095   000    Pre-fail  Always       -       0\n  4 Start_Stop_Count        0x0032   100   100   020    Old_age   Always       -       5\n  5 Reallocated_Sector_Ct   0x0033   100   100   036    Pre-fail  Always       -       0\n  7 Seek_Error_Rate         0x000f   100   253   030    Pre-fail  Always       -       265367\n  9 Power_On_Hours          0x0032   100   100   000    Old_age   Always       -       19\n 10 Spin_Retry_Count        0x0013   100   100   097    Pre-fail  Always       -       0\n 12 Power_Cycle_Count       0x0032   100   100   020    Old_age   Always       -       5\n183 Runtime_Bad_Block       0x0032   100   100   000    Old_age   Always       -       0\n184 End-to-End_Error        0x0032   100   100   099    Old_age   Always       -       0\n187 Reported_Uncorrect      0x0032   100   100   000    Old_age   Always       -       0\n188 Command_Timeout         0x0032   100   100   000    Old_age   Always       -       0\n189 High_Fly_Writes         0x003a   100   100   000    Old_age   Always       -       0\n190 Airflow_Temperature_Cel 0x0022   070   069   045    Old_age   Always       -       30 (Lifetime Min/Max 26/31)\n191 G-Sense_Error_Rate      0x0032   100   100   000    Old_age   Always       -       0\n192 Power-Off_Retract_Count 0x0032   100   100   000    Old_age   Always       -       4\n193 Load_Cycle_Count        0x0032   100   100   000    Old_age   Always       -       5\n194 Temperature_Celsius     0x0022   030   040   000    Old_age   Always       -       30 (0 26 0 0)\n195 Hardware_ECC_Recovered  0x001a   037   029   000    Old_age   Always       -       32796080\n197 Current_Pending_Sector  0x0012   100   100   000    Old_age   Always       -       0\n198 Offline_Uncorrectable   0x0010   100   100   000    Old_age   Offline      -       0\n199 UDMA_CRC_Error_Count    0x003e   200   200   000    Old_age   Always       -       0\n240 Head_Flying_Hours       0x0000   100   253   000    Old_age   Offline      -       172868138696723\n241 Total_LBAs_Written      0x0000   100   253   000    Old_age   Offline      -       2919100768\n242 Total_LBAs_Read         0x0000   100   253   000    Old_age   Offline      -       572998840\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Column 1 is the attribute number, usually a decimal number between 1\nand 255. Some SMART tools report it in hex, from 01 to FF. These are\nrelatively standard ID\\'s, except that different manufacturers will\noccasionally introduce a new one, unused by anyone else. Generally,\nthe only ones you can count on seeing are: 1, 3, 4, 5, 7, 9, 10,\n187, 190 or 194, 193, 195, 197, 198, and 199."),(0,r.kt)("li",{parentName:"ul"},"Column 2 is the relatively standardized attribute name. There are a\nfew that seem only used by a single manufacturer."),(0,r.kt)("li",{parentName:"ul"},"Column 3 is the attribute handling flag, of no interest to us -\nignore it."),(0,r.kt)("li",{parentName:"ul"},"Column 4 is the VALUE, one of the most important values in the\ntable. It is stored in a single byte on the drive for each SMART\nattribute, so its range is from 0 to 255.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"However, the values of 0, 254, and 255 are reserved for internal\nuse, so you never see them."),(0,r.kt)("li",{parentName:"ul"},'The value of 253 usually always means \\"Not Used Yet\\", so when\nyou see it, you are probably looking at a brand new drive.\nSometimes though, there can be a few attributes that take awhile\nbefore they are used, so may stay 253 for longer.'),(0,r.kt)("li",{parentName:"ul"},"VALUE is almost always used as a normalized scale of perfectly\ngood to perfectly bad, usually starting at VALUE=100, then\ndropping toward a worst case of VALUE=1. You can generally think\nof it as representing a scale starting at 100% good, then slowly\ndropping until failure at some predetermined percentage number,\nin the THRESHOLD column."),(0,r.kt)("li",{parentName:"ul"},"Someone realized that if the values only run from 100 to 1, then\nthey are wasting the possible values from 101 to 252, so some\nSMART programmers have decided to stretch the scale for certain\nattributes to start at 200 instead of 100, providing twice the\ndata points. Unfortunately, which attributes are scaled from 200\nto 1 is completely inconsistent, with almost all SMART reports\nshowing some attributes starting at 100, and other attributes\nstarting at 200. In addition, there are a few Maxtor and Samsung\ndrives that took the start of the scale all the way to 252 or\n253! Above, you see all but 1 attribute using 100, the exception\nbeing attribute 199 which starts at 200. In general, you can\nthink of 200-type scales as 100 times 2 (just divide the number\nby 2), and from now on, that is what we are going to do in most\nof the discussion."),(0,r.kt)("li",{parentName:"ul"},"The temperature attributes 190 and 194 are exceptions to the\nscaling. They are either temperatures or forms of the\ntemperature, and they don\\'t scale (their WORST value may look\nlike it scales though)."),(0,r.kt)("li",{parentName:"ul"},"The error rate attributes 1 and 7 are also exceptions, although\nof a different kind. Raw read and seek errors are a natural part\nof normal operation, so even in a brand new and perfect drive,\nthere is a factory-determined optimal rate of read and seek\nerrors. They are nothing to worry about, they\\'re the natural\nresult of temperature expansion and other things, and they are\nused to help the drive constantly recalibrate itself. But\nbecause these error rates are non-zero, you essentially cannot\nhave a perfect error rate of zero that you declare is a VALUE\nof 100. So manufacturers determine what an optimal error rate\nshould be and call it 100. But often, drives may achieve an\nerror rate (especially when they are new) that is even better\nthan the optimal one set by the manufacturer, which results in\nan error rate that is HIGHER than 100! For an example, see the\nVALUE above of attribute 1, the Raw_Read_Error_Rate. It\\'s as if\nthe drive is performing at 111%!"))),(0,r.kt)("li",{parentName:"ul"},"Column 5 is WORST, the lowest VALUE ever recorded (except for a few\nunusual and uncommon cases).",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"[","incomplete","]")))),(0,r.kt)("li",{parentName:"ul"},"Column 6 is THRESH, the manufacturer determined lowest value that\nWORST should be allowed to fall to, before reporting it as a FAILED\nquantity. Some are counters, some are informational such as\ntemperature or hours used or",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"[","incomplete","]")))),(0,r.kt)("li",{parentName:"ul"},"Column 7 is TYPE, the type of attribute. It can either be ",(0,r.kt)("em",{parentName:"li"},"Pre-fail"),"\nor ",(0,r.kt)("em",{parentName:"li"},"Old_age"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If it is ",(0,r.kt)("em",{parentName:"li"},"Pre-fail"),", then the attribute is considered a critical\nattribute, one that participates in the overall SMART health\nassessment (PASSED/FAILED) of the drive. If the value of WORST\nfalls below THRESH, then the drive FAILS the overall SMART\nhealth test, and complete failure may be imminent. The\n",(0,r.kt)("em",{parentName:"li"},"Pre-fail")," term means that if this attribute fails, then the\ndrive is considered \\'about to fail\\'."),(0,r.kt)("li",{parentName:"ul"},"If it is ",(0,r.kt)("em",{parentName:"li"},"Old_age"),", then the attribute is considered (for SMART\npurposes) a noncritical attribute, one that does not fail the\ndrive. The ",(0,r.kt)("em",{parentName:"li"},"Old_age")," term means that the attribute is related to\nnormal aging, normal wear and tear of the drive."),(0,r.kt)("li",{parentName:"ul"},"When new attributes are introduced, they may seem like a\ncritical item, perhaps even with an appropriate THRESH set. But\nif they are marked as ",(0,r.kt)("em",{parentName:"li"},"Old_age"),", then they do NOT fail the\ndrive, even if WORST falls below THRESH. Naturally, this could\nbe highly concerning, but there is no authoritative\ninterpretation available, so no definitive conclusions can be\nmade. These attributes should be considered ",(0,r.kt)("em",{parentName:"li"},"Experimental"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"[","incomplete","]")))),(0,r.kt)("li",{parentName:"ul"},"Column 8 is UPDATED. Supposedly, this is an indicator when the\nattribute is updated, ",(0,r.kt)("em",{parentName:"li"},"Always")," or ",(0,r.kt)("em",{parentName:"li"},"Offline"),". If ",(0,r.kt)("em",{parentName:"li"},"Always"),", then it is\nassumed that the attribute is updated whenever a relevant event\noccurs. In other words, it is always \\'live\\'. If ",(0,r.kt)("em",{parentName:"li"},"Offline"),", then\nsupposedly the attribute is only updated when offline tests are\nbeing performed. But in real life, our experience is that these are\ninaccurate. Just look at the example above, at attributes 241\nand 242. They appear to be live counters of LBA\\'s read and written,\nyet the test section of that particular SMART report indicates that\nthere have been no offline tests performed!"),(0,r.kt)("li",{parentName:"ul"},"Column 9 is WHEN_FAILED, usually and thankfully blank! If not blank,\nthen it indicates the last operational hour (from attribute 9\nPower_On_Hours) that this attribute failed!"),(0,r.kt)("li",{parentName:"ul"},"Column 10 is RAW_VALUE, a manufacturer controlled raw number, which\nmay or may not be of interest to us. From now on, we will often\nshorten its name and refer to it only as \\'the RAW\\'.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"[","incomplete","]"))))),(0,r.kt)("p",null,"\\\n===Error Log section==="),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"[","incomplete","]"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{=html}"},"\x3c!-- --\x3e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SMART Error Log Version: 1\nNo Errors Logged\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"[","incomplete, need example with errors","]"))),(0,r.kt)("p",null,"\\\n===Test results section==="),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"[","incomplete","]"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{=html}"},"\x3c!-- --\x3e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SMART Self-test log structure revision number 1\nNo self-tests have been logged.  [To run self-tests, use: smartctl -t]\n\nSMART Selective self-test log data structure revision number 1\n SPAN  MIN_LBA  MAX_LBA  CURRENT_TEST_STATUS\n    1        0        0  Not_testing\n    2        0        0  Not_testing\n    3        0        0  Not_testing\n    4        0        0  Not_testing\n    5        0        0  Not_testing\nSelective self-test flags (0x0):\n  After scanning selected spans, do NOT read-scan remainder of disk.\nIf Selective self-test is pending on power-up, resume after 0 minute delay.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"[","incomplete, need example with tests","]"))),(0,r.kt)("p",null,"\\\n\\\n==Table of attributes=="),(0,r.kt)("p",null,"For a fuller description of each attribute, please see ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/S.M.A.R.T#Known_ATA_S.M.A.R.T._attributes"},"Known ATA\nS.M.A.R.T. attributes on\nWikipedia"),".\n",(0,r.kt)("em",{parentName:"p"},"[","incomplete","]")),(0,r.kt)("h3",{id:"1-raw_read_error_rate"},"1 Raw_Read_Error_Rate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is an indicator of the current rate of errors of the low level\nphysical sector read operations. In normal operation, there are\nALWAYS a small number of errors when attempting to read sectors, but\nas long as the number remains small, there is NO issue with the\ndrive. Error correction information and retry mechanisms are in\nplace to catch and fix these errors. Manufacturers therefore\ndetermine an optimal level of errors for each drive model, and set\nup an appropriate scale for monitoring the current error rate. For\nexample, if 3 errors per 1000 read operations seems near perfect to\nthe manufacturer, then an error rate of 3 per 1000 ops might be set\nto an attribute VALUE of 100. If the rate increased to 10 per 1000,\nthen the rate might be scaled to 80 (completely under manufacturer\ncontrol, and NEVER revealed or explained to us!)."),(0,r.kt)("li",{parentName:"ul"},"They are called Raw Reads to distinguish them from the more common\nterm \\'read errors\\', which represent a much higher level read\noperation. What we usually refer to as a \\'read error\\' is an error\nreturned by a read process, that has attempted a series of one or\nmore seeks and raw reads, plus optional error corrections and\nretries. It either returns an indicator of total success plus the\nsector data (considered to be in perfect shape), or it returns an\nerror code, and no sector data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PLEASE completely ignore the RAW_VALUE number!")," Only Seagates\nreport the raw value, which yes, does appear to be the number of raw\nread errors, but should be ignored, completely. All other drives\nhave raw read errors too, but do not report them, leaving this value\nas zero only. To repeat, Seagates are not worse than other drives\nbecause they appear to have raw read errors, rather they are the\nonly one to report the number. I suspect that others do not report\nthe number to avoid a lot of confusion, and questions for their tech\nsupport people. Seagate leaves those of us who provide tech support\nthe job of answering the constant questions about this number.\nHopefully now that you understand this, you will never bother a kind\nIT person with questions about the Raw_Read_Error_Rate RAW_VALUE\nagain?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"[","incomplete?","]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Critical attribute - if its WORST falls below its THRESH, then the\ndrive will be considered FAILED"))),(0,r.kt)("p",null,"\\"),(0,r.kt)("h3",{id:"3-spin_up_time"},"3 Spin_Up_Time"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"[","incomplete","]"))),(0,r.kt)("p",null,"\\"),(0,r.kt)("h3",{id:"4-start_stop_count"},"4 Start_Stop_Count"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"[","incomplete","]"))),(0,r.kt)("p",null,"\\"),(0,r.kt)("h3",{id:"5-reallocated_sector_ct"},"5 Reallocated_Sector_Ct"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"[","incomplete","]"))),(0,r.kt)("p",null,"\\"),(0,r.kt)("h3",{id:"7-seek_error_rate"},"7 Seek_Error_Rate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"[","incomplete","]"))),(0,r.kt)("p",null,"\\"),(0,r.kt)("h3",{id:"9-power_on_hours"},"9 Power_On_Hours"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"[","incomplete","]"))),(0,r.kt)("p",null,"\\\n",(0,r.kt)("em",{parentName:"p"},"[","the most important part of this whole page is completely\nincomplete!","]"),"\\\n\\\n==Additional info=="),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"also known more accurately as ",(0,r.kt)("strong",{parentName:"li"},"S.M.A.R.T.")," or ",(0,r.kt)("strong",{parentName:"li"},"Self-Monitoring,\nAnalysis and Reporting Technology")),(0,r.kt)("li",{parentName:"ul"},"Reference materials",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/S.M.A.R.T"},"http://en.wikipedia.org/wiki/S.M.A.R.T"),". - all about\nS.M.A.R.T., from Wikipedia; ",(0,r.kt)("strong",{parentName:"li"},"recommended reading!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/S.M.A.R.T#Known_ATA_S.M.A.R.T._attributes"},"http://en.wikipedia.org/wiki/S.M.A.R.T#Known_ATA_S.M.A.R.T._attributes")," -\ntable of S.M.A.R.T. attributes, from Wikipedia"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.linuxjournal.com/article/6983"},"http://www.linuxjournal.com/article/6983")," - an excellent\narticle on SMART and smartctl, from Linux Journal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://smartmontools.sourceforge.net/"},"http://smartmontools.sourceforge.net/")," - smartmontools Home\nPage"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://smartmontools.sourceforge.net/faq.html"},"http://smartmontools.sourceforge.net/faq.html")," - smartmontools\nFAQ Page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://smartmontools.sourceforge.net/man/smartctl.8.html"},"http://smartmontools.sourceforge.net/man/smartctl.8.html")," - MAN\nPage for smartmontools"))),(0,r.kt)("li",{parentName:"ul"},"UnRAID related (some are marked ",(0,r.kt)("em",{parentName:"li"},"\\<\\< old ",">",">"),", meaning some part\nmay be obsolete or incompatible with current releases of UnRAID)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://lime-technology.com/forum/index.php?topic=13054.msg53337#msg53337"},"http://lime-technology.com/forum/index.php?topic=13054.msg53337#msg53337")," -\nkeeping SMART values in perspective, and how to properly\ninterpret them - a series of posts to help users alarmed by the\nvery large numbers they find in a SMART report or \\'diff\\'"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://lime-technology.com/forum/index.php?topic=2135.msg15733#msg15733"},"http://lime-technology.com/forum/index.php?topic=2135.msg15733#msg15733")," -\na script for grabbing dated SMART reports for all drives"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\\<\\< old ",">",">"),(0,r.kt)("a",{parentName:"li",href:"FAQ#How_can_I_find_out_more_information_about_a_hard_drive.3F",title:"wikilink"},"FAQ#How_can_I_find_out_more_information_about_a_hard_drive.3F")," -\nintro to obtaining the SMART info for a drive"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\\<\\< old ",">",">"),(0,r.kt)("a",{parentName:"li",href:"FAQ#Why_is_a_temp_not_showing_for_a_drive.3F",title:"wikilink"},"FAQ#Why_is_a_temp_not_showing_for_a_drive.3F")," -\nenabling SMART so temps can be accessed and displayed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Troubleshooting#Hard_drive_failures",title:"wikilink"},"Troubleshooting#Hard_drive_failures")," -\nhas a section on smartctl commands for getting SMART reports,\nand running tests"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"UnRAID_Add_Ons#UnMENU",title:"wikilink"},"UnRAID_Add_Ons#UnMENU")," - the\nDisk Management plugin has buttons for SMART reports and tests"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://lime-technology.com/forum/index.php?topic=2708"},"http://lime-technology.com/forum/index.php?topic=2708")," - the\nMyMain thread; an UnMENU plugin; after installing UnMENU,\ninstall this next; has a Smart View that provides color-coded\nSMART info for all drives"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"UnRAID_Add_Ons#SmartHistory",title:"wikilink"},"SmartHistory")," - a tool\nfor monitoring the SMART parameters of your drives, and provide\nreporting and notification of changes in SMART attributes;\nproduces customizable reports, with graphing capabilities")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"[","incomplete","]")),(0,r.kt)("p",null,"\\\n\\"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Category:_How_To",title:"wikilink"},"Category: How To")," ",(0,r.kt)("a",{parentName:"p",href:"Category:_Troubleshooting",title:"wikilink"},"Category:\nTroubleshooting")))}d.isMDXComponent=!0}}]);