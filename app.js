!function t(e,o,n){function l(a,i){if(!o[a]){if(!e[a]){var r="function"==typeof require&&require;if(!i&&r)return r(a,!0);if(s)return s(a,!0);var A=new Error("Cannot find module '"+a+"'");throw A.code="MODULE_NOT_FOUND",A}var u=o[a]={exports:{}};e[a][0].call(u.exports,function(t){var o=e[a][1][t];return l(o||t)},u,u.exports,t,e,o,n)}return o[a].exports}for(var s="function"==typeof require&&require,a=0;a<n.length;a++)l(n[a]);return l}({1:[function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function l(t){if(null==t)throw new TypeError("Cannot destructure undefined")}function s(t,e){var o={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}function a(t,e){var o=(new Date).getTime();return fetch(t.url).then(function(n){var l=(new Date).getTime();n.json().then(function(n){return e(k)(t,n,l-o,e)}).catch(function(e){return console.log("Error decoding json",t.url,n,e)}),setTimeout(function(){return a(t,e)},1e4)}).catch(function(o){console.log("Error fetching",t.url,o),e(y)(t,o),setTimeout(function(){return a(t,e)},1e4)}),t}function i(t,e,o){return r(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(new Date).getTime();return fetch(t.url,{method:"POST",body:JSON.stringify({jsonrpc:"2.0",id:"test",method:"f_blocks_list_json",params:{height:e.heightData.last||0}})}).then(function(e){return e.json().then(function(e){return o(D)(t,e,(new Date).getTime()-n,o)})})},1e4),t}function r(t,e){return t().then(function(){return setTimeout(function(){return r(t,e)},e)}).catch(function(o){console.log("Monitor error",o),setTimeout(t,e)})}var A=function(){function t(t,e){var o=[],n=!0,l=!1,s=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done)&&(o.push(a.value),!e||o.length!==e);n=!0);}catch(t){l=!0,s=t}finally{try{!n&&i.return&&i.return()}finally{if(l)throw s}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=t("preact-cycle"),h=n(t("./pools")),c=n(t("./explorers")),f=document.createElement("a"),d=new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="),p=5e8;if(localStorage)try{p=parseInt(localStorage.getItem("difficultyThreshold"),10)||p,console.log({difficultyThreshold:p})}catch(t){}var m=function(t,e){console.log("started"),t.started=!0,g(t,e),t.poolsStats={}},g=function(t,e){return t.pools=t.poolUrls.map(function(t){return a({url:t},e)})},v=function(t,e){return t.explorers=t.explorerUrls.map(function(o){return i({url:o},t,e)})},k=function(t,e,o,n,l){Object.assign(e.stats=e.stats||{firstSeenBlockCount:o.pool.totalBlocks,lastSeenBlockCount:o.pool.totalBlocks,lastSeenBlock:0,height:o.network.height},{liveStats:o}),delete e.error,e.updated=(new Date).getTime(),e.latency=n,void 0===t.heightData.last?(t.heightData.last=o.network.height,v(t,l)):t.heightData.last=o.network.height,o.pool.totalBlocks>e.stats.lastSeenBlockCount&&(e.stats.lastSeenBlock=(new Date).getTime(),e.stats.lastSeenBlockCount=o.pool.totalBlocks),o.network.height>e.stats.height&&(console.log("new height",e.stats.height,e),e.stats.height=o.network.height,o.network.height>t.heightData.last&&(t.heightData.seen.unshift([o.network.height,(new Date).getTime(),e]),t.heightData.span=t.heightData.seen[0][1]-t.heightData.seen[t.heightData.seen.length-1][1],t.heightData.seen.length>17&&t.heightData.seen.splice(17,t.heightData.seen.length-17))),t.knownNetworkRate=0;var s=t.pools.reduce(function(e,o){if(o.stats&&o.stats.liveStats.pool){var n=o.stats.liveStats.pool,l=n.hashrate,s=n.miners;e.hashrate+=l||0,e.miners+=s||0,l>e.maxHashrate&&(e.maxHashrate=l),s>e.maxMiners&&(e.maxMiners=s),t.knownNetworkRate+=l}return e},{hashrate:0,miners:0,maxHashrate:0,maxMiners:0});Object.assign(t.poolsStats,s),e.stats.liveStats.network&&t.difficultyThreshold>0&&e.stats.liveStats.network.difficulty<t.difficultyThreshold&&d.play()},D=function(t,e,o,n){var l=o.result;Object.assign(e.stats=e.stats||{},{result:l})},w=function(t){t.difficultyThreshold=parseInt(t.difficultyThresholdInput),localStorage&&localStorage.setItem("difficultyThreshold",t.difficultyThreshold)},S=function(t,e){var o=e.target.value;t.difficultyThresholdInput=o},y=function(t,e,o){e.error=o},Q=function(t,e){var o=e.heightData;return l(t),(0,u.h)("height-knowledge",null,(0,u.h)("table",null,(0,u.h)("thead",null,(0,u.h)("th",{colspan:2},"last ",o.seen.length," seen heights ",o.seen.length>0?"["+(((new Date).getTime()-o.seen[o.seen.length-1][1])/1e3).toFixed(1)+"s]":void 0)),(0,u.h)("tbody",null,o.seen.map(function(t){var e=A(t,3),o=e[0],n=e[1];e[2];return(0,u.h)("tr",null,(0,u.h)("td",null,o),(0,u.h)("td",null,(((new Date).getTime()-n)/1e3).toFixed(1),"s ago"))}))))},B=function(t,e){var o=e.explorers;return l(t),(0,u.h)("explorers",null,o?o.map(function(t){return(0,u.h)(I,{explorer:t})}):void 0)},I=function(t,e){var o=t.explorer,n=o.url,l=o.stats,s=e.heightData,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.result.blocks.slice(0,17).reduce(function(t,e,o){return t.times.push([t.time-e.timestamp,e.height-s.last,t.prevoiusDifficulty]),t.totalTime+=t.time-e.timestamp,t.time=e.timestamp,t.maxDiff=Math.max(t.maxDiff,e.difficulty),t.minDiff=Math.min(t.minDiff,e.difficulty),t.prevoiusDifficulty=e.difficulty,t},{time:(new Date).getTime()/1e3,totalTime:0,times:[],maxDiff:0,minDiff:9999999999});return(0,u.h)("explorer",null,n,(0,u.h)("block-times",null,a.times.map(function(t){var e=A(t,3),o=e[0],n=e[1],l=e[2];return(0,u.h)("block-time",{className:o>=30?"over":"under",style:{width:o/a.totalTime*100+"%"}},l?(0,u.h)("difficulty-bar",{style:{top:100*(1-(l-a.minDiff)/(a.maxDiff-a.minDiff))+"%"}}):void 0,(0,u.h)("height",null,n),(0,u.h)("time",null,o.toFixed(0),"s"))})),(0,u.h)("total-time",null,a.totalTime.toFixed(0)),(0,u.h)("mean-time",null,(a.totalTime/17).toFixed(2)))},E=function(t,e){var o=t.pools,n=e.startTime,l=e.difficultyThresholdInput,s=e.mutation,a=e.knownNetworkRate,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.values(o).filter(function(t){return t.stats}).reduce(function(t,e){return t+e.stats.liveStats.pool.totalBlocks||0},0),r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Object.values(o).filter(function(t){return t.stats}).reduce(function(t,e){return t+e.stats.liveStats.pool.totalBlocks-e.stats.firstSeenBlockCount},0);return(0,u.h)("network",null,(0,u.h)("table",null,(0,u.h)("thead",null,(0,u.h)("tr",null,(0,u.h)("th",{colspan:9},"values obtained/computed from pools'")),(0,u.h)("tr",null,(0,u.h)("th",null,"rtt"),(0,u.h)("th",null,"pool"),(0,u.h)("th",null,"height"),(0,u.h)("th",null,"network difficulty"),(0,u.h)("th",null,"hashrate"),(0,u.h)("th",null,"% of known pools"),(0,u.h)("th",null,"blocks"),(0,u.h)("th",null,"new blocks"),(0,u.h)("th",null,"seconds per block"))),(0,u.h)("tbody",null,Object.values(o).sort(function(t,e){return t.stats?e.stats?t.stats.liveStats.pool.hashrate>e.stats.liveStats.pool.hashrate?-1:1:-1:1}).map(function(t){return(0,u.h)("tr",{className:{updated:(new Date).getTime()-t.updated<=9e3,"new-block":t.stats&&(new Date).getTime()-t.stats.lastSeenBlock<=9e4,error:t.error}},(0,u.h)("td",null,t.latency),(0,u.h)("td",null,(0,u.h)("a",{href:(f.href=t.url,(f.protocol||"http")+"//"+f.hostname),target:"_new"},f.hostname)),(0,u.h)("td",null,t.stats?t.stats.liveStats.network.height:void 0),(0,u.h)("td",null,t.stats?t.stats.liveStats.network.difficulty:void 0),(0,u.h)("td",null,t.stats?t.stats.liveStats.pool.hashrate:void 0),(0,u.h)("td",null,t.stats?(t.stats.liveStats.pool.hashrate/a*100).toFixed(1):void 0),(0,u.h)("td",null,t.stats?t.stats.liveStats.pool.totalBlocks:void 0),(0,u.h)("td",null,t.stats?t.stats.liveStats.pool.totalBlocks-t.stats.firstSeenBlockCount:void 0),(0,u.h)("td",null,t.stats&&t.stats.liveStats.pool.totalBlocks-t.stats.firstSeenBlockCount>0?(((new Date).getTime()-n)/(t.stats.liveStats.pool.totalBlocks-t.stats.firstSeenBlockCount)/1e3).toFixed(1):void 0))}),(0,u.h)("tr",null,(0,u.h)("td",null),(0,u.h)("td",null),(0,u.h)("td",null),(0,u.h)("td",null),(0,u.h)("td",null,a),(0,u.h)("td",null),(0,u.h)("td",null,i),(0,u.h)("td",null,r)))),"Average Seconds Per Block: ",r>0?(((new Date).getTime()-n)/r/1e3).toFixed(2):"waiting for new block",(0,u.h)("form",{action:"javascript:",onSubmit:s(w)},"Difficulty threshold for notification: ",(0,u.h)("input",{type:"number",value:l||0,onInput:s(S)}),(0,u.h)("button",null,"Set")),(0,u.h)(B,null),(0,u.h)(Q,null))};(0,u.render)(function(t){return function(e,o){var n=o.mutation,l=e.started,a=s(e,["started"]);return(0,u.h)("view",null,l?(0,u.h)(t,a):n(m)(n))}}(function(t,e){var o=t.pools;t.poolsStats,e.mutation;return(0,u.h)("pools",null,(0,u.h)(E,{pools:o}),(0,u.h)("donate",null,"Donate to: TRTLv1W1So77yGbVtrgf8G4epg5Fhq9hEZvpZC8ev86xRVLYsQQMHrxQG92QVjUU3bcE6ThGw9vSbEHBMejJpexE2sdrTC24ZXR"))}),{startTime:(new Date).getTime(),poolUrls:h.default,explorerUrls:c.default,difficultyThresholdInput:p,difficultyThreshold:p,heightData:{last:void 0,seen:[]}},document.body)},{"./explorers":2,"./pools":3,"preact-cycle":"preact-cycle"}],2:[function(t,e,o){"use strict";o.__esModule=!0,o.default=["https://blocks.turtle.link/daemon/json_rpc","https://turtle-coin.com/daemon/json_rpc"]},{}],3:[function(t,e,o){"use strict";o.__esModule=!0,o.default=["http://z-pool.com:8117/live_stats","https://trtl.mine2gether.com/api/live_stats","http://ny.minetrtl.us:8117/live_stats","http://slowandsteady.fun:8119/live_stats","http://hk.turtlepool.space:8117/live_stats","http://eu.turtlepool.space:8117/live_stats","https://us.turtlepool.space/api/live_stats","https://trtl.ninja/api/stats","http://165.227.80.178:8117/live_stats","https://trtlpool.ninja/api/live_stats","http://turtle-eu.atpool.party:8117/live_stats","http://118.31.18.78:8117/live_stats","http://159.65.77.77:8117/live_stats","http://159.65.63.178:8117/live_stats","http://207.154.195.78:8117/live_stats","http://188.166.26.62:8117/live_stats","http://165.227.43.9:8117/live_stats","https://turtle.mining.garden:8117/live_stats","https://auspool.turtleco.in/api/live_stats","https://turtlecoinpool.ml:8443/live_stats","https://api.trtl.flashpool.club/live_stats"]},{}]},{},[1]);