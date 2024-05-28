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
})({"7XKtX":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0b675d61010e8b8d";
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

},{}],"24ag6":[function(require,module,exports) {
/**
 * @vkontakte/videoplayer-core v2.0.101
 * Fri, 26 Apr 2024 14:10:36 GMT
 * https://st.mycdn.me/static/vkontakte-videoplayer/2-0-101/doc/
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChromecastState", ()=>fe);
parcelHelpers.export(exports, "HttpConnectionType", ()=>Ti);
parcelHelpers.export(exports, "Observable", ()=>(0, _esnextEsmJs.Observable));
parcelHelpers.export(exports, "PlaybackState", ()=>l);
parcelHelpers.export(exports, "Player", ()=>hn);
parcelHelpers.export(exports, "SDK_VERSION", ()=>ln);
parcelHelpers.export(exports, "Subject", ()=>(0, _esnextEsmJs.Subject));
parcelHelpers.export(exports, "Subscription", ()=>(0, _esnextEsmJs.Subscription));
parcelHelpers.export(exports, "Surface", ()=>Ke);
parcelHelpers.export(exports, "VERSION", ()=>Ns);
parcelHelpers.export(exports, "ValueSubject", ()=>(0, _esnextEsmJs.ValueSubject));
parcelHelpers.export(exports, "VideoFormat", ()=>g);
parcelHelpers.export(exports, "VideoQuality", ()=>(0, _esnextEsmJs.VideoQuality));
var _esnextEsmJs = require("@vkontakte/videoplayer-shared/esnext.esm.js");
const Ns = "2.0.101";
var l;
(function(a) {
    a.STOPPED = "stopped", a.READY = "ready", a.PLAYING = "playing", a.PAUSED = "paused";
})(l || (l = {}));
var g;
(function(a) {
    a.MPEG = "MPEG", a.DASH = "DASH_SEP", a.DASH_SEP = "DASH_SEP", a.DASH_SEP_VK = "DASH_SEP", a.DASH_WEBM = "DASH_WEBM", a.DASH_WEBM_AV1 = "DASH_WEBM_AV1", a.DASH_WEBM_VK = "DASH_WEBM", a.DASH_ONDEMAND = "DASH_ONDEMAND", a.DASH_ONDEMAND_VK = "DASH_ONDEMAND", a.DASH_LIVE = "DASH_LIVE", a.DASH_LIVE_CMAF = "DASH_LIVE_CMAF", a.DASH_LIVE_WEBM = "DASH_LIVE_WEBM", a.HLS = "HLS", a.HLS_ONDEMAND = "HLS_ONDEMAND", a.HLS_JS = "HLS", a.HLS_LIVE = "HLS_LIVE", a.HLS_LIVE_CMAF = "HLS_LIVE_CMAF", a.WEB_RTC_LIVE = "WEB_RTC_LIVE";
})(g || (g = {}));
var me;
(function(a) {
    a.SCREEN = "SCREEN", a.CHROMECAST = "CHROMECAST";
})(me || (me = {}));
var fe;
(function(a) {
    a.NOT_AVAILABLE = "NOT_AVAILABLE", a.AVAILABLE = "AVAILABLE", a.CONNECTING = "CONNECTING", a.CONNECTED = "CONNECTED";
})(fe || (fe = {}));
var Ti;
(function(a) {
    a.HTTP1 = "http1", a.HTTP2 = "http2", a.QUIC = "quic";
})(Ti || (Ti = {}));
var G;
(function(a) {
    a.None = "none", a.Requested = "requested", a.Applying = "applying";
})(G || (G = {}));
var Ke;
(function(a) {
    a.NONE = "none", a.INLINE = "inline", a.FULLSCREEN = "fullscreen", a.SECOND_SCREEN = "second_screen", a.PIP = "pip";
})(Ke || (Ke = {}));
var Fs = (a)=>new Promise((e, t)=>{
        const i = document.createElement("script");
        i.setAttribute("src", a), i.onload = ()=>e, i.onerror = ()=>t, document.body.appendChild(i);
    });
class Vs {
    connection$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    castState$ = new (0, _esnextEsmJs.ValueSubject)(fe.NOT_AVAILABLE);
    errorEvent$ = new (0, _esnextEsmJs.Subject);
    contentId;
    realCastState$ = new (0, _esnextEsmJs.ValueSubject)(fe.NOT_AVAILABLE);
    subscription = new (0, _esnextEsmJs.Subscription);
    log;
    params;
    constructor(e){
        this.params = e, this.log = this.params.dependencies.logger.createComponentLog("ChromecastInitializer");
        const t = "chrome" in window;
        if (this.log({
            message: `[constructor] receiverApplicationId: ${this.params.receiverApplicationId}, isDisabled: ${this.params.isDisabled}, isSupported: ${t}`
        }), e.isDisabled || !t) return;
        const i = (0, _esnextEsmJs.isNonNullable)(window.chrome?.cast), s = !!window.__onGCastApiAvailable;
        i ? this.initializeCastApi() : (window.__onGCastApiAvailable = (r)=>{
            delete window.__onGCastApiAvailable, r && this.initializeCastApi();
        }, s || Fs("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1").catch(()=>this.errorEvent$.next({
                id: "ChromecastLoading",
                category: (0, _esnextEsmJs.ErrorCategory).NETWORK,
                message: "Script loading failed!"
            })));
    }
    connect() {
        cast.framework.CastContext.getInstance()?.requestSession();
    }
    disconnect() {
        cast.framework.CastContext.getInstance()?.getCurrentSession()?.endSession(!0);
    }
    stopMedia() {
        return new Promise((e, t)=>{
            cast.framework.CastContext.getInstance()?.getCurrentSession()?.getMediaSession()?.stop(new chrome.cast.media.StopRequest, e, t);
        });
    }
    toggleConnection() {
        (0, _esnextEsmJs.isNonNullable)(this.connection$.getValue()) ? this.disconnect() : this.connect();
    }
    setVolume(e) {
        const t = this.connection$.getValue();
        (0, _esnextEsmJs.isNullable)(t) || (t.remotePlayer.volumeLevel = e, t.remotePlayerController.setVolumeLevel());
    }
    setMuted(e) {
        const t = this.connection$.getValue();
        (0, _esnextEsmJs.isNullable)(t) || e !== t.remotePlayer.isMuted && t.remotePlayerController.muteOrUnmute();
    }
    destroy() {
        this.subscription.unsubscribe();
    }
    initListeners() {
        const e = new cast.framework.RemotePlayer, t = new cast.framework.RemotePlayerController(e), i = cast.framework.CastContext.getInstance();
        this.subscription.add((0, _esnextEsmJs.fromEvent)(i, cast.framework.CastContextEventType.SESSION_STATE_CHANGED).subscribe((s)=>{
            switch(s.sessionState){
                case cast.framework.SessionState.SESSION_STARTED:
                case cast.framework.SessionState.SESSION_STARTING:
                case cast.framework.SessionState.SESSION_RESUMED:
                    this.contentId = i.getCurrentSession()?.getMediaSession()?.media.contentId;
                    break;
                case cast.framework.SessionState.NO_SESSION:
                case cast.framework.SessionState.SESSION_ENDING:
                case cast.framework.SessionState.SESSION_ENDED:
                case cast.framework.SessionState.SESSION_START_FAILED:
                    this.contentId = void 0;
                    break;
                default:
                    return (0, _esnextEsmJs.assertNever)(s.sessionState);
            }
        })).add((0, _esnextEsmJs.merge)((0, _esnextEsmJs.fromEvent)(i, cast.framework.CastContextEventType.CAST_STATE_CHANGED).pipe((0, _esnextEsmJs.tap)((s)=>{
            this.log({
                message: `[cast.framework.RemotePlayerEventType.CAST_STATE_CHANGED]: ${JSON.stringify(s)}`
            });
        }), (0, _esnextEsmJs.map)((s)=>s.castState)), (0, _esnextEsmJs.observableFrom)([
            i.getCastState()
        ])).pipe((0, _esnextEsmJs.filterChanged)(), (0, _esnextEsmJs.map)(Us), (0, _esnextEsmJs.tap)((s)=>{
            this.log({
                message: `realCastState$: ${s}`
            });
        })).subscribe(this.realCastState$)).add(this.realCastState$.subscribe((s)=>{
            const r = s === fe.CONNECTED, n = (0, _esnextEsmJs.isNonNullable)(this.connection$.getValue());
            if (r && !n) {
                const o = i.getCurrentSession();
                (0, _esnextEsmJs.assertNonNullable)(o);
                const d = o.getCastDevice(), c = o.getMediaSession()?.media.contentId;
                ((0, _esnextEsmJs.isNullable)(c) || c === this.contentId) && (this.log({
                    message: "connection created"
                }), this.connection$.next({
                    remotePlayer: e,
                    remotePlayerController: t,
                    session: o,
                    castDevice: d
                }));
            } else !r && n && (this.log({
                message: "connection destroyed"
            }), this.connection$.next(void 0));
            this.castState$.next(s === fe.CONNECTED ? (0, _esnextEsmJs.isNonNullable)(this.connection$.getValue()) ? fe.CONNECTED : fe.AVAILABLE : s);
        }));
    }
    initializeCastApi() {
        let e, t, i;
        try {
            e = cast.framework.CastContext.getInstance(), t = chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID, i = chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED;
        } catch  {
            return;
        }
        try {
            e.setOptions({
                receiverApplicationId: this.params.receiverApplicationId ?? t,
                autoJoinPolicy: i
            }), this.initListeners();
        } catch (s) {
            this.errorEvent$.next({
                id: "ChromecastInitializer",
                category: (0, _esnextEsmJs.ErrorCategory).EXTERNAL_API,
                message: "[initializeCastApi] failed",
                thrown: s
            });
        }
    }
}
const Us = (a)=>{
    switch(a){
        case cast.framework.CastState.NO_DEVICES_AVAILABLE:
            return fe.NOT_AVAILABLE;
        case cast.framework.CastState.NOT_CONNECTED:
            return fe.AVAILABLE;
        case cast.framework.CastState.CONNECTING:
            return fe.CONNECTING;
        case cast.framework.CastState.CONNECTED:
            return fe.CONNECTED;
        default:
            return (0, _esnextEsmJs.assertNever)(a);
    }
};
var he;
(function(a) {
    a[a.OFFSET_P = 0] = "OFFSET_P", a[a.PLAYBACK_SHIFT = 1] = "PLAYBACK_SHIFT", a[a.DASH_CMAF_OFFSET_P = 2] = "DASH_CMAF_OFFSET_P";
})(he || (he = {}));
var Be = (a, e = 0, t = he.OFFSET_P)=>{
    switch(t){
        case he.OFFSET_P:
            return a.replace("_offset_p", e === 0 ? "" : "_" + e.toFixed(0));
        case he.PLAYBACK_SHIFT:
            {
                if (e === 0) return a;
                const i = new URL(a);
                return i.searchParams.append("playback_shift", e.toFixed(0)), i.toString();
            }
        case he.DASH_CMAF_OFFSET_P:
            {
                const i = new URL(a);
                return !i.searchParams.get("offset_p") && e === 0 ? a : (i.searchParams.set("offset_p", e.toFixed(0)), i.toString());
            }
        default:
            (0, _esnextEsmJs.assertNever)(t);
    }
    return a;
};
const _i = (a, e)=>{
    switch(e){
        case he.OFFSET_P:
            return NaN;
        case he.PLAYBACK_SHIFT:
            {
                const t = new URL(a);
                return Number(t.searchParams.get("playback_shift"));
            }
        case he.DASH_CMAF_OFFSET_P:
            {
                const t = new URL(a);
                return Number(t.searchParams.get("offset_p") ?? 0);
            }
        default:
            (0, _esnextEsmJs.assertNever)(e);
    }
};
var R = (a, e, t = !1)=>{
    const i = a.getTransition();
    (t || !i || i.to === e) && a.setState(e);
};
class re {
    state;
    prevState;
    transition;
    transitionStarted$ = new (0, _esnextEsmJs.Subject);
    transitionEnded$ = new (0, _esnextEsmJs.Subject);
    transitionUpdated$ = new (0, _esnextEsmJs.Subject);
    forceChanged$ = new (0, _esnextEsmJs.Subject);
    stateChangeStarted$ = (0, _esnextEsmJs.merge)(this.transitionStarted$, this.transitionUpdated$);
    stateChangeEnded$ = (0, _esnextEsmJs.merge)(this.transitionEnded$, this.forceChanged$);
    constructor(e){
        this.state = e, this.prevState = void 0;
    }
    setState(e) {
        const t = this.transition, i = this.state;
        this.transition = void 0, this.prevState = i, this.state = e, t ? t.to === e ? this.transitionEnded$.next(t) : this.forceChanged$.next({
            from: t.from,
            to: e,
            canceledTransition: t
        }) : this.forceChanged$.next({
            from: i,
            to: e,
            canceledTransition: t
        });
    }
    startTransitionTo(e) {
        const t = this.transition, i = this.state;
        i === e || (0, _esnextEsmJs.isNonNullable)(t) && t.to === e || (this.prevState = i, this.state = e, t ? (this.transition = {
            from: t.from,
            to: e,
            canceledTransition: t
        }, this.transitionUpdated$.next(this.transition)) : (this.transition = {
            from: i,
            to: e
        }, this.transitionStarted$.next(this.transition)));
    }
    getTransition() {
        return this.transition;
    }
    getState() {
        return this.state;
    }
    getPrevState() {
        return this.prevState;
    }
}
const Hs = (a)=>{
    switch(a){
        case g.MPEG:
        case g.DASH_SEP:
        case g.DASH_ONDEMAND:
        case g.DASH_WEBM:
        case g.DASH_WEBM_AV1:
        case g.HLS:
        case g.HLS_ONDEMAND:
            return !1;
        case g.DASH_LIVE:
        case g.DASH_LIVE_CMAF:
        case g.HLS_LIVE:
        case g.HLS_LIVE_CMAF:
        case g.DASH_LIVE_WEBM:
        case g.WEB_RTC_LIVE:
            return !0;
        default:
            return (0, _esnextEsmJs.assertNever)(a);
    }
};
var F;
(function(a) {
    a.STOPPED = "stopped", a.READY = "ready", a.PLAYING = "playing", a.PAUSED = "paused";
})(F || (F = {}));
const Ys = 5, Gs = 5, qs = 500, Oi = 7e3;
class zs {
    subscription = new (0, _esnextEsmJs.Subscription);
    loadMediaTimeoutSubscription = new (0, _esnextEsmJs.Subscription);
    videoState = new re(F.STOPPED);
    params;
    log;
    constructor(e){
        this.params = e, this.log = this.params.dependencies.logger.createComponentLog("ChromecastProvider"), this.log({
            message: `constructor, format: ${e.format}`
        }), this.params.output.isLive$.next(Hs(e.format)), this.params.output.isAudioAvailable$.next(!0), this.handleRemoteVolumeChange({
            volume: this.params.connection.remotePlayer.volumeLevel,
            muted: this.params.connection.remotePlayer.isMuted
        });
        const t = this.params.connection.session.getMediaSession();
        t && this.restoreSession(t), this.subscribe();
    }
    destroy() {
        this.log({
            message: "[destroy]"
        }), this.subscription.unsubscribe();
    }
    subscribe() {
        this.subscription.add(this.loadMediaTimeoutSubscription);
        const e = new (0, _esnextEsmJs.Subscription);
        this.subscription.add(e), this.subscription.add((0, _esnextEsmJs.merge)(this.videoState.stateChangeStarted$.pipe((0, _esnextEsmJs.map)((s)=>`stateChangeStarted$ ${JSON.stringify(s)}`)), this.videoState.stateChangeEnded$.pipe((0, _esnextEsmJs.map)((s)=>`stateChangeEnded$ ${JSON.stringify(s)}`))).subscribe((s)=>this.log({
                message: `[videoState] ${s}`
            })));
        const t = (s, r)=>this.subscription.add(s.subscribe(r));
        if (this.params.output.isLive$.getValue()) this.params.output.position$.next(0), this.params.output.duration$.next(0);
        else {
            const s = new (0, _esnextEsmJs.Subject);
            e.add(s.pipe((0, _esnextEsmJs.debounce)(qs)).subscribe(()=>{
                this.params.output.seekedEvent$.next();
            }));
            let r = NaN;
            e.add((0, _esnextEsmJs.fromEvent)(this.params.connection.remotePlayerController, cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED).subscribe((n)=>{
                this.logRemoteEvent(n);
                const o = n.value;
                this.params.output.position$.next(o), (this.params.desiredState.seekState.getState().state === G.Applying || Math.abs(o - r) > Ys) && s.next(o), r = o;
            })), e.add((0, _esnextEsmJs.fromEvent)(this.params.connection.remotePlayerController, cast.framework.RemotePlayerEventType.DURATION_CHANGED).subscribe((n)=>{
                this.logRemoteEvent(n), this.params.output.duration$.next(n.value);
            }));
        }
        t((0, _esnextEsmJs.fromEvent)(this.params.connection.remotePlayerController, cast.framework.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED), (s)=>{
            this.logRemoteEvent(s), s.value ? this.handleRemoteReady() : (this.handleRemoteStop(), e.unsubscribe());
        }), t((0, _esnextEsmJs.fromEvent)(this.params.connection.remotePlayerController, cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED), (s)=>{
            this.logRemoteEvent(s), s.value ? this.handleRemotePause() : this.handleRemotePlay();
        }), t((0, _esnextEsmJs.fromEvent)(this.params.connection.remotePlayerController, cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED), (s)=>{
            this.logRemoteEvent(s);
            const { remotePlayer: r } = this.params.connection, n = s.value, o = this.params.output.isBuffering$.getValue(), d = n === chrome.cast.media.PlayerState.BUFFERING;
            switch(o !== d && this.params.output.isBuffering$.next(d), n){
                case chrome.cast.media.PlayerState.IDLE:
                    !this.params.output.isLive$.getValue() && r.duration - r.currentTime < Gs && this.params.output.endedEvent$.next(), this.handleRemoteStop(), R(this.params.desiredState.playbackState, l.STOPPED);
                    break;
                case chrome.cast.media.PlayerState.PAUSED:
                    this.handleRemotePause();
                    break;
                case chrome.cast.media.PlayerState.PLAYING:
                    this.handleRemotePlay();
                    break;
                case chrome.cast.media.PlayerState.BUFFERING:
                    break;
                default:
                    (0, _esnextEsmJs.assertNever)(n);
            }
        }), t((0, _esnextEsmJs.fromEvent)(this.params.connection.remotePlayerController, cast.framework.RemotePlayerEventType.VOLUME_LEVEL_CHANGED), (s)=>{
            this.logRemoteEvent(s), this.handleRemoteVolumeChange({
                volume: s.value
            });
        }), t((0, _esnextEsmJs.fromEvent)(this.params.connection.remotePlayerController, cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED), (s)=>{
            this.logRemoteEvent(s), this.handleRemoteVolumeChange({
                muted: s.value
            });
        });
        const i = (0, _esnextEsmJs.merge)(this.params.desiredState.playbackState.stateChangeStarted$, this.params.desiredState.seekState.stateChangeEnded$, this.videoState.stateChangeEnded$, (0, _esnextEsmJs.observableFrom)([
            "init"
        ])).pipe((0, _esnextEsmJs.debounce)(0));
        t(i, this.syncPlayback);
    }
    restoreSession(e) {
        this.log({
            message: "restoreSession"
        });
        const { remotePlayer: t } = this.params.connection;
        if (e.playerState !== chrome.cast.media.PlayerState.IDLE) {
            t.isPaused ? (this.videoState.setState(F.PAUSED), R(this.params.desiredState.playbackState, l.PAUSED)) : (this.videoState.setState(F.PLAYING), R(this.params.desiredState.playbackState, l.PLAYING));
            const i = this.params.output.isLive$.getValue();
            this.params.output.duration$.next(i ? 0 : t.duration), this.params.output.position$.next(i ? 0 : t.currentTime), this.params.desiredState.seekState.setState({
                state: G.None
            });
        }
    }
    prepare() {
        const e = this.params.format;
        this.log({
            message: `[prepare] format: ${e}`
        });
        const t = this.createMediaInfo(e), i = this.createLoadRequest(t);
        this.loadMedia(i);
    }
    handleRemotePause() {
        const e = this.videoState.getState();
        (this.videoState.getTransition()?.to === F.PAUSED || e === F.PLAYING) && (this.videoState.setState(F.PAUSED), R(this.params.desiredState.playbackState, l.PAUSED));
    }
    handleRemotePlay() {
        const e = this.videoState.getState();
        (this.videoState.getTransition()?.to === F.PLAYING || e === F.PAUSED) && (this.videoState.setState(F.PLAYING), R(this.params.desiredState.playbackState, l.PLAYING));
    }
    handleRemoteReady() {
        this.videoState.getTransition()?.to === F.READY && this.videoState.setState(F.READY), this.params.desiredState.playbackState.getTransition()?.to === l.READY && R(this.params.desiredState.playbackState, l.READY);
    }
    handleRemoteStop() {
        this.videoState.getState() !== F.STOPPED && this.videoState.setState(F.STOPPED);
    }
    handleRemoteVolumeChange(e) {
        const t = this.params.output.volume$.getValue(), i = {
            volume: e.volume ?? t.volume,
            muted: e.muted ?? t.muted
        };
        (i.volume !== t.volume || i.muted !== i.muted) && this.params.output.volume$.next(i);
    }
    seek(e) {
        this.params.output.willSeekEvent$.next();
        const { remotePlayer: t, remotePlayerController: i } = this.params.connection;
        t.currentTime = e, i.seek();
    }
    stop() {
        const { remotePlayerController: e } = this.params.connection;
        e.stop();
    }
    createMediaInfo(e) {
        const t = this.params.source;
        let i, s, r;
        switch(e){
            case g.MPEG:
                {
                    const c = t[e];
                    (0, _esnextEsmJs.assertNonNullable)(c);
                    const u = (0, _esnextEsmJs.getHighestQuality)(Object.keys(c));
                    (0, _esnextEsmJs.assertNonNullable)(u);
                    const h = c[u];
                    (0, _esnextEsmJs.assertNonNullable)(h), i = h, s = "video/mp4", r = chrome.cast.media.StreamType.BUFFERED;
                    break;
                }
            case g.HLS:
            case g.HLS_ONDEMAND:
                {
                    const c = t[e];
                    (0, _esnextEsmJs.assertNonNullable)(c), i = c.url, s = "application/x-mpegurl", r = chrome.cast.media.StreamType.BUFFERED;
                    break;
                }
            case g.DASH_SEP:
            case g.DASH_ONDEMAND:
            case g.DASH_WEBM:
            case g.DASH_WEBM_AV1:
                {
                    const c = t[e];
                    (0, _esnextEsmJs.assertNonNullable)(c), i = c.url, s = "application/dash+xml", r = chrome.cast.media.StreamType.BUFFERED;
                    break;
                }
            case g.DASH_LIVE_CMAF:
                {
                    const c = t[e];
                    (0, _esnextEsmJs.assertNonNullable)(c), i = c.url, s = "application/dash+xml", r = chrome.cast.media.StreamType.LIVE;
                    break;
                }
            case g.HLS_LIVE:
            case g.HLS_LIVE_CMAF:
                {
                    const c = t[e];
                    (0, _esnextEsmJs.assertNonNullable)(c), i = Be(c.url), s = "application/x-mpegurl", r = chrome.cast.media.StreamType.LIVE;
                    break;
                }
            case g.DASH_LIVE:
            case g.WEB_RTC_LIVE:
                {
                    const c = "Unsupported format for Chromecast", u = new Error(c);
                    throw this.params.output.error$.next({
                        id: "ChromecastProvider.createMediaInfo()",
                        category: (0, _esnextEsmJs.ErrorCategory).VIDEO_PIPELINE,
                        message: c,
                        thrown: u
                    }), u;
                }
            case g.DASH_LIVE_WEBM:
                throw new Error("DASH_LIVE_WEBM is no longer supported");
            default:
                return (0, _esnextEsmJs.assertNever)(e);
        }
        const n = new chrome.cast.media.MediaInfo(this.params.meta.videoId ?? i, s);
        n.contentUrl = i, n.streamType = r, n.metadata = new chrome.cast.media.GenericMediaMetadata;
        const { title: o, subtitle: d } = this.params.meta;
        return (0, _esnextEsmJs.isNonNullable)(o) && (n.metadata.title = o), (0, _esnextEsmJs.isNonNullable)(d) && (n.metadata.subtitle = d), n;
    }
    createLoadRequest(e) {
        const t = new chrome.cast.media.LoadRequest(e);
        t.autoplay = !1;
        const i = this.params.desiredState.seekState.getState();
        return i.state === G.Applying || i.state === G.Requested ? t.currentTime = this.params.output.isLive$.getValue() ? 0 : i.position / 1e3 : t.currentTime = 0, t;
    }
    loadMedia(e) {
        const t = this.params.connection.session.loadMedia(e), i = new Promise((s, r)=>{
            this.loadMediaTimeoutSubscription.add((0, _esnextEsmJs.timeout)(Oi).subscribe(()=>r(`timeout(${Oi})`)));
        });
        Promise.race([
            t,
            i
        ]).then(()=>{
            this.log({
                message: `[loadMedia] completed, format: ${this.params.format}`
            }), this.params.desiredState.seekState.getState().state === G.Applying && this.params.output.seekedEvent$.next(), this.handleRemoteReady();
        }, (s)=>{
            const r = `[prepare] loadMedia failed, format: ${this.params.format}, reason: ${s}`;
            this.log({
                message: r
            }), this.params.output.error$.next({
                id: "ChromecastProvider.loadMedia",
                category: (0, _esnextEsmJs.ErrorCategory).VIDEO_PIPELINE,
                message: r,
                thrown: s
            });
        }).finally(()=>{
            this.loadMediaTimeoutSubscription.unsubscribe();
        });
    }
    logRemoteEvent(e) {
        this.log({
            message: `[remoteEvent] ${JSON.stringify(e)}`
        });
    }
    syncPlayback = ()=>{
        const e = this.videoState.getState(), t = this.videoState.getTransition(), i = this.params.desiredState.playbackState.getState(), s = this.params.desiredState.playbackState.getTransition(), r = this.params.desiredState.seekState.getState();
        if (this.log({
            message: `[syncPlayback] videoState: ${e}; videoTransition: ${JSON.stringify(t)}; desiredPlaybackState: ${i}; desiredPlaybackStateTransition: ${this.params.desiredState.playbackState.getTransition()}; seekState: ${JSON.stringify(r)};`
        }), i === l.STOPPED) {
            e !== F.STOPPED && (this.videoState.startTransitionTo(F.STOPPED), this.stop());
            return;
        }
        if (!t) {
            if (s?.to !== l.PAUSED && r.state === G.Requested && e !== F.STOPPED) {
                this.seek(r.position / 1e3);
                return;
            }
            switch(i){
                case l.READY:
                    switch(e){
                        case F.PLAYING:
                        case F.PAUSED:
                        case F.READY:
                            break;
                        case F.STOPPED:
                            this.videoState.startTransitionTo(F.READY), this.prepare();
                            break;
                        default:
                            (0, _esnextEsmJs.assertNever)(e);
                    }
                    break;
                case l.PLAYING:
                    switch(e){
                        case F.PLAYING:
                            break;
                        case F.PAUSED:
                            this.videoState.startTransitionTo(F.PLAYING), this.params.connection.remotePlayerController.playOrPause();
                            break;
                        case F.READY:
                            this.videoState.startTransitionTo(F.PLAYING), this.params.connection.remotePlayerController.playOrPause();
                            break;
                        case F.STOPPED:
                            this.videoState.startTransitionTo(F.READY), this.prepare();
                            break;
                        default:
                            (0, _esnextEsmJs.assertNever)(e);
                    }
                    break;
                case l.PAUSED:
                    switch(e){
                        case F.PLAYING:
                            this.videoState.startTransitionTo(F.PAUSED), this.params.connection.remotePlayerController.playOrPause();
                            break;
                        case F.PAUSED:
                            break;
                        case F.READY:
                            this.videoState.startTransitionTo(F.PAUSED), this.videoState.setState(F.PAUSED);
                            break;
                        case F.STOPPED:
                            this.videoState.startTransitionTo(F.READY), this.prepare();
                            break;
                        default:
                            (0, _esnextEsmJs.assertNever)(e);
                    }
                    break;
                default:
                    (0, _esnextEsmJs.assertNever)(i);
            }
        }
    };
}
const xi = (a)=>{
    a.removeAttribute("src"), a.load();
}, Ws = (a)=>{
    try {
        a.pause(), a.playbackRate = 0, xi(a), a.remove();
    } catch (e) {
        console.error(e);
    }
};
class Qs {
    attribute = "data-pool-reused";
    get(e) {
        return e.hasAttribute(this.attribute);
    }
    set(e, t) {
        e.toggleAttribute(this.attribute, t);
    }
    delete(e) {
        e.removeAttribute(this.attribute);
    }
}
const vi = window.WeakMap ? new WeakMap : new Qs, ut = (a)=>{
    let e = a.querySelector("video");
    const t = !!e;
    return e ? xi(e) : (e = document.createElement("video"), a.appendChild(e)), vi.set(e, t), e.setAttribute("crossorigin", "anonymous"), e.setAttribute("playsinline", "playsinline"), e.controls = !1, e.setAttribute("poster", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="), e;
}, ht = (a)=>{
    const e = vi.get(a);
    vi.delete(a), e ? xi(a) : Ws(a);
}, qe = (a, e, t, { equal: i = (n, o)=>n === o, changed$: s, onError: r } = {})=>{
    const n = a.getState(), o = e(), d = (0, _esnextEsmJs.isNullable)(s), c = new (0, _esnextEsmJs.Subscription);
    return s && c.add(s.subscribe((u)=>{
        const h = a.getState();
        i(u, h) && a.setState(u);
    }, r)), i(o, n) || (t(n), d && a.setState(n)), c.add(a.stateChangeStarted$.subscribe((u)=>{
        t(u.to), d && a.setState(u.to);
    }, r)), c;
}, Ft = (a, e, t)=>qe(e, ()=>a.loop, (i)=>{
        (0, _esnextEsmJs.isNonNullable)(i) && (a.loop = i);
    }, {
        onError: t
    }), lt = (a, e, t, i)=>qe(e, ()=>({
            muted: a.muted,
            volume: a.volume
        }), (s)=>{
        (0, _esnextEsmJs.isNonNullable)(s) && (a.muted = s.muted, a.volume = s.volume);
    }, {
        equal: (s, r)=>s === r || s?.muted === r?.muted && s?.volume === r?.volume,
        changed$: t,
        onError: i
    }), kt = (a, e, t, i)=>qe(e, ()=>a.playbackRate, (s)=>{
        (0, _esnextEsmJs.isNonNullable)(s) && (a.playbackRate = s);
    }, {
        changed$: t,
        onError: i
    }), js = (a)=>[
        "__",
        a.language,
        a.label
    ].join("|"), Js = (a, e)=>{
    if (a.id === e) return !0;
    const [t, i, s] = e.split("|");
    return a.language === i && a.label === s;
};
class et {
    available$ = new (0, _esnextEsmJs.Subject);
    current$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    error$ = new (0, _esnextEsmJs.Subject);
    video;
    cueSettings;
    subscription = new (0, _esnextEsmJs.Subscription);
    externalTracks = new Map;
    internalTracks = new Map;
    connect(e, t, i) {
        this.video = e, this.cueSettings = t.textTrackCuesSettings, this.subscribe();
        const s = (r)=>{
            this.error$.next({
                id: "TextTracksManager",
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: "Generic HtmlVideoTextTrackManager error",
                thrown: r
            });
        };
        this.subscription.add(this.available$.subscribe(i.availableTextTracks$)), this.subscription.add(this.current$.subscribe(i.currentTextTrack$)), this.subscription.add(this.error$.subscribe(i.error$)), this.subscription.add(qe(t.internalTextTracks, ()=>Object.values(this.internalTracks), (r)=>{
            (0, _esnextEsmJs.isNonNullable)(r) && this.setInternal(r);
        }, {
            equal: (r, n)=>(0, _esnextEsmJs.isNonNullable)(r) && (0, _esnextEsmJs.isNonNullable)(n) && r.length === n.length && r.every(({ id: o }, d)=>o === n[d].id),
            changed$: this.available$.pipe((0, _esnextEsmJs.map)((r)=>r.filter(({ type: n })=>n === "internal"))),
            onError: s
        })), this.subscription.add(qe(t.externalTextTracks, ()=>Object.values(this.externalTracks), (r)=>{
            (0, _esnextEsmJs.isNonNullable)(r) && this.setExternal(r);
        }, {
            equal: (r, n)=>(0, _esnextEsmJs.isNonNullable)(r) && (0, _esnextEsmJs.isNonNullable)(n) && r.length === n.length && r.every(({ id: o }, d)=>o === n[d].id),
            changed$: this.available$.pipe((0, _esnextEsmJs.map)((r)=>r.filter(({ type: n })=>n === "external"))),
            onError: s
        })), this.subscription.add(qe(t.currentTextTrack, ()=>{
            if (this.video) return;
            const r = this.htmlTextTracksAsArray().find(({ mode: n })=>n === "showing");
            return r && this.htmlTextTrackToITextTrack(r).id;
        }, (r)=>this.select(r), {
            changed$: this.current$,
            onError: s
        })), this.subscription.add(qe(t.textTrackCuesSettings, ()=>({}), ()=>{
            if (this.video) for (const r of this.htmlTextTracksAsArray())this.applyCueSettings(r.cues), this.applyCueSettings(r.activeCues);
        }));
    }
    subscribe() {
        (0, _esnextEsmJs.assertNonNullable)(this.video);
        const { textTracks: e } = this.video;
        this.subscription.add((0, _esnextEsmJs.fromEvent)(e, "addtrack").subscribe(()=>{
            const i = this.current$.getValue();
            i && this.select(i);
        })), this.subscription.add((0, _esnextEsmJs.merge)((0, _esnextEsmJs.fromEvent)(e, "addtrack"), (0, _esnextEsmJs.fromEvent)(e, "removetrack"), (0, _esnextEsmJs.observableFrom)([
            "init"
        ])).pipe((0, _esnextEsmJs.map)(()=>this.htmlTextTracksAsArray().map((i)=>this.htmlTextTrackToITextTrack(i))), (0, _esnextEsmJs.filterChanged)((i, s)=>i.length === s.length && i.every(({ id: r }, n)=>r === s[n].id))).subscribe(this.available$)), this.subscription.add((0, _esnextEsmJs.merge)((0, _esnextEsmJs.fromEvent)(e, "change"), (0, _esnextEsmJs.observableFrom)([
            "init"
        ])).pipe((0, _esnextEsmJs.map)(()=>this.htmlTextTracksAsArray().find(({ mode: i })=>i === "showing")), (0, _esnextEsmJs.map)((i)=>i && this.htmlTextTrackToITextTrack(i).id), (0, _esnextEsmJs.filterChanged)()).subscribe(this.current$));
        const t = (i)=>this.applyCueSettings(i.target?.activeCues ?? null);
        this.subscription.add((0, _esnextEsmJs.fromEvent)(e, "addtrack").subscribe((i)=>{
            i.track?.addEventListener("cuechange", t);
            const s = (r)=>{
                const n = r.target?.cues ?? null;
                n && n.length && (this.applyCueSettings(r.target?.cues ?? null), r.target?.removeEventListener("cuechange", s));
            };
            i.track?.addEventListener("cuechange", s);
        })), this.subscription.add((0, _esnextEsmJs.fromEvent)(e, "removetrack").subscribe((i)=>{
            i.track?.removeEventListener("cuechange", t);
        }));
    }
    applyCueSettings(e) {
        if (!e || !e.length) return;
        const t = this.cueSettings.getState();
        for (const i of Array.from(e)){
            const s = i;
            (0, _esnextEsmJs.isNonNullable)(t.align) && (s.align = t.align), (0, _esnextEsmJs.isNonNullable)(t.position) && (s.position = t.position), (0, _esnextEsmJs.isNonNullable)(t.size) && (s.size = t.size), (0, _esnextEsmJs.isNonNullable)(t.line) && (s.line = t.line);
        }
    }
    htmlTextTracksAsArray(e = !1) {
        (0, _esnextEsmJs.assertNonNullable)(this.video);
        const t = [
            ...this.video.textTracks
        ];
        return e ? t : t.filter(et.isHealthyTrack);
    }
    htmlTextTrackToITextTrack(e) {
        const { language: t, label: i } = e, s = e.id ? e.id : js(e), r = this.externalTracks.has(s), n = s.includes("auto");
        return r ? {
            id: s,
            type: "external",
            isAuto: n,
            language: t,
            label: i,
            url: this.externalTracks.get(s)?.url
        } : {
            id: s,
            type: "internal",
            isAuto: n,
            language: t,
            label: i,
            url: this.internalTracks.get(s)?.url
        };
    }
    static isHealthyTrack(e) {
        return !(e.kind === "metadata" || e.groupId || e.id === "" && e.label === "" && e.language === "");
    }
    setExternal(e) {
        this.internalTracks.size > 0 && Array.from(this.internalTracks).forEach(([, t])=>this.detach(t)), e.filter(({ id: t })=>!this.externalTracks.has(t)).forEach((t)=>this.attach(t)), Array.from(this.externalTracks).filter(([t])=>!e.find((i)=>i.id === t)).forEach(([, t])=>this.detach(t));
    }
    setInternal(e) {
        const t = [
            ...this.externalTracks
        ];
        e.filter(({ id: i, language: s, isAuto: r })=>!this.internalTracks.has(i) && !t.some(([, n])=>n.language === s && n.isAuto === r)).forEach((i)=>this.attach(i)), Array.from(this.internalTracks).filter(([i])=>!e.find((s)=>s.id === i)).forEach(([, i])=>this.detach(i));
    }
    select(e) {
        (0, _esnextEsmJs.assertNonNullable)(this.video);
        for (const t of this.htmlTextTracksAsArray(!0))t.mode = "showing";
        for (const t of this.htmlTextTracksAsArray(!0))((0, _esnextEsmJs.isNullable)(e) || !Js(t, e)) && (t.mode = "disabled");
    }
    destroy() {
        if (this.subscription.unsubscribe(), this.video) for (const e of Array.from(this.video.getElementsByTagName("track"))){
            const t = e.getAttribute("id");
            t && this.externalTracks.has(t) && this.video.removeChild(e);
        }
        this.externalTracks.clear();
    }
    attach(e) {
        (0, _esnextEsmJs.assertNonNullable)(this.video);
        const t = document.createElement("track");
        t.setAttribute("src", e.url), t.setAttribute("id", e.id), e.label && t.setAttribute("label", e.label), e.language && t.setAttribute("srclang", e.language), e.type === "external" ? this.externalTracks.set(e.id, e) : e.type === "internal" && this.internalTracks.set(e.id, e), this.video.appendChild(t);
    }
    detach(e) {
        (0, _esnextEsmJs.assertNonNullable)(this.video);
        const t = Array.prototype.find.call(this.video.getElementsByTagName("track"), (i)=>i.getAttribute("id") === e.id);
        t && this.video.removeChild(t), e.type === "external" ? this.externalTracks.delete(e.id) : e.type === "internal" && this.internalTracks.delete(e.id);
    }
}
class Ci {
    pausedTime = 0;
    streamOffset = 0;
    pauseTimestamp = 0;
    getTotalPausedTime() {
        return this.pausedTime + this.getCurrentPausedTime();
    }
    getCurrentPausedTime() {
        return this.pauseTimestamp > 0 ? Date.now() - this.pauseTimestamp : 0;
    }
    getStreamOffset() {
        return this.streamOffset;
    }
    getTotalOffset() {
        return this.getTotalPausedTime() + this.streamOffset;
    }
    pause() {
        this.pauseTimestamp === 0 && (this.pauseTimestamp = Date.now());
    }
    resume() {
        this.pauseTimestamp > 0 && (this.pausedTime += this.getCurrentPausedTime(), this.pauseTimestamp = 0);
    }
    resetTo(e, t = !1) {
        this.streamOffset = e, this.pauseTimestamp = 0, this.pausedTime = 0, t && this.pause();
    }
}
const cs = (a)=>{
    let e = a;
    for(; !(e instanceof Document) && !(e instanceof ShadowRoot) && e !== null;)e = e?.parentNode;
    return e ?? void 0;
}, Ni = (a)=>{
    const e = cs(a);
    return !!(e && e.fullscreenElement && e.fullscreenElement === a);
}, Xs = (a)=>{
    const e = cs(a);
    return !!(e && e.pictureInPictureElement && e.pictureInPictureElement === a);
}, Ks = 3;
var Zs = (a, e, t = Ks)=>{
    let i = 0, s = 0;
    for(let r = 0; r < a.length; r++){
        const n = a.start(r), o = a.end(r);
        if (n <= e && e <= o) {
            if (i = n, s = o, !t) return {
                from: i,
                to: s
            };
            for(let d = r - 1; d >= 0; d--)a.end(d) + t >= i && (i = a.start(d));
            for(let d = r + 1; d < a.length; d++)a.start(d) - t <= s && (s = a.end(d));
        }
    }
    return {
        from: i,
        to: s
    };
};
const ft = (a)=>{
    const e = (M)=>(0, _esnextEsmJs.fromEvent)(a, M).pipe((0, _esnextEsmJs.mapTo)(void 0)), i = (0, _esnextEsmJs.merge)(...[
        "waiting",
        "pause",
        "canplay",
        "play",
        "canplaythrough",
        "playing",
        "seeking",
        "seeked",
        "ended"
    ].map((M)=>(0, _esnextEsmJs.fromEvent)(a, M))).pipe((0, _esnextEsmJs.map)((M)=>M.type === "ended" ? a.readyState < 2 : a.readyState < 3), (0, _esnextEsmJs.filterChanged)()), s = (0, _esnextEsmJs.merge)((0, _esnextEsmJs.fromEvent)(a, "progress"), (0, _esnextEsmJs.fromEvent)(a, "timeupdate")).pipe((0, _esnextEsmJs.map)(()=>Zs(a.buffered, a.currentTime))), n = (0, _esnextEsmJs.getCurrentBrowser)().browser === (0, _esnextEsmJs.CurrentClientBrowser).Safari ? (0, _esnextEsmJs.combine)({
        play: e("play").pipe((0, _esnextEsmJs.once)()),
        playing: e("playing")
    }).pipe((0, _esnextEsmJs.mapTo)(void 0)) : e("playing"), o = (0, _esnextEsmJs.fromEvent)(a, "volumechange").pipe((0, _esnextEsmJs.map)(()=>({
            muted: a.muted,
            volume: a.volume
        }))), d = (0, _esnextEsmJs.fromEvent)(a, "ratechange").pipe((0, _esnextEsmJs.map)(()=>a.playbackRate)), c = (0, _esnextEsmJs.fromEvent)(a, "error").pipe((0, _esnextEsmJs.filter)(()=>!!(a.error || a.played.length)), (0, _esnextEsmJs.map)(()=>{
        const M = a.error;
        return {
            id: M ? `MediaError#${M.code}` : "HtmlVideoError",
            category: (0, _esnextEsmJs.ErrorCategory).VIDEO_PIPELINE,
            message: M ? M.message : "Error event from HTML video element",
            thrown: a.error ?? void 0
        };
    })), u = (0, _esnextEsmJs.fromEvent)(a, "timeupdate").pipe((0, _esnextEsmJs.map)(()=>a.currentTime)), h = new (0, _esnextEsmJs.Subject), f = .3;
    let p;
    u.subscribe((M)=>{
        a.loop && (0, _esnextEsmJs.isNonNullable)(p) && (0, _esnextEsmJs.isNonNullable)(M) && p >= a.duration - f && M <= f && h.next(p), p = M;
    });
    const S = (0, _esnextEsmJs.fromEvent)(a, "enterpictureinpicture"), $ = (0, _esnextEsmJs.fromEvent)(a, "leavepictureinpicture"), y = new (0, _esnextEsmJs.ValueSubject)(Xs(a));
    S.subscribe(()=>y.next(!0)), $.subscribe(()=>y.next(!1));
    const w = new (0, _esnextEsmJs.ValueSubject)(Ni(a));
    return (0, _esnextEsmJs.fromEvent)(a, "fullscreenchange").pipe((0, _esnextEsmJs.map)(()=>Ni(a))).subscribe(w), {
        playing$: n,
        pause$: e("pause").pipe((0, _esnextEsmJs.filter)(()=>!a.error)),
        canplay$: e("canplay"),
        ended$: e("ended"),
        looped$: h,
        error$: c,
        seeked$: e("seeked"),
        seeking$: e("seeking"),
        progress$: e("progress"),
        loadStart$: e("loadstart"),
        loadedMetadata$: e("loadedmetadata"),
        loadedData$: e("loadeddata"),
        timeUpdate$: u,
        durationChange$: (0, _esnextEsmJs.fromEvent)(a, "durationchange").pipe((0, _esnextEsmJs.map)(()=>a.duration)),
        isBuffering$: i,
        currentBuffer$: s,
        volumeState$: o,
        playbackRateState$: d,
        inPiP$: y,
        inFullscreen$: w
    };
};
var ri = (a)=>{
    switch(a){
        case "mobile":
            return (0, _esnextEsmJs.VideoQuality).Q_144P;
        case "lowest":
            return (0, _esnextEsmJs.VideoQuality).Q_240P;
        case "low":
            return (0, _esnextEsmJs.VideoQuality).Q_360P;
        case "sd":
        case "medium":
            return (0, _esnextEsmJs.VideoQuality).Q_480P;
        case "hd":
        case "high":
            return (0, _esnextEsmJs.VideoQuality).Q_720P;
        case "fullhd":
        case "full":
            return (0, _esnextEsmJs.VideoQuality).Q_1080P;
        case "quadhd":
        case "quad":
            return (0, _esnextEsmJs.VideoQuality).Q_1440P;
        case "ultrahd":
        case "ultra":
            return (0, _esnextEsmJs.VideoQuality).Q_2160P;
    }
};
let Ri = !1, ze = {};
const ea = (a)=>{
    Ri = a;
}, ta = ()=>{
    ze = {};
}, ia = (a)=>{
    a(ze);
}, qt = (a, e)=>{
    Ri && (ze.meta = ze.meta ?? {}, ze.meta[a] = e);
};
class Fe {
    name;
    constructor(e){
        this.name = e;
    }
    next(e) {
        if (!Ri) return;
        ze.series = ze.series ?? {};
        const t = ze.series[this.name] ?? [];
        t.push([
            Date.now(),
            e
        ]), ze.series[this.name] = t;
    }
}
var nt;
(function(a) {
    a.FitsContainer = "FitsContainer", a.FitsThroughput = "FitsThroughput", a.Buffer = "Buffer", a.DroppedFramesLimit = "DroppedFramesLimit", a.FitsQualityLimits = "FitsQualityLimits";
})(nt || (nt = {}));
const sa = new Fe("best_bitrate"), aa = (a, e, t)=>(e - t) * Math.pow(2, -10 * a) + t;
class ra {
    last;
    history = {};
    recordSelection(e) {
        this.history[e.id] = (0, _esnextEsmJs.now)();
    }
    recordSwitch(e) {
        this.last = e;
    }
    clear() {
        this.last = void 0, this.history = {};
    }
}
const na = 'Assertion "ABR Tracks is empty array" failed', ni = (a, { container: e, throughput: t, tuning: i, limits: s, reserve: r = 0, forwardBufferHealth: n, playbackRate: o, current: d, history: c, droppedVideoMaxQualityLimit: u, abrLogger: h })=>{
    (0, _esnextEsmJs.assertNotEmptyArray)(a, na);
    const f = i.usePixelRatio ? window.devicePixelRatio ?? 1 : 1, p = i.limitByContainer && e && e.width > 0 && e.height > 0 && {
        width: e.width * f * i.containerSizeFactor,
        height: e.height * f * i.containerSizeFactor
    }, S = p && (0, _esnextEsmJs.videoSizeToQuality)(p), $ = i.considerPlaybackRate && (0, _esnextEsmJs.isNonNullable)(o) ? o : 1, y = a.filter((D)=>!(0, _esnextEsmJs.isInvariantQuality)(D.quality)).sort((D, I)=>(0, _esnextEsmJs.isHigher)(D.quality, I.quality) ? -1 : 1), w = y.at(-1)?.quality, _ = y.at(0)?.quality, M = (0, _esnextEsmJs.isNullable)(s) || (0, _esnextEsmJs.isNonNullable)(s.min) && (0, _esnextEsmJs.isNonNullable)(s.max) && (0, _esnextEsmJs.isLower)(s.max, s.min) || (0, _esnextEsmJs.isNonNullable)(s.min) && _ && (0, _esnextEsmJs.isHigher)(s.min, _) || (0, _esnextEsmJs.isNonNullable)(s.max) && w && (0, _esnextEsmJs.isLower)(s.max, w), A = $ * aa(n ?? .5, i.bitrateFactorAtEmptyBuffer, i.bitrateFactorAtFullBuffer), L = {}, q = y.filter((D)=>(S ? (0, _esnextEsmJs.isLower)(D.quality, S) : !0) ? ((0, _esnextEsmJs.isNonNullable)(t) && isFinite(t) && (0, _esnextEsmJs.isNonNullable)(D.bitrate) ? t - r >= D.bitrate * A : !0) ? i.lazyQualitySwitch && (0, _esnextEsmJs.isNonNullable)(i.minBufferToSwitchUp) && d && !(0, _esnextEsmJs.isInvariantQuality)(d.quality) && (n ?? 0) < i.minBufferToSwitchUp && (0, _esnextEsmJs.isHigher)(D.quality, d.quality) ? (L[D.quality] = nt.Buffer, !1) : !!u && (0, _esnextEsmJs.isHigherOrEqual)(D.quality, u) ? (L[D.quality] = nt.DroppedFramesLimit, !1) : M || ((0, _esnextEsmJs.isNullable)(s.max) || (0, _esnextEsmJs.isLowerOrEqual)(D.quality, s.max)) && ((0, _esnextEsmJs.isNullable)(s.min) || (0, _esnextEsmJs.isHigherOrEqual)(D.quality, s.min)) ? !0 : (L[D.quality] = nt.FitsQualityLimits, !1) : (L[D.quality] = nt.FitsThroughput, !1) : (L[D.quality] = nt.FitsContainer, !1))[0];
    q && q.bitrate && sa.next(q.bitrate);
    const U = q ?? y[Math.ceil((y.length - 1) / 2)] ?? a[0];
    U.quality !== c?.last?.quality && h({
        message: `
    [available tracks]
	${a.map((D)=>`{ id: ${D.id}, quality: ${D.quality}, bitrate: ${D.bitrate} }`).join(`
	`)}

    [tuning]
	${Object.entries(i ?? {}).map(([D, I])=>`${D}: ${I}`).join(`
	`)}

    [limit params]
    containerQualityLimit: ${S},
    throughput: ${t},
    reserve: ${r},
    playbackRate: ${o},
    playbackRateFactor: ${$},
    forwardBufferHealth: ${n},
    bitrateFactor: ${A},
    minBufferToSwitchUp: ${i.minBufferToSwitchUp},
    droppedVideoMaxQualityLimit: ${u},
    limitsAreInvalid: ${M},
    maxQualityLimit: ${s?.max},
    minQualityLimit: ${s?.min},

    [limited tracks]
    ${Object.entries(L).map(([D, I])=>`${D}: ${I}`).join(`
	`) || "All tracks are available"}

    [best track] ${q?.quality}
    [selected track] ${U?.quality}
    `
    });
    const W = U && c && c.history[U.id] && (0, _esnextEsmJs.now)() - c.history[U.id] <= i.trackCooldown && (!c.last || U.id !== c.last.id);
    if (U?.id && c && !W && c.recordSelection(U), W && c?.last) {
        const D = c.last;
        return c?.recordSwitch(D), h({
            message: `
    [last selected] ${D?.quality}
    `
        }), D;
    }
    return c?.recordSwitch(U), U;
};
var Ye = (a)=>new URL(a).hostname;
const Fi = (a)=>{
    if (a instanceof DOMException && [
        "Failed to load because no supported source was found.",
        "The element has no supported sources."
    ].includes(a.message)) throw a;
    return !(a instanceof DOMException && (a.code === 20 || a.name === "AbortError"));
};
var pt = async (a)=>{
    const e = a.muted;
    try {
        await a.play();
    } catch (t) {
        if (!Fi(t)) return !1;
        if (e) return console.warn(t), !1;
        a.muted = !0;
        try {
            await a.play();
        } catch (i) {
            return Fi(i) && (a.muted = !1, console.warn(i)), !1;
        }
    }
    return !0;
};
function ge() {
    return (0, _esnextEsmJs.now)();
}
function ds(a) {
    return ge() - a;
}
function Vi(a) {
    const e = a.split("/"), t = e.slice(0, e.length - 1).join("/"), i = /^([a-z]+:)?\/\//i, s = (n)=>i.test(n);
    return {
        resolve: (n, o, d = !1)=>{
            s(n) || (n.startsWith("/") || (n = "/" + n), n = t + n);
            let c = n.indexOf("?") > -1 ? "&" : "?";
            return d && (n += c + "lowLat=1", c = "&"), o && (n += c + "_rnd=" + Math.floor(999999999 * Math.random())), n;
        }
    };
}
function oa(a, e, t) {
    const i = (...s)=>{
        t.apply(null, s), a.removeEventListener(e, i);
    };
    a.addEventListener(e, i);
}
function jt(a, e, t, i) {
    const s = window.XMLHttpRequest;
    let r, n, o, d = !1, c = 0, u, h, f = !1, p = "arraybuffer", S = 7e3, $ = 2e3, y = ()=>{
        if (d) return;
        (0, _esnextEsmJs.assertNonNullable)(u);
        const Y = ds(u);
        let oe;
        if (Y < $) {
            oe = $ - Y, setTimeout(y, oe);
            return;
        }
        $ *= 2, $ > S && ($ = S), n && n.abort(), n = new s, J();
    };
    const w = (Y)=>(r = Y, I), _ = (Y)=>(h = Y, I), M = ()=>(p = "json", I), A = ()=>{
        if (!d) {
            if (--c >= 0) {
                y(), i && i();
                return;
            }
            d = !0, h && h(), t && t();
        }
    }, L = (Y)=>(f = Y, I), J = ()=>{
        u = ge(), n = new s, n.open("get", a);
        let Y = 0, oe, le = 0;
        const xe = ()=>((0, _esnextEsmJs.assertNonNullable)(u), Math.max(u, Math.max(oe || 0, le || 0)));
        if (r && n.addEventListener("progress", (B)=>{
            const j = ge();
            r.updateChunk && B.loaded > Y && (r.updateChunk(xe(), B.loaded - Y), Y = B.loaded, oe = j);
        }), o && (n.timeout = o, n.addEventListener("timeout", ()=>A())), n.addEventListener("load", ()=>{
            if (d) return;
            (0, _esnextEsmJs.assertNonNullable)(n);
            const B = n.status;
            if (B >= 200 && B < 300) {
                if (n.response.byteLength && r) {
                    const j = n.response.byteLength - Y;
                    j && r.updateChunk && r.updateChunk(xe(), j);
                }
                n.responseType === "json" && !Object.values(n.response).length ? A() : (h && h(), e(n.response));
            } else A();
        }), n.addEventListener("error", ()=>{
            A();
        }), f) {
            const B = ()=>{
                (0, _esnextEsmJs.assertNonNullable)(n), n.readyState === XMLHttpRequest.HEADERS_RECEIVED && (le = ge(), n.removeEventListener("readystatechange", B));
            };
            n.addEventListener("readystatechange", B);
        }
        return n.responseType = p, n.send(), I;
    }, I = {
        withBitrateReporting: w,
        withParallel: L,
        withJSONResponse: M,
        withRetryCount: (Y)=>(c = Y, I),
        withRetryInterval: (Y, oe)=>((0, _esnextEsmJs.isNonNullable)(Y) && ($ = Y), (0, _esnextEsmJs.isNonNullable)(oe) && (S = oe), I),
        withTimeout: (Y)=>(o = Y, I),
        withFinally: _,
        send: J,
        abort: ()=>{
            n && (n.abort(), n = void 0), d = !0, h && h();
        }
    };
    return I;
}
const ca = 100, da = 2e3, ua = 500;
let ha = class {
    intervals = [];
    currentRate = 0;
    logger;
    constructor(e){
        this.logger = e;
    }
    _updateRate(e) {
        let t = .2;
        this.currentRate && (e < this.currentRate * .1 ? t = .8 : e < this.currentRate * .5 ? t = .5 : e < this.currentRate * .7 && (t = .3)), e = Math.max(1, Math.min(e, 104857600)), this.currentRate = this.currentRate ? this.currentRate * (1 - t) + e * t : e;
    }
    _createInterval(e, t, i) {
        return {
            start: e,
            end: t,
            bytes: i
        };
    }
    _doMergeIntervals(e, t) {
        e.start = Math.min(t.start, e.start), e.end = Math.max(t.end, e.end), e.bytes += t.bytes;
    }
    _mergeIntervals(e, t) {
        return e.start <= t.end && t.start <= e.end ? (this._doMergeIntervals(e, t), !0) : !1;
    }
    _flushIntervals() {
        if (!this.intervals.length) return !1;
        const e = this.intervals[0].start, t = this.intervals[this.intervals.length - 1].end - ua;
        if (t - e > da) {
            let i = 0, s = 0;
            for(; this.intervals.length > 0;){
                const r = this.intervals[0];
                if (r.end <= t) i += r.end - r.start, s += r.bytes, this.intervals.splice(0, 1);
                else {
                    if (r.start >= t) break;
                    {
                        const n = t - r.start, o = r.end - r.start;
                        i += n;
                        const d = r.bytes * n / o;
                        s += d, r.start = t, r.bytes -= d;
                    }
                }
            }
            if (s > 0 && i > 0) {
                const r = s * 8 / (i / 1e3);
                return this._updateRate(r), this.logger(`rate updated, new=${Math.round(r / 1024)}K; average=${Math.round(this.currentRate / 1024)}K bytes/ms=${Math.round(s)}/${Math.round(i)} interval=${Math.round(t - e)}`), !0;
            }
        }
        return !1;
    }
    _joinIntervals() {
        let e;
        do {
            e = !1;
            for(let t = 0; t < this.intervals.length - 1; ++t)this._mergeIntervals(this.intervals[t], this.intervals[t + 1]) && (this.intervals.splice(t + 1, 1), e = !0);
        }while (e);
    }
    addInterval(e, t, i) {
        return this.intervals.push(this._createInterval(e, t, i)), this._joinIntervals(), this.intervals.length > ca && (this.logger(`too many intervals (${this.intervals.length}); will merge`, {
            type: "warn"
        }), this._doMergeIntervals(this.intervals[1], this.intervals[0]), this.intervals.splice(0, 1)), this._flushIntervals();
    }
    getBitRate() {
        return this.currentRate;
    }
};
class la {
    pendingQueue = [];
    activeRequests = {};
    completeRequests = {};
    averageSegmentDuration = 2e3;
    lastPrefetchStart = 0;
    throttleTimeout = null;
    RETRY_COUNT;
    TIMEOUT;
    BITRATE_ESTIMATOR;
    MAX_PARALLEL_REQUESTS;
    logger;
    constructor(e, t, i, s, r){
        this.RETRY_COUNT = e, this.TIMEOUT = t, this.BITRATE_ESTIMATOR = i, this.MAX_PARALLEL_REQUESTS = s, this.logger = r;
    }
    limitCompleteCount() {
        let e;
        for(; (e = Object.keys(this.completeRequests)).length > this._getParallelRequestCount() + 2;){
            const t = e[Math.floor(Math.random() * e.length)];
            this.logger(`Dropping completed request for url ${t}`, {
                type: "warn"
            }), delete this.completeRequests[t];
        }
    }
    _sendRequest(e, t) {
        const i = ge(), s = (d)=>{
            delete this.activeRequests[t], this.limitCompleteCount(), this.completeRequests[t] = e, this._sendPending(), e._error = 1, e._errorMsg = d, e._errorCB ? e._errorCB(d) : (this.limitCompleteCount(), this.completeRequests[t] = e);
        }, r = (d)=>{
            e._complete = 1, e._responseData = d, e._downloadTime = ge() - i, delete this.activeRequests[t], this._sendPending(), e._cb ? e._cb(d, e._downloadTime) : (this.limitCompleteCount(), this.completeRequests[t] = e);
        }, n = ()=>{
            e._finallyCB && e._finallyCB();
        }, o = ()=>{
            e._retry = 1, e._retryCB && e._retryCB();
        };
        e._request = jt(t, r, ()=>s("error"), o), e._request.withRetryCount(this.RETRY_COUNT).withTimeout(this.TIMEOUT).withBitrateReporting(this.BITRATE_ESTIMATOR).withParallel(this._getParallelRequestCount() > 1).withFinally(n), this.activeRequests[t] = e, e._request.send(), this.lastPrefetchStart = ge();
    }
    _getParallelRequestCount() {
        return Math.min(this.MAX_PARALLEL_REQUESTS, this.averageSegmentDuration < 3e3 ? 3 : 2);
    }
    _getPrefetchDelay() {
        return Math.max(100, Math.min(5e3, this.averageSegmentDuration / 3));
    }
    _canSendPending() {
        const e = this._getParallelRequestCount(), t = ge();
        if (Object.keys(this.activeRequests).length >= e) return !1;
        const i = this._getPrefetchDelay() - (t - this.lastPrefetchStart);
        return this.throttleTimeout && clearTimeout(this.throttleTimeout), i > 0 ? (this.throttleTimeout = window.setTimeout(()=>this._sendPending(), i), !1) : !0;
    }
    _sendPending() {
        for(; this._canSendPending();){
            const e = this.pendingQueue.pop();
            if (e) {
                if (this.activeRequests[e] || this.completeRequests[e]) continue;
                this.logger(`Submitting pending request url=${e}`), this._sendRequest({}, e);
            } else return;
        }
    }
    _removeFromActive(e) {
        delete this.completeRequests[e], delete this.activeRequests[e];
    }
    abortAll() {
        Object.values(this.activeRequests).forEach((e)=>{
            e && e._request && e._request.abort();
        }), this.activeRequests = {}, this.pendingQueue = [], this.completeRequests = {};
    }
    requestData(e, t, i, s) {
        const r = {};
        return r.send = ()=>{
            const n = this.activeRequests[e] || this.completeRequests[e];
            if (n) n._cb = t, n._errorCB = i, n._retryCB = s, n._finallyCB = r._finallyCB, n._error || n._complete ? (this._removeFromActive(e), setTimeout(()=>{
                n._complete ? (this.logger(`Requested url already prefetched, url=${e}`), t(n._responseData, n._downloadTime)) : (this.logger(`Requested url already prefetched with error, url=${e}`), i(n._errorMsg)), r._finallyCB && r._finallyCB();
            }, 0)) : this.logger(`Attached to active request, url=${e}`);
            else {
                const o = this.pendingQueue.indexOf(e);
                o !== -1 && this.pendingQueue.splice(o, 1), this.logger(`Request not prefetched, starting new request, url=${e}${o === -1 ? "" : "; removed pending"}`), this._sendRequest(r, e);
            }
        }, r._cb = t, r._errorCB = i, r._retryCB = s, r.abort = function() {
            r.request && r.request.abort();
        }, r.withFinally = (n)=>(r._finallyCB = n, r), r;
    }
    prefetch(e) {
        this.activeRequests[e] || this.completeRequests[e] ? this.logger(`Request already active for url=${e}`) : (this.logger(`Added to pending queue; url=${e}`), this.pendingQueue.unshift(e), this._sendPending());
    }
    optimizeForSegDuration(e) {
        this.averageSegmentDuration = e;
    }
}
const zt = 1e4, gi = 3, fa = 6e4, pa = 10, ma = 1, ga = 500;
class Sa {
    paused = !1;
    autoQuality = !0;
    maxAutoQuality = void 0;
    buffering = !0;
    destroyed = !1;
    videoPlayStarted = !1;
    lowLatency = !1;
    rep;
    bitrate = 0;
    manifest = [];
    bitrateSwitcher;
    filesFetcher;
    sourceBuffer = 0;
    mediaSource;
    currentManifestEntry;
    manifestRequest;
    manifestRefetchTimer;
    bufferStates = [];
    downloadRate;
    sourceJitter = -1;
    chunkRateEstimator;
    manifestUrl;
    urlResolver;
    params;
    constructor(e){
        this.params = e, this.chunkRateEstimator = new ha(this.params.logger), this._initVideo();
    }
    attachSource(e) {
        this.manifestUrl = e, this.urlResolver = Vi(e), this.bitrateSwitcher = this._initBitrateSwitcher(), this._initManifest();
    }
    setAutoQualityEnabled(e) {
        this.autoQuality = e;
    }
    setMaxAutoQuality(e) {
        this.maxAutoQuality = e;
    }
    switchByName(e) {
        let t;
        for(let i = 0; i < this.manifest.length; ++i)if (t = this.manifest[i], t.name === e) {
            this._switchToQuality(t);
            return;
        }
    }
    catchUp() {
        this.rep && this.rep.stop(), this.currentManifestEntry && (this.paused = !1, this._initPlayerWith(this.currentManifestEntry), this._notifyBuffering(!0));
    }
    stop() {
        this.params.videoElement.pause(), this.rep && (this.rep.stop(), this.rep = null);
    }
    pause() {
        this.paused = !0, this.params.videoElement.pause(), this.videoPlayStarted = !1, this._notifyBuffering(!1);
    }
    play(e) {
        this.paused = !1;
        const t = this.lowLatency && this._getBufferSizeSec() > this.sourceJitter + 5;
        this.rep && !t ? (this.bufferStates = [], this.videoPlayStarted = !1, this.shouldPlay() ? this._playVideoElement(e) : this._notifyBuffering(!0)) : this.catchUp();
    }
    startPlay(e, t) {
        this.autoQuality = t, this._initPlayerWith(e);
    }
    destroy() {
        this.destroyed = !0, this.rep && (this.rep.stop(), this.rep = null), this.manifestRequest && this.manifestRequest.abort(), this.manifestRefetchTimer && (clearTimeout(this.manifestRefetchTimer), this.manifestRefetchTimer = void 0);
    }
    reinit(e) {
        this.manifestUrl = e, this.urlResolver = Vi(e), this.catchUp();
    }
    _handleNetworkError() {
        this.params.logger("Fatal network error"), this.params.playerCallback({
            name: "error",
            type: "network"
        });
    }
    _retryCallback() {
        this.params.playerCallback({
            name: "retry"
        });
    }
    _getBufferSizeSec() {
        const e = this.params.videoElement;
        let t = 0;
        const i = e.buffered.length;
        return i !== 0 && (t = e.buffered.end(i - 1) - Math.max(e.currentTime, e.buffered.start(0))), t;
    }
    _notifyBuffering(e) {
        this.destroyed || (this.params.logger(`buffering: ${e}`), this.params.playerCallback({
            name: "buffering",
            isBuffering: e
        }), this.buffering = e);
    }
    _initVideo() {
        const { videoElement: e, logger: t } = this.params;
        e.addEventListener("error", ()=>{
            !!e.error && !this.destroyed && (t(`Video element error: ${e.error?.code}`), this.params.playerCallback({
                name: "error",
                type: "media"
            }));
        }), e.addEventListener("timeupdate", ()=>{
            const i = this._getBufferSizeSec();
            !this.paused && i < .3 ? this.buffering || (this.buffering = !0, window.setTimeout(()=>{
                !this.paused && this.buffering && this._notifyBuffering(!0);
            }, (i + .1) * 1e3)) : this.buffering && this.videoPlayStarted && this._notifyBuffering(!1);
        }), e.addEventListener("playing", ()=>{
            t("playing");
        }), e.addEventListener("stalled", ()=>this._fixupStall()), e.addEventListener("waiting", ()=>this._fixupStall());
    }
    _fixupStall() {
        const { logger: e, videoElement: t } = this.params, i = t.buffered.length;
        let s;
        i !== 0 && (s = t.buffered.start(i - 1), t.currentTime < s && (e("Fixup stall"), t.currentTime = s));
    }
    _selectQuality(e) {
        const { videoElement: t } = this.params;
        let i, s, r;
        const n = t && 1.62 * (window.devicePixelRatio || 1) * t.offsetHeight || 520;
        for(let o = 0; o < this.manifest.length; ++o)r = this.manifest[o], !(this.maxAutoQuality && r.video.height > this.maxAutoQuality) && (r.bitrate < e && n > Math.min(r.video.height, r.video.width) ? (!s || r.bitrate > s.bitrate) && (s = r) : (!i || i.bitrate > r.bitrate) && (i = r));
        return s || i;
    }
    shouldPlay() {
        if (this.paused) return !1;
        const t = this._getBufferSizeSec() - Math.max(1, this.sourceJitter);
        return t > 3 || (0, _esnextEsmJs.isNonNullable)(this.downloadRate) && (this.downloadRate > 1.5 && t > 2 || this.downloadRate > 2 && t > 1);
    }
    _setVideoSrc(e, t) {
        const { logger: i, videoElement: s, playerCallback: r } = this.params;
        this.mediaSource = new window.MediaSource, i("setting video src"), s.src = URL.createObjectURL(this.mediaSource), this.mediaSource.addEventListener("sourceopen", ()=>{
            this.mediaSource && (this.sourceBuffer = this.mediaSource.addSourceBuffer(e.codecs), this.bufferStates = [], t());
        }), this.videoPlayStarted = !1, s.addEventListener("canplay", ()=>{
            this.shouldPlay() && (this.videoPlayStarted = !0, this._playVideoElement());
        });
        const n = ()=>{
            oa(s, "progress", ()=>{
                s.buffered.length ? (s.currentTime = s.buffered.start(0), r({
                    name: "playing"
                })) : n();
            });
        };
        n();
    }
    _initPlayerWith(e) {
        this.bitrate = 0, this.rep = 0, this.sourceBuffer = 0, this.bufferStates = [], this.filesFetcher && this.filesFetcher.abortAll(), this.filesFetcher = new la(gi, zt, this.bitrateSwitcher, this.params.config.maxParallelRequests, this.params.logger), this._setVideoSrc(e, ()=>this._switchToQuality(e));
    }
    _representation(e) {
        const { logger: t, videoElement: i, playerCallback: s } = this.params;
        let r = !1, n = null, o = null, d = null, c = null, u = !1;
        const h = ()=>{
            const A = r && (!u || u === this.rep);
            return A || t("Not running!"), A;
        }, f = (A, L, J)=>{
            d && d.abort(), d = jt(this.urlResolver.resolve(A, !1), L, J, ()=>this._retryCallback()).withTimeout(zt).withBitrateReporting(this.bitrateSwitcher).withRetryCount(gi).withFinally(()=>{
                d = null;
            }).send();
        }, p = (A, L, J)=>{
            (0, _esnextEsmJs.assertNonNullable)(this.filesFetcher), o?.abort(), o = this.filesFetcher.requestData(this.urlResolver.resolve(A, !1), L, J, ()=>this._retryCallback()).withFinally(()=>{
                o = null;
            }).send();
        }, S = (A)=>{
            const L = i.playbackRate;
            i.playbackRate !== A && (t(`Playback rate switch: ${L}=>${A}`), i.playbackRate = A);
        }, $ = (A)=>{
            this.lowLatency = A, t(`lowLatency changed to ${A}`), y();
        }, y = ()=>{
            if (!this.lowLatency && !this.params.config.isLiveCatchUpMode) S(1);
            else {
                let A = this._getBufferSizeSec();
                if (this.bufferStates.length < 5) {
                    S(1);
                    return;
                }
                const J = ge() - 1e4;
                let q = 0;
                for(let W = 0; W < this.bufferStates.length; W++){
                    const D = this.bufferStates[W];
                    A = Math.min(A, D.buf), D.ts < J && q++;
                }
                this.bufferStates.splice(0, q), t(`update playback rate;  minBuffer=${A} drop=${q} jitter=${this.sourceJitter}`);
                let U = A - ma;
                this.sourceJitter >= 0 ? U -= this.sourceJitter / 2 : this.sourceJitter -= 1, U > 3 ? S(1.15) : U > 1 ? S(1.1) : U > .3 ? S(1.05) : S(1);
            }
        }, w = (A)=>{
            let L;
            const J = ()=>L && L.start ? L.start.length : 0, q = (B)=>L.start[B] / 1e3, U = (B)=>L.dur[B] / 1e3, W = (B)=>L.fragIndex + B, D = (B, j)=>({
                    chunkIdx: W(B),
                    startTS: q(B),
                    dur: U(B),
                    discontinuity: j
                }), I = ()=>{
                let B = 0;
                if (L && L.dur) {
                    let j = this.lowLatency ? this.params.config.lowLatencyMinBuffer : this.params.config.minBuffer, de = this.lowLatency ? this.params.config.lowLatencyMinBufferSegments : this.params.config.minBufferSegments, ue = j;
                    this.sourceJitter > 1 && (ue += this.sourceJitter - 1);
                    let ye = L.dur.length - 1;
                    for(; ye >= 0 && (ue -= L.dur[ye], !(ue <= 0)); --ye);
                    B = Math.min(ye, L.dur.length - 1 - de), B = Math.max(B, 0);
                }
                return D(B, !0);
            }, Y = (B)=>{
                const j = J();
                if (!(j <= 0)) {
                    if ((0, _esnextEsmJs.isNonNullable)(B)) {
                        for(let de = 0; de < j; de++)if (q(de) > B) return D(de);
                    }
                    return I();
                }
            }, oe = (B)=>{
                const j = J(), de = B ? B.chunkIdx + 1 : 0, ue = de - L.fragIndex;
                if (!(j <= 0)) {
                    if (!B || ue < 0 || ue - j > pa) return t(`Resync: offset=${ue} bChunks=${j} chunk=` + JSON.stringify(B)), I();
                    if (!(ue >= j)) return D(de - L.fragIndex, !1);
                }
            }, le = (B, j, de)=>{
                c && c.abort(), c = jt(this.urlResolver.resolve(B, !0, this.lowLatency), j, de, ()=>this._retryCallback()).withTimeout(zt).withRetryCount(gi).withFinally(()=>{
                    c = null;
                }).withJSONResponse().send();
            };
            return {
                seek: (B, j)=>{
                    le(A, (de)=>{
                        if (!h()) return;
                        L = de;
                        const ue = !!L.lowLatency;
                        ue !== this.lowLatency && $(ue);
                        let ye = 0;
                        for(let je = 0; je < L.dur.length; ++je)ye += L.dur[je];
                        ye > 0 && ((0, _esnextEsmJs.assertNonNullable)(this.filesFetcher), this.filesFetcher.optimizeForSegDuration(ye / L.dur.length)), s({
                            name: "index",
                            zeroTime: L.zeroTime,
                            shiftDuration: L.shiftDuration
                        }), this.sourceJitter = L.hasOwnProperty("jitter") ? Math.min(10, Math.max(.01, L.jitter / 1e3)) : 1, B(Y(j));
                    }, ()=>this._handleNetworkError());
                },
                nextChunk: oe
            };
        }, _ = ()=>{
            r = !1, o && o.abort(), d && d.abort(), c && c.abort(), (0, _esnextEsmJs.assertNonNullable)(this.filesFetcher), this.filesFetcher.abortAll();
        };
        return u = {
            start: (A)=>{
                const { videoElement: L, logger: J } = this.params;
                let q = w(e.jidxUrl), U, W, D, I, Y = 0, oe, le, xe;
                const B = ()=>{
                    oe && (clearTimeout(oe), oe = void 0);
                    const X = Math.max(ga, 1e3 * (this._getBufferSizeSec() - this.sourceJitter - 5)), Te = Y + X, ve = ge(), Ce = Math.min(1e4, Te - ve);
                    Y = ve;
                    const Ge = ()=>{
                        c || h() && q.seek(()=>{
                            h() && (Y = ge(), j(), B());
                        });
                    };
                    Ce > 0 ? oe = window.setTimeout(()=>{
                        this.paused ? B() : Ge();
                    }, Ce) : Ge();
                }, j = ()=>{
                    let X;
                    for(; X = q.nextChunk(I);)I = X, di(X);
                    const Te = q.nextChunk(D);
                    if (Te) {
                        if (D && Te.discontinuity) {
                            J("Detected discontinuity; restarting playback"), this.paused ? B() : (_(), this._initPlayerWith(e));
                            return;
                        }
                        je(Te);
                    } else B();
                }, de = (X, Te)=>{
                    if (!h() || !this.sourceBuffer) return;
                    let ve, Ce, Ge;
                    const $t = (Ee)=>{
                        window.setTimeout(()=>{
                            h() && de(X, Te);
                        }, Ee);
                    };
                    if (this.sourceBuffer.updating) J("Source buffer is updating; delaying appendBuffer"), $t(100);
                    else {
                        const Ee = ge(), Je = L.currentTime;
                        !this.paused && L.buffered.length > 1 && le === Je && Ee - xe > 500 && (J("Stall suspected; trying to fix"), this._fixupStall()), le !== Je && (le = Je, xe = Ee);
                        const Re = this._getBufferSizeSec();
                        if (Re > 30) J(`Buffered ${Re} seconds; delaying appendBuffer`), $t(2e3);
                        else try {
                            this.sourceBuffer.appendBuffer(X), this.videoPlayStarted ? (this.bufferStates.push({
                                ts: Ee,
                                buf: Re
                            }), y(), this.bufferStates.length > 200 && this.bufferStates.shift()) : this.shouldPlay() && (this.videoPlayStarted = !0, this._playVideoElement()), Te && Te();
                        } catch (Me) {
                            if (Me.name === "QuotaExceededError") J("QuotaExceededError; delaying appendBuffer"), Ge = this.sourceBuffer.buffered.length, Ge !== 0 && (ve = this.sourceBuffer.buffered.start(0), Ce = Je, Ce - ve > 4 && this.sourceBuffer.remove(ve, Ce - 3)), $t(1e3);
                            else throw Me;
                        }
                    }
                }, ue = ()=>{
                    W && U && (J([
                        `Appending chunk, sz=${W.byteLength}:`,
                        JSON.stringify(D)
                    ]), de(W, function() {
                        W = null, j();
                    }));
                }, ye = (X)=>e.fragUrlTemplate.replace("%%id%%", X.chunkIdx), je = (X)=>{
                    h() && p(ye(X), (Te, ve)=>{
                        if (h()) {
                            if (ve /= 1e3, W = Te, D = X, n = X.startTS, ve) {
                                const Ce = Math.min(10, X.dur / ve);
                                this.downloadRate = this.downloadRate ? 0.7 * this.downloadRate + .3 * Ce : Ce;
                            }
                            ue();
                        }
                    }, ()=>this._handleNetworkError());
                }, di = (X)=>{
                    h() && ((0, _esnextEsmJs.assertNonNullable)(this.filesFetcher), this.filesFetcher.prefetch(this.urlResolver.resolve(ye(X), !1)));
                }, Vt = (X)=>{
                    h() && (e.cachedHeader = X, de(X, ()=>{
                        U = !0, ue();
                    }));
                };
                r = !0, q.seek((X)=>{
                    if (h()) {
                        if (Y = ge(), !X) {
                            B();
                            return;
                        }
                        I = X, !(0, _esnextEsmJs.isNullable)(A) || X.startTS > A ? je(X) : (D = X, j());
                    }
                }, A), e.cachedHeader ? Vt(e.cachedHeader) : f(e.headerUrl, Vt, ()=>this._handleNetworkError());
            },
            stop: _,
            getTimestampSec: ()=>n
        }, u;
    }
    _switchToQuality(e) {
        const { logger: t, playerCallback: i } = this.params;
        let s;
        e.bitrate !== this.bitrate && (this.rep && (s = this.rep.getTimestampSec(), (0, _esnextEsmJs.isNonNullable)(s) && (s += .1), this.rep.stop()), this.currentManifestEntry = e, this.rep = this._representation(e), t(`switch to quality: codecs=${e.codecs}; headerUrl=${e.headerUrl}; bitrate=${e.bitrate}`), this.bitrate = e.bitrate, (0, _esnextEsmJs.assertNonNullable)(this.bitrateSwitcher), this.bitrateSwitcher.notifySwitch(this.bitrate), this.rep.start(s), i({
            name: "qualitySwitch",
            quality: e
        }));
    }
    _qualityAvailable(e) {
        return (0, _esnextEsmJs.isNonNullable)(this.manifest.find((t)=>t.name === e));
    }
    _initBitrateSwitcher() {
        const { logger: e, playerCallback: t } = this.params, i = (h)=>{
            if (!this.autoQuality) return;
            let f, p, S;
            if (this.currentManifestEntry && this._qualityAvailable(this.currentManifestEntry.name) && h < this.bitrate && (p = this._getBufferSizeSec(), S = h / this.bitrate, p > 10 && S > .8 || p > 15 && S > .5 || p > 20 && S > .3)) {
                e(`Not switching: buffer=${Math.floor(p)}; bitrate=${this.bitrate}; newRate=${Math.floor(h)}`);
                return;
            }
            f = this._selectQuality(h), f ? this._switchToQuality(f) : e(`Could not find quality by bitrate ${h}`);
        }, r = (()=>({
                updateChunk: (f, p)=>{
                    const S = ge();
                    if (this.chunkRateEstimator.addInterval(f, S, p)) {
                        const y = this.chunkRateEstimator.getBitRate();
                        return t({
                            name: "bandwidth",
                            size: p,
                            duration: S - f,
                            speed: y
                        }), !0;
                    }
                },
                get: ()=>{
                    const f = this.chunkRateEstimator.getBitRate();
                    return f ? f * .85 : 0;
                }
            }))();
        let n = -1 / 0, o, d = !0;
        const c = ()=>{
            let h = r.get();
            if (h && o && this.autoQuality) {
                if (d && h > o && ds(n) < 3e4) return;
                i(h);
            }
            d = this.autoQuality;
        };
        return {
            updateChunk: (h, f)=>{
                const p = r.updateChunk(h, f);
                return p && c(), p;
            },
            notifySwitch: (h)=>{
                const f = ge();
                h < o && (n = f), o = h;
            }
        };
    }
    _fetchManifest(e, t, i) {
        this.manifestRequest = jt(this.urlResolver.resolve(e, !0), t, i, ()=>this._retryCallback()).withJSONResponse().withTimeout(zt).withRetryCount(this.params.config.manifestRetryMaxCount).withRetryInterval(this.params.config.manifestRetryInterval, this.params.config.manifestRetryMaxInterval).send().withFinally(()=>{
            this.manifestRequest = void 0;
        });
    }
    _playVideoElement(e) {
        const { videoElement: t } = this.params;
        pt(t).then((i)=>{
            i || e?.();
        });
    }
    _handleManifestUpdate(e) {
        const { logger: t, playerCallback: i, videoElement: s } = this.params, r = (n)=>{
            const o = [];
            return n?.length ? (n.forEach((d, c)=>{
                d.video && s.canPlayType(d.codecs).replace(/no/, "") && window.MediaSource.isTypeSupported(d.codecs) && (d.index = c, o.push(d));
            }), o.sort(function(d, c) {
                return d.video && c.video ? c.video.height - d.video.height : c.bitrate - d.bitrate;
            }), o) : (i({
                name: "error",
                type: "empty_manifest"
            }), []);
        };
        this.manifest = r(e), t(`Valid manifest entries: ${this.manifest.length}/${e.length}`), i({
            name: "manifest",
            manifest: this.manifest
        });
    }
    _refetchManifest(e) {
        this.destroyed || (this.manifestRefetchTimer && clearTimeout(this.manifestRefetchTimer), this.manifestRefetchTimer = window.setTimeout(()=>{
            this._fetchManifest(e, (t)=>{
                this.destroyed || (this._handleManifestUpdate(t), this._refetchManifest(e));
            }, ()=>this._refetchManifest(e));
        }, fa));
    }
    _initManifest() {
        this._fetchManifest(this.manifestUrl, (e)=>{
            this.destroyed || (this._handleManifestUpdate(e), this._refetchManifest(this.manifestUrl));
        }, ()=>this._handleNetworkError());
    }
}
class us {
    onDroopedVideoFramesLimit$ = new (0, _esnextEsmJs.Subject);
    subscription = new (0, _esnextEsmJs.Subscription);
    log;
    video;
    droppedFramesChecker;
    isAuto;
    playing = !1;
    tracks = [];
    forceChecker$ = new (0, _esnextEsmJs.Subject);
    isForceCheckCounter = 0;
    prevTotalVideoFrames = 0;
    prevDroppedVideoFrames = 0;
    currentTimer;
    limitCounts = {};
    currentQuality;
    maxQualityLimit;
    connect(e) {
        this.log = e.logger.createComponentLog("DroppedFramesManager"), this.video = e.video, this.isAuto = e.isAuto, this.droppedFramesChecker = e.droppedFramesChecker, this.subscription.add(e.playing$.subscribe(()=>this.playing = !0)), this.subscription.add(e.pause$.subscribe(()=>this.playing = !1)), this.subscription.add(e.tracks$.subscribe((t)=>this.tracks = t)), this.isEnabled && this.subscribe();
    }
    destroy() {
        this.currentTimer && window.clearTimeout(this.currentTimer), this.subscription.unsubscribe();
    }
    get droppedVideoMaxQualityLimit() {
        return this.maxQualityLimit;
    }
    subscribe() {
        this.subscription.add((0, _esnextEsmJs.fromEvent)(this.video, "resize").subscribe(this.handleChangeVideoQuality));
        const e = (0, _esnextEsmJs.interval)(this.droppedFramesChecker.checkTime).pipe((0, _esnextEsmJs.filter)(()=>this.playing), (0, _esnextEsmJs.filter)(()=>{
            const s = !!this.isForceCheckCounter;
            return s && (this.isForceCheckCounter -= 1), !s;
        })), t = this.forceChecker$.pipe((0, _esnextEsmJs.debounce)(this.droppedFramesChecker.checkTime)), i = (0, _esnextEsmJs.merge)(e, t);
        this.subscription.add(i.subscribe(this.checkDroppedFrames));
    }
    handleChangeVideoQuality = ()=>{
        const e = this.tracks.find(({ size: t })=>t?.height === this.video.videoHeight && t?.width === this.video.videoWidth);
        e && !(0, _esnextEsmJs.isInvariantQuality)(e.quality) && this.onChangeQuality(e.quality);
    };
    onChangeQuality(e) {
        this.currentQuality = e;
        const { totalVideoFrames: t, droppedVideoFrames: i } = this.video.getVideoPlaybackQuality();
        this.savePrevFrameCounts(t, i), this.isForceCheckCounter = this.droppedFramesChecker.tickCountAfterQualityChange, this.forceChecker$.next();
    }
    checkDroppedFrames = ()=>{
        const { totalVideoFrames: e, droppedVideoFrames: t } = this.video.getVideoPlaybackQuality(), i = e - this.prevTotalVideoFrames, s = t - this.prevDroppedVideoFrames, r = 1 - (i - s) / i;
        !isNaN(r) && r > 0 && this.log({
            message: `[dropped]. current dropped percent: ${r}, limit: ${this.droppedFramesChecker.percentLimit}`
        }), !isNaN(r) && r >= this.droppedFramesChecker.percentLimit && (0, _esnextEsmJs.isHigher)(this.currentQuality, this.droppedFramesChecker.minQualityBanLimit) && (this.limitCounts[this.currentQuality] = (this.limitCounts[this.currentQuality] ?? 0) + 1, this.maxQualityLimit = this.getMaxQualityLimit(this.currentQuality), this.currentTimer && window.clearTimeout(this.currentTimer), this.currentTimer = window.setTimeout(()=>this.maxQualityLimit = this.getMaxQualityLimit(), this.droppedFramesChecker.qualityUpWaitingTime), this.onDroopedVideoFramesLimitTrigger()), this.savePrevFrameCounts(e, t);
    };
    onDroopedVideoFramesLimitTrigger() {
        this.isAuto.getState() && (this.log({
            message: `[onDroopedVideoFramesLimit]. maxQualityLimit: ${this.maxQualityLimit}`
        }), this.onDroopedVideoFramesLimit$.next());
    }
    getMaxQualityLimit(e) {
        const t = Object.entries(this.limitCounts).filter(([, i])=>i >= this.droppedFramesChecker.countLimit).sort(([i], [s])=>(0, _esnextEsmJs.isLower)(i, s) ? -1 : 1)?.[0]?.[0];
        return e ?? t;
    }
    get isEnabled() {
        return this.droppedFramesChecker.enabled && this.isDroppedFramesCheckerSupport;
    }
    get isDroppedFramesCheckerSupport() {
        return !!this.video && typeof this.video.getVideoPlaybackQuality == "function";
    }
    savePrevFrameCounts(e, t) {
        this.prevTotalVideoFrames = e, this.prevDroppedVideoFrames = t;
    }
}
var V;
(function(a) {
    a.STOPPED = "stopped", a.MANIFEST_READY = "manifest_ready", a.READY = "ready", a.PLAYING = "playing", a.PAUSED = "paused";
})(V || (V = {}));
const ba = [
    V.PAUSED,
    V.PLAYING,
    V.READY
], ya = [
    V.PAUSED,
    V.PLAYING,
    V.READY
];
class Ta {
    subscription = new (0, _esnextEsmJs.Subscription);
    video;
    videoState = new re(V.STOPPED);
    dash;
    representations$ = new (0, _esnextEsmJs.ValueSubject)([]);
    textTracksManager = new et;
    droppedFramesManager = new us;
    maxSeekBackTime$ = new (0, _esnextEsmJs.ValueSubject)(1 / 0);
    zeroTime$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    liveOffset = new Ci;
    log;
    params;
    constructor(e){
        this.params = e, this.log = this.params.dependencies.logger.createComponentLog("DashLiveProvider");
        const t = (s)=>{
            e.output.error$.next({
                id: "DashLiveProvider",
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: "DashLiveProvider internal logic error",
                thrown: s
            });
        };
        (0, _esnextEsmJs.merge)(this.videoState.stateChangeStarted$.pipe((0, _esnextEsmJs.map)((s)=>({
                transition: s,
                type: "start"
            }))), this.videoState.stateChangeEnded$.pipe((0, _esnextEsmJs.map)((s)=>({
                transition: s,
                type: "end"
            })))).subscribe(({ transition: s, type: r })=>{
            this.log({
                message: `[videoState change] ${r}: ${JSON.stringify(s)}`
            });
        }), this.video = ut(e.container), this.params.output.element$.next(this.video), this.dash = this.createLiveDashPlayer(), this.params.output.duration$.next(1 / 0), this.params.output.position$.next(0), this.params.output.isLive$.next(!0), this.params.output.canChangePlaybackSpeed$.next(!1), this.params.output.hostname$.next(Ye(this.params.source.url)), this.params.output.autoVideoTrackLimitingAvailable$.next(!0), this.params.output.availableVideoTracks$.next([]), this.params.output.availableAudioTracks$.next([]), this.params.output.isAudioAvailable$.next(!0), this.textTracksManager.connect(this.video, this.params.desiredState, this.params.output);
        const i = ft(this.video);
        this.droppedFramesManager.connect({
            logger: this.params.dependencies.logger,
            video: this.video,
            droppedFramesChecker: this.params.tuning.droppedFramesChecker,
            isAuto: this.params.desiredState.autoVideoTrackSwitching,
            playing$: i.playing$,
            pause$: i.pause$,
            tracks$: this.representations$.pipe((0, _esnextEsmJs.map)((s)=>s.map(({ track: r })=>r)))
        }), this.subscription.add(i.canplay$.subscribe(()=>{
            this.videoState.getTransition()?.to === V.READY && this.videoState.setState(V.READY);
        }, t)).add(i.pause$.subscribe(()=>{
            this.videoState.setState(V.PAUSED);
        }, t)).add(i.playing$.subscribe(()=>{
            this.params.desiredState.seekState.getState().state === G.Applying && this.params.output.seekedEvent$.next(), this.videoState.setState(V.PLAYING);
        }, t)).add(i.error$.subscribe(this.params.output.error$)).add(this.maxSeekBackTime$.pipe((0, _esnextEsmJs.filterChanged)(), (0, _esnextEsmJs.map)((s)=>-s / 1e3)).subscribe(this.params.output.duration$)).add((0, _esnextEsmJs.combine)({
            zeroTime: this.zeroTime$.pipe((0, _esnextEsmJs.filter)((0, _esnextEsmJs.isNonNullable))),
            position: i.timeUpdate$
        }).subscribe(({ zeroTime: s, position: r })=>this.params.output.liveTime$.next(s + r * 1e3), t)).add(Ft(this.video, this.params.desiredState.isLooped, t)).add(lt(this.video, this.params.desiredState.volume, i.volumeState$, t)).add(i.volumeState$.subscribe(this.params.output.volume$, t)).add(kt(this.video, this.params.desiredState.playbackRate, i.playbackRateState$, t)).add(i.loadStart$.subscribe(this.params.output.firstBytesEvent$)).add(i.playing$.subscribe(this.params.output.firstFrameEvent$)).add(i.canplay$.subscribe(this.params.output.canplay$)).add(i.inPiP$.subscribe(this.params.output.inPiP$)).add(i.inFullscreen$.subscribe(this.params.output.inFullscreen$)).add(this.params.desiredState.autoVideoTrackLimits.stateChangeStarted$.subscribe(({ to: { max: s } })=>{
            const r = s && (0, _esnextEsmJs.videoQualityToHeight)(s);
            this.dash.setMaxAutoQuality(r), this.params.output.autoVideoTrackLimits$.next({
                max: s
            });
        })).add(this.videoState.stateChangeEnded$.subscribe((s)=>{
            switch(s.to){
                case V.STOPPED:
                    this.params.output.position$.next(0), this.params.output.duration$.next(1 / 0), this.params.desiredState.playbackState.setState(l.STOPPED);
                    break;
                case V.MANIFEST_READY:
                case V.READY:
                    this.params.desiredState.playbackState.getTransition()?.to === l.READY && this.params.desiredState.playbackState.setState(l.READY);
                    break;
                case V.PAUSED:
                    this.params.desiredState.playbackState.setState(l.PAUSED);
                    break;
                case V.PLAYING:
                    this.params.desiredState.playbackState.setState(l.PLAYING);
                    break;
                default:
                    return (0, _esnextEsmJs.assertNever)(s.to);
            }
        }, t)).add((0, _esnextEsmJs.merge)(e.desiredState.playbackState.stateChangeStarted$, e.desiredState.seekState.stateChangeEnded$, e.desiredState.videoTrack.stateChangeStarted$, e.desiredState.autoVideoTrackSwitching.stateChangeStarted$, this.videoState.stateChangeEnded$, this.droppedFramesManager.onDroopedVideoFramesLimit$, (0, _esnextEsmJs.observableFrom)([
            "init"
        ])).pipe((0, _esnextEsmJs.debounce)(0)).subscribe(this.syncPlayback, t));
    }
    destroy() {
        this.subscription.unsubscribe(), this.textTracksManager.destroy(), this.droppedFramesManager.destroy(), this.dash.destroy(), this.params.output.element$.next(void 0), ht(this.video);
    }
    createLiveDashPlayer() {
        const e = new Sa({
            videoElement: this.video,
            config: {
                maxParallelRequests: this.params.config.maxParallelRequests,
                minBuffer: this.params.tuning.live.minBuffer,
                minBufferSegments: this.params.tuning.live.minBufferSegments,
                lowLatencyMinBuffer: this.params.tuning.live.lowLatencyMinBuffer,
                lowLatencyMinBufferSegments: this.params.tuning.live.lowLatencyMinBufferSegments,
                isLiveCatchUpMode: this.params.tuning.live.isLiveCatchUpMode,
                manifestRetryInterval: this.params.tuning.manifestRetryInterval,
                manifestRetryMaxInterval: this.params.tuning.manifestRetryMaxInterval,
                manifestRetryMaxCount: this.params.tuning.manifestRetryMaxCount
            },
            playerCallback: this._dashCb,
            logger: (t)=>{
                this.params.dependencies.logger.log({
                    message: String(t),
                    component: "LiveDashPlayer"
                });
            }
        });
        return e.pause(), e;
    }
    prepare() {
        const e = this.representations$.getValue(), t = this.params.desiredState.videoTrack.getTransition()?.to ?? this.params.desiredState.videoTrack.getState(), i = this.params.desiredState.autoVideoTrackSwitching.getTransition()?.to ?? this.params.desiredState.autoVideoTrackSwitching.getState(), s = !i && (0, _esnextEsmJs.isNonNullable)(t) ? t : ni(e.map(({ track: c })=>c), {
            container: {
                width: this.video.offsetWidth,
                height: this.video.offsetHeight
            },
            throughput: this.params.dependencies.throughputEstimator.throughput$.getValue(),
            tuning: this.params.tuning.autoTrackSelection,
            limits: this.params.desiredState.autoVideoTrackLimits.getState(),
            droppedVideoMaxQualityLimit: this.droppedFramesManager.droppedVideoMaxQualityLimit,
            abrLogger: this.params.dependencies.abrLogger
        }), r = s?.id, n = this.params.desiredState.videoTrack.getTransition(), o = this.params.desiredState.videoTrack.getState()?.id, d = this.params.desiredState.autoVideoTrackSwitching.getTransition();
        if (s && (n || r !== o) && this.setVideoTrack(s), d && this.setAutoQuality(i), n || d || r !== o) {
            const c = e.find(({ track: u })=>u.id === r)?.representation;
            (0, _esnextEsmJs.assertNonNullable)(c, "Representations missing"), this.dash.startPlay(c, i);
        }
    }
    setVideoTrack(e) {
        const t = this.representations$.getValue().find(({ track: i })=>i.id === e.id)?.representation;
        (0, _esnextEsmJs.assertNonNullable)(t, `No such representation ${e.id}`), this.dash.switchByName(t.name), this.params.desiredState.videoTrack.setState(e);
    }
    setAutoQuality(e) {
        this.dash.setAutoQualityEnabled(e), this.params.desiredState.autoVideoTrackSwitching.setState(e);
    }
    seek(e) {
        this.log({
            message: `[seek] position: ${e}`
        }), this.params.output.willSeekEvent$.next();
        const t = this.params.desiredState.playbackState.getState(), i = this.videoState.getState(), s = t === l.PAUSED && i === V.PAUSED, r = -e, n = r <= this.maxSeekBackTime$.getValue() ? r : 0;
        this.params.output.position$.next(e / 1e3), this.dash.reinit(Be(this.params.source.url, n)), s && this.dash.pause(), this.liveOffset.resetTo(n, s);
    }
    _dashCb = (e)=>{
        switch(e.name){
            case "buffering":
                {
                    const t = e.isBuffering;
                    this.params.output.isBuffering$.next(t);
                    break;
                }
            case "error":
                this.params.output.error$.next({
                    id: `DashLiveProviderInternal:${e.type}`,
                    category: (0, _esnextEsmJs.ErrorCategory).WTF,
                    message: "LiveDashPlayer reported error"
                });
                break;
            case "manifest":
                {
                    const t = e.manifest, i = [];
                    for (const s of t){
                        const r = s.name ?? s.index.toString(10), n = ri(s.name) ?? (0, _esnextEsmJs.videoSizeToQuality)(s.video), o = s.bitrate / 1e3, d = {
                            ...s.video
                        };
                        if (!n) continue;
                        const c = {
                            id: r,
                            quality: n,
                            bitrate: o,
                            size: d
                        };
                        i.push({
                            track: c,
                            representation: s
                        });
                    }
                    this.representations$.next(i), this.params.output.availableVideoTracks$.next(i.map(({ track: s })=>s)), this.videoState.getTransition()?.to === V.MANIFEST_READY && this.videoState.setState(V.MANIFEST_READY);
                    break;
                }
            case "qualitySwitch":
                {
                    const t = e.quality, i = this.representations$.getValue().find(({ representation: s })=>s === t)?.track;
                    this.params.output.hostname$.next(new URL(t.headerUrl, this.params.source.url).hostname), (0, _esnextEsmJs.isNonNullable)(i) && this.params.output.currentVideoTrack$.next(i);
                    break;
                }
            case "bandwidth":
                {
                    const { size: t, duration: i } = e;
                    this.params.dependencies.throughputEstimator.addRawSpeed(t, i);
                    break;
                }
            case "index":
                this.maxSeekBackTime$.next(e.shiftDuration || 0), this.zeroTime$.next(e.zeroTime);
                break;
        }
    };
    syncPlayback = ()=>{
        const e = this.videoState.getState(), t = this.videoState.getTransition(), i = this.params.desiredState.playbackState.getState(), s = this.params.desiredState.playbackState.getTransition(), r = this.params.desiredState.seekState.getState();
        if (this.log({
            message: `[syncPlayback] videoState: ${e}; videoTransition: ${JSON.stringify(t)}; desiredPlaybackState: ${i}; seekState: ${JSON.stringify(r)};`
        }), i === l.STOPPED) {
            e !== V.STOPPED && (this.videoState.startTransitionTo(V.STOPPED), this.dash.destroy(), this.video.removeAttribute("src"), this.video.load(), this.videoState.setState(V.STOPPED));
            return;
        }
        if (t) return;
        const n = this.params.desiredState.videoTrack.getTransition(), o = this.params.desiredState.autoVideoTrackSwitching.getTransition();
        if (ya.includes(e) && (n || o)) {
            this.prepare();
            return;
        }
        if (s?.to !== l.PAUSED && r.state === G.Requested && ba.includes(e)) {
            this.seek(r.position - this.liveOffset.getTotalPausedTime());
            return;
        }
        switch(e){
            case V.STOPPED:
                this.videoState.startTransitionTo(V.MANIFEST_READY), this.dash.attachSource(Be(this.params.source.url));
                return;
            case V.MANIFEST_READY:
                this.videoState.startTransitionTo(V.READY), this.prepare();
                break;
            case V.READY:
                if (i === l.PAUSED) this.videoState.setState(V.PAUSED);
                else if (i === l.PLAYING) {
                    this.videoState.startTransitionTo(V.PLAYING);
                    const d = s?.from;
                    d && d === l.READY && this.dash.catchUp(), this.dash.play(()=>{
                        this.liveOffset.pause(), this.videoState.setState(V.PAUSED);
                    });
                }
                return;
            case V.PLAYING:
                i === l.PAUSED && (this.videoState.startTransitionTo(V.PAUSED), this.liveOffset.pause(), this.dash.pause());
                return;
            case V.PAUSED:
                if (i === l.PLAYING) {
                    if (this.videoState.startTransitionTo(V.PLAYING), this.liveOffset.getTotalPausedTime() < this.params.config.maxPausedTime && this.liveOffset.getTotalOffset() < this.maxSeekBackTime$.getValue()) this.liveOffset.resume(), this.dash.play(()=>{
                        this.liveOffset.pause(), this.videoState.setState(V.PAUSED);
                    }), this.params.output.position$.next(-this.liveOffset.getTotalOffset() / 1e3);
                    else {
                        let d = this.liveOffset.getTotalOffset();
                        d >= this.maxSeekBackTime$.getValue() && (d = 0, this.liveOffset.resetTo(d)), this.liveOffset.resume(), this.params.output.position$.next(-d / 1e3), this.dash.reinit(Be(this.params.source.url, d));
                    }
                }
                return;
            default:
                return (0, _esnextEsmJs.assertNever)(e);
        }
    };
}
var pe;
(function(a) {
    a.VIDEO = "video", a.AUDIO = "audio", a.TEXT = "text";
})(pe || (pe = {}));
var Ne;
(function(a) {
    a[a.ActiveLowLatency = 0] = "ActiveLowLatency", a[a.LiveWithTargetOffset = 1] = "LiveWithTargetOffset", a[a.LiveForwardBuffering = 2] = "LiveForwardBuffering", a[a.None = 3] = "None";
})(Ne || (Ne = {}));
var Zt;
(function(a) {
    a.WEBM_AS_IN_SPEC = "urn:mpeg:dash:profile:webm-on-demand:2012", a.WEBM_AS_IN_FFMPEG = "urn:webm:dash:profile:webm-on-demand:2012";
})(Zt || (Zt = {}));
var Pe;
(function(a) {
    a.BYTE_RANGE = "byteRange", a.TEMPLATE = "template";
})(Pe || (Pe = {}));
var N;
(function(a) {
    a.NONE = "none", a.DOWNLOADING = "downloading", a.DOWNLOADED = "downloaded", a.PARTIALLY_FED = "partially_fed", a.PARTIALLY_EJECTED = "partially_ejected", a.FED = "fed";
})(N || (N = {}));
var At;
(function(a) {
    a.MP4 = "mp4", a.WEBM = "webm";
})(At || (At = {}));
var ei;
(function(a) {
    a[a.RECTANGULAR = 0] = "RECTANGULAR", a[a.EQUIRECTANGULAR = 1] = "EQUIRECTANGULAR", a[a.CUBEMAP = 2] = "CUBEMAP", a[a.MESH = 3] = "MESH";
})(ei || (ei = {}));
var ie;
(function(a) {
    a.STOPPED = "stopped", a.READY = "ready", a.PLAYING = "playing", a.PAUSED = "paused";
})(ie || (ie = {}));
var yt = (a, e)=>{
    let t = 0;
    for(let i = 0; i < a.length; i++){
        const s = a.start(i) * 1e3, r = a.end(i) * 1e3;
        s <= e && e <= r && (t = r);
    }
    return Math.max(t - e, 0);
};
const va = 300, Ea = (a, e = va)=>new (0, _esnextEsmJs.Observable)((t)=>{
        const { width: i, height: s } = a.getBoundingClientRect();
        if (t.next({
            width: i,
            height: s
        }), !window.ResizeObserver) return;
        const r = new ResizeObserver((0, _esnextEsmJs.debounceFn)((n)=>{
            const o = n[0];
            if (!o) return;
            let d, c;
            o.contentBoxSize && o.contentBoxSize[0] ? (c = o.contentBoxSize[0].blockSize, d = o.contentBoxSize[0].inlineSize) : o.contentRect && (d = o.contentRect.width, c = o.contentRect.height), (0, _esnextEsmJs.isNonNullable)(d) && (0, _esnextEsmJs.isNonNullable)(c) && t.next({
                width: d,
                height: c
            });
        }, e));
        return r.observe(a), ()=>r.disconnect();
    });
class Ui {
    constructor(){
        Object.defineProperty(this, "listeners", {
            value: {},
            writable: !0,
            configurable: !0
        });
    }
    addEventListener(e, t, i) {
        e in this.listeners || (this.listeners[e] = []), this.listeners[e].push({
            callback: t,
            options: i
        });
    }
    removeEventListener(e, t) {
        if (!(e in this.listeners)) return;
        const i = this.listeners[e];
        for(let s = 0, r = i.length; s < r; s++)if (i[s].callback === t) {
            i.splice(s, 1);
            return;
        }
    }
    dispatchEvent(e) {
        if (!(e.type in this.listeners)) return;
        const i = this.listeners[e.type].slice();
        for(let s = 0, r = i.length; s < r; s++){
            const n = i[s];
            try {
                n.callback.call(this, e);
            } catch (o) {
                Promise.resolve().then(()=>{
                    throw o;
                });
            }
            n.options && n.options.once && this.removeEventListener(e.type, n.callback);
        }
        return !e.defaultPrevented;
    }
}
class hs extends Ui {
    constructor(){
        super(), this.listeners || Ui.call(this), Object.defineProperty(this, "aborted", {
            value: !1,
            writable: !0,
            configurable: !0
        }), Object.defineProperty(this, "onabort", {
            value: null,
            writable: !0,
            configurable: !0
        }), Object.defineProperty(this, "reason", {
            value: void 0,
            writable: !0,
            configurable: !0
        });
    }
    toString() {
        return "[object AbortSignal]";
    }
    dispatchEvent(e) {
        e.type === "abort" && (this.aborted = !0, typeof this.onabort == "function" && this.onabort.call(this, e)), super.dispatchEvent(e);
    }
}
let ls = class {
    constructor(){
        Object.defineProperty(this, "signal", {
            value: new hs,
            writable: !0,
            configurable: !0
        });
    }
    abort(e) {
        let t;
        try {
            t = new Event("abort");
        } catch  {
            typeof document < "u" ? document.createEvent ? (t = document.createEvent("Event"), t.initEvent("abort", !1, !1)) : (t = document.createEventObject(), t.type = "abort") : t = {
                type: "abort",
                bubbles: !1,
                cancelable: !1
            };
        }
        let i = e;
        if (i === void 0) {
            if (typeof document > "u") i = new Error("This operation was aborted"), i.name = "AbortError";
            else try {
                i = new DOMException("signal is aborted without reason");
            } catch  {
                i = new Error("This operation was aborted"), i.name = "AbortError";
            }
        }
        this.signal.reason = i, this.signal.dispatchEvent(t);
    }
    toString() {
        return "[object AbortController]";
    }
};
typeof Symbol < "u" && Symbol.toStringTag && (ls.prototype[Symbol.toStringTag] = "AbortController", hs.prototype[Symbol.toStringTag] = "AbortSignal");
function fs(a) {
    return a.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"), !0) : typeof a.Request == "function" && !a.Request.prototype.hasOwnProperty("signal") || !a.AbortController;
}
function Aa(a) {
    typeof a == "function" && (a = {
        fetch: a
    });
    const { fetch: e, Request: t = e.Request, AbortController: i, __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: s = !1 } = a;
    if (!fs({
        fetch: e,
        Request: t,
        AbortController: i,
        __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: s
    })) return {
        fetch: e,
        Request: r
    };
    let r = t;
    (r && !r.prototype.hasOwnProperty("signal") || s) && (r = function(c, u) {
        let h;
        u && u.signal && (h = u.signal, delete u.signal);
        const f = new t(c, u);
        return h && Object.defineProperty(f, "signal", {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: h
        }), f;
    }, r.prototype = t.prototype);
    const n = e;
    return {
        fetch: (d, c)=>{
            const u = r && r.prototype.isPrototypeOf(d) ? d.signal : c ? c.signal : void 0;
            if (u) {
                let h;
                try {
                    h = new DOMException("Aborted", "AbortError");
                } catch  {
                    h = new Error("Aborted"), h.name = "AbortError";
                }
                if (u.aborted) return Promise.reject(h);
                const f = new Promise((p, S)=>{
                    u.addEventListener("abort", ()=>S(h), {
                        once: !0
                    });
                });
                return c && c.signal && delete c.signal, Promise.race([
                    f,
                    n(d, c)
                ]);
            }
            return n(d, c);
        },
        Request: r
    };
}
const oi = fs({
    fetch: window.fetch,
    Request: window.Request,
    AbortController: window.AbortController
}), ps = oi ? Aa({
    fetch: window.fetch,
    Request: window.Request,
    AbortController: window.AbortController
}) : void 0, Ot = oi ? ps.fetch : window.fetch;
oi ? ps.Request : window.Request;
const Et = oi ? ls : window.AbortController;
var Ei = (a, e)=>{
    for(let t = 0; t < a.length; t++)if (a.start(t) * 1e3 <= e && a.end(t) * 1e3 > e) return !0;
    return !1;
};
const wa = (a, e = {})=>{
    const i = e.timeout || 1, s = performance.now();
    return window.setTimeout(()=>{
        a({
            get didTimeout () {
                return e.timeout ? !1 : performance.now() - s - 1 > i;
            },
            timeRemaining () {
                return Math.max(0, 1 + (performance.now() - s));
            }
        });
    }, 1);
}, ka = typeof window.requestIdleCallback != "function" || typeof window.cancelIdleCallback != "function", Hi = ka ? wa : window.requestIdleCallback, $a = 16;
let ms = !1;
try {
    ms = (0, _esnextEsmJs.getCurrentBrowser)().browser === (0, _esnextEsmJs.CurrentClientBrowser).Safari && parseInt(navigator.userAgent.match(/Version\/(\d+)/)?.[1] ?? "", 10) <= $a;
} catch (a) {
    console.error(a);
}
class Pa {
    bufferFull$ = new (0, _esnextEsmJs.Subject);
    error$ = new (0, _esnextEsmJs.Subject);
    buffer;
    queue = [];
    currentTask = null;
    destroyed = !1;
    constructor(e){
        this.buffer = e, this.buffer.addEventListener("updateend", this.completeTask);
    }
    async append(e, t) {
        return t && t.aborted ? !1 : new Promise((i)=>{
            const s = {
                operation: "append",
                data: e,
                signal: t,
                callback: i
            };
            this.queue.push(s), this.pull();
        });
    }
    async remove(e, t, i) {
        return i && i.aborted ? !1 : new Promise((s)=>{
            const r = {
                operation: "remove",
                from: e,
                to: t,
                signal: i,
                callback: s
            };
            this.queue.unshift(r), this.pull();
        });
    }
    async abort(e) {
        return new Promise((t)=>{
            let i;
            ms && e ? i = {
                operation: "safariAbort",
                init: e,
                callback: t
            } : i = {
                operation: "abort",
                callback: t
            };
            for (const { callback: s } of this.queue)s(!1);
            i && (this.queue = [
                i
            ]), this.pull();
        });
    }
    destroy() {
        this.destroyed = !0, this.buffer.removeEventListener("updateend", this.completeTask), this.queue = [], this.currentTask = null;
        try {
            this.buffer.abort();
        } catch (e) {
            if (!(e instanceof DOMException && e.name === "InvalidStateError")) throw e;
        }
    }
    completeTask = ()=>{
        try {
            if (this.currentTask) {
                const e = this.currentTask.signal?.aborted;
                this.currentTask.callback(!e), this.currentTask = null;
            }
            this.queue.length && this.pull();
        } catch (e) {
            this.error$.next({
                id: "BufferTaskQueueUnknown",
                category: (0, _esnextEsmJs.ErrorCategory).VIDEO_PIPELINE,
                message: "Buffer appending or removal failed",
                thrown: e
            });
        }
    };
    pull() {
        if (this.buffer.updating || this.currentTask || this.destroyed) return;
        const e = this.queue.shift();
        if (!e) return;
        if (e.signal?.aborted) {
            e.callback(!1), this.pull();
            return;
        }
        this.currentTask = e;
        const { operation: t } = this.currentTask;
        try {
            this.execute(this.currentTask);
        } catch (s) {
            s instanceof DOMException && s.name === "QuotaExceededError" && t === "append" ? this.bufferFull$.next(this.currentTask.data.byteLength) : s instanceof DOMException && s.name === "InvalidStateError" || this.error$.next({
                id: `BufferTaskQueue:${t}`,
                category: (0, _esnextEsmJs.ErrorCategory).VIDEO_PIPELINE,
                message: "Buffer operation failed",
                thrown: s
            }), this.currentTask.callback(!1), this.currentTask = null;
        }
        this.currentTask && this.currentTask.operation === "abort" && this.completeTask();
    }
    execute(e) {
        const { operation: t } = e;
        switch(t){
            case "append":
                this.buffer.appendBuffer(e.data);
                break;
            case "remove":
                this.buffer.remove(e.from / 1e3, e.to / 1e3);
                break;
            case "abort":
                this.buffer.abort();
                break;
            case "safariAbort":
                this.buffer.abort(), this.buffer.appendBuffer(e.init);
                break;
            default:
                (0, _esnextEsmJs.assertNever)(t);
        }
    }
}
var Yi = (a)=>{
    let e = 0;
    for(let t = 0; t < a.length; t++)e += a.end(t) - a.start(t);
    return e * 1e3;
};
class De {
    source;
    type;
    size32;
    size64;
    usertype;
    content;
    children;
    cursor = 0;
    get id() {
        return this.type;
    }
    get size() {
        return this.size32;
    }
    constructor(e){
        this.source = e, this.children = [];
        const t = this.readUint32();
        this.size32 = t <= e.buffer.byteLength ? t : NaN, this.type = this.readString(4), this.size64 = 0, this.usertype = 0, this.content = new DataView(e.buffer, e.byteOffset + this.cursor, this.size32 ? this.size32 - 8 : void 0), this.children = this.parseChildrenBoxes();
    }
    parseChildrenBoxes() {
        return [];
    }
    readString(e, t = "ascii") {
        const s = new TextDecoder(t).decode(new DataView(this.source.buffer, this.source.byteOffset + this.cursor, e));
        return this.cursor += e, s;
    }
    readUint8() {
        const e = this.source.getUint8(this.cursor);
        return this.cursor += 1, e;
    }
    readUint16() {
        const e = this.source.getUint16(this.cursor);
        return this.cursor += 2, e;
    }
    readUint32() {
        const e = this.source.getUint32(this.cursor);
        return this.cursor += 4, e;
    }
    readUint64() {
        const e = this.source.getBigInt64(this.cursor);
        return this.cursor += 8, e;
    }
}
class gs extends De {
}
class La extends De {
    majorBrand;
    minorVersion;
    compatibleBrands;
    constructor(e){
        super(e), this.compatibleBrands = [], this.majorBrand = this.readString(4), this.minorVersion = this.readUint32();
        let t = this.size - this.cursor;
        for(; t;){
            const i = this.readString(4);
            this.compatibleBrands.push(i), t -= 4;
        }
    }
}
class Da extends De {
    parseChildrenBoxes() {
        return tt(this.content);
    }
}
class xa extends De {
    parseChildrenBoxes() {
        return tt(this.content);
    }
}
class Ca extends De {
    data;
    constructor(e){
        super(e), this.data = this.content;
    }
}
class Qe extends De {
    version;
    flags;
    constructor(e){
        super(e);
        const t = this.readUint32();
        this.version = t >>> 24, this.flags = t & 16777215;
    }
}
class Ra extends Qe {
    referenceId;
    timescale;
    earliestPresentationTime32;
    firstOffset32;
    earliestPresentationTime64;
    firstOffset64;
    reserved;
    referenceCount;
    segments;
    get earliestPresentationTime() {
        return this.earliestPresentationTime32;
    }
    get firstOffset() {
        return this.firstOffset32;
    }
    constructor(e){
        super(e), this.segments = [], this.referenceId = this.readUint32(), this.timescale = this.readUint32(), this.earliestPresentationTime32 = this.readUint32(), this.firstOffset32 = this.readUint32(), this.earliestPresentationTime64 = 0, this.firstOffset64 = 0, this.referenceCount = this.readUint32() & 65535;
        for(let t = 0; t < this.referenceCount; t++){
            let i = this.readUint32();
            const s = i >>> 31, r = i << 1 >>> 1, n = this.readUint32();
            i = this.readUint32();
            const o = i >>> 28, d = i << 3 >>> 3;
            this.segments.push({
                referenceType: s,
                referencedSize: r,
                subsegmentDuration: n,
                SAPType: o,
                SAPDeltaTime: d
            });
        }
    }
}
class Ia extends De {
    parseChildrenBoxes() {
        return tt(this.content);
    }
}
class Ba extends De {
    parseChildrenBoxes() {
        return tt(this.content);
    }
}
var ot;
(function(a) {
    a[a.MONOSCOPIC = 0] = "MONOSCOPIC", a[a.TOP_BOTTOM = 1] = "TOP_BOTTOM", a[a.LEFT_RIGHT = 2] = "LEFT_RIGHT", a[a.STEREO_CUSTOM = 3] = "STEREO_CUSTOM", a[a.RIGHT_LEFT = 4] = "RIGHT_LEFT";
})(ot || (ot = {}));
class Ma extends Qe {
    stereoMode;
    constructor(e){
        switch(super(e), this.readUint8()){
            case 0:
                this.stereoMode = ot.MONOSCOPIC;
                break;
            case 1:
                this.stereoMode = ot.TOP_BOTTOM;
                break;
            case 2:
                this.stereoMode = ot.LEFT_RIGHT;
                break;
            case 3:
                this.stereoMode = ot.STEREO_CUSTOM;
                break;
            case 4:
                this.stereoMode = ot.RIGHT_LEFT;
                break;
        }
        this.cursor += 1;
    }
}
class _a extends Qe {
    poseYawDegrees;
    posePitchDegrees;
    poseRollDegrees;
    constructor(e){
        super(e), this.poseYawDegrees = this.readUint32(), this.posePitchDegrees = this.readUint32(), this.poseRollDegrees = this.readUint32();
    }
}
class Oa extends Qe {
    projectionBoundsTop;
    projectionBoundsBottom;
    projectionBoundsLeft;
    projectionBoundsRight;
    constructor(e){
        super(e), this.projectionBoundsTop = this.readUint32(), this.projectionBoundsBottom = this.readUint32(), this.projectionBoundsLeft = this.readUint32(), this.projectionBoundsRight = this.readUint32();
    }
}
class Na extends De {
    parseChildrenBoxes() {
        return tt(this.content);
    }
}
class Fa extends Qe {
    creationTime;
    modificationTime;
    trackId;
    duration;
    layer;
    alternateGroup;
    volume;
    matrix;
    width;
    height;
    constructor(e){
        super(e), this.creationTime = this.readUint32(), this.modificationTime = this.readUint32(), this.trackId = this.readUint32(), this.cursor += 4, this.duration = this.readUint32(), this.cursor += 8, this.layer = this.readUint16(), this.alternateGroup = this.readUint16(), this.cursor += 2, this.cursor += 2, this.matrix = [
            [
                this.readUint32(),
                this.readUint32(),
                this.readUint32()
            ],
            [
                this.readUint32(),
                this.readUint32(),
                this.readUint32()
            ],
            [
                this.readUint32(),
                this.readUint32(),
                this.readUint32()
            ]
        ], this.width = this.readUint32(), this.height = this.readUint32();
    }
}
class Va extends De {
    parseChildrenBoxes() {
        return tt(this.content);
    }
}
class Ua extends De {
    parseChildrenBoxes() {
        return tt(this.content);
    }
}
class Ha extends Qe {
    sequenceNumber;
    constructor(e){
        super(e), this.sequenceNumber = this.readUint32();
    }
}
class Ya extends De {
    parseChildrenBoxes() {
        return tt(this.content);
    }
}
class Ga extends Qe {
    trackId;
    baseDataOffset;
    sampleDescriptionIndex;
    defaultSampleDuration;
    defaultSampleSize;
    defaultSampleFlags;
    constructor(e){
        super(e), this.trackId = this.readUint32(), this.flags & 1 && (this.baseDataOffset = this.readUint64()), this.flags & 2 && (this.sampleDescriptionIndex = this.readUint32()), this.flags & 8 && (this.defaultSampleDuration = this.readUint32()), this.flags & 16 && (this.defaultSampleSize = this.readUint32()), this.flags & 32 && (this.defaultSampleFlags = this.readUint32());
    }
}
class qa extends Qe {
    baseMediaDecodeTime32 = 0;
    baseMediaDecodeTime64 = BigInt(0);
    get baseMediaDecodeTime() {
        return this.version === 1 ? this.baseMediaDecodeTime64 : this.baseMediaDecodeTime32;
    }
    constructor(e){
        super(e), this.version === 1 ? this.baseMediaDecodeTime64 = this.readUint64() : this.baseMediaDecodeTime32 = this.readUint32();
    }
}
class za extends Qe {
    sampleCount;
    dataOffset;
    firstSampleFlags;
    sampleDuration = [];
    sampleSize = [];
    sampleFlags = [];
    sampleCompositionTimeOffset = [];
    optionalFields = 0;
    constructor(e){
        super(e), this.sampleCount = this.readUint32(), this.flags & 1 && (this.dataOffset = this.readUint32()), this.flags & 4 && (this.firstSampleFlags = this.readUint32());
        for(let t = 0; t < this.sampleCount; t++)this.flags & 256 && this.sampleDuration.push(this.readUint32()), this.flags & 512 && this.sampleSize.push(this.readUint32()), this.flags & 1024 && this.sampleFlags.push(this.readUint32()), this.flags & 2048 && this.sampleCompositionTimeOffset.push(this.readUint32());
    }
}
const Wa = {
    ftyp: La,
    moov: Da,
    moof: xa,
    mdat: Ca,
    sidx: Ra,
    trak: Ia,
    mdia: Na,
    mfhd: Ha,
    tkhd: Fa,
    traf: Ya,
    tfhd: Ga,
    tfdt: qa,
    trun: za,
    minf: Va,
    sv3d: Ba,
    st3d: Ma,
    prhd: _a,
    proj: Ua,
    equi: Oa,
    unknown: gs
};
class Qa {
    createBox(e, t) {
        const i = Wa[e];
        return i ? new i(t) : new gs(t);
    }
    createFromView(e) {
        const i = new TextDecoder("ascii").decode(new DataView(e.buffer, e.byteOffset + 4, 4));
        return ci.createBox(i, new DataView(e.buffer, e.byteOffset));
    }
}
const ci = new Qa;
function It(a, e) {
    const t = new Uint8Array(a.buffer), i = e.split("").map((n)=>n.charCodeAt(0));
    let s = a.byteOffset, r = [];
    for(; s < t.byteLength;){
        if (t[s] === i[r.length] ? r.push(t[s]) : r.length && (r = [], s--), r.length === 4) {
            const o = new DataView(a.buffer, s - 7, 4).getUint32(0);
            return s - 7 + o > a.buffer.byteLength ? null : ci.createBox(e, new DataView(a.buffer, s - 7));
        }
        s++;
    }
    return null;
}
function Ai(a, e) {
    const t = [];
    let i = a.byteOffset;
    for(; i < a.buffer.byteLength;){
        const s = It(new DataView(a.buffer, i, a.buffer.byteLength - i), e);
        if (s) t.push(s), i = s.source.byteOffset + s.size;
        else break;
    }
    return t;
}
function tt(a) {
    const e = [];
    let t = 0;
    for(; t < a.byteLength;){
        const i = ci.createFromView(new DataView(a.buffer, a.byteOffset + t));
        if (e.push(i), !i.size) break;
        t += i.size;
    }
    return e;
}
const ja = new TextDecoder("ascii"), Ja = (a)=>ja.decode(new DataView(a.buffer, a.byteOffset + 4, 4)) === "ftyp", Xa = (a)=>{
    const e = ci.createFromView(a);
    let t = e.earliestPresentationTime / e.timescale * 1e3, i = a.byteOffset + a.byteLength + e.firstOffset;
    return e.segments.map((r)=>{
        if (r.referenceType !== 0) throw new Error("Unsupported multilevel sidx");
        const n = r.subsegmentDuration / e.timescale * 1e3, o = {
            status: N.NONE,
            time: {
                from: t,
                to: t + n
            },
            byte: {
                from: i,
                to: i + r.referencedSize - 1
            }
        };
        return t += n, i += r.referencedSize, o;
    });
}, Ka = (a)=>{
    const e = Ai(a, "mdat"), t = Ai(a, "moof");
    if (!(e.length && t.length)) return null;
    const i = t[0], s = e[e.length - 1], r = i.source.byteOffset, o = s.source.byteOffset - i.source.byteOffset + s.size;
    return new DataView(a.buffer, r, o);
}, Za = (a, e)=>{
    const t = Ai(a, "traf"), i = t[t.length - 1].children.find((d)=>d.type === "tfhd"), s = t[t.length - 1].children.find((d)=>d.type === "tfdt"), r = t[t.length - 1].children.find((d)=>d.type === "trun");
    let n = 0;
    return r.sampleDuration.length ? n = r.sampleDuration.reduce((d, c)=>d + c, 0) : n = i.defaultSampleDuration * r.sampleCount, (Number(s.baseMediaDecodeTime) + n) / e * 1e3;
}, er = (a)=>{
    const e = {
        is3dVideo: !1,
        stereoMode: 0,
        projectionType: ei.EQUIRECTANGULAR,
        projectionData: {
            pose: {
                yaw: 0,
                pitch: 0,
                roll: 0
            },
            bounds: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }
        }
    };
    if (It(a, "sv3d")) {
        e.is3dVideo = !0;
        const i = It(a, "st3d");
        i && (e.stereoMode = i.stereoMode);
        const s = It(a, "prhd");
        s && (e.projectionData.pose.yaw = s.poseYawDegrees, e.projectionData.pose.pitch = s.posePitchDegrees, e.projectionData.pose.roll = s.poseRollDegrees);
        const r = It(a, "equi");
        r && (e.projectionData.bounds.top = r.projectionBoundsTop, e.projectionData.bounds.right = r.projectionBoundsRight, e.projectionData.bounds.bottom = r.projectionBoundsBottom, e.projectionData.bounds.left = r.projectionBoundsLeft);
    }
    return e;
}, tr = {
    validateData: Ja,
    parseInit: er,
    getIndexRange: ()=>{},
    parseSegments: Xa,
    parseFeedableSegmentChunk: Ka,
    getSegmentEndTime: Za
};
var b;
(function(a) {
    a[a.EBML = 440786851] = "EBML", a[a.EBMLVersion = 17030] = "EBMLVersion", a[a.EBMLReadVersion = 17143] = "EBMLReadVersion", a[a.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength", a[a.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength", a[a.DocType = 17026] = "DocType", a[a.DocTypeVersion = 17031] = "DocTypeVersion", a[a.DocTypeReadVersion = 17029] = "DocTypeReadVersion", a[a.Void = 236] = "Void", a[a.Segment = 408125543] = "Segment", a[a.SeekHead = 290298740] = "SeekHead", a[a.Seek = 19899] = "Seek", a[a.SeekID = 21419] = "SeekID", a[a.SeekPosition = 21420] = "SeekPosition", a[a.Info = 357149030] = "Info", a[a.TimestampScale = 2807729] = "TimestampScale", a[a.Duration = 17545] = "Duration", a[a.Tracks = 374648427] = "Tracks", a[a.TrackEntry = 174] = "TrackEntry", a[a.Video = 224] = "Video", a[a.Projection = 30320] = "Projection", a[a.ProjectionType = 30321] = "ProjectionType", a[a.ProjectionPrivate = 30322] = "ProjectionPrivate", a[a.Chapters = 272869232] = "Chapters", a[a.Cluster = 524531317] = "Cluster", a[a.Timestamp = 231] = "Timestamp", a[a.SilentTracks = 22612] = "SilentTracks", a[a.SilentTrackNumber = 22743] = "SilentTrackNumber", a[a.Position = 167] = "Position", a[a.PrevSize = 171] = "PrevSize", a[a.SimpleBlock = 163] = "SimpleBlock", a[a.BlockGroup = 160] = "BlockGroup", a[a.EncryptedBlock = 175] = "EncryptedBlock", a[a.Attachments = 423732329] = "Attachments", a[a.Tags = 307544935] = "Tags", a[a.Cues = 475249515] = "Cues", a[a.CuePoint = 187] = "CuePoint", a[a.CueTime = 179] = "CueTime", a[a.CueTrackPositions = 183] = "CueTrackPositions", a[a.CueTrack = 247] = "CueTrack", a[a.CueClusterPosition = 241] = "CueClusterPosition", a[a.CueRelativePosition = 240] = "CueRelativePosition", a[a.CueDuration = 178] = "CueDuration", a[a.CueBlockNumber = 21368] = "CueBlockNumber", a[a.CueCodecState = 234] = "CueCodecState", a[a.CueReference = 219] = "CueReference", a[a.CueRefTime = 150] = "CueRefTime";
})(b || (b = {}));
var k;
(function(a) {
    a.SignedInteger = "int", a.UnsignedInteger = "uint", a.Float = "float", a.String = "string", a.UTF8 = "utf8", a.Date = "date", a.Master = "master", a.Binary = "binary";
})(k || (k = {}));
const Gi = {
    [b.EBML]: {
        type: k.Master
    },
    [b.EBMLVersion]: {
        type: k.UnsignedInteger
    },
    [b.EBMLReadVersion]: {
        type: k.UnsignedInteger
    },
    [b.EBMLMaxIDLength]: {
        type: k.UnsignedInteger
    },
    [b.EBMLMaxSizeLength]: {
        type: k.UnsignedInteger
    },
    [b.DocType]: {
        type: k.String
    },
    [b.DocTypeVersion]: {
        type: k.UnsignedInteger
    },
    [b.DocTypeReadVersion]: {
        type: k.UnsignedInteger
    },
    [b.Void]: {
        type: k.Binary
    },
    [b.Segment]: {
        type: k.Master
    },
    [b.SeekHead]: {
        type: k.Master
    },
    [b.Seek]: {
        type: k.Master
    },
    [b.SeekID]: {
        type: k.Binary
    },
    [b.SeekPosition]: {
        type: k.UnsignedInteger
    },
    [b.Info]: {
        type: k.Master
    },
    [b.TimestampScale]: {
        type: k.UnsignedInteger
    },
    [b.Duration]: {
        type: k.Float
    },
    [b.Tracks]: {
        type: k.Master
    },
    [b.TrackEntry]: {
        type: k.Master
    },
    [b.Video]: {
        type: k.Master
    },
    [b.Projection]: {
        type: k.Master
    },
    [b.ProjectionType]: {
        type: k.UnsignedInteger
    },
    [b.ProjectionPrivate]: {
        type: k.Master
    },
    [b.Chapters]: {
        type: k.Master
    },
    [b.Cluster]: {
        type: k.Master
    },
    [b.Timestamp]: {
        type: k.UnsignedInteger
    },
    [b.SilentTracks]: {
        type: k.Master
    },
    [b.SilentTrackNumber]: {
        type: k.UnsignedInteger
    },
    [b.Position]: {
        type: k.UnsignedInteger
    },
    [b.PrevSize]: {
        type: k.UnsignedInteger
    },
    [b.SimpleBlock]: {
        type: k.Binary
    },
    [b.BlockGroup]: {
        type: k.Master
    },
    [b.EncryptedBlock]: {
        type: k.Binary
    },
    [b.Attachments]: {
        type: k.Master
    },
    [b.Tags]: {
        type: k.Master
    },
    [b.Cues]: {
        type: k.Master
    },
    [b.CuePoint]: {
        type: k.Master
    },
    [b.CueTime]: {
        type: k.UnsignedInteger
    },
    [b.CueTrackPositions]: {
        type: k.Master
    },
    [b.CueTrack]: {
        type: k.UnsignedInteger
    },
    [b.CueClusterPosition]: {
        type: k.UnsignedInteger
    },
    [b.CueRelativePosition]: {
        type: k.UnsignedInteger
    },
    [b.CueDuration]: {
        type: k.UnsignedInteger
    },
    [b.CueBlockNumber]: {
        type: k.UnsignedInteger
    },
    [b.CueCodecState]: {
        type: k.UnsignedInteger
    },
    [b.CueReference]: {
        type: k.Master
    },
    [b.CueRefTime]: {
        type: k.UnsignedInteger
    }
}, Ss = (a)=>{
    const e = a.getUint8(0);
    let t = 0;
    e & 128 ? t = 1 : e & 64 ? t = 2 : e & 32 ? t = 3 : e & 16 && (t = 4);
    const i = ti(a, t), s = i in Gi, r = s ? Gi[i].type : k.Binary, n = a.getUint8(t);
    let o = 0;
    n & 128 ? o = 1 : n & 64 ? o = 2 : n & 32 ? o = 3 : n & 16 ? o = 4 : n & 8 ? o = 5 : n & 4 ? o = 6 : n & 2 ? o = 7 : n & 1 && (o = 8);
    const d = new DataView(a.buffer, a.byteOffset + t + 1, o - 1), c = n & 255 >> o, u = ti(d), h = c * 2 ** ((o - 1) * 8) + u, f = t + o;
    let p;
    return f + h > a.byteLength ? p = new DataView(a.buffer, a.byteOffset + f) : p = new DataView(a.buffer, a.byteOffset + f, h), {
        tag: s ? i : "0x" + i.toString(16).toUpperCase(),
        type: r,
        tagHeaderSize: f,
        tagSize: f + h,
        value: p,
        valueSize: h
    };
}, ti = (a, e = a.byteLength)=>{
    switch(e){
        case 1:
            return a.getUint8(0);
        case 2:
            return a.getUint16(0);
        case 3:
            return a.getUint8(0) * 2 ** 16 + a.getUint16(1);
        case 4:
            return a.getUint32(0);
        case 5:
            return a.getUint8(0) * 2 ** 32 + a.getUint32(1);
        case 6:
            return a.getUint16(0) * 2 ** 32 + a.getUint32(2);
        case 7:
            {
                const t = a.getUint8(0) * 281474976710656 + a.getUint16(1) * 4294967296 + a.getUint32(3);
                if (Number.isSafeInteger(t)) return t;
            }
        case 8:
            throw new ReferenceError("Int64 is not supported");
    }
    return 0;
}, Ve = (a, e)=>{
    switch(e){
        case k.SignedInteger:
            return a.getInt8(0);
        case k.UnsignedInteger:
            return ti(a);
        case k.Float:
            return a.byteLength === 4 ? a.getFloat32(0) : a.getFloat64(0);
        case k.String:
            return new TextDecoder("ascii").decode(a);
        case k.UTF8:
            return new TextDecoder("utf-8").decode(a);
        case k.Date:
            return new Date(Date.UTC(2001, 0) + a.getInt8(0)).getTime();
        case k.Master:
            return a;
        case k.Binary:
            return a;
        default:
            (0, _esnextEsmJs.assertNever)(e);
    }
}, wt = (a, e)=>{
    let t = 0;
    for(; t < a.byteLength;){
        const i = new DataView(a.buffer, a.byteOffset + t), s = Ss(i);
        if (!e(s)) return;
        s.type === k.Master && wt(s.value, e), t = s.value.byteOffset - a.byteOffset + s.valueSize;
    }
}, ir = (a)=>{
    if (a.getUint32(0) !== b.EBML) return !1;
    let e, t, i;
    const s = Ss(a);
    return wt(s.value, ({ tag: r, type: n, value: o })=>(r === b.EBMLReadVersion ? e = Ve(o, n) : r === b.DocType ? t = Ve(o, n) : r === b.DocTypeReadVersion && (i = Ve(o, n)), !0)), (e === void 0 || e <= 1) && t !== void 0 && t === "webm" && (i === void 0 || i <= 2);
}, bs = [
    b.Info,
    b.SeekHead,
    b.Tracks,
    b.TrackEntry,
    b.Video,
    b.Projection,
    b.ProjectionType,
    b.ProjectionPrivate,
    b.Chapters,
    b.Cluster,
    b.Cues,
    b.Attachments,
    b.Tags
], sr = [
    b.Timestamp,
    b.SilentTracks,
    b.SilentTrackNumber,
    b.Position,
    b.PrevSize,
    b.SimpleBlock,
    b.BlockGroup,
    b.EncryptedBlock
], ar = (a)=>{
    let e, t, i, s, r = !1, n = !1, o = !1, d, c, u = !1;
    const h = 0;
    return wt(a, ({ tag: f, type: p, value: S, valueSize: $ })=>{
        if (f === b.SeekID) {
            const y = Ve(S, p);
            c = ti(y);
        } else f !== b.SeekPosition && (c = void 0);
        return f === b.Segment ? (e = S.byteOffset, t = S.byteOffset + $) : f === b.Info ? r = !0 : f === b.SeekHead ? n = !0 : f === b.TimestampScale ? i = Ve(S, p) : f === b.Duration ? s = Ve(S, p) : f === b.SeekPosition && c === b.Cues ? d = Ve(S, p) : f === b.Tracks ? wt(S, ({ tag: y, type: w, value: _ })=>y === b.ProjectionType ? (u = Ve(_, w) === 1, !1) : !0) : r && n && bs.includes(f) && (o = !0), !o;
    }), (0, _esnextEsmJs.assertNonNullable)(e, "Failed to parse webm Segment start"), (0, _esnextEsmJs.assertNonNullable)(t, "Failed to parse webm Segment end"), (0, _esnextEsmJs.assertNonNullable)(s, "Failed to parse webm Segment duration"), i = i ?? 1e6, {
        segmentStart: Math.round(e / 1e9 * i * 1e3),
        segmentEnd: Math.round(t / 1e9 * i * 1e3),
        timeScale: i,
        segmentDuration: Math.round(s / 1e9 * i * 1e3),
        cuesSeekPosition: d,
        is3dVideo: u,
        stereoMode: h,
        projectionType: ei.EQUIRECTANGULAR,
        projectionData: {
            pose: {
                yaw: 0,
                pitch: 0,
                roll: 0
            },
            bounds: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }
        }
    };
}, rr = (a)=>{
    if ((0, _esnextEsmJs.isNullable)(a.cuesSeekPosition)) return;
    const e = a.segmentStart + a.cuesSeekPosition, t = 1048576;
    return {
        from: e,
        to: e + t
    };
}, nr = (a, e)=>{
    let t = !1, i = !1;
    const s = (o)=>(0, _esnextEsmJs.isNonNullable)(o.time) && (0, _esnextEsmJs.isNonNullable)(o.position), r = [];
    let n;
    return wt(a, ({ tag: o, type: d, value: c })=>{
        switch(o){
            case b.Cues:
                t = !0;
                break;
            case b.CuePoint:
                n && s(n) && r.push(n), n = {};
                break;
            case b.CueTime:
                n && (n.time = Ve(c, d));
                break;
            case b.CueTrackPositions:
                break;
            case b.CueClusterPosition:
                n && (n.position = Ve(c, d));
                break;
            default:
                t && bs.includes(o) && (i = !0);
        }
        return !(t && i);
    }), n && s(n) && r.push(n), r.map((o, d)=>{
        const { time: c, position: u } = o, h = r[d + 1];
        return {
            status: N.NONE,
            time: {
                from: c,
                to: h ? h.time : e.segmentDuration
            },
            byte: {
                from: e.segmentStart + u,
                to: h ? e.segmentStart + h.position - 1 : e.segmentEnd - 1
            }
        };
    });
}, or = (a)=>{
    let e = 0, t = !1;
    try {
        wt(a, (i)=>i.tag === b.Cluster ? i.tagSize <= a.byteLength ? (e = i.tagSize, !1) : (e += i.tagHeaderSize, !0) : sr.includes(i.tag) ? (e + i.tagSize <= a.byteLength && (e += i.tagSize, t ||= [
                b.SimpleBlock,
                b.BlockGroup,
                b.EncryptedBlock
            ].includes(i.tag)), !0) : !1);
    } catch  {}
    return e > 0 && e <= a.byteLength && t ? new DataView(a.buffer, a.byteOffset, e) : null;
}, cr = {
    validateData: ir,
    parseInit: ar,
    getIndexRange: rr,
    parseSegments: nr,
    parseFeedableSegmentChunk: or
}, dr = (a)=>{
    if (a.includes("/")) {
        const e = a.split("/");
        return parseInt(e[0]) / parseInt(e[1]);
    } else return parseFloat(a);
}, qi = (a)=>{
    if (!a.startsWith("P")) return;
    const e = (n, o)=>{
        const d = n ? parseFloat(n.replace(",", ".")) : NaN;
        return (isNaN(d) ? 0 : d) * o;
    }, i = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/.exec(a), s = i?.[1] === "-" ? -1 : 1, r = {
        days: e(i?.[5], s),
        hours: e(i?.[6], s),
        minutes: e(i?.[7], s),
        seconds: e(i?.[8], s)
    };
    return r.days * 86400000 + r.hours * 3600000 + r.minutes * 60000 + r.seconds * 1e3;
}, bt = (a, e)=>{
    let t = a;
    t = t.replaceAll("$$", "$");
    const i = {
        RepresentationID: e.representationId,
        Number: e.segmentNumber,
        Bandwidth: e.bandwidth,
        Time: e.segmentTime
    };
    for (const [s, r] of Object.entries(i)){
        const n = new RegExp(`\\$${s}(?:%0(\\d+)d)?\\$`, "g");
        t = t.replaceAll(n, (o, d)=>(0, _esnextEsmJs.isNullable)(r) ? o : (0, _esnextEsmJs.isNullable)(d) ? r : r.padStart(parseInt(d, 10), "0"));
    }
    return t;
}, ur = (a, e)=>{
    const i = new DOMParser().parseFromString(a, "application/xml"), s = {
        video: [],
        audio: [],
        text: []
    }, r = i.children[0], n = r.getElementsByTagName("Period")[0], o = r.querySelector("BaseURL")?.textContent?.trim() ?? "", d = n.children, c = r.getAttribute("type") === "dynamic", u = r.getAttribute("availabilityStartTime"), h = u ? new Date(u).getTime() : void 0;
    let f;
    const p = r.getAttribute("mediaPresentationDuration"), S = n.getAttribute("duration"), y = r.getElementsByTagName("vk:Attrs")[0]?.getElementsByTagName("vk:XPlaybackDuration")[0].textContent;
    if (p) f = qi(p);
    else if (S) {
        const A = qi(S);
        (0, _esnextEsmJs.isNonNullable)(A) && (f = A);
    } else y && (f = parseInt(y, 10));
    let w = 0;
    const _ = r.getAttribute("profiles")?.split(",") ?? [], M = _.includes(Zt.WEBM_AS_IN_FFMPEG) || _.includes(Zt.WEBM_AS_IN_SPEC) ? At.WEBM : At.MP4;
    for (const A of d){
        const L = A.getAttribute("mimeType"), J = A.getAttribute("codecs"), q = A.getAttribute("contentType") ?? L?.split("/")[0], U = A.getAttribute("profiles")?.split(",") ?? [], W = A.querySelectorAll("Representation"), D = A.querySelector("SegmentTemplate");
        if (q === pe.TEXT) {
            for (const I of W){
                const Y = I.getAttribute("id") || "", oe = A.getAttribute("lang"), le = A.getAttribute("label"), xe = I.querySelector("BaseURL")?.textContent?.trim() ?? "", B = new URL(xe || o, e).toString(), j = Y.includes("_auto");
                s[pe.TEXT].push({
                    id: Y,
                    lang: oe,
                    label: le,
                    isAuto: j,
                    kind: pe.TEXT,
                    url: B
                });
            }
            continue;
        }
        for (const I of W){
            const Y = I.getAttribute("mimeType") ?? L, oe = I.getAttribute("codecs") ?? J ?? "", le = I.getAttribute("contentType") ?? Y?.split("/")[0] ?? q, xe = A.getAttribute("profiles")?.split(",") ?? [], B = parseInt(I.getAttribute("width") ?? "", 10), j = parseInt(I.getAttribute("height") ?? "", 10), de = parseInt(I.getAttribute("bandwidth") ?? "", 10) / 1e3, ue = I.getAttribute("frameRate") ?? "", ye = I.getAttribute("quality") ?? void 0, je = ue ? dr(ue) : void 0, di = I.getAttribute("id") ?? (w++).toString(10), Vt = le === "video" ? `${j}p` : le === "audio" ? `${de}Kbps` : oe, X = `${di}@${Vt}`, Te = I.querySelector("BaseURL")?.textContent?.trim() ?? "", ve = new URL(Te || o, e).toString(), Ce = [
                ..._,
                ...U,
                ...xe
            ];
            let Ge;
            const $t = I.querySelector("SegmentBase"), Ee = I.querySelector("SegmentTemplate") ?? D;
            if ($t) {
                const Re = I.querySelector("SegmentBase Initialization")?.getAttribute("range") ?? "", [Me, ui] = Re.split("-").map((mt)=>parseInt(mt, 10)), Xe = {
                    from: Me,
                    to: ui
                }, Pt = I.querySelector("SegmentBase")?.getAttribute("indexRange"), [hi, Ut] = Pt ? Pt.split("-").map((mt)=>parseInt(mt, 10)) : [], Lt = Pt ? {
                    from: hi,
                    to: Ut
                } : void 0;
                Ge = {
                    type: Pe.BYTE_RANGE,
                    url: ve,
                    initRange: Xe,
                    indexRange: Lt
                };
            } else if (Ee) {
                const Re = {
                    representationId: I.getAttribute("id") ?? void 0,
                    bandwidth: I.getAttribute("bandwidth") ?? void 0
                }, Me = parseInt(Ee.getAttribute("timescale") ?? "", 10), ui = Ee.getAttribute("initialization") ?? "", Xe = Ee.getAttribute("media"), Pt = parseInt(Ee.getAttribute("startNumber") ?? "", 10) ?? 1, hi = bt(ui, Re);
                if (!Xe) throw new ReferenceError("No media attribute in SegmentTemplate");
                const Ut = Ee.querySelectorAll("SegmentTimeline S") ?? [], Lt = [];
                let mt = 0, li = "", fi = 0;
                if (Ut.length) {
                    let Ht = Pt, Ie = 0;
                    for (const gt of Ut){
                        const _e = parseInt(gt.getAttribute("d") ?? "", 10), it = parseInt(gt.getAttribute("r") ?? "", 10) || 0, Yt = parseInt(gt.getAttribute("t") ?? "", 10);
                        Ie = Number.isFinite(Yt) ? Yt : Ie;
                        const pi = _e / Me * 1e3, $s = Ie / Me * 1e3;
                        for(let Gt = 0; Gt < it + 1; Gt++){
                            const Ps = bt(Xe, {
                                ...Re,
                                segmentNumber: Ht.toString(10),
                                segmentTime: (Ie + Gt * _e).toString(10)
                            }), Mi = ($s ?? 0) + Gt * pi, Ls = Mi + pi;
                            Ht++, Lt.push({
                                time: {
                                    from: Mi,
                                    to: Ls
                                },
                                url: Ps
                            });
                        }
                        Ie += (it + 1) * _e, mt += (it + 1) * pi;
                    }
                    fi = Ie / Me * 1e3, li = bt(Xe, {
                        ...Re,
                        segmentNumber: Ht.toString(10),
                        segmentTime: Ie.toString(10)
                    });
                } else if ((0, _esnextEsmJs.isNonNullable)(f)) {
                    const Ie = parseInt(Ee.getAttribute("duration") ?? "", 10) / Me * 1e3, gt = Math.ceil(f / Ie);
                    let _e = 0;
                    for(let it = 1; it < gt; it++){
                        const Yt = bt(Xe, {
                            ...Re,
                            segmentNumber: it.toString(10),
                            segmentTime: _e.toString(10)
                        });
                        Lt.push({
                            time: {
                                from: _e,
                                to: _e + Ie
                            },
                            url: Yt
                        }), _e += Ie;
                    }
                    fi = _e, li = bt(Xe, {
                        ...Re,
                        segmentNumber: gt.toString(10),
                        segmentTime: _e.toString(10)
                    });
                }
                const ks = {
                    time: {
                        from: fi,
                        to: 1 / 0
                    },
                    url: li
                };
                Ge = {
                    type: Pe.TEMPLATE,
                    baseUrl: ve,
                    segmentTemplateUrl: Xe,
                    initUrl: hi,
                    totalSegmentsDurationMs: mt,
                    segments: Lt,
                    nextSegmentBeyondManifest: ks,
                    timescale: Me
                };
            } else throw new ReferenceError("Unknown MPD segment referencing type");
            if (!le || !Y) continue;
            const Je = {
                video: pe.VIDEO,
                audio: pe.AUDIO,
                text: pe.TEXT
            }[le];
            Je && s[Je].push({
                id: X,
                kind: Je,
                segmentReference: Ge,
                profiles: Ce,
                duration: f,
                bitrate: de,
                mime: Y,
                codecs: oe,
                width: B,
                height: j,
                fps: je,
                quality: ye
            });
        }
    }
    return {
        dynamic: c,
        liveAvailabilityStartTime: h,
        duration: f,
        container: M,
        representations: s
    };
}, hr = ({ id: a, width: e, height: t, bitrate: i, fps: s, quality: r })=>{
    const n = (r ? ri(r) : void 0) ?? (0, _esnextEsmJs.videoSizeToQuality)({
        width: e,
        height: t
    });
    return n && {
        id: a,
        quality: n,
        bitrate: i,
        size: {
            width: e,
            height: t
        },
        fps: s
    };
}, lr = ({ id: a, bitrate: e })=>({
        id: a,
        bitrate: e
    }), fr = (a, e, t)=>{
    const i = e.indexOf(t);
    return a.at(Math.round(a.length * i / e.length)) ?? a.at(-1);
}, pr = ({ id: a, lang: e, label: t, url: i, isAuto: s })=>({
        id: a,
        url: i,
        isAuto: s,
        type: "internal",
        language: e,
        label: t
    }), zi = (a)=>"url" in a, St = (a)=>a.type === Pe.TEMPLATE, wi = (a)=>a instanceof DOMException && (a.name === "AbortError" || a.code === 20);
class Wi {
    onLastSegment$ = new (0, _esnextEsmJs.ValueSubject)(!1);
    fullyBuffered$ = new (0, _esnextEsmJs.ValueSubject)(!1);
    playingRepresentation$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    playingRepresentationInit$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    error$ = new (0, _esnextEsmJs.Subject);
    gaps = [];
    subscription = new (0, _esnextEsmJs.Subscription);
    kind;
    container;
    containerParser;
    initData;
    parsedInitData;
    representations;
    segments;
    allInitsLoaded = !1;
    activeSegments = new Set;
    mediaSource;
    playingRepresentationId;
    downloadingRepresentationId;
    switchingToRepresentationId;
    sourceBuffer;
    downloadAbortController = new Et;
    destroyAbortController = new Et;
    getCurrentPosition;
    isActiveLowLatency;
    tuning;
    forwardBufferTarget;
    fetcher;
    bufferLimit = 1 / 0;
    sourceBufferTaskQueue;
    gapDetectionIdleCallback;
    initLoadIdleCallback;
    failedDownloads = 0;
    compatibilityMode;
    preloadOnly;
    isLive = !1;
    liveUpdateSegmentIndex = 0;
    liveInitialAdditionalOffset = 0;
    isSeekingLive = !1;
    index = 0;
    constructor(e, t, i, s, { fetcher: r, tuning: n, getCurrentPosition: o, isActiveLowLatency: d, compatibilityMode: c = !1, manifest: u }){
        switch(this.fetcher = r, this.tuning = n, this.compatibilityMode = c, this.forwardBufferTarget = n.dash.forwardBufferTargetAuto, this.getCurrentPosition = o, this.isActiveLowLatency = d, this.isLive = !!u?.dynamic, this.container = i, i){
            case At.MP4:
                this.containerParser = tr;
                break;
            case At.WEBM:
                this.containerParser = cr;
                break;
            default:
                (0, _esnextEsmJs.assertNever)(i);
        }
        this.initData = new Map(s.map((h)=>[
                h.id,
                null
            ])), this.segments = new Map, this.parsedInitData = new Map, this.representations = new Map(s.map((h)=>[
                h.id,
                h
            ])), this.kind = e, this.mediaSource = t, this.sourceBuffer = null;
    }
    startWith = (0, _esnextEsmJs.abortable)(this.destroyAbortController.signal, (async function*(e) {
        const t = this.representations.get(e);
        (0, _esnextEsmJs.assertNonNullable)(t, `Cannot find representation ${e}`), this.playingRepresentationId = e, this.downloadingRepresentationId = e, this.sourceBuffer = this.mediaSource.addSourceBuffer(`${t.mime}; codecs="${t.codecs}"`), this.sourceBufferTaskQueue = new Pa(this.sourceBuffer), this.subscription.add((0, _esnextEsmJs.fromEvent)(this.sourceBuffer, "updateend").subscribe(()=>{
            this.checkEjectedSegments(), this.maintain();
        }, (n)=>this.error$.next({
                id: "SegmentEjection",
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: "Error when trying to clear segments ejected by browser",
                thrown: n
            }))), this.subscription.add((0, _esnextEsmJs.fromEvent)(this.sourceBuffer, "error").subscribe(()=>this.error$.next({
                id: "SourceBuffer",
                category: (0, _esnextEsmJs.ErrorCategory).VIDEO_PIPELINE,
                message: "SourceBuffer Error event fired"
            }))), this.subscription.add(this.sourceBufferTaskQueue.bufferFull$.subscribe((n)=>{
            if (!this.sourceBuffer) return;
            const o = Math.min(this.bufferLimit, Yi(this.sourceBuffer.buffered) * .8);
            this.bufferLimit = o, this.pruneBuffer(this.getCurrentPosition(), n);
        })), this.subscription.add(this.sourceBufferTaskQueue.error$.subscribe((n)=>this.error$.next(n))), yield this.loadInit(t, "high", !0);
        const i = this.initData.get(t.id), s = this.segments.get(t.id), r = this.parsedInitData.get(t.id);
        (0, _esnextEsmJs.assertNonNullable)(i, "No init buffer for starting representation"), (0, _esnextEsmJs.assertNonNullable)(s, "No segments for starting representation"), i instanceof ArrayBuffer && (this.searchGaps(s, t), yield this.sourceBufferTaskQueue.append(i, this.destroyAbortController.signal), this.playingRepresentation$.next(this.playingRepresentationId), this.playingRepresentationInit$.next(r));
    }).bind(this));
    switchTo = (0, _esnextEsmJs.abortable)(this.destroyAbortController.signal, (async function*(e) {
        if (e === this.downloadingRepresentationId || e === this.switchingToRepresentationId) return;
        this.switchingToRepresentationId = e;
        const t = this.representations.get(e);
        (0, _esnextEsmJs.assertNonNullable)(t, `No such representation ${e}`);
        let i = this.segments.get(e), s = this.initData.get(e);
        if ((0, _esnextEsmJs.isNullable)(s) || (0, _esnextEsmJs.isNullable)(i) ? yield this.loadInit(t, "high", !1) : s instanceof Promise && (yield s), i = this.segments.get(e), (0, _esnextEsmJs.assertNonNullable)(i, "No segments for starting representation"), s = this.initData.get(e), !s || !(s instanceof ArrayBuffer) || !this.sourceBuffer) return;
        this.switchingToRepresentationId = void 0, this.downloadingRepresentationId = e, this.abort(), yield this.sourceBufferTaskQueue.append(s, this.downloadAbortController.signal);
        const r = this.getCurrentPosition();
        (0, _esnextEsmJs.isNonNullable)(r) && (this.isLive || (i.forEach((n)=>n.status = N.NONE), this.pruneBuffer(r, 1 / 0, !0)), this.maintain(r));
    }).bind(this));
    abort() {
        for (const e of this.activeSegments)this.abortSegment(e.segment);
        this.activeSegments.clear(), this.downloadAbortController.abort(), this.downloadAbortController = new Et, this.abortBuffer();
    }
    maintain(e = this.getCurrentPosition()) {
        if ((0, _esnextEsmJs.isNullable)(e) || (0, _esnextEsmJs.isNullable)(this.downloadingRepresentationId) || (0, _esnextEsmJs.isNullable)(this.playingRepresentationId) || (0, _esnextEsmJs.isNullable)(this.sourceBuffer) || this.isSeekingLive) return;
        const t = this.representations.get(this.downloadingRepresentationId), i = this.segments.get(this.downloadingRepresentationId);
        if ((0, _esnextEsmJs.assertNonNullable)(t, `No such representation ${this.downloadingRepresentationId}`), !i) return;
        const s = i.find((c)=>e >= c.time.from && e < c.time.to);
        let r = e;
        if (this.playingRepresentationId !== this.downloadingRepresentationId) {
            const u = yt(this.sourceBuffer.buffered, e), h = s ? s.time.to + 100 : -1 / 0;
            s && s.time.to - e < this.tuning.dash.maxSegmentDurationLeftToSelectNextSegment && u >= s.time.to - e + 100 && (r = h);
        }
        if (isFinite(this.bufferLimit) && Yi(this.sourceBuffer.buffered) >= this.bufferLimit) {
            const c = yt(this.sourceBuffer.buffered, e), u = Math.min(this.forwardBufferTarget, this.bufferLimit) * this.tuning.dash.minSafeBufferThreshold;
            this.pruneBuffer(e, 1 / 0, c < u);
            return;
        }
        let o = [];
        if (!this.activeSegments.size && (o = this.selectForwardBufferSegments(i, t.segmentReference.type, r), o.length)) {
            let c = "auto";
            if (this.tuning.dash.useFetchPriorityHints && s) {
                if (o.includes(s)) c = "high";
                else {
                    const u = o.at(0);
                    u && u.time.from - s.time.to >= this.forwardBufferTarget / 2 && (c = "low");
                }
            }
            this.loadSegments(o, t, c);
        }
        (!this.preloadOnly && !this.allInitsLoaded && s && s.status === N.FED && !o.length && yt(this.sourceBuffer.buffered, e) > 3e3 || this.isActiveLowLatency()) && this.loadNextInit();
        const d = i.at(-1);
        d && d.status === N.FED && (this.fullyBuffered$.next(!0), this.isLive || this.onLastSegment$.next(s === d));
    }
    searchGaps(e, t) {
        this.gaps = [];
        let i = 0;
        const s = this.isLive ? this.liveInitialAdditionalOffset : 0;
        for (const r of e)Math.trunc(r.time.from - i) > 0 && this.gaps.push({
            representation: t.id,
            from: i,
            to: r.time.from + s
        }), i = r.time.to;
        (0, _esnextEsmJs.isNonNullable)(t.duration) && t.duration - i > 0 && this.gaps.push({
            representation: t.id,
            from: i,
            to: t.duration
        });
    }
    getActualLiveStartingSegments(e) {
        const t = e.segments, i = this.isActiveLowLatency() ? this.tuning.dashCmafLive.lowLatency.maxTargetOffset : this.tuning.dashCmafLive.maxActiveLiveOffset, s = [];
        let r = 0, n = t.length - 1;
        do s.unshift(t[n]), r += t[n].time.to - t[n].time.from, n--;
        while (r < i && n >= 0);
        return this.liveInitialAdditionalOffset = r - i, this.isActiveLowLatency() ? [
            s[0]
        ] : s;
    }
    getLiveSegmentsToLoadState(e) {
        const t = e?.representations[this.kind].find((s)=>s.id === this.downloadingRepresentationId);
        if (!t) return;
        const i = this.segments.get(t.id);
        if (i?.length) return {
            from: i[0].time.from,
            to: i[i.length - 1].time.to
        };
    }
    seekLive = (0, _esnextEsmJs.abortable)(this.destroyAbortController.signal, (async function*(e) {
        if (this.isSeekingLive = !0, !this.downloadingRepresentationId || !e) return;
        for (const o of this.representations.keys()){
            const d = e.find((h)=>h.id === o);
            d && this.representations.set(o, d);
            const c = this.representations.get(o);
            if (!c || !St(c.segmentReference)) return;
            const u = this.getActualLiveStartingSegments(c.segmentReference);
            this.segments.set(c.id, u);
        }
        const t = this.switchingToRepresentationId ?? this.downloadingRepresentationId, i = this.representations.get(t);
        (0, _esnextEsmJs.assertNonNullable)(i);
        const s = this.segments.get(t);
        (0, _esnextEsmJs.assertNonNullable)(s, "No segments for starting representation");
        const r = this.initData.get(t);
        if ((0, _esnextEsmJs.assertNonNullable)(r, "No init buffer for starting representation"), !(r instanceof ArrayBuffer)) return;
        const n = this.getDebugBufferState();
        this.liveUpdateSegmentIndex = 0, this.abort(), n && (yield this.sourceBufferTaskQueue.remove(n.from * 1e3, n.to * 1e3, this.destroyAbortController.signal)), this.searchGaps(s, i), yield this.sourceBufferTaskQueue.append(r, this.destroyAbortController.signal), this.isSeekingLive = !1;
    }).bind(this));
    updateLive(e) {
        for (const t of e?.representations[this.kind].values() ?? []){
            if (!t || !St(t.segmentReference)) return;
            const i = t.segmentReference.segments.map((o)=>({
                    ...o,
                    status: N.NONE,
                    size: void 0
                })), s = this.segments.get(t.id) ?? [], r = s.at(-1)?.time.to ?? 0, n = i?.findIndex((o)=>Math.floor(r) >= Math.floor(o.time.from) && Math.floor(r) <= Math.floor(o.time.to));
            if (n === -1) {
                this.liveUpdateSegmentIndex = 0;
                const o = this.getActualLiveStartingSegments(t.segmentReference);
                this.segments.set(t.id, o);
            } else {
                const o = i.slice(n + 1);
                this.segments.set(t.id, [
                    ...s,
                    ...o
                ]);
            }
        }
    }
    updateLowLatencyLive(e) {
        if (this.isActiveLowLatency()) for (const t of this.representations.values()){
            const i = t.segmentReference;
            if (!St(i)) return;
            const s = Math.round(e.segment.time.to * i.timescale / 1e3).toString(10), r = bt(i.segmentTemplateUrl, {
                segmentTime: s
            }), n = this.segments.get(t.id) ?? [], o = n.find((c)=>Math.floor(c.time.from) === Math.floor(e.segment.time.from));
            o && (o.time.to = e.segment.time.to), !!n.find((c)=>Math.floor(c.time.from) === Math.floor(e.segment.time.to)) || n.push({
                status: N.NONE,
                time: {
                    from: e.segment.time.to,
                    to: 1 / 0
                },
                url: r
            });
        }
    }
    findSegmentStartTime(e) {
        const t = this.switchingToRepresentationId ?? this.downloadingRepresentationId ?? this.playingRepresentationId;
        if (!t) return;
        const i = this.segments.get(t);
        return i ? i.find((r)=>r.time.from <= e && r.time.to >= e)?.time.from ?? void 0 : void 0;
    }
    setTarget(e) {
        this.forwardBufferTarget = e;
    }
    setPreloadOnly(e) {
        this.preloadOnly = e;
    }
    destroy() {
        if (this.initData.clear(), this.segments.clear(), this.parsedInitData.clear(), this.representations.clear(), this.sourceBufferTaskQueue?.destroy(), this.gapDetectionIdleCallback && window.cancelIdleCallback && window.cancelIdleCallback(this.gapDetectionIdleCallback), this.initLoadIdleCallback && window.cancelIdleCallback && window.cancelIdleCallback(this.initLoadIdleCallback), this.subscription.unsubscribe(), this.sourceBuffer) {
            this.mediaSource.readyState === "open" && this.abortBuffer();
            try {
                this.mediaSource.removeSourceBuffer(this.sourceBuffer);
            } catch (e) {
                if (!(e instanceof DOMException && e.name === "NotFoundError")) throw e;
            }
        }
        this.sourceBuffer = null, this.downloadAbortController.abort(), this.destroyAbortController.abort();
    }
    selectForwardBufferSegments(e, t, i) {
        return this.isLive ? this.selectForwardBufferSegmentsLive(e, i) : this.selectForwardBufferSegmentsRecord(e, t, i);
    }
    selectForwardBufferSegmentsLive(e, t) {
        const i = e.findIndex((s)=>t >= s.time.from && t < s.time.to);
        return this.playingRepresentationId !== this.downloadingRepresentationId && (this.liveUpdateSegmentIndex = i), this.liveUpdateSegmentIndex < e.length ? e.slice(this.liveUpdateSegmentIndex++) : [];
    }
    selectForwardBufferSegmentsRecord(e, t, i) {
        const s = e.findIndex(({ status: h, time: { from: f, to: p } }, S)=>{
            const $ = f <= i && p >= i, y = f > i || $ || S === 0 && i === 0, w = Math.min(this.forwardBufferTarget, this.bufferLimit), _ = this.preloadOnly && f <= i + w || p <= i + w;
            return (h === N.NONE || h === N.PARTIALLY_EJECTED && y && _ && this.sourceBuffer && !Ei(this.sourceBuffer.buffered, i)) && y && _;
        });
        if (s === -1) return [];
        if (t !== Pe.BYTE_RANGE) return e.slice(s, s + 1);
        const r = e;
        let n = 0, o = 0;
        const d = [], c = this.preloadOnly ? 0 : this.tuning.dash.segmentRequestSize, u = this.preloadOnly ? this.forwardBufferTarget : 0;
        for(let h = s; h < r.length && (n <= c || o <= u); h++){
            const f = r[h];
            if (n += f.byte.to + 1 - f.byte.from, o += f.time.to + 1 - f.time.from, f.status === N.NONE || f.status === N.PARTIALLY_EJECTED) d.push(f);
            else break;
        }
        return d;
    }
    async loadSegments(e, t, i = "auto") {
        t.segmentReference.type === Pe.TEMPLATE ? await this.loadTemplateSegment(e[0], t, i) : await this.loadByteRangeSegments(e, t, i);
    }
    async loadTemplateSegment(e, t, i = "auto") {
        e.status = N.DOWNLOADING;
        const s = {
            segment: e,
            loadedBytes: 0,
            feedingBytes: 0,
            fedBytes: 0,
            representationId: t.id
        };
        this.activeSegments.add(s);
        const { range: r, url: n, signal: o, onProgress: d, onProgressTasks: c } = this.prepareTemplateFetchSegmentParams(e, t);
        this.failedDownloads && o && (await (0, _esnextEsmJs.abortable)(o, (async function*() {
            const u = (0, _esnextEsmJs.getExponentialDelay)(this.failedDownloads, this.tuning.downloadBackoff);
            yield new Promise((h)=>setTimeout(h, u));
        }).bind(this))(), o.aborted && this.abortActiveSegments([
            e
        ]));
        try {
            const u = await this.fetcher.fetch(n, {
                range: r,
                signal: o,
                onProgress: d,
                priority: i,
                isLowLatency: this.isActiveLowLatency()
            });
            if (!u) return;
            const h = new DataView(u);
            if (this.isActiveLowLatency()) {
                const f = t.segmentReference.timescale;
                s.segment.time.to = this.containerParser.getSegmentEndTime(h, f);
            }
            d && s.feedingBytes && c ? await Promise.all(c) : await this.sourceBufferTaskQueue.append(h, o), s.segment.status = N.DOWNLOADED, this.onSegmentFullyAppended(s, t.id), this.failedDownloads = 0;
        } catch (u) {
            if (!wi(u)) return;
            this.abortActiveSegments([
                e
            ]), this.onSegmentDownloadError(u);
        }
    }
    async loadByteRangeSegments(e, t, i = "auto") {
        if (!e.length) return;
        for (const d of e)d.status = N.DOWNLOADING, this.activeSegments.add({
            segment: d,
            loadedBytes: 0,
            feedingBytes: 0,
            fedBytes: 0,
            representationId: t.id
        });
        const { range: s, url: r, signal: n, onProgress: o } = this.prepareByteRangeFetchSegmentParams(e, t);
        this.failedDownloads && n && (await (0, _esnextEsmJs.abortable)(n, (async function*() {
            const d = (0, _esnextEsmJs.getExponentialDelay)(this.failedDownloads, this.tuning.downloadBackoff);
            yield new Promise((c)=>setTimeout(c, d));
        }).bind(this))(), n.aborted && this.abortActiveSegments(e));
        try {
            await this.fetcher.fetch(r, {
                range: s,
                onProgress: o,
                signal: n,
                priority: i
            }), this.failedDownloads = 0;
        } catch (d) {
            if (!wi(d)) return;
            this.abortActiveSegments(e), this.onSegmentDownloadError(d);
        }
    }
    prepareByteRangeFetchSegmentParams(e, t) {
        if (St(t.segmentReference)) throw new Error("Representation is not byte range type");
        const i = t.segmentReference.url, s = {
            from: e.at(0).byte.from,
            to: e.at(-1).byte.to
        }, { signal: r } = this.downloadAbortController, n = ()=>{
            this.abort();
        };
        return {
            url: i,
            range: s,
            signal: r,
            onProgress: (d, c)=>{
                if (!r.aborted) try {
                    this.onSomeByteRangesDataLoaded({
                        dataView: d,
                        loaded: c,
                        signal: r,
                        onSegmentAppendFailed: n,
                        globalFrom: s ? s.from : 0,
                        representationId: t.id
                    });
                } catch (u) {
                    this.error$.next({
                        id: "SegmentFeeding",
                        category: (0, _esnextEsmJs.ErrorCategory).VIDEO_PIPELINE,
                        message: "Error when feeding segments",
                        thrown: u
                    });
                }
            }
        };
    }
    prepareTemplateFetchSegmentParams(e, t) {
        if (!St(t.segmentReference)) throw new Error("Representation is not template type");
        const i = new URL(e.url, t.segmentReference.baseUrl);
        this.isActiveLowLatency() && i.searchParams.set("low-latency", "yes");
        const s = i.toString(), { signal: r } = this.downloadAbortController, n = ()=>{
            this.abort();
        }, o = [], c = this.isActiveLowLatency() || this.tuning.dash.enableSubSegmentBufferFeeding && this.liveUpdateSegmentIndex < 3 ? (u, h)=>{
            if (!r.aborted) try {
                const f = this.onSomeTemplateDataLoaded({
                    dataView: u,
                    loaded: h,
                    signal: r,
                    onSegmentAppendFailed: n,
                    representationId: t.id
                });
                o.push(f);
            } catch (f) {
                this.error$.next({
                    id: "SegmentFeeding",
                    category: (0, _esnextEsmJs.ErrorCategory).VIDEO_PIPELINE,
                    message: "Error when feeding segments",
                    thrown: f
                });
            }
        } : void 0;
        return {
            url: s,
            signal: r,
            onProgress: c,
            onProgressTasks: o
        };
    }
    abortActiveSegments(e) {
        for (const t of this.activeSegments)e.includes(t.segment) && this.abortSegment(t.segment);
    }
    onSegmentDownloadError(e) {
        let t = !1;
        const i = this.getCurrentPosition();
        this.sourceBuffer && (0, _esnextEsmJs.isNonNullable)(i) && (t = yt(this.sourceBuffer?.buffered, i) >= this.tuning.downloadBackoff.bufferThreshold), this.failedDownloads++, t || this.error$.next({
            id: "SegmentDownload",
            category: (0, _esnextEsmJs.ErrorCategory).NETWORK,
            message: "Error when fetching segments",
            thrown: e
        });
    }
    async onSomeTemplateDataLoaded({ dataView: e, representationId: t, loaded: i, onSegmentAppendFailed: s, signal: r }) {
        if (!(!this.activeSegments.size || !this.representations.get(t))) for (const o of this.activeSegments){
            const { segment: d } = o;
            if (o.representationId === t) {
                if (r.aborted) {
                    s();
                    continue;
                }
                if (o.loadedBytes = i, o.loadedBytes > o.feedingBytes) {
                    const c = new DataView(e.buffer, e.byteOffset + o.feedingBytes, o.loadedBytes - o.feedingBytes), u = this.containerParser.parseFeedableSegmentChunk(c);
                    u?.byteLength && (d.status = N.PARTIALLY_FED, o.feedingBytes += u.byteLength, await this.sourceBufferTaskQueue.append(u), o.fedBytes += u.byteLength);
                }
            }
        }
    }
    onSomeByteRangesDataLoaded({ dataView: e, representationId: t, globalFrom: i, loaded: s, signal: r, onSegmentAppendFailed: n }) {
        if (!this.activeSegments.size) return;
        const o = this.representations.get(t);
        if (!o) return;
        const d = o.segmentReference.type, c = e.byteLength;
        for (const u of this.activeSegments){
            const { segment: h } = u, f = d === Pe.BYTE_RANGE, p = f ? h.byte.to - h.byte.from + 1 : c;
            if (u.representationId !== t || !(!f || h.byte.from >= i && h.byte.to < i + e.byteLength)) continue;
            if (r.aborted) {
                n();
                continue;
            }
            const $ = f ? h.byte.from - i : 0, y = f ? h.byte.to - i : e.byteLength, w = $ < s, _ = y <= s;
            if (h.status === N.DOWNLOADING && w && _) {
                h.status = N.DOWNLOADED;
                const M = new DataView(e.buffer, e.byteOffset + $, p);
                this.sourceBufferTaskQueue.append(M, r).then((A)=>A && !r.aborted ? this.onSegmentFullyAppended(u, t) : n());
            } else if (this.tuning.dash.enableSubSegmentBufferFeeding && w && (u.loadedBytes = Math.min(p, s - $), u.loadedBytes > u.feedingBytes)) {
                const M = new DataView(e.buffer, e.byteOffset + $ + u.feedingBytes, u.loadedBytes - u.feedingBytes), A = u.loadedBytes === p ? M : this.containerParser.parseFeedableSegmentChunk(M);
                A?.byteLength && (h.status = N.PARTIALLY_FED, u.feedingBytes += A.byteLength, this.sourceBufferTaskQueue.append(A, r).then((L)=>{
                    if (r.aborted) n();
                    else if (L) u.fedBytes += A.byteLength, u.fedBytes === p && this.onSegmentFullyAppended(u, t);
                    else {
                        if (u.feedingBytes < p) return;
                        n();
                    }
                }));
            }
        }
    }
    onSegmentFullyAppended(e, t) {
        this.playingRepresentationId = t, this.playingRepresentation$.next(this.playingRepresentationId), this.playingRepresentationInit$.next(this.parsedInitData.get(this.playingRepresentationId)), e.segment.status = N.FED, zi(e.segment) && (e.segment.size = e.fedBytes);
        for (const i of this.representations.values())if (i.id !== t) for (const s of this.segments.get(i.id) ?? [])s.status === N.FED && s.time.from === e.segment.time.from && s.time.to === e.segment.time.to && (s.status = N.NONE);
        this.isActiveLowLatency() && this.updateLowLatencyLive(e), this.activeSegments.delete(e), this.detectGapsWhenIdle(t, [
            e.segment
        ]);
    }
    abortSegment(e) {
        this.tuning.useDashAbortPartiallyFedSegment && e.status === N.PARTIALLY_FED || e.status === N.PARTIALLY_EJECTED ? (this.sourceBufferTaskQueue.remove(e.time.from, e.time.to).then(()=>e.status = N.NONE), e.status = N.PARTIALLY_EJECTED) : e.status = N.NONE;
        for (const i of this.activeSegments.values())if (i.segment === e) {
            this.activeSegments.delete(i);
            break;
        }
    }
    loadNextInit() {
        if (this.allInitsLoaded || this.initLoadIdleCallback) return;
        let e = null, t = !1;
        for (const [s, r] of this.initData.entries()){
            const n = r instanceof Promise;
            t ||= n, r === null && (e = s);
        }
        if (!e) {
            this.allInitsLoaded = !0;
            return;
        }
        if (t) return;
        const i = this.representations.get(e);
        i && (this.initLoadIdleCallback = Hi(()=>this.loadInit(i, "low", !1).finally(()=>this.initLoadIdleCallback = null)));
    }
    async loadInit(e, t = "auto", i = !1) {
        const s = this.tuning.dash.useFetchPriorityHints ? t : "auto", n = (!i && this.failedDownloads > 0 ? (0, _esnextEsmJs.abortable)(this.destroyAbortController.signal, (async function*() {
            const o = (0, _esnextEsmJs.getExponentialDelay)(this.failedDownloads, this.tuning.downloadBackoff);
            yield new Promise((d)=>setTimeout(d, o));
        }).bind(this))() : Promise.resolve()).then(()=>this.fetcher.fetchRepresentation(e.segmentReference, this.containerParser, s)).then(async (o)=>{
            if (!o) return;
            const { init: d, dataView: c, segments: u } = o, h = c.buffer.slice(c.byteOffset, c.byteOffset + c.byteLength);
            this.initData.set(e.id, h);
            let f = u;
            this.isLive && St(e.segmentReference) && (f = this.getActualLiveStartingSegments(e.segmentReference)), (!this.isLive || !this.segments.has(e.id)) && this.segments.set(e.id, f), d && this.parsedInitData.set(e.id, d);
        }).then(()=>this.failedDownloads = 0, (o)=>{
            this.initData.set(e.id, null), i && this.error$.next({
                id: "LoadInits",
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: "loadInit threw",
                thrown: o
            });
        });
        return this.initData.set(e.id, n), n;
    }
    async pruneBuffer(e, t, i = !1) {
        if (!this.sourceBuffer || !this.playingRepresentationId || (0, _esnextEsmJs.isNullable)(e) || this.sourceBuffer.updating) return !1;
        let s = 0, r = 1 / 0, n = -1 / 0, o = !1;
        const d = (c)=>{
            r = Math.min(r, c.time.from), n = Math.max(n, c.time.to);
            const u = zi(c) ? c.size ?? 0 : c.byte.to - c.byte.from;
            s += u;
        };
        for (const c of this.segments.values())for (const u of c){
            if (u.time.to >= e - this.tuning.dash.bufferPruningSafeZone || s >= t) break;
            u.status === N.FED && d(u);
        }
        if (o = isFinite(r) && isFinite(n), !o) {
            s = 0, r = 1 / 0, n = -1 / 0;
            for (const c of this.segments.values())for (const u of c){
                if (u.time.from < e + Math.min(this.forwardBufferTarget, this.bufferLimit) || s > t) break;
                u.status === N.FED && d(u);
            }
        }
        if (o = isFinite(r) && isFinite(n), !o) for(let c = 0; c < this.sourceBuffer.buffered.length; c++){
            const u = this.sourceBuffer.buffered.start(c) * 1e3, h = this.sourceBuffer.buffered.end(c) * 1e3;
            for (const f of this.segments.values())for (const p of f)if (p.status === N.NONE && Math.round(p.time.from) <= Math.round(u) && Math.round(p.time.to) >= Math.round(h)) {
                r = u, n = h;
                break;
            }
        }
        if (o = isFinite(r) && isFinite(n), !o && i) {
            s = 0, r = 1 / 0, n = -1 / 0;
            const c = Math.min(this.forwardBufferTarget, this.bufferLimit) * this.tuning.dash.minSafeBufferThreshold;
            for (const u of this.segments.values())for (const h of u)h.time.from > e + c && h.status === N.FED && d(h);
        }
        return o = isFinite(r) && isFinite(n), o ? this.sourceBufferTaskQueue.remove(r, n) : !1;
    }
    abortBuffer() {
        if (!this.sourceBuffer || this.mediaSource.readyState !== "open") return;
        const e = this.playingRepresentationId && this.initData.get(this.playingRepresentationId), t = e instanceof ArrayBuffer ? e : void 0;
        this.sourceBufferTaskQueue.abort(t);
    }
    getDebugBufferState() {
        if (!(!this.sourceBuffer || !this.sourceBuffer.buffered.length)) return {
            from: this.sourceBuffer.buffered.start(0),
            to: this.sourceBuffer.buffered.end(this.sourceBuffer.buffered.length - 1)
        };
    }
    detectGaps(e, t) {
        if (this.sourceBuffer) for (const i of t){
            let s = {
                representation: e,
                from: i.time.from,
                to: i.time.to
            };
            for(let r = 0; r < this.sourceBuffer.buffered.length; r++){
                const n = this.sourceBuffer.buffered.start(r) * 1e3, o = this.sourceBuffer.buffered.end(r) * 1e3;
                if (!(o <= i.time.from || n >= i.time.to)) {
                    if (n <= i.time.from && o >= i.time.to) {
                        s = void 0;
                        break;
                    }
                    o > i.time.from && o < i.time.to && (s.from = o), n < i.time.to && n > i.time.from && (s.to = n);
                }
            }
            s && s.to - s.from > 1 && !this.gaps.some((r)=>s && r.from === s.from && r.to === s.to) && this.gaps.push(s);
        }
    }
    detectGapsWhenIdle(e, t) {
        this.gapDetectionIdleCallback || (this.gapDetectionIdleCallback = Hi(()=>{
            try {
                this.detectGaps(e, t);
            } catch (i) {
                this.error$.next({
                    id: "GapDetection",
                    category: (0, _esnextEsmJs.ErrorCategory).WTF,
                    message: "detectGaps threw",
                    thrown: i
                });
            } finally{
                this.gapDetectionIdleCallback = null;
            }
        }));
    }
    checkEjectedSegments() {
        if ((0, _esnextEsmJs.isNullable)(this.sourceBuffer) || (0, _esnextEsmJs.isNullable)(this.playingRepresentationId)) return;
        const e = [];
        for(let i = 0; i < this.sourceBuffer.buffered.length; i++){
            const s = Math.round(this.sourceBuffer.buffered.start(i) * 1e3), r = Math.round(this.sourceBuffer.buffered.end(i) * 1e3);
            e.push({
                from: s,
                to: r
            });
        }
        const t = 1;
        for (const i of this.segments.values())for (const s of i){
            const { status: r } = s;
            if (r !== N.FED && r !== N.PARTIALLY_EJECTED) continue;
            const n = Math.floor(s.time.from), o = Math.ceil(s.time.to), d = e.some((u)=>u.from - t <= n && u.to + t >= o), c = e.filter((u)=>n >= u.from - t && n <= u.to + t || o >= u.from - t && o <= u.to + t);
            d || (c.length === 1 || this.gaps.some((u)=>u.from === s.time.from || u.to === s.time.to) ? s.status = N.PARTIALLY_EJECTED : s.status = N.NONE);
        }
    }
}
var ki = (a)=>{
    const e = new URL(a);
    return e.searchParams.set("quic", "1"), e.toString();
}, mr = (a)=>{
    const e = a.get("X-Delivery-Type"), t = a.get("X-Reused"), i = e === null ? Ti.HTTP1 : e ?? void 0, s = t === null ? void 0 : ({
        1: !0,
        0: !1
    })[t] ?? void 0;
    return {
        type: i,
        reused: s
    };
}, Tt;
(function(a) {
    a[a.HEADER = 0] = "HEADER", a[a.PARAM = 1] = "PARAM";
})(Tt || (Tt = {}));
class gr {
    throughputEstimator;
    requestQuic;
    lastConnectionType$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    lastConnectionReused$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    lastRequestFirstBytes$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    abortAllController = new Et;
    subscription = new (0, _esnextEsmJs.Subscription);
    compatibilityMode;
    constructor({ throughputEstimator: e, requestQuic: t, compatibilityMode: i = !1 }){
        this.throughputEstimator = e, this.requestQuic = t, this.compatibilityMode = i;
    }
    onHeadersReceived(e) {
        const { type: t, reused: i } = mr(e);
        this.lastConnectionType$.next(t), this.lastConnectionReused$.next(i);
    }
    fetchManifest = (0, _esnextEsmJs.abortable)(this.abortAllController.signal, (async function*(e) {
        let t = e;
        this.requestQuic && (t = ki(t));
        const i = yield Ot(t, {
            signal: this.abortAllController.signal
        }).catch(Dt);
        return i ? (this.onHeadersReceived(i.headers), i.text()) : null;
    }).bind(this));
    fetch = (0, _esnextEsmJs.abortable)(this.abortAllController.signal, (async function*(e, { rangeMethod: t = this.compatibilityMode ? Tt.HEADER : Tt.PARAM, range: i, onProgress: s, priority: r = "auto", signal: n, measureThroughput: o = !0, isLowLatency: d = !1 } = {}) {
        let c = e;
        const u = new Headers;
        if (i) switch(t){
            case Tt.HEADER:
                u.append("Range", `bytes=${i.from}-${i.to}`);
                break;
            case Tt.PARAM:
                {
                    const U = new URL(c, location.href);
                    U.searchParams.append("bytes", `${i.from}-${i.to}`), c = U.toString();
                    break;
                }
            default:
                (0, _esnextEsmJs.assertNever)(t);
        }
        this.requestQuic && (c = ki(c));
        let h = this.abortAllController.signal, f;
        if (n) {
            const U = new Et;
            if (f = (0, _esnextEsmJs.merge)((0, _esnextEsmJs.fromEvent)(this.abortAllController.signal, "abort"), (0, _esnextEsmJs.fromEvent)(n, "abort")).subscribe(()=>{
                try {
                    U.abort();
                } catch (W) {
                    Dt(W);
                }
            }), this.abortAllController.signal.aborted || n.aborted) try {
                U.abort();
            } catch (W) {
                Dt(W);
            }
            h = U.signal;
        }
        const p = (0, _esnextEsmJs.now)(), S = yield Ot(c, {
            priority: r,
            headers: u,
            signal: h
        }).catch(Dt), $ = (0, _esnextEsmJs.now)();
        if (!S) return f?.unsubscribe(), null;
        if (this.throughputEstimator?.addRawRtt($ - p), !S.ok || !S.body) return f?.unsubscribe(), Promise.reject(new Error(`Fetch error ${S.status}: ${S.statusText}`));
        if (this.onHeadersReceived(S.headers), !s && !o) return f?.unsubscribe(), S.arrayBuffer();
        const [y, w] = S.body.tee(), _ = y.getReader();
        o && this.throughputEstimator?.trackStream(w, d);
        let M = 0, A = new Uint8Array(0), L = !1;
        const J = (U)=>{
            f?.unsubscribe(), L = !0, Dt(U);
        }, q = (0, _esnextEsmJs.abortable)(h, (async function*({ done: U, value: W }) {
            if (M === 0 && this.lastRequestFirstBytes$.next((0, _esnextEsmJs.now)() - p), h.aborted) {
                f?.unsubscribe();
                return;
            }
            if (!U && W) {
                const D = new Uint8Array(A.length + W.length);
                D.set(A), D.set(W, A.length), A = D, M += W.byteLength, s?.(new DataView(A.buffer), M), yield _?.read().then(q, J);
            }
        }).bind(this));
        return yield _?.read().then(q, J), f?.unsubscribe(), L ? null : A.buffer;
    }).bind(this));
    async fetchRepresentation(e, t, i = "auto") {
        const { type: s } = e;
        switch(s){
            case Pe.BYTE_RANGE:
                return await this.fetchByteRangeRepresentation(e, t, i) ?? null;
            case Pe.TEMPLATE:
                return await this.fetchTemplateRepresentation(e, i) ?? null;
            default:
                (0, _esnextEsmJs.assertNever)(s);
        }
    }
    destroy() {
        this.abortAllController.abort(), this.subscription.unsubscribe();
    }
    fetchByteRangeRepresentation = (0, _esnextEsmJs.abortable)(this.abortAllController.signal, (async function*(e, t, i) {
        if (e.type !== Pe.BYTE_RANGE) return null;
        const { from: s, to: r } = e.initRange;
        let n = s, o = r, d = !1, c, u;
        e.indexRange && (c = e.indexRange.from, u = e.indexRange.to, d = r + 1 === c, d && (n = Math.min(c, s), o = Math.max(u, r))), n = Math.min(n, 0);
        const h = yield this.fetch(e.url, {
            range: {
                from: n,
                to: o
            },
            priority: i,
            measureThroughput: !1
        });
        if (!h) return null;
        const f = new DataView(h, s - n, r - n + 1);
        if (!t.validateData(f)) throw new Error("Invalid media file");
        const p = t.parseInit(f), S = e.indexRange ?? t.getIndexRange(p);
        if (!S) throw new ReferenceError("No way to load representation index");
        let $;
        if (d) $ = new DataView(h, S.from - n, S.to - S.from + 1);
        else {
            const w = yield this.fetch(e.url, {
                range: S,
                priority: i,
                measureThroughput: !1
            });
            if (!w) return null;
            $ = new DataView(w);
        }
        const y = t.parseSegments($, p, S);
        return {
            init: p,
            dataView: new DataView(h),
            segments: y
        };
    }).bind(this));
    fetchTemplateRepresentation = (0, _esnextEsmJs.abortable)(this.abortAllController.signal, (async function*(e, t) {
        if (e.type !== Pe.TEMPLATE) return null;
        const i = new URL(e.initUrl, e.baseUrl).toString(), s = yield this.fetch(i, {
            priority: t,
            measureThroughput: !1
        });
        return s ? {
            init: null,
            segments: e.segments.map((n)=>({
                    ...n,
                    status: N.NONE,
                    size: void 0
                })),
            dataView: new DataView(s)
        } : null;
    }).bind(this));
}
const Dt = (a)=>{
    if (!wi(a)) throw a;
}, $i = 1e3, ii = (a, e, t)=>t * e + (1 - t) * a, ys = (a, e)=>a.reduce((t, i)=>t + i, 0) / e, Sr = (a, e, t, i)=>{
    let s = 0, r = t;
    const n = ys(a, e), o = e < i ? e : i;
    for(let d = 0; d < o; d++)a[r] > n ? s++ : s--, r = (a.length + r - 1) % a.length;
    return Math.abs(s) === o;
};
class Ii {
    prevReported = void 0;
    rawSeries$;
    smoothedSeries$;
    reportedSeries$;
    smoothed;
    pastMeasures = [];
    takenMeasures = 0;
    measuresCursor = 0;
    params;
    smoothed$;
    debounced$;
    constructor(e){
        this.params = e, this.pastMeasures = Array(e.deviationDepth), this.smoothed = this.prevReported = e.initial, this.smoothed$ = new (0, _esnextEsmJs.ValueSubject)(e.initial), this.debounced$ = new (0, _esnextEsmJs.ValueSubject)(e.initial);
        const t = e.label ?? "value" + Math.random().toString(16).substring(2, 6);
        this.rawSeries$ = new Fe(`raw_${t}`), this.smoothedSeries$ = new Fe(`smoothed_${t}`), this.reportedSeries$ = new Fe(`reported_${t}`), this.rawSeries$.next(e.initial), this.smoothedSeries$.next(e.initial), this.reportedSeries$.next(e.initial);
    }
    next(e) {
        let t = 0, i = 0;
        for(let o = 0; o < this.pastMeasures.length; o++)this.pastMeasures[o] !== void 0 && (t += (this.pastMeasures[o] - this.smoothed) ** 2, i++);
        this.takenMeasures = i, t /= i;
        const s = Math.sqrt(t), r = this.smoothed + this.params.deviationFactor * s, n = this.smoothed - this.params.deviationFactor * s;
        this.pastMeasures[this.measuresCursor] = e, this.measuresCursor = (this.measuresCursor + 1) % this.pastMeasures.length, this.rawSeries$.next(e), this.updateSmoothedValue(e), this.smoothed$.next(this.smoothed), this.smoothedSeries$.next(this.smoothed), !(this.smoothed > r || this.smoothed < n) && ((0, _esnextEsmJs.isNullable)(this.prevReported) || Math.abs(this.smoothed - this.prevReported) / this.prevReported >= this.params.changeThreshold) && (this.prevReported = this.smoothed, this.debounced$.next(this.smoothed), this.reportedSeries$.next(this.smoothed));
    }
}
class br extends Ii {
    slow;
    fast;
    constructor(e){
        super(e), this.slow = this.fast = e.initial;
    }
    updateSmoothedValue(e) {
        this.slow = ii(this.slow, e, this.params.emaAlphaSlow), this.fast = ii(this.fast, e, this.params.emaAlphaFast);
        const t = this.params.fastDirection > 0 ? Math.max : Math.min;
        this.smoothed = t(this.slow, this.fast);
    }
}
class yr extends Ii {
    emaSmoothed;
    constructor(e){
        super(e), this.emaSmoothed = e.initial;
    }
    updateSmoothedValue(e) {
        const t = ys(this.pastMeasures, this.takenMeasures);
        this.emaSmoothed = ii(this.emaSmoothed, e, this.params.emaAlpha);
        const i = Sr(this.pastMeasures, this.takenMeasures, this.measuresCursor - 1, this.params.basisTrendChangeCount);
        this.smoothed = i ? this.emaSmoothed : t;
    }
}
class Tr extends Ii {
    extremumInterval;
    furtherValues = [];
    currentTopExtremumValue = 0;
    constructor(e){
        super(e), this.extremumInterval = e.extremumInterval;
    }
    next(e) {
        this.currentTopExtremumValue <= e ? (this.currentTopExtremumValue = e, this.furtherValues = []) : this.furtherValues.length === this.extremumInterval ? (super.next(this.currentTopExtremumValue), this.currentTopExtremumValue = e, this.furtherValues = []) : this.furtherValues.push(e);
    }
    updateSmoothedValue(e) {
        this.smoothed = this.smoothed ? ii(this.smoothed, e, this.params.emaAlpha) : e;
    }
}
class Pi {
    static getSmoothedValue(e, t, i) {
        return i.type === "TwoEma" ? new br({
            initial: e,
            emaAlphaSlow: i.emaAlphaSlow,
            emaAlphaFast: i.emaAlphaFast,
            changeThreshold: i.changeThreshold,
            fastDirection: t,
            deviationDepth: i.deviationDepth,
            deviationFactor: i.deviationFactor,
            label: "throughput"
        }) : new yr({
            initial: e,
            emaAlpha: i.emaAlpha,
            basisTrendChangeCount: i.basisTrendChangeCount,
            changeThreshold: i.changeThreshold,
            deviationDepth: i.deviationDepth,
            deviationFactor: i.deviationFactor,
            label: "throughput"
        });
    }
    static getLiveEstimatedDelaySmoothedValue(e, t) {
        return new Tr({
            initial: e,
            label: "liveEdgeDelay",
            ...t
        });
    }
}
const vr = (a, e)=>{
    a && a.playbackRate !== e && (a.playbackRate = e);
}, st = ()=>window.ManagedMediaSource || window.MediaSource, Ts = ()=>!!(window.ManagedMediaSource && window.ManagedSourceBuffer?.prototype?.appendBuffer), Er = ()=>!!(window.MediaSource && window.MediaStreamTrack && window.SourceBuffer?.prototype?.appendBuffer), Ar = ()=>window.ManagedMediaSource ? new ManagedMediaSource : new MediaSource, Qi = [
    "timeupdate",
    "progress",
    "play",
    "seeked",
    "stalled",
    "waiting"
];
var ke;
(function(a) {
    a.NONE = "none", a.MANIFEST_READY = "manifest_ready", a.REPRESENTATIOS_READY = "representations_ready", a.RUNNING = "running";
})(ke || (ke = {}));
let wr = class {
    element = null;
    manifestUrlString = "";
    source = null;
    manifest = null;
    tuning;
    videoBufferManager;
    audioBufferManager;
    bufferManagers;
    throughputEstimator;
    subscription = new (0, _esnextEsmJs.Subscription);
    representationSubscription = new (0, _esnextEsmJs.Subscription);
    fetcher;
    state$ = new re(ke.NONE);
    currentVideoRepresentation$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    currentVideoRepresentationInit$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    error$ = new (0, _esnextEsmJs.Subject);
    lastConnectionType$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    lastConnectionReused$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    lastRequestFirstBytes$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    isLive$ = new (0, _esnextEsmJs.ValueSubject)(!1);
    liveDuration$ = new (0, _esnextEsmJs.ValueSubject)(0);
    liveAvailabilityStartTime$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    bufferLength$ = new (0, _esnextEsmJs.ValueSubject)(0);
    liveLoadBufferLength$ = new (0, _esnextEsmJs.ValueSubject)(0);
    livePositionFromPlayer$ = new (0, _esnextEsmJs.ValueSubject)(0);
    liveEstimatedDelay;
    waitingEventInterval;
    isActiveLowLatency = !1;
    isUpdatingLive = !1;
    isJumpGapAfterSeekLive = !1;
    liveLastSeekOffset = 0;
    forceEnded$ = new (0, _esnextEsmJs.Subject);
    gapWatchdogStarted = !1;
    gapWatchdogSubscription;
    destroyController = new Et;
    constructor(e){
        this.throughputEstimator = e.throughputEstimator, this.tuning = e.tuning, this.fetcher = new gr({
            throughputEstimator: this.throughputEstimator,
            requestQuic: this.tuning.requestQuick,
            compatibilityMode: e.compatibilityMode
        }), this.liveEstimatedDelay = Pi.getLiveEstimatedDelaySmoothedValue(0, {
            ...e.tuning.dashCmafLive.lowLatency.delayEstimator
        });
    }
    initManifest = (0, _esnextEsmJs.abortable)(this.destroyController.signal, (async function*(e, t, i) {
        this.element = e, this.manifestUrlString = Be(t, i, he.DASH_CMAF_OFFSET_P), this.state$.startTransitionTo(ke.MANIFEST_READY), this.manifest = yield this.updateManifest(), this.manifest?.representations.video.length ? this.state$.setState(ke.MANIFEST_READY) : this.error$.next({
            id: "NoRepresentations",
            category: (0, _esnextEsmJs.ErrorCategory).PARSER,
            message: "No playable video representations"
        });
    }).bind(this));
    updateManifest = (0, _esnextEsmJs.abortable)(this.destroyController.signal, (async function*() {
        const e = yield this.fetcher.fetchManifest(this.manifestUrlString).catch((s)=>{
            !this.manifest && !this.bufferLength$.getValue() && this.error$.next({
                id: "LoadManifest",
                category: (0, _esnextEsmJs.ErrorCategory).NETWORK,
                message: "Failed to load manifest",
                thrown: s
            });
        });
        if (!e) return null;
        let t;
        try {
            t = ur(e ?? "", this.manifestUrlString);
        } catch (s) {
            this.error$.next({
                id: "ManifestParsing",
                category: (0, _esnextEsmJs.ErrorCategory).PARSER,
                message: "Failed to parse MPD manifest",
                thrown: s
            });
        }
        if (!t) return null;
        const i = ({ kind: s, mime: r, codecs: n })=>!!(this.element?.canPlayType?.(r) && st()?.isTypeSupported?.(`${r}; codecs="${n}"`) || s === pe.TEXT);
        return t.dynamic && this.isLive$.getValue() !== t.dynamic && (this.isLive$.next(t.dynamic), this.liveDuration$.getValue() !== t.duration && this.liveDuration$.next(-1 * (t.duration ?? 0) / 1e3), this.liveAvailabilityStartTime$.getValue() !== t.liveAvailabilityStartTime && this.liveAvailabilityStartTime$.next(t.liveAvailabilityStartTime)), {
            ...t,
            representations: Object.fromEntries(Object.entries(t.representations).map(([s, r])=>[
                    s,
                    r.filter(i)
                ]))
        };
    }).bind(this));
    async seekLive(e) {
        (0, _esnextEsmJs.assertNonNullable)(this.element);
        const t = this.normolizeLiveOffset(e);
        this.isActiveLowLatency = this.tuning.dashCmafLive.lowLatency.isActive && t === 0, this.liveLastSeekOffset = t, this.isJumpGapAfterSeekLive = !0, this.manifestUrlString = Be(this.manifestUrlString, t, he.DASH_CMAF_OFFSET_P), this.manifest = await this.updateManifest(), this.manifest && (await this.videoBufferManager?.seekLive(this.manifest?.representations.video), await this.audioBufferManager?.seekLive(this.manifest?.representations.audio));
    }
    initRepresentations = (0, _esnextEsmJs.abortable)(this.destroyController.signal, (async function*(e, t, i) {
        (0, _esnextEsmJs.assertNonNullable)(this.manifest), (0, _esnextEsmJs.assertNonNullable)(this.element), this.representationSubscription.unsubscribe(), this.state$.startTransitionTo(ke.REPRESENTATIOS_READY);
        const s = (p)=>{
            this.representationSubscription.add((0, _esnextEsmJs.fromEvent)(p, "error").pipe((0, _esnextEsmJs.filter)((S)=>!!this.element?.played.length)).subscribe((S)=>{
                this.error$.next({
                    id: "VideoSource",
                    category: (0, _esnextEsmJs.ErrorCategory).VIDEO_PIPELINE,
                    message: "Unexpected video source error",
                    thrown: S
                });
            }));
        };
        this.source = this.tuning.useManagedMediaSource ? Ar() : new MediaSource;
        const r = document.createElement("source");
        if (s(r), r.src = URL.createObjectURL(this.source), this.element.appendChild(r), this.tuning.useManagedMediaSource && Ts()) {
            if (i) {
                const p = document.createElement("source");
                s(p), p.type = "application/x-mpegurl", p.src = i.url, this.element.appendChild(p);
            } else this.element.disableRemotePlayback = !0;
        }
        this.isActiveLowLatency = this.isLive$.getValue() && this.tuning.dashCmafLive.lowLatency.isActive;
        const n = {
            fetcher: this.fetcher,
            tuning: this.tuning,
            getCurrentPosition: ()=>this.element ? this.element.currentTime * 1e3 : void 0,
            isActiveLowLatency: ()=>this.isActiveLowLatency,
            manifest: this.manifest
        };
        if (this.videoBufferManager = new Wi(pe.VIDEO, this.source, this.manifest.container, this.manifest.representations.video, n), this.bufferManagers = [
            this.videoBufferManager
        ], (0, _esnextEsmJs.isNonNullable)(t) && (this.audioBufferManager = new Wi(pe.AUDIO, this.source, this.manifest.container, this.manifest.representations.audio, n), this.bufferManagers.push(this.audioBufferManager)), this.representationSubscription.add(this.fetcher.lastConnectionType$.subscribe(this.lastConnectionType$)), this.representationSubscription.add(this.fetcher.lastConnectionReused$.subscribe(this.lastConnectionReused$)), this.representationSubscription.add(this.fetcher.lastRequestFirstBytes$.subscribe(this.lastRequestFirstBytes$)), this.representationSubscription.add((0, _esnextEsmJs.interval)($i).subscribe((p)=>{
            if (this.element?.paused) {
                const S = _i(this.manifestUrlString, he.DASH_CMAF_OFFSET_P);
                this.manifestUrlString = Be(this.manifestUrlString, S + $i, he.DASH_CMAF_OFFSET_P);
            }
        })), this.representationSubscription.add((0, _esnextEsmJs.merge)(...Qi.map((p)=>(0, _esnextEsmJs.fromEvent)(this.element, p))).pipe((0, _esnextEsmJs.map)((p)=>this.element ? yt(this.element.buffered, this.element.currentTime * 1e3) : 0), (0, _esnextEsmJs.filterChanged)(), (0, _esnextEsmJs.filter)((p)=>!!p), (0, _esnextEsmJs.tap)((p)=>{
            this.waitingEventInterval && (window.clearInterval(this.waitingEventInterval), this.waitingEventInterval = void 0);
        })).subscribe(this.bufferLength$)), this.isLive$.getValue()) {
            this.representationSubscription.add(this.bufferLength$.pipe((0, _esnextEsmJs.filter)((S)=>this.isActiveLowLatency && !!S)).subscribe((S)=>this.liveEstimatedDelay.next(S))), this.representationSubscription.add(this.liveEstimatedDelay.smoothed$.subscribe((S)=>{
                if (!this.isActiveLowLatency) return;
                const $ = this.tuning.dashCmafLive.lowLatency.maxTargetOffset, y = this.tuning.dashCmafLive.lowLatency.maxTargetOffsetDeviation, w = this.tuning.dashCmafLive.lowLatency.playbackCatchupSpeedup, _ = S - $;
                let M = 1 + Math.sign(_) * w;
                Math.abs(_) < y ? M = 1 : Math.abs(_) > y * 2 && (M = 1 + Math.sign(_) * w * 2), vr(this.element, M);
            })), this.representationSubscription.add(this.bufferLength$.subscribe((S)=>{
                let $ = 0;
                if (S) {
                    const y = (this.element?.currentTime ?? 0) * 1e3;
                    $ = Math.min(...this.bufferManagers.map((_)=>_.getLiveSegmentsToLoadState(this.manifest)?.to ?? 0)) - y;
                }
                $ && this.liveLoadBufferLength$.getValue() !== $ && this.liveLoadBufferLength$.next($);
            }));
            let p = 0;
            this.representationSubscription.add((0, _esnextEsmJs.combine)({
                liveLoadBufferLength: this.liveLoadBufferLength$,
                bufferLength: this.bufferLength$
            }).subscribe(async ({ liveLoadBufferLength: S, bufferLength: $ })=>{
                if ((0, _esnextEsmJs.assertNonNullable)(this.element), this.isUpdatingLive) return;
                const y = this.element.playbackRate, w = _i(this.manifestUrlString, he.DASH_CMAF_OFFSET_P), _ = Math.abs(this.livePositionFromPlayer$.getValue()) * 1e3, M = Math.min(_, this.tuning.dashCmafLive.normalizedTargetMinBufferSize * y), A = this.tuning.dashCmafLive.normalizedActualBufferOffset * y, L = this.tuning.dashCmafLive.normalizedLiveMinBufferSize * y, J = this.isActiveLowLatency ? $ : S;
                let q = Ne.None;
                if (this.isActiveLowLatency ? q = Ne.ActiveLowLatency : J < M + L && J >= M ? q = Ne.LiveWithTargetOffset : w !== 0 && J < M && (q = Ne.LiveForwardBuffering), isFinite(S) && (p = S > p ? S : p), q === Ne.LiveForwardBuffering || q === Ne.LiveWithTargetOffset) {
                    const U = p - (M + A), W = this.normolizeLiveOffset(Math.trunc(w + U / y)), D = Math.abs(W - w);
                    let I;
                    !S || D <= this.tuning.dashCmafLive.offsetCalculationError ? I = w : W > 0 && D > this.tuning.dashCmafLive.offsetCalculationError ? I = W : I = 0, this.manifestUrlString = Be(this.manifestUrlString, I, he.DASH_CMAF_OFFSET_P);
                }
                q !== Ne.None && q !== Ne.ActiveLowLatency && (p = 0, this.updateLive());
            }));
        }
        const o = (0, _esnextEsmJs.merge)(...this.bufferManagers.map((p)=>p.fullyBuffered$)).pipe((0, _esnextEsmJs.map)(()=>this.bufferManagers.every((p)=>p.fullyBuffered$.getValue()))), d = (0, _esnextEsmJs.merge)(...this.bufferManagers.map((p)=>p.onLastSegment$)).pipe((0, _esnextEsmJs.map)(()=>this.bufferManagers.some((p)=>p.onLastSegment$.getValue())));
        this.representationSubscription.add((0, _esnextEsmJs.merge)(this.forceEnded$, (0, _esnextEsmJs.combine)({
            allBuffersFull: o,
            someBufferEnded: d
        }).pipe((0, _esnextEsmJs.filter)(({ allBuffersFull: p, someBufferEnded: S })=>p && S))).subscribe(()=>{
            if (this.source && this.source.readyState === "open" && Array.from(this.source.sourceBuffers).every((p)=>!p.updating)) try {
                this.source?.endOfStream();
            } catch (p) {
                this.error$.next({
                    id: "EndOfStream",
                    category: (0, _esnextEsmJs.ErrorCategory).VIDEO_PIPELINE,
                    message: "Failed to end MediaSource stream",
                    thrown: p
                });
            }
        })), this.representationSubscription.add((0, _esnextEsmJs.merge)(...this.bufferManagers.map((p)=>p.error$)).subscribe(this.error$)), this.representationSubscription.add(this.videoBufferManager.playingRepresentation$.subscribe(this.currentVideoRepresentation$)), this.subscription.add(this.videoBufferManager.playingRepresentationInit$.subscribe(this.currentVideoRepresentationInit$)), this.source.readyState !== "open" && (yield new Promise((p)=>this.source?.addEventListener("sourceopen", p)));
        const c = this.manifest.duration ?? 0, u = (p, S)=>Math.max(p, S.duration ?? 0), h = this.manifest.representations.audio.reduce(u, c), f = this.manifest.representations.video.reduce(u, c);
        (h || f) && (this.source.duration = Math.max(h, f) / 1e3), this.audioBufferManager && (0, _esnextEsmJs.isNonNullable)(t) ? yield Promise.all([
            this.videoBufferManager.startWith(e),
            this.audioBufferManager.startWith(t)
        ]) : yield this.videoBufferManager.startWith(e), this.state$.setState(ke.REPRESENTATIOS_READY);
    }).bind(this));
    initBuffer() {
        (0, _esnextEsmJs.assertNonNullable)(this.element), this.state$.setState(ke.RUNNING), this.subscription.add((0, _esnextEsmJs.merge)(...Qi.map((e)=>(0, _esnextEsmJs.fromEvent)(this.element, e)), (0, _esnextEsmJs.fromEvent)(window, "online")).subscribe(()=>this.tick(), (e)=>{
            this.error$.next({
                id: "DashVKPlayer",
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: "Internal logic error",
                thrown: e
            });
        })), this.subscription.add((0, _esnextEsmJs.fromEvent)(this.element, "progress").subscribe(()=>{
            this.element && this.element.readyState === 2 && !this.element.seeking && (this.element.currentTime = this.element.currentTime);
        })), this.subscription.add((0, _esnextEsmJs.fromEvent)(this.element, "waiting").subscribe(()=>{
            this.element && this.element.readyState === 2 && !this.element.seeking && Ei(this.element.buffered, this.element.currentTime * 1e3) && (this.element.currentTime = this.element.currentTime), this.waitingEventInterval && window.clearInterval(this.waitingEventInterval), this.waitingEventInterval = window.setInterval(this.waitingEventCallback.bind(this), this.tuning.dashMaxWaitingDuration);
        })), this.tick();
    }
    async switchRepresentation(e, t) {
        return ({
            [pe.VIDEO]: this.videoBufferManager,
            [pe.AUDIO]: this.audioBufferManager,
            [pe.TEXT]: null
        })[e]?.switchTo(t);
    }
    seek(e, t) {
        (0, _esnextEsmJs.assertNonNullable)(this.element), (0, _esnextEsmJs.assertNonNullable)(this.videoBufferManager);
        let i;
        t || this.element.duration * 1e3 <= this.tuning.dashSeekInSegmentDurationThreshold || Math.abs(this.element.currentTime * 1e3 - e) <= this.tuning.dashSeekInSegmentAlwaysSeekDelta ? i = e : i = Math.max(this.videoBufferManager.findSegmentStartTime(e) ?? e, this.audioBufferManager?.findSegmentStartTime(e) ?? e), Ei(this.element.buffered, i) || (this.videoBufferManager.abort(), this.audioBufferManager?.abort()), this.videoBufferManager.maintain(i), this.audioBufferManager?.maintain(i), this.element.currentTime = i / 1e3;
    }
    stop() {
        this.element?.querySelectorAll("source").forEach((e)=>e.remove()), this.element = null, this.source = null, this.manifest = null, this.currentVideoRepresentation$.next(void 0), this.videoBufferManager?.destroy(), this.videoBufferManager = null, this.audioBufferManager?.destroy(), this.audioBufferManager = null, this.bufferManagers = [], this.state$.setState(ke.NONE);
    }
    setBufferTarget(e) {
        for (const t of this.bufferManagers)t.setTarget(e);
    }
    getRepresentations() {
        return this.manifest?.representations;
    }
    setPreloadOnly(e) {
        for (const t of this.bufferManagers)t.setPreloadOnly(e);
    }
    destroy() {
        this.subscription.unsubscribe(), this.representationSubscription.unsubscribe(), this.destroyController.abort(), this.fetcher.destroy(), window.clearInterval(this.waitingEventInterval), this.stop(), this.source?.readyState === "open" && Array.from(this.source.sourceBuffers).every((e)=>!e.updating) && this.source.endOfStream(), this.source = null;
    }
    async waitingEventCallback() {
        try {
            if (!this.element) return;
            this.isLive$.getValue() ? await this.seekLive(this.liveLastSeekOffset) : this.seek(this.element.currentTime * 1e3, !0);
        } catch (e) {
            this.error$.next({
                id: "WaitingEventCallback",
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: "Error in seeking in waiting event callback",
                thrown: e
            });
        }
    }
    normolizeLiveOffset(e) {
        return Math.trunc(e / 1e3) * 1e3;
    }
    tick = ()=>{
        if (!this.element || !this.videoBufferManager) return;
        const e = this.element.currentTime * 1e3;
        this.videoBufferManager.maintain(e), this.audioBufferManager?.maintain(e), (this.videoBufferManager.gaps.length || this.audioBufferManager?.gaps.length) && !this.gapWatchdogStarted && (this.gapWatchdogStarted = !0, this.gapWatchdogSubscription = (0, _esnextEsmJs.interval)(this.tuning.gapWatchdogInterval).subscribe(()=>this.jumpGap(), (t)=>{
            this.error$.next({
                id: "GapWatchdog",
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: "Error handling gaps",
                thrown: t
            });
        }), this.subscription.add(this.gapWatchdogSubscription));
    };
    async updateLive() {
        this.isUpdatingLive = !0, this.manifest = await this.updateManifest(), this.manifest && this.bufferManagers?.forEach((e)=>e.updateLive(this.manifest)), this.isUpdatingLive = !1;
    }
    jumpGap() {
        if (!this.element || !this.videoBufferManager) return;
        const e = this.videoBufferManager.getDebugBufferState();
        if (!e) return;
        this.isJumpGapAfterSeekLive && !this.isActiveLowLatency && this.element.currentTime > e.to && (this.isJumpGapAfterSeekLive = !1, this.element.currentTime = 0);
        const t = this.element.currentTime * 1e3, i = [], s = this.element.readyState === 1 ? this.tuning.endGapTolerance : 0;
        for (const r of this.bufferManagers)for (const n of r.gaps)r.playingRepresentation$.getValue() === n.representation && n.from - s <= t && n.to + s > t && (this.element.duration * 1e3 - n.to < this.tuning.endGapTolerance ? i.push(1 / 0) : i.push(n.to));
        if (i.length) {
            const r = Math.max(...i);
            r === 1 / 0 ? (this.forceEnded$.next(), this.gapWatchdogSubscription.unsubscribe(), this.gapWatchdogStarted = !1) : this.element.currentTime = r / 1e3;
        }
    }
};
class kr {
    fov;
    orientation;
    constructor(e, t){
        this.fov = e, this.orientation = t;
    }
}
class $r {
    options;
    camera;
    rotating = !1;
    fading = !1;
    lastTickTS = 0;
    lastCameraTurn;
    lastCameraTurnTS = 0;
    fadeStartSpeed = null;
    fadeCorrection;
    fadeTime = 0;
    rotationSpeed;
    constructor(e, t){
        this.camera = e, this.options = t, this.rotationSpeed = {
            x: 0,
            y: 0,
            z: 0
        }, this.fadeCorrection = 1 / (this.options.speedFadeTime / 1e3) ** 2;
    }
    turnCamera(e = 0, t = 0, i = 0) {
        this.pointCameraTo(this.camera.orientation.x + e, this.camera.orientation.y + t, this.camera.orientation.z + i);
    }
    pointCameraTo(e = 0, t = 0, i = 0) {
        t = this.limitCameraRotationY(t);
        const s = e - this.camera.orientation.x, r = t - this.camera.orientation.y, n = i - this.camera.orientation.z;
        this.camera.orientation.x = e, this.camera.orientation.y = t, this.camera.orientation.z = i, this.lastCameraTurn = {
            x: s,
            y: r,
            z: n
        }, this.lastCameraTurnTS = Date.now();
    }
    setRotationSpeed(e, t, i) {
        this.rotationSpeed.x = e ?? this.rotationSpeed.x, this.rotationSpeed.y = t ?? this.rotationSpeed.y, this.rotationSpeed.z = i ?? this.rotationSpeed.z;
    }
    startRotation() {
        this.rotating = !0;
    }
    stopRotation(e = !1) {
        e ? (this.setRotationSpeed(0, 0, 0), this.fadeStartSpeed = null) : this.startFading(this.rotationSpeed.x, this.rotationSpeed.y, this.rotationSpeed.z), this.rotating = !1;
    }
    onCameraRelease() {
        if (this.lastCameraTurn && this.lastCameraTurnTS) {
            const e = Date.now() - this.lastCameraTurnTS;
            if (e < this.options.speedFadeThreshold) {
                const t = (1 - e / this.options.speedFadeThreshold) * this.options.rotationSpeedCorrection;
                this.startFading(this.lastCameraTurn.x * t, this.lastCameraTurn.y * t, this.lastCameraTurn.z * t);
            }
        }
    }
    startFading(e, t, i) {
        this.setRotationSpeed(e, t, i), this.fadeStartSpeed = {
            ...this.rotationSpeed
        }, this.fading = !0;
    }
    stopFading() {
        this.fadeStartSpeed = null, this.fading = !0, this.fadeTime = 0;
    }
    limitCameraRotationY(e) {
        return Math.max(-this.options.maxYawAngle, Math.min(e, this.options.maxYawAngle));
    }
    tick(e) {
        if (!this.lastTickTS) {
            this.lastTickTS = e, this.lastCameraTurnTS = Date.now();
            return;
        }
        const t = e - this.lastTickTS, i = t / 1e3;
        if (this.rotating) this.turnCamera(this.rotationSpeed.x * this.options.rotationSpeedCorrection * i, this.rotationSpeed.y * this.options.rotationSpeedCorrection * i, this.rotationSpeed.z * this.options.rotationSpeedCorrection * i);
        else if (this.fading && this.fadeStartSpeed) {
            const s = -this.fadeCorrection * (this.fadeTime / 1e3) ** 2 + 1;
            this.setRotationSpeed(this.fadeStartSpeed.x * s, this.fadeStartSpeed.y * s, this.fadeStartSpeed.z * s), s > 0 ? this.turnCamera(this.rotationSpeed.x * this.options.rotationSpeedCorrection * i, this.rotationSpeed.y * this.options.rotationSpeedCorrection * i, this.rotationSpeed.z * this.options.rotationSpeedCorrection * i) : (this.stopRotation(!0), this.stopFading()), this.fadeTime = Math.min(this.fadeTime + t, this.options.speedFadeTime);
        }
        this.lastTickTS = e;
    }
}
var Pr = `#define GLSLIFY 1
attribute vec2 a_vertex;attribute vec2 a_texel;varying vec2 v_texel;void main(void){gl_Position=vec4(a_vertex,0.0,1.0);v_texel=a_texel;}`, Lr = `#ifdef GL_ES
precision highp float;precision highp int;
#else
precision highp float;
#define GLSLIFY 1
#endif
#define PI 3.14159265358979323846264
varying vec2 v_texel;uniform sampler2D u_texture;uniform vec2 u_focus;void main(void){float lambda0=u_focus.x/360.0;float phi0=u_focus.y/180.0;float lambda=PI*2.0*(v_texel.x-0.5-lambda0);float phi=PI*(v_texel.y-0.5-phi0);float p=sqrt(lambda*lambda+phi*phi);float c=atan(p);float cos_c=cos(c);float sin_c=sin(c);float x=lambda0+atan(lambda*sin_c,p*cos(phi0)*cos_c-phi*sin(phi0)*sin_c);float y=asin(cos_c*sin(phi0)+(phi*sin_c*cos(phi0))/p);vec2 tc=vec2(mod(x/(PI*2.0)-0.5,1.0),mod(y/PI-0.5,1.0));gl_FragColor=texture2D(u_texture,tc);}`;
class Dr {
    container;
    sourceVideoElement;
    canvas;
    gl;
    params;
    frameWidth;
    frameHeight;
    viewportWidth;
    viewportHeight;
    videoInitialized = !1;
    program;
    videoTexture;
    vertexBuffer;
    textureMappingBuffer;
    camera;
    cameraRotationManager;
    videoElementDataLoadedFn;
    renderFn;
    active = !1;
    constructor(e, t, i){
        this.container = e, this.sourceVideoElement = t, this.params = i, this.canvas = this.createCanvas();
        const s = this.canvas.getContext("webgl");
        if (!s) throw new Error("Could not initialize WebGL context");
        this.gl = s, this.container.appendChild(this.canvas), this.camera = new kr(this.params.fov, this.params.orientation), this.cameraRotationManager = new $r(this.camera, {
            rotationSpeed: this.params.rotationSpeed,
            maxYawAngle: this.params.maxYawAngle,
            rotationSpeedCorrection: this.params.rotationSpeedCorrection,
            degreeToPixelCorrection: this.params.degreeToPixelCorrection,
            speedFadeTime: this.params.speedFadeTime,
            speedFadeThreshold: this.params.speedFadeThreshold
        }), this.updateFrameSize(), this.vertexBuffer = this.createVertexBuffer(), this.textureMappingBuffer = this.createTextureMappingBuffer(), this.updateTextureMappingBuffer(), this.program = this.createProgram(), this.videoTexture = this.createTexture(), this.gl.useProgram(this.program), this.videoElementDataLoadedFn = this.onDataLoadedHandler.bind(this), this.renderFn = this.render.bind(this);
    }
    play() {
        this.active || (this.videoInitialized ? this.doPlay() : this.sourceVideoElement.readyState >= 2 ? (this.videoInitialized = !0, this.doPlay()) : this.sourceVideoElement.addEventListener("loadeddata", this.videoElementDataLoadedFn));
    }
    stop() {
        this.active = !1;
    }
    startCameraManualRotation(e, t) {
        this.cameraRotationManager.setRotationSpeed(e * this.params.rotationSpeed, t * this.params.rotationSpeed, 0), this.cameraRotationManager.startRotation();
    }
    stopCameraManualRotation(e = !1) {
        this.cameraRotationManager.stopRotation(e);
    }
    turnCamera(e, t) {
        this.cameraRotationManager.turnCamera(e, t);
    }
    pointCameraTo(e, t) {
        this.cameraRotationManager.pointCameraTo(e, t);
    }
    pixelToDegree(e) {
        return {
            x: this.params.degreeToPixelCorrection * this.params.fov.x * -e.x / this.viewportWidth,
            y: this.params.degreeToPixelCorrection * this.params.fov.y * e.y / this.viewportHeight
        };
    }
    getCameraRotation() {
        return this.camera.orientation;
    }
    holdCamera() {
        this.cameraRotationManager.stopRotation(!0);
    }
    releaseCamera() {
        this.cameraRotationManager.onCameraRelease();
    }
    destroy() {
        this.sourceVideoElement.removeEventListener("loadeddata", this.videoElementDataLoadedFn), this.stop(), this.canvas.remove();
    }
    setViewportSize(e, t) {
        this.viewportWidth = e, this.viewportHeight = t, this.canvas.width = this.viewportWidth, this.canvas.height = this.viewportHeight, this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }
    onDataLoadedHandler() {
        this.videoInitialized = !0, this.doPlay();
    }
    doPlay() {
        this.updateFrameSize(), this.vertexBuffer = this.createVertexBuffer(), this.active = !0, this.sourceVideoElement.removeEventListener("loadeddata", this.videoElementDataLoadedFn), requestAnimationFrame(this.renderFn);
    }
    render(e) {
        this.cameraRotationManager.tick(e), this.updateTexture(), this.updateTextureMappingBuffer();
        const t = this.gl.getAttribLocation(this.program, "a_vertex"), i = this.gl.getAttribLocation(this.program, "a_texel"), s = this.gl.getUniformLocation(this.program, "u_texture"), r = this.gl.getUniformLocation(this.program, "u_focus");
        this.gl.enableVertexAttribArray(t), this.gl.enableVertexAttribArray(i), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer), this.gl.vertexAttribPointer(t, 2, this.gl.FLOAT, !1, 0, 0), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureMappingBuffer), this.gl.vertexAttribPointer(i, 2, this.gl.FLOAT, !1, 0, 0), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, this.videoTexture), this.gl.uniform1i(s, 0), this.gl.uniform2f(r, -this.camera.orientation.x, -this.camera.orientation.y), this.gl.drawArrays(this.gl.TRIANGLE_FAN, 0, 4), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null), this.gl.disableVertexAttribArray(t), this.gl.disableVertexAttribArray(i), this.active && requestAnimationFrame(this.renderFn);
    }
    createShader(e, t) {
        const i = this.gl.createShader(t);
        if (!i) throw this.destroy(), new Error(`Could not create shader (${t})`);
        if (this.gl.shaderSource(i, e), this.gl.compileShader(i), !this.gl.getShaderParameter(i, this.gl.COMPILE_STATUS)) throw this.destroy(), new Error("An error occurred while compiling the shader: " + this.gl.getShaderInfoLog(i));
        return i;
    }
    createProgram() {
        const e = this.gl.createProgram();
        if (!e) throw this.destroy(), new Error("Could not create shader program");
        const t = this.createShader(Pr, this.gl.VERTEX_SHADER), i = this.createShader(Lr, this.gl.FRAGMENT_SHADER);
        if (this.gl.attachShader(e, t), this.gl.attachShader(e, i), this.gl.linkProgram(e), !this.gl.getProgramParameter(e, this.gl.LINK_STATUS)) throw this.destroy(), new Error("Could not link shader program.");
        return e;
    }
    createTexture() {
        const e = this.gl.createTexture();
        if (!e) throw this.destroy(), new Error("Could not create texture");
        return this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.bindTexture(this.gl.TEXTURE_2D, null), e;
    }
    updateTexture() {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.videoTexture), this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !0), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.sourceVideoElement), this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    }
    createVertexBuffer() {
        const e = this.gl.createBuffer();
        if (!e) throw this.destroy(), new Error("Could not create vertex buffer");
        let t = 1, i = 1;
        const s = this.frameHeight / (this.frameWidth / this.viewportWidth);
        return s > this.viewportHeight ? t = this.viewportHeight / s : i = s / this.viewportHeight, this.gl.bindBuffer(this.gl.ARRAY_BUFFER, e), this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
            -t,
            -i,
            t,
            -i,
            t,
            i,
            -t,
            i
        ]), this.gl.STATIC_DRAW), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null), e;
    }
    createTextureMappingBuffer() {
        const e = this.gl.createBuffer();
        if (!e) throw this.destroy(), new Error("Could not create texture mapping buffer");
        return e;
    }
    calculateTexturePosition() {
        const e = .5 - this.camera.orientation.x / 360, t = .5 - this.camera.orientation.y / 180, i = this.camera.fov.x / 360 / 2, s = this.camera.fov.y / 180 / 2, r = e - i, n = t - s, o = e + i, d = t - s, c = e + i, u = t + s, h = e - i, f = t + s;
        return [
            r,
            n,
            o,
            d,
            c,
            u,
            h,
            f
        ];
    }
    updateTextureMappingBuffer() {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureMappingBuffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
            ...this.calculateTexturePosition()
        ]), this.gl.STATIC_DRAW), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    }
    updateFrameSize() {
        this.frameWidth = this.sourceVideoElement.videoWidth, this.frameHeight = this.sourceVideoElement.videoHeight;
    }
    createCanvas() {
        const e = document.createElement("canvas");
        return e.style.position = "absolute", e.style.left = "0", e.style.top = "0", e.style.width = "100%", e.style.height = "100%", e;
    }
}
const Li = ()=>!!window.documentPictureInPicture?.window || !!document.pictureInPictureElement, xr = (a, e)=>new (0, _esnextEsmJs.Observable)((t)=>{
        if (!window.IntersectionObserver) return;
        const i = {
            root: null
        }, s = new IntersectionObserver((n, o)=>{
            n.forEach((d)=>t.next(d.isIntersecting || Li()));
        }, {
            ...i,
            ...e
        });
        s.observe(a);
        const r = (0, _esnextEsmJs.fromEvent)(document, "visibilitychange").pipe((0, _esnextEsmJs.map)((n)=>!document.hidden || Li())).subscribe((n)=>t.next(n));
        return ()=>{
            s.unobserve(a), r.unsubscribe;
        };
    });
class vs {
    scene3D;
    subscription = new (0, _esnextEsmJs.Subscription);
    videoState = new re(ie.STOPPED);
    video;
    player;
    params;
    elementSize$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    elementVisible$ = new (0, _esnextEsmJs.ValueSubject)(!0);
    textTracksManager = new et;
    droppedFramesManager = new us;
    videoTracks$ = new (0, _esnextEsmJs.ValueSubject)([]);
    audioTracks = [];
    audioRepresentations = new Map;
    videoTrackSwitchHistory = new ra;
    textTracks = [];
    liveOffset;
    constructor(e){
        this.params = e, this.video = ut(e.container), this.params.output.element$.next(this.video), this.params.output.availableVideoTracks$.next([]), this.params.output.availableAudioTracks$.next([]), this.params.output.isAudioAvailable$.next(!0), this.params.output.hostname$.next(Ye(this.params.source.url)), this.params.output.isLive$.next(!1), this.params.output.autoVideoTrackLimitingAvailable$.next(!0), this.player = new wr({
            throughputEstimator: this.params.dependencies.throughputEstimator,
            tuning: this.params.tuning,
            compatibilityMode: this.params.source.compatibilityMode
        }), this.subscribe();
    }
    getProviderSubscriptionInfo() {
        const { output: e, desiredState: t } = this.params, i = ft(this.video), s = this.constructor.name, r = (o)=>{
            e.error$.next({
                id: s,
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: `${s} internal logic error`,
                thrown: o
            });
        };
        return {
            output: e,
            desiredState: t,
            observableVideo: i,
            genericErrorListener: r,
            connect: (o, d)=>this.subscription.add(o.subscribe(d, r))
        };
    }
    subscribe() {
        const { output: e, desiredState: t, observableVideo: i, genericErrorListener: s, connect: r } = this.getProviderSubscriptionInfo();
        this.droppedFramesManager.connect({
            logger: this.params.dependencies.logger,
            video: this.video,
            droppedFramesChecker: this.params.tuning.droppedFramesChecker,
            isAuto: this.params.desiredState.autoVideoTrackSwitching,
            playing$: i.playing$,
            pause$: i.pause$,
            tracks$: this.videoTracks$.pipe((0, _esnextEsmJs.map)((c)=>c.map(({ track: u })=>u)))
        }), r(i.ended$, e.endedEvent$), r(i.looped$, e.loopedEvent$), r(i.error$, e.error$), r(i.isBuffering$, e.isBuffering$), r(i.currentBuffer$, e.currentBuffer$), r(i.playing$, e.firstFrameEvent$), r(i.canplay$, e.canplay$), r(i.inPiP$, e.inPiP$), r(i.inFullscreen$, e.inFullscreen$), r(this.player.error$, e.error$), r(this.player.lastConnectionType$, e.httpConnectionType$), r(this.player.lastConnectionReused$, e.httpConnectionReused$), r(this.player.isLive$, e.isLive$), r(this.player.lastRequestFirstBytes$.pipe((0, _esnextEsmJs.filter)((0, _esnextEsmJs.isNonNullable)), (0, _esnextEsmJs.once)()), e.firstBytesEvent$), this.subscription.add(i.seeked$.subscribe(e.seekedEvent$, s)), this.subscription.add(Ft(this.video, t.isLooped, s)), this.subscription.add(lt(this.video, t.volume, i.volumeState$, s)), this.subscription.add(i.volumeState$.subscribe(this.params.output.volume$, s)), this.subscription.add(kt(this.video, t.playbackRate, i.playbackRateState$, s)), r(Ea(this.video), this.elementSize$), r(xr(this.video, {
            threshold: this.params.tuning.autoTrackSelection.activeVideoAreaThreshold
        }), this.elementVisible$), this.subscription.add(i.playing$.subscribe(()=>{
            this.videoState.setState(ie.PLAYING), R(t.playbackState, l.PLAYING), this.scene3D && this.scene3D.play();
        }, s)).add(i.pause$.subscribe(()=>{
            this.videoState.setState(ie.PAUSED), R(t.playbackState, l.PAUSED);
        }, s)).add(i.canplay$.subscribe(()=>{
            this.videoState.getState() === ie.PLAYING && this.playIfAllowed();
        }, s)), this.subscription.add(this.player.state$.stateChangeEnded$.subscribe(({ to: c })=>{
            if (c === ke.MANIFEST_READY) {
                const u = [];
                this.audioTracks = [], this.textTracks = [];
                const h = this.player.getRepresentations();
                (0, _esnextEsmJs.assertNonNullable)(h, "Manifest not loaded or empty");
                const f = Array.from(h.audio).sort((y, w)=>w.bitrate - y.bitrate), p = Array.from(h.video).sort((y, w)=>w.bitrate - y.bitrate), S = Array.from(h.text);
                if (!this.params.tuning.isAudioDisabled) for (const y of f){
                    const w = lr(y);
                    w && this.audioTracks.push({
                        track: w,
                        representation: y
                    });
                }
                for (const y of p){
                    const w = hr(y);
                    if (w) {
                        u.push({
                            track: w,
                            representation: y
                        });
                        const _ = !this.params.tuning.isAudioDisabled && fr(f, p, y);
                        _ && this.audioRepresentations.set(y.id, _);
                    }
                }
                this.videoTracks$.next(u);
                for (const y of S){
                    const w = pr(y);
                    w && this.textTracks.push({
                        track: w,
                        representation: y
                    });
                }
                this.params.output.availableVideoTracks$.next(u.map(({ track: y })=>y)), this.params.output.availableAudioTracks$.next(this.audioTracks.map(({ track: y })=>y)), this.params.output.isAudioAvailable$.next(!!this.audioTracks.length), this.textTracks.length > 0 && this.params.desiredState.internalTextTracks.startTransitionTo(this.textTracks.map(({ track: y })=>y));
                const $ = this.selectVideoRepresentation();
                (0, _esnextEsmJs.assertNonNullable)($), this.player.initRepresentations($.id, this.audioRepresentations.get($.id)?.id, this.params.sourceHls);
            } else c === ke.REPRESENTATIOS_READY && (this.videoState.setState(ie.READY), this.player.initBuffer());
        }, s));
        const n = (c)=>e.error$.next({
                id: "RepresentationSwitch",
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: "Switching representations threw",
                thrown: c
            });
        this.subscription.add((0, _esnextEsmJs.merge)(this.player.state$.stateChangeEnded$, t.videoTrack.stateChangeStarted$, t.autoVideoTrackSwitching.transitionStarted$, this.params.dependencies.throughputEstimator.rttAdjustedThroughput$, t.autoVideoTrackLimits.stateChangeStarted$, this.elementSize$, this.elementVisible$, this.droppedFramesManager.onDroopedVideoFramesLimit$, (0, _esnextEsmJs.fromEvent)(this.video, "progress")).subscribe(()=>{
            const c = this.player.state$.getState(), u = this.player.state$.getTransition();
            if (c !== ke.RUNNING || u || !this.videoTracks$.getValue().length) return;
            t.autoVideoTrackSwitching.getTransition() && t.autoVideoTrackSwitching.setState(t.autoVideoTrackSwitching.getState());
            const h = this.selectVideoRepresentation(), f = this.params.desiredState.autoVideoTrackLimits.getTransition();
            f && this.params.output.autoVideoTrackLimits$.next(f.to);
            const p = this.params.desiredState.autoVideoTrackSwitching.getState(), S = this.params.tuning.autoTrackSelection.backgroundVideoQualityLimit;
            if (h) {
                let $ = h.id;
                !this.elementVisible$.getValue() && p && ($ = this.videoTracks$.getValue().map((w)=>w.representation).sort((w, _)=>_.bitrate - w.bitrate).filter((w)=>{
                    const _ = (0, _esnextEsmJs.videoSizeToQuality)(w), M = (0, _esnextEsmJs.videoSizeToQuality)(h);
                    if (_ && M) return (0, _esnextEsmJs.isLowerOrEqual)(_, M) && (0, _esnextEsmJs.isLowerOrEqual)(_, S);
                }).map((w)=>w.id)[0]), this.player.switchRepresentation(pe.VIDEO, $).catch(n);
                const y = this.audioRepresentations.get(h.id);
                y && this.player.switchRepresentation(pe.AUDIO, y.id).catch(n);
            }
        }, s)), this.subscription.add(t.cameraOrientation.stateChangeEnded$.subscribe(({ to: c })=>{
            this.scene3D && c && this.scene3D.pointCameraTo(c.x, c.y);
        })), this.subscription.add(this.elementSize$.subscribe((c)=>{
            this.scene3D && c && this.scene3D.setViewportSize(c.width, c.height);
        })), this.subscription.add(this.player.currentVideoRepresentation$.pipe((0, _esnextEsmJs.filterChanged)(), (0, _esnextEsmJs.map)((c)=>c && this.videoTracks$.getValue().find(({ representation: { id: u } })=>u === c)?.track)).subscribe(e.currentVideoTrack$, s)), this.subscription.add(this.player.currentVideoRepresentationInit$.subscribe((c)=>{
            if (c?.is3dVideo && this.params.tuning.spherical?.enabled) try {
                this.init3DScene(c), e.is3DVideo$.next(!0);
            } catch (u) {
                e.warning$.next({
                    id: "DashProvider",
                    message: `DashProvider could not initialize 3D-scene: ${u}`
                });
            }
            else this.destroy3DScene(), this.params.tuning.spherical?.enabled && e.is3DVideo$.next(!1);
        }, s)), this.textTracksManager.connect(this.video, t, e);
        const o = t.playbackState.stateChangeStarted$.pipe((0, _esnextEsmJs.map)(({ to: c })=>c === l.READY), (0, _esnextEsmJs.filterChanged)());
        this.subscription.add((0, _esnextEsmJs.merge)(o, t.autoVideoTrackSwitching.stateChangeStarted$, this.player.state$.stateChangeEnded$).subscribe(()=>{
            const c = t.autoVideoTrackSwitching.getState(), h = t.playbackState.getState() === l.READY ? this.params.tuning.dash.forwardBufferTargetPreload : c ? this.params.tuning.dash.forwardBufferTargetAuto : this.params.tuning.dash.forwardBufferTargetManual;
            this.player.setBufferTarget(h);
        })), this.subscription.add((0, _esnextEsmJs.merge)(o, this.player.state$.stateChangeEnded$).subscribe(()=>this.player.setPreloadOnly(t.playbackState.getState() === l.READY)));
        const d = (0, _esnextEsmJs.merge)(t.playbackState.stateChangeStarted$, t.videoTrack.stateChangeStarted$, t.seekState.stateChangeEnded$, this.videoState.stateChangeEnded$, (0, _esnextEsmJs.observableFrom)([
            "init"
        ])).pipe((0, _esnextEsmJs.debounce)(0));
        this.subscription.add(d.subscribe(this.syncPlayback, s));
    }
    selectVideoRepresentation() {
        const e = this.params.desiredState.autoVideoTrackSwitching.getState(), t = this.params.desiredState.videoTrack.getState()?.id, i = this.videoTracks$.getValue().find(({ track: { id: h } })=>h === t)?.track, s = this.params.output.currentVideoTrack$.getValue(), r = yt(this.video.buffered, this.video.currentTime * 1e3), n = e ? this.params.tuning.dash.forwardBufferTargetAuto : this.params.tuning.dash.forwardBufferTargetManual, o = Math.min(r / Math.min(n, (this.video.duration * 1e3 || 1 / 0) - this.video.currentTime * 1e3), 1), d = Math.max(i && !e ? this.audioRepresentations.get(i.id)?.bitrate ?? 0 : 0, s ? this.audioRepresentations.get(s.id)?.bitrate ?? 0 : 0), c = ni(this.videoTracks$.getValue().map(({ track: h })=>h), {
            container: this.elementSize$.getValue(),
            throughput: this.params.dependencies.throughputEstimator.rttAdjustedThroughput$.getValue(),
            tuning: this.params.tuning.autoTrackSelection,
            limits: this.params.desiredState.autoVideoTrackLimits.getState(),
            reserve: d,
            forwardBufferHealth: o,
            current: s,
            history: this.videoTrackSwitchHistory,
            playbackRate: this.video.playbackRate,
            droppedVideoMaxQualityLimit: this.droppedFramesManager.droppedVideoMaxQualityLimit,
            abrLogger: this.params.dependencies.abrLogger
        }), u = e ? c ?? i : i ?? c;
        return u && this.videoTracks$.getValue().find(({ track: h })=>h === u)?.representation;
    }
    prepare(e = 0) {
        this.player.initManifest(this.video, this.params.source.url, e);
    }
    syncPlayback = ()=>{
        const e = this.videoState.getState(), t = this.params.desiredState.playbackState.getState(), i = this.params.desiredState.playbackState.getTransition(), s = this.params.desiredState.seekState.getState();
        if (!this.videoState.getTransition()) {
            if (s.state === G.Requested && i?.to !== l.PAUSED && e !== ie.STOPPED && t !== l.STOPPED) {
                const n = this.liveOffset?.getTotalPausedTime() ?? 0;
                this.seek(s.position - n, s.forcePrecise);
            }
            if (t === l.STOPPED) {
                e !== ie.STOPPED && (this.videoState.startTransitionTo(ie.STOPPED), this.player.stop(), this.video.removeAttribute("src"), this.video.load(), this.params.output.position$.next(0), this.params.output.duration$.next(1 / 0), this.params.output.currentBuffer$.next(void 0), this.params.output.hostname$.next(void 0), this.videoState.setState(ie.STOPPED), R(this.params.desiredState.playbackState, l.STOPPED, !0));
                return;
            }
            switch(e){
                case ie.STOPPED:
                    this.videoState.startTransitionTo(ie.READY), this.prepare();
                    return;
                case ie.READY:
                    t === l.PAUSED ? (this.videoState.setState(ie.PAUSED), R(this.params.desiredState.playbackState, l.PAUSED)) : t === l.PLAYING ? (this.videoState.startTransitionTo(ie.PLAYING), this.playIfAllowed()) : i?.to === l.READY && R(this.params.desiredState.playbackState, l.READY);
                    return;
                case ie.PLAYING:
                    t === l.PAUSED ? (this.videoState.startTransitionTo(ie.PAUSED), this.liveOffset?.pause(), this.video.pause()) : i?.to === l.PLAYING && R(this.params.desiredState.playbackState, l.PLAYING);
                    return;
                case ie.PAUSED:
                    t === l.PLAYING ? (this.videoState.startTransitionTo(ie.PLAYING), this.liveOffset ? this.liveOffset.getTotalOffset() / 1e3 < Math.abs(this.params.output.duration$.getValue()) ? (this.liveOffset.resume(), this.playIfAllowed(), this.params.output.position$.next(-this.liveOffset.getTotalOffset() / 1e3)) : this.seek(0, !1) : this.playIfAllowed()) : i?.to === l.PAUSED && R(this.params.desiredState.playbackState, l.PAUSED);
                    return;
                default:
                    return (0, _esnextEsmJs.assertNever)(e);
            }
        }
    };
    init3DScene = (e)=>{
        if (this.scene3D) return;
        this.scene3D = new Dr(this.params.container, this.video, {
            fov: this.params.tuning.spherical.fov,
            orientation: this.params.tuning.spherical.orientation || {
                x: e.projectionData?.pose.yaw || 0,
                y: e.projectionData?.pose.pitch || 0,
                z: e.projectionData?.pose.roll || 0
            },
            rotationSpeed: this.params.tuning.spherical.rotationSpeed,
            maxYawAngle: this.params.tuning.spherical.maxYawAngle,
            rotationSpeedCorrection: this.params.tuning.spherical.rotationSpeedCorrection,
            degreeToPixelCorrection: this.params.tuning.spherical.degreeToPixelCorrection,
            speedFadeTime: this.params.tuning.spherical.speedFadeTime,
            speedFadeThreshold: this.params.tuning.spherical.speedFadeThreshold
        });
        const t = this.elementSize$.getValue();
        t && this.scene3D.setViewportSize(t.width, t.height);
    };
    destroy3DScene = ()=>{
        this.scene3D && (this.scene3D.destroy(), this.scene3D = void 0);
    };
    playIfAllowed() {
        pt(this.video).then((e)=>{
            e || (this.liveOffset?.pause(), this.videoState.setState(ie.PAUSED), R(this.params.desiredState.playbackState, l.PAUSED, !0));
        }, (e)=>this.params.output.error$.next({
                id: "ForcePlay",
                message: "play() failed even with workarounds",
                category: (0, _esnextEsmJs.ErrorCategory).DOM,
                thrown: e
            }));
    }
    destroy() {
        this.subscription.unsubscribe(), this.droppedFramesManager.destroy(), this.destroy3DScene(), this.textTracksManager.destroy(), this.player.destroy(), this.params.output.element$.next(void 0), ht(this.video);
    }
}
class Cr extends vs {
    subscribe() {
        super.subscribe();
        const { output: e, observableVideo: t, connect: i } = this.getProviderSubscriptionInfo();
        i(t.timeUpdate$, e.position$), i(t.durationChange$, e.duration$);
    }
    seek(e, t) {
        this.params.output.willSeekEvent$.next(), this.player.seek(e, t);
    }
}
class Rr extends vs {
    constructor(e){
        super(e), this.liveOffset = new Ci;
    }
    subscribe() {
        super.subscribe();
        const { output: e, observableVideo: t, connect: i } = this.getProviderSubscriptionInfo();
        this.params.output.position$.next(0), i(t.timeUpdate$, e.liveBufferTime$), i(this.player.liveDuration$, e.duration$), this.subscription.add(this.params.output.position$.subscribe(this.player.livePositionFromPlayer$)).add((0, _esnextEsmJs.combine)({
            interval: (0, _esnextEsmJs.interval)($i),
            playbackRate: t.playbackRateState$
        }).subscribe(({ playbackRate: s })=>{
            if (this.videoState.getState() === ie.PLAYING && !this.player.isActiveLowLatency) {
                const r = e.position$.getValue() + (s - 1);
                e.position$.next(r), this.liveOffset?.resetTo(-r * 1e3);
            }
        })).add((0, _esnextEsmJs.combine)({
            liveBufferTime: e.liveBufferTime$,
            liveAvailabilityStartTime: this.player.liveAvailabilityStartTime$
        }).pipe((0, _esnextEsmJs.map)(({ liveBufferTime: s, liveAvailabilityStartTime: r })=>s && r ? s + r : void 0)).subscribe(e.liveTime$));
    }
    seek(e) {
        this.params.output.willSeekEvent$.next();
        const t = this.params.desiredState.playbackState.getState(), i = this.videoState.getState(), s = t === l.PAUSED && i === ie.PAUSED, r = -e, n = Math.trunc(r / 1e3 <= Math.abs(this.params.output.duration$.getValue()) ? r : 0);
        this.player.seekLive(n).then(()=>{
            this.params.output.position$.next(e / 1e3), this.liveOffset?.resetTo(n, s);
        });
    }
}
const Oe = {};
var z;
(function(a) {
    a.INITIALIZING = "initializing", a.STOPPED = "stopped", a.READY = "ready", a.PLAYING = "playing", a.PAUSED = "paused";
})(z || (z = {}));
const xt = (a, e)=>new (0, _esnextEsmJs.Observable)((t)=>{
        const i = (s, r)=>t.next(r);
        return a.on(e, i), ()=>a.off(e, i);
    });
class Ir {
    subscription = new (0, _esnextEsmJs.Subscription);
    videoState = new re(z.INITIALIZING);
    video;
    params;
    hls;
    textTracksManager = new et;
    trackLevels = new Map;
    constructor(e){
        this.video = ut(e.container), this.params = e, this.params.output.element$.next(this.video), this.params.output.isLive$.next(!1), this.params.output.availableVideoTracks$.next([]), this.params.output.availableAudioTracks$.next([]), this.params.output.isAudioAvailable$.next(!0), this.params.output.hostname$.next(Ye(this.params.source.url)), this.loadHlsJs();
    }
    destroy() {
        this.subscription.unsubscribe(), this.trackLevels.clear(), this.textTracksManager.destroy(), this.hls?.detachMedia(), this.hls?.destroy(), this.params.output.element$.next(void 0), ht(this.video);
    }
    loadHlsJs() {
        let e = !1;
        const t = (s)=>{
            e || this.params.output.error$.next({
                id: s === "timeout" ? "HlsJsTimeout" : "HlsJsLoadError",
                category: (0, _esnextEsmJs.ErrorCategory).NETWORK,
                message: "Failed to load Hls.js",
                thrown: s
            }), e = !0;
        }, i = window.setTimeout(()=>t("timeout"), this.params.tuning.dynamicImportTimeout);
        require("e8f59fa7cdfc5947").then((s)=>{
            e || (Oe.Hls = s.default, Oe.Events = s.default.Events, this.init());
        }, t).finally(()=>{
            window.clearTimeout(i), e = !0;
        });
    }
    init() {
        (0, _esnextEsmJs.assertNonNullable)(Oe.Hls, "hls.js not loaded"), this.hls = new Oe.Hls({
            fragLoadingMaxRetry: 5,
            levelLoadingMaxRetry: 2,
            manifestLoadingMaxRetry: 2,
            fragLoadingMaxRetryTimeout: 16e3,
            manifestLoadingMaxRetryTimeout: 2e3,
            levelLoadingMaxRetryTimeout: 2e3
        }), this.subscribe(), this.videoState.setState(z.STOPPED);
    }
    subscribe() {
        (0, _esnextEsmJs.assertNonNullable)(Oe.Events, "hls.js not loaded");
        const { desiredState: e, output: t } = this.params, i = (c)=>{
            t.error$.next({
                id: "HlsJsProvider",
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: "HlsJsProvider internal logic error",
                thrown: c
            });
        }, s = ft(this.video), r = (c, u)=>this.subscription.add(c.subscribe(u, i));
        r(s.timeUpdate$, t.position$), r(s.durationChange$, t.duration$), r(s.ended$, t.endedEvent$), r(s.looped$, t.loopedEvent$), r(s.error$, t.error$), r(s.isBuffering$, t.isBuffering$), r(s.currentBuffer$, t.currentBuffer$), r(s.loadStart$, t.firstBytesEvent$), r(s.playing$, t.firstFrameEvent$), r(s.canplay$, t.canplay$), r(s.seeked$, t.seekedEvent$), r(s.inPiP$, t.inPiP$), r(s.inFullscreen$, t.inFullscreen$), this.subscription.add(Ft(this.video, e.isLooped, i)), this.subscription.add(lt(this.video, e.volume, s.volumeState$, i)), this.subscription.add(s.volumeState$.subscribe(this.params.output.volume$)), this.subscription.add(kt(this.video, e.playbackRate, s.playbackRateState$, i)), this.subscription.add(xt(this.hls, Oe.Events.ERROR).subscribe((c)=>{
            c.fatal && t.error$.next({
                id: [
                    "HlsJsFatal",
                    c.type,
                    c.details
                ].join("_"),
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: `HlsJs fatal ${c.type} ${c.details}, ${c.err?.message} ${c.reason}`,
                thrown: c.error
            });
        })), this.subscription.add(s.playing$.subscribe(()=>{
            this.videoState.setState(z.PLAYING), R(e.playbackState, l.PLAYING);
        }, i)).add(s.pause$.subscribe(()=>{
            this.videoState.setState(z.PAUSED), R(e.playbackState, l.PAUSED);
        }, i)).add(s.canplay$.subscribe(()=>{
            this.videoState.getTransition()?.to === z.READY && this.videoState.setState(z.READY), this.videoState.getState() === z.PLAYING && this.playIfAllowed();
        }, i)), r(xt(this.hls, Oe.Events.MANIFEST_PARSED).pipe((0, _esnextEsmJs.map)(({ levels: c })=>c.reduce((u, h)=>{
                const f = h.name || h.height.toString(10), { width: p, height: S } = h, $ = ri(h.attrs.QUALITY ?? "") ?? (0, _esnextEsmJs.videoSizeToQuality)({
                    width: p,
                    height: S
                });
                if (!$) return u;
                const y = h.attrs["FRAME-RATE"] ? parseFloat(h.attrs["FRAME-RATE"]) : void 0, w = {
                    id: f.toString(),
                    quality: $,
                    bitrate: h.bitrate / 1e3,
                    size: {
                        width: p,
                        height: S
                    },
                    fps: y
                };
                return this.trackLevels.set(f, {
                    track: w,
                    level: h
                }), u.push(w), u;
            }, []))), t.availableVideoTracks$), r(xt(this.hls, Oe.Events.MANIFEST_PARSED), (c)=>{
            if (c.subtitleTracks.length > 0) {
                const u = [];
                for (const h of c.subtitleTracks){
                    const f = h.name, p = h.attrs.URI || "", S = h.lang, $ = "internal";
                    u.push({
                        id: f,
                        url: p,
                        language: S,
                        type: $
                    });
                }
                e.internalTextTracks.startTransitionTo(u);
            }
        }), r(xt(this.hls, Oe.Events.LEVEL_LOADING).pipe((0, _esnextEsmJs.map)(({ url: c })=>Ye(c))), t.hostname$), this.subscription.add(qe(e.autoVideoTrackSwitching, ()=>this.hls.autoLevelEnabled, (c)=>{
            this.hls.nextLevel = c ? -1 : this.hls.currentLevel, this.hls.loadLevel = c ? -1 : this.hls.loadLevel;
        }, {
            onError: i
        }));
        const n = (c)=>Array.from(this.trackLevels.values()).find(({ level: u })=>u === c)?.track, o = xt(this.hls, Oe.Events.LEVEL_SWITCHED).pipe((0, _esnextEsmJs.map)(({ level: c })=>n(this.hls.levels[c])));
        o.pipe((0, _esnextEsmJs.filter)((0, _esnextEsmJs.isNonNullable))).subscribe(t.currentVideoTrack$, i), this.subscription.add(qe(e.videoTrack, ()=>n(this.hls.levels[this.hls.currentLevel]), (c)=>{
            if ((0, _esnextEsmJs.isNullable)(c)) return;
            const u = this.trackLevels.get(c.id)?.level;
            if (!u) return;
            const h = this.hls.levels.indexOf(u), f = this.hls.currentLevel, p = this.hls.levels[f];
            !p || u.bitrate > p.bitrate ? this.hls.nextLevel = h : (this.hls.loadLevel = h, this.hls.loadLevel = h);
        }, {
            changed$: o,
            onError: i
        })), r(s.progress$, ()=>{
            this.params.dependencies.throughputEstimator.addRawThroughput(this.hls.bandwidthEstimate / 1e3);
        }), this.textTracksManager.connect(this.video, e, t);
        const d = (0, _esnextEsmJs.merge)(e.playbackState.stateChangeStarted$, e.videoTrack.stateChangeStarted$, e.seekState.stateChangeEnded$, this.videoState.stateChangeEnded$, (0, _esnextEsmJs.observableFrom)([
            "init"
        ])).pipe((0, _esnextEsmJs.debounce)(0));
        this.subscription.add(d.subscribe(this.syncPlayback, i));
    }
    syncPlayback = ()=>{
        const e = this.videoState.getState(), t = this.params.desiredState.playbackState.getState(), i = this.params.desiredState.playbackState.getTransition(), s = this.params.desiredState.seekState.getState();
        if (e !== z.INITIALIZING) switch(i?.to !== l.PAUSED && s.state === G.Requested && this.seek(s.position), t){
            case l.STOPPED:
                switch(e){
                    case z.STOPPED:
                        break;
                    case z.READY:
                    case z.PLAYING:
                    case z.PAUSED:
                        this.stop();
                        break;
                    default:
                        (0, _esnextEsmJs.assertNever)(e);
                }
                break;
            case l.READY:
                switch(e){
                    case z.STOPPED:
                        this.prepare();
                        break;
                    case z.READY:
                    case z.PLAYING:
                    case z.PAUSED:
                        break;
                    default:
                        (0, _esnextEsmJs.assertNever)(e);
                }
                break;
            case l.PLAYING:
                switch(e){
                    case z.PLAYING:
                        break;
                    case z.STOPPED:
                        this.prepare();
                        break;
                    case z.READY:
                    case z.PAUSED:
                        this.playIfAllowed();
                        break;
                    default:
                        (0, _esnextEsmJs.assertNever)(e);
                }
                break;
            case l.PAUSED:
                switch(e){
                    case z.PAUSED:
                        break;
                    case z.STOPPED:
                        this.prepare();
                        break;
                    case z.READY:
                        this.videoState.setState(z.PAUSED), R(this.params.desiredState.playbackState, l.PAUSED);
                        break;
                    case z.PLAYING:
                        this.pause();
                        break;
                    default:
                        (0, _esnextEsmJs.assertNever)(e);
                }
                break;
            default:
                (0, _esnextEsmJs.assertNever)(t);
        }
    };
    prepare() {
        this.videoState.startTransitionTo(z.READY), this.hls.attachMedia(this.video), this.hls.loadSource(this.params.source.url);
    }
    async playIfAllowed() {
        this.videoState.startTransitionTo(z.PLAYING), await pt(this.video).catch((t)=>this.params.output.error$.next({
                id: "ForcePlay",
                message: "play() failed even with workarounds",
                category: (0, _esnextEsmJs.ErrorCategory).DOM,
                thrown: t
            })) || (this.videoState.setState(z.PAUSED), R(this.params.desiredState.playbackState, l.PAUSED, !0));
    }
    pause() {
        this.videoState.startTransitionTo(z.PAUSED), this.video.pause();
    }
    seek(e) {
        this.params.output.willSeekEvent$.next(), this.video.currentTime = e / 1e3;
    }
    stop() {
        this.params.output.position$.next(0), this.params.output.duration$.next(1 / 0), this.params.output.currentBuffer$.next(void 0), this.params.output.hostname$.next(void 0), this.hls.stopLoad(), this.hls.detachMedia(), this.video.removeAttribute("src"), this.video.load(), this.videoState.setState(z.STOPPED), R(this.params.desiredState.playbackState, l.STOPPED, !0);
    }
}
const ji = "X-Playback-Duration";
var Ji = async (a)=>{
    const e = await Ot(a), t = await e.text(), i = /#EXT-X-VK-PLAYBACK-DURATION:(\d+)/m.exec(t)?.[1];
    return i ? parseInt(i, 10) : e.headers.has(ji) ? parseInt(e.headers.get(ji), 10) : void 0;
};
const Br = (a)=>{
    let e = null;
    if (a.QUALITY && (e = ri(a.QUALITY)), !e && a.RESOLUTION) {
        const [t, i] = a.RESOLUTION.split("x").map((s)=>parseInt(s, 10));
        e = (0, _esnextEsmJs.videoSizeToQuality)({
            width: t,
            height: i
        });
    }
    return e ?? null;
}, Mr = (a, e)=>{
    const t = a.split(`
`), i = [], s = [];
    for(let r = 0; r < t.length; r++){
        const n = t[r], o = n.match(/^#EXT-X-STREAM-INF:(.+)/), d = n.match(/^#EXT-X-MEDIA:TYPE=SUBTITLES,(.+)/);
        if (!(!o && !d)) {
            if (o) {
                const c = Object.fromEntries(o[1].split(",").map((y)=>y.split("="))), u = c.QUALITY ?? `stream-${c.BANDWIDTH}`, h = Br(c);
                let f;
                c.BANDWIDTH && (f = parseInt(c.BANDWIDTH, 10) / 1e3 || void 0), !f && c["AVERAGE-BANDWIDTH"] && (f = parseInt(c["AVERAGE-BANDWIDTH"], 10) / 1e3 || void 0);
                const p = c["FRAME-RATE"] ? parseFloat(c["FRAME-RATE"]) : void 0;
                let S;
                if (c.RESOLUTION) {
                    const [y, w] = c.RESOLUTION.split("x").map((_)=>parseInt(_, 10));
                    y && w && (S = {
                        width: y,
                        height: w
                    });
                }
                const $ = new URL(t[++r], e).toString();
                h && i.push({
                    id: u,
                    quality: h,
                    url: $,
                    bandwidth: f,
                    size: S,
                    fps: p
                });
            }
            if (d) {
                const c = Object.fromEntries(d[1].split(",").map((p)=>p.split("=")).map(([p, S])=>[
                        p,
                        S.replace(/^"|"$/g, "")
                    ])), u = c.URI?.replace(/playlist$/, "subtitles.vtt"), h = c.LANGUAGE, f = c.NAME;
                u && h && s.push({
                    type: "internal",
                    id: h,
                    label: f,
                    language: h,
                    url: u,
                    isAuto: !1
                });
            }
        }
    }
    if (!i.length) throw new Error("Empty manifest");
    return {
        qualityManifests: i,
        textTracks: s
    };
}, _r = (a)=>new Promise((e)=>{
        setTimeout(()=>{
            e();
        }, a);
    });
let Si = 0;
const Bi = async (a, e = a, t)=>{
    const s = await (await Ot(a)).text();
    Si += 1;
    try {
        const { qualityManifests: r, textTracks: n } = Mr(s, e);
        return {
            qualityManifests: r,
            textTracks: n
        };
    } catch  {
        if (Si <= t.manifestRetryMaxCount) return await _r((0, _esnextEsmJs.getExponentialDelay)(Si - 1, {
            start: t.manifestRetryInterval,
            max: t.manifestRetryMaxInterval
        })), Bi(a, e, t);
    }
    return {
        qualityManifests: [],
        textTracks: []
    };
};
var K;
(function(a) {
    a.STOPPED = "stopped", a.READY = "ready", a.PLAYING = "playing", a.CHANGING_MANIFEST = "changing_manifest", a.PAUSED = "paused";
})(K || (K = {}));
class Or {
    subscription = new (0, _esnextEsmJs.Subscription);
    videoState = new re(K.STOPPED);
    video;
    params;
    textTracksManager = new et;
    masterManifest;
    manifests$ = new (0, _esnextEsmJs.ValueSubject)([]);
    maxSeekBackTime$;
    liveOffset = new Ci;
    manifestStartTime$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    constructor(e){
        this.params = e, this.video = ut(e.container), this.params.output.element$.next(this.video), this.masterManifest = {
            id: "master",
            quality: (0, _esnextEsmJs.VideoQuality).INVARIANT,
            url: this.params.source.url
        }, Bi(Be(this.params.source.url), this.params.source.url, {
            manifestRetryInterval: this.params.tuning.manifestRetryInterval,
            manifestRetryMaxInterval: this.params.tuning.manifestRetryMaxInterval,
            manifestRetryMaxCount: this.params.tuning.manifestRetryMaxCount
        }).then(({ qualityManifests: t })=>{
            t.length === 0 && this.params.output.error$.next({
                id: "HlsLiveProviderInternal:empty_manifest",
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: "HlsLiveProvider: there are no qualities in manifest"
            }), this.manifests$.next([
                this.masterManifest,
                ...t
            ]);
        }, (t)=>this.params.output.error$.next({
                id: "ExtractHlsQualities",
                category: (0, _esnextEsmJs.ErrorCategory).NETWORK,
                message: "Error fetching manifest and extracting qualities",
                thrown: t
            })), this.params.output.isLive$.next(!0), this.params.output.canChangePlaybackSpeed$.next(!1), this.params.output.availableVideoTracks$.next([]), this.params.output.availableAudioTracks$.next([]), this.params.output.isAudioAvailable$.next(!0), this.params.output.hostname$.next(Ye(this.params.source.url)), this.maxSeekBackTime$ = new (0, _esnextEsmJs.ValueSubject)(e.source.maxSeekBackTime ?? 1 / 0), this.subscribe();
    }
    selectManifest() {
        const { autoVideoTrackSwitching: e, videoTrack: t } = this.params.desiredState, i = e.getState(), s = t.getTransition(), r = s?.to?.id ?? t.getState()?.id ?? "master", n = this.manifests$.getValue();
        if (!n.length) return;
        const o = i ? "master" : r;
        return i && !s && t.startTransitionTo(this.masterManifest), n.find((d)=>d.id === o);
    }
    subscribe() {
        const { output: e, desiredState: t } = this.params, i = (o)=>{
            e.error$.next({
                id: "HlsLiveProvider",
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: "HlsLiveProvider internal logic error",
                thrown: o
            });
        }, s = ft(this.video), r = (o, d)=>this.subscription.add(o.subscribe(d, i));
        r(s.ended$, e.endedEvent$), r(s.error$, e.error$), r(s.isBuffering$, e.isBuffering$), r(s.currentBuffer$, e.currentBuffer$), r(s.loadedMetadata$, e.firstBytesEvent$), r(s.playing$, e.firstFrameEvent$), r(s.canplay$, e.canplay$), r(s.inPiP$, e.inPiP$), r(s.inFullscreen$, e.inFullscreen$), this.subscription.add(t.isLooped.stateChangeStarted$.subscribe(()=>t.isLooped.setState(!1), i)), this.subscription.add(lt(this.video, t.volume, s.volumeState$, i)), this.subscription.add(s.volumeState$.subscribe(this.params.output.volume$, i)), this.subscription.add(kt(this.video, t.playbackRate, s.playbackRateState$, i)), this.textTracksManager.connect(this.video, t, e), this.subscription.add(s.playing$.subscribe(()=>{
            this.videoState.setState(K.PLAYING), R(t.playbackState, l.PLAYING);
        }, i)).add(s.pause$.subscribe(()=>{
            this.videoState.setState(K.PAUSED), R(t.playbackState, l.PAUSED);
        }, i)).add(s.canplay$.subscribe(()=>{
            this.videoState.getTransition()?.to === K.READY && this.videoState.setState(K.READY), this.videoState.getState() === K.PLAYING && this.playIfAllowed();
        }, i)), this.subscription.add(this.maxSeekBackTime$.pipe((0, _esnextEsmJs.filterChanged)(), (0, _esnextEsmJs.map)((o)=>-o / 1e3)).subscribe(this.params.output.duration$, i)), this.subscription.add(s.loadedMetadata$.subscribe(()=>{
            const o = this.params.desiredState.seekState.getState(), d = this.videoState.getTransition(), c = this.params.desiredState.videoTrack.getTransition(), u = this.params.desiredState.autoVideoTrackSwitching.getTransition();
            if (c && (0, _esnextEsmJs.isNonNullable)(c.to)) {
                const h = c.to.id;
                this.params.desiredState.videoTrack.setState(c.to);
                const f = this.manifests$.getValue().find((p)=>p.id === h);
                f && (this.params.output.currentVideoTrack$.next(f), this.params.output.hostname$.next(Ye(f.url)));
            }
            u && this.params.desiredState.autoVideoTrackSwitching.setState(u.to), d && d.from === K.CHANGING_MANIFEST && this.videoState.setState(d.to), o && o.state === G.Requested && this.seek(o.position);
        }, i)), this.subscription.add(s.loadedData$.subscribe(()=>{
            const o = this.video?.getStartDate?.()?.getTime();
            this.manifestStartTime$.next(o || void 0);
        }, i)), this.subscription.add((0, _esnextEsmJs.combine)({
            startTime: this.manifestStartTime$.pipe((0, _esnextEsmJs.filter)((0, _esnextEsmJs.isNonNullable))),
            currentTime: s.timeUpdate$
        }).subscribe(({ startTime: o, currentTime: d })=>this.params.output.liveTime$.next(o + d * 1e3), i)), this.subscription.add(this.manifests$.pipe((0, _esnextEsmJs.map)((o)=>o.map(({ id: d, quality: c, size: u, bandwidth: h, fps: f })=>({
                    id: d,
                    quality: c,
                    size: u,
                    fps: f,
                    bitrate: h
                })))).subscribe(this.params.output.availableVideoTracks$, i));
        const n = (0, _esnextEsmJs.merge)(t.playbackState.stateChangeStarted$, t.seekState.stateChangeEnded$, t.videoTrack.stateChangeStarted$, t.autoVideoTrackSwitching.stateChangeStarted$, t.autoVideoTrackLimits.stateChangeStarted$, this.videoState.stateChangeEnded$, this.manifests$, (0, _esnextEsmJs.observableFrom)([
            "init"
        ])).pipe((0, _esnextEsmJs.debounce)(0));
        this.subscription.add(n.subscribe(this.syncPlayback, i));
    }
    destroy() {
        this.subscription.unsubscribe(), this.textTracksManager.destroy(), this.params.output.element$.next(void 0), ht(this.video);
    }
    prepare() {
        const e = this.selectManifest();
        if ((0, _esnextEsmJs.isNullable)(e)) return;
        const t = this.params.desiredState.autoVideoTrackLimits.getTransition(), i = this.params.desiredState.autoVideoTrackLimits.getState(), s = new URL(e.url);
        if ((t || i) && e.id === this.masterManifest.id) {
            const { max: o, min: d } = t?.to ?? i ?? {};
            for (const [c, u] of [
                [
                    o,
                    "mq"
                ],
                [
                    d,
                    "lq"
                ]
            ]){
                const h = String(parseFloat(c || ""));
                u && c && s.searchParams.set(u, h);
            }
        }
        const r = this.params.format === g.HLS_LIVE_CMAF ? he.DASH_CMAF_OFFSET_P : he.OFFSET_P, n = Be(s.toString(), this.liveOffset.getTotalOffset(), r);
        this.video.setAttribute("src", n), this.video.load(), Ji(n).then((o)=>{
            if (!(0, _esnextEsmJs.isNullable)(o)) this.maxSeekBackTime$.next(o);
            else {
                const d = this.params.source.maxSeekBackTime ?? this.maxSeekBackTime$.getValue();
                if ((0, _esnextEsmJs.isNullable)(d) || !isFinite(d)) try {
                    Ot(n).then((c)=>c.text()).then((c)=>{
                        const u = /#EXT-X-STREAM-INF[^\n]+\n(.+)/m.exec(c)?.[1];
                        if (u) {
                            const h = new URL(u, n).toString();
                            Ji(h).then((f)=>{
                                (0, _esnextEsmJs.isNullable)(f) || this.maxSeekBackTime$.next(f);
                            });
                        }
                    });
                } catch  {}
            }
        });
    }
    playIfAllowed() {
        pt(this.video).then((e)=>{
            e || (this.videoState.setState(K.PAUSED), this.liveOffset.pause(), R(this.params.desiredState.playbackState, l.PAUSED, !0));
        }, (e)=>this.params.output.error$.next({
                id: "ForcePlay",
                message: "play() failed even with workarounds",
                category: (0, _esnextEsmJs.ErrorCategory).DOM,
                thrown: e
            }));
    }
    seek(e) {
        this.params.output.willSeekEvent$.next();
        const t = -e, i = t < this.maxSeekBackTime$.getValue() ? t : 0;
        this.liveOffset.resetTo(i), this.params.output.position$.next(-i / 1e3), this.params.output.seekedEvent$.next();
    }
    syncPlayback = ()=>{
        if (!this.manifests$.getValue().length) return;
        const t = this.videoState.getState(), i = this.params.desiredState.playbackState.getState(), s = this.params.desiredState.playbackState.getTransition(), r = this.params.desiredState.videoTrack.getTransition(), n = this.params.desiredState.autoVideoTrackSwitching.getTransition(), o = this.params.desiredState.autoVideoTrackLimits.getTransition();
        if (i === l.STOPPED) {
            t !== K.STOPPED && (this.videoState.startTransitionTo(K.STOPPED), this.video.removeAttribute("src"), this.video.load(), this.params.output.position$.next(0), this.params.output.duration$.next(1 / 0), this.params.output.currentBuffer$.next(void 0), this.params.output.hostname$.next(void 0), this.videoState.setState(K.STOPPED), R(this.params.desiredState.playbackState, l.STOPPED, !0));
            return;
        }
        if (this.videoState.getTransition()) return;
        const c = this.params.desiredState.seekState.getState();
        if (t === K.STOPPED) {
            this.videoState.startTransitionTo(K.READY), this.prepare();
            return;
        }
        if (r || n || o) {
            const u = this.videoState.getState();
            this.videoState.setState(K.CHANGING_MANIFEST), this.videoState.startTransitionTo(u), this.prepare(), o && this.params.output.autoVideoTrackLimits$.next(o.to), c.state === G.None && this.params.desiredState.seekState.setState({
                state: G.Requested,
                position: -this.liveOffset.getTotalOffset(),
                forcePrecise: !0
            });
            return;
        }
        if (s?.to !== l.PAUSED && c.state === G.Requested) {
            this.videoState.startTransitionTo(K.READY), this.seek(c.position - this.liveOffset.getTotalPausedTime()), this.prepare();
            return;
        }
        switch(t){
            case K.READY:
                i === l.READY ? R(this.params.desiredState.playbackState, l.READY) : i === l.PAUSED ? (this.videoState.setState(K.PAUSED), this.liveOffset.pause(), R(this.params.desiredState.playbackState, l.PAUSED)) : i === l.PLAYING && (this.videoState.startTransitionTo(K.PLAYING), this.playIfAllowed());
                return;
            case K.PLAYING:
                i === l.PAUSED ? (this.videoState.startTransitionTo(K.PAUSED), this.liveOffset.pause(), this.video.pause()) : s?.to === l.PLAYING && R(this.params.desiredState.playbackState, l.PLAYING);
                return;
            case K.PAUSED:
                if (i === l.PLAYING) {
                    if (this.videoState.startTransitionTo(K.PLAYING), this.liveOffset.getTotalPausedTime() < this.params.config.maxPausedTime && this.liveOffset.getTotalOffset() < this.maxSeekBackTime$.getValue()) this.liveOffset.resume(), this.playIfAllowed(), this.params.output.position$.next(-this.liveOffset.getTotalOffset() / 1e3);
                    else {
                        let u = this.liveOffset.getTotalOffset();
                        u >= this.maxSeekBackTime$.getValue() && (u = 0, this.liveOffset.resetTo(u)), this.liveOffset.resume(), this.params.output.position$.next(-u / 1e3), this.prepare();
                    }
                } else s?.to === l.PAUSED && (R(this.params.desiredState.playbackState, l.PAUSED), this.liveOffset.pause());
                return;
            case K.CHANGING_MANIFEST:
                break;
            default:
                return (0, _esnextEsmJs.assertNever)(t);
        }
    };
}
var te;
(function(a) {
    a.STOPPED = "stopped", a.READY = "ready", a.PLAYING = "playing", a.CHANGING_MANIFEST = "changing_manifest", a.PAUSED = "paused";
})(te || (te = {}));
class Nr {
    subscription = new (0, _esnextEsmJs.Subscription);
    videoState = new re(te.STOPPED);
    video;
    params;
    textTracksManager = new et;
    masterManifest;
    manifests$ = new (0, _esnextEsmJs.ValueSubject)([]);
    constructor(e){
        this.params = e, this.video = ut(e.container), this.params.output.element$.next(this.video), this.masterManifest = {
            id: "master",
            quality: (0, _esnextEsmJs.VideoQuality).INVARIANT,
            url: this.params.source.url
        }, this.params.output.isLive$.next(!1), this.params.output.availableVideoTracks$.next([]), this.params.output.availableAudioTracks$.next([]), this.params.output.isAudioAvailable$.next(!0), this.params.output.hostname$.next(Ye(this.params.source.url)), this.params.output.autoVideoTrackLimitingAvailable$.next(!0), Bi(Be(this.params.source.url), this.params.source.url, {
            manifestRetryInterval: this.params.tuning.manifestRetryInterval,
            manifestRetryMaxInterval: this.params.tuning.manifestRetryMaxInterval,
            manifestRetryMaxCount: this.params.tuning.manifestRetryMaxCount
        }).then(({ qualityManifests: t, textTracks: i })=>{
            this.manifests$.next([
                this.masterManifest,
                ...t
            ]), this.params.tuning.useNativeHLSTextTracks || this.params.desiredState.internalTextTracks.startTransitionTo(i);
        }, (t)=>this.params.output.error$.next({
                id: "ExtractHlsQualities",
                category: (0, _esnextEsmJs.ErrorCategory).NETWORK,
                message: "Error fetching manifest and extracting qualities",
                thrown: t
            })), this.subscribe();
    }
    selectManifest() {
        const { autoVideoTrackSwitching: e, videoTrack: t } = this.params.desiredState, i = e.getState(), s = t.getTransition(), r = s?.to?.id ?? t.getState()?.id ?? "master", n = this.manifests$.getValue();
        if (!n.length) return;
        const o = i ? "master" : r;
        return i && !s && t.startTransitionTo(this.masterManifest), n.find((d)=>d.id === o);
    }
    subscribe() {
        const { output: e, desiredState: t } = this.params, i = (o)=>{
            e.error$.next({
                id: "HlsProvider",
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: "HlsProvider internal logic error",
                thrown: o
            });
        }, s = ft(this.video), r = (o, d)=>this.subscription.add(o.subscribe(d));
        if (r(s.timeUpdate$, e.position$), r(s.durationChange$, e.duration$), r(s.ended$, e.endedEvent$), r(s.looped$, e.loopedEvent$), r(s.error$, e.error$), r(s.isBuffering$, e.isBuffering$), r(s.currentBuffer$, e.currentBuffer$), r(s.loadedMetadata$, e.firstBytesEvent$), r(s.playing$, e.firstFrameEvent$), r(s.canplay$, e.canplay$), r(s.seeked$, e.seekedEvent$), r(s.inPiP$, e.inPiP$), r(s.inFullscreen$, e.inFullscreen$), this.subscription.add(Ft(this.video, t.isLooped, i)), this.subscription.add(lt(this.video, t.volume, s.volumeState$, i)), this.subscription.add(s.volumeState$.subscribe(this.params.output.volume$, i)), this.subscription.add(kt(this.video, t.playbackRate, s.playbackRateState$, i)), this.textTracksManager.connect(this.video, t, e), this.subscription.add(s.playing$.subscribe(()=>{
            this.videoState.setState(te.PLAYING), R(t.playbackState, l.PLAYING);
        }, i)).add(s.pause$.subscribe(()=>{
            this.videoState.setState(te.PAUSED), R(t.playbackState, l.PAUSED);
        }, i)).add(s.canplay$.subscribe(()=>{
            this.videoState.getTransition()?.to === te.READY && this.videoState.setState(te.READY), this.videoState.getState() === te.PLAYING && this.playIfAllowed();
        }, i).add(s.loadedMetadata$.subscribe(()=>{
            const o = this.params.desiredState.seekState.getState(), d = this.videoState.getTransition(), c = this.params.desiredState.videoTrack.getTransition(), u = this.params.desiredState.autoVideoTrackSwitching.getTransition();
            if (c && (0, _esnextEsmJs.isNonNullable)(c.to)) {
                const h = c.to.id;
                this.params.desiredState.videoTrack.setState(c.to);
                const f = this.manifests$.getValue().find((p)=>p.id === h);
                if (f) {
                    this.params.output.currentVideoTrack$.next(f), this.params.output.hostname$.next(Ye(f.url));
                    const p = this.params.desiredState.playbackRate.getState(), S = this.params.output.element$.getValue()?.playbackRate;
                    if (p !== S) {
                        const $ = this.params.output.element$.getValue();
                        $ && (this.params.desiredState.playbackRate.setState(p), $.playbackRate = p);
                    }
                }
            }
            u && this.params.desiredState.autoVideoTrackSwitching.setState(u.to), d && d.from === te.CHANGING_MANIFEST && this.videoState.setState(d.to), o.state === G.Requested && this.seek(o.position);
        }, i))), this.subscription.add(this.manifests$.pipe((0, _esnextEsmJs.map)((o)=>o.map(({ id: d, quality: c, size: u, bandwidth: h, fps: f })=>({
                    id: d,
                    quality: c,
                    size: u,
                    fps: f,
                    bitrate: h
                })))).subscribe(this.params.output.availableVideoTracks$, i)), !(0, _esnextEsmJs.isIOS)() || !this.params.tuning.useNativeHLSTextTracks) {
            const { textTracks: o } = this.video;
            this.subscription.add((0, _esnextEsmJs.merge)((0, _esnextEsmJs.fromEvent)(o, "addtrack"), (0, _esnextEsmJs.fromEvent)(o, "removetrack"), (0, _esnextEsmJs.fromEvent)(o, "change"), (0, _esnextEsmJs.observableFrom)([
                "init"
            ])).subscribe(()=>{
                for(let d = 0; d < o.length; d++)o[d].mode = "hidden";
            }, i));
        }
        const n = (0, _esnextEsmJs.merge)(t.playbackState.stateChangeStarted$, t.seekState.stateChangeEnded$, t.videoTrack.stateChangeStarted$, t.autoVideoTrackSwitching.stateChangeStarted$, t.autoVideoTrackLimits.stateChangeStarted$, this.videoState.stateChangeEnded$, this.manifests$, (0, _esnextEsmJs.observableFrom)([
            "init"
        ])).pipe((0, _esnextEsmJs.debounce)(0));
        this.subscription.add(n.subscribe(this.syncPlayback, i));
    }
    destroy() {
        this.subscription.unsubscribe(), this.textTracksManager.destroy(), this.params.output.element$.next(void 0), ht(this.video);
    }
    prepare() {
        const e = this.selectManifest();
        if ((0, _esnextEsmJs.isNullable)(e)) return;
        const t = this.params.desiredState.autoVideoTrackLimits.getTransition(), i = this.params.desiredState.autoVideoTrackLimits.getState(), s = new URL(e.url);
        if ((t || i) && e.id === this.masterManifest.id) {
            const { max: r, min: n } = t?.to ?? i ?? {};
            for (const [o, d] of [
                [
                    r,
                    "mq"
                ],
                [
                    n,
                    "lq"
                ]
            ]){
                const c = String(parseFloat(o || ""));
                d && o && s.searchParams.set(d, c);
            }
        }
        this.video.setAttribute("src", s.toString()), this.video.load();
    }
    playIfAllowed() {
        pt(this.video).then((e)=>{
            e || (this.videoState.setState(te.PAUSED), R(this.params.desiredState.playbackState, l.PAUSED, !0));
        }, (e)=>this.params.output.error$.next({
                id: "ForcePlay",
                message: "play() failed even with workarounds",
                category: (0, _esnextEsmJs.ErrorCategory).DOM,
                thrown: e
            }));
    }
    seek(e) {
        this.params.output.willSeekEvent$.next(), this.video.currentTime = e / 1e3;
    }
    syncPlayback = ()=>{
        if (!this.manifests$.getValue().length) return;
        const t = this.videoState.getState(), i = this.params.desiredState.playbackState.getState(), s = this.params.desiredState.playbackState.getTransition(), r = this.params.desiredState.videoTrack.getTransition(), n = this.params.desiredState.autoVideoTrackSwitching.getTransition(), o = this.params.desiredState.autoVideoTrackLimits.getTransition();
        if (i === l.STOPPED) {
            t !== te.STOPPED && (this.videoState.startTransitionTo(te.STOPPED), this.video.removeAttribute("src"), this.video.load(), this.params.output.position$.next(0), this.params.output.duration$.next(1 / 0), this.params.output.currentBuffer$.next(void 0), this.params.output.hostname$.next(void 0), this.videoState.setState(te.STOPPED), R(this.params.desiredState.playbackState, l.STOPPED, !0));
            return;
        }
        if (this.videoState.getTransition()) return;
        const c = this.params.desiredState.seekState.getState();
        if (t === te.STOPPED) {
            this.videoState.startTransitionTo(te.READY), this.prepare();
            return;
        }
        if (r || n || o) {
            const u = this.videoState.getState();
            this.videoState.setState(te.CHANGING_MANIFEST), this.videoState.startTransitionTo(u);
            const { currentTime: h } = this.video;
            this.prepare(), o && this.params.output.autoVideoTrackLimits$.next(o.to), c.state === G.None && this.params.desiredState.seekState.setState({
                state: G.Requested,
                position: h * 1e3,
                forcePrecise: !0
            });
            return;
        }
        switch(s?.to !== l.PAUSED && c.state === G.Requested && this.seek(c.position), t){
            case te.READY:
                i === l.READY ? R(this.params.desiredState.playbackState, l.READY) : i === l.PAUSED ? (this.videoState.setState(te.PAUSED), R(this.params.desiredState.playbackState, l.PAUSED)) : i === l.PLAYING && (this.videoState.startTransitionTo(te.PLAYING), this.playIfAllowed());
                return;
            case te.PLAYING:
                i === l.PAUSED ? (this.videoState.startTransitionTo(te.PAUSED), this.video.pause()) : s?.to === l.PLAYING && R(this.params.desiredState.playbackState, l.PLAYING);
                return;
            case te.PAUSED:
                i === l.PLAYING ? (this.videoState.startTransitionTo(te.PLAYING), this.playIfAllowed()) : s?.to === l.PAUSED && R(this.params.desiredState.playbackState, l.PAUSED);
                return;
            case te.CHANGING_MANIFEST:
                break;
            default:
                return (0, _esnextEsmJs.assertNever)(t);
        }
    };
}
var ae;
(function(a) {
    a.STOPPED = "stopped", a.READY = "ready", a.PLAYING = "playing", a.PAUSED = "paused";
})(ae || (ae = {}));
class Fr {
    subscription = new (0, _esnextEsmJs.Subscription);
    videoState = new re(ae.STOPPED);
    video;
    trackUrls = {};
    params;
    textTracksManager = new et;
    constructor(e){
        this.params = e, this.video = ut(e.container), this.params.output.element$.next(this.video), Object.entries(this.params.source).reverse().forEach(([t, i], s)=>{
            const r = s.toString(10);
            this.trackUrls[r] = {
                track: {
                    quality: t,
                    id: r
                },
                url: i
            };
        }), this.params.output.isLive$.next(!1), this.params.output.availableVideoTracks$.next(Object.values(this.trackUrls).map(({ track: t })=>t)), this.params.output.availableAudioTracks$.next([]), this.params.output.isAudioAvailable$.next(!0), this.params.desiredState.autoVideoTrackSwitching.setState(!1), this.params.output.autoVideoTrackLimitingAvailable$.next(!0), this.subscribe();
    }
    subscribe() {
        const { output: e, desiredState: t } = this.params, i = (o)=>{
            e.error$.next({
                id: "MpegProvider",
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: "MpegProvider internal logic error",
                thrown: o
            });
        }, s = ft(this.video), r = (o, d)=>this.subscription.add(o.subscribe(d, i));
        r(s.timeUpdate$, e.position$), r(s.durationChange$, e.duration$), r(s.ended$, e.endedEvent$), r(s.looped$, e.loopedEvent$), r(s.error$, e.error$), r(s.isBuffering$, e.isBuffering$), r(s.currentBuffer$, e.currentBuffer$), r(s.loadedMetadata$, e.firstBytesEvent$), r(s.playing$, e.firstFrameEvent$), r(s.canplay$, e.canplay$), r(s.seeked$, e.seekedEvent$), r(s.inPiP$, e.inPiP$), r(s.inFullscreen$, e.inFullscreen$), this.subscription.add(Ft(this.video, t.isLooped, i)), this.subscription.add(lt(this.video, t.volume, s.volumeState$, i)), this.subscription.add(s.volumeState$.subscribe(this.params.output.volume$, i)), this.subscription.add(kt(this.video, t.playbackRate, s.playbackRateState$, i)), this.subscription.add(s.playing$.subscribe(()=>{
            this.videoState.setState(ae.PLAYING), R(t.playbackState, l.PLAYING);
        }, i)).add(s.pause$.subscribe(()=>{
            this.videoState.setState(ae.PAUSED), R(t.playbackState, l.PAUSED);
        }, i)).add(s.canplay$.subscribe(()=>{
            this.videoState.getTransition()?.to === ae.READY && this.videoState.setState(ae.READY);
            const o = this.params.desiredState.videoTrack.getTransition();
            if (o && (0, _esnextEsmJs.isNonNullable)(o.to)) {
                this.params.desiredState.videoTrack.setState(o.to), this.params.output.currentVideoTrack$.next(this.trackUrls[o.to.id].track);
                const d = this.params.desiredState.playbackRate.getState(), c = this.params.output.element$.getValue()?.playbackRate;
                if (d !== c) {
                    const u = this.params.output.element$.getValue();
                    u && (this.params.desiredState.playbackRate.setState(d), u.playbackRate = d);
                }
            }
            this.videoState.getState() === ae.PLAYING && this.playIfAllowed();
        }, i)), this.textTracksManager.connect(this.video, t, e);
        const n = (0, _esnextEsmJs.merge)(t.playbackState.stateChangeStarted$, t.videoTrack.stateChangeStarted$, t.seekState.stateChangeEnded$, t.autoVideoTrackLimits.stateChangeStarted$, this.videoState.stateChangeEnded$, (0, _esnextEsmJs.observableFrom)([
            "init"
        ])).pipe((0, _esnextEsmJs.debounce)(0));
        this.subscription.add(n.subscribe(this.syncPlayback, i));
    }
    destroy() {
        this.subscription.unsubscribe(), this.textTracksManager.destroy(), this.trackUrls = {}, this.params.output.element$.next(void 0), ht(this.video);
    }
    prepare() {
        const e = this.params.desiredState.videoTrack.getState()?.id;
        (0, _esnextEsmJs.assertNonNullable)(e, "MpegProvider: track is not selected");
        let { url: t } = this.trackUrls[e];
        (0, _esnextEsmJs.assertNonNullable)(t, `MpegProvider: No url for ${e}`), this.params.tuning.requestQuick && (t = ki(t)), this.video.setAttribute("src", t), this.video.load(), this.params.output.hostname$.next(Ye(t));
    }
    playIfAllowed() {
        pt(this.video).then((e)=>{
            e || (this.videoState.setState(ae.PAUSED), R(this.params.desiredState.playbackState, l.PAUSED, !0));
        }, (e)=>this.params.output.error$.next({
                id: "ForcePlay",
                message: "play() failed even with workarounds",
                category: (0, _esnextEsmJs.ErrorCategory).DOM,
                thrown: e
            }));
    }
    seek(e) {
        this.params.output.willSeekEvent$.next(), this.video.currentTime = e / 1e3;
    }
    syncPlayback = ()=>{
        const e = this.videoState.getState(), t = this.params.desiredState.playbackState.getState(), i = this.params.desiredState.playbackState.getTransition();
        if (t === l.STOPPED) {
            e !== ae.STOPPED && (this.videoState.startTransitionTo(ae.STOPPED), this.video.removeAttribute("src"), this.video.load(), this.params.output.position$.next(0), this.params.output.duration$.next(1 / 0), this.params.output.currentBuffer$.next(void 0), this.params.output.hostname$.next(void 0), this.videoState.setState(ae.STOPPED), R(this.params.desiredState.playbackState, l.STOPPED, !0));
            return;
        }
        if (this.videoState.getTransition()) return;
        const r = this.params.desiredState.autoVideoTrackLimits.getTransition(), n = this.params.desiredState.videoTrack.getTransition(), o = this.params.desiredState.seekState.getState();
        if (r && e !== ae.READY && !n) {
            this.handleQualityLimitTransition(r.to.max);
            return;
        }
        if (e === ae.STOPPED) {
            this.videoState.startTransitionTo(ae.READY), this.prepare();
            return;
        }
        if (n) {
            const { currentTime: d } = this.video;
            this.prepare(), o.state === G.None && this.params.desiredState.seekState.setState({
                state: G.Requested,
                position: d * 1e3,
                forcePrecise: !0
            }), n.to && this.params.desiredState.autoVideoTrackLimits.getState()?.max !== this.trackUrls[n.to.id]?.track?.quality && this.params.output.autoVideoTrackLimits$.next({
                max: void 0
            });
            return;
        }
        switch(i?.to !== l.PAUSED && o.state === G.Requested && this.seek(o.position), e){
            case ae.READY:
                t === l.READY ? R(this.params.desiredState.playbackState, l.READY) : t === l.PAUSED ? (this.videoState.setState(ae.PAUSED), R(this.params.desiredState.playbackState, l.PAUSED)) : t === l.PLAYING && (this.videoState.startTransitionTo(ae.PLAYING), this.playIfAllowed());
                return;
            case ae.PLAYING:
                t === l.PAUSED ? (this.videoState.startTransitionTo(ae.PAUSED), this.video.pause()) : i?.to === l.PLAYING && R(this.params.desiredState.playbackState, l.PLAYING);
                return;
            case ae.PAUSED:
                t === l.PLAYING ? (this.videoState.startTransitionTo(ae.PLAYING), this.playIfAllowed()) : i?.to === l.PAUSED && R(this.params.desiredState.playbackState, l.PAUSED);
                return;
            default:
                return (0, _esnextEsmJs.assertNever)(e);
        }
    };
    handleQualityLimitTransition(e) {
        let t, i = e;
        if (e && this.params.output.currentVideoTrack$.getValue()?.quality !== e) {
            const s = Object.values(this.trackUrls).find((o)=>!(0, _esnextEsmJs.isInvariantQuality)(o.track.quality) && (0, _esnextEsmJs.isLowerOrEqual)(o.track.quality, e))?.track, r = this.params.desiredState.videoTrack.getState()?.id, n = this.trackUrls[r ?? "0"]?.track;
            if (s && n && (0, _esnextEsmJs.isHigherOrEqual)(n.quality, s.quality) && (t = s), !t) {
                const o = Object.values(this.trackUrls).filter((c)=>!(0, _esnextEsmJs.isInvariantQuality)(c.track.quality) && (0, _esnextEsmJs.isHigher)(c.track.quality, e)), d = o.length;
                d && (t = o[d - 1].track);
            }
            t && (i = t.quality);
        } else if (!e) {
            const s = Object.values(this.trackUrls).map((r)=>r.track);
            t = ni(s, {
                container: {
                    width: this.video.offsetWidth,
                    height: this.video.offsetHeight
                },
                throughput: this.params.dependencies.throughputEstimator.throughput$.getValue(),
                tuning: this.params.tuning.autoTrackSelection,
                forwardBufferHealth: 0,
                abrLogger: this.params.dependencies.abrLogger
            });
        }
        t && (this.params.output.currentVideoTrack$.next(t), this.params.desiredState.videoTrack.startTransitionTo(t)), this.params.output.autoVideoTrackLimits$.next({
            max: i
        });
    }
}
const Xi = [
    "stun:videostun.mycdn.me:80"
], Vr = 1e3, Ur = 3, bi = ()=>null;
class Hr {
    options;
    ws = null;
    peerConnection = null;
    serverUrl = "";
    streamKey = "";
    stream = null;
    signalingType = "JOIN";
    retryTimeout;
    retryCount = 0;
    externalStartCallback = bi;
    externalStopCallback = bi;
    externalErrorCallback = bi;
    constructor(e, t){
        this.options = this.normalizeOptions(t);
        const i = e.split("/");
        this.serverUrl = i.slice(0, i.length - 1).join("/"), this.streamKey = i[i.length - 1];
    }
    onStart(e) {
        try {
            this.externalStartCallback = e;
        } catch (t) {
            this.handleSystemError(t);
        }
    }
    onStop(e) {
        try {
            this.externalStopCallback = e;
        } catch (t) {
            this.handleSystemError(t);
        }
    }
    onError(e) {
        try {
            this.externalErrorCallback = e;
        } catch (t) {
            this.handleSystemError(t);
        }
    }
    connect() {
        this.connectWS();
    }
    disconnect() {
        try {
            this.externalStopCallback(), this.closeConnections();
        } catch (e) {
            this.handleSystemError(e);
        }
    }
    connectWS() {
        this.ws || (this.ws = new WebSocket(this.serverUrl), this.ws.onopen = this.onSocketOpen.bind(this), this.ws.onmessage = this.onSocketMessage.bind(this), this.ws.onclose = this.onSocketClose.bind(this), this.ws.onerror = this.onSocketError.bind(this));
    }
    onSocketOpen() {
        this.handleLogin();
    }
    onSocketClose(e) {
        try {
            if (!this.ws) return;
            this.ws = null, e.code > 1e3 ? (this.retryCount++, this.retryCount > this.options.maxRetryNumber ? this.handleNetworkError() : this.scheduleRetry()) : this.externalStopCallback();
        } catch (t) {
            this.handleRTCError(t);
        }
    }
    onSocketError(e) {
        try {
            this.externalErrorCallback(new Error(e.toString()));
        } catch (t) {
            this.handleRTCError(t);
        }
    }
    onSocketMessage(e) {
        try {
            const t = this.parseMessage(e.data);
            switch(t.type){
                case "JOIN":
                case "CALL_JOIN":
                    this.handleJoinMessage(t);
                    break;
                case "UPDATE":
                    this.handleUpdateMessage(t);
                    break;
                case "STATUS":
                    this.handleStatusMessage(t);
                    break;
            }
        } catch (t) {
            this.handleRTCError(t);
        }
    }
    handleJoinMessage(e) {
        switch(e.inviteType){
            case "ANSWER":
                this.handleAnswer(e.sdp);
                break;
            case "CANDIDATE":
                this.handleCandidate(e.candidate);
                break;
        }
    }
    handleStatusMessage(e) {
        switch(e.status){
            case "UNPUBLISHED":
                this.handleUnpublished();
                break;
        }
    }
    async handleUpdateMessage(e) {
        try {
            const t = await this.createOffer();
            this.peerConnection && await this.peerConnection.setLocalDescription(t), this.handleAnswer(e.sdp);
        } catch (t) {
            this.handleRTCError(t);
        }
    }
    async handleLogin() {
        try {
            const e = {
                iceServers: [
                    {
                        urls: Xi
                    }
                ]
            };
            this.peerConnection = new RTCPeerConnection(e), this.peerConnection.ontrack = this.onPeerConnectionStream.bind(this), this.peerConnection.onicecandidate = this.onPeerConnectionIceCandidate.bind(this), this.peerConnection.oniceconnectionstatechange = this.onPeerConnectionIceConnectionStateChange.bind(this);
            const t = await this.createOffer();
            await this.peerConnection.setLocalDescription(t), this.send({
                type: this.signalingType,
                inviteType: "OFFER",
                streamKey: this.streamKey,
                sdp: t.sdp,
                callSupport: !1
            });
        } catch (e) {
            this.handleRTCError(e);
        }
    }
    async handleAnswer(e) {
        try {
            this.peerConnection && await this.peerConnection.setRemoteDescription(new RTCSessionDescription({
                type: "answer",
                sdp: e
            }));
        } catch (t) {
            this.handleRTCError(t);
        }
    }
    async handleCandidate(e) {
        if (e) try {
            this.peerConnection && await this.peerConnection.addIceCandidate(e);
        } catch (t) {
            this.handleRTCError(t);
        }
    }
    handleUnpublished() {
        try {
            this.closeConnections(), this.externalStopCallback();
        } catch (e) {
            this.handleRTCError(e);
        }
    }
    handleSystemError(e) {
        this.options.errorChanel && this.options.errorChanel.next({
            id: "webrtc-provider-error",
            category: (0, _esnextEsmJs.ErrorCategory).WTF,
            message: e.message
        });
    }
    async onPeerConnectionStream(e) {
        const t = e.streams[0];
        this.stream && this.stream.id === t.id || (this.stream = t, this.externalStartCallback(this.stream));
    }
    onPeerConnectionIceCandidate(e) {
        e.candidate && this.send({
            type: this.signalingType,
            inviteType: "CANDIDATE",
            candidate: e.candidate
        });
    }
    onPeerConnectionIceConnectionStateChange() {
        if (this.peerConnection) {
            const e = this.peerConnection.iceConnectionState;
            [
                "failed",
                "closed"
            ].indexOf(e) > -1 && (this.retryCount++, this.retryCount > this.options.maxRetryNumber ? this.handleNetworkError() : (this.closeConnections(), this.scheduleRetry()));
        }
    }
    async createOffer() {
        const e = {
            offerToReceiveAudio: !0,
            offerToReceiveVideo: !0,
            voiceActivityDetection: !1
        };
        if (!this.peerConnection) throw new Error("Can not create offer - no peer connection instance ");
        const t = await this.peerConnection.createOffer(e), i = t.sdp || "";
        if (!/^a=rtpmap:\d+ H264\/\d+$/m.test(i)) throw new Error("No h264 codec support error");
        return t;
    }
    handleRTCError(e) {
        try {
            this.externalErrorCallback(e || new Error("RTC connection error"));
        } catch (t) {
            this.handleSystemError(t);
        }
    }
    handleNetworkError() {
        try {
            this.externalErrorCallback(new Error("Network error"));
        } catch (e) {
            this.handleSystemError(e);
        }
    }
    send(e) {
        this.ws && this.ws.send(JSON.stringify(e));
    }
    parseMessage(e) {
        try {
            return JSON.parse(e);
        } catch  {
            throw new Error("Can not parse socket message");
        }
    }
    closeConnections() {
        const e = this.ws;
        e && (this.ws = null, e.close(1e3)), this.removePeerConnection();
    }
    removePeerConnection() {
        let e = this.peerConnection;
        e && (this.peerConnection = null, e.close(), e.ontrack = null, e.onicecandidate = null, e.oniceconnectionstatechange = null, e = null);
    }
    scheduleRetry() {
        this.retryTimeout = setTimeout(this.connectWS.bind(this), Vr);
    }
    normalizeOptions(e = {}) {
        const t = {
            stunServerList: Xi,
            maxRetryNumber: Ur,
            errorChanel: null
        };
        return e.stunServerList && (t.stunServerList = e.stunServerList), e.maxRetryNumber && e.maxRetryNumber > 0 && (t.maxRetryNumber = e.maxRetryNumber), t;
    }
}
var Z;
(function(a) {
    a.STOPPED = "stopped", a.READY = "ready", a.PLAYING = "playing", a.PAUSED = "paused";
})(Z || (Z = {}));
class Yr {
    subscription;
    params;
    log;
    video;
    videoState = new re(Z.STOPPED);
    liveStreamClient;
    maxSeekBackTime$ = new (0, _esnextEsmJs.ValueSubject)(0);
    constructor(e){
        this.subscription = new (0, _esnextEsmJs.Subscription), this.params = e, this.log = this.params.dependencies.logger.createComponentLog("WebRTCLiveProvider"), this.video = ut(e.container), this.liveStreamClient = new Hr(this.params.source.url, {
            maxRetryNumber: this.params.tuning.webrtc.connectionRetryMaxNumber,
            errorChanel: this.params.output.error$
        }), this.liveStreamClient.onStart(this.onLiveStreamStart.bind(this)), this.liveStreamClient.onStop(this.onLiveStreamStop.bind(this)), this.liveStreamClient.onError(this.onLiveStreamError.bind(this)), this.subscribe();
    }
    destroy() {
        this.subscription.unsubscribe(), this.liveStreamClient.disconnect(), this.params.output.element$.next(void 0), ht(this.video);
    }
    subscribe() {
        const { output: e, desiredState: t } = this.params, i = (n)=>{
            e.error$.next({
                id: "WebRTCLiveProvider",
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: "WebRTCLiveProvider internal logic error",
                thrown: n
            });
        };
        (0, _esnextEsmJs.merge)(this.videoState.stateChangeStarted$.pipe((0, _esnextEsmJs.map)((n)=>({
                transition: n,
                type: "start"
            }))), this.videoState.stateChangeEnded$.pipe((0, _esnextEsmJs.map)((n)=>({
                transition: n,
                type: "end"
            })))).subscribe(({ transition: n, type: o })=>{
            this.log({
                message: `[videoState change] ${o}: ${JSON.stringify(n)}`
            });
        });
        const s = ft(this.video), r = (n, o)=>this.subscription.add(n.subscribe(o, i));
        r(s.timeUpdate$, e.liveTime$), r(s.ended$, e.endedEvent$), r(s.looped$, e.loopedEvent$), r(s.error$, e.error$), r(s.isBuffering$, e.isBuffering$), r(s.currentBuffer$, e.currentBuffer$), this.subscription.add(s.durationChange$.subscribe((n)=>{
            e.duration$.next(n === 1 / 0 ? 0 : n);
        })).add(s.canplay$.subscribe(()=>{
            this.videoState.getTransition()?.to === Z.READY && this.videoState.setState(Z.READY);
        }, i)).add(s.pause$.subscribe(()=>{
            this.videoState.setState(Z.PAUSED);
        }, i)).add(s.playing$.subscribe(()=>{
            this.videoState.setState(Z.PLAYING);
        }, i)).add(s.error$.subscribe(e.error$)).add(this.maxSeekBackTime$.subscribe(this.params.output.duration$)).add(lt(this.video, t.volume, s.volumeState$, i)).add(s.volumeState$.subscribe(e.volume$, i)).add(this.videoState.stateChangeEnded$.subscribe((n)=>{
            switch(n.to){
                case Z.STOPPED:
                    e.position$.next(0), e.duration$.next(0), t.playbackState.setState(l.STOPPED);
                    break;
                case Z.READY:
                    break;
                case Z.PAUSED:
                    t.playbackState.setState(l.PAUSED);
                    break;
                case Z.PLAYING:
                    t.playbackState.setState(l.PLAYING);
                    break;
                default:
                    return (0, _esnextEsmJs.assertNever)(n.to);
            }
        }, i)).add((0, _esnextEsmJs.merge)(t.playbackState.stateChangeStarted$, this.videoState.stateChangeEnded$, (0, _esnextEsmJs.observableFrom)([
            "init"
        ])).pipe((0, _esnextEsmJs.debounce)(0)).subscribe(this.syncPlayback.bind(this), i)), this.subscription.add(t.isLooped.stateChangeStarted$.subscribe(()=>t.isLooped.setState(!1), i)), this.subscription.add(t.autoVideoTrackSwitching.stateChangeStarted$.subscribe(()=>t.autoVideoTrackSwitching.setState(!1), i));
    }
    onLiveStreamStart(e) {
        this.params.output.element$.next(this.video), this.params.output.duration$.next(0), this.params.output.position$.next(0), this.params.output.isLive$.next(!0), this.params.output.canChangePlaybackSpeed$.next(!1), this.params.output.hostname$.next(Ye(this.params.source.url)), this.params.output.autoVideoTrackLimitingAvailable$.next(!1), this.params.output.availableVideoTracks$.next([]), this.params.output.availableAudioTracks$.next([]), this.params.output.isAudioAvailable$.next(!0), this.params.output.currentVideoTrack$.next({
            id: "webrtc",
            quality: (0, _esnextEsmJs.VideoQuality).INVARIANT
        }), this.video.srcObject = e, R(this.params.desiredState.playbackState, l.PLAYING);
    }
    onLiveStreamStop() {
        this.videoState.startTransitionTo(Z.STOPPED), this.syncPlayback(), this.params.output.position$.next(0), this.params.output.duration$.next(0), this.params.output.currentBuffer$.next(void 0), this.params.output.hostname$.next(void 0), this.params.output.endedEvent$.next();
    }
    onLiveStreamError(e) {
        this.onLiveStreamStop(), this.params.output.error$.next({
            id: "WebRTC stream runtime error",
            category: (0, _esnextEsmJs.ErrorCategory).EXTERNAL_API,
            message: e.message,
            thrown: e
        });
    }
    playIfAllowed() {
        pt(this.video).then((e)=>{
            e || (this.videoState.setState(Z.PAUSED), R(this.params.desiredState.playbackState, l.PAUSED, !0));
        }, (e)=>this.params.output.error$.next({
                id: "ForcePlay",
                message: "play() failed even with workarounds",
                category: (0, _esnextEsmJs.ErrorCategory).DOM,
                thrown: e
            }));
    }
    prepare() {
        this.liveStreamClient.connect();
    }
    syncPlayback = ()=>{
        const e = this.videoState.getState(), t = this.params.desiredState.playbackState.getState(), i = this.params.desiredState.playbackState.getTransition();
        if (t === l.STOPPED) {
            e !== Z.STOPPED && (this.videoState.startTransitionTo(Z.STOPPED), this.video.pause(), this.video.srcObject = null, this.params.output.position$.next(0), this.params.output.duration$.next(0), this.params.output.currentBuffer$.next(void 0), this.params.output.hostname$.next(void 0), this.videoState.setState(Z.STOPPED), R(this.params.desiredState.playbackState, l.STOPPED, !0));
            return;
        }
        if (this.videoState.getTransition()) return;
        const r = this.params.desiredState.videoTrack.getTransition();
        if (e === Z.STOPPED) {
            this.videoState.startTransitionTo(Z.READY), this.prepare();
            return;
        }
        if (r) {
            this.prepare();
            return;
        }
        switch(e){
            case Z.READY:
                t === l.PAUSED ? (this.videoState.setState(Z.PAUSED), R(this.params.desiredState.playbackState, l.PAUSED)) : t === l.PLAYING && (this.videoState.startTransitionTo(Z.PLAYING), this.playIfAllowed());
                return;
            case Z.PLAYING:
                t === l.PAUSED ? (this.videoState.startTransitionTo(Z.PAUSED), this.video.pause()) : i?.to === l.PLAYING && R(this.params.desiredState.playbackState, l.PLAYING);
                return;
            case Z.PAUSED:
                t === l.PLAYING ? (this.videoState.startTransitionTo(Z.PLAYING), this.playIfAllowed()) : i?.to === l.PAUSED && R(this.params.desiredState.playbackState, l.PAUSED);
                return;
            default:
                return (0, _esnextEsmJs.assertNever)(e);
        }
    };
}
class Ki {
    iterator;
    current;
    constructor(e){
        this.iterator = e[Symbol.iterator](), this.next();
    }
    next() {
        this.current = this.iterator.next();
    }
    getValue() {
        if (this.current.done) throw new Error("Iterable is completed");
        return this.current.value;
    }
    isCompleted() {
        return !!this.current.done;
    }
}
const Es = (0, _esnextEsmJs.getCurrentBrowser)().device === (0, _esnextEsmJs.CurrentClientDevice).Android, si = document.createElement("video"), Gr = 'video/mp4; codecs="avc1.42000a,mp4a.40.2"', qr = 'video/mp4; codecs="hev1.1.6.L93.B0"', As = 'video/webm; codecs="vp09.00.10.08"', ws = 'video/webm; codecs="av01.0.00M.08"', zr = 'audio/mp4; codecs="mp4a.40.2"', Wr = 'audio/webm; codecs="opus"', at = {
    mms: Ts(),
    mse: Er(),
    hls: !!(si.canPlayType?.("application/x-mpegurl") || si.canPlayType?.("vnd.apple.mpegURL")),
    webrtc: !!window.RTCPeerConnection,
    ws: !!window.WebSocket
}, we = {
    mp4: !!si.canPlayType?.("video/mp4"),
    webm: !!si.canPlayType?.("video/webm"),
    cmaf: !0
}, Ue = {
    h264: !!st()?.isTypeSupported?.(Gr),
    h265: !!st()?.isTypeSupported?.(qr),
    vp9: !!st()?.isTypeSupported?.(As),
    av1: !!st()?.isTypeSupported?.(ws),
    aac: !!st()?.isTypeSupported?.(zr),
    opus: !!st()?.isTypeSupported?.(Wr)
}, Ct = (Ue.h264 || Ue.h265) && Ue.aac;
var Ze;
(function(a) {
    a.VP9 = "vp9", a.AV1 = "av1", a.NONE = "none", a.SMOOTH = "smooth", a.POWER_EFFICIENT = "power_efficient";
})(Ze || (Ze = {}));
var We;
(function(a) {
    a.DASH = "dash", a.HLS = "hls", a.MPEG = "mpeg";
})(We || (We = {}));
let rt;
const Qr = async ()=>{
    if (!window.navigator.mediaCapabilities) return;
    const a = {
        type: "media-source",
        video: {
            contentType: "video/webm",
            width: 1280,
            height: 720,
            bitrate: 1e6,
            framerate: 30
        }
    }, [e, t] = await Promise.all([
        window.navigator.mediaCapabilities.decodingInfo({
            ...a,
            video: {
                ...a.video,
                contentType: ws
            }
        }),
        window.navigator.mediaCapabilities.decodingInfo({
            ...a,
            video: {
                ...a.video,
                contentType: As
            }
        })
    ]);
    rt = {
        [g.DASH_WEBM_AV1]: e,
        [g.DASH_WEBM]: t
    };
};
try {
    Qr();
} catch (a) {
    console.error(a);
}
const Nt = at.hls && we.mp4, jr = ()=>Object.keys(Ue).filter((a)=>Ue[a]), Jr = (a, e = !1, t = !1)=>{
    const i = at.mse || at.mms && t;
    return a.filter((s)=>{
        switch(s){
            case g.DASH_SEP:
                return i && we.mp4 && Ct;
            case g.DASH_WEBM:
                return i && we.webm && Ue.vp9 && Ue.opus;
            case g.DASH_WEBM_AV1:
                return i && we.webm && Ue.av1 && Ue.opus;
            case g.DASH_LIVE:
                return at.mse && we.mp4 && Ct;
            case g.DASH_LIVE_CMAF:
                return i && we.mp4 && Ct && we.cmaf;
            case g.DASH_ONDEMAND:
                return i && we.mp4 && Ct;
            case g.HLS:
            case g.HLS_ONDEMAND:
                return Nt || e && at.mse && we.mp4 && Ct;
            case g.HLS_LIVE:
            case g.HLS_LIVE_CMAF:
                return Nt;
            case g.MPEG:
                return we.mp4;
            case g.DASH_LIVE_WEBM:
                return !1;
            case g.WEB_RTC_LIVE:
                return at.webrtc && at.ws && Ue.h264 && (we.mp4 || we.webm);
            default:
                return (0, _esnextEsmJs.assertNever)(s);
        }
    });
}, Rt = (a)=>{
    const e = g.DASH_WEBM, t = g.DASH_WEBM_AV1;
    switch(a){
        case Ze.VP9:
            return [
                e,
                t
            ];
        case Ze.AV1:
            return [
                t,
                e
            ];
        case Ze.NONE:
            return [];
        case Ze.SMOOTH:
            return rt ? rt[t].smooth ? [
                t,
                e
            ] : rt[e].smooth ? [
                e,
                t
            ] : [
                t,
                e
            ] : [
                e,
                t
            ];
        case Ze.POWER_EFFICIENT:
            return rt ? rt[t].powerEfficient ? [
                t,
                e
            ] : rt[e].powerEfficient ? [
                e,
                t
            ] : [
                t,
                e
            ] : [
                e,
                t
            ];
        default:
            (0, _esnextEsmJs.assertNever)(a);
    }
    return [
        e,
        t
    ];
}, Xr = ({ webmCodec: a, androidPreferredFormat: e })=>{
    if (Es) switch(e){
        case We.MPEG:
            return [
                g.MPEG,
                ...Rt(a),
                g.DASH_SEP,
                g.DASH_ONDEMAND,
                g.HLS,
                g.HLS_ONDEMAND
            ];
        case We.HLS:
            return [
                g.HLS,
                g.HLS_ONDEMAND,
                ...Rt(a),
                g.DASH_SEP,
                g.DASH_ONDEMAND,
                g.MPEG
            ];
        case We.DASH:
            return [
                ...Rt(a),
                g.DASH_SEP,
                g.DASH_ONDEMAND,
                g.HLS,
                g.HLS_ONDEMAND,
                g.MPEG
            ];
    }
    return Nt ? [
        ...Rt(a),
        g.DASH_SEP,
        g.DASH_ONDEMAND,
        g.HLS,
        g.HLS_ONDEMAND,
        g.MPEG
    ] : [
        ...Rt(a),
        g.DASH_SEP,
        g.DASH_ONDEMAND,
        g.HLS,
        g.HLS_ONDEMAND,
        g.MPEG
    ];
}, Kr = ({ androidPreferredFormat: a, preferCMAF: e, preferWebRTC: t })=>{
    const i = e ? [
        g.DASH_LIVE_CMAF,
        g.DASH_LIVE
    ] : [
        g.DASH_LIVE,
        g.DASH_LIVE_CMAF
    ], s = e ? [
        g.HLS_LIVE_CMAF,
        g.HLS_LIVE
    ] : [
        g.HLS_LIVE,
        g.HLS_LIVE_CMAF
    ], r = [
        ...i,
        ...s
    ], n = [
        ...s,
        ...i
    ];
    let o;
    if (Es) switch(a){
        case We.DASH:
            o = r;
            break;
        case We.HLS:
        case We.MPEG:
            o = n;
            break;
    }
    else Nt ? o = n : o = r;
    return t ? [
        g.WEB_RTC_LIVE,
        ...o
    ] : [
        ...o,
        g.WEB_RTC_LIVE
    ];
}, Zi = (a)=>a ? [
        g.HLS_LIVE,
        g.HLS_LIVE_CMAF,
        g.DASH_LIVE_CMAF
    ] : [
        g.DASH_WEBM,
        g.DASH_WEBM_AV1,
        g.DASH_SEP,
        g.DASH_ONDEMAND,
        g.HLS,
        g.HLS_ONDEMAND,
        g.MPEG
    ];
var Zr = (a)=>new (0, _esnextEsmJs.Observable)((e)=>{
        const t = new (0, _esnextEsmJs.Subscription), i = a.desiredPlaybackState$.stateChangeStarted$.pipe((0, _esnextEsmJs.map)(({ from: c, to: u })=>`${c}-${u}`)), s = a.desiredPlaybackState$.stateChangeEnded$, r = a.providerChanged$.pipe((0, _esnextEsmJs.map)(({ type: c })=>c !== void 0)), n = new (0, _esnextEsmJs.Subject);
        let o = 0, d = "unknown";
        return t.add(i.subscribe((c)=>{
            o && window.clearTimeout(o), d = c, o = window.setTimeout(()=>n.next(c), a.maxTransitionInterval);
        })), t.add(s.subscribe(()=>{
            window.clearTimeout(o), d = "unknown", o = 0;
        })), t.add(r.subscribe((c)=>{
            o && (window.clearTimeout(o), o = 0, c && (o = window.setTimeout(()=>n.next(d), a.maxTransitionInterval)));
        })), t.add(n.subscribe(e)), ()=>{
            window.clearTimeout(o), t.unsubscribe();
        };
    });
const en = {
    chunkDuration: 5e3,
    maxParallelRequests: 5
};
class tn {
    current$ = new (0, _esnextEsmJs.ValueSubject)({
        type: void 0
    });
    providerError$ = new (0, _esnextEsmJs.Subject);
    noAvailableProvidersError$ = new (0, _esnextEsmJs.Subject);
    providerOutput = {
        position$: new (0, _esnextEsmJs.ValueSubject)(0),
        duration$: new (0, _esnextEsmJs.ValueSubject)(1 / 0),
        volume$: new (0, _esnextEsmJs.ValueSubject)({
            muted: !1,
            volume: 1
        }),
        currentVideoTrack$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        availableVideoTracks$: new (0, _esnextEsmJs.ValueSubject)([]),
        availableAudioTracks$: new (0, _esnextEsmJs.ValueSubject)([]),
        isAudioAvailable$: new (0, _esnextEsmJs.ValueSubject)(!0),
        autoVideoTrackLimitingAvailable$: new (0, _esnextEsmJs.ValueSubject)(!1),
        autoVideoTrackLimits$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        currentBuffer$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        isBuffering$: new (0, _esnextEsmJs.ValueSubject)(!0),
        error$: new (0, _esnextEsmJs.Subject),
        warning$: new (0, _esnextEsmJs.Subject),
        willSeekEvent$: new (0, _esnextEsmJs.Subject),
        seekedEvent$: new (0, _esnextEsmJs.Subject),
        loopedEvent$: new (0, _esnextEsmJs.Subject),
        endedEvent$: new (0, _esnextEsmJs.Subject),
        firstBytesEvent$: new (0, _esnextEsmJs.Subject),
        firstFrameEvent$: new (0, _esnextEsmJs.Subject),
        canplay$: new (0, _esnextEsmJs.Subject),
        isLive$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        isLowLatency$: new (0, _esnextEsmJs.ValueSubject)(!1),
        canChangePlaybackSpeed$: new (0, _esnextEsmJs.ValueSubject)(!0),
        liveTime$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        liveBufferTime$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        availableTextTracks$: new (0, _esnextEsmJs.ValueSubject)([]),
        currentTextTrack$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        hostname$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        httpConnectionType$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        httpConnectionReused$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        inPiP$: new (0, _esnextEsmJs.ValueSubject)(!1),
        inFullscreen$: new (0, _esnextEsmJs.ValueSubject)(!1),
        element$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        availableSources$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        is3DVideo$: new (0, _esnextEsmJs.ValueSubject)(!1)
    };
    subscription = new (0, _esnextEsmJs.Subscription);
    screenFormatsIterator;
    chromecastFormatsIterator;
    log;
    params;
    failoverIndex;
    constructor(e){
        this.params = e, this.log = this.params.dependencies.logger.createComponentLog("ProviderContainer");
        const t = Jr([
            ...Kr(this.params.tuning),
            ...Xr(this.params.tuning)
        ], this.params.tuning.useHlsJs, this.params.tuning.useManagedMediaSource).filter((o)=>(0, _esnextEsmJs.isNonNullable)(e.sources[o])), { forceFormat: i, formatsToAvoid: s } = this.params.tuning;
        let r = [];
        i ? r = [
            i
        ] : s.length ? r = [
            ...t.filter((o)=>!s.includes(o)),
            ...t.filter((o)=>s.includes(o))
        ] : r = t, this.log({
            message: `Selected formats: ${r.join(" > ")}`
        }), this.screenFormatsIterator = new Ki(r);
        const n = [
            ...Zi(!0),
            ...Zi(!1)
        ];
        this.chromecastFormatsIterator = new Ki(n.filter((o)=>(0, _esnextEsmJs.isNonNullable)(e.sources[o]))), this.providerOutput.availableSources$.next(e.sources);
    }
    init() {
        this.subscription.add(this.initProviderErrorHandling()), this.subscription.add(this.params.dependencies.chromecastInitializer.connection$.subscribe(()=>{
            this.reinitProvider();
        }));
    }
    destroy() {
        this.destroyProvider(), this.current$.next({
            type: void 0
        }), this.subscription.unsubscribe();
    }
    initProvider() {
        const e = this.chooseDestination(), t = this.chooseFormat(e);
        if ((0, _esnextEsmJs.isNullable)(t)) {
            this.handleNoFormatsError(e);
            return;
        }
        let i;
        try {
            i = this.createProvider(e, t);
        } catch (s) {
            this.providerError$.next({
                id: "ProviderNotConstructed",
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: "Failed to create provider",
                thrown: s
            });
        }
        i ? this.current$.next({
            type: t,
            provider: i,
            destination: e
        }) : this.current$.next({
            type: void 0
        });
    }
    reinitProvider() {
        this.destroyProvider(), this.initProvider();
    }
    switchToNextProvider(e) {
        this.destroyProvider(), this.failoverIndex = void 0, this.skipFormat(e), this.initProvider();
    }
    destroyProvider() {
        const e = this.current$.getValue().provider;
        if (!e) return;
        this.log({
            message: "destroyProvider"
        });
        const t = this.providerOutput.position$.getValue() * 1e3, i = this.params.desiredState.seekState.getState(), s = i.state !== G.None;
        if (this.params.desiredState.seekState.setState({
            state: G.Requested,
            position: s ? i.position : t,
            forcePrecise: s ? i.forcePrecise : !1
        }), e.scene3D) {
            const n = e.scene3D.getCameraRotation();
            this.params.desiredState.cameraOrientation.setState({
                x: n.x,
                y: n.y
            });
        }
        e.destroy();
        const r = this.providerOutput.isBuffering$;
        r.getValue() || r.next(!0);
    }
    createProvider(e, t) {
        switch(this.log({
            message: `createProvider: ${e}:${t}`
        }), e){
            case me.SCREEN:
                return this.createScreenProvider(t);
            case me.CHROMECAST:
                return this.createChromecastProvider(t);
            default:
                return (0, _esnextEsmJs.assertNever)(e);
        }
    }
    createScreenProvider(e) {
        const { sources: t, container: i, desiredState: s } = this.params, r = this.providerOutput, n = {
            container: i,
            source: null,
            desiredState: s,
            output: r,
            dependencies: this.params.dependencies,
            tuning: this.params.tuning
        };
        switch(e){
            case g.DASH_SEP:
            case g.DASH_WEBM:
            case g.DASH_WEBM_AV1:
            case g.DASH_ONDEMAND:
                {
                    const o = this.applyFailoverHost(t[e]), d = this.applyFailoverHost(t[g.HLS_ONDEMAND] || t[g.HLS]);
                    return (0, _esnextEsmJs.assertNonNullable)(o), new Cr({
                        ...n,
                        source: o,
                        sourceHls: d
                    });
                }
            case g.DASH_LIVE_CMAF:
                {
                    const o = this.applyFailoverHost(t[e]);
                    return (0, _esnextEsmJs.assertNonNullable)(o), new Rr({
                        ...n,
                        source: o
                    });
                }
            case g.HLS:
            case g.HLS_ONDEMAND:
                {
                    const o = this.applyFailoverHost(t[e]);
                    return (0, _esnextEsmJs.assertNonNullable)(o), Nt || !this.params.tuning.useHlsJs ? new Nr({
                        ...n,
                        source: o
                    }) : new Ir({
                        ...n,
                        source: o
                    });
                }
            case g.HLS_LIVE:
            case g.HLS_LIVE_CMAF:
                {
                    const o = this.applyFailoverHost(t[e]);
                    return (0, _esnextEsmJs.assertNonNullable)(o), new Or({
                        ...n,
                        source: o,
                        config: {
                            maxPausedTime: this.params.tuning.live.maxPausedTime
                        },
                        format: e
                    });
                }
            case g.MPEG:
                {
                    const o = this.applyFailoverHost(t[e]);
                    return (0, _esnextEsmJs.assertNonNullable)(o), new Fr({
                        ...n,
                        source: o
                    });
                }
            case g.DASH_LIVE:
                {
                    const o = this.applyFailoverHost(t[e]);
                    return (0, _esnextEsmJs.assertNonNullable)(o), new Ta({
                        ...n,
                        source: o,
                        config: {
                            ...en,
                            maxPausedTime: this.params.tuning.live.maxPausedTime
                        }
                    });
                }
            case g.WEB_RTC_LIVE:
                {
                    const o = this.applyFailoverHost(t[e]);
                    return (0, _esnextEsmJs.assertNonNullable)(o), new Yr({
                        container: i,
                        source: o,
                        desiredState: s,
                        output: r,
                        dependencies: this.params.dependencies,
                        tuning: this.params.tuning
                    });
                }
            case g.DASH_LIVE_WEBM:
                throw new Error("DASH_LIVE_WEBM is no longer supported");
            default:
                return (0, _esnextEsmJs.assertNever)(e);
        }
    }
    createChromecastProvider(e) {
        const { sources: t, container: i, desiredState: s, meta: r } = this.params, n = this.providerOutput, o = this.params.dependencies.chromecastInitializer.connection$.getValue();
        return (0, _esnextEsmJs.assertNonNullable)(o), new zs({
            connection: o,
            meta: r,
            container: i,
            source: t,
            format: e,
            desiredState: s,
            output: n,
            dependencies: this.params.dependencies,
            tuning: this.params.tuning
        });
    }
    chooseDestination() {
        return this.params.dependencies.chromecastInitializer.connection$.getValue() ? me.CHROMECAST : me.SCREEN;
    }
    chooseFormat(e) {
        switch(e){
            case me.SCREEN:
                return this.screenFormatsIterator.isCompleted() ? void 0 : this.screenFormatsIterator.getValue();
            case me.CHROMECAST:
                return this.chromecastFormatsIterator.isCompleted() ? void 0 : this.chromecastFormatsIterator.getValue();
            default:
                return (0, _esnextEsmJs.assertNever)(e);
        }
    }
    skipFormat(e) {
        switch(e){
            case me.SCREEN:
                return this.screenFormatsIterator.next();
            case me.CHROMECAST:
                return this.chromecastFormatsIterator.next();
            default:
                return (0, _esnextEsmJs.assertNever)(e);
        }
    }
    handleNoFormatsError(e) {
        switch(e){
            case me.SCREEN:
                this.noAvailableProvidersError$.next(this.params.tuning.forceFormat), this.current$.next({
                    type: void 0
                });
                return;
            case me.CHROMECAST:
                this.params.dependencies.chromecastInitializer.disconnect();
                return;
            default:
                return (0, _esnextEsmJs.assertNever)(e);
        }
    }
    applyFailoverHost(e) {
        if (this.failoverIndex === void 0) return e;
        const t = this.params.failoverHosts[this.failoverIndex];
        if (!t) return e;
        const i = (s)=>{
            const r = new URL(s);
            return r.host = t, r.toString();
        };
        if (e === void 0) return e;
        if ("type" in e) {
            if (e.type === "raw") return e;
            if (e.type === "url") return {
                ...e,
                url: i(e.url)
            };
        }
        return Object.fromEntries(Object.entries(e).map(([s, r])=>[
                s,
                i(r)
            ]));
    }
    initProviderErrorHandling() {
        const e = new (0, _esnextEsmJs.Subscription);
        let t = !1, i = 0;
        return e.add((0, _esnextEsmJs.merge)(this.providerOutput.error$, Zr({
            desiredPlaybackState$: this.params.desiredState.playbackState,
            maxTransitionInterval: this.params.tuning.maxPlaybackTransitionInterval,
            position$: this.providerOutput.position$,
            providerChanged$: this.current$
        }).pipe((0, _esnextEsmJs.map)((s)=>({
                id: `ProviderHangup:${s}`,
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: `A ${s} transition failed to complete within reasonable time`
            })))).subscribe(this.providerError$)), e.add(this.current$.subscribe(()=>{
            t = !1;
            const s = this.params.desiredState.playbackState.transitionEnded$.pipe((0, _esnextEsmJs.filter)(({ to: r })=>r === l.PLAYING), (0, _esnextEsmJs.once)()).subscribe(()=>t = !0);
            e.add(s);
        })), e.add(this.providerError$.subscribe((s)=>{
            const r = this.current$.getValue().destination;
            if (r === me.CHROMECAST) this.destroyProvider(), this.params.dependencies.chromecastInitializer.stopMedia().then(()=>this.switchToNextProvider(me.SCREEN), ()=>this.params.dependencies.chromecastInitializer.disconnect());
            else {
                const n = s.category === (0, _esnextEsmJs.ErrorCategory).NETWORK, o = this.params.failoverHosts.length > 0 && (this.failoverIndex === void 0 || this.failoverIndex < this.params.failoverHosts.length - 1), d = i < this.params.tuning.providerErrorLimit;
                o && (n && t || !d) ? (this.failoverIndex = this.failoverIndex === void 0 ? 0 : this.failoverIndex + 1, this.reinitProvider()) : d ? (i++, this.reinitProvider()) : this.switchToNextProvider(r ?? me.SCREEN);
            }
        })), e;
    }
}
const sn = 5e3, es = "one_video_throughput", ts = "one_video_rtt", Bt = window.navigator.connection, is = ()=>{
    const a = Bt?.downlink;
    if ((0, _esnextEsmJs.isNonNullable)(a) && a !== 10) return a * 1e3;
}, ss = ()=>{
    const a = Bt?.rtt;
    if ((0, _esnextEsmJs.isNonNullable)(a) && a !== 3e3) return a;
}, as = (a, e, t)=>{
    const i = t * 8, s = i / a;
    return i / (s + e);
};
class Mt {
    throughput;
    rtt;
    subscription = new (0, _esnextEsmJs.Subscription);
    tuningConfig;
    concurrentDownloads = new Set;
    throughput$;
    rtt$;
    rttAdjustedThroughput$;
    constructor(e){
        this.tuningConfig = e;
        const t = Mt.load(es) || (e.useBrowserEstimation ? is() : void 0) || sn, i = Mt.load(ts) ?? (e.useBrowserEstimation ? ss() : void 0) ?? 0;
        if (this.throughput$ = new (0, _esnextEsmJs.ValueSubject)(t), this.rtt$ = new (0, _esnextEsmJs.ValueSubject)(i), this.rttAdjustedThroughput$ = new (0, _esnextEsmJs.ValueSubject)(as(t, i, e.rttPenaltyRequestSize)), this.throughput = Pi.getSmoothedValue(t, -1, e), this.rtt = Pi.getSmoothedValue(i, 1, e), e.useBrowserEstimation) {
            const s = ()=>{
                const n = is();
                n && this.throughput.next(n);
                const o = ss();
                (0, _esnextEsmJs.isNonNullable)(o) && this.rtt.next(o);
            };
            Bt && "onchange" in Bt && this.subscription.add((0, _esnextEsmJs.fromEvent)(Bt, "change").subscribe(s)), s();
        }
        this.subscription.add(this.throughput.smoothed$.subscribe((s)=>{
            (0, _esnextEsmJs.safeStorage).set(es, s.toFixed(0));
        })), this.subscription.add(this.rtt.smoothed$.subscribe((s)=>{
            (0, _esnextEsmJs.safeStorage).set(ts, s.toFixed(0));
        })), this.subscription.add(this.throughput.debounced$.subscribe(this.throughput$)), this.subscription.add(this.rtt.debounced$.subscribe(this.rtt$)), this.subscription.add((0, _esnextEsmJs.combine)({
            throughput: this.throughput.smoothed$,
            rtt: this.rtt.smoothed$
        }).pipe((0, _esnextEsmJs.map)(({ throughput: s, rtt: r })=>as(s, r, e.rttPenaltyRequestSize)), (0, _esnextEsmJs.filter)((s)=>{
            const r = this.rttAdjustedThroughput$.getValue() || 0;
            return Math.abs(s - r) / r >= e.changeThreshold;
        })).subscribe(this.rttAdjustedThroughput$));
    }
    destroy() {
        this.concurrentDownloads.clear(), this.subscription.unsubscribe();
    }
    trackXHR(e) {
        let t = 0, i = (0, _esnextEsmJs.now)();
        const s = new (0, _esnextEsmJs.Subscription);
        switch(this.subscription.add(s), this.concurrentDownloads.add(e), e.readyState){
            case 4:
                break;
            case 3:
            case 2:
                s.add((0, _esnextEsmJs.fromEvent)(e, "progress").pipe((0, _esnextEsmJs.once)()).subscribe((r)=>{
                    t = r.loaded, i = (0, _esnextEsmJs.now)();
                }));
                break;
            case 1:
            case 0:
                s.add((0, _esnextEsmJs.fromEvent)(e, "loadstart").subscribe(()=>{
                    t = 0, i = (0, _esnextEsmJs.now)();
                }));
                break;
        }
        s.add((0, _esnextEsmJs.fromEvent)(e, "loadend").subscribe((r)=>{
            if (e.status === 200) {
                const n = r.loaded, o = (0, _esnextEsmJs.now)(), d = n - t, c = o - i;
                this.addRawSpeed(d, c, 1);
            }
            this.concurrentDownloads.delete(e), s.unsubscribe();
        }));
    }
    trackStream(e, t = !1) {
        const i = e.getReader();
        if (!i) {
            e.cancel("Could not get reader");
            return;
        }
        let s = 0, r = (0, _esnextEsmJs.now)(), n = 0, o = (0, _esnextEsmJs.now)();
        const d = (u)=>{
            this.concurrentDownloads.delete(e), i.releaseLock(), e.cancel(`Throughput Estimator error: ${u}`).catch(()=>{});
        }, c = async ({ done: u, value: h })=>{
            if (u) !t && this.addRawSpeed(s, (0, _esnextEsmJs.now)() - r, 1), this.concurrentDownloads.delete(e);
            else if (h) {
                if (t) {
                    if ((0, _esnextEsmJs.now)() - o < this.tuningConfig.lowLatency.continuesByteSequenceInterval) n += h.byteLength;
                    else {
                        const p = o - r;
                        p && this.addRawSpeed(n, p, 1, t), n = h.byteLength, r = (0, _esnextEsmJs.now)();
                    }
                    o = (0, _esnextEsmJs.now)();
                } else s += h.byteLength, n += h.byteLength, n >= this.tuningConfig.streamMinSampleSize && (0, _esnextEsmJs.now)() - o >= this.tuningConfig.streamMinSampleTime && (this.addRawSpeed(n, (0, _esnextEsmJs.now)() - o, this.concurrentDownloads.size), n = 0, o = (0, _esnextEsmJs.now)());
                await i?.read().then(c, d);
            }
        };
        this.concurrentDownloads.add(e), i?.read().then(c, d);
    }
    addRawSpeed(e, t, i = 1, s = !1) {
        if (Mt.sanityCheck(e, t, s)) {
            const r = e * 8 / t;
            this.throughput.next(r * i);
        }
    }
    addRawThroughput(e) {
        this.throughput.next(e);
    }
    addRawRtt(e) {
        this.rtt.next(e);
    }
    static sanityCheck(e, t, i = !1) {
        const s = e * 8 / t;
        return !(!s || !isFinite(s) || s > 1e6 || s < 30 || i && e < 1e4 || !i && e < 10240 || !i && t <= 20);
    }
    static load(e) {
        const t = (0, _esnextEsmJs.safeStorage).get(e);
        if ((0, _esnextEsmJs.isNonNullable)(t)) return parseInt(t, 10) ?? void 0;
    }
}
const rs = {
    configName: [
        "core"
    ],
    throughputEstimator: {
        type: "EmaAndMa",
        emaAlphaSlow: .2,
        emaAlphaFast: .7,
        emaAlpha: .45,
        basisTrendChangeCount: 10,
        changeThreshold: .05,
        useBrowserEstimation: !0,
        rttPenaltyRequestSize: 1048576,
        streamMinSampleSize: 10240,
        streamMinSampleTime: 300,
        deviationDepth: 20,
        deviationFactor: .5,
        lowLatency: {
            continuesByteSequenceInterval: 10
        }
    },
    autoTrackSelection: {
        bitrateFactorAtEmptyBuffer: 1.8,
        bitrateFactorAtFullBuffer: 1.2,
        usePixelRatio: !0,
        limitByContainer: !0,
        containerSizeFactor: 2,
        lazyQualitySwitch: !0,
        minBufferToSwitchUp: .4,
        considerPlaybackRate: !1,
        trackCooldown: 3e3,
        backgroundVideoQualityLimit: (0, _esnextEsmJs.VideoQuality).Q_4320P,
        activeVideoAreaThreshold: .1
    },
    droppedFramesChecker: {
        enabled: !1,
        percentLimit: .1,
        checkTime: 1e3,
        countLimit: 3,
        tickCountAfterQualityChange: 5,
        qualityUpWaitingTime: 5e3,
        minQualityBanLimit: (0, _esnextEsmJs.VideoQuality).Q_480P
    },
    dash: {
        forwardBufferTarget: 6e4,
        forwardBufferTargetAuto: 6e4,
        forwardBufferTargetManual: 5 * 6e4,
        forwardBufferTargetPreload: 5e3,
        maxSegmentDurationLeftToSelectNextSegment: 3e3,
        minSafeBufferThreshold: .5,
        bufferPruningSafeZone: 1e3,
        segmentRequestSize: 1048576,
        representationSwitchForwardBufferGap: 3e3,
        enableSubSegmentBufferFeeding: !0,
        segmentTimelineTolerance: 100,
        useFetchPriorityHints: !0
    },
    dashCmafLive: {
        maxActiveLiveOffset: 1e4,
        normalizedTargetMinBufferSize: 6e4,
        normalizedLiveMinBufferSize: 5e3,
        normalizedActualBufferOffset: 1e4,
        offsetCalculationError: 3e3,
        lowLatency: {
            maxTargetOffset: 3e3,
            maxTargetOffsetDeviation: 500,
            playbackCatchupSpeedup: .05,
            isActive: !1,
            delayEstimator: {
                emaAlpha: .45,
                changeThreshold: .05,
                deviationDepth: 20,
                deviationFactor: .5,
                extremumInterval: 5
            }
        }
    },
    live: {
        minBuffer: 3e3,
        minBufferSegments: 3,
        lowLatencyMinBuffer: 1e3,
        lowLatencyMinBufferSegments: 1,
        isLiveCatchUpMode: !1,
        lowLatencyActiveLiveDelay: 3e3,
        activeLiveDelay: 5e3,
        maxPausedTime: 5e3
    },
    downloadBackoff: {
        bufferThreshold: 100,
        start: 100,
        factor: 2,
        max: 3000,
        random: .1
    },
    enableWakeLock: !0,
    enableTelemetryAtStart: !1,
    forceFormat: void 0,
    formatsToAvoid: [],
    disableChromecast: !1,
    chromecastReceiverId: void 0,
    useWebmBigRequest: !1,
    webmCodec: Ze.VP9,
    androidPreferredFormat: We.MPEG,
    preferCMAF: !1,
    preferWebRTC: !1,
    bigRequestMinInitSize: 51200,
    bigRequestMinDataSize: 1048576,
    stripRangeHeader: !0,
    flushShortLoopedBuffers: !0,
    insufficientBufferRuleMargin: 1e4,
    dashSeekInSegmentDurationThreshold: 180000,
    dashSeekInSegmentAlwaysSeekDelta: 1e4,
    dashMaxWaitingDuration: 5e3,
    endGapTolerance: 300,
    stallIgnoreThreshold: 33,
    gapWatchdogInterval: 50,
    requestQuick: !1,
    useHlsJs: !0,
    useDashAbortPartiallyFedSegment: !1,
    useNativeHLSTextTracks: !1,
    useManagedMediaSource: !1,
    isAudioDisabled: !1,
    autoplayOnlyInActiveTab: !0,
    dynamicImportTimeout: 5e3,
    maxPlaybackTransitionInterval: 2e4,
    providerErrorLimit: 3,
    manifestRetryInterval: 300,
    manifestRetryMaxInterval: 1e4,
    manifestRetryMaxCount: 10,
    webrtc: {
        connectionRetryMaxNumber: 3
    },
    spherical: {
        enabled: !1,
        fov: {
            x: 135,
            y: 76
        },
        rotationSpeed: 45,
        maxYawAngle: 175,
        rotationSpeedCorrection: 10,
        degreeToPixelCorrection: 5,
        speedFadeTime: 2e3,
        speedFadeThreshold: 50
    }
}, an = (a)=>({
        ...(0, _esnextEsmJs.fillWithDefault)(a, rs),
        configName: [
            ...a.configName ?? [],
            ...rs.configName
        ]
    });
var ns = ({ seekState: a, position$: e })=>(0, _esnextEsmJs.merge)(a.stateChangeEnded$.pipe((0, _esnextEsmJs.map)(({ to: t })=>t.state === G.None ? void 0 : (t.position ?? NaN) / 1e3), (0, _esnextEsmJs.filter)((0, _esnextEsmJs.isNonNullable))), e.pipe((0, _esnextEsmJs.filter)(()=>a.getState().state === G.None))), rn = (a)=>{
    const e = typeof a.container == "string" ? document.getElementById(a.container) : a.container;
    return (0, _esnextEsmJs.assertNonNullable)(e, `Wrong container or containerId {${a.container}}`), e;
};
const nn = (a, e, t, i)=>{
    a !== void 0 && e.getState() === void 0 && e.getPrevState() === void 0 && t?.getValue().length === 0 ? t.pipe((0, _esnextEsmJs.filter)((s)=>s.length > 0), (0, _esnextEsmJs.once)()).subscribe((s)=>{
        s.find(i) && e.startTransitionTo(a);
    }) : (a === void 0 || t?.getValue().find(i)) && e.startTransitionTo(a);
};
class hn {
    subscription = new (0, _esnextEsmJs.Subscription);
    domContainer;
    providerContainer;
    chromecastInitializer;
    logger = new (0, _esnextEsmJs.Logger);
    abrLogger = this.logger.createComponentLog("ABR");
    config;
    tuning;
    throughputEstimator;
    isPlaybackStarted = !1;
    initedAt;
    hasLiveOffsetByPaused = new (0, _esnextEsmJs.ValueSubject)(!1);
    hasLiveOffsetByPausedTimer = 0;
    desiredState = {
        playbackState: new re(l.STOPPED),
        seekState: new re({
            state: G.None
        }),
        volume: new re({
            volume: 1,
            muted: !1
        }),
        videoTrack: new re(void 0),
        autoVideoTrackSwitching: new re(!0),
        autoVideoTrackLimits: new re({}),
        isLooped: new re(!1),
        playbackRate: new re(1),
        externalTextTracks: new re([]),
        internalTextTracks: new re([]),
        currentTextTrack: new re(void 0),
        textTrackCuesSettings: new re({}),
        cameraOrientation: new re({
            x: 0,
            y: 0
        })
    };
    info = {
        playbackState$: new (0, _esnextEsmJs.ValueSubject)(l.STOPPED),
        position$: new (0, _esnextEsmJs.ValueSubject)(0),
        duration$: new (0, _esnextEsmJs.ValueSubject)(1 / 0),
        muted$: new (0, _esnextEsmJs.ValueSubject)(!1),
        volume$: new (0, _esnextEsmJs.ValueSubject)(1),
        availableQualities$: new (0, _esnextEsmJs.ValueSubject)([]),
        availableQualitiesFps$: new (0, _esnextEsmJs.ValueSubject)({}),
        availableAudioTracks$: new (0, _esnextEsmJs.ValueSubject)([]),
        isAudioAvailable$: new (0, _esnextEsmJs.ValueSubject)(!0),
        currentQuality$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        isAutoQualityEnabled$: new (0, _esnextEsmJs.ValueSubject)(!0),
        autoQualityLimitingAvailable$: new (0, _esnextEsmJs.ValueSubject)(!1),
        autoQualityLimits$: new (0, _esnextEsmJs.ValueSubject)({}),
        currentPlaybackRate$: new (0, _esnextEsmJs.ValueSubject)(1),
        currentBuffer$: new (0, _esnextEsmJs.ValueSubject)({
            start: 0,
            end: 0
        }),
        isBuffering$: new (0, _esnextEsmJs.ValueSubject)(!0),
        isStalled$: new (0, _esnextEsmJs.ValueSubject)(!1),
        isEnded$: new (0, _esnextEsmJs.ValueSubject)(!1),
        isLooped$: new (0, _esnextEsmJs.ValueSubject)(!1),
        isLive$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        canChangePlaybackSpeed$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        atLiveEdge$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        atLiveDurationEdge$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        liveTime$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        liveBufferTime$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        currentFormat$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        availableTextTracks$: new (0, _esnextEsmJs.ValueSubject)([]),
        currentTextTrack$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        throughputEstimation$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        rttEstimation$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        videoBitrate$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        hostname$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        httpConnectionType$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        httpConnectionReused$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        surface$: new (0, _esnextEsmJs.ValueSubject)(Ke.NONE),
        chromecastState$: new (0, _esnextEsmJs.ValueSubject)(fe.NOT_AVAILABLE),
        chromecastDeviceName$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        intrinsicVideoSize$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        availableSources$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        is3DVideo$: new (0, _esnextEsmJs.ValueSubject)(!1)
    };
    events = {
        inited$: new (0, _esnextEsmJs.Subject),
        ready$: new (0, _esnextEsmJs.Subject),
        started$: new (0, _esnextEsmJs.Subject),
        playing$: new (0, _esnextEsmJs.Subject),
        paused$: new (0, _esnextEsmJs.Subject),
        stopped$: new (0, _esnextEsmJs.Subject),
        willStart$: new (0, _esnextEsmJs.Subject),
        willResume$: new (0, _esnextEsmJs.Subject),
        willPause$: new (0, _esnextEsmJs.Subject),
        willStop$: new (0, _esnextEsmJs.Subject),
        willDestruct$: new (0, _esnextEsmJs.Subject),
        watchCoverageRecord$: new (0, _esnextEsmJs.Subject),
        watchCoverageLive$: new (0, _esnextEsmJs.Subject),
        managedError$: new (0, _esnextEsmJs.Subject),
        fatalError$: new (0, _esnextEsmJs.Subject),
        ended$: new (0, _esnextEsmJs.Subject),
        looped$: new (0, _esnextEsmJs.Subject),
        seeked$: new (0, _esnextEsmJs.Subject),
        willSeek$: new (0, _esnextEsmJs.Subject),
        firstBytes$: new (0, _esnextEsmJs.Subject),
        firstFrame$: new (0, _esnextEsmJs.Subject),
        canplay$: new (0, _esnextEsmJs.Subject),
        log$: new (0, _esnextEsmJs.Subject)
    };
    experimental = {
        element$: new (0, _esnextEsmJs.ValueSubject)(void 0),
        tuningConfigName$: new (0, _esnextEsmJs.ValueSubject)([]),
        enableDebugTelemetry$: new (0, _esnextEsmJs.ValueSubject)(!1),
        dumpTelemetry: ia
    };
    constructor(e = {
        configName: []
    }){
        if (this.initLogs(), this.tuning = an(e), this.experimental.tuningConfigName$.next(this.tuning.configName), this.chromecastInitializer = new Vs({
            receiverApplicationId: e.chromecastReceiverId,
            isDisabled: e.disableChromecast,
            dependencies: {
                logger: this.logger
            }
        }), this.throughputEstimator = new Mt(this.tuning.throughputEstimator), this.initChromecastSubscription(), this.initDesiredStateSubscriptions(), Proxy && Reflect) return new Proxy(this, {
            get: (t, i, s)=>{
                const r = Reflect.get(t, i, s);
                return typeof r != "function" ? r : (...n)=>{
                    try {
                        return r.apply(t, n);
                    } catch (o) {
                        const d = n.map((h)=>JSON.stringify(h, (f, p)=>{
                                const S = typeof p;
                                return [
                                    "number",
                                    "string",
                                    "boolean"
                                ].includes(S) ? p : p === null ? null : `<${S}>`;
                            })), c = `Player.${String(i)}`, u = `Exception calling ${c} (${d.join(", ")})`;
                        throw this.events.fatalError$.next({
                            id: c,
                            category: (0, _esnextEsmJs.ErrorCategory).WTF,
                            message: u,
                            thrown: o
                        }), o;
                    }
                };
            }
        });
    }
    initVideo(e) {
        return this.config = e, this.domContainer = rn(e), this.chromecastInitializer.contentId = e.meta?.videoId, this.providerContainer = new tn({
            sources: e.sources,
            meta: e.meta ?? {},
            failoverHosts: e.failoverHosts ?? [],
            container: this.domContainer,
            desiredState: this.desiredState,
            dependencies: {
                throughputEstimator: this.throughputEstimator,
                chromecastInitializer: this.chromecastInitializer,
                logger: this.logger,
                abrLogger: this.abrLogger
            },
            tuning: this.tuning
        }), this.initProviderContainerSubscription(this.providerContainer), this.initStartingVideoTrack(this.providerContainer), this.providerContainer.init(), this.setMuted(this.tuning.isAudioDisabled), this.initDebugTelemetry(), this.initWakeLock(), this;
    }
    destroy() {
        window.clearTimeout(this.hasLiveOffsetByPausedTimer), this.events.willDestruct$.next(), this.stop(), this.providerContainer?.destroy(), this.throughputEstimator.destroy(), this.chromecastInitializer.destroy(), this.subscription.unsubscribe();
    }
    prepare() {
        const e = this.desiredState.playbackState;
        return e.getState() === l.STOPPED && e.startTransitionTo(l.READY), this;
    }
    play() {
        const e = ()=>{
            const t = this.desiredState.playbackState;
            t.getState() !== l.PLAYING && t.startTransitionTo(l.PLAYING);
        };
        return document.hidden && this.tuning.autoplayOnlyInActiveTab && !Li() ? (0, _esnextEsmJs.fromEvent)(document, "visibilitychange").pipe((0, _esnextEsmJs.once)()).subscribe(e) : e(), this;
    }
    pause() {
        const e = this.desiredState.playbackState;
        return e.getState() !== l.PAUSED && e.startTransitionTo(l.PAUSED), this;
    }
    stop() {
        const e = this.desiredState.playbackState;
        return e.getState() !== l.STOPPED && e.startTransitionTo(l.STOPPED), this;
    }
    seekTime(e, t = !0) {
        const i = this.info.duration$.getValue(), s = this.info.isLive$.getValue();
        return e >= i && !s && (e = i - .1), this.events.willSeek$.next({
            from: this.getExactTime(),
            to: e
        }), this.desiredState.seekState.setState({
            state: G.Requested,
            position: e * 1e3,
            forcePrecise: t
        }), this;
    }
    seekPercent(e) {
        const t = this.info.duration$.getValue();
        return isFinite(t) && this.seekTime(Math.abs(t) * e, !1), this;
    }
    setVolume(e) {
        const t = this.tuning.isAudioDisabled || this.desiredState.volume.getState().muted;
        return this.chromecastInitializer.castState$.getValue() === fe.CONNECTED ? this.chromecastInitializer.setVolume(e) : this.desiredState.volume.startTransitionTo({
            volume: e,
            muted: t
        }), this;
    }
    setMuted(e) {
        const t = this.tuning.isAudioDisabled || e;
        return this.chromecastInitializer.castState$.getValue() === fe.CONNECTED ? this.chromecastInitializer.setMuted(t) : this.desiredState.volume.startTransitionTo({
            volume: this.desiredState.volume.getState().volume,
            muted: t
        }), this;
    }
    setQuality(e) {
        (0, _esnextEsmJs.assertNonNullable)(this.providerContainer);
        const t = this.providerContainer.providerOutput.availableVideoTracks$.getValue();
        return this.desiredState.videoTrack.getState() === void 0 && this.desiredState.videoTrack.getPrevState() === void 0 && t.length === 0 ? this.providerContainer.providerOutput.availableVideoTracks$.pipe((0, _esnextEsmJs.filter)((i)=>i.length > 0), (0, _esnextEsmJs.once)()).subscribe((i)=>{
            this.setVideoTrackIdByQuality(i, e);
        }) : t.length > 0 && this.setVideoTrackIdByQuality(t, e), this;
    }
    setAutoQuality(e) {
        return this.desiredState.autoVideoTrackSwitching.startTransitionTo(e), this;
    }
    setAutoQualityLimits(e) {
        return this.desiredState.autoVideoTrackLimits.startTransitionTo(e), this;
    }
    setPlaybackRate(e) {
        (0, _esnextEsmJs.assertNonNullable)(this.providerContainer);
        const t = this.providerContainer?.providerOutput.element$.getValue();
        return t && (this.desiredState.playbackRate.setState(e), t.playbackRate = e), this;
    }
    setExternalTextTracks(e) {
        return this.desiredState.externalTextTracks.startTransitionTo(e.map((t)=>({
                type: "external",
                ...t
            }))), this;
    }
    selectTextTrack(e) {
        return nn(e, this.desiredState.currentTextTrack, this.providerContainer?.providerOutput.availableTextTracks$, (t)=>t.id === e), this;
    }
    setTextTrackCueSettings(e) {
        return this.desiredState.textTrackCuesSettings.startTransitionTo(e), this;
    }
    setLooped(e) {
        return this.desiredState.isLooped.startTransitionTo(e), this;
    }
    toggleChromecast() {
        this.chromecastInitializer.toggleConnection();
    }
    startCameraManualRotation(e, t) {
        const i = this.getScene3D();
        return i && i.startCameraManualRotation(e, t), this;
    }
    stopCameraManualRotation(e = !1) {
        const t = this.getScene3D();
        return t && t.stopCameraManualRotation(e), this;
    }
    moveCameraFocusPX(e, t) {
        const i = this.getScene3D();
        if (i) {
            const s = i.getCameraRotation(), r = i.pixelToDegree({
                x: e,
                y: t
            });
            this.desiredState.cameraOrientation.setState({
                x: s.x + r.x,
                y: s.y + r.y
            });
        }
        return this;
    }
    holdCamera() {
        const e = this.getScene3D();
        return e && e.holdCamera(), this;
    }
    releaseCamera() {
        const e = this.getScene3D();
        return e && e.releaseCamera(), this;
    }
    getExactTime() {
        if (!this.providerContainer) return 0;
        const e = this.providerContainer.providerOutput.element$.getValue();
        if ((0, _esnextEsmJs.isNullable)(e)) return this.info.position$.getValue();
        const t = this.desiredState.seekState.getState(), i = t.state === G.None ? void 0 : t.position;
        return (0, _esnextEsmJs.isNonNullable)(i) ? i / 1e3 : e.currentTime;
    }
    getAllLogs() {
        return this.logger.getAllLogs();
    }
    getScene3D() {
        const e = this.providerContainer?.current$.getValue();
        if (e?.provider?.scene3D) return e.provider.scene3D;
    }
    setIntrinsicVideoSize(...e) {
        const t = {
            width: e.reduce((i, { width: s })=>i || s || 0, 0),
            height: e.reduce((i, { height: s })=>i || s || 0, 0)
        };
        t.width && t.height && this.info.intrinsicVideoSize$.next({
            width: t.width,
            height: t.height
        });
    }
    initDesiredStateSubscriptions() {
        this.subscription.add((0, _esnextEsmJs.merge)(this.desiredState.playbackState.stateChangeStarted$, this.desiredState.playbackState.forceChanged$).pipe((0, _esnextEsmJs.map)((e)=>e.to)).subscribe(this.info.playbackState$)).add(this.desiredState.isLooped.stateChangeEnded$.pipe((0, _esnextEsmJs.map)((e)=>e.to)).subscribe(this.info.isLooped$)).add(this.desiredState.playbackRate.stateChangeEnded$.pipe((0, _esnextEsmJs.map)((e)=>e.to)).subscribe(this.info.currentPlaybackRate$)).add(this.desiredState.autoVideoTrackSwitching.stateChangeEnded$.pipe((0, _esnextEsmJs.map)((e)=>e.to)).subscribe(this.info.isAutoQualityEnabled$)).add(this.desiredState.autoVideoTrackLimits.stateChangeEnded$.pipe((0, _esnextEsmJs.map)((e)=>e.to)).subscribe(this.info.autoQualityLimits$)), this.subscription.add(this.desiredState.playbackState.stateChangeStarted$.pipe((0, _esnextEsmJs.filter)(({ from: e })=>e === l.STOPPED), (0, _esnextEsmJs.once)()).subscribe(()=>{
            this.initedAt = (0, _esnextEsmJs.now)(), this.events.inited$.next();
        })).add(this.desiredState.playbackState.stateChangeEnded$.subscribe((e)=>{
            switch(e.to){
                case l.READY:
                    this.events.ready$.next();
                    break;
                case l.PLAYING:
                    this.isPlaybackStarted || this.events.started$.next(), this.isPlaybackStarted = !0, this.events.playing$.next();
                    break;
                case l.PAUSED:
                    this.events.paused$.next();
                    break;
                case l.STOPPED:
                    this.events.stopped$.next();
            }
        })).add(this.desiredState.playbackState.stateChangeStarted$.subscribe((e)=>{
            switch(e.to){
                case l.PAUSED:
                    this.events.willPause$.next();
                    break;
                case l.PLAYING:
                    this.isPlaybackStarted ? this.events.willResume$.next() : this.events.willStart$.next();
                    break;
                case l.STOPPED:
                    this.events.willStop$.next();
                    break;
            }
        }));
    }
    initProviderContainerSubscription(e) {
        this.subscription.add(e.providerOutput.willSeekEvent$.subscribe(()=>{
            const n = this.desiredState.seekState.getState();
            n.state === G.Requested ? this.desiredState.seekState.setState({
                ...n,
                state: G.Applying
            }) : this.events.managedError$.next({
                id: `WillSeekIn${n.state}`,
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: "Received unexpeceted willSeek$"
            });
        })).add(e.providerOutput.seekedEvent$.subscribe(()=>{
            this.desiredState.seekState.getState().state === G.Applying && (this.desiredState.seekState.setState({
                state: G.None
            }), this.events.seeked$.next());
        })).add(e.current$.pipe((0, _esnextEsmJs.map)((n)=>n.type)).subscribe(this.info.currentFormat$)).add(e.current$.pipe((0, _esnextEsmJs.map)((n)=>n.destination), (0, _esnextEsmJs.filterChanged)()).subscribe(()=>{
            this.isPlaybackStarted = !1;
        })).add(e.providerOutput.availableVideoTracks$.pipe((0, _esnextEsmJs.map)((n)=>n.map(({ quality: o })=>o).sort((o, d)=>(0, _esnextEsmJs.isInvariantQuality)(o) ? 1 : (0, _esnextEsmJs.isInvariantQuality)(d) ? -1 : (0, _esnextEsmJs.isHigher)(d, o) ? 1 : -1))).subscribe(this.info.availableQualities$)).add(e.providerOutput.availableVideoTracks$.subscribe((n)=>{
            const o = {};
            for (const d of n)d.fps && (o[d.quality] = d.fps);
            this.info.availableQualitiesFps$.next(o);
        })).add(e.providerOutput.availableAudioTracks$.subscribe(this.info.availableAudioTracks$)).add(e.providerOutput.isAudioAvailable$.subscribe(this.info.isAudioAvailable$)).add(e.providerOutput.currentVideoTrack$.subscribe((n)=>{
            this.info.currentQuality$.next(n?.quality), this.info.videoBitrate$.next(n?.bitrate);
        })).add(e.providerOutput.hostname$.pipe((0, _esnextEsmJs.filterChanged)()).subscribe(this.info.hostname$)).add(e.providerOutput.httpConnectionType$.pipe((0, _esnextEsmJs.filterChanged)()).subscribe(this.info.httpConnectionType$)).add(e.providerOutput.httpConnectionReused$.pipe((0, _esnextEsmJs.filterChanged)()).subscribe(this.info.httpConnectionReused$)).add(e.providerOutput.currentTextTrack$.subscribe(this.info.currentTextTrack$)).add(e.providerOutput.availableTextTracks$.subscribe(this.info.availableTextTracks$)).add(e.providerOutput.autoVideoTrackLimitingAvailable$.subscribe(this.info.autoQualityLimitingAvailable$)).add(e.providerOutput.autoVideoTrackLimits$.subscribe((n)=>{
            this.desiredState.autoVideoTrackLimits.setState(n ?? {});
        })).add(e.providerOutput.currentBuffer$.pipe((0, _esnextEsmJs.map)((n)=>n ? {
                start: n.from,
                end: n.to
            } : {
                start: 0,
                end: 0
            })).subscribe(this.info.currentBuffer$)).add(e.providerOutput.duration$.subscribe(this.info.duration$)).add(e.providerOutput.isBuffering$.subscribe(this.info.isBuffering$)).add(e.providerOutput.isLive$.subscribe(this.info.isLive$)).add(e.providerOutput.canChangePlaybackSpeed$.subscribe(this.info.canChangePlaybackSpeed$)).add(e.providerOutput.liveTime$.subscribe(this.info.liveTime$)).add(e.providerOutput.liveBufferTime$.subscribe(this.info.liveBufferTime$)).add((0, _esnextEsmJs.combine)({
            hasLiveOffsetByPaused: (0, _esnextEsmJs.merge)(this.desiredState.playbackState.stateChangeStarted$, this.desiredState.playbackState.forceChanged$).pipe((0, _esnextEsmJs.map)((n)=>n.to), (0, _esnextEsmJs.filterChanged)(), (0, _esnextEsmJs.map)((n)=>n === l.PAUSED)),
            isLowLatency: e.providerOutput.isLowLatency$
        }).subscribe(({ hasLiveOffsetByPaused: n, isLowLatency: o })=>{
            if (window.clearTimeout(this.hasLiveOffsetByPausedTimer), n) {
                this.hasLiveOffsetByPausedTimer = window.setTimeout(()=>{
                    this.hasLiveOffsetByPaused.next(!0);
                }, this.getActiveLiveDelay(o));
                return;
            }
            this.hasLiveOffsetByPaused.next(!1);
        })).add((0, _esnextEsmJs.combine)({
            atLiveEdge: (0, _esnextEsmJs.combine)({
                isLive: e.providerOutput.isLive$,
                isLowLatency: e.providerOutput.isLowLatency$,
                position: ns({
                    seekState: this.desiredState.seekState,
                    position$: e.providerOutput.position$
                })
            }).pipe((0, _esnextEsmJs.map)(({ isLive: n, position: o, isLowLatency: d })=>{
                const c = this.getActiveLiveDelay(d);
                return n && Math.abs(o) < c / 1e3;
            }), (0, _esnextEsmJs.filterChanged)(), (0, _esnextEsmJs.tap)((n)=>n && this.setPlaybackRate(1))),
            hasPausedTimeoutCase: this.hasLiveOffsetByPaused
        }).pipe((0, _esnextEsmJs.map)(({ atLiveEdge: n, hasPausedTimeoutCase: o })=>n && !o)).subscribe(this.info.atLiveEdge$)).add((0, _esnextEsmJs.combine)({
            isLive: e.providerOutput.isLive$,
            position: e.providerOutput.position$,
            duration: e.providerOutput.duration$
        }).pipe((0, _esnextEsmJs.map)(({ isLive: n, position: o, duration: d })=>n && (Math.abs(d) - Math.abs(o)) * 1e3 < this.tuning.live.activeLiveDelay), (0, _esnextEsmJs.filterChanged)(), (0, _esnextEsmJs.tap)((n)=>n && this.setPlaybackRate(1))).subscribe(this.info.atLiveDurationEdge$)).add(e.providerOutput.volume$.pipe((0, _esnextEsmJs.map)((n)=>n.muted), (0, _esnextEsmJs.filterChanged)()).subscribe(this.info.muted$)).add(e.providerOutput.volume$.pipe((0, _esnextEsmJs.map)((n)=>n.volume), (0, _esnextEsmJs.filterChanged)()).subscribe(this.info.volume$)).add(ns({
            seekState: this.desiredState.seekState,
            position$: e.providerOutput.position$
        }).subscribe(this.info.position$)).add((0, _esnextEsmJs.merge)(e.providerOutput.endedEvent$.pipe((0, _esnextEsmJs.mapTo)(!0)), e.providerOutput.seekedEvent$.pipe((0, _esnextEsmJs.mapTo)(!1))).pipe((0, _esnextEsmJs.filterChanged)()).subscribe(this.info.isEnded$)).add(e.providerOutput.endedEvent$.subscribe(this.events.ended$)).add(e.providerOutput.loopedEvent$.subscribe(this.events.looped$)).add(e.providerError$.subscribe(this.events.managedError$)).add(e.noAvailableProvidersError$.pipe((0, _esnextEsmJs.map)((n)=>({
                id: n ? `No${n}` : "NoProviders",
                category: (0, _esnextEsmJs.ErrorCategory).VIDEO_PIPELINE,
                message: n ? `${n} was forced but failed or not available` : "No suitable providers or all providers failed"
            }))).subscribe(this.events.fatalError$)).add(e.providerOutput.element$.subscribe(this.experimental.element$)).add(e.providerOutput.firstBytesEvent$.pipe((0, _esnextEsmJs.once)(), (0, _esnextEsmJs.map)((n)=>n ?? (0, _esnextEsmJs.now)() - this.initedAt)).subscribe(this.events.firstBytes$)).add(e.providerOutput.firstFrameEvent$.pipe((0, _esnextEsmJs.once)(), (0, _esnextEsmJs.map)(()=>(0, _esnextEsmJs.now)() - this.initedAt)).subscribe(this.events.firstFrame$)).add(e.providerOutput.canplay$.pipe((0, _esnextEsmJs.once)(), (0, _esnextEsmJs.map)(()=>(0, _esnextEsmJs.now)() - this.initedAt)).subscribe(this.events.canplay$)).add(this.throughputEstimator.throughput$.subscribe(this.info.throughputEstimation$)).add(this.throughputEstimator.rtt$.subscribe(this.info.rttEstimation$)).add(e.providerOutput.availableSources$.subscribe(this.info.availableSources$));
        const t = new (0, _esnextEsmJs.ValueSubject)(!1);
        this.subscription.add(e.providerOutput.seekedEvent$.subscribe(()=>t.next(!1))).add(e.providerOutput.willSeekEvent$.subscribe(()=>t.next(!0)));
        const i = new (0, _esnextEsmJs.ValueSubject)(!0);
        this.subscription.add(e.current$.subscribe(()=>i.next(!0))).add(this.desiredState.playbackState.stateChangeEnded$.pipe((0, _esnextEsmJs.filter)(({ to: n })=>n === l.PLAYING), (0, _esnextEsmJs.once)()).subscribe(()=>i.next(!1)));
        let s = 0;
        const r = (0, _esnextEsmJs.merge)(e.providerOutput.isBuffering$, t, i).pipe((0, _esnextEsmJs.map)(()=>{
            const n = e.providerOutput.isBuffering$.getValue(), o = t.getValue() || i.getValue();
            return n && !o;
        }), (0, _esnextEsmJs.filterChanged)());
        this.subscription.add(r.subscribe((n)=>{
            n ? s = window.setTimeout(()=>this.info.isStalled$.next(!0), this.tuning.stallIgnoreThreshold) : (window.clearTimeout(s), this.info.isStalled$.next(!1));
        })), this.subscription.add((0, _esnextEsmJs.merge)(e.providerOutput.canplay$, e.providerOutput.firstFrameEvent$, e.providerOutput.firstBytesEvent$).subscribe(()=>{
            const n = e.providerOutput.element$.getValue();
            this.setIntrinsicVideoSize({
                width: n?.videoWidth,
                height: n?.videoHeight
            });
        })).add(e.providerOutput.currentVideoTrack$.subscribe((n)=>{
            const o = e.providerOutput.element$.getValue();
            this.setIntrinsicVideoSize({
                width: n?.size?.width,
                height: n?.size?.height
            }, {
                width: o?.videoWidth,
                height: o?.videoHeight
            });
        })).add(e.providerOutput.is3DVideo$.subscribe(this.info.is3DVideo$)), this.subscription.add((0, _esnextEsmJs.merge)(e.providerOutput.inPiP$, e.providerOutput.inFullscreen$, e.providerOutput.element$, this.chromecastInitializer.castState$).subscribe(()=>{
            const n = e.providerOutput.inPiP$.getValue(), o = e.providerOutput.inFullscreen$.getValue(), d = e.providerOutput.element$.getValue(), c = this.chromecastInitializer.castState$.getValue();
            let u;
            c === fe.CONNECTED ? u = Ke.SECOND_SCREEN : d ? n ? u = Ke.PIP : o ? u = Ke.FULLSCREEN : u = Ke.INLINE : u = Ke.NONE, this.info.surface$.getValue() !== u && this.info.surface$.next(u);
        }));
    }
    initChromecastSubscription() {
        this.subscription.add(this.chromecastInitializer.castState$.subscribe(this.info.chromecastState$)), this.subscription.add(this.chromecastInitializer.connection$.pipe((0, _esnextEsmJs.map)((e)=>e?.castDevice.friendlyName)).subscribe(this.info.chromecastDeviceName$)), this.subscription.add(this.chromecastInitializer.errorEvent$.subscribe(this.events.managedError$));
    }
    initStartingVideoTrack(e) {
        const t = new (0, _esnextEsmJs.Subscription);
        this.subscription.add(t), this.subscription.add(e.current$.pipe((0, _esnextEsmJs.filterChanged)((i, s)=>i.provider === s.provider)).subscribe(()=>{
            t.unsubscribe(), t.add(e.providerOutput.availableVideoTracks$.pipe((0, _esnextEsmJs.filter)((i)=>i.length > 0), (0, _esnextEsmJs.once)()).subscribe((i)=>{
                this.setStartingVideoTrack(i);
            }));
        }));
    }
    setStartingVideoTrack(e) {
        let t;
        const i = this.desiredState.videoTrack.getState()?.quality;
        i && (t = e.find(({ quality: s })=>s === i), t || this.setAutoQuality(!0)), t || (t = ni(e, {
            container: this.domContainer.getBoundingClientRect(),
            throughput: this.throughputEstimator.throughput$.getValue(),
            tuning: this.tuning.autoTrackSelection,
            limits: this.desiredState.autoVideoTrackLimits.getState(),
            playbackRate: this.info.currentPlaybackRate$.getValue(),
            forwardBufferHealth: 0,
            abrLogger: this.abrLogger
        })), this.desiredState.videoTrack.startTransitionTo(t), this.info.currentQuality$.next(t.quality), this.info.videoBitrate$.next(t.bitrate);
    }
    initLogs() {
        this.subscription.add((0, _esnextEsmJs.merge)(this.desiredState.videoTrack.stateChangeStarted$.pipe((0, _esnextEsmJs.map)((e)=>({
                transition: e,
                entity: "quality",
                type: "start"
            }))), this.desiredState.videoTrack.stateChangeEnded$.pipe((0, _esnextEsmJs.map)((e)=>({
                transition: e,
                entity: "quality",
                type: "end"
            }))), this.desiredState.autoVideoTrackSwitching.stateChangeStarted$.pipe((0, _esnextEsmJs.map)((e)=>({
                transition: e,
                entity: "autoQualityEnabled",
                type: "start"
            }))), this.desiredState.autoVideoTrackSwitching.stateChangeEnded$.pipe((0, _esnextEsmJs.map)((e)=>({
                transition: e,
                entity: "autoQualityEnabled",
                type: "end"
            }))), this.desiredState.seekState.stateChangeStarted$.pipe((0, _esnextEsmJs.map)((e)=>({
                transition: e,
                entity: "seekState",
                type: "start"
            }))), this.desiredState.seekState.stateChangeEnded$.pipe((0, _esnextEsmJs.map)((e)=>({
                transition: e,
                entity: "seekState",
                type: "end"
            }))), this.desiredState.playbackState.stateChangeStarted$.pipe((0, _esnextEsmJs.map)((e)=>({
                transition: e,
                entity: "playbackState",
                type: "start"
            }))), this.desiredState.playbackState.stateChangeEnded$.pipe((0, _esnextEsmJs.map)((e)=>({
                transition: e,
                entity: "playbackState",
                type: "end"
            })))).pipe((0, _esnextEsmJs.map)((e)=>({
                component: "desiredState",
                message: `[${e.entity} change] ${e.type}: ${JSON.stringify(e.transition)}`
            }))).subscribe(this.logger.log)), this.subscription.add(this.logger.log$.subscribe(this.events.log$));
    }
    initDebugTelemetry() {
        const e = this.providerContainer?.providerOutput;
        (0, _esnextEsmJs.assertNonNullable)(this.providerContainer), (0, _esnextEsmJs.assertNonNullable)(e), ta(), this.experimental.enableDebugTelemetry$.next(this.tuning.enableTelemetryAtStart), [
            this.experimental.enableDebugTelemetry$.subscribe((t)=>ea(t)),
            this.providerContainer.current$.subscribe(({ type: t })=>qt("provider", t)),
            e.duration$.subscribe((t)=>qt("duration", t)),
            e.availableVideoTracks$.pipe((0, _esnextEsmJs.filter)((t)=>!!t.length), (0, _esnextEsmJs.once)()).subscribe((t)=>qt("tracks", t)),
            this.events.fatalError$.subscribe(new Fe("fatalError")),
            this.events.managedError$.subscribe(new Fe("managedError")),
            e.position$.subscribe(new Fe("position")),
            e.currentVideoTrack$.pipe((0, _esnextEsmJs.map)((t)=>t?.quality)).subscribe(new Fe("quality")),
            this.info.currentBuffer$.subscribe(new Fe("buffer")),
            e.isBuffering$.subscribe(new Fe("isBuffering"))
        ].forEach((t)=>this.subscription.add(t)), qt("codecs", jr());
    }
    initWakeLock() {
        if (!window.navigator.wakeLock || !this.tuning.enableWakeLock) return;
        let e;
        const t = ()=>{
            e?.release(), e = void 0;
        }, i = async ()=>{
            t(), e = await window.navigator.wakeLock.request("screen").catch((s)=>{
                s instanceof DOMException && s.name === "NotAllowedError" || this.events.managedError$.next({
                    id: "WakeLock",
                    category: (0, _esnextEsmJs.ErrorCategory).DOM,
                    message: String(s)
                });
            });
        };
        this.subscription.add((0, _esnextEsmJs.merge)((0, _esnextEsmJs.fromEvent)(document, "visibilitychange"), (0, _esnextEsmJs.fromEvent)(document, "fullscreenchange"), this.desiredState.playbackState.stateChangeEnded$).subscribe(()=>{
            const s = document.visibilityState === "visible", r = this.desiredState.playbackState.getState() === l.PLAYING, n = !!e && !e?.released;
            s && r ? n || i() : t();
        })).add(this.events.willDestruct$.subscribe(t));
    }
    setVideoTrackIdByQuality(e, t) {
        const i = e.find((s)=>s.quality === t);
        i ? this.desiredState.videoTrack.startTransitionTo(i) : this.setAutoQuality(!0);
    }
    getActiveLiveDelay(e = !1) {
        return e ? this.tuning.live.lowLatencyActiveLiveDelay : this.tuning.live.activeLiveDelay;
    }
}
const ln = `@vkontakte/videoplayer-core@${Ns}`;

},{"@vkontakte/videoplayer-shared/esnext.esm.js":"2RPwF","e8f59fa7cdfc5947":"hM74h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2RPwF":[function(require,module,exports) {
/**
 * @vkontakte/videoplayer-shared v1.0.34
 * Fri, 26 Apr 2024 14:08:06 GMT
 * https://st.mycdn.me/static/vkontakte-videoplayer/1-0-34/doc/
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CurrentClientBrowser", ()=>A);
parcelHelpers.export(exports, "CurrentClientDevice", ()=>h);
parcelHelpers.export(exports, "ErrorCategory", ()=>j);
parcelHelpers.export(exports, "InterfaceLanguage", ()=>V);
parcelHelpers.export(exports, "Logger", ()=>Me);
parcelHelpers.export(exports, "Observable", ()=>b);
parcelHelpers.export(exports, "Subject", ()=>G);
parcelHelpers.export(exports, "Subscription", ()=>M);
parcelHelpers.export(exports, "VERSION", ()=>Te);
parcelHelpers.export(exports, "VKNumericLanguage", ()=>Q);
parcelHelpers.export(exports, "ValueSubject", ()=>st);
parcelHelpers.export(exports, "VideoQuality", ()=>w);
parcelHelpers.export(exports, "abortable", ()=>je);
parcelHelpers.export(exports, "addScript", ()=>Ce);
parcelHelpers.export(exports, "areQualitiesExact", ()=>et);
parcelHelpers.export(exports, "assertEmptyArray", ()=>qe);
parcelHelpers.export(exports, "assertNever", ()=>v);
parcelHelpers.export(exports, "assertNonNullable", ()=>Ne);
parcelHelpers.export(exports, "assertNotEmptyArray", ()=>Fe);
parcelHelpers.export(exports, "assertNullable", ()=>ke);
parcelHelpers.export(exports, "assertQualityIsExact", ()=>tt);
parcelHelpers.export(exports, "buffer", ()=>ft);
parcelHelpers.export(exports, "checkNever", ()=>Ie);
parcelHelpers.export(exports, "cloneDeep", ()=>it);
parcelHelpers.export(exports, "cloneDeepWith", ()=>H);
parcelHelpers.export(exports, "combine", ()=>ot);
parcelHelpers.export(exports, "debounce", ()=>ht);
parcelHelpers.export(exports, "debounceFn", ()=>rt);
parcelHelpers.export(exports, "detectEmbed", ()=>$e);
parcelHelpers.export(exports, "fillWithDefault", ()=>fe);
parcelHelpers.export(exports, "filter", ()=>mt);
parcelHelpers.export(exports, "filterChanged", ()=>wt);
parcelHelpers.export(exports, "fromEvent", ()=>dt);
parcelHelpers.export(exports, "getCurrentBrowser", ()=>W);
parcelHelpers.export(exports, "getExponentialDelay", ()=>We);
parcelHelpers.export(exports, "getHighestQuality", ()=>Xe);
parcelHelpers.export(exports, "getIOSVersion", ()=>Qe);
parcelHelpers.export(exports, "interval", ()=>lt);
parcelHelpers.export(exports, "isHigher", ()=>Ye);
parcelHelpers.export(exports, "isHigherOrEqual", ()=>He);
parcelHelpers.export(exports, "isIOS", ()=>Ue);
parcelHelpers.export(exports, "isInvariantQuality", ()=>Y);
parcelHelpers.export(exports, "isLower", ()=>z);
parcelHelpers.export(exports, "isLowerOrEqual", ()=>Be);
parcelHelpers.export(exports, "isMacLike", ()=>Ve);
parcelHelpers.export(exports, "isMobile", ()=>Ge);
parcelHelpers.export(exports, "isNonNullable", ()=>ie);
parcelHelpers.export(exports, "isNullable", ()=>se);
parcelHelpers.export(exports, "loadVKLangPack", ()=>yt);
parcelHelpers.export(exports, "map", ()=>Ae);
parcelHelpers.export(exports, "mapTo", ()=>gt);
parcelHelpers.export(exports, "merge", ()=>at);
parcelHelpers.export(exports, "noop", ()=>L);
parcelHelpers.export(exports, "now", ()=>De);
parcelHelpers.export(exports, "observableFrom", ()=>ut);
parcelHelpers.export(exports, "once", ()=>Et);
parcelHelpers.export(exports, "pairwise", ()=>At);
parcelHelpers.export(exports, "safeStorage", ()=>ze);
parcelHelpers.export(exports, "tap", ()=>St);
parcelHelpers.export(exports, "throttle", ()=>bt);
parcelHelpers.export(exports, "timeCodeToString", ()=>nt);
parcelHelpers.export(exports, "timeout", ()=>ct);
parcelHelpers.export(exports, "videoHeightToQuality", ()=>Je);
parcelHelpers.export(exports, "videoQualityToHeight", ()=>Ke);
parcelHelpers.export(exports, "videoSizeToQuality", ()=>Ze);
const Te = "1.0.34";
class M {
    subscriptions = [];
    unsubscribe() {
        const t = this.subscriptions;
        this.subscriptions = [], t.forEach((n)=>typeof n == "function" ? n() : n.unsubscribe());
    }
    add(t) {
        return this.subscriptions.push(t), this;
    }
}
const v = (e)=>{
    throw new Error(`${e} is value of unexpected type`);
}, Ie = (e)=>{}, L = ()=>{};
class b {
    constructor(t){
        t && (this._subscribe = t);
    }
    subscribe(t, n) {
        let r;
        n ? typeof n == "function" ? r = {
            next: n,
            error: L
        } : r = {
            next: (o)=>n.next(o),
            error: (o)=>n.error?.(o)
        } : r = {
            next: L,
            error: L
        };
        const s = typeof t == "function" ? {
            next: (o)=>{
                try {
                    t(o);
                } catch (a) {
                    r.next(a);
                }
            },
            error: (o)=>r.next(o)
        } : {
            next: (o)=>t.next(o),
            error: (o)=>t.error ? t.error(o) : r.next(o)
        };
        let i;
        try {
            i = this._subscribe(s);
        } catch (o) {
            s.error?.(o);
        }
        return new M().add(()=>{
            switch(s.next = L, s.error = L, typeof i){
                case "function":
                    i();
                    return;
                case "object":
                    i.unsubscribe();
                    return;
                case "undefined":
                    return;
                default:
                    return v(i);
            }
        });
    }
    pipe(...t) {
        return t.reduce((n, r)=>r(n), this);
    }
    _subscribe(t) {}
}
class G extends b {
    keyCounter = 0;
    subscribers = new Map;
    constructor(){
        super();
    }
    next(t) {
        this.subscribers.forEach((n)=>n.next(t));
    }
    error(t) {
        this.subscribers.forEach((n)=>n.error?.(t));
    }
    _subscribe(t) {
        const n = this.keyCounter++;
        return this.subscribers.set(n, t), new M().add(()=>this.subscribers.delete(n));
    }
}
class Me {
    log$ = new G;
    logs = [];
    log = (t)=>{
        const n = {
            ...t,
            timestamp: Date.now()
        };
        this.logs.push(n), this.log$.next(n);
    };
    createCustomLog(t) {
        return (...n)=>{
            let r;
            try {
                r = t(...n);
            } catch  {
                r = {
                    message: "error in `createCustomLog`",
                    component: "Logger"
                };
            }
            this.log(r);
        };
    }
    createComponentLog(t) {
        return this.createCustomLog((n)=>({
                component: t,
                ...n
            }));
    }
    getAllLogs = ()=>this.logs;
}
function Ne(e, t = 'Assertion "value is not nullable" failed') {
    if (e == null) throw new Error(t);
}
function ke(e, t = 'Assertion "value is nullable" failed') {
    if (e != null) throw new Error(t);
}
function ie(e) {
    return typeof e < "u" && e !== null;
}
function se(e) {
    return e == null;
}
function Fe(e, t) {
    if (!e?.length) throw new Error(t);
}
function qe(e, t) {
    if (e?.length) throw new Error(t);
}
const Ce = (e, t, n)=>new Promise((r, s)=>{
        t.addEventListener("abort", ()=>{
            a(), c.remove();
        });
        const i = ()=>{
            a(), s();
        }, o = ()=>{
            a(), r();
        }, a = ()=>{
            d && clearTimeout(d), c.removeEventListener("load", o), c.removeEventListener("error", i);
        };
        let d;
        n && (d = window.setTimeout(i, n));
        const c = document.createElement("script");
        c.addEventListener("load", o), c.addEventListener("error", i), c.src = e, document.head.appendChild(c);
    }), De = typeof window.performance?.now == "function" ? ()=>window.performance.now() : ()=>Date.now(), je = (e, t)=>async (...n)=>{
        const r = t(...n);
        let s = e.aborted, i;
        for(; !s && !e.aborted;)try {
            const o = await r.next(i);
            s = o.done ?? !1, i = o.value;
        } catch (o) {
            await r.throw(o);
        }
        return i;
    };
var A;
(function(e) {
    e.Unknown = "Unknown", e.Yandex = "Yandex", e.Chrome = "Chrome", e.Chromium = "Chromium", e.Firefox = "Firefox", e.Safari = "Safari", e.Opera = "Opera", e.Edge = "Edge", e.Rest = "Rest";
})(A || (A = {}));
var h;
(function(e) {
    e.Unknown = "Unknown", e.Android = "Android", e.iPhone = "iPhone", e.iPad = "iPad", e.iPod = "iPod", e.RestMobile = "RestMobile", e.Mac = "Mac", e.Desktop = "Desktop";
})(h || (h = {}));
const W = ()=>{
    const { userAgent: e } = window.navigator, t = /yabrowser/i.test(e) ? A.Yandex : void 0, n = /chrome|crios/i.test(e) ? A.Chrome : void 0, r = /chromium/i.test(e) ? A.Chromium : void 0, s = /firefox|fxios/i.test(e) ? A.Firefox : void 0, i = /webkit|safari|khtml/i.test(e) ? A.Safari : void 0, o = /opr\//i.test(e) ? A.Opera : void 0, a = /edg/i.test(e) ? A.Edge : void 0, d = /android/i.test(e) ? h.Android : void 0, c = /iphone/i.test(e) ? h.iPhone : void 0, m = /ipad/i.test(e) ? h.iPad : void 0, f = /ipod/i.test(e) ? h.iPod : void 0, E = /mac/i.test(e) ? h.Mac : void 0, O = /webOS|BlackBerry|IEMobile|Opera Mini/i.test(e) ? h.RestMobile : void 0;
    return {
        browser: t || s || o || a || n || r || i || A.Rest,
        device: d || c || m || f || O || E || h.Desktop
    };
}, Ue = (e = !1)=>{
    const n = [
        h.iPhone,
        h.iPad,
        h.iPod
    ].includes(W().device);
    if (!e) return n;
    const { userAgent: r, maxTouchPoints: s } = window.navigator;
    return !!(n || /macintosh/i.test(r) && s > 0);
}, Qe = ()=>{
    const { userAgent: e } = window.navigator, t = e.match(/Version\/(\d+(\.\d+)?)/i);
    if (!t) return null;
    const n = t[1], r = parseFloat(n);
    return isNaN(r) ? null : r;
}, Ve = ()=>[
        h.Mac,
        h.iPhone,
        h.iPad,
        h.iPod
    ].includes(W().device), Ge = ()=>/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion ?? navigator.userAgent) || navigator?.userAgentData?.mobile, We = (e, { start: t = 0, factor: n = 2, max: r = 1 / 0, min: s = t, random: i = 0 } = {})=>{
    let o = t;
    return o *= n ** e, o *= 1 + (Math.random() * i * 2 - i), o = Math.round(o), o = Math.min(o, r), o = Math.max(o, s), o;
};
var u;
(function(e) {
    e[e.LOCAL_STORAGE = 0] = "LOCAL_STORAGE", e[e.SESSION_STORAGE = 1] = "SESSION_STORAGE", e[e.RUNTIME = 2] = "RUNTIME";
})(u || (u = {}));
let x, y;
const N = `vk-videoplayer-dummy-key-${Math.random()}`, R = ()=>{
    if (y !== void 0) return y;
    try {
        localStorage.setItem(N, "test"), localStorage.removeItem(N), y = u.LOCAL_STORAGE;
    } catch (e) {
        if (e instanceof DOMException || e instanceof TypeError) try {
            sessionStorage.getItem(N), y = u.SESSION_STORAGE;
        } catch (t) {
            if (t instanceof DOMException || t instanceof TypeError) y = u.RUNTIME;
            else throw t;
        }
        else throw e;
    }
    return y === u.RUNTIME && (x = new Map), y;
}, oe = ()=>R() === u.LOCAL_STORAGE, ae = (e)=>{
    const t = R();
    switch(t){
        case u.LOCAL_STORAGE:
            return localStorage.getItem(e) ?? void 0;
        case u.SESSION_STORAGE:
            return sessionStorage.getItem(e) ?? void 0;
        case u.RUNTIME:
            return x?.get(e);
        default:
            v(t);
    }
}, ce = (e, t)=>{
    const n = R();
    switch(n){
        case u.LOCAL_STORAGE:
            try {
                localStorage.setItem(e, t);
            } catch (r) {
                if (r instanceof DOMException) console.error(r);
                else throw r;
            }
            break;
        case u.SESSION_STORAGE:
            try {
                sessionStorage.setItem(e, t);
            } catch (r) {
                if (r instanceof DOMException) console.error(r);
                else throw r;
            }
            break;
        case u.RUNTIME:
            return void x?.set(e, t);
        default:
            v(n);
    }
}, le = (e)=>{
    const t = R();
    switch(t){
        case u.LOCAL_STORAGE:
            return e in localStorage;
        case u.SESSION_STORAGE:
            return e in sessionStorage;
        case u.RUNTIME:
            return x?.has(e) ?? !1;
        default:
            return v(t), !1;
    }
}, ue = (e)=>{
    const t = R();
    switch(t){
        case u.LOCAL_STORAGE:
            return localStorage.removeItem(e);
        case u.SESSION_STORAGE:
            return sessionStorage.removeItem(e);
        case u.RUNTIME:
            return void x?.delete(e);
        default:
            v(t);
    }
}, de = ()=>{
    const e = R();
    switch(e){
        case u.LOCAL_STORAGE:
            return localStorage.clear();
        case u.SESSION_STORAGE:
            return sessionStorage.clear();
        case u.RUNTIME:
            return x?.clear();
        default:
            v(e);
    }
};
var ze = Object.freeze({
    __proto__: null,
    clear: de,
    get: ae,
    has: le,
    isPersistent: oe,
    remove: ue,
    set: ce
});
const $e = ()=>{
    let e, t;
    try {
        e = window.self !== window.top;
    } catch (r) {
        r instanceof DOMException && r.name === "SecurityError" ? e = !0 : (e = !1, console.error(r));
    }
    try {
        window.location.ancestorOrigins && (t = window.location.ancestorOrigins[window.location.ancestorOrigins.length - 1]);
    } catch (r) {
        console.error(r);
    }
    try {
        !t && document.referrer && (t = document.referrer);
    } catch (r) {
        console.error(r);
    }
    const n = t ? new URL(t).hostname : void 0;
    return {
        isEmbed: e,
        host: n
    };
};
var w;
(function(e) {
    e.INVARIANT = "Invariant quality", e.Q_144P = "144p", e.Q_240P = "240p", e.Q_360P = "360p", e.Q_480P = "480p", e.Q_720P = "720p", e.Q_1080P = "1080p", e.Q_1440P = "1440p", e.Q_2160P = "2160p", e.Q_4320P = "4320p";
})(w || (w = {}));
const p = {
    [w.Q_144P]: {
        width: 256,
        height: 144
    },
    [w.Q_240P]: {
        width: 428,
        height: 240
    },
    [w.Q_360P]: {
        width: 640,
        height: 360
    },
    [w.Q_480P]: {
        width: 856,
        height: 480
    },
    [w.Q_720P]: {
        width: 1280,
        height: 720
    },
    [w.Q_1080P]: {
        width: 1920,
        height: 1080
    },
    [w.Q_1440P]: {
        width: 2560,
        height: 1440
    },
    [w.Q_2160P]: {
        width: 3840,
        height: 2160
    },
    [w.Q_4320P]: {
        width: 7680,
        height: 4320
    }
}, Ye = (e, t)=>p[e].height > p[t].height, He = (e, t)=>p[e].height >= p[t].height, z = (e, t)=>p[e].height < p[t].height, Be = (e, t)=>p[e].height <= p[t].height, Xe = (e)=>e.sort((t, n)=>t === n ? 0 : t === w.INVARIANT ? 1 : n === w.INVARIANT ? -1 : z(t, n) ? 1 : -1)[0], $ = Object.keys(p).sort((e, t)=>z(e, t) ? -1 : 1), Je = (e, t = .02)=>[
        ...$
    ].find((r)=>p[r].height * (1 + t) >= e), Ze = ({ width: e, height: t })=>{
    const n = Math.min(e, t), r = Math.max(e, t);
    return $.find((s)=>{
        const i = p[s];
        return i.width >= r && i.height >= n;
    });
}, Ke = (e)=>p[e].height, Y = (e)=>e === w.INVARIANT, et = (e)=>e.every((t)=>!Y(t));
function tt(e) {
    if (Y(e)) throw new Error("Expected exact quality");
}
const fe = (e, t)=>{
    const n = {};
    for (const r of Object.keys(t)){
        const s = t[r], i = e[r];
        Array.isArray(s) && Array.isArray(i) ? n[r] = i : typeof s == "object" && typeof i == "object" ? n[r] = fe(i, s) : n[r] = r in e ? i : s;
    }
    return n;
}, nt = (e)=>{
    let t = "";
    return e >= 3600 && (t += Math.floor(e / 3600) + "h", e = e % 3600), e >= 60 && (t += Math.floor(e / 60) + "m", e = e % 60), e > 0 && (t += Math.floor(e) + "s"), t;
};
function rt(e, t = 0, n) {
    let r, s, i, o, a, d, c = 0, m = !1, f = !1, E = !0;
    const O = !t && t !== 0 && typeof window.requestAnimationFrame == "function";
    n && (m = !!n.leading, f = "maxWait" in n, i = n?.maxWait ? Math.max(+n?.maxWait || 0, t) : i, E = "trailing" in n ? !!n.trailing : E);
    function _(l) {
        const g = r, S = s;
        return r = s = void 0, c = l, o = e.apply(S, g), o;
    }
    function P(l, g) {
        return O ? (a && window.cancelAnimationFrame(a), window.requestAnimationFrame(l)) : setTimeout(l, g);
    }
    function Z(l) {
        if (O) {
            window.cancelAnimationFrame(l);
            return;
        }
        clearTimeout(l);
    }
    function K(l) {
        return c = l, a = P(T, t), m ? _(l) : o;
    }
    function ee(l) {
        const g = l - d, S = l - c, C = t - g;
        return f ? Math.min(C, i - S) : C;
    }
    function F(l) {
        const g = l - d, S = l - c;
        return d === void 0 || g >= t || g < 0 || f && S >= i;
    }
    function T() {
        const l = Date.now();
        if (F(l)) return q(l);
        a = P(T, ee(l));
    }
    function q(l) {
        return a = void 0, E && r ? _(l) : (r = s = void 0, o);
    }
    function te() {
        a !== void 0 && Z(a), c = 0, r = d = s = a = void 0;
    }
    function ne() {
        return a === void 0 ? o : q(Date.now());
    }
    function re() {
        return a !== void 0;
    }
    function I(...l) {
        const g = Date.now(), S = F(g);
        if (r = l, s = this, d = g, S) {
            if (a === void 0) return K(d);
            if (f) return a = P(T, t), _(d);
        }
        return a === void 0 && (a = P(T, t)), o;
    }
    return I.cancel = te, I.flush = ne, I.pending = re, I;
}
const H = (e, t)=>{
    if (e === null || typeof e != "object") return e;
    const n = Array.isArray(e) ? [] : {};
    for(const r in e){
        if (typeof t == "function") {
            const s = t(e[r], r, e, n);
            if (s !== void 0) {
                n[r] = s;
                continue;
            }
        }
        typeof e[r] == "object" ? n[r] = H(e[r], t) : n[r] = e[r];
    }
    return n;
}, it = (e)=>H(e);
class st extends G {
    value;
    constructor(t){
        super(), this.value = t;
    }
    next(t) {
        super.next(this.value = t);
    }
    error(t) {
        super.error(this.value = t);
    }
    getValue() {
        return this.value;
    }
    _subscribe(t) {
        const n = super._subscribe(t);
        return t.next(this.value), n;
    }
}
function ot(e) {
    return new b((t)=>{
        const n = {};
        let r = Object.keys(e).length;
        const s = (i)=>(o)=>{
                i in n || r--, n[i] = o, r === 0 && t.next(n);
            };
        return Object.entries(e).reduce((i, [o, a])=>i.add(a.subscribe(s(o))), new M);
    });
}
function at(...e) {
    return new b((t)=>e.reduce((n, r)=>n.add(r.subscribe(t)), new M));
}
var ct = (e)=>new b((t)=>{
        const n = window.setTimeout(()=>{
            try {
                t.next();
            } catch (r) {
                if (t.error) t.error(r);
                else throw r;
            }
        }, e);
        return ()=>window.clearTimeout(n);
    }), lt = (e)=>new b((t)=>{
        const n = window.setInterval(()=>t.next(), e);
        return ()=>window.clearInterval(n);
    }), ut = (e)=>new b((t)=>{
        e.forEach((n)=>t.next(n));
    }), dt = (e, t)=>new b((n)=>{
        const r = (s)=>n.next(s);
        return e.addEventListener(t, r), ()=>e.removeEventListener(t, r);
    });
function ft(e) {
    return (t)=>new b((n)=>t.subscribe(new he(n, e)));
}
class he {
    destination;
    size;
    lastValues = [];
    constructor(t, n){
        this.destination = t, this.size = n;
    }
    next(t) {
        this.lastValues.length === this.size && this.lastValues.shift(), this.lastValues.push(t), this.destination.next(this.lastValues);
    }
    error(t) {
        this.destination.error?.(t);
    }
}
const be = {
    leading: !1,
    trailing: !0
};
function ht(e, t = be) {
    return (n)=>new b((r)=>n.subscribe(new me(r, e, t)));
}
class me {
    destination;
    time;
    config;
    lastValue;
    timeout;
    constructor(t, n, r){
        this.destination = t, this.time = n, this.config = r;
    }
    next(t) {
        this.lastValue = t, ie(this.timeout) ? window.clearTimeout(this.timeout) : this.config.leading && this.destination.next(t), this.timeout = window.setTimeout(()=>{
            if (this.config.trailing) try {
                this.destination.next(this.lastValue);
            } catch (n) {
                if (this.destination.error) this.destination.error(n);
                else throw n;
            }
            this.timeout = void 0;
        }, this.time);
    }
    error(t) {
        this.destination.error?.(t);
    }
}
const we = {
    leading: !0,
    trailing: !1
};
function bt(e, t = we) {
    return (n)=>new b((r)=>n.subscribe(new pe(r, e, t)));
}
class pe {
    destination;
    time;
    config;
    lastValue;
    timeout;
    constructor(t, n, r){
        this.destination = t, this.time = n, this.config = r;
    }
    next(t) {
        this.lastValue = t, se(this.timeout) && (this.config.leading && this.destination.next(t), this.timeout = window.setTimeout(()=>{
            this.config.trailing && this.destination.next(this.lastValue), this.timeout = void 0;
        }, this.time));
    }
    error(t) {
        this.destination.error?.(t);
    }
}
function mt(e) {
    return (t)=>new b((n)=>t.subscribe(new ge(n, e)));
}
class ge {
    destination;
    predicate;
    constructor(t, n){
        this.destination = t, this.predicate = n;
    }
    next(t) {
        let n;
        try {
            n = this.predicate(t);
        } catch (r) {
            throw this.error(r), r;
        }
        n && this.destination.next(t);
    }
    error(t) {
        this.destination.error?.(t);
    }
}
function wt(e = (t, n)=>t === n) {
    return (t)=>new b((n)=>t.subscribe(new Ee(n, e)));
}
const D = {};
class Ee {
    destination;
    predicate;
    lastValue = D;
    constructor(t, n){
        this.destination = t, this.predicate = n;
    }
    next(t) {
        let n;
        try {
            n = this.lastValue === D || !this.predicate(this.lastValue, t), this.lastValue = t;
        } catch (r) {
            throw this.error(r), r;
        }
        n && this.destination.next(t);
    }
    error(t) {
        this.destination.error?.(t);
    }
}
function Ae(e) {
    return (t)=>new b((n)=>t.subscribe(new Se(n, e)));
}
let Se = class {
    destination;
    mapper;
    constructor(t, n){
        this.destination = t, this.mapper = n;
    }
    next(t) {
        let n;
        try {
            n = this.mapper(t);
        } catch (r) {
            throw this.error(r), r;
        }
        this.destination.next(n);
    }
    error(t) {
        this.destination.error?.(t);
    }
};
function gt(e) {
    return Ae(()=>e);
}
function Et() {
    return (e)=>new b((t)=>{
            let n = !1, r = !1;
            const s = e.subscribe((i)=>{
                n || (n = !0, t.next(i)), r && s.unsubscribe();
            }, (i)=>{
                n = !0, t.error?.(i), r && s.unsubscribe();
            });
            return r = !0, n && s.unsubscribe(), s;
        });
}
function At() {
    return (e)=>new b((t)=>e.subscribe(new ye(t)));
}
class ye {
    destination;
    last;
    hasLast = !1;
    constructor(t){
        this.destination = t;
    }
    next(t) {
        const n = this.last;
        if (this.last = t, !this.hasLast) {
            this.hasLast = !0;
            return;
        }
        this.destination.next([
            n,
            t
        ]);
    }
    error(t) {
        this.destination.error?.(t);
    }
}
function St(e) {
    return (t)=>new b((n)=>t.subscribe(new Oe(n, e)));
}
class Oe {
    destination;
    effect;
    constructor(t, n){
        this.destination = t, this.effect = n;
    }
    next(t) {
        try {
            this.effect(t);
        } catch (n) {
            throw this.error(n), n;
        }
        this.destination.next(t);
    }
    error(t) {
        this.destination.error?.(t);
    }
}
var j;
(function(e) {
    e.NETWORK = "network", e.VIDEO_PIPELINE = "video_pipeline", e.EXTERNAL_API = "external_api", e.PARSER = "parser", e.DOM = "dom", e.WTF = "wtf";
})(j || (j = {}));
class U {
    constructor(){
        Object.defineProperty(this, "listeners", {
            value: {},
            writable: !0,
            configurable: !0
        });
    }
    addEventListener(t, n, r) {
        t in this.listeners || (this.listeners[t] = []), this.listeners[t].push({
            callback: n,
            options: r
        });
    }
    removeEventListener(t, n) {
        if (!(t in this.listeners)) return;
        const r = this.listeners[t];
        for(let s = 0, i = r.length; s < i; s++)if (r[s].callback === n) {
            r.splice(s, 1);
            return;
        }
    }
    dispatchEvent(t) {
        if (!(t.type in this.listeners)) return;
        const r = this.listeners[t.type].slice();
        for(let s = 0, i = r.length; s < i; s++){
            const o = r[s];
            try {
                o.callback.call(this, t);
            } catch (a) {
                Promise.resolve().then(()=>{
                    throw a;
                });
            }
            o.options && o.options.once && this.removeEventListener(t.type, o.callback);
        }
        return !t.defaultPrevented;
    }
}
class B extends U {
    constructor(){
        super(), this.listeners || U.call(this), Object.defineProperty(this, "aborted", {
            value: !1,
            writable: !0,
            configurable: !0
        }), Object.defineProperty(this, "onabort", {
            value: null,
            writable: !0,
            configurable: !0
        }), Object.defineProperty(this, "reason", {
            value: void 0,
            writable: !0,
            configurable: !0
        });
    }
    toString() {
        return "[object AbortSignal]";
    }
    dispatchEvent(t) {
        t.type === "abort" && (this.aborted = !0, typeof this.onabort == "function" && this.onabort.call(this, t)), super.dispatchEvent(t);
    }
}
class ve {
    constructor(){
        Object.defineProperty(this, "signal", {
            value: new B,
            writable: !0,
            configurable: !0
        });
    }
    abort(t) {
        let n;
        try {
            n = new Event("abort");
        } catch  {
            typeof document < "u" ? document.createEvent ? (n = document.createEvent("Event"), n.initEvent("abort", !1, !1)) : (n = document.createEventObject(), n.type = "abort") : n = {
                type: "abort",
                bubbles: !1,
                cancelable: !1
            };
        }
        let r = t;
        if (r === void 0) {
            if (typeof document > "u") r = new Error("This operation was aborted"), r.name = "AbortError";
            else try {
                r = new DOMException("signal is aborted without reason");
            } catch  {
                r = new Error("This operation was aborted"), r.name = "AbortError";
            }
        }
        this.signal.reason = r, this.signal.dispatchEvent(n);
    }
    toString() {
        return "[object AbortController]";
    }
}
typeof Symbol < "u" && Symbol.toStringTag && (ve.prototype[Symbol.toStringTag] = "AbortController", B.prototype[Symbol.toStringTag] = "AbortSignal");
function X(e) {
    return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"), !0) : typeof e.Request == "function" && !e.Request.prototype.hasOwnProperty("signal") || !e.AbortController;
}
function xe(e) {
    typeof e == "function" && (e = {
        fetch: e
    });
    const { fetch: t, Request: n = t.Request, AbortController: r, __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: s = !1 } = e;
    if (!X({
        fetch: t,
        Request: n,
        AbortController: r,
        __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: s
    })) return {
        fetch: t,
        Request: i
    };
    let i = n;
    (i && !i.prototype.hasOwnProperty("signal") || s) && (i = function(c, m) {
        let f;
        m && m.signal && (f = m.signal, delete m.signal);
        const E = new n(c, m);
        return f && Object.defineProperty(E, "signal", {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: f
        }), E;
    }, i.prototype = n.prototype);
    const o = t;
    return {
        fetch: (d, c)=>{
            const m = i && i.prototype.isPrototypeOf(d) ? d.signal : c ? c.signal : void 0;
            if (m) {
                let f;
                try {
                    f = new DOMException("Aborted", "AbortError");
                } catch  {
                    f = new Error("Aborted"), f.name = "AbortError";
                }
                if (m.aborted) return Promise.reject(f);
                const E = new Promise((O, _)=>{
                    m.addEventListener("abort", ()=>_(f), {
                        once: !0
                    });
                });
                return c && c.signal && delete c.signal, Promise.race([
                    E,
                    o(d, c)
                ]);
            }
            return o(d, c);
        },
        Request: i
    };
}
const k = X({
    fetch: window.fetch,
    Request: window.Request,
    AbortController: window.AbortController
}), J = k ? xe({
    fetch: window.fetch,
    Request: window.Request,
    AbortController: window.AbortController
}) : void 0, Re = k ? J.fetch : window.fetch;
k ? J.Request : window.Request;
var Q;
(function(e) {
    e.Armenian = "58", e.Azerbaijani = "57", e.Belarusian = "114", e.English = "3", e.Kazakh = "97", e.Portuguese = "73", e.Russian = "0", e.Spanish = "4", e.Ukrainian = "1", e.Uzbek = "65", e.Vietnamese = "75";
})(Q || (Q = {}));
const _e = "vk.com", yt = async (e, t, n)=>{
    const r = new URL(`https://${_e}/js/lang-pack.js`);
    r.searchParams.set("format", "json"), r.searchParams.set("name", t), e !== void 0 && r.searchParams.set("lang", e);
    const i = await (await Re(r.toString())).json();
    return Le(i, n);
}, Le = (e, t)=>Object.fromEntries(Object.entries(e.keys).map(([n, r])=>[
            n.substring(`${t}_`.length),
            Pe(r)
        ])), Pe = (e)=>Array.isArray(e) ? e[0] : e;
var V;
(function(e) {
    e.RU = "ru", e.EN = "en";
})(V || (V = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hM74h":[function(require,module,exports) {
module.exports = require("c5745abde335640f")(require("b5ce0c746b4a2b60").getBundleURL("YHwsv") + "hls.51d87184.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("jaErj"));

},{"c5745abde335640f":"61B45","b5ce0c746b4a2b60":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["7XKtX"], null, "parcelRequireb792")

//# sourceMappingURL=esnext.esm.010e8b8d.js.map
