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
      return a.stats.pool && b.stats.pool && a.stats.pool.hashrate > b.stats.pool.hashrate ? -1 : 1;
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
    url,
    stats.pool ? (0, _preactCycle.h)(PoolStats, { stats: stats }) : undefined
  );
};

var PoolStats = function PoolStats(_ref4) {
  var stats = _ref4.stats;
  return (0, _preactCycle.h)(
    'pool-stats',
    null,
    (0, _preactCycle.h)(
      'div',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL3Bvb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTSxRQUFRLFNBQVIsS0FBUSxDQUFDLENBQUQsRUFBSSxRQUFKLEVBQWlCO0FBQzdCLElBQUUsT0FBRixHQUFZLElBQVo7O0FBRUEsSUFBRSxLQUFGLEdBQVUsRUFBRSxRQUFGLENBQVcsR0FBWCxDQUFlO0FBQUEsV0FBTyxZQUFZLEVBQUMsUUFBRCxFQUFNLE9BQU8sRUFBYixFQUFaLEVBQThCLFFBQTlCLENBQVA7QUFBQSxHQUFmLENBQVY7QUFDRCxDQUpEOztBQU1BLElBQU0sZUFBZSxTQUFmLFlBQWUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLEtBQVYsRUFBb0I7QUFDdkMsU0FBTyxNQUFQLENBQWMsS0FBSyxLQUFMLEdBQWEsS0FBSyxLQUFMLElBQWMsRUFBekMsRUFBNkMsS0FBN0M7QUFDRCxDQUZEOztBQUlBLElBQU0sUUFBUSxTQUFSLEtBQVE7QUFBQSxNQUFFLE9BQUYsUUFBRSxPQUFGO0FBQUEsTUFBVyxLQUFYLFFBQVcsS0FBWDtBQUFBLE1BQW9CLFFBQXBCLFNBQW9CLFFBQXBCO0FBQUEsU0FDWjtBQUFBO0FBQUE7QUFDRyxjQUFVLE9BQ0UsTUFERixDQUNTLEtBRFQsRUFFRSxJQUZGLENBRU8sVUFBQyxDQUFELEVBQUksQ0FBSjtBQUFBLGFBQVUsRUFBRSxLQUFGLENBQVEsSUFBUixJQUFnQixFQUFFLEtBQUYsQ0FBUSxJQUF4QixJQUFnQyxFQUFFLEtBQUYsQ0FBUSxJQUFSLENBQWEsUUFBYixHQUF3QixFQUFFLEtBQUYsQ0FBUSxJQUFSLENBQWEsUUFBckUsR0FBZ0YsQ0FBQyxDQUFqRixHQUFxRixDQUEvRjtBQUFBLEtBRlAsRUFHRSxHQUhGLENBR007QUFBQSxhQUFRLG9CQUFDLElBQUQsSUFBTSxNQUFNLElBQVosR0FBUjtBQUFBLEtBSE4sQ0FBVixHQUtVLFNBQVMsS0FBVCxFQUFnQixRQUFoQjtBQU5iLEdBRFk7QUFBQSxDQUFkOztBQVdBLElBQU0sT0FBTyxTQUFQLElBQU87QUFBQSx5QkFBRSxJQUFGO0FBQUEsTUFBUSxHQUFSLGNBQVEsR0FBUjtBQUFBLE1BQWEsS0FBYixjQUFhLEtBQWI7QUFBQSxTQUNYO0FBQUE7QUFBQTtBQUNHLE9BREg7QUFHRyxVQUFNLElBQU4sR0FBYSxvQkFBQyxTQUFELElBQVcsT0FBTyxLQUFsQixHQUFiLEdBQTJDO0FBSDlDLEdBRFc7QUFBQSxDQUFiOztBQVFBLElBQU0sWUFBWSxTQUFaLFNBQVk7QUFBQSxNQUFFLEtBQUYsU0FBRSxLQUFGO0FBQUEsU0FDaEI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBZ0IsWUFBTSxJQUFOLENBQVc7QUFBM0IsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQWMsWUFBTSxJQUFOLENBQVc7QUFBekIsS0FGRjtBQUdHLFVBQU0sSUFBTixDQUFXLE9BQVgsR0FBcUI7QUFBQTtBQUFBO0FBQUE7QUFBZSxZQUFNLElBQU4sQ0FBVztBQUExQixLQUFyQixHQUFnRTtBQUhuRSxHQURnQjtBQUFBLENBQWxCOztBQVFBLHlCQUNFLEtBREYsRUFDUyxFQUFDLHlCQUFELEVBRFQsRUFDcUIsU0FBUyxJQUQ5Qjs7QUFJQSxTQUFTLFdBQVQsQ0FBcUIsSUFBckIsRUFBMkIsUUFBM0IsRUFBcUM7QUFDbkMsUUFBTSxLQUFLLEdBQVgsRUFDRyxJQURILENBQ1Esb0JBQVk7QUFDaEIsYUFDRyxJQURILEdBRUcsSUFGSCxDQUVRO0FBQUEsYUFBUSxTQUFTLFlBQVQsRUFBdUIsSUFBdkIsRUFBNkIsSUFBN0IsQ0FBUjtBQUFBLEtBRlIsRUFHRyxLQUhILENBR1M7QUFBQSxhQUFTLFFBQVEsR0FBUixDQUFZLHFCQUFaLEVBQW1DLEtBQUssR0FBeEMsRUFBNkMsUUFBN0MsQ0FBVDtBQUFBLEtBSFQ7QUFJQSxlQUFXO0FBQUEsYUFBTSxZQUFZLElBQVosRUFBa0IsUUFBbEIsQ0FBTjtBQUFBLEtBQVgsRUFBOEMsS0FBOUM7QUFDRCxHQVBILEVBUUcsS0FSSCxDQVFTLGlCQUFTO0FBQ2QsWUFBUSxHQUFSLENBQVksZ0JBQVosRUFBOEIsS0FBSyxHQUFuQyxFQUF3QyxLQUF4QztBQUNBLGVBQVc7QUFBQSxhQUFNLFlBQVksSUFBWixFQUFrQixRQUFsQixDQUFOO0FBQUEsS0FBWCxFQUE4QyxLQUE5QztBQUNELEdBWEg7O0FBYUEsU0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FBUyxZQUFULENBQXNCLEdBQXRCLEVBQTJCLFdBQTNCLEVBQXdDO0FBQ3RDLFFBQU0sR0FBTixFQUFXLElBQVgsQ0FBZ0Isb0JBQVk7QUFDMUIsYUFBUyxJQUFULEdBQWdCLElBQWhCLENBQXFCO0FBQUEsYUFBUSxZQUFZLEdBQVosRUFBaUIsSUFBakIsQ0FBUjtBQUFBLEtBQXJCO0FBQ0QsR0FGRDtBQUdEOzs7OztBQ2xFRCxxQkFBZTtJQUNiLDZDQUE2QztJQUM3Qyx1Q0FBdUM7SUFDdkMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyx5Q0FBeUM7SUFDekMsbUNBQW1DO0lBQ25DLDBDQUEwQztDQUMzQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7IGgsIHJlbmRlciB9IGZyb20gJ3ByZWFjdC1jeWNsZSc7XG5cbmltcG9ydCBwb29sVXJscyBmcm9tICcuL3Bvb2xzJztcblxuY29uc3QgU1RBUlQgPSAoXywgbXV0YXRpb24pID0+IHtcbiAgXy5zdGFydGVkID0gdHJ1ZTtcblxuICBfLnBvb2xzID0gXy5wb29sVXJscy5tYXAodXJsID0+IG1vbml0b3JQb29sKHt1cmwsIHN0YXRzOiB7fX0sIG11dGF0aW9uKSk7XG59O1xuXG5jb25zdCBVUERBVEVfU1RBVFMgPSAoXywgcG9vbCwgc3RhdHMpID0+IHtcbiAgT2JqZWN0LmFzc2lnbihwb29sLnN0YXRzID0gcG9vbC5zdGF0cyB8fCB7fSwgc3RhdHMpO1xufTtcblxuY29uc3QgUG9vbHMgPSAoe3N0YXJ0ZWQsIHBvb2xzfSwge211dGF0aW9ufSkgPT4gKFxuICA8cG9vbHM+XG4gICAge3N0YXJ0ZWQgPyBPYmplY3RcbiAgICAgICAgICAgICAgICAudmFsdWVzKHBvb2xzKVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnN0YXRzLnBvb2wgJiYgYi5zdGF0cy5wb29sICYmIGEuc3RhdHMucG9vbC5oYXNocmF0ZSA+IGIuc3RhdHMucG9vbC5oYXNocmF0ZSA/IC0xIDogMSlcbiAgICAgICAgICAgICAgICAubWFwKHBvb2wgPT4gPFBvb2wgcG9vbD17cG9vbH0gLz4pXG5cbiAgICAgICAgICAgICA6IG11dGF0aW9uKFNUQVJUKShtdXRhdGlvbil9XG4gIDwvcG9vbHM+XG4pO1xuXG5jb25zdCBQb29sID0gKHtwb29sOnt1cmwsIHN0YXRzfX0pID0+IChcbiAgPHBvb2w+XG4gICAge3VybH1cblxuICAgIHtzdGF0cy5wb29sID8gPFBvb2xTdGF0cyBzdGF0cz17c3RhdHN9IC8+IDogdW5kZWZpbmVkfVxuICA8L3Bvb2w+XG4pO1xuXG5jb25zdCBQb29sU3RhdHMgPSAoe3N0YXRzfSkgPT4gKFxuICA8cG9vbC1zdGF0cz5cbiAgICA8ZGl2Pkhhc2hyYXRlOiB7c3RhdHMucG9vbC5oYXNocmF0ZX08L2Rpdj5cbiAgICA8ZGl2Pk1pbmVyczoge3N0YXRzLnBvb2wubWluZXJzfTwvZGl2PlxuICAgIHtzdGF0cy5wb29sLndvcmtlcnMgPyA8ZGl2PldvcmtlcnM6IHtzdGF0cy5wb29sLndvcmtlcnN9PC9kaXY+IDogdW5kZWZpbmVkfVxuICA8L3Bvb2wtc3RhdHM+XG4pO1xuXG5yZW5kZXIoXG4gIFBvb2xzLCB7cG9vbFVybHN9LCBkb2N1bWVudC5ib2R5XG4pO1xuXG5mdW5jdGlvbiBtb25pdG9yUG9vbChwb29sLCBtdXRhdGlvbikge1xuICBmZXRjaChwb29sLnVybClcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXNwb25zZVxuICAgICAgICAuanNvbigpXG4gICAgICAgIC50aGVuKGpzb24gPT4gbXV0YXRpb24oVVBEQVRFX1NUQVRTKShwb29sLCBqc29uKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdFcnJvciBkZWNvZGluZyBqc29uJywgcG9vbC51cmwsIHJlc3BvbnNlKSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IG1vbml0b3JQb29sKHBvb2wsIG11dGF0aW9uKSwgMTAwMDApO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmZXRjaGluZycsIHBvb2wudXJsLCBlcnJvcik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IG1vbml0b3JQb29sKHBvb2wsIG11dGF0aW9uKSwgMTAwMDApO1xuICAgIH0pO1xuXG4gIHJldHVybiBwb29sO1xufVxuXG5mdW5jdGlvbiBnZXRQb29sU3RhdHModXJsLCB1cGRhdGVTdGF0cykge1xuICBmZXRjaCh1cmwpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGpzb24gPT4gdXBkYXRlU3RhdHModXJsLCBqc29uKSk7XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IFtcbiAgJ2h0dHBzOi8vdHJ0bC5taW5lMmdldGhlci5jb20vYXBpL2xpdmVfc3RhdHMnLFxuICAnaHR0cDovL255Lm1pbmV0cnRsLnVzOjgxMTcvbGl2ZV9zdGF0cycsXG4gICdodHRwOi8vdXMudHVydGxlcG9vbC5zcGFjZTo4MTE3L2xpdmVfc3RhdHMnLFxuICAnaHR0cHM6Ly9hdXNwb29sLnR1cnRsZWNvLmluL2FwaS9saXZlX3N0YXRzJyxcbiAgJ2h0dHBzOi8vcG9vbC50dXJ0bGVjby5pbi9hcGkvbGl2ZV9zdGF0cycsXG4gICdodHRwOi8vei1wb29sLmNvbTo4MTE3L2xpdmVfc3RhdHMnLFxuICAnaHR0cDovL3Nsb3dhbmRzdGVhZHkuZnVuOjgxMTkvbGl2ZV9zdGF0cydcbl07Il19
