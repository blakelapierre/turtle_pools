!function t(e,A,o){function l(a,n){if(!A[a]){if(!e[a]){var r="function"==typeof require&&require;if(!n&&r)return r(a,!0);if(s)return s(a,!0);var i=new Error("Cannot find module '"+a+"'");throw i.code="MODULE_NOT_FOUND",i}var u=A[a]={exports:{}};e[a][0].call(u.exports,function(t){var A=e[a][1][t];return l(A||t)},u,u.exports,t,e,A,o)}return A[a].exports}for(var s="function"==typeof require&&require,a=0;a<o.length;a++)l(o[a]);return l}({1:[function(t,e,A){"use strict";function o(t,e){var A={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(A[o]=t[o]);return A}function l(t,e){return fetch(t.url).then(function(A){A.json().then(function(A){return e(h)(t,A)}).catch(function(e){return console.log("Error decoding json",t.url,A,e)}),setTimeout(function(){return l(t,e)},1e4)}).catch(function(A){console.log("Error fetching",t.url,A),e(f)(t,A),setTimeout(function(){return l(t,e)},1e4)}),t}var s=t("preact-cycle"),a=function(t){return t&&t.__esModule?t:{default:t}}(t("./pools")),n=document.createElement("a"),r=new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="),i=5e8;if(localStorage)try{i=parseInt(localStorage.getItem("difficultyThreshold"),10)||i,console.log({difficultyThreshold:i})}catch(t){}var u=function(t,e){console.log("started"),t.started=!0,t.pools=t.poolUrls.map(function(t){return l({url:t},e)}),t.poolsStats={}},h=function(t,e,A){Object.assign(e.stats=e.stats||{firstSeenBlockCount:A.pool.totalBlocks,lastSeenBlockCount:A.pool.totalBlocks,lastSeenBlock:0,height:A.network.height},{liveStats:A}),delete e.error,e.updated=(new Date).getTime(),A.pool.totalBlocks>e.stats.lastSeenBlockCount&&(e.stats.lastSeenBlock=(new Date).getTime(),e.stats.lastSeenBlockCount=A.pool.totalBlocks),A.network.height>e.stats.height&&(e.stats.height=A.network.height,t.heightData.push([e.stats.height,(new Date).getTime(),e]));var o=t.pools.reduce(function(t,e){if(e.stats&&e.stats.pool){var A=e.stats.pool,o=A.hashrate,l=A.miners;t.hashrate+=o||0,t.miners+=l||0,o>t.maxHashrate&&(t.maxHashrate=o),l>t.maxMiners&&(t.maxMiners=l)}return t},{hashrate:0,miners:0,maxHashrate:0,maxMiners:0});Object.assign(t.poolsStats,o),e.stats.liveStats.network&&t.difficultyThreshold>0&&e.stats.liveStats.network.difficulty<t.difficultyThreshold&&r.play()},c=function(t){t.difficultyThreshold=parseInt(t.difficultyThresholdInput),localStorage&&localStorage.setItem("difficultyThreshold",t.difficultyThreshold)},p=function(t,e){var A=e.target.value;t.difficultyThresholdInput=A},f=function(t,e,A){e.error=A},d=function(t,e){var A=t.pools,o=e.startTime,l=e.difficultyThresholdInput,a=e.mutation,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.values(A).filter(function(t){return t.stats}).reduce(function(t,e){return t+e.stats.liveStats.pool.hashrate||0},0),i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Object.values(A).filter(function(t){return t.stats}).reduce(function(t,e){return t+e.stats.liveStats.pool.totalBlocks||0},0),u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Object.values(A).filter(function(t){return t.stats}).reduce(function(t,e){return t+e.stats.liveStats.pool.totalBlocks-e.stats.firstSeenBlockCount},0);return(0,s.h)("network",null,(0,s.h)("table",null,(0,s.h)("thead",null,(0,s.h)("tr",null,(0,s.h)("th",{colspan:8},"values obtained/computed from pools'")),(0,s.h)("tr",null,(0,s.h)("th",null,"pool"),(0,s.h)("th",null,"height"),(0,s.h)("th",null,"network difficulty"),(0,s.h)("th",null,"hashrate"),(0,s.h)("th",null,"% of known pools"),(0,s.h)("th",null,"blocks"),(0,s.h)("th",null,"new blocks"),(0,s.h)("th",null,"seconds per block"))),(0,s.h)("tbody",null,Object.values(A).sort(function(t,e){return t.stats?e.stats?t.stats.liveStats.pool.hashrate>e.stats.liveStats.pool.hashrate?-1:1:-1:1}).map(function(t){return(0,s.h)("tr",{className:{updated:(new Date).getTime()-t.updated<=9e3,"new-block":t.stats&&(new Date).getTime()-t.stats.lastSeenBlock<=9e4,error:t.error}},(0,s.h)("td",null,(0,s.h)("a",{href:(n.href=t.url,(n.protocol||"http")+"//"+n.hostname),target:"_new"},n.hostname)),(0,s.h)("td",null,t.stats?t.stats.liveStats.network.height:void 0),(0,s.h)("td",null,t.stats?t.stats.liveStats.network.difficulty:void 0),(0,s.h)("td",null,t.stats?t.stats.liveStats.pool.hashrate:void 0),(0,s.h)("td",null,t.stats?(t.stats.liveStats.pool.hashrate/r*100).toFixed(1):void 0),(0,s.h)("td",null,t.stats?t.stats.liveStats.pool.totalBlocks:void 0),(0,s.h)("td",null,t.stats?t.stats.liveStats.pool.totalBlocks-t.stats.firstSeenBlockCount:void 0),(0,s.h)("td",null,t.stats&&t.stats.liveStats.pool.totalBlocks-t.stats.firstSeenBlockCount>0?(((new Date).getTime()-o)/(t.stats.liveStats.pool.totalBlocks-t.stats.firstSeenBlockCount)/1e3).toFixed(1):void 0))}),(0,s.h)("tr",null,(0,s.h)("td",null),(0,s.h)("td",null),(0,s.h)("td",null),(0,s.h)("td",null,r),(0,s.h)("td",null),(0,s.h)("td",null,i),(0,s.h)("td",null,u)))),"Average Seconds Per Block: ",u>0?(((new Date).getTime()-o)/u/1e3).toFixed(2):"waiting for new block",(0,s.h)("form",{action:"javascript:",onSubmit:a(c)},"Difficulty threshold for notification: ",(0,s.h)("input",{type:"number",value:l||0,onInput:a(p)}),(0,s.h)("button",null,"Set")))};(0,s.render)(function(t){return function(e,A){var l=A.mutation,a=e.started,n=o(e,["started"]);return(0,s.h)("view",null,a?(0,s.h)(t,n):l(u)(l))}}(function(t,e){var A=t.pools;t.poolsStats,e.mutation;return(0,s.h)("pools",null,(0,s.h)(d,{pools:A}),(0,s.h)("donate",null,"Donate to: TRTLv1W1So77yGbVtrgf8G4epg5Fhq9hEZvpZC8ev86xRVLYsQQMHrxQG92QVjUU3bcE6ThGw9vSbEHBMejJpexE2sdrTC24ZXR"))}),{startTime:(new Date).getTime(),poolUrls:a.default,difficultyThresholdInput:i,difficultyThreshold:i,heightData:[]},document.body)},{"./pools":2,"preact-cycle":"preact-cycle"}],2:[function(t,e,A){"use strict";A.__esModule=!0,A.default=["https://trtl.mine2gether.com/api/live_stats","http://ny.minetrtl.us:8117/live_stats","http://z-pool.com:8117/live_stats","http://slowandsteady.fun:8119/live_stats","http://hk.turtlepool.space:8117/live_stats","http://eu.turtlepool.space:8117/live_stats","https://us.turtlepool.space/api/live_stats","https://trtl.ninja/api/stats","http://165.227.80.178:8117/live_stats","https://trtlpool.ninja/api/live_stats","http://turtle-eu.atpool.party:8117/live_stats","http://118.31.18.78:8117/live_stats","http://159.65.77.77:8117/live_stats","http://159.65.63.178:8117/live_stats","http://207.154.195.78:8117/live_stats","http://188.166.26.62:8117/live_stats","http://165.227.43.9:8117/live_stats","https://turtle.mining.garden:8117/live_stats","https://auspool.turtleco.in/api/live_stats","https://turtlecoinpool.ml:8443/live_stats","https://api.trtl.flashpool.club/live_stats"]},{}]},{},[1]);