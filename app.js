!function t(A,e,o){function l(n,a){if(!e[n]){if(!A[n]){var r="function"==typeof require&&require;if(!a&&r)return r(n,!0);if(s)return s(n,!0);var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}var u=e[n]={exports:{}};A[n][0].call(u.exports,function(t){var e=A[n][1][t];return l(e||t)},u,u.exports,t,A,e,o)}return e[n].exports}for(var s="function"==typeof require&&require,n=0;n<o.length;n++)l(o[n]);return l}({1:[function(t,A,e){"use strict";function o(t,A){var e={};for(var o in t)A.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}function l(t,A){return fetch(t.url).then(function(e){e.json().then(function(e){return A(c)(t,e)}).catch(function(A){return console.log("Error decoding json",t.url,e,A)}),setTimeout(function(){return l(t,A)},1e4)}).catch(function(e){console.log("Error fetching",t.url,e),A(d)(t,e),setTimeout(function(){return l(t,A)},1e4)}),t}var s=t("preact-cycle"),n=function(t){return t&&t.__esModule?t:{default:t}}(t("./pools")),a=document.createElement("a"),r=new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="),i=5e8;if(localStorage)try{i=parseInt(localStorage.getItem("difficultyThreshold"),10)||i,console.log({difficultyThreshold:i})}catch(t){}var u=function(t,A){console.log("started"),t.started=!0,t.pools=t.poolUrls.map(function(t){return l({url:t},A)}),t.poolsStats={}},c=function(t,A,e){Object.assign(A.stats=A.stats||{firstSeenBlockCount:e.pool.totalBlocks},{liveStats:e}),delete A.error,A.updated=(new Date).getTime();var o=t.pools.reduce(function(t,A){if(A.stats&&A.stats.pool){var e=A.stats.pool,o=e.hashrate,l=e.miners;t.hashrate+=o||0,t.miners+=l||0,o>t.maxHashrate&&(t.maxHashrate=o),l>t.maxMiners&&(t.maxMiners=l)}return t},{hashrate:0,miners:0,maxHashrate:0,maxMiners:0});Object.assign(t.poolsStats,o),A.stats.liveStats.network&&t.difficultyThreshold>0&&A.stats.liveStats.network.difficulty<t.difficultyThreshold&&r.play()},h=function(t){t.difficultyThreshold=parseInt(t.difficultyThresholdInput),localStorage&&localStorage.setItem("difficultyThreshold",t.difficultyThreshold)},f=function(t,A){var e=A.target.value;t.difficultyThresholdInput=e},d=function(t,A,e){A.error=e},p=function(t,A){var e=t.pools,o=A.startTime,l=A.difficultyThresholdInput,n=A.mutation,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.values(e).filter(function(t){return t.stats}).reduce(function(t,A){return t+A.stats.liveStats.pool.hashrate||0},0),i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Object.values(e).filter(function(t){return t.stats}).reduce(function(t,A){return t+A.stats.liveStats.pool.totalBlocks||0},0),u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Object.values(e).filter(function(t){return t.stats}).reduce(function(t,A){return t+A.stats.liveStats.pool.totalBlocks-A.stats.firstSeenBlockCount},0);return(0,s.h)("network",null,(0,s.h)("table",null,(0,s.h)("thead",null,(0,s.h)("th",null,"pool"),(0,s.h)("th",null,"height"),(0,s.h)("th",null,"network difficulty"),(0,s.h)("th",null,"hashrate"),(0,s.h)("th",null,"% of known pools"),(0,s.h)("th",null,"blocks"),(0,s.h)("th",null,"new blocks"),(0,s.h)("th",null,"seconds per block")),(0,s.h)("tbody",null,Object.values(e).sort(function(t,A){return t.stats?A.stats?t.stats.liveStats.pool.hashrate>A.stats.liveStats.pool.hashrate?-1:1:-1:1}).map(function(t){return(0,s.h)("tr",{className:(new Date).getTime()-t.updated>9e3?"":"updated"},(0,s.h)("td",null,(0,s.h)("a",{href:(a.href=t.url,(a.protocol||"http")+"//"+a.hostname),target:"_new"},a.hostname)),(0,s.h)("td",null,t.stats?t.stats.liveStats.network.height:void 0),(0,s.h)("td",null,t.stats?t.stats.liveStats.network.difficulty:void 0),(0,s.h)("td",null,t.stats?t.stats.liveStats.pool.hashrate:void 0),(0,s.h)("td",null,t.stats?(t.stats.liveStats.pool.hashrate/r*100).toFixed(1):void 0),(0,s.h)("td",null,t.stats?t.stats.liveStats.pool.totalBlocks:void 0),(0,s.h)("td",null,t.stats?t.stats.liveStats.pool.totalBlocks-t.stats.firstSeenBlockCount:void 0),(0,s.h)("td",null,t.stats&&t.stats.liveStats.pool.totalBlocks-t.stats.firstSeenBlockCount>0?(((new Date).getTime()-o)/(t.stats.liveStats.pool.totalBlocks-t.stats.firstSeenBlockCount)/1e3).toFixed(1):void 0))}),(0,s.h)("tr",null,(0,s.h)("td",null),(0,s.h)("td",null),(0,s.h)("td",null),(0,s.h)("td",null,r),(0,s.h)("td",null),(0,s.h)("td",null,i),(0,s.h)("td",null,u)))),"Average Seconds Per Block: ",u>0?(((new Date).getTime()-o)/u/1e3).toFixed(2):"waiting for new block",(0,s.h)("form",{action:"javascript:",onSubmit:n(h)},"Difficulty threshold for notification: ",(0,s.h)("input",{type:"number",value:l||0,onInput:n(f)}),(0,s.h)("button",null,"Set")))};(0,s.render)(function(t){return function(A,e){var l=e.mutation,n=A.started,a=o(A,["started"]);return(0,s.h)("view",null,n?(0,s.h)(t,a):l(u)(l))}}(function(t,A){var e=t.pools;t.poolsStats,A.mutation;return(0,s.h)("pools",null,(0,s.h)(p,{pools:e}),(0,s.h)("donate",null,"Donate to: TRTLv1W1So77yGbVtrgf8G4epg5Fhq9hEZvpZC8ev86xRVLYsQQMHrxQG92QVjUU3bcE6ThGw9vSbEHBMejJpexE2sdrTC24ZXR"))}),{startTime:(new Date).getTime(),poolUrls:n.default,difficultyThresholdInput:i,difficultyThreshold:i},document.body)},{"./pools":2,"preact-cycle":"preact-cycle"}],2:[function(t,A,e){"use strict";e.__esModule=!0,e.default=["https://trtl.mine2gether.com/api/live_stats","http://ny.minetrtl.us:8117/live_stats","http://z-pool.com:8117/live_stats","http://slowandsteady.fun:8119/live_stats","http://hk.turtlepool.space:8117/live_stats","http://eu.turtlepool.space:8117/live_stats","https://us.turtlepool.space/api/live_stats","https://trtl.ninja/api/stats","http://159.89.44.20:8117/live_stats","https://trtlpool.ninja/api/live_stats","http://turtle-eu.atpool.party:8117/live_stats","http://118.31.18.78:8117/live_stats","http://159.65.77.77:8117/live_stats","http://159.65.63.178:8117/live_stats","http://207.154.195.78:8117/live_stats","https://turtle.mining.garden:8117/live_stats"]},{}]},{},[1]);