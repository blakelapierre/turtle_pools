!function t(r,e,n){function o(s,a){if(!e[s]){if(!r[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(l)return l(s,!0);var i=new Error("Cannot find module '"+s+"'");throw i.code="MODULE_NOT_FOUND",i}var h=e[s]={exports:{}};r[s][0].call(h.exports,function(t){var e=r[s][1][t];return o(e||t)},h,h.exports,t,r,e,n)}return e[s].exports}for(var l="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,r,e){"use strict";function n(t,r){var e={};for(var n in t)r.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function o(t,r){return fetch(t.url).then(function(e){e.json().then(function(e){return r(i)(t,e)}).catch(function(r){return console.log("Error decoding json",t.url,e)}),setTimeout(function(){return o(t,r)},1e4)}).catch(function(e){console.log("Error fetching",t.url,e),r(h)(t,e),setTimeout(function(){return o(t,r)},1e4)}),t}var l=t("preact-cycle"),s=function(t){return t&&t.__esModule?t:{default:t}}(t("./pools")),a=document.createElement("a"),u=function(t,r){console.log("started"),t.started=!0,t.pools=t.poolUrls.map(function(t){return o({url:t,stats:{}},r)}),t.poolsStats={}},i=function(t,r,e){console.log(e),Object.assign(r.stats=r.stats||{},e),delete r.error;var n=t.pools.reduce(function(t,r){if(r.stats.pool){var e=r.stats.pool,n=e.hashrate,o=e.miners;t.hashrate+=n||0,t.miners+=o||0,n>t.maxHashrate&&(t.maxHashrate=n),o>t.maxMiners&&(t.maxMiners=o)}return t},{hashrate:0,miners:0,maxHashrate:0,maxMiners:0});Object.assign(t.poolsStats,n)},h=function(t,r,e){r.error=e},c=function(t){var r=t.pool,e=r.url,n=r.stats,o=r.error;return(0,l.h)("pool",null,(0,l.h)("a",{href:(a.href=e,""+a.protocol+a.hostname),target:"_new"},a.hostname),n.pool?(0,l.h)(p,{stats:n}):void 0,o?(0,l.h)(f,{error:o}):void 0)},p=function(t,r){var e=t.stats,n=r.poolsStats;return(0,l.h)("pool-stats",null,(0,l.h)("hashrate",null,"Hashrate: ",e.pool.hashrate),(0,l.h)("hashrate-bar",{style:{width:e.pool.hashrate/n.maxHashrate*100+"%"}}),(0,l.h)("miners",null,"Miners: ",e.pool.miners),(0,l.h)("miners-bar",{style:{width:e.pool.miners/n.maxMiners*100+"%"}}),(0,l.h)("config",null,(0,l.h)("div",null,"Fee: ",e.config.fee),(0,l.h)("div",null,"Min Payment: ",e.config.minPaymentThreshold),(0,l.h)("table",null,(0,l.h)("thead",null,(0,l.h)("tr",null,(0,l.h)("th",null,"Port"),(0,l.h)("th",null,"Difficulty"),(0,l.h)("th",null,"Description"))),(0,l.h)("tbody",null,e.config.ports.map(function(t){var r=t.port,e=t.difficulty,n=t.desc;return(0,l.h)("tr",null,(0,l.h)("td",null,r),(0,l.h)("td",null,e),(0,l.h)("td",null,n))})))))},f=function(t){var r=t.error;return(0,l.h)("pool-error",null,r.message)};(0,l.render)(function(t){return function(r,e){var o=e.mutation,s=r.started,a=n(r,["started"]);return(0,l.h)("view",null,s?(0,l.h)(t,a):o(u)(o))}}(function(t,r){var e=t.pools,n=t.poolsStats;r.mutation;return(0,l.h)("pools",null,(0,l.h)("global",null,(0,l.h)("h1",null,"All Known Pools"),(0,l.h)("hashrate",null,"Hashrate: ",n.hashrate),(0,l.h)("miners",null,"Miners: ",n.miners)),Object.values(e).sort(function(t,r){return t.stats.pool?r.stats.pool?t.stats.pool.hashrate>r.stats.pool.hashrate?-1:1:-1:1}).map(function(t){return(0,l.h)(c,{pool:t})}))}),{poolUrls:s.default},document.body)},{"./pools":2,"preact-cycle":"preact-cycle"}],2:[function(t,r,e){"use strict";e.__esModule=!0,e.default=["https://trtl.mine2gether.com/api/live_stats","http://ny.minetrtl.us:8117/live_stats","http://z-pool.com:8117/live_stats","http://slowandsteady.fun:8119/live_stats","http://hk.turtlepool.space:8117/live_stats","http://eu.turtlepool.space:8117/live_stats"]},{}]},{},[1]);