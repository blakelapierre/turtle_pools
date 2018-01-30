(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _preactCycle = require('preact-cycle');

var _pools = require('./pools');

var _pools2 = _interopRequireDefault(_pools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var START = function START(_, mutation) {
  _.started = true;

  _.pools = _.poolUrls.map(function (url) {
    return monitorPool({ url: url, stats: {} }, mutation);
  });
};

var UPDATE_STATS = function UPDATE_STATS(_, pool, stats) {
  Object.assign(pool.stats = pool.stats || {}, stats);
};

var Pools = function Pools(_ref, _ref2) {
  var started = _ref.started,
      pools = _ref.pools;
  var mutation = _ref2.mutation;
  return (0, _preactCycle.h)(
    'pools',
    null,
    started ? Object.values(pools).sort(function (a, b) {
      return !a.stats.pool ? 1 : !b.stats.pool ? -1 : a.stats.pool.hashrate > b.stats.pool.hashrate ? -1 : 1;
    }).map(function (pool) {
      return (0, _preactCycle.h)(Pool, { pool: pool });
    }) : mutation(START)(mutation)
  );
};

var Pool = function Pool(_ref3) {
  var _ref3$pool = _ref3.pool,
      url = _ref3$pool.url,
      stats = _ref3$pool.stats;
  return (0, _preactCycle.h)(
    'pool',
    null,
    stats.pool ? (0, _preactCycle.h)(PoolStats, { stats: stats }) : undefined,
    url
  );
};

var PoolStats = function PoolStats(_ref4) {
  var stats = _ref4.stats;
  return (0, _preactCycle.h)(
    'pool-stats',
    null,
    (0, _preactCycle.h)(
      'hashrate',
      null,
      'Hashrate: ',
      stats.pool.hashrate
    ),
    (0, _preactCycle.h)(
      'div',
      null,
      'Miners: ',
      stats.pool.miners
    ),
    stats.pool.workers ? (0, _preactCycle.h)(
      'div',
      null,
      'Workers: ',
      stats.pool.workers
    ) : undefined
  );
};

(0, _preactCycle.render)(Pools, { poolUrls: _pools2.default }, document.body);

function monitorPool(pool, mutation) {
  fetch(pool.url).then(function (response) {
    response.json().then(function (json) {
      return mutation(UPDATE_STATS)(pool, json);
    }).catch(function (error) {
      return console.log('Error decoding json', pool.url, response);
    });
    setTimeout(function () {
      return monitorPool(pool, mutation);
    }, 10000);
  }).catch(function (error) {
    console.log('Error fetching', pool.url, error);
    setTimeout(function () {
      return monitorPool(pool, mutation);
    }, 10000);
  });

  return pool;
}

function getPoolStats(url, updateStats) {
  fetch(url).then(function (response) {
    response.json().then(function (json) {
      return updateStats(url, json);
    });
  });
}

},{"./pools":2,"preact-cycle":"preact-cycle"}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports["default"] = [
    'https://trtl.mine2gether.com/api/live_stats',
    'http://ny.minetrtl.us:8117/live_stats',
    'http://us.turtlepool.space:8117/live_stats',
    'https://auspool.turtleco.in/api/live_stats',
    'https://pool.turtleco.in/api/live_stats',
    'http://z-pool.com:8117/live_stats',
    'http://slowandsteady.fun:8119/live_stats'
];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL3Bvb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTSxRQUFRLFNBQVIsS0FBUSxDQUFDLENBQUQsRUFBSSxRQUFKLEVBQWlCO0FBQzdCLElBQUUsT0FBRixHQUFZLElBQVo7O0FBRUEsSUFBRSxLQUFGLEdBQVUsRUFBRSxRQUFGLENBQVcsR0FBWCxDQUFlO0FBQUEsV0FBTyxZQUFZLEVBQUMsUUFBRCxFQUFNLE9BQU8sRUFBYixFQUFaLEVBQThCLFFBQTlCLENBQVA7QUFBQSxHQUFmLENBQVY7QUFDRCxDQUpEOztBQU1BLElBQU0sZUFBZSxTQUFmLFlBQWUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLEtBQVYsRUFBb0I7QUFDdkMsU0FBTyxNQUFQLENBQWMsS0FBSyxLQUFMLEdBQWEsS0FBSyxLQUFMLElBQWMsRUFBekMsRUFBNkMsS0FBN0M7QUFDRCxDQUZEOztBQUlBLElBQU0sUUFBUSxTQUFSLEtBQVE7QUFBQSxNQUFFLE9BQUYsUUFBRSxPQUFGO0FBQUEsTUFBVyxLQUFYLFFBQVcsS0FBWDtBQUFBLE1BQW9CLFFBQXBCLFNBQW9CLFFBQXBCO0FBQUEsU0FDWjtBQUFBO0FBQUE7QUFDRyxjQUFVLE9BQ0UsTUFERixDQUNTLEtBRFQsRUFFRSxJQUZGLENBRU8sVUFBQyxDQUFELEVBQUksQ0FBSjtBQUFBLGFBQVUsQ0FBQyxFQUFFLEtBQUYsQ0FBUSxJQUFULEdBQWdCLENBQWhCLEdBQXFCLENBQUMsRUFBRSxLQUFGLENBQVEsSUFBVCxHQUFnQixDQUFDLENBQWpCLEdBQXNCLEVBQUUsS0FBRixDQUFRLElBQVIsQ0FBYSxRQUFiLEdBQXdCLEVBQUUsS0FBRixDQUFRLElBQVIsQ0FBYSxRQUFyQyxHQUFnRCxDQUFDLENBQWpELEdBQXFELENBQTFHO0FBQUEsS0FGUCxFQUdFLEdBSEYsQ0FHTTtBQUFBLGFBQVEsb0JBQUMsSUFBRCxJQUFNLE1BQU0sSUFBWixHQUFSO0FBQUEsS0FITixDQUFWLEdBS1UsU0FBUyxLQUFULEVBQWdCLFFBQWhCO0FBTmIsR0FEWTtBQUFBLENBQWQ7O0FBV0EsSUFBTSxPQUFPLFNBQVAsSUFBTztBQUFBLHlCQUFFLElBQUY7QUFBQSxNQUFRLEdBQVIsY0FBUSxHQUFSO0FBQUEsTUFBYSxLQUFiLGNBQWEsS0FBYjtBQUFBLFNBQ1g7QUFBQTtBQUFBO0FBQ0csVUFBTSxJQUFOLEdBQWEsb0JBQUMsU0FBRCxJQUFXLE9BQU8sS0FBbEIsR0FBYixHQUEyQyxTQUQ5QztBQUVHO0FBRkgsR0FEVztBQUFBLENBQWI7O0FBT0EsSUFBTSxZQUFZLFNBQVosU0FBWTtBQUFBLE1BQUUsS0FBRixTQUFFLEtBQUY7QUFBQSxTQUNoQjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFxQixZQUFNLElBQU4sQ0FBVztBQUFoQyxLQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBYyxZQUFNLElBQU4sQ0FBVztBQUF6QixLQUZGO0FBR0csVUFBTSxJQUFOLENBQVcsT0FBWCxHQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFlLFlBQU0sSUFBTixDQUFXO0FBQTFCLEtBQXJCLEdBQWdFO0FBSG5FLEdBRGdCO0FBQUEsQ0FBbEI7O0FBUUEseUJBQ0UsS0FERixFQUNTLEVBQUMseUJBQUQsRUFEVCxFQUNxQixTQUFTLElBRDlCOztBQUlBLFNBQVMsV0FBVCxDQUFxQixJQUFyQixFQUEyQixRQUEzQixFQUFxQztBQUNuQyxRQUFNLEtBQUssR0FBWCxFQUNHLElBREgsQ0FDUSxvQkFBWTtBQUNoQixhQUNHLElBREgsR0FFRyxJQUZILENBRVE7QUFBQSxhQUFRLFNBQVMsWUFBVCxFQUF1QixJQUF2QixFQUE2QixJQUE3QixDQUFSO0FBQUEsS0FGUixFQUdHLEtBSEgsQ0FHUztBQUFBLGFBQVMsUUFBUSxHQUFSLENBQVkscUJBQVosRUFBbUMsS0FBSyxHQUF4QyxFQUE2QyxRQUE3QyxDQUFUO0FBQUEsS0FIVDtBQUlBLGVBQVc7QUFBQSxhQUFNLFlBQVksSUFBWixFQUFrQixRQUFsQixDQUFOO0FBQUEsS0FBWCxFQUE4QyxLQUE5QztBQUNELEdBUEgsRUFRRyxLQVJILENBUVMsaUJBQVM7QUFDZCxZQUFRLEdBQVIsQ0FBWSxnQkFBWixFQUE4QixLQUFLLEdBQW5DLEVBQXdDLEtBQXhDO0FBQ0EsZUFBVztBQUFBLGFBQU0sWUFBWSxJQUFaLEVBQWtCLFFBQWxCLENBQU47QUFBQSxLQUFYLEVBQThDLEtBQTlDO0FBQ0QsR0FYSDs7QUFhQSxTQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFTLFlBQVQsQ0FBc0IsR0FBdEIsRUFBMkIsV0FBM0IsRUFBd0M7QUFDdEMsUUFBTSxHQUFOLEVBQVcsSUFBWCxDQUFnQixvQkFBWTtBQUMxQixhQUFTLElBQVQsR0FBZ0IsSUFBaEIsQ0FBcUI7QUFBQSxhQUFRLFlBQVksR0FBWixFQUFpQixJQUFqQixDQUFSO0FBQUEsS0FBckI7QUFDRCxHQUZEO0FBR0Q7Ozs7O0FDakVELHFCQUFlO0lBQ2IsNkNBQTZDO0lBQzdDLHVDQUF1QztJQUN2Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLHlDQUF5QztJQUN6QyxtQ0FBbUM7SUFDbkMsMENBQTBDO0NBQzNDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgaCwgcmVuZGVyIH0gZnJvbSAncHJlYWN0LWN5Y2xlJztcblxuaW1wb3J0IHBvb2xVcmxzIGZyb20gJy4vcG9vbHMnO1xuXG5jb25zdCBTVEFSVCA9IChfLCBtdXRhdGlvbikgPT4ge1xuICBfLnN0YXJ0ZWQgPSB0cnVlO1xuXG4gIF8ucG9vbHMgPSBfLnBvb2xVcmxzLm1hcCh1cmwgPT4gbW9uaXRvclBvb2woe3VybCwgc3RhdHM6IHt9fSwgbXV0YXRpb24pKTtcbn07XG5cbmNvbnN0IFVQREFURV9TVEFUUyA9IChfLCBwb29sLCBzdGF0cykgPT4ge1xuICBPYmplY3QuYXNzaWduKHBvb2wuc3RhdHMgPSBwb29sLnN0YXRzIHx8IHt9LCBzdGF0cyk7XG59O1xuXG5jb25zdCBQb29scyA9ICh7c3RhcnRlZCwgcG9vbHN9LCB7bXV0YXRpb259KSA9PiAoXG4gIDxwb29scz5cbiAgICB7c3RhcnRlZCA/IE9iamVjdFxuICAgICAgICAgICAgICAgIC52YWx1ZXMocG9vbHMpXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+ICFhLnN0YXRzLnBvb2wgPyAxIDogKCFiLnN0YXRzLnBvb2wgPyAtMSA6IChhLnN0YXRzLnBvb2wuaGFzaHJhdGUgPiBiLnN0YXRzLnBvb2wuaGFzaHJhdGUgPyAtMSA6IDEpKSlcbiAgICAgICAgICAgICAgICAubWFwKHBvb2wgPT4gPFBvb2wgcG9vbD17cG9vbH0gLz4pXG5cbiAgICAgICAgICAgICA6IG11dGF0aW9uKFNUQVJUKShtdXRhdGlvbil9XG4gIDwvcG9vbHM+XG4pO1xuXG5jb25zdCBQb29sID0gKHtwb29sOnt1cmwsIHN0YXRzfX0pID0+IChcbiAgPHBvb2w+XG4gICAge3N0YXRzLnBvb2wgPyA8UG9vbFN0YXRzIHN0YXRzPXtzdGF0c30gLz4gOiB1bmRlZmluZWR9XG4gICAge3VybH1cbiAgPC9wb29sPlxuKTtcblxuY29uc3QgUG9vbFN0YXRzID0gKHtzdGF0c30pID0+IChcbiAgPHBvb2wtc3RhdHM+XG4gICAgPGhhc2hyYXRlPkhhc2hyYXRlOiB7c3RhdHMucG9vbC5oYXNocmF0ZX08L2hhc2hyYXRlPlxuICAgIDxkaXY+TWluZXJzOiB7c3RhdHMucG9vbC5taW5lcnN9PC9kaXY+XG4gICAge3N0YXRzLnBvb2wud29ya2VycyA/IDxkaXY+V29ya2Vyczoge3N0YXRzLnBvb2wud29ya2Vyc308L2Rpdj4gOiB1bmRlZmluZWR9XG4gIDwvcG9vbC1zdGF0cz5cbik7XG5cbnJlbmRlcihcbiAgUG9vbHMsIHtwb29sVXJsc30sIGRvY3VtZW50LmJvZHlcbik7XG5cbmZ1bmN0aW9uIG1vbml0b3JQb29sKHBvb2wsIG11dGF0aW9uKSB7XG4gIGZldGNoKHBvb2wudXJsKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJlc3BvbnNlXG4gICAgICAgIC5qc29uKClcbiAgICAgICAgLnRoZW4oanNvbiA9PiBtdXRhdGlvbihVUERBVEVfU1RBVFMpKHBvb2wsIGpzb24pKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ0Vycm9yIGRlY29kaW5nIGpzb24nLCBwb29sLnVybCwgcmVzcG9uc2UpKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9uaXRvclBvb2wocG9vbCwgbXV0YXRpb24pLCAxMDAwMCk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZldGNoaW5nJywgcG9vbC51cmwsIGVycm9yKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9uaXRvclBvb2wocG9vbCwgbXV0YXRpb24pLCAxMDAwMCk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHBvb2w7XG59XG5cbmZ1bmN0aW9uIGdldFBvb2xTdGF0cyh1cmwsIHVwZGF0ZVN0YXRzKSB7XG4gIGZldGNoKHVybCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgcmVzcG9uc2UuanNvbigpLnRoZW4oanNvbiA9PiB1cGRhdGVTdGF0cyh1cmwsIGpzb24pKTtcbiAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgW1xuICAnaHR0cHM6Ly90cnRsLm1pbmUyZ2V0aGVyLmNvbS9hcGkvbGl2ZV9zdGF0cycsXG4gICdodHRwOi8vbnkubWluZXRydGwudXM6ODExNy9saXZlX3N0YXRzJyxcbiAgJ2h0dHA6Ly91cy50dXJ0bGVwb29sLnNwYWNlOjgxMTcvbGl2ZV9zdGF0cycsXG4gICdodHRwczovL2F1c3Bvb2wudHVydGxlY28uaW4vYXBpL2xpdmVfc3RhdHMnLFxuICAnaHR0cHM6Ly9wb29sLnR1cnRsZWNvLmluL2FwaS9saXZlX3N0YXRzJyxcbiAgJ2h0dHA6Ly96LXBvb2wuY29tOjgxMTcvbGl2ZV9zdGF0cycsXG4gICdodHRwOi8vc2xvd2FuZHN0ZWFkeS5mdW46ODExOS9saXZlX3N0YXRzJ1xuXTsiXX0=
