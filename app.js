!function A(t,o,e){function r(l,u){if(!o[l]){if(!t[l]){var a="function"==typeof require&&require;if(!u&&a)return a(l,!0);if(n)return n(l,!0);var s=new Error("Cannot find module '"+l+"'");throw s.code="MODULE_NOT_FOUND",s}var i=o[l]={exports:{}};t[l][0].call(i.exports,function(A){var o=t[l][1][A];return r(o||A)},i,i.exports,A,t,o,e)}return o[l].exports}for(var n="function"==typeof require&&require,l=0;l<e.length;l++)r(e[l]);return r}({1:[function(A,t,o){"use strict";function e(A,t){var o={};for(var e in A)t.indexOf(e)>=0||Object.prototype.hasOwnProperty.call(A,e)&&(o[e]=A[e]);return o}function r(A,t){return fetch(A.url).then(function(o){o.json().then(function(o){return t(i)(A,o)}).catch(function(t){return console.log("Error decoding json",A.url,o)}),setTimeout(function(){return r(A,t)},1e4)}).catch(function(o){console.log("Error fetching",A.url,o),t(f)(A,o),setTimeout(function(){return r(A,t)},1e4)}),A}var n=A("preact-cycle"),l=function(A){return A&&A.__esModule?A:{default:A}}(A("./pools")),u=document.createElement("a"),a=new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="),s=function(A,t){console.log("started"),A.started=!0,A.pools=A.poolUrls.map(function(A){return r({url:A,stats:{}},t)}),A.poolsStats={}},i=function(A,t,o){console.log(o),Object.assign(t.stats=t.stats||{},o),delete t.error,t.updated=(new Date).getTime();var e=A.pools.reduce(function(A,t){if(t.stats.pool){var o=t.stats.pool,e=o.hashrate,r=o.miners;A.hashrate+=e||0,A.miners+=r||0,e>A.maxHashrate&&(A.maxHashrate=e),r>A.maxMiners&&(A.maxMiners=r)}return A},{hashrate:0,miners:0,maxHashrate:0,maxMiners:0});Object.assign(A.poolsStats,e),A.difficultyThreshold>0&&t.stats.network.difficulty<A.difficultyThreshold&&a.play()},h=function(A){A.difficultyThreshold=parseInt(A.difficultyThresholdInput)},c=function(A,t){var o=t.target.value;A.difficultyThresholdInput=o},f=function(A,t,o){t.error=o},p=function(A,t){var o=A.pools,e=t.difficultyThresholdInput,r=t.mutation;return(0,n.h)("network",null,(0,n.h)("table",null,(0,n.h)("thead",null,(0,n.h)("th",null,"pool"),(0,n.h)("th",null,"reported network difficulty")),(0,n.h)("tbody",null,o.map(function(A){return(0,n.h)("tr",null,(0,n.h)("td",null,(u.href=A.url,u.hostname)),(0,n.h)("td",{className:(new Date).getTime()-A.updated>9e3?"difficulty":"difficulty updated"},(A.stats.network||{}).difficulty))}))),(0,n.h)("form",{action:"javascript:",onSubmit:r(h)},"Difficulty threshold for notification: ",(0,n.h)("input",{type:"number",value:e||0,onInput:r(c)}),(0,n.h)("button",null,"Set")))},d=function(A){var t=A.pool,o=t.url,e=t.stats,r=t.error;return(0,n.h)("pool",null,(0,n.h)("a",{href:(u.href=o,""+(u.protocol||"http")+u.hostname),target:"_new"},u.hostname),e.pool?(0,n.h)(m,{stats:e}):void 0,r?(0,n.h)(Q,{error:r}):void 0)},m=function(A,t){var o=A.stats,e=t.poolsStats;return(0,n.h)("pool-stats",null,(0,n.h)("hashrate",null,"Hashrate: ",o.pool.hashrate),(0,n.h)("hashrate-bar",{style:{width:o.pool.hashrate/e.maxHashrate*100+"%"}}),(0,n.h)("miners",null,"Miners: ",o.pool.miners),(0,n.h)("miners-bar",{style:{width:o.pool.miners/e.maxMiners*100+"%"}}),(0,n.h)("config",null,(0,n.h)("div",null,"Fee: ",o.config.fee),(0,n.h)("div",null,"Min Payment: ",o.config.minPaymentThreshold),(0,n.h)("table",null,(0,n.h)("thead",null,(0,n.h)("tr",null,(0,n.h)("th",null,"Port"),(0,n.h)("th",null,"Difficulty"),(0,n.h)("th",null,"Description"))),(0,n.h)("tbody",null,o.config.ports.map(function(A){var t=A.port,o=A.difficulty,e=A.desc;return(0,n.h)("tr",null,(0,n.h)("td",null,t),(0,n.h)("td",null,o),(0,n.h)("td",null,e))})))))},Q=function(A){var t=A.error;return(0,n.h)("pool-error",null,t.message)};(0,n.render)(function(A){return function(t,o){var r=o.mutation,l=t.started,u=e(t,["started"]);return(0,n.h)("view",null,l?(0,n.h)(A,u):r(s)(r))}}(function(A,t){var o=A.pools,e=A.poolsStats;t.mutation;return(0,n.h)("pools",null,(0,n.h)(p,{pools:o}),(0,n.h)("global",null,(0,n.h)("h1",null,"All Known Pools"),(0,n.h)("hashrate",null,"Hashrate: ",e.hashrate),(0,n.h)("miners",null,"Miners: ",e.miners)),Object.values(o).sort(function(A,t){return A.stats.pool?t.stats.pool?A.stats.pool.hashrate>t.stats.pool.hashrate?-1:1:-1:1}).map(function(A){return(0,n.h)(d,{pool:A})}),(0,n.h)("donate",null,"Donate to: TRTLv1W1So77yGbVtrgf8G4epg5Fhq9hEZvpZC8ev86xRVLYsQQMHrxQG92QVjUU3bcE6ThGw9vSbEHBMejJpexE2sdrTC24ZXR"))}),{poolUrls:l.default,difficultyThresholdInput:5e8,difficultyThreshold:5e8},document.body)},{"./pools":2,"preact-cycle":"preact-cycle"}],2:[function(A,t,o){"use strict";o.__esModule=!0,o.default=["https://trtl.mine2gether.com/api/live_stats","http://ny.minetrtl.us:8117/live_stats","http://z-pool.com:8117/live_stats","http://slowandsteady.fun:8119/live_stats","http://hk.turtlepool.space:8117/live_stats","http://eu.turtlepool.space:8117/live_stats","https://trtl.ninja/api/stats","http://159.65.34.150:8117/live_stats","http://207.154.243.223:8117/live_stats","http://trtlpool.ninja:8117/live_stats"]},{}]},{},[1]);