// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"GNgFO":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0f07460af396fcfb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"fYhV5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_GRAPH_DESIGN", ()=>o);
parcelHelpers.export(exports, "GraphEditor", ()=>i);
var t = {
    996: (t)=>{
        var e = function(t) {
            return function(t) {
                return !!t && "object" == typeof t;
            }(t) && !function(t) {
                var e = Object.prototype.toString.call(t);
                return "[object RegExp]" === e || "[object Date]" === e || function(t) {
                    return t.$$typeof === n;
                }(t);
            }(t);
        }, n = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
        function r(t, e) {
            var n;
            return !1 !== e.clone && e.isMergeableObject(t) ? s((n = t, Array.isArray(n) ? [] : {}), t, e) : t;
        }
        function o(t, e, n) {
            return t.concat(e).map(function(t) {
                return r(t, n);
            });
        }
        function i(t) {
            return Object.keys(t).concat(function(t) {
                return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.propertyIsEnumerable.call(t, e);
                }) : [];
            }(t));
        }
        function a(t, e) {
            try {
                return e in t;
            } catch (t) {
                return !1;
            }
        }
        function s(t, n, l) {
            (l = l || {}).arrayMerge = l.arrayMerge || o, l.isMergeableObject = l.isMergeableObject || e, l.cloneUnlessOtherwiseSpecified = r;
            var c = Array.isArray(n);
            return c === Array.isArray(t) ? c ? l.arrayMerge(t, n, l) : function(t, e, n) {
                var o = {};
                return n.isMergeableObject(t) && i(t).forEach(function(e) {
                    o[e] = r(t[e], n);
                }), i(e).forEach(function(i) {
                    (function(t, e) {
                        return a(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
                    })(t, i) || (a(t, i) && n.isMergeableObject(e[i]) ? o[i] = (function(t, e) {
                        if (!e.customMerge) return s;
                        var n = e.customMerge(t);
                        return "function" == typeof n ? n : s;
                    })(i, n)(t[i], e[i], n) : o[i] = r(e[i], n));
                }), o;
            }(t, n, l) : r(n, l);
        }
        s.all = function(t, e) {
            if (!Array.isArray(t)) throw new Error("first argument should be an array");
            return t.reduce(function(t, n) {
                return s(t, n, e);
            }, {});
        };
        var l = s;
        t.exports = l;
    },
    96: (t, e, n)=>{
        var r = "Expected a function", o = NaN, i = "[object Symbol]", a = /^\s+|\s+$/g, s = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, c = /^0o[0-7]+$/i, u = parseInt, d = "object" == typeof n.g && n.g && n.g.Object === Object && n.g, h = "object" == typeof self && self && self.Object === Object && self, f = d || h || Function("return this")(), p = Object.prototype.toString, v = Math.max, y = Math.min, m = function() {
            return f.Date.now();
        };
        function g(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e);
        }
        function _(t) {
            if ("number" == typeof t) return t;
            if (function(t) {
                return "symbol" == typeof t || function(t) {
                    return !!t && "object" == typeof t;
                }(t) && p.call(t) == i;
            }(t)) return o;
            if (g(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = g(e) ? e + "" : e;
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(a, "");
            var n = l.test(t);
            return n || c.test(t) ? u(t.slice(2), n ? 2 : 8) : s.test(t) ? o : +t;
        }
        t.exports = function(t, e, n) {
            var o = !0, i = !0;
            if ("function" != typeof t) throw new TypeError(r);
            return g(n) && (o = "leading" in n ? !!n.leading : o, i = "trailing" in n ? !!n.trailing : i), function(t, e, n) {
                var o, i, a, s, l, c, u = 0, d = !1, h = !1, f = !0;
                if ("function" != typeof t) throw new TypeError(r);
                function p(e) {
                    var n = o, r = i;
                    return o = i = void 0, u = e, s = t.apply(r, n);
                }
                function w(t) {
                    var n = t - c;
                    return void 0 === c || n >= e || n < 0 || h && t - u >= a;
                }
                function b() {
                    var t = m();
                    if (w(t)) return C(t);
                    l = setTimeout(b, function(t) {
                        var n = e - (t - c);
                        return h ? y(n, a - (t - u)) : n;
                    }(t));
                }
                function C(t) {
                    return l = void 0, f && o ? p(t) : (o = i = void 0, s);
                }
                function x() {
                    var t = m(), n = w(t);
                    if (o = arguments, i = this, c = t, n) {
                        if (void 0 === l) return function(t) {
                            return u = t, l = setTimeout(b, e), d ? p(t) : s;
                        }(c);
                        if (h) return l = setTimeout(b, e), p(c);
                    }
                    return void 0 === l && (l = setTimeout(b, e)), s;
                }
                return e = _(e) || 0, g(n) && (d = !!n.leading, a = (h = "maxWait" in n) ? v(_(n.maxWait) || 0, e) : a, f = "trailing" in n ? !!n.trailing : f), x.cancel = function() {
                    void 0 !== l && clearTimeout(l), u = 0, o = c = i = l = void 0;
                }, x.flush = function() {
                    return void 0 === l ? s : C(m());
                }, x;
            }(t, e, {
                leading: o,
                maxWait: e,
                trailing: i
            });
        };
    },
    254: (t, e, n)=>{
        var r = {
            "./icon_action.svg": 485,
            "./icon_action_area.svg": 492,
            "./icon_action_button.svg": 580,
            "./icon_add.svg": 490,
            "./icon_end_node.svg": 181,
            "./icon_end_of_video.svg": 71,
            "./icon_etc.svg": 161,
            "./icon_inaction.svg": 577,
            "./icon_legend_navigation.svg": 893,
            "./icon_location.svg": 978,
            "./icon_lock.svg": 628,
            "./icon_minus.svg": 246,
            "./icon_move.svg": 696,
            "./icon_node.svg": 872,
            "./icon_plus.svg": 52,
            "./icon_random.svg": 716,
            "./icon_start_node.svg": 916,
            "./icon_warning.svg": 123
        };
        function o(t) {
            var e = i(t);
            return n(e);
        }
        function i(t) {
            if (!n.o(r, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e;
            }
            return r[t];
        }
        o.keys = function() {
            return Object.keys(r);
        }, o.resolve = i, t.exports = o, o.id = 254;
    },
    521: (t)=>{
        t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTM1IDgxVjM3YTIgMiAwIDAgMSAyLTJoNjRhMiAyIDAgMCAxIDIgMnY0NGEyIDIgMCAwIDEtMiAySDM3YTIgMiAwIDAgMS0yLTJaIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNiIvPjxwYXRoIGQ9Ik0yNyA4OVY0NWEyIDIgMCAwIDEgMi0yaDY0YTIgMiAwIDAgMSAyIDJ2NDRhMiAyIDAgMCAxLTIgMkgyOWEyIDIgMCAwIDEtMi0yWiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMTEiLz4KPC9zdmc+Cg==";
    },
    485: (t)=>{
        t.exports = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M2.94559 5.07445L1.54456 6.40055L4.22088 8.93219C4.70945 9.3593 5.35248 9.15608 5.55006 8.93219L8.00186 6.54693L10.4537 4.16168L9.07059 2.81836L5.19063 6.52268C4.99911 6.70553 4.69825 6.70736 4.50452 6.52687L2.94559 5.07445Z" fill="currentColor"/>\n</svg>\n';
    },
    492: (t)=>{
        t.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 9C14.1642 9 14.5 9.33579 14.5 9.75V10.5C14.5 10.5 14.5 11.0055 14.4634 11.4531C14.4256 11.9163 14.3449 12.3347 14.1458 12.7255C13.8342 13.337 13.337 13.8342 12.7255 14.1458C12.3347 14.3449 11.9163 14.4256 11.4531 14.4634C11.0055 14.5 10.4999 14.5 10.4999 14.5L9.75 14.5C9.33579 14.5 9 14.1642 9 13.75C9 13.3358 9.33579 13 9.75 13L10.4685 13C10.4685 13 10.9517 12.9994 11.3309 12.9684C11.7014 12.9382 11.9004 12.8827 12.0445 12.8093C12.3738 12.6415 12.6415 12.3738 12.8093 12.0445C12.8827 11.9004 12.9382 11.7014 12.9684 11.3309C12.9994 10.9517 13 10.4686 13 10.4686V9.75C13 9.33579 13.3358 9 13.75 9Z" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M9 2.25C9 1.83579 9.33579 1.5 9.75 1.5H10.5C10.5 1.5 11.0054 1.50001 11.453 1.53657C11.9162 1.57442 12.3346 1.65516 12.7254 1.85425C13.3369 2.16584 13.8341 2.66303 14.1457 3.27455C14.3448 3.66529 14.4255 4.08369 14.4634 4.54695C14.4999 4.99452 14.4999 5.50002 14.4999 5.50002L14.5 6.25C14.5 6.66421 14.1642 7 13.75 7C13.3358 7 13 6.66421 13 6.25L12.9999 5.53143C12.9999 5.53143 12.9993 5.04836 12.9683 4.6691C12.9381 4.2986 12.8826 4.09958 12.8092 3.95554C12.6414 3.62626 12.3737 3.35854 12.0444 3.19076C11.9004 3.11737 11.7013 3.06186 11.3308 3.03159C10.9516 3.00061 10.4686 3 10.4686 3H9.75C9.33579 3 9 2.66421 9 2.25Z" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.75C7 14.1642 6.66421 14.5 6.25 14.5H5.5C5.5 14.5 4.99466 14.5 4.5471 14.4634C4.08383 14.4256 3.66544 14.3449 3.2747 14.1458C2.66317 13.8342 2.16598 13.337 1.85439 12.7255C1.6553 12.3347 1.57457 11.9163 1.53672 11.4531C1.50015 11.0055 1.50025 10.5 1.50025 10.5L1.5 9.75C1.5 9.33579 1.83579 9 2.25 9C2.66421 9 3 9.33579 3 9.75L3.00025 10.4686C3.00025 10.4686 3.00075 10.9517 3.03173 11.3309C3.06201 11.7014 3.11751 11.9004 3.1909 12.0445C3.35868 12.3738 3.6264 12.6415 3.95568 12.8093C4.09972 12.8827 4.29874 12.9382 4.66924 12.9684C5.0485 12.9994 5.53141 13 5.53141 13H6.25C6.66421 13 7 13.3358 7 13.75Z" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 7C1.83579 7 1.5 6.66421 1.5 6.25V5.5C1.5 5.5 1.49999 4.9945 1.53655 4.54693C1.5744 4.08367 1.65514 3.66527 1.85423 3.27453C2.16582 2.66301 2.66301 2.16582 3.27453 1.85423C3.66527 1.65514 4.08367 1.5744 4.54693 1.53655C4.9945 1.49999 5.50008 1.50002 5.50008 1.50002L6.25 1.5C6.66421 1.5 7 1.83579 7 2.25C7 2.66421 6.66421 3 6.25 3L5.53149 3.00002C5.53149 3.00002 5.04834 3.00058 4.66908 3.03157C4.29858 3.06184 4.09956 3.11735 3.95552 3.19074C3.62623 3.35852 3.35852 3.62623 3.19074 3.95552C3.11735 4.09956 3.06184 4.29858 3.03157 4.66908C3.00058 5.04834 3 5.53141 3 5.53141V6.25C3 6.66421 2.66421 7 2.25 7Z" fill="currentColor"/>\n<path d="M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z" fill="currentColor"/>\n</svg>\n';
    },
    580: (t)=>{
        t.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8 11.5C9.933 11.5 11.5 9.933 11.5 8C11.5 6.067 9.933 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5Z" fill="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8Z" fill="currentColor"/>\n</svg>\n';
    },
    490: (t)=>{
        t.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M7 9v4.334c0 .666.448 1 1 1 .553 0 1-.334 1-1V9h4.334c.666 0 1-.447 1-1 0-.552-.334-1-1-1H9V2.667c0-.667-.447-1-1-1-.552 0-1 .333-1 1V7H2.667c-.667 0-1 .448-1 1 0 .553.333 1 1 1H7Z" fill="currentColor"/>\n</svg>\n';
    },
    181: (t)=>{
        t.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.75C4 2.25 3.57655 2 3.25 2C2.83579 2 2.5 2.33579 2.5 2.75V14.25C2.5 14.6642 2.83579 15 3.25 15C3.66421 15 4 14.6642 4 14.25V10H12.2461C12.6603 10 12.9961 9.66421 12.9961 9.25V3.75C12.9961 3.33579 12.6603 3 12.2461 3H4V2.75ZM7.01562 8.5H9.01562V6.5H7.01562V8.5ZM7.01562 4.5V6.5H5.01562V4.5H7.01562ZM9.01562 4.5H11V6.5H9.01562V4.5Z" fill="currentColor"/>\n</svg>\n';
    },
    71: (t)=>{
        t.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.93736 6.59854L6.22562 4.56868C5.49267 4.16785 5.1262 3.96744 4.82659 4.00385C4.56514 4.03562 4.32901 4.17562 4.17569 4.38976C3.99998 4.63517 3.99998 5.05286 3.99998 5.88825V10.1232C3.99998 10.9598 3.99998 11.3781 4.17592 11.6236C4.32944 11.8378 4.56585 11.9777 4.82751 12.0093C5.12738 12.0454 5.49408 11.8442 6.22749 11.4418L9.93934 9.40504C10.4254 9.13835 10.7699 8.94933 11 8.77819V11.2498C11 11.664 11.3358 11.9998 11.75 11.9998C12.1642 11.9998 12.5 11.664 12.5 11.2498V4.74999C12.5 4.33577 12.1642 3.99999 11.75 3.99999C11.3358 3.99999 11 4.33577 11 4.74999V7.2247C10.7696 7.05367 10.4245 6.86496 9.93736 6.59854Z" fill="currentColor"/>\n</svg>\n';
    },
    161: (t)=>{
        t.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M9.333 8a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0ZM14 8a1.333 1.333 0 1 1-2.667 0A1.333 1.333 0 0 1 14 8ZM4.667 8A1.333 1.333 0 1 1 2 8a1.333 1.333 0 0 1 2.667 0Z" fill="currentColor"/>\n</svg>\n';
    },
    577: (t)=>{
        t.exports = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M4.26103 6.00006L2.53537 7.72572C2.34011 7.92098 2.34011 8.23756 2.53537 8.43283L3.56723 9.46469C3.76249 9.65995 4.07908 9.65995 4.27434 9.46469L6 7.73903L7.72566 9.46469C7.92092 9.65996 8.2375 9.65996 8.43277 9.46469L9.46463 8.43283C9.65989 8.23757 9.65989 7.92099 9.46463 7.72572L7.73897 6.00006L9.46461 4.27441C9.65987 4.07915 9.65987 3.76257 9.4646 3.5673L8.43274 2.53544C8.23748 2.34018 7.9209 2.34018 7.72563 2.53544L6 4.26108L4.27436 2.53544C4.0791 2.34018 3.76252 2.34018 3.56725 2.53544L2.53539 3.56731C2.34013 3.76257 2.34013 4.07915 2.53539 4.27441L4.26103 6.00006Z" fill="currentColor"/>\n</svg>\n';
    },
    893: (t)=>{
        t.exports = '<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<mask id="path-1-inside-1_2354_299569" fill="white">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071L11.2929 24.7071C10.9024 24.3166 10.9024 23.6834 11.2929 23.2929C11.6834 22.9024 12.3166 22.9024 12.7071 23.2929L14 24.5858L15.2929 23.2929C15.6834 22.9024 16.3166 22.9024 16.7071 23.2929C17.0976 23.6834 17.0976 24.3166 16.7071 24.7071L14.7071 26.7071Z"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1.29289 14.7071C0.902369 14.3166 0.902369 13.6834 1.29289 13.2929L3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929C5.09763 11.6834 5.09763 12.3166 4.70711 12.7071L3.41421 14L4.70711 15.2929C5.09763 15.6834 5.09763 16.3166 4.70711 16.7071C4.31658 17.0976 3.68342 17.0976 3.29289 16.7071L1.29289 14.7071Z"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L24.7071 16.7071C24.3166 17.0976 23.6834 17.0976 23.2929 16.7071C22.9024 16.3166 22.9024 15.6834 23.2929 15.2929L24.5858 14L23.2929 12.7071C22.9024 12.3166 22.9024 11.6834 23.2929 11.2929C23.6834 10.9024 24.3166 10.9024 24.7071 11.2929L26.7071 13.2929Z"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 1.29289C13.6834 0.902369 14.3166 0.902369 14.7071 1.29289L16.7071 3.29289C17.0976 3.68342 17.0976 4.31658 16.7071 4.70711C16.3166 5.09763 15.6834 5.09763 15.2929 4.70711L14 3.41421L12.7071 4.70711C12.3166 5.09763 11.6834 5.09763 11.2929 4.70711C10.9024 4.31658 10.9024 3.68342 11.2929 3.29289L13.2929 1.29289Z"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8624 6.99995C13.067 6.99952 12.4764 6.9992 11.9647 7.1363C10.5844 7.50617 9.50616 8.58436 9.1363 9.96472C8.9992 10.4764 8.99952 11.067 8.99995 11.8624L9 16C9 18.7614 11.2386 21 14 21C16.7614 21 19 18.7614 19 16L19 11.8624C19.0005 11.067 19.0008 10.4764 18.8637 9.96472C18.4938 8.58436 17.4156 7.50617 16.0353 7.1363C15.5236 6.9992 14.933 6.99952 14.1376 6.99995H13.8624ZM14 9V13C14 13.5523 13.5523 14 13 14H11V16C11 17.6569 12.3431 19 14 19C15.6569 19 17 17.6569 17 16V12C17 11.0056 16.9914 10.7046 16.9319 10.4824C16.7469 9.79218 16.2078 9.25308 15.5176 9.06815C15.2954 9.00859 14.9944 9 14 9Z"/>\n</mask>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071L11.2929 24.7071C10.9024 24.3166 10.9024 23.6834 11.2929 23.2929C11.6834 22.9024 12.3166 22.9024 12.7071 23.2929L14 24.5858L15.2929 23.2929C15.6834 22.9024 16.3166 22.9024 16.7071 23.2929C17.0976 23.6834 17.0976 24.3166 16.7071 24.7071L14.7071 26.7071Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1.29289 14.7071C0.902369 14.3166 0.902369 13.6834 1.29289 13.2929L3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929C5.09763 11.6834 5.09763 12.3166 4.70711 12.7071L3.41421 14L4.70711 15.2929C5.09763 15.6834 5.09763 16.3166 4.70711 16.7071C4.31658 17.0976 3.68342 17.0976 3.29289 16.7071L1.29289 14.7071Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L24.7071 16.7071C24.3166 17.0976 23.6834 17.0976 23.2929 16.7071C22.9024 16.3166 22.9024 15.6834 23.2929 15.2929L24.5858 14L23.2929 12.7071C22.9024 12.3166 22.9024 11.6834 23.2929 11.2929C23.6834 10.9024 24.3166 10.9024 24.7071 11.2929L26.7071 13.2929Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 1.29289C13.6834 0.902369 14.3166 0.902369 14.7071 1.29289L16.7071 3.29289C17.0976 3.68342 17.0976 4.31658 16.7071 4.70711C16.3166 5.09763 15.6834 5.09763 15.2929 4.70711L14 3.41421L12.7071 4.70711C12.3166 5.09763 11.6834 5.09763 11.2929 4.70711C10.9024 4.31658 10.9024 3.68342 11.2929 3.29289L13.2929 1.29289Z" fill="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8624 6.99995C13.067 6.99952 12.4764 6.9992 11.9647 7.1363C10.5844 7.50617 9.50616 8.58436 9.1363 9.96472C8.9992 10.4764 8.99952 11.067 8.99995 11.8624L9 16C9 18.7614 11.2386 21 14 21C16.7614 21 19 18.7614 19 16L19 11.8624C19.0005 11.067 19.0008 10.4764 18.8637 9.96472C18.4938 8.58436 17.4156 7.50617 16.0353 7.1363C15.5236 6.9992 14.933 6.99952 14.1376 6.99995H13.8624ZM14 9V13C14 13.5523 13.5523 14 13 14H11V16C11 17.6569 12.3431 19 14 19C15.6569 19 17 17.6569 17 16V12C17 11.0056 16.9914 10.7046 16.9319 10.4824C16.7469 9.79218 16.2078 9.25308 15.5176 9.06815C15.2954 9.00859 14.9944 9 14 9Z" fill="white"/>\n<path d="M13.2929 26.7071L12.5858 27.4142L13.2929 26.7071ZM14.7071 26.7071L15.4142 27.4142L14.7071 26.7071ZM11.2929 23.2929L12 24V24L11.2929 23.2929ZM12.7071 23.2929L13.4142 22.5858V22.5858L12.7071 23.2929ZM14 24.5858L13.2929 25.2929C13.4804 25.4804 13.7348 25.5858 14 25.5858C14.2652 25.5858 14.5196 25.4804 14.7071 25.2929L14 24.5858ZM15.2929 23.2929L14.5858 22.5858V22.5858L15.2929 23.2929ZM16.7071 23.2929L17.4142 22.5858L16.7071 23.2929ZM16.7071 24.7071L17.4142 25.4142L16.7071 24.7071ZM1.29289 13.2929L0.585786 12.5858H0.585786L1.29289 13.2929ZM1.29289 14.7071L0.585786 15.4142H0.585786L1.29289 14.7071ZM3.29289 11.2929L2.58579 10.5858L3.29289 11.2929ZM4.70711 11.2929L4 12H4L4.70711 11.2929ZM4.70711 12.7071L5.41421 13.4142L4.70711 12.7071ZM3.41421 14L2.70711 13.2929C2.31658 13.6834 2.31658 14.3166 2.70711 14.7071L3.41421 14ZM4.70711 15.2929L5.41421 14.5858L4.70711 15.2929ZM4.70711 16.7071L5.41421 17.4142L4.70711 16.7071ZM3.29289 16.7071L2.58579 17.4142H2.58579L3.29289 16.7071ZM26.7071 14.7071L27.4142 15.4142L26.7071 14.7071ZM26.7071 13.2929L27.4142 12.5858L26.7071 13.2929ZM23.2929 16.7071L24 16H24L23.2929 16.7071ZM23.2929 15.2929L22.5858 14.5858H22.5858L23.2929 15.2929ZM24.5858 14L25.2929 14.7071C25.4804 14.5196 25.5858 14.2652 25.5858 14C25.5858 13.7348 25.4804 13.4804 25.2929 13.2929L24.5858 14ZM23.2929 12.7071L22.5858 13.4142H22.5858L23.2929 12.7071ZM23.2929 11.2929L22.5858 10.5858L23.2929 11.2929ZM24.7071 11.2929L25.4142 10.5858L24.7071 11.2929ZM14.7071 1.29289L15.4142 0.585786V0.585786L14.7071 1.29289ZM13.2929 1.29289L12.5858 0.585786V0.585786L13.2929 1.29289ZM16.7071 3.29289L17.4142 2.58579L16.7071 3.29289ZM16.7071 4.70711L16 4V4L16.7071 4.70711ZM15.2929 4.70711L14.5858 5.41421L15.2929 4.70711ZM14 3.41421L14.7071 2.70711C14.3166 2.31658 13.6834 2.31658 13.2929 2.70711L14 3.41421ZM12.7071 4.70711L13.4142 5.41421L12.7071 4.70711ZM11.2929 4.70711L10.5858 5.41421L11.2929 4.70711ZM11.2929 3.29289L10.5858 2.58579V2.58579L11.2929 3.29289ZM13.8624 6.99995L13.8619 7.99995H13.8624V6.99995ZM11.9647 7.1363L11.7059 6.17037L11.9647 7.1363ZM9.1363 9.96472L8.17037 9.7059L9.1363 9.96472ZM8.99995 11.8624L9.99995 11.8624L9.99995 11.8619L8.99995 11.8624ZM9 16H10V16L9 16ZM19 16L18 16V16H19ZM19 11.8624L18 11.8619V11.8624L19 11.8624ZM18.8637 9.96472L19.8296 9.7059V9.7059L18.8637 9.96472ZM16.0353 7.1363L15.7765 8.10222L16.0353 7.1363ZM14.1376 6.99995V7.99995H14.1381L14.1376 6.99995ZM14 9V8H13V9H14ZM11 14V13H10V14H11ZM16.9319 10.4824L17.8978 10.2235V10.2235L16.9319 10.4824ZM15.5176 9.06815L15.7765 8.10222H15.7765L15.5176 9.06815ZM12.5858 27.4142C13.3668 28.1953 14.6332 28.1953 15.4142 27.4142L14 26L12.5858 27.4142ZM10.5858 25.4142L12.5858 27.4142L14 26L12 24L10.5858 25.4142ZM10.5858 22.5858C9.80474 23.3668 9.80474 24.6332 10.5858 25.4142L12 24L10.5858 22.5858ZM13.4142 22.5858C12.6332 21.8047 11.3668 21.8047 10.5858 22.5858L12 24V24L13.4142 22.5858ZM14.7071 23.8787L13.4142 22.5858L12 24L13.2929 25.2929L14.7071 23.8787ZM14.5858 22.5858L13.2929 23.8787L14.7071 25.2929L16 24L14.5858 22.5858ZM17.4142 22.5858C16.6332 21.8047 15.3668 21.8047 14.5858 22.5858L16 24L17.4142 22.5858ZM17.4142 25.4142C18.1953 24.6332 18.1953 23.3668 17.4142 22.5858L16 24L17.4142 25.4142ZM15.4142 27.4142L17.4142 25.4142L16 24L14 26L15.4142 27.4142ZM0.585786 12.5858C-0.195262 13.3668 -0.195262 14.6332 0.585786 15.4142L2 14L0.585786 12.5858ZM2.58579 10.5858L0.585786 12.5858L2 14L4 12L2.58579 10.5858ZM5.41421 10.5858C4.63316 9.80474 3.36684 9.80474 2.58579 10.5858L4 12L5.41421 10.5858ZM5.41421 13.4142C6.19526 12.6332 6.19526 11.3668 5.41421 10.5858L4 12H4L5.41421 13.4142ZM4.12132 14.7071L5.41421 13.4142L4 12L2.70711 13.2929L4.12132 14.7071ZM5.41421 14.5858L4.12132 13.2929L2.70711 14.7071L4 16L5.41421 14.5858ZM5.41421 17.4142C6.19526 16.6332 6.19526 15.3668 5.41421 14.5858L4 16L5.41421 17.4142ZM2.58579 17.4142C3.36684 18.1953 4.63316 18.1953 5.41421 17.4142L4 16L2.58579 17.4142ZM0.585786 15.4142L2.58579 17.4142L4 16L2 14L0.585786 15.4142ZM27.4142 15.4142C28.1953 14.6332 28.1953 13.3668 27.4142 12.5858L26 14L27.4142 15.4142ZM25.4142 17.4142L27.4142 15.4142L26 14L24 16L25.4142 17.4142ZM22.5858 17.4142C23.3668 18.1953 24.6332 18.1953 25.4142 17.4142L24 16L22.5858 17.4142ZM22.5858 14.5858C21.8047 15.3668 21.8047 16.6332 22.5858 17.4142L24 16H24L22.5858 14.5858ZM23.8787 13.2929L22.5858 14.5858L24 16L25.2929 14.7071L23.8787 13.2929ZM22.5858 13.4142L23.8787 14.7071L25.2929 13.2929L24 12L22.5858 13.4142ZM22.5858 10.5858C21.8047 11.3668 21.8047 12.6332 22.5858 13.4142L24 12L22.5858 10.5858ZM25.4142 10.5858C24.6332 9.80474 23.3668 9.80474 22.5858 10.5858L24 12L25.4142 10.5858ZM27.4142 12.5858L25.4142 10.5858L24 12L26 14L27.4142 12.5858ZM15.4142 0.585786C14.6332 -0.195262 13.3668 -0.195262 12.5858 0.585786L14 2L15.4142 0.585786ZM17.4142 2.58579L15.4142 0.585786L14 2L16 4L17.4142 2.58579ZM17.4142 5.41421C18.1953 4.63316 18.1953 3.36684 17.4142 2.58579L16 4L17.4142 5.41421ZM14.5858 5.41421C15.3668 6.19526 16.6332 6.19526 17.4142 5.41421L16 4V4L14.5858 5.41421ZM13.2929 4.12132L14.5858 5.41421L16 4L14.7071 2.70711L13.2929 4.12132ZM13.4142 5.41421L14.7071 4.12132L13.2929 2.70711L12 4L13.4142 5.41421ZM10.5858 5.41421C11.3668 6.19526 12.6332 6.19526 13.4142 5.41421L12 4L10.5858 5.41421ZM10.5858 2.58579C9.80474 3.36684 9.80474 4.63316 10.5858 5.41421L12 4L10.5858 2.58579ZM12.5858 0.585786L10.5858 2.58579L12 4L14 2L12.5858 0.585786ZM12.2235 8.10222C12.5804 8.00661 13.0225 7.9995 13.8619 7.99995L13.863 5.99995C13.1116 5.99954 12.3724 5.99179 11.7059 6.17037L12.2235 8.10222ZM10.1022 10.2235C10.3796 9.18827 11.1883 8.37962 12.2235 8.10222L11.7059 6.17037C9.98044 6.63271 8.63271 7.98044 8.17037 9.7059L10.1022 10.2235ZM9.99995 11.8619C9.9995 11.0225 10.0066 10.5804 10.1022 10.2235L8.17037 9.7059C7.99179 10.3724 7.99954 11.1116 7.99995 11.863L9.99995 11.8619ZM14 20C11.7909 20 10 18.2091 10 16H8C8 19.3137 10.6863 22 14 22V20ZM18 16C18 18.2091 16.2091 20 14 20V22C17.3137 22 20 19.3137 20 16H18ZM17.8978 10.2235C17.9934 10.5804 18.0005 11.0225 18 11.8619L20 11.863C20.0005 11.1116 20.0082 10.3724 19.8296 9.7059L17.8978 10.2235ZM15.7765 8.10222C16.8117 8.37962 17.6204 9.18827 17.8978 10.2235L19.8296 9.7059C19.3673 7.98044 18.0196 6.63271 16.2941 6.17037L15.7765 8.10222ZM14.1381 7.99995C14.9775 7.9995 15.4196 8.00661 15.7765 8.10222L16.2941 6.17037C15.6276 5.99179 14.8884 5.99954 14.137 5.99995L14.1381 7.99995ZM13 9V13H15V9H13ZM13 13V15C14.1046 15 15 14.1046 15 13H13ZM13 13H11V15H13V13ZM10 14V16H12V14H10ZM10 16C10 18.2091 11.7909 20 14 20V18C12.8954 18 12 17.1046 12 16H10ZM14 20C16.2091 20 18 18.2091 18 16H16C16 17.1046 15.1046 18 14 18V20ZM18 16V12H16V16H18ZM18 12C18 11.0776 18.0004 10.6065 17.8978 10.2235L15.9659 10.7412C15.9677 10.7478 15.9807 10.7937 15.9892 10.9938C15.9977 11.1963 16 11.4985 16 12H18ZM17.8978 10.2235C17.6204 9.18827 16.8117 8.37962 15.7765 8.10222L15.2588 10.0341C15.6039 10.1265 15.8735 10.3961 15.9659 10.7412L17.8978 10.2235ZM15.7765 8.10222C15.3935 7.9996 14.9224 8 14 8V10C14.5015 10 14.8037 10.0023 15.0062 10.0109C15.2063 10.0193 15.2522 10.0323 15.2588 10.0341L15.7765 8.10222ZM13.8624 7.99995H14.1376V5.99995H13.8624V7.99995ZM10 16L9.99995 11.8624L7.99995 11.8624L8 16L10 16ZM18 11.8624L18 16L20 16L20 11.8624L18 11.8624Z" fill="white" mask="url(#path-1-inside-1_2354_299569)"/>\n</svg>\n';
    },
    978: (t)=>{
        t.exports = '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M6 12C6 16.0237 8.93828 21.8231 14.8148 29.3979L14.8148 29.3979C15.3226 30.0525 16.2649 30.1714 16.9194 29.6637C17.0188 29.5866 17.1081 29.4973 17.1852 29.3979C23.0617 21.8231 26 16.0237 26 12C26 6.47143 21.5286 2 16 2C10.4714 2 6 6.47143 6 12ZM12.5014 12.0015C12.5014 10.0695 14.0694 8.50148 16.0014 8.50148C17.9334 8.50148 19.5014 10.0695 19.5014 12.0015C19.5014 13.9335 17.9334 15.5015 16.0014 15.5015C14.0694 15.5015 12.5014 13.9335 12.5014 12.0015Z" fill="currentColor"/>\n</svg>\n';
    },
    628: (t)=>{
        t.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14 10V11C14 12.4001 14 13.1002 13.7275 13.635C13.4878 14.1054 13.1054 14.4878 12.635 14.7275C12.1002 15 11.4001 15 10 15H6C4.59987 15 3.8998 15 3.36502 14.7275C2.89462 14.4878 2.51217 14.1054 2.27248 13.635C2 13.1002 2 12.4001 2 11V10C2 8.59987 2 7.8998 2.27248 7.36502C2.51217 6.89462 2.89462 6.51217 3.36502 6.27248C3.54965 6.17841 3.75397 6.11682 4 6.07649V5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V6.07649C12.246 6.11682 12.4504 6.17841 12.635 6.27248C13.1054 6.51217 13.4878 6.89462 13.7275 7.36502C14 7.8998 14 8.59987 14 10ZM10 5V6H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z" fill="currentColor"/>\n</svg>\n';
    },
    246: (t)=>{
        t.exports = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.96875 6.00013C1.96875 5.64868 2.25366 5.36377 2.60511 5.36377H9.39299C9.74445 5.36377 10.0294 5.64868 10.0294 6.00013C10.0294 6.35159 9.74445 6.6365 9.39299 6.6365H2.60511C2.25366 6.6365 1.96875 6.35159 1.96875 6.00013Z" fill="currentColor"/>\n</svg>\n';
    },
    696: (t)=>{
        t.exports = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="m10 3.5.53-.53a.75.75 0 0 0-1.06 0l.53.53Zm0 14-.53.53a.75.75 0 0 0 1.06 0L10 17.5Zm7-7 .53.53a.75.75 0 0 0 0-1.06l-.53.53Zm-14 0-.53-.53a.75.75 0 0 0 0 1.06L3 10.5Zm4.37-5.43a.75.75 0 0 0 1.06 1.06L7.37 5.07Zm4.2 1.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm3.86 1.74a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 4.2a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM5.63 8.93a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-1.06 4.2a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm8.06 2.8a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-4.2-1.06a.75.75 0 0 0-1.06 1.06l1.06-1.06ZM9.25 3.5v7h1.5v-7h-1.5Zm0 7v7h1.5v-7h-1.5Zm.75.75h7v-1.5h-7v1.5Zm0-1.5H3v1.5h7v-1.5Zm-.53-6.78-2.1 2.1 1.06 1.06 2.1-2.1-1.06-1.06Zm0 1.06 2.1 2.1 1.06-1.06-2.1-2.1-1.06 1.06Zm8.06 5.94-2.1-2.1-1.06 1.06 2.1 2.1 1.06-1.06Zm-1.06 0-2.1 2.1 1.06 1.06 2.1-2.1-1.06-1.06ZM3.53 11.03l2.1-2.1-1.06-1.06-2.1 2.1 1.06 1.06Zm-1.06 0 2.1 2.1 1.06-1.06-2.1-2.1-1.06 1.06Zm8.06 7 2.1-2.1-1.06-1.06-2.1 2.1 1.06 1.06Zm0-1.06-2.1-2.1-1.06 1.06 2.1 2.1 1.06-1.06Z" fill="currentColor"/>\n</svg>\n';
    },
    872: (t)=>{
        t.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M4.6 12.5001C3.71634 12.5001 3 11.7541 3 10.8338V9.00003L1.5 9.00003C0.947716 9.00003 0.5 8.55231 0.5 8.00003C0.5 7.44774 0.947715 7.00003 1.5 7.00003H3V5.1663C3 4.24603 3.71634 3.5 4.6 3.5H11.4C12.2837 3.5 13 4.24603 13 5.1663V7.00003H14.5C15.0523 7.00003 15.5 7.44774 15.5 8.00003C15.5 8.55231 15.0523 9.00003 14.5 9.00003H13V10.8338C13 11.7541 12.2837 12.5001 11.4 12.5001H4.6Z" fill="currentColor"/>\n</svg>\n';
    },
    52: (t)=>{
        t.exports = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M6.75 1.75105C6.75 1.33684 6.41421 1.00105 6 1.00105C5.58579 1.00105 5.25 1.33684 5.25 1.75105V5.25105H1.75C1.33579 5.25105 1 5.58684 1 6.00105C1 6.41527 1.33579 6.75105 1.75 6.75105H5.25V10.2511C5.25 10.6653 5.58579 11.0011 6 11.0011C6.41421 11.0011 6.75 10.6653 6.75 10.2511V6.75105H10.25C10.6642 6.75105 11 6.41527 11 6.00105C11 5.58684 10.6642 5.25105 10.25 5.25105H6.75V1.75105Z" fill="currentColor"/>\n</svg>\n';
    },
    716: (t)=>{
        t.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12.713 2.55708C12.9932 2.441 13.3158 2.50516 13.5303 2.71966L14.7803 3.96966C15.0732 4.26255 15.0732 4.73743 14.7803 5.03032L13.5303 6.28032C13.3158 6.49482 12.9932 6.55899 12.713 6.4429C12.4327 6.32682 12.25 6.05334 12.25 5.74999V5.25155C11.3851 5.27952 10.6303 5.68239 9.85664 6.36406C9.54585 6.6379 9.07192 6.60795 8.79809 6.29717C8.52425 5.98639 8.5542 5.51246 8.86498 5.23862C9.78862 4.42478 10.8814 3.78015 12.25 3.75101V3.24999C12.25 2.94664 12.4327 2.67317 12.713 2.55708ZM1 4.49999C1 4.08577 1.33579 3.74999 1.75 3.74999C4.59632 3.74999 6.40513 5.8005 7.87948 7.51019C7.93447 7.57396 7.98901 7.63731 8.04315 7.70019C8.74976 8.52099 9.38845 9.26288 10.0789 9.82432C10.7759 10.391 11.4671 10.7231 12.25 10.7484V10.25C12.25 9.94664 12.4327 9.67317 12.713 9.55708C12.9932 9.441 13.3158 9.50516 13.5303 9.71966L14.7803 10.9697C15.0732 11.2626 15.0732 11.7374 14.7803 12.0303L13.5303 13.2803C13.3158 13.4948 12.9932 13.559 12.713 13.4429C12.4327 13.3268 12.25 13.0533 12.25 12.75V12.249C11.0124 12.2226 9.99878 11.6924 9.13262 10.9881C8.48049 10.4579 7.8782 9.79958 7.30755 9.14373C5.93869 10.6759 4.24592 12.25 1.75 12.25C1.33579 12.25 1 11.9142 1 11.5C1 11.0858 1.33579 10.75 1.75 10.75C3.61653 10.75 4.93343 9.56285 6.31646 8.00027C4.93633 6.44253 3.6229 5.24999 1.75 5.24999C1.33579 5.24999 1 4.9142 1 4.49999Z" fill="currentColor"/>\n</svg>\n';
    },
    916: (t)=>{
        t.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 2C5.16421 2 5.5 2.33579 5.5 2.75V3.02132L12.0658 6.06975C12.3306 6.19268 12.5 6.45808 12.5 6.75C12.5 7.04193 12.3306 7.30733 12.0658 7.43026L5.5 10.4787V14.2461C5.5 14.6603 5.16421 14.9961 4.75 14.9961C4.33579 14.9961 4 14.6603 4 14.2461V2.75C4 2.33579 4.33579 2 4.75 2Z" fill="currentColor"/>\n</svg>\n';
    },
    123: (t)=>{
        t.exports = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M19.81 12.84a.608.608 0 0 0-.45-.194h-2.24v-3l1.73-1.765a.634.634 0 0 0 .19-.46.634.634 0 0 0-.19-.459.609.609 0 0 0-.45-.194.609.609 0 0 0-.45.194l-1.73 1.766H7.78L6.05 6.962a.609.609 0 0 0-.45-.194.61.61 0 0 0-.45.194.634.634 0 0 0-.19.46c0 .176.063.33.19.459l1.73 1.765v3H4.64a.609.609 0 0 0-.45.194.634.634 0 0 0-.19.459c0 .177.063.33.19.46.127.128.277.193.45.193h2.24c0 1.088.193 2.02.58 2.796l-2.02 2.316a.659.659 0 0 0-.155.475.66.66 0 0 0 .205.454c.127.109.27.163.43.163a.633.633 0 0 0 .48-.214l1.83-2.112.15.143c.093.088.238.199.435.331.197.133.417.265.66.398.243.133.533.245.87.337a3.84 3.84 0 0 0 1.015.138v-9.143h1.28v9.143c.32 0 .643-.044.97-.133.326-.088.6-.187.82-.296a6.31 6.31 0 0 0 .65-.372c.213-.14.353-.236.42-.291.066-.055.116-.099.15-.133l1.98 2.01c.12.13.27.194.45.194a.59.59 0 0 0 .45-.194.636.636 0 0 0 .19-.459.635.635 0 0 0-.19-.459l-2.08-2.133c.447-.81.67-1.796.67-2.959h2.24a.608.608 0 0 0 .45-.194.634.634 0 0 0 .19-.459.633.633 0 0 0-.19-.46Z" fill="currentColor"/><path d="M14.265 5.11A3.054 3.054 0 0 0 12 4.156c-.887 0-1.642.318-2.265.954-.623.636-.935 1.407-.935 2.312h6.4c0-.905-.312-1.676-.935-2.312Z" fill="currentColor"/>\n</svg>\n';
    }
}, e = {};
function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = e[r] = {
        exports: {}
    };
    return t[r](i, i.exports, n), i.exports;
}
n.n = (t)=>{
    var e = t && t.__esModule ? ()=>t.default : ()=>t;
    return n.d(e, {
        a: e
    }), e;
}, n.d = (t, e)=>{
    for(var r in e)n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
        enumerable: !0,
        get: e[r]
    });
}, n.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
        return this || new Function("return this")();
    } catch (t) {
        if ("object" == typeof window) return window;
    }
}(), n.o = (t, e)=>Object.prototype.hasOwnProperty.call(t, e);
var r = {};
(()=>{
    n.d(r, {
        Q: ()=>hi,
        $: ()=>xl
    });
    var t = {
        enableSkeletonsOnNodesCount: 300,
        renderSkeletonOnZoomLessThan: .2,
        minSectorWidthInPixels: 500,
        sectorsCount: 200,
        sectorsVirtualBorderWidth: .2,
        renderAfterZoomThrottleInMs: 10
    }, e = {
        node: {
            width: 186,
            defaultHeight: 115,
            heightWithPreview: 151,
            heightWithPreviewEov: 196,
            heightFull: 237,
            borderRadius: 12,
            headerHeight: 36,
            componentAddActionHeight: 40,
            componentPreviewHeight: 114,
            componentControlHeight: 44,
            componentOrderRadius: 12,
            defaultConnectorPositionY: 57,
            connectorPositionY: 93,
            connectorPositionDiff: 20,
            control: {
                connectorRadius: 8,
                actionLinkY: 12,
                inactionLinkY: 32,
                lineLength: 22
            },
            previewPlaceholder: {
                textColor: "#76787A",
                borderColor: "#5D5F61",
                backgroundColor: "#19191A"
            }
        },
        tool: {
            menuItemWidth: 210,
            menuItemHeight: 32,
            menuItemTooltipOffset: 214,
            borderRadius: 4,
            strokeColor: "rgba(255, 255, 255, 0.11)",
            textColor: "#F2F5FF",
            eov: {
                size: 22,
                radius: 10
            },
            copyPasteDx: 50,
            copyPasteDy: 50
        },
        strokeSize: 1,
        iconSize: 16,
        controlConnectorIconSize: 12,
        color: {
            percentDiff: 20,
            error: "#E94848",
            activeError: "#CC0E0E",
            text: "#FFFFFF",
            stroke: "#FFFFFF",
            disabledStroke: "#86898F",
            tooltipBackground: "#282A2E",
            elementBackground: "#232324",
            elementBackgroundAlt: "#1A1D20",
            elementBackgroundHover: "#363738",
            elementBackgroundHover2: "#505358",
            elementStroke: "#141414",
            nodeStroke: "#232324",
            shadowNodeFill: "rgba(255, 255, 255, 0.11)",
            shadowNodeStroke: "rgba(255, 255, 255, 0.48)",
            connectorStroke: "#797B82"
        },
        prefix: {
            nodeEOV: "eov_",
            nodeBorder: "border_",
            nodeFlipConnector: "flip_connector_",
            nodeActionConnector: "action_connector_",
            nodeInactionConnector: "inaction_connector_",
            nodeError: "error_"
        },
        grid: {
            size: 18.6,
            steps: 10
        }
    }, o = {
        node_video_error: "No video",
        node_video_choose: "Choose video",
        node_video_change: "Change video",
        node_open_editor: "Open editor",
        node_eov: "Flip to",
        node_add_control: "Add action",
        node_not_visited: "Not visited",
        node_watch_again_from: "Watch again",
        tool_menu_item_rename: "Rename",
        tool_menu_item_copy: "Copy",
        tool_menu_item_paste: "Paste",
        tool_menu_item_delete: "Delete",
        tool_menu_item_add_node: "Add node",
        tool_menu_item_as_start_node: "Set as Start node",
        tool_menu_item_as_end_node: "Set as End node",
        tool_menu_items_as_end_node: "Set as End nodes",
        tool_menu_item_as_node: "Set as node",
        tool_menu_items_as_node: "Set as nodes",
        tool_menu_item_start_preview: "Preview from this node",
        tool_menu_item_next_node: "Next node",
        tool_menu_item_random: "Random",
        tool_menu_item_random_tooltip: 'Add action to use "Random"',
        tool_menu_item_control_area: "Area",
        tool_menu_item_control_button: "Button",
        tool_shadow_node_text: "Click on the left mouse \nbutton to create a node. \nClick on the right \nbutton to cancel \nthe action.",
        tool_shadow_node_link_text: "New node",
        tool_shadow_node_error: "The area must\nnot be in contact\nwith other nodes",
        popup_error_title: "Error",
        popup_error_message_1: "Manifest is broken",
        popup_error_message_2: "Manifest media metadata should be parsed",
        new_chapter_label: "[Untitled]",
        copied_chapter_suffix: "Copy",
        new_text_label: "Text",
        new_text_content: "Enter text",
        new_button_label: "Button",
        new_area_label: "Area",
        tooltip_inaction_not_available: 'Not available because the <br/>"Waiting for interaction" option is enabled',
        copy_chapter: "Node copied",
        copy_multiple_chapters: "Multiple nodes copied",
        remove_initial_chapter: "Start node cannot be removed",
        graph_node_start: "Start",
        graph_node_end: "End",
        graph_location: "Current position",
        navigation_controls: "Zoom"
    }, i = {
        node_video_error: "\u041D\u0435\u0442 \u0432\u0438\u0434\u0435\u043E",
        node_video_choose: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0438\u0434\u0435\u043E",
        node_video_change: "\u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u0438\u0434\u0435\u043E",
        node_open_editor: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440",
        node_eov: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A",
        node_add_control: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435",
        node_not_visited: "\u041D\u0435 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u043E",
        node_watch_again_from: "\u041F\u0435\u0440\u0435\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C",
        tool_menu_item_rename: "\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C",
        tool_menu_item_copy: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
        tool_menu_item_paste: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C",
        tool_menu_item_delete: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
        tool_menu_item_add_node: "\u041D\u043E\u0432\u044B\u0439 \u043D\u043E\u0434",
        tool_menu_item_as_start_node: "\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043D\u043E\u0434 \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u044B\u043C",
        tool_menu_item_as_end_node: "\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043D\u043E\u0434 \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u043C",
        tool_menu_items_as_end_node: "\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043D\u043E\u0434\u044B \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u043C\u0438",
        tool_menu_item_as_node: "\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043D\u043E\u0434 \u043E\u0431\u044B\u0447\u043D\u044B\u043C",
        tool_menu_items_as_node: "\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043D\u043E\u0434\u044B \u043E\u0431\u044B\u0447\u043D\u044B\u043C\u0438",
        tool_menu_item_start_preview: "\u041D\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440",
        tool_menu_item_next_node: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043D\u043E\u0434",
        tool_menu_item_random: "\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0439",
        tool_menu_item_random_tooltip: '\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0447\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C "\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0439"',
        tool_menu_item_control_area: "\u041E\u0431\u043B\u0430\u0441\u0442\u044C",
        tool_menu_item_control_button: "\u041A\u043D\u043E\u043F\u043A\u0430",
        tool_shadow_node_text: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043B\u0435\u0432\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443 \n\u043C\u044B\u0448\u0438, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0434. \n\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043F\u0440\u0430\u0432\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443 \n\u043C\u044B\u0448\u0438, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \n\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435.",
        tool_shadow_node_link_text: "\u041D\u043E\u0432\u044B\u0439 \u043D\u043E\u0434",
        tool_shadow_node_error: "\u041E\u0431\u043B\u0430\u0441\u0442\u044C \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u0430\n\u0437\u0430\u0434\u0435\u0432\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u043D\u043E\u0434\u044B",
        popup_error_title: "\u041E\u0448\u0438\u0431\u043A\u0430",
        popup_error_message_1: "\u041C\u0430\u043D\u0438\u0444\u0435\u0441\u0442 \u0441\u043B\u043E\u043C\u0430\u043D",
        popup_error_message_2: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u043F\u0430\u0440\u0441\u0438\u043D\u0433 \u043F\u043E\u043B\u044F 'metadata.media'",
        new_chapter_label: "[\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F]",
        copied_chapter_suffix: "\u041A\u043E\u043F\u0438\u044F",
        new_text_label: "\u0422\u0435\u043A\u0441\u0442",
        new_text_content: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442",
        new_button_label: "\u041A\u043D\u043E\u043F\u043A\u0430",
        new_area_label: "\u041E\u0431\u043B\u0430\u0441\u0442\u044C",
        tooltip_inaction_not_available: '\u041D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E, \u0442\u0430\u043A \u043A\u0430\u043A \u0432\u043A\u043B\u044E\u0447\u0435\u043D \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 <br/>"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"',
        copy_chapter: "\u041D\u043E\u0434 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D",
        copy_multiple_chapters: "\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u043E\u0434 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u044B",
        remove_initial_chapter: "\u0421\u0442\u0430\u0440\u0442\u043E\u0432\u044B\u0439 \u043D\u043E\u0434 \u043D\u0435\u043B\u044C\u0437\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C",
        graph_node_start: "\u041D\u0430\u0447\u0430\u043B\u043E",
        graph_node_end: "\u041A\u043E\u043D\u0435\u0446",
        graph_location: "\u041C\u043E\u044F \u043F\u043E\u0437\u0438\u0446\u0438\u044F",
        navigation_controls: "\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435"
    }, a = function() {
        return a = Object.assign || function(t) {
            for(var e, n = 1, r = arguments.length; n < r; n++)for(var o in e = arguments[n])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
        }, a.apply(this, arguments);
    };
    const s = new function() {
        var n = this;
        this.init = function(t) {
            t && (n._mode = t.mode || n._mode, t.lang && (n.translation = "en" === t.lang ? o : i), t.translation && (n.translation = a(a({}, n.translation), t.translation)), t.performance && (n.performance = a(a({}, n.performance), t.performance)));
        }, this.isViewMode = function() {
            return "read" === n._mode;
        }, this.isEditMode = function() {
            return "edit" === n._mode;
        }, this.isPreViewMode = function() {
            return "pre_view" === n._mode;
        }, this.isViewOrPreViewMode = function() {
            return n.isViewMode() || n.isPreViewMode();
        }, this.isEditOrPreViewMode = function() {
            return n.isEditMode() || n.isPreViewMode();
        }, this.switchMode = function(t) {
            n._mode = t;
        }, this._mode = "edit", this.render = e, this.translation = o, this.performance = t;
    };
    const l = new (function() {
        function t() {
            var t = this;
            this.on = function(e, n) {
                t._listeners[e].push(n);
            }, this.off = function(e, n) {
                t._listeners[e] = t._listeners[e].filter(function(t) {
                    return t !== n;
                });
            }, this.emit = function(e) {
                for(var n = [], r = 1; r < arguments.length; r++)n[r - 1] = arguments[r];
                t._listeners[e].forEach(function(t) {
                    return t.apply(void 0, function(t, e, n) {
                        if (n || 2 === arguments.length) for(var r, o = 0, i = e.length; o < i; o++)!r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                        return t.concat(r || Array.prototype.slice.call(e));
                    }([], function(t, e) {
                        var n = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!n) return t;
                        var r, o, i = n.call(t), a = [];
                        try {
                            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
                        } catch (t) {
                            o = {
                                error: t
                            };
                        } finally{
                            try {
                                r && !r.done && (n = i.return) && n.call(i);
                            } finally{
                                if (o) throw o.error;
                            }
                        }
                        return a;
                    }(n), !1));
                });
            }, this.dispose = function() {
                t.resetListeners();
            }, this.resetListeners();
        }
        return t.prototype.resetListeners = function() {
            this._listeners = {
                manifestUpdate: [],
                selectBranches: [],
                control: [],
                zoom: [],
                zoomEnd: [],
                notification: [],
                actions: [],
                events: []
            };
        }, t;
    }());
    var c;
    !function(t) {
        t.Node = "icon_node", t.StartNode = "icon_start_node", t.EndNode = "icon_end_node", t.EndOfVideo = "icon_end_of_video", t.ActionButton = "icon_action_button", t.ActionArea = "icon_action_area", t.Etc = "icon_etc", t.Add = "icon_add", t.Random = "icon_random", t.Warning = "icon_warning", t.Move = "icon_move", t.Plus = "icon_plus", t.Minus = "icon_minus", t.Action = "icon_action", t.Inaction = "icon_inaction", t.Location = "icon_location", t.Lock = "icon_lock", t.LegendNavigation = "icon_legend_navigation";
    }(c || (c = {}));
    var u, d = [
        c.Plus,
        c.Minus,
        c.Action,
        c.Inaction
    ], h = function(t) {
        var e, r, o;
        try {
            for(var i = function(t) {
                var e = "function" == typeof Symbol && Symbol.iterator, n = e && t[e], r = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && r >= t.length && (t = void 0), {
                            value: t && t[r++],
                            done: !t
                        };
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }((o = c, Object.keys(o).filter(function(t) {
                return Number.isNaN(+t);
            }))), a = i.next(); !a.done; a = i.next()){
                var l = a.value;
                t.append("svg").attr("id", c[l]).attr("class", "icon").attr("height", d.includes(c[l]) ? s.render.controlConnectorIconSize : s.render.iconSize).attr("width", d.includes(c[l]) ? s.render.controlConnectorIconSize : s.render.iconSize).html(n(254)("./".concat(c[l], ".svg")));
            }
        } catch (t) {
            e = {
                error: t
            };
        } finally{
            try {
                a && !a.done && (r = i.return) && r.call(i);
            } finally{
                if (e) throw e.error;
            }
        }
    }, f = "M 0, 0  m -5, 0  a 5,5 0 1,0 10,0  a 5,5 0 1,0 -10,0", p = "-7 -7 14 14";
    !function(t) {
        t.Circle = "marker_circle", t.CircleDisabled = "marker_circle_disabled", t.Connector = "marker_connector";
    }(u || (u = {}));
    var v = [
        {
            name: u.Circle,
            path: f,
            viewBox: p,
            stroke: s.render.color.stroke,
            strokeWidth: 2,
            size: 8,
            fill: s.render.color.stroke
        },
        {
            name: u.CircleDisabled,
            path: f,
            viewBox: p,
            stroke: "#76787A",
            strokeWidth: 2,
            size: 8,
            fill: "#76787A"
        },
        {
            name: u.Connector,
            path: f,
            viewBox: p,
            stroke: "#F2F5FF",
            strokeWidth: 2,
            size: 16,
            fill: "#35383C"
        }
    ];
    function y() {}
    function m(t) {
        return null == t ? y : function() {
            return this.querySelector(t);
        };
    }
    function g() {
        return [];
    }
    function _(t) {
        return null == t ? g : function() {
            return this.querySelectorAll(t);
        };
    }
    function w(t) {
        return function() {
            return this.matches(t);
        };
    }
    function b(t) {
        return function(e) {
            return e.matches(t);
        };
    }
    var C = Array.prototype.find;
    function x() {
        return this.firstElementChild;
    }
    var M = Array.prototype.filter;
    function k() {
        return Array.from(this.children);
    }
    function S(t) {
        return new Array(t.length);
    }
    function N(t, e) {
        this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
    }
    function E(t, e, n, r, o, i) {
        for(var a, s = 0, l = e.length, c = i.length; s < c; ++s)(a = e[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new N(t, i[s]);
        for(; s < l; ++s)(a = e[s]) && (o[s] = a);
    }
    function L(t, e, n, r, o, i, a) {
        var s, l, c, u = new Map, d = e.length, h = i.length, f = new Array(d);
        for(s = 0; s < d; ++s)(l = e[s]) && (f[s] = c = a.call(l, l.__data__, s, e) + "", u.has(c) ? o[s] = l : u.set(c, l));
        for(s = 0; s < h; ++s)c = a.call(t, i[s], s, i) + "", (l = u.get(c)) ? (r[s] = l, l.__data__ = i[s], u.delete(c)) : n[s] = new N(t, i[s]);
        for(s = 0; s < d; ++s)(l = e[s]) && u.get(f[s]) === l && (o[s] = l);
    }
    function O(t) {
        return t.__data__;
    }
    function A(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
    }
    function T(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }
    N.prototype = {
        constructor: N,
        appendChild: function(t) {
            return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function(t, e) {
            return this._parent.insertBefore(t, e);
        },
        querySelector: function(t) {
            return this._parent.querySelector(t);
        },
        querySelectorAll: function(t) {
            return this._parent.querySelectorAll(t);
        }
    };
    var B = "http://www.w3.org/1999/xhtml";
    const z = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: B,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    function P(t) {
        var e = t += "", n = e.indexOf(":");
        return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), z.hasOwnProperty(e) ? {
            space: z[e],
            local: t
        } : t;
    }
    function I(t) {
        return function() {
            this.removeAttribute(t);
        };
    }
    function D(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local);
        };
    }
    function Z(t, e) {
        return function() {
            this.setAttribute(t, e);
        };
    }
    function j(t, e) {
        return function() {
            this.setAttributeNS(t.space, t.local, e);
        };
    }
    function V(t, e) {
        return function() {
            var n = e.apply(this, arguments);
            null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
        };
    }
    function H(t, e) {
        return function() {
            var n = e.apply(this, arguments);
            null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
        };
    }
    function F(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
    }
    function R(t) {
        return function() {
            this.style.removeProperty(t);
        };
    }
    function Y(t, e, n) {
        return function() {
            this.style.setProperty(t, e, n);
        };
    }
    function W(t, e, n) {
        return function() {
            var r = e.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
        };
    }
    function X(t, e) {
        return t.style.getPropertyValue(e) || F(t).getComputedStyle(t, null).getPropertyValue(e);
    }
    function $(t) {
        return function() {
            delete this[t];
        };
    }
    function G(t, e) {
        return function() {
            this[t] = e;
        };
    }
    function q(t, e) {
        return function() {
            var n = e.apply(this, arguments);
            null == n ? delete this[t] : this[t] = n;
        };
    }
    function U(t) {
        return t.trim().split(/^|\s+/);
    }
    function K(t) {
        return t.classList || new J(t);
    }
    function J(t) {
        this._node = t, this._names = U(t.getAttribute("class") || "");
    }
    function Q(t, e) {
        for(var n = K(t), r = -1, o = e.length; ++r < o;)n.add(e[r]);
    }
    function tt(t, e) {
        for(var n = K(t), r = -1, o = e.length; ++r < o;)n.remove(e[r]);
    }
    function et(t) {
        return function() {
            Q(this, t);
        };
    }
    function nt(t) {
        return function() {
            tt(this, t);
        };
    }
    function rt(t, e) {
        return function() {
            (e.apply(this, arguments) ? Q : tt)(this, t);
        };
    }
    function ot() {
        this.textContent = "";
    }
    function it(t) {
        return function() {
            this.textContent = t;
        };
    }
    function at(t) {
        return function() {
            var e = t.apply(this, arguments);
            this.textContent = null == e ? "" : e;
        };
    }
    function st() {
        this.innerHTML = "";
    }
    function lt(t) {
        return function() {
            this.innerHTML = t;
        };
    }
    function ct(t) {
        return function() {
            var e = t.apply(this, arguments);
            this.innerHTML = null == e ? "" : e;
        };
    }
    function ut() {
        this.nextSibling && this.parentNode.appendChild(this);
    }
    function dt() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function ht(t) {
        return function() {
            var e = this.ownerDocument, n = this.namespaceURI;
            return n === B && e.documentElement.namespaceURI === B ? e.createElement(t) : e.createElementNS(n, t);
        };
    }
    function ft(t) {
        return function() {
            return this.ownerDocument.createElementNS(t.space, t.local);
        };
    }
    function pt(t) {
        var e = P(t);
        return (e.local ? ft : ht)(e);
    }
    function vt() {
        return null;
    }
    function yt() {
        var t = this.parentNode;
        t && t.removeChild(this);
    }
    function mt() {
        var t = this.cloneNode(!1), e = this.parentNode;
        return e ? e.insertBefore(t, this.nextSibling) : t;
    }
    function gt() {
        var t = this.cloneNode(!0), e = this.parentNode;
        return e ? e.insertBefore(t, this.nextSibling) : t;
    }
    function _t(t) {
        return function() {
            var e = this.__on;
            if (e) {
                for(var n, r = 0, o = -1, i = e.length; r < i; ++r)n = e[r], t.type && n.type !== t.type || n.name !== t.name ? e[++o] = n : this.removeEventListener(n.type, n.listener, n.options);
                ++o ? e.length = o : delete this.__on;
            }
        };
    }
    function wt(t, e, n) {
        return function() {
            var r, o = this.__on, i = function(t) {
                return function(e) {
                    t.call(this, e, this.__data__);
                };
            }(e);
            if (o) {
                for(var a = 0, s = o.length; a < s; ++a)if ((r = o[a]).type === t.type && r.name === t.name) return this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = i, r.options = n), void (r.value = e);
            }
            this.addEventListener(t.type, i, n), r = {
                type: t.type,
                name: t.name,
                value: e,
                listener: i,
                options: n
            }, o ? o.push(r) : this.__on = [
                r
            ];
        };
    }
    function bt(t, e, n) {
        var r = F(t), o = r.CustomEvent;
        "function" == typeof o ? o = new o(e, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(e, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
    }
    function Ct(t, e) {
        return function() {
            return bt(this, t, e);
        };
    }
    function xt(t, e) {
        return function() {
            return bt(this, t, e.apply(this, arguments));
        };
    }
    J.prototype = {
        add: function(t) {
            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function(t) {
            var e = this._names.indexOf(t);
            e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function(t) {
            return this._names.indexOf(t) >= 0;
        }
    };
    var Mt = [
        null
    ];
    function kt(t, e) {
        this._groups = t, this._parents = e;
    }
    function St() {
        return new kt([
            [
                document.documentElement
            ]
        ], Mt);
    }
    kt.prototype = St.prototype = {
        constructor: kt,
        select: function(t) {
            "function" != typeof t && (t = m(t));
            for(var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)for(var i, a, s = e[o], l = s.length, c = r[o] = new Array(l), u = 0; u < l; ++u)(i = s[u]) && (a = t.call(i, i.__data__, u, s)) && ("__data__" in i && (a.__data__ = i.__data__), c[u] = a);
            return new kt(r, this._parents);
        },
        selectAll: function(t) {
            t = "function" == typeof t ? function(t) {
                return function() {
                    var e;
                    return null == (e = t.apply(this, arguments)) ? [] : Array.isArray(e) ? e : Array.from(e);
                };
            }(t) : _(t);
            for(var e = this._groups, n = e.length, r = [], o = [], i = 0; i < n; ++i)for(var a, s = e[i], l = s.length, c = 0; c < l; ++c)(a = s[c]) && (r.push(t.call(a, a.__data__, c, s)), o.push(a));
            return new kt(r, o);
        },
        selectChild: function(t) {
            return this.select(null == t ? x : function(t) {
                return function() {
                    return C.call(this.children, t);
                };
            }("function" == typeof t ? t : b(t)));
        },
        selectChildren: function(t) {
            return this.selectAll(null == t ? k : function(t) {
                return function() {
                    return M.call(this.children, t);
                };
            }("function" == typeof t ? t : b(t)));
        },
        filter: function(t) {
            "function" != typeof t && (t = w(t));
            for(var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)for(var i, a = e[o], s = a.length, l = r[o] = [], c = 0; c < s; ++c)(i = a[c]) && t.call(i, i.__data__, c, a) && l.push(i);
            return new kt(r, this._parents);
        },
        data: function(t, e) {
            if (!arguments.length) return Array.from(this, O);
            var n, r = e ? L : E, o = this._parents, i = this._groups;
            "function" != typeof t && (n = t, t = function() {
                return n;
            });
            for(var a = i.length, s = new Array(a), l = new Array(a), c = new Array(a), u = 0; u < a; ++u){
                var d = o[u], h = i[u], f = h.length, p = A(t.call(d, d && d.__data__, u, o)), v = p.length, y = l[u] = new Array(v), m = s[u] = new Array(v);
                r(d, h, y, m, c[u] = new Array(f), p, e);
                for(var g, _, w = 0, b = 0; w < v; ++w)if (g = y[w]) {
                    for(w >= b && (b = w + 1); !(_ = m[b]) && ++b < v;);
                    g._next = _ || null;
                }
            }
            return (s = new kt(s, o))._enter = l, s._exit = c, s;
        },
        enter: function() {
            return new kt(this._enter || this._groups.map(S), this._parents);
        },
        exit: function() {
            return new kt(this._exit || this._groups.map(S), this._parents);
        },
        join: function(t, e, n) {
            var r = this.enter(), o = this, i = this.exit();
            return "function" == typeof t ? (r = t(r)) && (r = r.selection()) : r = r.append(t + ""), null != e && (o = e(o)) && (o = o.selection()), null == n ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
        },
        merge: function(t) {
            for(var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)for(var c, u = n[l], d = r[l], h = u.length, f = s[l] = new Array(h), p = 0; p < h; ++p)(c = u[p] || d[p]) && (f[p] = c);
            for(; l < o; ++l)s[l] = n[l];
            return new kt(s, this._parents);
        },
        selection: function() {
            return this;
        },
        order: function() {
            for(var t = this._groups, e = -1, n = t.length; ++e < n;)for(var r, o = t[e], i = o.length - 1, a = o[i]; --i >= 0;)(r = o[i]) && (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a), a = r);
            return this;
        },
        sort: function(t) {
            function e(e, n) {
                return e && n ? t(e.__data__, n.__data__) : !e - !n;
            }
            t || (t = T);
            for(var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i){
                for(var a, s = n[i], l = s.length, c = o[i] = new Array(l), u = 0; u < l; ++u)(a = s[u]) && (c[u] = a);
                c.sort(e);
            }
            return new kt(o, this._parents).order();
        },
        call: function() {
            var t = arguments[0];
            return arguments[0] = this, t.apply(null, arguments), this;
        },
        nodes: function() {
            return Array.from(this);
        },
        node: function() {
            for(var t = this._groups, e = 0, n = t.length; e < n; ++e)for(var r = t[e], o = 0, i = r.length; o < i; ++o){
                var a = r[o];
                if (a) return a;
            }
            return null;
        },
        size: function() {
            let t = 0;
            for (const e of this)++t;
            return t;
        },
        empty: function() {
            return !this.node();
        },
        each: function(t) {
            for(var e = this._groups, n = 0, r = e.length; n < r; ++n)for(var o, i = e[n], a = 0, s = i.length; a < s; ++a)(o = i[a]) && t.call(o, o.__data__, a, i);
            return this;
        },
        attr: function(t, e) {
            var n = P(t);
            if (arguments.length < 2) {
                var r = this.node();
                return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
            }
            return this.each((null == e ? n.local ? D : I : "function" == typeof e ? n.local ? H : V : n.local ? j : Z)(n, e));
        },
        style: function(t, e, n) {
            return arguments.length > 1 ? this.each((null == e ? R : "function" == typeof e ? W : Y)(t, e, null == n ? "" : n)) : X(this.node(), t);
        },
        property: function(t, e) {
            return arguments.length > 1 ? this.each((null == e ? $ : "function" == typeof e ? q : G)(t, e)) : this.node()[t];
        },
        classed: function(t, e) {
            var n = U(t + "");
            if (arguments.length < 2) {
                for(var r = K(this.node()), o = -1, i = n.length; ++o < i;)if (!r.contains(n[o])) return !1;
                return !0;
            }
            return this.each(("function" == typeof e ? rt : e ? et : nt)(n, e));
        },
        text: function(t) {
            return arguments.length ? this.each(null == t ? ot : ("function" == typeof t ? at : it)(t)) : this.node().textContent;
        },
        html: function(t) {
            return arguments.length ? this.each(null == t ? st : ("function" == typeof t ? ct : lt)(t)) : this.node().innerHTML;
        },
        raise: function() {
            return this.each(ut);
        },
        lower: function() {
            return this.each(dt);
        },
        append: function(t) {
            var e = "function" == typeof t ? t : pt(t);
            return this.select(function() {
                return this.appendChild(e.apply(this, arguments));
            });
        },
        insert: function(t, e) {
            var n = "function" == typeof t ? t : pt(t), r = null == e ? vt : "function" == typeof e ? e : m(e);
            return this.select(function() {
                return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
            });
        },
        remove: function() {
            return this.each(yt);
        },
        clone: function(t) {
            return this.select(t ? gt : mt);
        },
        datum: function(t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__;
        },
        on: function(t, e, n) {
            var r, o, i = function(t) {
                return t.trim().split(/^|\s+/).map(function(t) {
                    var e = "", n = t.indexOf(".");
                    return n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), {
                        type: t,
                        name: e
                    };
                });
            }(t + ""), a = i.length;
            if (!(arguments.length < 2)) {
                for(s = e ? wt : _t, r = 0; r < a; ++r)this.each(s(i[r], e, n));
                return this;
            }
            var s = this.node().__on;
            if (s) {
                for(var l, c = 0, u = s.length; c < u; ++c)for(r = 0, l = s[c]; r < a; ++r)if ((o = i[r]).type === l.type && o.name === l.name) return l.value;
            }
        },
        dispatch: function(t, e) {
            return this.each(("function" == typeof e ? xt : Ct)(t, e));
        },
        [Symbol.iterator]: function*() {
            for(var t = this._groups, e = 0, n = t.length; e < n; ++e)for(var r, o = t[e], i = 0, a = o.length; i < a; ++i)(r = o[i]) && (yield r);
        }
    };
    const Nt = St;
    var Et = {
        value: ()=>{}
    };
    function Lt() {
        for(var t, e = 0, n = arguments.length, r = {}; e < n; ++e){
            if (!(t = arguments[e] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
            r[t] = [];
        }
        return new Ot(r);
    }
    function Ot(t) {
        this._ = t;
    }
    function At(t, e) {
        for(var n, r = 0, o = t.length; r < o; ++r)if ((n = t[r]).name === e) return n.value;
    }
    function Tt(t, e, n) {
        for(var r = 0, o = t.length; r < o; ++r)if (t[r].name === e) {
            t[r] = Et, t = t.slice(0, r).concat(t.slice(r + 1));
            break;
        }
        return null != n && t.push({
            name: e,
            value: n
        }), t;
    }
    Ot.prototype = Lt.prototype = {
        constructor: Ot,
        on: function(t, e) {
            var n, r, o = this._, i = (r = o, (t + "").trim().split(/^|\s+/).map(function(t) {
                var e = "", n = t.indexOf(".");
                if (n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), t && !r.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                return {
                    type: t,
                    name: e
                };
            })), a = -1, s = i.length;
            if (!(arguments.length < 2)) {
                if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e);
                for(; ++a < s;)if (n = (t = i[a]).type) o[n] = Tt(o[n], t.name, e);
                else if (null == e) for(n in o)o[n] = Tt(o[n], t.name, null);
                return this;
            }
            for(; ++a < s;)if ((n = (t = i[a]).type) && (n = At(o[n], t.name))) return n;
        },
        copy: function() {
            var t = {}, e = this._;
            for(var n in e)t[n] = e[n].slice();
            return new Ot(t);
        },
        call: function(t, e) {
            if ((n = arguments.length - 2) > 0) for(var n, r, o = new Array(n), i = 0; i < n; ++i)o[i] = arguments[i + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for(i = 0, n = (r = this._[t]).length; i < n; ++i)r[i].value.apply(e, o);
        },
        apply: function(t, e, n) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for(var r = this._[t], o = 0, i = r.length; o < i; ++o)r[o].value.apply(e, n);
        }
    };
    const Bt = Lt;
    var zt, Pt, It = 0, Dt = 0, Zt = 0, jt = 1e3, Vt = 0, Ht = 0, Ft = 0, Rt = "object" == typeof performance && performance.now ? performance : Date, Yt = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
        setTimeout(t, 17);
    };
    function Wt() {
        return Ht || (Yt(Xt), Ht = Rt.now() + Ft);
    }
    function Xt() {
        Ht = 0;
    }
    function $t() {
        this._call = this._time = this._next = null;
    }
    function Gt(t, e, n) {
        var r = new $t;
        return r.restart(t, e, n), r;
    }
    function qt() {
        Ht = (Vt = Rt.now()) + Ft, It = Dt = 0;
        try {
            !function() {
                Wt(), ++It;
                for(var t, e = zt; e;)(t = Ht - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
                --It;
            }();
        } finally{
            It = 0, function() {
                for(var t, e, n = zt, r = 1 / 0; n;)n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : zt = e);
                Pt = t, Kt(r);
            }(), Ht = 0;
        }
    }
    function Ut() {
        var t = Rt.now(), e = t - Vt;
        e > jt && (Ft -= e, Vt = t);
    }
    function Kt(t) {
        It || (Dt && (Dt = clearTimeout(Dt)), t - Ht > 24 ? (t < 1 / 0 && (Dt = setTimeout(qt, t - Rt.now() - Ft)), Zt && (Zt = clearInterval(Zt))) : (Zt || (Vt = Rt.now(), Zt = setInterval(Ut, jt)), It = 1, Yt(qt)));
    }
    function Jt(t, e, n) {
        var r = new $t;
        return e = null == e ? 0 : +e, r.restart((n)=>{
            r.stop(), t(n + e);
        }, e, n), r;
    }
    $t.prototype = Gt.prototype = {
        constructor: $t,
        restart: function(t, e, n) {
            if ("function" != typeof t) throw new TypeError("callback is not a function");
            n = (null == n ? Wt() : +n) + (null == e ? 0 : +e), this._next || Pt === this || (Pt ? Pt._next = this : zt = this, Pt = this), this._call = t, this._time = n, Kt();
        },
        stop: function() {
            this._call && (this._call = null, this._time = 1 / 0, Kt());
        }
    };
    var Qt = Bt("start", "end", "cancel", "interrupt"), te = [], ee = 0, ne = 3;
    function re(t, e, n, r, o, i) {
        var a = t.__transition;
        if (a) {
            if (n in a) return;
        } else t.__transition = {};
        !function(t, e, n) {
            var r, o = t.__transition;
            function i(l) {
                var c, u, d, h;
                if (1 !== n.state) return s();
                for(c in o)if ((h = o[c]).name === n.name) {
                    if (h.state === ne) return Jt(i);
                    4 === h.state ? (h.state = 6, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete o[c]) : +c < e && (h.state = 6, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete o[c]);
                }
                if (Jt(function() {
                    n.state === ne && (n.state = 4, n.timer.restart(a, n.delay, n.time), a(l));
                }), n.state = 2, n.on.call("start", t, t.__data__, n.index, n.group), 2 === n.state) {
                    for(n.state = ne, r = new Array(d = n.tween.length), c = 0, u = -1; c < d; ++c)(h = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (r[++u] = h);
                    r.length = u + 1;
                }
            }
            function a(e) {
                for(var o = e < n.duration ? n.ease.call(null, e / n.duration) : (n.timer.restart(s), n.state = 5, 1), i = -1, a = r.length; ++i < a;)r[i].call(t, o);
                5 === n.state && (n.on.call("end", t, t.__data__, n.index, n.group), s());
            }
            function s() {
                for(var r in n.state = 6, n.timer.stop(), delete o[e], o)return;
                delete t.__transition;
            }
            o[e] = n, n.timer = Gt(function(t) {
                n.state = 1, n.timer.restart(i, n.delay, n.time), n.delay <= t && i(t - n.delay);
            }, 0, n.time);
        }(t, n, {
            name: e,
            index: r,
            group: o,
            on: Qt,
            tween: te,
            time: i.time,
            delay: i.delay,
            duration: i.duration,
            ease: i.ease,
            timer: null,
            state: ee
        });
    }
    function oe(t, e) {
        var n = ae(t, e);
        if (n.state > ee) throw new Error("too late; already scheduled");
        return n;
    }
    function ie(t, e) {
        var n = ae(t, e);
        if (n.state > ne) throw new Error("too late; already running");
        return n;
    }
    function ae(t, e) {
        var n = t.__transition;
        if (!n || !(n = n[e])) throw new Error("transition not found");
        return n;
    }
    function se(t, e) {
        var n, r, o, i = t.__transition, a = !0;
        if (i) {
            for(o in e = null == e ? null : e + "", i)(n = i[o]).name === e ? (r = n.state > 2 && n.state < 5, n.state = 6, n.timer.stop(), n.on.call(r ? "interrupt" : "cancel", t, t.__data__, n.index, n.group), delete i[o]) : a = !1;
            a && delete t.__transition;
        }
    }
    function le(t, e) {
        return t = +t, e = +e, function(n) {
            return t * (1 - n) + e * n;
        };
    }
    var ce, ue = 180 / Math.PI, de = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
    };
    function he(t, e, n, r, o, i) {
        var a, s, l;
        return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * r) && (n -= t * l, r -= e * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), t * r < e * n && (t = -t, e = -e, l = -l, a = -a), {
            translateX: o,
            translateY: i,
            rotate: Math.atan2(e, t) * ue,
            skewX: Math.atan(l) * ue,
            scaleX: a,
            scaleY: s
        };
    }
    function fe(t, e, n, r) {
        function o(t) {
            return t.length ? t.pop() + " " : "";
        }
        return function(i, a) {
            var s = [], l = [];
            return i = t(i), a = t(a), function(t, r, o, i, a, s) {
                if (t !== o || r !== i) {
                    var l = a.push("translate(", null, e, null, n);
                    s.push({
                        i: l - 4,
                        x: le(t, o)
                    }, {
                        i: l - 2,
                        x: le(r, i)
                    });
                } else (o || i) && a.push("translate(" + o + e + i + n);
            }(i.translateX, i.translateY, a.translateX, a.translateY, s, l), function(t, e, n, i) {
                t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), i.push({
                    i: n.push(o(n) + "rotate(", null, r) - 2,
                    x: le(t, e)
                })) : e && n.push(o(n) + "rotate(" + e + r);
            }(i.rotate, a.rotate, s, l), function(t, e, n, i) {
                t !== e ? i.push({
                    i: n.push(o(n) + "skewX(", null, r) - 2,
                    x: le(t, e)
                }) : e && n.push(o(n) + "skewX(" + e + r);
            }(i.skewX, a.skewX, s, l), function(t, e, n, r, i, a) {
                if (t !== n || e !== r) {
                    var s = i.push(o(i) + "scale(", null, ",", null, ")");
                    a.push({
                        i: s - 4,
                        x: le(t, n)
                    }, {
                        i: s - 2,
                        x: le(e, r)
                    });
                } else 1 === n && 1 === r || i.push(o(i) + "scale(" + n + "," + r + ")");
            }(i.scaleX, i.scaleY, a.scaleX, a.scaleY, s, l), i = a = null, function(t) {
                for(var e, n = -1, r = l.length; ++n < r;)s[(e = l[n]).i] = e.x(t);
                return s.join("");
            };
        };
    }
    var pe = fe(function(t) {
        const e = new ("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + "");
        return e.isIdentity ? de : he(e.a, e.b, e.c, e.d, e.e, e.f);
    }, "px, ", "px)", "deg)"), ve = fe(function(t) {
        return null == t ? de : (ce || (ce = document.createElementNS("http://www.w3.org/2000/svg", "g")), ce.setAttribute("transform", t), (t = ce.transform.baseVal.consolidate()) ? he((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : de);
    }, ", ", ")", ")");
    function ye(t, e) {
        var n, r;
        return function() {
            var o = ie(this, t), i = o.tween;
            if (i !== n) {
                for(var a = 0, s = (r = n = i).length; a < s; ++a)if (r[a].name === e) {
                    (r = r.slice()).splice(a, 1);
                    break;
                }
            }
            o.tween = r;
        };
    }
    function me(t, e, n) {
        var r, o;
        if ("function" != typeof n) throw new Error;
        return function() {
            var i = ie(this, t), a = i.tween;
            if (a !== r) {
                o = (r = a).slice();
                for(var s = {
                    name: e,
                    value: n
                }, l = 0, c = o.length; l < c; ++l)if (o[l].name === e) {
                    o[l] = s;
                    break;
                }
                l === c && o.push(s);
            }
            i.tween = o;
        };
    }
    function ge(t, e, n) {
        var r = t._id;
        return t.each(function() {
            var t = ie(this, r);
            (t.value || (t.value = {}))[e] = n.apply(this, arguments);
        }), function(t) {
            return ae(t, r).value[e];
        };
    }
    function _e(t, e, n) {
        t.prototype = e.prototype = n, n.constructor = t;
    }
    function we(t, e) {
        var n = Object.create(t.prototype);
        for(var r in e)n[r] = e[r];
        return n;
    }
    function be() {}
    var Ce = .7, xe = 1 / Ce, Me = "\\s*([+-]?\\d+)\\s*", ke = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Se = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ne = /^#([0-9a-f]{3,8})$/, Ee = new RegExp(`^rgb\\(${Me},${Me},${Me}\\)$`), Le = new RegExp(`^rgb\\(${Se},${Se},${Se}\\)$`), Oe = new RegExp(`^rgba\\(${Me},${Me},${Me},${ke}\\)$`), Ae = new RegExp(`^rgba\\(${Se},${Se},${Se},${ke}\\)$`), Te = new RegExp(`^hsl\\(${ke},${Se},${Se}\\)$`), Be = new RegExp(`^hsla\\(${ke},${Se},${Se},${ke}\\)$`), ze = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    function Pe() {
        return this.rgb().formatHex();
    }
    function Ie() {
        return this.rgb().formatRgb();
    }
    function De(t) {
        var e, n;
        return t = (t + "").trim().toLowerCase(), (e = Ne.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), 6 === n ? Ze(e) : 3 === n ? new He(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === n ? je(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === n ? je(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = Ee.exec(t)) ? new He(e[1], e[2], e[3], 1) : (e = Le.exec(t)) ? new He(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = Oe.exec(t)) ? je(e[1], e[2], e[3], e[4]) : (e = Ae.exec(t)) ? je(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = Te.exec(t)) ? $e(e[1], e[2] / 100, e[3] / 100, 1) : (e = Be.exec(t)) ? $e(e[1], e[2] / 100, e[3] / 100, e[4]) : ze.hasOwnProperty(t) ? Ze(ze[t]) : "transparent" === t ? new He(NaN, NaN, NaN, 0) : null;
    }
    function Ze(t) {
        return new He(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
    }
    function je(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new He(t, e, n, r);
    }
    function Ve(t, e, n, r) {
        var o;
        return 1 === arguments.length ? ((o = t) instanceof be || (o = De(o)), o ? new He((o = o.rgb()).r, o.g, o.b, o.opacity) : new He) : new He(t, e, n, null == r ? 1 : r);
    }
    function He(t, e, n, r) {
        this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
    }
    function Fe() {
        return `#${Xe(this.r)}${Xe(this.g)}${Xe(this.b)}`;
    }
    function Re() {
        const t = Ye(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${We(this.r)}, ${We(this.g)}, ${We(this.b)}${1 === t ? ")" : `, ${t})`}`;
    }
    function Ye(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
    }
    function We(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
    }
    function Xe(t) {
        return ((t = We(t)) < 16 ? "0" : "") + t.toString(16);
    }
    function $e(t, e, n, r) {
        return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new qe(t, e, n, r);
    }
    function Ge(t) {
        if (t instanceof qe) return new qe(t.h, t.s, t.l, t.opacity);
        if (t instanceof be || (t = De(t)), !t) return new qe;
        if (t instanceof qe) return t;
        var e = (t = t.rgb()).r / 255, n = t.g / 255, r = t.b / 255, o = Math.min(e, n, r), i = Math.max(e, n, r), a = NaN, s = i - o, l = (i + o) / 2;
        return s ? (a = e === i ? (n - r) / s + 6 * (n < r) : n === i ? (r - e) / s + 2 : (e - n) / s + 4, s /= l < .5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new qe(a, s, l, t.opacity);
    }
    function qe(t, e, n, r) {
        this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
    }
    function Ue(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
    }
    function Ke(t) {
        return Math.max(0, Math.min(1, t || 0));
    }
    function Je(t, e, n) {
        return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e);
    }
    function Qe(t, e, n, r, o) {
        var i = t * t, a = i * t;
        return ((1 - 3 * t + 3 * i - a) * e + (4 - 6 * i + 3 * a) * n + (1 + 3 * t + 3 * i - 3 * a) * r + a * o) / 6;
    }
    _e(be, De, {
        copy (t) {
            return Object.assign(new this.constructor, this, t);
        },
        displayable () {
            return this.rgb().displayable();
        },
        hex: Pe,
        formatHex: Pe,
        formatHex8: function() {
            return this.rgb().formatHex8();
        },
        formatHsl: function() {
            return Ge(this).formatHsl();
        },
        formatRgb: Ie,
        toString: Ie
    }), _e(He, Ve, we(be, {
        brighter (t) {
            return t = null == t ? xe : Math.pow(xe, t), new He(this.r * t, this.g * t, this.b * t, this.opacity);
        },
        darker (t) {
            return t = null == t ? Ce : Math.pow(Ce, t), new He(this.r * t, this.g * t, this.b * t, this.opacity);
        },
        rgb () {
            return this;
        },
        clamp () {
            return new He(We(this.r), We(this.g), We(this.b), Ye(this.opacity));
        },
        displayable () {
            return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
        },
        hex: Fe,
        formatHex: Fe,
        formatHex8: function() {
            return `#${Xe(this.r)}${Xe(this.g)}${Xe(this.b)}${Xe(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
        },
        formatRgb: Re,
        toString: Re
    })), _e(qe, function(t, e, n, r) {
        return 1 === arguments.length ? Ge(t) : new qe(t, e, n, null == r ? 1 : r);
    }, we(be, {
        brighter (t) {
            return t = null == t ? xe : Math.pow(xe, t), new qe(this.h, this.s, this.l * t, this.opacity);
        },
        darker (t) {
            return t = null == t ? Ce : Math.pow(Ce, t), new qe(this.h, this.s, this.l * t, this.opacity);
        },
        rgb () {
            var t = this.h % 360 + 360 * (this.h < 0), e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * e, o = 2 * n - r;
            return new He(Je(t >= 240 ? t - 240 : t + 120, o, r), Je(t, o, r), Je(t < 120 ? t + 240 : t - 120, o, r), this.opacity);
        },
        clamp () {
            return new qe(Ue(this.h), Ke(this.s), Ke(this.l), Ye(this.opacity));
        },
        displayable () {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
        },
        formatHsl () {
            const t = Ye(this.opacity);
            return `${1 === t ? "hsl(" : "hsla("}${Ue(this.h)}, ${100 * Ke(this.s)}%, ${100 * Ke(this.l)}%${1 === t ? ")" : `, ${t})`}`;
        }
    }));
    const tn = (t)=>()=>t;
    function en(t, e) {
        var n = e - t;
        return n ? function(t, e) {
            return function(n) {
                return t + n * e;
            };
        }(t, n) : tn(isNaN(t) ? e : t);
    }
    const nn = function t(e) {
        var n = function(t) {
            return 1 == (t = +t) ? en : function(e, n) {
                return n - e ? function(t, e, n) {
                    return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
                        return Math.pow(t + r * e, n);
                    };
                }(e, n, t) : tn(isNaN(e) ? n : e);
            };
        }(e);
        function r(t, e) {
            var r = n((t = Ve(t)).r, (e = Ve(e)).r), o = n(t.g, e.g), i = n(t.b, e.b), a = en(t.opacity, e.opacity);
            return function(e) {
                return t.r = r(e), t.g = o(e), t.b = i(e), t.opacity = a(e), t + "";
            };
        }
        return r.gamma = t, r;
    }(1);
    function rn(t) {
        return function(e) {
            var n, r, o = e.length, i = new Array(o), a = new Array(o), s = new Array(o);
            for(n = 0; n < o; ++n)r = Ve(e[n]), i[n] = r.r || 0, a[n] = r.g || 0, s[n] = r.b || 0;
            return i = t(i), a = t(a), s = t(s), r.opacity = 1, function(t) {
                return r.r = i(t), r.g = a(t), r.b = s(t), r + "";
            };
        };
    }
    rn(function(t) {
        var e = t.length - 1;
        return function(n) {
            var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e), o = t[r], i = t[r + 1], a = r > 0 ? t[r - 1] : 2 * o - i, s = r < e - 1 ? t[r + 2] : 2 * i - o;
            return Qe((n - r / e) * e, a, o, i, s);
        };
    }), rn(function(t) {
        var e = t.length;
        return function(n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e), o = t[(r + e - 1) % e], i = t[r % e], a = t[(r + 1) % e], s = t[(r + 2) % e];
            return Qe((n - r / e) * e, o, i, a, s);
        };
    });
    var on = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, an = new RegExp(on.source, "g");
    function sn(t, e) {
        var n, r, o, i = on.lastIndex = an.lastIndex = 0, a = -1, s = [], l = [];
        for(t += "", e += ""; (n = on.exec(t)) && (r = an.exec(e));)(o = r.index) > i && (o = e.slice(i, o), s[a] ? s[a] += o : s[++a] = o), (n = n[0]) === (r = r[0]) ? s[a] ? s[a] += r : s[++a] = r : (s[++a] = null, l.push({
            i: a,
            x: le(n, r)
        })), i = an.lastIndex;
        return i < e.length && (o = e.slice(i), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? function(t) {
            return function(e) {
                return t(e) + "";
            };
        }(l[0].x) : function(t) {
            return function() {
                return t;
            };
        }(e) : (e = l.length, function(t) {
            for(var n, r = 0; r < e; ++r)s[(n = l[r]).i] = n.x(t);
            return s.join("");
        });
    }
    function ln(t, e) {
        var n;
        return ("number" == typeof e ? le : e instanceof De ? nn : (n = De(e)) ? (e = n, nn) : sn)(t, e);
    }
    function cn(t) {
        return function() {
            this.removeAttribute(t);
        };
    }
    function un(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local);
        };
    }
    function dn(t, e, n) {
        var r, o, i = n + "";
        return function() {
            var a = this.getAttribute(t);
            return a === i ? null : a === r ? o : o = e(r = a, n);
        };
    }
    function hn(t, e, n) {
        var r, o, i = n + "";
        return function() {
            var a = this.getAttributeNS(t.space, t.local);
            return a === i ? null : a === r ? o : o = e(r = a, n);
        };
    }
    function fn(t, e, n) {
        var r, o, i;
        return function() {
            var a, s, l = n(this);
            if (null != l) return (a = this.getAttribute(t)) === (s = l + "") ? null : a === r && s === o ? i : (o = s, i = e(r = a, l));
            this.removeAttribute(t);
        };
    }
    function pn(t, e, n) {
        var r, o, i;
        return function() {
            var a, s, l = n(this);
            if (null != l) return (a = this.getAttributeNS(t.space, t.local)) === (s = l + "") ? null : a === r && s === o ? i : (o = s, i = e(r = a, l));
            this.removeAttributeNS(t.space, t.local);
        };
    }
    function vn(t, e) {
        var n, r;
        function o() {
            var o = e.apply(this, arguments);
            return o !== r && (n = (r = o) && function(t, e) {
                return function(n) {
                    this.setAttributeNS(t.space, t.local, e.call(this, n));
                };
            }(t, o)), n;
        }
        return o._value = e, o;
    }
    function yn(t, e) {
        var n, r;
        function o() {
            var o = e.apply(this, arguments);
            return o !== r && (n = (r = o) && function(t, e) {
                return function(n) {
                    this.setAttribute(t, e.call(this, n));
                };
            }(t, o)), n;
        }
        return o._value = e, o;
    }
    function mn(t, e) {
        return function() {
            oe(this, t).delay = +e.apply(this, arguments);
        };
    }
    function gn(t, e) {
        return e = +e, function() {
            oe(this, t).delay = e;
        };
    }
    function _n(t, e) {
        return function() {
            ie(this, t).duration = +e.apply(this, arguments);
        };
    }
    function wn(t, e) {
        return e = +e, function() {
            ie(this, t).duration = e;
        };
    }
    var bn = Nt.prototype.constructor;
    function Cn(t) {
        return function() {
            this.style.removeProperty(t);
        };
    }
    var xn = 0;
    function Mn(t, e, n, r) {
        this._groups = t, this._parents = e, this._name = n, this._id = r;
    }
    function kn() {
        return ++xn;
    }
    var Sn = Nt.prototype;
    Mn.prototype = (function(t) {
        return Nt().transition(t);
    }).prototype = {
        constructor: Mn,
        select: function(t) {
            var e = this._name, n = this._id;
            "function" != typeof t && (t = m(t));
            for(var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)for(var s, l, c = r[a], u = c.length, d = i[a] = new Array(u), h = 0; h < u; ++h)(s = c[h]) && (l = t.call(s, s.__data__, h, c)) && ("__data__" in s && (l.__data__ = s.__data__), d[h] = l, re(d[h], e, n, h, d, ae(s, n)));
            return new Mn(i, this._parents, e, n);
        },
        selectAll: function(t) {
            var e = this._name, n = this._id;
            "function" != typeof t && (t = _(t));
            for(var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)for(var l, c = r[s], u = c.length, d = 0; d < u; ++d)if (l = c[d]) {
                for(var h, f = t.call(l, l.__data__, d, c), p = ae(l, n), v = 0, y = f.length; v < y; ++v)(h = f[v]) && re(h, e, n, v, f, p);
                i.push(f), a.push(l);
            }
            return new Mn(i, a, e, n);
        },
        selectChild: Sn.selectChild,
        selectChildren: Sn.selectChildren,
        filter: function(t) {
            "function" != typeof t && (t = w(t));
            for(var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)for(var i, a = e[o], s = a.length, l = r[o] = [], c = 0; c < s; ++c)(i = a[c]) && t.call(i, i.__data__, c, a) && l.push(i);
            return new Mn(r, this._parents, this._name, this._id);
        },
        merge: function(t) {
            if (t._id !== this._id) throw new Error;
            for(var e = this._groups, n = t._groups, r = e.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)for(var l, c = e[s], u = n[s], d = c.length, h = a[s] = new Array(d), f = 0; f < d; ++f)(l = c[f] || u[f]) && (h[f] = l);
            for(; s < r; ++s)a[s] = e[s];
            return new Mn(a, this._parents, this._name, this._id);
        },
        selection: function() {
            return new bn(this._groups, this._parents);
        },
        transition: function() {
            for(var t = this._name, e = this._id, n = kn(), r = this._groups, o = r.length, i = 0; i < o; ++i)for(var a, s = r[i], l = s.length, c = 0; c < l; ++c)if (a = s[c]) {
                var u = ae(a, e);
                re(a, t, n, c, s, {
                    time: u.time + u.delay + u.duration,
                    delay: 0,
                    duration: u.duration,
                    ease: u.ease
                });
            }
            return new Mn(r, this._parents, t, n);
        },
        call: Sn.call,
        nodes: Sn.nodes,
        node: Sn.node,
        size: Sn.size,
        empty: Sn.empty,
        each: Sn.each,
        on: function(t, e) {
            var n = this._id;
            return arguments.length < 2 ? ae(this.node(), n).on.on(t) : this.each(function(t, e, n) {
                var r, o, i = function(t) {
                    return (t + "").trim().split(/^|\s+/).every(function(t) {
                        var e = t.indexOf(".");
                        return e >= 0 && (t = t.slice(0, e)), !t || "start" === t;
                    });
                }(e) ? oe : ie;
                return function() {
                    var a = i(this, t), s = a.on;
                    s !== r && (o = (r = s).copy()).on(e, n), a.on = o;
                };
            }(n, t, e));
        },
        attr: function(t, e) {
            var n = P(t), r = "transform" === n ? ve : ln;
            return this.attrTween(t, "function" == typeof e ? (n.local ? pn : fn)(n, r, ge(this, "attr." + t, e)) : null == e ? (n.local ? un : cn)(n) : (n.local ? hn : dn)(n, r, e));
        },
        attrTween: function(t, e) {
            var n = "attr." + t;
            if (arguments.length < 2) return (n = this.tween(n)) && n._value;
            if (null == e) return this.tween(n, null);
            if ("function" != typeof e) throw new Error;
            var r = P(t);
            return this.tween(n, (r.local ? vn : yn)(r, e));
        },
        style: function(t, e, n) {
            var r = "transform" == (t += "") ? pe : ln;
            return null == e ? this.styleTween(t, function(t, e) {
                var n, r, o;
                return function() {
                    var i = X(this, t), a = (this.style.removeProperty(t), X(this, t));
                    return i === a ? null : i === n && a === r ? o : o = e(n = i, r = a);
                };
            }(t, r)).on("end.style." + t, Cn(t)) : "function" == typeof e ? this.styleTween(t, function(t, e, n) {
                var r, o, i;
                return function() {
                    var a = X(this, t), s = n(this), l = s + "";
                    return null == s && (this.style.removeProperty(t), l = s = X(this, t)), a === l ? null : a === r && l === o ? i : (o = l, i = e(r = a, s));
                };
            }(t, r, ge(this, "style." + t, e))).each(function(t, e) {
                var n, r, o, i, a = "style." + e, s = "end." + a;
                return function() {
                    var l = ie(this, t), c = l.on, u = null == l.value[a] ? i || (i = Cn(e)) : void 0;
                    c === n && o === u || (r = (n = c).copy()).on(s, o = u), l.on = r;
                };
            }(this._id, t)) : this.styleTween(t, function(t, e, n) {
                var r, o, i = n + "";
                return function() {
                    var a = X(this, t);
                    return a === i ? null : a === r ? o : o = e(r = a, n);
                };
            }(t, r, e), n).on("end.style." + t, null);
        },
        styleTween: function(t, e, n) {
            var r = "style." + (t += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == e) return this.tween(r, null);
            if ("function" != typeof e) throw new Error;
            return this.tween(r, function(t, e, n) {
                var r, o;
                function i() {
                    var i = e.apply(this, arguments);
                    return i !== o && (r = (o = i) && function(t, e, n) {
                        return function(r) {
                            this.style.setProperty(t, e.call(this, r), n);
                        };
                    }(t, i, n)), r;
                }
                return i._value = e, i;
            }(t, e, null == n ? "" : n));
        },
        text: function(t) {
            return this.tween("text", "function" == typeof t ? function(t) {
                return function() {
                    var e = t(this);
                    this.textContent = null == e ? "" : e;
                };
            }(ge(this, "text", t)) : function(t) {
                return function() {
                    this.textContent = t;
                };
            }(null == t ? "" : t + ""));
        },
        textTween: function(t) {
            var e = "text";
            if (arguments.length < 1) return (e = this.tween(e)) && e._value;
            if (null == t) return this.tween(e, null);
            if ("function" != typeof t) throw new Error;
            return this.tween(e, function(t) {
                var e, n;
                function r() {
                    var r = t.apply(this, arguments);
                    return r !== n && (e = (n = r) && function(t) {
                        return function(e) {
                            this.textContent = t.call(this, e);
                        };
                    }(r)), e;
                }
                return r._value = t, r;
            }(t));
        },
        remove: function() {
            return this.on("end.remove", function(t) {
                return function() {
                    var e = this.parentNode;
                    for(var n in this.__transition)if (+n !== t) return;
                    e && e.removeChild(this);
                };
            }(this._id));
        },
        tween: function(t, e) {
            var n = this._id;
            if (t += "", arguments.length < 2) {
                for(var r, o = ae(this.node(), n).tween, i = 0, a = o.length; i < a; ++i)if ((r = o[i]).name === t) return r.value;
                return null;
            }
            return this.each((null == e ? ye : me)(n, t, e));
        },
        delay: function(t) {
            var e = this._id;
            return arguments.length ? this.each(("function" == typeof t ? mn : gn)(e, t)) : ae(this.node(), e).delay;
        },
        duration: function(t) {
            var e = this._id;
            return arguments.length ? this.each(("function" == typeof t ? _n : wn)(e, t)) : ae(this.node(), e).duration;
        },
        ease: function(t) {
            var e = this._id;
            return arguments.length ? this.each(function(t, e) {
                if ("function" != typeof e) throw new Error;
                return function() {
                    ie(this, t).ease = e;
                };
            }(e, t)) : ae(this.node(), e).ease;
        },
        easeVarying: function(t) {
            if ("function" != typeof t) throw new Error;
            return this.each(function(t, e) {
                return function() {
                    var n = e.apply(this, arguments);
                    if ("function" != typeof n) throw new Error;
                    ie(this, t).ease = n;
                };
            }(this._id, t));
        },
        end: function() {
            var t, e, n = this, r = n._id, o = n.size();
            return new Promise(function(i, a) {
                var s = {
                    value: a
                }, l = {
                    value: function() {
                        0 == --o && i();
                    }
                };
                n.each(function() {
                    var n = ie(this, r), o = n.on;
                    o !== t && ((e = (t = o).copy())._.cancel.push(s), e._.interrupt.push(s), e._.end.push(l)), n.on = e;
                }), 0 === o && i();
            });
        },
        [Symbol.iterator]: Sn[Symbol.iterator]
    };
    var Nn = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function(t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
        }
    };
    function En(t, e) {
        for(var n; !(n = t.__transition) || !(n = n[e]);)if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`);
        return n;
    }
    Nt.prototype.interrupt = function(t) {
        return this.each(function() {
            se(this, t);
        });
    }, Nt.prototype.transition = function(t) {
        var e, n;
        t instanceof Mn ? (e = t._id, t = t._name) : (e = kn(), (n = Nn).time = Wt(), t = null == t ? null : t + "");
        for(var r = this._groups, o = r.length, i = 0; i < o; ++i)for(var a, s = r[i], l = s.length, c = 0; c < l; ++c)(a = s[c]) && re(a, t, e, c, s, n || En(a, e));
        return new Mn(r, this._parents, t, e);
    };
    const { abs: Ln, max: On, min: An } = Math;
    function Tn(t) {
        return {
            type: t
        };
    }
    function Bn(t) {
        return "string" == typeof t ? new kt([
            [
                document.querySelector(t)
            ]
        ], [
            document.documentElement
        ]) : new kt([
            [
                t
            ]
        ], Mt);
    }
    function zn(t, e) {
        if (t = function(t) {
            let e;
            for(; e = t.sourceEvent;)t = e;
            return t;
        }(t), void 0 === e && (e = t.currentTarget), e) {
            var n = e.ownerSVGElement || e;
            if (n.createSVGPoint) {
                var r = n.createSVGPoint();
                return r.x = t.clientX, r.y = t.clientY, [
                    (r = r.matrixTransform(e.getScreenCTM().inverse())).x,
                    r.y
                ];
            }
            if (e.getBoundingClientRect) {
                var o = e.getBoundingClientRect();
                return [
                    t.clientX - o.left - e.clientLeft,
                    t.clientY - o.top - e.clientTop
                ];
            }
        }
        return [
            t.pageX,
            t.pageY
        ];
    }
    [
        "w",
        "e"
    ].map(Tn), [
        "n",
        "s"
    ].map(Tn), [
        "n",
        "w",
        "e",
        "s",
        "nw",
        "ne",
        "sw",
        "se"
    ].map(Tn);
    const Pn = {
        passive: !1
    }, In = {
        capture: !0,
        passive: !1
    };
    function Dn(t) {
        t.stopImmediatePropagation();
    }
    function Zn(t) {
        t.preventDefault(), t.stopImmediatePropagation();
    }
    function jn(t) {
        var e = t.document.documentElement, n = Bn(t).on("dragstart.drag", Zn, In);
        "onselectstart" in e ? n.on("selectstart.drag", Zn, In) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
    }
    function Vn(t, e) {
        var n = t.document.documentElement, r = Bn(t).on("dragstart.drag", null);
        e && (r.on("click.drag", Zn, In), setTimeout(function() {
            r.on("click.drag", null);
        }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
    }
    const Hn = (t)=>()=>t;
    function Fn(t, { sourceEvent: e, subject: n, target: r, identifier: o, active: i, x: a, y: s, dx: l, dy: c, dispatch: u }) {
        Object.defineProperties(this, {
            type: {
                value: t,
                enumerable: !0,
                configurable: !0
            },
            sourceEvent: {
                value: e,
                enumerable: !0,
                configurable: !0
            },
            subject: {
                value: n,
                enumerable: !0,
                configurable: !0
            },
            target: {
                value: r,
                enumerable: !0,
                configurable: !0
            },
            identifier: {
                value: o,
                enumerable: !0,
                configurable: !0
            },
            active: {
                value: i,
                enumerable: !0,
                configurable: !0
            },
            x: {
                value: a,
                enumerable: !0,
                configurable: !0
            },
            y: {
                value: s,
                enumerable: !0,
                configurable: !0
            },
            dx: {
                value: l,
                enumerable: !0,
                configurable: !0
            },
            dy: {
                value: c,
                enumerable: !0,
                configurable: !0
            },
            _: {
                value: u
            }
        });
    }
    function Rn(t) {
        return !t.ctrlKey && !t.button;
    }
    function Yn() {
        return this.parentNode;
    }
    function Wn(t, e) {
        return null == e ? {
            x: t.x,
            y: t.y
        } : e;
    }
    function Xn() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
    }
    function $n() {
        var t, e, n, r, o = Rn, i = Yn, a = Wn, s = Xn, l = {}, c = Bt("start", "drag", "end"), u = 0, d = 0;
        function h(t) {
            t.on("mousedown.drag", f).filter(s).on("touchstart.drag", y).on("touchmove.drag", m, Pn).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function f(a, s) {
            if (!r && o.call(this, a, s)) {
                var l = _(this, i.call(this, a, s), a, s, "mouse");
                l && (Bn(a.view).on("mousemove.drag", p, In).on("mouseup.drag", v, In), jn(a.view), Dn(a), n = !1, t = a.clientX, e = a.clientY, l("start", a));
            }
        }
        function p(r) {
            if (Zn(r), !n) {
                var o = r.clientX - t, i = r.clientY - e;
                n = o * o + i * i > d;
            }
            l.mouse("drag", r);
        }
        function v(t) {
            Bn(t.view).on("mousemove.drag mouseup.drag", null), Vn(t.view, n), Zn(t), l.mouse("end", t);
        }
        function y(t, e) {
            if (o.call(this, t, e)) {
                var n, r, a = t.changedTouches, s = i.call(this, t, e), l = a.length;
                for(n = 0; n < l; ++n)(r = _(this, s, t, e, a[n].identifier, a[n])) && (Dn(t), r("start", t, a[n]));
            }
        }
        function m(t) {
            var e, n, r = t.changedTouches, o = r.length;
            for(e = 0; e < o; ++e)(n = l[r[e].identifier]) && (Zn(t), n("drag", t, r[e]));
        }
        function g(t) {
            var e, n, o = t.changedTouches, i = o.length;
            for(r && clearTimeout(r), r = setTimeout(function() {
                r = null;
            }, 500), e = 0; e < i; ++e)(n = l[o[e].identifier]) && (Dn(t), n("end", t, o[e]));
        }
        function _(t, e, n, r, o, i) {
            var s, d, f, p = c.copy(), v = zn(i || n, e);
            if (null != (f = a.call(t, new Fn("beforestart", {
                sourceEvent: n,
                target: h,
                identifier: o,
                active: u,
                x: v[0],
                y: v[1],
                dx: 0,
                dy: 0,
                dispatch: p
            }), r))) return s = f.x - v[0] || 0, d = f.y - v[1] || 0, function n(i, a, c) {
                var y, m = v;
                switch(i){
                    case "start":
                        l[o] = n, y = u++;
                        break;
                    case "end":
                        delete l[o], --u;
                    case "drag":
                        v = zn(c || a, e), y = u;
                }
                p.call(i, t, new Fn(i, {
                    sourceEvent: a,
                    subject: f,
                    target: h,
                    identifier: o,
                    active: y,
                    x: v[0] + s,
                    y: v[1] + d,
                    dx: v[0] - m[0],
                    dy: v[1] - m[1],
                    dispatch: p
                }), r);
            };
        }
        return h.filter = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t : Hn(!!t), h) : o;
        }, h.container = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t : Hn(t), h) : i;
        }, h.subject = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : Hn(t), h) : a;
        }, h.touchable = function(t) {
            return arguments.length ? (s = "function" == typeof t ? t : Hn(!!t), h) : s;
        }, h.on = function() {
            var t = c.on.apply(c, arguments);
            return t === c ? h : t;
        }, h.clickDistance = function(t) {
            return arguments.length ? (d = (t = +t) * t, h) : Math.sqrt(d);
        }, h;
    }
    Fn.prototype.on = function() {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this : t;
    };
    var Gn = Math.sqrt(50), qn = Math.sqrt(10), Un = Math.sqrt(2);
    function Kn(t, e, n) {
        var r = (e - t) / Math.max(0, n), o = Math.floor(Math.log(r) / Math.LN10), i = r / Math.pow(10, o);
        return o >= 0 ? (i >= Gn ? 10 : i >= qn ? 5 : i >= Un ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (i >= Gn ? 10 : i >= qn ? 5 : i >= Un ? 2 : 1);
    }
    function Jn(t, e) {
        return null == t || null == e ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }
    function Qn(t, e) {
        return null == t || null == e ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
    }
    function tr(t) {
        let e, n, r;
        function o(t, r, o = 0, i = t.length) {
            if (o < i) {
                if (0 !== e(r, r)) return i;
                do {
                    const e = o + i >>> 1;
                    n(t[e], r) < 0 ? o = e + 1 : i = e;
                }while (o < i);
            }
            return o;
        }
        return 2 !== t.length ? (e = Jn, n = (e, n)=>Jn(t(e), n), r = (e, n)=>t(e) - n) : (e = t === Jn || t === Qn ? t : er, n = t, r = t), {
            left: o,
            center: function(t, e, n = 0, i = t.length) {
                const a = o(t, e, n, i - 1);
                return a > n && r(t[a - 1], e) > -r(t[a], e) ? a - 1 : a;
            },
            right: function(t, r, o = 0, i = t.length) {
                if (o < i) {
                    if (0 !== e(r, r)) return i;
                    do {
                        const e = o + i >>> 1;
                        n(t[e], r) <= 0 ? o = e + 1 : i = e;
                    }while (o < i);
                }
                return o;
            }
        };
    }
    function er() {
        return 0;
    }
    const nr = tr(Jn), rr = nr.right, or = (nr.left, tr(function(t) {
        return null === t ? NaN : +t;
    }).center, rr);
    function ir(t, e) {
        var n, r = e ? e.length : 0, o = t ? Math.min(r, t.length) : 0, i = new Array(o), a = new Array(r);
        for(n = 0; n < o; ++n)i[n] = cr(t[n], e[n]);
        for(; n < r; ++n)a[n] = e[n];
        return function(t) {
            for(n = 0; n < o; ++n)a[n] = i[n](t);
            return a;
        };
    }
    function ar(t, e) {
        var n = new Date;
        return t = +t, e = +e, function(r) {
            return n.setTime(t * (1 - r) + e * r), n;
        };
    }
    function sr(t, e) {
        var n, r = {}, o = {};
        for(n in null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {}), e)n in t ? r[n] = cr(t[n], e[n]) : o[n] = e[n];
        return function(t) {
            for(n in r)o[n] = r[n](t);
            return o;
        };
    }
    function lr(t, e) {
        e || (e = []);
        var n, r = t ? Math.min(e.length, t.length) : 0, o = e.slice();
        return function(i) {
            for(n = 0; n < r; ++n)o[n] = t[n] * (1 - i) + e[n] * i;
            return o;
        };
    }
    function cr(t, e) {
        var n, r, o = typeof e;
        return null == e || "boolean" === o ? tn(e) : ("number" === o ? le : "string" === o ? (n = De(e)) ? (e = n, nn) : sn : e instanceof De ? nn : e instanceof Date ? ar : (r = e, !ArrayBuffer.isView(r) || r instanceof DataView ? Array.isArray(e) ? ir : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? sr : le : lr))(t, e);
    }
    function ur(t, e) {
        return t = +t, e = +e, function(n) {
            return Math.round(t * (1 - n) + e * n);
        };
    }
    function dr(t) {
        return +t;
    }
    var hr = [
        0,
        1
    ];
    function fr(t) {
        return t;
    }
    function pr(t, e) {
        var n;
        return (e -= t = +t) ? function(n) {
            return (n - t) / e;
        } : (n = isNaN(e) ? NaN : .5, function() {
            return n;
        });
    }
    function vr(t, e, n) {
        var r = t[0], o = t[1], i = e[0], a = e[1];
        return o < r ? (r = pr(o, r), i = n(a, i)) : (r = pr(r, o), i = n(i, a)), function(t) {
            return i(r(t));
        };
    }
    function yr(t, e, n) {
        var r = Math.min(t.length, e.length) - 1, o = new Array(r), i = new Array(r), a = -1;
        for(t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < r;)o[a] = pr(t[a], t[a + 1]), i[a] = n(e[a], e[a + 1]);
        return function(e) {
            var n = or(t, e, 1, r) - 1;
            return i[n](o[n](e));
        };
    }
    function mr(t, e) {
        switch(arguments.length){
            case 0:
                break;
            case 1:
                this.range(t);
                break;
            default:
                this.range(e).domain(t);
        }
        return this;
    }
    var gr, _r = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function wr(t) {
        if (!(e = _r.exec(t))) throw new Error("invalid format: " + t);
        var e;
        return new br({
            fill: e[1],
            align: e[2],
            sign: e[3],
            symbol: e[4],
            zero: e[5],
            width: e[6],
            comma: e[7],
            precision: e[8] && e[8].slice(1),
            trim: e[9],
            type: e[10]
        });
    }
    function br(t) {
        this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + "";
    }
    function Cr(t, e) {
        if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var n, r = t.slice(0, n);
        return [
            r.length > 1 ? r[0] + r.slice(2) : r,
            +t.slice(n + 1)
        ];
    }
    function xr(t) {
        return (t = Cr(Math.abs(t))) ? t[1] : NaN;
    }
    function Mr(t, e) {
        var n = Cr(t, e);
        if (!n) return t + "";
        var r = n[0], o = n[1];
        return o < 0 ? "0." + new Array(-o).join("0") + r : r.length > o + 1 ? r.slice(0, o + 1) + "." + r.slice(o + 1) : r + new Array(o - r.length + 2).join("0");
    }
    wr.prototype = br.prototype, br.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type;
    };
    const kr = {
        "%": (t, e)=>(100 * t).toFixed(e),
        b: (t)=>Math.round(t).toString(2),
        c: (t)=>t + "",
        d: function(t) {
            return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
        },
        e: (t, e)=>t.toExponential(e),
        f: (t, e)=>t.toFixed(e),
        g: (t, e)=>t.toPrecision(e),
        o: (t)=>Math.round(t).toString(8),
        p: (t, e)=>Mr(100 * t, e),
        r: Mr,
        s: function(t, e) {
            var n = Cr(t, e);
            if (!n) return t + "";
            var r = n[0], o = n[1], i = o - (gr = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1, a = r.length;
            return i === a ? r : i > a ? r + new Array(i - a + 1).join("0") : i > 0 ? r.slice(0, i) + "." + r.slice(i) : "0." + new Array(1 - i).join("0") + Cr(t, Math.max(0, e + i - 1))[0];
        },
        X: (t)=>Math.round(t).toString(16).toUpperCase(),
        x: (t)=>Math.round(t).toString(16)
    };
    function Sr(t) {
        return t;
    }
    var Nr, Er, Lr, Or = Array.prototype.map, Ar = [
        "y",
        "z",
        "a",
        "f",
        "p",
        "n",
        "\xb5",
        "m",
        "",
        "k",
        "M",
        "G",
        "T",
        "P",
        "E",
        "Z",
        "Y"
    ];
    function Tr(t) {
        var e = t.domain;
        return t.ticks = function(t) {
            var n = e();
            return function(t, e, n) {
                var r, o, i, a, s = -1;
                if (n = +n, (t = +t) == (e = +e) && n > 0) return [
                    t
                ];
                if ((r = e < t) && (o = t, t = e, e = o), 0 === (a = Kn(t, e, n)) || !isFinite(a)) return [];
                if (a > 0) {
                    let n = Math.round(t / a), r = Math.round(e / a);
                    for(n * a < t && ++n, r * a > e && --r, i = new Array(o = r - n + 1); ++s < o;)i[s] = (n + s) * a;
                } else {
                    a = -a;
                    let n = Math.round(t * a), r = Math.round(e * a);
                    for(n / a < t && ++n, r / a > e && --r, i = new Array(o = r - n + 1); ++s < o;)i[s] = (n + s) / a;
                }
                return r && i.reverse(), i;
            }(n[0], n[n.length - 1], null == t ? 10 : t);
        }, t.tickFormat = function(t, n) {
            var r = e();
            return function(t, e, n, r) {
                var o, i = function(t, e, n) {
                    var r = Math.abs(e - t) / Math.max(0, n), o = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), i = r / o;
                    return i >= Gn ? o *= 10 : i >= qn ? o *= 5 : i >= Un && (o *= 2), e < t ? -o : o;
                }(t, e, n);
                switch((r = wr(null == r ? ",f" : r)).type){
                    case "s":
                        var a = Math.max(Math.abs(t), Math.abs(e));
                        return null != r.precision || isNaN(o = function(t, e) {
                            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(xr(e) / 3))) - xr(Math.abs(t)));
                        }(i, a)) || (r.precision = o), Lr(r, a);
                    case "":
                    case "e":
                    case "g":
                    case "p":
                    case "r":
                        null != r.precision || isNaN(o = function(t, e) {
                            return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, xr(e) - xr(t)) + 1;
                        }(i, Math.max(Math.abs(t), Math.abs(e)))) || (r.precision = o - ("e" === r.type));
                        break;
                    case "f":
                    case "%":
                        null != r.precision || isNaN(o = function(t) {
                            return Math.max(0, -xr(Math.abs(t)));
                        }(i)) || (r.precision = o - 2 * ("%" === r.type));
                }
                return Er(r);
            }(r[0], r[r.length - 1], null == t ? 10 : t, n);
        }, t.nice = function(n) {
            null == n && (n = 10);
            var r, o, i = e(), a = 0, s = i.length - 1, l = i[a], c = i[s], u = 10;
            for(c < l && (o = l, l = c, c = o, o = a, a = s, s = o); u-- > 0;){
                if ((o = Kn(l, c, n)) === r) return i[a] = l, i[s] = c, e(i);
                if (o > 0) l = Math.floor(l / o) * o, c = Math.ceil(c / o) * o;
                else {
                    if (!(o < 0)) break;
                    l = Math.ceil(l * o) / o, c = Math.floor(c * o) / o;
                }
                r = o;
            }
            return t;
        }, t;
    }
    function Br() {
        var t = (function() {
            var t, e, n, r, o, i, a = hr, s = hr, l = cr, c = fr;
            function u() {
                var t, e, n, l = Math.min(a.length, s.length);
                return c !== fr && (t = a[0], e = a[l - 1], t > e && (n = t, t = e, e = n), c = function(n) {
                    return Math.max(t, Math.min(e, n));
                }), r = l > 2 ? yr : vr, o = i = null, d;
            }
            function d(e) {
                return null == e || isNaN(e = +e) ? n : (o || (o = r(a.map(t), s, l)))(t(c(e)));
            }
            return d.invert = function(n) {
                return c(e((i || (i = r(s, a.map(t), le)))(n)));
            }, d.domain = function(t) {
                return arguments.length ? (a = Array.from(t, dr), u()) : a.slice();
            }, d.range = function(t) {
                return arguments.length ? (s = Array.from(t), u()) : s.slice();
            }, d.rangeRound = function(t) {
                return s = Array.from(t), l = ur, u();
            }, d.clamp = function(t) {
                return arguments.length ? (c = !!t || fr, u()) : c !== fr;
            }, d.interpolate = function(t) {
                return arguments.length ? (l = t, u()) : l;
            }, d.unknown = function(t) {
                return arguments.length ? (n = t, d) : n;
            }, function(n, r) {
                return t = n, e = r, u();
            };
        })()(fr, fr);
        return t.copy = function() {
            var e;
            return e = t, Br().domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
        }, mr.apply(t, arguments), Tr(t);
    }
    function zr(t) {
        return Bn(pt(t).call(document.documentElement));
    }
    Nr = function(t) {
        var e, n, r = void 0 === t.grouping || void 0 === t.thousands ? Sr : (e = Or.call(t.grouping, Number), n = t.thousands + "", function(t, r) {
            for(var o = t.length, i = [], a = 0, s = e[0], l = 0; o > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), i.push(t.substring(o -= s, o + s)), !((l += s + 1) > r));)s = e[a = (a + 1) % e.length];
            return i.reverse().join(n);
        }), o = void 0 === t.currency ? "" : t.currency[0] + "", i = void 0 === t.currency ? "" : t.currency[1] + "", a = void 0 === t.decimal ? "." : t.decimal + "", s = void 0 === t.numerals ? Sr : function(t) {
            return function(e) {
                return e.replace(/[0-9]/g, function(e) {
                    return t[+e];
                });
            };
        }(Or.call(t.numerals, String)), l = void 0 === t.percent ? "%" : t.percent + "", c = void 0 === t.minus ? "\u2212" : t.minus + "", u = void 0 === t.nan ? "NaN" : t.nan + "";
        function d(t) {
            var e = (t = wr(t)).fill, n = t.align, d = t.sign, h = t.symbol, f = t.zero, p = t.width, v = t.comma, y = t.precision, m = t.trim, g = t.type;
            "n" === g ? (v = !0, g = "g") : kr[g] || (void 0 === y && (y = 12), m = !0, g = "g"), (f || "0" === e && "=" === n) && (f = !0, e = "0", n = "=");
            var _ = "$" === h ? o : "#" === h && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "", w = "$" === h ? i : /[%p]/.test(g) ? l : "", b = kr[g], C = /[defgprs%]/.test(g);
            function x(t) {
                var o, i, l, h = _, x = w;
                if ("c" === g) x = b(t) + x, t = "";
                else {
                    var M = (t = +t) < 0 || 1 / t < 0;
                    if (t = isNaN(t) ? u : b(Math.abs(t), y), m && (t = function(t) {
                        t: for(var e, n = t.length, r = 1, o = -1; r < n; ++r)switch(t[r]){
                            case ".":
                                o = e = r;
                                break;
                            case "0":
                                0 === o && (o = r), e = r;
                                break;
                            default:
                                if (!+t[r]) break t;
                                o > 0 && (o = 0);
                        }
                        return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
                    }(t)), M && 0 == +t && "+" !== d && (M = !1), h = (M ? "(" === d ? d : c : "-" === d || "(" === d ? "" : d) + h, x = ("s" === g ? Ar[8 + gr / 3] : "") + x + (M && "(" === d ? ")" : ""), C) {
                        for(o = -1, i = t.length; ++o < i;)if (48 > (l = t.charCodeAt(o)) || l > 57) {
                            x = (46 === l ? a + t.slice(o + 1) : t.slice(o)) + x, t = t.slice(0, o);
                            break;
                        }
                    }
                }
                v && !f && (t = r(t, 1 / 0));
                var k = h.length + t.length + x.length, S = k < p ? new Array(p - k + 1).join(e) : "";
                switch(v && f && (t = r(S + t, S.length ? p - x.length : 1 / 0), S = ""), n){
                    case "<":
                        t = h + t + x + S;
                        break;
                    case "=":
                        t = h + S + t + x;
                        break;
                    case "^":
                        t = S.slice(0, k = S.length >> 1) + h + t + x + S.slice(k);
                        break;
                    default:
                        t = S + h + t + x;
                }
                return s(t);
            }
            return y = void 0 === y ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y)), x.toString = function() {
                return t + "";
            }, x;
        }
        return {
            format: d,
            formatPrefix: function(t, e) {
                var n = d(((t = wr(t)).type = "f", t)), r = 3 * Math.max(-8, Math.min(8, Math.floor(xr(e) / 3))), o = Math.pow(10, -r), i = Ar[8 + r / 3];
                return function(t) {
                    return n(o * t) + i;
                };
            }
        };
    }({
        thousands: ",",
        grouping: [
            3
        ],
        currency: [
            "$",
            ""
        ]
    }), Er = Nr.format, Lr = Nr.formatPrefix;
    const Pr = Math.PI, Ir = 2 * Pr, Dr = 1e-6, Zr = Ir - Dr;
    function jr() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
    }
    function Vr() {
        return new jr;
    }
    jr.prototype = Vr.prototype = {
        constructor: jr,
        moveTo: function(t, e) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e);
        },
        closePath: function() {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
        },
        lineTo: function(t, e) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e);
        },
        quadraticCurveTo: function(t, e, n, r) {
            this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r);
        },
        bezierCurveTo: function(t, e, n, r, o, i) {
            this._ += "C" + +t + "," + +e + "," + +n + "," + +r + "," + (this._x1 = +o) + "," + (this._y1 = +i);
        },
        arcTo: function(t, e, n, r, o) {
            t = +t, e = +e, n = +n, r = +r, o = +o;
            var i = this._x1, a = this._y1, s = n - t, l = r - e, c = i - t, u = a - e, d = c * c + u * u;
            if (o < 0) throw new Error("negative radius: " + o);
            if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
            else if (d > Dr) {
                if (Math.abs(u * s - l * c) > Dr && o) {
                    var h = n - i, f = r - a, p = s * s + l * l, v = h * h + f * f, y = Math.sqrt(p), m = Math.sqrt(d), g = o * Math.tan((Pr - Math.acos((p + d - v) / (2 * y * m))) / 2), _ = g / m, w = g / y;
                    Math.abs(_ - 1) > Dr && (this._ += "L" + (t + _ * c) + "," + (e + _ * u)), this._ += "A" + o + "," + o + ",0,0," + +(u * h > c * f) + "," + (this._x1 = t + w * s) + "," + (this._y1 = e + w * l);
                } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
            }
        },
        arc: function(t, e, n, r, o, i) {
            t = +t, e = +e, i = !!i;
            var a = (n = +n) * Math.cos(r), s = n * Math.sin(r), l = t + a, c = e + s, u = 1 ^ i, d = i ? r - o : o - r;
            if (n < 0) throw new Error("negative radius: " + n);
            null === this._x1 ? this._ += "M" + l + "," + c : (Math.abs(this._x1 - l) > Dr || Math.abs(this._y1 - c) > Dr) && (this._ += "L" + l + "," + c), n && (d < 0 && (d = d % Ir + Ir), d > Zr ? this._ += "A" + n + "," + n + ",0,1," + u + "," + (t - a) + "," + (e - s) + "A" + n + "," + n + ",0,1," + u + "," + (this._x1 = l) + "," + (this._y1 = c) : d > Dr && (this._ += "A" + n + "," + n + ",0," + +(d >= Pr) + "," + u + "," + (this._x1 = t + n * Math.cos(o)) + "," + (this._y1 = e + n * Math.sin(o))));
        },
        rect: function(t, e, n, r) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +r + "h" + -n + "Z";
        },
        toString: function() {
            return this._;
        }
    };
    const Hr = Vr;
    var Fr = Array.prototype.slice;
    function Rr(t) {
        return function() {
            return t;
        };
    }
    class Yr {
        constructor(t, e){
            this._context = t, this._x = e;
        }
        areaStart() {
            this._line = 0;
        }
        areaEnd() {
            this._line = NaN;
        }
        lineStart() {
            this._point = 0;
        }
        lineEnd() {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        }
        point(t, e) {
            switch(t = +t, e = +e, this._point){
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, e, t, e) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + e) / 2, t, this._y0, t, e);
            }
            this._x0 = t, this._y0 = e;
        }
    }
    function Wr(t) {
        return t[0];
    }
    function Xr(t) {
        return t[1];
    }
    function $r(t) {
        return t.source;
    }
    function Gr(t) {
        return t.target;
    }
    function qr(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2;
    }
    const Ur = function t(e, n, r) {
        function o(t, o) {
            var i, a, s = t[0], l = t[1], c = t[2], u = o[0], d = o[1], h = o[2], f = u - s, p = d - l, v = f * f + p * p;
            if (v < 1e-12) a = Math.log(h / c) / e, i = function(t) {
                return [
                    s + t * f,
                    l + t * p,
                    c * Math.exp(e * t * a)
                ];
            };
            else {
                var y = Math.sqrt(v), m = (h * h - c * c + r * v) / (2 * c * n * y), g = (h * h - c * c - r * v) / (2 * h * n * y), _ = Math.log(Math.sqrt(m * m + 1) - m), w = Math.log(Math.sqrt(g * g + 1) - g);
                a = (w - _) / e, i = function(t) {
                    var r, o = t * a, i = qr(_), u = c / (n * y) * (i * (r = e * o + _, ((r = Math.exp(2 * r)) - 1) / (r + 1)) - function(t) {
                        return ((t = Math.exp(t)) - 1 / t) / 2;
                    }(_));
                    return [
                        s + u * f,
                        l + u * p,
                        c * i / qr(e * o + _)
                    ];
                };
            }
            return i.duration = 1e3 * a * e / Math.SQRT2, i;
        }
        return o.rho = function(e) {
            var n = Math.max(.001, +e), r = n * n;
            return t(n, r, r * r);
        }, o;
    }(Math.SQRT2, 2, 4), Kr = (t)=>()=>t;
    function Jr(t, { sourceEvent: e, target: n, transform: r, dispatch: o }) {
        Object.defineProperties(this, {
            type: {
                value: t,
                enumerable: !0,
                configurable: !0
            },
            sourceEvent: {
                value: e,
                enumerable: !0,
                configurable: !0
            },
            target: {
                value: n,
                enumerable: !0,
                configurable: !0
            },
            transform: {
                value: r,
                enumerable: !0,
                configurable: !0
            },
            _: {
                value: o
            }
        });
    }
    function Qr(t, e, n) {
        this.k = t, this.x = e, this.y = n;
    }
    Qr.prototype = {
        constructor: Qr,
        scale: function(t) {
            return 1 === t ? this : new Qr(this.k * t, this.x, this.y);
        },
        translate: function(t, e) {
            return 0 === t & 0 === e ? this : new Qr(this.k, this.x + this.k * t, this.y + this.k * e);
        },
        apply: function(t) {
            return [
                t[0] * this.k + this.x,
                t[1] * this.k + this.y
            ];
        },
        applyX: function(t) {
            return t * this.k + this.x;
        },
        applyY: function(t) {
            return t * this.k + this.y;
        },
        invert: function(t) {
            return [
                (t[0] - this.x) / this.k,
                (t[1] - this.y) / this.k
            ];
        },
        invertX: function(t) {
            return (t - this.x) / this.k;
        },
        invertY: function(t) {
            return (t - this.y) / this.k;
        },
        rescaleX: function(t) {
            return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
        },
        rescaleY: function(t) {
            return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
        },
        toString: function() {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
        }
    };
    var to, eo = new Qr(1, 0, 0);
    function no(t) {
        t.stopImmediatePropagation();
    }
    function ro(t) {
        t.preventDefault(), t.stopImmediatePropagation();
    }
    function oo(t) {
        return !(t.ctrlKey && "wheel" !== t.type || t.button);
    }
    function io() {
        var t = this;
        return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [
            [
                (t = t.viewBox.baseVal).x,
                t.y
            ],
            [
                t.x + t.width,
                t.y + t.height
            ]
        ] : [
            [
                0,
                0
            ],
            [
                t.width.baseVal.value,
                t.height.baseVal.value
            ]
        ] : [
            [
                0,
                0
            ],
            [
                t.clientWidth,
                t.clientHeight
            ]
        ];
    }
    function ao() {
        return this.__zoom || eo;
    }
    function so(t) {
        return -t.deltaY * (1 === t.deltaMode ? .05 : t.deltaMode ? 1 : .002) * (t.ctrlKey ? 10 : 1);
    }
    function lo() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
    }
    function co(t, e, n) {
        var r = t.invertX(e[0][0]) - n[0][0], o = t.invertX(e[1][0]) - n[1][0], i = t.invertY(e[0][1]) - n[0][1], a = t.invertY(e[1][1]) - n[1][1];
        return t.translate(o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o), a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a));
    }
    Qr.prototype, function(t) {
        t.ErrorMarker = "error_marker";
    }(to || (to = {}));
    function uo(t, e) {
        var n = !1;
        "#" === t[0] && (t = t.slice(1), n = !0);
        var r = parseInt(t, 16), o = (r >> 16) + e;
        o > 255 ? o = 255 : o < 0 && (o = 0);
        var i = (r >> 8 & 255) + e;
        i > 255 ? i = 255 : i < 0 && (i = 0);
        var a = (255 & r) + e;
        a > 255 ? a = 255 : a < 0 && (a = 0);
        var s = a | i << 8 | o << 16;
        return n ? "#" + s.toString(16) : s.toString(16);
    }
    var ho, fo = function(t) {
        var e = t.x, n = t.y, r = t.w, o = t.h, i = t.r, a = void 0 === i ? 0 : i, s = t.border, l = {
            tl: !1,
            tr: !1,
            br: !1,
            bl: !1
        };
        a && (s ? (l.tl = s[0], l.tr = s[1], l.br = s[3], l.bl = s[2]) : (l.tl = !0, l.tr = !0, l.br = !0, l.bl = !0));
        var c = "M" + (e + a) + "," + n + "h" + (r - 2 * a);
        return l.tr ? c += "a" + a + "," + a + " 0 0 1 " + a + "," + a : (c += "h" + a, c += "v" + a), c += "v" + (o - 2 * a), l.br ? c += "a" + a + "," + a + " 0 0 1 " + -a + "," + a : (c += "v" + a, c += "h" + -a), c += "h" + (2 * a - r), l.bl ? c += "a" + a + "," + a + " 0 0 1 " + -a + "," + -a : (c += "h" + -a, c += "v" + -a), c += "v" + (2 * a - o), l.tl ? c += "a" + a + "," + a + " 0 0 1 " + a + "," + -a : (c += "v" + -a, c += "h" + a), c + "z";
    }, po = "clip-border-", vo = "clip-", yo = s.render.strokeSize / 2, mo = 2 * yo, go = function(t) {
        var e = t.id, n = t.width, r = t.height, o = t.element, i = t.r;
        o.append("clipPath").attr("id", vo + e).append("path").attr("d", fo({
            x: yo,
            y: yo,
            w: n - 2 * yo,
            h: r - 2 * yo,
            r: i
        })), o.attr("clip-path", "url(#".concat(vo).concat(e, ")"));
    }, _o = function(t, e, n) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        var r = zr("svg:g");
        return r.append("circle").attr("class", "connector_circle").attr("r", s.render.node.control.connectorRadius - s.render.strokeSize).attr("fill", s.render.color.elementBackground).attr("stroke", n ? s.render.color.disabledStroke : s.render.color.stroke).attr("stroke-width", s.render.strokeSize).attr("cx", s.render.node.control.connectorRadius).attr("cy", s.render.node.control.connectorRadius), r.append("use").style("color", s.render.tool.textColor).attr("x", 2).attr("y", 2).attr("href", "#".concat(t)).style("opacity", n ? .4 : 1), e && r.on("mouseover", function() {
            Bn(this).select(".connector_circle").attr("fill", s.render.color.elementBackgroundHover2);
        }).on("mouseout", function() {
            Bn(this).select(".connector_circle").attr("fill", s.render.color.elementBackground);
        }), r;
    }, wo = (function(t) {
        let e = $r, n = Gr, r = Wr, o = Xr, i = null, a = null;
        function s() {
            let s;
            const l = Fr.call(arguments), c = e.apply(this, l), u = n.apply(this, l);
            if (null == i && (a = t(s = Hr())), a.lineStart(), l[0] = c, a.point(+r.apply(this, l), +o.apply(this, l)), l[0] = u, a.point(+r.apply(this, l), +o.apply(this, l)), a.lineEnd(), s) return a = null, s + "" || null;
        }
        return s.source = function(t) {
            return arguments.length ? (e = t, s) : e;
        }, s.target = function(t) {
            return arguments.length ? (n = t, s) : n;
        }, s.x = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : Rr(+t), s) : r;
        }, s.y = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t : Rr(+t), s) : o;
        }, s.context = function(e) {
            return arguments.length ? (null == e ? i = a = null : a = t(i = e), s) : i;
        }, s;
    })(function(t) {
        return new Yr(t, !0);
    }).x(function(t) {
        return t[0];
    }).y(function(t) {
        return t[1];
    }), bo = function(t) {
        var e = t.text, n = t.posX, r = t.posY, o = t.width, i = t.height, a = void 0 === i ? 16 : i, s = t.fontSize, l = t.fontWeight, c = t.color, u = zr("svg:foreignObject");
        return u.attr("x", n).attr("y", r).attr("width", o).attr("height", a).attr("class", "mge-text").html(e), s && 12 !== s && u.style("font-size", s), c && "rgb(255, 255, 255)" !== c && "#FFFFFF" !== c && u.style("color", c), l && 500 !== l && u.style("font-weight", l), u;
    }, Co = function(t) {
        return bo(t).node();
    };
    !function(t) {
        t.Order = "node_order", t.PreviewPlaceholder = "preview_placeholder", t.PreviewClipPath = "preview_clip_path", t.Connector = "node_connector", t.ConnectorDisabled = "node_connector_disabled", t.LinearGradient = "linear_gradient";
    }(ho || (ho = {}));
    var xo, Mo, ko = function(t) {
        var e, n = this;
        this._defsDOMElement = t, this.dispose = function() {
            n._defsDOMElement.selectAll("*").remove();
        }, h(t), t.selectAll("marker").data(v).join("marker").attr("id", function(t) {
            return t.name;
        }).attr("stroke", function(t) {
            return t.stroke;
        }).attr("stroke-width", function(t) {
            return t.strokeWidth;
        }).attr("markerHeight", function(t) {
            return t.size;
        }).attr("markerWidth", function(t) {
            return t.size;
        }).attr("markerUnits", "strokeWidth").attr("orient", "auto").attr("refX", 0).attr("refY", 0).attr("viewBox", function(t) {
            return t.viewBox;
        }).append("path").attr("d", function(t) {
            return t.path;
        }).attr("fill", function(t) {
            return t.fill;
        }), (e = t).append(function() {
            var t;
            return (t = zr("svg:g").attr("id", ho.PreviewPlaceholder)).append("rect").attr("x", 2).attr("y", 0).attr("width", s.render.node.width - 4).attr("height", s.render.node.componentPreviewHeight).attr("fill", s.render.node.previewPlaceholder.backgroundColor), t.append("path").attr("d", fo({
                x: 8,
                y: 8,
                w: s.render.node.width - 16,
                h: s.render.node.componentPreviewHeight - 16,
                r: 8
            })).attr("stroke-width", s.render.strokeSize).attr("stroke", s.render.node.previewPlaceholder.borderColor).style("stroke-dasharray", "2, 4").attr("fill", "none"), t.append("text").text(s.translation.node_video_error).attr("text-anchor", "middle").attr("font-weight", 600).attr("font-size", 15).style("fill", s.render.node.previewPlaceholder.textColor).attr("x", s.render.node.width / 2).attr("y", s.render.node.componentPreviewHeight / 2 + 6).attr("text-rendering", "optimizeSpeed"), t.node();
        }), e.append(function() {
            return zr("svg:path").attr("id", ho.Connector).attr("d", "M0,0 L1,1z").attr("fill", "none").style("marker-start", "url(#".concat(u.Circle, ")")).node();
        }), e.append(function() {
            return zr("svg:path").attr("id", ho.ConnectorDisabled).attr("d", "M0,0 L1,1z").attr("fill", "none").style("marker-start", "url(#".concat(u.CircleDisabled, ")")).node();
        }), e.append(function() {
            var t;
            return (t = zr("svg").attr("id", ho.Order)).append("circle").attr("r", s.render.node.componentOrderRadius).attr("fill", "#FFFFFF").attr("cx", s.render.node.componentOrderRadius).attr("cy", s.render.node.componentOrderRadius), t.node();
        }), e.append(function() {
            return function() {
                var t = Br().range([
                    s.render.color.nodeStroke,
                    "rgba(0, 0, 0, 0)"
                ]).domain([
                    1,
                    2
                ]), e = zr("svg:linearGradient").attr("id", ho.LinearGradient);
                return e.append("stop").attr("offset", "5%").attr("stop-color", t(1)), e.append("stop").attr("offset", "70%").attr("stop-color", t(2)), e.node();
            }();
        }), e.append(function() {
            var t;
            return (t = zr("svg:clipPath").attr("id", ho.PreviewClipPath)).append("path").attr("d", fo({
                x: 2,
                y: s.render.node.headerHeight + 1,
                w: s.render.node.width - 4,
                h: s.render.node.componentPreviewHeight - 1,
                r: 8
            })), t.node();
        }), function(t) {
            t.append(function() {
                var t, e;
                return t = s.render.iconSize + 8, (e = zr("svg:g").attr("id", to.ErrorMarker)).append("svg").attr("width", t).attr("height", t).attr("viewBox", "0 0 ".concat(s.render.iconSize, " ").concat(s.render.iconSize)).append("use").style("color", s.render.color.error).attr("href", "#".concat(c.Warning)), e.append("rect").attr("fill", "transparent").attr("width", t).attr("height", t), e.node();
            });
        }(t);
    };
    (Mo = xo || (xo = {}))[Mo.NoVideo = 0] = "NoVideo", Mo[Mo.NoEOV = 1] = "NoEOV", Mo[Mo.NoBranches = 2] = "NoBranches";
    const So = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
    };
    let No;
    const Eo = new Uint8Array(16);
    function Lo() {
        if (!No && (No = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !No)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return No(Eo);
    }
    const Oo = [];
    for(let t = 0; t < 256; ++t)Oo.push((t + 256).toString(16).slice(1));
    const Ao = function(t, e, n) {
        if (So.randomUUID && !e && !t) return So.randomUUID();
        const r = (t = t || {}).random || (t.rng || Lo)();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, e) {
            n = n || 0;
            for(let t = 0; t < 16; ++t)e[n + t] = r[t];
            return e;
        }
        return function(t, e = 0) {
            return (Oo[t[e + 0]] + Oo[t[e + 1]] + Oo[t[e + 2]] + Oo[t[e + 3]] + "-" + Oo[t[e + 4]] + Oo[t[e + 5]] + "-" + Oo[t[e + 6]] + Oo[t[e + 7]] + "-" + Oo[t[e + 8]] + Oo[t[e + 9]] + "-" + Oo[t[e + 10]] + Oo[t[e + 11]] + Oo[t[e + 12]] + Oo[t[e + 13]] + Oo[t[e + 14]] + Oo[t[e + 15]]).toLowerCase();
        }(r);
    };
    var To, Bo = function() {
        return Bo = Object.assign || function(t) {
            for(var e, n = 1, r = arguments.length; n < r; n++)for(var o in e = arguments[n])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
        }, Bo.apply(this, arguments);
    }, zo = (Object.freeze({
        background: "#0D0F12",
        border: "#0D0F12",
        text: "#F2F5FF"
    }), function(t, e, n) {
        switch(e){
            case "setNextBranch":
                return {
                    type: t,
                    action: {
                        type: e,
                        args: {
                            branchId: n,
                            shouldOpenNow: !0
                        }
                    }
                };
            case "continuePlayback":
                return {
                    type: t,
                    action: {
                        type: e,
                        args: {
                            shouldOpenNow: !0
                        }
                    }
                };
        }
    }), Po = function() {
        return Po = Object.assign || function(t) {
            for(var e, n = 1, r = arguments.length; n < r; n++)for(var o in e = arguments[n])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
        }, Po.apply(this, arguments);
    }, Io = function(t, e) {
        var n = {};
        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for(r = Object.getOwnPropertySymbols(t); o < r.length; o++)e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
        }
        return n;
    }, Do = function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator, n = e && t[e], r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                };
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, Zo = function() {
        return Zo = Object.assign || function(t) {
            for(var e, n = 1, r = arguments.length; n < r; n++)for(var o in e = arguments[n])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
        }, Zo.apply(this, arguments);
    }, jo = function() {
        return jo = Object.assign || function(t) {
            for(var e, n = 1, r = arguments.length; n < r; n++)for(var o in e = arguments[n])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
        }, jo.apply(this, arguments);
    }, Vo = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, Ho = function(t, e, n) {
        if (n || 2 === arguments.length) for(var r, o = 0, i = e.length; o < i; o++)!r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e));
    }, Fo = function(t) {
        for(var e = 1, n = Ai(), r = function() {
            return "".concat(t, " (").concat(s.translation.copied_chapter_suffix).concat(e, ")");
        }, o = r(); n.has(o);)e += 1, o = r();
        return o;
    }, Ro = function(t, e) {
        return {
            type: "onSuspense",
            action: {
                type: t,
                args: {
                    branchId: e,
                    shouldOpenNow: !0
                }
            }
        };
    }, Yo = function(t, e) {
        return e.map(function(e) {
            return e.action.args.branchId && t.includes(e.action.args.branchId) ? jo(jo({}, e), {
                action: jo(jo({}, e.action), {
                    args: jo(jo({}, e.action.args), {
                        branchId: void 0
                    })
                })
            }) : e;
        });
    }, Wo = function(t, e) {
        return e.length ? jo(jo({}, t), {
            branches: t.branches.filter(function(t) {
                return !e.includes(t.id);
            }),
            containers: t.containers.map(function(t) {
                return jo(jo({}, t), {
                    controls: t.controls.map(function(t) {
                        return jo(jo({}, t), {
                            events: Yo(e, t.events)
                        });
                    }),
                    events: Yo(e, t.events)
                });
            }),
            events: Yo(e, t.events)
        }) : t;
    }, Xo = function(t) {
        return void 0 === t && (t = []), {
            edit: {
                chapters: t
            },
            view: {}
        };
    }, $o = function() {
        return $o = Object.assign || function(t) {
            for(var e, n = 1, r = arguments.length; n < r; n++)for(var o in e = arguments[n])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
        }, $o.apply(this, arguments);
    }, Go = function(t, e) {
        var n = {};
        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for(r = Object.getOwnPropertySymbols(t); o < r.length; o++)e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
        }
        return n;
    }, qo = [
        {
            version: "3.0",
            migrate: function(t) {
                var e, n, r, o, i, a, s, l, c = [];
                try {
                    for(var u = Do(t.chapters), d = u.next(); !d.done; d = u.next()){
                        var h = d.value, f = void 0, p = [];
                        try {
                            for(var v = (r = void 0, Do(h.branches)), y = v.next(); !y.done; y = v.next()){
                                var m = y.value, g = m.isDefault, _ = Io(m, [
                                    "isDefault"
                                ]);
                                g && (f = _.id), p.push(_);
                            }
                        } catch (t) {
                            r = {
                                error: t
                            };
                        } finally{
                            try {
                                y && !y.done && (o = v.return) && o.call(v);
                            } finally{
                                if (r) throw r.error;
                            }
                        }
                        var w = void 0, b = [];
                        try {
                            for(var C = (i = void 0, Do(h.containers)), x = C.next(); !x.done; x = C.next()){
                                var M = x.value, k = M.fallbackStrategy, S = Io(M, [
                                    "fallbackStrategy"
                                ]);
                                switch(k){
                                    case "await":
                                        w = [];
                                        break;
                                    case "default":
                                        w = [
                                            {
                                                type: "onSuspense",
                                                action: {
                                                    type: "setNextBranch",
                                                    args: {
                                                        branchId: f,
                                                        shouldOpenNow: !0
                                                    }
                                                }
                                            }
                                        ];
                                        break;
                                    case "weightlessRandom":
                                    case "random":
                                        w = [
                                            {
                                                type: "onSuspense",
                                                action: {
                                                    type: "setRandomBranch",
                                                    args: {
                                                        shouldOpenNow: !0
                                                    }
                                                }
                                            }
                                        ];
                                }
                                try {
                                    for(var N = (s = void 0, Do(S.controls)), E = N.next(); !E.done; E = N.next()){
                                        var L = E.value;
                                        b.push(Po(Po({}, S), {
                                            controls: [
                                                Po(Po({}, L), {
                                                    events: "Text" === L.subtype || L.events.length ? L.events : [
                                                        zo("onClick", "continuePlayback")
                                                    ]
                                                })
                                            ],
                                            id: Ao(),
                                            events: [
                                                {
                                                    type: "onSuspense",
                                                    action: {
                                                        type: "continuePlayback",
                                                        args: {
                                                            shouldOpenNow: !0
                                                        }
                                                    }
                                                }
                                            ]
                                        }));
                                    }
                                } catch (t) {
                                    s = {
                                        error: t
                                    };
                                } finally{
                                    try {
                                        E && !E.done && (l = N.return) && l.call(N);
                                    } finally{
                                        if (s) throw s.error;
                                    }
                                }
                            }
                        } catch (t) {
                            i = {
                                error: t
                            };
                        } finally{
                            try {
                                x && !x.done && (a = C.return) && a.call(C);
                            } finally{
                                if (i) throw i.error;
                            }
                        }
                        c.push(Po(Po({}, h), {
                            containers: b,
                            events: w,
                            branches: p
                        }));
                    }
                } catch (t) {
                    e = {
                        error: t
                    };
                } finally{
                    try {
                        d && !d.done && (n = u.return) && n.call(u);
                    } finally{
                        if (e) throw e.error;
                    }
                }
                return t.metadata.version = "3.1", t.metadata.updated = (new Date).toISOString(), Po(Po({}, t), {
                    chapters: c
                });
            }
        },
        {
            version: "3.1",
            migrate: function(t) {
                var e = t.metadata, n = e.media, r = function(t, e) {
                    var n = {};
                    for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for(r = Object.getOwnPropertySymbols(t); o < r.length; o++)e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
                    }
                    return n;
                }(e, [
                    "media"
                ]);
                if ("string" == typeof n) throw new Error("Manifest media should be parsed");
                return {
                    chapters: t.chapters,
                    metadata: Zo(Zo({}, r), {
                        version: "3.2"
                    }),
                    media: n
                };
            }
        },
        {
            version: "3.2",
            migrate: function(t) {
                var e, n, r = [], o = [], i = function(t) {
                    var e = t.x, n = t.y, i = Go(t, [
                        "x",
                        "y"
                    ]), a = Array.isArray(t.events) && !t.events.length, s = [], l = i.containers.map(function(t) {
                        var e;
                        return $o($o({}, t), {
                            events: (a ? null === (e = t.events) || void 0 === e ? void 0 : e.map(function(t) {
                                return "onSuspense" === t.type ? (t.action.args.branchId && s.push(t.action.args.branchId), Ro("expect")) : t;
                            }) : t.events) || [],
                            controls: t.controls.map(function(t) {
                                var e = t.subtype, n = Go(t, [
                                    "subtype"
                                ]);
                                return $o($o({}, n), {
                                    type: e,
                                    events: n.events || [
                                        zo("onClick", "continuePlayback")
                                    ]
                                });
                            })
                        });
                    });
                    r.push(Wo($o($o({}, i), {
                        containers: l,
                        events: t.events || []
                    }), s)), o.push({
                        id: i.id,
                        x: e,
                        y: n
                    });
                };
                try {
                    for(var a = function(t) {
                        var e = "function" == typeof Symbol && Symbol.iterator, n = e && t[e], r = 0;
                        if (n) return n.call(t);
                        if (t && "number" == typeof t.length) return {
                            next: function() {
                                return t && r >= t.length && (t = void 0), {
                                    value: t && t[r++],
                                    done: !t
                                };
                            }
                        };
                        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
                    }(t.chapters), s = a.next(); !s.done; s = a.next())i(s.value);
                } catch (t) {
                    e = {
                        error: t
                    };
                } finally{
                    try {
                        s && !s.done && (n = a.return) && n.call(a);
                    } finally{
                        if (e) throw e.error;
                    }
                }
                return $o($o({}, t), {
                    chapters: r,
                    graph: Xo(o),
                    metadata: $o($o({}, t.metadata), {
                        version: "3.3"
                    })
                });
            }
        }
    ], Uo = function(t, e) {
        return null == e ? void 0 : e.find(function(e) {
            return e.type === t;
        });
    }, Ko = function(t, e) {
        var n, r;
        void 0 === e && (e = function(t) {
            return t.id;
        });
        var o = {};
        try {
            for(var i = function(t) {
                var e = "function" == typeof Symbol && Symbol.iterator, n = e && t[e], r = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && r >= t.length && (t = void 0), {
                            value: t && t[r++],
                            done: !t
                        };
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }(t), a = i.next(); !a.done; a = i.next()){
                var s = a.value;
                o[e(s)] = s;
            }
        } catch (t) {
            n = {
                error: t
            };
        } finally{
            try {
                a && !a.done && (r = i.return) && r.call(i);
            } finally{
                if (n) throw n.error;
            }
        }
        return o;
    };
    !function(t) {
        t.Failed = "ManifestParsingFailed", t.UnsupportedVersion = "ManifestUnsupportedVersion";
    }(To || (To = {}));
    var Jo = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, Qo = function(t, e, n) {
        if (n || 2 === arguments.length) for(var r, o = 0, i = e.length; o < i; o++)!r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e));
    };
    function ti(t) {
        return "number" == typeof t;
    }
    function ei(t) {
        var e = {};
        return Object.keys(t).forEach(function(n) {
            (function(t) {
                return null !== t && "object" == typeof t;
            })(t[n]) && (e[n] = ei(t[n])), null !== t[n] && (e[n] = t[n]);
        }), e;
    }
    var ni = function(t) {
        l.emit("events", {
            name: "chapterUpdated",
            context: t
        });
    }, ri = function(t) {
        l.emit("actions", {
            name: "updateChapterOrder",
            context: t
        });
    }, oi = function(t) {
        l.emit("actions", {
            name: "deleteChapters",
            context: t.map(function(t) {
                return {
                    id: t
                };
            })
        });
    }, ii = function(t) {
        l.emit("events", {
            name: "chaptersSelected",
            context: Qo([], Jo(t), !1).map(function(t) {
                return {
                    id: t
                };
            })
        });
    }, ai = function(t) {
        l.emit("events", {
            name: "chaptersAdded",
            context: t.map(function(t) {
                var e = Ei(t);
                return {
                    chapter: e.chapter,
                    graphChapter: e.styles
                };
            })
        });
    }, si = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, li = function(t, e, n) {
        if (n || 2 === arguments.length) for(var r, o = 0, i = e.length; o < i; o++)!r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e));
    }, ci = function() {
        function t() {
            this._renderedNodesData = {}, this._renderedBranchesData = {}, this._previousNodesToRenderCount = 0;
        }
        return Object.defineProperty(t.prototype, "previousNodesToRenderCount", {
            set: function(t) {
                this._previousNodesToRenderCount = t;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "renderedNodesData", {
            set: function(t) {
                this._renderedNodesData = t;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "renderedBranchesData", {
            get: function() {
                return this._renderedBranchesData;
            },
            set: function(t) {
                this._renderedBranchesData = t;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "hasRenderedNodes", {
            get: function() {
                return !!Object.values(this._renderedNodesData).length;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "hasRenderedBranches", {
            get: function() {
                return !!Object.values(this._renderedBranchesData).length;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "shouldRenderFullLayout", {
            get: function() {
                var t = Cl.inputs.zoom.zoomFactor > s.performance.renderSkeletonOnZoomLessThan;
                return this.isPerformanceBoostDisabled() || t;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "branchesToRender", {
            get: function() {
                var t = si(Di.sectors.getNodesMapCoordinates(), 2), e = si(t[0], 2), n = e[0], r = e[1], o = si(t[1], 2), i = o[0], a = o[1];
                return Di.manifest.branches.filter(function(t) {
                    var e = Oi(t.target.chapterId), o = Oi(t.source.chapterId), s = e.y > a && o.y > a, l = e.y < r && o.y < r, c = e.x > i && o.x > i, u = e.x < n && o.x < n;
                    return !(s || l || c || u);
                });
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "nodesToRender", {
            get: function() {
                var t = Di.manifest.nodes;
                return Di.layout.isPerformanceBoostDisabled() ? t : t.filter(function(t) {
                    return Di.sectors.isNodeVisible(t.id);
                });
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.layoutChanged = function() {
            if (this.isPerformanceBoostDisabled()) return !1;
            var t = Di.manifest.nodes.length, e = this._previousNodesToRenderCount, n = s.performance.enableSkeletonsOnNodesCount;
            return e < n && t >= n || e >= n && t < n;
        }, t.prototype.isPerformanceBoostDisabled = function() {
            return Di.manifest.nodes.length < s.performance.enableSkeletonsOnNodesCount;
        }, t.prototype.getChangedBranches = function() {
            var t = this.branchesToRender;
            if (!this.hasRenderedBranches || this.layoutChanged()) return {
                deleted: [],
                edited: t
            };
            var e = Object.values(this._renderedBranchesData);
            return this.getChangedAfterRenderBranches({
                renderedBranches: e,
                branchesToRender: t
            });
        }, t.prototype.getChangedNodes = function() {
            if (!this.hasRenderedNodes || this.layoutChanged()) return {
                deletedNodes: [],
                editedNodes: this.nodesToRender
            };
            var t = Object.values(this._renderedNodesData);
            return this.getChangedAfterRenderNodes({
                renderedNodes: t,
                nodesToRender: this.nodesToRender
            });
        }, t.prototype.getChangedAfterRenderBranches = function(t) {
            var e = t.renderedBranches, n = t.branchesToRender, r = [], o = [], i = Ko(n);
            return e.forEach(function(t) {
                var e = i[t.id];
                e ? t.isEqual(e) || o.push(e) : r.push(t), delete i[t.id];
            }), o.push.apply(o, li([], si(Object.values(i)), !1)), {
                deleted: r,
                edited: o
            };
        }, t.prototype.getChangedAfterRenderNodes = function(t) {
            var e = t.renderedNodes, n = t.nodesToRender, r = [], o = [], i = Ko(n);
            return e.forEach(function(t) {
                var e = i[t.id];
                e ? t.isEqual(e) || o.push(e) : r.push(t), delete i[t.id];
            }), o.push.apply(o, li([], si(Object.values(i)), !1)), {
                deletedNodes: r,
                editedNodes: o
            };
        }, t;
    }();
    function ui(t, e) {
        var n, r = ((n = {})[di.Flip] = 1, n[di.Action] = 2, n[di.Inaction] = 3, n);
        return r[t] < r[e] ? -1 : r[t] > r[e] ? 1 : 0;
    }
    var di, hi = {
        edit: {
            background: {
                color: "#0D0F12",
                grid: {
                    enabled: !0,
                    color: "#474747"
                }
            },
            defaultChapter: {
                flipTo: {
                    enabled: !0,
                    backgroundColor: "#232324",
                    textColor: "#FFFFFF"
                },
                controls: {
                    enabled: !0,
                    backgroundColor: "#232324",
                    textColor: "#FFFFFF"
                },
                hover: {
                    enabled: !0,
                    borderColor: "#7B68EE"
                }
            },
            chapters: []
        },
        view: {
            background: {
                color: "#0D0F12",
                grid: {
                    enabled: !1,
                    color: "#474747"
                }
            },
            defaultChapter: {
                header: {
                    enabled: !0,
                    backgroundColor: "#232324",
                    textColor: "#FFFFFF"
                },
                flipTo: {
                    enabled: !1,
                    backgroundColor: "#232324",
                    textColor: "#FFFFFF"
                },
                controls: {
                    enabled: !1,
                    backgroundColor: "#232324",
                    textColor: "#FFFFFF"
                },
                hover: {
                    enabled: !0,
                    borderColor: "#2688EB"
                },
                watchAgain: {
                    enabled: !0,
                    backgroundColor: "#2688EB",
                    textColor: "#FFFFFF"
                },
                preview: {
                    visible: !1,
                    backgroundColor: "#19191A",
                    textColor: "#5D5F61"
                },
                goBlind: !1
            }
        }
    }, fi = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    };
    !function(t) {
        t.Flip = "flip", t.Action = "action", t.Inaction = "inaction";
    }(di || (di = {}));
    var pi = function() {
        function t(t, e, n, r, o) {
            var i = this;
            this._parentNode = r, this._targetedNode = o, this.updateSourceAbsolutePosition = function(t) {
                var e = fi(t, 2), n = e[0], r = e[1];
                return i.source.position.absolute = [
                    n + i.source.position.relative[0],
                    r + i.source.position.relative[1]
                ], i;
            }, this.updateTargetAbsolutePosition = function(t) {
                var e = fi(t, 2), n = e[0], r = e[1];
                return i.target.position.absolute = [
                    n + i.target.position.relative[0],
                    r + i.target.position.relative[1]
                ], i;
            }, this.isAssociatedNodeLocked = function() {
                return !(Di.visitedNodes.has(i.source.chapterId) && Di.visitedNodes.has(i.target.chapterId));
            }, this.updateInitialTargetCoordinates = function() {
                var t = i._targetedNode.getIncomingConnectorsCoordinates()[i.connectorType];
                return t && (i.target.position.absolute[1] = i._targetedNode.styles.y + t[1], i.target.position.relative[1] = t[1]), i;
            }, this.id = t.id, this.type = e, this.connectorType = n, this.isHidden = this._parentNode.isEndNode();
            var a = this._parentNode.render.previewMiddleYCoordinate, s = this._targetedNode.render.previewMiddleYCoordinate;
            this.source = {
                chapterId: this._parentNode.chapter.id,
                position: {
                    absolute: [
                        this._parentNode.styles.x + this._parentNode.render.width,
                        this._parentNode.styles.y + a
                    ],
                    relative: [
                        this._parentNode.render.width,
                        a
                    ]
                }
            }, this.target = {
                chapterId: t.chapterId,
                position: {
                    absolute: [
                        this._targetedNode.styles.x,
                        this._targetedNode.styles.y + s
                    ],
                    relative: [
                        0,
                        s
                    ]
                }
            }, this.updateSourceCoordinates(t);
        }
        return t.prototype.isEqual = function(t) {
            var e = this;
            return [
                "id",
                "type",
                "connectorType",
                "source",
                "target"
            ].every(function(n) {
                return JSON.stringify(e[n]) === JSON.stringify(t[n]);
            });
        }, t.prototype.updateSourceCoordinates = function(t) {
            var e, n, r, o;
            switch(this.type){
                case di.Flip:
                    if (s.isEditMode() || s.isViewOrPreViewMode() && (null === (e = this._parentNode.stylesWithDefaults.flipTo) || void 0 === e ? void 0 : e.enabled)) {
                        var i = fi((o = (r = this._parentNode).render.flipToYCoordinate, [
                            r.styles.x + r.render.width + 44,
                            r.styles.y + o + s.render.node.componentControlHeight / 2
                        ]), 2), a = i[0], l = i[1];
                        this.source.position.absolute = [
                            a,
                            l
                        ], this.source.position.relative = [
                            a - this._parentNode.styles.x,
                            l - this._parentNode.styles.y
                        ];
                    }
                    break;
                case di.Action:
                case di.Inaction:
                    if (s.isEditMode() || s.isViewOrPreViewMode() && (null === (n = this._parentNode.stylesWithDefaults.controls) || void 0 === n ? void 0 : n.enabled)) {
                        var c = fi(function(t, e) {
                            var n = t.controls().findIndex(function(t) {
                                var n;
                                return null === (n = t.events) || void 0 === n ? void 0 : n.some(function(t) {
                                    return t.action.args.branchId === e;
                                });
                            }), r = -1 === n;
                            r && (n = t.containers().reverse().findIndex(function(t) {
                                var n;
                                return null === (n = t.events) || void 0 === n ? void 0 : n.some(function(t) {
                                    return t.action.args.branchId === e;
                                });
                            }));
                            var o = t.render.controlsContainerYCoordinate;
                            return [
                                t.styles.x + t.render.width,
                                t.styles.y + o + s.render.node.componentControlHeight * n + (r ? s.render.node.control.inactionLinkY : s.render.node.control.actionLinkY)
                            ];
                        }(this._parentNode, t.id), 2);
                        a = c[0], l = c[1], this.source.position.absolute = [
                            a,
                            l
                        ], this.source.position.relative = [
                            a - this._parentNode.styles.x,
                            l - this._parentNode.styles.y
                        ];
                    }
            }
        }, t;
    }(), vi = n(996), yi = n.n(vi), mi = function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator, n = e && t[e], r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                };
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, gi = function() {
        function t(t, e) {
            var n, r = this;
            this.branches = [], this.saveViewChapterDesign = !1, this.parentChaptersConnections = [], this.chapterErrors = [], this.isDragged = !1, this._modified = !1, this.getContainerControls = function(t) {
                var e;
                return (null === (e = r.chapter.containers.find(function(e) {
                    return e.id === t;
                })) || void 0 === e ? void 0 : e.controls.filter(function(t) {
                    return "Text" !== t.type;
                })) || [];
            }, this.controls = function() {
                return r.chapter.containers.flatMap(function(t) {
                    return t.controls;
                }).reverse().filter(function(t) {
                    return "Text" !== t.type;
                });
            }, this.containers = function() {
                return r.chapter.containers.filter(function(t) {
                    return t.controls.some(function(t) {
                        return "Text" !== t.type;
                    });
                });
            }, this.hasParentChapters = function(t) {
                return t ? r.parentChaptersConnections.some(function(e) {
                    return e.type === t;
                }) : !!r.parentChaptersConnections.length;
            }, this.getParentChaptersByType = function(t) {
                return r.parentChaptersConnections.filter(function(e) {
                    return e.type === t;
                });
            }, this.hasBranches = function(t) {
                return t ? r.branches.some(function(e) {
                    return e.type === t;
                }) : !!r.branches.length;
            }, this.isConnected = function() {
                return r.hasParentChapters() || r.hasBranches() || "start" === r.chapter.order;
            }, this.isEndNode = function() {
                return "end" === r.chapter.order;
            }, this.hasErrors = function() {
                return !!r.chapterErrors.length;
            }, this.getPolygon = function() {
                return [
                    [
                        r.styles.x,
                        r.styles.y
                    ],
                    [
                        r.styles.x + r.render.width,
                        r.styles.y
                    ],
                    [
                        r.styles.x + r.render.width,
                        r.styles.y + r.render.height
                    ],
                    [
                        r.styles.x,
                        r.styles.y + r.render.height
                    ]
                ];
            }, this.getBBox = function() {
                return {
                    minX: r.styles.x,
                    minY: r.styles.y,
                    maxX: r.styles.x + r.render.width,
                    maxY: r.styles.y + r.render.height
                };
            }, this.getCenter = function() {
                return [
                    r.styles.x + r.render.width / 2,
                    r.styles.y + r.render.height / 2
                ];
            }, this.updatePosition = function(t, e) {
                return r.styles.x = t, r.styles.y = e, s.isPreViewMode() && (r.saveViewChapterDesign = !0), r;
            }, this.addBranch = function(t, e, n) {
                var o = function(t) {
                    return {
                        id: Ao(),
                        chapterId: t
                    };
                }(t);
                return r.chapter = function(t, e, n, r) {
                    var o;
                    return jo(jo({}, t), n ? {
                        containers: t.containers.map(function(t) {
                            return jo(jo({}, t), {
                                controls: t.controls.map(function(t) {
                                    return t.id === n ? jo(jo({}, t), {
                                        events: [
                                            zo("onClick", "setNextBranch", e.id)
                                        ]
                                    }) : t;
                                })
                            });
                        }),
                        branches: Ho(Ho([], Vo(t.branches), !1), [
                            e
                        ], !1)
                    } : r ? {
                        containers: t.containers.map(function(t) {
                            return t.id === r ? jo(jo({}, t), {
                                events: [
                                    Ro("setNextBranch", e.id)
                                ]
                            }) : t;
                        }),
                        branches: Ho(Ho([], Vo(t.branches), !1), [
                            e
                        ], !1)
                    } : {
                        branches: Ho(Ho([], Vo(t.branches), !1), [
                            e
                        ], !1),
                        events: null === (o = t.events) || void 0 === o ? void 0 : o.map(function(t) {
                            return "onSuspense" === t.type ? jo(jo({}, t), {
                                action: jo(jo({}, t.action), {
                                    args: {
                                        branchId: e.id,
                                        shouldOpenNow: !0
                                    }
                                })
                            }) : t;
                        })
                    });
                }(r.chapter, o, e, n), r;
            }, this.deleteBranch = function(t) {
                return r.chapter = Wo(r.chapter, [
                    t
                ]), r;
            }, this.updateChapterSuspenseAction = function(t) {
                return r.chapter = function(t, e) {
                    var n, r = t.events || [], o = null === (n = t.events) || void 0 === n ? void 0 : n.find(function(t) {
                        return "onSuspense" === t.type;
                    }), i = null == o ? void 0 : o.action.args.branchId;
                    return e && (r = o ? r.map(function(t) {
                        return "onSuspense" === t.type ? jo(jo({}, t), {
                            action: jo(jo({}, t.action), {
                                type: e,
                                args: jo(jo({}, t.action.args), {
                                    branchId: "setNextBranch" === e ? t.action.args.branchId : void 0
                                })
                            })
                        }) : t;
                    }) : Ho(Ho([], Vo(r), !1), [
                        {
                            type: "onSuspense",
                            action: {
                                type: e,
                                args: {
                                    shouldOpenNow: !0
                                }
                            }
                        }
                    ], !1)), jo(jo({}, t), {
                        events: r,
                        branches: "setNextBranch" !== e ? t.branches.filter(function(t) {
                            return t.id !== i;
                        }) : t.branches
                    });
                }(r.chapter, t), r;
            }, this.getIncomingConnectorsCoordinates = function() {
                return r._incomingConnectorsCoordinates ? r._incomingConnectorsCoordinates : r.updateIncomingConnectorsCoordinates();
            }, this.updateIncomingConnectorsCoordinates = function(t) {
                return void 0 === t && (t = null), t && (r.parentChaptersConnections.find(function(e) {
                    return t.type === e.type;
                }) || r.parentChaptersConnections.push(t)), r._incomingConnectorsCoordinates = r.getConnectorCoordinatesForBranchTypes(r.getUniqueParentConnectionTypes()), r._incomingConnectorsCoordinates;
            }, this.getConnectorCoordinatesForBranchTypes = function(t) {
                var e = t.sort(ui), n = (e.length - 1) * s.render.node.connectorPositionDiff / 2, r = s.render.node.connectorPositionY - n;
                return e.reduce(function(t, e, n) {
                    return t[e] = [
                        0,
                        r + s.render.node.connectorPositionDiff * n
                    ], t;
                }, {});
            }, this.id = t.id, this._chapter = t, this.chapterErrors = Di.nodesErrors[this.id] || [];
            var o = null === (n = e.view.chapters) || void 0 === n ? void 0 : n.find(function(e) {
                return e.id === t.id;
            }), i = e.edit.chapters.find(function(e) {
                return e.id === t.id;
            });
            s.isEditMode() ? (this.styles = ei(i), this._stylesWithDefaults = yi()(e.edit.defaultChapter, this.styles)) : (this.styles = ei(o || i), this._stylesWithDefaults = yi()(e.view.defaultChapter, this.styles)), this.saveViewChapterDesign = s.isPreViewMode() && !!o, this.render = this.getGraphNodeRender();
        }
        return Object.defineProperty(t.prototype, "chapter", {
            get: function() {
                return this._chapter;
            },
            set: function(t) {
                this.setModified(), this._chapter = t;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "stylesWithDefaults", {
            get: function() {
                return this._stylesWithDefaults;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isLocked", {
            get: function() {
                return !!s.isViewOrPreViewMode() && "start" !== this.chapter.order && !Di.visitedNodes.has(this.id);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "displayLockedContent", {
            get: function() {
                return !s.isViewOrPreViewMode() || "start" === this.chapter.order || !!this.stylesWithDefaults.preview.visible || !this.isLocked;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "modified", {
            get: function() {
                return this._modified;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.resetModified = function() {
            this._modified && (this._modified = !1);
        }, t.prototype.setModified = function() {
            this._modified || (this._modified = !0);
        }, t.prototype.getSuspenseActionType = function() {
            return function(t) {
                if (t.events) {
                    var e = t.events.find(function(t) {
                        return "onSuspense" === t.type;
                    });
                    return null == e ? void 0 : e.action.type;
                }
            }(this.chapter);
        }, t.prototype.getSuspenseBranchId = function() {
            var t, e;
            return null === (e = null === (t = this.chapter.events) || void 0 === t ? void 0 : t.find(function(t) {
                return "onSuspense" === t.type;
            })) || void 0 === e ? void 0 : e.action.args.branchId;
        }, t.prototype.getContainerBranchIds = function() {
            var t, e, n, r, o = [];
            try {
                for(var i = mi(this.containers().reverse()), a = i.next(); !a.done; a = i.next()){
                    var s = a.value;
                    try {
                        for(var l = (n = void 0, mi(s.events || [])), c = l.next(); !c.done; c = l.next()){
                            var u = c.value;
                            "onSuspense" === u.type && u.action.args.branchId && o.push(u.action.args.branchId);
                        }
                    } catch (t) {
                        n = {
                            error: t
                        };
                    } finally{
                        try {
                            c && !c.done && (r = l.return) && r.call(l);
                        } finally{
                            if (n) throw n.error;
                        }
                    }
                }
            } catch (e) {
                t = {
                    error: e
                };
            } finally{
                try {
                    a && !a.done && (e = i.return) && e.call(i);
                } finally{
                    if (t) throw t.error;
                }
            }
            return o;
        }, t.prototype.updateControlActionEvent = function(t, e, n) {
            return this.chapter = function(t, e, n, r) {
                var o, i = null === (o = t.containers.find(function(t) {
                    return t.id === e;
                })) || void 0 === o ? void 0 : o.controls.find(function(t) {
                    return t.id === n;
                }), a = (null == i ? void 0 : i.events) || [], s = Uo("onClick", null == i ? void 0 : i.events), l = null == s ? void 0 : s.action.args.branchId;
                "setNextBranch" !== r && "continuePlayback" !== r || (s ? a = a.map(function(t) {
                    return t === s ? Bo(Bo({}, t), {
                        action: Bo(Bo({}, t.action), {
                            type: r,
                            args: Bo(Bo({}, t.action.args), {
                                branchId: "setNextBranch" === r ? t.action.args.branchId : void 0
                            })
                        })
                    }) : t;
                }) : a.push(zo("onClick", r)));
                var c = "setNextBranch" !== r ? t.branches.filter(function(t) {
                    return t.id !== l;
                }) : t.branches;
                return Bo(Bo({}, t), {
                    branches: c,
                    containers: t.containers.map(function(t) {
                        return t.id === e ? Bo(Bo({}, t), {
                            controls: t.controls.map(function(t) {
                                return t.id === n ? Bo(Bo({}, t), {
                                    events: a
                                }) : t;
                            })
                        }) : t;
                    })
                });
            }(this.chapter, t.id, e.id, n), this;
        }, t.prototype.updateContainerSuspenseAction = function(t, e) {
            return this.chapter = function(t, e, n) {
                var r = e.events || [], o = Uo("onSuspense", e.events), i = null == o ? void 0 : o.action.args.branchId;
                n && (r = o ? r.map(function(t) {
                    return "onSuspense" === t.type ? jo(jo({}, t), {
                        action: jo(jo({}, t.action), {
                            type: n,
                            args: jo(jo({}, t.action.args), {
                                branchId: "setNextBranch" === n ? t.action.args.branchId : void 0
                            })
                        })
                    }) : t;
                }) : Ho(Ho([], Vo(r), !1), [
                    {
                        type: "onSuspense",
                        action: {
                            type: n,
                            args: {
                                shouldOpenNow: !0
                            }
                        }
                    }
                ], !1));
                var a = "setNextBranch" !== n ? t.branches.filter(function(t) {
                    return t.id !== i;
                }) : t.branches, s = jo(jo({}, e), {
                    events: r
                });
                return jo(jo({}, t), {
                    branches: a,
                    containers: t.containers.map(function(t) {
                        return t.id === e.id ? s : t;
                    })
                });
            }(this.chapter, t, e), this;
        }, t.prototype.isEqual = function(t) {
            var e = this;
            if (this.modified || t.modified) return !1;
            if (this.chapter !== t.chapter) return !1;
            var n = [
                "id",
                "type",
                "connectorType",
                "source",
                "target",
                "isHidden"
            ], r = function(t) {
                return t.map(function(t) {
                    return n.map(function(e) {
                        return t[e];
                    }).join();
                }).join();
            };
            return !(r(t.branches) !== r(this.branches)) && [
                "id",
                "parentChaptersConnections",
                "render",
                "isDragged",
                "chapterErrors",
                "videoInfo",
                "saveViewChapterDesign"
            ].every(function(n) {
                return JSON.stringify(t[n]) === JSON.stringify(e[n]);
            });
        }, t.prototype.getGraphNodeRender = function() {
            var t, e, n, r = this.calculateNodeHeight(), o = s.render.node.connectorPositionY, i = s.render.node.heightWithPreview, a = s.render.node.heightWithPreviewEov + s.render.node.componentAddActionHeight + 1;
            return s.isViewOrPreViewMode() && ((null === (t = this.stylesWithDefaults.header) || void 0 === t ? void 0 : t.enabled) || (o = s.render.node.defaultConnectorPositionY), (null === (e = this.stylesWithDefaults.flipTo) || void 0 === e ? void 0 : e.enabled) && (i = s.render.node.heightWithPreview), a = (null === (n = this.stylesWithDefaults.flipTo) || void 0 === n ? void 0 : n.enabled) ? s.render.node.heightWithPreviewEov + 1 : i + 1), {
                height: r,
                width: s.render.node.width,
                previewMiddleYCoordinate: o,
                flipToYCoordinate: i,
                controlsContainerYCoordinate: a
            };
        }, t.prototype.calculateNodeHeight = function() {
            var t, e, n, r;
            return "end" === this.chapter.order ? s.isViewOrPreViewMode() && !(null === (t = this.stylesWithDefaults.header) || void 0 === t ? void 0 : t.enabled) ? s.render.node.defaultHeight : s.render.node.heightWithPreview : s.isViewOrPreViewMode() ? ((null === (e = this.stylesWithDefaults.header) || void 0 === e ? void 0 : e.enabled) ? s.render.node.heightWithPreview : s.render.node.defaultHeight) + ((null === (n = this.stylesWithDefaults.flipTo) || void 0 === n ? void 0 : n.enabled) ? s.render.node.componentControlHeight : 0) + ((null === (r = this.stylesWithDefaults.controls) || void 0 === r ? void 0 : r.enabled) ? this.controls().length * s.render.node.componentControlHeight : 0) : s.render.node.heightFull + this.controls().length * s.render.node.componentControlHeight;
        }, t.prototype.getControlTypeLabelTranslation = function(t) {
            switch(t){
                case "Text":
                    return s.translation.new_text_label;
                case "Button":
                    return s.translation.new_button_label;
                case "Area":
                    return s.translation.new_area_label;
            }
        }, t.prototype.getUniqueParentConnectionTypes = function() {
            return Array.from(new Set(this.parentChaptersConnections.map(function(t) {
                return t.connectorType;
            })));
        }, t;
    }(), _i = function() {
        return _i = Object.assign || function(t) {
            for(var e, n = 1, r = arguments.length; n < r; n++)for(var o in e = arguments[n])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
        }, _i.apply(this, arguments);
    }, wi = function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator, n = e && t[e], r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                };
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, bi = function() {
        function t() {
            var t = this;
            this._graphDesign = hi, this._nodes = {}, this._branches = {}, this.setAllNodesAsModified = function() {
                t.nodes.forEach(function(t) {
                    return t.setModified();
                });
            }, this.getBranchById = function(e) {
                return t._branches[e];
            }, this.selectBranch = function(e) {
                return t._branches[e];
            }, this.reset = function() {
                t._metadata = void 0, t._media = void 0, t._videosDict = {}, t._nodes = {}, t._branches = {}, t._graphDesign = hi;
            }, this.rebuildNodesAndBranches = function() {
                t.buildNodesAndBranches();
            }, this.set = function(e) {
                e = function(t) {
                    return qo.reduce(function(t, e) {
                        return t.metadata.version === e.version ? e.migrate(t) : t;
                    }, t);
                }(e), t._metadata = e.metadata, t._media = e.media, t._videosDict = Ko(e.media.videos, function(t) {
                    return t.id;
                }), t._chapters = e.chapters, t._graphDesign = yi()(t._graphDesign, {
                    edit: ei(e.graph.edit),
                    view: ei(e.graph.view)
                }), t.buildNodesAndBranches();
            }, this.save = function() {
                var e, n;
                if (t._metadata && t._media && t._graphDesign) {
                    t._metadata.updated = (new Date).toISOString();
                    var r = Object.values(t._nodes), o = [], i = [], a = s.isEditMode() ? "edit" : "view";
                    try {
                        for(var c = wi(r), u = c.next(); !u.done; u = c.next()){
                            var d = u.value, h = d.chapter, f = d.styles, p = d.saveViewChapterDesign;
                            o.push(h), ("view" === a && p || "edit" === a) && i.push(f);
                        }
                    } catch (t) {
                        e = {
                            error: t
                        };
                    } finally{
                        try {
                            u && !u.done && (n = c.return) && n.call(c);
                        } finally{
                            if (e) throw e.error;
                        }
                    }
                    var v = {
                        chapters: o,
                        metadata: t._metadata,
                        media: t._media,
                        graph: _i(_i({}, t._graphDesign), {
                            edit: _i(_i({}, t._graphDesign.edit), "edit" === a ? {
                                chapters: i
                            } : {}),
                            view: _i(_i({}, t._graphDesign.view), "view" === a ? {
                                chapters: i
                            } : {})
                        })
                    };
                    l.emit("manifestUpdate", v);
                }
            }, this.updateBranches = function() {
                var e, n, r, o, i, a;
                t._branches = {};
                try {
                    for(var s = wi(Object.values(t._nodes)), l = s.next(); !l.done; l = s.next())(d = l.value).parentChaptersConnections = [];
                } catch (t) {
                    e = {
                        error: t
                    };
                } finally{
                    try {
                        l && !l.done && (n = s.return) && n.call(s);
                    } finally{
                        if (e) throw e.error;
                    }
                }
                try {
                    for(var c = wi(Object.values(t._nodes)), u = c.next(); !u.done; u = c.next()){
                        var d = u.value;
                        t.buildNodeBranches(d);
                    }
                } catch (t) {
                    r = {
                        error: t
                    };
                } finally{
                    try {
                        u && !u.done && (o = c.return) && o.call(c);
                    } finally{
                        if (r) throw r.error;
                    }
                }
                try {
                    for(var h = wi(Object.values(t._branches)), f = h.next(); !f.done; f = h.next())f.value.updateInitialTargetCoordinates();
                } catch (t) {
                    i = {
                        error: t
                    };
                } finally{
                    try {
                        f && !f.done && (a = h.return) && a.call(h);
                    } finally{
                        if (i) throw i.error;
                    }
                }
                return t;
            }, this.createNode = function(e, n, r) {
                var o, i = (void 0 === (o = s.translation.new_chapter_label) && (o = s.translation.new_chapter_label), {
                    id: Ao(),
                    label: o,
                    order: "simple",
                    branches: [],
                    containers: [],
                    events: []
                }), a = function(t, e) {
                    var n = function(t, e) {
                        var n = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!n) return t;
                        var r, o, i = n.call(t), a = [];
                        try {
                            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
                        } catch (t) {
                            o = {
                                error: t
                            };
                        } finally{
                            try {
                                r && !r.done && (n = i.return) && n.call(i);
                            } finally{
                                if (o) throw o.error;
                            }
                        }
                        return a;
                    }(e, 2);
                    return {
                        id: t,
                        x: n[0],
                        y: n[1]
                    };
                }(i.id, e);
                return t._graphDesign.edit.chapters.push(a), t._nodes[i.id] = new gi(i, t._graphDesign), null == r || r(i.id), n || ai([
                    i.id
                ]), t;
            }, this.setNodeOrder = function(e, n) {
                var r = Ei(e);
                return "start" === r.chapter.order && t._metadata && (t._metadata.initChapterId = void 0), r.chapter = _i(_i({}, r.chapter), {
                    order: n
                }), t;
            }, this.duplicateNode = function(e, n, r) {
                var o = function(t, e) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!n) return t;
                    var r, o, i = n.call(t), a = [];
                    try {
                        for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
                    } catch (t) {
                        o = {
                            error: t
                        };
                    } finally{
                        try {
                            r && !r.done && (n = i.return) && n.call(i);
                        } finally{
                            if (o) throw o.error;
                        }
                    }
                    return a;
                }(n, 2), i = o[0], a = o[1], s = t._nodes[e], l = s.styles, c = function(t) {
                    var e;
                    return jo(jo({}, t), {
                        label: Fo(t.label),
                        id: Ao(),
                        order: "start" === t.order ? "simple" : t.order,
                        branches: [],
                        containers: t.containers.map(function(t) {
                            return jo(jo({}, t), {
                                id: Ao(),
                                controls: t.controls.map(function(t) {
                                    return jo(jo({}, t), {
                                        id: Ao(),
                                        events: "Text" !== t.type ? [
                                            zo("onClick", "continuePlayback")
                                        ] : []
                                    });
                                }),
                                events: [
                                    Ro("continuePlayback")
                                ]
                            });
                        }),
                        events: null === (e = t.events) || void 0 === e ? void 0 : e.map(function(t) {
                            return "onSuspense" === t.type && "setNextBranch" === t.action.type ? jo(jo({}, t), {
                                action: jo(jo({}, t.action), {
                                    args: jo(jo({}, t.action.args), {
                                        branchId: void 0
                                    })
                                })
                            }) : t;
                        })
                    });
                }(s.chapter), u = JSON.parse(JSON.stringify(_i(_i({}, l), {
                    id: c.id,
                    x: t._nodes[e].styles.x + i,
                    y: t._nodes[e].styles.y + a
                })));
                return t._graphDesign.edit.chapters.push(u), t.buildNodeFromChapter(c), null == r || r(c.id), t;
            }, this.getManifestBoundingBox = function() {
                var e, n, r = 0, o = 0, i = 0, a = 0;
                try {
                    for(var s = wi(Object.values(t._nodes)), l = s.next(); !l.done; l = s.next()){
                        var c = l.value.getBBox();
                        r = c.minX < r ? c.minX : r, o = c.minY < o ? c.minY : o, i = c.maxX > i ? c.maxX : i, a = c.maxY > a ? c.maxY : a;
                    }
                } catch (t) {
                    e = {
                        error: t
                    };
                } finally{
                    try {
                        l && !l.done && (n = s.return) && n.call(s);
                    } finally{
                        if (e) throw e.error;
                    }
                }
                return {
                    minX: r,
                    minY: o,
                    maxX: i,
                    maxY: a
                };
            };
        }
        return Object.defineProperty(t.prototype, "metadata", {
            get: function() {
                return this._metadata;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "nodesDict", {
            get: function() {
                return this._nodes;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "branchesDict", {
            get: function() {
                return this._branches;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "nodes", {
            get: function() {
                var t = this;
                return s.isViewMode() ? Object.values(this._nodes).filter(function(e) {
                    return !(e.isLocked && t.styles.defaultChapter.goBlind);
                }) : Object.values(this._nodes);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "styles", {
            get: function() {
                var t = s.isEditMode() ? "edit" : "view";
                return this._graphDesign[t];
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "branches", {
            get: function() {
                if (s.isViewOrPreViewMode()) {
                    var t = !!s.isViewMode() && this.styles.defaultChapter.goBlind;
                    return Object.values(this._branches).filter(function(e) {
                        return !(e.isHidden || e.isAssociatedNodeLocked() && t);
                    });
                }
                return Object.values(this._branches).filter(function(t) {
                    return !t.isHidden;
                });
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.deleteGraphBranches = function(t) {
            var e, n, r, o;
            return null === (n = null === (e = this._graphDesign) || void 0 === e ? void 0 : e.edit.branches) || void 0 === n || n.filter(function(e) {
                return !t.includes(e.id);
            }), null === (o = null === (r = this._graphDesign) || void 0 === r ? void 0 : r.view.branches) || void 0 === o || o.filter(function(e) {
                return !t.includes(e.id);
            }), this;
        }, t.prototype.buildNodesAndBranches = function() {
            var t, e;
            if (this._chapters) {
                try {
                    for(var n = wi(this._chapters), r = n.next(); !r.done; r = n.next()){
                        var o = r.value;
                        this.buildNodeFromChapter(o);
                    }
                } catch (e) {
                    t = {
                        error: e
                    };
                } finally{
                    try {
                        r && !r.done && (e = n.return) && e.call(n);
                    } finally{
                        if (t) throw t.error;
                    }
                }
                this.updateBranches();
            }
        }, t.prototype.buildNodeBranches = function(t) {
            var e, n, r, o, i = [];
            t.branches = [];
            var a = function(e) {
                var n = Ni(e.chapterId);
                if (!n) return l.showErrorMessage(s.translation.popup_error_message_1), {
                    value: void 0
                };
                var a, c = void 0;
                if (c = a = t.getSuspenseBranchId() === e.id ? di.Flip : t.getContainerBranchIds().includes(e.id) ? di.Inaction : di.Action, s.isViewOrPreViewMode() && (a === di.Flip && !(null === (r = t.stylesWithDefaults.flipTo) || void 0 === r ? void 0 : r.enabled) || !(null === (o = t.stylesWithDefaults.controls) || void 0 === o ? void 0 : o.enabled))) {
                    if (c = di.Flip, i.find(function(t) {
                        return t.connectorType === di.Flip && t.targetNodeId === n.id;
                    })) return "continue";
                    i.push({
                        connectorType: di.Flip,
                        targetNodeId: n.id
                    });
                }
                var u = new pi(e, a, c, t, n);
                if (l._branches[e.id] = u, t.branches.push(u), l._branches[e.id].isHidden) return {
                    value: void 0
                };
                l._nodes[e.chapterId].parentChaptersConnections.push({
                    chapterId: t.id,
                    type: u.type,
                    connectorType: u.connectorType,
                    branchId: u.id
                });
            }, l = this;
            try {
                for(var c = wi(t.chapter.branches), u = c.next(); !u.done; u = c.next()){
                    var d = a(u.value);
                    if ("object" == typeof d) return d.value;
                }
            } catch (t) {
                e = {
                    error: t
                };
            } finally{
                try {
                    u && !u.done && (n = c.return) && n.call(c);
                } finally{
                    if (e) throw e.error;
                }
            }
        }, t.prototype.buildNodeFromChapter = function(t) {
            var e;
            if (this._videosDict && (this._nodes[t.id] = new gi(t, this._graphDesign), t.videoId)) {
                var n = this._videosDict[t.videoId];
                if (!n) return void console.warn("videoId ".concat(t.videoId, " for chapter ").concat(t.id, " not found}"));
                var r = Di.videosInfo[n.id];
                this._nodes[t.id].videoInfo = {
                    id: (null == r ? void 0 : r.id) || n.id,
                    cover: (null == r ? void 0 : r.cover) || (null === (e = n.variants.find(function(t) {
                        return t.cover;
                    })) || void 0 === e ? void 0 : e.cover) || "",
                    title: (null == r ? void 0 : r.title) || n.title
                };
            }
        }, t.prototype.showErrorMessage = function(t) {
            Cl.popups.show(t, s.translation.popup_error_title), this.reset();
        }, t;
    }(), Ci = [
        [
            0,
            0
        ],
        [
            0,
            0
        ]
    ], xi = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, Mi = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, ki = function(t, e, n) {
        if (n || 2 === arguments.length) for(var r, o = 0, i = e.length; o < i; o++)!r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e));
    }, Si = function() {
        function t() {
            this._sectors = {}, this.sectorsByNodes = {}, this.sectorsByCoordinates = {}, this.prevNodesMapCoordinates = Ci, this._hasHiddenSectors = !1;
        }
        return Object.defineProperty(t.prototype, "sectors", {
            get: function() {
                return Object.values(this._sectors);
            },
            set: function(t) {
                this._sectors = Ko(t);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "hasHiddenSectors", {
            get: function() {
                return this._hasHiddenSectors;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.updateSectors = function(t, e) {
            var n = this;
            if (void 0 === e && (e = Di.manifest.nodes), !Di.layout.isPerformanceBoostDisabled()) {
                this._hasHiddenSectors = !1;
                var r = this.getNodesMapCoordinates();
                (0 === this.sectors.length || this.nodesMapSizeChanged()) && (this.initSectors(), this.prevNodesMapCoordinates = r);
                var o = e.map(function(t) {
                    return t.id;
                });
                this.seedSectorsWithNodes(o), this.sectors.forEach(function(e) {
                    var o, i, a, l, c, u, d, h, f, p, v, y, m, g, _, w, b, C, x, M = (i = t, a = r, l = (o = e).size, c = o.indexes, u = xi(a, 1), d = xi(u[0], 2), h = d[0], f = d[1], p = xi(c, 2), v = p[0], y = p[1], m = s.performance.sectorsVirtualBorderWidth, g = [
                        (v - m) * l,
                        (v + m) * l + l
                    ].map(function(t) {
                        return (t + h) * i.scale + i.transformX;
                    }), _ = [
                        (y - m) * l,
                        (y + m) * l + l
                    ].map(function(t) {
                        return (t + f) * i.scale + i.transformY;
                    }), w = g.some(function(t) {
                        return t >= 0 && t <= i.viewWidth;
                    }), b = g[0] < 0 && g[1] > i.viewWidth, C = _.some(function(t) {
                        return t >= 0 && t <= i.viewHeight;
                    }), x = _[0] < 0 && _[1] > i.viewHeight, (w || b) && (C || x));
                    e.visible = M, n._hasHiddenSectors || M || (n._hasHiddenSectors = !0);
                });
            }
        }, t.prototype.isNodeVisible = function(t) {
            var e = this.sectorsByNodes[t];
            return this._sectors[e].visible;
        }, t.prototype.getNodesMapCoordinates = function() {
            if (0 === Di.manifest.nodes.length) return Ci;
            var t = [], e = [];
            return Di.manifest.nodes.forEach(function(n) {
                t.push(n.styles.x), e.push(n.styles.y);
            }), [
                [
                    Math.min.apply(Math, ki([], Mi(t), !1)),
                    Math.min.apply(Math, ki([], Mi(e), !1))
                ],
                [
                    Math.max.apply(Math, ki([], Mi(t), !1)),
                    Math.max.apply(Math, ki([], Mi(e), !1))
                ]
            ];
        }, t.prototype.initSectors = function() {
            var t = this;
            this.reset();
            var e = {}, n = this.getLayoutInfo(), r = n.sectorWidth, o = n.sectorsInRow, i = n.sectorsCount;
            this.sectors = new Array(i).fill(null).map(function(n, i) {
                var a = t.createSector(i, r, o);
                return e[a.indexes.join()] = a.id, a;
            }), this.sectorsByCoordinates = e;
        }, t.prototype.reset = function() {
            this.sectors = [], this.sectorsByCoordinates = {}, this.sectorsByNodes = {}, this.prevNodesMapCoordinates = Ci;
        }, t.prototype.seedSectorsWithNodes = function(t) {
            var e = this;
            this.sectors.forEach(function(t) {
                return t.nodes = new Set;
            }), this.sectorsByNodes = {};
            var n = this.getLayoutInfo().sectorWidth, r = Mi(this.getNodesMapCoordinates(), 1), o = Mi(r[0], 2), i = o[0], a = o[1];
            t.forEach(function(t) {
                var r = Ei(t), o = Math.floor((r.styles.x - i) / n), s = Math.floor((r.styles.y - a) / n), l = e.sectorsByCoordinates[[
                    o,
                    s
                ].join()];
                if (!l) throw new Error("No sector with coordinates ".concat([
                    o,
                    s
                ]));
                e.sectorsByNodes[t] = l, e._sectors[l].nodes.add(t);
            });
        }, t.prototype.nodesMapSizeChanged = function() {
            return !!this.prevNodesMapCoordinates && this.prevNodesMapCoordinates.join() !== this.getNodesMapCoordinates().join();
        }, t.prototype.getLayoutInfo = function() {
            var t = this.getNodesMapCoordinates(), e = Mi(t, 2), n = Mi(e[0], 2), r = n[0], o = n[1], i = Mi(e[1], 2), a = i[0], l = i[1], c = Math.abs(a - r), u = Math.abs(l - o), d = Math.ceil(Math.sqrt(c * u / s.performance.sectorsCount)), h = Math.max(d, s.performance.minSectorWidthInPixels), f = Math.ceil(c / h);
            return {
                sectorsInRow: f,
                sectorWidth: h,
                sectorsCount: Math.ceil(u / h) * f
            };
        }, t.prototype.createSector = function(t, e, n) {
            return {
                indexes: [
                    t % n,
                    Math.floor(t / n)
                ],
                size: e,
                nodes: new Set,
                visible: !1,
                id: "".concat(t)
            };
        }, t;
    }(), Ni = function(t) {
        if (t) return Di.manifest.nodesDict[t];
    }, Ei = function(t) {
        var e = Ni(t);
        if (!e) throw new Error("Can't get node with id=".concat(t));
        return e;
    }, Li = function(t) {
        var e = function(t) {
            if (t) return Di.manifest.branchesDict[t];
        }(t);
        if (!e) throw new Error("Can't get branch with id=".concat(t));
        return e;
    }, Oi = function(t) {
        var e = Ni(t);
        if (!e) throw new Error("Can't get node with id=".concat(t));
        return e.styles;
    }, Ai = function() {
        var t = new Set;
        return Di.manifest.nodes.forEach(function(e) {
            return t.add(e.chapter.label);
        }), t;
    }, Ti = function() {
        return Ti = Object.assign || function(t) {
            for(var e, n = 1, r = arguments.length; n < r; n++)for(var o in e = arguments[n])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
        }, Ti.apply(this, arguments);
    }, Bi = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, zi = function(t, e, n) {
        if (n || 2 === arguments.length) for(var r, o = 0, i = e.length; o < i; o++)!r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e));
    }, Pi = function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator, n = e && t[e], r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                };
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, Ii = function() {
        function t() {
            var t = this;
            this.zoomFactor = 1, this.isGraphFrozen = !1, this.selectedNodes = new Set, this.selectedBranches = new Set, this.copiedNodes = new Set, this.visitedNodes = new Set, this.hoveredNodes = new Set, this.nodesErrors = {}, this.videosInfo = {}, this.updateVideosInfo = function(e) {
                t.videosInfo = Ko(e, function(t) {
                    return t.id;
                });
            }, this.selectNodes = function(e, n) {
                void 0 === n && (n = !0);
                var r, o, i = new Set(e);
                r = t.selectedNodes, o = i, (r.size !== o.size || !Qo([], Jo(r), !1).every(function(t) {
                    return o.has(t);
                })) && (t.selectedNodes = i, n && ii(zi([], Bi(e), !1)));
            }, this.addNodeToSelected = function(e) {
                t.selectedNodes.add(e), ii(zi([], Bi(t.selectedNodes), !1));
            }, this.removeNodeFromSelected = function(e) {
                t.selectedNodes.delete(e), ii(zi([], Bi(t.selectedNodes), !1));
            }, this.clearSelectedNodes = function(e) {
                void 0 === e && (e = !0), e && t.selectedNodes.size && ii([]), t.selectedNodes.clear();
            }, this.addNodesToHovered = function(e) {
                e.forEach(function(e) {
                    return t.hoveredNodes.add(e);
                });
            }, this.removeNodesFromHovered = function(e) {
                e.forEach(function(e) {
                    return t.hoveredNodes.delete(e);
                });
            }, this.clearHoveredNodes = function() {
                t.hoveredNodes.clear();
            }, this.selectBranches = function(e) {
                t.selectedBranches = new Set(e), l.emit("selectBranches", zi([], Bi(t.selectedBranches), !1));
            }, this.clearSelectedBranches = function() {
                t.selectedBranches.clear(), l.emit("selectBranches", []);
            }, this.copySelectedNodes = function() {
                t.selectedNodes.size && (t.copiedNodes = new Set(t.selectedNodes), 1 === t.copiedNodes.size ? l.emit("notification", {
                    id: "copy_chapter",
                    defaultTranslation: s.translation.copy_chapter
                }) : l.emit("notification", {
                    id: "copy_multiple_chapters",
                    defaultTranslation: s.translation.copy_multiple_chapters
                }));
            }, this.pasteNodes = function(e) {
                var n, r;
                if (t.copiedNodes.size) {
                    var o = s.render.tool.copyPasteDx, i = s.render.tool.copyPasteDy;
                    if (e) {
                        var a = Bi(t.copiedNodes, 1)[0], l = Oi(a);
                        o = e[0] - l.x, i = e[1] - l.y;
                    }
                    var c = [], u = {}, d = function(e) {
                        t.manifest.duplicateNode(e, [
                            o,
                            i
                        ], function(t) {
                            c.push(t), u[e] = t;
                        });
                    };
                    try {
                        for(var h = Pi(t.copiedNodes), f = h.next(); !f.done; f = h.next())d(f.value);
                    } catch (t) {
                        n = {
                            error: t
                        };
                    } finally{
                        try {
                            f && !f.done && (r = h.return) && r.call(h);
                        } finally{
                            if (n) throw n.error;
                        }
                    }
                    t.copyNodeBranches(u), ai(c), t.manifest.updateBranches(), Cl.layers.update(), Cl.layers.updateSelected(c);
                }
            }, this.deleteSelection = function(e) {
                var n, r, o, i;
                if (t.selectedBranches.size) {
                    try {
                        for(var a = Pi(t.selectedBranches), c = a.next(); !c.done; c = a.next()){
                            var u = c.value, d = t.manifest.selectBranch(u);
                            null === (o = Ni(d.source.chapterId)) || void 0 === o || o.deleteBranch(d.id);
                        }
                    } catch (t) {
                        n = {
                            error: t
                        };
                    } finally{
                        try {
                            c && !c.done && (r = a.return) && r.call(a);
                        } finally{
                            if (n) throw n.error;
                        }
                    }
                    t.clearSelectedBranches(), t.manifest.deleteGraphBranches(Array.from(t.selectedBranches)).updateBranches().save(), null == e || e();
                }
                t.selectedNodes.size && ((null === (i = t.manifest.metadata) || void 0 === i ? void 0 : i.initChapterId) && t.selectedNodes.has(t.manifest.metadata.initChapterId) ? l.emit("notification", {
                    id: "remove_init_chapter",
                    defaultTranslation: s.translation.remove_initial_chapter
                }) : oi(zi([], Bi(t.selectedNodes), !1)), null == e || e());
            }, this.setVisitedNodes = function(e) {
                t.visitedNodes = new Set(e);
            }, this.updatedSelectedBranches = function() {
                t.selectedBranches.forEach(function(e) {
                    t.manifest.branchesDict[e] || t.selectedBranches.delete(e);
                });
            }, this.clearSelection = function() {
                t.clearSelectedNodes(), t.clearSelectedBranches();
            }, this.reset = function() {
                t.manifest.reset(), t.clearSelectedNodes(!1);
            }, this.manifest = new bi, this.sectors = new Si, this.layout = new ci, this.reset();
        }
        return Object.defineProperty(t.prototype, "nodesWithErrors", {
            get: function() {
                return Object.keys(this.nodesErrors).map(Ei);
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.setNodeErrors = function(t) {
            Object.keys(this.nodesErrors).filter(function(e) {
                return !t[e];
            }).forEach(function(t) {
                var e = Ei(t);
                e.chapterErrors = [], e.setModified();
            }), Object.keys(t).forEach(function(e) {
                var n = Ei(e);
                n.chapterErrors = t[e], n.setModified();
            }), this.nodesErrors = Ti({}, t);
        }, t.prototype.getCopiedBranchControlId = function(t, e) {
            if (t.type === di.Action) {
                var n = Ei(t.source.chapterId).chapter.containers.flatMap(function(t) {
                    return t.controls;
                }).findIndex(function(e) {
                    return e.events.find(function(e) {
                        var n;
                        return (null === (n = e.action.args) || void 0 === n ? void 0 : n.branchId) === t.id;
                    });
                });
                return e.chapter.containers.flatMap(function(t) {
                    return t.controls;
                })[n].id;
            }
        }, t.prototype.getCopiedBranchContainerId = function(t, e) {
            if (t.type === di.Inaction) {
                var n = Ei(t.source.chapterId).chapter.containers.findIndex(function(e) {
                    return e.events.find(function(e) {
                        var n;
                        return (null === (n = e.action.args) || void 0 === n ? void 0 : n.branchId) === t.id;
                    });
                });
                return e.chapter.containers[n].id;
            }
        }, t.prototype.copyNodeBranches = function(t) {
            var e = this;
            Object.keys(t).map(Ei).forEach(function(n) {
                var r = n.branches.filter(function(e) {
                    return t[e.target.chapterId];
                }), o = t[n.id], i = Ei(o);
                r.forEach(function(n) {
                    var r = t[n.target.chapterId], o = e.getCopiedBranchControlId(n, i), a = e.getCopiedBranchContainerId(n, i);
                    i.addBranch(r, o, a);
                });
            });
        }, t;
    }();
    const Di = new Ii;
    var Zi, ji = function() {
        function t(t) {
            var e = this;
            this.dispose = function() {
                e._root.selectAll("*").remove(), e._root.remove();
            }, this.getRelativeEventCoordinates = function(t, n) {
                return zn(t, n || e._map.node());
            }, this.getEditorWindowSize = function() {
                var t, n = null === (t = e._root.node()) || void 0 === t ? void 0 : t.getBoundingClientRect();
                return {
                    width: (null == n ? void 0 : n.width) || 0,
                    height: (null == n ? void 0 : n.height) || 0
                };
            }, this.updateEditorBackgroundColor = function() {
                e._root.style("background-color", Di.manifest.styles.background.color);
            }, this._root = Bn(t).append("div").attr("id", "movika-graph-editor").style("position", "relative").style("width", "100%").style("height", "100%").style("padding", 0).style("margin", 0).on("contextmenu", function(t) {
                t.preventDefault();
            }), this.initStyles(), this._svg = this._root.append("svg").style("width", "100%").style("height", "100%"), this._grid = this._svg.append("g").attr("id", "grid-group"), this._map = this._svg.append("g").attr("id", "map-group").attr("transform", "translate(0, 0) scale(1)").style("will-change", "transform"), this._staticTools = this._svg.append("g").attr("id", "static-tools-group"), this._defs = this._svg.append("defs"), l.on("zoom", function(t) {
                var n = Math.round(t.x), r = Math.round(t.y), o = t.value;
                e._map.attr("transform", "translate(".concat(n, ", ").concat(r, ") scale(").concat(o, ")"));
            });
        }
        return Object.defineProperty(t.prototype, "root", {
            get: function() {
                return this._root;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "svg", {
            get: function() {
                return this._svg;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "grid", {
            get: function() {
                return this._grid;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "map", {
            get: function() {
                return this._map;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "staticTools", {
            get: function() {
                return this._staticTools;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "defs", {
            get: function() {
                return this._defs;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.select = function(t) {
            return this._root.select(t);
        }, t.prototype.selectAll = function(t) {
            return this._root.selectAll(t);
        }, Object.defineProperty(t.prototype, "viewPosition", {
            get: function() {
                var t = this.getEditorWindowSize();
                return {
                    scale: Cl.inputs.zoom.zoomFactor,
                    viewWidth: t.width,
                    viewHeight: t.height,
                    transformY: Cl.inputs.zoom.zoomPosition.y,
                    transformX: Cl.inputs.zoom.zoomPosition.x
                };
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.initStyles = function() {
            this._root.append("style").html("\n      #movika-graph-editor {\n        background-color: ".concat(Di.manifest.styles.background.color, ";\n        font-family: inherit;\n        font-size: 12px;\n      }\n\n      #movika-graph-editor * { box-sizing: border-box; }\n\n      #movika-graph-editor.zoom_hand_tool { cursor: grab; }\n\n      #movika-graph-editor.zoom_hand_tool_active { cursor: grabbing; }\n\n      #movika-graph-editor.zoom_hand_tool #map-group,\n      #movika-graph-editor.zoom_hand_tool_active #map-group { pointer-events: none; }\n\n      #movika-graph-editor svg { user-select: none; -webkit-user-select: none; }\n\n      #movika-graph-editor svg text, #movika-graph-editor svg div { pointer-events: none; }\n\n      .mge-editorPopup {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        font-size: 11px;\n        line-height: 16px;\n        background-color: ").concat(s.render.color.tooltipBackground, ";\n        color: ").concat(s.render.color.text, ';\n        border-radius: 4px;\n        padding: 8px 12px;\n        position: absolute;\n        will-change: transform;\n        color: #F2F5FF;\n        font-weight: 400;\n        h5 {\n          margin-top: 12px;\n          font-size: 12px;\n          margin-bottom: 2px;\n          font-weight: 800;\n        }\n        h5:first-child {\n         margin-top: 0;\n        }\n      }\n\n      .mge-editorPopup.arrow::after {\n         content: "";\n         position: absolute;\n         width: 11px;\n         height: 11px;\n         border-radius: 30px 0 8px 0;\n         background: #282A2E;\n         transform: translateX(-50%) translateY(-50%) rotate(45deg);\n         bottom: -11px;\n         left: 50%;\n         box-shadow: 0px 4px 4px 0px #00000040;\n      }\n\n      #movika-graph-editor .mge-legend {\n        display: flex;\n        align-items: center;\n        background-color: rgba(17, 17, 17, 0.8);\n        border-radius: 8px;\n        padding: 2px 4px;\n        color: #FFFFFF;\n        font-weight: 400;\n        text-shadow: 0px 0px 4px rgba(21, 18, 49, 0.23);\n        position: absolute;\n        top: calc(10px + env(safe-area-inset-top));\n        user-select: none;\n        pointer-events: none;\n      }\n      #movika-graph-editor .mge-legend.mge-graph { left: 10px; }\n      #movika-graph-editor .mge-legend.mge-navigation { right: 10px; }\n      #movika-graph-editor .mge-legend.mge-navigation .mge-icon {\n        width: 28px;\n        height: 28px;\n      }\n      #movika-graph-editor .mge-legendItem {\n        display: flex;\n        align-items: center;\n        position: relative;\n        height: 36px;\n        padding: 8px;\n      }\n      #movika-graph-editor .mge-legendItem:not(:last-child) { margin-right: 12px; }\n      #movika-graph-editor .mge-legendItem:not(:last-child)::after {\n        content: "\u2022";\n        color: rgba(255, 255, 255, 0.4);\n        position: absolute;\n        right: -8px;\n        top: 10px;\n      }\n      #movika-graph-editor .mge-legendItem .mge-icon {\n        color: #FFFFFF;\n        width: 20px;\n        height: 20px;\n        margin-right: 8px;\n      }\n      #movika-graph-editor .mge-legendItem .mge-icon.withBg {\n        color: #222222;\n        background-color: #FFFFFF;\n        border-radius: 50%;\n        padding: 4px;\n      }\n      #movika-graph-editor .mge-text {\n        font-size: 12px;\n        font-weight: 500;\n        color: rgb(255, 255, 255);\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n      }\n      #movika-graph-editor .mge-legendItem .mge-icon svg { display: inline-block; }\n      @media screen and (max-device-width: 600px) and (orientation: portrait) {\n        #movika-graph-editor .mge-legend.mge-navigation { display: none; }\n      }\n      @media screen and (max-device-width: 900px) and (orientation: landscape) {\n        #movika-graph-editor .mge-legend.mge-navigation { display: none; }\n      }\n    '));
        }, t;
    }(), Vi = s.render.grid.size * s.render.grid.steps, Hi = [
        {
            id: "grid",
            numberOfCells: 1,
            strokeWidth: .2,
            fillOpacity: 1
        },
        {
            id: "inner_grid",
            numberOfCells: s.render.grid.steps,
            strokeWidth: .2,
            fillOpacity: .8
        }
    ], Fi = function() {
        function t(t) {
            var e = this;
            this._gridDomElement = t, this._zoom = {
                value: 1,
                x: 0,
                y: 0
            }, this._displayGrid = Di.manifest.styles.background.grid.enabled, this.dispose = function() {
                e._gridDomElement.selectAll("*").remove();
            }, this.getSnappedCoordinates = function(t) {
                var n = function(t, e) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!n) return t;
                    var r, o, i = n.call(t), a = [];
                    try {
                        for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
                    } catch (t) {
                        o = {
                            error: t
                        };
                    } finally{
                        try {
                            r && !r.done && (n = i.return) && n.call(i);
                        } finally{
                            if (o) throw o.error;
                        }
                    }
                    return a;
                }(t, 2), r = n[0], o = n[1];
                return [
                    e.getSnappedCoordinateValue(r),
                    e.getSnappedCoordinateValue(o)
                ];
            }, this.getSnappedCoordinateValue = function(t) {
                return Cl.inputs.keydown.shiftHold && e._displayGrid ? +(Math.floor(t / s.render.grid.size) * s.render.grid.size).toFixed(2) : t;
            }, this.update = function() {
                e._displayGrid = Di.manifest.styles.background.grid.enabled, e.updateGridVisibility(), e._displayGrid && e.updateGridColor();
            }, this.renderPatterns(t), this.renderRect(t), this.updateGridColor(), this.updateGridVisibility(), l.on("zoom", function(t) {
                e._zoom = t, e._displayGrid && e.updateGridSize();
            });
        }
        return t.prototype.updateGridColor = function() {
            Cl.dom.select("#grid rect").attr("stroke", Di.manifest.styles.background.grid.color), Cl.dom.select("#inner_grid rect").attr("stroke", Di.manifest.styles.background.grid.color);
        }, t.prototype.updateGridSize = function() {
            var t = this;
            Hi.forEach(function(e) {
                if ("inner_grid" === e.id) {
                    if (t._zoom.value <= .3) return void Cl.dom.select("#inner_grid_rect").style("display", "none");
                    Cl.dom.select("#inner_grid_rect").style("display", null);
                }
                var n = t._zoom.value * Vi / e.numberOfCells;
                Cl.dom.select("#".concat(e.id)).attr("x", t._zoom.x % n).attr("y", t._zoom.y % n).attr("width", n).attr("height", n);
            });
        }, t.prototype.updateGridVisibility = function() {
            this._displayGrid ? (this.updateGridSize(), this._gridDomElement.style("display", null)) : this._gridDomElement.style("display", "none");
        }, t.prototype.renderPatterns = function(t) {
            t.selectAll("pattern").data(Hi).join("pattern").attr("id", function(t) {
                return t.id;
            }).attr("width", function(t) {
                return Vi / t.numberOfCells;
            }).attr("height", function(t) {
                return Vi / t.numberOfCells;
            }).attr("patternUnits", "userSpaceOnUse").append("rect").attr("width", "100%").attr("height", "100%").attr("stroke-width", function(t) {
                return t.strokeWidth;
            }).attr("fill", "none");
        }, t.prototype.renderRect = function(t) {
            Hi.forEach(function(e) {
                t.append("rect").attr("x", 0).attr("y", 0).attr("id", e.id + "_rect").attr("width", "100%").attr("height", "100%").attr("fill", "url(#".concat(e.id, ")")).attr("fill-opacity", e.fillOpacity);
            });
        }, t;
    }();
    !function(t) {
        t.C = "KeyC", t.V = "KeyV", t.G = "KeyG", t.H = "KeyH", t.Equal = "Equal", t.Minus = "Minus", t.NumpadAdd = "NumpadAdd", t.NumpadSubtract = "NumpadSubtract", t.Delete = "Delete", t.Backspace = "Backspace", t.ShiftLeft = "ShiftLeft", t.Space = "Space";
    }(Zi || (Zi = {}));
    var Ri, Yi, Wi = function() {
        function t() {
            var t = this;
            this._shiftHold = !1, this._spaceHold = !1, this.dispose = function() {
                document.removeEventListener("keydown", t.shortcutsHandler), document.removeEventListener("keydown", t.holdKeyHandler), document.removeEventListener("keyup", t.holdKeyHandler), window.removeEventListener("blur", t.resetHoldKey);
            }, this.shortcutsHandler = function(e) {
                if (!t.ignoreKeyboardEvent(e)) {
                    switch(e.code){
                        case Zi.Equal:
                        case Zi.NumpadAdd:
                            t.handleZoomIn();
                            break;
                        case Zi.Minus:
                        case Zi.NumpadSubtract:
                            t.handleZoomOut();
                    }
                    if (s.isEditMode()) {
                        if (e.repeat) return;
                        if (e.ctrlKey || e.metaKey) {
                            if (e.code === Zi.C) return void t.handleCopy();
                            if (e.code === Zi.V) return void t.handlePaste();
                        }
                        switch(e.code){
                            case Zi.Backspace:
                            case Zi.Delete:
                                t.handleDelete();
                                break;
                            case Zi.H:
                                Cl.inputs.zoom.toggleMousedownZoom();
                                break;
                            default:
                                return;
                        }
                    } else if (s.isPreViewMode()) {
                        if (e.repeat) return;
                        if (e.code !== Zi.H) return;
                        Cl.inputs.zoom.toggleMousedownZoom();
                    }
                }
            }, this.holdKeyHandler = function(e) {
                if (!t.ignoreKeyboardEvent(e) && !e.repeat) {
                    var n = "keydown" === e.type;
                    switch(e.code){
                        case Zi.ShiftLeft:
                            t._shiftHold = n;
                            break;
                        case Zi.Space:
                            t._spaceHold = n, n ? Cl.inputs.zoom.enableMousedownZoom() : Cl.inputs.zoom.disableMousedownZoom();
                            break;
                        default:
                            return;
                    }
                }
            }, this.resetHoldKey = function() {
                t._shiftHold = !1, t._spaceHold = !1;
            }, document.addEventListener("keydown", this.shortcutsHandler), document.addEventListener("keydown", this.holdKeyHandler), document.addEventListener("keyup", this.holdKeyHandler), window.addEventListener("blur", this.resetHoldKey);
        }
        return Object.defineProperty(t.prototype, "shiftHold", {
            get: function() {
                return this._shiftHold;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "spaceHold", {
            get: function() {
                return this._spaceHold;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.handleCopy = function() {
            Di.copySelectedNodes();
        }, t.prototype.handlePaste = function() {
            Di.pasteNodes();
        }, t.prototype.handleDelete = function() {
            Di.deleteSelection(function() {
                Cl.tools.disable();
            });
        }, t.prototype.handleZoomIn = function() {
            Cl.inputs.zoom.update(function(t) {
                return t + .1;
            });
        }, t.prototype.handleZoomOut = function() {
            Cl.inputs.zoom.update(function(t) {
                return t - .1;
            });
        }, t.prototype.ignoreKeyboardEvent = function(t) {
            return Di.isGraphFrozen || t.defaultPrevented || [
                "INPUT",
                "TEXTAREA"
            ].includes(t.target.nodeName);
        }, t;
    }(), Xi = function() {
        function t(t) {
            this.toolId = t, this.toolElement = zr("svg:g").datum([
                0,
                0
            ]).attr("id", t).attr("transform", "translate(0, 0)").style("display", "none").call(Cl.inputs.nullableDrag());
        }
        return t.prototype.render = function(t) {
            var e = this;
            t.append(function() {
                return e.toolElement.node();
            });
        }, t.prototype.start = function() {
            Cl.inputs.zoom.disable(), this.toolElement.style("display", "inline");
        }, t.prototype.stop = function() {
            Cl.inputs.zoom.enable(), this.toolElement.style("display", "none");
        }, t.prototype.clear = function() {
            this.toolElement.selectAll("*").remove();
        }, t.prototype.position = function(t) {
            var e = function(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t), a = [];
                try {
                    for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
                } catch (t) {
                    o = {
                        error: t
                    };
                } finally{
                    try {
                        r && !r.done && (n = i.return) && n.call(i);
                    } finally{
                        if (o) throw o.error;
                    }
                }
                return a;
            }(t, 2), n = e[0], r = e[1];
            return this.toolElement.datum([
                n,
                r
            ]).attr("transform", function() {
                return "translate(".concat(n, ", ").concat(r, ")");
            }), this;
        }, t.test = !0, t;
    }(), $i = 186, Gi = 12 * s.render.grid.size, qi = function(t) {
        return t.append("path").attr("d", function() {
            return fo({
                x: 0,
                y: 0,
                w: $i,
                h: Gi,
                r: s.render.node.borderRadius
            });
        }).attr("width", $i).attr("height", Gi).attr("stroke-width", s.render.strokeSize).style("stroke-dasharray", "3, 3").attr("stroke", s.render.color.shadowNodeStroke).attr("fill", s.render.color.shadowNodeFill);
    }, Ui = function(t, e, n) {
        return {
            primaryTextContainer: Ki(t, e),
            secondaryTextContainer: n ? Ki(t, n, !0) : void 0
        };
    }, Ki = function(t, e, n) {
        void 0 === n && (n = !1);
        var r = e.split("\n"), o = t.append("text").style("display", n ? "none" : "inline").style("fill", "#F2F5FF").attr("font-weight", 500).attr("y", Gi / 2.2).attr("transform", "translate(".concat(93, ")")).attr("text-rendering", "optimizeSpeed");
        return r.forEach(function(t) {
            o.append("tspan").text(t).attr("text-anchor", "middle").attr("x", 0).attr("dy", 17);
        }), o;
    }, Ji = function(t, e) {
        return !(t.minX > e.maxX || t.maxX < e.minX || t.minY > e.maxY || t.maxY < e.minY);
    }, Qi = function(t) {
        return Di.manifest.nodes.some(function(e) {
            return Ji(t, e.getBBox());
        });
    }, ta = function(t) {
        var e = "string" == typeof t ? t : t.id;
        return !!Di.nodesErrors[e] && Di.nodesErrors[e].length > 0;
    }, ea = function(t, e) {
        return ta(t) ? e ? s.render.color.activeError : s.render.color.error : t.stylesWithDefaults.hover.borderColor;
    }, na = (Ri = function(t, e) {
        return Ri = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        }, Ri(t, e);
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
        function n() {
            this.constructor = t;
        }
        Ri(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n);
    }), ra = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, oa = function(t) {
        function e() {
            var e = t.call(this, "area-select") || this;
            return e._rectBoundingBox = {
                minX: 0,
                minY: 0,
                maxX: 0,
                maxY: 0
            }, e._needForRAF = !0, e._selectedNodeIds = [], e.render = function(n) {
                t.prototype.render.call(e, n), e._rectElement = e.toolElement.append("rect").attr("id", "select-area-rect").attr("fill", "#7b68ee").attr("fill-opacity", "0.05").attr("stroke", "#8978F0").attr("stroke-width", "0.5").attr("shape-rendering", "crispEdges");
            }, e;
        }
        return na(e, t), e.prototype.start = function() {
            var e = this;
            t.prototype.start.call(this), Cl.dom.svg.on("mousedown.areaSelect", function() {
                var t;
                null === (t = e._rectElement) || void 0 === t || t.attr("width", 0).attr("height", 0);
            }).on("mousemove.areaSelect", function(t) {
                if (e._needForRAF) {
                    e._needForRAF = !1, Cl.dom.select("#nodes").attr("pointer-events", "none"), Cl.dom.select("#branches").attr("pointer-events", "none");
                    var n = ra(e.toolElement.datum(), 2), r = n[0], o = n[1], i = ra(zn(t), 2), a = i[0], s = i[1];
                    e.animationFrame = requestAnimationFrame(function() {
                        var t, n = Math.abs(r - a), i = Math.abs(o - s), l = r < a ? 0 : -n, c = o < s ? 0 : -i;
                        null === (t = e._rectElement) || void 0 === t || t.attr("x", l).attr("y", c).attr("width", n).attr("height", i), e._selectedNodeIds = Cl.inputs.keydown.shiftHold ? function(t, e, n) {
                            if (n || 2 === arguments.length) for(var r, o = 0, i = e.length; o < i; o++)!r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                            return t.concat(r || Array.prototype.slice.call(e));
                        }([], ra(Di.selectedNodes), !1) : [];
                        var u = ra(Cl.inputs.zoom.getRelativeCoordinates([
                            r,
                            o
                        ]), 2), d = u[0], h = u[1], f = ra(Cl.inputs.zoom.getRelativeCoordinates([
                            a,
                            s
                        ]), 2), p = f[0], v = f[1];
                        e._rectBoundingBox.minX = p < d ? p : d, e._rectBoundingBox.maxX = p < d ? d : p, e._rectBoundingBox.minY = v < h ? v : h, e._rectBoundingBox.maxY = v < h ? h : v, Di.manifest.nodes.forEach(function(t) {
                            Ji(e._rectBoundingBox, t.getBBox()) && e._selectedNodeIds.push(t.id);
                        }), Cl.layers.updateSelected(e._selectedNodeIds), e._needForRAF = !0;
                    });
                }
            }).on("mouseup.areaSelect", function() {
                Cl.layers.updateSelected(e._selectedNodeIds), e.stop();
            });
        }, e.prototype.data = function() {
            return this;
        }, e.prototype.stop = function() {
            var e;
            Cl.dom.svg.on("mousemove.areaSelect", null).on("mouseup.areaSelect", null), this.animationFrame && cancelAnimationFrame(this.animationFrame), null === (e = this._rectElement) || void 0 === e || e.attr("x", 0).attr("y", 0).attr("width", 0).attr("height", 0), this._rectBoundingBox.minX = 0, this._rectBoundingBox.maxX = 0, this._rectBoundingBox.minY = 0, this._rectBoundingBox.maxY = 0, this._needForRAF = !0, this._selectedNodeIds.length = 0, Cl.dom.select("#nodes").attr("pointer-events", null), Cl.dom.select("#branches").attr("pointer-events", null), t.prototype.stop.call(this);
        }, e;
    }(Xi), ia = function() {
        var t = function(e, n) {
            return t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e;
            } || function(t, e) {
                for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }, t(e, n);
        };
        return function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            function r() {
                this.constructor = e;
            }
            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
        };
    }(), aa = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, sa = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e._numberOfItems = 0, e._isTooltipActive = !1, e;
        }
        return ia(e, t), e.prototype.start = function() {
            t.prototype.start.call(this), this._numberOfItems = 0, this.clear();
        }, e.prototype.position = function(t) {
            var e = aa(t, 2), n = e[0], r = e[1], o = this.getSafeMenuToolArea(), i = o.minXPosition, a = o.minYPosition, l = o.horizontal, c = o.vertical, u = l - s.render.tool.menuItemWidth, d = c - s.render.tool.menuItemHeight * this._numberOfItems, h = Math.min(u, Math.max(i, n)), f = Math.min(d, Math.max(a, r));
            return this.toolElement.datum([
                n,
                r
            ]).attr("transform", function() {
                return "translate(".concat(h, ", ").concat(f, ")");
            }), this;
        }, e.prototype.addMenuItem = function(t) {
            var e = this, n = s.render.tool.menuItemHeight * this._numberOfItems, r = (function(t) {
                var e = t.label, n = t.icon, r = t.disabled, o = void 0 !== r && r, i = t.width, a = void 0 === i ? s.render.node.width : i, l = t.height, c = t.onClick, u = zr("svg:g").on("click", function() {
                    o || c();
                });
                return u.append("rect").attr("x", 0).attr("y", 0).attr("width", a).attr("height", l || s.render.node.componentControlHeight).attr("fill", o ? s.render.color.elementBackgroundAlt : s.render.color.elementBackground).on("mouseenter", function() {
                    o || Bn(this).attr("fill", s.render.color.elementBackgroundHover);
                }).on("mouseleave", function() {
                    o || Bn(this).attr("fill", s.render.color.elementBackground);
                }).style("cursor", o ? "not-allowed" : "pointer"), n && u.append("use").style("color", s.render.tool.textColor).attr("x", 8).attr("y", 8).attr("href", "#" + n).style("opacity", o ? .4 : 1), u.append("text").text(e).attr("x", n ? 30 : 8).attr("y", 20).attr("font-size", 12).attr("font-weight", 500).attr("text-anchor", "start").style("fill", o ? "#797B82" : s.render.tool.textColor).attr("text-rendering", "optimizeSpeed"), u;
            })({
                label: t.label,
                icon: t.icon,
                disabled: t.disabled,
                width: s.render.tool.menuItemWidth,
                height: s.render.tool.menuItemHeight,
                onClick: function() {
                    t.onClick(), e.stop();
                }
            }).attr("transform", "translate(0, ".concat(n, ")"));
            if (t.tooltip) {
                var o = t.tooltip;
                r.on("mouseenter", function() {
                    if (!e._isTooltipActive) {
                        e._isTooltipActive = !0;
                        var t = aa(e.toolElement.datum(), 2), r = t[0], i = t[1];
                        Cl.popups.position([
                            r + s.render.tool.menuItemTooltipOffset,
                            i + n - 10
                        ]).show(o, void 0, "tooltip");
                    }
                }).on("mouseleave", function() {
                    e._isTooltipActive && (e._isTooltipActive = !1, Cl.popups.hide());
                });
            }
            this.toolElement.append(function() {
                return r.node();
            }), this._numberOfItems += 1;
        }, e.prototype.createMenu = function(t) {
            !function(t) {
                var e = t.id, n = t.width, r = t.height, o = t.element, i = t.strokeColor, a = void 0 === i ? s.render.color.nodeStroke : i, l = t.r, c = void 0 === l ? s.render.node.borderRadius : l;
                (function(t) {
                    var e = t.id, n = t.width, r = t.height, o = t.element, i = t.strokeColor, a = t.r;
                    o.append("path").attr("id", po + e).attr("d", fo({
                        x: mo,
                        y: mo,
                        w: n - 2 * mo,
                        h: r - 2 * mo,
                        r: a - yo
                    })).attr("fill", "none").attr("stroke-width", s.render.strokeSize).attr("stroke", i);
                })({
                    id: e,
                    width: n,
                    height: r,
                    element: o,
                    strokeColor: a,
                    r: c
                }), go({
                    id: e,
                    width: n,
                    height: r,
                    element: o,
                    r: c
                });
            }({
                id: this.toolId,
                width: s.render.tool.menuItemWidth,
                height: s.render.tool.menuItemHeight * this._numberOfItems,
                element: this.toolElement,
                strokeColor: t || s.render.tool.strokeColor,
                r: s.render.tool.borderRadius
            });
        }, e.prototype.getSafeMenuToolArea = function() {
            var t = Cl.dom.getEditorWindowSize();
            return {
                minXPosition: 10,
                minYPosition: 10,
                horizontal: t.width - 10,
                vertical: t.height - 10
            };
        }, e;
    }(Xi), la = function() {
        var t = function(e, n) {
            return t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e;
            } || function(t, e) {
                for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }, t(e, n);
        };
        return function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            function r() {
                this.constructor = e;
            }
            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
        };
    }(), ca = function(t) {
        function e() {
            return t.call(this, "control-menu") || this;
        }
        return la(e, t), e.prototype.start = function() {
            var e;
            t.prototype.start.call(this);
            var n = Ni(null === (e = this._node) || void 0 === e ? void 0 : e.id);
            if (!n || !this._control) throw new Error("[Tool]: ControlMenuTool requires 'GraphNode' and 'Control' data");
            this.renderMenuItems(n, this._control);
        }, e.prototype.data = function(t, e) {
            return this._node = t, this._control = e, this;
        }, e.prototype.renderMenuItems = function(t, e) {
            var n = t.chapter.containers.find(function(t) {
                return !!t.controls.find(function(t) {
                    return t.id === e.id;
                });
            }).id;
            this.addMenuItem({
                label: s.translation.tool_menu_item_rename,
                disabled: s.isPreViewMode(),
                onClick: function() {
                    l.emit("control", {
                        name: "renameControl",
                        chapterId: t.id,
                        containerId: n,
                        control: e
                    });
                }
            }), this.addMenuItem({
                label: s.translation.tool_menu_item_delete,
                disabled: s.isPreViewMode(),
                onClick: function() {
                    l.emit("control", {
                        name: "deleteControl",
                        chapterId: t.id,
                        controlId: e.id,
                        containerId: n
                    });
                }
            }), this.createMenu();
        }, e;
    }(sa), ua = function() {
        var t = function(e, n) {
            return t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e;
            } || function(t, e) {
                for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }, t(e, n);
        };
        return function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            function r() {
                this.constructor = e;
            }
            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
        };
    }(), da = function(t) {
        function e() {
            return t.call(this, "control-type-menu") || this;
        }
        return ua(e, t), e.prototype.start = function() {
            if (t.prototype.start.call(this), !this._node) throw new Error("[Tool]: ControlTypeMenuTool requires 'GraphNode' data");
            this.renderMenuItems(this._node);
        }, e.prototype.data = function(t) {
            return this._node = t, this;
        }, e.prototype.renderMenuItems = function(t) {
            this.addMenuItem({
                label: s.translation.tool_menu_item_control_button,
                icon: c.ActionButton,
                onClick: function() {
                    l.emit("control", {
                        name: "addControl",
                        type: "Button",
                        nodeId: t.id
                    });
                }
            }), this.addMenuItem({
                label: s.translation.tool_menu_item_control_area,
                icon: c.ActionArea,
                onClick: function() {
                    l.emit("control", {
                        name: "addControl",
                        type: "Area",
                        nodeId: t.id
                    });
                }
            }), this.createMenu();
        }, e;
    }(sa), ha = function() {
        var t = function(e, n) {
            return t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e;
            } || function(t, e) {
                for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }, t(e, n);
        };
        return function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            function r() {
                this.constructor = e;
            }
            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
        };
    }(), fa = function(t) {
        function e() {
            return t.call(this, "editor-context-menu") || this;
        }
        return ha(e, t), e.prototype.start = function() {
            t.prototype.start.call(this), this.renderMenuItems();
        }, e.prototype.data = function() {
            return this;
        }, e.prototype.renderMenuItems = function() {
            var t = this;
            this.addMenuItem({
                label: s.translation.tool_menu_item_add_node,
                disabled: s.isPreViewMode(),
                onClick: function() {
                    var e = Cl.inputs.zoom.getRelativeCoordinates(t.toolElement.datum());
                    Di.manifest.createNode(e), Cl.layers.update();
                }
            }), this.addMenuItem({
                label: s.translation.tool_menu_item_copy,
                disabled: !Di.selectedNodes.size || s.isPreViewMode(),
                onClick: function() {
                    Di.copySelectedNodes();
                }
            }), this.addMenuItem({
                label: s.translation.tool_menu_item_paste,
                disabled: !Di.copiedNodes.size || s.isPreViewMode(),
                onClick: function() {
                    var e = Cl.inputs.zoom.getRelativeCoordinates(t.toolElement.datum());
                    Di.pasteNodes(e);
                }
            }), this.addMenuItem({
                label: s.translation.tool_menu_item_delete,
                disabled: !Di.selectedNodes.size || s.isPreViewMode(),
                onClick: function() {
                    Di.deleteSelection();
                }
            }), this.createMenu();
        }, e;
    }(sa), pa = function() {
        var t = function(e, n) {
            return t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e;
            } || function(t, e) {
                for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }, t(e, n);
        };
        return function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            function r() {
                this.constructor = e;
            }
            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
        };
    }(), va = function(t) {
        function e() {
            return t.call(this, "eov-menu") || this;
        }
        return pa(e, t), e.prototype.start = function() {
            var e;
            t.prototype.start.call(this);
            var n = Ni(null === (e = this._node) || void 0 === e ? void 0 : e.id);
            if (!n) throw new Error("[Tool]: EOVMenuTool requires 'GraphNode' data");
            this.renderMenuItems(n);
        }, e.prototype.data = function(t) {
            return this._node = t, this;
        }, e.prototype.renderMenuItems = function(t) {
            this.addMenuItem({
                label: s.translation.tool_menu_item_next_node,
                icon: c.Node,
                onClick: function() {
                    t.updateChapterSuspenseAction("setNextBranch"), ni(t.chapter), Di.manifest.updateBranches();
                }
            });
            var e = !!t.containers().length;
            this.addMenuItem({
                label: s.translation.tool_menu_item_random,
                icon: c.Random,
                disabled: !e,
                tooltip: e ? void 0 : s.translation.tool_menu_item_random_tooltip,
                onClick: function() {
                    t.updateChapterSuspenseAction("setRandomBranch"), Di.manifest.updateBranches(), ni(t.chapter);
                }
            }), this.createMenu(s.render.color.stroke);
        }, e;
    }(sa), ya = function() {
        var t = function(e, n) {
            return t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e;
            } || function(t, e) {
                for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }, t(e, n);
        };
        return function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            function r() {
                this.constructor = e;
            }
            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
        };
    }(), ma = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, ga = function(t, e, n) {
        if (n || 2 === arguments.length) for(var r, o = 0, i = e.length; o < i; o++)!r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e));
    }, _a = function(t) {
        function e() {
            return t.call(this, "node-menu") || this;
        }
        return ya(e, t), e.prototype.start = function() {
            var e;
            t.prototype.start.call(this);
            var n = Ni(null === (e = this._node) || void 0 === e ? void 0 : e.id);
            if (!n) throw new Error("[Tool]: NodeMenuTool requires 'GraphNode' data");
            this.renderMenuItems(n);
        }, e.prototype.data = function(t) {
            return this._node = t, this;
        }, e.prototype.renderMenuItems = function(t) {
            var e, n = ga([], ma(Di.selectedNodes), !1).map(Ei), r = null === (e = Di.manifest.metadata) || void 0 === e ? void 0 : e.initChapterId, o = n.length > 1, i = !!r && Di.selectedNodes.has(r), a = n.some(function(t) {
                return "end" !== t.chapter.order;
            }) && n.every(function(t) {
                return !t.getSuspenseBranchId() && !t.controls().length && "start" !== t.chapter.order;
            }), u = n.some(function(t) {
                return "simple" !== t.chapter.order;
            });
            this.addMenuItem({
                label: s.translation.tool_menu_item_rename,
                onClick: function() {
                    l.emit("control", {
                        name: "renameChapter",
                        chapterId: t.id
                    });
                },
                disabled: o
            }), this.addMenuItem({
                label: s.translation.tool_menu_item_copy,
                disabled: s.isPreViewMode(),
                onClick: function() {
                    Di.copySelectedNodes();
                }
            }), this.addMenuItem({
                label: s.translation.tool_menu_item_delete,
                disabled: i,
                onClick: function() {
                    return oi(ga([], ma(Di.selectedNodes), !1));
                }
            }), this.addMenuItem({
                label: s.translation.tool_menu_item_as_start_node,
                icon: c.StartNode,
                disabled: "start" === t.chapter.order || o,
                onClick: function() {
                    ri({
                        id: t.chapter.id,
                        order: "start"
                    });
                }
            }), this.addMenuItem({
                label: o ? s.translation.tool_menu_items_as_node : s.translation.tool_menu_item_as_node,
                icon: c.Node,
                disabled: !u,
                onClick: function() {
                    var e = n.filter(function(t) {
                        return "simple" !== t.chapter.order;
                    });
                    1 === e.length ? ri({
                        id: t.chapter.id,
                        order: "simple"
                    }) : (e.forEach(function(t) {
                        return Di.manifest.setNodeOrder(t.id, "simple");
                    }), Di.manifest.save());
                }
            }), this.addMenuItem({
                label: o ? s.translation.tool_menu_items_as_end_node : s.translation.tool_menu_item_as_end_node,
                icon: c.EndNode,
                disabled: !a,
                onClick: function() {
                    1 === n.length ? ri({
                        id: t.chapter.id,
                        order: "end"
                    }) : (n.forEach(function(t) {
                        return Di.manifest.setNodeOrder(t.id, "end");
                    }), Di.manifest.save());
                }
            }), this.addMenuItem({
                label: s.translation.tool_menu_item_start_preview,
                onClick: function() {
                    l.emit("control", {
                        name: "openPreview",
                        chapterId: t.id
                    });
                },
                disabled: o || !t.chapter.videoId
            }), this.createMenu();
        }, e;
    }(sa), wa = function() {
        var t = function(e, n) {
            return t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e;
            } || function(t, e) {
                for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }, t(e, n);
        };
        return function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            function r() {
                this.constructor = e;
            }
            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
        };
    }(), ba = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, Ca = Gi / 3.3, xa = function(t) {
        function e() {
            var e = t.call(this, "shadow-node") || this;
            return e._displayToolError = !1, e.render = function(n) {
                t.prototype.render.call(e, n), e._shadowNode = qi(e.toolElement), e.toolElement.append("svg").attr("x", 83).attr("y", Ca).attr("width", s.render.iconSize + 5).attr("height", s.render.iconSize + 5).attr("viewBox", "0 0 ".concat(s.render.iconSize, " ").concat(s.render.iconSize)).append("use").style("color", s.render.tool.textColor).attr("href", "#".concat(c.Move));
                var r = Ui(e.toolElement, s.translation.tool_shadow_node_text, s.translation.tool_shadow_node_error), o = r.primaryTextContainer, i = r.secondaryTextContainer;
                e._primaryText = o, e._secondaryText = i, e.toolElement.on("click", function(t) {
                    return t.preventDefault();
                }).on("contextmenu", function(t) {
                    return t.preventDefault();
                });
            }, e;
        }
        return wa(e, t), e.prototype.start = function() {
            t.prototype.start.call(this), this.redraw(), this.enableMouseMove();
        }, e.prototype.data = function() {
            return this;
        }, e.prototype.stop = function() {
            Cl.dom.svg.style("cursor", null).on("click.shadowNode", null).on("mousemove.shadowNode", null).on("contextmenu.shadowNode", null), l.emit("control", {
                name: "addChapterStopped"
            }), t.prototype.stop.call(this);
        }, e.prototype.enableMouseMove = function() {
            var t = this;
            Cl.dom.svg.style("cursor", "none"), Cl.dom.svg.on("click.shadowNode", function(e) {
                e.preventDefault(), t._displayToolError || (Di.manifest.createNode(t.toolElement.datum()), Cl.layers.update()), t.stop();
            }).on("mousemove.shadowNode", function(e) {
                var n = ba(Cl.dom.getRelativeEventCoordinates(e), 2), r = n[0], o = n[1], i = Cl.grid.getSnappedCoordinates([
                    r - 93,
                    o - Ca
                ]);
                t.toolElement.datum(i).attr("transform", function() {
                    return "translate(".concat(i[0], ", ").concat(i[1], ")");
                }), t.redraw();
            }).on("contextmenu.shadowNode", function(e) {
                e.preventDefault(), t.stop();
            });
        }, e.prototype.redraw = function() {
            var t = Qi(this.getShadowNodeBox());
            this._displayToolError !== t && (this._displayToolError = t, this.renderToolError());
        }, e.prototype.renderToolError = function() {
            var t, e, n;
            null === (t = this._shadowNode) || void 0 === t || t.attr("fill", this._displayToolError ? s.render.color.error : s.render.color.shadowNodeFill).attr("fill-opacity", "0.21").attr("stroke", this._displayToolError ? s.render.color.error : s.render.color.shadowNodeStroke).attr("stroke-opacity", "0.3"), null === (e = this._primaryText) || void 0 === e || e.style("display", this._displayToolError ? "none" : "inline"), null === (n = this._secondaryText) || void 0 === n || n.style("display", this._displayToolError ? "inline" : "none");
        }, e.prototype.getShadowNodeBox = function() {
            var t = ba(this.toolElement.datum(), 2), e = t[0], n = t[1];
            return {
                minX: e,
                minY: n,
                maxX: e + $i,
                maxY: n + Gi
            };
        }, e;
    }(Xi), Ma = "mge-node", ka = "mge-branch", Sa = function(t) {
        return "#node-" + t;
    }, Na = function(t, e) {
        return "".concat(Sa(t), " .").concat(e);
    }, Ea = function(t) {
        return Cl.dom.select(Sa(t));
    }, La = function() {
        return Cl.dom.selectAll("g.".concat(Ma));
    }, Oa = function(t) {
        return Cl.dom.select(function(t) {
            return "#branch-" + t;
        }(t));
    }, Aa = function() {
        return Cl.dom.selectAll("g.".concat(ka));
    }, Ta = function(t) {
        return Cl.dom.select("#".concat(s.render.prefix.nodeBorder).concat(t));
    }, Ba = function(t) {
        return Cl.dom.select(Na(t, "previewControls"));
    }, za = function(t, e) {
        var n = "nodeConnector";
        return e === di.Action ? n = "nodeActionConnector" : e === di.Inaction && (n = "nodeInactionConnector"), Cl.dom.select(Na(t, n));
    }, Pa = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, Ia = function(t, e) {
        t.append("rect").attr("fill", "transparent").attr("height", e).attr("width", e).attr("x", -e / 2).attr("y", -e / 2);
    }, Da = function(t, e) {
        var n = Pa(e, 2), r = n[0], o = n[1], i = zr("svg:g").attr("id", s.render.prefix.nodeFlipConnector + t.id).attr("class", "nodeConnector").style("transform", "translate(".concat(r, "px, ").concat(o, "px)")).style("display", "inline");
        return Ia(i, 8), i.append("svg:use").attr("href", "#".concat(t.displayLockedContent ? ho.Connector : ho.ConnectorDisabled)), i.node();
    }, Za = function(t, e) {
        if (t.hasParentChapters(di.Flip)) {
            var n = Pa(t.getIncomingConnectorsCoordinates()[di.Flip] || [
                0,
                t.render.previewMiddleYCoordinate
            ], 2)[1], r = zr("svg:g").attr("class", "nodeConnector").style("transform", "translateY(".concat(n, "px)")).style("display", t.hasParentChapters(di.Flip) ? "inline" : "none");
            Ia(r, 8), r.append("svg:use").attr("href", "#".concat(ho.Connector)), e.append(function() {
                return r.node();
            });
        }
    }, ja = function(t, e) {
        if (t.hasParentChapters(di.Action)) {
            var n = Pa(t.getIncomingConnectorsCoordinates()[di.Action] || [
                0,
                t.render.previewMiddleYCoordinate
            ], 2), r = n[0], o = n[1];
            r -= s.render.node.control.connectorRadius, o -= s.render.node.control.connectorRadius;
            var i = _o(c.Action).attr("transform", "translate(".concat(r, ", ").concat(o, ")")).attr("class", "nodeActionConnector");
            e.append(function() {
                return i.node();
            });
        }
    }, Va = function(t, e) {
        if (t.hasParentChapters(di.Inaction)) {
            var n = Pa(t.getIncomingConnectorsCoordinates()[di.Inaction] || [
                0,
                t.render.previewMiddleYCoordinate
            ], 2), r = n[0], o = n[1];
            r -= s.render.node.control.connectorRadius, o -= s.render.node.control.connectorRadius;
            var i = _o(c.Inaction).attr("transform", "translate(".concat(r, ", ").concat(o, ")")).attr("class", "nodeInactionConnector");
            e.append(function() {
                return i.node();
            });
        }
    }, Ha = function() {
        var t = function(e, n) {
            return t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e;
            } || function(t, e) {
                for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }, t(e, n);
        };
        return function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            function r() {
                this.constructor = e;
            }
            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
        };
    }(), Fa = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, Ra = function(t) {
        function e() {
            var e = t.call(this, "shadow-node-link") || this;
            return e._displayToolError = !1, e.render = function(n) {
                t.prototype.render.call(e, n), e._shadowNodeContainer = e.toolElement.append("g").style("display", "none"), e._shadowNode = qi(e._shadowNodeContainer);
                var r = Ui(e._shadowNodeContainer, s.translation.tool_shadow_node_link_text, s.translation.tool_shadow_node_error), o = r.primaryTextContainer, i = r.secondaryTextContainer;
                e._primaryText = o, e._secondaryText = i, e._shadowBranch = e.toolElement.append("path").attr("fill", "none").attr("stroke", s.render.color.stroke), e.renderDefaultLine(), e.toolElement.append("rect").attr("fill", "transparent").attr("x", -s.render.iconSize / 2).attr("y", -s.render.iconSize / 2).attr("width", s.render.iconSize).attr("height", s.render.iconSize).style("cursor", "pointer"), e.toggleHoverEffects(!0);
            }, e.stop = function() {
                e.renderDefaultLine(), e._node = void 0, e._parentControl = void 0, e._parentContainer = void 0, e._type = void 0, e.toolElement.call(Cl.inputs.nullableDrag()), t.prototype.stop.call(e);
            }, e.createSetNextBranchEvent = function() {
                if (!e._hasSetNextBranchEvent && e._type !== di.Flip) {
                    if (!e.node) throw new Error("Node doesn't exist");
                    switch(e._type){
                        case di.Action:
                            e.node.updateControlActionEvent(e._parentContainer, e._parentControl, "setNextBranch");
                            break;
                        case di.Inaction:
                            e.node.updateContainerSuspenseAction(e._parentContainer, "setNextBranch");
                    }
                    ni(e.node.chapter);
                }
            }, e.renderDefaultLine = function() {
                var t;
                null === (t = e._shadowBranch) || void 0 === t || t.attr("d", wo({
                    source: [
                        0,
                        0
                    ],
                    target: [
                        0,
                        0
                    ]
                })).style("marker-start", "").style("marker-end", "");
            }, e;
        }
        return Ha(e, t), Object.defineProperty(e.prototype, "node", {
            get: function() {
                var t;
                return Ni(null === (t = this._node) || void 0 === t ? void 0 : t.id);
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.start = function() {
            if (t.prototype.start.call(this), !this.node) throw new Error("[Tool]: ShadowNodeLinkTool requires 'GraphNode' data");
            this.redraw(this.toolElement.datum()), this.enableDrag(this.node);
        }, e.prototype.data = function(t, e, n, r, o) {
            return void 0 === o && (o = !0), this._node = t, this._parentContainer = n, this._parentControl = r, this._type = e, this._hasSetNextBranchEvent = o, this;
        }, e.prototype.enableDrag = function(t) {
            var e, n, r, o = this, i = !1;
            $n().on("start", function(e) {
                var i;
                Di.selectedNodes.has(t.id) || Cl.layers.updateSelected([
                    t.id
                ]), Cl.dom.select("#nodes").attr("pointer-events", "none"), Cl.dom.select("#branches").attr("pointer-events", "none"), o._type === di.Flip ? o.updateEOVTool() : (null === (i = o._shadowBranch) || void 0 === i || i.style("marker-start", "url(#".concat(u.Connector, ")")), o.updateControlTool());
                var a = Cl.grid.getSnappedCoordinates(e.subject);
                n = e.subject[0] - a[0], r = e.subject[1] - a[1], o.toggleHoverEffects(!1);
            }).on("drag", function(a) {
                var s, l, c;
                o.toolElement.style("display", "inline");
                var d, h = Cl.grid.getSnappedCoordinates([
                    a.x - a.subject[0],
                    a.y - a.subject[1]
                ]), f = h[0] - n, p = h[1] - r;
                if (null === (s = o._shadowBranch) || void 0 === s || s.attr("d", wo({
                    source: [
                        0,
                        0
                    ],
                    target: [
                        f,
                        p
                    ]
                })).style("marker-start", "").style("marker-end", "url(#".concat(u.Connector, ")")), (e = o.pointInsideNodeBBox(Cl.dom.getRelativeEventCoordinates(a))) && t.id !== e.id) {
                    i = !1, null === (l = o._shadowNodeContainer) || void 0 === l || l.style("display", "none");
                    var v = za(e.id, o._type), y = {
                        chapterId: t.id,
                        type: o._type || di.Flip,
                        connectorType: o._type || di.Flip,
                        branchId: null
                    };
                    if (e.updateIncomingConnectorsCoordinates(y), !v) {
                        var m = (d = e.id, Cl.dom.select(Na(d, "nodeTools")));
                        o._type === di.Action ? ja(e, m) : o._type === di.Inaction ? Va(e, m) : Za(e, m);
                    }
                } else {
                    i = !0, null === (c = o._shadowNodeContainer) || void 0 === c || c.attr("transform", "translate(".concat(f, ", ").concat(p - Gi / 2, ")")).style("display", "inline"), o.redraw(Cl.dom.getRelativeEventCoordinates(a));
                    var g = Fa(Cl.grid.getSnappedCoordinates(Cl.dom.getRelativeEventCoordinates(a)), 2), _ = g[0], w = g[1];
                    Cl.layers.shiftLayersOnDragToEdge([
                        [
                            _,
                            w
                        ],
                        [
                            _ + $i,
                            w + Gi
                        ]
                    ]);
                }
            }).on("end", function(n) {
                var r;
                if (null === (r = o._shadowNodeContainer) || void 0 === r || r.style("display", "none"), o._type === di.Flip ? o.updateEOVTool(!1) : o.updateControlTool(!1), Cl.dom.select("#nodes").attr("pointer-events", null), Cl.dom.select("#branches").attr("pointer-events", null), i) {
                    if (o._displayToolError) o.createSetNextBranchEvent();
                    else {
                        var a = Fa(Cl.grid.getSnappedCoordinates(Cl.dom.getRelativeEventCoordinates(n)), 2), s = a[0], l = a[1];
                        Di.manifest.createNode([
                            s,
                            Cl.grid.getSnappedCoordinateValue(l - Gi / 2)
                        ], t.id, function(t) {
                            return o.createNodeBranch(t);
                        }).updateBranches().save(), Cl.layers.update();
                    }
                } else e ? (o.createNodeBranch(e.id), e.setModified(), Di.manifest.updateBranches().save()) : o.createSetNextBranchEvent();
                i = !1, e = void 0, o.toggleHoverEffects(!0), o.stop();
            })(this.toolElement);
        }, e.prototype.createNodeBranch = function(t) {
            var e, n, r, o;
            this._parentControl ? null === (e = this.node) || void 0 === e || e.addBranch(t, this._type === di.Action ? null === (n = this._parentControl) || void 0 === n ? void 0 : n.id : void 0, this._type === di.Inaction ? null === (r = this._parentContainer) || void 0 === r ? void 0 : r.id : void 0) : null === (o = this.node) || void 0 === o || o.addBranch(t);
        }, e.prototype.redraw = function(t) {
            var e = Qi(this.getShadowNodeBox(t));
            this._displayToolError !== e && (this._displayToolError = e, this.renderToolError());
        }, e.prototype.renderToolError = function() {
            var t, e, n;
            null === (t = this._shadowNode) || void 0 === t || t.attr("fill", this._displayToolError ? s.render.color.error : s.render.color.shadowNodeFill).attr("fill-opacity", "0.21").attr("stroke", this._displayToolError ? s.render.color.error : s.render.color.shadowNodeStroke).attr("stroke-opacity", "0.3"), null === (e = this._primaryText) || void 0 === e || e.style("display", this._displayToolError ? "none" : "inline"), null === (n = this._secondaryText) || void 0 === n || n.style("display", this._displayToolError ? "inline" : "none");
        }, e.prototype.getShadowNodeBox = function(t) {
            var e = Fa(t, 2), n = e[0], r = e[1];
            return {
                minX: n,
                minY: r - Gi / 2,
                maxX: n + $i,
                maxY: r + Gi / 2
            };
        }, e.prototype.pointInsideNodeBBox = function(t) {
            var e, n = this;
            return La().each(function(r) {
                var o = Ei(r);
                e || (e = function(t, e) {
                    for(var n, r, o = t.length, i = t[o - 1], a = e[0], s = e[1], l = i[0], c = i[1], u = !1, d = 0; d < o; ++d)n = (i = t[d])[0], (r = i[1]) > s != c > s && a < (l - n) * (s - r) / (c - r) + n && (u = !u), l = n, c = r;
                    return u;
                }(o.getPolygon(), [
                    t[0] + 0,
                    t[1]
                ]) ? o : void 0), e || o.hasParentChapters(n._type) || za(o.id, n._type).remove(), Cl.dom.select(function(t) {
                    return "#" + po + t;
                }(o.id)).attr("stroke", ea(o, !1)).attr("stroke-opacity", 1);
            }), e;
        }, e.prototype.updateEOVTool = function(t) {
            void 0 === t && (t = !0), this.node && !this._parentControl && Cl.dom.select("#".concat(s.render.prefix.nodeEOV + this.node.id)).select(".eovTypeLine").style("marker-start", "url(#".concat(u.Circle)).style("marker-end", t ? "" : "url(#".concat(u.Circle));
        }, e.prototype.updateControlTool = function(t) {
            var e, n, r, o;
            void 0 === t && (t = !0), Cl.dom.select(".control_add_link_button_".concat(null === (e = this._parentControl) || void 0 === e ? void 0 : e.id)).style("display", "none"), Cl.dom.select(".control_link_choice_".concat(null === (n = this._parentContainer) || void 0 === n ? void 0 : n.id)).style("display", "none");
            var i = "action" === this._type ? null === (r = this._parentControl) || void 0 === r ? void 0 : r.id : null === (o = this._parentContainer) || void 0 === o ? void 0 : o.id;
            Cl.dom.select(".control_connector_".concat(i)).style("display", t ? "none" : "inline"), Cl.dom.select(".start_link_".concat(i)).style("display", "inline");
        }, e.prototype.toggleHoverEffects = function(t) {
            var e = this;
            t ? this.toolElement.on("mouseenter", function() {
                var t;
                e.toolElement.style("display", "inline"), null === (t = e._shadowBranch) || void 0 === t || t.style("marker-start", e._hasSetNextBranchEvent ? "url(#".concat(u.Connector, ")") : "");
            }).on("mouseleave", function() {
                var t;
                null === (t = e._shadowBranch) || void 0 === t || t.style("marker-start", e._hasSetNextBranchEvent ? "url(#".concat(u.Circle, ")") : "");
            }) : this.toolElement.on("mouseenter", null).on("mouseleave", null);
        }, e;
    }(Xi);
    !function(t) {
        t.ShadowNode = "shadow-node", t.ShadowNodeLink = "shadow-node-link", t.NodeMenu = "node-menu", t.EOVMenu = "eov-menu", t.ControlMenu = "control-menu", t.ControlTypeMenu = "control-type-menu", t.EditorContextMenu = "editor-context-menu", t.AreaSelectTool = "area-select-tool";
    }(Yi || (Yi = {}));
    var Ya = function() {
        function t(t) {
            this._svgDOMElement = t, this.handleOutsideClick = function(t) {
                t.defaultPrevented || Cl.inputs.zoom.isMousedownZoomEnabled || Cl.tools.disableContextMenu();
            }, this._svgDOMElement.on("contextmenu", function(t) {
                t.defaultPrevented || Cl.inputs.zoom.isMousedownZoomEnabled || Cl.tools.use(Yi.EditorContextMenu).position(zn(t)).start();
            }), this._svgDOMElement.on("mousedown", function(t) {
                t.defaultPrevented || Cl.inputs.zoom.isMousedownZoomEnabled || Cl.tools.use(Yi.AreaSelectTool).position(zn(t)).start();
            }), this._svgDOMElement.on("click", function(t) {
                t.defaultPrevented || Cl.inputs.zoom.isMousedownZoomEnabled || (Di.selectedBranches.size && Di.clearSelectedBranches(), Cl.tools.disable());
            }), document.addEventListener("click", this.handleOutsideClick);
        }
        return t.prototype.dispose = function() {
            this._svgDOMElement.on("contextmenu", null), document.removeEventListener("click", this.handleOutsideClick);
        }, t;
    }(), Wa = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, Xa = .05, $a = function() {
        function t(t) {
            var e = this;
            this._svgDOMElement = t, this._zoomTransform = eo, this._wheelDelay = 300, this._wheel = null, this._mouse = [
                [
                    0,
                    0
                ],
                [
                    0,
                    0
                ]
            ], this._mousedownZoomEnabled = !1, this._isZoomActive = !1, this._isZoomDisabled = !1, this.update = function(t) {
                var n;
                e._isZoomDisabled || (n = Ga(n = "function" == typeof t ? t(e._zoomTransform.k) : t), e._zoom.scaleTo(e._svgDOMElement, n));
            }, this.translateTo = function(t, n) {
                var r, o, i, a, s = Wa(t, 2), l = s[0], c = s[1];
                return void 0 === n && (n = e._zoomTransform.k), r = e, o = void 0, a = function() {
                    var t, e, r, o, i;
                    return function(t, e) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1];
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this;
                        }), i;
                        function s(i) {
                            return function(s) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for(; a;)try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch(r = 0, o && (i = [
                                            2 & i[0],
                                            o.value
                                        ]), i[0]){
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [
                                                    0
                                                ];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    a = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break;
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break;
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, a);
                                    } catch (t) {
                                        i = [
                                            6,
                                            t
                                        ], r = 0;
                                    } finally{
                                        n = o = 0;
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    };
                                }([
                                    i,
                                    s
                                ]);
                            };
                        }
                    }(this, function(a) {
                        return this._isZoomDisabled ? [
                            2
                        ] : (t = this._svgDOMElement.node()) ? (e = t.getBoundingClientRect(), r = e.width, o = e.height, r && o ? (i = Ga(n), [
                            2,
                            this._svgDOMElement.transition().duration(750).call(this._zoom.transform, eo.translate(r / 2, o / 2).scale(i).translate(-l, -c)).end()
                        ]) : [
                            2
                        ]) : [
                            2
                        ];
                    });
                }, new (i = void 0, i = Promise)(function(t, e) {
                    function n(t) {
                        try {
                            l(a.next(t));
                        } catch (t) {
                            e(t);
                        }
                    }
                    function s(t) {
                        try {
                            l(a.throw(t));
                        } catch (t) {
                            e(t);
                        }
                    }
                    function l(e) {
                        e.done ? t(e.value) : (function(t) {
                            return t instanceof i ? t : new i(function(e) {
                                e(t);
                            });
                        })(e.value).then(n, s);
                    }
                    l((a = a.apply(r, o || [])).next());
                });
            }, this.shiftTo = function(t) {
                var n = Wa(t, 2), r = n[0], o = n[1], i = e.zoomPosition, a = i.x, s = i.y;
                e._svgDOMElement.call(e._zoom.transform, eo.translate(a + r, s + o).scale(e._zoomTransform.k));
            }, this.getRelativeCoordinates = function(t, n) {
                return n ? e._zoomTransform.apply(t) : e._zoomTransform.invert(t);
            }, this.toggleMousedownZoom = function() {
                e._mousedownZoomEnabled ? e.disableMousedownZoom() : e.enableMousedownZoom();
            }, this.enableMousedownZoom = function() {
                e._isZoomDisabled || (e._mousedownZoomEnabled = !0, Cl.dom.root.attr("class", "zoom_hand_tool"));
            }, this.disableMousedownZoom = function() {
                e._isZoomDisabled || (e._mousedownZoomEnabled = !1, e._isZoomActive || Cl.dom.root.attr("class", null));
            }, this.enable = function() {
                e._isZoomDisabled = !1;
            }, this.disable = function() {
                e._isZoomDisabled = !0;
            }, this._zoom = (function() {
                var t, e, n, r = oo, o = io, i = co, a = so, s = lo, l = [
                    0,
                    1 / 0
                ], c = [
                    [
                        -1 / 0,
                        -1 / 0
                    ],
                    [
                        1 / 0,
                        1 / 0
                    ]
                ], u = 250, d = Ur, h = Bt("start", "zoom", "end"), f = 500, p = 150, v = 0, y = 10;
                function m(t) {
                    t.property("__zoom", ao).on("wheel.zoom", M, {
                        passive: !1
                    }).on("mousedown.zoom", k).on("dblclick.zoom", S).filter(s).on("touchstart.zoom", N).on("touchmove.zoom", E).on("touchend.zoom touchcancel.zoom", L).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
                }
                function g(t, e) {
                    return (e = Math.max(l[0], Math.min(l[1], e))) === t.k ? t : new Qr(e, t.x, t.y);
                }
                function _(t, e, n) {
                    var r = e[0] - n[0] * t.k, o = e[1] - n[1] * t.k;
                    return r === t.x && o === t.y ? t : new Qr(t.k, r, o);
                }
                function w(t) {
                    return [
                        (+t[0][0] + +t[1][0]) / 2,
                        (+t[0][1] + +t[1][1]) / 2
                    ];
                }
                function b(t, e, n, r) {
                    t.on("start.zoom", function() {
                        C(this, arguments).event(r).start();
                    }).on("interrupt.zoom end.zoom", function() {
                        C(this, arguments).event(r).end();
                    }).tween("zoom", function() {
                        var t = this, i = arguments, a = C(t, i).event(r), s = o.apply(t, i), l = null == n ? w(s) : "function" == typeof n ? n.apply(t, i) : n, c = Math.max(s[1][0] - s[0][0], s[1][1] - s[0][1]), u = t.__zoom, h = "function" == typeof e ? e.apply(t, i) : e, f = d(u.invert(l).concat(c / u.k), h.invert(l).concat(c / h.k));
                        return function(t) {
                            if (1 === t) t = h;
                            else {
                                var e = f(t), n = c / e[2];
                                t = new Qr(n, l[0] - e[0] * n, l[1] - e[1] * n);
                            }
                            a.zoom(null, t);
                        };
                    });
                }
                function C(t, e, n) {
                    return !n && t.__zooming || new x(t, e);
                }
                function x(t, e) {
                    this.that = t, this.args = e, this.active = 0, this.sourceEvent = null, this.extent = o.apply(t, e), this.taps = 0;
                }
                function M(t, ...e) {
                    if (r.apply(this, arguments)) {
                        var n = C(this, e).event(t), o = this.__zoom, s = Math.max(l[0], Math.min(l[1], o.k * Math.pow(2, a.apply(this, arguments)))), u = zn(t);
                        if (n.wheel) n.mouse[0][0] === u[0] && n.mouse[0][1] === u[1] || (n.mouse[1] = o.invert(n.mouse[0] = u)), clearTimeout(n.wheel);
                        else {
                            if (o.k === s) return;
                            n.mouse = [
                                u,
                                o.invert(u)
                            ], se(this), n.start();
                        }
                        ro(t), n.wheel = setTimeout(function() {
                            n.wheel = null, n.end();
                        }, p), n.zoom("mouse", i(_(g(o, s), n.mouse[0], n.mouse[1]), n.extent, c));
                    }
                }
                function k(t, ...e) {
                    if (!n && r.apply(this, arguments)) {
                        var o = t.currentTarget, a = C(this, e, !0).event(t), s = Bn(t.view).on("mousemove.zoom", function(t) {
                            if (ro(t), !a.moved) {
                                var e = t.clientX - u, n = t.clientY - d;
                                a.moved = e * e + n * n > v;
                            }
                            a.event(t).zoom("mouse", i(_(a.that.__zoom, a.mouse[0] = zn(t, o), a.mouse[1]), a.extent, c));
                        }, !0).on("mouseup.zoom", function(t) {
                            s.on("mousemove.zoom mouseup.zoom", null), Vn(t.view, a.moved), ro(t), a.event(t).end();
                        }, !0), l = zn(t, o), u = t.clientX, d = t.clientY;
                        jn(t.view), no(t), a.mouse = [
                            l,
                            this.__zoom.invert(l)
                        ], se(this), a.start();
                    }
                }
                function S(t, ...e) {
                    if (r.apply(this, arguments)) {
                        var n = this.__zoom, a = zn(t.changedTouches ? t.changedTouches[0] : t, this), s = n.invert(a), l = n.k * (t.shiftKey ? .5 : 2), d = i(_(g(n, l), a, s), o.apply(this, e), c);
                        ro(t), u > 0 ? Bn(this).transition().duration(u).call(b, d, a, t) : Bn(this).call(m.transform, d, a, t);
                    }
                }
                function N(n, ...o) {
                    if (r.apply(this, arguments)) {
                        var i, a, s, l, c = n.touches, u = c.length, d = C(this, o, n.changedTouches.length === u).event(n);
                        for(no(n), a = 0; a < u; ++a)l = [
                            l = zn(s = c[a], this),
                            this.__zoom.invert(l),
                            s.identifier
                        ], d.touch0 ? d.touch1 || d.touch0[2] === l[2] || (d.touch1 = l, d.taps = 0) : (d.touch0 = l, i = !0, d.taps = 1 + !!t);
                        t && (t = clearTimeout(t)), i && (d.taps < 2 && (e = l[0], t = setTimeout(function() {
                            t = null;
                        }, f)), se(this), d.start());
                    }
                }
                function E(t, ...e) {
                    if (this.__zooming) {
                        var n, r, o, a, s = C(this, e).event(t), l = t.changedTouches, u = l.length;
                        for(ro(t), n = 0; n < u; ++n)o = zn(r = l[n], this), s.touch0 && s.touch0[2] === r.identifier ? s.touch0[0] = o : s.touch1 && s.touch1[2] === r.identifier && (s.touch1[0] = o);
                        if (r = s.that.__zoom, s.touch1) {
                            var d = s.touch0[0], h = s.touch0[1], f = s.touch1[0], p = s.touch1[1], v = (v = f[0] - d[0]) * v + (v = f[1] - d[1]) * v, y = (y = p[0] - h[0]) * y + (y = p[1] - h[1]) * y;
                            r = g(r, Math.sqrt(v / y)), o = [
                                (d[0] + f[0]) / 2,
                                (d[1] + f[1]) / 2
                            ], a = [
                                (h[0] + p[0]) / 2,
                                (h[1] + p[1]) / 2
                            ];
                        } else {
                            if (!s.touch0) return;
                            o = s.touch0[0], a = s.touch0[1];
                        }
                        s.zoom("touch", i(_(r, o, a), s.extent, c));
                    }
                }
                function L(t, ...r) {
                    if (this.__zooming) {
                        var o, i, a = C(this, r).event(t), s = t.changedTouches, l = s.length;
                        for(no(t), n && clearTimeout(n), n = setTimeout(function() {
                            n = null;
                        }, f), o = 0; o < l; ++o)i = s[o], a.touch0 && a.touch0[2] === i.identifier ? delete a.touch0 : a.touch1 && a.touch1[2] === i.identifier && delete a.touch1;
                        if (a.touch1 && !a.touch0 && (a.touch0 = a.touch1, delete a.touch1), a.touch0) a.touch0[1] = this.__zoom.invert(a.touch0[0]);
                        else if (a.end(), 2 === a.taps && (i = zn(i, this), Math.hypot(e[0] - i[0], e[1] - i[1]) < y)) {
                            var c = Bn(this).on("dblclick.zoom");
                            c && c.apply(this, arguments);
                        }
                    }
                }
                return m.transform = function(t, e, n, r) {
                    var o = t.selection ? t.selection() : t;
                    o.property("__zoom", ao), t !== o ? b(t, e, n, r) : o.interrupt().each(function() {
                        C(this, arguments).event(r).start().zoom(null, "function" == typeof e ? e.apply(this, arguments) : e).end();
                    });
                }, m.scaleBy = function(t, e, n, r) {
                    m.scaleTo(t, function() {
                        return this.__zoom.k * ("function" == typeof e ? e.apply(this, arguments) : e);
                    }, n, r);
                }, m.scaleTo = function(t, e, n, r) {
                    m.transform(t, function() {
                        var t = o.apply(this, arguments), r = this.__zoom, a = null == n ? w(t) : "function" == typeof n ? n.apply(this, arguments) : n, s = r.invert(a), l = "function" == typeof e ? e.apply(this, arguments) : e;
                        return i(_(g(r, l), a, s), t, c);
                    }, n, r);
                }, m.translateBy = function(t, e, n, r) {
                    m.transform(t, function() {
                        return i(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof n ? n.apply(this, arguments) : n), o.apply(this, arguments), c);
                    }, null, r);
                }, m.translateTo = function(t, e, n, r, a) {
                    m.transform(t, function() {
                        var t = o.apply(this, arguments), a = this.__zoom, s = null == r ? w(t) : "function" == typeof r ? r.apply(this, arguments) : r;
                        return i(eo.translate(s[0], s[1]).scale(a.k).translate("function" == typeof e ? -e.apply(this, arguments) : -e, "function" == typeof n ? -n.apply(this, arguments) : -n), t, c);
                    }, r, a);
                }, x.prototype = {
                    event: function(t) {
                        return t && (this.sourceEvent = t), this;
                    },
                    start: function() {
                        return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this;
                    },
                    zoom: function(t, e) {
                        return this.mouse && "mouse" !== t && (this.mouse[1] = e.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = e.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = e.invert(this.touch1[0])), this.that.__zoom = e, this.emit("zoom"), this;
                    },
                    end: function() {
                        return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this;
                    },
                    emit: function(t) {
                        var e = Bn(this.that).datum();
                        h.call(t, this.that, new Jr(t, {
                            sourceEvent: this.sourceEvent,
                            target: m,
                            type: t,
                            transform: this.that.__zoom,
                            dispatch: h
                        }), e);
                    }
                }, m.wheelDelta = function(t) {
                    return arguments.length ? (a = "function" == typeof t ? t : Kr(+t), m) : a;
                }, m.filter = function(t) {
                    return arguments.length ? (r = "function" == typeof t ? t : Kr(!!t), m) : r;
                }, m.touchable = function(t) {
                    return arguments.length ? (s = "function" == typeof t ? t : Kr(!!t), m) : s;
                }, m.extent = function(t) {
                    return arguments.length ? (o = "function" == typeof t ? t : Kr([
                        [
                            +t[0][0],
                            +t[0][1]
                        ],
                        [
                            +t[1][0],
                            +t[1][1]
                        ]
                    ]), m) : o;
                }, m.scaleExtent = function(t) {
                    return arguments.length ? (l[0] = +t[0], l[1] = +t[1], m) : [
                        l[0],
                        l[1]
                    ];
                }, m.translateExtent = function(t) {
                    return arguments.length ? (c[0][0] = +t[0][0], c[1][0] = +t[1][0], c[0][1] = +t[0][1], c[1][1] = +t[1][1], m) : [
                        [
                            c[0][0],
                            c[0][1]
                        ],
                        [
                            c[1][0],
                            c[1][1]
                        ]
                    ];
                }, m.constrain = function(t) {
                    return arguments.length ? (i = t, m) : i;
                }, m.duration = function(t) {
                    return arguments.length ? (u = +t, m) : u;
                }, m.interpolate = function(t) {
                    return arguments.length ? (d = t, m) : d;
                }, m.on = function() {
                    var t = h.on.apply(h, arguments);
                    return t === h ? m : t;
                }, m.clickDistance = function(t) {
                    return arguments.length ? (v = (t = +t) * t, m) : Math.sqrt(v);
                }, m.tapDistance = function(t) {
                    return arguments.length ? (y = +t, m) : y;
                }, m;
            })().scaleExtent([
                Xa,
                2
            ]).clickDistance(50).on("start", function() {
                e._isZoomActive = !0, e._mousedownZoomEnabled && Cl.dom.root.attr("class", "zoom_hand_tool_active");
            }).on("zoom", function(t) {
                var n = t.transform;
                e._zoomTransform = n, e.zoom();
            }).on("end", function() {
                if (e._isZoomActive = !1, e.zoomEnd(), Cl.dom.root.attr("class", e._mousedownZoomEnabled ? "zoom_hand_tool" : null), Cl.dom.map.attr("pointer-events", null), e.zoomBreakpointPassed()) {
                    Di.manifest.setAllNodesAsModified();
                    var t = function(t, e, n) {
                        if (n || 2 === arguments.length) for(var r, o = 0, i = e.length; o < i; o++)!r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                        return t.concat(r || Array.prototype.slice.call(e));
                    }([], Wa(Di.selectedNodes), !1);
                    Cl.layers.clear(), Cl.layers.update(), Di.clearSelectedNodes(!1), Cl.layers.updateSelected(t);
                }
                Di.zoomFactor = e.zoomFactor;
            }), s.isEditOrPreViewMode() ? (this._zoom.filter(function(t) {
                var n = "touchstart" === t.type, r = "mousedown" === t.type;
                return !(e._isZoomDisabled || n && t.defaultPrevented) && (r && 1 === t.button || n ? (Cl.dom.root.attr("class", "zoom_hand_tool_active"), !0) : r && e._mousedownZoomEnabled);
            }), this._svgDOMElement.call(this._zoom).on("dblclick.zoom", null).on("wheel.zoom", function(t) {
                if (!e._isZoomDisabled) {
                    t.preventDefault(), t.stopImmediatePropagation();
                    var n = Math.max(Xa, Math.min(2, e._zoomTransform.k * Math.pow(2, function(t) {
                        return -t.deltaY * (1 === t.deltaMode ? .05 : t.deltaMode ? 1 : .002) * (t.ctrlKey || t.metaKey ? 5 : 1);
                    }(t)))), r = zn(t);
                    e._wheel ? (e._mouse[0][0] === r[0] && e._mouse[0][1] === r[1] || (e._mouse[1] = e._zoomTransform.invert(e._mouse[0] = r)), clearTimeout(e._wheel)) : (e._mouse = [
                        r,
                        e._zoomTransform.invert(r)
                    ], se(e._svgDOMElement.node()), Cl.dom.map.attr("pointer-events", "none")), e._wheel = window.setTimeout(function() {
                        e._wheel = null, e._svgDOMElement.call(e._zoom.transform, eo.translate(e._zoomTransform.x, e._zoomTransform.y).scale(e._zoomTransform.k));
                    }, e._wheelDelay), t.ctrlKey || t.metaKey ? e._zoomTransform = qa(function(t, e) {
                        return (e = Math.max(Xa, Math.min(2, e))) === t.k ? t : new Qr(e, t.x, t.y);
                    }(e._zoomTransform, n), e._mouse[0], e._mouse[1]) : e._zoomTransform = qa(e._zoomTransform, [
                        e._mouse[0][0] - t.deltaX,
                        e._mouse[0][1] - t.deltaY
                    ], e._mouse[1]), e._mouse[1] = e._zoomTransform.invert(e._mouse[0]), e.zoom();
                }
            }, {
                passive: !1
            })) : this._svgDOMElement.call(this._zoom);
        }
        return Object.defineProperty(t.prototype, "zoomConfig", {
            get: function() {
                return {
                    min: Xa,
                    max: 2,
                    step: +.0195.toFixed(5)
                };
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "zoomFactor", {
            get: function() {
                return this._zoomTransform.k;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "zoomPosition", {
            get: function() {
                return {
                    x: this._zoomTransform.x,
                    y: this._zoomTransform.y
                };
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isMousedownZoomEnabled", {
            get: function() {
                return this._mousedownZoomEnabled;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.zoom = function() {
            l.emit("zoom", {
                value: this._zoomTransform.k,
                x: this._zoomTransform.x,
                y: this._zoomTransform.y
            });
        }, t.prototype.zoomBreakpointPassed = function() {
            var t = Di.zoomFactor, e = this.zoomFactor, n = s.performance.renderSkeletonOnZoomLessThan;
            return !(t === e || t > n && e > n || t < n && e < n);
        }, t.prototype.zoomEnd = function() {
            l.emit("zoomEnd", {
                value: this._zoomTransform.k,
                x: this._zoomTransform.x,
                y: this._zoomTransform.y
            });
        }, t;
    }();
    function Ga(t) {
        if (t < Xa || t > 2) {
            if (t < Xa) return Xa;
            if (t > 2) return 2;
        }
        return t;
    }
    function qa(t, e, n) {
        var r = e[0] - n[0] * t.k, o = e[1] - n[1] * t.k;
        return r === t.x && o === t.y ? t : new Qr(t.k, r, o);
    }
    var Ua = function() {
        function t(t) {
            var e = this;
            this.dispose = function() {
                var t, n;
                null === (t = e._keydownEvents) || void 0 === t || t.dispose(), null === (n = e._mouseEvents) || void 0 === n || n.dispose();
            }, this.nullableDrag = function() {
                return $n().on("drag", null);
            }, this._zoom = new $a(t), this._keydownEvents = new Wi, s.isEditOrPreViewMode() && (this._mouseEvents = new Ya(t));
        }
        return Object.defineProperty(t.prototype, "zoom", {
            get: function() {
                return this._zoom;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "keydown", {
            get: function() {
                return this._keydownEvents;
            },
            enumerable: !1,
            configurable: !0
        }), t;
    }(), Ka = "branchElement", Ja = "#654BDD", Qa = function(t) {
        var e = Li(t), n = zr("svg:path").attr("class", Ka);
        return n.attr("d", wo({
            source: e.source.position.absolute,
            target: e.target.position.absolute
        })).attr("fill", "none").attr("stroke", ns(t)).attr("stroke-width", s.render.strokeSize), n.node();
    }, ts = function(t) {
        var e = Li(t), n = zr("svg:path").attr("class", Ka), r = function(t, e, n) {
            if (n || 2 === arguments.length) for(var r, o = 0, i = e.length; o < i; o++)!r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
            return t.concat(r || Array.prototype.slice.call(e));
        }([], function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t), a = [];
            try {
                for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
            } catch (t) {
                o = {
                    error: t
                };
            } finally{
                try {
                    r && !r.done && (n = i.return) && n.call(i);
                } finally{
                    if (o) throw o.error;
                }
            }
            return a;
        }(e.source.position.absolute), !1);
        return e.type === di.Flip && (r[0] = r[0] - 42), n.attr("d", wo({
            source: r,
            target: e.target.position.absolute
        })).attr("fill", "none").attr("stroke", ns(t)).attr("stroke-width", s.render.strokeSize + 1), n.node();
    }, es = function(t) {
        var e = Li(t), n = zr("svg:path").attr("class", "shadowBranchElement");
        return n.attr("d", wo({
            source: e.source.position.absolute,
            target: e.target.position.absolute
        })).attr("fill", "none").attr("stroke", "transparent").attr("stroke-width", s.render.strokeSize + 5), n.node();
    }, ns = function(t) {
        var e = Li(t);
        return s.isViewMode() ? e.isAssociatedNodeLocked() ? "#76787A" : s.render.color.stroke : Di.selectedBranches.has(e.id) ? Ja : s.render.color.stroke;
    }, rs = function(t, e) {
        var n = this;
        this.clear = function() {
            n._layer.selectAll("*").remove();
        }, this.allowReRendering = function() {
            return !0;
        }, this._layer = t.append("g").attr("id", e);
    }, os = function() {
        var t = function(e, n) {
            return t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e;
            } || function(t, e) {
                for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }, t(e, n);
        };
        return function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            function r() {
                this.constructor = e;
            }
            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
        };
    }(), is = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, as = function(t, e, n) {
        if (n || 2 === arguments.length) for(var r, o = 0, i = e.length; o < i; o++)!r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e));
    }, ss = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.render = function() {
                var t = Di.layout.getChangedBranches(), n = t.deleted, r = t.edited;
                if (r.length + n.length !== 0) {
                    e.destroyBranches(as(as([], is(n), !1), is(r), !1));
                    var o = !!r.length;
                    o && e.renderBranches(r), (o || n.length) && e.saveRenderResults();
                }
            }, e.updateSelected = function() {
                Aa().each(function(t) {
                    e.applyBranchColor(t);
                });
            }, e.setHovered = function() {}, e.clear = function() {
                e._layer.selectAll("*").remove(), Di.layout.renderedBranchesData = {};
            }, e.createBranchesSelection = function(t) {
                var n = e._layer.selectAll("g.NotExistingClassName").data(t.map(function(t) {
                    return t.id;
                })).join("g").attr("class", ka).attr("id", function(t) {
                    return "branch-".concat(t);
                });
                return s.isEditOrPreViewMode() && n.style("cursor", "pointer"), n;
            }, e.renderBranches = function(t) {
                var n = e.createBranchesSelection(t);
                Di.layout.shouldRenderFullLayout ? e.renderFullLayout(n) : e.renderSkeleton(n);
            }, e;
        }
        return os(e, t), e.prototype.addEventListeners = function(t) {
            var e = this;
            t.on("contextmenu", function(t) {
                t.preventDefault();
            }).on("click", function(t, n) {
                s.isViewMode() || (t.preventDefault(), Di.selectBranches([
                    n
                ]), e.updateSelected());
            }).on("mouseenter", function(t, n) {
                s.isViewMode() || Di.selectedBranches.has(n) || e.applySelectedBranch(n);
            }).on("mouseleave", function(t, n) {
                s.isViewMode() || Di.selectedBranches.has(n) || e.applyDefaultBranch(n);
            });
        }, e.prototype.renderFullLayout = function(t) {
            t.append(es), t.append(Qa), this.addEventListeners(t);
        }, e.prototype.renderSkeleton = function(t) {
            t.append(ts);
        }, e.prototype.saveRenderResults = function() {
            var t = Aa().data().map(Li);
            Di.layout.renderedBranchesData = Ko(t);
        }, e.prototype.destroyBranches = function(t) {
            if (0 !== t.length && Di.layout.hasRenderedBranches) {
                var e = Di.layout.renderedBranchesData;
                t.forEach(function(t) {
                    e[t.id] && Oa(t.id).remove();
                });
            }
        }, e.prototype.applyBranchColor = function(t) {
            Oa(t).select(".".concat(Ka)).attr("stroke", ns(t));
        }, e.prototype.applySelectedBranch = function(t) {
            Oa(t).select(".".concat(Ka)).attr("stroke", Ja);
        }, e.prototype.applyDefaultBranch = function(t) {
            Oa(t).select(".".concat(Ka)).attr("stroke", s.render.color.stroke);
        }, e;
    }(rs), ls = function() {
        var t = function(e, n) {
            return t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e;
            } || function(t, e) {
                for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }, t(e, n);
        };
        return function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            function r() {
                this.constructor = e;
            }
            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
        };
    }(), cs = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e._hadInitialRender = !1, e.setHovered = function() {}, e.allowReRendering = function() {
                return !e._hadInitialRender;
            }, e;
        }
        return ls(e, t), e.prototype.render = function() {
            var t, e;
            this._marker = (t = this._layer, e = t.append("g").attr("class", "navigationMarker"), e.append("svg").attr("x", -s.render.iconSize).attr("y", 0).attr("width", 2 * s.render.iconSize).attr("height", 2 * s.render.iconSize).attr("viewBox", "0 0 ".concat(s.render.iconSize, " ").concat(s.render.iconSize)).append("use").attr("href", "#".concat(c.Location)), e).style("display", "none"), this._hadInitialRender = !0;
        }, e.prototype.updateSelected = function(t) {
            if (this._marker) {
                if (t.length) {
                    var e = function(t, e) {
                        var n = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!n) return t;
                        var r, o, i = n.call(t), a = [];
                        try {
                            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
                        } catch (t) {
                            o = {
                                error: t
                            };
                        } finally{
                            try {
                                r && !r.done && (n = i.return) && n.call(i);
                            } finally{
                                if (o) throw o.error;
                            }
                        }
                        return a;
                    }(t, 1)[0], n = Ni(e);
                    if (!n) throw new Error("Can't get first selected graph node");
                    var r = n.styles.x + n.render.width / 2, o = n.styles.y - 40;
                    this._marker.attr("transform", "translate(".concat(r, ", ").concat(o, ")")).style("display", "inline").style("color", n.stylesWithDefaults.hover.borderColor);
                } else this._marker.style("display", "none");
            }
        }, e;
    }(rs), us = n(96), ds = n.n(us), hs = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, fs = s.render.node.headerHeight - 8, ps = s.render.node.width - s.render.node.headerHeight, vs = s.render.iconSize + 4, ys = function(t, e, n) {
        var r = t.append("g").attr("class", "header");
        ws(r, n), _s(r, e, n), s.isEditMode() && bs(r, e, n), r.on("mouseenter", function() {
            return function(t) {
                var e = Ei(t);
                if (ta(e.id) && !e.isDragged) {
                    var n = 16 * e.chapterErrors.reduce(function(t, e) {
                        return Math.ceil(e.message.length / 33) + t;
                    }, 0) + (30 * (e.chapterErrors.length - 1) + 18) + 30, r = e.chapterErrors.map(function(t) {
                        return "<h5>".concat(t.title, "</h5><div>").concat(t.message, "</div>");
                    }).join("");
                    Cl.popups.position([
                        e.styles.x - 24,
                        e.styles.y - n
                    ]).withScale().show(r, void 0, "tooltip", {
                        width: "224px",
                        arrowDown: !0
                    });
                }
            }(n.id);
        }).on("mouseleave", function() {
            return Cl.popups.hide();
        });
    }, ms = function(t, e, n) {
        if (ta(t)) {
            var r = s.render.color.elementBackground;
            n && (r = s.render.color.error), e && (r = s.render.color.activeError), Ea(t).select(".headerBg").attr("fill", r);
        }
    };
    function gs(t, e) {
        if (s.isViewOrPreViewMode()) {
            var n = e ? t.stylesWithDefaults.hover.borderColor : t.stylesWithDefaults.header.backgroundColor;
            Ea(t.id).select(".headerBg").attr("fill", n);
        }
        ms(t.id, e, !1);
    }
    var _s = function(t, e, n) {
        var r = hs(e, 2), o = r[0], i = r[1];
        t.append(function() {
            var t;
            return Co({
                text: n.displayLockedContent ? n.chapter.label : s.translation.node_not_visited,
                posX: o + 12,
                posY: i + 10,
                width: 140,
                fontWeight: 600,
                color: s.isViewOrPreViewMode() ? null === (t = n.stylesWithDefaults.header) || void 0 === t ? void 0 : t.textColor : void 0
            });
        });
    }, ws = function(t, e) {
        t.append("rect").attr("class", "headerBg").attr("width", s.render.node.width).attr("height", s.render.node.headerHeight).attr("fill", s.isViewOrPreViewMode() ? e.stylesWithDefaults.header.backgroundColor : s.render.color.elementBackground);
    }, bs = function(t, e, n) {
        var r = hs(e, 2)[1], o = "rgba(0,0,0,0)", i = function() {
            return ta(n) ? Di.selectedNodes.has(n.id) ? "#E53737" : "#F06A6A" : "#363738";
        }, a = t.append("g").attr("id", "options").style("cursor", "pointer").on("click", function(t) {
            t.preventDefault(), Cl.inputs.keydown.shiftHold && t.stopImmediatePropagation();
            var e = Cl.inputs.zoom.getRelativeCoordinates([
                Oi(n.id).x + n.render.width + 5,
                Oi(n.id).y
            ], !0);
            Cl.tools.use(Yi.NodeMenu).data(n).position(e).start(), Bn(this).selectChild().attr("fill", i());
        }).on("mousedown", function() {
            Bn(this).selectChild().attr("fill", i());
        }).on("mouseenter", function() {
            Bn(this).selectChild().attr("fill", i());
        }).on("mouseleave", function() {
            Bn(this).selectChild().attr("fill", o);
        });
        a.append("path").attr("d", fo({
            x: ps + 4,
            y: r + 4,
            w: fs,
            h: fs,
            r: 10
        })).attr("fill", o), a.append("use").style("color", s.render.color.text).attr("x", ps + vs / 2).attr("y", r + vs / 2).attr("href", "#".concat(c.Etc));
    }, Cs = function(t) {
        var e = Ei(t);
        if ("simple" !== e.chapter.order) {
            var n = e.render.width - s.render.node.componentOrderRadius, r = -s.render.node.componentOrderRadius, o = zr("svg:g").attr("class", "nodeOrder").attr("transform", "translate(".concat(n, ", ").concat(r, ")")).style("color", "#19191A");
            o.append("use").attr("href", "#".concat(ho.Order)), o.append("use").attr("y", s.render.node.componentOrderRadius - s.render.iconSize / 2).attr("x", s.render.node.componentOrderRadius - s.render.iconSize / 2).attr("href", "#".concat(function(t) {
                switch(t.chapter.order){
                    case "start":
                        return c.StartNode;
                    case "end":
                        return c.EndNode;
                    case "simple":
                        return c.Node;
                }
            }(e))).raise(), Ea(e.id).append(function() {
                return o.node();
            });
        }
    }, xs = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, Ms = "previewControls", ks = "previewBackground", Ss = function(t, e, n) {
        var r = xs(e, 2), o = r[0], i = r[1], a = t.append("g").attr("class", "preview");
        a.append("rect").attr("class", ks).attr("x", o).attr("y", i - 1).attr("width", s.render.node.width).attr("height", s.render.node.componentPreviewHeight + 4).attr("fill", s.isViewOrPreViewMode() ? n.stylesWithDefaults.header.backgroundColor : s.render.color.elementBackground);
        var l = a.append("g").attr("class", "previewContainer").attr("clip-path", "url(#".concat(ho.PreviewClipPath, ")")), c = [
            o,
            i + 1
        ], u = l.append("g").attr("class", "previewContent");
        Ts(u, c, n), s.isEditMode() && Bs(l, c, n), a.on("mouseenter", function() {
            !n.isDragged && n.displayLockedContent && (Ba(n.id).node() || function(t, e) {
                var n, r, o = (r = t.id, Cl.dom.select(Na(r, "previewContainer")));
                s.isEditMode() ? zs(o, e, t) : s.isViewOrPreViewMode() && (null === (n = t.stylesWithDefaults.watchAgain) || void 0 === n ? void 0 : n.enabled) && Ps(o, e, t);
            }(n, c));
        }).on("mouseleave", function() {
            !n.isDragged && n.displayLockedContent && Ba(n.id).remove();
        });
    };
    function Ns(t, e) {
        s.isViewOrPreViewMode() && Ea(t.id).select(".".concat(ks)).attr("fill", e ? t.stylesWithDefaults.hover.borderColor : t.stylesWithDefaults.header.backgroundColor);
    }
    var Es = function(t, e, n, r) {
        var o = xs(e, 2), i = o[0], a = o[1];
        t.append("rect").attr("x", i).attr("y", a).attr("width", n.render.width - 2).attr("height", s.render.node.componentPreviewHeight).attr("fill", r);
    }, Ls = function(t, e, n) {
        var r = xs(e, 2)[1];
        t.append("svg").attr("x", s.render.node.width / 2 - 10).attr("y", r + s.render.node.componentPreviewHeight / 2 - 10).attr("width", s.render.iconSize + 4).attr("height", s.render.iconSize + 4).attr("viewBox", "0 0 ".concat(s.render.iconSize, " ").concat(s.render.iconSize)).append("use").style("color", n.stylesWithDefaults.preview.textColor).attr("href", "#".concat(c.Lock));
    }, Os = function(t, e, r) {
        var o = xs(e, 2), i = o[0], a = o[1];
        if (!r.videoInfo) throw new Error("No video info to render cover");
        t.append("svg:image").attr("id", "dropZone_".concat(r.id)).attr("x", i).attr("y", a).attr("width", r.render.width - 2).attr("height", s.render.node.componentPreviewHeight).attr("preserveAspectRatio", "xMidYMid meet").attr("href", r.videoInfo.cover).on("error", function(t) {
            Bn(t.target).attr("href", function() {
                return n(521);
            });
        });
    }, As = function(t, e, n) {
        var r = xs(e, 2), o = r[0], i = r[1];
        t.append("use").attr("id", "dropZone_".concat(n.id)).attr("x", o).attr("y", i).attr("href", "#".concat(ho.PreviewPlaceholder));
    }, Ts = function(t, e, n) {
        var r = xs(e, 2), o = r[0], i = r[1];
        if (!n.displayLockedContent) {
            var a = n.stylesWithDefaults.preview.backgroundColor;
            return Es(t, [
                o,
                i
            ], n, a), void Ls(t, [
                o,
                i
            ], n);
        }
        n.videoInfo ? (a = s.render.node.previewPlaceholder.backgroundColor, Es(t, [
            o,
            i
        ], n, a), Os(t, [
            o,
            i
        ], n)) : As(t, [
            o,
            i
        ], n);
    }, Bs = function(t, e, n) {
        var r, o = xs(e, 2), i = o[0], a = o[1];
        (null === (r = n.videoInfo) || void 0 === r ? void 0 : r.title) && (t.append("rect").attr("class", "previewContentTitle").attr("x", i).attr("y", a + s.render.node.componentPreviewHeight - 32).attr("width", n.render.width - 2).attr("height", 32).attr("fill", "rgba(13, 15, 18, 0.89)"), t.append(function() {
            var t;
            return Co({
                text: (null === (t = n.videoInfo) || void 0 === t ? void 0 : t.title) || "",
                posX: i + 8,
                posY: s.render.node.componentPreviewHeight + 12,
                width: s.render.node.width - 16,
                fontSize: 14,
                fontWeight: 600
            });
        }));
    }, zs = function(t, e, n) {
        var r = xs(e, 2), o = r[0], i = r[1], a = t.append("g").attr("class", Ms).attr("transform", "translate(".concat(o, ", ").concat(i, ")"));
        a.append("rect").attr("width", n.render.width - 2).attr("height", s.render.node.componentPreviewHeight).attr("fill", "rgba(0, 0, 0, 0.8)"), a.append(function() {
            var t;
            return Is(n.chapter.videoId ? s.translation.node_video_change : s.translation.node_video_choose, "rgba(255, 255, 255, 0.17)", "rgba(255, 255, 255, 0.22)", "rgba(255, 255, 255, 0.27)", (t = n.id, function() {
                l.emit("control", {
                    name: "changeVideo",
                    chapterId: t
                });
            })).attr("transform", "translate(16, 25)").node();
        }), a.append(function() {
            var t;
            return Is(s.translation.node_open_editor, "#7B68EE", "#8978F0", "#9889F2", (t = n.id, function() {
                l.emit("control", {
                    name: "openEditor",
                    chapterId: t
                });
            })).attr("transform", "translate(16, 61)").node();
        });
    }, Ps = function(t, e, n) {
        var r = xs(e, 2), o = r[0], i = r[1], a = t.append("g").attr("class", Ms).attr("transform", "translate(".concat(o, ", ").concat(i, ")"));
        a.append("rect").attr("width", n.render.width - 2).attr("height", s.render.node.componentPreviewHeight).attr("fill", "rgba(0, 0, 0, 0.8)"), a.append(function() {
            var t;
            return Is(s.translation.node_watch_again_from, n.stylesWithDefaults.watchAgain.backgroundColor, n.stylesWithDefaults.watchAgain.backgroundColor, n.stylesWithDefaults.watchAgain.backgroundColor, (t = n.id, function() {
                l.emit("control", {
                    name: "openPreview",
                    chapterId: t
                });
            }), n.stylesWithDefaults.watchAgain.textColor, 130, 30, 8).attr("transform", "translate(28, 42)").node();
        });
    }, Is = function(t, e, n, r, o, i, a, l, c) {
        void 0 === i && (i = s.render.color.text), void 0 === a && (a = s.render.node.width - 32), void 0 === l && (l = 28), void 0 === c && (c = 4);
        var u = zr("svg:g").attr("class", "previewControlButton").on("mouseenter", function() {
            Bn(this).select(".buttonBg").attr("fill", n);
        }).on("mouseleave", function() {
            Bn(this).select(".buttonBg").attr("fill", e);
        }).on("mousedown", function() {
            Bn(this).select(".buttonBg").attr("fill", r);
        }).on("click", function(t) {
            Bn(this).select(".buttonBg").attr("fill", n), o(t);
        });
        return u.append("path").attr("class", "buttonBg").attr("d", fo({
            x: 0,
            y: 0,
            w: a,
            h: l,
            r: c
        })).attr("fill", e).style("cursor", "pointer"), u.append("text").text(t).attr("class", "buttonText").attr("x", a / 2).attr("y", l - 10).attr("font-weight", 500).attr("font-size", 14).attr("text-anchor", "middle").style("fill", i).attr("text-rendering", "optimizeSpeed"), u;
    }, Ds = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, Zs = "rgba(255, 255, 255, 0.17)", js = function(t, e, n) {
        var r = Ds(e, 2), o = r[0], i = r[1];
        t.append("path").attr("class", "addActionRect").attr("d", function() {
            return fo({
                x: o + 8,
                y: i + 8,
                w: n.render.width - 16,
                h: s.render.node.componentAddActionHeight - 16,
                r: 8
            });
        }).attr("fill", Zs);
    }, Vs = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, Hs = function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator, n = e && t[e], r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                };
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, Fs = function(t) {
        return t.label || t.type;
    }, Rs = function(t, e) {
        return bo({
            text: Fs(t),
            posX: s.render.iconSize + 14,
            posY: s.render.node.componentControlHeight / 2 - 8,
            width: s.render.node.width - (s.render.iconSize + 30),
            color: e.stylesWithDefaults.controls.textColor
        });
    }, Ys = function(t, e) {
        var n = zr("svg:g").append("g").attr("class", "nodeControl").style("cursor", "pointer");
        return function(t, e, n) {
            t.on("mouseenter", function() {
                Cl.dom.select(".control_add_link_button_".concat(e.id)).attr("display", "inline"), Bn(this).select(".controlElementRect").attr("fill", uo(n.stylesWithDefaults.controls.backgroundColor, s.render.color.percentDiff));
            }).on("mouseleave", function() {
                Cl.dom.select(".control_add_link_button_".concat(e.id)).attr("display", "none"), Bn(this).select(".controlElementRect").attr("fill", n.stylesWithDefaults.controls.backgroundColor);
            }).on("contextmenu", function(t) {
                t.preventDefault(), t.stopImmediatePropagation();
                var r = Cl.dom.getRelativeEventCoordinates(t, Cl.dom.staticTools.node());
                Cl.tools.use(Yi.ControlMenu).data(n, e).position(r).start();
            });
        }(n, e, t), function(t, e) {
            t.append("rect").attr("class", "controlElementRect").attr("width", s.render.node.width).attr("height", s.render.node.componentControlHeight).attr("fill", e.stylesWithDefaults.controls.backgroundColor).attr("stroke-width", s.render.strokeSize).attr("stroke", s.render.color.elementStroke);
        }(n, t), function(t, e) {
            t.append("use").style("color", s.render.color.text).attr("x", 8).attr("y", s.render.node.componentControlHeight / 2 - s.render.iconSize / 2).attr("href", "#".concat(function(t) {
                switch(t.type){
                    case "Area":
                        return c.ActionArea;
                    case "Button":
                        return c.ActionButton;
                }
            }(e)));
        }(n, e), n.append(function() {
            return Rs(e, t).node();
        }), n;
    }, Ws = function(t, e) {
        return Rs(e, t);
    }, Xs = function(t, e, n) {
        var r, o, i = Vs(e, 2), a = i[0], l = i[1], c = t.append("g").attr("class", "controls"), u = 0;
        try {
            for(var d = Hs(n.containers().reverse()), h = d.next(); !h.done; h = d.next()){
                var f = h.value;
                n.getContainerControls(f.id).forEach(function(t) {
                    c.append(function() {
                        var e = l + s.render.node.componentControlHeight * u++;
                        return Ys(n, t).attr("transform", "translate(".concat(a, ", ").concat(e, ")")).node();
                    });
                });
            }
        } catch (t) {
            r = {
                error: t
            };
        } finally{
            try {
                h && !h.done && (o = d.return) && o.call(d);
            } finally{
                if (r) throw r.error;
            }
        }
    }, $s = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, Gs = function(t, e, n) {
        var r = $s(e, 2), o = r[0], i = r[1], a = t.append("g").attr("class", "eov");
        !function(t, e) {
            t.style("cursor", "pointer").on("mouseenter", function() {
                Bn(this).select(".endOfVideoRect").attr("fill", uo(e.stylesWithDefaults.flipTo.backgroundColor, s.render.color.percentDiff));
            }).on("mouseleave", function() {
                Bn(this).select(".endOfVideoRect").attr("fill", e.stylesWithDefaults.flipTo.backgroundColor);
            });
        }(a, n), function(t, e, n) {
            t.append("rect").attr("class", "endOfVideoRect").attr("width", s.render.node.width).attr("height", s.render.node.componentControlHeight).attr("fill", n.stylesWithDefaults.flipTo.backgroundColor).attr("y", e);
        }(a, i, n), function(t, e) {
            var n = $s(e, 2), r = n[0], o = n[1];
            t.append("use").style("color", s.render.color.text).attr("x", r + 8).attr("y", o + 14).attr("href", "#".concat(c.EndOfVideo));
        }(a, [
            o,
            i
        ]), function(t, e, n) {
            var r = $s(e, 2), o = r[0], i = r[1];
            t.append("text").text(s.translation.node_eov).attr("font-weight", 400).attr("x", o + 8 + s.render.iconSize + 6).attr("y", i + 26).style("fill", n.stylesWithDefaults.flipTo.textColor).attr("text-rendering", "optimizeSpeed");
        }(a, [
            o,
            i
        ], n);
    }, qs = function(t) {
        var e, n, r, o = Ei(t), i = zr("svg:g");
        if (s.isEditMode()) {
            var a = s.render.node.heightWithPreviewEov, l = a + s.render.node.componentAddActionHeight;
            ys(i, [
                0,
                0
            ], o), Ss(i, [
                0,
                s.render.node.headerHeight
            ], o), o.isEndNode() || (Gs(i, [
                0,
                s.render.node.heightWithPreview + 1
            ], o), function(t, e, n) {
                var r = t.append("g").attr("class", "addAction").style("cursor", "pointer");
                !function(t, e) {
                    t.on("click", function(t) {
                        var n = Cl.dom.getRelativeEventCoordinates(t, Cl.dom.staticTools.node());
                        Cl.tools.use(Yi.ControlTypeMenu).data(e).position(n).start();
                    }).on("mouseenter", function() {
                        Bn(this).select(".addActionRect").attr("fill", "#626366");
                    }).on("mouseleave", function() {
                        Bn(this).select(".addActionRect").attr("fill", Zs);
                    });
                }(r, n), function(t, e, n) {
                    var r = Ds(e, 2), o = r[0], i = r[1];
                    t.append("rect").attr("x", o).attr("y", i).attr("width", n.render.width).attr("height", s.render.node.componentAddActionHeight).attr("fill", s.render.color.elementBackground).attr("stroke-width", s.render.strokeSize).attr("stroke", s.render.color.elementStroke);
                }(r, e, n), js(r, e, n), function(t, e, n) {
                    var r = Ds(e, 2)[1];
                    t.append("text").text(s.translation.node_add_control).attr("font-weight", 600).attr("text-anchor", "middle").style("fill", s.render.color.text).attr("x", n.render.width / 2).attr("y", r + 24).attr("text-rendering", "optimizeSpeed");
                }(r, e, n);
            }(i, [
                0,
                a
            ], o), Xs(i, [
                0,
                l
            ], o));
        } else l = (null === (e = o.stylesWithDefaults.flipTo) || void 0 === e ? void 0 : e.enabled) ? s.render.node.heightWithPreviewEov : s.render.node.heightWithPreview + 1, ys(i, [
            0,
            0
        ], o), Ss(i, [
            0,
            s.render.node.headerHeight
        ], o), o.isEndNode() || ((null === (n = o.stylesWithDefaults.flipTo) || void 0 === n ? void 0 : n.enabled) && Gs(i, [
            0,
            s.render.node.heightWithPreview + 1
        ], o), (null === (r = o.stylesWithDefaults.controls) || void 0 === r ? void 0 : r.enabled) && Xs(i, [
            0,
            l
        ], o));
        return go({
            id: o.id,
            width: o.render.width,
            height: o.render.height,
            element: i,
            r: s.render.node.borderRadius
        }), i.node();
    }, Us = function(t, e, n) {
        var r = ea(n, e);
        return t.attr("stroke-width", s.render.strokeSize + Number(e)).attr("stroke", r);
    }, Ks = function(t, e) {
        void 0 === e && (e = !0);
        var n = Ei(t), r = ea(n, e), o = zr("svg:path").attr("class", "border").attr("id", s.render.prefix.nodeBorder + t).attr("d", function() {
            return fo({
                x: 1,
                y: 1,
                w: n.render.width - 2,
                h: n.render.height - 2,
                r: s.render.node.borderRadius
            });
        }).attr("fill", "none").attr("stroke", r).style("pointer-events", "none");
        return Us(o, e, n), o.node();
    }, Js = function(t) {
        var e = Ei(t);
        if (e.hasErrors()) {
            var n = Di.selectedNodes.has(e.id);
            Ea(t).append(function() {
                return Ks(e.id, n);
            });
        }
    }, Qs = s.render.iconSize / 2, tl = function(t) {
        var e = zr("svg:g");
        return e.append("path").attr("fill", "none").attr("stroke", s.render.color.stroke).attr("d", wo({
            source: [
                0,
                0
            ],
            target: [
                23,
                0
            ]
        })).attr("pointer-events", "none"), e.append(function() {
            return _o(t).attr("transform", "translate(".concat(-s.render.node.control.connectorRadius, ", ").concat(-s.render.node.control.connectorRadius, ")")).node();
        }), e;
    }, el = s.render.iconSize / 2, nl = s.render.iconSize / 2, rl = "#7B68EE", ol = function(t) {
        var e = t.render.width, n = s.render.node.heightWithPreview + s.render.node.componentControlHeight / 2, r = t.getSuspenseActionType(), o = "setNextBranch" === r ? 2 * s.render.tool.eov.size : s.render.tool.eov.size, i = zr("svg:g").attr("id", s.render.prefix.nodeEOV + t.id).attr("stroke", s.render.color.stroke).attr("stroke-width", s.render.strokeSize);
        return i.append("path").attr("class", "eovTypeLine").attr("fill", "none").attr("d", wo({
            source: [
                e,
                n
            ],
            target: [
                e + o,
                n
            ]
        })).attr("pointer-events", "none").style("marker-start", "url(#".concat(u.Circle)).style("marker-end", t.getSuspenseBranchId() ? "" : "url(#".concat(u.Circle)), "setNextBranch" !== r || t.getSuspenseBranchId() || i.append("rect").attr("fill", "transparent").attr("stroke", "none").attr("x", e + o - nl / 2).attr("y", n - nl / 2).attr("width", nl).attr("height", nl).on("mouseenter", function(r) {
            if (!r.buttons) {
                var i = Ei(t.id);
                Cl.tools.use(Yi.ShadowNodeLink).data(i, di.Flip).position([
                    i.styles.x + e + o,
                    n + i.styles.y
                ]).start();
            }
        }).on("mouseleave", function() {}), i.append(function() {
            return il(t, [
                e + 11,
                n - 16
            ]).attr("transform", "translate(".concat(e + 12, ", ").concat(n - 12, ")")).node();
        }), i.node();
    }, il = function(t, e) {
        var n = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t), a = [];
            try {
                for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
            } catch (t) {
                o = {
                    error: t
                };
            } finally{
                try {
                    r && !r.done && (n = i.return) && n.call(i);
                } finally{
                    if (o) throw o.error;
                }
            }
            return a;
        }(e, 2), r = n[0], o = n[1], i = zr("svg:g");
        return i.on("click", function(e) {
            if (!s.isViewOrPreViewMode()) {
                e.preventDefault();
                var n = Ni(t.id) || t, i = Cl.inputs.zoom.getRelativeCoordinates([
                    n.styles.x + r,
                    n.styles.y + o
                ], !0);
                Cl.tools.use(Yi.EOVMenu).data(n).position(i).start(), Bn(this).select(".eovButtonBg").attr("stroke", s.render.color.stroke).attr("fill", s.render.color.elementBackground);
            }
        }).on("mouseenter", function() {
            s.isViewOrPreViewMode() || Bn(this).select(".eovButtonBg").attr("stroke", rl).attr("fill", rl);
        }).on("mouseleave", function() {
            s.isViewOrPreViewMode() || Bn(this).select(".eovButtonBg").attr("stroke", s.render.color.stroke).attr("fill", s.render.color.elementBackground);
        }).call(Cl.inputs.nullableDrag()), i.append("path").attr("class", "eovButtonBg").attr("stroke", s.render.color.stroke).attr("fill", s.render.color.elementBackground).attr("d", fo({
            x: 0,
            y: 0,
            w: s.render.tool.eov.size,
            h: s.render.tool.eov.size,
            r: s.render.tool.eov.radius
        })), i.append("use").style("color", s.render.tool.textColor).attr("x", 5).attr("y", 5).attr("width", 12).attr("height", 12).attr("viewBox", "0 0 ".concat(s.render.iconSize, " ").concat(s.render.iconSize)).attr("href", "#".concat(al(t.getSuspenseActionType()))), i;
    }, al = function(t) {
        switch(t){
            case "setNextBranch":
                return c.Node;
            case "setRandomBranch":
                return c.Random;
            default:
                return c.Add;
        }
    }, sl = function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator, n = e && t[e], r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                };
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, ll = function(t) {
        var e, n;
        if (!s.isEditMode()) return cl(t);
        var r = Ei(t), o = zr("svg:g").attr("class", "nodeTools");
        if (Za(r, o), ja(r, o), Va(r, o), r.isEndNode()) return o.node();
        o.append(function() {
            return ol(r);
        });
        var i = 0, a = function(t) {
            r.getContainerControls(t.id).forEach(function(e) {
                var n, a, l = null === (n = e.events) || void 0 === n ? void 0 : n.some(function(t) {
                    return "onClick" === t.type && "setNextBranch" === t.action.type;
                }), u = null === (a = t.events) || void 0 === a ? void 0 : a.some(function(t) {
                    return "onSuspense" === t.type && "setNextBranch" === t.action.type;
                });
                l && u || o.append(function() {
                    return function(t, e, n, r) {
                        var o, i, a, l, u = !1, d = null === (o = e.events) || void 0 === o ? void 0 : o.some(function(t) {
                            return "onSuspense" === t.type && "setNextBranch" === t.action.type;
                        }), h = null === (i = n.events) || void 0 === i ? void 0 : i.some(function(t) {
                            return "onClick" === t.type && "setNextBranch" === t.action.type;
                        });
                        l = d || h ? h ? s.render.node.control.inactionLinkY : s.render.node.control.actionLinkY : (s.render.node.control.actionLinkY + s.render.node.control.inactionLinkY) / 2;
                        var f = s.render.node.componentControlHeight * r, p = t.render.controlsContainerYCoordinate + f, v = zr("svg:g").attr("class", "controlAddLinks").attr("transform", "translate(".concat(t.render.width, ", ").concat(p, ")")).call(Cl.inputs.nullableDrag()), y = zr("svg:g").attr("class", "control_link_choice_".concat(e.id)).attr("display", "none").on("mouseenter", function() {
                            Bn(this).attr("display", "inline"), w.attr("display", "inline"), b.attr("stroke", s.render.color.stroke);
                        }).on("mouseleave", function(t) {
                            t.toElement.closest("#shadow-node-link") || (Bn(this).attr("display", "none"), w.attr("display", "none"), b.attr("stroke", s.render.color.connectorStroke));
                        });
                        if (y.append("rect").attr("fill", "transparent").attr("x", 0).attr("y", 0).attr("width", s.render.node.componentControlHeight).attr("height", s.render.node.componentControlHeight), !h) {
                            y.append(function() {
                                return _o(c.Action).attr("transform", "translate(15, ".concat(s.render.node.control.actionLinkY - s.render.node.control.connectorRadius, ")")).on("mouseenter", function(r) {
                                    r.buttons || Cl.tools.use(Yi.ShadowNodeLink).data(t, di.Action, e, n, !1).position([
                                        t.styles.x + t.render.width + 23,
                                        t.styles.y + p + s.render.node.control.actionLinkY
                                    ]).start();
                                }).node();
                            }), y.append("path").attr("fill", "none").attr("stroke", s.render.color.stroke).attr("d", wo({
                                source: [
                                    7,
                                    l
                                ],
                                target: [
                                    16,
                                    s.render.node.control.actionLinkY
                                ]
                            })).attr("pointer-events", "none");
                            var m = tl(c.Action).attr("class", "start_link_".concat(n.id)).attr("transform", "translate(0, ".concat(s.render.node.control.actionLinkY, ")")).attr("display", "none");
                            v.append(function() {
                                return m.node();
                            });
                        }
                        if (!d) {
                            var g = "expect" === (null === (a = Uo("onSuspense", e.events)) || void 0 === a ? void 0 : a.action.type);
                            y.append(function() {
                                return _o(c.Inaction, !1, g).attr("transform", "translate(15, ".concat(s.render.node.control.inactionLinkY - s.render.node.control.connectorRadius, ")")).on("mouseenter", function(r) {
                                    if (!g || u) r.buttons || Cl.tools.use(Yi.ShadowNodeLink).data(t, di.Inaction, e, n, !1).position([
                                        t.styles.x + t.render.width + 23,
                                        t.styles.y + p + s.render.node.control.inactionLinkY
                                    ]).start();
                                    else {
                                        u = !0;
                                        var o = function(t, e) {
                                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                                            if (!n) return t;
                                            var r, o, i = n.call(t), a = [];
                                            try {
                                                for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
                                            } catch (t) {
                                                o = {
                                                    error: t
                                                };
                                            } finally{
                                                try {
                                                    r && !r.done && (n = i.return) && n.call(i);
                                                } finally{
                                                    if (o) throw o.error;
                                                }
                                            }
                                            return a;
                                        }(Cl.dom.getRelativeEventCoordinates(r, Cl.dom.staticTools.node()), 2), i = o[0], a = o[1];
                                        Cl.popups.position([
                                            i,
                                            a + 10
                                        ]).show(s.translation.tooltip_inaction_not_available, void 0, "tooltip");
                                    }
                                }).on("mouseleave", function() {
                                    g && u && (u = !1, Cl.popups.hide());
                                }).node();
                            }), y.append("path").attr("fill", "none").attr("stroke", s.render.color.stroke).attr("d", wo({
                                source: [
                                    7,
                                    l
                                ],
                                target: [
                                    16,
                                    s.render.node.control.inactionLinkY
                                ]
                            })).attr("pointer-events", "none");
                            var _ = tl(c.Inaction).attr("class", "start_link_".concat(e.id)).attr("transform", "translate(0, ".concat(s.render.node.control.inactionLinkY, ")")).attr("display", "none");
                            v.append(function() {
                                return _.node();
                            });
                        }
                        v.append(function() {
                            return y.node();
                        });
                        var w = _o(c.Plus, !0).attr("transform", "translate(".concat(-s.render.node.control.connectorRadius, ", ").concat(l - s.render.node.control.connectorRadius, ")")).attr("class", "control_add_link_button_".concat(n.id)).attr("display", "none").on("mouseenter", function() {
                            Bn(this).attr("display", "inline"), y.attr("display", "inline"), b.attr("stroke", s.render.color.stroke);
                        }).on("mouseleave", function() {
                            Bn(this).attr("display", "none"), y.attr("display", "none"), b.attr("stroke", s.render.color.connectorStroke);
                        }), b = w.select(".connector_circle");
                        return b.attr("stroke", s.render.color.connectorStroke), v.append(function() {
                            return w.node();
                        }), v.node();
                    }(r, t, e, i);
                }), l && o.append(function() {
                    return function(t, e, n, r) {
                        var o, i = s.render.node.componentControlHeight * r, a = t.render.controlsContainerYCoordinate + s.render.node.control.actionLinkY + i, l = !!(null === (o = n.events) || void 0 === o ? void 0 : o.some(function(t) {
                            return t.action.args.branchId;
                        })), u = zr("svg:g").attr("class", "controlActionLink").attr("transform", "translate(".concat(t.render.width, ", ").concat(a, ")"));
                        u.append(function() {
                            return _o(c.Action).attr("transform", "translate(".concat(-s.render.node.control.connectorRadius, ", ").concat(-s.render.node.control.connectorRadius, ")")).on("mouseenter", function() {
                                l || d.style("display", "inline");
                            }).node();
                        });
                        var d = _o(c.Minus, !0).attr("transform", "translate(".concat(-s.render.node.control.connectorRadius, ", ").concat(-s.render.node.control.connectorRadius, ")")).style("display", "none").on("mouseleave", function() {
                            d.style("display", "none");
                        }).on("click", function() {
                            t.updateControlActionEvent(e, n, "continuePlayback"), ni(t.chapter), Cl.tools.use(Yi.ShadowNodeLink).stop();
                        });
                        return u.append(function() {
                            return d.node();
                        }), l || (u.on("mouseenter", function(r) {
                            r.buttons || Cl.tools.use(Yi.ShadowNodeLink).data(t, di.Action, e, n).position([
                                t.styles.x + t.render.width + s.render.node.control.lineLength,
                                t.styles.y + a
                            ]).start();
                        }).on("mouseleave", function() {}).call(Cl.inputs.nullableDrag()), u.append("rect").attr("fill", "transparent").attr("x", s.render.node.control.lineLength - Qs / 2).attr("y", -Qs / 2).attr("width", Qs).attr("height", Qs), u.append("path").attr("fill", "none").attr("stroke", s.render.color.stroke).attr("d", wo({
                            source: [
                                7,
                                0
                            ],
                            target: [
                                s.render.node.control.lineLength,
                                0
                            ]
                        })).attr("pointer-events", "none"), u.append("use").attr("class", "control_connector_".concat(n.id)).attr("x", s.render.node.control.lineLength).attr("y", 0).attr("href", "#".concat(ho.Connector))), u.node();
                    }(r, t, e, i);
                }), u && o.append(function() {
                    return function(t, e, n, r) {
                        var o, i = s.render.node.componentControlHeight * r, a = t.render.controlsContainerYCoordinate + s.render.node.control.inactionLinkY + i, l = !!(null === (o = e.events) || void 0 === o ? void 0 : o.some(function(t) {
                            return t.action.args.branchId;
                        })), u = zr("svg:g").attr("class", "controlInactionLink").attr("transform", "translate(".concat(t.render.width, ", ").concat(a, ")"));
                        u.append(function() {
                            return _o(c.Inaction).attr("transform", "translate(".concat(-s.render.node.control.connectorRadius, ", ").concat(-s.render.node.control.connectorRadius, ")")).on("mouseenter", function() {
                                l || d.style("display", "inline");
                            }).node();
                        });
                        var d = _o(c.Minus, !0).attr("transform", "translate(".concat(-s.render.node.control.connectorRadius, ", ").concat(-s.render.node.control.connectorRadius, ")")).style("display", "none").on("mouseleave", function() {
                            d.style("display", "none");
                        }).on("click", function() {
                            t.updateContainerSuspenseAction(e, "continuePlayback"), ni(t.chapter), Cl.tools.use(Yi.ShadowNodeLink).stop();
                        });
                        return u.append(function() {
                            return d.node();
                        }), l || (u.on("mouseenter", function(r) {
                            r.buttons || Cl.tools.use(Yi.ShadowNodeLink).data(t, di.Inaction, e, n).position([
                                t.styles.x + t.render.width + s.render.node.control.lineLength,
                                t.styles.y + a
                            ]).start();
                        }).on("mouseleave", function() {}).call(Cl.inputs.nullableDrag()), u.append("rect").attr("fill", "transparent").attr("x", s.render.node.control.lineLength - el / 2).attr("y", -el / 2).attr("width", el).attr("height", el), u.append("path").attr("fill", "none").attr("stroke", s.render.color.stroke).attr("d", wo({
                            source: [
                                7,
                                0
                            ],
                            target: [
                                s.render.node.control.lineLength,
                                0
                            ]
                        })).attr("pointer-events", "none"), u.append("use").attr("class", "control_connector_".concat(e.id)).attr("x", s.render.node.control.lineLength).attr("y", 0).attr("href", "#".concat(ho.Connector))), u.node();
                    }(r, t, e, i);
                }), i++;
            });
        };
        try {
            for(var l = sl(r.containers().reverse()), u = l.next(); !u.done; u = l.next())a(u.value);
        } catch (t) {
            e = {
                error: t
            };
        } finally{
            try {
                u && !u.done && (n = l.return) && n.call(l);
            } finally{
                if (e) throw e.error;
            }
        }
        return o.node();
    }, cl = function(t) {
        var e, n, r, o, i, a, l, u = Ei(t), d = zr("svg:g").attr("class", "nodeTools"), h = u.getIncomingConnectorsCoordinates();
        if (Object.keys(h).forEach(function(t) {
            switch(t){
                case di.Flip:
                    d.append(function() {
                        return Da(u, h[t]);
                    });
                    break;
                case di.Action:
                    ja(u, d);
                    break;
                case di.Inaction:
                    Va(u, d);
            }
        }), (null === (r = u.stylesWithDefaults.controls) || void 0 === r ? void 0 : r.enabled) && !u.isEndNode()) {
            var f = 0, p = function(t) {
                u.getContainerControls(t.id).forEach(function(e) {
                    var n, r, o = null === (n = e.events) || void 0 === n ? void 0 : n.some(function(t) {
                        return "onClick" === t.type && "setNextBranch" === t.action.type;
                    }), i = null === (r = t.events) || void 0 === r ? void 0 : r.some(function(t) {
                        return "onSuspense" === t.type && "setNextBranch" === t.action.type;
                    });
                    o && d.append(function() {
                        return function(t, e) {
                            var n = s.render.node.componentControlHeight * e, r = t.render.controlsContainerYCoordinate + s.render.node.control.actionLinkY + n, o = zr("svg:g").attr("transform", "translate(".concat(t.render.width, ", ").concat(r, ")"));
                            return o.append(function() {
                                return _o(c.Action).attr("transform", "translate(".concat(-s.render.node.control.connectorRadius, ", ").concat(-s.render.node.control.connectorRadius, ")")).node();
                            }), o.node();
                        }(u, f);
                    }), i && d.append(function() {
                        return function(t, e) {
                            var n = s.render.node.componentControlHeight * e, r = t.render.controlsContainerYCoordinate + s.render.node.control.inactionLinkY + n, o = zr("svg:g").attr("transform", "translate(".concat(t.render.width, ", ").concat(r, ")"));
                            return o.append(function() {
                                return _o(c.Inaction).attr("transform", "translate(".concat(-s.render.node.control.connectorRadius, ", ").concat(-s.render.node.control.connectorRadius, ")")).node();
                            }), o.node();
                        }(u, f);
                    }), f++;
                });
            };
            try {
                for(var v = sl(u.containers().reverse()), y = v.next(); !y.done; y = v.next())p(y.value);
            } catch (t) {
                e = {
                    error: t
                };
            } finally{
                try {
                    y && !y.done && (n = v.return) && n.call(v);
                } finally{
                    if (e) throw e.error;
                }
            }
        }
        return u.isEndNode() || ((!(null === (o = u.stylesWithDefaults.flipTo) || void 0 === o ? void 0 : o.enabled) && u.hasBranches(di.Flip) || !(null === (i = u.stylesWithDefaults.controls) || void 0 === i ? void 0 : i.enabled) && u.hasBranches(di.Action) || !(null === (a = u.stylesWithDefaults.controls) || void 0 === a ? void 0 : a.enabled) && u.hasBranches(di.Inaction)) && d.append(function() {
            return Da(u, [
                u.render.width,
                u.render.previewMiddleYCoordinate
            ]);
        }), (null === (l = u.stylesWithDefaults.flipTo) || void 0 === l ? void 0 : l.enabled) && d.append(function() {
            return ol(u);
        })), d.node();
    }, ul = function(t) {
        var e = Ei(t), n = zr("svg:g"), r = s.render.node, o = r.headerHeight, i = r.heightWithPreviewEov, a = r.componentAddActionHeight;
        return function(t, e, n) {
            var r = function(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t), a = [];
                try {
                    for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
                } catch (t) {
                    o = {
                        error: t
                    };
                } finally{
                    try {
                        r && !r.done && (n = i.return) && n.call(i);
                    } finally{
                        if (o) throw o.error;
                    }
                }
                return a;
            }([
                0,
                0
            ], 2), o = r[0], i = r[1], a = t.append("rect").attr("width", s.render.node.width).attr("height", e.render.height - i).attr("fill", s.render.color.elementBackground);
            (o || i) && a.attr("x", o).attr("y", i);
        }(n, e), function(t, e, n) {
            var r = xs(e, 2), o = r[0], i = r[1];
            if (!n.displayLockedContent) {
                var a = n.stylesWithDefaults.preview.backgroundColor;
                return Es(t, [
                    o,
                    i
                ], n, a), void Ls(t, [
                    o,
                    i
                ], n);
            }
            n.videoInfo ? Os(t, [
                o,
                i
            ], n) : As(t, [
                o,
                i
            ], n);
        }(n, [
            0,
            o + 1
        ], e), s.isEditMode() && !e.isEndNode() && (function(t, e, n) {
            js(t, e, n);
        }(n, [
            0,
            i
        ], e), function(t, e, n) {
            var r, o, i = Vs(e, 2), a = i[0], l = i[1], c = 0;
            try {
                for(var u = Hs(n.containers().reverse()), d = u.next(); !d.done; d = u.next()){
                    var h = d.value;
                    n.getContainerControls(h.id).forEach(function(e) {
                        t.append(function() {
                            var t = l + s.render.node.componentControlHeight * c++;
                            return Ws(n, e).attr("transform", "translate(".concat(a, ", ").concat(t, ")")).node();
                        });
                    });
                }
            } catch (t) {
                r = {
                    error: t
                };
            } finally{
                try {
                    d && !d.done && (o = u.return) && o.call(u);
                } finally{
                    if (r) throw r.error;
                }
            }
        }(n, [
            0,
            i + a
        ], e)), n.node();
    }, dl = function() {
        var t = function(e, n) {
            return t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e;
            } || function(t, e) {
                for(var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }, t(e, n);
        };
        return function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            function r() {
                this.constructor = e;
            }
            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
        };
    }(), hl = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, fl = function(t, e, n) {
        if (n || 2 === arguments.length) for(var r, o = 0, i = e.length; o < i; o++)!r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e));
    }, pl = function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator, n = e && t[e], r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                };
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, vl = function(t) {
        function e(e, n) {
            var r = t.call(this, e, n) || this;
            return r._needForRAF = !0, r.render = function() {
                var t = Di.layout.getChangedNodes(), e = t.deletedNodes, n = t.editedNodes;
                r.destroyNodes(fl(fl([], hl(e), !1), hl(n), !1)), !!n.length && (r.renderNodes(n), r.updateSelected(fl([], hl(Di.selectedNodes), !1), !0)), r.saveRenderResults();
            }, r.clear = function() {
                r._layer.selectAll("*").remove(), Di.layout.renderedNodesData = {};
            }, r.updateSelected = function(t, e) {
                var n, o, i, a;
                void 0 === e && (e = !1);
                var s = e ? new Set : Di.selectedNodes, l = new Set(t);
                try {
                    for(var c = pl(s), u = c.next(); !u.done; u = c.next()){
                        var d = u.value;
                        (p = Ni(d)) && !l.has(d) && (r.removeNodeHighlight(d), Ns(p, !1), gs(p, !1));
                    }
                } catch (t) {
                    n = {
                        error: t
                    };
                } finally{
                    try {
                        u && !u.done && (o = c.return) && o.call(c);
                    } finally{
                        if (n) throw n.error;
                    }
                }
                try {
                    for(var h = pl(l), f = h.next(); !f.done; f = h.next()){
                        var p;
                        d = f.value, (p = Ni(d)) && !s.has(p.id) && (r.createNodeHighlight(p), Ns(p, !0), gs(p, !0));
                    }
                } catch (t) {
                    i = {
                        error: t
                    };
                } finally{
                    try {
                        f && !f.done && (a = h.return) && a.call(h);
                    } finally{
                        if (i) throw i.error;
                    }
                }
                t.forEach(function(t) {
                    return Ea(t).raise();
                });
            }, r.setHovered = function(t) {
                var e, n, o, i, a = new Set(t);
                try {
                    for(var s = pl(Di.hoveredNodes.values()), l = s.next(); !l.done; l = s.next()){
                        var c = l.value, u = Ni(c);
                        u && !a.has(u.id) && r.onNodeMouseLeave(u.id);
                    }
                } catch (t) {
                    e = {
                        error: t
                    };
                } finally{
                    try {
                        l && !l.done && (n = s.return) && n.call(s);
                    } finally{
                        if (e) throw e.error;
                    }
                }
                try {
                    for(var d = pl(a.values()), h = d.next(); !h.done; h = d.next()){
                        var f = h.value;
                        Di.hoveredNodes.has(f) || r.onNodeMouseEnter(f);
                    }
                } catch (t) {
                    o = {
                        error: t
                    };
                } finally{
                    try {
                        h && !h.done && (i = d.return) && i.call(d);
                    } finally{
                        if (o) throw o.error;
                    }
                }
            }, r.createNodeCards = function(t) {
                var e = t.map(function(t) {
                    return t.id;
                });
                return r._layer.selectAll("g.NotExistingClassName").data(e).join("g").attr("class", Ma).attr("id", function(t) {
                    return "node-" + t;
                }).attr("transform", function(t) {
                    var e = Oi(t);
                    return "translate(".concat(Math.round(e.x), ", ").concat(Math.round(e.y), ")");
                });
            }, r.subscribeForZoomEvent(), r;
        }
        return dl(e, t), e.prototype.subscribeForZoomEvent = function() {
            var t = s.performance.renderAfterZoomThrottleInMs, e = ds()(function() {
                Cl.layers.update();
            }, t);
            l.on("zoom", e);
        }, e.prototype.destroyNodes = function(t) {
            t.forEach(function(t) {
                return Ea(t.id).remove();
            });
        }, e.prototype.saveRenderResults = function() {
            var t = La().data().map(Ei);
            Di.layout.renderedNodesData = Ko(t), Di.layout.previousNodesToRenderCount = Di.manifest.nodes.length;
        }, e.prototype.renderNodeFullLayout = function(t) {
            t.append(qs), t.each(Js), t.append(ll), t.each(Cs);
        }, e.prototype.renderNodeSkeletons = function(t) {
            t.append(ul), t.each(Cs);
        }, e.prototype.renderNodes = function(t) {
            var e = this.createNodeCards(t);
            this.addEventsToNodes(e), Di.layout.shouldRenderFullLayout ? this.renderNodeFullLayout(e) : this.renderNodeSkeletons(e), e.each(function(t) {
                Ei(t).resetModified();
            });
        }, e.prototype.addEventsToNodes = function(t) {
            var e = this;
            t.on("contextmenu", function(t, e) {
                var n = Ei(e);
                t.preventDefault();
                var r = Cl.dom.getRelativeEventCoordinates(t, Cl.dom.staticTools.node());
                Cl.tools.use(Yi.NodeMenu).data(n).position(r).start();
            }).on("click", function(t, n) {
                if (!s.isViewMode()) {
                    var r = Ei(n);
                    t.preventDefault(), e.onNodeSelection(r);
                }
            }).on("mousedown", function(t, n) {
                if (!s.isViewMode() && 1 !== t.button && !Di.selectedNodes.has(n)) {
                    var r = Ei(n);
                    Cl.inputs.keydown.shiftHold || e.onNodeSelection(r);
                }
            }).on("mouseenter touchstart", function(t, n) {
                return e.onNodeMouseEnter(n);
            }, {
                passive: !0
            }).on("mouseleave", function(t, n) {
                return e.onNodeMouseLeave(n);
            }).call(s.isEditOrPreViewMode() ? this.initNodeDrag() : function() {
                return null;
            });
        }, e.prototype.onNodeMouseEnter = function(t) {
            if (!Di.selectedNodes.has(t)) {
                var e = Ei(t);
                this.createNodeHighlight(e, !1), Di.addNodesToHovered([
                    t
                ]), ms(t, !1, !0);
            }
        }, e.prototype.onNodeMouseLeave = function(t) {
            Di.selectedNodes.has(t) || (this.removeNodeHighlight(t), Di.removeNodesFromHovered([
                t
            ]), ms(t, !1, !1));
        }, e.prototype.createNodeHighlight = function(t, e) {
            void 0 === e && (e = !0);
            var n = Ta(t.id);
            n.node() ? Us(n, e, t) : Ea(t.id).insert(function(t) {
                return Ks(t, e);
            }, "g.nodeTools");
        }, e.prototype.removeNodeHighlight = function(t) {
            if (ta(t)) {
                var e = Ta(t);
                Us(e, !1, Ei(t));
            } else !function(t) {
                ("string" == typeof t ? [
                    t
                ] : t).forEach(function(t) {
                    return Ta(t).remove();
                });
            }(t);
        }, e.prototype.onNodeSelection = function(t) {
            var e = new Set(Di.selectedNodes);
            Cl.inputs.keydown.shiftHold ? e.has(t.id) ? e.delete(t.id) : e.add(t.id) : (e.clear(), e.add(t.id));
            var n = fl([], hl(e), !1);
            Cl.layers.updateSelected(n);
        }, e.prototype.initNodeDrag = function() {
            var t = this, e = 0, n = 0, r = !1, o = $n().clickDistance(50).on("start", function(t, r) {
                var o = Ei(r);
                Cl.tools.disable(), Cl.popups.hide(), e = t.x - o.styles.x, n = t.y - o.styles.y;
            }).on("drag", function(o, i) {
                Di.selectedNodes.has(i) && t._needForRAF && (t._needForRAF = !1, r = !0, requestAnimationFrame(function() {
                    var r = Ei(i);
                    r.isDragged = !0;
                    var a = hl(Cl.grid.getSnappedCoordinates([
                        o.x,
                        o.y
                    ]), 2), s = a[0], l = a[1], c = s - e - r.styles.x, u = l - n - r.styles.y;
                    Di.selectedNodes.forEach(function(t) {
                        var e = Ni(t);
                        if (e) {
                            var n = Math.round(e.styles.x + c), r = Math.round(e.styles.y + u);
                            e.updatePosition(n, r), Ea(t).attr("transform", "translate(".concat(n, ", ").concat(r, ")"));
                        }
                    }), Di.selectedNodes.forEach(function(t) {
                        var e = Ni(t);
                        e && function(t) {
                            Aa().each(function(e) {
                                var n = Li(e);
                                n.source.chapterId === t.id ? (n.updateSourceAbsolutePosition([
                                    t.styles.x,
                                    t.styles.y
                                ]), Bn(this).datum(n.id).select(".".concat(Ka)).attr("d", wo({
                                    source: n.source.position.absolute,
                                    target: n.target.position.absolute
                                }))) : n.target.chapterId === t.id && (n.updateTargetAbsolutePosition([
                                    t.styles.x,
                                    t.styles.y
                                ]), Bn(this).datum(e).select(".".concat(Ka)).attr("d", wo({
                                    source: n.source.position.absolute,
                                    target: n.target.position.absolute
                                })));
                            });
                        }(e);
                    }), t._needForRAF = !0;
                    var d = function() {
                        var t = (function(t, e, n) {
                            if (n || 2 === arguments.length) for(var r, o = 0, i = e.length; o < i; o++)!r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                            return t.concat(r || Array.prototype.slice.call(e));
                        })([], function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var r, o, i = n.call(t), a = [];
                            try {
                                for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
                            } catch (t) {
                                o = {
                                    error: t
                                };
                            } finally{
                                try {
                                    r && !r.done && (n = i.return) && n.call(i);
                                } finally{
                                    if (o) throw o.error;
                                }
                            }
                            return a;
                        }(Di.selectedNodes), !1).map(Ei);
                        if (0 === t.length) throw new Error("No selected nodes to calculated group coordinates");
                        var e = t.reduce(function(t, e) {
                            var n = e.styles;
                            return 0 === Object.keys(t).length ? {
                                minX: n.x,
                                minY: n.y,
                                maxX: n.x + e.render.width,
                                maxY: n.y + e.render.height
                            } : {
                                minX: Math.min(t.minX, n.x),
                                minY: Math.min(t.minY, n.y),
                                maxX: Math.max(t.maxX, n.x + e.render.width),
                                maxY: Math.max(t.maxY, n.y + e.render.height)
                            };
                        }, {}), n = e.minX, r = e.minY, o = e.maxY;
                        return [
                            [
                                n,
                                r
                            ],
                            [
                                e.maxX,
                                o
                            ]
                        ];
                    }();
                    Cl.layers.shiftLayersOnDragToEdge(d);
                }));
            }).on("end", function() {
                var e = fl([], hl(Di.selectedNodes), !1).map(function(t) {
                    var e = Ei(t);
                    return e.isDragged && (e.isDragged = !1), {
                        id: t,
                        x: e.styles.x,
                        y: e.styles.y
                    };
                });
                r && l.emit("events", {
                    name: "coordinatesUpdated",
                    context: e
                }), t._needForRAF = !0, r = !1;
            });
            return o;
        }, e;
    }(rs), yl = function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator, n = e && t[e], r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                };
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, ml = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t), a = [];
        try {
            for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
        } catch (t) {
            o = {
                error: t
            };
        } finally{
            try {
                r && !r.done && (n = i.return) && n.call(i);
            } finally{
                if (o) throw o.error;
            }
        }
        return a;
    }, gl = function(t) {
        var e = this;
        this._editorMapElement = t, this.update = function() {
            var t, n;
            Di.sectors.updateSectors(Cl.dom.viewPosition);
            try {
                for(var r = yl(e._layers), o = r.next(); !o.done; o = r.next()){
                    var i = o.value;
                    i.allowReRendering() && i.render();
                }
            } catch (e) {
                t = {
                    error: e
                };
            } finally{
                try {
                    o && !o.done && (n = r.return) && n.call(r);
                } finally{
                    if (t) throw t.error;
                }
            }
        }, this.updateSelected = function(t) {
            var n, r;
            try {
                for(var o = yl(e._layers), i = o.next(); !i.done; i = o.next())i.value.updateSelected(t);
            } catch (t) {
                n = {
                    error: t
                };
            } finally{
                try {
                    i && !i.done && (r = o.return) && r.call(o);
                } finally{
                    if (n) throw n.error;
                }
            }
            Di.selectNodes(t);
        }, this.updateHovered = function(t) {
            var n, r;
            try {
                for(var o = yl(e._layers), i = o.next(); !i.done; i = o.next())i.value.setHovered(t);
            } catch (t) {
                n = {
                    error: t
                };
            } finally{
                try {
                    i && !i.done && (r = o.return) && r.call(o);
                } finally{
                    if (n) throw n.error;
                }
            }
        }, this.clear = function() {
            e._layers.forEach(function(t) {
                return t.clear();
            });
        }, this.dispose = function() {
            e._editorMapElement.selectAll("*").remove();
        }, this.shiftLayersOnDragToEdge = function(t) {
            var n = ml(t, 2), r = ml(n[0], 2), o = r[0], i = r[1], a = ml(n[1], 2), s = a[0], l = a[1], c = 30 * Math.max(Cl.inputs.zoom.zoomFactor, .4);
            e.shiftNodesMapOnLeftBorderTouche(o, c), e.shiftNodesMapOnTopBorderTouche(i, c), e.shiftNodesMapOnRightBorderTouche(s, c), e.shiftNodesMapOnBottomBorderTouche(l, c);
        }, this.shiftNodesMapOnLeftBorderTouche = function(t, e) {
            var n = Cl.inputs.zoom, r = n.zoomFactor, o = n.shiftTo;
            n.zoomPosition.x + t * r < 40 && o([
                e,
                0
            ]);
        }, this.shiftNodesMapOnTopBorderTouche = function(t, e) {
            var n = Cl.inputs.zoom, r = n.zoomFactor, o = n.shiftTo;
            n.zoomPosition.y + t * r < 40 && o([
                0,
                e
            ]);
        }, this.shiftNodesMapOnRightBorderTouche = function(t, e) {
            var n = Cl.inputs.zoom, r = n.zoomFactor, o = n.shiftTo, i = n.zoomPosition, a = Cl.dom.getEditorWindowSize().width;
            i.x + t * r > a - 40 && o([
                -e,
                0
            ]);
        }, this.shiftNodesMapOnBottomBorderTouche = function(t, e) {
            var n = Cl.inputs.zoom, r = n.zoomFactor, o = n.shiftTo, i = n.zoomPosition, a = Cl.dom.getEditorWindowSize().height;
            i.y + t * r > a - 40 && o([
                0,
                -e
            ]);
        }, this._layers = function(t, e, n) {
            if (n || 2 === arguments.length) for(var r, o = 0, i = e.length; o < i; o++)!r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
            return t.concat(r || Array.prototype.slice.call(e));
        }([
            new ss(t, "branches"),
            new vl(t, "nodes")
        ], ml(s.isViewMode() ? [
            new cs(t, "navigation")
        ] : []), !1);
    }, _l = function() {
        function t(t) {
            var e = this;
            this._editorDOMElement = t, this._withScale = !1, this._zoom = {
                x: 0,
                y: 0,
                value: 1
            }, this.show = function(t, n, r, o) {
                void 0 === r && (r = "popup"), void 0 === o && (o = {}), e.renderPopup(t, n, r, o);
            }, this.hide = function() {
                var t;
                e._currentPopupType = "popup", e._popupPosition = void 0, e._withScale = !1, null === (t = e._popup) || void 0 === t || t.remove();
            }, this.position = function(t) {
                return e._popupPosition = t, e;
            }, this.withScale = function() {
                return e._withScale = !0, e;
            }, this._currentPopupType = "popup", l.on("zoom", function(t) {
                e._zoom = t, "popup" !== e._currentPopupType && e.hide();
            });
        }
        return t.prototype.renderPopup = function(t, e, n, r) {
            this._currentPopupType = n;
            var o = [
                "mge-editorPopup",
                r.arrowDown ? "arrow" : ""
            ].filter(Boolean).join(" ");
            if (this._popup = this._editorDOMElement.append("div").attr("class", o).style("width", r.width || "auto").style("min-width", "popup" === n ? "324px" : "200px").style("pointer-events", "popup" === n ? "all" : "none"), e && this._popup.append("div").style("font-size", 17).style("font-weight", 600).html(e), this._popup.append("div").html(t), this._popupPosition) {
                if (this._popup.style("top", "0").style("left", "0").style("transform-origin", "top left"), this._withScale) {
                    var i = this._popupPosition[0] * this._zoom.value + this._zoom.x, a = this._popupPosition[1] * this._zoom.value + this._zoom.y;
                    this._popup.style("transform", "translate(".concat(i, "px, ").concat(a, "px) scale(").concat(this._zoom.value, ")"));
                } else i = this._popupPosition[0], a = this._popupPosition[1], this._popup.style("transform", "translate(".concat(i, "px, ").concat(a, "px)"));
            } else this._popup.style("top", "50%").style("left", "50%"), this._withScale ? this._popup.style("transform", "translate(-50%, -50%) scale(".concat(this._zoom.value, ")")) : this._popup.style("transform", "translate(-50%, -50%)");
        }, t;
    }(), wl = function() {
        function t(t, e) {
            var n, r = this;
            this.use = function(t) {
                return r.disable(), r._activeTool = t, r._tools[t].tool;
            }, this.disable = function() {
                r._activeTool && (r._tools[r._activeTool].tool.stop(), r._activeTool = null);
            }, this.disableContextMenu = function() {
                r._activeTool && [
                    Yi.NodeMenu,
                    Yi.EOVMenu,
                    Yi.ControlMenu,
                    Yi.ControlTypeMenu,
                    Yi.EditorContextMenu
                ].includes(r._activeTool) && (r._tools[r._activeTool].tool.stop(), r._activeTool = null);
            }, this._activeTool = null, this._tools = ((n = {})[Yi.ShadowNode] = {
                render: "map",
                tool: new xa
            }, n[Yi.ShadowNodeLink] = {
                render: "map",
                tool: new Ra
            }, n[Yi.NodeMenu] = {
                render: "staticTools",
                tool: new _a
            }, n[Yi.EOVMenu] = {
                render: "staticTools",
                tool: new va
            }, n[Yi.ControlMenu] = {
                render: "staticTools",
                tool: new ca
            }, n[Yi.ControlTypeMenu] = {
                render: "staticTools",
                tool: new da
            }, n[Yi.EditorContextMenu] = {
                render: "staticTools",
                tool: new fa
            }, n[Yi.AreaSelectTool] = {
                render: "staticTools",
                tool: new oa
            }, n);
            var o = t.append("g").attr("id", "editor-tools");
            Object.values(this._tools).forEach(function(t) {
                switch(t.render){
                    case "map":
                        t.tool.render(o);
                        break;
                    case "staticTools":
                        t.tool.render(e);
                }
            });
        }
        return Object.defineProperty(t.prototype, "activeTool", {
            get: function() {
                return this._activeTool;
            },
            enumerable: !1,
            configurable: !0
        }), t;
    }(), bl = function() {
        function t(t) {
            this._editorDOMElement = t, this.renderGraphLegend(), this.renderNavigationLegend();
        }
        return t.prototype.dispose = function() {}, t.prototype.renderGraphLegend = function() {
            var t = this._editorDOMElement.append("div").attr("class", "mge-legend mge-graph");
            this.renderLegendItem(t, s.translation.graph_node_start, c.StartNode, 12, !0), this.renderLegendItem(t, s.translation.graph_node_end, c.EndNode, 12, !0), this.renderLegendItem(t, s.translation.graph_location, c.Location);
        }, t.prototype.renderNavigationLegend = function() {
            var t = this._editorDOMElement.append("div").attr("class", "mge-legend mge-navigation");
            this.renderLegendItem(t, s.translation.navigation_controls, c.LegendNavigation, 28);
        }, t.prototype.renderLegendItem = function(t, e, n, r, o) {
            void 0 === r && (r = 20), void 0 === o && (o = !1);
            var i = t.append("div").attr("class", "mge-legendItem");
            i.append("div").attr("class", o ? "mge-icon withBg" : "mge-icon").append("svg").attr("x", 0).attr("y", 0).attr("width", r).attr("height", r).attr("viewBox", "0 0 ".concat(s.render.iconSize, " ").concat(s.render.iconSize)).append("use").attr("href", "#".concat(n)), i.append("div").text(e);
        }, t;
    }();
    const Cl = new (function() {
        function t() {}
        return t.prototype.init = function(t) {
            this._dom = new ji(t), this._grid = new Fi(this._dom.grid), this._defs = new ko(this._dom.defs), this._inputs = new Ua(this._dom.svg), this._layers = new gl(this._dom.map), this._popups = new _l(this._dom.root), s.isEditOrPreViewMode() && (this._tools = new wl(this._dom.map, this._dom.staticTools)), s.isViewMode() && (this._legend = new bl(this._dom.root));
        }, t.prototype.dispose = function() {
            var t, e, n, r, o, i, a, s;
            null === (t = this._legend) || void 0 === t || t.dispose(), null === (e = this._tools) || void 0 === e || e.disable(), null === (n = this._popups) || void 0 === n || n.hide(), null === (r = this._layers) || void 0 === r || r.dispose(), null === (o = this._inputs) || void 0 === o || o.dispose(), null === (i = this._defs) || void 0 === i || i.dispose(), null === (a = this._grid) || void 0 === a || a.dispose(), null === (s = this._dom) || void 0 === s || s.dispose();
        }, Object.defineProperty(t.prototype, "dom", {
            get: function() {
                return this._dom || this.throwModuleError("DOM"), this._dom;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "layers", {
            get: function() {
                return this._layers || this.throwModuleError("Layers"), this._layers;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "inputs", {
            get: function() {
                return this._inputs || this.throwModuleError("Inputs"), this._inputs;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "popups", {
            get: function() {
                return this._popups || this.throwModuleError("Popups"), this._popups;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "tools", {
            get: function() {
                return this._tools || this.throwModuleError("Tools"), this._tools;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "grid", {
            get: function() {
                return this._grid || this.throwModuleError("Grid"), this._grid;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.throwModuleError = function(t) {
            throw new Error(t + " manager was not initialized. Did you forget to init()?");
        }, t;
    }());
    var xl = function() {
        function t(t, e) {
            var n = this;
            this.update = function(t) {
                var e = function(t, e, n) {
                    if (n || 2 === arguments.length) for(var r, o = 0, i = e.length; o < i; o++)!r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                    return t.concat(r || Array.prototype.slice.call(e));
                }([], function(t, e) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!n) return t;
                    var r, o, i = n.call(t), a = [];
                    try {
                        for(; (void 0 === e || e-- > 0) && !(r = i.next()).done;)a.push(r.value);
                    } catch (t) {
                        o = {
                            error: t
                        };
                    } finally{
                        try {
                            r && !r.done && (n = i.return) && n.call(i);
                        } finally{
                            if (o) throw o.error;
                        }
                    }
                    return a;
                }(Di.selectedNodes), !1);
                0 === Di.manifest.nodes.length && t.chapters.length > s.performance.enableSkeletonsOnNodesCount && n.zoom(Xa), Di.reset(), Di.manifest.set(t), Di.setVisitedNodes([
                    t.metadata.initChapterId
                ]), n.reRenderAfterUpdate(e);
            }, this.updateVideosInfo = function(t) {
                try {
                    Di.updateVideosInfo(t), Di.manifest.rebuildNodesAndBranches(), Cl.layers.update();
                } catch (t) {
                    throw new Error("Argument type mismatch.");
                }
            }, this.setGraphFrozen = function(t) {
                Di.isGraphFrozen = t;
            }, this.dispose = function() {
                Di.reset(), l.dispose(), Cl.dispose();
            }, this.zoom = function(t) {
                ti(t) && Cl.inputs.zoom.update(t);
            }, this.zoomTo = function(t) {
                (function(t) {
                    return Array.isArray(t) && ti(t[0]) && ti(t[1]);
                })(t) && Cl.inputs.zoom.translateTo(t);
            }, this.zoomConfig = function() {
                return Cl.inputs.zoom.zoomConfig;
            }, this.zoomEnable = function() {
                Cl.inputs.zoom.enable();
            }, this.zoomDisable = function() {
                Cl.inputs.zoom.disable();
            }, this.selectChapter = function(t, e) {
                void 0 === e && (e = !1);
                var r = "string" == typeof t ? [
                    t
                ] : t;
                Cl.layers.updateSelected(r);
                var o = "string" == typeof t ? t : t[0];
                e && o && n.focusChapter(o);
            }, this.hoverOverChapters = function(t) {
                var e = Array.isArray(t) ? t : [
                    t
                ];
                Cl.layers.updateHovered(e);
            }, this.focusChapter = function(t, e) {
                void 0 === e && (e = n.zoomConfig().max / 2);
                var r = Ni(t);
                r && Cl.inputs.zoom.translateTo(r.getCenter(), e).then(function() {
                    Di.layout.isPerformanceBoostDisabled() || (Cl.layers.clear(), Cl.layers.update());
                });
            }, this.recenterGraph = function() {
                if (Di.manifest.nodes.length) {
                    var t = Di.manifest.getManifestBoundingBox(), e = Cl.dom.getEditorWindowSize(), n = (t.maxX + t.minX) / 2, r = (t.maxY + t.minY) / 2, o = e.width / (t.maxX - t.minX), i = e.height / (t.maxY - t.minY), a = Math.min(Math.min(o, i), 1) - .05;
                    Cl.inputs.zoom.translateTo([
                        n,
                        r
                    ], a);
                }
            }, this.setChaptersValidationErrors = function(t) {
                if (!s.isEditMode()) throw new Error("Only applicable in 'edit' mode");
                Di.setNodeErrors(t), n.reRenderAfterUpdate();
            }, this.toggleAddChapterTool = function(t) {
                if (void 0 === t && (t = !0), !s.isEditMode()) throw new Error("Only applicable in 'edit' mode");
                if (t) {
                    var e = Cl.inputs.zoom.getRelativeCoordinates([
                        100,
                        100
                    ]);
                    Cl.tools.use(Yi.ShadowNode).position(e).start();
                } else Cl.tools.disable();
            }, this.toggleHandTool = function(t) {
                Cl.inputs.zoom.toggleMousedownZoom(), t(Cl.inputs.zoom.isMousedownZoomEnabled);
            }, this.setVisitedChapters = function(t) {
                if (!s.isViewMode()) throw new Error("Only applicable in 'view' mode");
                Di.setVisitedNodes(t), Cl.layers.update();
            }, this.setMode = function(t) {
                if ([
                    "edit",
                    "pre_view"
                ].includes(t)) {
                    if (!s.isEditOrPreViewMode()) throw new Error("Only applicable in 'edit' mode");
                    s.switchMode(t), Di.manifest.rebuildNodesAndBranches(), n.reRenderAfterUpdate();
                }
            }, this.on = function(t, e) {
                l.on(t, e);
            }, s.init(e), Cl.init(t), Cl.layers.clear();
        }
        return t.prototype.reRenderAfterUpdate = function(t) {
            void 0 === t && (t = []), Cl.dom.updateEditorBackgroundColor(), Cl.grid.update(), Cl.layers.update(), Di.updatedSelectedBranches();
            var e = t.filter(function(t) {
                return Ni(t);
            });
            Cl.layers.updateSelected(e);
        }, t;
    }();
})();
var o = r.Q, i = r.$;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["GNgFO"], null, "parcelRequireb792")

//# sourceMappingURL=movika-graph-editor.f396fcfb.js.map
