// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"QvaY":[function(require,module,exports) {
document.addEventListener('DOMContentLoaded', function () {
  // Adding eventListener to the slider to update the pagevews and the cost per month
  document.querySelector('.slider input').addEventListener('input', fetch_value);
  //Update price when the discount toggle is changed
  document.getElementById('check').addEventListener('click', fetch_value);
});
function fetch_value() {
  //Get the slider elemeny to fetch value of views
  //Had to different functions but not worth it - just get slider here
  // const slider = e.target;
  var slider = document.querySelector('.slider input');
  // console.log(slider.value)
  //Keep the progrss bbar in sync with the slider
  var progress_bar = document.querySelector('.slider progress');
  progress_bar.value = slider.value;

  // console.log(slider_value);
  //Next two so it can update the innerhtml
  var slider_value = document.querySelector('.slider-value');
  var amount = document.querySelector('.pricing_cost');
  var cost = calc_cost(slider.value);
  var add_discount = document.getElementById('check').checked;
  // console.log(add_discount);
  if (add_discount) {
    var discount_price = cost * .76;
    cost = discount_price.toFixed(2);
  }
  amount.innerHTML = '$' + cost;
  slider_value.innerHTML = slider.value;
}
function calc_cost(pageviews) {
  if (pageviews <= 10) {
    return 8;
  } else if (pageviews <= 50) {
    return 12;
  } else if (pageviews <= 100) {
    return 16;
  } else if (pageviews < 1000) {
    return 24;
  } else if (pageviews >= 1000) {
    return 36;
  }
}
// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month
},{}]},{},["QvaY"], null)