function newMSiteRouterMapFn(sourceUrl){var routerMap=window.newMSiteRouterMapConfig;try{if(routerMap){var subChannel=localStorage.getItem("SUB_CHANNEL");var siteMap=routerMap[subChannel]||{};var key=Object.keys(siteMap).find(function(x){return RegExp(x).test(sourceUrl)});if(key){return sourceUrl.replace(key,siteMap[key])}}}catch(error){}return sourceUrl}window.newMSiteRouterMapFn=newMSiteRouterMapFn;