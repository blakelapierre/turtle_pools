!function t(A,o,e){function l(n,s){if(!o[n]){if(!A[n]){var a="function"==typeof require&&require;if(!s&&a)return a(n,!0);if(r)return r(n,!0);var u=new Error("Cannot find module '"+n+"'");throw u.code="MODULE_NOT_FOUND",u}var h=o[n]={exports:{}};A[n][0].call(h.exports,function(t){var o=A[n][1][t];return l(o||t)},h,h.exports,t,A,o,e)}return o[n].exports}for(var r="function"==typeof require&&require,n=0;n<e.length;n++)l(e[n]);return l}({1:[function(t,A,o){"use strict";function e(t,A){var o={};for(var e in t)A.indexOf(e)>=0||Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e]);return o}function l(t,A){return fetch(t.url).then(function(o){o.json().then(function(o){return A(i)(t,o)}).catch(function(A){return console.log("Error decoding json",t.url,o)}),setTimeout(function(){return l(t,A)},1e4)}).catch(function(o){console.log("Error fetching",t.url,o),A(f)(t,o),setTimeout(function(){return l(t,A)},1e4)}),t}var r=t("preact-cycle"),n=function(t){return t&&t.__esModule?t:{default:t}}(t("./pools")),s=document.createElement("a"),a=new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="),u=5e8;if(localStorage)try{u=parseInt(localStorage.getItem("difficultyThreshold"),10)||u,console.log({difficultyThreshold:u})}catch(t){}var h=function(t,A){console.log("started"),t.started=!0,t.pools=t.poolUrls.map(function(t){return l({url:t,stats:{}},A)}),t.poolsStats={}},i=function(t,A,o){Object.assign(A.stats=A.stats||{},o),delete A.error,A.updated=(new Date).getTime();var e=t.pools.reduce(function(t,A){if(A.stats.pool){var o=A.stats.pool,e=o.hashrate,l=o.miners;t.hashrate+=e||0,t.miners+=l||0,e>t.maxHashrate&&(t.maxHashrate=e),l>t.maxMiners&&(t.maxMiners=l)}return t},{hashrate:0,miners:0,maxHashrate:0,maxMiners:0});Object.assign(t.poolsStats,e),t.difficultyThreshold>0&&A.stats.network.difficulty<t.difficultyThreshold&&a.play()},c=function(t){t.difficultyThreshold=parseInt(t.difficultyThresholdInput),localStorage&&localStorage.setItem("difficultyThreshold",t.difficultyThreshold)},p=function(t,A){var o=A.target.value;t.difficultyThresholdInput=o},f=function(t,A,o){A.error=o},d=function(t,A){var o=t.pools,e=A.difficultyThresholdInput,l=A.mutation,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.values(o).reduce(function(t,A){return t+(A.stats.pool?A.stats.pool.hashrate:0)},0),a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Object.values(o).reduce(function(t,A){return t+(A.stats.pool?A.stats.totalBlocks:0)},0);return(0,r.h)("network",null,(0,r.h)("table",null,(0,r.h)("thead",null,(0,r.h)("th",null,"pool"),(0,r.h)("th",null,"reported network difficulty"),(0,r.h)("th",null,"reported hashrate"),(0,r.h)("th",null,"% of known pools"),(0,r.h)("th",null,"reported blocks")),(0,r.h)("tbody",null,Object.values(o).sort(function(t,A){return t.stats.pool?A.stats.pool?t.stats.pool.hashrate>A.stats.pool.hashrate?-1:1:-1:1}).map(function(t){return(0,r.h)("tr",{className:(new Date).getTime()-t.updated>9e3?"":"updated"},(0,r.h)("td",null,(0,r.h)("a",{href:(s.href=t.url,(s.protocol||"http")+"//"+s.hostname),target:"_new"},s.hostname)),(0,r.h)("td",null,(t.stats.network||{}).difficulty),(0,r.h)("td",null,t.stats.pool?t.stats.pool.hashrate:void 0),(0,r.h)("td",null,t.stats.pool?(t.stats.pool.hashrate/n*100).toFixed(1):void 0),(0,r.h)("td",null,t.stats.pool?t.stats.pool.totalBlocks:void 0))}),(0,r.h)("tr",null,(0,r.h)("td",null),(0,r.h)("td",null),(0,r.h)("td",null,n),(0,r.h)("td",null),(0,r.h)("td",null,a)))),(0,r.h)("form",{action:"javascript:",onSubmit:l(c)},"Difficulty threshold for notification: ",(0,r.h)("input",{type:"number",value:e||0,onInput:l(p)}),(0,r.h)("button",null,"Set")))},m=function(t){var A=t.pool,o=A.url,e=A.stats,l=A.error;return(0,r.h)("pool",null,(0,r.h)("a",{href:(s.href=o,(s.protocol||"http")+"//"+s.hostname),target:"_new"},s.hostname),e.pool?(0,r.h)(v,{stats:e}):void 0,l?(0,r.h)(g,{error:l}):void 0)},v=function(t,A){var o=t.stats,e=A.poolsStats;return(0,r.h)("pool-stats",null,(0,r.h)("hashrate",null,"Hashrate: ",o.pool.hashrate),(0,r.h)("hashrate-bar",{style:{width:o.pool.hashrate/e.maxHashrate*100+"%"}}),(0,r.h)("miners",null,"Miners: ",o.pool.miners),(0,r.h)("miners-bar",{style:{width:o.pool.miners/e.maxMiners*100+"%"}}),(0,r.h)("config",null,(0,r.h)("div",null,"Fee: ",o.config.fee),(0,r.h)("div",null,"Min Payment: ",o.config.minPaymentThreshold),(0,r.h)("table",null,(0,r.h)("thead",null,(0,r.h)("tr",null,(0,r.h)("th",null,"Port"),(0,r.h)("th",null,"Difficulty"),(0,r.h)("th",null,"Description"))),(0,r.h)("tbody",null,o.config.ports.map(function(t){var A=t.port,o=t.difficulty,e=t.desc;return(0,r.h)("tr",null,(0,r.h)("td",null,A),(0,r.h)("td",null,o),(0,r.h)("td",null,e))})))))},g=function(t){var A=t.error;return(0,r.h)("pool-error",null,A.message)};(0,r.render)(function(t){return function(A,o){var l=o.mutation,n=A.started,s=e(A,["started"]);return(0,r.h)("view",null,n?(0,r.h)(t,s):l(h)(l))}}(function(t,A){var o=t.pools,e=t.poolsStats;A.mutation;return(0,r.h)("pools",null,(0,r.h)(d,{pools:o}),(0,r.h)("global",null,(0,r.h)("h1",null,"All Known Pools"),(0,r.h)("hashrate",null,"Hashrate: ",e.hashrate),(0,r.h)("miners",null,"Miners: ",e.miners)),Object.values(o).sort(function(t,A){return t.stats.pool?A.stats.pool?t.stats.pool.hashrate>A.stats.pool.hashrate?-1:1:-1:1}).map(function(t){return(0,r.h)(m,{pool:t})}),(0,r.h)("donate",null,"Donate to: TRTLv1W1So77yGbVtrgf8G4epg5Fhq9hEZvpZC8ev86xRVLYsQQMHrxQG92QVjUU3bcE6ThGw9vSbEHBMejJpexE2sdrTC24ZXR"))}),{poolUrls:n.default,difficultyThresholdInput:u,difficultyThreshold:u},document.body)},{"./pools":2,"preact-cycle":"preact-cycle"}],2:[function(t,A,o){"use strict";o.__esModule=!0,o.default=["https://trtl.mine2gether.com/api/live_stats","http://ny.minetrtl.us:8117/live_stats","http://z-pool.com:8117/live_stats","http://slowandsteady.fun:8119/live_stats","http://hk.turtlepool.space:8117/live_stats","http://eu.turtlepool.space:8117/live_stats","https://us.turtlepool.space/api/live_stats","https://trtl.ninja/api/stats","http://159.89.44.20:8117/live_stats","https://trtlpool.ninja/api/live_stats","http://turtle-eu.atpool.party:8117/live_stats","http://118.31.18.78:8117/live_stats","http://159.65.77.77:8117/live_stats","http://159.65.63.178:8117/live_stats","http://207.154.195.78:8117/live_stats"]},{}]},{},[1]);