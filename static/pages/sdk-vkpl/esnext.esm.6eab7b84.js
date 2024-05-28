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
})({"1dlwI":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "14ac55496eab7b84";
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

},{}],"2ZT2K":[function(require,module,exports) {
/**
 * @vkontakte/videoplayer v1.1.34
 * Fri, 26 Apr 2024 14:19:06 GMT
 * https://st.mycdn.me/static/vkontakte-videoplayer/1-1-34/doc/
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GridTypes", ()=>Ct);
parcelHelpers.export(exports, "InterfaceLanguage", ()=>(0, _esnextEsmJs1.InterfaceLanguage));
parcelHelpers.export(exports, "VERSION", ()=>ll);
parcelHelpers.export(exports, "VKNumericLanguage", ()=>(0, _esnextEsmJs1.VKNumericLanguage));
parcelHelpers.export(exports, "VideoFormat", ()=>(0, _esnextEsmJs.VideoFormat));
parcelHelpers.export(exports, "VideoQuality", ()=>(0, _esnextEsmJs.VideoQuality));
parcelHelpers.export(exports, "loadVKLangPack", ()=>(0, _esnextEsmJs1.loadVKLangPack));
parcelHelpers.export(exports, "registerPlayerWebComponent", ()=>zh);
var _esnextEsmJs = require("@vkontakte/videoplayer-core/esnext.esm.js");
var _esnextEsmJs1 = require("@vkontakte/videoplayer-shared/esnext.esm.js");
var _esnextEsmJs2 = require("@vkontakte/videoplayer-statistics/esnext.esm.js");
var global = arguments[3];
function K() {}
function Pr(i, e) {
    for(const t in e)i[t] = e[t];
    return i;
}
function Sr(i) {
    return i();
}
function _l() {
    return Object.create(null);
}
function xt(i) {
    i.forEach(Sr);
}
function kn(i) {
    return typeof i == "function";
}
function ge(i, e) {
    return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let wo;
function kl(i, e) {
    return wo || (wo = document.createElement("a")), wo.href = e, i === wo.href;
}
function gu(i) {
    return Object.keys(i).length === 0;
}
function Ro(i, ...e) {
    if (i == null) {
        for (const n of e)n(void 0);
        return K;
    }
    const t = i.subscribe(...e);
    return t.unsubscribe ? ()=>t.unsubscribe() : t;
}
function Qe(i) {
    let e;
    return Ro(i, (t)=>e = t)(), e;
}
function F(i, e, t) {
    i.$$.on_destroy.push(Ro(e, t));
}
function wn(i, e, t, n) {
    if (i) {
        const o = Tr(i, e, t, n);
        return i[0](o);
    }
}
function Tr(i, e, t, n) {
    return i[1] && n ? Pr(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function yn(i, e, t, n) {
    if (i[2] && n) {
        const o = i[2](n(t));
        if (e.dirty === void 0) return o;
        if (typeof o == "object") {
            const l = [], s = Math.max(e.dirty.length, o.length);
            for(let a = 0; a < s; a += 1)l[a] = e.dirty[a] | o[a];
            return l;
        }
        return e.dirty | o;
    }
    return e.dirty;
}
function Cn(i, e, t, n, o, l) {
    if (o) {
        const s = Tr(e, t, n, l);
        i.p(s, o);
    }
}
function Pn(i) {
    if (i.ctx.length > 32) {
        const e = [], t = i.ctx.length / 32;
        for(let n = 0; n < t; n++)e[n] = -1;
        return e;
    }
    return -1;
}
function bu(i) {
    return i ?? "";
}
const Ar = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function d(i, e) {
    i.appendChild(e);
}
function Fe(i, e, t) {
    const n = vu(i);
    if (!n.getElementById(e)) {
        const o = k("style");
        o.id = e, o.textContent = t, _u(n, o);
    }
}
function vu(i) {
    if (!i) return document;
    const e = i.getRootNode ? i.getRootNode() : i.ownerDocument;
    return e && e.host ? e : i.ownerDocument;
}
function _u(i, e) {
    return d(i.head || i, e), e.sheet;
}
function C(i, e, t) {
    i.insertBefore(e, t || null);
}
function y(i) {
    i.parentNode && i.parentNode.removeChild(i);
}
function sn(i, e) {
    for(let t = 0; t < i.length; t += 1)i[t] && i[t].d(e);
}
function k(i) {
    return document.createElement(i);
}
function I(i) {
    return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function ze(i) {
    return document.createTextNode(i);
}
function B() {
    return ze(" ");
}
function ht() {
    return ze("");
}
function Ae(i, e, t, n) {
    return i.addEventListener(e, t, n), ()=>i.removeEventListener(e, t, n);
}
function di(i) {
    return function(e) {
        return e.preventDefault(), i.call(this, e);
    };
}
function rt(i) {
    return function(e) {
        return e.stopPropagation(), i.call(this, e);
    };
}
function u(i, e, t) {
    t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function ku(i) {
    return Array.from(i.childNodes);
}
function Xe(i, e) {
    e = "" + e, i.data !== e && (i.data = e);
}
function At(i, e, t, n) {
    t == null ? i.style.removeProperty(e) : i.style.setProperty(e, t, n ? "important" : "");
}
let yo;
function wu() {
    if (yo === void 0) {
        yo = !1;
        try {
            typeof window < "u" && window.parent && window.parent.document;
        } catch  {
            yo = !0;
        }
    }
    return yo;
}
function Bo(i, e) {
    getComputedStyle(i).position === "static" && (i.style.position = "relative");
    const n = k("iframe");
    n.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), n.setAttribute("aria-hidden", "true"), n.tabIndex = -1;
    const o = wu();
    let l;
    return o ? (n.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>", l = Ae(window, "message", (s)=>{
        s.source === n.contentWindow && e();
    })) : (n.src = "about:blank", n.onload = ()=>{
        l = Ae(n.contentWindow, "resize", e), e();
    }), d(i, n), ()=>{
        (o || l && n.contentWindow) && l(), y(n);
    };
}
function L(i, e, t) {
    i.classList.toggle(e, !!t);
}
function fn(i, e) {
    return new i(e);
}
let ho;
function mo(i) {
    ho = i;
}
function bo() {
    if (!ho) throw new Error("Function called outside component initialization");
    return ho;
}
function Ki(i) {
    bo().$$.on_mount.push(i);
}
function No(i) {
    bo().$$.on_destroy.push(i);
}
function Xo(i, e) {
    return bo().$$.context.set(i, e), e;
}
function ol(i) {
    return bo().$$.context.get(i);
}
function Er() {
    return bo().$$.context;
}
function Jn(i, e) {
    const t = i.$$.callbacks[e.type];
    t && t.slice().forEach((n)=>n.call(this, e));
}
const Kn = [], We = [];
let Qn = [];
const Jo = [], yu = Promise.resolve();
let xo = !1;
function Cu() {
    xo || (xo = !0, yu.then(Lr));
}
function Hn(i) {
    Qn.push(i);
}
function gt(i) {
    Jo.push(i);
}
const Fo = new Set;
let Wn = 0;
function Lr() {
    if (Wn !== 0) return;
    const i = ho;
    do {
        try {
            for(; Wn < Kn.length;){
                const e = Kn[Wn];
                Wn++, mo(e), Pu(e.$$);
            }
        } catch (e) {
            throw Kn.length = 0, Wn = 0, e;
        }
        for(mo(null), Kn.length = 0, Wn = 0; We.length;)We.pop()();
        for(let e = 0; e < Qn.length; e += 1){
            const t = Qn[e];
            Fo.has(t) || (Fo.add(t), t());
        }
        Qn.length = 0;
    }while (Kn.length);
    for(; Jo.length;)Jo.pop()();
    xo = !1, Fo.clear(), mo(i);
}
function Pu(i) {
    if (i.fragment !== null) {
        i.update(), xt(i.before_update);
        const e = i.dirty;
        i.dirty = [
            -1
        ], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(Hn);
    }
}
function Su(i) {
    const e = [], t = [];
    Qn.forEach((n)=>i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n)=>n()), Qn = e;
}
const Eo = new Set;
let zn;
function me() {
    zn = {
        r: 0,
        c: [],
        p: zn
    };
}
function he() {
    zn.r || xt(zn.c), zn = zn.p;
}
function m(i, e) {
    i && i.i && (Eo.delete(i), i.i(e));
}
function p(i, e, t, n) {
    if (i && i.o) {
        if (Eo.has(i)) return;
        Eo.add(i), zn.c.push(()=>{
            Eo.delete(i), n && (t && i.d(1), n());
        }), i.o(e);
    } else n && n();
}
function Mt(i) {
    return i?.length !== void 0 ? i : Array.from(i);
}
function Tu(i, e) {
    const t = {}, n = {}, o = {
        $$scope: 1
    };
    let l = i.length;
    for(; l--;){
        const s = i[l], a = e[l];
        if (a) {
            for(const r in s)r in a || (n[r] = 1);
            for(const r in a)o[r] || (t[r] = a[r], o[r] = 1);
            i[l] = a;
        } else for(const r in s)o[r] = 1;
    }
    for(const s in n)s in t || (t[s] = void 0);
    return t;
}
function Au(i) {
    return typeof i == "object" && i !== null ? i : {};
}
function bt(i, e, t) {
    const n = i.$$.props[e];
    n !== void 0 && (i.$$.bound[n] = t, t(i.$$.ctx[n]));
}
function D(i) {
    i && i.c();
}
function z(i, e, t) {
    const { fragment: n, after_update: o } = i.$$;
    n && n.m(e, t), Hn(()=>{
        const l = i.$$.on_mount.map(Sr).filter(kn);
        i.$$.on_destroy ? i.$$.on_destroy.push(...l) : xt(l), i.$$.on_mount = [];
    }), o.forEach(Hn);
}
function O(i, e) {
    const t = i.$$;
    t.fragment !== null && (Su(t.after_update), xt(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Eu(i, e) {
    i.$$.dirty[0] === -1 && (Kn.push(i), Cu(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function _e(i, e, t, n, o, l, s, a = [
    -1
]) {
    const r = ho;
    mo(i);
    const c = i.$$ = {
        fragment: null,
        ctx: [],
        props: l,
        update: K,
        not_equal: o,
        bound: _l(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (r ? r.$$.context : [])),
        callbacks: _l(),
        dirty: a,
        skip_bound: !1,
        root: e.target || r.$$.root
    };
    s && s(c.root);
    let f = !1;
    if (c.ctx = t ? t(i, e.props || {}, (h, g, ...v)=>{
        const b = v.length ? v[0] : g;
        return c.ctx && o(c.ctx[h], c.ctx[h] = b) && (!c.skip_bound && c.bound[h] && c.bound[h](b), f && Eu(i, h)), g;
    }) : [], c.update(), f = !0, xt(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
        if (e.hydrate) {
            const h = ku(e.target);
            c.fragment && c.fragment.l(h), h.forEach(y);
        } else c.fragment && c.fragment.c();
        e.intro && m(i.$$.fragment), z(i, e.target, e.anchor), Lr();
    }
    mo(r);
}
class ke {
    $$ = void 0;
    $$set = void 0;
    $destroy() {
        O(this, 1), this.$destroy = K;
    }
    $on(e, t) {
        if (!kn(t)) return K;
        const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return n.push(t), ()=>{
            const o = n.indexOf(t);
            o !== -1 && n.splice(o, 1);
        };
    }
    $set(e) {
        this.$$set && !gu(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
    }
}
const Lu = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(Lu);
var xn;
(function(i) {
    i.VK = "vk", i.VK_VIDEO = "vk_video";
})(xn || (xn = {}));
const Vu = {
    isMobile: void 0,
    defaultLanguage: (0, _esnextEsmJs1.InterfaceLanguage).RU,
    downloadVKLanguages: !0,
    updateBuiltinLanguages: !0,
    isSmoothVideoRotate: !0,
    showSupport: !0,
    supportLink: "https://vk.com/support?act=new&from=v",
    showLogo: void 0,
    logoLink: "https://vk.com/video",
    logoType: xn.VK_VIDEO,
    addTimeToLogoLink: !0,
    volumeDefault: 1,
    volumeMinRestore: .05,
    loaderDelay: 500,
    minSubtitlesFontSize: 13,
    autoSubtitlesTimeout: 2e3,
    allowChangingFullscreenTarget: !0,
    trafficSavingLimit: (0, _esnextEsmJs1.VideoQuality).Q_480P,
    episodeMinWidthPc: 8,
    hideThumbTimerAfterTouch: !0,
    sentry: {
        dsn: "https://e349fd23c68f405388980d0868d0ff27@sentry.mvk.com/126",
        sampleRate: .01,
        whiteErrorCategoryList: [],
        blackErrorCategoryList: [],
        whiteErrorIdList: [],
        blackErrorIdList: []
    },
    features: {
        autoplay: !0,
        statistics: !0,
        sentry: !0,
        preload: !0,
        subtitles: !0,
        episodes: !0,
        fullscreen: !0,
        timelinePreview: !0,
        mediaSession: !0,
        annotations: !0,
        pip: !0,
        dpip: !0,
        download: !0,
        liveRewind: !0,
        playbackRate: !0,
        trafficSaving: !0,
        episodesClustering: !0,
        copyVideoLink: !0,
        videoRotate: !0,
        interactiveGraph: !1,
        seekToInteractive: !0,
        interactiveLastFrame: !1,
        interactiveTextPermanent: !0,
        interactiveHideTime: !0,
        interactivePlayPrevChapter: !0,
        thumbTimer: !0,
        hotKeyMapModal: !0,
        hotKeyHelpers: !0,
        saveDebugInfoToFile: !1,
        additionalButtons: !0
    },
    controls: {
        hideTimeout: 500,
        hideTimeoutMobile: 3e3,
        hideTimeoutInitial: 200,
        hideTimeoutFullscreen: 3e3,
        hideTimeoutCursor: 3e3,
        hideTimeoutTooltips: 1e3,
        collapseMobileUnmute: 6e3,
        hide360IconTimeout: 3e3,
        hideHotKeyHelpers: 2e3,
        playbackRateMin: .25,
        playbackRateMax: 2,
        playbackRateStep: .25,
        volumeStepKeyboard: .05,
        volumeStepWheel: .05,
        volumeBarTimeout: 300,
        seekStepKeyboard: 1e4,
        seekStepMobile: 15e3,
        seekStepFrame: 400
    },
    ads: {
        enable: void 0,
        initTimeout: 2e3,
        loadTimeout: 2e3,
        slot: void 0,
        preview: void 0
    }
}, Iu = (i)=>(0, _esnextEsmJs1.fillWithDefault)(i, Vu), Mu = (i)=>Xo("ui-config", i), Yi = ()=>ol("ui-config"), $o = "vk_player_debug_panel_opened", Vr = 300, Ru = "videoplayer", Bu = "videoplayer";
var He;
(function(i) {
    i.ArrowLeft = "ArrowLeft", i.ArrowUp = "ArrowUp", i.ArrowRight = "ArrowRight", i.ArrowDown = "ArrowDown", i.Comma = "Comma", i.Period = "Period", i.Space = "Space", i.KeyM = "KeyM", i.KeyF = "KeyF", i.KeyK = "KeyK", i.KeyL = "KeyL", i.KeyJ = "KeyJ", i.KeyC = "KeyC", i.KeyI = "KeyI", i.Digit1 = "Digit1", i.Digit2 = "Digit2", i.Digit3 = "Digit3", i.Digit4 = "Digit4", i.Digit5 = "Digit5", i.Digit6 = "Digit6", i.Digit7 = "Digit7", i.Digit8 = "Digit8", i.Digit9 = "Digit9", i.Digit0 = "Digit0", i.Numpad1 = "Numpad1", i.Numpad2 = "Numpad2", i.Numpad3 = "Numpad3", i.Numpad4 = "Numpad4", i.Numpad5 = "Numpad5", i.Numpad6 = "Numpad6", i.Numpad7 = "Numpad7", i.Numpad8 = "Numpad8", i.Numpad9 = "Numpad9", i.Numpad0 = "Numpad0", i.ShiftLeft = "ShiftLeft", i.ShiftRight = "ShiftRight", i.Slash = "Slash";
})(He || (He = {}));
const zo = {
    [He.KeyF]: "f",
    [He.KeyK]: "k",
    [He.KeyC]: "c",
    [He.KeyM]: "m"
}, Nu = new Set([
    He.ArrowLeft,
    He.ArrowRight,
    He.KeyL,
    He.KeyJ
]);
var ct;
(function(i) {
    i.PLAY_BUTTON = "PLAY_BUTTON", i.REPLAY_BUTTON = "REPLAY_BUTTON", i.NEXT_BUTTON = "NEXT_BUTTON", i.PREV_BUTTON = "PREV_BUTTON", i.PICTURE_IN_PICTURE = "PICTURE_IN_PICTURE", i.FULLSCREEN_BUTTON = "FULLSCREEN_BUTTON", i.SETTINGS_BUTTON = "SETTINGS_BUTTON", i.LIVE_BUTTON = "LIVE_BUTTON", i.GRAPH_BUTTON = "GRAPH_BUTTON", i.PLAY_PREV_CHAPTER_BUTTON = "PLAY_PREV_CHAPTER_BUTTON", i.SEEK_TO_INTERACTIVE_BUTTON = "SEEK_TO_INTERACTIVE_BUTTON", i.TIMELINE = "TIMELINE", i.VOLUME_BAR = "VOLUME_BAR", i.MUTE_BUTTON = "MUTE_BUTTON", i.SUBTITLES_BUTTON = "SUBTITLES_BUTTON", i.CHROMECAST_BUTTON = "CHROMECAST_BUTTON", i.VK_BUTTON = "VK_BUTTON", i.EPISODE_BUTTON = "EPISODE_BUTTON", i.INCREMENT_PLAYBACK_RATE = "INCREMENT_PLAYBACK_RATE", i.DECREMENT_PLAYBACK_RATE = "DECREMENT_PLAYBACK_RATE";
})(ct || (ct = {}));
const wl = 40, zu = 4, Ou = 60, co = 8, Ir = [
    ct.TIMELINE
], Lo = [
    ...Ir,
    ct.GRAPH_BUTTON
], yl = [
    ...Ir,
    ct.PLAY_BUTTON
], Mr = [
    ...Lo,
    ct.PLAY_BUTTON
];
var Yn;
(function(i) {
    i[i.XS = 320] = "XS", i[i.S = 509] = "S", i[i.M = 599] = "M", i[i.L = 699] = "L";
})(Yn || (Yn = {}));
var Ct;
(function(i) {
    i.XS = "xs", i.S = "s", i.M = "m", i.L = "l", i.XL = "xl";
})(Ct || (Ct = {}));
const $n = {
    [Ct.XS]: 0,
    [Ct.S]: 1,
    [Ct.M]: 2,
    [Ct.L]: 3,
    [Ct.XL]: 4
}, Zn = [];
function un(i, e) {
    return {
        subscribe: De(i, e).subscribe
    };
}
function De(i, e = K) {
    let t;
    const n = new Set;
    function o(a) {
        if (ge(i, a) && (i = a, t)) {
            const r = !Zn.length;
            for (const c of n)c[1](), Zn.push(c, i);
            if (r) {
                for(let c = 0; c < Zn.length; c += 2)Zn[c][0](Zn[c + 1]);
                Zn.length = 0;
            }
        }
    }
    function l(a) {
        o(a(i));
    }
    function s(a, r = K) {
        const c = [
            a,
            r
        ];
        return n.add(c), n.size === 1 && (t = e(o, l) || K), a(i), ()=>{
            n.delete(c), n.size === 0 && t && (t(), t = null);
        };
    }
    return {
        set: o,
        update: l,
        subscribe: s
    };
}
function Jt(i, e, t) {
    const n = !Array.isArray(i), o = n ? [
        i
    ] : i;
    if (!o.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
    const l = e.length < 2;
    return un(t, (s, a)=>{
        let r = !1;
        const c = [];
        let f = 0, h = K;
        const g = ()=>{
            if (f) return;
            h();
            const b = e(n ? c[0] : c, s, a);
            l ? s(b) : h = kn(b) ? b : K;
        }, v = o.map((b, _)=>Ro(b, (V)=>{
                c[_] = V, f &= ~(1 << _), r && g();
            }, ()=>{
                f |= 1 << _;
            }));
        return r = !0, g(), function() {
            xt(v), h(), r = !1;
        };
    });
}
const Du = "prod", ll = "1.1.34", Rr = (i, e, t)=>{
    const n = document.createElement("a");
    n.href = i, n.download = `${e}.${t}`, n.style.display = "none", n.click();
}, Br = Symbol("storeContext"), Nr = Symbol("microStoresContext"), Hu = (i, e)=>{
    Xo(Br, i), Xo(Nr, e);
}, vt = ()=>{
    const i = ol(Br);
    return (0, _esnextEsmJs1.assertNonNullable)(i, "Store context is empty!"), i;
}, zr = ()=>{
    const i = ol(Nr);
    return (0, _esnextEsmJs1.assertNonNullable)(i, "MicroStores context is empty!"), i;
}, pt = (i, e)=>Or(i, i.getValue(), e), Or = (i, e, t)=>un(e, (n)=>{
        const o = i.subscribe((l)=>{
            n(l), t?.(l);
        });
        return ()=>o.unsubscribe();
    }), Fu = (i, e, t)=>{
    const n = i.info, { width: o, height: l } = Qe(t.ui.playerSize), s = n.throughputEstimation$.getValue()?.toFixed(0) ?? 0, a = n.rttEstimation$.getValue()?.toFixed(0) ?? 0, r = n.isAutoQualityEnabled$.getValue() ? "auto" : "manual", c = `${ll} (core: ${(0, _esnextEsmJs.VERSION)}, stat: ${(0, _esnextEsmJs2.VERSION)}, shared: ${(0, _esnextEsmJs1.VERSION)})`, f = Qe(t.state.errorLog$), h = f.length ? `
` + f.map((b, _)=>{
        const V = `${_}) Type: ${b.id}
`, A = `Message: ${b.message} (${b.thrown})
`, S = `Trace: ${b.thrown?.stack}
`;
        return V + A + S;
    }).join(`
`) : void 0, g = t.state.isAudioDisabled ? "disabled" : Qe(t.state.isAudioAvailable$) ? void 0 : "unavailable", v = {
        Version: c,
        Browser: navigator.userAgent,
        Config: i.experimental.tuningConfigName$.getValue().join(", "),
        "United video id": String(t.videoId),
        "Content host": n.hostname$.getValue(),
        "Connection type": n.httpConnectionType$.getValue() + (n.httpConnectionReused$.getValue() ? " (reused)" : ""),
        Throughput: `${s}Kbps @ ${a}ms RTT`,
        Format: n.currentFormat$.getValue(),
        "Available Formats": Object.keys(e.sources).join(", "),
        Quality: `${r} ${n.currentQuality$.getValue()}`,
        "Available qualities": n.availableQualities$.getValue().join(", "),
        Audio: g,
        Position: `${Qe(t.state.positionExact$)}s`,
        State: `${Qe(t.playerPhase)} ${n.playbackState$.getValue()}`,
        "Player size": `${o}x${l}`,
        URL: window.location.href,
        Errors: h
    };
    return Object.entries(v).filter(([b, _])=>_ !== void 0).map(([b, _])=>`${b}: ${_}`).join(`
`);
}, Uu = (i, e, t)=>{
    const n = i.info, { width: o, height: l } = Qe(t.ui.playerSize), s = {
        version: ll,
        viewport: `${o}x${l}`,
        volume: Math.round(Qe(t.state.volume$) * 100)
    };
    s.id = t.videoId, n.currentFormat$.getValue() && (s.provider = n.currentFormat$.getValue()), n.hostname$.getValue() && (s.cdn = n.hostname$.getValue());
    const c = n.intrinsicVideoSize$.getValue();
    c && (s.videoSize = `${c.width}x${c.height}`);
    const f = n.currentBuffer$.getValue();
    f && (s.buffer = Math.max(f.end - Qe(t.state.positionExact$), 0));
    const h = n.throughputEstimation$.getValue();
    h && (s.speed = h);
    const g = n.videoBitrate$.getValue();
    return g && (s.bitrate = g), s;
}, qu = (i, e)=>Rr(i, e, "mp4"), Dr = "vk_player_prefer_traffic_saving_enabled", Hr = "vk_player_preferred_volume", Fr = "vk_player_prefer_volume_mute", sl = "vk_player_preferred_quality", Ur = (i)=>i > 1 ? 1 : i < 0 ? 0 : i, Cl = (i)=>(0, _esnextEsmJs1.safeStorage).set(Hr, Ur(i).toString(10)), qr = ()=>{
    const i = (0, _esnextEsmJs1.safeStorage).get(Hr);
    return (0, _esnextEsmJs1.isNullable)(i) ? void 0 : Ur(parseFloat(i));
}, Wu = (i, e)=>(0, _esnextEsmJs1.safeStorage).set(sl, JSON.stringify({
        videoId: i,
        value: e
    })), Wr = ()=>(0, _esnextEsmJs1.safeStorage).remove(sl), Zu = (i)=>{
    const e = (0, _esnextEsmJs1.safeStorage).get(sl);
    if ((0, _esnextEsmJs1.isNullable)(e)) return;
    const { videoId: t, value: n } = JSON.parse(e);
    if (i !== t) {
        Wr();
        return;
    }
    return n;
}, Zr = (i, e)=>{
    e ? (0, _esnextEsmJs1.safeStorage).set(i, "true") : (0, _esnextEsmJs1.safeStorage).remove(i);
}, jr = (i)=>(0, _esnextEsmJs1.safeStorage).get(i) === "true", Uo = (i)=>Zr(Fr, i), ju = ()=>jr(Fr), Gu = (i)=>Zr(Dr, i), Ku = ()=>jr(Dr);
function Yu(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v, b, _, V, A, S;
    return {
        c () {
            e = I("svg"), t = I("g"), n = I("path"), o = I("path"), l = I("path"), s = I("path"), a = I("path"), r = I("defs"), c = I("filter"), f = I("feFlood"), h = I("feColorMatrix"), g = I("feOffset"), v = I("feGaussianBlur"), b = I("feColorMatrix"), _ = I("feBlend"), V = I("feBlend"), u(n, "fill-rule", "evenodd"), u(n, "clip-rule", "evenodd"), u(n, "d", "M67 9.489A3.489 3.489 0 0 1 63.511 13 3.493 3.493 0 0 1 60 9.489 3.489 3.489 0 0 1 63.511 6 3.484 3.484 0 0 1 67 9.489Zm-5.003 0c0 .834.68 1.514 1.514 1.514.812 0 1.492-.68 1.492-1.514 0-.812-.68-1.492-1.492-1.492-.834 0-1.514.68-1.514 1.492Z"), u(n, "fill", "#fff"), u(o, "d", "M26.86 15.183c1.372-.492 2.534-1.711 2.534-3.61C29.394 8.922 27.185 7 24.07 7c-1.965 0-3.573.784-4.67 2.29l-.108.149a1.333 1.333 0 0 0 .268 1.855c.536.402 1.295.343 1.736-.162.09-.102.164-.19.205-.247.594-.81 1.431-1.306 2.5-1.306 1.534 0 2.604.915 2.604 2.251 0 1.36-1.093 2.275-2.651 2.275h-.583a1.231 1.231 0 0 0 0 2.462h.583c1.744 0 2.907.985 2.907 2.392 0 1.453-1.186 2.462-2.884 2.462-1.296 0-2.201-.552-2.883-1.603a10.181 10.181 0 0 0-.2-.287 1.403 1.403 0 0 0-2.052-.246c-.494.42-.65 1.13-.305 1.68.072.116.146.227.218.322C20.132 23.137 21.678 24 23.999 24c3.28 0 5.628-2.04 5.628-4.924 0-2.204-1.395-3.4-2.767-3.893Z"), u(o, "fill", "#fff"), u(l, "fill-rule", "evenodd"), u(l, "clip-rule", "evenodd"), u(l, "d", "M37.732 12.675c-.465 0-1 .046-1.511.164l2.584-3.74a1.338 1.338 0 1 0-2.203-1.518l-3.753 5.469c-1.418 2.133-1.837 3.822-1.837 5.276 0 3.47 2.558 5.674 6.186 5.674 3.604 0 6.162-2.392 6.162-5.768 0-3.236-2.349-5.557-5.628-5.557Zm-.534 8.746c-1.977 0-3.326-1.267-3.326-3.142 0-1.853 1.349-3.142 3.326-3.142 1.953 0 3.302 1.29 3.302 3.142 0 1.875-1.35 3.142-3.302 3.142ZM58 15.512c0 5.041-2.697 8.441-6.627 8.441-3.93 0-6.628-3.4-6.628-8.441 0-5.042 2.698-8.442 6.628-8.442S58 10.47 58 15.512Zm-10.348 0c0 3.564 1.488 5.862 3.72 5.862 2.233 0 3.721-2.298 3.721-5.862s-1.488-5.862-3.72-5.862c-2.233 0-3.72 2.298-3.72 5.862Z"), u(l, "fill", "#fff"), u(s, "d", "M67 23.5c0-1.318-1.201-3.094-4.199-4.673a1.5 1.5 0 1 1 1.398-2.654C67.452 17.886 70 20.433 70 23.5c0 3.126-2.556 5.554-6.088 7.27-3.633 1.766-8.825 3.062-15.259 3.722a1.5 1.5 0 0 1-.306-2.984c6.248-.641 11.057-1.882 14.253-3.436C65.897 26.47 67 24.8 67 23.5ZM38.879 35H38c-9.64 0-17.447-1.133-22.9-3.018-2.72-.941-4.94-2.099-6.506-3.468C7.019 27.138 6 25.445 6 23.5c0-1.64.785-3.073 1.908-4.255 1.119-1.179 2.66-2.205 4.42-3.086a1.5 1.5 0 1 1 1.343 2.682c-1.584.793-2.794 1.634-3.588 2.47C9.293 22.143 9 22.873 9 23.5c0 .807.407 1.74 1.568 2.755 1.17 1.022 2.996 2.02 5.513 2.892C21.106 30.885 28.55 32 38 32h.879l-1.44-1.44a1.5 1.5 0 0 1 2.122-2.12l3.999 3.998.01.011a1.495 1.495 0 0 1 .317 1.624 1.499 1.499 0 0 1-.326.488l-4 4a1.5 1.5 0 0 1-2.122-2.122L38.88 35Z"), u(s, "fill", "#fff"), u(a, "d", "m7.908 19.245-.181-.173c1.146-1.206 2.714-2.248 4.49-3.137a1.75 1.75 0 1 1 1.566 3.13c-1.57.786-2.752 1.61-3.519 2.418-.762.802-1.014 1.474-1.014 2.017 0 .713.357 1.583 1.483 2.567 1.136.993 2.93 1.978 5.43 2.843 4.99 1.726 12.403 2.84 21.837 2.84h.275l-1.012-1.013a1.75 1.75 0 1 1 2.474-2.474l4 3.998h0l.012.013s0 0 0 0c.162.165.284.354.368.556 0 0 0 0 0 0l-.23.096A1.49 1.49 0 0 1 44 33.5c0 .203-.04.396-.113.573L7.907 19.245Zm0 0-.181-.173C6.576 20.284 5.75 21.775 5.75 23.5c0 2.04 1.07 3.796 2.68 5.202 1.599 1.398 3.85 2.569 6.589 3.516C20.506 34.116 28.343 35.25 38 35.25h.275L7.908 19.245Zm29.824-6.82c-.3 0-.63.018-.965.063l2.244-3.247c.728-1.054-.026-2.491-1.306-2.491-.524 0-1.014.258-1.31.69l-3.752 5.468h0l-.002.003c-1.442 2.17-1.879 3.905-1.879 5.415 0 1.8.665 3.288 1.815 4.324 1.147 1.033 2.757 1.6 4.62 1.6 3.727 0 6.413-2.488 6.413-6.018 0-3.377-2.464-5.807-5.878-5.807Zm25.779.825c2.07 0 3.739-1.67 3.739-3.761 0-2.07-1.67-3.739-3.739-3.739a3.739 3.739 0 0 0-3.761 3.739 3.743 3.743 0 0 0 3.761 3.761Zm0-2.497a1.267 1.267 0 0 1-1.264-1.264c0-.671.566-1.242 1.264-1.242.674 0 1.242.568 1.242 1.242 0 .698-.57 1.264-1.242 1.264Zm-33.634 8.323c0-2.043-1.139-3.272-2.388-3.895 1.208-.629 2.155-1.846 2.155-3.609 0-2.82-2.357-4.822-5.575-4.822-2.04 0-3.724.818-4.871 2.392l-.109.149a1.583 1.583 0 0 0 .32 2.203c.635.476 1.542.411 2.074-.197.09-.103.17-.198.219-.264.553-.755 1.318-1.204 2.297-1.204.72 0 1.309.214 1.715.564.403.347.64.84.64 1.437 0 .608-.242 1.107-.653 1.457-.415.353-1.017.568-1.748.568h-.583a1.481 1.481 0 0 0 0 2.962h.583c.826 0 1.493.233 1.948.61.451.375.709.902.709 1.532 0 .654-.265 1.2-.718 1.586-.455.388-1.116.626-1.916.626-.61 0-1.117-.13-1.548-.375-.432-.245-.801-.614-1.125-1.114a10.48 10.48 0 0 0-.206-.296 1.653 1.653 0 0 0-2.417-.292c-.577.49-.774 1.335-.356 2.004.075.119.152.236.23.339.704.945 1.462 1.652 2.352 2.121.892.47 1.9.692 3.094.692 3.383 0 5.877-2.121 5.877-5.174Zm7.32 2.095c-.934 0-1.7-.299-2.232-.8-.53-.5-.843-1.217-.843-2.092 0-.863.313-1.581.844-2.085.531-.504 1.298-.807 2.232-.807.92 0 1.682.303 2.21.807.529.503.842 1.222.842 2.085 0 .875-.314 1.593-.84 2.093-.53.5-1.29.799-2.212.799Zm14.176 3.032c2.044 0 3.772-.887 4.983-2.425 1.208-1.534 1.894-3.703 1.894-6.266s-.686-4.732-1.894-6.266c-1.211-1.539-2.94-2.426-4.983-2.426-2.044 0-3.773.887-4.984 2.426-1.208 1.534-1.894 3.703-1.894 6.266s.686 4.732 1.894 6.266c1.211 1.538 2.94 2.425 4.984 2.425Zm0-3.08c-1.017 0-1.874-.518-2.487-1.478-.618-.968-.984-2.382-.984-4.133 0-1.752.366-3.166.984-4.133.613-.96 1.47-1.48 2.487-1.48 1.017 0 1.873.52 2.486 1.48.618.967.984 2.381.984 4.133 0 1.751-.366 3.165-.984 4.133-.613.96-1.47 1.479-2.486 1.479Zm11.312-2.075c2.975 1.567 4.065 3.279 4.065 4.452 0 1.148-.983 2.756-4.259 4.347-3.16 1.536-7.937 2.773-14.17 3.412a1.75 1.75 0 0 0 .358 3.482c6.45-.662 11.673-1.963 15.342-3.746 3.551-1.725 6.229-4.216 6.229-7.495 0-3.213-2.661-5.825-5.935-7.548a1.75 1.75 0 1 0-1.63 3.096Z"), u(a, "stroke", "#000"), u(a, "stroke-opacity", ".12"), u(a, "stroke-width", ".5"), u(a, "stroke-linecap", "round"), u(a, "stroke-linejoin", "round"), u(t, "filter", "url(#a)"), u(f, "flood-opacity", "0"), u(f, "result", "BackgroundImageFix"), u(h, "in", "SourceAlpha"), u(h, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"), u(h, "result", "hardAlpha"), u(v, "stdDeviation", "2.5"), u(b, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"), u(_, "in2", "BackgroundImageFix"), u(_, "result", "effect1_dropShadow_618_12297"), u(V, "in", "SourceGraphic"), u(V, "in2", "effect1_dropShadow_618_12297"), u(V, "result", "shape"), u(c, "id", "a"), u(c, "x", ".5"), u(c, "y", ".5"), u(c, "width", "75"), u(c, "height", "44"), u(c, "filterUnits", "userSpaceOnUse"), u(c, "color-interpolation-filters", "sRGB"), u(e, "width", "76"), u(e, "height", "45"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "data-testid", "video-360-icon"), u(e, "aria-hidden", A = !i[0] || null), u(e, "aria-label", S = i[0] || null);
        },
        m (P, N) {
            C(P, e, N), d(e, t), d(t, n), d(t, o), d(t, l), d(t, s), d(t, a), d(e, r), d(r, c), d(c, f), d(c, h), d(c, g), d(c, v), d(c, b), d(c, _), d(c, V);
        },
        p (P, [N]) {
            N & 1 && A !== (A = !P[0] || null) && u(e, "aria-hidden", A), N & 1 && S !== (S = P[0] || null) && u(e, "aria-label", S);
        },
        i: K,
        o: K,
        d (P) {
            P && y(e);
        }
    };
}
function Qu(i, e, t) {
    let { ariaLabel: n = "" } = e;
    return i.$$set = (o)=>{
        "ariaLabel" in o && t(0, n = o.ariaLabel);
    }, [
        n
    ];
}
class Gr extends ke {
    constructor(e){
        super(), _e(this, e, Qu, Yu, ge, {
            ariaLabel: 0
        });
    }
}
const Xu = {
    auto_quality_invariant: "\u0410\u0432\u0442\u043E",
    auto_quality: "\u0410\u0432\u0442\u043E ({actual})",
    auto_quality_option: "\u0410\u0432\u0442\u043E",
    menu_quality: "\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",
    menu_traffic_saving: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445",
    menu_playback_rate: "\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",
    menu_report: "\u0421\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0435",
    menu_pip: "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0432 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0435",
    menu_copy_video_link: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0432\u0438\u0434\u0435\u043E",
    menu_copy_video_link_with_timestamp: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043A\u0430\u0434\u0440",
    menu_video_rotate: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
    menu_chromecast: "Chromecast \u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u044F",
    menu_copy_debug: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438",
    menu_save_debug: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438",
    menu_debug_overlay: "\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    pip_dummy_title: "\u0412\u0438\u0434\u0435\u043E \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0432 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0435",
    submenu_quality: "\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",
    submenu_playback_rate: "\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",
    submenu_settings: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    submenu_traffic_saving: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445",
    mobile_unmute: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A",
    playing_ads: "\u0420\u0435\u043A\u043B\u0430\u043C\u0430 {timeleft}",
    skip_ads_now: "\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u0443",
    skip_ads_after: "\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u0443 \u0447\u0435\u0440\u0435\u0437 {time}\u0441",
    visit_advertiser: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442",
    aria_timeline: "\u041F\u043E\u043B\u0437\u0443\u043D\u043E\u043A \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0448\u043A\u0430\u043B\u044B",
    aria_timeline_value: "{position} (\u043E\u0431\u0449\u0430\u044F \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C {duration}",
    aria_open_settings: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0432\u0438\u0434\u0435\u043E\u043F\u043B\u0435\u0435\u0440\u0430",
    doubletap_seek_step: "{seconds} \u0441\u0435\u043A\u0443\u043D\u0434",
    playback_rate_1: "\u041E\u0431\u044B\u0447\u043D\u0430\u044F",
    playback_rate: "{multiplier}x",
    video360: "\u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u043E\u0435 \u0432\u0438\u0434\u0435\u043E",
    subtitles_caption: "\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044B",
    subtitles_auto: "{language} (\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435)",
    subtitles_off: "\u0412\u044B\u043A\u043B.",
    subtitles_auto_caption: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044B",
    subtitles_turn_on: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044B",
    subtitles_turn_off: "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044B",
    traffic_saving_off: "\u041E\u0442\u043A\u043B.",
    traffic_saving_on: "\u0412\u043A\u043B.",
    traffic_saving_disable: "\u041E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430",
    traffic_saving_enable: "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0430",
    traffic_saving_helper_text: "\u041F\u0440\u0438 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0438\u0434\u0435\u043E \u0431\u0443\u0434\u0435\u0442 \u0441\u043D\u0438\u0436\u0435\u043D\u043E \u0434\u043B\u044F \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0438 \u0442\u0440\u0430\u0444\u0438\u043A\u0430",
    tooltip_button_disabled: "\u041A\u043D\u043E\u043F\u043A\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430",
    tooltip_previous: "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043E",
    tooltip_restart: "\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E",
    tooltip_play: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C",
    tooltip_pause: "\u041F\u0430\u0443\u0437\u0430",
    tooltip_next: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043E",
    tooltip_interactive_go_back: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0433\u043B\u0430\u0432\u0435",
    tooltip_interactive_go_back_disabled: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430",
    tooltip_interactive_go_back_disabled_first: "\u0412\u044B \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043F\u0435\u0440\u0432\u0443\u044E \u0433\u043B\u0430\u0432\u0443",
    tooltip_interactive_go_back_disabled_limit: "\u041B\u0438\u043C\u0438\u0442 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u043E\u0432 \u0438\u0441\u0447\u0435\u0440\u043F\u0430\u043D",
    tooltip_interactive_seek: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u0443",
    tooltip_interactive_graph_off: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u0443 \u0441\u044E\u0436\u0435\u0442\u0430",
    tooltip_interactive_graph_on: "\u0421\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u0443 \u0441\u044E\u0436\u0435\u0442\u0430",
    tooltip_live: "\u041F\u0435\u0440\u0435\u043C\u043E\u0442\u0430\u0442\u044C \u043D\u0430 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043B\u0430\u0439\u0432",
    tooltip_episodes: "\u042D\u043F\u0438\u0437\u043E\u0434\u044B",
    tooltip_volume: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A",
    tooltip_volume_muted: "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A",
    tooltip_subtitles_off: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044B",
    tooltip_subtitles_on: "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044B",
    tooltip_settings_off: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    tooltip_settings_on: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    tooltip_fullscreen_off: "\u041D\u0430 \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D",
    tooltip_fullscreen_on: "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430",
    tooltip_chromecast_off: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C Chromecast",
    tooltip_chromecast_on: "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C Chromecast",
    tooltip_episode_finished: "\u0412\u044B \u0443\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u0441\u0432\u043E\u0439 \u0432\u044B\u0431\u043E\u0440",
    tooltip_episode_unfinished: "\u041D\u0435 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u043E",
    tooltip_disabled_when_interactive: "\u041A\u043D\u043E\u043F\u043A\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u0430",
    tooltip_disabled_when_graph_on: "\u041A\u043D\u043E\u043F\u043A\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u043A\u0430\u0440\u0442\u044B",
    tooltip_vk_logo: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 VK \u0412\u0438\u0434\u0435\u043E",
    tooltip_vk_video_logo: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 VK \u0412\u0438\u0434\u0435\u043E",
    download_video_caption: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0432\u0438\u0434\u0435\u043E",
    hotkey_helper_current_volume: "{value} %",
    hotkey_map_modal_title: "\u0411\u044B\u0441\u0442\u0440\u044B\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438",
    hotkey_map_modal_close_btn_text: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    hotkey_map_group_title_common: "\u041E\u0431\u0449\u0438\u0435",
    hotkey_map_group_title_playback: "\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435",
    hotkey_map_group_title_subtitles: "\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044B",
    hotkey_map_group_title_episodes: "\u042D\u043F\u0438\u0437\u043E\u0434\u044B",
    hotkey_map_item_mute_description: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0438\u043B\u0438 \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A",
    hotkey_map_item_mute_value: "m",
    hotkey_map_item_volume_up_description: "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0433\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C",
    hotkey_map_item_volume_up_value: "\u0421\u0442\u0440\u0435\u043B\u043A\u0430 \u0432\u0432\u0435\u0440\u0445",
    hotkey_map_item_volume_down_description: "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0433\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C",
    hotkey_map_item_volume_down_value: "\u0421\u0442\u0440\u0435\u043B\u043A\u0430 \u0432\u043D\u0438\u0437",
    hotkey_map_item_pip_description: "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0438\u043B\u0438 \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043C\u0438\u043D\u0438-\u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0442\u0435\u043B\u044C",
    hotkey_map_item_pip_value: "i",
    hotkey_map_item_full_screen_description: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0438\u043B\u0438 \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
    hotkey_map_item_full_screen_value: "f",
    hotkey_map_item_show_hotkey_map_description: "\u0421\u043A\u0440\u044B\u0442\u044C \u0438\u043B\u0438 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0433\u043E\u0440\u044F\u0447\u0438\u0445 \u043A\u043B\u0430\u0432\u0438\u0448",
    hotkey_map_item_show_hotkey_map_value: "Shift + ?",
    hotkey_map_item_play_toggle_description: "\u041F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0438\u043B\u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435",
    hotkey_map_item_play_toggle_value: "\u041F\u0440\u043E\u0431\u0435\u043B (\u0438\u043B\u0438 k)",
    hotkey_map_item_seek_backward_description: "\u041F\u0435\u0440\u0435\u043C\u043E\u0442\u0430\u0442\u044C \u0440\u043E\u043B\u0438\u043A \u043D\u0430 10 \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434",
    hotkey_map_item_seek_backward_value: "\u0421\u0442\u0440\u0435\u043B\u043A\u0430 \u0432\u043B\u0435\u0432\u043E (\u0438\u043B\u0438 j)",
    hotkey_map_item_seek_forward_description: "\u041F\u0435\u0440\u0435\u043C\u043E\u0442\u0430\u0442\u044C \u0440\u043E\u043B\u0438\u043A \u043D\u0430 10 \u0441\u0435\u043A\u0443\u043D\u0434 \u0432\u043F\u0435\u0440\u0451\u0434",
    hotkey_map_item_seek_forward_value: "\u0421\u0442\u0440\u0435\u043B\u043A\u0430 \u0432\u043F\u0440\u0430\u0432\u043E (\u0438\u043B\u0438 l)",
    hotkey_map_item_fast_seek_backward_description: "\u0423\u0441\u043A\u043E\u0440\u0435\u043D\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u043C\u043E\u0442\u043A\u0430 \u043D\u0430\u0437\u0430\u0434",
    hotkey_map_item_fast_seek_backward_value: "Shift + \u0421\u0442\u0440\u0435\u043B\u043A\u0430 \u0432\u043B\u0435\u0432\u043E",
    hotkey_map_item_fast_seek_forward_description: "\u0423\u0441\u043A\u043E\u0440\u0435\u043D\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u043C\u043E\u0442\u043A\u0430 \u0432\u043F\u0435\u0440\u0451\u0434",
    hotkey_map_item_fast_seek_forward_value: "Shift + \u0421\u0442\u0440\u0435\u043B\u043A\u0430 \u0432\u043F\u0440\u0430\u0432\u043E",
    hotkey_map_item_rate_down_description: "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F",
    hotkey_map_item_rate_down_value: "< (Shift + ,)",
    hotkey_map_item_rate_up_description: "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F",
    hotkey_map_item_rate_up_value: "> (Shift + .)",
    hotkey_map_item_prev_frame_description: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u043C\u0443 \u043A\u0430\u0434\u0440\u0443 <br />(\u043A\u043E\u0433\u0434\u0430 \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E)",
    hotkey_map_item_prev_frame_value: ",",
    hotkey_map_item_next_frame_description: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C\u0443 \u043A\u0430\u0434\u0440\u0443 <br />(\u043A\u043E\u0433\u0434\u0430 \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E)",
    hotkey_map_item_next_frame_value: ".",
    hotkey_map_item_jump_seek_description: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u043E\u043C\u0443 \u043C\u043E\u043C\u0435\u043D\u0442\u0443 \u0432\u0438\u0434\u0435\u043E <br />(\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u0440\u0438 \u043D\u0430\u0436\u0430\u0442\u0438\u0438 \u043D\u0430 \u0446\u0438\u0444\u0440\u0443 \xab7\xbb \u0440\u043E\u043B\u0438\u043A \u0431\u0443\u0434\u0435\u0442 \u043F\u0435\u0440\u0435\u043C\u043E\u0442\u0430\u043D \u0434\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043E\u0442\u043C\u0435\u0442\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 70% \u043E\u0442 \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0432\u0438\u0434\u0435\u043E)",
    hotkey_map_item_jump_seek_value: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9",
    hotkey_map_item_subtitles_toggle_description: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0438\u043B\u0438 \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044B",
    hotkey_map_item_subtitles_toggle_value: "c",
    hotkey_map_item_prev_episode_description: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u043C\u0443 \u044D\u043F\u0438\u0437\u043E\u0434\u0443",
    hotkey_map_item_prev_episode_pc_value: "Ctrl + \u0421\u0442\u0440\u0435\u043B\u043A\u0430 \u0432\u043B\u0435\u0432\u043E",
    hotkey_map_item_prev_episode_mac_value: "Option + \u0421\u0442\u0440\u0435\u043B\u043A\u0430 \u0432\u043B\u0435\u0432\u043E",
    hotkey_map_item_next_episode_description: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C\u0443 \u044D\u043F\u0438\u0437\u043E\u0434\u0443",
    hotkey_map_item_next_episode_pc_value: "Ctrl + \u0421\u0442\u0440\u0435\u043B\u043A\u0430 \u0432\u043F\u0440\u0430\u0432\u043E",
    hotkey_map_item_next_episode_mac_value: "Option + \u0421\u0442\u0440\u0435\u043B\u043A\u0430 \u0432\u043F\u0440\u0430\u0432\u043E",
    waiting_live_day_value: "\u0434\u043D",
    waiting_live_hour_value: "\u0447",
    waiting_live_minute_value: "\u043C\u0438\u043D",
    waiting_live_second_value: "\u0441\u0435\u043A",
    waiting_live_colon: ":",
    waiting_live_upcoming_title: "\u0422\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u044F \u0435\u0449\u0435 \u043D\u0435 \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C",
    waiting_live_timer_title: "\u0414\u043E \u043D\u0430\u0447\u0430\u043B\u0430 \u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u0438 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C",
    waiting_record_title: "\u0422\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0430\u0441\u044C, \u0438 \u0437\u0430\u043F\u0438\u0441\u044C \u0441\u043A\u043E\u0440\u043E \u0441\u0442\u0430\u043D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430",
    aria_label_spherical_control: "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440 \u0434\u043B\u044F \u0441\u0444\u0435\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0432\u0438\u0434\u0435\u043E. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u0438\u0434\u0435\u043E.",
    aria_label_new_tab_alert: "\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435.",
    aria_label_menu_quality: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E \u0432\u044B\u0431\u043E\u0440\u0430 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430. \u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E {actual}",
    aria_label_menu_rate: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E \u0432\u044B\u0431\u043E\u0440\u0430 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438. \u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C {actual}",
    aria_label_menu_traffic_saving: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443 \u0440\u0435\u0436\u0438\u043C\u0430 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445. \u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 {actual}",
    aria_label_menu_subtitle: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E \u0432\u044B\u0431\u043E\u0440\u0430 \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u043E\u0432. \u0422\u0435\u043A\u0443\u0449\u0438\u0435 \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044B {actual}",
    aria_label_menu_download: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0432\u0438\u0434\u0435\u043E",
    aria_label_menu_debug_overlay_enable: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438",
    aria_label_menu_debug_overlay_disable: "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438",
    aria_label_menu_rotate: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0438\u0434\u0435\u043E \u043D\u0430 90 \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432",
    aria_label_submenu_back: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u043C\u0435\u043D\u044E \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A",
    aria_label_submenu_quality_select_quality: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E {quality}",
    aria_label_submenu_rate_select_rate: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C {rate}",
    aria_label_submenu_traffic_saving_off: "\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445",
    aria_label_submenu_traffic_saving_on: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445",
    aria_label_submenu_subtitle_select_subtitle: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044B {subtitle}"
}, Ju = {
    mobile_unmute: "Unmute",
    auto_quality_invariant: "Auto",
    auto_quality: "Auto ({actual})",
    auto_quality_option: "Auto",
    menu_quality: "Quality",
    menu_playback_rate: "Playback rate",
    menu_traffic_saving: "Data saving",
    menu_report: "Report a problem",
    menu_pip: "Picture in picture",
    menu_copy_video_link: "Copy video link",
    menu_copy_video_link_with_timestamp: "Copy link with timestamp",
    menu_video_rotate: "Rotate",
    menu_chromecast: "Chromecast stream",
    menu_copy_debug: "Copy debug info",
    menu_save_debug: "Save debug info",
    menu_debug_overlay: "Tech stats",
    pip_dummy_title: "Video plays in picture-in-picture mode",
    submenu_quality: "Quality",
    submenu_playback_rate: "Playback rate",
    submenu_traffic_saving: "Data saving",
    submenu_settings: "Settings",
    playing_ads: "Ads {timeleft}",
    skip_ads_after: "Skip ads",
    skip_ads_now: "Ads can be skipped in {time}s",
    visit_advertiser: "Visit site",
    aria_timeline: "Time scale slider",
    aria_timeline_value: "{position} out of {duration}",
    aria_open_settings: "Open video player settings",
    doubletap_seek_step: "{seconds} seconds",
    playback_rate_1: "Normal",
    playback_rate: "{multiplier}x",
    video360: "spherical video",
    subtitles_caption: "Subtitles",
    subtitles_auto: "{language} (Auto-generated)",
    subtitles_off: "Off",
    subtitles_auto_caption: "Auto subtitles",
    subtitles_turn_on: "Turn on subtitles",
    subtitles_turn_off: "Turn off subtitles",
    traffic_saving_off: "Off",
    traffic_saving_on: "On",
    traffic_saving_disable: "Disabled",
    traffic_saving_enable: "Enabled",
    traffic_saving_helper_text: "When turned on the video quality will be reduced to save data",
    tooltip_button_disabled: "Button disabled",
    tooltip_previous: "Previous video",
    tooltip_restart: "Watch again",
    tooltip_play: "Play",
    tooltip_pause: "Pause",
    tooltip_next: "Next video",
    tooltip_interactive_go_back: "Back to previous chapter",
    tooltip_interactive_go_back_disabled: "Interactive history unavailable",
    tooltip_interactive_go_back_disabled_first: "You're watching the first chapter",
    tooltip_interactive_go_back_disabled_limit: "Go-back limit exceeded",
    tooltip_interactive_seek: "Go to interactive",
    tooltip_interactive_graph_off: "Show interactive graph",
    tooltip_interactive_graph_on: "Hide interactive graph",
    tooltip_live: "Go to the live edge",
    tooltip_episodes: "Episodes",
    tooltip_volume: "Turn volume off",
    tooltip_volume_muted: "Turn volume on",
    tooltip_subtitles_off: "Turn subtitles on",
    tooltip_subtitles_on: "Turn subtitles off",
    tooltip_settings_off: "Open settings",
    tooltip_settings_on: "Close settings",
    tooltip_fullscreen_off: "Enter fullscreen mode",
    tooltip_fullscreen_on: "Exit fullscreen mode",
    tooltip_chromecast_off: "Turn Chromecast on",
    tooltip_chromecast_on: "Turn Chromecast off",
    tooltip_episode_finished: "You have already viewed interactive episode",
    tooltip_episode_unfinished: "Interactive episode not finished",
    tooltip_disabled_when_interactive: "Button is disabled during interactive video",
    tooltip_disabled_when_graph_on: "Button is disabled when graph is opened",
    tooltip_vk_logo: "Open in VK Video",
    tooltip_vk_video_logo: "Go to VK Video",
    download_video_caption: "Download video",
    hotkey_helper_current_volume: "{value} %",
    hotkey_map_modal_title: "Keyboard shortcuts",
    hotkey_map_modal_close_btn_text: "Close",
    hotkey_map_group_title_common: "Common",
    hotkey_map_group_title_playback: "Playback",
    hotkey_map_group_title_subtitles: "Subtitles",
    hotkey_map_group_title_episodes: "Episodes",
    hotkey_map_item_mute_description: "Toggle mute",
    hotkey_map_item_mute_value: "m",
    hotkey_map_item_volume_up_description: "Increase volume",
    hotkey_map_item_volume_up_value: "Arrow up",
    hotkey_map_item_volume_down_description: "Decrease volume",
    hotkey_map_item_volume_down_value: "Arrow down",
    hotkey_map_item_pip_description: "Toggle miniplayer",
    hotkey_map_item_pip_value: "i",
    hotkey_map_item_full_screen_description: "Toggle full screen",
    hotkey_map_item_full_screen_value: "f",
    hotkey_map_item_show_hotkey_map_description: "Hide or show list of hotkeys",
    hotkey_map_item_show_hotkey_map_value: "Shift + ?",
    hotkey_map_item_play_toggle_description: "Toggle play/pause",
    hotkey_map_item_play_toggle_value: "Space (or k)",
    hotkey_map_item_seek_backward_description: "Rewind 10 seconds",
    hotkey_map_item_seek_backward_value: "Arrow left (or j)",
    hotkey_map_item_seek_forward_description: "Forward 10 seconds",
    hotkey_map_item_seek_forward_value: "Arrow right (or l)",
    hotkey_map_item_fast_seek_backward_description: "Fast rewind",
    hotkey_map_item_fast_seek_backward_value: "Shift + Arrow left",
    hotkey_map_item_fast_seek_forward_description: "Fast forward",
    hotkey_map_item_fast_seek_forward_value: "Shift + Arrow right",
    hotkey_map_item_rate_down_description: "Decrease playback rate",
    hotkey_map_item_rate_down_value: "< (Shift + ,)",
    hotkey_map_item_rate_up_description: "Increase playback rate",
    hotkey_map_item_rate_up_value: "> (Shift + .)",
    hotkey_map_item_prev_frame_description: "Previous frame (while paused)",
    hotkey_map_item_prev_frame_value: ",",
    hotkey_map_item_next_frame_description: "Next frame (while paused)",
    hotkey_map_item_next_frame_value: ".",
    hotkey_map_item_jump_seek_description: "Seek to specific point in the video (7 advances to 70% of duration)",
    hotkey_map_item_jump_seek_value: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9",
    hotkey_map_item_subtitles_toggle_description: "Toggle captions ON/OFF",
    hotkey_map_item_subtitles_toggle_value: "c",
    hotkey_map_item_prev_episode_description: "Seek to previous episode",
    hotkey_map_item_prev_episode_pc_value: "Ctrl + Arrow left",
    hotkey_map_item_prev_episode_mac_value: "Option + Arrow left",
    hotkey_map_item_next_episode_description: "Seek to next episode",
    hotkey_map_item_next_episode_pc_value: "Ctrl + Arrow right",
    hotkey_map_item_next_episode_mac_value: "Option + Arrow right",
    waiting_live_day_value: "d",
    waiting_live_hour_value: "h",
    waiting_live_minute_value: "min",
    waiting_live_second_value: "sec",
    waiting_live_colon: ":",
    waiting_live_upcoming_title: "The broadcast hasn't started yet",
    waiting_live_timer_title: "Before the start of the broadcast left",
    waiting_record_title: "The broadcast has ended and the recording will be available soon",
    aria_label_spherical_control: "Spherical video control. Use the arrow keys to pan the video.",
    aria_label_new_tab_alert: "Opens in a new tab.",
    aria_label_menu_quality: "Open the quality selection menu. Current quality {actual}",
    aria_label_menu_rate: "Open the speed selection menu. Current rate {actual}",
    aria_label_menu_traffic_saving: "Open the data saving mode setting. Current state {actual}",
    aria_label_menu_subtitle: "Open the subtitle selection menu. Current subtitles {actual}",
    aria_label_menu_download: "Download video",
    aria_label_menu_debug_overlay_enable: "Enable display of technical information",
    aria_label_menu_debug_overlay_disable: "Disable display of technical information",
    aria_label_menu_rotate: "Rotate video 90 degrees",
    aria_label_submenu_back: "Return to settings menu",
    aria_label_submenu_quality_select_quality: "Select quality {quality}",
    aria_label_submenu_rate_select_rate: "Select rate {rate}",
    aria_label_submenu_traffic_saving_off: "Disable data saving mode",
    aria_label_submenu_traffic_saving_on: "Enable data saving mode",
    aria_label_submenu_subtitle_select_subtitle: "Select subtitles {subtitle}"
}, bn = new Map;
bn.set((0, _esnextEsmJs1.InterfaceLanguage).EN, Ju);
bn.set((0, _esnextEsmJs1.InterfaceLanguage).RU, Xu);
const Kr = new Map, Pl = ({ language: i, pack: e, fallback: t })=>{
    if (bn.has(i)) {
        const n = bn.get(i);
        bn.set(i, {
            ...n,
            ...e
        });
    } else bn.set(i, e);
    Kr.set(i, t);
}, Sl = (i)=>bn.has(i), Yr = (i, e, t, n)=>{
    let l = bn.get(i)?.[e];
    if ((0, _esnextEsmJs1.isNullable)(l)) {
        const s = Kr.get(i) ?? n;
        l = (s ? bn.get(s) : void 0)?.[e];
    }
    return (0, _esnextEsmJs1.isNullable)(l) ? e + Object.values(t ?? {}).join(" ") : t ? l.replaceAll(/{(\w+?)}/g, (s, a)=>t[a] ?? "") : l;
}, U = (i, e)=>{
    const { interfaceLanguage$: t } = vt(), n = Qe(t), o = Yi();
    return Yr(n, i, e, o.defaultLanguage);
};
var Io;
(function(i) {
    i.fatal = "fatal", i.error = "error", i.warning = "warning", i.log = "log", i.info = "info", i.debug = "debug", i.critical = "critical";
})(Io || (Io = {}));
const xu = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, $u = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i, ec = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, Co = "?", tc = "X-Sentry-Auth", ic = /^(?:(\w+):)\/\/(?:([\w-]+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function nc(i) {
    if (!i.stack) return null;
    const e = [], t = i.stack.split(`
`);
    let n, o;
    for(let l = 0; l < t.length; ++l){
        if (n = xu.exec(t[l])) o = {
            filename: n[2] && n[2].indexOf("address at ") === 0 ? n[2].substr(11) : n[2],
            function: n[1] || Co,
            lineno: n[3] ? +n[3] : null,
            colno: n[4] ? +n[4] : null
        };
        else if (n = ec.exec(t[l])) o = {
            filename: n[2],
            function: n[1] || Co,
            lineno: +n[3],
            colno: n[4] ? +n[4] : null
        };
        else if (n = $u.exec(t[l])) l === 0 && !n[5] && i.columnNumber !== void 0 && (e[0].column = i.columnNumber + 1), o = {
            filename: n[3],
            function: n[1] || Co,
            lineno: n[4] ? +n[4] : null,
            colno: n[5] ? +n[5] : null
        };
        else continue;
        !o.function && o.lineno && (o.function = Co), e.push(o);
    }
    return e.length ? {
        value: Qr(i),
        type: i.name,
        stacktrace: {
            frames: e.reverse()
        }
    } : null;
}
function Qr(i) {
    return (i && i.message || "No error message").split(`
`).filter((t)=>!!t)[0];
}
function oc(i) {
    try {
        const e = nc(i);
        if (e) return e;
    } catch  {}
    return {
        value: Qr(i),
        type: i && i.name,
        stacktrace: {
            frames: []
        }
    };
}
function lc() {
    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (i)=>{
        const e = Math.random() * 16 | 0;
        return (i === "x" ? e : e & 3 | 8).toString(16);
    });
}
class sc {
    constructor(e){
        if (e && e.dsn) {
            const t = ic.exec(e.dsn), n = t ? t.slice(1) : [], o = n[5].split("/"), l = o.slice(0, -1).join("/");
            this.apiUrl = n[0] + "://" + n[3] + (n[4] ? ":" + n[4] : "") + (l ? "/" + l : "") + "/api/" + o.pop() + "/store/", this.authHeader = "Sentry sentry_version=7,sentry_key=" + n[1] + (n[2] ? ",sentry_secret=" + n[2] : "");
        }
        this.environment = e && e.environment;
    }
    prepare(e) {
        return {
            ...this.getRequestBlank(),
            exception: {
                values: [
                    oc(e)
                ]
            }
        };
    }
    report(e) {
        this.send(this.prepare(e));
    }
    send(e) {
        !this.apiUrl || !e || this.createRequest(e);
    }
    createRequest(e) {
        const t = new XMLHttpRequest;
        t.open("POST", this.apiUrl, !0), t.setRequestHeader("Content-type", "application/json"), t.setRequestHeader(tc, this.authHeader || ""), t.send(JSON.stringify(e));
    }
    getRequestBlank() {
        return {
            platform: "javascript",
            event_id: lc(),
            sdk: {
                name: "micro-sentry.javascript.core",
                version: "0.0.0"
            },
            timestamp: Date.now() / 1e3,
            environment: this.environment
        };
    }
}
function Tl(i, e) {
    return Object.prototype.toString.call(e) === "[object RegExp]" ? e.test(i) : typeof e == "string" ? i.indexOf(e) !== -1 : !1;
}
function ac() {
    return window;
}
class al extends sc {
    constructor(e, t = ac()){
        super(e), this.options = e, this.window = t, this.destroyed = !1, this._state = {};
        const { plugins: n = [], beforeSend: o = (c)=>c, beforeBreadcrumb: l = (c)=>c, blacklistUrls: s = [], ignoreErrors: a = [], release: r } = this.options || {};
        this.plugins = n.map((c)=>new c(this)), this.beforeSend = o, this.beforeBreadcrumb = l, this.blacklistUrls = s, this.ignoreErrors = a, this.release = r;
    }
    get state() {
        return this._state;
    }
    clearState() {
        this._state = {};
    }
    setTags(e) {
        return this.setKeyState("tags", {
            ...e
        }), this;
    }
    setTag(e, t) {
        return this.extendState({
            tags: {
                [e]: t
            }
        }), this;
    }
    setExtra(e, t) {
        return this.extendState({
            extra: {
                [e]: t
            }
        }), this;
    }
    setExtras(e) {
        return this.setKeyState("extra", {
            ...e
        }), this;
    }
    setUser(e) {
        return this.setKeyState("user", {
            ...e
        }), this;
    }
    clone() {
        const e = new al({
            ...this.options,
            plugins: []
        });
        return e.extendState(this.state), e;
    }
    withScope(e) {
        const t = this.clone();
        e(t), t.destroy(), this.setBreadcrumbs(void 0);
    }
    addBreadcrumb(e) {
        this.extendState({
            breadcrumbs: [
                {
                    timestamp: Date.now() / 1e3,
                    ...this.beforeBreadcrumb(e)
                }
            ]
        });
    }
    setBreadcrumbs(e) {
        this.setKeyState("breadcrumbs", e);
    }
    captureMessage(e, t) {
        this.send({
            ...this.getRequestBlank(),
            message: e,
            level: t
        });
    }
    destroy() {
        this.destroyed = !0, this.plugins.forEach((e)=>{
            e.destroy && e.destroy();
        });
    }
    isIgnoredError(e) {
        return this.ignoreErrors.length ? this.getPossibleEventMessages(e).some((t)=>this.ignoreErrors.some((n)=>Tl(t, n))) : !1;
    }
    getRequestBlank() {
        return {
            request: {
                url: this.window.location.toString(),
                headers: {
                    "User-Agent": this.window.navigator.userAgent
                }
            },
            ...super.getRequestBlank(),
            sdk: {
                name: "micro-sentry.javascript.browser",
                version: "0.0.0"
            },
            ...this.state
        };
    }
    send(e) {
        this.destroyed || this.isDeniedUrl(e) || this.isIgnoredError(e) || (super.send(this.beforeSend({
            release: this.release,
            ...e
        })), this.setBreadcrumbs(void 0));
    }
    getPossibleEventMessages(e) {
        if (e.message) return [
            e.message
        ];
        if (e.exception) try {
            const { type: t = "", value: n = "" } = e.exception.values && e.exception.values[0] || {};
            return [
                `${n}`,
                `${t}: ${n}`
            ];
        } catch  {
            return [];
        }
        return [];
    }
    isDeniedUrl(e) {
        if (!this.blacklistUrls.length) return !1;
        const t = this.getEventFilterUrl(e);
        return t ? this.blacklistUrls.some((n)=>Tl(t, n)) : !1;
    }
    getEventFilterUrl(e) {
        try {
            if (e.exception) {
                const t = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames;
                return t && t[t.length - 1].filename || null;
            }
            return null;
        } catch  {
            return null;
        }
    }
    extendState(e) {
        this._state = Object.keys(e).reduce((t, n)=>{
            const o = this._state[n], l = Array.isArray(o) ? o : null, s = e[n], a = Array.isArray(s) ? s : null;
            return {
                ...t,
                [n]: l || a ? [
                    ...l || [],
                    ...a || []
                ] : {
                    ...typeof o != "string" ? o : {},
                    ...typeof s != "string" ? s : {}
                }
            };
        }, this._state);
    }
    setKeyState(e, t) {
        this._state[e] = t;
    }
}
let Po = null;
class el {
    sentrySubscription;
    options;
    version;
    context;
    sentryClient;
    constructor(e, t, n = {}){
        !Po && e.dsn && (this.sentryClient = new al({
            dsn: e.dsn,
            environment: t.env
        }), this.version = t.version, this.sentrySubscription = new (0, _esnextEsmJs1.Subscription), this.options = e, this.context = n, Po = this);
    }
    destroy() {
        this.sentryClient?.destroy(), this.sentrySubscription?.unsubscribe(), Po = null;
    }
    logIError(e, t = !1) {
        e.thrown && this.report(e.thrown, {
            fatal: t,
            errorType: e.id,
            category: e.category
        }, {
            message: e.message,
            errorData: e.data
        });
    }
    report(e, t = {}, n = {}) {
        const { sentryClient: o, context: l, options: s } = this, { sampleRate: a = 0, whiteErrorIdList: r, whiteErrorCategoryList: c = [], blackErrorIdList: f, blackErrorCategoryList: h } = s, { errorType: g, category: v } = t;
        if ((0, _esnextEsmJs1.isNonNullable)(v) && h.includes(v) || (0, _esnextEsmJs1.isNonNullable)(g) && f.includes(g)) return;
        if (Math.random() <= a || (0, _esnextEsmJs1.isNonNullable)(v) && c.includes(v) || (0, _esnextEsmJs1.isNonNullable)(g) && r.includes(g)) {
            Object.keys(t).length && o.setTags({
                version: this.version,
                ...t
            }), (Object.keys(l).length || Object.keys(n).length) && o.setExtras({
                ...l,
                ...n
            });
            try {
                g && o.captureMessage(g, t.fatal ? Io.fatal : Io.error), o.report(e);
            } catch (_) {
                console.error(_);
            }
        }
    }
    static getInstance() {
        return Po;
    }
}
var Xn;
(function(i) {
    i.AUTO = "auto";
})(Xn || (Xn = {}));
var Ne;
(function(i) {
    i.Thumb = "thumb", i.Video = "video", i.Ads = "ads", i.Crashed = "crashed", i.WaitingLive = "waitingLive", i.WaitingRecord = "waitingRecord";
})(Ne || (Ne = {}));
var gn;
(function(i) {
    i.Preroll = "preroll", i.Midroll = "midroll", i.Postroll = "postroll";
})(gn || (gn = {}));
var Ot;
(function(i) {
    i.INACTIVE = "inactive", i.PLAYING = "playing", i.PAUSED = "paused";
})(Ot || (Ot = {}));
var vn;
(function(i) {
    i[i.PictureInPicture = 0] = "PictureInPicture", i[i.DocumentPictureInPicture = 1] = "DocumentPictureInPicture";
})(vn || (vn = {}));
var je;
(function(i) {
    i.PLAY = "PLAY", i.STOP = "STOP", i.BACKWARD_SEEK = "BACKWARD_SEEK", i.FORWARD_SEEK = "FORWARD_SEEK", i.SUBTITLES_ON = "SUBTITLES_ON", i.SUBTITLES_OFF = "SUBTITLES_OFF", i.RATE_UP = "RATE_UP", i.RATE_DOWN = "RATE_DOWN", i.EPISODE_PREV = "EPISODE_PREV", i.EPISODE_NEXT = "EPISODE_NEXT", i.MUTE = "MUTE", i.VOLUME = "VOLUME";
})(je || (je = {}));
var Dn;
(function(i) {
    i.FULL = "FULL", i.COUNT = "COUNT", i.SHORT = "SHORT";
})(Dn || (Dn = {}));
const Xr = (i)=>{
    if (i.requestFullscreen) return i.requestFullscreen();
    if (i.msRequestFullscreen) return i.msRequestFullscreen();
    if (i.webkitRequestFullscreen) return i.webkitRequestFullscreen();
    if (i.mozRequestFullScreen) return i.mozRequestFullScreen();
    const e = i.querySelector("video");
    return e?.webkitEnterFullscreen ? e.webkitEnterFullscreen() : Promise.reject();
}, Jr = (i)=>i.exitFullscreen ? i.exitFullscreen() : i.msExitFullscreen ? i.msExitFullscreen() : i.webkitExitFullscreen ? i.webkitExitFullscreen() : i.mozCancelFullScreen ? i.mozCancelFullScreen() : Promise.reject(), rc = (i)=>{
    const e = i;
    return e?.webkitExitFullscreen ? e?.webkitExitFullscreen() : Promise.reject();
}, po = ()=>{
    const i = document;
    return !!(i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement || i.msFullscreenElement);
}, xr = (i)=>{
    document.addEventListener("fullscreenchange", i), document.addEventListener("webkitfullscreenchange", i), document.addEventListener("mozfullscreenchange", i), document.addEventListener("MSFullscreenChange", i);
}, $r = (i)=>{
    document.removeEventListener("fullscreenchange", i), document.removeEventListener("webkitfullscreenchange", i), document.removeEventListener("mozfullscreenchange", i), document.removeEventListener("MSFullscreenChange", i);
}, uc = (i)=>{
    const e = window.screen;
    return (async (o)=>e.orientation ? e.orientation.lock(o) : e.mozLockOrientation ? e.mozLockOrientation(o) : e.msLockOrientation ? e.msLockOrientation(o) : Promise.reject())(((o = {
        width: 0,
        height: 0
    })=>o.width <= o.height ? "portrait" : "landscape")(i));
}, cc = ()=>({
        title: U("hotkey_map_modal_title"),
        closeBtnText: U("hotkey_map_modal_close_btn_text"),
        groups: [
            {
                title: U("hotkey_map_group_title_common"),
                items: [
                    {
                        description: U("hotkey_map_item_mute_description"),
                        value: U("hotkey_map_item_mute_value")
                    },
                    {
                        description: U("hotkey_map_item_volume_up_description"),
                        value: U("hotkey_map_item_volume_up_value")
                    },
                    {
                        description: U("hotkey_map_item_volume_down_description"),
                        value: U("hotkey_map_item_volume_down_value")
                    },
                    {
                        description: U("hotkey_map_item_pip_description"),
                        value: U("hotkey_map_item_pip_value")
                    },
                    {
                        description: U("hotkey_map_item_full_screen_description"),
                        value: U("hotkey_map_item_full_screen_value")
                    },
                    {
                        description: U("hotkey_map_item_show_hotkey_map_description"),
                        value: U("hotkey_map_item_show_hotkey_map_value")
                    }
                ]
            },
            {
                title: U("hotkey_map_group_title_playback"),
                items: [
                    {
                        description: U("hotkey_map_item_play_toggle_description"),
                        value: U("hotkey_map_item_play_toggle_value")
                    },
                    {
                        description: U("hotkey_map_item_seek_backward_description"),
                        value: U("hotkey_map_item_seek_backward_value")
                    },
                    {
                        description: U("hotkey_map_item_seek_forward_description"),
                        value: U("hotkey_map_item_seek_forward_value")
                    },
                    {
                        description: U("hotkey_map_item_fast_seek_backward_description"),
                        value: U("hotkey_map_item_fast_seek_backward_value")
                    },
                    {
                        description: U("hotkey_map_item_fast_seek_forward_description"),
                        value: U("hotkey_map_item_fast_seek_forward_value")
                    },
                    {
                        description: U("hotkey_map_item_rate_down_description"),
                        value: U("hotkey_map_item_rate_down_value")
                    },
                    {
                        description: U("hotkey_map_item_rate_up_description"),
                        value: U("hotkey_map_item_rate_up_value")
                    },
                    {
                        description: U("hotkey_map_item_prev_frame_description"),
                        value: U("hotkey_map_item_prev_frame_value")
                    },
                    {
                        description: U("hotkey_map_item_next_frame_description"),
                        value: U("hotkey_map_item_next_frame_value")
                    },
                    {
                        description: U("hotkey_map_item_jump_seek_description"),
                        value: U("hotkey_map_item_jump_seek_value")
                    }
                ]
            },
            {
                title: U("hotkey_map_group_title_subtitles"),
                items: [
                    {
                        description: U("hotkey_map_item_subtitles_toggle_description"),
                        value: U("hotkey_map_item_subtitles_toggle_value")
                    }
                ]
            },
            {
                title: U("hotkey_map_group_title_episodes"),
                items: [
                    {
                        description: U("hotkey_map_item_prev_episode_description"),
                        value: (0, _esnextEsmJs1.isMacLike)() ? U("hotkey_map_item_prev_episode_mac_value") : U("hotkey_map_item_prev_episode_pc_value")
                    },
                    {
                        description: U("hotkey_map_item_next_episode_description"),
                        value: (0, _esnextEsmJs1.isMacLike)() ? U("hotkey_map_item_next_episode_mac_value") : U("hotkey_map_item_next_episode_pc_value")
                    }
                ]
            }
        ]
    });
class rl {
    isRequested = !1;
    videoElement = void 0;
    playerContainer = void 0;
    playerDummyElement;
    svelteContext;
    externalEventHandlers = {};
    eventHandlers = {
        enterpictureinpicture: this.onEnterPictureInPicture.bind(this),
        leavepictureinpicture: this.onLeavePictureInPicture.bind(this),
        resize: (0, _esnextEsmJs1.debounceFn)(this.onResize.bind(this), Vr)
    };
    info = {
        isActive$: new (0, _esnextEsmJs1.ValueSubject)(this.isActive()),
        type: vn.PictureInPicture
    };
    isSupported() {
        const e = (0, _esnextEsmJs1.getCurrentBrowser)().browser === (0, _esnextEsmJs1.CurrentClientBrowser).Yandex;
        return document.pictureInPictureEnabled && !e;
    }
    isActive() {
        return this.isSupported() && !!document.pictureInPictureElement;
    }
    setContext(e) {
        this.svelteContext = e;
    }
    async revealPictureInPicture() {
        this.isRequested && (this.unregistryEventHandlers(), await this.request(), this.registryEventHandlers());
    }
    async request() {
        if (!(!this.isSupported() || this.isActive())) try {
            await this.videoElement?.requestPictureInPicture();
        } catch  {
            this.isRequested = !1;
        }
    }
    async remove() {
        !this.isSupported() || !this.isActive() || await document.exitPictureInPicture();
    }
    assignPlayerContainer(e) {
        this.isSupported() && (this.playerContainer = e);
    }
    updateVideoElement() {
        this.isSupported() && (this.videoElement = this.playerContainer?.querySelector("video"));
    }
    registryEventHandlers() {
        this.videoElement?.addEventListener("enterpictureinpicture", this.eventHandlers.enterpictureinpicture), this.videoElement?.addEventListener("leavepictureinpicture", this.eventHandlers.leavepictureinpicture);
    }
    registryExternalEventHandlers(e) {
        this.externalEventHandlers = {
            ...e
        };
    }
    unregistryEventHandlers() {
        this.videoElement?.removeEventListener("enterpictureinpicture", this.eventHandlers.enterpictureinpicture), this.videoElement?.removeEventListener("leavepictureinpicture", this.eventHandlers.leavepictureinpicture);
    }
    async dispose() {
        this.unregistryEventHandlers(), await this.remove();
    }
    onEnterPictureInPicture(e) {
        const n = e.pictureInPictureWindow;
        n && (this.info.isActive$.next(!0), this.isRequested = !0, n.addEventListener("resize", this.eventHandlers.resize), this.externalEventHandlers.enterpictureinpicture?.(e));
    }
    onLeavePictureInPicture(e) {
        const n = e.pictureInPictureWindow;
        this.info.isActive$.next(!1), this.isRequested = !1, n?.removeEventListener("resize", this.eventHandlers.resize), this.externalEventHandlers.leavepictureinpicture?.(e), this.playerDummyElement?.$destroy();
    }
    onResize(e) {
        this.externalEventHandlers.resize?.(e);
    }
}
function Mo(i) {
    return i instanceof rl;
}
function fc(i) {
    const e = vt();
    return Ki(()=>{
        e.getAdmanWrapper().startPostroll();
    }), [];
}
class dc extends ke {
    constructor(e){
        super(), _e(this, e, fc, null, ge, {});
    }
}
function mc(i) {
    Fe(i, "v-22jj8o", ".container.v-22jj8o.v-22jj8o{position:absolute;top:14px;right:16px;padding:4px 8px;font-size:13px;color:#bbb;background:rgba(0, 0, 0, 0.35);border-radius:4px;transition:color .2s}.container-mobile.v-22jj8o.v-22jj8o{bottom:14px;top:unset;font-size:15px;max-width:142px}.icon.v-22jj8o.v-22jj8o{margin-left:4px;position:relative;top:2px;fill:var(--white);transition:fill .2s}.skip.v-22jj8o.v-22jj8o{width:86px}.skippable.v-22jj8o.v-22jj8o{cursor:pointer;color:var(--white)}.skippable.v-22jj8o.v-22jj8o:hover{color:rgba(255, 255, 255, .75)}.skippable.v-22jj8o:hover .icon.v-22jj8o{fill:rgba(255, 255, 255, .75)}");
}
function hc(i) {
    let e = U("skip_ads_after", {
        time: Math.ceil(i[1] - i[0]).toFixed(0)
    }) + "", t;
    return {
        c () {
            t = ze(e);
        },
        m (n, o) {
            C(n, t, o);
        },
        p (n, o) {
            o & 3 && e !== (e = U("skip_ads_after", {
                time: Math.ceil(n[1] - n[0]).toFixed(0)
            }) + "") && Xe(t, e);
        },
        d (n) {
            n && y(t);
        }
    };
}
function pc(i) {
    let e, t = U("skip_ads_now") + "", n, o, l, s, a, r;
    return {
        c () {
            e = k("div"), n = ze(t), o = B(), l = I("svg"), s = I("path"), u(s, "fill-rule", "evenodd"), u(s, "clip-rule", "evenodd"), u(s, "d", "M0.263627 0.263605C-0.0878444 0.615078 -0.0878429 1.18493 0.26363 1.5364L4.72723 5.99998L0.263627 10.4636C-0.0878444 10.8151 -0.0878429 11.3849 0.26363 11.7364C0.615103 12.0879 1.18495 12.0879 1.53642 11.7364L6.63642 6.63637C6.98789 6.2849 6.98789 5.71505 6.63642 5.36358L1.53642 0.263602C1.18495 -0.0878686 0.615098 -0.0878673 0.263627 0.263605Z"), u(l, "class", "icon v-22jj8o"), u(l, "width", "7"), u(l, "height", "12"), u(l, "viewBox", "0 0 7 12"), u(l, "fill", "none"), u(l, "xmlns", "http://www.w3.org/2000/svg"), u(e, "class", "skip v-22jj8o");
        },
        m (c, f) {
            C(c, e, f), d(e, n), d(e, o), d(e, l), d(l, s), a || (r = Ae(e, "click", rt(function() {
                kn(i[2]) && i[2].apply(this, arguments);
            })), a = !0);
        },
        p (c, f) {
            i = c;
        },
        d (c) {
            c && y(e), a = !1, r();
        }
    };
}
function gc(i) {
    let e;
    function t(l, s) {
        return l[3] ? pc : hc;
    }
    let n = t(i), o = n(i);
    return {
        c () {
            e = k("div"), o.c(), u(e, "class", "container v-22jj8o"), L(e, "container-mobile", i[4]), L(e, "skippable", i[3]);
        },
        m (l, s) {
            C(l, e, s), o.m(e, null);
        },
        p (l, [s]) {
            n === (n = t(l)) && o ? o.p(l, s) : (o.d(1), o = n(l), o && (o.c(), o.m(e, null))), s & 16 && L(e, "container-mobile", l[4]), s & 8 && L(e, "skippable", l[3]);
        },
        i: K,
        o: K,
        d (l) {
            l && y(e), o.d();
        }
    };
}
function bc(i, e, t) {
    let n, { position: o = 0 } = e, { secondsToWatchBeforeSkip: l = 0 } = e, { skipAd: s = (0, _esnextEsmJs1.noop) } = e;
    const r = vt().ui.isMobile;
    F(i, r, (f)=>t(4, n = f));
    let c;
    return i.$$set = (f)=>{
        "position" in f && t(0, o = f.position), "secondsToWatchBeforeSkip" in f && t(1, l = f.secondsToWatchBeforeSkip), "skipAd" in f && t(2, s = f.skipAd);
    }, i.$$.update = ()=>{
        i.$$.dirty & 3 && t(3, c = o > 0 && o >= l);
    }, [
        o,
        l,
        s,
        c,
        n,
        r
    ];
}
class vc extends ke {
    constructor(e){
        super(), _e(this, e, bc, gc, ge, {
            position: 0,
            secondsToWatchBeforeSkip: 1,
            skipAd: 2
        }, mc);
    }
}
function _c(i) {
    Fe(i, "v-1wy3dql", "button.v-1wy3dql{position:absolute;pointer-events:none;bottom:14px;left:16px;font-size:15px;background:white;border:none;padding:6px 10px;border-radius:6px;color:black}");
}
function kc(i) {
    let e;
    return {
        c () {
            e = k("button"), e.textContent = `${U("visit_advertiser")}`, u(e, "class", "v-1wy3dql");
        },
        m (t, n) {
            C(t, e, n);
        },
        p: K,
        i: K,
        o: K,
        d (t) {
            t && y(e);
        }
    };
}
class wc extends ke {
    constructor(e){
        super(), _e(this, e, null, kc, ge, {}, _c);
    }
}
function yc(i) {
    Fe(i, "v-354ajf", `.container.v-354ajf{width:100%;height:100%}.top-gradient-mobile.v-354ajf{position:absolute;width:100%;height:80px;top:0;left:0;pointer-events:none;background:linear-gradient(
      360deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.05) 12%,
      rgba(0, 0, 0, 0.15) 25%,
      rgba(0, 0, 0, 0.3) 45%,
      rgba(0, 0, 0, 0.4) 57%,
      rgba(0, 0, 0, 0.5) 77%,
      rgba(0, 0, 0, 0.55) 88%,
      rgba(0, 0, 0, 0.65) 100%
    )}`);
}
function Al(i) {
    let e;
    return {
        c () {
            e = k("div"), u(e, "class", "top-gradient-mobile v-354ajf");
        },
        m (t, n) {
            C(t, e, n);
        },
        d (t) {
            t && y(e);
        }
    };
}
function El(i) {
    let e, t;
    return e = new vc({
        props: {
            position: i[5],
            secondsToWatchBeforeSkip: i[6],
            skipAd: i[8].actions.internal.skipAd
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 32 && (l.position = n[5]), o & 64 && (l.secondsToWatchBeforeSkip = n[6]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Ll(i) {
    let e, t;
    return e = new dc({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Vl(i) {
    let e, t;
    return e = new wc({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Cc(i) {
    let e, t, n, o, l, s, a, r = i[0] && Al(), c = i[3] && El(i), f = i[7] && Ll(), h = i[4] && Vl();
    return {
        c () {
            e = k("div"), r && r.c(), t = B(), n = k("video"), o = B(), c && c.c(), l = B(), f && f.c(), s = B(), h && h.c(), At(n, "width", "100%"), At(n, "height", "100%"), n.playsInline = !0, u(e, "class", "container v-354ajf");
        },
        m (g, v) {
            C(g, e, v), r && r.m(e, null), d(e, t), d(e, n), i[19](n), d(e, o), c && c.m(e, null), d(e, l), f && f.m(e, null), d(e, s), h && h.m(e, null), i[20](e), a = !0;
        },
        p (g, [v]) {
            g[0] ? r || (r = Al(), r.c(), r.m(e, t)) : r && (r.d(1), r = null), g[3] ? c ? (c.p(g, v), v & 8 && m(c, 1)) : (c = El(g), c.c(), m(c, 1), c.m(e, l)) : c && (me(), p(c, 1, 1, ()=>{
                c = null;
            }), he()), g[7] ? f ? v & 128 && m(f, 1) : (f = Ll(), f.c(), m(f, 1), f.m(e, s)) : f && (me(), p(f, 1, 1, ()=>{
                f = null;
            }), he()), g[4] ? h ? v & 16 && m(h, 1) : (h = Vl(), h.c(), m(h, 1), h.m(e, null)) : h && (me(), p(h, 1, 1, ()=>{
                h = null;
            }), he());
        },
        i (g) {
            a || (m(c), m(f), m(h), a = !0);
        },
        o (g) {
            p(c), p(f), p(h), a = !1;
        },
        d (g) {
            g && y(e), r && r.d(), i[19](null), c && c.d(), f && f.d(), h && h.d(), i[20](null);
        }
    };
}
function Pc(i, e, t) {
    let n, o, l, s, a, { adsSlotId: r } = e, { adsParams: c } = e, { adsPreviewParam: f } = e, { duration: h = 0 } = e;
    const g = vt(), v = g.state.isEnded$;
    F(i, v, (j)=>t(7, a = j));
    const b = g.ui.isMobile;
    F(i, b, (j)=>t(0, o = j));
    let _, V, A = !1;
    const S = g.ads.playbackState;
    F(i, S, (j)=>t(18, n = j));
    const P = g.ads.canSkip, N = g.ads.position;
    F(i, N, (j)=>t(5, l = j));
    const W = g.ads.secondsToWatchBeforeSkip;
    F(i, W, (j)=>t(6, s = j));
    let X, Z;
    Ki(()=>{
        const j = new AbortController;
        let ie = ()=>{
            j.abort();
        };
        const G = g.getAdmanWrapper();
        if (!r) {
            G.onAdmanLoadingError();
            return;
        }
        const { width: J, height: ue } = Qe(g.ui.playerSize), w = Qe(g.ui.isFullscreen), oe = Qe(g.ui.isAutoplay), fe = {
            width: J,
            height: ue,
            isFullscreen: w,
            isAutoplay: oe,
            adsContainer: _,
            adsVideoElement: V,
            slotId: r,
            params: c,
            previewParam: f,
            duration: h
        };
        return window.AdmanHTML ? (G.initAdman(fe), A = !0) : G.loadAdman(j.signal).then(()=>{
            G.initAdman(fe), A = !0;
        }).catch(()=>{
            G.onAdmanLoadingError();
        }), ()=>{
            !A && ie();
        };
    });
    function T(j) {
        We[j ? "unshift" : "push"](()=>{
            V = j, t(2, V);
        });
    }
    function te(j) {
        We[j ? "unshift" : "push"](()=>{
            _ = j, t(1, _);
        });
    }
    return i.$$set = (j)=>{
        "adsSlotId" in j && t(14, r = j.adsSlotId), "adsParams" in j && t(15, c = j.adsParams), "adsPreviewParam" in j && t(16, f = j.adsPreviewParam), "duration" in j && t(17, h = j.duration);
    }, i.$$.update = ()=>{
        i.$$.dirty & 262144 && t(3, X = P && n !== Ot.INACTIVE), i.$$.dirty & 262145 && t(4, Z = o && n !== Ot.INACTIVE);
    }, [
        o,
        _,
        V,
        X,
        Z,
        l,
        s,
        a,
        g,
        v,
        b,
        S,
        N,
        W,
        r,
        c,
        f,
        h,
        n,
        T,
        te
    ];
}
class e1 extends ke {
    constructor(e){
        super(), _e(this, e, Pc, Cc, ge, {
            adsSlotId: 14,
            adsParams: 15,
            adsPreviewParam: 16,
            duration: 17
        }, yc);
    }
}
function Sc(i) {
    Fe(i, "v-1f6baix", ".annotations-container.v-1f6baix{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.annotations-container .annotations-layer > *{pointer-events:initial}.annotations-container.shifted.v-1f6baix{height:calc(100% - var(--controls-height) - var(--slider-height))}");
}
function Tc(i) {
    let e;
    return {
        c () {
            e = k("div"), e.innerHTML = "", u(e, "class", "annotations-container v-1f6baix"), L(e, "shifted", i[0]);
        },
        m (t, n) {
            C(t, e, n), i[2](e);
        },
        p (t, [n]) {
            n & 1 && L(e, "shifted", t[0]);
        },
        i: K,
        o: K,
        d (t) {
            t && y(e), i[2](null);
        }
    };
}
function Ac(i, e, t) {
    let { showControls: n } = e, o;
    const s = vt().webApi.annotationsApi;
    Ki(()=>{
        if (s) return s.registryRootContainer(o), s.reattach(), ()=>s.detach();
    });
    function a(r) {
        We[r ? "unshift" : "push"](()=>{
            o = r, t(1, o);
        });
    }
    return i.$$set = (r)=>{
        "showControls" in r && t(0, n = r.showControls);
    }, [
        n,
        o,
        a
    ];
}
class t1 extends ke {
    constructor(e){
        super(), _e(this, e, Ac, Tc, ge, {
            showControls: 0
        }, Sc);
    }
}
const _n = (i)=>{
    if (!isFinite(i)) return "00:00";
    let e = Math.round(i);
    const t = Math.floor(e / 3600);
    e -= t * 3600;
    const n = Math.floor(e / 60);
    return e -= n * 60, (t > 0 ? [
        t,
        n,
        e
    ] : [
        n,
        e
    ]).map((l)=>l > 9 ? String(l) : `0${l}`).join(":");
};
function Ec(i) {
    let e, t, n;
    return {
        c () {
            e = I("svg"), t = I("path"), n = I("path"), u(t, "d", "M6.41 1A6.46 6.46 0 0 0 3 1.55 3.52 3.52 0 0 0 1.55 3 6.46 6.46 0 0 0 1 6.41v7.18A6.46 6.46 0 0 0 1.55 17 3.52 3.52 0 0 0 3 18.45a6.46 6.46 0 0 0 3.41.55h29.18a6.46 6.46 0 0 0 3.41-.55A3.52 3.52 0 0 0 40.45 17a6.46 6.46 0 0 0 .55-3.41V6.41A6.46 6.46 0 0 0 40.45 3 3.52 3.52 0 0 0 39 1.55 6.46 6.46 0 0 0 35.59 1z"), u(t, "fill", "none"), u(t, "stroke", "#fff"), u(t, "stroke-width", "2"), u(n, "d", "M8 5a1 1 0 0 1 1 1v7h3a1 1 0 0 1 1 .88V14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-.77v-.11A.49.49 0 0 1 7 14V6a1 1 0 0 1 .88-1zm8 0a1 1 0 0 1 1 1v8a1 1 0 0 1-.88 1H16a1 1 0 0 1-1-1V6a1 1 0 0 1 .88-1zm18 0a1 1 0 0 1 1 .88V6a1 1 0 0 1-1 1h-3v2h3a1 1 0 0 1 1 .88V10a1 1 0 0 1-1 1h-3v2h3a1 1 0 0 1 1 .88V14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-.77v-.11a.49.49 0 0 1 0-.12V6a1 1 0 0 1 .56-.9A1 1 0 0 1 30 5zm-8 0a1 1 0 0 1 1 1v.1a.89.89 0 0 1-.11.35l-2.47 7.57a1.48 1.48 0 0 1-1.32.98h-.2a1.48 1.48 0 0 1-1.31-.95l-2.47-7.57a.89.89 0 0 1-.12-.36V6a1 1 0 0 1 .88-1H20a1 1 0 0 1 1 1v-.1l2 6.4 2-6.4a1 1 0 0 1 1-.9z"), u(n, "fill", "#f0f2f5"), u(n, "fill-rule", "evenodd"), u(e, "width", "42"), u(e, "height", "20"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "live-icon");
        },
        m (o, l) {
            C(o, e, l), d(e, t), d(e, n);
        },
        d (o) {
            o && y(e);
        }
    };
}
function Lc(i) {
    let e, t, n;
    return {
        c () {
            e = I("svg"), t = I("rect"), n = I("path"), u(t, "width", "42"), u(t, "height", "20"), u(t, "rx", "5"), u(t, "fill", "#FF3347"), u(n, "fill-rule", "evenodd"), u(n, "clip-rule", "evenodd"), u(n, "d", "M8 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2H9V6a1 1 0 0 0-1-1zm7 1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6zm15-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-3v-2h3a1 1 0 1 0 0-2h-3V7h3a1 1 0 1 0 0-2h-4zm-8.325 9.31-2.55-7.824a.993.993 0 0 1-.117-.363L19 6.1h.005a1 1 0 1 1 1.99-.199L21 5.9l2 6.4 2-6.4h.005a1 1 0 0 1 1.99.2H27l-.008.023a.993.993 0 0 1-.118.363l-2.55 7.824a1 1 0 0 1-.95.69h-.748a1 1 0 0 1-.95-.69z"), u(n, "fill", "#F2F3F5"), u(e, "width", "42"), u(e, "height", "20"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "live-active-icon");
        },
        m (o, l) {
            C(o, e, l), d(e, t), d(e, n);
        },
        d (o) {
            o && y(e);
        }
    };
}
function Vc(i) {
    let e;
    function t(l, s) {
        return l[0] ? Lc : Ec;
    }
    let n = t(i), o = n(i);
    return {
        c () {
            o.c(), e = ht();
        },
        m (l, s) {
            o.m(l, s), C(l, e, s);
        },
        p (l, [s]) {
            n !== (n = t(l)) && (o.d(1), o = n(l), o && (o.c(), o.m(e.parentNode, e)));
        },
        i: K,
        o: K,
        d (l) {
            l && y(e), o.d(l);
        }
    };
}
function Ic(i, e, t) {
    let { isActive: n = !1 } = e;
    return i.$$set = (o)=>{
        "isActive" in o && t(0, n = o.isActive);
    }, [
        n
    ];
}
class i1 extends ke {
    constructor(e){
        super(), _e(this, e, Ic, Vc, ge, {
            isActive: 0
        });
    }
}
function Mc(i) {
    Fe(i, "v-7pnl2h", ".thumb-timer.v-7pnl2h.v-7pnl2h{position:absolute;z-index:2;bottom:0;right:0;margin:8px;padding:0 7px;border-radius:3px;background:var(--black-alpha-40);color:var(--white);font-size:12.5px;line-height:23px;height:23px;white-space:nowrap;transition:visibility var(--controls-transition-duration), opacity var(--controls-transition-duration)}.thumb-timer.live.v-7pnl2h.v-7pnl2h{font-size:0;line-height:20px;height:20px;border-radius:2px;background:var(--red)}.thumb-timer.hidden.v-7pnl2h.v-7pnl2h{visibility:hidden;opacity:0}.thumb-timer.v-7pnl2h.v-7pnl2h:after{content:'';display:inline-block;vertical-align:middle;height:100%}.thumb-timer-live-icon.v-7pnl2h.v-7pnl2h{display:inline-block;vertical-align:middle;width:42px;height:20px;margin:0 -7px}.thumb-timer-equalizer.v-7pnl2h.v-7pnl2h{display:inline-block;vertical-align:middle;position:relative;width:10px;height:10px;margin-top:-4px;margin-right:4px}.live.v-7pnl2h .thumb-timer-equalizer.v-7pnl2h{margin-top:-2px}.thumb-timer-equalizer.v-7pnl2h .col.v-7pnl2h{width:2px;height:10px;margin-right:2px;background:var(--white);position:absolute;bottom:0;transform-origin:50% 100%;animation:1.5s infinite linear alternate;animation-play-state:paused}.thumb-timer.playing.v-7pnl2h .thumb-timer-equalizer .col.v-7pnl2h{animation-play-state:running}.thumb-timer-equalizer.v-7pnl2h .col.v-7pnl2h:nth-child(1){left:0;animation-name:v-7pnl2h-thumb-timer-equalizer-col1}.thumb-timer-equalizer.v-7pnl2h .col.v-7pnl2h:nth-child(2){left:3px;animation-name:v-7pnl2h-thumb-timer-equalizer-col2}.thumb-timer-equalizer.v-7pnl2h .col.v-7pnl2h:nth-child(3){left:6px;animation-name:v-7pnl2h-thumb-timer-equalizer-col3}@keyframes v-7pnl2h-thumb-timer-equalizer-col1{0%{transform:scaleY(0.1)}25%{transform:scaleY(0.8)}50%{transform:scaleY(0.4)}75%{transform:scaleY(0.6)}100%{transform:scaleY(0.1)}}@keyframes v-7pnl2h-thumb-timer-equalizer-col2{0%{transform:scaleY(1)}25%{transform:scaleY(0.3)}50%{transform:scaleY(0.9)}75%{transform:scaleY(0.6)}100%{transform:scaleY(1)}}@keyframes v-7pnl2h-thumb-timer-equalizer-col3{0%{transform:scaleY(0.6)}25%{transform:scaleY(0.9)}50%{transform:scaleY(0.1)}75%{transform:scaleY(0.9)}100%{transform:scaleY(0.6)}}.thumb-timer-text.v-7pnl2h.v-7pnl2h{display:inline-block;text-align:right}");
}
function Rc(i) {
    let e = _n(i[4] - i[3]) + "", t;
    return {
        c () {
            t = ze(e);
        },
        m (n, o) {
            C(n, t, o);
        },
        p (n, o) {
            o & 24 && e !== (e = _n(n[4] - n[3]) + "") && Xe(t, e);
        },
        i: K,
        o: K,
        d (n) {
            n && y(t);
        }
    };
}
function Bc(i) {
    let e, t, n;
    return t = new i1({
        props: {
            isActive: !0
        }
    }), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "thumb-timer-live-icon v-7pnl2h");
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        p: K,
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function Nc(i) {
    let e, t, n, o, l, s, a;
    const r = [
        Bc,
        Rc
    ], c = [];
    function f(h, g) {
        return h[1] ? 0 : 1;
    }
    return l = f(i), s = c[l] = r[l](i), {
        c () {
            e = k("div"), t = k("div"), t.innerHTML = '<div class="col v-7pnl2h"></div> <div class="col v-7pnl2h"></div> <div class="col v-7pnl2h"></div>', n = B(), o = k("span"), s.c(), u(t, "class", "thumb-timer-equalizer v-7pnl2h"), u(o, "class", "thumb-timer-text v-7pnl2h"), u(e, "role", "timer"), u(e, "class", "thumb-timer v-7pnl2h"), u(e, "data-testid", "thumb-timer"), L(e, "live", i[1]), L(e, "hidden", i[0]), L(e, "playing", i[2]);
        },
        m (h, g) {
            C(h, e, g), d(e, t), d(e, n), d(e, o), c[l].m(o, null), a = !0;
        },
        p (h, [g]) {
            let v = l;
            l = f(h), l === v ? c[l].p(h, g) : (me(), p(c[v], 1, 1, ()=>{
                c[v] = null;
            }), he(), s = c[l], s ? s.p(h, g) : (s = c[l] = r[l](h), s.c()), m(s, 1), s.m(o, null)), (!a || g & 2) && L(e, "live", h[1]), (!a || g & 1) && L(e, "hidden", h[0]), (!a || g & 4) && L(e, "playing", h[2]);
        },
        i (h) {
            a || (m(s), a = !0);
        },
        o (h) {
            p(s), a = !1;
        },
        d (h) {
            h && y(e), c[l].d();
        }
    };
}
function zc(i, e, t) {
    let { isHidden: n = !1 } = e, { isLive: o = !1 } = e, { isPlaying: l = !1 } = e, { position: s } = e, { duration: a } = e;
    return i.$$set = (r)=>{
        "isHidden" in r && t(0, n = r.isHidden), "isLive" in r && t(1, o = r.isLive), "isPlaying" in r && t(2, l = r.isPlaying), "position" in r && t(3, s = r.position), "duration" in r && t(4, a = r.duration);
    }, [
        n,
        o,
        l,
        s,
        a
    ];
}
class n1 extends ke {
    constructor(e){
        super(), _e(this, e, zc, Nc, ge, {
            isHidden: 0,
            isLive: 1,
            isPlaying: 2,
            position: 3,
            duration: 4
        }, Mc);
    }
}
const tl = (i)=>{
    if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        const e = document.createElement("textarea");
        e.textContent = i, e.style.position = "absolute", e.style.top = "-9999px", document.body.appendChild(e), e.select();
        try {
            document.execCommand("copy");
        } finally{
            document.body.removeChild(e);
        }
    }
};
function Oc(i) {
    Fe(i, "v-gew86s", "ul.v-gew86s{position:absolute;border-radius:3px;background:rgba(0, 0, 0, 0.88);transition:visibility .1s,opacity .1s;font-size:13px;list-style:none;margin:0;padding:0;max-height:100%;max-width:100%;overflow-x:hidden;overflow-y:auto}li.v-gew86s{padding:8px 20px;cursor:pointer;position:relative;display:block;color:rgba(255, 255, 255, 0.72);font-size:13px;white-space:nowrap}li.v-gew86s:hover{background:rgba(66, 66, 66, .5);color:var(--white)}");
}
function Dc(i) {
    let e, t = U("menu_copy_video_link") + "", n, o, l, s, a, r = !i[4] && !i[16] && Il(i);
    return {
        c () {
            e = k("li"), n = ze(t), o = B(), r && r.c(), l = ht(), u(e, "tabindex", "0"), u(e, "role", "menuitem"), u(e, "aria-label", U("menu_copy_video_link")), u(e, "class", "v-gew86s");
        },
        m (c, f) {
            C(c, e, f), d(e, n), C(c, o, f), r && r.m(c, f), C(c, l, f), s || (a = Ae(e, "click", rt(i[30])), s = !0);
        },
        p (c, f) {
            !c[4] && !c[16] ? r ? r.p(c, f) : (r = Il(c), r.c(), r.m(l.parentNode, l)) : r && (r.d(1), r = null);
        },
        d (c) {
            c && (y(e), y(o), y(l)), r && r.d(c), s = !1, a();
        }
    };
}
function Il(i) {
    let e, t = U("menu_copy_video_link_with_timestamp") + "", n, o, l;
    return {
        c () {
            e = k("li"), n = ze(t), u(e, "tabindex", "0"), u(e, "role", "menuitem"), u(e, "aria-label", U("menu_copy_video_link_with_timestamp")), u(e, "class", "v-gew86s");
        },
        m (s, a) {
            C(s, e, a), d(e, n), o || (l = Ae(e, "click", rt(i[31])), o = !0);
        },
        p: K,
        d (s) {
            s && y(e), o = !1, l();
        }
    };
}
function Ml(i) {
    let e, t = U("menu_pip") + "", n, o, l;
    return {
        c () {
            e = k("li"), n = ze(t), u(e, "tabindex", "0"), u(e, "role", "menuitem"), u(e, "aria-label", U("menu_pip")), u(e, "class", "v-gew86s");
        },
        m (s, a) {
            C(s, e, a), d(e, n), o || (l = Ae(e, "click", rt(i[21])), o = !0);
        },
        p: K,
        d (s) {
            s && y(e), o = !1, l();
        }
    };
}
function Hc(i) {
    let e, t = U("menu_video_rotate") + "", n, o, l;
    return {
        c () {
            e = k("li"), n = ze(t), u(e, "tabindex", "0"), u(e, "role", "menuitem"), u(e, "aria-label", U("aria_label_menu_rotate")), u(e, "class", "v-gew86s");
        },
        m (s, a) {
            C(s, e, a), d(e, n), o || (l = Ae(e, "click", rt(i[17])), o = !0);
        },
        p: K,
        d (s) {
            s && y(e), o = !1, l();
        }
    };
}
function Rl(i) {
    let e, t = U("menu_report") + "", n, o, l;
    return {
        c () {
            e = k("li"), n = ze(t), u(e, "tabindex", "0"), u(e, "role", "menuitem"), u(e, "aria-label", `${U("menu_report")}. ${U("aria_label_new_tab_alert")}`), u(e, "class", "v-gew86s");
        },
        m (s, a) {
            C(s, e, a), d(e, n), o || (l = Ae(e, "click", rt(i[18])), o = !0);
        },
        p: K,
        d (s) {
            s && y(e), o = !1, l();
        }
    };
}
function Fc(i) {
    let e, t, n, o, l, s, a = (i[9].features.saveDebugInfoToFile ? U("menu_save_debug") : U("menu_copy_debug")) + "", r, c, f, h = U("menu_debug_overlay") + "", g, v, b, _, V = i[9].features.copyVideoLink && i[8].callbacks?.onCopyVideoLink && Dc(i), A = i[11] && i[5] !== (0, _esnextEsmJs.ChromecastState).CONNECTED && !i[16] && Ml(i), S = i[9].features.videoRotate && !i[16] && Hc(i), P = i[9].showSupport && !i[6] && Rl(i);
    return {
        c () {
            e = k("ul"), V && V.c(), t = B(), A && A.c(), n = B(), S && S.c(), o = B(), P && P.c(), l = B(), s = k("li"), r = ze(a), c = B(), f = k("li"), g = ze(h), u(s, "tabindex", "0"), u(s, "role", "menuitem"), u(s, "aria-label", i[9].features.saveDebugInfoToFile ? U("menu_save_debug") : U("menu_copy_debug")), u(s, "class", "v-gew86s"), u(f, "tabindex", "0"), u(f, "role", "menuitem"), u(f, "aria-label", v = i[7] ? U("aria_label_menu_debug_overlay_disable") : U("aria_label_menu_debug_overlay_enable")), u(f, "class", "v-gew86s"), u(e, "role", "menu"), At(e, "top", i[2] + "px"), At(e, "left", i[1] + "px"), u(e, "class", "v-gew86s"), L(e, "hidden", !i[0]);
        },
        m (N, W) {
            C(N, e, W), V && V.m(e, null), d(e, t), A && A.m(e, null), d(e, n), S && S.m(e, null), d(e, o), P && P.m(e, null), d(e, l), d(e, s), d(s, r), d(e, c), d(e, f), d(f, g), i[32](e), b || (_ = [
                Ae(s, "click", rt(i[19])),
                Ae(f, "click", rt(i[20])),
                Ae(e, "contextmenu", di(i[29]))
            ], b = !0);
        },
        p (N, W) {
            N[9].features.copyVideoLink && N[8].callbacks?.onCopyVideoLink && V.p(N, W), N[11] && N[5] !== (0, _esnextEsmJs.ChromecastState).CONNECTED && !N[16] ? A ? A.p(N, W) : (A = Ml(N), A.c(), A.m(e, n)) : A && (A.d(1), A = null), N[9].features.videoRotate && !N[16] && S.p(N, W), N[9].showSupport && !N[6] ? P ? P.p(N, W) : (P = Rl(N), P.c(), P.m(e, l)) : P && (P.d(1), P = null), W[0] & 128 && v !== (v = N[7] ? U("aria_label_menu_debug_overlay_disable") : U("aria_label_menu_debug_overlay_enable")) && u(f, "aria-label", v), W[0] & 4 && At(e, "top", N[2] + "px"), W[0] & 2 && At(e, "left", N[1] + "px"), W[0] & 1 && L(e, "hidden", !N[0]);
        },
        i: K,
        o: K,
        d (N) {
            N && y(e), V && V.d(), A && A.d(), S && S.d(), P && P.d(), i[32](null), b = !1, xt(_);
        }
    };
}
function Uc(i, e, t) {
    let n, o, l, s, a, { visible: r = !1 } = e, { supportLink: c } = e, { x: f = 0 } = e, { y: h = 0 } = e, { playerContainerRef: g } = e, { controlsContainerRef: v } = e, { returnFocus: b } = e, _ = 0, V = 0;
    const A = vt(), S = Yi(), P = A.ui.contextMenuVisible, N = A.ui.debugPanelVisible;
    F(i, N, (M)=>t(7, a = M));
    const W = A.webApi.pictureInPictureApi, X = A.webApi.pictureInPictureApi?.info.isActive$;
    F(i, X, (M)=>t(6, s = M));
    const Z = A.state.chromecastState$;
    F(i, Z, (M)=>t(5, l = M));
    const T = A.state.isLive$;
    F(i, T, (M)=>t(4, o = M));
    const te = A.state.positionExact$;
    F(i, te, (M)=>t(33, n = M));
    const j = A.state.isInteractive;
    let ie;
    const G = (M, Y)=>{
        if (!ie || !g || !v) return;
        const pe = ie.getBoundingClientRect(), ee = g.getBoundingClientRect();
        t(1, _ = M - ee.left), t(2, V = Y - ee.top), _ + pe.width > ee.width && t(1, _ = ee.width - pe.width), V + pe.height > ee.height && t(2, V = ee.height - pe.height), t(1, _ = Math.max(_, 0)), t(2, V = Math.max(V, 0));
    }, J = ()=>{
        P.set(!1), A.actions.internal.videoRotate();
    }, ue = ()=>{
        window.open(c, "_blank"), P.set(!1), A.actions.internal.pause();
    }, w = ()=>{
        const M = A.actions.internal.getDebugTextData();
        if (S.features.saveDebugInfoToFile) {
            const Y = new Blob([
                ...M
            ], {
                type: "plain/text"
            }), pe = window.URL.createObjectURL(Y);
            Rr(pe, "vk_player_debug_info", "txt");
        } else tl(A.actions.internal.getDebugTextData());
        P.set(!1), b?.();
    }, oe = ()=>{
        N.set(!0), P.set(!1), b?.();
    }, fe = async ()=>{
        try {
            W?.isActive() ? await W?.remove() : await W?.request();
        } finally{
            P.set(!1), b?.();
        }
    }, ve = (M = !1)=>{
        if (A.callbacks?.onCopyVideoLink) {
            const Y = A.callbacks?.onCopyVideoLink(M, n);
            Y && tl(Y);
        }
        P.set(!1);
    };
    function Me(M) {
        Jn.call(this, i, M);
    }
    const Ee = ()=>ve(), we = ()=>ve(!0);
    function H(M) {
        We[M ? "unshift" : "push"](()=>{
            ie = M, t(3, ie);
        });
    }
    return i.$$set = (M)=>{
        "visible" in M && t(0, r = M.visible), "supportLink" in M && t(23, c = M.supportLink), "x" in M && t(24, f = M.x), "y" in M && t(25, h = M.y), "playerContainerRef" in M && t(26, g = M.playerContainerRef), "controlsContainerRef" in M && t(27, v = M.controlsContainerRef), "returnFocus" in M && t(28, b = M.returnFocus);
    }, i.$$.update = ()=>{
        i.$$.dirty[0] & 50331648 && G(f, h);
    }, [
        r,
        _,
        V,
        ie,
        o,
        l,
        s,
        a,
        A,
        S,
        N,
        W,
        X,
        Z,
        T,
        te,
        j,
        J,
        ue,
        w,
        oe,
        fe,
        ve,
        c,
        f,
        h,
        g,
        v,
        b,
        Me,
        Ee,
        we,
        H
    ];
}
class qc extends ke {
    constructor(e){
        super(), _e(this, e, Uc, Fc, ge, {
            visible: 0,
            supportLink: 23,
            x: 24,
            y: 25,
            playerContainerRef: 26,
            controlsContainerRef: 27,
            returnFocus: 28
        }, Oc, [
            -1,
            -1
        ]);
    }
}
class Wc {
    value;
    next;
    constructor(e){
        this.value = e, this.next = null;
    }
}
class qo {
    top;
    bottom;
    size;
    maxSize;
    constructor(e){
        this.top = null, this.bottom = null, this.size = 0, this.maxSize = e;
    }
    push(e) {
        const t = new Wc(e);
        this.top ? (this.top.next = t, this.top = t) : (this.top = t, this.bottom = t), this.size++, this.size > this.maxSize && this.bottom && (this.bottom = this.bottom.next);
    }
    getValuesFromBottom() {
        const e = [];
        let t = this.bottom;
        for(; t;)e.push(t.value), t = t.next;
        return e;
    }
}
function Zc(i) {
    Fe(i, "v-1ssl9eb", ".container.v-1ssl9eb{display:inline-block;width:120px;height:16px}canvas.v-1ssl9eb{transform:scale(1, -1);margin-top:2px}");
}
function jc(i) {
    let e, t;
    return {
        c () {
            e = k("div"), t = k("canvas"), u(t, "class", "v-1ssl9eb"), u(e, "class", "container v-1ssl9eb");
        },
        m (n, o) {
            C(n, e, o), d(e, t), i[3](t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e), i[3](null);
        }
    };
}
const Wo = 16, Zo = 120, Bl = 60;
function Gc(i, e, t, n, o) {
    o === 0 && (o = 1), i.fillStyle = "#fff", i.fillRect(e, t, n, o);
}
function Kc(i, e, t) {
    let { values: n = [] } = e, o, l;
    const s = Zo / Bl;
    Ki(()=>{
        t(0, o.width = Zo, o), t(0, o.height = Wo, o), t(2, l = o.getContext("2d"));
    });
    function a(r) {
        We[r ? "unshift" : "push"](()=>{
            o = r, t(0, o);
        });
    }
    return i.$$set = (r)=>{
        "values" in r && t(1, n = r.values);
    }, i.$$.update = ()=>{
        if (i.$$.dirty & 6 && l) {
            let r = n[0];
            for(let f = 1; f < n.length; f++)n[f] > r && (r = n[f]);
            l.clearRect(0, 0, Zo, Wo);
            let c = Bl - 1;
            for(let f = n.length - 1; f >= 0; f--){
                const h = c * s, g = r > 0 ? Wo * (n[f] / r) : 0;
                Gc(l, h, 0, s, g), c--;
            }
        }
    }, [
        o,
        n,
        l,
        a
    ];
}
class ul extends ke {
    constructor(e){
        super(), _e(this, e, Kc, jc, ge, {
            values: 1
        }, Zc);
    }
}
function Yc(i) {
    Fe(i, "v-1gy2e68", ".container.v-1gy2e68.v-1gy2e68.v-1gy2e68{background:rgba(28, 28, 28, 0.8);border-radius:4px;color:#fff;left:20px;position:absolute;top:45px;min-width:160px;font-size:10px;text-align:left}.container-mobile.v-1gy2e68.v-1gy2e68.v-1gy2e68{top:16px;left:16px}button.v-1gy2e68.v-1gy2e68.v-1gy2e68{position:absolute;right:5px;top:3px;cursor:pointer;outline:0;border:none;background-color:transparent;padding:0;color:#fff}.content.v-1gy2e68.v-1gy2e68.v-1gy2e68{padding:5px}.content.v-1gy2e68>div.v-1gy2e68>div.v-1gy2e68{display:inline-block;text-align:right;width:52px;padding:0 5px}");
}
function Nl(i) {
    let e, t, n, o, l = i[0].id + "", s;
    return {
        c () {
            e = k("div"), t = k("div"), t.textContent = "Video id", n = B(), o = k("span"), s = ze(l), u(t, "class", "v-1gy2e68"), u(e, "class", "v-1gy2e68");
        },
        m (a, r) {
            C(a, e, r), d(e, t), d(e, n), d(e, o), d(o, s);
        },
        p (a, r) {
            r & 1 && l !== (l = a[0].id + "") && Xe(s, l);
        },
        d (a) {
            a && y(e);
        }
    };
}
function zl(i) {
    let e, t, n, o, l = i[0].provider + "", s;
    return {
        c () {
            e = k("div"), t = k("div"), t.textContent = "Provider", n = B(), o = k("span"), s = ze(l), u(t, "class", "v-1gy2e68"), u(e, "class", "v-1gy2e68");
        },
        m (a, r) {
            C(a, e, r), d(e, t), d(e, n), d(e, o), d(o, s);
        },
        p (a, r) {
            r & 1 && l !== (l = a[0].provider + "") && Xe(s, l);
        },
        d (a) {
            a && y(e);
        }
    };
}
function Ol(i) {
    let e, t, n, o, l = i[0].viewport + "", s;
    return {
        c () {
            e = k("div"), t = k("div"), t.textContent = "Viewport", n = B(), o = k("span"), s = ze(l), u(t, "class", "v-1gy2e68"), u(e, "class", "v-1gy2e68");
        },
        m (a, r) {
            C(a, e, r), d(e, t), d(e, n), d(e, o), d(o, s);
        },
        p (a, r) {
            r & 1 && l !== (l = a[0].viewport + "") && Xe(s, l);
        },
        d (a) {
            a && y(e);
        }
    };
}
function Dl(i) {
    let e, t, n, o, l = i[0].videoSize + "", s;
    return {
        c () {
            e = k("div"), t = k("div"), t.textContent = "Video size", n = B(), o = k("span"), s = ze(l), u(t, "class", "v-1gy2e68"), u(e, "class", "v-1gy2e68");
        },
        m (a, r) {
            C(a, e, r), d(e, t), d(e, n), d(e, o), d(o, s);
        },
        p (a, r) {
            r & 1 && l !== (l = a[0].videoSize + "") && Xe(s, l);
        },
        d (a) {
            a && y(e);
        }
    };
}
function Hl(i) {
    let e, t, n, o, l = i[0].cdn + "", s;
    return {
        c () {
            e = k("div"), t = k("div"), t.textContent = "CDN host", n = B(), o = k("span"), s = ze(l), u(t, "class", "v-1gy2e68"), u(e, "class", "v-1gy2e68");
        },
        m (a, r) {
            C(a, e, r), d(e, t), d(e, n), d(e, o), d(o, s);
        },
        p (a, r) {
            r & 1 && l !== (l = a[0].cdn + "") && Xe(s, l);
        },
        d (a) {
            a && y(e);
        }
    };
}
function Fl(i) {
    let e, t, n, o, l = i[0].volume + "", s, a;
    return {
        c () {
            e = k("div"), t = k("div"), t.textContent = "Volume", n = B(), o = k("span"), s = ze(l), a = ze(" %"), u(t, "class", "v-1gy2e68"), u(e, "class", "v-1gy2e68");
        },
        m (r, c) {
            C(r, e, c), d(e, t), d(e, n), d(e, o), d(o, s), d(o, a);
        },
        p (r, c) {
            c & 1 && l !== (l = r[0].volume + "") && Xe(s, l);
        },
        d (r) {
            r && y(e);
        }
    };
}
function Ul(i) {
    let e, t, n, o, l = i[0].buffer.toFixed(2) + "", s, a;
    return {
        c () {
            e = k("div"), t = k("div"), t.textContent = "Buffer", n = B(), o = k("span"), s = ze(l), a = ze(" s"), u(t, "class", "v-1gy2e68"), u(e, "class", "v-1gy2e68");
        },
        m (r, c) {
            C(r, e, c), d(e, t), d(e, n), d(e, o), d(o, s), d(o, a);
        },
        p (r, c) {
            c & 1 && l !== (l = r[0].buffer.toFixed(2) + "") && Xe(s, l);
        },
        d (r) {
            r && y(e);
        }
    };
}
function ql(i) {
    let e, t, n, o, l, s, a = i[0].speed.toFixed(2) + "", r, c, f;
    return o = new ul({
        props: {
            values: i[5]
        }
    }), {
        c () {
            e = k("div"), t = k("div"), t.textContent = "Network", n = B(), D(o.$$.fragment), l = B(), s = k("span"), r = ze(a), c = ze(" Kbps"), u(t, "class", "v-1gy2e68"), u(e, "class", "v-1gy2e68");
        },
        m (h, g) {
            C(h, e, g), d(e, t), d(e, n), z(o, e, null), d(e, l), d(e, s), d(s, r), d(s, c), f = !0;
        },
        p (h, g) {
            const v = {};
            g & 32 && (v.values = h[5]), o.$set(v), (!f || g & 1) && a !== (a = h[0].speed.toFixed(2) + "") && Xe(r, a);
        },
        i (h) {
            f || (m(o.$$.fragment, h), f = !0);
        },
        o (h) {
            p(o.$$.fragment, h), f = !1;
        },
        d (h) {
            h && y(e), O(o);
        }
    };
}
function Wl(i) {
    let e, t, n, o, l, s, a = i[0].bitrate.toFixed(2) + "", r, c, f;
    return o = new ul({
        props: {
            values: i[6]
        }
    }), {
        c () {
            e = k("div"), t = k("div"), t.textContent = "V bitrate", n = B(), D(o.$$.fragment), l = B(), s = k("span"), r = ze(a), c = ze(" Kbps"), u(t, "class", "v-1gy2e68"), u(e, "class", "v-1gy2e68");
        },
        m (h, g) {
            C(h, e, g), d(e, t), d(e, n), z(o, e, null), d(e, l), d(e, s), d(s, r), d(s, c), f = !0;
        },
        p (h, g) {
            const v = {};
            g & 64 && (v.values = h[6]), o.$set(v), (!f || g & 1) && a !== (a = h[0].bitrate.toFixed(2) + "") && Xe(r, a);
        },
        i (h) {
            f || (m(o.$$.fragment, h), f = !0);
        },
        o (h) {
            p(o.$$.fragment, h), f = !1;
        },
        d (h) {
            h && y(e), O(o);
        }
    };
}
function Qc(i) {
    let e, t, n, o, l, s, a, r, c = i[0].version + "", f, h, g, v, b, _, V, A, S, P, N, W, X, Z, T, te, j, ie, G, J, ue, w, oe, fe, ve, Me, Ee, we, H, M, Y = i[0].id && Nl(i), pe = i[0].provider && zl(i), ee = i[0].viewport && Ol(i), R = i[0].videoSize && Dl(i), Q = i[0].cdn && Hl(i), Ve = i[0].volume && Fl(i), ye = i[0].buffer && Ul(i), Te = i[0].speed && ql(i), x = i[0].bitrate && Wl(i);
    return fe = new ul({
        props: {
            values: i[4]
        }
    }), {
        c () {
            e = k("div"), t = k("button"), t.textContent = "[x]", n = B(), o = k("div"), l = k("div"), s = k("div"), s.textContent = "Version", a = B(), r = k("span"), f = ze(c), h = B(), Y && Y.c(), g = B(), pe && pe.c(), v = B(), ee && ee.c(), b = B(), R && R.c(), _ = B(), Q && Q.c(), V = B(), Ve && Ve.c(), A = B(), ye && ye.c(), S = B(), P = k("div"), N = k("div"), N.textContent = "Dropped", W = B(), X = k("span"), Z = ze(i[2]), T = ze(" / "), te = ze(i[1]), j = ze(" frames"), ie = B(), Te && Te.c(), G = B(), x && x.c(), J = B(), ue = k("div"), w = k("div"), w.textContent = "FPS", oe = B(), D(fe.$$.fragment), ve = B(), Me = k("span"), Ee = ze(i[3]), u(t, "class", "close v-1gy2e68"), u(t, "title", "\u0437\u0430\u043A\u0440\u044B\u0442\u044C"), u(s, "class", "v-1gy2e68"), u(l, "class", "v-1gy2e68"), u(N, "class", "v-1gy2e68"), u(P, "class", "v-1gy2e68"), u(w, "class", "v-1gy2e68"), u(ue, "class", "v-1gy2e68"), u(o, "class", "content v-1gy2e68"), u(e, "class", "container v-1gy2e68"), L(e, "container-mobile", i[7]);
        },
        m (le, be) {
            C(le, e, be), d(e, t), d(e, n), d(e, o), d(o, l), d(l, s), d(l, a), d(l, r), d(r, f), d(o, h), Y && Y.m(o, null), d(o, g), pe && pe.m(o, null), d(o, v), ee && ee.m(o, null), d(o, b), R && R.m(o, null), d(o, _), Q && Q.m(o, null), d(o, V), Ve && Ve.m(o, null), d(o, A), ye && ye.m(o, null), d(o, S), d(o, P), d(P, N), d(P, W), d(P, X), d(X, Z), d(X, T), d(X, te), d(X, j), d(o, ie), Te && Te.m(o, null), d(o, G), x && x.m(o, null), d(o, J), d(o, ue), d(ue, w), d(ue, oe), z(fe, ue, null), d(ue, ve), d(ue, Me), d(Me, Ee), we = !0, H || (M = Ae(t, "click", rt(i[9])), H = !0);
        },
        p (le, [be]) {
            (!we || be & 1) && c !== (c = le[0].version + "") && Xe(f, c), le[0].id ? Y ? Y.p(le, be) : (Y = Nl(le), Y.c(), Y.m(o, g)) : Y && (Y.d(1), Y = null), le[0].provider ? pe ? pe.p(le, be) : (pe = zl(le), pe.c(), pe.m(o, v)) : pe && (pe.d(1), pe = null), le[0].viewport ? ee ? ee.p(le, be) : (ee = Ol(le), ee.c(), ee.m(o, b)) : ee && (ee.d(1), ee = null), le[0].videoSize ? R ? R.p(le, be) : (R = Dl(le), R.c(), R.m(o, _)) : R && (R.d(1), R = null), le[0].cdn ? Q ? Q.p(le, be) : (Q = Hl(le), Q.c(), Q.m(o, V)) : Q && (Q.d(1), Q = null), le[0].volume ? Ve ? Ve.p(le, be) : (Ve = Fl(le), Ve.c(), Ve.m(o, A)) : Ve && (Ve.d(1), Ve = null), le[0].buffer ? ye ? ye.p(le, be) : (ye = Ul(le), ye.c(), ye.m(o, S)) : ye && (ye.d(1), ye = null), (!we || be & 4) && Xe(Z, le[2]), (!we || be & 2) && Xe(te, le[1]), le[0].speed ? Te ? (Te.p(le, be), be & 1 && m(Te, 1)) : (Te = ql(le), Te.c(), m(Te, 1), Te.m(o, G)) : Te && (me(), p(Te, 1, 1, ()=>{
                Te = null;
            }), he()), le[0].bitrate ? x ? (x.p(le, be), be & 1 && m(x, 1)) : (x = Wl(le), x.c(), m(x, 1), x.m(o, J)) : x && (me(), p(x, 1, 1, ()=>{
                x = null;
            }), he());
            const ae = {};
            be & 16 && (ae.values = le[4]), fe.$set(ae), (!we || be & 8) && Xe(Ee, le[3]), (!we || be & 128) && L(e, "container-mobile", le[7]);
        },
        i (le) {
            we || (m(Te), m(x), m(fe.$$.fragment, le), we = !0);
        },
        o (le) {
            p(Te), p(x), p(fe.$$.fragment, le), we = !1;
        },
        d (le) {
            le && y(e), Y && Y.d(), pe && pe.d(), ee && ee.d(), R && R.d(), Q && Q.d(), Ve && Ve.d(), ye && ye.d(), Te && Te.d(), x && x.d(), O(fe), H = !1, M();
        }
    };
}
function Xc(i, e, t) {
    let n;
    const o = vt(), l = o.ui.debugPanelVisible, s = o.ui.isMobile;
    F(i, s, (P)=>t(7, n = P));
    const a = ()=>{
        (0, _esnextEsmJs1.safeStorage).remove($o), l.set(!1);
    };
    let r = o.actions.internal.getDebugPanelData(), c = o.actions.internal.getVideoElement(), f = 0, h = 0, g = 0;
    const v = new qo(60), b = new qo(60), _ = new qo(60);
    let V = [], A = [], S = [];
    return Ki(()=>{
        (0, _esnextEsmJs1.safeStorage).set($o, "true"), o.actions.internal.startLogging(), c && (t(2, h = c.getVideoPlaybackQuality().droppedVideoFrames), t(1, f = c.getVideoPlaybackQuality().totalVideoFrames));
        const P = window.setInterval(()=>{
            t(0, r = o.actions.internal.getDebugPanelData());
        }, 500);
        let N;
        return c && (N = window.setInterval(()=>{
            if (c) {
                t(2, h = c.getVideoPlaybackQuality().droppedVideoFrames);
                const W = c.getVideoPlaybackQuality().totalVideoFrames;
                t(3, g = W - f), t(1, f = W), v.push(g), r.speed && b.push(r.speed), r.bitrate && _.push(r.bitrate), t(4, V = v.getValuesFromBottom()), t(5, A = b.getValuesFromBottom()), t(6, S = _.getValuesFromBottom());
            }
        }, 1e3)), ()=>{
            o.actions.internal.stopLogging(), clearInterval(P), N && clearInterval(N);
        };
    }), [
        r,
        f,
        h,
        g,
        V,
        A,
        S,
        n,
        s,
        a
    ];
}
class o1 extends ke {
    constructor(e){
        super(), _e(this, e, Xc, Qc, ge, {}, Yc);
    }
}
function Jc(i) {
    Fe(i, "v-1ome55p", ".close.v-1ome55p{cursor:pointer;opacity:0.8;transition:opacity 0.2s;position:relative;width:16px;height:16px}.close.v-1ome55p:hover{opacity:1}.close.v-1ome55p:before,.close.v-1ome55p:after{position:absolute;left:8px;content:' ';height:16px;width:2px;background-color:var(--white)}.close.v-1ome55p:before{transform:rotate(45deg)}.close.v-1ome55p:after{transform:rotate(-45deg)}");
}
function xc(i) {
    let e, t, n;
    return {
        c () {
            e = k("div"), u(e, "class", "close v-1ome55p");
        },
        m (o, l) {
            C(o, e, l), t || (n = Ae(e, "click", rt(i[0])), t = !0);
        },
        p: K,
        i: K,
        o: K,
        d (o) {
            o && y(e), t = !1, n();
        }
    };
}
function $c(i) {
    function e(t) {
        Jn.call(this, i, t);
    }
    return [
        e
    ];
}
class ef extends ke {
    constructor(e){
        super(), _e(this, e, $c, xc, ge, {}, Jc);
    }
}
function tf(i) {
    Fe(i, "v-8jhsry", `.timer.v-8jhsry{border-radius:50%;transition:background .2s;background:rgba(31, 31, 31, .65);width:50px;height:50px;display:flex;align-items:center;justify-content:space-around}.timer.v-8jhsry:hover{background:rgba(31, 31, 31, .85)
  }.timer-canvas.v-8jhsry{width:50px;height:50px;position:absolute}.timer-play-icon.v-8jhsry{width:22px;height:26px}`);
}
function nf(i) {
    let e, t, n, o, l, s, a;
    return {
        c () {
            e = k("div"), t = k("canvas"), n = B(), o = I("svg"), l = I("g"), s = I("g"), a = I("path"), u(t, "class", "timer-canvas v-8jhsry"), u(t, "width", "100"), u(t, "height", "100"), u(a, "class", "_play"), u(a, "d", "m8.13340613 5.10548415 10.49681277 6.24354325c.3559987.2117494.472936.6720001.2611866 1.0279989-.0638111.1072809-.1533894.1969388-.2606135.2608453l-10.4968128 6.256187c-.35581027.2120659-.81616483.095538-1.02823068-.2602722-.06921066-.1161237-.10574852-.2487949-.10574852-.3839792v-12.49973035c0-.41421357.33578644-.75.75-.75.13495801 0 .26741554.03641567.38340613.1054073z"), u(a, "fill", "#fff"), u(s, "fill-rule", "nonzero"), u(l, "fill", "none"), u(l, "fill-rule", "evenodd"), u(o, "class", "timer-play-icon v-8jhsry"), u(o, "viewBox", "0 0 24 24"), u(o, "xmlns", "http://www.w3.org/2000/svg"), u(e, "class", "timer v-8jhsry");
        },
        m (r, c) {
            C(r, e, c), d(e, t), i[2](t), d(e, n), d(e, o), d(o, l), d(l, s), d(s, a);
        },
        p: K,
        i: K,
        o: K,
        d (r) {
            r && y(e), i[2](null);
        }
    };
}
const of = 5e3;
function lf(i, e, t) {
    let { onTimerEnded: n = (0, _esnextEsmJs1.noop) } = e, o;
    Ki(()=>{
        let s;
        const a = o.getContext("2d");
        if (!a) return;
        a.lineWidth = 6, a.lineCap = "round", a.strokeStyle = "#fff";
        const r = Date.now(), c = ()=>{
            const f = (Date.now() - r) / of;
            f < 1 ? (a.clearRect(0, 0, 100, 100), a.beginPath(), a.arc(50, 50, 47, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * f), a.stroke(), s = requestAnimationFrame(c)) : n();
        };
        return s = requestAnimationFrame(c), ()=>{
            cancelAnimationFrame(s);
        };
    });
    function l(s) {
        We[s ? "unshift" : "push"](()=>{
            o = s, t(0, o);
        });
    }
    return i.$$set = (s)=>{
        "onTimerEnded" in s && t(1, n = s.onTimerEnded);
    }, [
        o,
        n,
        l
    ];
}
class sf extends ke {
    constructor(e){
        super(), _e(this, e, lf, nf, ge, {
            onTimerEnded: 1
        }, tf);
    }
}
function af(i) {
    Fe(i, "v-kisfwc", ".overlay.v-kisfwc{width:100%;height:100%;background:rgba(0, 0, 0, 0.72);position:absolute}.next-video.v-kisfwc{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex;width:362px;flex-direction:column}.top.v-kisfwc{display:flex;justify-content:space-between}.caption.v-kisfwc{font-size:11px;font-weight:bold;color:var(--white);text-transform:uppercase;opacity:0.8}.row.v-kisfwc{height:102px;background:rgba(48, 48, 48, .8);cursor:pointer;margin-top:6px;display:flex;flex-direction:row;flex-wrap:wrap;width:100%}.column.v-kisfwc{display:flex;flex-direction:column;flex-basis:50%}.thumb.v-kisfwc{width:100%;height:100%;background:no-repeat center;background-size:cover;display:flex;align-items:center;position:relative;justify-content:space-around}.thumb-overlay.v-kisfwc{width:100%;height:100%;background:var(--black);opacity:0.3;position:absolute}.title.v-kisfwc{padding:10px 16px;font-size:12px;font-weight:bold;color:var(--white);line-height:1.6;max-height:52px;overflow:hidden}");
}
function Zl(i) {
    let e, t;
    return e = new sf({
        props: {
            onTimerEnded: i[2]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 4 && (l.onTimerEnded = n[2]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function rf(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v, b, _, V, A, S, P, N, W;
    a = new ef({}), a.$on("click", i[4]);
    let X = i[3] && Zl(i);
    return {
        c () {
            e = k("div"), t = B(), n = k("div"), o = k("div"), l = k("div"), l.textContent = "\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043E", s = B(), D(a.$$.fragment), r = B(), c = k("div"), f = k("div"), h = k("div"), g = k("div"), v = B(), X && X.c(), _ = B(), V = k("div"), A = k("div"), S = ze(i[0]), u(e, "class", "overlay v-kisfwc"), u(l, "class", "caption v-kisfwc"), u(o, "class", "top v-kisfwc"), u(g, "class", "thumb-overlay v-kisfwc"), u(h, "class", "thumb v-kisfwc"), u(h, "style", b = `background-image: url('${i[1]}')`), u(f, "class", "column v-kisfwc"), u(A, "class", "title v-kisfwc"), u(V, "class", "column v-kisfwc"), u(c, "class", "row v-kisfwc"), u(n, "class", "next-video v-kisfwc");
        },
        m (Z, T) {
            C(Z, e, T), C(Z, t, T), C(Z, n, T), d(n, o), d(o, l), d(o, s), z(a, o, null), d(n, r), d(n, c), d(c, f), d(f, h), d(h, g), d(h, v), X && X.m(h, null), d(c, _), d(c, V), d(V, A), d(A, S), P = !0, N || (W = Ae(c, "click", function() {
                kn(i[2]) && i[2].apply(this, arguments);
            }), N = !0);
        },
        p (Z, [T]) {
            i = Z, i[3] ? X ? (X.p(i, T), T & 8 && m(X, 1)) : (X = Zl(i), X.c(), m(X, 1), X.m(h, null)) : X && (me(), p(X, 1, 1, ()=>{
                X = null;
            }), he()), (!P || T & 2 && b !== (b = `background-image: url('${i[1]}')`)) && u(h, "style", b), (!P || T & 1) && Xe(S, i[0]);
        },
        i (Z) {
            P || (m(a.$$.fragment, Z), m(X), P = !0);
        },
        o (Z) {
            p(a.$$.fragment, Z), p(X), P = !1;
        },
        d (Z) {
            Z && (y(e), y(t), y(n)), O(a), X && X.d(), N = !1, W();
        }
    };
}
function uf(i, e, t) {
    let { title: n } = e, { thumb: o } = e, { playNextVideo: l } = e, s = !0;
    const a = ()=>t(3, s = !1);
    return i.$$set = (r)=>{
        "title" in r && t(0, n = r.title), "thumb" in r && t(1, o = r.thumb), "playNextVideo" in r && t(2, l = r.playNextVideo);
    }, [
        n,
        o,
        l,
        s,
        a
    ];
}
class cf extends ke {
    constructor(e){
        super(), _e(this, e, uf, rf, ge, {
            title: 0,
            thumb: 1,
            playNextVideo: 2
        }, af);
    }
}
const l1 = (i, e)=>Math.min(+(i + e).toFixed(2), 1), s1 = (i, e)=>Math.max(+(i - e).toFixed(2), 0), a1 = (i, e, t)=>{
    const n = l1(e, t);
    e < 1 && i.actions.internal.setVolume(n);
}, r1 = (i, e, t)=>{
    const n = s1(e, t);
    e > 0 && i.actions.internal.setVolume(n);
};
function ff(i) {
    Fe(i, "v-10kkmxz", ".keyboard-controls.v-10kkmxz{position:absolute;left:0;right:0;top:0;bottom:0}");
}
function df(i) {
    let e, t, n, o;
    const l = i[21].default, s = wn(l, i, i[20], null);
    return {
        c () {
            e = k("div"), s && s.c(), u(e, "class", "keyboard-controls v-10kkmxz"), u(e, "tabindex", "0");
        },
        m (a, r) {
            C(a, e, r), s && s.m(e, null), i[22](e), t = !0, n || (o = [
                Ae(e, "keyup", i[12]),
                Ae(e, "keydown", i[11])
            ], n = !0);
        },
        p (a, r) {
            s && s.p && (!t || r[0] & 1048576) && Cn(s, l, a, a[20], t ? yn(l, a[20], r, null) : Pn(a[20]), null);
        },
        i (a) {
            t || (m(s, a), t = !0);
        },
        o (a) {
            p(s, a), t = !1;
        },
        d (a) {
            a && y(e), s && s.d(a), i[22](null), n = !1, xt(o);
        }
    };
}
function mf(i, e, t) {
    let n, o, l, s, a, r, c, f, h, g, { $$slots: v = {}, $$scope: b } = e, { isAds: _ } = e, { hideContextMenu: V } = e, { toggleFullscreen: A } = e, { showHotKeyHelpers: S } = e, { showKeyMap: P } = e, { fakePlayButtonHandler: N } = e;
    const W = vt(), X = Yi(), Z = W.getLogger().createComponentLog("KeyboardControls component"), T = W.state.playbackState$;
    F(i, T, (ee)=>t(26, o = ee));
    const te = W.ads.playbackState;
    F(i, te, (ee)=>t(25, n = ee));
    const j = W.state.positionExact$;
    F(i, j, (ee)=>t(31, c = ee));
    const ie = W.state.duration$;
    F(i, ie, (ee)=>t(30, r = ee));
    const G = W.state.volume$;
    F(i, G, (ee)=>t(34, g = ee));
    const J = W.ui.controls.disabledControls$;
    F(i, J, (ee)=>t(29, a = ee));
    const ue = W.state.muted$;
    F(i, ue, (ee)=>t(28, s = ee));
    const w = W.state.currentSubtitle$;
    F(i, w, (ee)=>t(27, l = ee));
    const oe = W.state.currentPlaybackRate$;
    F(i, oe, (ee)=>t(32, f = ee));
    const fe = W.state.availablePlaybackRates$;
    F(i, fe, (ee)=>t(33, h = ee));
    let ve = 0, Me = !0, Ee;
    const we = ()=>Ee?.focus(), H = (ee)=>(ee !== Me && (Me = ee, ve = 0), ve += 1, (X.controls.seekStepKeyboard + X.controls.seekStepKeyboard * ve) / 1e3), M = (ee)=>{
        V();
        const R = ee.code, Q = !Nu.has(R);
        if (ee.ctrlKey && Q || ee.altKey && Q || ee.metaKey) return;
        const Ve = o === (0, _esnextEsmJs.PlaybackState).PLAYING || o === (0, _esnextEsmJs.PlaybackState).PAUSED, ye = _ && (n === Ot.PAUSED || n === Ot.PLAYING), Te = !ye && !a.has(ct.TIMELINE);
        if (Ve || ye) switch(Z({
            message: `key down, code: ${R}`
        }), R){
            case He.KeyJ:
            case He.ArrowLeft:
                if (!Te) break;
                if (ee.ctrlKey || ee.altKey) {
                    const x = W.actions.internal.getPrevEpisode();
                    W.actions.internal.seekToPrevEpisode(x), x && S({
                        type: je.EPISODE_PREV,
                        text: x.text
                    }), ee.preventDefault();
                } else {
                    const x = ee.shiftKey ? H(!1) : X.controls.seekStepKeyboard / 1e3, le = Math.max(c - x, 0);
                    c > 0 && (W.actions.internal.seekTime(le, (0, _esnextEsmJs2.SeekAction).DOUBLE_TAP), S({
                        type: je.BACKWARD_SEEK,
                        text: x.toString()
                    }), ee.preventDefault());
                }
                break;
            case He.KeyL:
            case He.ArrowRight:
                if (!Te) break;
                if (ee.ctrlKey || ee.altKey) {
                    const x = W.actions.internal.getNextEpisode();
                    W.actions.internal.seekToNextEpisode(x), x && S({
                        type: je.EPISODE_NEXT,
                        text: x.text
                    }), ee.preventDefault();
                } else {
                    const x = ee.shiftKey ? H(!0) : X.controls.seekStepKeyboard / 1e3, le = Math.min(c + x, r);
                    Math.round(c) < Math.round(r) && (W.actions.internal.seekTime(le, (0, _esnextEsmJs2.SeekAction).DOUBLE_TAP), S({
                        type: je.FORWARD_SEEK,
                        text: x.toString()
                    }), ee.preventDefault());
                }
                break;
            case He.ArrowUp:
                {
                    const x = g, le = X.controls.volumeStepKeyboard, be = x <= 1;
                    if (a1(W, x, le), be) {
                        const ae = Math.round(l1(x, le) * 100).toString();
                        S({
                            type: je.VOLUME,
                            t: {
                                key: "hotkey_helper_current_volume",
                                value: ae
                            }
                        });
                    }
                    ee.preventDefault();
                    break;
                }
            case He.ArrowDown:
                {
                    const x = g, le = X.controls.volumeStepKeyboard, be = x >= 0;
                    if (r1(W, x, le), be) {
                        const ae = Math.round(s1(x, le) * 100).toString();
                        S({
                            type: je.VOLUME,
                            t: {
                                key: "hotkey_helper_current_volume",
                                value: ae
                            }
                        });
                    }
                    ee.preventDefault();
                    break;
                }
            case He.Comma:
                if (ee.shiftKey) {
                    W.actions.internal.decrementPlaybackRate();
                    const x = h.find((le)=>le.value === f);
                    S({
                        type: je.RATE_DOWN,
                        text: x?.displayValue
                    }), ee.preventDefault();
                } else {
                    if (ye || o !== (0, _esnextEsmJs.PlaybackState).PAUSED) break;
                    const x = Math.max(c - X.controls.seekStepFrame / 1e3, 0);
                    c > 0 && (S({
                        type: je.BACKWARD_SEEK
                    }), W.actions.internal.clearDelayedBufferingCheckTimeout(), W.actions.internal.seekTime(x, (0, _esnextEsmJs2.SeekAction).DOUBLE_TAP), ee.preventDefault());
                }
                break;
            case He.Period:
                if (ee.shiftKey) {
                    W.actions.internal.incrementPlaybackRate();
                    const x = h.find((le)=>le.value === f);
                    S({
                        type: je.RATE_UP,
                        text: x?.displayValue
                    }), ee.preventDefault();
                } else {
                    if (ye || o !== (0, _esnextEsmJs.PlaybackState).PAUSED) break;
                    const x = Math.min(c + X.controls.seekStepFrame / 1e3, r);
                    c < r && (S({
                        type: je.FORWARD_SEEK
                    }), W.actions.internal.clearDelayedBufferingCheckTimeout(), W.actions.internal.seekTime(x, (0, _esnextEsmJs2.SeekAction).DOUBLE_TAP), ee.preventDefault());
                }
                break;
            case He.KeyK:
            case He.Space:
                a.has(ct.PLAY_BUTTON) || (N ? N() : (W.actions.internal.togglePlay(), S({
                    type: o === (0, _esnextEsmJs.PlaybackState).PLAYING ? je.PLAY : je.STOP
                }))), ee.preventDefault();
                break;
            case He.KeyM:
                S({
                    type: s ? je.VOLUME : je.MUTE
                }), W.actions.internal.toggleMuted(), ee.preventDefault();
                break;
            case He.KeyF:
                A(), ee.preventDefault();
                break;
            case He.KeyC:
                W.actions.internal.toggleSubtitle(), l.value !== "off" ? S({
                    type: je.SUBTITLES_ON,
                    text: l?.displayValue
                }) : S({
                    type: je.SUBTITLES_OFF
                }), ee.preventDefault();
                break;
            case He.KeyI:
                W.actions.internal.togglePictureInPicture(), ee.preventDefault();
                break;
            case He.Digit1:
            case He.Numpad1:
                S(), W.actions.internal.seekToPercent(.1, (0, _esnextEsmJs2.SeekAction).DOUBLE_TAP), ee.preventDefault();
                break;
            case He.Digit2:
            case He.Numpad2:
                S(), W.actions.internal.seekToPercent(.2, (0, _esnextEsmJs2.SeekAction).DOUBLE_TAP), ee.preventDefault();
                break;
            case He.Digit3:
            case He.Numpad3:
                S(), W.actions.internal.seekToPercent(.3, (0, _esnextEsmJs2.SeekAction).DOUBLE_TAP), ee.preventDefault();
                break;
            case He.Digit4:
            case He.Numpad4:
                S(), W.actions.internal.seekToPercent(.4, (0, _esnextEsmJs2.SeekAction).DOUBLE_TAP), ee.preventDefault();
                break;
            case He.Digit5:
            case He.Numpad5:
                S(), W.actions.internal.seekToPercent(.5, (0, _esnextEsmJs2.SeekAction).DOUBLE_TAP), ee.preventDefault();
                break;
            case He.Digit6:
            case He.Numpad6:
                S(), W.actions.internal.seekToPercent(.6, (0, _esnextEsmJs2.SeekAction).DOUBLE_TAP), ee.preventDefault();
                break;
            case He.Digit7:
            case He.Numpad7:
                S(), W.actions.internal.seekToPercent(.7, (0, _esnextEsmJs2.SeekAction).DOUBLE_TAP), ee.preventDefault();
                break;
            case He.Digit8:
            case He.Numpad8:
                S(), W.actions.internal.seekToPercent(.8, (0, _esnextEsmJs2.SeekAction).DOUBLE_TAP), ee.preventDefault();
                break;
            case He.Digit9:
            case He.Numpad9:
                S(), W.actions.internal.seekToPercent(.9, (0, _esnextEsmJs2.SeekAction).DOUBLE_TAP), ee.preventDefault();
                break;
            case He.Digit0:
            case He.Numpad0:
                S(), W.actions.internal.seekToPercent(0, (0, _esnextEsmJs2.SeekAction).DOUBLE_TAP), ee.preventDefault();
                break;
            case He.Slash:
                ee.shiftKey && X.features.hotKeyMapModal && (P(), ee.preventDefault());
                break;
            case He.ShiftLeft:
            case He.ShiftRight:
                ee.preventDefault();
                break;
            default:
                (0, _esnextEsmJs1.checkNever)(R);
                break;
        }
    }, Y = (ee)=>{
        const R = ee.code;
        if (ee.ctrlKey || ee.altKey || ee.metaKey) return;
        const Q = o === (0, _esnextEsmJs.PlaybackState).PLAYING || o === (0, _esnextEsmJs.PlaybackState).PAUSED, Ve = _ && (n === Ot.PAUSED || n === Ot.PLAYING);
        if (Q || Ve) switch(R){
            case He.ShiftLeft:
            case He.ShiftRight:
                ve = 0;
                break;
        }
    };
    function pe(ee) {
        We[ee ? "unshift" : "push"](()=>{
            Ee = ee, t(0, Ee);
        });
    }
    return i.$$set = (ee)=>{
        "isAds" in ee && t(13, _ = ee.isAds), "hideContextMenu" in ee && t(14, V = ee.hideContextMenu), "toggleFullscreen" in ee && t(15, A = ee.toggleFullscreen), "showHotKeyHelpers" in ee && t(16, S = ee.showHotKeyHelpers), "showKeyMap" in ee && t(17, P = ee.showKeyMap), "fakePlayButtonHandler" in ee && t(18, N = ee.fakePlayButtonHandler), "$$scope" in ee && t(20, b = ee.$$scope);
    }, [
        Ee,
        T,
        te,
        j,
        ie,
        G,
        J,
        ue,
        w,
        oe,
        fe,
        M,
        Y,
        _,
        V,
        A,
        S,
        P,
        N,
        we,
        b,
        v,
        pe
    ];
}
class hf extends ke {
    constructor(e){
        super(), _e(this, e, mf, df, ge, {
            isAds: 13,
            hideContextMenu: 14,
            toggleFullscreen: 15,
            showHotKeyHelpers: 16,
            showKeyMap: 17,
            fakePlayButtonHandler: 18,
            focus: 19
        }, ff, [
            -1,
            -1
        ]);
    }
    get focus() {
        return this.$$.ctx[19];
    }
}
function pf(i) {
    Fe(i, "v-8nkw5s", ".container.v-8nkw5s.v-8nkw5s{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);pointer-events:none;display:flex}.dot.v-8nkw5s.v-8nkw5s:nth-child(1){animation-delay:calc(0 * 180ms)}.dot.v-8nkw5s.v-8nkw5s:nth-child(2){animation-delay:calc(1 * 180ms)}.dot.v-8nkw5s.v-8nkw5s:nth-child(3){animation-delay:calc(2 * 180ms)}@keyframes v-8nkw5s-dot_animation{0%{opacity:0.2}30%{opacity:1}100%{opacity:0.2}}.dot.v-8nkw5s.v-8nkw5s{border-radius:4px;width:8px;height:8px;background:var(--white);animation-duration:750ms;animation-name:v-8nkw5s-dot_animation;animation-iteration-count:infinite}.dot.v-8nkw5s+.dot.v-8nkw5s{margin-left:4px}");
}
function gf(i) {
    let e;
    return {
        c () {
            e = k("div"), e.innerHTML = '<div class="dot v-8nkw5s"></div> <div class="dot v-8nkw5s"></div> <div class="dot v-8nkw5s"></div>', u(e, "class", "container v-8nkw5s");
        },
        m (t, n) {
            C(t, e, n);
        },
        p: K,
        i: K,
        o: K,
        d (t) {
            t && y(e);
        }
    };
}
class u1 extends ke {
    constructor(e){
        super(), _e(this, e, null, gf, ge, {}, pf);
    }
}
function bf(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v;
    return {
        c () {
            e = I("svg"), t = I("g"), n = I("path"), o = I("path"), l = I("defs"), s = I("filter"), a = I("feFlood"), r = I("feColorMatrix"), c = I("feOffset"), f = I("feGaussianBlur"), h = I("feColorMatrix"), g = I("feBlend"), v = I("feBlend"), u(n, "d", "M7.536 6.264a.9.9 0 0 0-1.272 1.272L10.727 12l-4.463 4.464a.9.9 0 0 0 1.272 1.272L12 13.273l4.464 4.463a.9.9 0 1 0 1.272-1.272L13.273 12l4.463-4.464a.9.9 0 1 0-1.272-1.272L12 10.727 7.536 6.264Z"), u(n, "fill", "#fff"), u(o, "d", "M7.713 6.087a1.15 1.15 0 1 0-1.626 1.626L10.374 12l-4.287 4.287a1.15 1.15 0 0 0 1.626 1.626L12 13.626l4.287 4.287a1.15 1.15 0 0 0 1.626-1.626L13.626 12l4.287-4.287a1.15 1.15 0 1 0-1.626-1.626L12 10.374 7.713 6.087Z"), u(o, "stroke", "#000"), u(o, "stroke-opacity", ".12"), u(o, "stroke-width", ".5"), u(t, "filter", "url(#a)"), u(a, "flood-opacity", "0"), u(a, "result", "BackgroundImageFix"), u(r, "in", "SourceAlpha"), u(r, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"), u(r, "result", "hardAlpha"), u(f, "stdDeviation", "2.5"), u(h, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"), u(g, "in2", "BackgroundImageFix"), u(g, "result", "effect1_dropShadow_2422_111980"), u(v, "in", "SourceGraphic"), u(v, "in2", "effect1_dropShadow_2422_111980"), u(v, "result", "shape"), u(s, "id", "a"), u(s, "x", ".5"), u(s, "y", ".5"), u(s, "width", "23"), u(s, "height", "23"), u(s, "filterUnits", "userSpaceOnUse"), u(s, "color-interpolation-filters", "sRGB"), u(e, "width", "24"), u(e, "height", "24"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "cross-icon");
        },
        m (b, _) {
            C(b, e, _), d(e, t), d(t, n), d(t, o), d(e, l), d(l, s), d(s, a), d(s, r), d(s, c), d(s, f), d(s, h), d(s, g), d(s, v);
        },
        p: K,
        i: K,
        o: K,
        d (b) {
            b && y(e);
        }
    };
}
class vf extends ke {
    constructor(e){
        super(), _e(this, e, null, bf, ge, {});
    }
}
function _f(i) {
    Fe(i, "v-1anemql", ".btn.v-1anemql{padding:8px;margin:0;height:var(--controls-height);display:flex;flex-direction:row;align-items:center}.w-max.v-1anemql{width:100%}.btn--live.v-1anemql{padding:10px 4px}.btn-m.v-1anemql{position:absolute;left:12px;top:50%;transform:translateY(-50%);height:44px;width:44px;border-radius:12px;background-color:rgba(0, 0, 0, 0.56);transition:opacity var(--controls-transition-duration);display:flex;align-items:center;justify-content:center}.btn-m--play.v-1anemql{width:var(--big-play-size);height:var(--big-play-size);display:flex;align-items:center;justify-content:center;position:relative;padding:16px}.btn.v-1anemql:disabled{cursor:default;pointer-events:none}.btn.v-1anemql:not(.btn-full-opacity):disabled{opacity:0.4}.btn.v-1anemql:not(:disabled):hover{opacity:0.8}.pr-0.v-1anemql{padding-right:0}.pl-0.v-1anemql{padding-left:0}");
}
function kf(i) {
    let e, t, n, o, l, s, a, r, c, f, h;
    const g = i[9].default, v = wn(g, i, i[8], null);
    return {
        c () {
            e = k("button"), v && v.c(), u(e, "class", t = "btn " + i[0] + " v-1anemql"), u(e, "style", n = i[1] || null), e.disabled = o = i[2] ?? null, u(e, "aria-hidden", l = i[4] ?? null), u(e, "aria-label", s = i[5] ?? null), u(e, "aria-keyshortcuts", a = i[6] ?? null), u(e, "data-testid", r = i[3] ?? null);
        },
        m (b, _) {
            C(b, e, _), v && v.m(e, null), c = !0, f || (h = [
                Ae(e, "pointerdown", rt(di(i[10]))),
                Ae(e, "click", rt(di(function() {
                    kn(i[7]) && i[7].apply(this, arguments);
                })))
            ], f = !0);
        },
        p (b, [_]) {
            i = b, v && v.p && (!c || _ & 256) && Cn(v, g, i, i[8], c ? yn(g, i[8], _, null) : Pn(i[8]), null), (!c || _ & 1 && t !== (t = "btn " + i[0] + " v-1anemql")) && u(e, "class", t), (!c || _ & 2 && n !== (n = i[1] || null)) && u(e, "style", n), (!c || _ & 4 && o !== (o = i[2] ?? null)) && (e.disabled = o), (!c || _ & 16 && l !== (l = i[4] ?? null)) && u(e, "aria-hidden", l), (!c || _ & 32 && s !== (s = i[5] ?? null)) && u(e, "aria-label", s), (!c || _ & 64 && a !== (a = i[6] ?? null)) && u(e, "aria-keyshortcuts", a), (!c || _ & 8 && r !== (r = i[3] ?? null)) && u(e, "data-testid", r);
        },
        i (b) {
            c || (m(v, b), c = !0);
        },
        o (b) {
            p(v, b), c = !1;
        },
        d (b) {
            b && y(e), v && v.d(b), f = !1, xt(h);
        }
    };
}
function wf(i, e, t) {
    let { $$slots: n = {}, $$scope: o } = e, { className: l = "" } = e, { style: s = "" } = e, { disabled: a } = e, { testId: r } = e, { ariaHidden: c } = e, { ariaLabel: f } = e, { ariaKeyShortCut: h } = e, { click: g = (0, _esnextEsmJs1.noop) } = e;
    function v(b) {
        Jn.call(this, i, b);
    }
    return i.$$set = (b)=>{
        "className" in b && t(0, l = b.className), "style" in b && t(1, s = b.style), "disabled" in b && t(2, a = b.disabled), "testId" in b && t(3, r = b.testId), "ariaHidden" in b && t(4, c = b.ariaHidden), "ariaLabel" in b && t(5, f = b.ariaLabel), "ariaKeyShortCut" in b && t(6, h = b.ariaKeyShortCut), "click" in b && t(7, g = b.click), "$$scope" in b && t(8, o = b.$$scope);
    }, [
        l,
        s,
        a,
        r,
        c,
        f,
        h,
        g,
        o,
        n,
        v
    ];
}
class mi extends ke {
    constructor(e){
        super(), _e(this, e, wf, kf, ge, {
            className: 0,
            style: 1,
            disabled: 2,
            testId: 3,
            ariaHidden: 4,
            ariaLabel: 5,
            ariaKeyShortCut: 6,
            click: 7
        }, _f);
    }
}
function yf(i) {
    Fe(i, "v-1witlsj", ".modal-overlay.v-1witlsj{position:absolute;top:0;bottom:0;left:0;right:0;background:transparent;display:flex;align-items:center;justify-content:center}.modal-container.v-1witlsj{display:flex;flex-direction:column;width:calc(100% - 32px);max-width:600px;height:calc(100% - 24px);max-height:490px;background:var(--mobile-settings-bg);color:var(--white);border-radius:8px}.modal-header.v-1witlsj{box-sizing:border-box;display:flex;justify-content:space-between;align-items:start;height:40px;padding:8px 10px;border-bottom:1px solid var(--white-alpha-24)}.modal-title.v-1witlsj{margin:3px 0 0 6px;color:var(--white);font-feature-settings:'clig' off, 'liga' off;font-size:13px;font-style:normal;font-weight:600;line-height:16px}.modal-scroll.v-1witlsj{overflow-y:auto;overflow-x:hidden;margin:8px 4px 8px 0;height:100%}.modal-scroll.v-1witlsj::-webkit-scrollbar{width:8px}.modal-scroll.v-1witlsj::-webkit-scrollbar-track{box-shadow:none;background-color:transparent;border-radius:4px;margin-right:2px}.modal-scroll.v-1witlsj::-webkit-scrollbar-thumb{min-height:40px;border-radius:5px;background-color:#666;border:1px solid transparent;background-clip:padding-box}.modal-scroll.v-1witlsj::-webkit-scrollbar-thumb:hover{background-color:#777}.modal-main.v-1witlsj{margin:-8px -4px 0 0}");
}
function jl(i) {
    let e, t, n, o, l, s = i[2] && Gl(i);
    return {
        c () {
            e = k("div"), t = k("h3"), n = ze(i[3]), o = B(), s && s.c(), u(t, "class", "modal-title v-1witlsj"), u(e, "class", "modal-header v-1witlsj");
        },
        m (a, r) {
            C(a, e, r), d(e, t), d(t, n), d(e, o), s && s.m(e, null), l = !0;
        },
        p (a, r) {
            (!l || r & 8) && Xe(n, a[3]), a[2] ? s ? (s.p(a, r), r & 4 && m(s, 1)) : (s = Gl(a), s.c(), m(s, 1), s.m(e, null)) : s && (me(), p(s, 1, 1, ()=>{
                s = null;
            }), he());
        },
        i (a) {
            l || (m(s), l = !0);
        },
        o (a) {
            p(s), l = !1;
        },
        d (a) {
            a && y(e), s && s.d();
        }
    };
}
function Gl(i) {
    let e, t;
    return e = new mi({
        props: {
            click: i[0],
            testId: "close-modal",
            style: "padding: 0; height: 24px; width: 24px",
            ariaLabel: U("hotkey_map_modal_close_btn_text"),
            $$slots: {
                default: [
                    Cf
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 1 && (l.click = n[0]), o & 32 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Cf(i) {
    let e, t;
    return e = new vf({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Pf(i) {
    let e, t, n, o, l, s, a = i[1] && jl(i);
    const r = i[4].default, c = wn(r, i, i[5], null);
    return {
        c () {
            e = k("div"), t = k("div"), a && a.c(), n = B(), o = k("div"), l = k("div"), c && c.c(), u(l, "class", "modal-main v-1witlsj"), u(o, "class", "modal-scroll v-1witlsj"), u(t, "class", "modal-container v-1witlsj"), u(e, "class", "modal-overlay v-1witlsj");
        },
        m (f, h) {
            C(f, e, h), d(e, t), a && a.m(t, null), d(t, n), d(t, o), d(o, l), c && c.m(l, null), s = !0;
        },
        p (f, [h]) {
            f[1] ? a ? (a.p(f, h), h & 2 && m(a, 1)) : (a = jl(f), a.c(), m(a, 1), a.m(t, n)) : a && (me(), p(a, 1, 1, ()=>{
                a = null;
            }), he()), c && c.p && (!s || h & 32) && Cn(c, r, f, f[5], s ? yn(r, f[5], h, null) : Pn(f[5]), null);
        },
        i (f) {
            s || (m(a), m(c, f), s = !0);
        },
        o (f) {
            p(a), p(c, f), s = !1;
        },
        d (f) {
            f && y(e), a && a.d(), c && c.d(f);
        }
    };
}
function Sf(i, e, t) {
    let { $$slots: n = {}, $$scope: o } = e, { onClose: l } = e, { showHeader: s = !0 } = e, { showCloseCross: a = !0 } = e, { title: r } = e;
    return i.$$set = (c)=>{
        "onClose" in c && t(0, l = c.onClose), "showHeader" in c && t(1, s = c.showHeader), "showCloseCross" in c && t(2, a = c.showCloseCross), "title" in c && t(3, r = c.title), "$$scope" in c && t(5, o = c.$$scope);
    }, [
        l,
        s,
        a,
        r,
        n,
        o
    ];
}
class Tf extends ke {
    constructor(e){
        super(), _e(this, e, Sf, Pf, ge, {
            onClose: 0,
            showHeader: 1,
            showCloseCross: 2,
            title: 3
        }, yf);
    }
}
const Af = new Set([
    "BR"
]), Kl = (i)=>{
    const e = document.createElement("DIV");
    e.innerHTML = i;
    const t = e.querySelectorAll("*");
    let n = t.length;
    for(; n--;){
        const o = t[n], l = o.tagName;
        Af.has(l) || o.parentElement?.removeChild(o);
    }
    return e.innerHTML;
};
function Ef(i) {
    Fe(i, "v-quklnq", ".hot-key-map.v-quklnq{color:var(--black);box-sizing:border-box;overflow-x:hidden}.hot-key-map-group.v-quklnq{border-bottom:1px solid var(--white-alpha-24);margin:0 20px 0 16px}.hot-key-map-group.v-quklnq:last-child{border-bottom:none}.hot-key-map-group-title.v-quklnq{color:var(--white);font-feature-settings:'clig' off, 'liga' off;font-size:13px;font-style:normal;font-weight:600;line-height:16px}.hot-key-map-group-title.v-quklnq,.hot-key-map-item.v-quklnq{padding:12px 0;margin:0;width:100%}.hot-key-map-group-items.v-quklnq{box-sizing:border-box;list-style:none;padding:0;margin:0}.hot-key-map-item.v-quklnq{box-sizing:border-box;display:flex;justify-content:space-between;align-items:center;--videoplayer-hotkey-item-value-width:156px;--videoplayer-hotkey-item-value-padding-left:24px}.hot-key-map-item-description.v-quklnq{color:var(--white-alpha-72);width:calc(100% - var(--videoplayer-hotkey-item-value-width) - var(--videoplayer-hotkey-item-value-padding-left));max-width:388px}.hot-key-map-item-value.v-quklnq{color:var(--white);width:var(--videoplayer-hotkey-item-value-width);padding-left:var(--videoplayer-hotkey-item-value-padding-left);letter-spacing:-0.14px}.hot-key-map-item-description.v-quklnq,.hot-key-map-item-value.v-quklnq{font-feature-settings:'clig' off, 'liga' off;font-size:13px;font-style:normal;font-weight:400;line-height:16px}");
}
function Yl(i, e, t) {
    const n = i.slice();
    return n[5] = e[t].title, n[6] = e[t].items, n;
}
function Ql(i, e, t) {
    const n = i.slice();
    return n[9] = e[t].description, n[10] = e[t].value, n;
}
function Xl(i) {
    let e, t, n = Kl(i[9]) + "", o, l, s = i[10] + "", a, r;
    return {
        c () {
            e = k("li"), t = k("span"), o = B(), l = k("span"), a = ze(s), r = B(), u(t, "class", "hot-key-map-item-description v-quklnq"), u(l, "class", "hot-key-map-item-value v-quklnq"), u(e, "class", "hot-key-map-item v-quklnq");
        },
        m (c, f) {
            C(c, e, f), d(e, t), t.innerHTML = n, d(e, o), d(e, l), d(l, a), d(e, r);
        },
        p (c, f) {
            f & 1 && n !== (n = Kl(c[9]) + "") && (t.innerHTML = n), f & 1 && s !== (s = c[10] + "") && Xe(a, s);
        },
        d (c) {
            c && y(e);
        }
    };
}
function Jl(i) {
    let e, t, n = i[5] + "", o, l, s, a, r = Mt(i[6]), c = [];
    for(let f = 0; f < r.length; f += 1)c[f] = Xl(Ql(i, r, f));
    return {
        c () {
            e = k("div"), t = k("h5"), o = ze(n), l = B(), s = k("ul");
            for(let f = 0; f < c.length; f += 1)c[f].c();
            a = B(), u(t, "class", "hot-key-map-group-title v-quklnq"), u(s, "class", "hot-key-map-group-items v-quklnq"), u(e, "class", "hot-key-map-group v-quklnq");
        },
        m (f, h) {
            C(f, e, h), d(e, t), d(t, o), d(e, l), d(e, s);
            for(let g = 0; g < c.length; g += 1)c[g] && c[g].m(s, null);
            d(e, a);
        },
        p (f, h) {
            if (h & 1 && n !== (n = f[5] + "") && Xe(o, n), h & 1) {
                r = Mt(f[6]);
                let g;
                for(g = 0; g < r.length; g += 1){
                    const v = Ql(f, r, g);
                    c[g] ? c[g].p(v, h) : (c[g] = Xl(v), c[g].c(), c[g].m(s, null));
                }
                for(; g < c.length; g += 1)c[g].d(1);
                c.length = r.length;
            }
        },
        d (f) {
            f && y(e), sn(c, f);
        }
    };
}
function Lf(i) {
    let e, t = Mt(i[0].groups), n = [];
    for(let o = 0; o < t.length; o += 1)n[o] = Jl(Yl(i, t, o));
    return {
        c () {
            e = k("div");
            for(let o = 0; o < n.length; o += 1)n[o].c();
            u(e, "class", "hot-key-map v-quklnq");
        },
        m (o, l) {
            C(o, e, l);
            for(let s = 0; s < n.length; s += 1)n[s] && n[s].m(e, null);
        },
        p (o, l) {
            if (l & 1) {
                t = Mt(o[0].groups);
                let s;
                for(s = 0; s < t.length; s += 1){
                    const a = Yl(o, t, s);
                    n[s] ? n[s].p(a, l) : (n[s] = Jl(a), n[s].c(), n[s].m(e, null));
                }
                for(; s < n.length; s += 1)n[s].d(1);
                n.length = t.length;
            }
        },
        d (o) {
            o && y(e), sn(n, o);
        }
    };
}
function Vf(i) {
    let e, t;
    return e = new Tf({
        props: {
            title: i[0].title,
            onClose: i[2],
            $$slots: {
                default: [
                    Lf
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 1 && (l.title = n[0].title), o & 8193 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function If(i, e, t) {
    let n;
    const o = vt(), { data: l, show: s } = o.ui.modals.hotKeyMap;
    return F(i, l, (r)=>t(0, n = r)), [
        n,
        l,
        ()=>{
            s.set(!1);
        }
    ];
}
class Mf extends ke {
    constructor(e){
        super(), _e(this, e, If, Vf, ge, {}, Ef);
    }
}
function Rf(i) {
    Fe(i, "v-1oe0j8n", ".pillow.v-1oe0j8n{background-color:#679FF8;color:var(--white);font-size:6px;font-weight:600;-webkit-font-smoothing:antialiased;padding:2px 4px;border-radius:12px}");
}
function Bf(i) {
    let e, t;
    const n = i[1].default, o = wn(n, i, i[0], null);
    return {
        c () {
            e = k("div"), o && o.c(), u(e, "class", "pillow v-1oe0j8n");
        },
        m (l, s) {
            C(l, e, s), o && o.m(e, null), t = !0;
        },
        p (l, [s]) {
            o && o.p && (!t || s & 1) && Cn(o, n, l, l[0], t ? yn(n, l[0], s, null) : Pn(l[0]), null);
        },
        i (l) {
            t || (m(o, l), t = !0);
        },
        o (l) {
            p(o, l), t = !1;
        },
        d (l) {
            l && y(e), o && o.d(l);
        }
    };
}
function Nf(i, e, t) {
    let { $$slots: n = {}, $$scope: o } = e;
    return i.$$set = (l)=>{
        "$$scope" in l && t(0, o = l.$$scope);
    }, [
        o,
        n
    ];
}
class zf extends ke {
    constructor(e){
        super(), _e(this, e, Nf, Bf, ge, {}, Rf);
    }
}
function Of(i) {
    let e, t, n;
    return {
        c () {
            e = I("svg"), t = I("path"), n = I("path"), u(t, "d", "M5.517 5c.325 0 .516-.198.516-.536v-.97l.492-.517 1.46 1.74c.16.205.304.283.516.283A.491.491 0 0 0 9 4.501c0-.14-.068-.287-.222-.478l-1.47-1.73L8.818.868C8.949.731 9 .618 9 .475A.474.474 0 0 0 8.515 0c-.171 0-.301.065-.445.222L6.064 2.25h-.03V.54c0-.342-.192-.54-.517-.54s-.516.198-.516.54v3.924c0 .338.191.536.516.536Z"), u(t, "fill", "currentColor"), u(n, "fill-rule", "evenodd"), u(n, "clip-rule", "evenodd"), u(n, "d", "m2.551 1.052-1.51 2.052h1.51V1.052ZM3.5 3.104V.832c0-.81-1.089-1.14-1.556-.48L.139 2.821a.75.75 0 0 0 .612 1.183h1.8v.55c0 .248.25.45.499.45a.45.45 0 0 0 .45-.45v-.55h.052a.45.45 0 0 0 0-.9H3.5Z"), u(n, "fill", "currentColor"), u(e, "width", "9"), u(e, "height", "5"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
        },
        m (o, l) {
            C(o, e, l), d(e, t), d(e, n);
        },
        p: K,
        i: K,
        o: K,
        d (o) {
            o && y(e);
        }
    };
}
class Df extends ke {
    constructor(e){
        super(), _e(this, e, null, Of, ge, {});
    }
}
function Hf(i) {
    let e, t, n;
    return {
        c () {
            e = I("svg"), t = I("path"), n = I("path"), u(t, "d", "M5.513 5c.323 0 .513-.198.513-.537v-.97l.49-.516L7.99 4.715c.16.205.302.284.513.284A.49.49 0 0 0 9 4.5c0-.14-.068-.287-.22-.478L7.293 2.293 8.82.868C8.949.731 9 .618 9 .475A.473.473 0 0 0 8.517 0c-.17 0-.299.065-.441.222L6.056 2.25h-.03V.54c0-.342-.19-.54-.513-.54S5 .198 5 .54v3.923c0 .339.19.537.513.537Z"), u(t, "fill", "currentColor"), u(n, "fill-rule", "evenodd"), u(n, "clip-rule", "evenodd"), u(n, "d", "M2 0c-.353 0-.671.057-.952.173a1.492 1.492 0 0 0-.654.484c-.154.208-.23.445-.23.71 0 .423.208.756.613.995-.23.112-.412.258-.547.44-.154.203-.23.441-.23.71 0 .288.084.548.252.778l.001.001c.173.224.412.398.712.523C1.267 4.939 1.612 5 2 5c.388 0 .733-.061 1.035-.186.3-.125.537-.299.705-.524.174-.23.26-.49.26-.777 0-.27-.076-.508-.23-.711a1.448 1.448 0 0 0-.552-.44c.409-.235.618-.569.618-.994a1.14 1.14 0 0 0-.238-.711 1.436 1.436 0 0 0-.653-.484A2.427 2.427 0 0 0 2 0Zm-.573.964C1.563.86 1.75.804 2 .804c.25 0 .434.055.564.16h.001a.512.512 0 0 1 .204.43c0 .19-.07.333-.204.437-.13.105-.315.161-.565.161-.25 0-.437-.056-.573-.161a.519.519 0 0 1-.203-.437c0-.185.07-.326.203-.43Zm-.345 2.522c0-.217.08-.381.233-.503.16-.122.385-.188.685-.188.3 0 .522.066.677.188.16.122.24.287.24.503a.628.628 0 0 1-.24.523c-.155.122-.377.188-.677.188-.3 0-.524-.065-.684-.187a.637.637 0 0 1-.234-.524Z"), u(n, "fill", "currentColor"), u(e, "width", "9"), u(e, "height", "5"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
        },
        m (o, l) {
            C(o, e, l), d(e, t), d(e, n);
        },
        p: K,
        i: K,
        o: K,
        d (o) {
            o && y(e);
        }
    };
}
class Ff extends ke {
    constructor(e){
        super(), _e(this, e, null, Hf, ge, {});
    }
}
function Uf(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "d", "M5.516 5h1.107C8.103 5 9 4.065 9 2.5S8.103 0 6.623 0H5.516C5.191 0 5 .2 5 .537V4.46c0 .342.191.54.516.54Zm.516-.854V.852H6.5C7.41.852 8 1.468 8 2.5c0 1.066-.577 1.646-1.5 1.646h-.468ZM.516 5c.325 0 .516-.198.516-.536V2.922h1.936v1.542c0 .338.191.536.516.536S4 4.802 4 4.464V.54C4 .198 3.809 0 3.484 0s-.516.198-.516.54v1.531H1.032V.54C1.032.198.841 0 .516 0S0 .198 0 .54v3.989C0 4.867.191 5 .516 5Z"), u(t, "fill", "currentColor"), u(e, "width", "9"), u(e, "height", "5"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class qf extends ke {
    constructor(e){
        super(), _e(this, e, null, Uf, ge, {});
    }
}
function Wf(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "d", "M9.516 5h1.107C12.103 5 13 4.065 13 2.5S12.103 0 10.623 0H9.516C9.191 0 9 .2 9 .537V4.46c0 .342.191.54.516.54Zm.516-.854V.852h.468c.91 0 1.5.616 1.5 1.648 0 1.066-.577 1.646-1.5 1.646h-.468ZM4.516 5c.325 0 .516-.198.516-.536V2.922h1.936v1.542c0 .338.191.536.516.536S8 4.802 8 4.464V.54C8 .198 7.809 0 7.484 0s-.516.198-.516.54v1.531H5.032V.54c0-.342-.191-.54-.516-.54S4 .198 4 .54v3.989c0 .338.191.471.516.471ZM.516 5c.325 0 .516-.198.516-.537V3h1.332c.27 0 .441-.154.441-.41 0-.253-.174-.407-.44-.407H1.031V.854h1.5c.28 0 .468-.16.468-.427C3 .161 2.815 0 2.532 0H.516C.191 0 0 .198 0 .537v3.926C0 4.802.191 5 .516 5Z"), u(t, "fill", "currentColor"), u(e, "width", "13"), u(e, "height", "5"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class c1 extends ke {
    constructor(e){
        super(), _e(this, e, null, Wf, ge, {});
    }
}
function Zf(i) {
    let e, t, n;
    return {
        c () {
            e = I("svg"), t = I("path"), n = I("path"), u(t, "d", "M11.516 5.75h1.107c1.48 0 2.377-.935 2.377-2.5s-.897-2.5-2.377-2.5h-1.107c-.325 0-.516.199-.516.537V5.21c0 .342.191.54.516.54Zm.516-.854V1.602h.468c.91 0 1.5.616 1.5 1.648 0 1.066-.577 1.646-1.5 1.646h-.468ZM6.516 5.75c.325 0 .516-.198.516-.536V3.672h1.936v1.542c0 .338.191.536.516.536S10 5.552 10 5.214V1.29c0-.342-.191-.54-.516-.54s-.516.198-.516.54v1.531H7.032V1.29c0-.342-.191-.54-.516-.54S6 .948 6 1.29v3.989c0 .338.191.471.516.471Z"), u(t, "fill", "currentColor"), u(n, "fill-rule", "evenodd"), u(n, "clip-rule", "evenodd"), u(n, "d", "M3.338 5.659a3.9 3.9 0 0 1-.838.091C1.037 5.75 0 4.885 0 3.303 0 1.733 1.037.75 2.5.75 3.96.75 5 1.734 5 3.303c0 .863-.274 1.46-.778 1.88l.194.29a.5.5 0 0 1-.832.554l-.246-.368Zm-.52-.78-.234-.352a.5.5 0 1 1 .832-.554l.245.367c.184-.26.286-.615.286-1.037 0-1.036-.64-1.653-1.447-1.653-.81 0-1.447.617-1.447 1.653 0 1.032.637 1.596 1.447 1.596.08 0 .208-.007.318-.02Z"), u(n, "fill", "currentColor"), u(e, "width", "15"), u(e, "height", "7"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
        },
        m (o, l) {
            C(o, e, l), d(e, t), d(e, n);
        },
        p: K,
        i: K,
        o: K,
        d (o) {
            o && y(e);
        }
    };
}
class f1 extends ke {
    constructor(e){
        super(), _e(this, e, null, Zf, ge, {});
    }
}
const eo = (i)=>{
    switch(i){
        case (0, _esnextEsmJs.VideoQuality).Q_720P:
            return qf;
        case (0, _esnextEsmJs.VideoQuality).Q_1080P:
            return c1;
        case (0, _esnextEsmJs.VideoQuality).Q_1440P:
            return f1;
        case (0, _esnextEsmJs.VideoQuality).Q_2160P:
            return Df;
        case (0, _esnextEsmJs.VideoQuality).Q_4320P:
            return Ff;
    }
};
function jf(i) {
    Fe(i, "v-1fzhlx0", ".icon.v-1fzhlx0{display:flex;position:relative;width:24px;height:24px}.icon.v-1fzhlx0 .pillow{position:absolute;top:1px;right:-9px}.icon.triple.v-1fzhlx0 .pillow{right:-13px}");
}
function Gf(i) {
    let e, t, n, o, l, s, a = i[1] && xl(i);
    return {
        c () {
            e = k("div"), a && a.c(), t = B(), n = I("svg"), o = I("path"), l = I("path"), u(o, "fill-rule", "evenodd"), u(o, "clip-rule", "evenodd"), u(o, "d", "M13.933 4.875a.6.6 0 0 0-.07-.658c-.327-.413-.45-.833-.574-1.253l-.039-.13C13 2 12.833 2 12.417 2h-.91c-.371.003-.6.052-.757.833-.148.738-.36 1.476-1.566 2.186a.466.466 0 0 1-.12.05c-1.27.324-1.905-.023-2.542-.37l-.12-.065c-.766-.412-.884-.294-1.178 0l-.643.644c-.26.264-.389.461.053 1.124.418.626.789 1.299.438 2.654a.466.466 0 0 1-.05.12c-.668 1.126-1.362 1.33-2.058 1.535l-.13.039C2 11 2 11.167 2 11.583v.91c.003.371.052.6.833.757.738.148 1.476.36 2.186 1.566a.465.465 0 0 1 .05.12c.324 1.27-.023 1.905-.37 2.542l-.065.12c-.412.766-.294.884 0 1.178l.644.643c.264.26.461.389 1.124-.053.626-.418 1.299-.789 2.654-.438.041.01.083.028.12.05 1.126.668 1.33 1.362 1.535 2.058l.039.13c.25.834.417.834.833.834h.91c.371-.003.6-.052.757-.833.148-.738.36-1.476 1.566-2.186a.467.467 0 0 1 .12-.05c1.27-.324 1.905.023 2.542.37l.12.065c.766.412.884.294 1.178 0l.643-.644c.26-.264.389-.461-.053-1.124-.26-.39-.503-.799-.563-1.38a.598.598 0 0 0-.413-.519 7.464 7.464 0 0 1-1.918-.871.58.58 0 0 0-.758.134 4.75 4.75 0 1 1-3.163-7.68.581.581 0 0 0 .633-.44 7.448 7.448 0 0 1 .749-1.967Z"), u(o, "fill", "#fff"), u(l, "d", "M13.25 2.833c.225.751.383 1.502 1.63 2.222 1.399.38 2.082.003 2.718-.42.663-.443.86-.315 1.124-.054l.644.643c.294.294.412.412 0 1.178-.372.69-.792 1.333-.418 2.726.72 1.255 1.47 1.472 2.219 1.622.78.156.83.386.833.757v.91c0 .416 0 .583-.833.833-.751.225-1.502.383-2.222 1.63-.38 1.399-.003 2.082.42 2.718.443.663.315.86.054 1.124l-.643.644c-.294.294-.412.412-1.178 0-.69-.372-1.333-.792-2.726-.418-1.255.72-1.472 1.47-1.622 2.219-.156.78-.386.83-.757.833h-.91c-.416 0-.583 0-.833-.833-.225-.751-.383-1.502-1.63-2.222-1.399-.38-2.082-.003-2.718.42-.663.443-.86.315-1.124.054l-.644-.643c-.294-.294-.412-.412 0-1.178.372-.69.792-1.333.418-2.726-.72-1.255-1.47-1.472-2.219-1.622-.78-.156-.83-.386-.833-.757v-.91c0-.416 0-.583.833-.833.751-.225 1.502-.383 2.222-1.63.38-1.399.003-2.082-.42-2.718-.443-.663-.315-.86-.054-1.124l.643-.644c.294-.294.412-.412 1.178 0 .69.372 1.333.792 2.726.418 1.255-.72 1.472-1.47 1.622-2.219.156-.78.386-.83.757-.833h.91c.416 0 .583 0 .833.833ZM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z"), u(l, "fill", "#fff"), L(l, "hidden", !!i[1]), u(n, "width", "24"), u(n, "height", "24"), u(n, "fill", "none"), u(n, "xmlns", "http://www.w3.org/2000/svg"), u(n, "data-testid", "settings-icon"), u(e, "class", "icon v-1fzhlx0"), u(e, "aria-hidden", "true"), L(e, "triple", i[2]);
        },
        m (r, c) {
            C(r, e, c), a && a.m(e, null), d(e, t), d(e, n), d(n, o), d(n, l), s = !0;
        },
        p (r, c) {
            r[1] ? a ? (a.p(r, c), c & 2 && m(a, 1)) : (a = xl(r), a.c(), m(a, 1), a.m(e, t)) : a && (me(), p(a, 1, 1, ()=>{
                a = null;
            }), he()), (!s || c & 2) && L(l, "hidden", !!r[1]), (!s || c & 4) && L(e, "triple", r[2]);
        },
        i (r) {
            s || (m(a), s = !0);
        },
        o (r) {
            p(a), s = !1;
        },
        d (r) {
            r && y(e), a && a.d();
        }
    };
}
function Kf(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "d", "M12.722 2.213c1.208.037 1.994.702 2.408 1.954l.065.215.051.191c.018.074.041.153.068.235l.058.159.034.017.069-.023.133-.051.156-.068c1.414-.658 2.502-.536 3.387.437l.125.145.82 1.017c.732.962.71 1.99-.004 3.1l-.125.187-.117.16a3.315 3.315 0 0 0-.142.205l-.07.115-.034.057.004.02.091.06.127.077.153.083c1.39.71 1.963 1.641 1.742 2.936l-.038.188-.244 1.058c-.158.685-.282 1.01-.77 1.454-.475.432-1.016.61-1.732.67l-.22.014-.198.006c-.077.002-.16.006-.246.015l-.181.021.013.142.013.096.033.179c.323 1.526-.04 2.558-1.188 3.202l-.17.09-1.175.57c-1.102.495-2.099.242-3.02-.702l-.153-.164-.13-.15a3.333 3.333 0 0 0-.17-.186l-.097-.096-.05-.046-.09.087-.106.108-.118.133c-.952 1.134-1.957 1.54-3.176 1.067l-.175-.074-1.052-.51-.312-.16c-.476-.26-.743-.51-1.004-1.061-.275-.58-.294-1.15-.16-1.883l.044-.225c.016-.075.03-.157.041-.242l.019-.172-.004-.004-.104-.014-.146-.013-.174-.008c-1.56-.028-2.484-.614-2.853-1.877l-.049-.185-.292-1.274c-.235-1.185.236-2.1 1.364-2.785l.194-.112.175-.093a3.36 3.36 0 0 0 .216-.12l.155-.102.004-.019-.063-.108-.08-.125-.103-.143c-.937-1.246-1.044-2.335-.276-3.404l.115-.153.824-1.013c.79-.915 1.8-1.107 3.034-.64l.208.083.181.081c.068.032.143.063.222.093l.136.048.036-.017.033-.089.045-.138.046-.166c.36-1.436 1.085-2.242 2.39-2.35l.19-.011h1.39Zm-.056 1.799h-1.333l-.14.01c-.285.037-.472.191-.652.832l-.041.156-.057.206a6.33 6.33 0 0 1-.468 1.134 5.851 5.851 0 0 0-1.147.558 6.45 6.45 0 0 1-1.16-.35l-.35-.154c-.248-.107-.435-.161-.583-.175l-.084-.003a.55.55 0 0 0-.408.193l-.068.074-.789.973-.095.125c-.183.264-.21.5.195 1.075l.228.316c.212.31.425.692.598 1.102-.13.384-.22.786-.27 1.201-.334.29-.69.537-1.013.72l-.343.184c-.617.34-.695.563-.646.881l.013.075.28 1.22.04.152c.096.308.265.475.968.509l.388.014c.37.024.798.09 1.223.204.224.35.484.674.776.968a6.258 6.258 0 0 1-.118 1.445c-.201.95-.014 1.102.383 1.3l1.126.547a.8.8 0 0 0 .337.089l.067-.006c.181-.028.382-.162.67-.485l.258-.295c.257-.278.585-.574.949-.837l.298.023L12 18l.302-.008.298-.022c.363.263.691.559.948.837l.258.295c.325.364.538.488.737.49l.066-.003a.747.747 0 0 0 .178-.046l.093-.039 1.126-.548.139-.073c.3-.175.42-.395.245-1.226a6.19 6.19 0 0 1-.117-1.445c.29-.294.55-.619.775-.97a6.466 6.466 0 0 1 1.223-.202l.387-.014c.812-.04.912-.256 1.008-.66l.264-1.142c.09-.406.095-.643-.617-1.035l-.342-.183a6.428 6.428 0 0 1-1.014-.722 5.955 5.955 0 0 0-.27-1.201c.174-.41.386-.791.598-1.1l.228-.317c.406-.575.378-.81.195-1.075l-.045-.062-.787-.974c-.14-.171-.259-.294-.452-.322l-.076-.007c-.16-.003-.368.05-.667.178l-.35.155a6.364 6.364 0 0 1-1.158.348 5.873 5.873 0 0 0-1.15-.556 6.495 6.495 0 0 1-.454-1.093l-.113-.414c-.192-.678-.393-.805-.714-.828l-.076-.004ZM12 8.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Zm0 1.8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"), u(t, "fill", "#fff"), u(e, "width", "24"), u(e, "height", "24"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "settings-mobile-icon");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
function xl(i) {
    let e, t;
    return e = new zf({
        props: {
            $$slots: {
                default: [
                    Yf
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 18 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Yf(i) {
    let e, t, n;
    var o = i[1];
    function l(s) {
        return {};
    }
    return o && (e = fn(o, l())), {
        c () {
            e && D(e.$$.fragment), t = ht();
        },
        m (s, a) {
            e && z(e, s, a), C(s, t, a), n = !0;
        },
        p (s, a) {
            if (a & 2 && o !== (o = s[1])) {
                if (e) {
                    me();
                    const r = e;
                    p(r.$$.fragment, 1, 0, ()=>{
                        O(r, 1);
                    }), he();
                }
                o ? (e = fn(o, l()), D(e.$$.fragment), m(e.$$.fragment, 1), z(e, t.parentNode, t)) : e = null;
            }
        },
        i (s) {
            n || (e && m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            e && p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            s && y(t), e && O(e, s);
        }
    };
}
function Qf(i) {
    let e, t, n, o;
    const l = [
        Kf,
        Gf
    ], s = [];
    function a(r, c) {
        return r[0] ? 0 : 1;
    }
    return e = a(i), t = s[e] = l[e](i), {
        c () {
            t.c(), n = ht();
        },
        m (r, c) {
            s[e].m(r, c), C(r, n, c), o = !0;
        },
        p (r, [c]) {
            let f = e;
            e = a(r), e === f ? s[e].p(r, c) : (me(), p(s[f], 1, 1, ()=>{
                s[f] = null;
            }), he(), t = s[e], t ? t.p(r, c) : (t = s[e] = l[e](r), t.c()), m(t, 1), t.m(n.parentNode, n));
        },
        i (r) {
            o || (m(t), o = !0);
        },
        o (r) {
            p(t), o = !1;
        },
        d (r) {
            r && y(n), s[e].d(r);
        }
    };
}
function Xf(i, e, t) {
    let n, { isMobile: o = !1 } = e, { currentQuality: l } = e, s;
    return i.$$set = (a)=>{
        "isMobile" in a && t(0, o = a.isMobile), "currentQuality" in a && t(3, l = a.currentQuality);
    }, i.$$.update = ()=>{
        i.$$.dirty & 8 && t(1, n = eo(l)), i.$$.dirty & 2 && t(2, s = !!n && [
            c1,
            f1
        ].includes(n));
    }, [
        o,
        n,
        s,
        l
    ];
}
class d1 extends ke {
    constructor(e){
        super(), _e(this, e, Xf, Qf, ge, {
            isMobile: 0,
            currentQuality: 3
        }, jf);
    }
}
function Jf(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "d", "M14.692.428c2.293 0 3.124.24 3.962.687a4.673 4.673 0 0 1 1.944 1.944c.449.839.687 1.67.687 3.962v3.958c0 2.292-.238 3.123-.687 3.961a4.673 4.673 0 0 1-1.944 1.944c-.838.449-1.67.687-3.962.687H7.307c-2.293 0-3.124-.238-3.962-.687A4.673 4.673 0 0 1 1.4 14.94c-.448-.838-.687-1.669-.687-3.961V7.02c0-2.292.239-3.123.687-3.962a4.673 4.673 0 0 1 1.944-1.944C4.183.667 5.015.428 7.307.428h7.385Zm.243 1.716-7.628-.001c-1.832 0-2.484.126-3.154.484a2.96 2.96 0 0 0-1.24 1.24c-.343.64-.473 1.264-.484 2.912v4.2c0 1.83.125 2.483.483 3.153.289.54.702.952 1.241 1.24.67.36 1.322.485 3.154.485h7.385c1.832 0 2.484-.126 3.154-.484a2.96 2.96 0 0 0 1.24-1.241c.36-.67.485-1.322.485-3.153V7.02c0-1.831-.126-2.483-.484-3.153a2.96 2.96 0 0 0-1.241-1.24c-.64-.343-1.263-.473-2.911-.484ZM11 10.714a.857.857 0 1 1 0 1.714H5.857a.857.857 0 0 1 0-1.714H11Zm5.142 0a.857.857 0 1 1 0 1.714h-1.714a.857.857 0 0 1 0-1.714h1.714Zm0-3.428a.857.857 0 1 1 0 1.714H11a.857.857 0 1 1 0-1.714h5.142Zm-8.571 0a.857.857 0 0 1 0 1.714H5.857a.857.857 0 0 1 0-1.714H7.57Z"), u(t, "fill", "#fff"), u(e, "width", "22"), u(e, "height", "18"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "subtitle-empty-icon");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class m1 extends ke {
    constructor(e){
        super(), _e(this, e, null, Jf, ge, {});
    }
}
function xf(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "fill-rule", "evenodd"), u(t, "clip-rule", "evenodd"), u(t, "d", "M8 0a.9.9 0 0 1 .9.9v10.927l4.564-4.563a.9.9 0 0 1 1.272 1.272l-6.1 6.1a.9.9 0 0 1-1.272 0l-6.1-6.1a.9.9 0 1 1 1.272-1.272L7.1 11.827V.9A.9.9 0 0 1 8 0ZM0 18a.9.9 0 0 1 .9-.9h14.2a.9.9 0 1 1 0 1.8H.9A.9.9 0 0 1 0 18Z"), u(t, "fill", "#fff"), u(e, "width", "16"), u(e, "height", "19"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "download-icon");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class $f extends ke {
    constructor(e){
        super(), _e(this, e, null, xf, ge, {});
    }
}
function e0(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "fill-rule", "evenodd"), u(t, "clip-rule", "evenodd"), u(t, "d", "M.1 6.5c0-2.24 0-3.36.436-4.216A4 4 0 0 1 2.284.536C3.139.1 4.259.1 6.5.1h5c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.856.436 1.976.436 4.216s0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748c-.836.426-1.925.436-4.064.436l.55 2.2H14.1a.9.9 0 0 1 0 1.8H3.9a.9.9 0 1 1 0-1.8h1.897l.55-2.2c-2.139 0-3.227-.01-4.063-.436a4 4 0 0 1-1.748-1.748C.1 9.86.1 8.74.1 6.5Zm11.4-4.6h-5c-1.15 0-1.904.002-2.481.049-.556.045-.786.124-.918.19a2.2 2.2 0 0 0-.962.962c-.067.132-.145.363-.19.918-.048.577-.05 1.331-.05 2.481s.002 1.904.05 2.48c.045.556.123.787.19.919.211.414.548.75.962.961.132.068.362.146.918.192.577.047 1.33.048 2.48.048h5c1.15 0 1.904-.001 2.481-.048.556-.046.787-.124.918-.192a2.2 2.2 0 0 0 .962-.961c.067-.132.146-.363.191-.918.047-.577.049-1.331.049-2.48 0-1.15-.002-1.905-.049-2.482-.045-.555-.124-.786-.191-.918a2.2 2.2 0 0 0-.962-.961c-.131-.067-.362-.146-.918-.191-.577-.048-1.33-.049-2.48-.049Zm-3.298 11-.55 2.2h2.695l-.55-2.2H8.202Z"), u(t, "fill", "#fff"), u(e, "width", "18"), u(e, "height", "17"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "traffic-saving-icon");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class t0 extends ke {
    constructor(e){
        super(), _e(this, e, null, e0, ge, {});
    }
}
function i0(i) {
    let e, t, n, o;
    return {
        c () {
            e = I("svg"), t = I("g"), n = I("path"), o = I("path"), u(n, "d", "M0 0h24v24H0z"), u(o, "d", "M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69A7.941 7.941 0 0 1 11 4.07zM5.69 7.1 4.26 5.68A9.949 9.949 0 0 0 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM2.05 13c.2 2.01 1 3.84 2.21 5.32l1.43-1.43A7.868 7.868 0 0 1 4.07 13zM11 21.95v-2.02a7.941 7.941 0 0 1-3.9-1.62l-1.42 1.43A9.981 9.981 0 0 0 11 21.95zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12zM10.688 8.576l4.746 2.736a.792.792 0 0 1 0 1.372l-4.746 2.737a.792.792 0 0 1-1.188-.686V9.262a.792.792 0 0 1 1.188-.686z"), u(o, "fill", "#fff"), u(o, "fill-rule", "nonzero"), u(t, "fill", "none"), u(t, "fill-rule", "evenodd"), u(e, "height", "24"), u(e, "width", "24"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "play-speed-icon");
        },
        m (l, s) {
            C(l, e, s), d(e, t), d(t, n), d(t, o);
        },
        p: K,
        i: K,
        o: K,
        d (l) {
            l && y(e);
        }
    };
}
class n0 extends ke {
    constructor(e){
        super(), _e(this, e, null, i0, ge, {});
    }
}
function o0(i) {
    Fe(i, "v-2dg73m", ".reverted.v-2dg73m{transform:rotate(180deg)}");
}
function l0(i) {
    let e, t, n;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "d", "m5.773 8 3.363 3.364a.9.9 0 1 1-1.272 1.272l-4-4a.9.9 0 0 1 0-1.272l4-4a.9.9 0 0 1 1.272 1.272L5.773 8z"), u(t, "fill", i[0]), u(e, "width", "12"), u(e, "height", "16"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", n = i[2] ? "chevron-icon--right" : "chevron-icon--left"), u(e, "class", "v-2dg73m"), L(e, "reverted", i[2]);
        },
        m (o, l) {
            C(o, e, l), d(e, t);
        },
        p (o, l) {
            l & 1 && u(t, "fill", o[0]), l & 4 && n !== (n = o[2] ? "chevron-icon--right" : "chevron-icon--left") && u(e, "data-testid", n), l & 4 && L(e, "reverted", o[2]);
        },
        d (o) {
            o && y(e);
        }
    };
}
function s0(i) {
    let e, t, n;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "fill-rule", "evenodd"), u(t, "clip-rule", "evenodd"), u(t, "d", "M11.736 6.736a.9.9 0 0 1-1.272 0L6 2.273 1.536 6.736A.9.9 0 1 1 .264 5.464l5.1-5.1a.9.9 0 0 1 1.272 0l5.1 5.1a.9.9 0 0 1 0 1.272Z"), u(t, "fill", i[0]), u(t, "fill-opacity", ".72"), u(e, "width", "12"), u(e, "height", "7"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", n = i[2] ? "chevron-icon--down" : "chevron-icon--up"), u(e, "class", "v-2dg73m"), L(e, "reverted", i[2]);
        },
        m (o, l) {
            C(o, e, l), d(e, t);
        },
        p (o, l) {
            l & 1 && u(t, "fill", o[0]), l & 4 && n !== (n = o[2] ? "chevron-icon--down" : "chevron-icon--up") && u(e, "data-testid", n), l & 4 && L(e, "reverted", o[2]);
        },
        d (o) {
            o && y(e);
        }
    };
}
function a0(i) {
    let e;
    function t(l, s) {
        return l[1] ? s0 : l0;
    }
    let n = t(i), o = n(i);
    return {
        c () {
            o.c(), e = ht();
        },
        m (l, s) {
            o.m(l, s), C(l, e, s);
        },
        p (l, [s]) {
            n === (n = t(l)) && o ? o.p(l, s) : (o.d(1), o = n(l), o && (o.c(), o.m(e.parentNode, e)));
        },
        i: K,
        o: K,
        d (l) {
            l && y(e), o.d(l);
        }
    };
}
function r0(i, e, t) {
    let { direction: n = "left" } = e, { color: o = "#fff" } = e, l, s;
    return i.$$set = (a)=>{
        "direction" in a && t(3, n = a.direction), "color" in a && t(0, o = a.color);
    }, i.$$.update = ()=>{
        i.$$.dirty & 8 && (t(1, l = [
            "up",
            "down"
        ].includes(n)), t(2, s = [
            "right",
            "down"
        ].includes(n)));
    }, [
        o,
        l,
        s,
        n
    ];
}
class En extends ke {
    constructor(e){
        super(), _e(this, e, r0, a0, ge, {
            direction: 3,
            color: 0
        }, o0);
    }
}
function u0(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "fill-rule", "evenodd"), u(t, "clip-rule", "evenodd"), u(t, "d", "M8.863 2.1h6.274c.674-.002 1.2.211 1.683.697l4.383 4.383c.478.476.699.998.697 1.683v6.274c.002.685-.22 1.207-.697 1.683l-4.383 4.383c-.476.478-.998.699-1.683.697H8.863c-.685.002-1.207-.22-1.683-.697L2.797 16.82c-.478-.476-.699-.998-.697-1.683V8.863c-.002-.685.22-1.207.697-1.683L7.18 2.797c.484-.486 1.009-.699 1.683-.697zm-.445 2.005L4.105 8.418c-.18.18-.205.242-.205.495v6.174c0 .25.025.316.205.495l4.313 4.313c.179.179.24.205.495.205h6.174c.253 0 .316-.026.495-.205l4.313-4.313c.18-.18.205-.245.205-.495V8.913c0-.254-.026-.316-.205-.495l-4.313-4.313c-.18-.18-.242-.205-.495-.205H8.913c-.254 0-.319.029-.495.205zM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-.1-8.1a.9.9 0 0 0-1.8 0v5.2a.9.9 0 1 0 1.8 0V7.9z"), u(t, "fill", "#fff"), u(e, "width", "24"), u(e, "height", "24"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "report-icon");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class c0 extends ke {
    constructor(e){
        super(), _e(this, e, null, u0, ge, {});
    }
}
function f0(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "d", "M6 10.2 3.5 7.7a.99.99 0 0 0-1.4 1.4l3.2 3.2a1 1 0 0 0 1.4 0l7.6-7.6a.99.99 0 0 0-1.4-1.4z"), u(t, "fill", "#fff"), u(e, "height", "16"), u(e, "width", "16"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "check-mark-icon");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class vo extends ke {
    constructor(e){
        super(), _e(this, e, null, f0, ge, {});
    }
}
function d0(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "fill-rule", "evenodd"), u(t, "clip-rule", "evenodd"), u(t, "d", "M4 12.3V12c0-1.47.005-2.547.075-3.403.074-.904.216-1.482.454-1.949a4.85 4.85 0 0 1 2.12-2.12c.466-.237 1.044-.379 1.948-.453C9.51 4.001 10.675 4 12.3 4h4.512a2.073 2.073 0 0 0-.174-.49 2.4 2.4 0 0 0-1.048-1.048 2.439 2.439 0 0 0-.931-.239 13.48 13.48 0 0 0-1.026-.023H12.26c-1.576 0-2.814 0-3.81.081-1.014.083-1.856.255-2.62.644A6.65 6.65 0 0 0 2.926 5.83c-.389.763-.56 1.605-.644 2.62-.081.995-.081 2.233-.081 3.809v1.373c0 .392 0 .738.023 1.025.025.306.081.623.239.931a2.4 2.4 0 0 0 1.048 1.05c.162.082.326.136.49.173V12.3zM10.08 6h-.035c-.52 0-.964 0-1.329.03-.383.03-.755.097-1.112.276a2.9 2.9 0 0 0-1.298 1.298c-.179.357-.246.73-.277 1.112C6 9.081 6 9.524 6 10.046v7.909c0 .52 0 .964.03 1.329.03.382.097.755.276 1.112a2.9 2.9 0 0 0 1.298 1.298c.357.179.73.246 1.112.277.365.029.808.029 1.329.029h6.91c.52 0 .964 0 1.329-.03.382-.03.755-.097 1.112-.276a2.9 2.9 0 0 0 1.298-1.298c.179-.357.246-.73.277-1.112.029-.365.029-.808.029-1.33v-7.909c0-.52 0-.964-.03-1.329-.03-.382-.097-.755-.276-1.112a2.9 2.9 0 0 0-1.298-1.298c-.357-.179-.73-.246-1.112-.277C17.919 6 17.476 6 16.954 6H10.08zM8.408 7.916c.065-.032.179-.07.452-.093a17.65 17.65 0 0 1 1.22-.023h6.84c.565 0 .936 0 1.22.023.273.022.387.06.452.093a1.1 1.1 0 0 1 .492.492c.032.065.07.179.093.452.022.284.023.655.023 1.22v7.84c0 .565 0 .936-.023 1.22-.023.273-.06.387-.093.452a1.1 1.1 0 0 1-.492.492c-.065.032-.18.07-.452.093a17.65 17.65 0 0 1-1.22.023h-6.84c-.565 0-.936 0-1.22-.023-.273-.023-.387-.06-.452-.093a1.1 1.1 0 0 1-.492-.492c-.032-.065-.07-.18-.093-.452a17.057 17.057 0 0 1-.023-1.22v-7.84c0-.565 0-.936.023-1.22.022-.273.06-.387.093-.452a1.1 1.1 0 0 1 .492-.492z"), u(t, "fill", "#fff"), u(e, "width", "24"), u(e, "height", "24"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "copy-icon");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class m0 extends ke {
    constructor(e){
        super(), _e(this, e, null, d0, ge, {});
    }
}
function h0(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "d", "M12 20.105a8.105 8.105 0 1 0 0-16.21 8.105 8.105 0 0 0 0 16.21zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-12.372a1.316 1.316 0 1 1 0-2.632 1.316 1.316 0 0 1 0 2.632zm-.947 2.822c0-.541.424-.98.947-.98.523 0 .947.439.947.98v3.83c0 .54-.424.98-.947.98-.523 0-.947-.44-.947-.98v-3.83z"), u(t, "fill", "#fff"), u(e, "width", "24"), u(e, "height", "24"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "info-icon");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class p0 extends ke {
    constructor(e){
        super(), _e(this, e, null, h0, ge, {});
    }
}
function g0(i) {
    Fe(i, "v-79x8pk", "ul.v-79x8pk.v-79x8pk{margin:0;padding:0}.menu.v-79x8pk.v-79x8pk{background-color:rgba(17, 17, 17, 0.8);border-radius:8px;line-height:40px;transition:opacity 0.2s, visibility 0.2s;overflow:hidden}.container-mobile.v-79x8pk.v-79x8pk{width:100%}.menu-desktop.v-79x8pk.v-79x8pk{position:absolute;right:0;bottom:0}.menu-mobile.v-79x8pk.v-79x8pk{width:100%;background:var(--mobile-settings-bg);font-size:15px;line-height:50px}.menu-mobile.hidden.v-79x8pk.v-79x8pk{display:none}.menu-subList.v-79x8pk.v-79x8pk{min-width:134px;padding-bottom:0}.menu-subList-subtitles.v-79x8pk.v-79x8pk{min-width:164px}.menu-subList-traffic-saving.v-79x8pk.v-79x8pk{min-width:286px}.item.v-79x8pk.v-79x8pk{align-items:center;color:var(--white);cursor:pointer;display:flex;justify-content:flex-end;padding:0 24px 0 18px;white-space:nowrap;position:relative}.item-mobile.v-79x8pk.v-79x8pk{padding:0 14px}.item-quality.item-mobile.v-79x8pk.v-79x8pk,.item-traffic-saving.item-mobile.v-79x8pk.v-79x8pk,.item-helper-text.item-mobile.v-79x8pk.v-79x8pk{flex-direction:row-reverse}.item-helper-text.v-79x8pk.v-79x8pk{cursor:auto;pointer-events:none;white-space:normal;padding:7px 24px 7px 18px}.item-helper-text.v-79x8pk span.v-79x8pk{color:rgba(255, 255, 255, 0.48);line-height:18px;text-align:end}.item-helper-text.item-mobile.v-79x8pk.v-79x8pk{padding:7px 14px}.item-helper-text.item-mobile.v-79x8pk span.v-79x8pk{text-align:start}.quality-title-mobile.v-79x8pk.v-79x8pk{flex-grow:1}.item.v-79x8pk.v-79x8pk:hover{background-color:rgba(255, 255, 255, 0.08)}.item-mobile.v-79x8pk.v-79x8pk:hover{background:var(--mobile-settings-bg)}.menu-subList.v-79x8pk .item.v-79x8pk{color:rgba(255, 255, 255, 0.9)}.menu-subList.v-79x8pk .item.v-79x8pk:last-child{margin-bottom:4px}.menu-icon-wrapper.v-79x8pk.v-79x8pk{width:24px;height:24px;display:flex;align-items:center;justify-content:center;margin-right:16px}.menu-title.v-79x8pk.v-79x8pk{flex-grow:1;margin-right:24px;overflow:hidden;text-overflow:ellipsis}.menu-value.v-79x8pk.v-79x8pk{position:relative;opacity:0.7}.menu-valueIcon.v-79x8pk.v-79x8pk{position:absolute;top:-10px;right:-18px;width:15px}.menu-valueIcon-list.v-79x8pk.v-79x8pk{position:absolute;top:-7px;width:15px;right:6px}.menu-valueIcon.v-79x8pk svg,.menu-valueIcon-list.v-79x8pk svg{color:var(--blue-light)}.menu-divider.v-79x8pk.v-79x8pk{background-color:rgba(255, 255, 255, 0.3);height:1px;margin-bottom:4px}.menu-header.v-79x8pk.v-79x8pk{color:var(--white);cursor:pointer;justify-content:space-between;display:flex}.itemIcon.v-79x8pk.v-79x8pk{margin-right:auto;padding-right:12px;opacity:0.9}.items.v-79x8pk.v-79x8pk::-webkit-scrollbar{width:8px}.items.v-79x8pk.v-79x8pk::-webkit-scrollbar-track{box-shadow:none;background-color:#3a3a3a;border-radius:4px}.items.v-79x8pk.v-79x8pk::-webkit-scrollbar-thumb{min-height:40px;border-radius:5px;background-color:#666;border:1px solid transparent;background-clip:padding-box}.items.v-79x8pk.v-79x8pk::-webkit-scrollbar-thumb:hover{background-color:#777}.items-mobile.v-79x8pk.v-79x8pk{overflow-y:auto;max-height:160px;text-align:left}.close.v-79x8pk.v-79x8pk{position:relative;width:12px;height:12px;padding:12px;margin-right:-12px}.close.v-79x8pk.v-79x8pk:before,.close.v-79x8pk.v-79x8pk:after{position:absolute;left:18px;content:' ';height:12px;width:2px;background-color:var(--white)}.close.v-79x8pk.v-79x8pk:before{transform:rotate(45deg)}.close.v-79x8pk.v-79x8pk:after{transform:rotate(-45deg)}");
}
function $l(i, e, t) {
    const n = i.slice();
    return n[87] = e[t], n;
}
function es(i, e, t) {
    const n = i.slice();
    return n[90] = e[t], n;
}
function ts(i, e, t) {
    const n = i.slice();
    return n[93] = e[t], n;
}
function is(i) {
    let e, t, n, o, l, s, a, r;
    return {
        c () {
            e = k("div"), t = k("div"), t.textContent = `${U("submenu_settings")}`, n = B(), o = k("div"), l = B(), s = k("div"), u(o, "class", "close v-79x8pk"), u(e, "class", "item menu-header v-79x8pk"), L(e, "item-mobile", i[7]), u(s, "class", "menu-divider v-79x8pk");
        },
        m (c, f) {
            C(c, e, f), d(e, t), d(e, n), d(e, o), C(c, l, f), C(c, s, f), a || (r = Ae(o, "click", rt(i[49])), a = !0);
        },
        p (c, f) {
            f[0] & 128 && L(e, "item-mobile", c[7]);
        },
        d (c) {
            c && (y(e), y(l), y(s)), a = !1, r();
        }
    };
}
function ns(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v;
    n = new d1({});
    let b = i[27] && !i[7] && os(i);
    return {
        c () {
            e = k("li"), t = k("div"), D(n.$$.fragment), o = B(), l = k("div"), l.textContent = `${U("menu_quality")}`, s = B(), a = k("div"), r = ze(i[15]), c = B(), b && b.c(), u(t, "class", "menu-icon-wrapper v-79x8pk"), u(l, "class", "menu-title v-79x8pk"), u(a, "class", "menu-value v-79x8pk"), u(e, "class", "item v-79x8pk"), u(e, "role", "menuitem"), u(e, "tabindex", "0"), u(e, "aria-label", f = U("aria_label_menu_quality", {
                actual: i[25]
            })), u(e, "aria-haspopup", "true"), L(e, "item-mobile", i[7]);
        },
        m (_, V) {
            C(_, e, V), d(e, t), z(n, t, null), d(e, o), d(e, l), d(e, s), d(e, a), d(a, r), d(a, c), b && b.m(a, null), h = !0, g || (v = Ae(e, "click", rt(i[50])), g = !0);
        },
        p (_, V) {
            (!h || V[0] & 32768) && Xe(r, _[15]), _[27] && !_[7] ? b ? (b.p(_, V), V[0] & 134217856 && m(b, 1)) : (b = os(_), b.c(), m(b, 1), b.m(a, null)) : b && (me(), p(b, 1, 1, ()=>{
                b = null;
            }), he()), (!h || V[0] & 33554432 && f !== (f = U("aria_label_menu_quality", {
                actual: _[25]
            }))) && u(e, "aria-label", f), (!h || V[0] & 128) && L(e, "item-mobile", _[7]);
        },
        i (_) {
            h || (m(n.$$.fragment, _), m(b), h = !0);
        },
        o (_) {
            p(n.$$.fragment, _), p(b), h = !1;
        },
        d (_) {
            _ && y(e), O(n), b && b.d(), g = !1, v();
        }
    };
}
function os(i) {
    let e, t, n;
    var o = i[27];
    function l(s) {
        return {};
    }
    return o && (t = fn(o, l())), {
        c () {
            e = k("div"), t && D(t.$$.fragment), u(e, "class", "menu-valueIcon v-79x8pk");
        },
        m (s, a) {
            C(s, e, a), t && z(t, e, null), n = !0;
        },
        p (s, a) {
            if (a[0] & 134217728 && o !== (o = s[27])) {
                if (t) {
                    me();
                    const r = t;
                    p(r.$$.fragment, 1, 0, ()=>{
                        O(r, 1);
                    }), he();
                }
                o ? (t = fn(o, l()), D(t.$$.fragment), m(t.$$.fragment, 1), z(t, e, null)) : t = null;
            }
        },
        i (s) {
            n || (t && m(t.$$.fragment, s), n = !0);
        },
        o (s) {
            t && p(t.$$.fragment, s), n = !1;
        },
        d (s) {
            s && y(e), t && O(t);
        }
    };
}
function ls(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v;
    return n = new n0({}), {
        c () {
            e = k("li"), t = k("div"), D(n.$$.fragment), o = B(), l = k("div"), l.textContent = `${U("menu_playback_rate")}`, s = B(), a = k("div"), r = ze(i[3]), c = ze("x"), u(t, "class", "menu-icon-wrapper v-79x8pk"), u(l, "class", "menu-title v-79x8pk"), u(a, "class", "menu-value v-79x8pk"), u(e, "class", "item v-79x8pk"), u(e, "role", "menuitem"), u(e, "tabindex", "0"), u(e, "aria-label", f = U("aria_label_menu_rate", {
                actual: i[26]
            })), u(e, "aria-haspopup", "true"), L(e, "item-mobile", i[7]);
        },
        m (b, _) {
            C(b, e, _), d(e, t), z(n, t, null), d(e, o), d(e, l), d(e, s), d(e, a), d(a, r), d(a, c), h = !0, g || (v = Ae(e, "click", rt(i[54])), g = !0);
        },
        p (b, _) {
            (!h || _[0] & 8) && Xe(r, b[3]), (!h || _[0] & 67108864 && f !== (f = U("aria_label_menu_rate", {
                actual: b[26]
            }))) && u(e, "aria-label", f), (!h || _[0] & 128) && L(e, "item-mobile", b[7]);
        },
        i (b) {
            h || (m(n.$$.fragment, b), h = !0);
        },
        o (b) {
            p(n.$$.fragment, b), h = !1;
        },
        d (b) {
            b && y(e), O(n), g = !1, v();
        }
    };
}
function ss(i) {
    let e, t, n, o, l, s, a, r = i[28].displayValue + "", c, f, h, g, v;
    return n = new m1({}), {
        c () {
            e = k("li"), t = k("div"), D(n.$$.fragment), o = B(), l = k("div"), l.textContent = `${U("subtitles_caption")}`, s = B(), a = k("div"), c = ze(r), u(t, "class", "menu-icon-wrapper v-79x8pk"), u(l, "class", "menu-title v-79x8pk"), u(a, "class", "menu-value v-79x8pk"), u(e, "class", "item v-79x8pk"), u(e, "role", "menuitem"), u(e, "tabindex", "0"), u(e, "aria-label", f = U("aria_label_menu_subtitle", {
                actual: i[28].displayValue
            })), u(e, "aria-haspopup", "true"), L(e, "item-mobile", i[7]);
        },
        m (b, _) {
            C(b, e, _), d(e, t), z(n, t, null), d(e, o), d(e, l), d(e, s), d(e, a), d(a, c), h = !0, g || (v = Ae(e, "click", rt(i[56])), g = !0);
        },
        p (b, _) {
            (!h || _[0] & 268435456) && r !== (r = b[28].displayValue + "") && Xe(c, r), (!h || _[0] & 268435456 && f !== (f = U("aria_label_menu_subtitle", {
                actual: b[28].displayValue
            }))) && u(e, "aria-label", f), (!h || _[0] & 128) && L(e, "item-mobile", b[7]);
        },
        i (b) {
            h || (m(n.$$.fragment, b), h = !0);
        },
        o (b) {
            p(n.$$.fragment, b), h = !1;
        },
        d (b) {
            b && y(e), O(n), g = !1, v();
        }
    };
}
function as(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g;
    return n = new t0({}), {
        c () {
            e = k("li"), t = k("div"), D(n.$$.fragment), o = B(), l = k("div"), l.textContent = `${U("menu_traffic_saving")}`, s = B(), a = k("div"), r = ze(i[24]), u(t, "class", "menu-icon-wrapper v-79x8pk"), u(l, "class", "menu-title v-79x8pk"), u(a, "class", "menu-value v-79x8pk"), u(e, "class", "item v-79x8pk"), u(e, "role", "menuitem"), u(e, "tabindex", "0"), u(e, "aria-label", c = U("aria_label_menu_traffic_saving", {
                actual: i[24]
            })), u(e, "aria-haspopup", "true"), L(e, "item-mobile", i[7]);
        },
        m (v, b) {
            C(v, e, b), d(e, t), z(n, t, null), d(e, o), d(e, l), d(e, s), d(e, a), d(a, r), f = !0, h || (g = Ae(e, "click", rt(i[51])), h = !0);
        },
        p (v, b) {
            (!f || b[0] & 16777216) && Xe(r, v[24]), (!f || b[0] & 16777216 && c !== (c = U("aria_label_menu_traffic_saving", {
                actual: v[24]
            }))) && u(e, "aria-label", c), (!f || b[0] & 128) && L(e, "item-mobile", v[7]);
        },
        i (v) {
            f || (m(n.$$.fragment, v), f = !0);
        },
        o (v) {
            p(n.$$.fragment, v), f = !1;
        },
        d (v) {
            v && y(e), O(n), h = !1, g();
        }
    };
}
function rs(i) {
    let e, t, n, o, l, s, a, r;
    return n = new $f({}), {
        c () {
            e = k("li"), t = k("div"), D(n.$$.fragment), o = B(), l = k("div"), l.textContent = `${U("download_video_caption")}`, u(t, "class", "menu-icon-wrapper v-79x8pk"), u(l, "class", "menu-title v-79x8pk"), u(e, "class", "item v-79x8pk"), u(e, "role", "menuitem"), u(e, "tabindex", "0"), u(e, "aria-label", U("aria_label_menu_download")), L(e, "item-mobile", i[7]);
        },
        m (c, f) {
            C(c, e, f), d(e, t), z(n, t, null), d(e, o), d(e, l), s = !0, a || (r = Ae(e, "click", rt(i[59])), a = !0);
        },
        p (c, f) {
            (!s || f[0] & 128) && L(e, "item-mobile", c[7]);
        },
        i (c) {
            s || (m(n.$$.fragment, c), s = !0);
        },
        o (c) {
            p(n.$$.fragment, c), s = !1;
        },
        d (c) {
            c && y(e), O(n), a = !1, r();
        }
    };
}
function us(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v, b, _, V, A = i[30].showSupport && b0(i);
    return o = new m0({}), f = new p0({}), {
        c () {
            A && A.c(), e = B(), t = k("li"), n = k("div"), D(o.$$.fragment), l = B(), s = k("div"), s.textContent = `${U("menu_copy_debug")}`, a = B(), r = k("li"), c = k("div"), D(f.$$.fragment), h = B(), g = k("div"), g.textContent = `${U("menu_debug_overlay")}`, u(n, "class", "menu-icon-wrapper v-79x8pk"), u(s, "class", "menu-title v-79x8pk"), u(t, "class", "item item-mobile v-79x8pk"), u(t, "role", "menuitem"), u(t, "tabindex", "0"), u(t, "aria-label", U("menu_copy_debug")), u(c, "class", "menu-icon-wrapper v-79x8pk"), u(g, "class", "menu-title v-79x8pk"), u(r, "class", "item item-mobile v-79x8pk"), u(r, "role", "menuitem"), u(r, "tabindex", "0"), u(r, "aria-label", v = i[29] ? U("aria_label_menu_debug_overlay_disable") : U("aria_label_menu_debug_overlay_enable"));
        },
        m (S, P) {
            A && A.m(S, P), C(S, e, P), C(S, t, P), d(t, n), z(o, n, null), d(t, l), d(t, s), C(S, a, P), C(S, r, P), d(r, c), z(f, c, null), d(r, h), d(r, g), b = !0, _ || (V = [
                Ae(t, "click", rt(i[61])),
                Ae(r, "click", rt(i[62]))
            ], _ = !0);
        },
        p (S, P) {
            S[30].showSupport && A.p(S, P), (!b || P[0] & 536870912 && v !== (v = S[29] ? U("aria_label_menu_debug_overlay_disable") : U("aria_label_menu_debug_overlay_enable"))) && u(r, "aria-label", v);
        },
        i (S) {
            b || (m(A), m(o.$$.fragment, S), m(f.$$.fragment, S), b = !0);
        },
        o (S) {
            p(A), p(o.$$.fragment, S), p(f.$$.fragment, S), b = !1;
        },
        d (S) {
            S && (y(e), y(t), y(a), y(r)), A && A.d(S), O(o), O(f), _ = !1, xt(V);
        }
    };
}
function b0(i) {
    let e, t, n, o, l, s, a, r;
    return n = new c0({}), {
        c () {
            e = k("li"), t = k("div"), D(n.$$.fragment), o = B(), l = k("div"), l.textContent = `${U("menu_report")}`, u(t, "class", "menu-icon-wrapper v-79x8pk"), u(l, "class", "menu-title v-79x8pk"), u(e, "class", "item item-mobile v-79x8pk"), u(e, "role", "menuitem"), u(e, "tabindex", "0"), u(e, "aria-label", `${U("menu_report")}. ${U("aria_label_new_tab_alert")}`);
        },
        m (c, f) {
            C(c, e, f), d(e, t), z(n, t, null), d(e, o), d(e, l), s = !0, a || (r = Ae(e, "click", rt(i[60])), a = !0);
        },
        p: K,
        i (c) {
            s || (m(n.$$.fragment, c), s = !0);
        },
        o (c) {
            p(n.$$.fragment, c), s = !1;
        },
        d (c) {
            c && y(e), O(n), a = !1, r();
        }
    };
}
function cs(i) {
    let e, t, n;
    return t = new vo({}), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "itemIcon v-79x8pk");
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function fs(i) {
    let e, t, n;
    var o = eo(i[93].value);
    function l(s) {
        return {};
    }
    return o && (t = fn(o, l())), {
        c () {
            e = k("div"), t && D(t.$$.fragment), u(e, "class", "menu-valueIcon-list v-79x8pk");
        },
        m (s, a) {
            C(s, e, a), t && z(t, e, null), n = !0;
        },
        p (s, a) {
            if (a[0] & 256 && o !== (o = eo(s[93].value))) {
                if (t) {
                    me();
                    const r = t;
                    p(r.$$.fragment, 1, 0, ()=>{
                        O(r, 1);
                    }), he();
                }
                o ? (t = fn(o, l()), D(t.$$.fragment), m(t.$$.fragment, 1), z(t, e, null)) : t = null;
            }
        },
        i (s) {
            n || (t && m(t.$$.fragment, s), n = !0);
        },
        o (s) {
            t && p(t.$$.fragment, s), n = !1;
        },
        d (s) {
            s && y(e), t && O(t);
        }
    };
}
function ds(i) {
    let e, t, n, o = i[93].displayValue + "", l, s, a = !i[7] && eo(i[93].value), r, c, f, h, g, v, b = i[93].selected && cs(), _ = a && fs(i);
    function V() {
        return i[76](i[93]);
    }
    return {
        c () {
            e = k("li"), b && b.c(), t = B(), n = k("div"), l = ze(o), s = B(), _ && _.c(), r = B(), u(n, "class", "v-79x8pk"), L(n, "quality-title-mobile", i[7]), u(e, "class", "item item-quality v-79x8pk"), u(e, "data-value", c = i[93].value), u(e, "role", "menuitem"), u(e, "tabindex", "0"), u(e, "aria-label", f = U("aria_label_submenu_quality_select_quality", {
                quality: i[93].displayValue
            })), L(e, "item-mobile", i[7]);
        },
        m (A, S) {
            C(A, e, S), b && b.m(e, null), d(e, t), d(e, n), d(n, l), d(e, s), _ && _.m(e, null), d(e, r), h = !0, g || (v = Ae(e, "click", rt(V)), g = !0);
        },
        p (A, S) {
            i = A, i[93].selected ? b ? S[0] & 256 && m(b, 1) : (b = cs(), b.c(), m(b, 1), b.m(e, t)) : b && (me(), p(b, 1, 1, ()=>{
                b = null;
            }), he()), (!h || S[0] & 256) && o !== (o = i[93].displayValue + "") && Xe(l, o), (!h || S[0] & 128) && L(n, "quality-title-mobile", i[7]), S[0] & 384 && (a = !i[7] && eo(i[93].value)), a ? _ ? (_.p(i, S), S[0] & 384 && m(_, 1)) : (_ = fs(i), _.c(), m(_, 1), _.m(e, r)) : _ && (me(), p(_, 1, 1, ()=>{
                _ = null;
            }), he()), (!h || S[0] & 256 && c !== (c = i[93].value)) && u(e, "data-value", c), (!h || S[0] & 256 && f !== (f = U("aria_label_submenu_quality_select_quality", {
                quality: i[93].displayValue
            }))) && u(e, "aria-label", f), (!h || S[0] & 128) && L(e, "item-mobile", i[7]);
        },
        i (A) {
            h || (m(b), m(_), h = !0);
        },
        o (A) {
            p(b), p(_), h = !1;
        },
        d (A) {
            A && y(e), b && b.d(), _ && _.d(), g = !1, v();
        }
    };
}
function ms(i) {
    let e, t, n;
    return t = new vo({}), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "itemIcon v-79x8pk");
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function hs(i) {
    let e, t, n, o = i[90].displayValue + "", l, s, a, r, c, f, h, g = i[90].selected && ms();
    function v() {
        return i[78](i[90]);
    }
    return {
        c () {
            e = k("li"), g && g.c(), t = B(), n = k("div"), l = ze(o), s = B(), u(n, "class", "v-79x8pk"), L(n, "quality-title-mobile", i[7]), u(e, "class", "item item-quality v-79x8pk"), u(e, "data-value", a = i[90].value), u(e, "role", "menuitem"), u(e, "tabindex", "0"), u(e, "aria-label", r = U("aria_label_submenu_rate_select_rate", {
                rate: i[90].displayValue
            })), L(e, "item-mobile", i[7]);
        },
        m (b, _) {
            C(b, e, _), g && g.m(e, null), d(e, t), d(e, n), d(n, l), d(e, s), c = !0, f || (h = Ae(e, "click", rt(v)), f = !0);
        },
        p (b, _) {
            i = b, i[90].selected ? g ? _[0] & 16 && m(g, 1) : (g = ms(), g.c(), m(g, 1), g.m(e, t)) : g && (me(), p(g, 1, 1, ()=>{
                g = null;
            }), he()), (!c || _[0] & 16) && o !== (o = i[90].displayValue + "") && Xe(l, o), (!c || _[0] & 128) && L(n, "quality-title-mobile", i[7]), (!c || _[0] & 16 && a !== (a = i[90].value)) && u(e, "data-value", a), (!c || _[0] & 16 && r !== (r = U("aria_label_submenu_rate_select_rate", {
                rate: i[90].displayValue
            }))) && u(e, "aria-label", r), (!c || _[0] & 128) && L(e, "item-mobile", i[7]);
        },
        i (b) {
            c || (m(g), c = !0);
        },
        o (b) {
            p(g), c = !1;
        },
        d (b) {
            b && y(e), g && g.d(), f = !1, h();
        }
    };
}
function ps(i) {
    let e, t, n;
    return t = new vo({}), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "itemIcon v-79x8pk");
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function gs(i) {
    let e, t, n;
    return t = new vo({}), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "itemIcon v-79x8pk");
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function bs(i) {
    let e, t, n;
    return t = new vo({}), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "itemIcon v-79x8pk");
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function vs(i) {
    let e, t, n, o = i[87].displayValue + "", l, s, a, r, c, f, h, g = i[87].selected && bs();
    function v() {
        return i[82](i[87]);
    }
    return {
        c () {
            e = k("li"), g && g.c(), t = B(), n = k("div"), l = ze(o), s = B(), u(n, "class", "v-79x8pk"), L(n, "quality-title-mobile", i[7]), u(e, "class", "item item-quality v-79x8pk"), u(e, "data-value", a = i[87].value), u(e, "role", "menuitem"), u(e, "tabindex", "0"), u(e, "aria-label", r = U("aria_label_submenu_subtitle_select_subtitle", {
                subtitle: i[87].displayValue
            })), L(e, "item-mobile", i[7]);
        },
        m (b, _) {
            C(b, e, _), g && g.m(e, null), d(e, t), d(e, n), d(n, l), d(e, s), c = !0, f || (h = Ae(e, "click", rt(v)), f = !0);
        },
        p (b, _) {
            i = b, i[87].selected ? g ? _[0] & 64 && m(g, 1) : (g = bs(), g.c(), m(g, 1), g.m(e, t)) : g && (me(), p(g, 1, 1, ()=>{
                g = null;
            }), he()), (!c || _[0] & 64) && o !== (o = i[87].displayValue + "") && Xe(l, o), (!c || _[0] & 128) && L(n, "quality-title-mobile", i[7]), (!c || _[0] & 64 && a !== (a = i[87].value)) && u(e, "data-value", a), (!c || _[0] & 64 && r !== (r = U("aria_label_submenu_subtitle_select_subtitle", {
                subtitle: i[87].displayValue
            }))) && u(e, "aria-label", r), (!c || _[0] & 128) && L(e, "item-mobile", i[7]);
        },
        i (b) {
            c || (m(g), c = !0);
        },
        o (b) {
            p(g), c = !1;
        },
        d (b) {
            b && y(e), g && g.d(), f = !1, h();
        }
    };
}
function v0(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v, b, _, V, A, S, P, N, W, X, Z, T, te, j, ie, G, J, ue, w, oe, fe, ve, Me, Ee, we, H, M, Y, pe, ee, R, Q, Ve, ye, Te, x, le, be, ae, Ue, qe, Je, tt, Be, at, St, Re, Le, kt, Dt, mt = i[7] && is(i), ot = i[23] && ns(i), re = i[22] && ls(i), xe = i[21] && ss(i), Ye = i[20] && as(i), it = i[19] && rs(i), Ge = i[7] && us(i);
    v = new En({
        props: {
            direction: "left"
        }
    });
    let ft = Mt(i[8]), $e = [];
    for(let de = 0; de < ft.length; de += 1)$e[de] = ds(ts(i, ft, de));
    const Bt = (de)=>p($e[de], 1, 1, ()=>{
            $e[de] = null;
        });
    Z = new En({
        props: {
            direction: "left"
        }
    });
    let wt = Mt(i[4]), nt = [];
    for(let de = 0; de < wt.length; de += 1)nt[de] = hs(es(i, wt, de));
    const Ht = (de)=>p(nt[de], 1, 1, ()=>{
            nt[de] = null;
        });
    fe = new En({
        props: {
            direction: "left"
        }
    });
    let ut = !i[5] && ps(), Ze = i[5] && gs();
    tt = new En({
        props: {
            direction: "left"
        }
    });
    let Tt = Mt(i[6]), lt = [];
    for(let de = 0; de < Tt.length; de += 1)lt[de] = vs($l(i, Tt, de));
    const oi = (de)=>p(lt[de], 1, 1, ()=>{
            lt[de] = null;
        });
    return {
        c () {
            e = k("div"), t = k("div"), mt && mt.c(), n = B(), o = k("ul"), ot && ot.c(), l = B(), re && re.c(), s = B(), xe && xe.c(), a = B(), Ye && Ye.c(), r = B(), it && it.c(), c = B(), Ge && Ge.c(), f = B(), h = k("div"), g = k("div"), D(v.$$.fragment), b = B(), _ = k("div"), _.textContent = `${U("submenu_quality")}`, V = B(), A = k("div"), S = B(), P = k("ul");
            for(let de = 0; de < $e.length; de += 1)$e[de].c();
            N = B(), W = k("div"), X = k("div"), D(Z.$$.fragment), T = B(), te = k("div"), te.textContent = `${U("submenu_playback_rate")}`, j = B(), ie = k("div"), G = B(), J = k("ul");
            for(let de = 0; de < nt.length; de += 1)nt[de].c();
            ue = B(), w = k("div"), oe = k("div"), D(fe.$$.fragment), ve = B(), Me = k("div"), Me.textContent = `${U("submenu_traffic_saving")}`, Ee = B(), we = k("div"), H = B(), M = k("ul"), Y = k("li"), ut && ut.c(), pe = B(), ee = k("div"), ee.textContent = `${U("traffic_saving_disable")}`, R = B(), Q = k("li"), Ze && Ze.c(), Ve = B(), ye = k("div"), ye.textContent = `${U("traffic_saving_enable")}`, Te = B(), x = k("div"), le = B(), be = k("div"), ae = k("span"), ae.textContent = `${U("traffic_saving_helper_text")}`, Ue = B(), qe = k("div"), Je = k("div"), D(tt.$$.fragment), Be = B(), at = k("div"), at.textContent = `${U("subtitles_caption")}`, St = B(), Re = k("ul");
            for(let de = 0; de < lt.length; de += 1)lt[de].c();
            u(o, "class", "items v-79x8pk"), L(o, "items-mobile", i[7]), u(t, "class", "menu v-79x8pk"), u(t, "role", "menu"), L(t, "menu-desktop", !i[7]), L(t, "menu-mobile", i[7]), L(t, "hidden", !i[10]), u(g, "class", "item menu-header v-79x8pk"), u(g, "aria-label", U("aria_label_submenu_back")), L(g, "item-mobile", i[7]), u(A, "class", "menu-divider v-79x8pk"), u(P, "class", "items v-79x8pk"), u(P, "style", i[16]), L(P, "items-mobile", i[7]), u(h, "class", "menu menu-subList v-79x8pk"), L(h, "menu-desktop", !i[7]), L(h, "menu-mobile", i[7]), L(h, "hidden", !i[11]), u(X, "class", "item menu-header v-79x8pk"), u(X, "aria-label", U("aria_label_submenu_back")), L(X, "item-mobile", i[7]), u(ie, "class", "menu-divider v-79x8pk"), u(J, "class", "items v-79x8pk"), u(J, "style", i[17]), L(J, "items-mobile", i[7]), u(W, "class", "menu menu-subList v-79x8pk"), L(W, "menu-desktop", !i[7]), L(W, "menu-mobile", i[7]), L(W, "hidden", !i[12]), u(oe, "class", "item menu-header v-79x8pk"), u(oe, "aria-label", U("aria_label_submenu_back")), L(oe, "item-mobile", i[7]), u(we, "class", "menu-divider v-79x8pk"), u(ee, "class", "v-79x8pk"), L(ee, "quality-title-mobile", i[7]), u(Y, "class", "item item-traffic-saving v-79x8pk"), u(Y, "role", "menuitem"), u(Y, "tabindex", "0"), u(Y, "aria-label", U("aria_label_submenu_traffic_saving_off")), L(Y, "item-mobile", i[7]), u(ye, "class", "v-79x8pk"), L(ye, "quality-title-mobile", i[7]), u(Q, "class", "item item-traffic-saving v-79x8pk"), u(Q, "role", "menuitem"), u(Q, "tabindex", "0"), u(Q, "aria-label", `${U("aria_label_submenu_traffic_saving_on")}. ${U("traffic_saving_helper_text")}`), L(Q, "item-mobile", i[7]), u(M, "class", "items v-79x8pk"), u(M, "style", i[18]), L(M, "items-mobile", i[7]), u(x, "class", "menu-divider v-79x8pk"), u(ae, "class", "v-79x8pk"), u(be, "class", "item item-helper-text v-79x8pk"), L(be, "item-mobile", i[7]), u(w, "class", "menu menu-subList menu-subList-traffic-saving v-79x8pk"), L(w, "menu-desktop", !i[7]), L(w, "menu-mobile", i[7]), L(w, "hidden", !i[14]), u(Je, "class", "item menu-header v-79x8pk"), u(Je, "aria-label", U("aria_label_submenu_back")), L(Je, "item-mobile", i[7]), u(Re, "class", "items v-79x8pk"), L(Re, "items-mobile", i[7]), u(qe, "class", "menu menu-subList menu-subList-subtitles v-79x8pk"), L(qe, "menu-desktop", !i[7]), L(qe, "menu-mobile", i[7]), L(qe, "hidden", !i[13]), u(e, "class", "v-79x8pk"), L(e, "hidden", !i[9]), L(e, "container-mobile", i[7]);
        },
        m (de, Ce) {
            C(de, e, Ce), d(e, t), mt && mt.m(t, null), d(t, n), d(t, o), ot && ot.m(o, null), d(o, l), re && re.m(o, null), d(o, s), xe && xe.m(o, null), d(o, a), Ye && Ye.m(o, null), d(o, r), it && it.m(o, null), d(o, c), Ge && Ge.m(o, null), d(e, f), d(e, h), d(h, g), z(v, g, null), d(g, b), d(g, _), i[75](g), d(h, V), d(h, A), d(h, S), d(h, P);
            for(let Ie = 0; Ie < $e.length; Ie += 1)$e[Ie] && $e[Ie].m(P, null);
            d(e, N), d(e, W), d(W, X), z(Z, X, null), d(X, T), d(X, te), i[77](X), d(W, j), d(W, ie), d(W, G), d(W, J);
            for(let Ie = 0; Ie < nt.length; Ie += 1)nt[Ie] && nt[Ie].m(J, null);
            d(e, ue), d(e, w), d(w, oe), z(fe, oe, null), d(oe, ve), d(oe, Me), i[79](oe), d(w, Ee), d(w, we), d(w, H), d(w, M), d(M, Y), ut && ut.m(Y, null), d(Y, pe), d(Y, ee), d(M, R), d(M, Q), Ze && Ze.m(Q, null), d(Q, Ve), d(Q, ye), d(w, Te), d(w, x), d(w, le), d(w, be), d(be, ae), d(e, Ue), d(e, qe), d(qe, Je), z(tt, Je, null), d(Je, Be), d(Je, at), d(qe, St), d(qe, Re);
            for(let Ie = 0; Ie < lt.length; Ie += 1)lt[Ie] && lt[Ie].m(Re, null);
            Le = !0, kt || (Dt = [
                Ae(g, "click", rt(i[58])),
                Ae(X, "click", rt(i[58])),
                Ae(oe, "click", rt(i[58])),
                Ae(Y, "click", rt(i[80])),
                Ae(Q, "click", rt(i[81])),
                Ae(Je, "click", rt(i[58]))
            ], kt = !0);
        },
        p (de, Ce) {
            if (de[7] ? mt ? mt.p(de, Ce) : (mt = is(de), mt.c(), mt.m(t, n)) : mt && (mt.d(1), mt = null), de[23] ? ot ? (ot.p(de, Ce), Ce[0] & 8388608 && m(ot, 1)) : (ot = ns(de), ot.c(), m(ot, 1), ot.m(o, l)) : ot && (me(), p(ot, 1, 1, ()=>{
                ot = null;
            }), he()), de[22] ? re ? (re.p(de, Ce), Ce[0] & 4194304 && m(re, 1)) : (re = ls(de), re.c(), m(re, 1), re.m(o, s)) : re && (me(), p(re, 1, 1, ()=>{
                re = null;
            }), he()), de[21] ? xe ? (xe.p(de, Ce), Ce[0] & 2097152 && m(xe, 1)) : (xe = ss(de), xe.c(), m(xe, 1), xe.m(o, a)) : xe && (me(), p(xe, 1, 1, ()=>{
                xe = null;
            }), he()), de[20] ? Ye ? (Ye.p(de, Ce), Ce[0] & 1048576 && m(Ye, 1)) : (Ye = as(de), Ye.c(), m(Ye, 1), Ye.m(o, r)) : Ye && (me(), p(Ye, 1, 1, ()=>{
                Ye = null;
            }), he()), de[19] ? it ? (it.p(de, Ce), Ce[0] & 524288 && m(it, 1)) : (it = rs(de), it.c(), m(it, 1), it.m(o, c)) : it && (me(), p(it, 1, 1, ()=>{
                it = null;
            }), he()), de[7] ? Ge ? (Ge.p(de, Ce), Ce[0] & 128 && m(Ge, 1)) : (Ge = us(de), Ge.c(), m(Ge, 1), Ge.m(o, null)) : Ge && (me(), p(Ge, 1, 1, ()=>{
                Ge = null;
            }), he()), (!Le || Ce[0] & 128) && L(o, "items-mobile", de[7]), (!Le || Ce[0] & 128) && L(t, "menu-desktop", !de[7]), (!Le || Ce[0] & 128) && L(t, "menu-mobile", de[7]), (!Le || Ce[0] & 1024) && L(t, "hidden", !de[10]), (!Le || Ce[0] & 128) && L(g, "item-mobile", de[7]), Ce[0] & 384 | Ce[1] & 2097152) {
                ft = Mt(de[8]);
                let Ie;
                for(Ie = 0; Ie < ft.length; Ie += 1){
                    const Pt = ts(de, ft, Ie);
                    $e[Ie] ? ($e[Ie].p(Pt, Ce), m($e[Ie], 1)) : ($e[Ie] = ds(Pt), $e[Ie].c(), m($e[Ie], 1), $e[Ie].m(P, null));
                }
                for(me(), Ie = ft.length; Ie < $e.length; Ie += 1)Bt(Ie);
                he();
            }
            if ((!Le || Ce[0] & 65536) && u(P, "style", de[16]), (!Le || Ce[0] & 128) && L(P, "items-mobile", de[7]), (!Le || Ce[0] & 128) && L(h, "menu-desktop", !de[7]), (!Le || Ce[0] & 128) && L(h, "menu-mobile", de[7]), (!Le || Ce[0] & 2048) && L(h, "hidden", !de[11]), (!Le || Ce[0] & 128) && L(X, "item-mobile", de[7]), Ce[0] & 144 | Ce[1] & 16777216) {
                wt = Mt(de[4]);
                let Ie;
                for(Ie = 0; Ie < wt.length; Ie += 1){
                    const Pt = es(de, wt, Ie);
                    nt[Ie] ? (nt[Ie].p(Pt, Ce), m(nt[Ie], 1)) : (nt[Ie] = hs(Pt), nt[Ie].c(), m(nt[Ie], 1), nt[Ie].m(J, null));
                }
                for(me(), Ie = wt.length; Ie < nt.length; Ie += 1)Ht(Ie);
                he();
            }
            if ((!Le || Ce[0] & 131072) && u(J, "style", de[17]), (!Le || Ce[0] & 128) && L(J, "items-mobile", de[7]), (!Le || Ce[0] & 128) && L(W, "menu-desktop", !de[7]), (!Le || Ce[0] & 128) && L(W, "menu-mobile", de[7]), (!Le || Ce[0] & 4096) && L(W, "hidden", !de[12]), (!Le || Ce[0] & 128) && L(oe, "item-mobile", de[7]), de[5] ? ut && (me(), p(ut, 1, 1, ()=>{
                ut = null;
            }), he()) : ut ? Ce[0] & 32 && m(ut, 1) : (ut = ps(), ut.c(), m(ut, 1), ut.m(Y, pe)), (!Le || Ce[0] & 128) && L(ee, "quality-title-mobile", de[7]), (!Le || Ce[0] & 128) && L(Y, "item-mobile", de[7]), de[5] ? Ze ? Ce[0] & 32 && m(Ze, 1) : (Ze = gs(), Ze.c(), m(Ze, 1), Ze.m(Q, Ve)) : Ze && (me(), p(Ze, 1, 1, ()=>{
                Ze = null;
            }), he()), (!Le || Ce[0] & 128) && L(ye, "quality-title-mobile", de[7]), (!Le || Ce[0] & 128) && L(Q, "item-mobile", de[7]), (!Le || Ce[0] & 262144) && u(M, "style", de[18]), (!Le || Ce[0] & 128) && L(M, "items-mobile", de[7]), (!Le || Ce[0] & 128) && L(be, "item-mobile", de[7]), (!Le || Ce[0] & 128) && L(w, "menu-desktop", !de[7]), (!Le || Ce[0] & 128) && L(w, "menu-mobile", de[7]), (!Le || Ce[0] & 16384) && L(w, "hidden", !de[14]), (!Le || Ce[0] & 128) && L(Je, "item-mobile", de[7]), Ce[0] & 192 | Ce[1] & 67108864) {
                Tt = Mt(de[6]);
                let Ie;
                for(Ie = 0; Ie < Tt.length; Ie += 1){
                    const Pt = $l(de, Tt, Ie);
                    lt[Ie] ? (lt[Ie].p(Pt, Ce), m(lt[Ie], 1)) : (lt[Ie] = vs(Pt), lt[Ie].c(), m(lt[Ie], 1), lt[Ie].m(Re, null));
                }
                for(me(), Ie = Tt.length; Ie < lt.length; Ie += 1)oi(Ie);
                he();
            }
            (!Le || Ce[0] & 128) && L(Re, "items-mobile", de[7]), (!Le || Ce[0] & 128) && L(qe, "menu-desktop", !de[7]), (!Le || Ce[0] & 128) && L(qe, "menu-mobile", de[7]), (!Le || Ce[0] & 8192) && L(qe, "hidden", !de[13]), (!Le || Ce[0] & 512) && L(e, "hidden", !de[9]), (!Le || Ce[0] & 128) && L(e, "container-mobile", de[7]);
        },
        i (de) {
            if (!Le) {
                m(ot), m(re), m(xe), m(Ye), m(it), m(Ge), m(v.$$.fragment, de);
                for(let Ce = 0; Ce < ft.length; Ce += 1)m($e[Ce]);
                m(Z.$$.fragment, de);
                for(let Ce = 0; Ce < wt.length; Ce += 1)m(nt[Ce]);
                m(fe.$$.fragment, de), m(ut), m(Ze), m(tt.$$.fragment, de);
                for(let Ce = 0; Ce < Tt.length; Ce += 1)m(lt[Ce]);
                Le = !0;
            }
        },
        o (de) {
            p(ot), p(re), p(xe), p(Ye), p(it), p(Ge), p(v.$$.fragment, de), $e = $e.filter(Boolean);
            for(let Ce = 0; Ce < $e.length; Ce += 1)p($e[Ce]);
            p(Z.$$.fragment, de), nt = nt.filter(Boolean);
            for(let Ce = 0; Ce < nt.length; Ce += 1)p(nt[Ce]);
            p(fe.$$.fragment, de), p(ut), p(Ze), p(tt.$$.fragment, de), lt = lt.filter(Boolean);
            for(let Ce = 0; Ce < lt.length; Ce += 1)p(lt[Ce]);
            Le = !1;
        },
        d (de) {
            de && y(e), mt && mt.d(), ot && ot.d(), re && re.d(), xe && xe.d(), Ye && Ye.d(), it && it.d(), Ge && Ge.d(), O(v), i[75](null), sn($e, de), O(Z), i[77](null), sn(nt, de), O(fe), i[79](null), ut && ut.d(), Ze && Ze.d(), O(tt), sn(lt, de), kt = !1, xt(Dt);
        }
    };
}
const jo = 18;
function _0(i, e, t) {
    let n, o, l, s, a, r, c, f, h, g, v, b, _, V, A, S, P, N, W, { supportLink: X } = e, { playerControlsHeight: Z = 0 } = e, { returnFocus: T } = e;
    const te = vt(), j = Yi(), ie = te.state.currentQuality$;
    F(i, ie, (Pe)=>t(66, s = Pe));
    const G = te.state.availableQualities$;
    F(i, G, (Pe)=>t(8, S = Pe));
    const J = te.state.autoQualityLimitingAvailable$;
    F(i, J, (Pe)=>t(70, g = Pe));
    const ue = te.state.isAutoQualityEnabled$;
    F(i, ue, (Pe)=>t(67, a = Pe));
    const w = te.state.currentPlaybackRate$;
    F(i, w, (Pe)=>t(3, o = Pe));
    const oe = te.state.availablePlaybackRates$;
    F(i, oe, (Pe)=>t(4, l = Pe));
    const fe = te.state.currentSubtitle$;
    F(i, fe, (Pe)=>t(28, N = Pe));
    const ve = te.state.availableSubtitlesList$;
    F(i, ve, (Pe)=>t(6, h = Pe));
    const Me = te.state.canDownload, Ee = te.state.hasMpegSources$;
    F(i, Ee, (Pe)=>t(71, v = Pe));
    const we = te.ui.settingsMenuVisible;
    F(i, we, (Pe)=>t(9, P = Pe));
    const H = te.ui.isMobile;
    F(i, H, (Pe)=>t(7, _ = Pe));
    const M = te.ui.mobileNotReportControlHidden$;
    F(i, M, (Pe)=>t(68, c = Pe));
    const Y = te.state.canChangePlaybackSpeed$;
    F(i, Y, (Pe)=>t(69, f = Pe));
    const pe = te.ui.isFullscreen;
    F(i, pe, (Pe)=>t(74, A = Pe));
    const ee = te.state.trafficSavingEnabled$;
    F(i, ee, (Pe)=>t(5, r = Pe));
    const R = te.ui.playerSize;
    F(i, R, (Pe)=>t(73, V = Pe));
    const Q = te.ui.debugPanelVisible;
    F(i, Q, (Pe)=>t(29, W = Pe));
    const Ve = te.ui.playerSize;
    F(i, Ve, (Pe)=>t(72, b = Pe));
    const ye = te.actions.internal.downloadVideo;
    let Te = !0, x = !1, le = !1, be = !1, ae = !1;
    function Ue() {
        T?.(), we.set(!1);
    }
    function qe() {
        t(10, Te = !1), t(11, x = !0);
    }
    function Je() {
        t(10, Te = !1), t(14, ae = !0);
    }
    function tt(Pe) {
        te.actions.internal.setQuality(Pe), Ue();
    }
    function Be(Pe) {
        te.actions.internal.setTrafficSavingEnabled(Pe), Ue();
    }
    function at() {
        t(10, Te = !1), t(12, le = !0);
    }
    function St(Pe) {
        te.actions.internal.setPlaybackRate(Pe), Ue();
    }
    function Re() {
        t(10, Te = !1), t(13, be = !0);
    }
    function Le(Pe) {
        te.actions.internal.setSubtitle(Pe), Ue();
    }
    function kt() {
        t(10, Te = !0), t(11, x = !1), t(12, le = !1), t(13, be = !1), t(14, ae = !1);
    }
    function Dt() {
        ye(), Ue();
    }
    function mt() {
        window.open(X, "_blank"), Ue(), te.actions.internal.pause();
    }
    function ot() {
        tl(te.actions.internal.getDebugTextData()), Ue();
    }
    function re() {
        Q.set(!0), Ue();
    }
    function xe(Pe, Nt, Bi) {
        if (!Pe) return "...";
        const li = Nt.find((wi)=>wi.value === Pe), ki = li ? li.displayValue : Pe;
        return Bi ? Pe === (0, _esnextEsmJs.VideoQuality).INVARIANT ? U("auto_quality_invariant") : U("auto_quality", {
            actual: ki
        }) : ki;
    }
    let Ye, it, Ge, ft, $e, Bt, wt, nt, Ht, ut, Ze, Tt, lt, oi, de;
    function Ce(Pe) {
        We[Pe ? "unshift" : "push"](()=>{
            it = Pe, t(0, it);
        });
    }
    const Ie = (Pe)=>tt(Pe.value);
    function Pt(Pe) {
        We[Pe ? "unshift" : "push"](()=>{
            Ge = Pe, t(1, Ge);
        });
    }
    const Mi = (Pe)=>St(Pe.value);
    function $t(Pe) {
        We[Pe ? "unshift" : "push"](()=>{
            ft = Pe, t(2, ft);
        });
    }
    const _i = ()=>Be(!1), Ri = ()=>Be(!0), Vt = (Pe)=>Le(Pe);
    return i.$$set = (Pe)=>{
        "supportLink" in Pe && t(63, X = Pe.supportLink), "playerControlsHeight" in Pe && t(64, Z = Pe.playerControlsHeight), "returnFocus" in Pe && t(65, T = Pe.returnFocus);
    }, i.$$.update = ()=>{
        if (i.$$.dirty[0] & 512 && P && (t(10, Te = !0), t(11, x = !1), t(12, le = !1), t(13, be = !1), t(14, ae = !1)), i.$$.dirty[2] & 16 && t(27, n = eo(s)), i.$$.dirty[0] & 256 | i.$$.dirty[2] & 48 && t(15, Ye = xe(s, S, a)), i.$$.dirty[0] & 129 | i.$$.dirty[2] & 7172) {
            if (_ && A) t(16, $e = `max-height: ${Math.round(V.height * .6)}px`);
            else if (_) t(16, $e = "");
            else {
                const Pe = b.height - jo - (it?.clientHeight ?? 0) - Z;
                t(16, $e = `max-height: ${Pe}px; overflow: auto;`);
            }
        }
        if (i.$$.dirty[0] & 130 | i.$$.dirty[2] & 1028) {
            if (_) t(17, Bt = "");
            else {
                const Pe = b.height - jo - (Ge?.clientHeight ?? 0) - Z;
                t(17, Bt = `max-height: ${Pe}px; overflow: auto;`);
            }
        }
        if (i.$$.dirty[0] & 132 | i.$$.dirty[2] & 1028) {
            if (_) t(18, wt = "");
            else {
                const Pe = b.height - jo - (ft?.clientHeight ?? 0) - Z;
                t(18, wt = `max-height: ${Pe}px; overflow: auto;`);
            }
        }
        i.$$.dirty[2] & 576 && t(19, nt = Me && v && !c), i.$$.dirty[2] & 320 && t(20, Ht = j.features.trafficSaving && !c && g), i.$$.dirty[0] & 64 | i.$$.dirty[2] & 64 && t(21, ut = h.length > 0 && !c), i.$$.dirty[2] & 192 && t(22, Ze = !!f && !c), i.$$.dirty[2] & 64 && t(23, Tt = !c), i.$$.dirty[0] & 32 && t(24, lt = U(r ? "traffic_saving_on" : "traffic_saving_off")), i.$$.dirty[2] & 48 && t(25, oi = a ? U("auto_quality_option") : s), i.$$.dirty[0] & 24 && t(26, de = l.find((Pe)=>Pe.value === o)?.displayValue);
    }, [
        it,
        Ge,
        ft,
        o,
        l,
        r,
        h,
        _,
        S,
        P,
        Te,
        x,
        le,
        be,
        ae,
        Ye,
        $e,
        Bt,
        wt,
        nt,
        Ht,
        ut,
        Ze,
        Tt,
        lt,
        oi,
        de,
        n,
        N,
        W,
        j,
        ie,
        G,
        J,
        ue,
        w,
        oe,
        fe,
        ve,
        Ee,
        we,
        H,
        M,
        Y,
        pe,
        ee,
        R,
        Q,
        Ve,
        Ue,
        qe,
        Je,
        tt,
        Be,
        at,
        St,
        Re,
        Le,
        kt,
        Dt,
        mt,
        ot,
        re,
        X,
        Z,
        T,
        s,
        a,
        c,
        f,
        g,
        v,
        b,
        V,
        A,
        Ce,
        Ie,
        Pt,
        Mi,
        $t,
        _i,
        Ri,
        Vt
    ];
}
class h1 extends ke {
    constructor(e){
        super(), _e(this, e, _0, v0, ge, {
            supportLink: 63,
            playerControlsHeight: 64,
            returnFocus: 65
        }, g0, [
            -1,
            -1,
            -1,
            -1
        ]);
    }
}
function k0(i) {
    Fe(i, "v-d9t49t", ".settings-icon-wrapper.v-d9t49t{position:relative;width:24px}");
}
function w0(i) {
    let e, t, n;
    return t = new d1({
        props: {
            isMobile: i[1],
            currentQuality: i[2]
        }
    }), {
        c () {
            e = k("span"), D(t.$$.fragment), u(e, "class", "settings-icon-wrapper v-d9t49t");
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        p (o, l) {
            const s = {};
            l & 2 && (s.isMobile = o[1]), l & 4 && (s.currentQuality = o[2]), t.$set(s);
        },
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function y0(i) {
    let e, t;
    return e = new mi({
        props: {
            testId: "btn-settings",
            click: i[6],
            ariaLabel: i[0],
            $$slots: {
                default: [
                    w0
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 1 && (l.ariaLabel = n[0]), o & 518 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function C0(i, e, t) {
    let n, o, l;
    const s = vt(), a = s.state.currentQuality$;
    F(i, a, (g)=>t(2, l = g));
    const r = s.ui.settingsMenuVisible;
    F(i, r, (g)=>t(7, n = g));
    const c = s.ui.isMobile;
    F(i, c, (g)=>t(1, o = g));
    let f;
    function h() {
        r.set(!n);
    }
    return i.$$.update = ()=>{
        i.$$.dirty & 128 && t(0, f = U(n ? "tooltip_settings_on" : "tooltip_settings_off"));
    }, [
        f,
        o,
        l,
        a,
        r,
        c,
        h,
        n
    ];
}
class cl extends ke {
    constructor(e){
        super(), _e(this, e, C0, y0, ge, {}, k0);
    }
}
function P0(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "d", "M3 0h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3Zm1 9h2a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2Zm5 0h7a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2Zm-5 4h7a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2Zm10 0h2a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2Z"), u(t, "fill", "#fff"), u(e, "width", "22"), u(e, "height", "16"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "subtitle-pained-icon");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class S0 extends ke {
    constructor(e){
        super(), _e(this, e, null, P0, ge, {});
    }
}
function T0(i) {
    let e, t;
    return e = new m1({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function A0(i) {
    let e, t;
    return e = new S0({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function E0(i) {
    let e, t, n, o;
    const l = [
        A0,
        T0
    ], s = [];
    function a(r, c) {
        return r[0] ? 0 : 1;
    }
    return e = a(i), t = s[e] = l[e](i), {
        c () {
            t.c(), n = ht();
        },
        m (r, c) {
            s[e].m(r, c), C(r, n, c), o = !0;
        },
        p (r, c) {
            let f = e;
            e = a(r), e !== f && (me(), p(s[f], 1, 1, ()=>{
                s[f] = null;
            }), he(), t = s[e], t || (t = s[e] = l[e](r), t.c()), m(t, 1), t.m(n.parentNode, n));
        },
        i (r) {
            o || (m(t), o = !0);
        },
        o (r) {
            p(t), o = !1;
        },
        d (r) {
            r && y(n), s[e].d(r);
        }
    };
}
function L0(i) {
    let e, t;
    return e = new mi({
        props: {
            testId: "btn-Subtitles",
            ariaLabel: i[2],
            click: i[1],
            ariaKeyShortCut: zo[He.KeyC],
            $$slots: {
                default: [
                    E0
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 4 && (l.ariaLabel = n[2]), o & 2 && (l.click = n[1]), o & 9 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function V0(i, e, t) {
    let { isSubtitlesEnabled: n = !1 } = e, { click: o } = e, l;
    return i.$$set = (s)=>{
        "isSubtitlesEnabled" in s && t(0, n = s.isSubtitlesEnabled), "click" in s && t(1, o = s.click);
    }, i.$$.update = ()=>{
        i.$$.dirty & 1 && t(2, l = U(n ? "tooltip_subtitles_on" : "tooltip_subtitles_off"));
    }, [
        n,
        o,
        l
    ];
}
class I0 extends ke {
    constructor(e){
        super(), _e(this, e, V0, L0, ge, {
            isSubtitlesEnabled: 0,
            click: 1
        });
    }
}
function M0(i) {
    Fe(i, "v-19o2urr", ".time.v-19o2urr{display:flex;align-items:center;font-weight:500;font-variant-numeric:tabular-nums;padding:12px 6px}.time.mobile.v-19o2urr{padding:0 0 0 8px}.current.v-19o2urr{position:relative}.duration.v-19o2urr{opacity:0.7}.duration.v-19o2urr:before{content:' / ';white-space:pre}");
}
function _s(i) {
    let e, t;
    return {
        c () {
            e = k("span"), t = ze(i[3]), u(e, "class", "duration v-19o2urr");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p (n, o) {
            o & 8 && Xe(t, n[3]);
        },
        d (n) {
            n && y(e);
        }
    };
}
function R0(i) {
    let e, t, n, o, l, s = i[2] && _s(i);
    return {
        c () {
            e = k("div"), t = k("span"), n = ze(i[4]), o = B(), s && s.c(), u(t, "class", "current v-19o2urr"), u(e, "class", "time v-19o2urr"), Hn(()=>i[7].call(e)), L(e, "mobile", i[1]);
        },
        m (a, r) {
            C(a, e, r), d(e, t), d(t, n), d(e, o), s && s.m(e, null), l = Bo(e, i[7].bind(e));
        },
        p (a, [r]) {
            r & 16 && Xe(n, a[4]), a[2] ? s ? s.p(a, r) : (s = _s(a), s.c(), s.m(e, null)) : s && (s.d(1), s = null), r & 2 && L(e, "mobile", a[1]);
        },
        i: K,
        o: K,
        d (a) {
            a && y(e), s && s.d(), l();
        }
    };
}
function B0(i, e, t) {
    let { isMobile: n = !1 } = e, { duration: o } = e, { position: l } = e, { showDuration: s = !0 } = e, { width: a } = e, r, c;
    function f() {
        a = this.clientWidth, t(0, a);
    }
    return i.$$set = (h)=>{
        "isMobile" in h && t(1, n = h.isMobile), "duration" in h && t(5, o = h.duration), "position" in h && t(6, l = h.position), "showDuration" in h && t(2, s = h.showDuration), "width" in h && t(0, a = h.width);
    }, i.$$.update = ()=>{
        i.$$.dirty & 32 && t(3, r = _n(o)), i.$$.dirty & 64 && t(4, c = _n(l));
    }, [
        a,
        n,
        s,
        r,
        c,
        o,
        l,
        f
    ];
}
class p1 extends ke {
    constructor(e){
        super(), _e(this, e, B0, R0, ge, {
            isMobile: 1,
            duration: 5,
            position: 6,
            showDuration: 2,
            width: 0
        }, M0);
    }
}
function N0(i) {
    Fe(i, "v-1n5yyua", ".icon.v-1n5yyua.v-1n5yyua{display:block;width:24px;height:24px}.icon.v-1n5yyua .cross.v-1n5yyua{visibility:hidden}.icon[data-value='off'].v-1n5yyua .wave1.v-1n5yyua,.icon[data-value='off'].v-1n5yyua .wave2.v-1n5yyua{visibility:hidden}.icon[data-value='off'].v-1n5yyua .cross.v-1n5yyua{visibility:visible}.icon[data-value='mid'].v-1n5yyua .wave2.v-1n5yyua,.icon[data-value='min'].v-1n5yyua .wave2.v-1n5yyua{visibility:hidden}");
}
function z0(i) {
    let e, t, n, o, l, s;
    return {
        c () {
            e = I("svg"), t = I("g"), n = I("path"), o = I("path"), l = I("path"), u(n, "class", "wave2 v-1n5yyua"), u(n, "d", "M12.98 18.823c-.031 1.207-.67 1.609-1.828.62-1.719-1.469-3.609-3.194-4.242-3.721-.632-.529-1.645-.62-3.073-.62-1.427 0-1.815-.621-1.815-1.241s-.014-1.83-.014-2.001c0-.055.005-.086.014-.13.02-.095-.058-.973 0-1.59.085-.906.388-1.241 1.815-1.241 1.428 0 2.44-.092 3.073-.62.633-.529 2.523-2.253 4.242-3.722 1.158-.989 1.797-.587 1.829.62.043 1.607 0 3.85 0 6.683 0 2.83.043 5.356 0 6.963zm2.901-8.704A.875.875 0 1 1 17.12 8.88c.176.177.41.47.64.872.384.671.616 1.425.616 2.247s-.232 1.576-.615 2.247a4.23 4.23 0 0 1-.641.872.875.875 0 1 1-1.238-1.238c.074-.073.214-.249.36-.503.241-.423.384-.887.384-1.378s-.143-.955-.385-1.378a2.597 2.597 0 0 0-.359-.503zm3-2A.875.875 0 1 1 20.12 6.88c.263.264.62.74.966 1.432.517 1.033.843 2.255.89 3.716-.047 1.403-.373 2.625-.89 3.658-.346.692-.703 1.168-.966 1.432a.875.875 0 1 1-1.238-1.238c.138-.137.383-.464.639-.976.407-.814.667-1.79.705-2.876-.038-1.144-.298-2.12-.705-2.934-.256-.512-.501-.839-.639-.976z"), u(o, "class", "wave1 v-1n5yyua"), u(o, "d", "M12.98 18.823c-.031 1.207-.67 1.609-1.828.62-1.719-1.469-3.609-3.194-4.242-3.721-.632-.529-1.645-.62-3.073-.62-1.427 0-1.815-.621-1.815-1.241s-.014-1.83-.014-2.001c0-.055.005-.086.014-.13.02-.095-.058-.973 0-1.59.085-.906.388-1.241 1.815-1.241 1.428 0 2.44-.092 3.073-.62.633-.529 2.523-2.253 4.242-3.722 1.158-.989 1.797-.587 1.829.62.043 1.607 0 3.85 0 6.683 0 2.83.043 5.356 0 6.963zm2.901-8.704A.875.875 0 1 1 17.12 8.88c.176.177.41.47.64.872.384.671.616 1.425.616 2.247s-.232 1.576-.615 2.247a4.23 4.23 0 0 1-.641.872.875.875 0 1 1-1.238-1.238c.074-.073.214-.249.36-.503.241-.423.384-.887.384-1.378s-.143-.955-.385-1.378a2.597 2.597 0 0 0-.359-.503z"), u(l, "class", "cross v-1n5yyua"), u(l, "d", "m20 10.763 2.381-2.382A.875.875 0 1 1 23.62 9.62L21.237 12l2.382 2.381a.875.875 0 1 1-1.238 1.238L20 13.237l-2.381 2.382a.875.875 0 1 1-1.238-1.238L18.763 12 16.38 9.619A.875.875 0 1 1 17.62 8.38zm-7.02 8.06c-.031 1.207-.67 1.609-1.828.62-1.719-1.469-3.609-3.194-4.242-3.721-.632-.529-1.645-.62-3.073-.62-1.427 0-1.815-.621-1.815-1.241s-.014-1.83-.014-2.001c0-.055.005-.086.014-.13.02-.095-.058-.973 0-1.59.085-.906.388-1.241 1.815-1.241 1.428 0 2.44-.092 3.073-.62.633-.529 2.523-2.253 4.242-3.722 1.158-.989 1.797-.587 1.829.62.043 1.607 0 3.85 0 6.683 0 2.83.043 5.356 0 6.963z"), u(t, "fill", "#fff"), u(t, "fill-rule", "evenodd"), u(e, "data-value", i[0]), u(e, "data-testid", s = "volume-" + i[0] + "-icon"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "class", "icon v-1n5yyua"), u(e, "aria-hidden", "true");
        },
        m (a, r) {
            C(a, e, r), d(e, t), d(t, n), d(t, o), d(t, l);
        },
        p (a, [r]) {
            r & 1 && u(e, "data-value", a[0]), r & 1 && s !== (s = "volume-" + a[0] + "-icon") && u(e, "data-testid", s);
        },
        i: K,
        o: K,
        d (a) {
            a && y(e);
        }
    };
}
function O0(i, e, t) {
    let { volume: n = 1 } = e, { muted: o = !1 } = e;
    const l = (a, r)=>r ? "off" : a > .5 ? "max" : a > .2 ? "mid" : a > 0 ? "min" : "off";
    let s;
    return i.$$set = (a)=>{
        "volume" in a && t(1, n = a.volume), "muted" in a && t(2, o = a.muted);
    }, i.$$.update = ()=>{
        i.$$.dirty & 6 && t(0, s = l(n, o));
    }, [
        s,
        n,
        o
    ];
}
class Oo extends ke {
    constructor(e){
        super(), _e(this, e, O0, z0, ge, {
            volume: 1,
            muted: 2
        }, N0);
    }
}
function D0(i) {
    let e, t;
    const n = i[4].default, o = wn(n, i, i[3], null);
    return {
        c () {
            e = k("div"), o && o.c(), u(e, "class", "overlay");
        },
        m (l, s) {
            C(l, e, s), o && o.m(e, null), i[5](e), t = !0;
        },
        p (l, [s]) {
            o && o.p && (!t || s & 8) && Cn(o, n, l, l[3], t ? yn(n, l[3], s, null) : Pn(l[3]), null);
        },
        i (l) {
            t || (m(o, l), t = !0);
        },
        o (l) {
            p(o, l), t = !1;
        },
        d (l) {
            l && y(e), o && o.d(l), i[5](null);
        }
    };
}
function H0(i, e, t) {
    let n, { $$slots: o = {}, $$scope: l } = e;
    const a = vt().ui.overlayContainer$;
    F(i, a, (g)=>t(2, n = g));
    let r;
    const c = (g)=>{
        !g || !r || !g.contains(r) || g.removeChild(r);
    }, f = (g)=>{
        !g || !r || g.contains(r) || g.appendChild(r);
    };
    Ki(()=>(f(n), ()=>c(n)));
    function h(g) {
        We[g ? "unshift" : "push"](()=>{
            r = g, t(0, r);
        });
    }
    return i.$$set = (g)=>{
        "$$scope" in g && t(3, l = g.$$scope);
    }, i.$$.update = ()=>{
        i.$$.dirty & 4 && f(n);
    }, [
        r,
        a,
        n,
        l,
        o,
        h
    ];
}
class F0 extends ke {
    constructor(e){
        super(), _e(this, e, H0, D0, ge, {});
    }
}
function U0(i) {
    Fe(i, "v-1jbbzcj", '.tooltip-wrapper.v-1jbbzcj{display:flex;flex-direction:column;min-width:0}.full-width.v-1jbbzcj{width:100%}.tooltip.v-1jbbzcj{position:absolute;opacity:0;visibility:hidden;transition:opacity 200ms, visibility 200ms;bottom:100%;left:0}.content.v-1jbbzcj{display:inline-block;padding:6px 10px;border-radius:3px;color:var(--white);background-color:rgba(41, 41, 41, .8)}.tooltip.active.v-1jbbzcj{opacity:1;visibility:visible}.tooltip-pointer.v-1jbbzcj{position:absolute;bottom:0;width:0;border-top:5px solid rgba(41, 41, 41, .8);border-right:5px solid transparent;border-left:5px solid transparent;content:" ";font-size:0;line-height:0}');
}
function ks(i) {
    let e, t;
    return e = new F0({
        props: {
            $$slots: {
                default: [
                    q0
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 262387 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function q0(i) {
    let e, t, n, o, l, s, a;
    return {
        c () {
            e = k("div"), t = k("div"), n = ze(i[1]), o = B(), l = k("div"), u(t, "class", "content v-1jbbzcj"), u(l, "class", "tooltip-pointer v-1jbbzcj"), u(l, "style", s = `transform: translate(${i[5]}px, ${i[8]}px);`), u(e, "class", "tooltip v-1jbbzcj"), u(e, "style", a = `transform: translate(${i[6]}px, ${i[7]}px);`), L(e, "active", i[0]);
        },
        m (r, c) {
            C(r, e, c), d(e, t), d(t, n), d(e, o), d(e, l), i[17](e);
        },
        p (r, c) {
            c & 2 && Xe(n, r[1]), c & 32 && s !== (s = `transform: translate(${r[5]}px, ${r[8]}px);`) && u(l, "style", s), c & 192 && a !== (a = `transform: translate(${r[6]}px, ${r[7]}px);`) && u(e, "style", a), c & 1 && L(e, "active", r[0]);
        },
        d (r) {
            r && y(e), i[17](null);
        }
    };
}
function W0(i) {
    let e, t, n, o, l, s;
    const a = i[15].default, r = wn(a, i, i[18], null);
    let c = i[1] && ks(i);
    return {
        c () {
            e = k("div"), r && r.c(), t = B(), c && c.c(), n = ht(), u(e, "class", "tooltip-wrapper v-1jbbzcj"), L(e, "full-width", i[2]);
        },
        m (f, h) {
            C(f, e, h), r && r.m(e, null), i[16](e), C(f, t, h), c && c.m(f, h), C(f, n, h), o = !0, l || (s = [
                Ae(e, "mouseenter", i[11]),
                Ae(e, "mousemove", i[11]),
                Ae(e, "mouseleave", i[12]),
                Ae(e, "mousedown", i[12]),
                Ae(e, "mouseup", i[11])
            ], l = !0);
        },
        p (f, [h]) {
            r && r.p && (!o || h & 262144) && Cn(r, a, f, f[18], o ? yn(a, f[18], h, null) : Pn(f[18]), null), (!o || h & 4) && L(e, "full-width", f[2]), f[1] ? c ? (c.p(f, h), h & 2 && m(c, 1)) : (c = ks(f), c.c(), m(c, 1), c.m(n.parentNode, n)) : c && (me(), p(c, 1, 1, ()=>{
                c = null;
            }), he());
        },
        i (f) {
            o || (m(r, f), m(c), o = !0);
        },
        o (f) {
            p(r, f), p(c), o = !1;
        },
        d (f) {
            f && (y(e), y(t), y(n)), r && r.d(f), i[16](null), c && c.d(f), l = !1, xt(s);
        }
    };
}
const So = 5;
function Z0(i, e, t) {
    let n, o, { $$slots: l = {}, $$scope: s } = e, { content: a = "" } = e, { active: r = !1 } = e, { translateX: c = 0 } = e, { translateY: f = 0 } = e, { isFullWidthWrapper: h = !1 } = e, g, v, b, _ = 0, V = So, A = 0, S = 0;
    const P = Yi(), N = vt(), W = N.ui.playerSize;
    F(i, W, (w)=>t(21, o = w));
    const X = N.ui.overlayContainer$;
    F(i, X, (w)=>t(20, n = w));
    const Z = N.getLogger().createComponentLog("Tooltip component"), T = ()=>{
        if (!n) return;
        const w = n.getBoundingClientRect(), oe = g.getBoundingClientRect(), fe = oe.width, ve = v.clientWidth, Me = o.width, Ee = (fe - ve) / 2, we = oe.left + c - w.left;
        let H = we + Ee;
        const M = oe.top + f - w.top;
        let Y = ve / 2 - So;
        const pe = H < co, ee = H + ve > Me - co;
        pe && (H = co, Y = we + oe.width / 2 - 2.5 * So), ee && (H = Me - co - ve, Y = oe.left - w.left + oe.width / 2 - H - So), t(6, A = H), t(7, S = M), t(5, _ = Y);
    }, te = ()=>{
        try {
            if (!n || !g) return;
            T(), t(0, r = !0);
        } catch (w) {
            Z({
                message: String(w)
            });
        }
    }, j = ()=>{
        t(0, r = !1);
    }, ie = ()=>{
        v && (b || (b = window.setTimeout(te, P.controls.hideTimeoutTooltips)), r && te());
    }, G = ()=>{
        j(), window.clearTimeout(b), b = void 0;
    };
    No(()=>window.clearTimeout(b));
    function J(w) {
        We[w ? "unshift" : "push"](()=>{
            g = w, t(3, g);
        });
    }
    function ue(w) {
        We[w ? "unshift" : "push"](()=>{
            v = w, t(4, v);
        });
    }
    return i.$$set = (w)=>{
        "content" in w && t(1, a = w.content), "active" in w && t(0, r = w.active), "translateX" in w && t(13, c = w.translateX), "translateY" in w && t(14, f = w.translateY), "isFullWidthWrapper" in w && t(2, h = w.isFullWidthWrapper), "$$scope" in w && t(18, s = w.$$scope);
    }, [
        r,
        a,
        h,
        g,
        v,
        _,
        A,
        S,
        V,
        W,
        X,
        ie,
        G,
        c,
        f,
        l,
        J,
        ue,
        s
    ];
}
class g1 extends ke {
    constructor(e){
        super(), _e(this, e, Z0, W0, ge, {
            content: 1,
            active: 0,
            translateX: 13,
            translateY: 14,
            isFullWidthWrapper: 2
        }, U0);
    }
}
function j0(i) {
    Fe(i, "v-p9r045", ".btn-container.v-p9r045{position:relative;display:flex;align-items:center;height:100%;transition:var(--button-hover-transition);will-change:opacity;-webkit-tap-highlight-color:transparent}.w-max.v-p9r045{width:100%;min-width:0}");
}
function G0(i) {
    let e;
    const t = i[15].default, n = wn(t, i, i[19], null);
    return {
        c () {
            n && n.c();
        },
        m (o, l) {
            n && n.m(o, l), e = !0;
        },
        p (o, l) {
            n && n.p && (!e || l & 524288) && Cn(n, t, o, o[19], e ? yn(t, o[19], l, null) : Pn(o[19]), null);
        },
        i (o) {
            e || (m(n, o), e = !0);
        },
        o (o) {
            p(n, o), e = !1;
        },
        d (o) {
            n && n.d(o);
        }
    };
}
function K0(i) {
    let e, t;
    return e = new g1({
        props: {
            content: i[8],
            translateX: i[6],
            translateY: i[7],
            isFullWidthWrapper: i[3],
            $$slots: {
                default: [
                    Y0
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 256 && (l.content = n[8]), o & 64 && (l.translateX = n[6]), o & 128 && (l.translateY = n[7]), o & 8 && (l.isFullWidthWrapper = n[3]), o & 524288 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Y0(i) {
    let e;
    const t = i[15].default, n = wn(t, i, i[19], null);
    return {
        c () {
            n && n.c();
        },
        m (o, l) {
            n && n.m(o, l), e = !0;
        },
        p (o, l) {
            n && n.p && (!e || l & 524288) && Cn(n, t, o, o[19], e ? yn(t, o[19], l, null) : Pn(o[19]), null);
        },
        i (o) {
            e || (m(n, o), e = !0);
        },
        o (o) {
            p(n, o), e = !1;
        },
        d (o) {
            n && n.d(o);
        }
    };
}
function Q0(i) {
    let e, t, n, o, l, s, a, r, c;
    const f = [
        K0,
        G0
    ], h = [];
    function g(v, b) {
        return v[2] && v[4] && !v[9] ? 0 : 1;
    }
    return t = g(i), n = h[t] = f[t](i), {
        c () {
            e = k("div"), n.c(), u(e, "class", o = "btn-container " + i[1] + " v-p9r045"), u(e, "aria-hidden", l = i[5] || null), Hn(()=>i[18].call(e));
        },
        m (v, b) {
            C(v, e, b), h[t].m(e, null), s = Bo(e, i[18].bind(e)), a = !0, r || (c = [
                Ae(e, "pointerdown", rt(di(i[16]))),
                Ae(e, "click", rt(di(i[17])))
            ], r = !0);
        },
        p (v, [b]) {
            let _ = t;
            t = g(v), t === _ ? h[t].p(v, b) : (me(), p(h[_], 1, 1, ()=>{
                h[_] = null;
            }), he(), n = h[t], n ? n.p(v, b) : (n = h[t] = f[t](v), n.c()), m(n, 1), n.m(e, null)), (!a || b & 2 && o !== (o = "btn-container " + v[1] + " v-p9r045")) && u(e, "class", o), (!a || b & 32 && l !== (l = v[5] || null)) && u(e, "aria-hidden", l);
        },
        i (v) {
            a || (m(n), a = !0);
        },
        o (v) {
            p(n), a = !1;
        },
        d (v) {
            v && y(e), h[t].d(), s(), r = !1, xt(c);
        }
    };
}
function X0(i, e, t) {
    let n, o, { $$slots: l = {}, $$scope: s } = e, { className: a = "" } = e, { disabled: r = !1 } = e, { hasTooltip: c = !0 } = e, { width: f } = e, { isFullWidthTooltip: h = !0 } = e, { tooltipContent: g = "" } = e, { disabledTooltipContent: v = U("tooltip_button_disabled") } = e, { isAriaHidden: b = !1 } = e, { initialTranslateXPx: _ = 0 } = e, { initialTranslateYPx: V = -18 } = e;
    const A = vt(), S = A.ui.isMobile;
    F(i, S, (T)=>t(9, o = T));
    const P = A.state.graphIsOpened$;
    F(i, P, (T)=>t(14, n = T));
    let N;
    function W(T) {
        Jn.call(this, i, T);
    }
    function X(T) {
        Jn.call(this, i, T);
    }
    function Z() {
        f = this.clientWidth, t(0, f);
    }
    return i.$$set = (T)=>{
        "className" in T && t(1, a = T.className), "disabled" in T && t(12, r = T.disabled), "hasTooltip" in T && t(2, c = T.hasTooltip), "width" in T && t(0, f = T.width), "isFullWidthTooltip" in T && t(3, h = T.isFullWidthTooltip), "tooltipContent" in T && t(4, g = T.tooltipContent), "disabledTooltipContent" in T && t(13, v = T.disabledTooltipContent), "isAriaHidden" in T && t(5, b = T.isAriaHidden), "initialTranslateXPx" in T && t(6, _ = T.initialTranslateXPx), "initialTranslateYPx" in T && t(7, V = T.initialTranslateYPx), "$$scope" in T && t(19, s = T.$$scope);
    }, i.$$.update = ()=>{
        i.$$.dirty & 28688 && (r ? t(8, N = n ? U("tooltip_disabled_when_graph_on") : v) : t(8, N = g));
    }, [
        f,
        a,
        c,
        h,
        g,
        b,
        _,
        V,
        N,
        o,
        S,
        P,
        r,
        v,
        n,
        l,
        W,
        X,
        Z,
        s
    ];
}
class Rt extends ke {
    constructor(e){
        super(), _e(this, e, X0, Q0, ge, {
            className: 1,
            disabled: 12,
            hasTooltip: 2,
            width: 0,
            isFullWidthTooltip: 3,
            tooltipContent: 4,
            disabledTooltipContent: 13,
            isAriaHidden: 5,
            initialTranslateXPx: 6,
            initialTranslateYPx: 7
        }, j0);
    }
}
function J0(i) {
    let e, t, n, o, l;
    return {
        c () {
            e = I("svg"), t = I("rect"), o = I("path"), u(t, "width", "20"), u(t, "height", "20"), u(t, "rx", "10"), u(t, "fill", "white"), u(t, "fill-opacity", n = i[0] ? 1 : .24), u(o, "d", "M12.5259 8.68864L12.587 8.87536L12.3702 8.23648C12.236 7.84095 11.8295 7.60563 11.4192 7.68593C10.9471 7.77831 10.6508 8.24892 10.7718 8.71381L10.8968 9.19361L10.6671 8.33855C10.5566 7.92714 10.1475 7.67011 9.72832 7.74872C9.32282 7.82476 9.04808 8.18606 9.06319 8.57993L8.34064 5.64592C8.21338 5.12912 7.64646 4.85578 7.1621 5.07767C6.79216 5.24715 6.59467 5.65495 6.69131 6.0498L7.98547 11.3373L6.87 10.178C6.52545 9.81987 5.94024 9.86103 5.64933 10.2638C5.44455 10.5474 5.44907 10.9312 5.66048 11.2098L7.89246 14.1518C7.89246 14.1518 9.12075 15.9833 12.1932 15.3769C14.6243 14.8972 15.4434 12.7097 14.7748 10.4997L14.2213 8.20869C14.0975 7.69621 13.5537 7.40646 13.0585 7.58916C12.614 7.75319 12.3788 8.23875 12.5259 8.68864Z"), u(o, "fill", l = i[0] ? "var(--interactive-episode-complete)" : "white"), u(e, "width", "20"), u(e, "height", "20"), u(e, "viewBox", "0 0 20 20"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
        },
        m (s, a) {
            C(s, e, a), d(e, t), d(e, o);
        },
        p (s, [a]) {
            a & 1 && n !== (n = s[0] ? 1 : .24) && u(t, "fill-opacity", n), a & 1 && l !== (l = s[0] ? "var(--interactive-episode-complete)" : "white") && u(o, "fill", l);
        },
        i: K,
        o: K,
        d (s) {
            s && y(e);
        }
    };
}
function x0(i, e, t) {
    let { completed: n } = e;
    return i.$$set = (o)=>{
        "completed" in o && t(0, n = o.completed);
    }, [
        n
    ];
}
class $0 extends ke {
    constructor(e){
        super(), _e(this, e, x0, J0, ge, {
            completed: 0
        });
    }
}
function ed(i) {
    Fe(i, "v-bklhpe", ".interactive-episode-icon.v-bklhpe{width:20px;height:20px;position:absolute;transform:translateX(-50%);cursor:default}.interactive-episode-icon.disabled.v-bklhpe{pointer-events:none;opacity:0.4}");
}
function td(i) {
    let e, t, n, o, l;
    return t = new $0({
        props: {
            completed: !!i[0].completed
        }
    }), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "interactive-episode-icon v-bklhpe"), u(e, "style", n = `left: ${i[0].from + i[0].width / 2}%`), Hn(()=>i[3].call(e)), L(e, "disabled", i[1]);
        },
        m (s, a) {
            C(s, e, a), z(t, e, null), o = Bo(e, i[3].bind(e)), l = !0;
        },
        p (s, a) {
            const r = {};
            a & 1 && (r.completed = !!s[0].completed), t.$set(r), (!l || a & 1 && n !== (n = `left: ${s[0].from + s[0].width / 2}%`)) && u(e, "style", n), (!l || a & 2) && L(e, "disabled", s[1]);
        },
        i (s) {
            l || (m(t.$$.fragment, s), l = !0);
        },
        o (s) {
            p(t.$$.fragment, s), l = !1;
        },
        d (s) {
            s && y(e), O(t), o();
        }
    };
}
function id(i) {
    let e, t;
    return e = new Rt({
        props: {
            tooltipContent: U(i[0].completed ? "tooltip_episode_finished" : "tooltip_episode_unfinished"),
            initialTranslateXPx: -10,
            initialTranslateYPx: -10,
            disabled: i[1],
            width: i[2] || 0,
            isAriaHidden: !0,
            isFullWidthTooltip: !1,
            $$slots: {
                default: [
                    td
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 1 && (l.tooltipContent = U(n[0].completed ? "tooltip_episode_finished" : "tooltip_episode_unfinished")), o & 2 && (l.disabled = n[1]), o & 4 && (l.width = n[2] || 0), o & 23 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function nd(i, e, t) {
    let { videoEpisode: n } = e, { disabled: o } = e, l;
    function s() {
        l = this.clientWidth, t(2, l);
    }
    return i.$$set = (a)=>{
        "videoEpisode" in a && t(0, n = a.videoEpisode), "disabled" in a && t(1, o = a.disabled);
    }, [
        n,
        o,
        l,
        s
    ];
}
class od extends ke {
    constructor(e){
        super(), _e(this, e, nd, id, ge, {
            videoEpisode: 0,
            disabled: 1
        }, ed);
    }
}
function ld(i) {
    Fe(i, "v-1h9p3m2", ".video-episodes-wrap.v-1h9p3m2{position:absolute;width:100%;height:100%}.video-episode.v-1h9p3m2{position:absolute;height:calc(3 * var(--slider-height));box-sizing:border-box;margin-top:-5px;padding:var(--slider-height) var(--slider-video-episode-gap);transition:transform 0.2s}.video-episode.v-1h9p3m2:where(:hover, :active){transform:scaleY(1.5)}.video-episode-inner.v-1h9p3m2,.video-episode-loaded.v-1h9p3m2,.video-episode-filled.v-1h9p3m2{position:absolute;height:var(--slider-height);border-radius:var(--slider-radius)}.video-episode-inner.v-1h9p3m2{position:absolute;overflow:hidden;width:calc(100% - 2 * var(--slider-video-episode-gap));background:var(--slider-bg)}.video-episode-loaded.v-1h9p3m2{position:absolute;left:-100%;width:100%;height:100%;border-radius:var(--slider-radius);background:var(--slider-loaded-bg);transition:transform 0.2s}.video-episode-filled.v-1h9p3m2{position:absolute;left:-100%;width:100%;height:100%;border-radius:var(--slider-radius);background-color:var(--slider-filled-bg)}");
}
function ws(i, e, t) {
    const n = i.slice();
    return n[2] = e[t], n;
}
function ys(i) {
    let e, t, n, o, l, s, a, r, c;
    return {
        c () {
            e = k("div"), t = k("div"), n = k("div"), l = B(), s = k("div"), r = B(), u(n, "class", "video-episode-loaded v-1h9p3m2"), u(n, "style", o = `transform: translateX(${i[2].loadedWidth / i[2].width * 100}%)`), u(s, "class", "video-episode-filled v-1h9p3m2"), u(s, "style", a = `transform: translateX(${i[2].filledWidth / i[2].width * 100}%)`), L(s, "mobile", i[1]), u(t, "class", "video-episode-inner v-1h9p3m2"), u(e, "class", "video-episode v-1h9p3m2"), u(e, "style", c = `left: ${i[2].from}%; width: ${i[2].width}%`), L(e, "mobile", i[1]);
        },
        m (f, h) {
            C(f, e, h), d(e, t), d(t, n), d(t, l), d(t, s), d(e, r);
        },
        p (f, h) {
            h & 1 && o !== (o = `transform: translateX(${f[2].loadedWidth / f[2].width * 100}%)`) && u(n, "style", o), h & 1 && a !== (a = `transform: translateX(${f[2].filledWidth / f[2].width * 100}%)`) && u(s, "style", a), h & 2 && L(s, "mobile", f[1]), h & 1 && c !== (c = `left: ${f[2].from}%; width: ${f[2].width}%`) && u(e, "style", c), h & 2 && L(e, "mobile", f[1]);
        },
        d (f) {
            f && y(e);
        }
    };
}
function sd(i) {
    let e, t = Mt(i[0]), n = [];
    for(let o = 0; o < t.length; o += 1)n[o] = ys(ws(i, t, o));
    return {
        c () {
            e = k("div");
            for(let o = 0; o < n.length; o += 1)n[o].c();
            u(e, "class", "video-episodes-wrap v-1h9p3m2");
        },
        m (o, l) {
            C(o, e, l);
            for(let s = 0; s < n.length; s += 1)n[s] && n[s].m(e, null);
        },
        p (o, [l]) {
            if (l & 3) {
                t = Mt(o[0]);
                let s;
                for(s = 0; s < t.length; s += 1){
                    const a = ws(o, t, s);
                    n[s] ? n[s].p(a, l) : (n[s] = ys(a), n[s].c(), n[s].m(e, null));
                }
                for(; s < n.length; s += 1)n[s].d(1);
                n.length = t.length;
            }
        },
        i: K,
        o: K,
        d (o) {
            o && y(e), sn(n, o);
        }
    };
}
function ad(i, e, t) {
    let { videoEpisodes: n = [] } = e, { isMobile: o } = e;
    return i.$$set = (l)=>{
        "videoEpisodes" in l && t(0, n = l.videoEpisodes), "isMobile" in l && t(1, o = l.isMobile);
    }, [
        n,
        o
    ];
}
class rd extends ke {
    constructor(e){
        super(), _e(this, e, ad, sd, ge, {
            videoEpisodes: 0,
            isMobile: 1
        }, ld);
    }
}
function ud(i) {
    Fe(i, "v-1golz1y", ".interactive-icons.v-1golz1y.v-1golz1y{position:absolute;width:calc(100% - 20px);top:-28px}.interactive-icons.mobile.v-1golz1y.v-1golz1y{top:-10px}.slider.v-1golz1y.v-1golz1y{position:relative;height:var(--slider-height);border-radius:var(--slider-radius);cursor:pointer;transition:visibility 0.2s, opacity 0.2s;will-change:opacity, transform;width:100%;touch-action:none;-webkit-tap-highlight-color:transparent}.no-handle.v-1golz1y.v-1golz1y{cursor:default}.slider.v-1golz1y.v-1golz1y:before{content:'';position:absolute;left:0;right:0;top:calc(-1 * (var(--controls-height) / 2 - var(--slider-height)) / 2);height:calc(var(--controls-height) / 2)}.bars.v-1golz1y.v-1golz1y{position:absolute;width:100%;height:100%;border-radius:var(--slider-radius);overflow:hidden;background:var(--slider-bg)}.loaded.v-1golz1y.v-1golz1y{position:absolute;left:-100%;width:100%;height:100%;border-radius:var(--slider-radius);background:var(--slider-loaded-bg);transition:transform 0.2s}.filled.v-1golz1y.v-1golz1y{position:absolute;left:-100%;width:100%;height:100%;border-radius:var(--slider-radius);background-color:var(--slider-filled-bg)}.slider.square.v-1golz1y.v-1golz1y,.slider.square.v-1golz1y>.bars.v-1golz1y,.slider.square.v-1golz1y .loaded.v-1golz1y,.slider.square.v-1golz1y .filled.v-1golz1y{border-radius:unset}.filled.active-live.v-1golz1y.v-1golz1y{background-color:var(--slider-filled-active-live-bg)}.filled.ads.v-1golz1y.v-1golz1y{background-color:var(--slider-filled-ads)}.handleWrap.v-1golz1y.v-1golz1y{position:absolute;left:-100%;width:100%}.handle.v-1golz1y.v-1golz1y{position:absolute;width:var(--slider-handle-size);height:var(--slider-handle-size);right:calc(-1 * var(--slider-handle-size) / 2);top:calc((var(--slider-height) - var(--slider-handle-size)) / 2);border-radius:50%;background-color:var(--slider-filled-bg);visibility:hidden;opacity:0;transform:scale(0);transition:opacity 0.2s, transform 0.2s, visibility 0.2s;will-change:opacity, transform}.handle.active-live.v-1golz1y.v-1golz1y{background-color:var(--slider-filled-active-live-bg)}.slider.v-1golz1y:hover .handle.v-1golz1y,.slider-dragging.v-1golz1y .handle.v-1golz1y{visibility:visible;opacity:1;transform:scale(1)}.slider-dragging.v-1golz1y .handle.v-1golz1y{transform:scale(1.3)}.slider-vertical.v-1golz1y.v-1golz1y{position:absolute;left:-8px;top:-18px;transform-origin:0 0;transform:rotate(-90deg)}.slider.disabled.v-1golz1y.v-1golz1y{cursor:default;pointer-events:none;opacity:0.4}");
}
function Cs(i, e, t) {
    const n = i.slice();
    return n[48] = e[t], n;
}
function Ps(i) {
    let e, t, n = Mt(i[21]), o = [];
    for(let s = 0; s < n.length; s += 1)o[s] = Ts(Cs(i, n, s));
    const l = (s)=>p(o[s], 1, 1, ()=>{
            o[s] = null;
        });
    return {
        c () {
            e = k("div");
            for(let s = 0; s < o.length; s += 1)o[s].c();
            u(e, "class", "interactive-icons v-1golz1y"), L(e, "mobile", i[5]), L(e, "hidden", i[5] && !i[20]);
        },
        m (s, a) {
            C(s, e, a);
            for(let r = 0; r < o.length; r += 1)o[r] && o[r].m(e, null);
            t = !0;
        },
        p (s, a) {
            if (a[0] & 2097664) {
                n = Mt(s[21]);
                let r;
                for(r = 0; r < n.length; r += 1){
                    const c = Cs(s, n, r);
                    o[r] ? (o[r].p(c, a), m(o[r], 1)) : (o[r] = Ts(c), o[r].c(), m(o[r], 1), o[r].m(e, null));
                }
                for(me(), r = n.length; r < o.length; r += 1)l(r);
                he();
            }
            (!t || a[0] & 32) && L(e, "mobile", s[5]), (!t || a[0] & 1048608) && L(e, "hidden", s[5] && !s[20]);
        },
        i (s) {
            if (!t) {
                for(let a = 0; a < n.length; a += 1)m(o[a]);
                t = !0;
            }
        },
        o (s) {
            o = o.filter(Boolean);
            for(let a = 0; a < o.length; a += 1)p(o[a]);
            t = !1;
        },
        d (s) {
            s && y(e), sn(o, s);
        }
    };
}
function Ss(i) {
    let e, t;
    return e = new od({
        props: {
            videoEpisode: i[48],
            disabled: i[9]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 2097152 && (l.videoEpisode = n[48]), o[0] & 512 && (l.disabled = n[9]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Ts(i) {
    let e, t, n = i[48].interactive && Ss(i);
    return {
        c () {
            n && n.c(), e = ht();
        },
        m (o, l) {
            n && n.m(o, l), C(o, e, l), t = !0;
        },
        p (o, l) {
            o[48].interactive ? n ? (n.p(o, l), l[0] & 2097152 && m(n, 1)) : (n = Ss(o), n.c(), m(n, 1), n.m(e.parentNode, e)) : n && (me(), p(n, 1, 1, ()=>{
                n = null;
            }), he());
        },
        i (o) {
            t || (m(n), t = !0);
        },
        o (o) {
            p(n), t = !1;
        },
        d (o) {
            o && y(e), n && n.d(o);
        }
    };
}
function cd(i) {
    let e, t, n, o, l, s;
    return {
        c () {
            e = k("div"), t = k("div"), o = B(), l = k("div"), u(t, "class", "loaded v-1golz1y"), u(t, "style", n = `transform: translateX(${i[11] * 100}%);`), u(l, "class", "filled v-1golz1y"), u(l, "style", s = `transform: translateX(${i[12] * 100}%);`), L(l, "active-live", i[4]), L(l, "ads", i[6]), u(e, "class", "bars v-1golz1y");
        },
        m (a, r) {
            C(a, e, r), d(e, t), d(e, o), d(e, l);
        },
        p (a, r) {
            r[0] & 2048 && n !== (n = `transform: translateX(${a[11] * 100}%);`) && u(t, "style", n), r[0] & 4096 && s !== (s = `transform: translateX(${a[12] * 100}%);`) && u(l, "style", s), r[0] & 16 && L(l, "active-live", a[4]), r[0] & 64 && L(l, "ads", a[6]);
        },
        i: K,
        o: K,
        d (a) {
            a && y(e);
        }
    };
}
function fd(i) {
    let e, t;
    return e = new rd({
        props: {
            videoEpisodes: i[21],
            isMobile: i[5]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 2097152 && (l.videoEpisodes = n[21]), o[0] & 32 && (l.isMobile = n[5]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function dd(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v, b = i[8] && Ps(i);
    const _ = [
        fd,
        cd
    ], V = [];
    function A(S, P) {
        return S[21].length ? 0 : 1;
    }
    return n = A(i), o = V[n] = _[n](i), {
        c () {
            b && b.c(), e = B(), t = k("div"), o.c(), l = B(), s = k("div"), a = k("div"), u(a, "class", "handle v-1golz1y"), L(a, "active-live", i[4]), u(s, "class", "handleWrap v-1golz1y"), u(s, "style", r = `transform: translateX(${i[13] * 100}%);`), L(s, "hidden", i[10]), u(t, "class", c = "slider " + i[0] + " v-1golz1y"), u(t, "aria-label", i[14]), u(t, "aria-valuemin", i[15]), u(t, "aria-valuemax", i[16]), u(t, "aria-valuenow", i[17]), u(t, "aria-valuetext", i[18]), u(t, "role", "slider"), u(t, "tabindex", "0"), u(t, "data-testid", f = i[1] ?? null), L(t, "disabled", i[9]), L(t, "slider-dragging", i[20]), L(t, "hidden", i[2]), L(t, "slider-vertical", i[3]), L(t, "no-handle", i[10]), L(t, "square", i[7]);
        },
        m (S, P) {
            b && b.m(S, P), C(S, e, P), C(S, t, P), V[n].m(t, null), d(t, l), d(t, s), d(s, a), i[42](t), h = !0, g || (v = [
                Ae(t, "pointerdown", di(i[22])),
                Ae(t, "pointermove", di(i[23])),
                Ae(t, "pointerup", di(i[24])),
                Ae(t, "pointerenter", di(i[25])),
                Ae(t, "pointerleave", di(i[26])),
                Ae(t, "click", rt((0, _esnextEsmJs1.noop))),
                Ae(t, "wheel", i[27])
            ], g = !0);
        },
        p (S, P) {
            S[8] ? b ? (b.p(S, P), P[0] & 256 && m(b, 1)) : (b = Ps(S), b.c(), m(b, 1), b.m(e.parentNode, e)) : b && (me(), p(b, 1, 1, ()=>{
                b = null;
            }), he());
            let N = n;
            n = A(S), n === N ? V[n].p(S, P) : (me(), p(V[N], 1, 1, ()=>{
                V[N] = null;
            }), he(), o = V[n], o ? o.p(S, P) : (o = V[n] = _[n](S), o.c()), m(o, 1), o.m(t, l)), (!h || P[0] & 16) && L(a, "active-live", S[4]), (!h || P[0] & 8192 && r !== (r = `transform: translateX(${S[13] * 100}%);`)) && u(s, "style", r), (!h || P[0] & 1024) && L(s, "hidden", S[10]), (!h || P[0] & 1 && c !== (c = "slider " + S[0] + " v-1golz1y")) && u(t, "class", c), (!h || P[0] & 16384) && u(t, "aria-label", S[14]), (!h || P[0] & 32768) && u(t, "aria-valuemin", S[15]), (!h || P[0] & 65536) && u(t, "aria-valuemax", S[16]), (!h || P[0] & 131072) && u(t, "aria-valuenow", S[17]), (!h || P[0] & 262144) && u(t, "aria-valuetext", S[18]), (!h || P[0] & 2 && f !== (f = S[1] ?? null)) && u(t, "data-testid", f), (!h || P[0] & 513) && L(t, "disabled", S[9]), (!h || P[0] & 1048577) && L(t, "slider-dragging", S[20]), (!h || P[0] & 5) && L(t, "hidden", S[2]), (!h || P[0] & 9) && L(t, "slider-vertical", S[3]), (!h || P[0] & 1025) && L(t, "no-handle", S[10]), (!h || P[0] & 129) && L(t, "square", S[7]);
        },
        i (S) {
            h || (m(b), m(o), h = !0);
        },
        o (S) {
            p(b), p(o), h = !1;
        },
        d (S) {
            S && (y(e), y(t)), b && b.d(S), V[n].d(), i[42](null), g = !1, xt(v);
        }
    };
}
function md(i, e, t) {
    let n, o, { className: l = "" } = e, { testId: s } = e, { isHidden: a = !1 } = e, { isVertical: r = !1 } = e, { isActiveLive: c = !1 } = e, { isMobile: f = !1 } = e, { isAds: h = !1 } = e, { squareBorders: g = !1 } = e, { videoEpisodes: v = [] } = e, { withWheelHandler: b = !1 } = e, { isInteractive: _ = !1 } = e, { disabled: V = !1 } = e, { hideHandel: A = !1 } = e, S, P, { onPointerDown: N = (0, _esnextEsmJs1.noop) } = e, { onHandleMove: W = (0, _esnextEsmJs1.noop) } = e, { onPointerUp: X = (0, _esnextEsmJs1.noop) } = e, { onPointerEnter: Z = (0, _esnextEsmJs1.noop) } = e, { onPointerMove: T = (0, _esnextEsmJs1.noop) } = e, { onPointerLeave: te = (0, _esnextEsmJs1.noop) } = e, { onWheelUp: j = (0, _esnextEsmJs1.noop) } = e, { onWheelDown: ie = (0, _esnextEsmJs1.noop) } = e, { onWheelLeft: G = (0, _esnextEsmJs1.noop) } = e, { onWheelRight: J = (0, _esnextEsmJs1.noop) } = e, { loadedProgress: ue = 0 } = e, { filledProgress: w = 0 } = e, { handleProgress: oe = 0 } = e, { ariaLabel: fe = "" } = e, { ariaValueMin: ve } = e, { ariaValueMax: Me } = e, { ariaValueNow: Ee } = e, { ariaValueText: we = "" } = e;
    const H = Yi();
    let M = !1, Y;
    function pe(ae) {
        if (M) return;
        t(20, M = !0), P = S.getBoundingClientRect();
        const Ue = Te(ae.clientX, ae.clientY);
        N(Ue), S.setPointerCapture(ae.pointerId);
    }
    function ee(ae) {
        const Ue = Te(ae.clientX, ae.clientY), qe = x(ae.clientX);
        T(Ue, qe, P.width), M && W(Ue);
    }
    function R(ae) {
        if (!M) return;
        t(20, M = !1);
        const Ue = Te(ae.clientX, ae.clientY);
        X(Ue);
    }
    function Q(ae) {
        P = S.getBoundingClientRect();
        const Ue = Te(ae.clientX, ae.clientY), qe = x(ae.clientX);
        Z(Ue, qe, P.width);
    }
    function Ve() {
        te();
    }
    function ye(ae) {
        b && (ae.preventDefault(), ae.deltaY < 0 ? j() : ae.deltaY > 0 ? ie() : ae.deltaX > 0 ? J() : G());
    }
    function Te(ae, Ue) {
        return r ? Math.max(0, Math.min(1, (P.height - (Ue - P.top)) / P.height)) : Math.min(Math.max(ae - P.x, 0), P.width) / P.width;
    }
    function x(ae) {
        return Math.min(Math.max(ae - P.x, 0), P.width);
    }
    function le(ae, Ue) {
        const qe = H.features.episodesClustering && !_ ? H.episodeMinWidthPc : 0, Je = [];
        let tt = 0, Be = 0, at = 0;
        for(let Le = 1; Le < v.length; Le++)Be = v[Le].time / Y * 100, Be - tt > qe && (Je.push({
            from: tt,
            width: Math.max(0, Be - tt),
            loadedWidth: Math.max(0, Math.min(Be, ae) - tt),
            filledWidth: Math.max(0, Math.min(Be, Ue) - tt),
            interactive: v[Le - 1].interactive,
            completed: v[Le - 1].completed
        }), tt = v[Le].time / Y * 100, at++);
        const St = {
            from: tt,
            width: Math.max(0, 100 - tt),
            loadedWidth: Math.max(0, Math.min(ae, 100) - tt),
            filledWidth: Math.max(0, Math.min(Ue, 100) - tt),
            interactive: v[at].interactive,
            completed: v[at].completed
        };
        100 - tt < qe ? (at -= 1, Je[at].width += 100 - tt, Je[at].loadedWidth += Math.max(0, Math.min(ae, 100) - tt), Je[at].filledWidth += Math.max(0, Math.min(Ue, 100) - tt)) : Je[at] = St;
        const Re = v[0].time;
        if (Re !== 0) {
            const Le = Re / Y * 100;
            Je.unshift({
                from: 0,
                width: Le,
                loadedWidth: Math.min(Le, ae),
                filledWidth: Math.min(Le, Ue)
            });
        }
        return Je;
    }
    function be(ae) {
        We[ae ? "unshift" : "push"](()=>{
            S = ae, t(19, S);
        });
    }
    return i.$$set = (ae)=>{
        "className" in ae && t(0, l = ae.className), "testId" in ae && t(1, s = ae.testId), "isHidden" in ae && t(2, a = ae.isHidden), "isVertical" in ae && t(3, r = ae.isVertical), "isActiveLive" in ae && t(4, c = ae.isActiveLive), "isMobile" in ae && t(5, f = ae.isMobile), "isAds" in ae && t(6, h = ae.isAds), "squareBorders" in ae && t(7, g = ae.squareBorders), "videoEpisodes" in ae && t(28, v = ae.videoEpisodes), "withWheelHandler" in ae && t(29, b = ae.withWheelHandler), "isInteractive" in ae && t(8, _ = ae.isInteractive), "disabled" in ae && t(9, V = ae.disabled), "hideHandel" in ae && t(10, A = ae.hideHandel), "onPointerDown" in ae && t(30, N = ae.onPointerDown), "onHandleMove" in ae && t(31, W = ae.onHandleMove), "onPointerUp" in ae && t(32, X = ae.onPointerUp), "onPointerEnter" in ae && t(33, Z = ae.onPointerEnter), "onPointerMove" in ae && t(34, T = ae.onPointerMove), "onPointerLeave" in ae && t(35, te = ae.onPointerLeave), "onWheelUp" in ae && t(36, j = ae.onWheelUp), "onWheelDown" in ae && t(37, ie = ae.onWheelDown), "onWheelLeft" in ae && t(38, G = ae.onWheelLeft), "onWheelRight" in ae && t(39, J = ae.onWheelRight), "loadedProgress" in ae && t(11, ue = ae.loadedProgress), "filledProgress" in ae && t(12, w = ae.filledProgress), "handleProgress" in ae && t(13, oe = ae.handleProgress), "ariaLabel" in ae && t(14, fe = ae.ariaLabel), "ariaValueMin" in ae && t(15, ve = ae.ariaValueMin), "ariaValueMax" in ae && t(16, Me = ae.ariaValueMax), "ariaValueNow" in ae && t(17, Ee = ae.ariaValueNow), "ariaValueText" in ae && t(18, we = ae.ariaValueText);
    }, i.$$.update = ()=>{
        i.$$.dirty[0] & 65536 && t(40, Y = Me ?? 0), i.$$.dirty[0] & 268435456 | i.$$.dirty[1] & 512 && t(41, n = v[v.length - 1]?.time < Y), i.$$.dirty[0] & 268441600 | i.$$.dirty[1] & 1536 && t(21, o = v.length && n && Y ? le(ue * 100, w * 100) : []);
    }, [
        l,
        s,
        a,
        r,
        c,
        f,
        h,
        g,
        _,
        V,
        A,
        ue,
        w,
        oe,
        fe,
        ve,
        Me,
        Ee,
        we,
        S,
        M,
        o,
        pe,
        ee,
        R,
        Q,
        Ve,
        ye,
        v,
        b,
        N,
        W,
        X,
        Z,
        T,
        te,
        j,
        ie,
        G,
        J,
        Y,
        n,
        be
    ];
}
class fl extends ke {
    constructor(e){
        super(), _e(this, e, md, dd, ge, {
            className: 0,
            testId: 1,
            isHidden: 2,
            isVertical: 3,
            isActiveLive: 4,
            isMobile: 5,
            isAds: 6,
            squareBorders: 7,
            videoEpisodes: 28,
            withWheelHandler: 29,
            isInteractive: 8,
            disabled: 9,
            hideHandel: 10,
            onPointerDown: 30,
            onHandleMove: 31,
            onPointerUp: 32,
            onPointerEnter: 33,
            onPointerMove: 34,
            onPointerLeave: 35,
            onWheelUp: 36,
            onWheelDown: 37,
            onWheelLeft: 38,
            onWheelRight: 39,
            loadedProgress: 11,
            filledProgress: 12,
            handleProgress: 13,
            ariaLabel: 14,
            ariaValueMin: 15,
            ariaValueMax: 16,
            ariaValueNow: 17,
            ariaValueText: 18
        }, ud, [
            -1,
            -1
        ]);
    }
}
const on = (i, e)=>$n[i] >= $n[e], hd = (i, e)=>$n[i] < $n[e], b1 = (i, e)=>$n[i] <= $n[e], pd = (i)=>i > Yn.L ? Ct.XL : i > Yn.M ? Ct.L : i > Yn.S ? Ct.M : i > Yn.XS ? Ct.S : Ct.XS;
function gd(i) {
    Fe(i, "v-1l78lz9", ".volumeBar-container.v-1l78lz9{display:flex;align-items:center}.volumeBar-container.vertical.v-1l78lz9,.vertical.v-1l78lz9 .tooltip-wrapper,.vertical.v-1l78lz9 .btn{width:40px}.volumeBar.v-1l78lz9{display:flex;align-items:center;margin:0 8px;position:relative;width:70px}.volumeBar-slider-vertical{width:50px !important}.volumeBar-vertical.v-1l78lz9{padding:0 8px 0 0;width:0}");
}
function bd(i) {
    let e, t;
    return e = new Oo({
        props: {
            volume: i[4],
            muted: i[2]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 16 && (l.volume = n[4]), o[0] & 4 && (l.muted = n[2]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function vd(i) {
    let e, t;
    return e = new mi({
        props: {
            className: "btn-full-opacity",
            disabled: !i[0],
            testId: i[3] ? "btn-volume-vertical" : "btn-volume-horizontal",
            ariaLabel: i[7],
            click: i[1],
            ariaKeyShortCut: zo[He.KeyM],
            $$slots: {
                default: [
                    bd
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 1 && (l.disabled = !n[0]), o[0] & 8 && (l.testId = n[3] ? "btn-volume-vertical" : "btn-volume-horizontal"), o[0] & 128 && (l.ariaLabel = n[7]), o[0] & 2 && (l.click = n[1]), o[0] & 20 | o[1] & 1 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function As(i) {
    let e, t, n;
    return t = new fl({
        props: {
            className: i[3] ? "volumeBar-slider-vertical" : "",
            isHidden: i[3] && !i[5],
            isVertical: i[3],
            withWheelHandler: !0,
            onWheelUp: i[13],
            onWheelDown: i[14],
            onPointerDown: i[12],
            onHandleMove: i[15],
            onPointerUp: i[16],
            onPointerEnter: i[3] ? i[17] : (0, _esnextEsmJs1.noop),
            onPointerLeave: i[3] ? i[18] : (0, _esnextEsmJs1.noop),
            ariaLabel: "\u041F\u043E\u043B\u0437\u0443\u043D\u043E\u043A \u0433\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u0438",
            ariaValueMin: 0,
            ariaValueMax: 100,
            ariaValueNow: Math.round(i[8] * 100),
            ariaValueText: `${Math.round(i[8] * 100)}%`,
            filledProgress: i[8],
            handleProgress: i[8],
            testId: i[3] ? "volume-slider-vertical" : "volume-slider"
        }
    }), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "volumeBar v-1l78lz9"), L(e, "volumeBar-vertical", i[3]);
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        p (o, l) {
            const s = {};
            l[0] & 8 && (s.className = o[3] ? "volumeBar-slider-vertical" : ""), l[0] & 40 && (s.isHidden = o[3] && !o[5]), l[0] & 8 && (s.isVertical = o[3]), l[0] & 8 && (s.onPointerEnter = o[3] ? o[17] : (0, _esnextEsmJs1.noop)), l[0] & 8 && (s.onPointerLeave = o[3] ? o[18] : (0, _esnextEsmJs1.noop)), l[0] & 256 && (s.ariaValueNow = Math.round(o[8] * 100)), l[0] & 256 && (s.ariaValueText = `${Math.round(o[8] * 100)}%`), l[0] & 256 && (s.filledProgress = o[8]), l[0] & 256 && (s.handleProgress = o[8]), l[0] & 8 && (s.testId = o[3] ? "volume-slider-vertical" : "volume-slider"), t.$set(s), (!n || l[0] & 8) && L(e, "volumeBar-vertical", o[3]);
        },
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function _d(i) {
    let e, t, n, o, l, s;
    t = new g1({
        props: {
            content: i[6],
            translateY: -18,
            $$slots: {
                default: [
                    vd
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    });
    let a = i[0] && As(i);
    return {
        c () {
            e = k("div"), D(t.$$.fragment), n = B(), a && a.c(), u(e, "class", "volumeBar-container v-1l78lz9"), L(e, "vertical", i[3]);
        },
        m (r, c) {
            C(r, e, c), z(t, e, null), d(e, n), a && a.m(e, null), o = !0, l || (s = [
                Ae(e, "mouseenter", function() {
                    kn(i[3] ? i[19] : (0, _esnextEsmJs1.noop)) && (i[3] ? i[19] : (0, _esnextEsmJs1.noop)).apply(this, arguments);
                }),
                Ae(e, "mouseleave", function() {
                    kn(i[3] ? i[20] : (0, _esnextEsmJs1.noop)) && (i[3] ? i[20] : (0, _esnextEsmJs1.noop)).apply(this, arguments);
                }),
                Ae(e, "wheel", di(i[21]))
            ], l = !0);
        },
        p (r, c) {
            i = r;
            const f = {};
            c[0] & 64 && (f.content = i[6]), c[0] & 159 | c[1] & 1 && (f.$$scope = {
                dirty: c,
                ctx: i
            }), t.$set(f), i[0] ? a ? (a.p(i, c), c[0] & 1 && m(a, 1)) : (a = As(i), a.c(), m(a, 1), a.m(e, null)) : a && (me(), p(a, 1, 1, ()=>{
                a = null;
            }), he()), (!o || c[0] & 8) && L(e, "vertical", i[3]);
        },
        i (r) {
            o || (m(t.$$.fragment, r), m(a), o = !0);
        },
        o (r) {
            p(t.$$.fragment, r), p(a), o = !1;
        },
        d (r) {
            r && y(e), O(t), a && a.d(), l = !1, xt(s);
        }
    };
}
function kd(i, e, t) {
    let n, o, l, { isAudioAvailable: s = !0 } = e, { click: a } = e;
    const r = vt(), c = Yi(), f = r.state.volume$;
    F(i, f, (ve)=>t(4, n = ve));
    const h = r.state.muted$;
    F(i, h, (ve)=>t(23, l = ve));
    const g = r.actions.internal.setVolume, v = r.ui.currentGridType$;
    F(i, v, (ve)=>t(22, o = ve));
    let b = !1, _, V, A, S, P, N, W = 1, X = !1;
    function Z(ve) {
        W = n, g(ve);
    }
    function T() {
        a1(r, n, c.controls.volumeStepWheel);
    }
    function te() {
        r1(r, n, c.controls.volumeStepWheel);
    }
    function j(ve) {
        g(ve);
    }
    function ie(ve) {
        const Me = ve;
        g(Me, Me === 0 ? W : Me);
    }
    function G() {
        X = !0;
    }
    function J() {
        X = !1, oe();
    }
    function ue() {
        clearTimeout(_), t(5, b = !0);
    }
    function w() {
        oe();
    }
    function oe() {
        _ = window.setTimeout(()=>{
            X || t(5, b = !1);
        }, c.controls.volumeBarTimeout);
    }
    function fe(ve) {
        ve.deltaY < 0 ? T() : ve.deltaY > 0 && te();
    }
    return i.$$set = (ve)=>{
        "isAudioAvailable" in ve && t(0, s = ve.isAudioAvailable), "click" in ve && t(1, a = ve.click);
    }, i.$$.update = ()=>{
        i.$$.dirty[0] & 8388609 && t(2, S = !s || l), i.$$.dirty[0] & 4194304 && t(3, P = b1(o, Ct.S)), i.$$.dirty[0] & 12 && (P ? t(6, V = "") : t(6, V = U(S ? "tooltip_volume" : "tooltip_volume_muted")), t(7, A = U(S ? "tooltip_volume" : "tooltip_volume_muted"))), i.$$.dirty[0] & 20 && t(8, N = S ? 0 : n);
    }, [
        s,
        a,
        S,
        P,
        n,
        b,
        V,
        A,
        N,
        f,
        h,
        v,
        Z,
        T,
        te,
        j,
        ie,
        G,
        J,
        ue,
        w,
        fe,
        o,
        l
    ];
}
class wd extends ke {
    constructor(e){
        super(), _e(this, e, kd, _d, ge, {
            isAudioAvailable: 0,
            click: 1
        }, gd, [
            -1,
            -1
        ]);
    }
}
function yd(i) {
    let e;
    return {
        c () {
            e = I("path"), u(e, "class", "_enter"), u(e, "d", "M10.5 19c0 .5522847-.4477153 1-1 1H5c-.55228475 0-1-.4477153-1-1v-4.5c0-.5522847.44771525-1 1-1s1 .4477153 1 1v2.0715l3.36290054-3.3643932.00012963-.0001296c.39052429-.3905243 1.02368923-.3905243 1.41421353 0l.0157791.0157791.0001297.0001296c.3904527.3905959.3903366 1.0237609-.0002593 1.4142136L7.4285 18H9.5c.5522847 0 1 .4477153 1 1zM18 7.4285l-3.3629005 3.3643932c-.0000432.0000432-.0000865.0000864-.0001297.0001296-.3905243.3905243-1.0236892.3905243-1.4142135 0l-.0157791-.0157791c-.0000433-.0000432-.0000865-.0000864-.0001297-.0001296-.3904527-.3905959-.3903366-1.02376087.0002593-1.41421356L16.5715 6H14.5c-.5522847 0-1-.44771525-1-1s.4477153-1 1-1H19c.5522847 0 1 .44771525 1 1v4.5c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1z");
        },
        m (t, n) {
            C(t, e, n);
        },
        d (t) {
            t && y(e);
        }
    };
}
function Cd(i) {
    let e;
    return {
        c () {
            e = I("path"), u(e, "class", "_exit"), u(e, "d", "M4.57969048 13.9787492c0-.5464165.44295809-.9893746.9893746-.9893746h4.45218572c.5464165 0 .9893746.4429581.9893746.9893746v4.4521857c0 .5464165-.4429581.9893746-.9893746.9893746-.54641651 0-.98937461-.4429581-.98937461-.9893746v-2.0494895l-3.3196551 3.3211319-.00012963.0001297c-.39052429.3905243-1.02368927.3905243-1.41421356 0l-.00058487-.0005849-.00012964-.0001297c-.39045268-.3905958-.3903366-1.0237608.00025929-1.4142135l3.32113189-3.3196551H5.56906508c-.54641651 0-.9893746-.4429581-.9893746-.9893746zM14.9681238 7.61855457l3.3196551-3.32113189.0001296-.00012966c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l.0005849.00058488.0001296.00012965c.3904527.39059589.3903366 1.02376086-.0002593 1.41421354l-3.3211319 3.3196551h2.0494895c.5464165 0 .9893746.4429581.9893746.98937461 0 .5464165-.4429581.9893746-.9893746.9893746h-4.4415603c-.5522847 0-1-.4477153-1-1V5.56906508c0-.54641651.4429581-.9893746.9893746-.9893746s.9893746.44295809.9893746.9893746z");
        },
        m (t, n) {
            C(t, e, n);
        },
        d (t) {
            t && y(e);
        }
    };
}
function Pd(i) {
    let e, t, n;
    function o(a, r) {
        return a[0] ? Cd : yd;
    }
    let l = o(i), s = l(i);
    return {
        c () {
            e = I("svg"), t = I("g"), s.c(), u(t, "fill", "#fff"), u(t, "fill-rule", "evenodd"), u(e, "width", "24"), u(e, "height", "24"), u(e, "viewBox", "0 0 24 24"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", n = i[0] ? "close-fullscreen-icon" : "open-fullscreen-icon");
        },
        m (a, r) {
            C(a, e, r), d(e, t), s.m(t, null);
        },
        p (a, [r]) {
            l !== (l = o(a)) && (s.d(1), s = l(a), s && (s.c(), s.m(t, null))), r & 1 && n !== (n = a[0] ? "close-fullscreen-icon" : "open-fullscreen-icon") && u(e, "data-testid", n);
        },
        i: K,
        o: K,
        d (a) {
            a && y(e), s.d();
        }
    };
}
function Sd(i, e, t) {
    let { isFullscreen: n = !1 } = e;
    return i.$$set = (o)=>{
        "isFullscreen" in o && t(0, n = o.isFullscreen);
    }, [
        n
    ];
}
class Td extends ke {
    constructor(e){
        super(), _e(this, e, Sd, Pd, ge, {
            isFullscreen: 0
        });
    }
}
function Ad(i) {
    let e, t;
    return e = new Td({
        props: {
            isFullscreen: i[0]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 1 && (l.isFullscreen = n[0]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Ed(i) {
    let e, t;
    return e = new mi({
        props: {
            testId: "btn-fullscreen",
            ariaLabel: i[2],
            click: i[1],
            ariaKeyShortCut: zo[He.KeyF],
            $$slots: {
                default: [
                    Ad
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 4 && (l.ariaLabel = n[2]), o & 2 && (l.click = n[1]), o & 9 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Ld(i, e, t) {
    let { isFullscreen: n = !1 } = e, { click: o = (0, _esnextEsmJs1.noop) } = e, l;
    return i.$$set = (s)=>{
        "isFullscreen" in s && t(0, n = s.isFullscreen), "click" in s && t(1, o = s.click);
    }, i.$$.update = ()=>{
        i.$$.dirty & 1 && t(2, l = U(n ? "tooltip_fullscreen_on" : "tooltip_fullscreen_off"));
    }, [
        n,
        o,
        l
    ];
}
class v1 extends ke {
    constructor(e){
        super(), _e(this, e, Ld, Ed, ge, {
            isFullscreen: 0,
            click: 1
        });
    }
}
function Vd(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "d", "M17.671 10.923c.82.483.82 1.67 0 2.154l-8.787 5.175A1.25 1.25 0 0 1 7 17.174V6.826a1.25 1.25 0 0 1 1.884-1.078l8.787 5.175z"), u(t, "fill", "#fff"), u(e, "width", "24"), u(e, "height", "24"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "play-icon");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class dl extends ke {
    constructor(e){
        super(), _e(this, e, null, Vd, ge, {});
    }
}
function Id(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "d", "M8.712 5c.448 0 .61.047.774.134a.913.913 0 0 1 .38.38c.087.164.134.326.134.774v11.424c0 .448-.047.61-.134.774a.914.914 0 0 1-.38.38c-.164.087-.326.134-.774.134H6.788c-.448 0-.61-.047-.774-.134a.914.914 0 0 1-.38-.38c-.087-.164-.134-.326-.134-.774V6.288c0-.448.047-.61.134-.774a.913.913 0 0 1 .38-.38C6.178 5.047 6.34 5 6.788 5h1.924zm8 0c.448 0 .61.047.774.134a.914.914 0 0 1 .38.38c.087.164.134.326.134.774v11.424c0 .448-.047.61-.134.774a.914.914 0 0 1-.38.38c-.164.087-.326.134-.774.134h-1.924c-.448 0-.61-.047-.774-.134a.914.914 0 0 1-.38-.38c-.087-.164-.134-.326-.134-.774V6.288c0-.448.047-.61.134-.774a.914.914 0 0 1 .38-.38c.164-.087.326-.134.774-.134h1.924z"), u(t, "fill", "#fff"), u(e, "width", "24"), u(e, "height", "24"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "pause-icon");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class _1 extends ke {
    constructor(e){
        super(), _e(this, e, null, Id, ge, {});
    }
}
function Md(i) {
    Fe(i, "v-1ot3duq", ".mobile.v-1ot3duq{position:relative;display:flex;align-items:center;justify-content:center}.mobile.v-1ot3duq svg{transform:scale(2)}.icon-background-mobile.v-1ot3duq{position:absolute;top:16px;left:16px;border-radius:var(--big-play-radius);background-color:var(--big-play-bg-color);width:calc(100% - 32px);height:calc(100% - 32px)}");
}
function Es(i) {
    let e;
    return {
        c () {
            e = k("div"), u(e, "class", "icon-background-mobile v-1ot3duq");
        },
        m (t, n) {
            C(t, e, n);
        },
        d (t) {
            t && y(e);
        }
    };
}
function Rd(i) {
    let e, t, n, o, l = i[0] && Es();
    var s = i[6];
    function a(r) {
        return {};
    }
    return s && (n = fn(s, a())), {
        c () {
            l && l.c(), e = B(), t = k("div"), n && D(n.$$.fragment), u(t, "class", "v-1ot3duq"), L(t, "mobile", i[0]);
        },
        m (r, c) {
            l && l.m(r, c), C(r, e, c), C(r, t, c), n && z(n, t, null), o = !0;
        },
        p (r, c) {
            if (r[0] ? l || (l = Es(), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null), c & 64 && s !== (s = r[6])) {
                if (n) {
                    me();
                    const f = n;
                    p(f.$$.fragment, 1, 0, ()=>{
                        O(f, 1);
                    }), he();
                }
                s ? (n = fn(s, a()), D(n.$$.fragment), m(n.$$.fragment, 1), z(n, t, null)) : n = null;
            }
            (!o || c & 1) && L(t, "mobile", r[0]);
        },
        i (r) {
            o || (n && m(n.$$.fragment, r), o = !0);
        },
        o (r) {
            n && p(n.$$.fragment, r), o = !1;
        },
        d (r) {
            r && (y(e), y(t)), l && l.d(r), n && O(n);
        }
    };
}
function Bd(i) {
    let e, t;
    return e = new mi({
        props: {
            className: (i[0] ? "btn-m--play" : "") + " " + i[2],
            testId: "btn-play",
            click: i[4] ? i[8] : i[3],
            disabled: i[1],
            ariaLabel: i[5],
            ariaKeyShortCut: zo[He.KeyK],
            $$slots: {
                default: [
                    Rd
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 5 && (l.className = (n[0] ? "btn-m--play" : "") + " " + n[2]), o & 24 && (l.click = n[4] ? n[8] : n[3]), o & 2 && (l.disabled = n[1]), o & 32 && (l.ariaLabel = n[5]), o & 4161 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Nd(i, e, t) {
    let n, o;
    const { fakeIsPlaying$: l } = zr();
    F(i, l, (_)=>t(11, o = _));
    let { isMobile: s = !1 } = e, { isPlaying: a = !1 } = e, { disabled: r = !1 } = e, { className: c = "" } = e, { click: f = (0, _esnextEsmJs1.noop) } = e;
    const { toggle: h } = l;
    let g, v, b;
    return i.$$set = (_)=>{
        "isMobile" in _ && t(0, s = _.isMobile), "isPlaying" in _ && t(9, a = _.isPlaying), "disabled" in _ && t(1, r = _.disabled), "className" in _ && t(2, c = _.className), "click" in _ && t(3, f = _.click);
    }, i.$$.update = ()=>{
        i.$$.dirty & 2048 && t(4, g = o !== null), i.$$.dirty & 2576 && t(10, v = g ? o : a), i.$$.dirty & 1024 && t(5, b = U(v ? "tooltip_pause" : "tooltip_play")), i.$$.dirty & 1024 && t(6, n = v ? _1 : dl);
    }, [
        s,
        r,
        c,
        f,
        g,
        b,
        n,
        l,
        h,
        a,
        v,
        o
    ];
}
class ml extends ke {
    constructor(e){
        super(), _e(this, e, Nd, Bd, ge, {
            isMobile: 0,
            isPlaying: 9,
            disabled: 1,
            className: 2,
            click: 3
        }, Md);
    }
}
function zd(i) {
    Fe(i, "v-mb3pjo", ".prev.v-mb3pjo{transform:scaleX(-1)}.mobile.v-mb3pjo{transform:scale(1.3333)}.mobile.prev.v-mb3pjo{transform:scaleX(-1) scale(1.3333)}");
}
function Od(i) {
    let e, t, n;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "d", "M16 10.835V7.5a1 1 0 1 1 2 0v9a1 1 0 0 1-2 0v-3.335l-8.149 4.67C7.03 18.304 6 17.715 6 16.772V7.227c0-.943 1.029-1.533 1.851-1.061L16 10.834z"), u(t, "fill", "#fff"), u(e, "data-testid", n = i[0] ? "prev-icon" : "next-icon"), u(e, "width", "26"), u(e, "height", "24"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "class", "v-mb3pjo"), L(e, "prev", i[0]), L(e, "mobile", i[1]);
        },
        m (o, l) {
            C(o, e, l), d(e, t);
        },
        p (o, [l]) {
            l & 1 && n !== (n = o[0] ? "prev-icon" : "next-icon") && u(e, "data-testid", n), l & 1 && L(e, "prev", o[0]), l & 2 && L(e, "mobile", o[1]);
        },
        i: K,
        o: K,
        d (o) {
            o && y(e);
        }
    };
}
function Dd(i, e, t) {
    let { isPrev: n = !1 } = e, { isMobile: o = !1 } = e;
    return i.$$set = (l)=>{
        "isPrev" in l && t(0, n = l.isPrev), "isMobile" in l && t(1, o = l.isMobile);
    }, [
        n,
        o
    ];
}
class Hd extends ke {
    constructor(e){
        super(), _e(this, e, Dd, Od, ge, {
            isPrev: 0,
            isMobile: 1
        }, zd);
    }
}
function Fd(i) {
    let e, t;
    return e = new Hd({
        props: {
            isMobile: i[0],
            isPrev: i[2] === "prev"
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 1 && (l.isMobile = n[0]), o & 4 && (l.isPrev = n[2] === "prev"), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Ud(i) {
    let e, t;
    return e = new mi({
        props: {
            testId: "btn-" + i[2],
            disabled: i[1],
            ariaLabel: i[4],
            click: i[3],
            $$slots: {
                default: [
                    Fd
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 4 && (l.testId = "btn-" + n[2]), o & 2 && (l.disabled = n[1]), o & 16 && (l.ariaLabel = n[4]), o & 8 && (l.click = n[3]), o & 37 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function qd(i, e, t) {
    let { isMobile: n = !1 } = e, { disabled: o = !1 } = e, { type: l } = e, { click: s } = e, a;
    return i.$$set = (r)=>{
        "isMobile" in r && t(0, n = r.isMobile), "disabled" in r && t(1, o = r.disabled), "type" in r && t(2, l = r.type), "click" in r && t(3, s = r.click);
    }, i.$$.update = ()=>{
        i.$$.dirty & 4 && t(4, a = U(l === "prev" ? "tooltip_previous" : "tooltip_next"));
    }, [
        n,
        o,
        l,
        s,
        a
    ];
}
class Do extends ke {
    constructor(e){
        super(), _e(this, e, qd, Ud, ge, {
            isMobile: 0,
            disabled: 1,
            type: 2,
            click: 3
        });
    }
}
function Wd(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "fill-rule", "evenodd"), u(t, "clip-rule", "evenodd"), u(t, "d", "M4.265 4.265C3 5.531 3 7.567 3 11.64v.72c0 4.073 0 6.11 1.265 7.375C5.531 21 7.567 21 11.64 21h.72c4.073 0 6.11 0 7.375-1.265C21 18.469 21 16.433 21 12.36v-.72c0-4.073 0-6.11-1.265-7.375C18.469 3 16.433 3 12.36 3h-.72C7.567 3 5.53 3 4.265 4.265zM6 8.5c.096 4.682 2.556 7.5 6.61 7.5h.235v-2.679c1.476.15 2.577 1.254 3.026 2.679H18c-.578-2.132-2.075-3.31-3.005-3.76.93-.558 2.246-1.908 2.556-3.74h-1.937c-.406 1.49-1.615 2.84-2.77 2.968V8.5h-1.968v5.197c-1.197-.3-2.759-1.757-2.823-5.197H6z"), u(t, "fill", "#fff"), u(e, "width", "24"), u(e, "height", "24"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "vk-logo-icon");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class Zd extends ke {
    constructor(e){
        super(), _e(this, e, null, Wd, ge, {});
    }
}
function Ls(i) {
    let e, t, n, o, l, s, a;
    return {
        c () {
            e = I("path"), t = I("path"), n = I("path"), o = I("path"), l = I("path"), s = I("path"), a = I("path"), u(e, "d", "M30.7286 15.0483H33.2239L36.8885 5H35.0776L32.1402 13.2809H31.8551L29.0175 5H27.1781L30.7286 15.0483Z"), u(e, "fill", "white"), u(t, "d", "M46.2591 15.0483L41.6392 9.84599L45.9026 5H43.7923L40.2276 9.09059H39.814V5H38.103V15.0483H39.814V10.7439H40.2418L44.0062 15.0483H46.2591Z"), u(t, "fill", "white"), u(n, "d", "M56.0753 9.88875C56.9594 9.54668 57.5155 8.76277 57.5155 7.73656C57.5155 6.14023 56.1894 5 54.2502 5H50.329V15.0483H54.5354C56.4888 15.0483 57.8149 13.9081 57.8149 12.2405C57.8149 11.0717 57.159 10.2023 56.0753 9.88875ZM52.04 6.49656H54.2502C55.1628 6.49656 55.7902 7.05242 55.7902 7.87909C55.7902 8.69151 55.1628 9.24737 54.2502 9.24737H52.04V6.49656ZM54.5354 13.5518H52.04V10.7439H54.5354C55.4337 10.7439 56.0611 11.314 56.0611 12.1407C56.0611 12.9816 55.4337 13.5518 54.5354 13.5518Z"), u(n, "fill", "white"), u(o, "d", "M59.3767 15.0483H61.701L64.4672 9.54668H64.6954V15.0483H66.2638V7.63679H63.9396L61.1734 13.1384H60.9452V7.63679H59.3767V15.0483Z"), u(o, "fill", "white"), u(l, "d", "M67.3373 17.2575H68.9771V15.0483H74.3099V17.2575H75.9497V13.5518H74.6664V7.63679H69.2337L68.863 11.4281C68.7347 12.7678 68.3354 13.5518 67.5227 13.5518H67.3373V17.2575ZM69.8326 13.5518C70.2319 13.1669 70.403 12.5113 70.517 11.3996L70.7452 9.13335H73.0266V13.5518H69.8326Z"), u(l, "fill", "white"), u(s, "d", "M84.222 11.257C84.222 9.11909 82.625 7.49426 80.372 7.49426C78.1191 7.49426 76.5221 9.10484 76.5221 11.3425C76.5221 13.5803 78.1191 15.1908 80.372 15.1908C81.912 15.1908 83.3664 14.4639 83.9225 13.0529L82.3826 12.7963C82.0261 13.3237 81.3416 13.6943 80.4718 13.6943C79.217 13.6943 78.39 12.9246 78.2332 11.7844H84.1934C84.2077 11.6276 84.222 11.4566 84.222 11.257ZM80.372 8.91955C81.3987 8.91955 82.1687 9.57519 82.4396 10.5016H78.333C78.6039 9.54668 79.3739 8.91955 80.372 8.91955Z"), u(s, "fill", "white"), u(a, "d", "M89.0359 15.1908C91.3602 15.1908 92.9999 13.5945 92.9999 11.3425C92.9999 9.09059 91.3602 7.49426 89.0359 7.49426C86.7117 7.49426 85.0719 9.09059 85.0719 11.3425C85.0719 13.5945 86.7117 15.1908 89.0359 15.1908ZM89.0359 13.6943C87.6956 13.6943 86.783 12.7393 86.783 11.3425C86.783 9.94576 87.6956 8.99082 89.0359 8.99082C90.3763 8.99082 91.2889 9.94576 91.2889 11.3425C91.2889 12.7393 90.3763 13.6943 89.0359 13.6943Z"), u(a, "fill", "white");
        },
        m (r, c) {
            C(r, e, c), C(r, t, c), C(r, n, c), C(r, o, c), C(r, l, c), C(r, s, c), C(r, a, c);
        },
        d (r) {
            r && (y(e), y(t), y(n), y(o), y(l), y(s), y(a));
        }
    };
}
function jd(i) {
    let e, t, n, o = !i[0] && Ls();
    return {
        c () {
            e = I("svg"), t = I("path"), o && o.c(), u(t, "d", "M19.0283 1.47947C17.5482 1.47862e-05 15.3189 -2.59106e-06 10.8969 -1.8179e-06L10.1111 -1.68051e-06C5.68913 -9.0734e-07 3.47814 1.72463e-05 1.97977 1.47947C0.499685 2.95892 0.499757 5.18723 0.499758 9.60732L0.499758 10.3927C0.499758 14.8128 0.499687 17.0228 1.97978 18.5205C3.45987 20 5.68914 20 10.1111 20L10.8969 20C15.3189 20 17.5299 20 19.0283 18.5205C20.5084 17.0411 20.5084 14.8128 20.5084 10.3927L20.5084 9.60732C20.5084 5.16896 20.5084 2.95892 19.0283 1.47947ZM8.06464 14.8128C6.69419 15.3242 5.21408 14.4658 4.93999 13.0046C4.73899 12.0183 4.64761 10.9954 4.64761 9.93605C4.64761 8.91322 4.73899 7.90867 4.93999 6.94064C5.21408 5.47945 6.69419 4.62102 8.06464 5.13244C9.91018 5.80823 11.5913 6.84928 13.0166 8.18261C14.0581 9.15064 14.0581 10.8128 13.0166 11.7808C11.573 13.0959 9.89191 14.137 8.06464 14.8128ZM19.9602 10.3744C19.9602 14.6484 19.9601 16.7854 18.6262 18.1005C17.5116 19.2146 15.8305 19.3972 12.7973 19.4155C13.9302 19.2328 14.7342 18.9041 15.3554 18.2648C16.6893 16.9132 16.6893 14.7397 16.6893 10.3744L16.6893 9.57075C16.6893 5.20546 16.6893 3.032 15.3554 1.6804C14.7342 1.04113 13.9302 0.712308 12.7973 0.52966C15.8305 0.566189 17.5116 0.748873 18.6079 1.84476C19.9418 3.1781 19.9419 5.31505 19.9419 9.57075L19.9419 10.3744L19.9602 10.3744ZM11.6826 9.68036C11.8653 9.84474 11.8653 10.137 11.6826 10.3013C10.4401 11.4338 8.99653 12.3105 7.40681 12.895C7.16926 12.9863 6.91344 12.8402 6.85863 12.5845C6.69417 11.7443 6.60283 10.8676 6.60283 9.97262C6.60282 9.09591 6.69417 8.23744 6.85862 7.39726C6.91344 7.14155 7.16926 6.9954 7.40681 7.08672C8.97826 7.67119 10.4401 8.54794 11.6826 9.68036Z"), u(t, "fill", "white"), u(e, "width", i[1]), u(e, "height", "20"), u(e, "viewBox", n = "0 0 " + (i[1] + 1) + " 20"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", i[2]);
        },
        m (l, s) {
            C(l, e, s), d(e, t), o && o.m(e, null);
        },
        p (l, [s]) {
            l[0] ? o && (o.d(1), o = null) : o || (o = Ls(), o.c(), o.m(e, null)), s & 2 && u(e, "width", l[1]), s & 2 && n !== (n = "0 0 " + (l[1] + 1) + " 20") && u(e, "viewBox", n), s & 4 && u(e, "data-testid", l[2]);
        },
        i: K,
        o: K,
        d (l) {
            l && y(e), o && o.d();
        }
    };
}
function Gd(i, e, t) {
    let { short: n = !1 } = e, o, l;
    return i.$$set = (s)=>{
        "short" in s && t(0, n = s.short);
    }, i.$$.update = ()=>{
        i.$$.dirty & 1 && (t(1, o = n ? 20 : 93), t(2, l = n ? "vk-video-logo-icon--short" : "vk-video-logo-icon"));
    }, [
        n,
        o,
        l
    ];
}
class Kd extends ke {
    constructor(e){
        super(), _e(this, e, Gd, jd, ge, {
            short: 0
        });
    }
}
function Yd(i) {
    let e, t;
    return e = new Zd({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p: K,
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Qd(i) {
    let e, t;
    return e = new Kd({
        props: {
            short: i[3]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 8 && (l.short = n[3]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Xd(i) {
    let e, t, n, o;
    const l = [
        Qd,
        Yd
    ], s = [];
    function a(r, c) {
        return r[1] ? 0 : 1;
    }
    return e = a(i), t = s[e] = l[e](i), {
        c () {
            t.c(), n = ht();
        },
        m (r, c) {
            s[e].m(r, c), C(r, n, c), o = !0;
        },
        p (r, c) {
            let f = e;
            e = a(r), e === f ? s[e].p(r, c) : (me(), p(s[f], 1, 1, ()=>{
                s[f] = null;
            }), he(), t = s[e], t ? t.p(r, c) : (t = s[e] = l[e](r), t.c()), m(t, 1), t.m(n.parentNode, n));
        },
        i (r) {
            o || (m(t), o = !0);
        },
        o (r) {
            p(t), o = !1;
        },
        d (r) {
            r && y(n), s[e].d(r);
        }
    };
}
function Jd(i) {
    let e, t;
    return e = new mi({
        props: {
            className: "btn-full-opacity",
            disabled: !i[0],
            click: i[7],
            testId: i[1] ? "btn-vk-video-logo" : "btn-vk-logo",
            ariaLabel: i[2],
            $$slots: {
                default: [
                    Xd
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 1 && (l.disabled = !n[0]), o & 2 && (l.testId = n[1] ? "btn-vk-video-logo" : "btn-vk-logo"), o & 4 && (l.ariaLabel = n[2]), o & 131082 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function xd(i, e, t) {
    let n, o, l, { logoClickable: s = !1 } = e, { videoLogoUrl: a } = e, { click: r } = e;
    const c = Yi(), { logoLink: f, addTimeToLogoLink: h } = c, g = vt(), v = g.state.positionWithScrubbing$;
    F(i, v, (N)=>t(12, n = N));
    const b = g.ui.currentGridType$;
    F(i, b, (N)=>t(10, o = N));
    const _ = g.ui.isMobile;
    F(i, _, (N)=>t(11, l = N));
    let V, A, S;
    const P = ()=>{
        let N;
        if (A || !a) N = f;
        else {
            const W = Math.round(n);
            if (h && W) {
                const X = new URL(a);
                X.searchParams.append("t", (0, _esnextEsmJs1.timeCodeToString)(W)), N = X.toString();
            } else N = a;
        }
        r(), window.open(N, "_blank");
    };
    return i.$$set = (N)=>{
        "logoClickable" in N && t(0, s = N.logoClickable), "videoLogoUrl" in N && t(8, a = N.videoLogoUrl), "click" in N && t(9, r = N.click);
    }, i.$$.update = ()=>{
        i.$$.dirty & 3074 && t(3, S = (l || b1(o, Ct.L)) && A);
    }, t(2, V = c.logoType === xn.VK_VIDEO ? U("tooltip_vk_video_logo") : U("tooltip_vk_logo")), t(1, A = c.logoType === xn.VK_VIDEO), [
        s,
        A,
        V,
        S,
        v,
        b,
        _,
        P,
        a,
        r,
        o,
        l
    ];
}
class k1 extends ke {
    constructor(e){
        super(), _e(this, e, xd, Jd, ge, {
            logoClickable: 0,
            videoLogoUrl: 8,
            click: 9
        });
    }
}
function $d(i) {
    Fe(i, "v-8z1bf5", ".connecting.v-8z1bf5 .wave.v-8z1bf5{animation-duration:1s;animation-iteration-count:infinite}.connecting.v-8z1bf5 .wave1.v-8z1bf5{animation-name:v-8z1bf5-wave1}.connecting.v-8z1bf5 .wave2.v-8z1bf5{animation-name:v-8z1bf5-wave2}.connecting.v-8z1bf5 .wave3.v-8z1bf5{animation-name:v-8z1bf5-wave3}@keyframes v-8z1bf5-wave1{0%{opacity:0.3}33%{opacity:1}66%{opacity:1}100%{opacity:1}}@keyframes v-8z1bf5-wave2{0%{opacity:0.3}33%{opacity:0.3}66%{opacity:1}100%{opacity:1}}@keyframes v-8z1bf5-wave3{0%{opacity:0.3}33%{opacity:0.3}66%{opacity:0.3}100%{opacity:1}}");
}
function e2(i) {
    let e, t, n, o, l, s, a, r;
    return {
        c () {
            e = I("svg"), t = I("g"), n = I("path"), o = I("path"), l = I("path"), s = I("path"), a = I("path"), r = I("path"), u(n, "class", "wave wave1 v-8z1bf5"), u(n, "d", "M1 18v3h3c0-1.66-1.34-3-3-3z"), u(n, "fill", "#fff"), u(o, "class", "wave wave2 v-8z1bf5"), u(o, "d", "M1 14v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7z"), u(o, "fill", "#fff"), u(l, "class", "wave wave3 v-8z1bf5"), u(l, "d", "M1 10v2a9 9 0 0 1 9 9h2c0-6.08-4.93-11-11-11z"), u(l, "fill", "#fff"), u(s, "d", "M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"), u(s, "fill", "#fff"), u(a, "d", "M0 0h24v24H0z"), u(r, "d", "M5.667 7.44H18.5v9.167h-5.161a11.947 11.947 0 0 0-7.673-7.672V7.44Z"), u(r, "fill", "#fff"), L(r, "hidden", !i[1]), u(t, "fill", "none"), u(t, "fill-rule", "evenodd"), u(e, "width", "24"), u(e, "height", "24"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "chromecast-icon"), u(e, "class", "v-8z1bf5"), L(e, "connecting", i[2]);
        },
        m (c, f) {
            C(c, e, f), d(e, t), d(t, n), d(t, o), d(t, l), d(t, s), d(t, a), d(t, r);
        },
        p (c, f) {
            f & 2 && L(r, "hidden", !c[1]), f & 4 && L(e, "connecting", c[2]);
        },
        d (c) {
            c && y(e);
        }
    };
}
function t2(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v, b, _, V, A, S, P, N, W;
    return {
        c () {
            e = I("svg"), t = I("g"), n = I("mask"), o = I("path"), s = I("path"), a = I("path"), c = I("path"), f = I("defs"), h = I("clipPath"), g = I("path"), b = I("filter"), _ = I("feFlood"), V = I("feColorMatrix"), A = I("feOffset"), S = I("feGaussianBlur"), P = I("feColorMatrix"), N = I("feBlend"), W = I("feBlend"), u(o, "fill", l = i[1] ? "#2688EB" : "#fff"), u(o, "d", "M1.1 3.1h22v18h-22z"), u(s, "fill-rule", "evenodd"), u(s, "clip-rule", "evenodd"), u(s, "d", "M16.2 5.9c.855 0 1.442 0 1.897.038.445.036.683.103.856.19a2.1 2.1 0 0 1 .918.919c.088.172.155.411.191.856.037.455.038 1.042.038 1.897v4.4c0 .855 0 1.442-.038 1.897-.036.445-.103.683-.19.856a2.1 2.1 0 0 1-.919.918c-.172.088-.411.155-.856.191-.455.037-1.042.038-1.897.038H15a.9.9 0 0 0 0 1.8h1.238c.808 0 1.469 0 2.006-.044.556-.045 1.058-.142 1.527-.381a3.9 3.9 0 0 0 1.704-1.704c.239-.47.336-.971.381-1.527.044-.537.044-1.198.044-2.006V9.762c0-.808 0-1.469-.044-2.006-.045-.556-.142-1.058-.381-1.527a3.9 3.9 0 0 0-1.704-1.704c-.47-.239-.971-.336-1.527-.381-.537-.044-1.198-.044-2.006-.044H6a3.901 3.901 0 0 0-3.678 2.6.9.9 0 0 0 1.697.6A2.101 2.101 0 0 1 6 5.9h10.2ZM3.069 11.52a6.9 6.9 0 0 1 7.413 7.413.9.9 0 0 0 1.795.137 8.7 8.7 0 0 0-9.344-9.344.9.9 0 0 0 .136 1.794Zm.533 3.58c-.161 0-.32.011-.474.034a.9.9 0 1 1-.256-1.782A5.1 5.1 0 0 1 8.65 19.13a.9.9 0 1 1-1.782-.256A3.3 3.3 0 0 0 3.602 15.1Zm-1.5 3.3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"), u(n, "id", "c"), u(n, "maskUnits", "userSpaceOnUse"), u(n, "x", "1.1"), u(n, "y", "3.1"), u(n, "width", "22"), u(n, "height", "18"), u(n, "fill", "#000"), u(a, "fill-rule", "evenodd"), u(a, "clip-rule", "evenodd"), u(a, "d", "M16.2 5.9c.855 0 1.442 0 1.897.038.445.036.683.103.856.19a2.1 2.1 0 0 1 .918.919c.088.172.155.411.191.856.037.455.038 1.042.038 1.897v4.4c0 .855 0 1.442-.038 1.897-.036.445-.103.683-.19.856a2.1 2.1 0 0 1-.919.918c-.172.088-.411.155-.856.191-.455.037-1.042.038-1.897.038H15a.9.9 0 0 0 0 1.8h1.238c.808 0 1.469 0 2.006-.044.556-.045 1.058-.142 1.527-.381a3.9 3.9 0 0 0 1.704-1.704c.239-.47.336-.971.381-1.527.044-.537.044-1.198.044-2.006V9.762c0-.808 0-1.469-.044-2.006-.045-.556-.142-1.058-.381-1.527a3.9 3.9 0 0 0-1.704-1.704c-.47-.239-.971-.336-1.527-.381-.537-.044-1.198-.044-2.006-.044H6a3.901 3.901 0 0 0-3.678 2.6.9.9 0 0 0 1.697.6A2.101 2.101 0 0 1 6 5.9h10.2ZM3.069 11.52a6.9 6.9 0 0 1 7.413 7.413.9.9 0 0 0 1.795.137 8.7 8.7 0 0 0-9.344-9.344.9.9 0 0 0 .136 1.794Zm.533 3.58c-.161 0-.32.011-.474.034a.9.9 0 1 1-.256-1.782A5.1 5.1 0 0 1 8.65 19.13a.9.9 0 1 1-1.782-.256A3.3 3.3 0 0 0 3.602 15.1Zm-1.5 3.3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"), u(a, "fill", r = i[1] ? "#2688EB" : "#fff"), u(c, "d", "m18.097 5.938-.04.498.04-.498Zm.856.19-.227.446.227-.445Zm.918.919-.445.227.445-.227Zm.191.856-.498.04.498-.04Zm0 8.194-.498-.04.498.04Zm-.19.856-.446-.227.445.227Zm-.919.918-.227-.445.227.445Zm-.856.191.04.498-.04-.498Zm-1.86 1.838v-.5.5Zm2.007-.044.04.498-.04-.498Zm1.527-.381-.227-.446.227.446Zm1.704-1.704.445.227-.445-.227Zm.381-1.527.498.04-.498-.04Zm.044-2.006h-.5.5Zm0-4.476h-.5.5Zm-.044-2.006.498-.04-.498.04Zm-.381-1.527.445-.227-.445.227ZM19.77 4.525l-.227.446.227-.446Zm-1.527-.381.04-.498-.04.498ZM16.238 4.1v.5-.5ZM6 4.1v-.5.5ZM2.322 6.7l-.471-.167.471.167Zm1.697.6-.471-.167.471.167ZM6 5.9v-.5.5Zm-2.931 5.62-.038-.498.038.498Zm7.413 7.413.498.038-.498-.038Zm1.795.137.498.038-.498-.038ZM2.931 9.725l-.038-.498.038.498Zm-.829.966.499-.038-.499.038Zm1.025 4.443-.071-.495.071.495Zm-1.019-.763.495-.071-.495.07Zm.763-1.02.071.496-.07-.495ZM8.65 19.13l.495.072-.495-.072Zm-1.019.764-.07.494.07-.494Zm-.763-1.02.495.072-.495-.071ZM18.138 5.44c-.48-.04-1.091-.04-1.938-.04v1c.863 0 1.426.001 1.856.036l.082-.996Zm1.042.243c-.255-.13-.567-.205-1.042-.243l-.082.996c.414.034.58.092.67.138l.454-.89Zm1.137 1.137a2.6 2.6 0 0 0-1.137-1.137l-.454.891a1.6 1.6 0 0 1 .7.7l.89-.454Zm.244 1.042c-.04-.475-.114-.787-.244-1.042l-.891.454c.046.09.104.256.138.67l.997-.082ZM20.6 9.8c0-.846 0-1.458-.04-1.938l-.996.082c.035.43.036.993.036 1.856h1Zm0 4.4V9.8h-1v4.4h1Zm-.04 1.938c.04-.48.04-1.092.04-1.938h-1c0 .863-.001 1.426-.036 1.856l.997.082Zm-.243 1.042c.13-.255.205-.567.244-1.042l-.997-.082c-.034.414-.092.58-.138.67l.89.454Zm-1.137 1.137a2.6 2.6 0 0 0 1.137-1.137l-.891-.454a1.6 1.6 0 0 1-.7.7l.454.89Zm-1.042.244c.475-.04.787-.114 1.042-.244l-.454-.891c-.09.046-.256.104-.67.138l.082.997ZM16.2 18.6c.847 0 1.458 0 1.938-.04l-.082-.996c-.43.035-.993.036-1.856.036v1Zm-1.2 0h1.2v-1H15v1Zm-.4.4c0-.22.18-.4.4-.4v-1a1.4 1.4 0 0 0-1.4 1.4h1Zm.4.4a.4.4 0 0 1-.4-.4h-1a1.4 1.4 0 0 0 1.4 1.4v-1Zm1.238 0H15v1h1.238v-1Zm1.965-.042c-.512.042-1.15.042-1.965.042v1c.8 0 1.484 0 2.046-.045l-.081-.997Zm1.34-.329c-.386.198-.815.286-1.34.329l.081.997c.587-.049 1.163-.154 1.714-.435l-.454-.89Zm1.486-1.485a3.4 3.4 0 0 1-1.485 1.485l.454.891a4.4 4.4 0 0 0 1.922-1.922l-.89-.454Zm.329-1.341c-.043.525-.131.954-.329 1.34l.891.455c.281-.552.386-1.127.434-1.714l-.996-.081Zm.042-1.965c0 .815 0 1.453-.042 1.965l.997.081c.045-.561.045-1.246.045-2.046h-1Zm0 0h1-1Zm0-4.476v4.476h1V9.762h-1Zm0 0h1-1Zm-.042-1.965c.042.512.042 1.15.042 1.965h1c0-.8 0-1.484-.045-2.046l-.997.081Zm-.329-1.34c.198.386.286.815.329 1.34l.997-.081c-.049-.587-.154-1.162-.435-1.714l-.89.454ZM19.544 4.97a3.4 3.4 0 0 1 1.485 1.485l.891-.454a4.4 4.4 0 0 0-1.922-1.922l-.454.89Zm-1.341-.329c.525.043.954.132 1.34.329l.455-.891c-.552-.281-1.127-.387-1.714-.434l-.081.996ZM16.238 4.6c.815 0 1.453 0 1.965.042l.081-.996c-.562-.046-1.246-.046-2.046-.046v1Zm0 0v-1 1ZM6 4.6h10.238v-1H6v1Zm0-1v1-1Zm0 0a4.401 4.401 0 0 0-4.15 2.933l.944.334A3.401 3.401 0 0 1 6 4.6v-1ZM1.85 6.533a1.4 1.4 0 0 0 .854 1.787l.333-.943a.4.4 0 0 1-.243-.51l-.943-.334Zm.854 1.787a1.4 1.4 0 0 0 1.787-.853l-.943-.334a.4.4 0 0 1-.51.244l-.334.943Zm1.787-.853A1.601 1.601 0 0 1 6 6.4v-1c-1.131 0-2.095.722-2.452 1.733l.943.334ZM16.2 5.4H6v1h10.2v-1ZM3.602 11c-.192 0-.383.007-.571.022l.076.997A6.53 6.53 0 0 1 3.602 12v-1Zm7.4 7.4a7.4 7.4 0 0 0-7.4-7.4v1a6.4 6.4 0 0 1 6.4 6.4h1Zm-.022.571c.015-.188.022-.379.022-.571h-1c0 .167-.006.332-.019.495l.997.076Zm.369.43a.4.4 0 0 1-.369-.43l-.997-.076a1.4 1.4 0 0 0 1.29 1.502l.076-.997Zm.429-.37a.4.4 0 0 1-.43.37l-.075.996a1.4 1.4 0 0 0 1.502-1.29l-.997-.075Zm.024-.631c0 .213-.008.423-.024.632l.997.076c.018-.234.027-.47.027-.708h-1Zm-8.2-8.2a8.2 8.2 0 0 1 8.2 8.2h1a9.2 9.2 0 0 0-9.2-9.2v1Zm-.632.024c.209-.016.42-.024.632-.024v-1c-.238 0-.474.01-.708.027l.076.997Zm-.368.43a.4.4 0 0 1 .368-.43l-.076-.997a1.4 1.4 0 0 0-1.29 1.502l.998-.076Zm.429.368a.4.4 0 0 1-.43-.369l-.996.076a1.4 1.4 0 0 0 1.502 1.29l-.076-.997Zm.168 4.607c.13-.02.265-.029.403-.029v-1c-.185 0-.367.013-.545.039l.142.99Zm-1.585-1.187A1.4 1.4 0 0 0 3.2 15.629l-.142-.99a.4.4 0 0 1-.453-.34l-.99.143Zm1.187-1.585a1.4 1.4 0 0 0-1.187 1.585l.99-.142a.4.4 0 0 1 .34-.453l-.143-.99Zm.801-.057c-.271 0-.538.02-.8.057l.141.99c.216-.031.436-.047.659-.047v-1Zm5.6 5.6a5.6 5.6 0 0 0-5.6-5.6v1a4.6 4.6 0 0 1 4.6 4.6h1Zm-.057.8c.038-.262.057-.529.057-.8h-1c0 .223-.016.443-.047.659l.99.142ZM7.56 20.389A1.4 1.4 0 0 0 9.145 19.2l-.99-.142a.4.4 0 0 1-.453.34l-.142.99Zm-1.187-1.585a1.4 1.4 0 0 0 1.187 1.584l.142-.99a.4.4 0 0 1-.339-.452l-.99-.142Zm.029-.403c0 .138-.01.272-.029.403l.99.142c.026-.178.039-.36.039-.545h-1Zm-2.8-2.8a2.8 2.8 0 0 1 2.8 2.8h1a3.8 3.8 0 0 0-3.8-3.8v1Zm0 .8a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1v-1Zm2 2a2 2 0 0 0-2-2v1a1 1 0 0 1 1 1h1Zm-2 2a2 2 0 0 0 2-2h-1a1 1 0 0 1-1 1v1Zm-2-2a2 2 0 0 0 2 2v-1a1 1 0 0 1-1-1h-1Z"), u(c, "fill", "#000"), u(c, "fill-opacity", ".12"), u(c, "mask", "url(#c)"), u(t, "filter", "url(#b)"), u(t, "clip-path", "url(#a)"), u(g, "fill", v = i[1] ? "#2688EB" : "#fff"), u(g, "d", "M0 0h24v24H0z"), u(h, "id", "a"), u(_, "flood-opacity", "0"), u(_, "result", "BackgroundImageFix"), u(V, "in", "SourceAlpha"), u(V, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"), u(V, "result", "hardAlpha"), u(S, "stdDeviation", "2.5"), u(P, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"), u(N, "in2", "BackgroundImageFix"), u(N, "result", "effect1_dropShadow_4085_178456"), u(W, "in", "SourceGraphic"), u(W, "in2", "effect1_dropShadow_4085_178456"), u(W, "result", "shape"), u(b, "id", "b"), u(b, "x", "-3.4"), u(b, "y", "-1.4"), u(b, "width", "30.8"), u(b, "height", "26.802"), u(b, "filterUnits", "userSpaceOnUse"), u(b, "color-interpolation-filters", "sRGB"), u(e, "width", "24"), u(e, "height", "24"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "chromecast-mobile-icon");
        },
        m (X, Z) {
            C(X, e, Z), d(e, t), d(t, n), d(n, o), d(n, s), d(t, a), d(t, c), d(e, f), d(f, h), d(h, g), d(f, b), d(b, _), d(b, V), d(b, A), d(b, S), d(b, P), d(b, N), d(b, W);
        },
        p (X, Z) {
            Z & 2 && l !== (l = X[1] ? "#2688EB" : "#fff") && u(o, "fill", l), Z & 2 && r !== (r = X[1] ? "#2688EB" : "#fff") && u(a, "fill", r), Z & 2 && v !== (v = X[1] ? "#2688EB" : "#fff") && u(g, "fill", v);
        },
        d (X) {
            X && y(e);
        }
    };
}
function i2(i) {
    let e;
    function t(l, s) {
        return l[0] ? t2 : e2;
    }
    let n = t(i), o = n(i);
    return {
        c () {
            o.c(), e = ht();
        },
        m (l, s) {
            o.m(l, s), C(l, e, s);
        },
        p (l, [s]) {
            n === (n = t(l)) && o ? o.p(l, s) : (o.d(1), o = n(l), o && (o.c(), o.m(e.parentNode, e)));
        },
        i: K,
        o: K,
        d (l) {
            l && y(e), o.d(l);
        }
    };
}
function n2(i, e, t) {
    let { isMobile: n = !1 } = e, { state: o } = e, l, s;
    return i.$$set = (a)=>{
        "isMobile" in a && t(0, n = a.isMobile), "state" in a && t(3, o = a.state);
    }, i.$$.update = ()=>{
        i.$$.dirty & 8 && (t(2, s = o === (0, _esnextEsmJs.ChromecastState).CONNECTING), t(1, l = o === (0, _esnextEsmJs.ChromecastState).CONNECTED));
    }, [
        n,
        l,
        s,
        o
    ];
}
class o2 extends ke {
    constructor(e){
        super(), _e(this, e, n2, i2, ge, {
            isMobile: 0,
            state: 3
        }, $d);
    }
}
function l2(i) {
    let e, t;
    return e = new o2({
        props: {
            isMobile: i[0],
            state: i[1]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 1 && (l.isMobile = n[0]), o & 2 && (l.state = n[1]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function s2(i) {
    let e, t;
    return e = new mi({
        props: {
            ariaLabel: i[3],
            click: i[2],
            testId: "btn-chromecast",
            $$slots: {
                default: [
                    l2
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 8 && (l.ariaLabel = n[3]), o & 4 && (l.click = n[2]), o & 19 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function a2(i, e, t) {
    let { isMobile: n = !1 } = e, { state: o } = e, { click: l = (0, _esnextEsmJs1.noop) } = e, s;
    return i.$$set = (a)=>{
        "isMobile" in a && t(0, n = a.isMobile), "state" in a && t(1, o = a.state), "click" in a && t(2, l = a.click);
    }, i.$$.update = ()=>{
        i.$$.dirty & 2 && t(3, s = o === (0, _esnextEsmJs.ChromecastState).CONNECTED ? U("tooltip_chromecast_on") : U("tooltip_chromecast_off"));
    }, [
        n,
        o,
        l,
        s
    ];
}
class w1 extends ke {
    constructor(e){
        super(), _e(this, e, a2, s2, ge, {
            isMobile: 0,
            state: 1,
            click: 2
        });
    }
}
function r2(i) {
    let e, t;
    return e = new i1({
        props: {
            isActive: i[1]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 2 && (l.isActive = n[1]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function u2(i) {
    let e, t;
    return e = new mi({
        props: {
            className: i[0] ? "" : "btn--live btn-full-opacity",
            testId: i[1] ? "btn-live" : "btn-live-offset",
            disabled: i[1] && i[3] === (0, _esnextEsmJs.PlaybackState).PLAYING,
            ariaLabel: i[2],
            click: i[4],
            $$slots: {
                default: [
                    r2
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 1 && (l.className = n[0] ? "" : "btn--live btn-full-opacity"), o & 2 && (l.testId = n[1] ? "btn-live" : "btn-live-offset"), o & 10 && (l.disabled = n[1] && n[3] === (0, _esnextEsmJs.PlaybackState).PLAYING), o & 4 && (l.ariaLabel = n[2]), o & 16 && (l.click = n[4]), o & 514 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function c2(i, e, t) {
    let n, { isMobile: o = !1 } = e, { isActiveLive: l = !1 } = e, { ariaLabel: s = "" } = e;
    const a = vt(), r = a.state.playbackState$;
    F(i, r, (g)=>t(3, n = g));
    const c = a.actions.internal.switchToActiveLive, f = a.actions.internal.togglePlay;
    let h;
    return i.$$set = (g)=>{
        "isMobile" in g && t(0, o = g.isMobile), "isActiveLive" in g && t(1, l = g.isActiveLive), "ariaLabel" in g && t(2, s = g.ariaLabel);
    }, i.$$.update = ()=>{
        i.$$.dirty & 10 && t(4, h = ()=>{
            if (!l) {
                c();
                return;
            }
            n === (0, _esnextEsmJs.PlaybackState).PAUSED && f();
        });
    }, [
        o,
        l,
        s,
        n,
        h,
        r
    ];
}
class y1 extends ke {
    constructor(e){
        super(), _e(this, e, c2, u2, ge, {
            isMobile: 0,
            isActiveLive: 1,
            ariaLabel: 2
        });
    }
}
function f2(i) {
    Fe(i, "v-5ygsa2", '.tooltip-wrapper.v-5ygsa2{position:relative;display:block}.tooltip.v-5ygsa2{position:absolute;opacity:0;visibility:hidden;transition:opacity 200ms, visibility 200ms;bottom:100%;transform:translateX(-50%)}.pointer.v-5ygsa2:after{position:absolute;bottom:0;left:50%;width:0;border-top:5px solid rgba(41, 41, 41, .8);border-right:5px solid transparent;border-left:5px solid transparent;content:" ";font-size:0;line-height:0;transform:translate(-50%, 5px)}.tooltip.active.v-5ygsa2{opacity:1;visibility:visible}');
}
function d2(i) {
    let e, t, n, o;
    const l = i[9].default, s = wn(l, i, i[8], null);
    return {
        c () {
            e = k("div"), t = k("div"), s && s.c(), u(t, "class", "tooltip v-5ygsa2"), L(t, "active", i[0]), L(t, "pointer", i[1]), u(e, "class", "tooltip-wrapper v-5ygsa2"), u(e, "style", n = `transform: translate(${i[5]}px, ${i[2]}px);`);
        },
        m (a, r) {
            C(a, e, r), d(e, t), s && s.m(t, null), i[10](t), i[11](e), o = !0;
        },
        p (a, [r]) {
            s && s.p && (!o || r & 256) && Cn(s, l, a, a[8], o ? yn(l, a[8], r, null) : Pn(a[8]), null), (!o || r & 1) && L(t, "active", a[0]), (!o || r & 2) && L(t, "pointer", a[1]), (!o || r & 36 && n !== (n = `transform: translate(${a[5]}px, ${a[2]}px);`)) && u(e, "style", n);
        },
        i (a) {
            o || (m(s, a), o = !0);
        },
        o (a) {
            p(s, a), o = !1;
        },
        d (a) {
            a && y(e), s && s.d(a), i[10](null), i[11](null);
        }
    };
}
function m2(i, e, t) {
    let n, { $$slots: o = {}, $$scope: l } = e, { active: s = !1 } = e, { pointer: a = !1 } = e, { translateXPx: r = 0 } = e, { translateYPx: c = 0 } = e, { containerWidth: f } = e, h, g;
    function v(V) {
        if (!g) return 0;
        const { width: A } = g.getBoundingClientRect(), S = A / 2;
        return V < S ? S : V > f - S ? f - S : V;
    }
    function b(V) {
        We[V ? "unshift" : "push"](()=>{
            g = V, t(4, g);
        });
    }
    function _(V) {
        We[V ? "unshift" : "push"](()=>{
            h = V, t(3, h);
        });
    }
    return i.$$set = (V)=>{
        "active" in V && t(0, s = V.active), "pointer" in V && t(1, a = V.pointer), "translateXPx" in V && t(6, r = V.translateXPx), "translateYPx" in V && t(2, c = V.translateYPx), "containerWidth" in V && t(7, f = V.containerWidth), "$$scope" in V && t(8, l = V.$$scope);
    }, i.$$.update = ()=>{
        i.$$.dirty & 64 && t(5, n = v(r));
    }, [
        s,
        a,
        c,
        h,
        g,
        n,
        r,
        f,
        l,
        o,
        b,
        _
    ];
}
class h2 extends ke {
    constructor(e){
        super(), _e(this, e, m2, d2, ge, {
            active: 0,
            pointer: 1,
            translateXPx: 6,
            translateYPx: 2,
            containerWidth: 7
        }, f2);
    }
}
const C1 = (i, e, t)=>t.filter((n)=>n.time < i * e).pop();
function p2(i) {
    Fe(i, "v-l51fc1", ".timeline-preview.v-l51fc1{bottom:18px;border-radius:2px;pointer-events:none}.timeline-preview.mobile.v-l51fc1{bottom:72px}.preview.v-l51fc1{margin-bottom:10px;background-color:var(--timeline-preview-bg);box-shadow:0 0 2px var(--timeline-preview-shadow), 0 8px 24px var(--timeline-preview-shadow);border-radius:8px;border:1px solid var(--white)}.episode.v-l51fc1{margin-top:10px;margin-bottom:4px;font-size:13px;line-height:16px;text-shadow:0 8px 24px var(--timeline-preview-shadow), 0 0 2px var(--timeline-preview-shadow);max-width:150px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;font-weight:500}.time.v-l51fc1{font-size:13px;line-height:16px;text-align:center;color:var(--slider-filled-bg);text-shadow:0 8px 24px var(--timeline-preview-shadow), 0 0 2px var(--timeline-preview-shadow);font-weight:500}");
}
function Vs(i) {
    let e;
    function t(l, s) {
        return l[2] && l[10].completed === !1 ? b2 : g2;
    }
    let n = t(i), o = n(i);
    return {
        c () {
            o.c(), e = ht();
        },
        m (l, s) {
            o.m(l, s), C(l, e, s);
        },
        p (l, s) {
            n === (n = t(l)) && o ? o.p(l, s) : (o.d(1), o = n(l), o && (o.c(), o.m(e.parentNode, e)));
        },
        d (l) {
            l && y(e), o.d(l);
        }
    };
}
function g2(i) {
    let e = (i[10].text || "") + "", t;
    return {
        c () {
            t = ze(e);
        },
        m (n, o) {
            C(n, t, o);
        },
        p (n, o) {
            o & 1024 && e !== (e = (n[10].text || "") + "") && Xe(t, e);
        },
        d (n) {
            n && y(t);
        }
    };
}
function b2(i) {
    let e = U("tooltip_episode_unfinished") + "", t;
    return {
        c () {
            t = ze(e);
        },
        m (n, o) {
            C(n, t, o);
        },
        p: K,
        d (n) {
            n && y(t);
        }
    };
}
function v2(i) {
    let e, t, n, o, l, s, a, r, c = i[10] && Vs(i);
    return {
        c () {
            e = k("div"), t = k("div"), o = B(), l = k("div"), c && c.c(), s = B(), a = k("div"), r = ze(i[0]), u(t, "class", "preview v-l51fc1"), u(t, "style", n = `width: ${i[3]}px; height: ${i[4]}px; background-image: url(${i[5]}); background-size: ${i[6]}px ${i[7]}px; background-position: ${i[8]}px ${i[9]}px; transform: translateY(${i[11] % 180 ? -35 : 0}px) rotate(${i[11]}deg);`), u(l, "class", "episode v-l51fc1"), u(a, "class", "time v-l51fc1"), u(e, "class", "timeline-preview v-l51fc1"), L(e, "mobile", i[1]);
        },
        m (f, h) {
            C(f, e, h), d(e, t), d(e, o), d(e, l), c && c.m(l, null), d(e, s), d(e, a), d(a, r);
        },
        p (f, [h]) {
            h & 3064 && n !== (n = `width: ${f[3]}px; height: ${f[4]}px; background-image: url(${f[5]}); background-size: ${f[6]}px ${f[7]}px; background-position: ${f[8]}px ${f[9]}px; transform: translateY(${f[11] % 180 ? -35 : 0}px) rotate(${f[11]}deg);`) && u(t, "style", n), f[10] ? c ? c.p(f, h) : (c = Vs(f), c.c(), c.m(l, null)) : c && (c.d(1), c = null), h & 1 && Xe(r, f[0]), h & 2 && L(e, "mobile", f[1]);
        },
        i: K,
        o: K,
        d (f) {
            f && y(e), c && c.d();
        }
    };
}
const jn = 150;
function _2(i, e, t) {
    let n, { time: o = "" } = e, { isMobile: l = !1 } = e, { videoEpisodes: s = [] } = e, { previewThumbsData: a } = e, { progress: r = 0 } = e, { duration: c = 0 } = e, { isInteractive: f = !1 } = e;
    const g = vt().ui.rotateAlpha;
    F(i, g, (Z)=>t(11, n = Z));
    let v, b, _, V, A, S, P, N;
    function W() {
        let Z = a.frameWidth, T = a.frameHeight;
        return Z > jn ? (T = T / Z * jn, Z = jn) : T > jn && (Z = Z / T * jn, T = jn), {
            width: Z,
            height: T
        };
    }
    function X(Z) {
        let T;
        a.isUV ? T = Math.floor(c * Z / a.frequency) : T = Math.min(a.countTotal, Math.max(0, Math.floor(a.countTotal * Z)));
        const te = Math.floor(T / a.countPerImage), j = Math.floor(T % a.countPerImage / a.countPerRow), ie = T % a.countPerRow;
        let G = Math.floor(a.countPerImage / a.countPerRow);
        !a.isUV && te === Math.floor(a.countTotal / a.countPerImage) && (G = Math.floor(a.countTotal % a.countPerImage / a.countPerRow), a.countTotal % a.countPerImage % a.countPerRow > 0 && G++);
        let J = a.countPerRow;
        !a.isUV && te === Math.floor(a.countTotal / a.countPerImage) && a.countTotal % a.countPerImage > 0 && (J = Math.min(a.countPerRow, a.countTotal % a.countPerImage));
        const ue = v * J, w = b * G, oe = -ie * v, fe = -j * b;
        return {
            imgSrc: a.links[te],
            imgWidth: ue,
            imgHeight: w,
            imgOffsetX: oe,
            imgOffsetY: fe
        };
    }
    return i.$$set = (Z)=>{
        "time" in Z && t(0, o = Z.time), "isMobile" in Z && t(1, l = Z.isMobile), "videoEpisodes" in Z && t(13, s = Z.videoEpisodes), "previewThumbsData" in Z && t(14, a = Z.previewThumbsData), "progress" in Z && t(15, r = Z.progress), "duration" in Z && t(16, c = Z.duration), "isInteractive" in Z && t(2, f = Z.isInteractive);
    }, i.$$.update = ()=>{
        i.$$.dirty & 32768 && t(5, { imgSrc: _, imgWidth: V, imgHeight: A, imgOffsetX: S, imgOffsetY: P } = X(r), _, (t(6, V), t(15, r)), (t(7, A), t(15, r)), (t(8, S), t(15, r)), (t(9, P), t(15, r))), i.$$.dirty & 106496 && t(10, N = C1(r, c, s));
    }, t(3, { width: v, height: b } = W(), v, t(4, b)), [
        o,
        l,
        f,
        v,
        b,
        _,
        V,
        A,
        S,
        P,
        N,
        n,
        g,
        s,
        a,
        r,
        c
    ];
}
class k2 extends ke {
    constructor(e){
        super(), _e(this, e, _2, v2, ge, {
            time: 0,
            isMobile: 1,
            videoEpisodes: 13,
            previewThumbsData: 14,
            progress: 15,
            duration: 16,
            isInteractive: 2
        }, p2);
    }
}
function w2(i) {
    Fe(i, "v-5lzly8", ".time.v-5lzly8{display:inline-block;padding:6px 10px;border-radius:3px;color:var(--white);background-color:rgba(41, 41, 41, .8)}");
}
function y2(i) {
    let e, t;
    return {
        c () {
            e = k("span"), t = ze(i[7]), u(e, "class", "time v-5lzly8");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p (n, o) {
            o[0] & 128 && Xe(t, n[7]);
        },
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
function C2(i) {
    let e, t;
    return e = new k2({
        props: {
            time: i[7],
            isMobile: i[10],
            videoEpisodes: i[3],
            previewThumbsData: i[21],
            progress: i[8],
            duration: i[1],
            isInteractive: i[23]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 128 && (l.time = n[7]), o[0] & 1024 && (l.isMobile = n[10]), o[0] & 8 && (l.videoEpisodes = n[3]), o[0] & 256 && (l.progress = n[8]), o[0] & 2 && (l.duration = n[1]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function P2(i) {
    let e, t, n, o;
    const l = [
        C2,
        y2
    ], s = [];
    function a(r, c) {
        return r[14].features.timelinePreview && r[21] && !r[0] ? 0 : 1;
    }
    return e = a(i), t = s[e] = l[e](i), {
        c () {
            t.c(), n = ht();
        },
        m (r, c) {
            s[e].m(r, c), C(r, n, c), o = !0;
        },
        p (r, c) {
            let f = e;
            e = a(r), e === f ? s[e].p(r, c) : (me(), p(s[f], 1, 1, ()=>{
                s[f] = null;
            }), he(), t = s[e], t ? t.p(r, c) : (t = s[e] = l[e](r), t.c()), m(t, 1), t.m(n.parentNode, n));
        },
        i (r) {
            o || (m(t), o = !0);
        },
        o (r) {
            p(t), o = !1;
        },
        d (r) {
            r && y(n), s[e].d(r);
        }
    };
}
function S2(i) {
    let e, t, n, o;
    const l = [
        i[9]
    ];
    let s = {
        $$slots: {
            default: [
                P2
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    for(let a = 0; a < l.length; a += 1)s = Pr(s, l[a]);
    return e = new h2({
        props: s
    }), n = new fl({
        props: {
            isActiveLive: i[11],
            isMobile: i[10],
            ariaLabel: U("aria_timeline"),
            ariaValueMin: 0,
            ariaValueMax: i[1],
            ariaValueNow: Math.round(i[6] * 100),
            ariaValueText: U("aria_timeline_value", {
                position: i[5],
                duration: i[4]
            }),
            loadedProgress: i[12],
            filledProgress: i[6],
            handleProgress: i[6],
            videoEpisodes: i[3],
            onPointerDown: i[27],
            onHandleMove: i[28],
            onPointerMove: i[31],
            onPointerUp: i[29],
            onPointerEnter: i[30],
            onPointerLeave: i[32],
            isInteractive: i[23],
            disabled: i[13].has(ct.TIMELINE),
            hideHandel: i[2]
        }
    }), {
        c () {
            D(e.$$.fragment), t = B(), D(n.$$.fragment);
        },
        m (a, r) {
            z(e, a, r), C(a, t, r), z(n, a, r), o = !0;
        },
        p (a, r) {
            const c = r[0] & 512 ? Tu(l, [
                Au(a[9])
            ]) : {};
            r[0] & 1419 | r[1] & 65536 && (c.$$scope = {
                dirty: r,
                ctx: a
            }), e.$set(c);
            const f = {};
            r[0] & 2048 && (f.isActiveLive = a[11]), r[0] & 1024 && (f.isMobile = a[10]), r[0] & 2 && (f.ariaValueMax = a[1]), r[0] & 64 && (f.ariaValueNow = Math.round(a[6] * 100)), r[0] & 48 && (f.ariaValueText = U("aria_timeline_value", {
                position: a[5],
                duration: a[4]
            })), r[0] & 4096 && (f.loadedProgress = a[12]), r[0] & 64 && (f.filledProgress = a[6]), r[0] & 64 && (f.handleProgress = a[6]), r[0] & 8 && (f.videoEpisodes = a[3]), r[0] & 8192 && (f.disabled = a[13].has(ct.TIMELINE)), r[0] & 4 && (f.hideHandel = a[2]), n.$set(f);
        },
        i (a) {
            o || (m(e.$$.fragment, a), m(n.$$.fragment, a), o = !0);
        },
        o (a) {
            p(e.$$.fragment, a), p(n.$$.fragment, a), o = !1;
        },
        d (a) {
            a && y(t), O(e, a), O(n, a);
        }
    };
}
function T2(i, e, t) {
    let n, o, l, s, a, r, c, f, h, g, v, { showTimeline: b = !1 } = e;
    const _ = vt(), V = Yi(), A = _.state.bufferedProgress$;
    F(i, A, (be)=>t(12, g = be));
    const S = _.state.positionWithScrubbing$;
    F(i, S, (be)=>t(39, r = be));
    const P = _.state.duration$;
    F(i, P, (be)=>t(1, l = be));
    const N = _.state.isLive$;
    F(i, N, (be)=>t(0, o = be));
    const W = _.state.isActiveLive$;
    F(i, W, (be)=>t(11, h = be));
    const X = _.ui.isMobile;
    F(i, X, (be)=>t(10, f = be));
    const Z = V.features.episodes ? _.actions.internal.getVideoEpisodes() : void 0, T = _.actions.internal.getPreviewThumbsData(), te = _.state.interactiveEpisodes$;
    F(i, te, (be)=>t(40, c = be));
    const j = _.state.isInteractive, ie = _.state.isInteractiveTime$;
    F(i, ie, (be)=>t(2, s = be));
    const G = _.state.isInteractiveExpectation$;
    F(i, G, (be)=>t(38, a = be));
    const J = _.actions.internal.correctSeekTimeToInteractive, ue = _.ui.controls.disabledControls$;
    F(i, ue, (be)=>t(13, v = be));
    let w, oe, fe, ve, Me = !1, Ee = "", we = 0, H = 0, M = 0, Y;
    function pe(be) {
        return !J || !j ? be : J(be * l) / l;
    }
    function ee(be) {
        _.actions.internal.startScrubbing(pe(be));
    }
    function R(be) {
        s || _.actions.internal.progressScrubbing(pe(be));
    }
    function Q(be) {
        _.actions.internal.completeScrubbing(pe(be)), t(34, Me = !1);
    }
    function Ve(be, ae, Ue) {
        x(be, ae, Ue), t(34, Me = !0);
    }
    function ye(be, ae, Ue) {
        x(be, ae, Ue), t(34, Me = !0);
    }
    function Te() {
        t(34, Me = !1);
    }
    function x(be, ae, Ue) {
        t(8, M = be), t(35, we = ae), Ue && t(36, H = Ue), t(7, Ee = le(be));
    }
    function le(be) {
        const ae = _n((o ? 1 - be : be) * l);
        return o ? `-${ae}` : ae;
    }
    return i.$$set = (be)=>{
        "showTimeline" in be && t(33, b = be.showTimeline);
    }, i.$$.update = ()=>{
        i.$$.dirty[1] & 512 && t(3, w = j ? c : Z), i.$$.dirty[0] & 2 && t(4, oe = _n(l)), i.$$.dirty[1] & 256 && t(5, fe = _n(r)), i.$$.dirty[0] & 2 | i.$$.dirty[1] & 256 && t(6, ve = r / l), i.$$.dirty[0] & 4 | i.$$.dirty[1] & 128 && t(37, Y = a || s), i.$$.dirty[0] & 1 | i.$$.dirty[1] & 124 && t(9, n = {
            containerWidth: H,
            translateXPx: we,
            translateYPx: j && T ? -36 : -16,
            active: Me && b && !Y,
            pointer: !V.features.timelinePreview || !T || o
        });
    }, [
        o,
        l,
        s,
        w,
        oe,
        fe,
        ve,
        Ee,
        M,
        n,
        f,
        h,
        g,
        v,
        V,
        A,
        S,
        P,
        N,
        W,
        X,
        T,
        te,
        j,
        ie,
        G,
        ue,
        ee,
        R,
        Q,
        Ve,
        ye,
        Te,
        b,
        Me,
        we,
        H,
        Y,
        a,
        r,
        c
    ];
}
let A2 = class extends ke {
    constructor(e){
        super(), _e(this, e, T2, S2, ge, {
            showTimeline: 33
        }, w2, [
            -1,
            -1
        ]);
    }
};
function E2(i) {
    let e, t;
    return e = new fl({
        props: {
            ariaValueMin: 0,
            ariaValueMax: i[0],
            ariaValueNow: Math.round(i[3] * 100),
            ariaValueText: U("aria_timeline_value", {
                position: i[2],
                duration: i[1]
            }),
            filledProgress: i[3],
            isAds: !0,
            hideHandel: !0,
            squareBorders: i[4]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 1 && (l.ariaValueMax = n[0]), o & 8 && (l.ariaValueNow = Math.round(n[3] * 100)), o & 6 && (l.ariaValueText = U("aria_timeline_value", {
                position: n[2],
                duration: n[1]
            })), o & 8 && (l.filledProgress = n[3]), o & 16 && (l.squareBorders = n[4]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function L2(i, e, t) {
    let n, { position: o = 0 } = e, { duration: l = 0 } = e;
    const a = vt().ui.isMobile;
    F(i, a, (h)=>t(4, n = h));
    let r, c, f;
    return i.$$set = (h)=>{
        "position" in h && t(6, o = h.position), "duration" in h && t(0, l = h.duration);
    }, i.$$.update = ()=>{
        i.$$.dirty & 1 && t(1, r = _n(l)), i.$$.dirty & 64 && t(2, c = _n(o)), i.$$.dirty & 65 && t(3, f = o / l);
    }, [
        l,
        r,
        c,
        f,
        n,
        a,
        o
    ];
}
class P1 extends ke {
    constructor(e){
        super(), _e(this, e, L2, E2, ge, {
            position: 6,
            duration: 0
        });
    }
}
function V2(i) {
    Fe(i, "v-1gqonyf", ".timeline.v-1gqonyf{position:relative;pointer-events:all;display:flex;align-items:center;bottom:0;width:100%;min-width:86px;padding:3px 10px 4px;box-sizing:border-box}.timeline.mobile.v-1gqonyf{height:16px;padding:6px 12px 7px;margin-top:6px}.timeline-stub.v-1gqonyf{width:100%;min-width:20px}.timeline-stub.mobile.v-1gqonyf{height:8px}");
}
function I2(i) {
    let e;
    return {
        c () {
            e = k("div"), u(e, "class", "timeline-stub v-1gqonyf"), L(e, "mobile", i[2]);
        },
        m (t, n) {
            C(t, e, n);
        },
        p (t, n) {
            n & 4 && L(e, "mobile", t[2]);
        },
        i: K,
        o: K,
        d (t) {
            t && y(e);
        }
    };
}
function M2(i) {
    let e, t, n, o;
    const l = [
        B2,
        R2
    ], s = [];
    function a(r, c) {
        return r[0] ? 0 : 1;
    }
    return t = a(i), n = s[t] = l[t](i), {
        c () {
            e = k("div"), n.c(), u(e, "class", "timeline v-1gqonyf"), L(e, "mobile", i[2]);
        },
        m (r, c) {
            C(r, e, c), s[t].m(e, null), o = !0;
        },
        p (r, c) {
            let f = t;
            t = a(r), t === f ? s[t].p(r, c) : (me(), p(s[f], 1, 1, ()=>{
                s[f] = null;
            }), he(), n = s[t], n ? n.p(r, c) : (n = s[t] = l[t](r), n.c()), m(n, 1), n.m(e, null)), (!o || c & 4) && L(e, "mobile", r[2]);
        },
        i (r) {
            o || (m(n), o = !0);
        },
        o (r) {
            p(n), o = !1;
        },
        d (r) {
            r && y(e), s[t].d();
        }
    };
}
function R2(i) {
    let e, t;
    return e = new A2({
        props: {
            showTimeline: i[1]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 2 && (l.showTimeline = n[1]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function B2(i) {
    let e, t;
    return e = new P1({
        props: {
            position: i[3],
            duration: i[4]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 8 && (l.position = n[3]), o & 16 && (l.duration = n[4]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function N2(i) {
    let e, t, n, o;
    const l = [
        M2,
        I2
    ], s = [];
    function a(r, c) {
        return r[1] ? 0 : 1;
    }
    return e = a(i), t = s[e] = l[e](i), {
        c () {
            t.c(), n = ht();
        },
        m (r, c) {
            s[e].m(r, c), C(r, n, c), o = !0;
        },
        p (r, [c]) {
            let f = e;
            e = a(r), e === f ? s[e].p(r, c) : (me(), p(s[f], 1, 1, ()=>{
                s[f] = null;
            }), he(), t = s[e], t ? t.p(r, c) : (t = s[e] = l[e](r), t.c()), m(t, 1), t.m(n.parentNode, n));
        },
        i (r) {
            o || (m(t), o = !0);
        },
        o (r) {
            p(t), o = !1;
        },
        d (r) {
            r && y(n), s[e].d(r);
        }
    };
}
function z2(i, e, t) {
    let n, o, l, s, { isAds: a = !1 } = e, { canRewindLive: r } = e, { isRewindableLive: c } = e, { isHidden: f = !1 } = e;
    const h = vt(), g = h.state.isLive$;
    F(i, g, (A)=>t(12, n = A));
    const v = h.ads.duration;
    F(i, v, (A)=>t(4, s = A));
    const b = h.ads.position;
    F(i, b, (A)=>t(3, l = A));
    const _ = h.ui.isMobile;
    F(i, _, (A)=>t(2, o = A));
    let V;
    return i.$$set = (A)=>{
        "isAds" in A && t(0, a = A.isAds), "canRewindLive" in A && t(9, r = A.canRewindLive), "isRewindableLive" in A && t(10, c = A.isRewindableLive), "isHidden" in A && t(11, f = A.isHidden);
    }, i.$$.update = ()=>{
        i.$$.dirty & 7681 && t(1, V = !f && (!n || n && r && c || a));
    }, [
        a,
        V,
        o,
        l,
        s,
        g,
        v,
        b,
        _,
        r,
        c,
        f,
        n
    ];
}
class S1 extends ke {
    constructor(e){
        super(), _e(this, e, z2, N2, ge, {
            isAds: 0,
            canRewindLive: 9,
            isRewindableLive: 10,
            isHidden: 11
        }, V2);
    }
}
function O2(i) {
    let e, t, n, o;
    return {
        c () {
            e = I("svg"), t = I("path"), n = I("path"), o = I("path"), u(t, "fill-rule", "evenodd"), u(t, "clip-rule", "evenodd"), u(t, "d", "m21.616 16.495-.012.07c-.156.852-.282 1.541-.427 2.093-.148.569-.333 1.063-.64 1.5a4.398 4.398 0 0 1-2.507 1.732c-.52.133-1.046.131-1.63.069-.568-.06-1.257-.187-2.11-.343l-4.34-.794c-.853-.156-1.542-.282-2.094-.426-.568-.149-1.062-.334-1.5-.642a4.398 4.398 0 0 1-1.731-2.507c-.133-.518-.131-1.045-.069-1.63.06-.567.187-1.257.343-2.11l.012-.068c.156-.853.282-1.542.427-2.095.148-.568.333-1.062.641-1.5a4.397 4.397 0 0 1 2.507-1.731c.518-.133 1.045-.131 1.63-.069.567.06 1.256.187 2.109.343l4.34.794c.853.156 1.542.282 2.094.426.568.149 1.062.334 1.5.642a4.398 4.398 0 0 1 1.731 2.506c.133.52.131 1.046.069 1.63-.06.568-.187 1.258-.343 2.11Zm-1.446-2.3c.052-.483.035-.769-.022-.993a2.599 2.599 0 0 0-1.023-1.481c-.19-.133-.45-.25-.921-.373-.48-.125-1.102-.24-1.997-.404l-4.272-.781c-.895-.164-1.518-.277-2.01-.33-.483-.051-.769-.035-.993.023-.6.153-1.125.516-1.481 1.023-.133.19-.25.45-.373.92-.125.48-.24 1.103-.403 1.998-.164.895-.277 1.518-.33 2.01-.051.484-.035.77.023.994.153.6.516 1.125 1.023 1.481.189.133.45.25.92.373.48.125 1.102.24 1.997.404l4.272.781c.895.164 1.518.277 2.01.33.483.051.77.035.993-.023a2.598 2.598 0 0 0 1.481-1.023c.133-.19.25-.45.373-.92.125-.48.24-1.103.403-1.998.164-.895.278-1.518.33-2.01Z"), u(t, "fill", "#fff"), u(n, "fill-rule", "evenodd"), u(n, "clip-rule", "evenodd"), u(n, "d", "M18.187 7.488a.9.9 0 0 1-1.045-.727c-.145-.807-.199-1.086-.28-1.296A2.598 2.598 0 0 0 14.504 3.8c-.224-.006-.505.036-1.315.169l-5.846.962c-1.366.224-1.834.313-2.174.492A2.599 2.599 0 0 0 3.837 7.18c-.08.376-.039.85.114 2.226l.011.1a.9.9 0 1 1-1.787.198l-.01-.093a350.712 350.712 0 0 0-.019-.17c-.129-1.147-.217-1.937-.068-2.636A4.398 4.398 0 0 1 4.332 3.83c.633-.333 1.417-.461 2.556-.648l.163-.027 5.846-.961.098-.016c.674-.111 1.138-.188 1.556-.177a4.397 4.397 0 0 1 3.99 2.819c.15.39.234.853.355 1.526l.017.097a.9.9 0 0 1-.726 1.045Z"), u(n, "fill", "#fff"), u(o, "d", "M12.724 12.414a.415.415 0 0 0-.69.231l-.72 4.18a.405.405 0 0 0 .025.221c.085.21.327.311.539.226l3.669-1.467a.406.406 0 0 0 .127-.68l-2.95-2.71Z"), u(o, "fill", "#fff"), u(e, "width", "24"), u(e, "height", "24"), u(e, "fill", "none"), At(e, "flex-shrink", "0"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "episodes-icon");
        },
        m (l, s) {
            C(l, e, s), d(e, t), d(e, n), d(e, o);
        },
        p: K,
        i: K,
        o: K,
        d (l) {
            l && y(e);
        }
    };
}
class D2 extends ke {
    constructor(e){
        super(), _e(this, e, null, O2, ge, {});
    }
}
function H2(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "opacity", ".7"), u(t, "fill-rule", "evenodd"), u(t, "clip-rule", "evenodd"), u(t, "d", "M4.146 3.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L6.793 6.5 4.146 3.854a.5.5 0 0 1 0-.708Z"), u(t, "fill", "#fff"), u(e, "width", "12"), u(e, "height", "13"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "chevron-light-icon");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class F2 extends ke {
    constructor(e){
        super(), _e(this, e, null, H2, ge, {});
    }
}
function U2(i) {
    Fe(i, "v-1yhs2ga", ".text.v-1yhs2ga{padding:0 8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.text.count.v-1yhs2ga{overflow:visible}.text.mobile.v-1yhs2ga{padding:0 3px 0 4px}.chevron-episodes.v-1yhs2ga{margin-bottom:-4px}");
}
function q2(i) {
    let e, t, n, o;
    e = new D2({});
    function l(r, c) {
        if (r[2] === Dn.FULL) return j2;
        if (r[2] === Dn.COUNT) return Z2;
    }
    let s = l(i), a = s && s(i);
    return {
        c () {
            D(e.$$.fragment), t = B(), a && a.c(), n = ht();
        },
        m (r, c) {
            z(e, r, c), C(r, t, c), a && a.m(r, c), C(r, n, c), o = !0;
        },
        p (r, c) {
            s === (s = l(r)) && a ? a.p(r, c) : (a && a.d(1), a = s && s(r), a && (a.c(), a.m(n.parentNode, n)));
        },
        i (r) {
            o || (m(e.$$.fragment, r), o = !0);
        },
        o (r) {
            p(e.$$.fragment, r), o = !1;
        },
        d (r) {
            r && (y(t), y(n)), O(e, r), a && a.d(r);
        }
    };
}
function W2(i) {
    let e, t, n, o, l, s;
    return l = new F2({}), {
        c () {
            e = k("span"), t = ze(i[1]), n = B(), o = k("div"), D(l.$$.fragment), u(e, "class", "text mobile v-1yhs2ga"), u(o, "class", "chevron-episodes v-1yhs2ga");
        },
        m (a, r) {
            C(a, e, r), d(e, t), C(a, n, r), C(a, o, r), z(l, o, null), s = !0;
        },
        p (a, r) {
            (!s || r & 2) && Xe(t, a[1]);
        },
        i (a) {
            s || (m(l.$$.fragment, a), s = !0);
        },
        o (a) {
            p(l.$$.fragment, a), s = !1;
        },
        d (a) {
            a && (y(e), y(n), y(o)), O(l);
        }
    };
}
function Z2(i) {
    let e, t = i[0].length + "", n;
    return {
        c () {
            e = k("span"), n = ze(t), u(e, "class", "text count v-1yhs2ga");
        },
        m (o, l) {
            C(o, e, l), d(e, n);
        },
        p (o, l) {
            l & 1 && t !== (t = o[0].length + "") && Xe(n, t);
        },
        d (o) {
            o && y(e);
        }
    };
}
function j2(i) {
    let e, t;
    return {
        c () {
            e = k("span"), t = ze(i[1]), u(e, "class", "text v-1yhs2ga");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p (n, o) {
            o & 2 && Xe(t, n[1]);
        },
        d (n) {
            n && y(e);
        }
    };
}
function G2(i) {
    let e, t, n, o;
    const l = [
        W2,
        q2
    ], s = [];
    function a(r, c) {
        return r[4] ? 0 : 1;
    }
    return e = a(i), t = s[e] = l[e](i), {
        c () {
            t.c(), n = ht();
        },
        m (r, c) {
            s[e].m(r, c), C(r, n, c), o = !0;
        },
        p (r, c) {
            let f = e;
            e = a(r), e === f ? s[e].p(r, c) : (me(), p(s[f], 1, 1, ()=>{
                s[f] = null;
            }), he(), t = s[e], t ? t.p(r, c) : (t = s[e] = l[e](r), t.c()), m(t, 1), t.m(n.parentNode, n));
        },
        i (r) {
            o || (m(t), o = !0);
        },
        o (r) {
            p(t), o = !1;
        },
        d (r) {
            r && y(n), s[e].d(r);
        }
    };
}
function K2(i) {
    let e, t;
    return e = new mi({
        props: {
            className: "w-max btn-full-opacity " + (i[4] ? "px-0" : ""),
            testId: "btn-episodes",
            click: i[5],
            disabled: !i[6],
            ariaLabel: i[3],
            $$slots: {
                default: [
                    G2
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 16 && (l.className = "w-max btn-full-opacity " + (n[4] ? "px-0" : "")), o & 8 && (l.ariaLabel = n[3]), o & 65559 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Y2(i, e, t) {
    let n, o, l, s, { position: a = 0 } = e, { duration: r = 0 } = e, { timeCodes: c = [] } = e;
    const f = vt(), h = f.callbacks?.onEpisodeChanged ?? (0, _esnextEsmJs1.noop), g = f.callbacks?.onEpisodeClicked ?? (0, _esnextEsmJs1.noop), v = !!f.callbacks?.onEpisodeClicked, b = f.ui.currentGridType$;
    F(i, b, (P)=>t(13, l = P));
    const _ = f.ui.isMobile;
    F(i, _, (P)=>t(4, s = P));
    let V, A, S;
    return i.$$set = (P)=>{
        "position" in P && t(9, a = P.position), "duration" in P && t(10, r = P.duration), "timeCodes" in P && t(0, c = P.timeCodes);
    }, i.$$.update = ()=>{
        if (i.$$.dirty & 1536 && t(12, n = a / r), i.$$.dirty & 7169) {
            const P = C1(n, r, c);
            P && V?.text !== P.text && (h(P), t(11, V = P));
        }
        i.$$.dirty & 2048 && t(1, o = V?.text || ""), i.$$.dirty & 8192 && (on(l, Ct.XL) ? t(2, A = Dn.FULL) : on(l, Ct.M) && hd(l, Ct.XL) ? t(2, A = Dn.COUNT) : t(2, A = Dn.SHORT)), i.$$.dirty & 2 && t(3, S = `${U("tooltip_episodes")}: ${o}`);
    }, [
        c,
        o,
        A,
        S,
        s,
        g,
        v,
        b,
        _,
        a,
        r,
        V,
        n,
        l
    ];
}
class T1 extends ke {
    constructor(e){
        super(), _e(this, e, Y2, K2, ge, {
            position: 9,
            duration: 10,
            timeCodes: 0
        }, U2);
    }
}
function Q2(i) {
    let e, t, n;
    return {
        c () {
            e = I("svg"), t = I("path"), n = I("path"), u(t, "fill-rule", "evenodd"), u(t, "clip-rule", "evenodd"), u(t, "d", "M16.726 4.845C16.187 4.8 15.496 4.8 14.5 4.8H7.9a.9.9 0 1 1 0-1.8h6.639c.947 0 1.713 0 2.333.05.64.053 1.204.163 1.726.43a4.4 4.4 0 0 1 1.923 1.922c.266.523.377 1.087.429 1.726.05.62.05 1.386.05 2.334v5.076c0 .948 0 1.714-.05 2.334-.052.64-.163 1.203-.43 1.726a4.4 4.4 0 0 1-1.922 1.922c-.522.267-1.086.377-1.726.43-.62.05-1.386.05-2.333.05H7.9a.9.9 0 1 1 0-1.8h6.6c.995 0 1.687 0 2.226-.045.528-.043.828-.123 1.055-.238a2.6 2.6 0 0 0 1.136-1.137c.115-.226.195-.527.239-1.055.044-.538.044-1.23.044-2.225v-5c0-.995 0-1.687-.044-2.226-.043-.527-.124-.828-.239-1.054a2.6 2.6 0 0 0-1.136-1.137c-.227-.115-.527-.195-1.055-.238Z"), u(t, "fill", "#fff"), u(n, "d", "M7.76 11.169V8.908c0-.708.704-1.143 1.252-.774l4.594 3.093c.525.353.525 1.193 0 1.546l-4.594 3.093c-.548.369-1.252-.066-1.252-.774v-2.261l-4.508 3.035C2.704 16.235 2 15.8 2 15.091V8.908c0-.708.704-1.143 1.252-.774L7.76 11.17Z"), u(n, "fill", "#fff"), u(e, "width", "24"), u(e, "height", "24"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "seek-to-interactive-icon");
        },
        m (o, l) {
            C(o, e, l), d(e, t), d(e, n);
        },
        p: K,
        i: K,
        o: K,
        d (o) {
            o && y(e);
        }
    };
}
class X2 extends ke {
    constructor(e){
        super(), _e(this, e, null, Q2, ge, {});
    }
}
function J2(i) {
    let e, t;
    return e = new X2({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function x2(i) {
    let e, t;
    return e = new mi({
        props: {
            className: i[0] ? "hidden" : "",
            testId: "btn-seek-to-interactive",
            ariaLabel: U("tooltip_interactive_seek"),
            disabled: i[1],
            click: i[2],
            $$slots: {
                default: [
                    J2
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 1 && (l.className = n[0] ? "hidden" : ""), o & 2 && (l.disabled = n[1]), o & 4 && (l.click = n[2]), o & 8 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function $2(i, e, t) {
    let { hidden: n = !1 } = e, { disabled: o = !1 } = e, { click: l } = e;
    return i.$$set = (s)=>{
        "hidden" in s && t(0, n = s.hidden), "disabled" in s && t(1, o = s.disabled), "click" in s && t(2, l = s.click);
    }, [
        n,
        o,
        l
    ];
}
class A1 extends ke {
    constructor(e){
        super(), _e(this, e, $2, x2, ge, {
            hidden: 0,
            disabled: 1,
            click: 2
        });
    }
}
function e4(i) {
    let e, t, n;
    return {
        c () {
            e = I("svg"), t = I("path"), n = I("path"), u(t, "fill-rule", "evenodd"), u(t, "clip-rule", "evenodd"), u(t, "d", "M16.777 3h1.419c.31 0 .596 0 .834.02.258.02.539.068.817.21.397.2.72.523.923.918.141.277.19.557.21.814.02.237.02.521.02.83V7.19c0 .31 0 .594-.02.831-.02.256-.069.537-.21.813a2.107 2.107 0 0 1-.923.92c-.278.14-.56.188-.817.21-.238.019-.524.019-.834.019h-1.419c-.31 0-.596 0-.834-.02a2.148 2.148 0 0 1-.817-.21 2.107 2.107 0 0 1-.923-.919 2.125 2.125 0 0 1-.21-.813 8.287 8.287 0 0 1-.02-.63l-2.198-.002c-.495-.001-.81 0-1.05.018-.23.019-.309.05-.343.067a.803.803 0 0 0-.352.35c-.017.034-.049.113-.068.341-.02.24-.02.554-.02 1.046v5.57c0 .49 0 .804.02 1.043.019.228.05.306.068.34.077.15.2.273.35.35.035.017.113.049.342.067.24.02.555.021 1.048.022l2.203.003c.001-.23.004-.443.02-.627.02-.256.069-.537.21-.813.203-.396.526-.718.923-.92.278-.14.56-.189.817-.21.238-.019.524-.019.834-.019h1.419c.31 0 .596 0 .834.02.258.02.539.068.817.21.397.201.72.523.923.919.141.276.19.557.21.813.02.237.02.522.02.831v1.397c0 .31 0 .594-.02.831-.02.256-.069.537-.21.814a2.108 2.108 0 0 1-.923.919c-.278.14-.56.189-.817.21-.238.019-.524.019-.834.019h-1.419c-.31 0-.596 0-.834-.02a2.148 2.148 0 0 1-.817-.21 2.108 2.108 0 0 1-.923-.918 2.125 2.125 0 0 1-.21-.814 8.288 8.288 0 0 1-.02-.63l-2.24-.002c-.449 0-.839-.001-1.16-.028-.341-.028-.684-.09-1.016-.259a2.61 2.61 0 0 1-1.14-1.137c-.17-.33-.231-.672-.259-1.011-.026-.321-.026-.71-.026-1.156v-1.921H2.905A.903.903 0 0 1 2 11.992c0-.498.405-.901.905-.901h5.227V9.177c0-.448 0-.837.026-1.159.028-.34.09-.682.26-1.013a2.61 2.61 0 0 1 1.144-1.138c.332-.168.676-.23 1.017-.257.323-.025.714-.025 1.164-.024l2.23.003c.001-.23.004-.443.02-.627.02-.257.069-.537.21-.814.203-.395.526-.717.923-.919.278-.14.56-.189.817-.21C16.18 3 16.467 3 16.777 3Zm-.833 1.837a.76.76 0 0 1 .146-.02c.156-.013.366-.014.72-.014h1.354c.353 0 .563 0 .719.013a.76.76 0 0 1 .146.021.301.301 0 0 1 .126.126.75.75 0 0 1 .021.145c.013.156.014.365.014.716v1.334c0 .352 0 .561-.014.716a.75.75 0 0 1-.02.146.301.301 0 0 1-.127.125.76.76 0 0 1-.146.022c-.156.012-.366.013-.719.013H16.81c-.353 0-.563 0-.719-.013a.76.76 0 0 1-.146-.022.301.301 0 0 1-.126-.125.75.75 0 0 1-.021-.146 9.929 9.929 0 0 1-.014-.716V5.824c0-.351.001-.56.014-.716a.75.75 0 0 1 .021-.145.301.301 0 0 1 .126-.126Zm0 11.018a.765.765 0 0 1 .146-.022c.156-.012.366-.013.72-.013h1.354c.353 0 .563 0 .719.013a.765.765 0 0 1 .146.022.3.3 0 0 1 .126.125.75.75 0 0 1 .021.146c.013.155.014.364.014.716v1.334c0 .351 0 .56-.014.716a.75.75 0 0 1-.02.145.3.3 0 0 1-.127.126.755.755 0 0 1-.146.02c-.156.014-.366.014-.719.014H16.81c-.353 0-.563 0-.719-.013a.746.746 0 0 1-.146-.021.3.3 0 0 1-.126-.126.75.75 0 0 1-.021-.145 9.93 9.93 0 0 1-.014-.716v-1.334c0-.352.001-.561.014-.716a.75.75 0 0 1 .021-.146.3.3 0 0 1 .126-.125Z"), u(t, "fill", "#fff"), u(n, "fill-rule", "evenodd"), u(n, "clip-rule", "evenodd"), u(n, "d", "M15.2 5.899v1.203c0 .594 0 .892.115 1.119.102.2.265.362.464.463.227.116.525.116 1.12.116H18.1c.595 0 .892 0 1.12-.116.199-.101.361-.264.463-.463.116-.227.116-.525.116-1.12V5.9c0-.595 0-.892-.116-1.12a1.062 1.062 0 0 0-.464-.463c-.227-.116-.524-.116-1.119-.116h-1.203c-.594 0-.892 0-1.119.116-.2.102-.362.264-.464.464-.115.227-.115.524-.115 1.119Zm-.051 11.03v1.143c0 .605 0 .908.118 1.139.103.203.268.368.472.472.23.117.533.117 1.138.117H18.1c.605 0 .907 0 1.138-.117a1.08 1.08 0 0 0 .472-.472c.118-.231.118-.534.118-1.139v-1.144c0-.605 0-.907-.118-1.138a1.08 1.08 0 0 0-.472-.472c-.231-.118-.534-.118-1.138-.118h-1.224c-.605 0-.907 0-1.138.118a1.08 1.08 0 0 0-.472.472c-.118.23-.118.533-.118 1.138Z"), u(n, "fill", "#fff"), L(n, "hidden", !i[0]), u(e, "width", "24"), u(e, "height", "24"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
        },
        m (o, l) {
            C(o, e, l), d(e, t), d(e, n);
        },
        p (o, [l]) {
            l & 1 && L(n, "hidden", !o[0]);
        },
        i: K,
        o: K,
        d (o) {
            o && y(e);
        }
    };
}
function t4(i, e, t) {
    let { isOpened: n = !1 } = e;
    return i.$$set = (o)=>{
        "isOpened" in o && t(0, n = o.isOpened);
    }, [
        n
    ];
}
class i4 extends ke {
    constructor(e){
        super(), _e(this, e, t4, e4, ge, {
            isOpened: 0
        });
    }
}
function n4(i) {
    let e, t;
    return e = new i4({
        props: {
            isOpened: i[2]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 4 && (l.isOpened = n[2]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function o4(i) {
    let e, t;
    return e = new mi({
        props: {
            className: i[0] ? "hidden" : "",
            testId: "btn-graph",
            disabled: i[1],
            ariaLabel: i[4],
            click: i[3],
            $$slots: {
                default: [
                    n4
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 1 && (l.className = n[0] ? "hidden" : ""), o & 2 && (l.disabled = n[1]), o & 16 && (l.ariaLabel = n[4]), o & 8 && (l.click = n[3]), o & 36 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function l4(i, e, t) {
    let { hidden: n = !1 } = e, { disabled: o = !1 } = e, { graphIsOpened: l = !1 } = e, { click: s } = e, a;
    return i.$$set = (r)=>{
        "hidden" in r && t(0, n = r.hidden), "disabled" in r && t(1, o = r.disabled), "graphIsOpened" in r && t(2, l = r.graphIsOpened), "click" in r && t(3, s = r.click);
    }, i.$$.update = ()=>{
        i.$$.dirty & 4 && t(4, a = U(l ? "tooltip_interactive_graph_on" : "tooltip_interactive_graph_off"));
    }, [
        n,
        o,
        l,
        s,
        a
    ];
}
class E1 extends ke {
    constructor(e){
        super(), _e(this, e, l4, o4, ge, {
            hidden: 0,
            disabled: 1,
            graphIsOpened: 2,
            click: 3
        });
    }
}
function s4(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "d", "M12 9.096a.4.4 0 0 1-.67.296L7.044 5.493a.668.668 0 0 1 0-.986L11.33.608a.4.4 0 0 1 .67.296V4a8 8 0 1 1-8 8 1 1 0 1 1 2 0 6 6 0 1 0 6-6v3.096z"), u(t, "fill", "#fff"), u(e, "width", "24"), u(e, "height", "24"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class a4 extends ke {
    constructor(e){
        super(), _e(this, e, null, s4, ge, {});
    }
}
function r4(i) {
    Fe(i, "v-1ot3duq", ".mobile.v-1ot3duq{position:relative;display:flex;align-items:center;justify-content:center}.mobile.v-1ot3duq svg{transform:scale(2)}.icon-background-mobile.v-1ot3duq{position:absolute;top:16px;left:16px;border-radius:var(--big-play-radius);background-color:var(--big-play-bg-color);width:calc(100% - 32px);height:calc(100% - 32px)}");
}
function Is(i) {
    let e;
    return {
        c () {
            e = k("div"), u(e, "class", "icon-background-mobile v-1ot3duq");
        },
        m (t, n) {
            C(t, e, n);
        },
        d (t) {
            t && y(e);
        }
    };
}
function u4(i) {
    let e, t, n, o, l = i[0] && Is();
    return n = new a4({}), {
        c () {
            l && l.c(), e = B(), t = k("div"), D(n.$$.fragment), u(t, "class", "v-1ot3duq"), L(t, "mobile", i[0]);
        },
        m (s, a) {
            l && l.m(s, a), C(s, e, a), C(s, t, a), z(n, t, null), o = !0;
        },
        p (s, a) {
            s[0] ? l || (l = Is(), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null), (!o || a & 1) && L(t, "mobile", s[0]);
        },
        i (s) {
            o || (m(n.$$.fragment, s), o = !0);
        },
        o (s) {
            p(n.$$.fragment, s), o = !1;
        },
        d (s) {
            s && (y(e), y(t)), l && l.d(s), O(n);
        }
    };
}
function c4(i) {
    let e, t;
    return e = new mi({
        props: {
            className: (i[0] ? "btn-m--play" : "") + " " + i[2],
            testId: "btn-replay",
            ariaLabel: U("tooltip_restart"),
            disabled: i[1],
            click: i[3],
            $$slots: {
                default: [
                    u4
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 5 && (l.className = (n[0] ? "btn-m--play" : "") + " " + n[2]), o & 2 && (l.disabled = n[1]), o & 8 && (l.click = n[3]), o & 17 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function f4(i, e, t) {
    let { isMobile: n = !1 } = e, { disabled: o = !1 } = e, { className: l = "" } = e, { click: s = (0, _esnextEsmJs1.noop) } = e;
    return i.$$set = (a)=>{
        "isMobile" in a && t(0, n = a.isMobile), "disabled" in a && t(1, o = a.disabled), "className" in a && t(2, l = a.className), "click" in a && t(3, s = a.click);
    }, [
        n,
        o,
        l,
        s
    ];
}
class hl extends ke {
    constructor(e){
        super(), _e(this, e, f4, c4, ge, {
            isMobile: 0,
            disabled: 1,
            className: 2,
            click: 3
        }, r4);
    }
}
function d4(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "d", "M12.583 12.917v2.496a1 1 0 0 1-1.522.853l-5.583-3.413a1 1 0 0 1 0-1.706l5.583-3.413a1 1 0 0 1 1.522.853v2.496l5.478-3.349a1 1 0 0 1 1.522.853v6.826a1 1 0 0 1-1.522.853l-5.478-3.349Z"), u(t, "fill", "#fff"), u(e, "width", "24"), u(e, "height", "24"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "data-testid", "play-prev-chapter-icon");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class m4 extends ke {
    constructor(e){
        super(), _e(this, e, null, d4, ge, {});
    }
}
function h4(i) {
    let e, t;
    return e = new m4({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function p4(i) {
    let e, t;
    return e = new mi({
        props: {
            className: i[0] ? "hidden" : "",
            testId: "btn-play-prev-chapter",
            ariaLabel: U("tooltip_interactive_go_back"),
            disabled: i[1],
            click: i[2],
            $$slots: {
                default: [
                    h4
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 1 && (l.className = n[0] ? "hidden" : ""), o & 2 && (l.disabled = n[1]), o & 4 && (l.click = n[2]), o & 8 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function g4(i, e, t) {
    let { hidden: n = !1 } = e, { disabled: o = !1 } = e, { click: l } = e;
    return i.$$set = (s)=>{
        "hidden" in s && t(0, n = s.hidden), "disabled" in s && t(1, o = s.disabled), "click" in s && t(2, l = s.click);
    }, [
        n,
        o,
        l
    ];
}
class L1 extends ke {
    constructor(e){
        super(), _e(this, e, g4, p4, ge, {
            hidden: 0,
            disabled: 1,
            click: 2
        });
    }
}
function b4(i) {
    Fe(i, "v-1x1zctw", ".icon.v-1x1zctw{width:24px !important;height:24px !important;;}.error-stub.v-1x1zctw{display:flex;justify-content:center;align-items:center}.inner.v-1x1zctw{width:16px;height:16px;background-color:var(--white)}");
}
function v4(i) {
    let e, t, n, o;
    return {
        c () {
            e = k("img"), u(e, "class", "icon v-1x1zctw"), kl(e.src, t = i[0]) || u(e, "src", t), u(e, "aria-hidden", "true");
        },
        m (l, s) {
            C(l, e, s), n || (o = Ae(e, "error", i[7]), n = !0);
        },
        p (l, s) {
            s & 1 && !kl(e.src, t = l[0]) && u(e, "src", t);
        },
        d (l) {
            l && y(e), n = !1, o();
        }
    };
}
function _4(i) {
    let e;
    return {
        c () {
            e = k("div"), e.innerHTML = '<div class="inner v-1x1zctw"></div>', u(e, "class", "icon error-stub v-1x1zctw");
        },
        m (t, n) {
            C(t, e, n);
        },
        p: K,
        d (t) {
            t && y(e);
        }
    };
}
function k4(i) {
    let e;
    function t(l, s) {
        return l[5] ? _4 : v4;
    }
    let n = t(i), o = n(i);
    return {
        c () {
            o.c(), e = ht();
        },
        m (l, s) {
            o.m(l, s), C(l, e, s);
        },
        p (l, s) {
            n === (n = t(l)) && o ? o.p(l, s) : (o.d(1), o = n(l), o && (o.c(), o.m(e.parentNode, e)));
        },
        d (l) {
            l && y(e), o.d(l);
        }
    };
}
function w4(i) {
    let e, t;
    return e = new mi({
        props: {
            className: i[4] ? "btn-full-opacity" : "",
            ariaLabel: i[1],
            click: i[3],
            disabled: i[6],
            testId: i[2],
            $$slots: {
                default: [
                    k4
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 16 && (l.className = n[4] ? "btn-full-opacity" : ""), o & 2 && (l.ariaLabel = n[1]), o & 8 && (l.click = n[3]), o & 64 && (l.disabled = n[6]), o & 4 && (l.testId = n[2]), o & 545 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function y4(i, e, t) {
    let n, o, l, { iconUrl: s } = e, { ariaLabel: a } = e, { disabled: r = !1 } = e, { testId: c } = e, { onClick: f = (0, _esnextEsmJs1.noop) } = e;
    const h = ()=>{
        t(5, l = !0);
    };
    return i.$$set = (g)=>{
        "iconUrl" in g && t(0, s = g.iconUrl), "ariaLabel" in g && t(1, a = g.ariaLabel), "disabled" in g && t(8, r = g.disabled), "testId" in g && t(2, c = g.testId), "onClick" in g && t(3, f = g.onClick);
    }, i.$$.update = ()=>{
        i.$$.dirty & 8 && t(4, n = f === (0, _esnextEsmJs1.noop)), i.$$.dirty & 272 && t(6, o = n || r);
    }, t(5, l = !1), [
        s,
        a,
        c,
        f,
        n,
        l,
        o,
        h,
        r
    ];
}
class V1 extends ke {
    constructor(e){
        super(), _e(this, e, y4, w4, ge, {
            iconUrl: 0,
            ariaLabel: 1,
            disabled: 8,
            testId: 2,
            onClick: 3
        }, b4);
    }
}
function C4(i) {
    Fe(i, "v-st0uzk", ".wrapper-bottom.v-st0uzk.v-st0uzk{pointer-events:none;position:absolute;width:100%;bottom:0;left:0;height:var(--controls-gradient-height);background:var(--controls-gradient);transition:transform var(--controls-transition-duration) var(--controls-transition-fn);display:flex;flex-direction:column;justify-content:flex-end;box-sizing:border-box}.wrapper-bottom.v-st0uzk>.v-st0uzk{pointer-events:auto}.controls.v-st0uzk.v-st0uzk{width:100%;display:flex;align-items:center;justify-content:space-between;height:var(--controls-height);white-space:nowrap;font-size:13px;transition:transform var(--controls-transition-duration) var(--controls-transition-fn);will-change:transform;padding:0 8px 4px;box-sizing:border-box}.controls-left.v-st0uzk.v-st0uzk,.controls-right.v-st0uzk.v-st0uzk{display:flex;align-content:center}.controls-left.v-st0uzk.v-st0uzk{flex-grow:1;min-width:0;overflow:hidden}.controls-left.v-st0uzk > *:not(:first-child),.controls-right.v-st0uzk > *{margin-left:var(--controls-desktop-item-margin-left)}.controls-hidden.v-st0uzk.v-st0uzk{visibility:visible;transform:translateY(100%)}.wrapper-bottom.no-smooth.v-st0uzk.v-st0uzk{transition:none}.settings-menu.v-st0uzk.v-st0uzk{bottom:57px;right:18px;position:absolute;transition:opacity 0.2s, visibility 0.2s}");
}
function Ms(i, e, t) {
    const n = i.slice();
    return n[163] = e[t].iconUrl, n[164] = e[t].ariaLabel, n[165] = e[t].testId, n[166] = e[t].onClick, n[167] = e[t].tooltip, n;
}
function Rs(i) {
    let e, t, n;
    function o(s) {
        i[134](s);
    }
    let l = {
        disabled: !i[9],
        tooltipContent: U("tooltip_previous"),
        $$slots: {
            default: [
                P4
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[30] !== void 0 && (l.width = i[30]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[0] & 512 && (r.disabled = !s[9]), a[0] & 4608 | a[5] & 32768 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[0] & 1073741824 && (t = !0, r.width = s[30], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function P4(i) {
    let e, t;
    return e = new Do({
        props: {
            click: i[12],
            type: "prev",
            disabled: !i[9],
            isMobile: !1
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 4096 && (l.click = n[12]), o[0] & 512 && (l.disabled = !n[9]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Bs(i) {
    let e, t, n;
    function o(s) {
        i[135](s);
    }
    let l = {
        disabled: i[66],
        tooltipContent: U("tooltip_restart"),
        $$slots: {
            default: [
                S4
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[31] !== void 0 && (l.width = i[31]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[2] & 16 && (r.disabled = s[66]), a[2] & 16 | a[5] & 32768 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[1] & 1 && (t = !0, r.width = s[31], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function S4(i) {
    let e, t;
    return e = new hl({
        props: {
            click: i[112],
            disabled: i[66]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[2] & 16 && (l.disabled = n[66]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Ns(i) {
    let e, t, n;
    function o(s) {
        i[136](s);
    }
    let l = {
        tooltipContent: i[57],
        disabled: i[67],
        $$slots: {
            default: [
                T4
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[32] !== void 0 && (l.width = i[32]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[1] & 67108864 && (r.tooltipContent = s[57]), a[2] & 32 && (r.disabled = s[67]), a[1] & 2097152 | a[2] & 32 | a[5] & 32768 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[1] & 2 && (t = !0, r.width = s[32], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function T4(i) {
    let e, t;
    return e = new ml({
        props: {
            isMobile: !1,
            isPlaying: i[52],
            click: i[77],
            disabled: i[67]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[1] & 2097152 && (l.isPlaying = n[52]), o[2] & 32 && (l.disabled = n[67]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function zs(i) {
    let e, t, n;
    function o(s) {
        i[137](s);
    }
    let l = {
        disabled: !i[8],
        tooltipContent: U("tooltip_next"),
        $$slots: {
            default: [
                A4
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[33] !== void 0 && (l.width = i[33]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[0] & 256 && (r.disabled = !s[8]), a[0] & 2304 | a[5] & 32768 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[1] & 4 && (t = !0, r.width = s[33], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function A4(i) {
    let e, t;
    return e = new Do({
        props: {
            click: i[11],
            type: "next",
            disabled: !i[8],
            isMobile: !1
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 2048 && (l.click = n[11]), o[0] & 256 && (l.disabled = !n[8]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function E4(i) {
    let e, t, n, o, l = i[107] && L4(i), s = i[106] && I4(i), a = i[105] && R4(i);
    return {
        c () {
            l && l.c(), e = B(), s && s.c(), t = B(), a && a.c(), n = ht();
        },
        m (r, c) {
            l && l.m(r, c), C(r, e, c), s && s.m(r, c), C(r, t, c), a && a.m(r, c), C(r, n, c), o = !0;
        },
        p (r, c) {
            r[107] && l.p(r, c), r[106] && s.p(r, c), r[105] && a.p(r, c);
        },
        i (r) {
            o || (m(l), m(s), m(a), o = !0);
        },
        o (r) {
            p(l), p(s), p(a), o = !1;
        },
        d (r) {
            r && (y(e), y(t), y(n)), l && l.d(r), s && s.d(r), a && a.d(r);
        }
    };
}
function L4(i) {
    let e, t, n;
    function o(s) {
        i[138](s);
    }
    let l = {
        disabled: i[65],
        tooltipContent: U("tooltip_interactive_go_back"),
        disabledTooltipContent: i[109] && U(i[109]),
        $$slots: {
            default: [
                V4
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[34] !== void 0 && (l.width = i[34]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[2] & 8 && (r.disabled = s[65]), a[0] & 131072 | a[2] & 8 | a[5] & 32768 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[1] & 8 && (t = !0, r.width = s[34], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function V4(i) {
    let e, t;
    return e = new L1({
        props: {
            disabled: i[65],
            click: i[17]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[2] & 8 && (l.disabled = n[65]), o[0] & 131072 && (l.click = n[17]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function I4(i) {
    let e, t, n;
    function o(s) {
        i[139](s);
    }
    let l = {
        disabled: i[68],
        tooltipContent: U("tooltip_interactive_seek"),
        $$slots: {
            default: [
                M4
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[35] !== void 0 && (l.width = i[35]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[2] & 64 && (r.disabled = s[68]), a[0] & 32768 | a[2] & 64 | a[5] & 32768 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[1] & 16 && (t = !0, r.width = s[35], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function M4(i) {
    let e, t;
    return e = new A1({
        props: {
            disabled: i[68],
            click: i[15]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[2] & 64 && (l.disabled = n[68]), o[0] & 32768 && (l.click = n[15]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function R4(i) {
    let e, t, n;
    function o(s) {
        i[140](s);
    }
    let l = {
        tooltipContent: i[58],
        disabled: i[69],
        $$slots: {
            default: [
                B4
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[36] !== void 0 && (l.width = i[36]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[1] & 134217728 && (r.tooltipContent = s[58]), a[2] & 128 && (r.disabled = s[69]), a[0] & 65536 | a[1] & 524288 | a[2] & 128 | a[5] & 32768 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[1] & 32 && (t = !0, r.width = s[36], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function B4(i) {
    let e, t;
    return e = new E1({
        props: {
            click: i[16],
            graphIsOpened: i[50],
            disabled: i[69]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 65536 && (l.click = n[16]), o[1] & 524288 && (l.graphIsOpened = n[50]), o[2] & 128 && (l.disabled = n[69]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Os(i) {
    let e, t, n;
    function o(s) {
        i[141](s);
    }
    let l = {
        tooltipContent: i[59],
        $$slots: {
            default: [
                N4
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[37] !== void 0 && (l.width = i[37]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[1] & 268435456 && (r.tooltipContent = s[59]), a[0] & 268435456 | a[1] & 268435456 | a[5] & 32768 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[1] & 64 && (t = !0, r.width = s[37], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function N4(i) {
    let e, t;
    return e = new y1({
        props: {
            isActiveLive: i[28],
            isMobile: !1,
            ariaLabel: i[59]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 268435456 && (l.isActiveLive = n[28]), o[1] & 268435456 && (l.ariaLabel = n[59]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Ds(i) {
    let e, t, n;
    function o(s) {
        i[142](s);
    }
    let l = {
        isMobile: !1,
        showDuration: i[64],
        position: i[4] ? i[71] : i[72],
        duration: i[4] ? i[73] : i[74]
    };
    return i[38] !== void 0 && (l.width = i[38]), e = new p1({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[2] & 4 && (r.showDuration = s[64]), a[0] & 16 | a[2] & 1536 && (r.position = s[4] ? s[71] : s[72]), a[0] & 16 | a[2] & 6144 && (r.duration = s[4] ? s[73] : s[74]), !t && a[1] & 128 && (t = !0, r.width = s[38], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function Hs(i) {
    let e, t;
    return e = new T1({
        props: {
            position: i[72],
            duration: i[74],
            timeCodes: i[92]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[2] & 1024 && (l.position = n[72]), o[2] & 4096 && (l.duration = n[74]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function z4(i) {
    let e, t, n = i[27] && Hs(i);
    return {
        c () {
            n && n.c(), e = ht();
        },
        m (o, l) {
            n && n.m(o, l), C(o, e, l), t = !0;
        },
        p (o, l) {
            o[27] ? n ? (n.p(o, l), l[0] & 134217728 && m(n, 1)) : (n = Hs(o), n.c(), m(n, 1), n.m(e.parentNode, e)) : n && (me(), p(n, 1, 1, ()=>{
                n = null;
            }), he());
        },
        i (o) {
            t || (m(n), t = !0);
        },
        o (o) {
            p(n), t = !1;
        },
        d (o) {
            o && y(e), n && n.d(o);
        }
    };
}
function O4(i) {
    let e, t;
    return e = new V1({
        props: {
            iconUrl: i[163],
            ariaLabel: i[164] ?? i[167],
            testId: i[165],
            onClick: i[166]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[1] & 32768 && (l.iconUrl = n[163]), o[1] & 32768 && (l.ariaLabel = n[164] ?? n[167]), o[1] & 32768 && (l.testId = n[165]), o[1] & 32768 && (l.onClick = n[166]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Fs(i) {
    let e, t;
    return e = new Rt({
        props: {
            tooltipContent: i[167],
            width: 40,
            $$slots: {
                default: [
                    O4
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[1] & 32768 && (l.tooltipContent = n[167]), o[1] & 32768 | o[5] & 32768 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Us(i) {
    let e, t, n;
    function o(s) {
        i[145](s);
    }
    let l = {
        disabled: !i[6],
        tooltipContent: i[60],
        $$slots: {
            default: [
                D4
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[40] !== void 0 && (l.width = i[40]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[0] & 64 && (r.disabled = !s[6]), a[1] & 536870912 && (r.tooltipContent = s[60]), a[0] & 192 | a[5] & 32768 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[1] & 512 && (t = !0, r.width = s[40], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function D4(i) {
    let e, t;
    return e = new k1({
        props: {
            click: i[78],
            logoClickable: i[6],
            videoLogoUrl: i[7]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 64 && (l.logoClickable = n[6]), o[0] & 128 && (l.videoLogoUrl = n[7]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function H4(i) {
    let e, t;
    return e = new wd({
        props: {
            isAudioAvailable: i[70],
            click: i[111]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[2] & 256 && (l.isAudioAvailable = n[70]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function qs(i) {
    let e, t, n;
    function o(s) {
        i[147](s);
    }
    let l = {
        tooltipContent: i[61],
        $$slots: {
            default: [
                F4
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[42] !== void 0 && (l.width = i[42]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[1] & 1073741824 && (r.tooltipContent = s[61]), a[0] & 262144 | a[5] & 32768 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[1] & 2048 && (t = !0, r.width = s[42], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function F4(i) {
    let e, t;
    return e = new I0({
        props: {
            isSubtitlesEnabled: i[18],
            click: i[79]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 262144 && (l.isSubtitlesEnabled = n[18]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Ws(i) {
    let e, t, n;
    return t = new h1({
        props: {
            supportLink: i[10],
            playerControlsHeight: i[56]?.clientHeight,
            returnFocus: i[14]
        }
    }), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "settings-menu v-st0uzk");
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        p (o, l) {
            const s = {};
            l[0] & 1024 && (s.supportLink = o[10]), l[1] & 33554432 && (s.playerControlsHeight = o[56]?.clientHeight), l[0] & 16384 && (s.returnFocus = o[14]), t.$set(s);
        },
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function Zs(i) {
    let e, t, n;
    function o(s) {
        i[148](s);
    }
    let l = {
        tooltipContent: i[76] ? void 0 : U("tooltip_settings_off"),
        $$slots: {
            default: [
                U4
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[43] !== void 0 && (l.width = i[43]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[2] & 16384 && (r.tooltipContent = s[76] ? void 0 : U("tooltip_settings_off")), a[5] & 32768 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[1] & 4096 && (t = !0, r.width = s[43], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function U4(i) {
    let e, t;
    return e = new cl({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function js(i) {
    let e, t, n;
    function o(s) {
        i[149](s);
    }
    let l = {
        tooltipContent: i[62],
        $$slots: {
            default: [
                q4
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[44] !== void 0 && (l.width = i[44]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[2] & 1 && (r.tooltipContent = s[62]), a[0] & 8192 | a[1] & 262144 | a[5] & 32768 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[1] & 8192 && (t = !0, r.width = s[44], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function q4(i) {
    let e, t;
    return e = new v1({
        props: {
            click: i[13],
            isFullscreen: i[49]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 8192 && (l.click = n[13]), o[1] & 262144 && (l.isFullscreen = n[49]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Gs(i) {
    let e, t, n;
    function o(s) {
        i[150](s);
    }
    let l = {
        tooltipContent: i[63],
        $$slots: {
            default: [
                W4
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[45] !== void 0 && (l.width = i[45]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[2] & 2 && (r.tooltipContent = s[63]), a[1] & 131072 | a[5] & 32768 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[1] & 16384 && (t = !0, r.width = s[45], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function W4(i) {
    let e, t;
    return e = new w1({
        props: {
            isMobile: !1,
            state: i[48],
            click: i[110]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[1] & 131072 && (l.state = n[48]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Z4(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v, b, _, V, A, S, P, N, W, X, Z, T, te, j, ie;
    t = new S1({
        props: {
            isHidden: !i[55],
            isAds: i[4],
            canRewindLive: i[5],
            isRewindableLive: i[51]
        }
    });
    let G = i[54] && Rs(i), J = i[19] && Bs(i), ue = i[20] && Ns(i), w = i[53] && zs(i), oe = i[104] && E4(i), fe = !i[4] && i[47] && Os(i), ve = i[26] && Ds(i);
    function Me(x) {
        i[143](x);
    }
    let Ee = {
        className: "w-max",
        disabled: !i[27],
        tooltipContent: U("tooltip_episodes"),
        $$slots: {
            default: [
                z4
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    i[39] !== void 0 && (Ee.width = i[39]), v = new Rt({
        props: Ee
    }), We.push(()=>bt(v, "width", Me));
    let we = Mt(i[46]), H = [];
    for(let x = 0; x < we.length; x += 1)H[x] = Fs(Ms(i, we, x));
    const M = (x)=>p(H[x], 1, 1, ()=>{
            H[x] = null;
        });
    let Y = i[24] && Us(i);
    function pe(x) {
        i[146](x);
    }
    let ee = {
        $$slots: {
            default: [
                H4
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    i[41] !== void 0 && (ee.width = i[41]), N = new Rt({
        props: ee
    }), We.push(()=>bt(N, "width", pe));
    let R = i[22] && qs(i), Q = !i[75] && !i[4] && Ws(i), Ve = i[23] && Zs(i), ye = i[25] && js(i), Te = i[21] && Gs(i);
    return {
        c () {
            e = k("div"), D(t.$$.fragment), n = B(), o = k("div"), l = k("div"), G && G.c(), s = B(), J && J.c(), a = B(), ue && ue.c(), r = B(), w && w.c(), c = B(), oe && oe.c(), f = B(), fe && fe.c(), h = B(), ve && ve.c(), g = B(), D(v.$$.fragment), V = B(), A = k("div");
            for(let x = 0; x < H.length; x += 1)H[x].c();
            S = B(), Y && Y.c(), P = B(), D(N.$$.fragment), X = B(), R && R.c(), Z = B(), Q && Q.c(), T = B(), Ve && Ve.c(), te = B(), ye && ye.c(), j = B(), Te && Te.c(), u(l, "class", "controls-left v-st0uzk"), Hn(()=>i[144].call(l)), u(A, "class", "controls-right v-st0uzk"), u(o, "class", "controls v-st0uzk"), u(e, "class", "wrapper-bottom v-st0uzk"), L(e, "hidden", i[1]), L(e, "controls-hidden", !i[3]), L(e, "no-smooth", i[2]);
        },
        m (x, le) {
            C(x, e, le), z(t, e, null), d(e, n), d(e, o), d(o, l), G && G.m(l, null), d(l, s), J && J.m(l, null), d(l, a), ue && ue.m(l, null), d(l, r), w && w.m(l, null), d(l, c), oe && oe.m(l, null), d(l, f), fe && fe.m(l, null), d(l, h), ve && ve.m(l, null), d(l, g), z(v, l, null), _ = Bo(l, i[144].bind(l)), d(o, V), d(o, A);
            for(let be = 0; be < H.length; be += 1)H[be] && H[be].m(A, null);
            d(A, S), Y && Y.m(A, null), d(A, P), z(N, A, null), d(A, X), R && R.m(A, null), d(A, Z), Q && Q.m(A, null), d(A, T), Ve && Ve.m(A, null), d(A, te), ye && ye.m(A, null), d(A, j), Te && Te.m(A, null), i[151](o), i[152](e), ie = !0;
        },
        p (x, le) {
            const be = {};
            le[1] & 16777216 && (be.isHidden = !x[55]), le[0] & 16 && (be.isAds = x[4]), le[0] & 32 && (be.canRewindLive = x[5]), le[1] & 1048576 && (be.isRewindableLive = x[51]), t.$set(be), x[54] ? G ? (G.p(x, le), le[1] & 8388608 && m(G, 1)) : (G = Rs(x), G.c(), m(G, 1), G.m(l, s)) : G && (me(), p(G, 1, 1, ()=>{
                G = null;
            }), he()), x[19] ? J ? (J.p(x, le), le[0] & 524288 && m(J, 1)) : (J = Bs(x), J.c(), m(J, 1), J.m(l, a)) : J && (me(), p(J, 1, 1, ()=>{
                J = null;
            }), he()), x[20] ? ue ? (ue.p(x, le), le[0] & 1048576 && m(ue, 1)) : (ue = Ns(x), ue.c(), m(ue, 1), ue.m(l, r)) : ue && (me(), p(ue, 1, 1, ()=>{
                ue = null;
            }), he()), x[53] ? w ? (w.p(x, le), le[1] & 4194304 && m(w, 1)) : (w = zs(x), w.c(), m(w, 1), w.m(l, c)) : w && (me(), p(w, 1, 1, ()=>{
                w = null;
            }), he()), x[104] && oe.p(x, le), !x[4] && x[47] ? fe ? (fe.p(x, le), le[0] & 16 | le[1] & 65536 && m(fe, 1)) : (fe = Os(x), fe.c(), m(fe, 1), fe.m(l, h)) : fe && (me(), p(fe, 1, 1, ()=>{
                fe = null;
            }), he()), x[26] ? ve ? (ve.p(x, le), le[0] & 67108864 && m(ve, 1)) : (ve = Ds(x), ve.c(), m(ve, 1), ve.m(l, g)) : ve && (me(), p(ve, 1, 1, ()=>{
                ve = null;
            }), he());
            const ae = {};
            if (le[0] & 134217728 && (ae.disabled = !x[27]), le[0] & 134217728 | le[2] & 5120 | le[5] & 32768 && (ae.$$scope = {
                dirty: le,
                ctx: x
            }), !b && le[1] & 256 && (b = !0, ae.width = x[39], gt(()=>b = !1)), v.$set(ae), le[1] & 32768) {
                we = Mt(x[46]);
                let qe;
                for(qe = 0; qe < we.length; qe += 1){
                    const Je = Ms(x, we, qe);
                    H[qe] ? (H[qe].p(Je, le), m(H[qe], 1)) : (H[qe] = Fs(Je), H[qe].c(), m(H[qe], 1), H[qe].m(A, S));
                }
                for(me(), qe = we.length; qe < H.length; qe += 1)M(qe);
                he();
            }
            x[24] ? Y ? (Y.p(x, le), le[0] & 16777216 && m(Y, 1)) : (Y = Us(x), Y.c(), m(Y, 1), Y.m(A, P)) : Y && (me(), p(Y, 1, 1, ()=>{
                Y = null;
            }), he());
            const Ue = {};
            le[2] & 256 | le[5] & 32768 && (Ue.$$scope = {
                dirty: le,
                ctx: x
            }), !W && le[1] & 1024 && (W = !0, Ue.width = x[41], gt(()=>W = !1)), N.$set(Ue), x[22] ? R ? (R.p(x, le), le[0] & 4194304 && m(R, 1)) : (R = qs(x), R.c(), m(R, 1), R.m(A, Z)) : R && (me(), p(R, 1, 1, ()=>{
                R = null;
            }), he()), !x[75] && !x[4] ? Q ? (Q.p(x, le), le[0] & 16 | le[2] & 8192 && m(Q, 1)) : (Q = Ws(x), Q.c(), m(Q, 1), Q.m(A, T)) : Q && (me(), p(Q, 1, 1, ()=>{
                Q = null;
            }), he()), x[23] ? Ve ? (Ve.p(x, le), le[0] & 8388608 && m(Ve, 1)) : (Ve = Zs(x), Ve.c(), m(Ve, 1), Ve.m(A, te)) : Ve && (me(), p(Ve, 1, 1, ()=>{
                Ve = null;
            }), he()), x[25] ? ye ? (ye.p(x, le), le[0] & 33554432 && m(ye, 1)) : (ye = js(x), ye.c(), m(ye, 1), ye.m(A, j)) : ye && (me(), p(ye, 1, 1, ()=>{
                ye = null;
            }), he()), x[21] ? Te ? (Te.p(x, le), le[0] & 2097152 && m(Te, 1)) : (Te = Gs(x), Te.c(), m(Te, 1), Te.m(A, null)) : Te && (me(), p(Te, 1, 1, ()=>{
                Te = null;
            }), he()), (!ie || le[0] & 2) && L(e, "hidden", x[1]), (!ie || le[0] & 8) && L(e, "controls-hidden", !x[3]), (!ie || le[0] & 4) && L(e, "no-smooth", x[2]);
        },
        i (x) {
            if (!ie) {
                m(t.$$.fragment, x), m(G), m(J), m(ue), m(w), m(oe), m(fe), m(ve), m(v.$$.fragment, x);
                for(let le = 0; le < we.length; le += 1)m(H[le]);
                m(Y), m(N.$$.fragment, x), m(R), m(Q), m(Ve), m(ye), m(Te), ie = !0;
            }
        },
        o (x) {
            p(t.$$.fragment, x), p(G), p(J), p(ue), p(w), p(oe), p(fe), p(ve), p(v.$$.fragment, x), H = H.filter(Boolean);
            for(let le = 0; le < H.length; le += 1)p(H[le]);
            p(Y), p(N.$$.fragment, x), p(R), p(Q), p(Ve), p(ye), p(Te), ie = !1;
        },
        d (x) {
            x && y(e), O(t), G && G.d(), J && J.d(), ue && ue.d(), w && w.d(), oe && oe.d(), fe && fe.d(), ve && ve.d(), O(v), _(), sn(H, x), Y && Y.d(), O(N), R && R.d(), Q && Q.d(), Ve && Ve.d(), ye && ye.d(), Te && Te.d(), i[151](null), i[152](null);
        }
    };
}
function j4(i, e, t) {
    let n, o, l, s, a, r, c, f, h, g, v, b, _, V, A, S, P, N, W, X, Z, T, te, j, ie, G, J, ue, w, oe, { bottomHidden: fe } = e, { bottomNoSmooth: ve } = e, { showControls: Me } = e, { controlsElementRef: Ee } = e, { isAds: we = !1 } = e, { canRewindLive: H } = e, { logoClickable: M } = e, { logoHidden: Y } = e, { videoLogoUrl: pe } = e, { showNextPrevButtons: ee } = e, { nextButtonActive: R } = e, { prevButtonActive: Q } = e, { isOneVideoPlaylist: Ve = !1 } = e, { supportLink: ye } = e, { customFullscreenSupported: Te = !0 } = e, { playNextVideo: x } = e, { playPrevVideo: le } = e, { repeatPlaylist: be } = e, { toggleFullscreen: ae } = e, { returnFocus: Ue } = e, { seekToInteractive: qe } = e, { toggleGraph: Je } = e, { playPrevChapter: tt } = e;
    const Be = vt(), at = Yi(), St = Be.actions.internal.toggleMuted, Re = Be.actions.internal.togglePlay, Le = Be.actions.internal.pause, kt = Be.actions.internal.toggleSubtitle, Dt = Be.callbacks?.onAudioDoesNotExistHint, mt = Be.callbacks?.onAudioDisabledHint, ot = Be.state.duration$;
    F(i, ot, (ne)=>t(74, ue = ne));
    const re = Be.state.positionWithScrubbing$;
    F(i, re, (ne)=>t(72, G = ne));
    const xe = Be.state.playbackState$;
    F(i, xe, (ne)=>t(124, _ = ne));
    const Ye = Be.state.chromecastConnected$;
    F(i, Ye, (ne)=>t(75, w = ne));
    const it = Be.state.isAudioAvailable$;
    F(i, it, (ne)=>t(70, c = ne));
    const Ge = Be.state.isAudioDisabled, ft = Be.state.isEnded$;
    F(i, ft, (ne)=>t(130, Z = ne));
    const $e = Be.state.isLive$;
    F(i, $e, (ne)=>t(47, g = ne));
    const Bt = Be.state.isActiveLive$;
    F(i, Bt, (ne)=>t(125, A = ne));
    const wt = Be.state.isRewindableLive$;
    F(i, wt, (ne)=>t(51, S = ne));
    const nt = Be.ui.isPictureInPictureActive$;
    F(i, nt, (ne)=>t(128, W = ne));
    const Ht = Be.ui.pictureInPictureType$;
    F(i, Ht, (ne)=>t(127, N = ne));
    const ut = Be.ui.settingsMenuVisible;
    F(i, ut, (ne)=>t(76, oe = ne));
    const Ze = Be.ui.controls, Tt = Be.actions.internal.getVideoEpisodes(), lt = Be.state.chromecastState$;
    F(i, lt, (ne)=>t(48, v = ne));
    const oi = Be.state.availableSubtitlesList$;
    F(i, oi, (ne)=>t(129, X = ne));
    const de = Be.state.currentSubtitle$;
    F(i, de, (ne)=>t(131, T = ne));
    const Ce = Ze.disabledControls$;
    F(i, Ce, (ne)=>t(133, j = ne));
    const Ie = Be.ads.duration;
    F(i, Ie, (ne)=>t(73, J = ne));
    const Pt = Be.ads.position;
    F(i, Pt, (ne)=>t(71, ie = ne));
    const Mi = Be.ads.playbackState;
    F(i, Mi, (ne)=>t(132, te = ne));
    const $t = Be.ui.isFullscreen;
    F(i, $t, (ne)=>t(49, b = ne));
    const _i = Be.ui.playerSize;
    F(i, _i, (ne)=>t(126, P = ne));
    const Ri = Be.ui.currentGridType$;
    F(i, Ri, (ne)=>t(123, h = ne));
    const Vt = Be.ui.additionalButtons$;
    F(i, Vt, (ne)=>t(46, f = ne));
    const Pe = Be.actions.internal.replayInteractive, Nt = Be.state.isInteractive, Bi = Be.state.isInteractiveGraphEnabled, li = Be.state.isSeekToInteractiveEnable, ki = Be.state.isPlayPrevChapterEnabled, wi = Be.state.graphIsOpened$;
    F(i, wi, (ne)=>t(50, V = ne));
    const yi = Be.state.playPrevChapterDisabledTooltip, si = ()=>Be.actions.internal.toggleChromecast();
    let Qi, hi, Ci, Pi, Ni, Si, Zi, ei, ai, Ti, Ft, yt, Ut, zi, Xi, Oi, ti, qi, ji, ri = "";
    const Di = (ne, tn)=>{
        if (!ne) {
            t(59, ri = U("tooltip_live"));
            return;
        }
        tn === (0, _esnextEsmJs.PlaybackState).PAUSED && t(59, ri = U("tooltip_play"));
    };
    let Ai, Ei, Li, pi, qt, ui, gi, Wt, Zt, ii, ci, jt, bi, ni, Hi, Vi, Gi, Fi, fi, Wi, Ii, se, Gt, Ui, Ji;
    function dn(ne, tn) {
        let st = co;
        const zt = (nn, pn, ao)=>{
            let Nn = pn ? nn + pn + (nn ? zu : 0) : nn;
            return ao.set({
                positionStartX: nn,
                positionEndX: Nn,
                isDisplayed: tn && nn !== Nn
            }), Nn;
        };
        st = zt(st, ne.prevButtonWidth, Ze.prevButton), st = zt(st, ne.replayButtonWidth, Ze.replayButton), st = zt(st, ne.playButtonWidth, Ze.playButton), st = zt(st, ne.nextButtonWidth, Ze.nextButton), st = zt(st, ne.playPrevChapterWidth, Ze.playPrevChapterButton), st = zt(st, ne.seekToInteractiveWidth, Ze.seekToInteractiveButton), st = zt(st, ne.interactiveGraphWidth, Ze.interactiveGraphButton), st = zt(st, ne.liveButtonWidth, Ze.liveButton), st = zt(st, ne.timeWidth, Ze.time), st = zt(st, ne.episodesWidth, Ze.episodes), f.forEach((nn, pn)=>{
            st = zt(st, ne.additionalButtonWidths[pn], Ze.additionalButtons[pn]);
        }), st = zt(st, ne.vkLogoWidth, Ze.vkLogo), st = zt(st, ne.volumeWidth, Ze.volume), st = zt(st, ne.subtitlesWidth, Ze.subtitles), st = zt(st, ne.settingsWidth, Ze.settings), st = zt(st, ne.fullscreenWidth, Ze.fullscreen), zt(st, ne.chromecastWidth, Ze.chromecast);
    }
    function mn() {
        Ge ? mt?.() : c ? St() : Dt?.();
    }
    const Kt = Nt ? Pe : Ve ? Re : be;
    function Ln(ne) {
        ui = ne, t(30, ui);
    }
    function Vn(ne) {
        gi = ne, t(31, gi);
    }
    function hn(ne) {
        Wt = ne, t(32, Wt);
    }
    function Sn(ne) {
        Zt = ne, t(33, Zt);
    }
    function rn(ne) {
        ii = ne, t(34, ii);
    }
    function en(ne) {
        ci = ne, t(35, ci);
    }
    function In(ne) {
        jt = ne, t(36, jt);
    }
    function $(ne) {
        bi = ne, t(37, bi);
    }
    function _t(ne) {
        ni = ne, t(38, ni);
    }
    function Mn(ne) {
        Hi = ne, t(39, Hi);
    }
    function Rn() {
        qt = this.clientWidth, t(29, qt);
    }
    function Bn(ne) {
        Vi = ne, t(40, Vi);
    }
    function to(ne) {
        Gi = ne, t(41, Gi);
    }
    function io(ne) {
        Fi = ne, t(42, Fi);
    }
    function no(ne) {
        fi = ne, t(43, fi);
    }
    function oo(ne) {
        Wi = ne, t(44, Wi);
    }
    function lo(ne) {
        Ii = ne, t(45, Ii);
    }
    function Fn(ne) {
        We[ne ? "unshift" : "push"](()=>{
            Oi = ne, t(56, Oi);
        });
    }
    function so(ne) {
        We[ne ? "unshift" : "push"](()=>{
            Ee = ne, t(0, Ee);
        });
    }
    return i.$$set = (ne)=>{
        "bottomHidden" in ne && t(1, fe = ne.bottomHidden), "bottomNoSmooth" in ne && t(2, ve = ne.bottomNoSmooth), "showControls" in ne && t(3, Me = ne.showControls), "controlsElementRef" in ne && t(0, Ee = ne.controlsElementRef), "isAds" in ne && t(4, we = ne.isAds), "canRewindLive" in ne && t(5, H = ne.canRewindLive), "logoClickable" in ne && t(6, M = ne.logoClickable), "logoHidden" in ne && t(113, Y = ne.logoHidden), "videoLogoUrl" in ne && t(7, pe = ne.videoLogoUrl), "showNextPrevButtons" in ne && t(114, ee = ne.showNextPrevButtons), "nextButtonActive" in ne && t(8, R = ne.nextButtonActive), "prevButtonActive" in ne && t(9, Q = ne.prevButtonActive), "isOneVideoPlaylist" in ne && t(115, Ve = ne.isOneVideoPlaylist), "supportLink" in ne && t(10, ye = ne.supportLink), "customFullscreenSupported" in ne && t(116, Te = ne.customFullscreenSupported), "playNextVideo" in ne && t(11, x = ne.playNextVideo), "playPrevVideo" in ne && t(12, le = ne.playPrevVideo), "repeatPlaylist" in ne && t(117, be = ne.repeatPlaylist), "toggleFullscreen" in ne && t(13, ae = ne.toggleFullscreen), "returnFocus" in ne && t(14, Ue = ne.returnFocus), "seekToInteractive" in ne && t(15, qe = ne.seekToInteractive), "toggleGraph" in ne && t(16, Je = ne.toggleGraph), "playPrevChapter" in ne && t(17, tt = ne.playPrevChapter);
    }, i.$$.update = ()=>{
        if (i.$$.dirty[4] & 512 && t(122, n = j.has(ct.EPISODE_BUTTON)), i.$$.dirty[4] & 512 && t(69, o = j.has(ct.GRAPH_BUTTON)), i.$$.dirty[4] & 512 && t(68, l = j.has(ct.SEEK_TO_INTERACTIVE_BUTTON)), i.$$.dirty[4] & 512 && t(67, s = j.has(ct.PLAY_BUTTON)), i.$$.dirty[4] & 512 && t(66, a = j.has(ct.REPLAY_BUTTON)), i.$$.dirty[4] & 512 && t(65, r = j.has(ct.PLAY_PREV_CHAPTER_BUTTON)), i.$$.dirty[0] & 16 | i.$$.dirty[4] & 257 && t(52, Qi = we ? te === Ot.PLAYING : _ === (0, _esnextEsmJs.PlaybackState).PLAYING), i.$$.dirty[4] & 128 && t(18, hi = T.value !== "off"), i.$$.dirty[0] & 16 | i.$$.dirty[4] & 64 && t(19, Ci = Z && !we || Nt), i.$$.dirty[0] & 16 | i.$$.dirty[4] & 64 && t(20, Pi = !Z || Nt || we), i.$$.dirty[3] & 1073741824 && t(118, Ni = on(h, Ct.M)), i.$$.dirty[0] & 272 | i.$$.dirty[3] & 1075838976 && t(53, Si = ee && on(h, Ct.M) && !we && R), i.$$.dirty[0] & 528 | i.$$.dirty[3] & 1075838976 && t(54, Zi = ee && on(h, Ct.M) && !we && Q), i.$$.dirty[1] & 131072 | i.$$.dirty[3] & 1073741824 | i.$$.dirty[4] & 24 && t(21, ei = v !== (0, _esnextEsmJs.ChromecastState).NOT_AVAILABLE && !(W && N === vn.DocumentPictureInPicture) && on(h, Ct.M) && !Nt), i.$$.dirty[3] & 1073741824 | i.$$.dirty[4] & 32 && t(22, ai = X.length > 0 && on(h, Ct.M)), i.$$.dirty[3] & 1073741824 && t(23, Ti = on(h, Ct.S)), i.$$.dirty[3] & 1048576 && t(24, Ft = !Y), i.$$.dirty[3] & 1083179008 | i.$$.dirty[4] & 24 && t(25, yt = at.features.fullscreen && (Y || on(h, Ct.S)) && !(W && N === vn.DocumentPictureInPicture) && (Nt ? Te : !0)), i.$$.dirty[0] & 16 | i.$$.dirty[1] & 65536 && t(26, Ut = (!g || we) && !(at.features.interactiveHideTime && Nt)), i.$$.dirty[4] & 4 && t(55, zi = P.width > 100), i.$$.dirty[0] & 16 | i.$$.dirty[1] & 65536 | i.$$.dirty[3] & 570425344 && t(27, Xi = !we && !g && !!Tt?.length && Ni && !n), i.$$.dirty[1] & 1048576 | i.$$.dirty[4] & 2 && t(28, ti = !S || A), i.$$.dirty[4] & 1 && t(57, qi = _ === (0, _esnextEsmJs.PlaybackState).PLAYING ? U("tooltip_pause") : U("tooltip_play")), i.$$.dirty[1] & 524288 && t(58, ji = U(V ? "tooltip_interactive_graph_on" : "tooltip_interactive_graph_off")), i.$$.dirty[0] & 268435456 | i.$$.dirty[4] & 1 && Di(ti, _), i.$$.dirty[0] & 262144 && t(61, Ei = U(hi ? "tooltip_subtitles_on" : "tooltip_subtitles_off")), i.$$.dirty[1] & 262144 && t(62, Li = U(b ? "tooltip_fullscreen_on" : "tooltip_fullscreen_off")), i.$$.dirty[1] & 131072 && t(63, pi = v === (0, _esnextEsmJs.ChromecastState).CONNECTED ? U("tooltip_chromecast_on") : U("tooltip_chromecast_off")), i.$$.dirty[0] & 1207435264 | i.$$.dirty[1] & 131071 && t(119, se = {
            prevButtonWidth: ui ?? 0,
            replayButtonWidth: Ci ? gi : 0,
            playButtonWidth: Pi ? Wt : 0,
            nextButtonWidth: Zt ?? 0,
            playPrevChapterWidth: ki ? ii : 0,
            seekToInteractiveWidth: Nt ? ci : 0,
            interactiveGraphWidth: Bi ? jt ?? 0 : 0,
            liveButtonWidth: g && bi ? bi : 0,
            timeWidth: Ut ? ni : 0,
            episodesWidth: Hi,
            vkLogoWidth: Ft ? Vi : 0,
            volumeWidth: Gi,
            subtitlesWidth: ai ? Fi : 0,
            settingsWidth: Ti ? fi : 0,
            fullscreenWidth: yt ? Wi : 0,
            chromecastWidth: ei ? Ii : 0,
            additionalButtonWidths: f.length ? f.reduce((ne)=>[
                    ...ne,
                    40
                ], []) : []
        }), i.$$.dirty[3] & 201326592 && (!Gt || Gt < se.timeWidth) && t(120, Gt = se.timeWidth), i.$$.dirty[0] & 738197504 | i.$$.dirty[3] & 1275068416) {
            let ne = 0;
            Xi && (on(h, Ct.XL) ? ne = se.timeWidth : ne = Ou);
            const tn = se.prevButtonWidth + se.playButtonWidth + se.nextButtonWidth + se.seekToInteractiveWidth + se.interactiveGraphWidth + se.liveButtonWidth + Gt + ne;
            t(121, Ui = Ut && qt >= tn);
        }
        i.$$.dirty[3] & 1342177280 && t(64, Ji = Ui && on(h, Ct.M)), i.$$.dirty[0] & 8 | i.$$.dirty[3] & 67108864 && dn(se, Me);
    }, t(60, Ai = at.logoType === xn.VK_VIDEO ? U("tooltip_vk_video_logo") : U("tooltip_vk_logo")), [
        Ee,
        fe,
        ve,
        Me,
        we,
        H,
        M,
        pe,
        R,
        Q,
        ye,
        x,
        le,
        ae,
        Ue,
        qe,
        Je,
        tt,
        hi,
        Ci,
        Pi,
        ei,
        ai,
        Ti,
        Ft,
        yt,
        Ut,
        Xi,
        ti,
        qt,
        ui,
        gi,
        Wt,
        Zt,
        ii,
        ci,
        jt,
        bi,
        ni,
        Hi,
        Vi,
        Gi,
        Fi,
        fi,
        Wi,
        Ii,
        f,
        g,
        v,
        b,
        V,
        S,
        Qi,
        Si,
        Zi,
        zi,
        Oi,
        qi,
        ji,
        ri,
        Ai,
        Ei,
        Li,
        pi,
        Ji,
        r,
        a,
        s,
        l,
        o,
        c,
        ie,
        G,
        J,
        ue,
        w,
        oe,
        Re,
        Le,
        kt,
        ot,
        re,
        xe,
        Ye,
        it,
        ft,
        $e,
        Bt,
        wt,
        nt,
        Ht,
        ut,
        Tt,
        lt,
        oi,
        de,
        Ce,
        Ie,
        Pt,
        Mi,
        $t,
        _i,
        Ri,
        Vt,
        Nt,
        Bi,
        li,
        ki,
        wi,
        yi,
        si,
        mn,
        Kt,
        Y,
        ee,
        Ve,
        Te,
        be,
        Ni,
        se,
        Gt,
        Ui,
        n,
        h,
        _,
        A,
        P,
        N,
        W,
        X,
        Z,
        T,
        te,
        j,
        Ln,
        Vn,
        hn,
        Sn,
        rn,
        en,
        In,
        $,
        _t,
        Mn,
        Rn,
        Bn,
        to,
        io,
        no,
        oo,
        lo,
        Fn,
        so
    ];
}
class G4 extends ke {
    constructor(e){
        super(), _e(this, e, j4, Z4, ge, {
            bottomHidden: 1,
            bottomNoSmooth: 2,
            showControls: 3,
            controlsElementRef: 0,
            isAds: 4,
            canRewindLive: 5,
            logoClickable: 6,
            logoHidden: 113,
            videoLogoUrl: 7,
            showNextPrevButtons: 114,
            nextButtonActive: 8,
            prevButtonActive: 9,
            isOneVideoPlaylist: 115,
            supportLink: 10,
            customFullscreenSupported: 116,
            playNextVideo: 11,
            playPrevVideo: 12,
            repeatPlaylist: 117,
            toggleFullscreen: 13,
            returnFocus: 14,
            seekToInteractive: 15,
            toggleGraph: 16,
            playPrevChapter: 17
        }, C4, [
            -1,
            -1,
            -1,
            -1,
            -1,
            -1
        ]);
    }
}
function K4(i) {
    let e, t, n, o;
    return {
        c () {
            e = I("svg"), t = I("g"), n = I("path"), o = I("path"), u(n, "d", "M0 0h24v24H0z"), u(o, "fill", "#fff"), u(o, "d", "M8.695 8.105 5.301 4.71a1 1 0 0 1 1.414-1.415L20.7 17.285a1 1 0 0 1-1.414 1.415L16 15.41V20a1 1 0 0 1-1 1c-.641 0-1.258-.25-1.72-.695L7.79 15H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2.765l.93-.895Zm2.88-2.77 1.704-1.642A2.481 2.481 0 0 1 15 3a1 1 0 0 1 1 1v5.76l-4.426-4.426Z"), u(t, "fill", "none"), u(t, "fill-rule", "evenodd"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "width", "24"), u(e, "height", "24"), u(e, "aria-hidden", "true"), u(e, "data-testid", "muted-icon");
        },
        m (l, s) {
            C(l, e, s), d(e, t), d(t, n), d(t, o);
        },
        p: K,
        i: K,
        o: K,
        d (l) {
            l && y(e);
        }
    };
}
class Y4 extends ke {
    constructor(e){
        super(), _e(this, e, null, K4, ge, {});
    }
}
function Q4(i) {
    Fe(i, "v-6gmlbk", ".container.v-6gmlbk{display:flex;align-items:center}.expanded.v-6gmlbk{background-color:rgba(0, 0, 0, 0.56);border-radius:6px}.text.v-6gmlbk{font-size:15px;margin-left:8px}");
}
function Ks(i) {
    let e;
    return {
        c () {
            e = k("span"), e.textContent = `${U("mobile_unmute")}`, u(e, "class", "text v-6gmlbk");
        },
        m (t, n) {
            C(t, e, n);
        },
        p: K,
        d (t) {
            t && y(e);
        }
    };
}
function X4(i) {
    let e, t, n, o;
    var l = i[3];
    function s(r) {
        return {};
    }
    l && (t = fn(l, s()));
    let a = i[0] && Ks();
    return {
        c () {
            e = k("div"), t && D(t.$$.fragment), n = B(), a && a.c(), u(e, "class", "container v-6gmlbk"), u(e, "aria-hidden", "true"), L(e, "expanded", i[0]);
        },
        m (r, c) {
            C(r, e, c), t && z(t, e, null), d(e, n), a && a.m(e, null), o = !0;
        },
        p (r, c) {
            if (c & 8 && l !== (l = r[3])) {
                if (t) {
                    me();
                    const f = t;
                    p(f.$$.fragment, 1, 0, ()=>{
                        O(f, 1);
                    }), he();
                }
                l ? (t = fn(l, s()), D(t.$$.fragment), m(t.$$.fragment, 1), z(t, e, n)) : t = null;
            }
            r[0] ? a ? a.p(r, c) : (a = Ks(), a.c(), a.m(e, null)) : a && (a.d(1), a = null), (!o || c & 1) && L(e, "expanded", r[0]);
        },
        i (r) {
            o || (t && m(t.$$.fragment, r), o = !0);
        },
        o (r) {
            t && p(t.$$.fragment, r), o = !1;
        },
        d (r) {
            r && y(e), t && O(t), a && a.d();
        }
    };
}
function J4(i) {
    let e, t;
    return e = new mi({
        props: {
            testId: i[0] ? "btn-mobile-unmuted" : "btn-mobile-muted",
            click: i[1],
            ariaLabel: i[2],
            $$slots: {
                default: [
                    X4
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 1 && (l.testId = n[0] ? "btn-mobile-unmuted" : "btn-mobile-muted"), o & 2 && (l.click = n[1]), o & 4 && (l.ariaLabel = n[2]), o & 41 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function x4(i, e, t) {
    let { muted: n = !1 } = e, { expanded: o = !1 } = e, { click: l = (0, _esnextEsmJs1.noop) } = e, s, a;
    return i.$$set = (r)=>{
        "muted" in r && t(4, n = r.muted), "expanded" in r && t(0, o = r.expanded), "click" in r && t(1, l = r.click);
    }, i.$$.update = ()=>{
        i.$$.dirty & 16 && t(2, s = U(n ? "tooltip_volume" : "tooltip_volume_muted")), i.$$.dirty & 1 && t(3, a = o ? Oo : Y4);
    }, [
        o,
        l,
        s,
        a,
        n
    ];
}
class I1 extends ke {
    constructor(e){
        super(), _e(this, e, x4, J4, ge, {
            muted: 4,
            expanded: 0,
            click: 1
        }, Q4);
    }
}
function $4(i) {
    let e, t, n, o;
    return {
        c () {
            e = I("svg"), t = I("path"), n = I("path"), o = I("path"), u(t, "fill", i[1]), u(t, "clip-rule", "evenodd"), u(t, "d", "M7.662 4h6.676c.808 0 1.469 0 2.006.044.556.045 1.058.142 1.526.381a3.9 3.9 0 0 1 1.705 1.704c.239.47.336.971.381 1.527C20 8.193 20 8.854 20 9.662V11.1a.9.9 0 0 1-1.8 0V9.7c0-.855 0-1.442-.038-1.897-.036-.445-.103-.684-.19-.856a2.1 2.1 0 0 0-.919-.918c-.172-.088-.411-.155-.856-.191C15.742 5.8 15.155 5.8 14.3 5.8H7.7c-.855 0-1.442 0-1.897.038-.445.036-.684.103-.856.19a2.1 2.1 0 0 0-.918.919c-.088.172-.155.411-.191.856C3.8 8.258 3.8 8.845 3.8 9.7v2.646c0 .855 0 1.442.038 1.897.036.445.103.683.19.856a2.1 2.1 0 0 0 .919.918c.172.088.411.155.856.191.455.037 1.042.038 1.897.038h2.4a.9.9 0 0 1 0 1.8H7.662c-.808 0-1.469 0-2.006-.044-.556-.045-1.058-.142-1.527-.381a3.9 3.9 0 0 1-1.704-1.704c-.239-.47-.336-.972-.381-1.527C2 13.852 2 13.192 2 12.384V9.662c0-.808 0-1.469.044-2.006.045-.556.142-1.058.381-1.527A3.9 3.9 0 0 1 4.13 4.425c.47-.239.971-.336 1.527-.381C6.193 4 6.854 4 7.662 4ZM13 16.8c0-.98 0-1.47.19-1.845a1.75 1.75 0 0 1 .766-.764C14.33 14 14.82 14 15.8 14h3.4c.98 0 1.47 0 1.845.19.329.168.596.436.764.766.191.374.191.864.191 1.844v.4c0 .98 0 1.47-.19 1.845a1.75 1.75 0 0 1-.765.764C20.67 20 20.18 20 19.2 20h-3.4c-.98 0-1.47 0-1.845-.19a1.75 1.75 0 0 1-.764-.765C13 18.67 13 18.18 13 17.2v-.4Z"), u(n, "fill", i[1]), u(n, "d", "m11.643 12.37-.007-.006L9.073 9.8H10.1a.9.9 0 1 0 0-1.8H6.9a.9.9 0 0 0-.9.9v3.2a.9.9 0 0 0 1.8 0v-1.022l2.53 2.524.134.134a.9.9 0 0 0 1.272-1.272l-.093-.094Z"), L(n, "hidden", !i[0]), u(o, "fill", i[1]), u(o, "d", "M6.357 9.63a.865.865 0 0 0 .007.006L8.927 12.2H7.9a.9.9 0 1 0 0 1.8h3.2a.9.9 0 0 0 .9-.9V9.9a.9.9 0 0 0-1.8 0v1.022L7.67 8.397l-.134-.133a.9.9 0 0 0-1.272 1.272l.093.094Z"), L(o, "hidden", i[0]), u(e, "width", "24"), u(e, "height", "24"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
        },
        m (l, s) {
            C(l, e, s), d(e, t), d(e, n), d(e, o);
        },
        p (l, [s]) {
            s & 2 && u(t, "fill", l[1]), s & 2 && u(n, "fill", l[1]), s & 1 && L(n, "hidden", !l[0]), s & 2 && u(o, "fill", l[1]), s & 1 && L(o, "hidden", l[0]);
        },
        i: K,
        o: K,
        d (l) {
            l && y(e);
        }
    };
}
function em(i, e, t) {
    let n, { isActive: o = !1 } = e;
    return i.$$set = (l)=>{
        "isActive" in l && t(0, o = l.isActive);
    }, i.$$.update = ()=>{
        i.$$.dirty & 1 && t(1, n = o ? "#2688EB" : "#fff");
    }, [
        o,
        n
    ];
}
class tm extends ke {
    constructor(e){
        super(), _e(this, e, em, $4, ge, {
            isActive: 0
        });
    }
}
function im(i) {
    let e, t;
    return e = new tm({
        props: {
            isActive: i[0]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 1 && (l.isActive = n[0]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function nm(i) {
    let e, t;
    return e = new mi({
        props: {
            testId: "btn-pip",
            ariaLabel: U("menu_pip"),
            click: i[1],
            $$slots: {
                default: [
                    im
                ]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, [o]) {
            const l = {};
            o & 2 && (l.click = n[1]), o & 5 && (l.$$scope = {
                dirty: o,
                ctx: n
            }), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function om(i, e, t) {
    let { isPictureInPictureActive: n = !1 } = e, { click: o = (0, _esnextEsmJs1.noop) } = e;
    return i.$$set = (l)=>{
        "isPictureInPictureActive" in l && t(0, n = l.isPictureInPictureActive), "click" in l && t(1, o = l.click);
    }, [
        n,
        o
    ];
}
class lm extends ke {
    constructor(e){
        super(), _e(this, e, om, nm, ge, {
            isPictureInPictureActive: 0,
            click: 1
        });
    }
}
function sm(i) {
    Fe(i, "v-1tcstu3", ".wrapper-bottom.v-1tcstu3.v-1tcstu3{pointer-events:none;position:absolute;width:100%;bottom:0;left:0;height:var(--controls-gradient-height);background:var(--controls-gradient);transition:transform var(--controls-transition-duration) var(--controls-transition-fn);display:flex;flex-direction:column;justify-content:flex-end;box-sizing:border-box;padding:0 4px 8px}.wrapper-bottom.v-1tcstu3>.v-1tcstu3{pointer-events:auto}.wrapper-bottom.ads-timeline-mobile.v-1tcstu3.v-1tcstu3{height:9px;padding:0 4px 4px}.wrapper-middle.v-1tcstu3.v-1tcstu3{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:opacity var(--controls-transition-duration);display:flex;align-items:center}.wrapper-top-right.v-1tcstu3.v-1tcstu3{position:absolute;top:4px;right:8px;transition:opacity var(--controls-transition-duration);display:flex}.wrapper-top-left.v-1tcstu3.v-1tcstu3{position:absolute;top:4px;left:8px}.wrapper-middle-left.v-1tcstu3.v-1tcstu3,.wrapper-middle-left-second.v-1tcstu3.v-1tcstu3,.wrapper-middle-right.v-1tcstu3.v-1tcstu3{position:absolute;top:50%;transform:translateY(-50%);height:44px;width:44px;border-radius:12px;background-color:rgba(0, 0, 0, 0.56);transition:opacity var(--controls-transition-duration);display:flex;align-items:center;justify-content:center}.wrapper-middle-left.v-1tcstu3.v-1tcstu3{left:12px}.wrapper-middle-left-second.v-1tcstu3.v-1tcstu3{left:64px}.wrapper-middle-right.v-1tcstu3.v-1tcstu3{right:12px}.controls.v-1tcstu3.v-1tcstu3{width:100%;display:flex;align-items:center;height:var(--controls-height);white-space:nowrap;font-size:13px;transition:transform var(--controls-transition-duration) var(--controls-transition-fn);will-change:transform;padding:0 4px;box-sizing:border-box}.controls.v-1tcstu3 > *:not(:first-child){margin-left:8px}.hidden.v-1tcstu3.v-1tcstu3{visibility:hidden;opacity:0}.controls-hidden.v-1tcstu3.v-1tcstu3{visibility:visible;transform:translateY(100%)}.wrapper-bottom.no-smooth.v-1tcstu3.v-1tcstu3{transition:none}.settings-mobile.v-1tcstu3.v-1tcstu3{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:opacity var(--controls-transition-duration);display:flex;align-items:center;max-width:320px;width:90%}.overlay-mobile.v-1tcstu3.v-1tcstu3{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, .3);pointer-events:none;transition:opacity var(--controls-transition-duration)}@media screen and (orientation: portrait){.wrapper-top-right.fullscreen.v-1tcstu3.v-1tcstu3{top:16px}.wrapper-top-left.fullscreen.v-1tcstu3.v-1tcstu3{top:16px}.controls-wrapper.fullscreen.v-1tcstu3.v-1tcstu3{position:absolute;bottom:30px;width:calc(100% - 8px)}}@media screen and (orientation: landscape){.wrapper-top-left.fullscreen.v-1tcstu3.v-1tcstu3{top:12px;left:44px}.wrapper-top-right.fullscreen.v-1tcstu3.v-1tcstu3{top:12px;right:44px}.wrapper-middle-left.fullscreen.v-1tcstu3.v-1tcstu3{left:44px}.wrapper-middle-left-second.fullscreen.v-1tcstu3.v-1tcstu3{left:96px}.wrapper-middle-right.fullscreen.v-1tcstu3.v-1tcstu3{right:44px}.controls-wrapper.fullscreen.v-1tcstu3.v-1tcstu3{position:absolute;left:36px;right:36px;bottom:32px;width:calc(100% - 72px)}}");
}
function Ys(i, e, t) {
    const n = i.slice();
    return n[137] = e[t].iconUrl, n[138] = e[t].ariaLabel, n[139] = e[t].testId, n[140] = e[t].onClick, n[141] = e[t].tooltip, n;
}
function Qs(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v, b, _, V, A, S = (!i[54] || i[56]) && Xs(i), P = Mt(i[59]), N = [];
    for(let w = 0; w < P.length; w += 1)N[w] = Js(Ys(i, P, w));
    const W = (w)=>p(N[w], 1, 1, ()=>{
            N[w] = null;
        });
    let X = i[33] && xs(i), Z = i[34] && $s(i), T = i[60] && ea(), te = i[36] && ta(i), j = i[8] && ia(i), ie = i[31] && na(i), G = i[30] && oa(i), J = i[8] && la(i), ue = i[97] && !i[26] && sa(i);
    return {
        c () {
            e = k("div"), t = B(), n = k("div"), S && S.c(), o = B(), l = k("div");
            for(let w = 0; w < N.length; w += 1)N[w].c();
            s = B(), X && X.c(), a = B(), Z && Z.c(), r = B(), T && T.c(), c = B(), te && te.c(), f = B(), h = k("div"), j && j.c(), g = B(), ie && ie.c(), v = B(), G && G.c(), b = B(), J && J.c(), _ = B(), ue && ue.c(), V = ht(), u(e, "class", "overlay-mobile v-1tcstu3"), L(e, "hidden", !i[39]), u(n, "class", "wrapper-top-left v-1tcstu3"), L(n, "hidden", !i[3]), L(n, "fullscreen", i[55]), u(l, "class", "wrapper-top-right v-1tcstu3"), L(l, "hidden", !i[3] && !i[24]), L(l, "fullscreen", i[55]), u(h, "class", "wrapper-middle v-1tcstu3"), L(h, "hidden", !i[3] || i[26]);
        },
        m (w, oe) {
            C(w, e, oe), C(w, t, oe), C(w, n, oe), S && S.m(n, null), C(w, o, oe), C(w, l, oe);
            for(let fe = 0; fe < N.length; fe += 1)N[fe] && N[fe].m(l, null);
            d(l, s), X && X.m(l, null), d(l, a), Z && Z.m(l, null), d(l, r), T && T.m(l, null), d(l, c), te && te.m(l, null), C(w, f, oe), C(w, h, oe), j && j.m(h, null), d(h, g), ie && ie.m(h, null), d(h, v), G && G.m(h, null), d(h, b), J && J.m(h, null), C(w, _, oe), ue && ue.m(w, oe), C(w, V, oe), A = !0;
        },
        p (w, oe) {
            if ((!A || oe[1] & 256) && L(e, "hidden", !w[39]), !w[54] || w[56] ? S ? (S.p(w, oe), oe[1] & 41943040 && m(S, 1)) : (S = Xs(w), S.c(), m(S, 1), S.m(n, null)) : S && (me(), p(S, 1, 1, ()=>{
                S = null;
            }), he()), (!A || oe[0] & 8) && L(n, "hidden", !w[3]), (!A || oe[1] & 16777216) && L(n, "fullscreen", w[55]), oe[1] & 268435456) {
                P = Mt(w[59]);
                let fe;
                for(fe = 0; fe < P.length; fe += 1){
                    const ve = Ys(w, P, fe);
                    N[fe] ? (N[fe].p(ve, oe), m(N[fe], 1)) : (N[fe] = Js(ve), N[fe].c(), m(N[fe], 1), N[fe].m(l, s));
                }
                for(me(), fe = P.length; fe < N.length; fe += 1)W(fe);
                he();
            }
            w[33] ? X ? (X.p(w, oe), oe[1] & 4 && m(X, 1)) : (X = xs(w), X.c(), m(X, 1), X.m(l, a)) : X && (me(), p(X, 1, 1, ()=>{
                X = null;
            }), he()), w[34] ? Z ? (Z.p(w, oe), oe[1] & 8 && m(Z, 1)) : (Z = $s(w), Z.c(), m(Z, 1), Z.m(l, r)) : Z && (me(), p(Z, 1, 1, ()=>{
                Z = null;
            }), he()), w[60] ? T ? oe[1] & 536870912 && m(T, 1) : (T = ea(), T.c(), m(T, 1), T.m(l, c)) : T && (me(), p(T, 1, 1, ()=>{
                T = null;
            }), he()), w[36] ? te ? (te.p(w, oe), oe[1] & 32 && m(te, 1)) : (te = ta(w), te.c(), m(te, 1), te.m(l, null)) : te && (me(), p(te, 1, 1, ()=>{
                te = null;
            }), he()), (!A || oe[0] & 16777224) && L(l, "hidden", !w[3] && !w[24]), (!A || oe[1] & 16777216) && L(l, "fullscreen", w[55]), w[8] ? j ? (j.p(w, oe), oe[0] & 256 && m(j, 1)) : (j = ia(w), j.c(), m(j, 1), j.m(h, g)) : j && (me(), p(j, 1, 1, ()=>{
                j = null;
            }), he()), w[31] ? ie ? (ie.p(w, oe), oe[1] & 1 && m(ie, 1)) : (ie = na(w), ie.c(), m(ie, 1), ie.m(h, v)) : ie && (me(), p(ie, 1, 1, ()=>{
                ie = null;
            }), he()), w[30] ? G ? (G.p(w, oe), oe[0] & 1073741824 && m(G, 1)) : (G = oa(w), G.c(), m(G, 1), G.m(h, b)) : G && (me(), p(G, 1, 1, ()=>{
                G = null;
            }), he()), w[8] ? J ? (J.p(w, oe), oe[0] & 256 && m(J, 1)) : (J = la(w), J.c(), m(J, 1), J.m(h, null)) : J && (me(), p(J, 1, 1, ()=>{
                J = null;
            }), he()), (!A || oe[0] & 67108872) && L(h, "hidden", !w[3] || w[26]), w[97] && !w[26] ? ue ? (ue.p(w, oe), oe[0] & 67108864 && m(ue, 1)) : (ue = sa(w), ue.c(), m(ue, 1), ue.m(V.parentNode, V)) : ue && (me(), p(ue, 1, 1, ()=>{
                ue = null;
            }), he());
        },
        i (w) {
            if (!A) {
                m(S);
                for(let oe = 0; oe < P.length; oe += 1)m(N[oe]);
                m(X), m(Z), m(T), m(te), m(j), m(ie), m(G), m(J), m(ue), A = !0;
            }
        },
        o (w) {
            p(S), N = N.filter(Boolean);
            for(let oe = 0; oe < N.length; oe += 1)p(N[oe]);
            p(X), p(Z), p(T), p(te), p(j), p(ie), p(G), p(J), p(ue), A = !1;
        },
        d (w) {
            w && (y(e), y(t), y(n), y(o), y(l), y(f), y(h), y(_), y(V)), S && S.d(), sn(N, w), X && X.d(), Z && Z.d(), T && T.d(), te && te.d(), j && j.d(), ie && ie.d(), G && G.d(), J && J.d(), ue && ue.d(w);
        }
    };
}
function Xs(i) {
    let e, t;
    return e = new I1({
        props: {
            muted: i[57],
            expanded: i[54] && !i[73] && i[58],
            click: i[104]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[1] & 67108864 && (l.muted = n[57]), o[1] & 142606336 && (l.expanded = n[54] && !n[73] && n[58]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Js(i) {
    let e, t;
    return e = new V1({
        props: {
            iconUrl: i[137],
            ariaLabel: i[138] ?? i[141],
            testId: i[139],
            onClick: i[140]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[1] & 268435456 && (l.iconUrl = n[137]), o[1] & 268435456 && (l.ariaLabel = n[138] ?? n[141]), o[1] & 268435456 && (l.testId = n[139]), o[1] & 268435456 && (l.onClick = n[140]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function xs(i) {
    let e, t;
    return e = new w1({
        props: {
            isMobile: !0,
            click: i[102],
            state: i[25]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 33554432 && (l.state = n[25]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function $s(i) {
    let e, t;
    return e = new lm({
        props: {
            click: i[103],
            isPictureInPictureActive: i[23]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 8388608 && (l.isPictureInPictureActive = n[23]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function ea(i) {
    let e, t;
    return e = new cl({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function ta(i) {
    let e, t;
    return e = new k1({
        props: {
            click: i[67],
            logoClickable: i[6],
            videoLogoUrl: i[7]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 64 && (l.logoClickable = n[6]), o[0] & 128 && (l.videoLogoUrl = n[7]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function ia(i) {
    let e, t;
    return e = new Do({
        props: {
            click: i[13],
            type: "prev",
            disabled: !i[10],
            isMobile: !0
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 8192 && (l.click = n[13]), o[0] & 1024 && (l.disabled = !n[10]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function na(i) {
    let e, t;
    return e = new ml({
        props: {
            disabled: i[51],
            click: i[66],
            isMobile: !0,
            isPlaying: i[28]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[1] & 1048576 && (l.disabled = n[51]), o[0] & 268435456 && (l.isPlaying = n[28]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function oa(i) {
    let e, t;
    return e = new hl({
        props: {
            disabled: i[50],
            click: i[105],
            isMobile: !0
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[1] & 524288 && (l.disabled = n[50]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function la(i) {
    let e, t;
    return e = new Do({
        props: {
            click: i[12],
            type: "next",
            disabled: !i[9],
            isMobile: !0
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 4096 && (l.click = n[12]), o[0] & 512 && (l.disabled = !n[9]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function sa(i) {
    let e, t, n, o, l = i[100] && am(i), s = i[98] && rm(i), a = i[99] && um(i);
    return {
        c () {
            l && l.c(), e = B(), s && s.c(), t = B(), a && a.c(), n = ht();
        },
        m (r, c) {
            l && l.m(r, c), C(r, e, c), s && s.m(r, c), C(r, t, c), a && a.m(r, c), C(r, n, c), o = !0;
        },
        p (r, c) {
            r[100] && l.p(r, c), r[98] && s.p(r, c), r[99] && a.p(r, c);
        },
        i (r) {
            o || (m(l), m(s), m(a), o = !0);
        },
        o (r) {
            p(l), p(s), p(a), o = !1;
        },
        d (r) {
            r && (y(e), y(t), y(n)), l && l.d(r), s && s.d(r), a && a.d(r);
        }
    };
}
function am(i) {
    let e, t, n;
    return t = new L1({
        props: {
            hidden: !i[3],
            disabled: i[49],
            click: i[18]
        }
    }), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "wrapper-middle-left v-1tcstu3"), L(e, "fullscreen", i[55]), L(e, "hidden", !i[3]);
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        p (o, l) {
            const s = {};
            l[0] & 8 && (s.hidden = !o[3]), l[1] & 262144 && (s.disabled = o[49]), l[0] & 262144 && (s.click = o[18]), t.$set(s), (!n || l[1] & 16777216) && L(e, "fullscreen", o[55]), (!n || l[0] & 8) && L(e, "hidden", !o[3]);
        },
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function rm(i) {
    let e, t, n;
    return t = new E1({
        props: {
            hidden: !i[3] && !i[61],
            disabled: i[53],
            click: i[17],
            graphIsOpened: i[61]
        }
    }), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", bu(i[100] ? "wrapper-middle-left-second" : "wrapper-middle-left") + " v-1tcstu3"), L(e, "fullscreen", i[55]), L(e, "hidden", !i[3] && !i[61]);
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        p (o, l) {
            const s = {};
            l[0] & 8 | l[1] & 1073741824 && (s.hidden = !o[3] && !o[61]), l[1] & 4194304 && (s.disabled = o[53]), l[0] & 131072 && (s.click = o[17]), l[1] & 1073741824 && (s.graphIsOpened = o[61]), t.$set(s), (!n || l[1] & 16777216) && L(e, "fullscreen", o[55]), (!n || l[0] & 8 | l[1] & 1073741824) && L(e, "hidden", !o[3] && !o[61]);
        },
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function um(i) {
    let e, t, n;
    return t = new A1({
        props: {
            hidden: !i[3],
            disabled: i[52],
            click: i[16]
        }
    }), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "wrapper-middle-right v-1tcstu3"), L(e, "fullscreen", i[55]), L(e, "hidden", !i[3]);
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        p (o, l) {
            const s = {};
            l[0] & 8 && (s.hidden = !o[3]), l[1] & 2097152 && (s.disabled = o[52]), l[0] & 65536 && (s.click = o[16]), t.$set(s), (!n || l[1] & 16777216) && L(e, "fullscreen", o[55]), (!n || l[0] & 8) && L(e, "hidden", !o[3]);
        },
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function aa(i) {
    let e, t, n, o, l, s = i[56] && ra(i), a = i[29] && ua(i);
    return o = new P1({
        props: {
            position: i[62],
            duration: i[63]
        }
    }), {
        c () {
            s && s.c(), e = B(), a && a.c(), t = B(), n = k("div"), D(o.$$.fragment), u(n, "class", "wrapper-bottom ads-timeline-mobile v-1tcstu3"), L(n, "fullscreen", i[55]);
        },
        m (r, c) {
            s && s.m(r, c), C(r, e, c), a && a.m(r, c), C(r, t, c), C(r, n, c), z(o, n, null), l = !0;
        },
        p (r, c) {
            r[56] ? s ? (s.p(r, c), c[1] & 33554432 && m(s, 1)) : (s = ra(r), s.c(), m(s, 1), s.m(e.parentNode, e)) : s && (me(), p(s, 1, 1, ()=>{
                s = null;
            }), he()), r[29] ? a ? (a.p(r, c), c[0] & 536870912 && m(a, 1)) : (a = ua(r), a.c(), m(a, 1), a.m(t.parentNode, t)) : a && (me(), p(a, 1, 1, ()=>{
                a = null;
            }), he());
            const f = {};
            c[2] & 1 && (f.position = r[62]), c[2] & 2 && (f.duration = r[63]), o.$set(f), (!l || c[1] & 16777216) && L(n, "fullscreen", r[55]);
        },
        i (r) {
            l || (m(s), m(a), m(o.$$.fragment, r), l = !0);
        },
        o (r) {
            p(s), p(a), p(o.$$.fragment, r), l = !1;
        },
        d (r) {
            r && (y(e), y(t), y(n)), s && s.d(r), a && a.d(r), O(o);
        }
    };
}
function ra(i) {
    let e, t, n;
    return t = new I1({
        props: {
            muted: i[57],
            expanded: !1,
            click: i[104]
        }
    }), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "wrapper-top-right v-1tcstu3"), L(e, "fullscreen", i[55]);
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        p (o, l) {
            const s = {};
            l[1] & 67108864 && (s.muted = o[57]), t.$set(s), (!n || l[1] & 16777216) && L(e, "fullscreen", o[55]);
        },
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function ua(i) {
    let e, t, n;
    return t = new ml({
        props: {
            disabled: i[51],
            click: i[66],
            isMobile: !0,
            isPlaying: !i[29]
        }
    }), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "wrapper-middle v-1tcstu3");
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        p (o, l) {
            const s = {};
            l[1] & 1048576 && (s.disabled = o[51]), l[0] & 536870912 && (s.isPlaying = !o[29]), t.$set(s);
        },
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function cm(i) {
    let e, t, n;
    function o(s) {
        i[120](s);
    }
    let l = {
        disabled: i[50],
        $$slots: {
            default: [
                fm
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[42] !== void 0 && (l.width = i[42]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[1] & 524288 && (r.disabled = s[50]), a[1] & 524288 | a[4] & 1048576 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[1] & 2048 && (t = !0, r.width = s[42], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function fm(i) {
    let e, t;
    return e = new hl({
        props: {
            disabled: i[50],
            click: i[96]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[1] & 524288 && (l.disabled = n[50]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function ca(i) {
    let e, t, n;
    function o(s) {
        i[121](s);
    }
    let l = {
        $$slots: {
            default: [
                dm
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[43] !== void 0 && (l.width = i[43]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[0] & 524288 | a[1] & 131072 | a[4] & 1048576 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[1] & 4096 && (t = !0, r.width = s[43], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function dm(i) {
    let e, t;
    return e = new y1({
        props: {
            isActiveLive: i[19],
            isMobile: !0,
            ariaLabel: i[48]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 524288 && (l.isActiveLive = n[19]), o[1] & 131072 && (l.ariaLabel = n[48]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function fa(i) {
    let e, t, n;
    function o(s) {
        i[122](s);
    }
    let l = {
        showDuration: i[32],
        position: i[4] ? i[62] : i[64],
        duration: i[4] ? i[63] : i[65],
        isMobile: !0
    };
    return i[44] !== void 0 && (l.width = i[44]), e = new p1({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[1] & 2 && (r.showDuration = s[32]), a[0] & 16 | a[2] & 5 && (r.position = s[4] ? s[62] : s[64]), a[0] & 16 | a[2] & 10 && (r.duration = s[4] ? s[63] : s[65]), !t && a[1] & 8192 && (t = !0, r.width = s[44], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function da(i) {
    let e, t, n, o;
    return n = new T1({
        props: {
            position: i[64],
            duration: i[65],
            timeCodes: i[86]
        }
    }), {
        c () {
            e = k("div"), e.textContent = "\xb7", t = B(), D(n.$$.fragment), u(e, "aria-hidden", "true");
        },
        m (l, s) {
            C(l, e, s), C(l, t, s), z(n, l, s), o = !0;
        },
        p (l, s) {
            const a = {};
            s[2] & 4 && (a.position = l[64]), s[2] & 8 && (a.duration = l[65]), n.$set(a);
        },
        i (l) {
            o || (m(n.$$.fragment, l), o = !0);
        },
        o (l) {
            p(n.$$.fragment, l), o = !1;
        },
        d (l) {
            l && (y(e), y(t)), O(n, l);
        }
    };
}
function mm(i) {
    let e, t, n = i[40] && da(i);
    return {
        c () {
            n && n.c(), e = ht();
        },
        m (o, l) {
            n && n.m(o, l), C(o, e, l), t = !0;
        },
        p (o, l) {
            o[40] ? n ? (n.p(o, l), l[1] & 512 && m(n, 1)) : (n = da(o), n.c(), m(n, 1), n.m(e.parentNode, e)) : n && (me(), p(n, 1, 1, ()=>{
                n = null;
            }), he());
        },
        i (o) {
            t || (m(n), t = !0);
        },
        o (o) {
            p(n), t = !1;
        },
        d (o) {
            o && y(e), n && n.d(o);
        }
    };
}
function ma(i) {
    let e, t, n;
    function o(s) {
        i[124](s);
    }
    let l = {
        $$slots: {
            default: [
                hm
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[46] !== void 0 && (l.width = i[46]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[4] & 1048576 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[1] & 32768 && (t = !0, r.width = s[46], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function hm(i) {
    let e, t;
    return e = new cl({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function ha(i) {
    let e, t, n;
    function o(s) {
        i[125](s);
    }
    let l = {
        $$slots: {
            default: [
                pm
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return i[47] !== void 0 && (l.width = i[47]), e = new Rt({
        props: l
    }), We.push(()=>bt(e, "width", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[0] & 16384 | a[1] & 16777216 | a[4] & 1048576 && (r.$$scope = {
                dirty: a,
                ctx: s
            }), !t && a[1] & 65536 && (t = !0, r.width = s[47], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function pm(i) {
    let e, t;
    return e = new v1({
        props: {
            click: i[14],
            isFullscreen: i[55]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 16384 && (l.click = n[14]), o[1] & 16777216 && (l.isFullscreen = n[55]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function pa(i) {
    let e, t, n;
    return t = new h1({
        props: {
            supportLink: i[11],
            returnFocus: i[15]
        }
    }), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "settings-mobile v-1tcstu3");
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        p (o, l) {
            const s = {};
            l[0] & 2048 && (s.supportLink = o[11]), l[0] & 32768 && (s.returnFocus = o[15]), t.$set(s);
        },
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function gm(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v, b, _, V, A, S = !i[4] && Qs(i), P = i[4] && i[27] !== Ot.INACTIVE && aa(i), N = i[97] && cm(i), W = !i[4] && i[21] && ca(i), X = i[38] && fa(i);
    function Z(G) {
        i[123](G);
    }
    let T = {
        className: "w-max",
        disabled: !i[40],
        $$slots: {
            default: [
                mm
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    i[45] !== void 0 && (T.width = i[45]), c = new Rt({
        props: T
    }), We.push(()=>bt(c, "width", Z));
    let te = i[35] && ma(i), j = i[37] && ha(i);
    b = new S1({
        props: {
            isAds: i[4],
            canRewindLive: i[5],
            isRewindableLive: i[20]
        }
    });
    let ie = i[22] && pa(i);
    return {
        c () {
            S && S.c(), e = B(), P && P.c(), t = B(), n = k("div"), o = k("div"), l = k("div"), N && N.c(), s = B(), W && W.c(), a = B(), X && X.c(), r = B(), D(c.$$.fragment), h = B(), te && te.c(), g = B(), j && j.c(), v = B(), D(b.$$.fragment), _ = B(), ie && ie.c(), V = ht(), u(l, "class", "controls v-1tcstu3"), L(l, "mobile", !0), u(o, "class", "controls-wrapper v-1tcstu3"), L(o, "fullscreen", i[55]), u(n, "class", "wrapper-bottom v-1tcstu3"), L(n, "hidden", i[1]), L(n, "controls-hidden", !i[3]), L(n, "no-smooth", i[2]), L(n, "mobile", !0);
        },
        m (G, J) {
            S && S.m(G, J), C(G, e, J), P && P.m(G, J), C(G, t, J), C(G, n, J), d(n, o), d(o, l), N && N.m(l, null), d(l, s), W && W.m(l, null), d(l, a), X && X.m(l, null), d(l, r), z(c, l, null), d(l, h), te && te.m(l, null), d(l, g), j && j.m(l, null), i[126](l), d(o, v), z(b, o, null), i[127](n), C(G, _, J), ie && ie.m(G, J), C(G, V, J), A = !0;
        },
        p (G, J) {
            G[4] ? S && (me(), p(S, 1, 1, ()=>{
                S = null;
            }), he()) : S ? (S.p(G, J), J[0] & 16 && m(S, 1)) : (S = Qs(G), S.c(), m(S, 1), S.m(e.parentNode, e)), G[4] && G[27] !== Ot.INACTIVE ? P ? (P.p(G, J), J[0] & 134217744 && m(P, 1)) : (P = aa(G), P.c(), m(P, 1), P.m(t.parentNode, t)) : P && (me(), p(P, 1, 1, ()=>{
                P = null;
            }), he()), G[97] && N.p(G, J), !G[4] && G[21] ? W ? (W.p(G, J), J[0] & 2097168 && m(W, 1)) : (W = ca(G), W.c(), m(W, 1), W.m(l, a)) : W && (me(), p(W, 1, 1, ()=>{
                W = null;
            }), he()), G[38] ? X ? (X.p(G, J), J[1] & 128 && m(X, 1)) : (X = fa(G), X.c(), m(X, 1), X.m(l, r)) : X && (me(), p(X, 1, 1, ()=>{
                X = null;
            }), he());
            const ue = {};
            J[1] & 512 && (ue.disabled = !G[40]), J[1] & 512 | J[2] & 12 | J[4] & 1048576 && (ue.$$scope = {
                dirty: J,
                ctx: G
            }), !f && J[1] & 16384 && (f = !0, ue.width = G[45], gt(()=>f = !1)), c.$set(ue), G[35] ? te ? (te.p(G, J), J[1] & 16 && m(te, 1)) : (te = ma(G), te.c(), m(te, 1), te.m(l, g)) : te && (me(), p(te, 1, 1, ()=>{
                te = null;
            }), he()), G[37] ? j ? (j.p(G, J), J[1] & 64 && m(j, 1)) : (j = ha(G), j.c(), m(j, 1), j.m(l, null)) : j && (me(), p(j, 1, 1, ()=>{
                j = null;
            }), he());
            const w = {};
            J[0] & 16 && (w.isAds = G[4]), J[0] & 32 && (w.canRewindLive = G[5]), J[0] & 1048576 && (w.isRewindableLive = G[20]), b.$set(w), (!A || J[1] & 16777216) && L(o, "fullscreen", G[55]), (!A || J[0] & 2) && L(n, "hidden", G[1]), (!A || J[0] & 8) && L(n, "controls-hidden", !G[3]), (!A || J[0] & 4) && L(n, "no-smooth", G[2]), G[22] ? ie ? (ie.p(G, J), J[0] & 4194304 && m(ie, 1)) : (ie = pa(G), ie.c(), m(ie, 1), ie.m(V.parentNode, V)) : ie && (me(), p(ie, 1, 1, ()=>{
                ie = null;
            }), he());
        },
        i (G) {
            A || (m(S), m(P), m(N), m(W), m(X), m(c.$$.fragment, G), m(te), m(j), m(b.$$.fragment, G), m(ie), A = !0);
        },
        o (G) {
            p(S), p(P), p(N), p(W), p(X), p(c.$$.fragment, G), p(te), p(j), p(b.$$.fragment, G), p(ie), A = !1;
        },
        d (G) {
            G && (y(e), y(t), y(n), y(_), y(V)), S && S.d(G), P && P.d(G), N && N.d(), W && W.d(), X && X.d(), O(c), te && te.d(), j && j.d(), i[126](null), O(b), i[127](null), ie && ie.d(G);
        }
    };
}
function bm(i, e, t) {
    let n, o, l, s, a, r, c, f, h, g, v, b, _, V, A, S, P, N, W, X, Z, T, te, j, ie, G, J, ue, w, oe, fe, ve, Me, { bottomHidden: Ee } = e, { bottomNoSmooth: we } = e, { showControls: H } = e, { controlsElementRef: M } = e, { isAds: Y = !1 } = e, { canRewindLive: pe } = e, { logoClickable: ee } = e, { logoHidden: R } = e, { videoLogoUrl: Q } = e, { showNextPrevButtons: Ve } = e, { nextButtonActive: ye } = e, { prevButtonActive: Te } = e, { isOneVideoPlaylist: x = !1 } = e, { supportLink: le } = e, { customFullscreenSupported: be = !0 } = e, { playNextVideo: ae } = e, { playPrevVideo: Ue } = e, { repeatPlaylist: qe } = e, { toggleFullscreen: Je } = e, { returnFocus: tt } = e, { seekToInteractive: Be } = e, { toggleGraph: at } = e, { playPrevChapter: St } = e;
    const Re = vt(), Le = Yi(), kt = Re.actions.internal.toggleMuted, Dt = Re.actions.internal.togglePlay, mt = Re.actions.internal.pause, ot = Re.callbacks?.onAudioDoesNotExistHint, re = Re.callbacks?.onAudioDisabledHint, xe = Re.playerPhase;
    F(i, xe, (se)=>t(117, N = se));
    const Ye = Re.state.duration$;
    F(i, Ye, (se)=>t(65, Me = se));
    const it = Re.state.positionWithScrubbing$;
    F(i, it, (se)=>t(64, ve = se));
    const Ge = Re.state.playbackState$;
    F(i, Ge, (se)=>t(113, c = se));
    const ft = Re.state.isAudioAvailable$;
    F(i, ft, (se)=>t(54, f = se));
    const $e = Re.state.isAudioDisabled, Bt = Re.state.isEnded$;
    F(i, Bt, (se)=>t(118, X = se));
    const wt = Re.state.isLive$;
    F(i, wt, (se)=>t(21, v = se));
    const nt = Re.state.muted$;
    F(i, nt, (se)=>t(57, ie = se));
    const Ht = Re.state.isActiveLive$;
    F(i, Ht, (se)=>t(114, h = se));
    const ut = Re.state.isRewindableLive$;
    F(i, ut, (se)=>t(20, g = se));
    const Ze = Re.ui.scrubbingInProgress;
    F(i, Ze, (se)=>t(26, W = se));
    const Tt = Re.ui.mobileNotReportControlHidden$;
    F(i, Tt, (se)=>t(24, S = se));
    const lt = Re.ui.isPictureInPictureActive$;
    F(i, lt, (se)=>t(23, A = se));
    const oi = Re.ui.pictureInPictureType$;
    F(i, oi, (se)=>t(116, V = se));
    const de = Re.ui.mobileUnmuteButtonExpanded;
    F(i, de, (se)=>t(58, G = se));
    const Ce = Re.ui.mobileUnmuteButtonVisible;
    F(i, Ce, (se)=>t(56, j = se));
    const Ie = Re.ui.settingsMenuVisible;
    F(i, Ie, (se)=>t(22, b = se));
    const Pt = Re.ui.controls, Mi = Re.actions.internal.getVideoEpisodes(), $t = Re.webApi.pictureInPictureApi, _i = Re.state.chromecastState$;
    F(i, _i, (se)=>t(25, P = se));
    const Ri = Re.state.crashed$;
    F(i, Ri, (se)=>t(60, ue = se));
    const Vt = Pt.disabledControls$;
    F(i, Vt, (se)=>t(119, T = se));
    const Pe = Re.ads.duration;
    F(i, Pe, (se)=>t(63, fe = se));
    const Nt = Re.ads.position;
    F(i, Nt, (se)=>t(62, oe = se));
    const Bi = Re.ads.playbackState;
    F(i, Bi, (se)=>t(27, Z = se));
    const li = Re.ui.isFullscreen;
    F(i, li, (se)=>t(55, te = se));
    const ki = Re.ui.playerSize;
    F(i, ki, (se)=>t(115, _ = se));
    const wi = Re.ui.additionalButtons$;
    F(i, wi, (se)=>t(59, J = se));
    const yi = Re.actions.internal.replayInteractive, si = Re.state.isInteractive, Qi = Re.state.isInteractiveGraphEnabled, hi = Re.state.isSeekToInteractiveEnable, Ci = Re.state.isPlayPrevChapterEnabled, Pi = Re.state.graphIsOpened$;
    F(i, Pi, (se)=>t(61, w = se));
    let Ni, Si, Zi, ei, ai, Ti, Ft, yt, Ut, zi, Xi, Oi, ti, qi, ji, ri, Di, Ai, Ei, Li, pi, qt, ui;
    const gi = ()=>Re.actions.internal.toggleChromecast();
    function Wt() {
        $e ? re?.() : f ? kt() : ot?.();
    }
    async function Zt() {
        $t?.isActive() ? await $t?.remove() : await $t?.request();
    }
    function ii() {
        !$e && f && Ce.set(!1), Wt();
    }
    const ci = x ? Dt : qe;
    let jt = "";
    const bi = (se, Gt)=>{
        if (!se) {
            t(48, jt = U("tooltip_live"));
            return;
        }
        Gt === (0, _esnextEsmJs.PlaybackState).PAUSED && t(48, jt = U("tooltip_play"));
    };
    function ni(se) {
        Ai = se, t(42, Ai);
    }
    function Hi(se) {
        Ei = se, t(43, Ei);
    }
    function Vi(se) {
        Li = se, t(44, Li);
    }
    function Gi(se) {
        pi = se, t(45, pi);
    }
    function Fi(se) {
        qt = se, t(46, qt);
    }
    function fi(se) {
        ui = se, t(47, ui);
    }
    function Wi(se) {
        We[se ? "unshift" : "push"](()=>{
            ri = se, t(41, ri);
        });
    }
    function Ii(se) {
        We[se ? "unshift" : "push"](()=>{
            M = se, t(0, M);
        });
    }
    return i.$$set = (se)=>{
        "bottomHidden" in se && t(1, Ee = se.bottomHidden), "bottomNoSmooth" in se && t(2, we = se.bottomNoSmooth), "showControls" in se && t(3, H = se.showControls), "controlsElementRef" in se && t(0, M = se.controlsElementRef), "isAds" in se && t(4, Y = se.isAds), "canRewindLive" in se && t(5, pe = se.canRewindLive), "logoClickable" in se && t(6, ee = se.logoClickable), "logoHidden" in se && t(106, R = se.logoHidden), "videoLogoUrl" in se && t(7, Q = se.videoLogoUrl), "showNextPrevButtons" in se && t(8, Ve = se.showNextPrevButtons), "nextButtonActive" in se && t(9, ye = se.nextButtonActive), "prevButtonActive" in se && t(10, Te = se.prevButtonActive), "isOneVideoPlaylist" in se && t(107, x = se.isOneVideoPlaylist), "supportLink" in se && t(11, le = se.supportLink), "customFullscreenSupported" in se && t(108, be = se.customFullscreenSupported), "playNextVideo" in se && t(12, ae = se.playNextVideo), "playPrevVideo" in se && t(13, Ue = se.playPrevVideo), "repeatPlaylist" in se && t(109, qe = se.repeatPlaylist), "toggleFullscreen" in se && t(14, Je = se.toggleFullscreen), "returnFocus" in se && t(15, tt = se.returnFocus), "seekToInteractive" in se && t(16, Be = se.seekToInteractive), "toggleGraph" in se && t(17, at = se.toggleGraph), "playPrevChapter" in se && t(18, St = se.playPrevChapter);
    }, i.$$.update = ()=>{
        if (i.$$.dirty[3] & 67108864 && t(112, n = T.has(ct.EPISODE_BUTTON)), i.$$.dirty[3] & 67108864 && t(53, o = T.has(ct.GRAPH_BUTTON)), i.$$.dirty[3] & 67108864 && t(52, l = T.has(ct.SEEK_TO_INTERACTIVE_BUTTON)), i.$$.dirty[3] & 67108864 && t(51, s = T.has(ct.PLAY_BUTTON)), i.$$.dirty[3] & 67108864 && t(50, a = T.has(ct.REPLAY_BUTTON)), i.$$.dirty[3] & 67108864 && t(49, r = T.has(ct.PLAY_PREV_CHAPTER_BUTTON)), i.$$.dirty[3] & 1048576 && t(28, Ni = c === (0, _esnextEsmJs.PlaybackState).PLAYING), i.$$.dirty[0] & 134217728 && t(29, Si = Z === Ot.PAUSED), i.$$.dirty[0] & 16 | i.$$.dirty[3] & 33554432 && t(30, Zi = X && !Y && !si), i.$$.dirty[0] & 16 | i.$$.dirty[3] & 33554432 && t(31, ei = !X || Y), i.$$.dirty[3] & 4194304 && t(110, ai = _.width > 300), i.$$.dirty[3] & 4194304 && t(32, Ti = _.width > 400), i.$$.dirty[0] & 67108864 && t(111, Ft = W), i.$$.dirty[0] & 58720256 | i.$$.dirty[3] & 8388608 && t(33, yt = P !== (0, _esnextEsmJs.ChromecastState).NOT_AVAILABLE && !(A && V === vn.DocumentPictureInPicture) && !S && !si), i.$$.dirty[0] & 50331648 | i.$$.dirty[3] & 25427968) {
            const se = N === Ne.WaitingLive;
            t(34, Ut = !!$t && P !== (0, _esnextEsmJs.ChromecastState).CONNECTED && !S && (V === vn.DocumentPictureInPicture && se || !se) && !Ft && !si);
        }
        i.$$.dirty[3] & 262144 && t(35, zi = !Ft), i.$$.dirty[3] & 4202496 && t(36, Xi = !R && _.width > 350), i.$$.dirty[0] & 8388608 | i.$$.dirty[3] & 8683520 && t(37, Oi = Le.features.fullscreen && !(A && V === vn.DocumentPictureInPicture) && (si ? be : !0) && !Ft), i.$$.dirty[0] & 2097168 | i.$$.dirty[3] & 4456448 && t(38, ti = (!v || Y) && _.width > 260 && !Ft && !(Le.features.interactiveHideTime && si)), i.$$.dirty[0] & 4194312 && t(39, qi = b || H), i.$$.dirty[0] & 2097168 | i.$$.dirty[3] & 917504 && t(40, ji = !Y && !v && !!Mi?.length && ai && !n && !Ft), i.$$.dirty[0] & 1048576 | i.$$.dirty[3] & 2097152 && t(19, Di = !g || h), i.$$.dirty[0] & 524288 | i.$$.dirty[3] & 1048576 && bi(Di, c);
    }, [
        M,
        Ee,
        we,
        H,
        Y,
        pe,
        ee,
        Q,
        Ve,
        ye,
        Te,
        le,
        ae,
        Ue,
        Je,
        tt,
        Be,
        at,
        St,
        Di,
        g,
        v,
        b,
        A,
        S,
        P,
        W,
        Z,
        Ni,
        Si,
        Zi,
        ei,
        Ti,
        yt,
        Ut,
        zi,
        Xi,
        Oi,
        ti,
        qi,
        ji,
        ri,
        Ai,
        Ei,
        Li,
        pi,
        qt,
        ui,
        jt,
        r,
        a,
        s,
        l,
        o,
        f,
        te,
        j,
        ie,
        G,
        J,
        ue,
        w,
        oe,
        fe,
        ve,
        Me,
        Dt,
        mt,
        xe,
        Ye,
        it,
        Ge,
        ft,
        $e,
        Bt,
        wt,
        nt,
        Ht,
        ut,
        Ze,
        Tt,
        lt,
        oi,
        de,
        Ce,
        Ie,
        Mi,
        _i,
        Ri,
        Vt,
        Pe,
        Nt,
        Bi,
        li,
        ki,
        wi,
        yi,
        si,
        Qi,
        hi,
        Ci,
        Pi,
        gi,
        Zt,
        ii,
        ci,
        R,
        x,
        be,
        qe,
        ai,
        Ft,
        n,
        c,
        h,
        _,
        V,
        N,
        X,
        T,
        ni,
        Hi,
        Vi,
        Gi,
        Fi,
        fi,
        Wi,
        Ii
    ];
}
class vm extends ke {
    constructor(e){
        super(), _e(this, e, bm, gm, ge, {
            bottomHidden: 1,
            bottomNoSmooth: 2,
            showControls: 3,
            controlsElementRef: 0,
            isAds: 4,
            canRewindLive: 5,
            logoClickable: 6,
            logoHidden: 106,
            videoLogoUrl: 7,
            showNextPrevButtons: 8,
            nextButtonActive: 9,
            prevButtonActive: 10,
            isOneVideoPlaylist: 107,
            supportLink: 11,
            customFullscreenSupported: 108,
            playNextVideo: 12,
            playPrevVideo: 13,
            repeatPlaylist: 109,
            toggleFullscreen: 14,
            returnFocus: 15,
            seekToInteractive: 16,
            toggleGraph: 17,
            playPrevChapter: 18
        }, sm, [
            -1,
            -1,
            -1,
            -1,
            -1
        ]);
    }
}
function _m(i) {
    let e, t, n;
    function o(s) {
        i[26](s);
    }
    let l = {
        bottomHidden: i[1],
        bottomNoSmooth: i[2],
        showControls: i[3],
        isAds: i[4],
        canRewindLive: i[5],
        logoClickable: i[6],
        logoHidden: i[7],
        videoLogoUrl: i[8],
        showNextPrevButtons: i[9],
        nextButtonActive: i[10],
        prevButtonActive: i[11],
        isOneVideoPlaylist: i[12],
        supportLink: i[13],
        customFullscreenSupported: i[14],
        playNextVideo: i[15],
        playPrevVideo: i[16],
        repeatPlaylist: i[17],
        toggleFullscreen: i[18],
        returnFocus: i[19],
        seekToInteractive: i[20],
        toggleGraph: i[21],
        playPrevChapter: i[22]
    };
    return i[0] !== void 0 && (l.controlsElementRef = i[0]), e = new G4({
        props: l
    }), We.push(()=>bt(e, "controlsElementRef", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a & 2 && (r.bottomHidden = s[1]), a & 4 && (r.bottomNoSmooth = s[2]), a & 8 && (r.showControls = s[3]), a & 16 && (r.isAds = s[4]), a & 32 && (r.canRewindLive = s[5]), a & 64 && (r.logoClickable = s[6]), a & 128 && (r.logoHidden = s[7]), a & 256 && (r.videoLogoUrl = s[8]), a & 512 && (r.showNextPrevButtons = s[9]), a & 1024 && (r.nextButtonActive = s[10]), a & 2048 && (r.prevButtonActive = s[11]), a & 4096 && (r.isOneVideoPlaylist = s[12]), a & 8192 && (r.supportLink = s[13]), a & 16384 && (r.customFullscreenSupported = s[14]), a & 32768 && (r.playNextVideo = s[15]), a & 65536 && (r.playPrevVideo = s[16]), a & 131072 && (r.repeatPlaylist = s[17]), a & 262144 && (r.toggleFullscreen = s[18]), a & 524288 && (r.returnFocus = s[19]), a & 1048576 && (r.seekToInteractive = s[20]), a & 2097152 && (r.toggleGraph = s[21]), a & 4194304 && (r.playPrevChapter = s[22]), !t && a & 1 && (t = !0, r.controlsElementRef = s[0], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function km(i) {
    let e, t, n;
    function o(s) {
        i[25](s);
    }
    let l = {
        bottomHidden: i[1],
        bottomNoSmooth: i[2],
        showControls: i[3],
        isAds: i[4],
        canRewindLive: i[5],
        logoClickable: i[6],
        logoHidden: i[7],
        videoLogoUrl: i[8],
        showNextPrevButtons: i[9],
        nextButtonActive: i[10],
        prevButtonActive: i[11],
        isOneVideoPlaylist: i[12],
        supportLink: i[13],
        customFullscreenSupported: i[14],
        playNextVideo: i[15],
        playPrevVideo: i[16],
        repeatPlaylist: i[17],
        toggleFullscreen: i[18],
        returnFocus: i[19],
        seekToInteractive: i[20],
        toggleGraph: i[21],
        playPrevChapter: i[22]
    };
    return i[0] !== void 0 && (l.controlsElementRef = i[0]), e = new vm({
        props: l
    }), We.push(()=>bt(e, "controlsElementRef", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a & 2 && (r.bottomHidden = s[1]), a & 4 && (r.bottomNoSmooth = s[2]), a & 8 && (r.showControls = s[3]), a & 16 && (r.isAds = s[4]), a & 32 && (r.canRewindLive = s[5]), a & 64 && (r.logoClickable = s[6]), a & 128 && (r.logoHidden = s[7]), a & 256 && (r.videoLogoUrl = s[8]), a & 512 && (r.showNextPrevButtons = s[9]), a & 1024 && (r.nextButtonActive = s[10]), a & 2048 && (r.prevButtonActive = s[11]), a & 4096 && (r.isOneVideoPlaylist = s[12]), a & 8192 && (r.supportLink = s[13]), a & 16384 && (r.customFullscreenSupported = s[14]), a & 32768 && (r.playNextVideo = s[15]), a & 65536 && (r.playPrevVideo = s[16]), a & 131072 && (r.repeatPlaylist = s[17]), a & 262144 && (r.toggleFullscreen = s[18]), a & 524288 && (r.returnFocus = s[19]), a & 1048576 && (r.seekToInteractive = s[20]), a & 2097152 && (r.toggleGraph = s[21]), a & 4194304 && (r.playPrevChapter = s[22]), !t && a & 1 && (t = !0, r.controlsElementRef = s[0], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function wm(i) {
    let e, t, n, o;
    const l = [
        km,
        _m
    ], s = [];
    function a(r, c) {
        return r[23] ? 0 : 1;
    }
    return e = a(i), t = s[e] = l[e](i), {
        c () {
            t.c(), n = ht();
        },
        m (r, c) {
            s[e].m(r, c), C(r, n, c), o = !0;
        },
        p (r, [c]) {
            let f = e;
            e = a(r), e === f ? s[e].p(r, c) : (me(), p(s[f], 1, 1, ()=>{
                s[f] = null;
            }), he(), t = s[e], t ? t.p(r, c) : (t = s[e] = l[e](r), t.c()), m(t, 1), t.m(n.parentNode, n));
        },
        i (r) {
            o || (m(t), o = !0);
        },
        o (r) {
            p(t), o = !1;
        },
        d (r) {
            r && y(n), s[e].d(r);
        }
    };
}
function ym(i, e, t) {
    let n, { bottomHidden: o } = e, { bottomNoSmooth: l = !1 } = e, { showControls: s } = e, { controlsElementRef: a } = e, { isAds: r = !1 } = e, { canRewindLive: c } = e, { logoClickable: f } = e, { logoHidden: h } = e, { videoLogoUrl: g } = e, { showNextPrevButtons: v } = e, { nextButtonActive: b } = e, { prevButtonActive: _ } = e, { isOneVideoPlaylist: V = !1 } = e, { supportLink: A } = e, { customFullscreenSupported: S = !0 } = e, { playNextVideo: P } = e, { playPrevVideo: N } = e, { repeatPlaylist: W } = e, { toggleFullscreen: X } = e, { returnFocus: Z = (0, _esnextEsmJs1.noop) } = e, { seekToInteractive: T } = e, { toggleGraph: te } = e, { playPrevChapter: j } = e;
    const G = vt().ui.isMobile;
    F(i, G, (w)=>t(23, n = w));
    function J(w) {
        a = w, t(0, a);
    }
    function ue(w) {
        a = w, t(0, a);
    }
    return i.$$set = (w)=>{
        "bottomHidden" in w && t(1, o = w.bottomHidden), "bottomNoSmooth" in w && t(2, l = w.bottomNoSmooth), "showControls" in w && t(3, s = w.showControls), "controlsElementRef" in w && t(0, a = w.controlsElementRef), "isAds" in w && t(4, r = w.isAds), "canRewindLive" in w && t(5, c = w.canRewindLive), "logoClickable" in w && t(6, f = w.logoClickable), "logoHidden" in w && t(7, h = w.logoHidden), "videoLogoUrl" in w && t(8, g = w.videoLogoUrl), "showNextPrevButtons" in w && t(9, v = w.showNextPrevButtons), "nextButtonActive" in w && t(10, b = w.nextButtonActive), "prevButtonActive" in w && t(11, _ = w.prevButtonActive), "isOneVideoPlaylist" in w && t(12, V = w.isOneVideoPlaylist), "supportLink" in w && t(13, A = w.supportLink), "customFullscreenSupported" in w && t(14, S = w.customFullscreenSupported), "playNextVideo" in w && t(15, P = w.playNextVideo), "playPrevVideo" in w && t(16, N = w.playPrevVideo), "repeatPlaylist" in w && t(17, W = w.repeatPlaylist), "toggleFullscreen" in w && t(18, X = w.toggleFullscreen), "returnFocus" in w && t(19, Z = w.returnFocus), "seekToInteractive" in w && t(20, T = w.seekToInteractive), "toggleGraph" in w && t(21, te = w.toggleGraph), "playPrevChapter" in w && t(22, j = w.playPrevChapter);
    }, [
        a,
        o,
        l,
        s,
        r,
        c,
        f,
        h,
        g,
        v,
        b,
        _,
        V,
        A,
        S,
        P,
        N,
        W,
        X,
        Z,
        T,
        te,
        j,
        n,
        G,
        J,
        ue
    ];
}
class M1 extends ke {
    constructor(e){
        super(), _e(this, e, ym, wm, ge, {
            bottomHidden: 1,
            bottomNoSmooth: 2,
            showControls: 3,
            controlsElementRef: 0,
            isAds: 4,
            canRewindLive: 5,
            logoClickable: 6,
            logoHidden: 7,
            videoLogoUrl: 8,
            showNextPrevButtons: 9,
            nextButtonActive: 10,
            prevButtonActive: 11,
            isOneVideoPlaylist: 12,
            supportLink: 13,
            customFullscreenSupported: 14,
            playNextVideo: 15,
            playPrevVideo: 16,
            repeatPlaylist: 17,
            toggleFullscreen: 18,
            returnFocus: 19,
            seekToInteractive: 20,
            toggleGraph: 21,
            playPrevChapter: 22
        });
    }
}
function Cm(i) {
    Fe(i, "v-1ub874v", ".reversed.v-1ub874v{transform:scaleX(-1)}");
}
function Pm(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v;
    return {
        c () {
            e = I("svg"), t = I("g"), n = I("path"), o = I("path"), l = I("defs"), s = I("filter"), a = I("feFlood"), r = I("feColorMatrix"), c = I("feOffset"), f = I("feGaussianBlur"), h = I("feColorMatrix"), g = I("feBlend"), v = I("feBlend"), u(n, "d", "M15.537 10.534a1.157 1.157 0 0 0 .003 1.96l7.658 4.823c.78.491 1.798-.065 1.798-.981v-3.3c7.265.512 13 6.568 13 13.964 0 7.732-6.268 14-14 14-5.98 0-11.088-3.75-13.093-9.032a1.5 1.5 0 0 0-2.805 1.064C10.531 39.441 16.73 44 23.996 44c9.39 0 17-7.611 17-17 0-9.053-7.076-16.453-16-16.971V6.664c0-.918-1.021-1.473-1.8-.98l-7.659 4.85Z"), u(n, "fill", "#fff"), u(o, "d", "M15.404 10.322a1.407 1.407 0 0 0 .003 2.384l7.657 4.823c.944.594 2.182-.076 2.182-1.193v-3.03c7.008.631 12.5 6.522 12.5 13.694 0 7.594-6.156 13.75-13.75 13.75-5.873 0-10.89-3.683-12.86-8.871a1.75 1.75 0 1 0-3.272 1.242c2.469 6.503 8.758 11.129 16.132 11.129 9.527 0 17.25-7.723 17.25-17.25 0-9.107-7.056-16.565-16-17.205V6.664c0-1.118-1.241-1.788-2.184-1.19l-7.658 4.848Z"), u(o, "stroke", "#000"), u(o, "stroke-opacity", ".12"), u(o, "stroke-width", ".5"), u(t, "filter", "url(#a)"), u(a, "flood-opacity", "0"), u(a, "result", "BackgroundImageFix"), u(r, "in", "SourceAlpha"), u(r, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"), u(r, "result", "hardAlpha"), u(f, "stdDeviation", "2.5"), u(h, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"), u(g, "in2", "BackgroundImageFix"), u(g, "result", "effect1_dropShadow_2260_100684"), u(v, "in", "SourceGraphic"), u(v, "in2", "effect1_dropShadow_2260_100684"), u(v, "result", "shape"), u(s, "id", "a"), u(s, "x", "2.5"), u(s, "y", "0"), u(s, "width", "43.996"), u(s, "height", "49.5"), u(s, "filterUnits", "userSpaceOnUse"), u(s, "color-interpolation-filters", "sRGB"), u(e, "width", "48"), u(e, "height", "51"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "seek-icon"), u(e, "class", "v-1ub874v"), L(e, "reversed", i[0]);
        },
        m (b, _) {
            C(b, e, _), d(e, t), d(t, n), d(t, o), d(e, l), d(l, s), d(s, a), d(s, r), d(s, c), d(s, f), d(s, h), d(s, g), d(s, v);
        },
        p (b, [_]) {
            _ & 1 && L(e, "reversed", b[0]);
        },
        i: K,
        o: K,
        d (b) {
            b && y(e);
        }
    };
}
function Sm(i, e, t) {
    let { reversed: n = !1 } = e;
    return i.$$set = (o)=>{
        "reversed" in o && t(0, n = o.reversed);
    }, [
        n
    ];
}
class Tm extends ke {
    constructor(e){
        super(), _e(this, e, Sm, Pm, ge, {
            reversed: 0
        }, Cm);
    }
}
function Am(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v, b, _;
    return {
        c () {
            e = I("svg"), t = I("g"), n = I("path"), o = I("path"), l = I("defs"), s = I("clipPath"), a = I("path"), r = I("filter"), c = I("feFlood"), f = I("feColorMatrix"), h = I("feOffset"), g = I("feGaussianBlur"), v = I("feColorMatrix"), b = I("feBlend"), _ = I("feBlend"), u(n, "fill-rule", "evenodd"), u(n, "clip-rule", "evenodd"), u(n, "d", "M28.167 7h-8.334c-2.463 0-4.404 0-5.966.128-1.594.13-2.925.4-4.134 1.016a10.5 10.5 0 0 0-4.589 4.59c-.616 1.208-.886 2.54-1.016 4.133C4 18.429 4 20.37 4 22.833v2.334c0 2.463 0 4.404.128 5.966.13 1.594.4 2.925 1.016 4.134a10.5 10.5 0 0 0 4.59 4.589c1.208.616 2.54.886 4.133 1.016 1.562.128 3.502.128 5.966.128h8.334c2.463 0 4.404 0 5.966-.128 1.594-.13 2.925-.4 4.134-1.016a10.5 10.5 0 0 0 4.589-4.59c.616-1.208.886-2.54 1.016-4.133.128-1.562.128-3.502.128-5.966v-2.334c0-2.463 0-4.404-.128-5.966-.13-1.594-.4-2.925-1.016-4.134a10.5 10.5 0 0 0-4.59-4.589c-1.208-.616-2.54-.886-4.133-1.016C32.571 7 30.63 7 28.167 7ZM13.5 28a1.5 1.5 0 0 0 0 3h11a1.5 1.5 0 0 0 0-3h-11ZM12 22a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 0 3h-4A1.5 1.5 0 0 1 12 22Zm18.5 6a1.5 1.5 0 0 0 0 3h4a1.5 1.5 0 0 0 0-3h-4ZM22 22a1.5 1.5 0 0 1 1.5-1.5h11a1.5 1.5 0 0 1 0 3h-11A1.5 1.5 0 0 1 22 22Z"), u(n, "fill", "#fff"), u(o, "d", "M28.167 6.75h-8.344c-2.455 0-4.405 0-5.977.128-1.609.132-2.976.407-4.226 1.044a10.75 10.75 0 0 0-4.698 4.698c-.637 1.25-.912 2.617-1.044 4.226-.128 1.572-.128 3.522-.128 5.977V25.177c0 2.455 0 4.405.128 5.977.132 1.609.407 2.976 1.044 4.226a10.75 10.75 0 0 0 4.698 4.698c1.25.637 2.617.912 4.226 1.044 1.572.128 3.522.128 5.977.128h8.354c2.455 0 4.404 0 5.977-.128 1.609-.132 2.976-.407 4.226-1.044a10.75 10.75 0 0 0 4.698-4.698c.637-1.25.912-2.617 1.044-4.226.128-1.573.128-3.522.128-5.977V22.823c0-2.455 0-4.405-.128-5.977-.132-1.609-.407-2.976-1.044-4.226a10.75 10.75 0 0 0-4.698-4.698c-1.25-.637-2.617-.912-4.226-1.044-1.572-.128-3.522-.128-5.977-.128h-.01ZM12.25 29.5c0-.69.56-1.25 1.25-1.25h11a1.25 1.25 0 1 1 0 2.5h-11c-.69 0-1.25-.56-1.25-1.25Zm0-7.5c0-.69.56-1.25 1.25-1.25h4a1.25 1.25 0 1 1 0 2.5h-4c-.69 0-1.25-.56-1.25-1.25Zm17 7.5c0-.69.56-1.25 1.25-1.25h4a1.25 1.25 0 1 1 0 2.5h-4c-.69 0-1.25-.56-1.25-1.25Zm-7-7.5c0-.69.56-1.25 1.25-1.25h11a1.25 1.25 0 1 1 0 2.5h-11c-.69 0-1.25-.56-1.25-1.25Z"), u(o, "stroke", "#000"), u(o, "stroke-opacity", ".12"), u(o, "stroke-width", ".5"), u(t, "filter", "url(#b)"), u(t, "clip-path", "url(#a)"), u(a, "fill", "#fff"), u(a, "d", "M0 0h48v48H0z"), u(s, "id", "a"), u(c, "flood-opacity", "0"), u(c, "result", "BackgroundImageFix"), u(f, "in", "SourceAlpha"), u(f, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"), u(f, "result", "hardAlpha"), u(g, "stdDeviation", "2.5"), u(v, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"), u(b, "in2", "BackgroundImageFix"), u(b, "result", "effect1_dropShadow_2260_104204"), u(_, "in", "SourceGraphic"), u(_, "in2", "effect1_dropShadow_2260_104204"), u(_, "result", "shape"), u(r, "id", "b"), u(r, "x", "-1.5"), u(r, "y", "1.5"), u(r, "width", "51"), u(r, "height", "45"), u(r, "filterUnits", "userSpaceOnUse"), u(r, "color-interpolation-filters", "sRGB"), u(e, "width", "48"), u(e, "height", "48"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
        },
        m (V, A) {
            C(V, e, A), d(e, t), d(t, n), d(t, o), d(e, l), d(l, s), d(s, a), d(l, r), d(r, c), d(r, f), d(r, h), d(r, g), d(r, v), d(r, b), d(r, _);
        },
        d (V) {
            V && y(e);
        }
    };
}
function Em(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v, b, _, V;
    return {
        c () {
            e = I("svg"), t = I("g"), n = I("path"), o = I("path"), l = I("path"), s = I("defs"), a = I("clipPath"), r = I("path"), c = I("filter"), f = I("feFlood"), h = I("feColorMatrix"), g = I("feOffset"), v = I("feGaussianBlur"), b = I("feColorMatrix"), _ = I("feBlend"), V = I("feBlend"), u(n, "fill-rule", "evenodd"), u(n, "clip-rule", "evenodd"), u(n, "d", "M6.56 4.44a1.5 1.5 0 1 0-2.12 2.12l3.088 3.09a10.499 10.499 0 0 0-2.384 3.083c-.616 1.21-.886 2.54-1.016 4.134C4 18.429 4 20.369 4 22.833v2.334c0 2.463 0 4.404.128 5.966.13 1.594.4 2.925 1.016 4.134a10.5 10.5 0 0 0 4.59 4.589c1.208.616 2.54.886 4.133 1.016 1.562.128 3.502.128 5.966.128h8.334c2.463 0 4.404 0 5.966-.128 1.437-.117 2.66-.348 3.773-.844l3.533 3.533a1.5 1.5 0 0 0 2.122-2.122l-37-37ZM13.5 28a1.5 1.5 0 0 0 0 3h11a1.5 1.5 0 0 0 0-3h-11ZM12 22a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 0 3h-4A1.5 1.5 0 0 1 12 22Z"), u(n, "fill", "#fff"), u(o, "d", "M34.5 23.5h-4.639l12.552 12.551c.158-.254.306-.516.443-.784.616-1.21.886-2.54 1.016-4.134.128-1.562.128-3.502.128-5.966v-2.334c0-2.463 0-4.404-.128-5.966-.13-1.594-.4-2.925-1.016-4.134a10.5 10.5 0 0 0-4.59-4.589c-1.208-.616-2.54-.886-4.133-1.016C32.571 7 30.63 7 28.167 7h-8.334c-2.463 0-4.404 0-5.966.128l-.347.03L26.86 20.5H34.5a1.5 1.5 0 0 1 0 3Z"), u(o, "fill", "#fff"), u(l, "d", "M29.861 23.25h-.603l.427.427 12.55 12.551.223.223.167-.268c.162-.26.313-.528.453-.803.637-1.25.912-2.617 1.044-4.226.128-1.573.128-3.522.128-5.977V22.823c0-2.455 0-4.405-.128-5.977-.132-1.609-.407-2.976-1.044-4.226a10.75 10.75 0 0 0-4.698-4.698c-1.25-.637-2.617-.912-4.226-1.044-1.572-.128-3.522-.128-5.977-.128h-8.354c-2.455 0-4.405 0-5.977.128-.118.01-.235.02-.35.032l-.527.051.374.374 13.341 13.342.074.073H34.5a1.25 1.25 0 1 1 0 2.5h-4.639ZM6.737 4.263a1.75 1.75 0 0 0-2.474 2.474l2.903 2.904a10.75 10.75 0 0 0-2.244 2.979c-.637 1.25-.912 2.617-1.044 4.226-.128 1.572-.128 3.522-.128 5.977V25.177c0 2.455 0 4.405.128 5.977.132 1.609.407 2.976 1.044 4.226a10.75 10.75 0 0 0 4.698 4.698c1.25.637 2.617.912 4.226 1.044 1.572.128 3.522.128 5.977.128h8.354c2.455 0 4.404 0 5.977-.128 1.384-.114 2.59-.333 3.696-.797l3.413 3.412a1.75 1.75 0 1 0 2.474-2.474l-37-37ZM12.25 29.5c0-.69.56-1.25 1.25-1.25h11a1.25 1.25 0 1 1 0 2.5h-11c-.69 0-1.25-.56-1.25-1.25Zm0-7.5c0-.69.56-1.25 1.25-1.25h4a1.25 1.25 0 1 1 0 2.5h-4c-.69 0-1.25-.56-1.25-1.25Z"), u(l, "stroke", "#000"), u(l, "stroke-opacity", ".12"), u(l, "stroke-width", ".5"), u(t, "filter", "url(#b)"), u(t, "clip-path", "url(#a)"), u(r, "fill", "#fff"), u(r, "d", "M0 0h48v48H0z"), u(a, "id", "a"), u(f, "flood-opacity", "0"), u(f, "result", "BackgroundImageFix"), u(h, "in", "SourceAlpha"), u(h, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"), u(h, "result", "hardAlpha"), u(v, "stdDeviation", "2.5"), u(b, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"), u(_, "in2", "BackgroundImageFix"), u(_, "result", "effect1_dropShadow_2260_104293"), u(V, "in", "SourceGraphic"), u(V, "in2", "effect1_dropShadow_2260_104293"), u(V, "result", "shape"), u(c, "id", "b"), u(c, "x", "-1.5"), u(c, "y", "-1.5"), u(c, "width", "51"), u(c, "height", "51"), u(c, "filterUnits", "userSpaceOnUse"), u(c, "color-interpolation-filters", "sRGB"), u(e, "width", "48"), u(e, "height", "48"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg");
        },
        m (A, S) {
            C(A, e, S), d(e, t), d(t, n), d(t, o), d(t, l), d(e, s), d(s, a), d(a, r), d(s, c), d(c, f), d(c, h), d(c, g), d(c, v), d(c, b), d(c, _), d(c, V);
        },
        d (A) {
            A && y(e);
        }
    };
}
function Lm(i) {
    let e;
    function t(l, s) {
        return l[0] ? Em : Am;
    }
    let n = t(i), o = n(i);
    return {
        c () {
            o.c(), e = ht();
        },
        m (l, s) {
            o.m(l, s), C(l, e, s);
        },
        p (l, [s]) {
            n !== (n = t(l)) && (o.d(1), o = n(l), o && (o.c(), o.m(e.parentNode, e)));
        },
        i: K,
        o: K,
        d (l) {
            l && y(e), o.d(l);
        }
    };
}
function Vm(i, e, t) {
    let { isOff: n = !1 } = e;
    return i.$$set = (o)=>{
        "isOff" in o && t(0, n = o.isOff);
    }, [
        n
    ];
}
class R1 extends ke {
    constructor(e){
        super(), _e(this, e, Vm, Lm, ge, {
            isOff: 0
        });
    }
}
function Im(i) {
    Fe(i, "v-1ub874v", ".reversed.v-1ub874v{transform:scaleX(-1)}");
}
function Mm(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v;
    return {
        c () {
            e = I("svg"), t = I("g"), n = I("path"), o = I("path"), l = I("defs"), s = I("filter"), a = I("feFlood"), r = I("feColorMatrix"), c = I("feOffset"), f = I("feGaussianBlur"), h = I("feColorMatrix"), g = I("feBlend"), v = I("feBlend"), u(n, "d", "M24 22.677v-5.87a1.2 1.2 0 0 0-1.792-1.045L9.51 22.955a1.2 1.2 0 0 0 0 2.088l12.697 7.192a1.2 1.2 0 0 0 1.791-1.044v-5.873l12.21 6.916A1.2 1.2 0 0 0 38 31.19V16.805a1.2 1.2 0 0 0-1.791-1.044l-12.21 6.916Z"), u(n, "fill", "#fff"), u(o, "d", "M24.25 16.806v5.442l11.835-6.704a1.45 1.45 0 0 1 2.165 1.261V31.19a1.45 1.45 0 0 1-2.165 1.262L24.25 25.747v5.444a1.45 1.45 0 0 1-2.164 1.262L9.388 25.26a1.45 1.45 0 0 1 0-2.523l12.697-7.192a1.45 1.45 0 0 1 2.164 1.261Z"), u(o, "stroke", "#000"), u(o, "stroke-opacity", ".12"), u(o, "stroke-width", ".5"), u(t, "filter", "url(#a)"), u(a, "flood-opacity", "0"), u(a, "result", "BackgroundImageFix"), u(r, "in", "SourceAlpha"), u(r, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"), u(r, "result", "hardAlpha"), u(f, "stdDeviation", "2.5"), u(h, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"), u(g, "in2", "BackgroundImageFix"), u(g, "result", "effect1_dropShadow_2260_106627"), u(v, "in", "SourceGraphic"), u(v, "in2", "effect1_dropShadow_2260_106627"), u(v, "result", "shape"), u(s, "id", "a"), u(s, "x", "3.402"), u(s, "y", "10.105"), u(s, "width", "40.098"), u(s, "height", "27.785"), u(s, "filterUnits", "userSpaceOnUse"), u(s, "color-interpolation-filters", "sRGB"), u(e, "width", "48"), u(e, "height", "48"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "rate-change-icon"), u(e, "class", "v-1ub874v"), L(e, "reversed", i[0]);
        },
        m (b, _) {
            C(b, e, _), d(e, t), d(t, n), d(t, o), d(e, l), d(l, s), d(s, a), d(s, r), d(s, c), d(s, f), d(s, h), d(s, g), d(s, v);
        },
        p (b, [_]) {
            _ & 1 && L(e, "reversed", b[0]);
        },
        i: K,
        o: K,
        d (b) {
            b && y(e);
        }
    };
}
function Rm(i, e, t) {
    let { reversed: n = !1 } = e;
    return i.$$set = (o)=>{
        "reversed" in o && t(0, n = o.reversed);
    }, [
        n
    ];
}
class Bm extends ke {
    constructor(e){
        super(), _e(this, e, Rm, Mm, ge, {
            reversed: 0
        }, Im);
    }
}
function Nm(i) {
    Fe(i, "v-1ub874v", ".reversed.v-1ub874v{transform:scaleX(-1)}");
}
function zm(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v;
    return {
        c () {
            e = I("svg"), t = I("g"), n = I("path"), o = I("path"), l = I("defs"), s = I("filter"), a = I("feFlood"), r = I("feColorMatrix"), c = I("feOffset"), f = I("feGaussianBlur"), h = I("feColorMatrix"), g = I("feBlend"), v = I("feBlend"), u(n, "d", "M14 21.817c.631-.505 1.627-1.054 3.084-1.857l13.009-7.172c2.268-1.25 3.402-1.875 4.332-1.778a2.908 2.908 0 0 1 2.026 1.134c.549.73.549 1.991.549 4.511v14.69c0 2.52 0 3.78-.549 4.51a2.909 2.909 0 0 1-2.026 1.135c-.93.097-2.064-.528-4.332-1.778L17.084 28.04c-1.457-.803-2.453-1.352-3.084-1.857V34.5a1.5 1.5 0 0 1-3 0v-21a1.5 1.5 0 0 1 3 0v8.317Z"), u(n, "fill", "#fff"), u(o, "d", "m16.964 19.74-.029.016c-1.162.641-2.046 1.129-2.685 1.567V13.5a1.75 1.75 0 1 0-3.5 0v21a1.75 1.75 0 1 0 3.5 0v-7.823c.639.438 1.523.926 2.685 1.567l.029.015 13.008 7.172.012.006c1.124.62 1.983 1.093 2.676 1.398.695.306 1.26.46 1.791.404a3.158 3.158 0 0 0 2.2-1.233c.317-.421.46-.976.53-1.711.069-.733.069-1.688.069-2.936V16.641c0-1.248 0-2.203-.07-2.936-.07-.735-.212-1.29-.529-1.711a3.158 3.158 0 0 0-2.2-1.233c-.53-.055-1.096.098-1.79.404-.694.305-1.553.778-2.677 1.398l-.012.006-13.008 7.172Z"), u(o, "stroke", "#000"), u(o, "stroke-opacity", ".12"), u(o, "stroke-width", ".5"), u(t, "filter", "url(#a)"), u(a, "flood-opacity", "0"), u(a, "result", "BackgroundImageFix"), u(r, "in", "SourceAlpha"), u(r, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"), u(r, "result", "hardAlpha"), u(f, "stdDeviation", "2.5"), u(h, "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"), u(g, "in2", "BackgroundImageFix"), u(g, "result", "effect1_dropShadow_2340_106922"), u(v, "in", "SourceGraphic"), u(v, "in2", "effect1_dropShadow_2340_106922"), u(v, "result", "shape"), u(s, "id", "a"), u(s, "x", "5.5"), u(s, "y", "5.5"), u(s, "width", "37"), u(s, "height", "37"), u(s, "filterUnits", "userSpaceOnUse"), u(s, "color-interpolation-filters", "sRGB"), u(e, "width", "48"), u(e, "height", "48"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "episodes-seek-icon"), u(e, "class", "v-1ub874v"), L(e, "reversed", i[0]);
        },
        m (b, _) {
            C(b, e, _), d(e, t), d(t, n), d(t, o), d(e, l), d(l, s), d(s, a), d(s, r), d(s, c), d(s, f), d(s, h), d(s, g), d(s, v);
        },
        p (b, [_]) {
            _ & 1 && L(e, "reversed", b[0]);
        },
        i: K,
        o: K,
        d (b) {
            b && y(e);
        }
    };
}
function Om(i, e, t) {
    let { reversed: n = !1 } = e;
    return i.$$set = (o)=>{
        "reversed" in o && t(0, n = o.reversed);
    }, [
        n
    ];
}
class Dm extends ke {
    constructor(e){
        super(), _e(this, e, Om, zm, ge, {
            reversed: 0
        }, Nm);
    }
}
function Hm(i) {
    Fe(i, "v-1lbk7aq", `.hot-key-helpers-container.v-1lbk7aq.v-1lbk7aq{position:absolute;top:calc(50% - 40px);left:calc(50% - 100px);width:200px;height:120px;display:flex;align-items:center;flex-direction:column;animation:v-1lbk7aq-fadeIn ease var(--controls-transition-duration);padding-top:14px;box-sizing:border-box}.hot-key-helpers-container.v-1lbk7aq>div.v-1lbk7aq{width:48px;height:48px;display:flex;justify-content:center;align-items:center}.hot-key-helpers-container.v-1lbk7aq svg[data-testid="volume-off-icon"],.hot-key-helpers-container.v-1lbk7aq svg[data-testid="volume-max-icon"]{transform:scale(2)}.hot-key-helpers-container.v-1lbk7aq svg[data-testid="play-icon"],.hot-key-helpers-container.v-1lbk7aq svg[data-testid="pause-icon"]{transform:scale(2.5)}.hot-key-helpers-container--left.v-1lbk7aq.v-1lbk7aq{left:calc(25% - 100px)}.hot-key-helpers-container--right.v-1lbk7aq.v-1lbk7aq{left:calc(75% - 100px)}.hot-key-helpers-text.v-1lbk7aq.v-1lbk7aq{text-align:center;font-feature-settings:'clig' off, 'liga' off;text-shadow:0px 0px 5px rgba(0, 0, 0, 0.16);font-size:15px;font-style:normal;font-weight:600;line-height:20px;letter-spacing:-0.105px;width:100%;max-height:40px;margin-top:4px;display:-webkit-box;text-overflow:ellipsis;white-space:pre-wrap;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}.hidden.v-1lbk7aq.v-1lbk7aq{visibility:hidden;animation:v-1lbk7aq-fadeOut ease var(--controls-transition-duration);width:0;height:0}@keyframes v-1lbk7aq-fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes v-1lbk7aq-fadeOut{0%{opacity:1}100%{opacity:0}}`);
}
function ga(i) {
    let e, t = [
        je.BACKWARD_SEEK,
        je.FORWARD_SEEK
    ].includes(i[4]), n, o, l, s, a, r = [
        je.RATE_DOWN,
        je.RATE_UP
    ].includes(i[4]), c, f = [
        je.EPISODE_PREV,
        je.EPISODE_NEXT
    ].includes(i[4]), h, g, v, b, _, V = t && ba(i), A = i[4] === je.STOP && va(), S = i[4] === je.PLAY && _a(), P = i[4] === je.SUBTITLES_OFF && ka(), N = i[4] === je.SUBTITLES_ON && wa(), W = r && ya(i), X = f && Ca(i), Z = i[4] === je.MUTE && Pa(), T = i[4] === je.VOLUME && Sa(), te = i[5] && Ta(i);
    return {
        c () {
            e = k("div"), V && V.c(), n = B(), A && A.c(), o = B(), S && S.c(), l = B(), P && P.c(), s = B(), N && N.c(), a = B(), W && W.c(), c = B(), X && X.c(), h = B(), Z && Z.c(), g = B(), T && T.c(), v = B(), te && te.c(), b = ht(), u(e, "class", "v-1lbk7aq");
        },
        m (j, ie) {
            C(j, e, ie), V && V.m(e, null), d(e, n), A && A.m(e, null), d(e, o), S && S.m(e, null), d(e, l), P && P.m(e, null), d(e, s), N && N.m(e, null), d(e, a), W && W.m(e, null), d(e, c), X && X.m(e, null), d(e, h), Z && Z.m(e, null), d(e, g), T && T.m(e, null), C(j, v, ie), te && te.m(j, ie), C(j, b, ie), _ = !0;
        },
        p (j, ie) {
            ie & 16 && (t = [
                je.BACKWARD_SEEK,
                je.FORWARD_SEEK
            ].includes(j[4])), t ? V ? (V.p(j, ie), ie & 16 && m(V, 1)) : (V = ba(j), V.c(), m(V, 1), V.m(e, n)) : V && (me(), p(V, 1, 1, ()=>{
                V = null;
            }), he()), j[4] === je.STOP ? A ? ie & 16 && m(A, 1) : (A = va(), A.c(), m(A, 1), A.m(e, o)) : A && (me(), p(A, 1, 1, ()=>{
                A = null;
            }), he()), j[4] === je.PLAY ? S ? ie & 16 && m(S, 1) : (S = _a(), S.c(), m(S, 1), S.m(e, l)) : S && (me(), p(S, 1, 1, ()=>{
                S = null;
            }), he()), j[4] === je.SUBTITLES_OFF ? P ? ie & 16 && m(P, 1) : (P = ka(), P.c(), m(P, 1), P.m(e, s)) : P && (me(), p(P, 1, 1, ()=>{
                P = null;
            }), he()), j[4] === je.SUBTITLES_ON ? N ? ie & 16 && m(N, 1) : (N = wa(), N.c(), m(N, 1), N.m(e, a)) : N && (me(), p(N, 1, 1, ()=>{
                N = null;
            }), he()), ie & 16 && (r = [
                je.RATE_DOWN,
                je.RATE_UP
            ].includes(j[4])), r ? W ? (W.p(j, ie), ie & 16 && m(W, 1)) : (W = ya(j), W.c(), m(W, 1), W.m(e, c)) : W && (me(), p(W, 1, 1, ()=>{
                W = null;
            }), he()), ie & 16 && (f = [
                je.EPISODE_PREV,
                je.EPISODE_NEXT
            ].includes(j[4])), f ? X ? (X.p(j, ie), ie & 16 && m(X, 1)) : (X = Ca(j), X.c(), m(X, 1), X.m(e, h)) : X && (me(), p(X, 1, 1, ()=>{
                X = null;
            }), he()), j[4] === je.MUTE ? Z ? ie & 16 && m(Z, 1) : (Z = Pa(), Z.c(), m(Z, 1), Z.m(e, g)) : Z && (me(), p(Z, 1, 1, ()=>{
                Z = null;
            }), he()), j[4] === je.VOLUME ? T ? ie & 16 && m(T, 1) : (T = Sa(), T.c(), m(T, 1), T.m(e, null)) : T && (me(), p(T, 1, 1, ()=>{
                T = null;
            }), he()), j[5] ? te ? te.p(j, ie) : (te = Ta(j), te.c(), te.m(b.parentNode, b)) : te && (te.d(1), te = null);
        },
        i (j) {
            _ || (m(V), m(A), m(S), m(P), m(N), m(W), m(X), m(Z), m(T), _ = !0);
        },
        o (j) {
            p(V), p(A), p(S), p(P), p(N), p(W), p(X), p(Z), p(T), _ = !1;
        },
        d (j) {
            j && (y(e), y(v), y(b)), V && V.d(), A && A.d(), S && S.d(), P && P.d(), N && N.d(), W && W.d(), X && X.d(), Z && Z.d(), T && T.d(), te && te.d(j);
        }
    };
}
function ba(i) {
    let e, t;
    return e = new Tm({
        props: {
            reversed: i[4] === je.FORWARD_SEEK
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 16 && (l.reversed = n[4] === je.FORWARD_SEEK), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function va(i) {
    let e, t;
    return e = new _1({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function _a(i) {
    let e, t;
    return e = new dl({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function ka(i) {
    let e, t;
    return e = new R1({
        props: {
            isOff: !0
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function wa(i) {
    let e, t;
    return e = new R1({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function ya(i) {
    let e, t;
    return e = new Bm({
        props: {
            reversed: i[4] === je.RATE_UP
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 16 && (l.reversed = n[4] === je.RATE_UP), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Ca(i) {
    let e, t;
    return e = new Dm({
        props: {
            reversed: i[4] === je.EPISODE_NEXT
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 16 && (l.reversed = n[4] === je.EPISODE_NEXT), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Pa(i) {
    let e, t;
    return e = new Oo({
        props: {
            volume: 0
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Sa(i) {
    let e, t;
    return e = new Oo({
        props: {
            volume: 1
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Ta(i) {
    let e, t;
    return {
        c () {
            e = k("span"), t = ze(i[5]), u(e, "class", "hot-key-helpers-text v-1lbk7aq");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p (n, o) {
            o & 32 && Xe(t, n[5]);
        },
        d (n) {
            n && y(e);
        }
    };
}
function Fm(i) {
    let e, t, n = !i[1] && i[4] && ga(i);
    return {
        c () {
            e = k("div"), n && n.c(), u(e, "class", "hot-key-helpers-container v-1lbk7aq"), L(e, "hidden", i[1]), L(e, "hot-key-helpers-container--left", i[2]), L(e, "hot-key-helpers-container--right", i[3]);
        },
        m (o, l) {
            C(o, e, l), n && n.m(e, null), t = !0;
        },
        p (o, [l]) {
            !o[1] && o[4] ? n ? (n.p(o, l), l & 18 && m(n, 1)) : (n = ga(o), n.c(), m(n, 1), n.m(e, null)) : n && (me(), p(n, 1, 1, ()=>{
                n = null;
            }), he()), (!t || l & 2) && L(e, "hidden", o[1]), (!t || l & 4) && L(e, "hot-key-helpers-container--left", o[2]), (!t || l & 8) && L(e, "hot-key-helpers-container--right", o[3]);
        },
        i (o) {
            t || (m(n), t = !0);
        },
        o (o) {
            p(n), t = !1;
        },
        d (o) {
            o && y(e), n && n.d();
        }
    };
}
function Um(i, e, t) {
    let n, o = K, l = ()=>(o(), o = Ro(s, (g)=>t(6, n = g)), s);
    i.$$.on_destroy.push(()=>o());
    let { data: s } = e;
    l();
    let a, r, c, f, h;
    return i.$$set = (g)=>{
        "data" in g && l(t(0, s = g.data));
    }, i.$$.update = ()=>{
        i.$$.dirty & 64 && (t(1, a = !n), t(2, r = n?.type === je.BACKWARD_SEEK), t(3, c = n?.type === je.FORWARD_SEEK), t(4, f = n?.type), n?.t ? t(5, h = U(n.t.key, {
            value: n.t.value || ""
        })) : t(5, h = n?.text));
    }, [
        s,
        a,
        r,
        c,
        f,
        h,
        n
    ];
}
class qm extends ke {
    constructor(e){
        super(), _e(this, e, Um, Fm, ge, {
            data: 0
        }, Hm);
    }
}
function Wm(i) {
    Fe(i, "v-1yzc86r", ".immersive-controls.v-1yzc86r{position:absolute;display:flex;flex-direction:row;top:10px;left:10px;width:56px;height:56px;background-color:rgba(0, 0, 0, .56);border-radius:8px;transition-property:top, left;transition-duration:var(--controls-transition-duration);transition-timing-function:var(--controls-transition-fn)}.immersive-controls.m-shifted.v-1yzc86r{top:50px;left:20px}.button-block.v-1yzc86r{width:40px;height:40px;margin:auto auto;transform:rotate(45deg)}.button-row.v-1yzc86r{display:flex;flex-direction:row;position:relative}.button.v-1yzc86r{width:20px;height:20px;text-align:center;cursor:pointer}.button.v-1yzc86r svg{opacity:0.7;transition:opacity linear 0.2s}.button.button-up.v-1yzc86r svg{transform:rotate(-45deg) translate(-1px, -1px)}.button.button-right.v-1yzc86r svg{transform:rotate(45deg) translate(1px, -1px)}.button.button-down.v-1yzc86r svg{transform:rotate(135deg) translate(1px, -3px)}.button.button-left.v-1yzc86r svg{transform:rotate(-135deg) translate(-1px, -3px)}.button.v-1yzc86r:hover svg{opacity:1}");
}
function Zm(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v, b, _, V, A, S;
    return l = new En({
        props: {
            direction: "up"
        }
    }), r = new En({
        props: {
            direction: "up"
        }
    }), g = new En({
        props: {
            direction: "up"
        }
    }), _ = new En({
        props: {
            direction: "up"
        }
    }), {
        c () {
            e = k("div"), t = k("div"), n = k("div"), o = k("div"), D(l.$$.fragment), s = B(), a = k("div"), D(r.$$.fragment), c = B(), f = k("div"), h = k("div"), D(g.$$.fragment), v = B(), b = k("div"), D(_.$$.fragment), u(o, "class", "button button-up v-1yzc86r"), u(a, "class", "button button-right v-1yzc86r"), u(n, "class", "button-row v-1yzc86r"), u(h, "class", "button button-left v-1yzc86r"), u(b, "class", "button button-down v-1yzc86r"), u(f, "class", "button-row v-1yzc86r"), u(t, "class", "button-block v-1yzc86r"), u(t, "aria-hidden", "true"), u(e, "class", "immersive-controls v-1yzc86r"), u(e, "tabindex", "0"), u(e, "role", "button"), u(e, "aria-label", U("aria_label_spherical_control")), L(e, "m-shifted", i[0]);
        },
        m (P, N) {
            C(P, e, N), d(e, t), d(t, n), d(n, o), z(l, o, null), d(n, s), d(n, a), z(r, a, null), d(t, c), d(t, f), d(f, h), z(g, h, null), d(f, v), d(f, b), z(_, b, null), V = !0, A || (S = [
                Ae(o, "mousedown", i[1]),
                Ae(o, "mouseup", i[5]),
                Ae(o, "mouseleave", i[5]),
                Ae(a, "mousedown", i[3]),
                Ae(a, "mouseup", i[5]),
                Ae(a, "mouseleave", i[5]),
                Ae(h, "mousedown", i[4]),
                Ae(h, "mouseup", i[5]),
                Ae(h, "mouseleave", i[5]),
                Ae(b, "mousedown", i[2]),
                Ae(b, "mouseup", i[5]),
                Ae(b, "mouseleave", i[5]),
                Ae(e, "keydown", i[6]),
                Ae(e, "keyup", i[7])
            ], A = !0);
        },
        p (P, [N]) {
            (!V || N & 1) && L(e, "m-shifted", P[0]);
        },
        i (P) {
            V || (m(l.$$.fragment, P), m(r.$$.fragment, P), m(g.$$.fragment, P), m(_.$$.fragment, P), V = !0);
        },
        o (P) {
            p(l.$$.fragment, P), p(r.$$.fragment, P), p(g.$$.fragment, P), p(_.$$.fragment, P), V = !1;
        },
        d (P) {
            P && y(e), O(l), O(r), O(g), O(_), A = !1, xt(S);
        }
    };
}
function jm(i, e, t) {
    let { isShifted: n = !1 } = e;
    const o = vt(), l = new Set([
        He.ArrowUp,
        He.ArrowDown,
        He.ArrowLeft,
        He.ArrowRight
    ]), s = ()=>{
        o.actions.internal.startCameraManualRotation(0, 1);
    }, a = ()=>{
        o.actions.internal.startCameraManualRotation(0, -1);
    }, r = ()=>{
        o.actions.internal.startCameraManualRotation(1, 0);
    }, c = ()=>{
        o.actions.internal.startCameraManualRotation(-1, 0);
    }, f = ()=>(o.actions.internal.stopCameraManualRotation(), null), h = (v)=>{
        if (l.has(v.code)) switch(v.preventDefault(), v.stopPropagation(), v.code){
            case He.ArrowUp:
                s();
                break;
            case He.ArrowDown:
                a();
                break;
            case He.ArrowLeft:
                c();
                break;
            case He.ArrowRight:
                r();
                break;
        }
    }, g = (v)=>{
        l.has(v.code) && (v.preventDefault(), v.stopPropagation(), f());
    };
    return i.$$set = (v)=>{
        "isShifted" in v && t(0, n = v.isShifted);
    }, [
        n,
        s,
        a,
        r,
        c,
        f,
        h,
        g
    ];
}
class B1 extends ke {
    constructor(e){
        super(), _e(this, e, jm, Zm, ge, {
            isShifted: 0
        }, Wm);
    }
}
function Gm(i) {
    Fe(i, "v-ovfyp5", ".subtitles-container.v-ovfyp5.v-ovfyp5{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;transition:transform var(--controls-transition-duration)}.subtitles-container.shifted.v-ovfyp5.v-ovfyp5{transform:translateY(calc(var(--controls-height) * -1))}.subtitles-caption.v-ovfyp5.v-ovfyp5{position:absolute;left:4%;right:4%;bottom:4%;display:flex;justify-content:center}.subtitles-caption.mobile.v-ovfyp5.v-ovfyp5{bottom:8%}.subtitles-container.auto.v-ovfyp5 .subtitles-caption.v-ovfyp5{left:24%;right:24%}.caption.v-ovfyp5.v-ovfyp5{display:block;overflow-wrap:normal;padding:4px 8px;border-radius:4px;background:rgba(0, 0, 0, 0.4)}.subtitles-container.auto.v-ovfyp5 .caption.v-ovfyp5{width:100%}.caption-line.v-ovfyp5.v-ovfyp5{display:block;text-align:center}.subtitles-container.auto.v-ovfyp5 .caption-line.v-ovfyp5{text-align:left}.caption-segment.v-ovfyp5.v-ovfyp5{display:inline-block;line-height:1.2;font-size:13px;color:var(--white);white-space:pre-wrap}");
}
function Aa(i, e, t) {
    const n = i.slice();
    return n[16] = e[t].value, n;
}
function Ea(i, e, t) {
    const n = i.slice();
    return n[16] = e[t].value, n[17] = e[t].timeAppeared, n;
}
function La(i) {
    let e, t;
    function n(s, a) {
        return s[7] && s[8] ? Qm : s[5] ? Ym : Km;
    }
    let o = n(i), l = o(i);
    return {
        c () {
            e = k("div"), t = k("span"), l.c(), u(t, "class", "caption v-ovfyp5"), u(e, "class", "subtitles-caption v-ovfyp5"), L(e, "mobile", i[3]);
        },
        m (s, a) {
            C(s, e, a), d(e, t), l.m(t, null);
        },
        p (s, a) {
            o === (o = n(s)) && l ? l.p(s, a) : (l.d(1), l = o(s), l && (l.c(), l.m(t, null))), a & 8 && L(e, "mobile", s[3]);
        },
        d (s) {
            s && y(e), l.d();
        }
    };
}
function Km(i) {
    let e, t = Mt(i[1]), n = [];
    for(let o = 0; o < t.length; o += 1)n[o] = Va(Aa(i, t, o));
    return {
        c () {
            for(let o = 0; o < n.length; o += 1)n[o].c();
            e = ht();
        },
        m (o, l) {
            for(let s = 0; s < n.length; s += 1)n[s] && n[s].m(o, l);
            C(o, e, l);
        },
        p (o, l) {
            if (l & 18) {
                t = Mt(o[1]);
                let s;
                for(s = 0; s < t.length; s += 1){
                    const a = Aa(o, t, s);
                    n[s] ? n[s].p(a, l) : (n[s] = Va(a), n[s].c(), n[s].m(e.parentNode, e));
                }
                for(; s < n.length; s += 1)n[s].d(1);
                n.length = t.length;
            }
        },
        d (o) {
            o && y(e), sn(n, o);
        }
    };
}
function Ym(i) {
    let e, t, n = Mt(i[6]), o = [];
    for(let l = 0; l < n.length; l += 1)o[l] = Ma(Ea(i, n, l));
    return {
        c () {
            e = k("span"), t = k("span");
            for(let l = 0; l < o.length; l += 1)o[l].c();
            u(t, "class", "caption-segment v-ovfyp5"), At(t, "font-size", i[4] + "px"), u(e, "class", "caption-line v-ovfyp5");
        },
        m (l, s) {
            C(l, e, s), d(e, t);
            for(let a = 0; a < o.length; a += 1)o[a] && o[a].m(t, null);
        },
        p (l, s) {
            if (s & 68) {
                n = Mt(l[6]);
                let a;
                for(a = 0; a < n.length; a += 1){
                    const r = Ea(l, n, a);
                    o[a] ? o[a].p(r, s) : (o[a] = Ma(r), o[a].c(), o[a].m(t, null));
                }
                for(; a < o.length; a += 1)o[a].d(1);
                o.length = n.length;
            }
            s & 16 && At(t, "font-size", l[4] + "px");
        },
        d (l) {
            l && y(e), sn(o, l);
        }
    };
}
function Qm(i) {
    let e, t, n = U("subtitles_auto_caption") + "", o;
    return {
        c () {
            e = k("span"), t = k("span"), o = ze(n), u(t, "class", "caption-segment v-ovfyp5"), At(t, "font-size", i[4] + "px"), u(e, "class", "caption-line v-ovfyp5");
        },
        m (l, s) {
            C(l, e, s), d(e, t), d(t, o);
        },
        p (l, s) {
            s & 16 && At(t, "font-size", l[4] + "px");
        },
        d (l) {
            l && y(e);
        }
    };
}
function Va(i) {
    let e, t, n = i[16] + "", o, l;
    return {
        c () {
            e = k("span"), t = k("span"), o = ze(n), l = B(), u(t, "class", "caption-segment v-ovfyp5"), At(t, "font-size", i[4] + "px"), u(e, "class", "caption-line v-ovfyp5");
        },
        m (s, a) {
            C(s, e, a), d(e, t), d(t, o), d(e, l);
        },
        p (s, a) {
            a & 2 && n !== (n = s[16] + "") && Xe(o, n), a & 16 && At(t, "font-size", s[4] + "px");
        },
        d (s) {
            s && y(e);
        }
    };
}
function Ia(i) {
    let e = i[16] + "", t;
    return {
        c () {
            t = ze(e);
        },
        m (n, o) {
            C(n, t, o);
        },
        p (n, o) {
            o & 64 && e !== (e = n[16] + "") && Xe(t, e);
        },
        d (n) {
            n && y(t);
        }
    };
}
function Ma(i) {
    let e, t = (!i[17] || i[17] <= i[2]) && Ia(i);
    return {
        c () {
            t && t.c(), e = ht();
        },
        m (n, o) {
            t && t.m(n, o), C(n, e, o);
        },
        p (n, o) {
            !n[17] || n[17] <= n[2] ? t ? t.p(n, o) : (t = Ia(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
        },
        d (n) {
            n && y(e), t && t.d(n);
        }
    };
}
function Xm(i) {
    let e, t = i[1].length > 0 && La(i);
    return {
        c () {
            e = k("div"), t && t.c(), u(e, "class", "subtitles-container v-ovfyp5"), L(e, "shifted", i[0]), L(e, "auto", i[5] && !i[8]);
        },
        m (n, o) {
            C(n, e, o), t && t.m(e, null);
        },
        p (n, [o]) {
            n[1].length > 0 ? t ? t.p(n, o) : (t = La(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), o & 1 && L(e, "shifted", n[0]), o & 288 && L(e, "auto", n[5] && !n[8]);
        },
        i: K,
        o: K,
        d (n) {
            n && y(e), t && t.d();
        }
    };
}
function Jm(i, e, t) {
    let n, o, { shifted: l } = e, { captions: s } = e, { position: a } = e, { playerSize: r } = e, { isMobile: c = !1 } = e;
    const f = vt(), h = Yi(), g = f.state.currentSubtitle$;
    F(i, g, (P)=>t(12, n = P));
    const v = f.state.isAutoSubtitleCaptionVisible$;
    F(i, v, (P)=>t(8, o = P));
    let b, _, V, A, S;
    return Ki(()=>{
        S = window.setTimeout(()=>{
            v.set(!1);
        }, h.autoSubtitlesTimeout);
    }), No(()=>{
        window.clearTimeout(S);
    }), i.$$set = (P)=>{
        "shifted" in P && t(0, l = P.shifted), "captions" in P && t(1, s = P.captions), "position" in P && t(2, a = P.position), "playerSize" in P && t(11, r = P.playerSize), "isMobile" in P && t(3, c = P.isMobile);
    }, i.$$.update = ()=>{
        if (i.$$.dirty & 2048) {
            const P = r.width * .02;
            t(4, b = P <= h.minSubtitlesFontSize ? h.minSubtitlesFontSize : P);
        }
        i.$$.dirty & 2 && t(5, _ = s.some((P)=>P.type === "timestamp")), i.$$.dirty & 2 && t(6, V = s.reduce((P, { type: N, value: W })=>(N === "timestamp" ? P.push({
                timeAppeared: Number(W),
                value: ""
            }) : P.length === 0 ? P.push({
                value: String(W)
            }) : P[P.length - 1].value = String(W), P), [])), i.$$.dirty & 4096 && t(7, A = !!n.isAuto);
    }, [
        l,
        s,
        a,
        c,
        b,
        _,
        V,
        A,
        o,
        g,
        v,
        r,
        n
    ];
}
class N1 extends ke {
    constructor(e){
        super(), _e(this, e, Jm, Xm, ge, {
            shifted: 0,
            captions: 1,
            position: 2,
            playerSize: 11,
            isMobile: 3
        }, Gm);
    }
}
function xm(i) {
    Fe(i, "v-1o62kpz", ".wrapper.v-1o62kpz{height:100%;background-position:center;background-size:cover;display:flex;align-items:center;justify-content:center;font-size:16px;flex-direction:column}.icon_wrapper.v-1o62kpz{display:flex;flex-direction:column;align-items:center;width:400px}.icon.v-1o62kpz{width:50px;height:50px}.text.v-1o62kpz{margin-top:20px}");
}
function Ra(i) {
    let e, t, n;
    return {
        c () {
            e = k("div"), t = ze("\u0412\u0438\u0434\u0435\u043E \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043D\u0430 "), n = ze(i[1]), u(e, "class", "text v-1o62kpz");
        },
        m (o, l) {
            C(o, e, l), d(e, t), d(e, n);
        },
        p (o, l) {
            l & 2 && Xe(n, o[1]);
        },
        d (o) {
            o && y(e);
        }
    };
}
function $m(i) {
    let e, t, n, o, l, s, a = i[1] && Ra(i);
    return {
        c () {
            e = k("div"), t = k("div"), t.innerHTML = '<svg class="icon v-1o62kpz" width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2a9 9 0 0 1 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#fff"></path><path d="M0 0h24v24H0z"></path></g></svg>', n = B(), a && a.c(), u(t, "class", "icon_wrapper v-1o62kpz"), u(e, "class", "wrapper v-1o62kpz"), u(e, "style", o = `background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${i[0] || ""}')`);
        },
        m (r, c) {
            C(r, e, c), d(e, t), d(e, n), a && a.m(e, null), l || (s = Ae(e, "click", i[2]), l = !0);
        },
        p (r, [c]) {
            r[1] ? a ? a.p(r, c) : (a = Ra(r), a.c(), a.m(e, null)) : a && (a.d(1), a = null), c & 1 && o !== (o = `background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${r[0] || ""}')`) && u(e, "style", o);
        },
        i: K,
        o: K,
        d (r) {
            r && y(e), a && a.d(), l = !1, s();
        }
    };
}
function e3(i, e, t) {
    let { thumbUrl: n } = e, { chromecastDeviceName: o } = e;
    function l(s) {
        Jn.call(this, i, s);
    }
    return i.$$set = (s)=>{
        "thumbUrl" in s && t(0, n = s.thumbUrl), "chromecastDeviceName" in s && t(1, o = s.chromecastDeviceName);
    }, [
        n,
        o,
        l
    ];
}
class z1 extends ke {
    constructor(e){
        super(), _e(this, e, e3, $m, ge, {
            thumbUrl: 0,
            chromecastDeviceName: 1
        }, xm);
    }
}
function t3(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "d", "M460 193.998a3.997 3.997 0 0 1 3.997-3.998h122.006a4.003 4.003 0 0 1 3.997 3.998v82.004a3.997 3.997 0 0 1-3.997 3.998H463.997a4.003 4.003 0 0 1-3.997-3.998zm6 2.993c0-.546.45-.99.99-.99h4.02c.546 0 .99.45.99.99v4.02c0 .546-.45.99-.99.99h-4.02a.995.995 0 0 1-.99-.99zm0 12c0-.546.45-.99.99-.99h4.02c.546 0 .99.45.99.99v4.02c0 .546-.45.99-.99.99h-4.02a.995.995 0 0 1-.99-.99zm0 12c0-.546.45-.99.99-.99h4.02c.546 0 .99.45.99.99v4.02c0 .546-.45.99-.99.99h-4.02a.995.995 0 0 1-.99-.99zm0 12c0-.546.45-.99.99-.99h4.02c.546 0 .99.45.99.99v4.02c0 .546-.45.99-.99.99h-4.02a.995.995 0 0 1-.99-.99zm0 12c0-.546.45-.99.99-.99h4.02c.546 0 .99.45.99.99v4.02c0 .546-.45.99-.99.99h-4.02a.995.995 0 0 1-.99-.99zm0 12c0-.546.45-.99.99-.99h4.02c.546 0 .99.45.99.99v4.02c0 .546-.45.99-.99.99h-4.02a.995.995 0 0 1-.99-.99zm0 12c0-.546.45-.99.99-.99h4.02c.546 0 .99.45.99.99v4.02c0 .546-.45.99-.99.99h-4.02a.995.995 0 0 1-.99-.99zm112-72c0-.546.45-.99.99-.99h4.02c.546 0 .99.45.99.99v4.02c0 .546-.45.99-.99.99h-4.02a.995.995 0 0 1-.99-.99zm0 12c0-.546.45-.99.99-.99h4.02c.546 0 .99.45.99.99v4.02c0 .546-.45.99-.99.99h-4.02a.995.995 0 0 1-.99-.99zm0 12c0-.546.45-.99.99-.99h4.02c.546 0 .99.45.99.99v4.02c0 .546-.45.99-.99.99h-4.02a.995.995 0 0 1-.99-.99zm0 12c0-.546.45-.99.99-.99h4.02c.546 0 .99.45.99.99v4.02c0 .546-.45.99-.99.99h-4.02a.995.995 0 0 1-.99-.99zm0 12c0-.546.45-.99.99-.99h4.02c.546 0 .99.45.99.99v4.02c0 .546-.45.99-.99.99h-4.02a.995.995 0 0 1-.99-.99zm0 12c0-.546.45-.99.99-.99h4.02c.546 0 .99.45.99.99v4.02c0 .546-.45.99-.99.99h-4.02a.995.995 0 0 1-.99-.99zm0 12c0-.546.45-.99.99-.99h4.02c.546 0 .99.45.99.99v4.02c0 .546-.45.99-.99.99h-4.02a.995.995 0 0 1-.99-.99zM507 232a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm36 0a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-18.05 15c6.05 0 11.624 4.446 11.944 4.65 2.106 1.35 3.252.772 3.957.156s1.15-2.806-1.044-4.657c-1.735-1.48-5.806-5.16-14.856-5.15s-12.95 3.5-14.792 5.185c-1.84 1.685-2.288 3.498-.973 4.657 1.315 1.158 2.315 1.158 4.357-.327-.007.007 5.357-4.515 11.408-4.515z"), u(t, "fill", "#fff"), u(t, "fill-rule", "evenodd"), u(e, "width", "200"), u(e, "height", "200"), u(e, "viewBox", "460 190 130 90"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "error-icon");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class i3 extends ke {
    constructor(e){
        super(), _e(this, e, null, t3, ge, {});
    }
}
function n3(i) {
    Fe(i, "v-13zpvm8", ".container.v-13zpvm8{position:absolute;top:0;bottom:0;left:0;right:0;background:#000;display:flex;align-items:center;justify-content:center}");
}
function o3(i) {
    let e, t, n;
    return t = new i3({}), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "container v-13zpvm8");
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        p: K,
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
class O1 extends ke {
    constructor(e){
        super(), _e(this, e, null, o3, ge, {}, n3);
    }
}
function l3(i) {
    Fe(i, "v-17wno3", ".container.v-17wno3.v-17wno3{position:absolute;top:0;bottom:0;left:0;right:0;background-position:center;background-size:cover;cursor:pointer;transition:opacity 0.2s, visibility 0.2s;will-change:opacity}.container.hidden.v-17wno3.v-17wno3{opacity:0;visibility:hidden}.playButton.v-17wno3.v-17wno3{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:var(--big-play-size);height:var(--big-play-size);display:flex;align-items:center;justify-content:center}.playButtonBackground.v-17wno3.v-17wno3{position:absolute;top:0;bottom:0;left:0;right:0;border-radius:var(--big-play-radius);background-color:var(--big-play-bg-color);transition:background 0.2s, transform 0.2s;transition-timing-function:ease-out;will-change:background, transform}.container.v-17wno3:hover .playButtonBackground.v-17wno3{background-color:var(--big-play-hover-bg-color);transform:scale(1.15)}.playButton.v-17wno3 svg{transform:scale(2)}");
}
function s3(i) {
    let e, t, n, o, l, s, a, r, c;
    return l = new dl({}), {
        c () {
            e = k("div"), t = k("div"), n = k("div"), o = B(), D(l.$$.fragment), u(n, "class", "playButtonBackground v-17wno3"), u(t, "class", "playButton v-17wno3"), u(e, "class", "container v-17wno3"), u(e, "style", s = `background-color: #222; background-image: url('${i[0] || ""}')`), L(e, "hidden", i[1]);
        },
        m (f, h) {
            C(f, e, h), d(e, t), d(t, n), d(t, o), z(l, t, null), a = !0, r || (c = Ae(e, "click", rt(function() {
                kn(i[2]) && i[2].apply(this, arguments);
            })), r = !0);
        },
        p (f, [h]) {
            i = f, (!a || h & 1 && s !== (s = `background-color: #222; background-image: url('${i[0] || ""}')`)) && u(e, "style", s), (!a || h & 2) && L(e, "hidden", i[1]);
        },
        i (f) {
            a || (m(l.$$.fragment, f), a = !0);
        },
        o (f) {
            p(l.$$.fragment, f), a = !1;
        },
        d (f) {
            f && y(e), O(l), r = !1, c();
        }
    };
}
function a3(i, e, t) {
    let { thumbUrl: n } = e, { hidden: o } = e, { startVideo: l } = e;
    return i.$$set = (s)=>{
        "thumbUrl" in s && t(0, n = s.thumbUrl), "hidden" in s && t(1, o = s.hidden), "startVideo" in s && t(2, l = s.startVideo);
    }, [
        n,
        o,
        l
    ];
}
class D1 extends ke {
    constructor(e){
        super(), _e(this, e, a3, s3, ge, {
            thumbUrl: 0,
            hidden: 1,
            startVideo: 2
        }, l3);
    }
}
function r3(i) {
    Fe(i, "v-1bcvcf2", `.title.v-1bcvcf2{position:absolute;pointer-events:none;left:0;top:0;width:100%;height:var(--controls-gradient-height);font-size:15px;color:var(--white);box-sizing:border-box;padding:18px 20px 10px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;transition-property:visibility, transform, opacity;transition-duration:var(--controls-transition-duration);transition-timing-function:var(--controls-transition-fn);will-change:transform, opacity;background:linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.02) 19%,
      rgba(0, 0, 0, 0.10) 34%,
      rgba(0, 0, 0, 0.40) 60%,
      rgba(0, 0, 0, 0.60) 100%
    )}.hidden.v-1bcvcf2{visibility:hidden;transform:translateY(calc(var(--controls-gradient-height) * -1));opacity:0}`);
}
function u3(i) {
    let e, t;
    return {
        c () {
            e = k("div"), t = ze(i[0]), u(e, "class", "title v-1bcvcf2"), L(e, "hidden", i[1]);
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p (n, [o]) {
            o & 1 && Xe(t, n[0]), o & 2 && L(e, "hidden", n[1]);
        },
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
function c3(i, e, t) {
    let { title: n = "" } = e, { isHidden: o = !1 } = e;
    return i.$$set = (l)=>{
        "title" in l && t(0, n = l.title), "isHidden" in l && t(1, o = l.isHidden);
    }, [
        n,
        o
    ];
}
class f3 extends ke {
    constructor(e){
        super(), _e(this, e, c3, u3, ge, {
            title: 0,
            isHidden: 1
        }, r3);
    }
}
function d3(i) {
    Fe(i, "v-1qpxtfg", ".timer__container.v-1qpxtfg{display:flex;align-items:flex-start;justify-content:center}.cell.v-1qpxtfg{display:flex;flex-direction:column;align-items:center;width:62px}.cell__value.v-1qpxtfg{font-size:48px;line-height:1.2;font-weight:700}.cell__unit.v-1qpxtfg{font-size:14px;line-height:1.2;font-weight:400}.timer__points.v-1qpxtfg{display:inline-block;margin:0 8px;font-size:42px;line-height:1.2;font-weight:600}");
}
function Ba(i) {
    let e, t, n, o, l, s, a;
    return {
        c () {
            e = k("div"), t = k("span"), n = ze(i[0]), o = B(), l = k("span"), l.textContent = `${U("waiting_live_day_value")}`, s = B(), a = k("span"), a.textContent = `${U("waiting_live_colon")}`, u(t, "class", "cell__value v-1qpxtfg"), u(l, "class", "cell__unit v-1qpxtfg"), u(e, "class", "timer__cell cell v-1qpxtfg"), u(a, "class", "timer__points v-1qpxtfg");
        },
        m (r, c) {
            C(r, e, c), d(e, t), d(t, n), d(e, o), d(e, l), C(r, s, c), C(r, a, c);
        },
        p (r, c) {
            c & 1 && Xe(n, r[0]);
        },
        d (r) {
            r && (y(e), y(s), y(a));
        }
    };
}
function Na(i) {
    let e, t, n, o, l, s, a;
    return {
        c () {
            e = k("div"), t = k("span"), n = ze(i[1]), o = B(), l = k("span"), l.textContent = `${U("waiting_live_hour_value")}`, s = B(), a = k("span"), a.textContent = `${U("waiting_live_colon")}`, u(t, "class", "cell__value v-1qpxtfg"), u(l, "class", "cell__unit v-1qpxtfg"), u(e, "class", "timer__cell cell v-1qpxtfg"), u(a, "class", "timer__points v-1qpxtfg");
        },
        m (r, c) {
            C(r, e, c), d(e, t), d(t, n), d(e, o), d(e, l), C(r, s, c), C(r, a, c);
        },
        p (r, c) {
            c & 2 && Xe(n, r[1]);
        },
        d (r) {
            r && (y(e), y(s), y(a));
        }
    };
}
function za(i) {
    let e, t, n, o, l, s, a;
    return {
        c () {
            e = k("div"), t = k("span"), n = ze(i[2]), o = B(), l = k("span"), l.textContent = `${U("waiting_live_minute_value")}`, s = B(), a = k("span"), a.textContent = `${U("waiting_live_colon")}`, u(t, "class", "cell__value v-1qpxtfg"), u(l, "class", "cell__unit v-1qpxtfg"), u(e, "class", "timer__cell cell v-1qpxtfg"), u(a, "class", "timer__points v-1qpxtfg");
        },
        m (r, c) {
            C(r, e, c), d(e, t), d(t, n), d(e, o), d(e, l), C(r, s, c), C(r, a, c);
        },
        p (r, c) {
            c & 4 && Xe(n, r[2]);
        },
        d (r) {
            r && (y(e), y(s), y(a));
        }
    };
}
function Oa(i) {
    let e, t, n, o, l;
    return {
        c () {
            e = k("div"), t = k("span"), n = ze(i[3]), o = B(), l = k("span"), l.textContent = `${U("waiting_live_second_value")}`, u(t, "class", "cell__value v-1qpxtfg"), u(l, "class", "cell__unit v-1qpxtfg"), u(e, "class", "timer__cell cell v-1qpxtfg");
        },
        m (s, a) {
            C(s, e, a), d(e, t), d(t, n), d(e, o), d(e, l);
        },
        p (s, a) {
            a & 8 && Xe(n, s[3]);
        },
        d (s) {
            s && y(e);
        }
    };
}
function m3(i) {
    let e, t, n, o, l = i[0] && Ba(i), s = i[1] && Na(i), a = i[2] && za(i), r = i[3] && Oa(i);
    return {
        c () {
            e = k("div"), l && l.c(), t = B(), s && s.c(), n = B(), a && a.c(), o = B(), r && r.c(), u(e, "class", "timer__container v-1qpxtfg");
        },
        m (c, f) {
            C(c, e, f), l && l.m(e, null), d(e, t), s && s.m(e, null), d(e, n), a && a.m(e, null), d(e, o), r && r.m(e, null);
        },
        p (c, [f]) {
            c[0] ? l ? l.p(c, f) : (l = Ba(c), l.c(), l.m(e, t)) : l && (l.d(1), l = null), c[1] ? s ? s.p(c, f) : (s = Na(c), s.c(), s.m(e, n)) : s && (s.d(1), s = null), c[2] ? a ? a.p(c, f) : (a = za(c), a.c(), a.m(e, o)) : a && (a.d(1), a = null), c[3] ? r ? r.p(c, f) : (r = Oa(c), r.c(), r.m(e, null)) : r && (r.d(1), r = null);
        },
        i: K,
        o: K,
        d (c) {
            c && y(e), l && l.d(), s && s.d(), a && a.d(), r && r.d();
        }
    };
}
function h3(i, e, t) {
    let { startTime: n } = e, { onTimerOver: o } = e, l, s, a, r, c;
    const f = (v)=>String(v).padStart(2, "0"), h = (v)=>{
        const b = Math.floor(v / 86400);
        b && (v -= b * 86400, t(0, l = f(b)));
        const _ = Math.floor(v / 3600);
        t(1, s = f(_));
        const V = Math.floor(v / 60) % 60;
        t(2, a = f(V));
        const A = v % 60;
        t(3, r = f(A));
    }, g = ()=>{
        const v = Math.floor(Date.now() / 1e3), b = n - v;
        h(b), b >= 1 ? c = requestAnimationFrame(g) : o();
    };
    return Ki(()=>{
        c = requestAnimationFrame(g);
    }), No(()=>{
        cancelAnimationFrame(c);
    }), i.$$set = (v)=>{
        "startTime" in v && t(4, n = v.startTime), "onTimerOver" in v && t(5, o = v.onTimerOver);
    }, [
        l,
        s,
        a,
        r,
        n,
        o
    ];
}
class p3 extends ke {
    constructor(e){
        super(), _e(this, e, h3, m3, ge, {
            startTime: 4,
            onTimerOver: 5
        }, d3);
    }
}
function g3(i) {
    let e, t, n, o, l;
    return {
        c () {
            e = I("svg"), t = I("path"), n = I("path"), o = I("path"), l = I("path"), u(t, "fill", "#fefffe"), u(t, "d", "M179.5-.5h40c85.04 12.447 142.207 59.113 171.5 140 3.816 13.264 6.649 26.597 8.5 40v40c-3.699 34.4-15.533 65.733-35.5 94-6.417-8.409-14.584-14.576-24.5-18.5-1.017-1.049-1.184-2.216-.5-3.5 26.495-41.134 34.161-85.467 23-133-21.84-72.167-70.006-114-144.5-125.5C147.251 28.707 93.084 55.874 55 114.5c-26.93 49.402-29.93 100.068-9 152a152.324 152.324 0 0 0 14 25c.684 1.284.517 2.451-.5 3.5-9.916 3.924-18.083 10.091-24.5 18.5-19.967-28.267-31.8-59.6-35.5-94v-40C11.947 94.46 58.613 37.293 139.5 8c13.264-3.816 26.597-6.649 40-8.5Z"), At(t, "opacity", ".965"), u(n, "fill", "#fefffe"), u(n, "d", "M183.5 63.5c57.529-3.65 102.029 18.35 133.5 66 21.628 40.092 24.295 81.425 8 124a186.647 186.647 0 0 1-17.5 29.5 632.842 632.842 0 0 1-38-7c36.445-38.176 42.945-81.01 19.5-128.5-24.178-37.504-58.678-54.337-103.5-50.5-49.5 9.5-79 39-88.5 88.5-3.944 35.587 6.889 65.753 32.5 90.5a1149.466 1149.466 0 0 0-36 7.5c-1.53-.029-2.696-.696-3.5-2-29.298-42.431-34.631-87.764-16-136 21.866-46.852 58.366-74.185 109.5-82Z"), At(n, "opacity", ".965"), u(o, "fill", "#fefffe"), u(o, "d", "M187.5 127.5c44.524-2.948 72.357 17.052 83.5 60 3.431 44.55-16.403 72.383-59.5 83.5-44.55 3.431-72.383-16.403-83.5-59.5-3.229-44.571 16.604-72.571 59.5-84Z"), At(o, "opacity", ".985"), u(l, "fill", "#fefffe"), u(l, "d", "M219.5 399.5h-40c-44.969-5.321-83.969-23.321-117-54a31.738 31.738 0 0 1 3.5-10c5.692-6.431 12.526-11.264 20.5-14.5 36.524-12.956 74.191-18.79 113-17.5 38.809-1.29 76.476 4.544 113 17.5 7.974 3.236 14.808 8.069 20.5 14.5a31.731 31.731 0 0 1 3.5 10c-33.031 30.679-72.031 48.679-117 54Z"), At(l, "opacity", ".986"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "viewBox", "0 0 400 400"), u(e, "aria-hidden", "true"), u(e, "data-testid", "podcast-icon"), At(e, "shape-rendering", "geometricPrecision"), At(e, "text-rendering", "geometricPrecision"), At(e, "image-rendering", "optimizeQuality"), At(e, "fill-rule", "evenodd"), At(e, "clip-rule", "evenodd"), At(e, "width", "100%"), At(e, "height", "100%");
        },
        m (s, a) {
            C(s, e, a), d(e, t), d(e, n), d(e, o), d(e, l);
        },
        p: K,
        i: K,
        o: K,
        d (s) {
            s && y(e);
        }
    };
}
class b3 extends ke {
    constructor(e){
        super(), _e(this, e, null, g3, ge, {});
    }
}
function v3(i) {
    Fe(i, "v-15pewff", ".waiting-container.v-15pewff{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--black);background-position:center;background-size:cover;background-repeat:no-repeat}.waiting-container.v-15pewff::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.56);z-index:1}.upcoming.v-15pewff{position:absolute;top:50%;left:0;width:100%;transform:translateY(-50%);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:0}.upcoming-icon.v-15pewff{width:20%;max-width:200px;margin-bottom:20px}.upcoming__title.v-15pewff{font-size:14px;line-height:1.2;font-weight:400}.waiting-timer.v-15pewff{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:2}.timer.v-15pewff{display:flex;flex-direction:column;align-items:center;justify-content:center}.timer__title.v-15pewff{display:inline-block;vertical-align:middle;margin-bottom:12px;font-size:14px;line-height:1.2;font-weight:400}");
}
function _3(i) {
    let e, t, n, o, l;
    return o = new p3({
        props: {
            startTime: i[1] || 0,
            onTimerOver: i[3]
        }
    }), {
        c () {
            e = k("div"), t = k("span"), t.textContent = `${U("waiting_live_timer_title")}`, n = B(), D(o.$$.fragment), u(t, "class", "timer__title v-15pewff"), u(e, "class", "waiting-timer timer v-15pewff");
        },
        m (s, a) {
            C(s, e, a), d(e, t), d(e, n), z(o, e, null), l = !0;
        },
        p (s, a) {
            const r = {};
            a & 2 && (r.startTime = s[1] || 0), a & 4 && (r.onTimerOver = s[3]), o.$set(r);
        },
        i (s) {
            l || (m(o.$$.fragment, s), l = !0);
        },
        o (s) {
            p(o.$$.fragment, s), l = !1;
        },
        d (s) {
            s && y(e), O(o);
        }
    };
}
function k3(i) {
    let e, t, n, o, l, s;
    return n = new b3({}), {
        c () {
            e = k("div"), t = k("div"), D(n.$$.fragment), o = B(), l = k("span"), l.textContent = `${U("waiting_live_upcoming_title")}`, u(t, "class", "upcoming-icon v-15pewff"), u(l, "class", "upcoming__title v-15pewff"), u(e, "class", "upcoming v-15pewff");
        },
        m (a, r) {
            C(a, e, r), d(e, t), z(n, t, null), d(e, o), d(e, l), s = !0;
        },
        p: K,
        i (a) {
            s || (m(n.$$.fragment, a), s = !0);
        },
        o (a) {
            p(n.$$.fragment, a), s = !1;
        },
        d (a) {
            a && y(e), O(n);
        }
    };
}
function w3(i) {
    let e, t, n, o, l;
    const s = [
        k3,
        _3
    ], a = [];
    function r(c, f) {
        return c[2] ? 0 : 1;
    }
    return t = r(i), n = a[t] = s[t](i), {
        c () {
            e = k("div"), n.c(), u(e, "class", "waiting-container v-15pewff"), u(e, "style", o = `background-image: url(${i[2] ? "" : i[0]})`);
        },
        m (c, f) {
            C(c, e, f), a[t].m(e, null), l = !0;
        },
        p (c, [f]) {
            let h = t;
            t = r(c), t === h ? a[t].p(c, f) : (me(), p(a[h], 1, 1, ()=>{
                a[h] = null;
            }), he(), n = a[t], n ? n.p(c, f) : (n = a[t] = s[t](c), n.c()), m(n, 1), n.m(e, null)), (!l || f & 5 && o !== (o = `background-image: url(${c[2] ? "" : c[0]})`)) && u(e, "style", o);
        },
        i (c) {
            l || (m(n), l = !0);
        },
        o (c) {
            p(n), l = !1;
        },
        d (c) {
            c && y(e), a[t].d();
        }
    };
}
function y3(i, e, t) {
    let n, { thumbUrl: o } = e, { startTime: l } = e;
    const s = ()=>t(2, n = !0);
    return i.$$set = (a)=>{
        "thumbUrl" in a && t(0, o = a.thumbUrl), "startTime" in a && t(1, l = a.startTime);
    }, i.$$.update = ()=>{
        i.$$.dirty & 2 && t(2, n = l === void 0 || l < Math.floor(Date.now() / 1e3));
    }, [
        o,
        l,
        n,
        s
    ];
}
class H1 extends ke {
    constructor(e){
        super(), _e(this, e, y3, w3, ge, {
            thumbUrl: 0,
            startTime: 1
        }, v3);
    }
}
function C3(i) {
    Fe(i, "v-1bcnzdw", ".waiting-container.v-1bcnzdw{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:var(--black)}.waiting-title.v-1bcnzdw{padding:20px;text-align:center;font-size:20px;line-height:1.2;font-weight:400}");
}
function P3(i) {
    let e, t;
    return {
        c () {
            e = k("div"), t = k("p"), t.textContent = `${U("waiting_record_title")}`, u(t, "class", "waiting-title v-1bcnzdw"), u(e, "class", "waiting-container v-1bcnzdw");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p: K,
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
class F1 extends ke {
    constructor(e){
        super(), _e(this, e, null, P3, ge, {}, C3);
    }
}
const { window: S3 } = Ar;
function T3(i) {
    Fe(i, "v-1o4wf3x", ".player-wrapper.v-1o4wf3x{position:absolute;width:100%;height:100%}.player-wrapper.v-1o4wf3x .player-media{position:absolute;left:0;top:0;width:100%;height:100%;background:var(--black);transition:transform 0.2s ease-in-out}.spherical-video-icon.v-1o4wf3x{display:inline-block;position:absolute;top:calc(50% - 23px);left:calc(50% - 38px)}.video-wrapper.v-1o4wf3x,.video-container.v-1o4wf3x,.ads-container.v-1o4wf3x{position:absolute;width:100%;height:100%;left:0;top:0}.video-wrapper.v-1o4wf3x{z-index:var(--video-container-z-index);background:var(--black)}.video-container.v-1o4wf3x{z-index:var(--video-container-z-index);transition:var(--rotate-transition-duration) ease all}.video-container.fast-rotate.v-1o4wf3x{transition:none}.nocursor.v-1o4wf3x{cursor:none}.ads-container.v-1o4wf3x{background:var(--black)}");
}
function Da(i) {
    let e, t;
    return e = new H1({
        props: {
            thumbUrl: i[3],
            startTime: i[5]?.startTime
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 8 && (l.thumbUrl = n[3]), o[0] & 32 && (l.startTime = n[5]?.startTime), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Ha(i) {
    let e, t;
    return e = new F1({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Fa(i) {
    let e, t, n;
    return t = new e1({
        props: {
            adsSlotId: i[9],
            adsParams: i[10],
            adsPreviewParam: i[11],
            duration: i[12]
        }
    }), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "ads-container v-1o4wf3x"), L(e, "hidden", i[36] !== Ne.Ads);
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        p (o, l) {
            const s = {};
            l[0] & 512 && (s.adsSlotId = o[9]), l[0] & 1024 && (s.adsParams = o[10]), l[0] & 2048 && (s.adsPreviewParam = o[11]), l[0] & 4096 && (s.duration = o[12]), t.$set(s), (!n || l[1] & 32) && L(e, "hidden", o[36] !== Ne.Ads);
        },
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function Ua(i) {
    let e, t;
    return e = new cf({
        props: {
            title: i[18],
            thumb: i[19],
            playNextVideo: i[23]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 262144 && (l.title = n[18]), o[0] & 524288 && (l.thumb = n[19]), o[0] & 8388608 && (l.playNextVideo = n[23]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function qa(i) {
    let e, t;
    return e = new f3({
        props: {
            title: i[2],
            isHidden: !i[34]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 4 && (l.title = n[2]), o[1] & 8 && (l.isHidden = !n[34]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Wa(i) {
    let e, t;
    return e = new B1({
        props: {
            isShifted: i[36] === Ne.Video && i[34]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[1] & 40 && (l.isShifted = n[36] === Ne.Video && n[34]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Za(i) {
    let e, t, n;
    return t = new Gr({
        props: {
            ariaLabel: U("video360")
        }
    }), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "spherical-video-icon v-1o4wf3x");
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        p: K,
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function ja(i) {
    let e, t;
    return e = new z1({
        props: {
            thumbUrl: i[3],
            chromecastDeviceName: i[54]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 8 && (l.thumbUrl = n[3]), o[1] & 8388608 && (l.chromecastDeviceName = n[54]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Ga(i) {
    let e, t;
    return e = new N1({
        props: {
            shifted: i[34],
            captions: i[56],
            position: i[57],
            playerSize: i[32]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[1] & 8 && (l.shifted = n[34]), o[1] & 33554432 && (l.captions = n[56]), o[1] & 67108864 && (l.position = n[57]), o[1] & 2 && (l.playerSize = n[32]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Ka(i) {
    let e, t;
    return e = new t1({
        props: {
            showControls: i[34]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[1] & 8 && (l.showControls = n[34]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Ya(i) {
    let e, t, n, o, l;
    return t = new O1({}), {
        c () {
            e = k("div"), D(t.$$.fragment);
        },
        m (s, a) {
            C(s, e, a), z(t, e, null), n = !0, o || (l = [
                Ae(e, "contextmenu", di(i[106])),
                Ae(e, "click", rt(i[117]))
            ], o = !0);
        },
        p: K,
        i (s) {
            n || (m(t.$$.fragment, s), n = !0);
        },
        o (s) {
            p(t.$$.fragment, s), n = !1;
        },
        d (s) {
            s && y(e), O(t), o = !1, xt(l);
        }
    };
}
function Qa(i) {
    let e, t;
    return e = new u1({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Xa(i) {
    let e, t;
    return e = new Mf({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function Ja(i) {
    let e, t;
    return e = new o1({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function xa(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v, b, _, V, A, S, P, N, W, X, Z, T, te, j;
    e = new D1({
        props: {
            hidden: i[36] !== Ne.Thumb || i[35] || i[92] && i[6],
            thumbUrl: i[3],
            startVideo: i[29]
        }
    });
    let ie = i[36] === Ne.WaitingLive && Da(i), G = i[36] === Ne.WaitingRecord && Ha(), J = i[8] && i[22] && Fa(i), ue = i[31] && i[18] && i[19] && Ua(i), w = i[44] && qa(i), oe = i[50] && Wa(i), fe = i[53] && Za(), ve = i[37] && ja(i), Me = i[55].value !== "off" && Ga(i), Ee = i[1].features.annotations && Ka(i), we = i[35] && Ya(i);
    function H(R) {
        i[146](R);
    }
    let M = {
        bottomHidden: i[36] === Ne.Thumb || i[36] === Ne.WaitingLive || i[36] === Ne.WaitingRecord,
        bottomNoSmooth: i[51],
        showControls: i[34],
        isAds: i[36] === Ne.Ads,
        canRewindLive: i[7] && i[58] !== 0,
        logoClickable: i[13],
        logoHidden: i[14],
        videoLogoUrl: i[4],
        showNextPrevButtons: i[15],
        nextButtonActive: i[16],
        prevButtonActive: i[17],
        isOneVideoPlaylist: i[20],
        supportLink: i[21],
        customFullscreenSupported: L3,
        playNextVideo: i[23],
        playPrevVideo: i[24],
        repeatPlaylist: i[25],
        toggleFullscreen: i[104],
        returnFocus: i[145],
        seekToInteractive: i[26],
        toggleGraph: i[27],
        playPrevChapter: i[28]
    };
    i[39] !== void 0 && (M.controlsElementRef = i[39]), b = new M1({
        props: M
    }), We.push(()=>bt(b, "controlsElementRef", H)), A = new n1({
        props: {
            isLive: i[59],
            isHidden: !i[43],
            isPlaying: i[60],
            position: i[57],
            duration: i[61]
        }
    }), P = new qm({
        props: {
            data: i[101]
        }
    }), W = new qc({
        props: {
            supportLink: i[21],
            returnFocus: i[147],
            visible: i[49],
            playerContainerRef: i[38],
            controlsContainerRef: i[39],
            x: i[40],
            y: i[41]
        }
    });
    let Y = i[42] && Qa(), pe = i[62] && Xa(), ee = i[63] && Ja();
    return {
        c () {
            D(e.$$.fragment), t = B(), ie && ie.c(), n = B(), G && G.c(), o = B(), J && J.c(), l = B(), ue && ue.c(), s = B(), w && w.c(), a = B(), oe && oe.c(), r = B(), fe && fe.c(), c = B(), ve && ve.c(), f = B(), Me && Me.c(), h = B(), Ee && Ee.c(), g = B(), we && we.c(), v = B(), D(b.$$.fragment), V = B(), D(A.$$.fragment), S = B(), D(P.$$.fragment), N = B(), D(W.$$.fragment), X = B(), Y && Y.c(), Z = B(), pe && pe.c(), T = B(), ee && ee.c(), te = ht();
        },
        m (R, Q) {
            z(e, R, Q), C(R, t, Q), ie && ie.m(R, Q), C(R, n, Q), G && G.m(R, Q), C(R, o, Q), J && J.m(R, Q), C(R, l, Q), ue && ue.m(R, Q), C(R, s, Q), w && w.m(R, Q), C(R, a, Q), oe && oe.m(R, Q), C(R, r, Q), fe && fe.m(R, Q), C(R, c, Q), ve && ve.m(R, Q), C(R, f, Q), Me && Me.m(R, Q), C(R, h, Q), Ee && Ee.m(R, Q), C(R, g, Q), we && we.m(R, Q), C(R, v, Q), z(b, R, Q), C(R, V, Q), z(A, R, Q), C(R, S, Q), z(P, R, Q), C(R, N, Q), z(W, R, Q), C(R, X, Q), Y && Y.m(R, Q), C(R, Z, Q), pe && pe.m(R, Q), C(R, T, Q), ee && ee.m(R, Q), C(R, te, Q), j = !0;
        },
        p (R, Q) {
            const Ve = {};
            Q[0] & 64 | Q[1] & 48 && (Ve.hidden = R[36] !== Ne.Thumb || R[35] || R[92] && R[6]), Q[0] & 8 && (Ve.thumbUrl = R[3]), Q[0] & 536870912 && (Ve.startVideo = R[29]), e.$set(Ve), R[36] === Ne.WaitingLive ? ie ? (ie.p(R, Q), Q[1] & 32 && m(ie, 1)) : (ie = Da(R), ie.c(), m(ie, 1), ie.m(n.parentNode, n)) : ie && (me(), p(ie, 1, 1, ()=>{
                ie = null;
            }), he()), R[36] === Ne.WaitingRecord ? G ? Q[1] & 32 && m(G, 1) : (G = Ha(), G.c(), m(G, 1), G.m(o.parentNode, o)) : G && (me(), p(G, 1, 1, ()=>{
                G = null;
            }), he()), R[8] && R[22] ? J ? (J.p(R, Q), Q[0] & 4194560 && m(J, 1)) : (J = Fa(R), J.c(), m(J, 1), J.m(l.parentNode, l)) : J && (me(), p(J, 1, 1, ()=>{
                J = null;
            }), he()), R[31] && R[18] && R[19] ? ue ? (ue.p(R, Q), Q[0] & 786432 | Q[1] & 1 && m(ue, 1)) : (ue = Ua(R), ue.c(), m(ue, 1), ue.m(s.parentNode, s)) : ue && (me(), p(ue, 1, 1, ()=>{
                ue = null;
            }), he()), R[44] ? w ? (w.p(R, Q), Q[1] & 8192 && m(w, 1)) : (w = qa(R), w.c(), m(w, 1), w.m(a.parentNode, a)) : w && (me(), p(w, 1, 1, ()=>{
                w = null;
            }), he()), R[50] ? oe ? (oe.p(R, Q), Q[1] & 524288 && m(oe, 1)) : (oe = Wa(R), oe.c(), m(oe, 1), oe.m(r.parentNode, r)) : oe && (me(), p(oe, 1, 1, ()=>{
                oe = null;
            }), he()), R[53] ? fe ? (fe.p(R, Q), Q[1] & 4194304 && m(fe, 1)) : (fe = Za(), fe.c(), m(fe, 1), fe.m(c.parentNode, c)) : fe && (me(), p(fe, 1, 1, ()=>{
                fe = null;
            }), he()), R[37] ? ve ? (ve.p(R, Q), Q[1] & 64 && m(ve, 1)) : (ve = ja(R), ve.c(), m(ve, 1), ve.m(f.parentNode, f)) : ve && (me(), p(ve, 1, 1, ()=>{
                ve = null;
            }), he()), R[55].value !== "off" ? Me ? (Me.p(R, Q), Q[1] & 16777216 && m(Me, 1)) : (Me = Ga(R), Me.c(), m(Me, 1), Me.m(h.parentNode, h)) : Me && (me(), p(Me, 1, 1, ()=>{
                Me = null;
            }), he()), R[1].features.annotations ? Ee ? (Ee.p(R, Q), Q[0] & 2 && m(Ee, 1)) : (Ee = Ka(R), Ee.c(), m(Ee, 1), Ee.m(g.parentNode, g)) : Ee && (me(), p(Ee, 1, 1, ()=>{
                Ee = null;
            }), he()), R[35] ? we ? (we.p(R, Q), Q[1] & 16 && m(we, 1)) : (we = Ya(R), we.c(), m(we, 1), we.m(v.parentNode, v)) : we && (me(), p(we, 1, 1, ()=>{
                we = null;
            }), he());
            const ye = {};
            Q[1] & 32 && (ye.bottomHidden = R[36] === Ne.Thumb || R[36] === Ne.WaitingLive || R[36] === Ne.WaitingRecord), Q[1] & 1048576 && (ye.bottomNoSmooth = R[51]), Q[1] & 8 && (ye.showControls = R[34]), Q[1] & 32 && (ye.isAds = R[36] === Ne.Ads), Q[0] & 128 | Q[1] & 134217728 && (ye.canRewindLive = R[7] && R[58] !== 0), Q[0] & 8192 && (ye.logoClickable = R[13]), Q[0] & 16384 && (ye.logoHidden = R[14]), Q[0] & 16 && (ye.videoLogoUrl = R[4]), Q[0] & 32768 && (ye.showNextPrevButtons = R[15]), Q[0] & 65536 && (ye.nextButtonActive = R[16]), Q[0] & 131072 && (ye.prevButtonActive = R[17]), Q[0] & 1048576 && (ye.isOneVideoPlaylist = R[20]), Q[0] & 2097152 && (ye.supportLink = R[21]), Q[0] & 8388608 && (ye.playNextVideo = R[23]), Q[0] & 16777216 && (ye.playPrevVideo = R[24]), Q[0] & 33554432 && (ye.repeatPlaylist = R[25]), Q[1] & 131072 && (ye.returnFocus = R[145]), Q[0] & 67108864 && (ye.seekToInteractive = R[26]), Q[0] & 134217728 && (ye.toggleGraph = R[27]), Q[0] & 268435456 && (ye.playPrevChapter = R[28]), !_ && Q[1] & 256 && (_ = !0, ye.controlsElementRef = R[39], gt(()=>_ = !1)), b.$set(ye);
            const Te = {};
            Q[1] & 268435456 && (Te.isLive = R[59]), Q[1] & 4096 && (Te.isHidden = !R[43]), Q[1] & 536870912 && (Te.isPlaying = R[60]), Q[1] & 67108864 && (Te.position = R[57]), Q[1] & 1073741824 && (Te.duration = R[61]), A.$set(Te);
            const x = {};
            Q[0] & 2097152 && (x.supportLink = R[21]), Q[1] & 131072 && (x.returnFocus = R[147]), Q[1] & 262144 && (x.visible = R[49]), Q[1] & 128 && (x.playerContainerRef = R[38]), Q[1] & 256 && (x.controlsContainerRef = R[39]), Q[1] & 512 && (x.x = R[40]), Q[1] & 1024 && (x.y = R[41]), W.$set(x), R[42] ? Y ? Q[1] & 2048 && m(Y, 1) : (Y = Qa(), Y.c(), m(Y, 1), Y.m(Z.parentNode, Z)) : Y && (me(), p(Y, 1, 1, ()=>{
                Y = null;
            }), he()), R[62] ? pe ? Q[2] & 1 && m(pe, 1) : (pe = Xa(), pe.c(), m(pe, 1), pe.m(T.parentNode, T)) : pe && (me(), p(pe, 1, 1, ()=>{
                pe = null;
            }), he()), R[63] ? ee ? Q[2] & 2 && m(ee, 1) : (ee = Ja(), ee.c(), m(ee, 1), ee.m(te.parentNode, te)) : ee && (me(), p(ee, 1, 1, ()=>{
                ee = null;
            }), he());
        },
        i (R) {
            j || (m(e.$$.fragment, R), m(ie), m(G), m(J), m(ue), m(w), m(oe), m(fe), m(ve), m(Me), m(Ee), m(we), m(b.$$.fragment, R), m(A.$$.fragment, R), m(P.$$.fragment, R), m(W.$$.fragment, R), m(Y), m(pe), m(ee), j = !0);
        },
        o (R) {
            p(e.$$.fragment, R), p(ie), p(G), p(J), p(ue), p(w), p(oe), p(fe), p(ve), p(Me), p(Ee), p(we), p(b.$$.fragment, R), p(A.$$.fragment, R), p(P.$$.fragment, R), p(W.$$.fragment, R), p(Y), p(pe), p(ee), j = !1;
        },
        d (R) {
            R && (y(t), y(n), y(o), y(l), y(s), y(a), y(r), y(c), y(f), y(h), y(g), y(v), y(V), y(S), y(N), y(X), y(Z), y(T), y(te)), O(e, R), ie && ie.d(R), G && G.d(R), J && J.d(R), ue && ue.d(R), w && w.d(R), oe && oe.d(R), fe && fe.d(R), ve && ve.d(R), Me && Me.d(R), Ee && Ee.d(R), we && we.d(R), O(b, R), O(A, R), O(P, R), O(W, R), Y && Y.d(R), pe && pe.d(R), ee && ee.d(R);
        }
    };
}
function A3(i) {
    let e, t, n, o, l = i[52], s, a, r, c, f = xa(i);
    return {
        c () {
            e = k("div"), t = k("div"), o = B(), f.c(), s = ht(), u(t, "class", "video-container v-1o4wf3x"), u(t, "style", n = `transform: rotate(${i[33]}deg) scale(${i[46]})`), L(t, "fast-rotate", !i[1].isSmoothVideoRotate), u(e, "class", "video-wrapper v-1o4wf3x"), L(e, "hidden", i[36] !== Ne.Video), L(e, "nocursor", i[45]);
        },
        m (h, g) {
            C(h, e, g), d(e, t), i[144](t), C(h, o, g), f.m(h, g), C(h, s, g), a = !0, r || (c = [
                Ae(e, "contextmenu", di(i[106])),
                Ae(e, "mousedown", di(i[111])),
                Ae(e, "mouseup", di(i[112])),
                Ae(e, "click", di(i[114])),
                Ae(e, "dblclick", di(i[113]))
            ], r = !0);
        },
        p (h, g) {
            (!a || g[1] & 32772 && n !== (n = `transform: rotate(${h[33]}deg) scale(${h[46]})`)) && u(t, "style", n), (!a || g[0] & 2) && L(t, "fast-rotate", !h[1].isSmoothVideoRotate), (!a || g[1] & 32) && L(e, "hidden", h[36] !== Ne.Video), (!a || g[1] & 16384) && L(e, "nocursor", h[45]), g[1] & 2097152 && ge(l, l = h[52]) ? (me(), p(f, 1, 1, K), he(), f = xa(h), f.c(), m(f, 1), f.m(s.parentNode, s)) : f.p(h, g);
        },
        i (h) {
            a || (m(f), a = !0);
        },
        o (h) {
            p(f), a = !1;
        },
        d (h) {
            h && (y(e), y(o), y(s)), i[144](null), f.d(h), r = !1, xt(c);
        }
    };
}
function E3(i) {
    let e, t, n, o, l, s, a, r = {
        toggleFullscreen: i[104],
        hideContextMenu: i[105],
        showHotKeyHelpers: i[115],
        showKeyMap: i[116],
        isAds: i[36] === Ne.Ads,
        fakePlayButtonHandler: i[47] ? i[103] : void 0,
        $$slots: {
            default: [
                A3
            ]
        },
        $$scope: {
            ctx: i
        }
    };
    return t = new hf({
        props: r
    }), i[148](t), {
        c () {
            e = k("div"), D(t.$$.fragment), n = B(), o = k("div"), u(o, "class", "overlay-container"), u(e, "class", "player-wrapper v-1o4wf3x");
        },
        m (c, f) {
            C(c, e, f), z(t, e, null), d(e, n), d(e, o), i[149](o), i[150](e), l = !0, s || (a = [
                Ae(S3, "blur", i[105]),
                Ae(e, "mouseenter", i[107]),
                Ae(e, "mouseleave", i[109]),
                Ae(e, "mousemove", i[110]),
                Ae(e, "click", i[118], !0),
                Ae(e, "focusin", i[108], !0)
            ], s = !0);
        },
        p (c, f) {
            const h = {};
            f[1] & 32 && (h.isAds = c[36] === Ne.Ads), f[1] & 65536 && (h.fakePlayButtonHandler = c[47] ? c[103] : void 0), f[0] & 1073741823 | f[1] & 2147418111 | f[2] & 3 | f[5] & 65536 && (h.$$scope = {
                dirty: f,
                ctx: c
            }), t.$set(h);
        },
        i (c) {
            l || (m(t.$$.fragment, c), l = !0);
        },
        o (c) {
            p(t.$$.fragment, c), l = !1;
        },
        d (c) {
            c && y(e), i[148](null), O(t), i[149](null), i[150](null), s = !1, xt(a);
        }
    };
}
let L3 = !0;
function U1(i) {
    return i ? i.offsetTop + U1(i.offsetParent) : 0;
}
function V3(i, e, t) {
    let n, o, l, s, a, r, c, f, h, g, v, b, _, V, A, S, P, N, W, X, Z, T, te, j, ie, G, J, ue, w, oe, fe, ve, Me, Ee, we, H, M, { store: Y } = e, { uiConfig: pe } = e, { title: ee } = e, { thumbUrl: R } = e, { videoLogoUrl: Q } = e, { videoContainer: Ve } = e, { interactiveContainer: ye } = e, { live: Te } = e, { autoplay: x } = e, { canRewindLive: le } = e, { showAds: be } = e, { adsSlotId: ae } = e, { adsParams: Ue } = e, { adsPreviewParam: qe } = e, { duration: Je } = e, { logoClickable: tt } = e, { logoHidden: Be } = e, { showNextPrevButtons: at = !1 } = e, { nextButtonActive: St = !1 } = e, { prevButtonActive: Re = !1 } = e, { endScreenVideoTitle: Le } = e, { endScreenVideoThumb: kt } = e, { isOneVideoPlaylist: Dt = !1 } = e, { supportLink: mt } = e, { outerContainerRef: ot } = e, { playerStarted: re = !1 } = e, { fullScreenTarget: xe } = e, { showMiniTimer: Ye = !1 } = e, { playNextVideo: it = (0, _esnextEsmJs1.noop) } = e, { playPrevVideo: Ge = (0, _esnextEsmJs1.noop) } = e, { repeatPlaylist: ft = (0, _esnextEsmJs1.noop) } = e, { seekToInteractive: $e } = e, { toggleGraph: Bt } = e, { playPrevChapter: wt } = e, { firstStart: nt } = e;
    const Ht = Y.getLogger().createComponentLog("Root component"), ut = Y.interfaceLanguage$;
    F(i, ut, (q)=>t(52, G = q));
    const Ze = Y.state.playbackState$;
    F(i, Ze, (q)=>t(141, te = q));
    const Tt = Y.ads.playbackState;
    F(i, Tt, (q)=>t(142, j = q));
    const lt = Y.state.positionWithScrubbing$;
    F(i, lt, (q)=>t(57, fe = q));
    const oi = Y.state.duration$;
    F(i, oi, (q)=>t(61, we = q));
    const de = Y.playerPhase;
    F(i, de, (q)=>t(36, N = q));
    const Ce = Y.ui.isFullscreen;
    F(i, Ce, (q)=>t(131, c = q));
    const Ie = Y.ui.controlsVisible;
    F(i, Ie, (q)=>t(34, _ = q));
    const Pt = Y.ui.settingsMenuVisible;
    F(i, Pt, (q)=>t(129, n = q));
    const Mi = Y.ui.scrubbingInProgress;
    F(i, Mi, (q)=>t(133, v = q));
    const $t = Y.ui.contextMenuVisible;
    F(i, $t, (q)=>t(49, o = q));
    const _i = Y.ui.debugPanelVisible;
    F(i, _i, (q)=>t(63, M = q));
    const Ri = Y.state.isLoaderVisible;
    F(i, Ri, (q)=>t(143, ie = q));
    const Vt = Y.state.isEnded$;
    F(i, Vt, (q)=>t(130, s = q));
    const Pe = Y.state.chromecastConnected$;
    F(i, Pe, (q)=>t(37, Z = q));
    const Nt = Y.state.chromecastDeviceName$;
    F(i, Nt, (q)=>t(54, ue = q));
    const Bi = Y.ads.postrollPassed;
    F(i, Bi, (q)=>t(136, S = q));
    const li = Y.state.isLive$;
    F(i, li, (q)=>t(59, Me = q));
    const ki = Y.state.isPlaying$;
    F(i, ki, (q)=>t(60, Ee = q));
    const wi = Y.state.crashed$;
    F(i, wi, (q)=>t(35, A = q));
    const yi = Y.webApi.pictureInPictureApi, si = Y.state.currentSubtitle$;
    F(i, si, (q)=>t(55, w = q));
    const Qi = Y.state.currentSubtitleCaptions$;
    F(i, Qi, (q)=>t(56, oe = q));
    const hi = Y.state.duration$;
    F(i, hi, (q)=>t(58, ve = q));
    const Ci = Y.state.graphIsOpened$;
    F(i, Ci, (q)=>t(137, P = q));
    const Pi = Y.ui.playerSize;
    F(i, Pi, (q)=>t(32, r = q));
    const Ni = Y.ui.is3DVideo;
    F(i, Ni, (q)=>t(50, a = q));
    const Si = Y.ui.icon3DVideoVisible;
    F(i, Si, (q)=>t(53, J = q));
    const Zi = Y.ui.rotateAlpha;
    F(i, Zi, (q)=>t(33, g = q));
    const ei = Y.state.isInteractive, ai = Y.state.isInteractiveTime$;
    F(i, ai, (q)=>t(134, b = q));
    const Ti = Y.state.isInteractiveExpectation$;
    F(i, Ti, (q)=>t(140, T = q));
    const Ft = Y.state.hasInteractiveBranches, yt = Y.ui.touched;
    F(i, yt, (q)=>t(138, W = q));
    const Ut = Y.ui.modals.hotKeyMap.data;
    F(i, Ut, (q)=>t(157, l = q));
    const zi = Y.ui.modals.hotKeyMap.show;
    F(i, zi, (q)=>t(62, H = q));
    const Xi = Y.ui.overlayContainer$, { fakeIsPlaying$: Oi } = zr();
    F(i, Oi, (q)=>t(132, h = q));
    let ti, qi, ji = 0, ri = 0, Di, Ai, Ei;
    Ut.set(cc());
    let Li, pi;
    const qt = De(!1);
    F(i, qt, (q)=>t(51, f = q));
    let ui;
    const gi = De(!1);
    F(i, gi, (q)=>t(139, X = q));
    const Wt = De(), Zt = De(!1);
    F(i, Zt, (q)=>t(135, V = q));
    let ii = !1, ci = !1, jt, bi, ni, Hi, Vi, Gi, Fi = !1, fi, Wi = !1;
    const { toggle: Ii } = Oi;
    let se = !1, Gt = null, Ui;
    yi?.setContext(Er());
    const Ji = ()=>{
        x && !ei && Kt(pe.controls.hideTimeout);
    };
    Y.setUiCallbacks({
        onStarted: Ji
    });
    const dn = ()=>{
        window.clearTimeout(Di), gi.set(!1);
    }, mn = ()=>{
        window.clearTimeout(Ai), Wt.set(null);
    }, Kt = (q)=>{
        dn(), gi.set(!0), Di = window.setTimeout(()=>gi.set(!1), q);
        const Yt = q - 100;
        ui = window.setTimeout(()=>{
            f && qt.set(!1);
        }, Yt > 0 ? Yt : q);
    }, Ln = (q, Yt)=>{
        mn(), Wt.set(Yt), Ai = window.setTimeout(()=>Wt.set(null), q);
    }, Vn = Ni.subscribe((q)=>{
        Si.set(q), q && (window.clearTimeout(Ei), Ei = window.setTimeout(()=>Si.set(!1), pe.controls.hide360IconTimeout));
    }), hn = async ()=>{
        const q = po();
        if (q) {
            Kt(pe.controls.hideTimeoutFullscreen);
            try {
                await yi?.remove();
            } catch (Yt) {
                Ht({
                    message: String(Yt)
                });
            }
        }
        Ce.set(q), Y.getAdmanWrapper().setFullscreen(q), c ? Y.callbacks?.onFullscreenEnter?.() : Y.callbacks?.onFullscreenExit?.();
    }, Sn = (q)=>{
        const Yt = q;
        Pi.set({
            width: Yt.target.width,
            height: Yt.target.height
        });
    };
    Ki(()=>(xr(hn), Mo(yi) && (yi?.assignPlayerContainer(ti), yi?.registryExternalEventHandlers({
            resize: Sn
        })), ye && Ve.parentElement?.insertBefore(ye, Ve.nextSibling), ()=>{
            window.clearTimeout(Di), window.clearTimeout(ui), window.clearTimeout(Ai), window.clearTimeout(Ei), Vn(), yi?.dispose(), $r(hn);
        }));
    const rn = async ()=>{
        if (po()) await Jr(document), Ht({
            message: "exit fullscreen"
        });
        else {
            Ht({
                message: "request fullscreen"
            });
            const q = ot ?? ti, Yt = q.getRootNode(), Un = Yt instanceof ShadowRoot ? Yt.host : Yt, qn = xe instanceof HTMLElement && xe.contains(Un), _o = pe.allowChangingFullscreenTarget && xe && qn ? xe : q;
            await Xr(_o);
        }
    }, en = ()=>{
        Pt.set(!1), $t.set(!1);
    }, In = (q)=>{
        $t.set(!0), t(40, ji = q.clientX), t(41, ri = q.clientY);
    };
    function $() {
        Zt.set(!0), ei || Kt(pe.controls.hideTimeoutCursor);
    }
    function _t() {
        ei || (qt.set(!0), Kt(pe.controls.hideTimeoutCursor));
    }
    function Mn() {
        Zt.set(!1), t(125, ci = !1), t(124, ii = !1), se = !1, Y.actions.internal.releaseCamera();
    }
    function Rn(q) {
        if (ti) {
            const Yt = U1(q.currentTarget), Un = r.height, qn = q.pageY - Yt;
            qn < wl ? t(125, ci = !0) : qn > Un - wl ? t(124, ii = !0) : (t(125, ci = !1), n || t(124, ii = !1));
        }
    }
    function Bn(q) {
        Rn(q), bi || Kt(pe.controls.hideTimeoutCursor), a && se && Gt && Y.actions.internal.moveCameraFocusPX(Gt.clientX - q.clientX, Gt.clientY - q.clientY, q.timeStamp - Gt.timeStamp), Gt = q;
    }
    const to = (q)=>{
        q.button === 0 && (se = !0, Y.actions.internal.holdCamera()), Kt(pe.controls.hideTimeoutCursor);
    }, io = (q)=>{
        q.button === 0 && (Gt = q, se = !1, Y.actions.internal.releaseCamera()), Kt(pe.controls.hideTimeoutCursor);
    }, no = ()=>{
        Ht({
            message: "double click on video"
        }), rn(), Kt(pe.controls.hideTimeoutCursor);
    }, oo = ()=>{
        if (o || n) {
            en();
            return;
        }
        if (!(s && !Ft)) {
            if (Wi) return Ii();
            if (Ui?.focus(), !re) {
                nt(), Kt(pe.controls.hideTimeoutCursor);
                return;
            }
            Y.actions.internal.togglePlay(), Kt(pe.controls.hideTimeoutCursor);
        }
    }, lo = (q)=>{
        en(), yt.set(!0), Kt(pe.controls.hideTimeout), q && Ln(pe.controls.hideHotKeyHelpers, q);
    }, Fn = ()=>{
        en(), Y.callbacks?.onOpenHotKeyMap ? Y.callbacks?.onOpenHotKeyMap(l) : zi.update((q)=>!q);
    }, so = ()=>{
        if (o || n) {
            en();
            return;
        }
    }, ne = ()=>{
        yt.set(!0);
    };
    function tn(q) {
        We[q ? "unshift" : "push"](()=>{
            Ve = q, t(0, Ve);
        });
    }
    const st = ()=>Ui?.focus();
    function zt(q) {
        qi = q, t(39, qi);
    }
    const nn = ()=>Ui?.focus();
    function pn(q) {
        We[q ? "unshift" : "push"](()=>{
            Ui = q, t(48, Ui);
        });
    }
    function ao(q) {
        We[q ? "unshift" : "push"](()=>{
            pi = q, t(30, pi);
        });
    }
    function Nn(q) {
        We[q ? "unshift" : "push"](()=>{
            ti = q, t(38, ti);
        });
    }
    return i.$$set = (q)=>{
        "store" in q && t(119, Y = q.store), "uiConfig" in q && t(1, pe = q.uiConfig), "title" in q && t(2, ee = q.title), "thumbUrl" in q && t(3, R = q.thumbUrl), "videoLogoUrl" in q && t(4, Q = q.videoLogoUrl), "videoContainer" in q && t(0, Ve = q.videoContainer), "interactiveContainer" in q && t(120, ye = q.interactiveContainer), "live" in q && t(5, Te = q.live), "autoplay" in q && t(6, x = q.autoplay), "canRewindLive" in q && t(7, le = q.canRewindLive), "showAds" in q && t(8, be = q.showAds), "adsSlotId" in q && t(9, ae = q.adsSlotId), "adsParams" in q && t(10, Ue = q.adsParams), "adsPreviewParam" in q && t(11, qe = q.adsPreviewParam), "duration" in q && t(12, Je = q.duration), "logoClickable" in q && t(13, tt = q.logoClickable), "logoHidden" in q && t(14, Be = q.logoHidden), "showNextPrevButtons" in q && t(15, at = q.showNextPrevButtons), "nextButtonActive" in q && t(16, St = q.nextButtonActive), "prevButtonActive" in q && t(17, Re = q.prevButtonActive), "endScreenVideoTitle" in q && t(18, Le = q.endScreenVideoTitle), "endScreenVideoThumb" in q && t(19, kt = q.endScreenVideoThumb), "isOneVideoPlaylist" in q && t(20, Dt = q.isOneVideoPlaylist), "supportLink" in q && t(21, mt = q.supportLink), "outerContainerRef" in q && t(121, ot = q.outerContainerRef), "playerStarted" in q && t(22, re = q.playerStarted), "fullScreenTarget" in q && t(122, xe = q.fullScreenTarget), "showMiniTimer" in q && t(123, Ye = q.showMiniTimer), "playNextVideo" in q && t(23, it = q.playNextVideo), "playPrevVideo" in q && t(24, Ge = q.playPrevVideo), "repeatPlaylist" in q && t(25, ft = q.repeatPlaylist), "seekToInteractive" in q && t(26, $e = q.seekToInteractive), "toggleGraph" in q && t(27, Bt = q.toggleGraph), "playPrevChapter" in q && t(28, wt = q.playPrevChapter), "firstStart" in q && t(29, nt = q.firstStart);
    }, i.$$.update = ()=>{
        i.$$.dirty[1] & 48 | i.$$.dirty[4] & 786432 && t(42, Li = (N === Ne.Video && ie || N === Ne.Ads && j === Ot.INACTIVE) && !A), i.$$.dirty[0] & 1073741824 && Xi.set(pi), i.$$.dirty[4] & 131072 && t(126, jt = te !== (0, _esnextEsmJs.PlaybackState).PLAYING), i.$$.dirty[4] & 66567 && t(127, bi = b && !(ii || ci) && !(jt && !T)), i.$$.dirty[1] & 112 | i.$$.dirty[4] & 33324 && Ie.set((jt || n || v || Z || X) && !bi && N === Ne.Video && !A), i.$$.dirty[0] & 2 | i.$$.dirty[1] & 56 | i.$$.dirty[3] & 1073741824 | i.$$.dirty[4] & 16384 && t(43, ni = pe.features.thumbTimer && Ye && N === Ne.Video && !_ && !A && !ei && (pe.hideThumbTimerAfterTouch && !W || !pe.hideThumbTimerAfterTouch)), i.$$.dirty[1] & 32 | i.$$.dirty[4] & 8320 && t(44, Hi = N === Ne.Video && !P && c), i.$$.dirty[0] & 256 | i.$$.dirty[1] & 16 | i.$$.dirty[4] & 4160 && t(31, Vi = (be && S || !be) && s && !A), i.$$.dirty[1] & 9 | i.$$.dirty[4] & 3072 && t(45, Gi = V && !(_ || Vi) && !b), i.$$.dirty[0] & 2 | i.$$.dirty[4] & 1552 && (!v && Fi && !b && Kt(pe.controls.hideTimeoutCursor), t(128, Fi = v)), i.$$.dirty[0] & 1 | i.$$.dirty[1] & 6 && t(46, fi = Ve && g % 180 ? r.height / r.width : 1), i.$$.dirty[4] & 256 && t(47, Wi = h !== null);
    }, [
        Ve,
        pe,
        ee,
        R,
        Q,
        Te,
        x,
        le,
        be,
        ae,
        Ue,
        qe,
        Je,
        tt,
        Be,
        at,
        St,
        Re,
        Le,
        kt,
        Dt,
        mt,
        re,
        it,
        Ge,
        ft,
        $e,
        Bt,
        wt,
        nt,
        pi,
        Vi,
        r,
        g,
        _,
        A,
        N,
        Z,
        ti,
        qi,
        ji,
        ri,
        Li,
        ni,
        Hi,
        Gi,
        fi,
        Wi,
        Ui,
        o,
        a,
        f,
        G,
        J,
        ue,
        w,
        oe,
        fe,
        ve,
        Me,
        Ee,
        we,
        H,
        M,
        ut,
        Ze,
        Tt,
        lt,
        oi,
        de,
        Ce,
        Ie,
        Pt,
        Mi,
        $t,
        _i,
        Ri,
        Vt,
        Pe,
        Nt,
        Bi,
        li,
        ki,
        wi,
        si,
        Qi,
        hi,
        Ci,
        Pi,
        Ni,
        Si,
        Zi,
        ei,
        ai,
        Ti,
        yt,
        Ut,
        zi,
        Oi,
        qt,
        gi,
        Wt,
        Zt,
        Ii,
        rn,
        en,
        In,
        $,
        _t,
        Mn,
        Bn,
        to,
        io,
        no,
        oo,
        lo,
        Fn,
        so,
        ne,
        Y,
        ye,
        ot,
        xe,
        Ye,
        ii,
        ci,
        jt,
        bi,
        Fi,
        n,
        s,
        c,
        h,
        v,
        b,
        V,
        S,
        P,
        W,
        X,
        T,
        te,
        j,
        ie,
        tn,
        st,
        zt,
        nn,
        pn,
        ao,
        Nn
    ];
}
class I3 extends ke {
    constructor(e){
        super(), _e(this, e, V3, E3, ge, {
            store: 119,
            uiConfig: 1,
            title: 2,
            thumbUrl: 3,
            videoLogoUrl: 4,
            videoContainer: 0,
            interactiveContainer: 120,
            live: 5,
            autoplay: 6,
            canRewindLive: 7,
            showAds: 8,
            adsSlotId: 9,
            adsParams: 10,
            adsPreviewParam: 11,
            duration: 12,
            logoClickable: 13,
            logoHidden: 14,
            showNextPrevButtons: 15,
            nextButtonActive: 16,
            prevButtonActive: 17,
            endScreenVideoTitle: 18,
            endScreenVideoThumb: 19,
            isOneVideoPlaylist: 20,
            supportLink: 21,
            outerContainerRef: 121,
            playerStarted: 22,
            fullScreenTarget: 122,
            showMiniTimer: 123,
            playNextVideo: 23,
            playPrevVideo: 24,
            repeatPlaylist: 25,
            seekToInteractive: 26,
            toggleGraph: 27,
            playPrevChapter: 28,
            firstStart: 29
        }, T3, [
            -1,
            -1,
            -1,
            -1,
            -1,
            -1
        ]);
    }
}
const M3 = (i)=>{
    if (!(0, _esnextEsmJs1.isIOS)(!0)) return !1;
    const e = i.device === (0, _esnextEsmJs1.CurrentClientDevice).iPad || window?.screen.width > 700, t = (0, _esnextEsmJs1.getIOSVersion)();
    return !e || e && !!t && t < 16;
};
function R3(i) {
    Fe(i, "v-nhq2ld", ".double-click-area.v-nhq2ld{position:absolute;top:0;height:100%;width:25%;overflow:hidden}.double-click-area.left.v-nhq2ld{left:0}.double-click-area.right.v-nhq2ld{right:0}.semicircle.v-nhq2ld{position:absolute;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5)}.semicircle.left.v-nhq2ld{left:0;border-top-right-radius:50%;border-bottom-right-radius:50%}.semicircle.right.v-nhq2ld{right:0;border-top-left-radius:50%;border-bottom-left-radius:50%}.info.v-nhq2ld{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex;flex-direction:column;align-items:center;justify-content:center}.triangles-wrapper.v-nhq2ld{position:relative;display:flex;margin-bottom:10px;justify-content:center}.triangle.v-nhq2ld{width:0;height:0;border-top:6px solid transparent;border-bottom:6px solid transparent;animation:v-nhq2ld-blink 500ms infinite;opacity:0}.triangle.right.v-nhq2ld:nth-child(1),.triangle.left.v-nhq2ld:nth-child(3){animation-delay:0ms}.triangle.right.v-nhq2ld:nth-child(2),.triangle.left.v-nhq2ld:nth-child(2){animation-delay:100ms}.triangle.right.v-nhq2ld:nth-child(3),.triangle.left.v-nhq2ld:nth-child(1){animation-delay:200ms}@keyframes v-nhq2ld-blink{0%{opacity:0}50%{opacity:1}100%{opacity:0}}.triangle.left.v-nhq2ld{border-right:8px solid var(--white)}.triangle.right.v-nhq2ld{border-left:8px solid var(--white)}.triangle.v-nhq2ld:not(:last-child){margin-right:5px}.step-caption.v-nhq2ld{margin:0;text-align:center;font-size:12px;line-height:1;color:var(--white)}");
}
function $a(i) {
    let e, t, n, o, l, s, a, r, c, f, h, g, v, b, _, V = U("doubletap_seek_step", {
        seconds: i[1].toFixed(0)
    }) + "", A;
    return {
        c () {
            e = k("div"), n = B(), o = k("div"), l = k("div"), s = k("div"), r = B(), c = k("div"), h = B(), g = k("div"), b = B(), _ = k("p"), A = ze(V), u(e, "class", t = "semicircle " + i[0] + " v-nhq2ld"), u(s, "class", a = "triangle " + i[0] + " v-nhq2ld"), u(c, "class", f = "triangle " + i[0] + " v-nhq2ld"), u(g, "class", v = "triangle " + i[0] + " v-nhq2ld"), u(l, "class", "triangles-wrapper v-nhq2ld"), u(_, "class", "step-caption v-nhq2ld"), u(o, "class", "info v-nhq2ld");
        },
        m (S, P) {
            C(S, e, P), C(S, n, P), C(S, o, P), d(o, l), d(l, s), d(l, r), d(l, c), d(l, h), d(l, g), d(o, b), d(o, _), d(_, A);
        },
        p (S, P) {
            P & 1 && t !== (t = "semicircle " + S[0] + " v-nhq2ld") && u(e, "class", t), P & 1 && a !== (a = "triangle " + S[0] + " v-nhq2ld") && u(s, "class", a), P & 1 && f !== (f = "triangle " + S[0] + " v-nhq2ld") && u(c, "class", f), P & 1 && v !== (v = "triangle " + S[0] + " v-nhq2ld") && u(g, "class", v), P & 2 && V !== (V = U("doubletap_seek_step", {
                seconds: S[1].toFixed(0)
            }) + "") && Xe(A, V);
        },
        d (S) {
            S && (y(e), y(n), y(o));
        }
    };
}
function B3(i) {
    let e, t, n, o, l = i[2] && $a(i);
    return {
        c () {
            e = k("div"), l && l.c(), u(e, "class", t = "double-click-area " + i[0] + " v-nhq2ld");
        },
        m (s, a) {
            C(s, e, a), l && l.m(e, null), n || (o = Ae(e, "click", rt(i[3]())), n = !0);
        },
        p (s, [a]) {
            s[2] ? l ? l.p(s, a) : (l = $a(s), l.c(), l.m(e, null)) : l && (l.d(1), l = null), a & 1 && t !== (t = "double-click-area " + s[0] + " v-nhq2ld") && u(e, "class", t);
        },
        i: K,
        o: K,
        d (s) {
            s && y(e), l && l.d(), n = !1, o();
        }
    };
}
function N3(i, e, t) {
    let { side: n } = e, { seekStep: o } = e, { handleSingleFirstClick: l } = e, { handleSecondClick: s } = e, a = !1, r = 0, c = 0;
    const f = ()=>{
        let g = 0;
        return ()=>{
            g += 1, g === 1 ? r = window.setTimeout(()=>{
                l(), g = 0;
            }, 300) : (window.clearTimeout(r), g = 0, s(), t(2, a = !0), c = window.setTimeout(()=>{
                t(2, a = !1);
            }, 500));
        };
    };
    return No(()=>{
        window.clearTimeout(r), window.clearTimeout(c);
    }), i.$$set = (h)=>{
        "side" in h && t(0, n = h.side), "seekStep" in h && t(1, o = h.seekStep), "handleSingleFirstClick" in h && t(4, l = h.handleSingleFirstClick), "handleSecondClick" in h && t(5, s = h.handleSecondClick);
    }, [
        n,
        o,
        a,
        f,
        l,
        s
    ];
}
class q1 extends ke {
    constructor(e){
        super(), _e(this, e, N3, B3, ge, {
            side: 0,
            seekStep: 1,
            handleSingleFirstClick: 4,
            handleSecondClick: 5
        }, R3);
    }
}
function z3(i, e, t) {
    let { playNextVideo: n } = e;
    return Ki(()=>{
        n();
    }), i.$$set = (o)=>{
        "playNextVideo" in o && t(0, n = o.playNextVideo);
    }, [
        n
    ];
}
class O3 extends ke {
    constructor(e){
        super(), _e(this, e, z3, null, ge, {
            playNextVideo: 0
        });
    }
}
const { window: D3 } = Ar;
function H3(i) {
    Fe(i, "v-1jy89ut", ".player-wrapper.v-1jy89ut{position:absolute;width:100%;height:100%}.player-wrapper.v-1jy89ut .player-media{position:absolute;left:0;top:0;width:100%;height:100%;background:var(--black);transition:transform 0.2s ease-in-out}.spherical-video-icon.v-1jy89ut{display:inline-block;position:absolute;top:calc(50% - 23px);left:calc(50% - 38px)}.video-wrapper.v-1jy89ut,.video-container.v-1jy89ut,.ads-container.v-1jy89ut{position:absolute;width:100%;height:100%;left:0;top:0}.video-wrapper.v-1jy89ut{z-index:var(--video-container-z-index);background:var(--black)}.video-container.v-1jy89ut{z-index:var(--video-container-z-index);transition:var(--rotate-transition-duration) ease all}.video-container.fast-rotate.v-1jy89ut{transition:none}.ads-container.v-1jy89ut{background:var(--black)}");
}
function er(i) {
    let e, t, n, o;
    e = new q1({
        props: {
            side: "left",
            seekStep: i[1].controls.seekStepMobile / 1e3,
            handleSingleFirstClick: i[99],
            handleSecondClick: i[127]
        }
    });
    let l = !i[48] && tr(i);
    return {
        c () {
            D(e.$$.fragment), t = B(), l && l.c(), n = ht();
        },
        m (s, a) {
            z(e, s, a), C(s, t, a), l && l.m(s, a), C(s, n, a), o = !0;
        },
        p (s, a) {
            const r = {};
            a[0] & 2 && (r.seekStep = s[1].controls.seekStepMobile / 1e3), e.$set(r), s[48] ? l && (me(), p(l, 1, 1, ()=>{
                l = null;
            }), he()) : l ? (l.p(s, a), a[1] & 131072 && m(l, 1)) : (l = tr(s), l.c(), m(l, 1), l.m(n.parentNode, n));
        },
        i (s) {
            o || (m(e.$$.fragment, s), m(l), o = !0);
        },
        o (s) {
            p(e.$$.fragment, s), p(l), o = !1;
        },
        d (s) {
            s && (y(t), y(n)), O(e, s), l && l.d(s);
        }
    };
}
function tr(i) {
    let e, t;
    return e = new q1({
        props: {
            side: "right",
            seekStep: i[1].controls.seekStepMobile / 1e3,
            handleSingleFirstClick: i[99],
            handleSecondClick: i[128]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 2 && (l.seekStep = n[1].controls.seekStepMobile / 1e3), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function ir(i) {
    let e, t;
    return e = new H1({
        props: {
            thumbUrl: i[2],
            startTime: i[4]?.startTime
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 4 && (l.thumbUrl = n[2]), o[0] & 16 && (l.startTime = n[4]?.startTime), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function nr(i) {
    let e, t;
    return e = new F1({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function or(i) {
    let e, t, n;
    return t = new e1({
        props: {
            adsSlotId: i[8],
            adsParams: i[9],
            adsPreviewParam: i[10],
            duration: i[11]
        }
    }), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "ads-container v-1jy89ut"), L(e, "hidden", i[34] !== Ne.Ads);
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        p (o, l) {
            const s = {};
            l[0] & 256 && (s.adsSlotId = o[8]), l[0] & 512 && (s.adsParams = o[9]), l[0] & 1024 && (s.adsPreviewParam = o[10]), l[0] & 2048 && (s.duration = o[11]), t.$set(s), (!n || l[1] & 8) && L(e, "hidden", o[34] !== Ne.Ads);
        },
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function lr(i) {
    let e, t;
    return e = new O3({
        props: {
            playNextVideo: i[22]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 4194304 && (l.playNextVideo = n[22]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function sr(i) {
    let e, t;
    return e = new B1({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function ar(i) {
    let e, t, n;
    return t = new Gr({
        props: {
            ariaLabel: U("video360")
        }
    }), {
        c () {
            e = k("div"), D(t.$$.fragment), u(e, "class", "spherical-video-icon v-1jy89ut");
        },
        m (o, l) {
            C(o, e, l), z(t, e, null), n = !0;
        },
        p: K,
        i (o) {
            n || (m(t.$$.fragment, o), n = !0);
        },
        o (o) {
            p(t.$$.fragment, o), n = !1;
        },
        d (o) {
            o && y(e), O(t);
        }
    };
}
function rr(i) {
    let e, t;
    return e = new z1({
        props: {
            thumbUrl: i[2],
            chromecastDeviceName: i[51]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 4 && (l.thumbUrl = n[2]), o[1] & 1048576 && (l.chromecastDeviceName = n[51]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function ur(i) {
    let e, t;
    return e = new N1({
        props: {
            shifted: i[30],
            captions: i[53],
            position: i[44],
            playerSize: i[31],
            isMobile: !0
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 1073741824 && (l.shifted = n[30]), o[1] & 4194304 && (l.captions = n[53]), o[1] & 8192 && (l.position = n[44]), o[1] & 1 && (l.playerSize = n[31]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function cr(i) {
    let e, t;
    return e = new t1({
        props: {
            showControls: i[30]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o[0] & 1073741824 && (l.showControls = n[30]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function fr(i) {
    let e, t, n, o, l;
    return t = new O1({}), {
        c () {
            e = k("div"), D(t.$$.fragment);
        },
        m (s, a) {
            C(s, e, a), z(t, e, null), n = !0, o || (l = Ae(e, "click", rt(i[100])), o = !0);
        },
        p: K,
        i (s) {
            n || (m(t.$$.fragment, s), n = !0);
        },
        o (s) {
            p(t.$$.fragment, s), n = !1;
        },
        d (s) {
            s && y(e), O(t), o = !1, l();
        }
    };
}
function dr(i) {
    let e, t;
    return e = new u1({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function mr(i) {
    let e, t;
    return e = new o1({}), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function hr(i) {
    let e, t, n = i[6] && i[78] && !i[47].has(ct.TIMELINE), o, l, s, a, r, c, f, h, g, v, b, _, V, A, S, P, N, W, X;
    e = new D1({
        props: {
            hidden: i[34] !== Ne.Thumb || i[33] || i[89] && i[5],
            thumbUrl: i[2],
            startVideo: i[28]
        }
    });
    let Z = n && er(i), T = i[34] === Ne.WaitingLive && ir(i), te = i[34] === Ne.WaitingRecord && nr(), j = i[7] && i[21] && or(i), ie = i[41] && i[17] && i[18] && lr(i), G = i[49] && sr(), J = i[50] && ar(), ue = i[35] && rr(i), w = i[52].value !== "off" && ur(i), oe = i[1].features.annotations && cr(i), fe = i[33] && fr(i);
    function ve(H) {
        i[129](H);
    }
    let Me = {
        bottomHidden: i[34] === Ne.Thumb || i[34] === Ne.WaitingLive || i[34] === Ne.WaitingRecord || i[34] === Ne.Ads,
        showControls: i[30],
        bottomNoSmooth: i[45],
        isAds: i[34] === Ne.Ads,
        canRewindLive: i[6] && i[54] !== 0,
        logoClickable: i[12],
        logoHidden: i[13],
        videoLogoUrl: i[3],
        showNextPrevButtons: i[14],
        nextButtonActive: i[15],
        prevButtonActive: i[16],
        isOneVideoPlaylist: i[19],
        supportLink: i[20],
        customFullscreenSupported: i[39],
        playNextVideo: i[22],
        playPrevVideo: i[23],
        repeatPlaylist: i[24],
        toggleFullscreen: i[97],
        seekToInteractive: i[25],
        toggleGraph: i[26],
        playPrevChapter: i[27]
    };
    i[37] !== void 0 && (Me.controlsElementRef = i[37]), _ = new M1({
        props: Me
    }), We.push(()=>bt(_, "controlsElementRef", ve)), S = new n1({
        props: {
            isLive: i[55],
            isHidden: !i[40],
            isPlaying: i[56],
            position: i[44],
            duration: i[43]
        }
    });
    let Ee = i[38] && dr(), we = i[57] && mr();
    return {
        c () {
            D(e.$$.fragment), t = B(), Z && Z.c(), o = B(), T && T.c(), l = B(), te && te.c(), s = B(), j && j.c(), a = B(), ie && ie.c(), r = B(), G && G.c(), c = B(), J && J.c(), f = B(), ue && ue.c(), h = B(), w && w.c(), g = B(), oe && oe.c(), v = B(), fe && fe.c(), b = B(), D(_.$$.fragment), A = B(), D(S.$$.fragment), P = B(), Ee && Ee.c(), N = B(), we && we.c(), W = ht();
        },
        m (H, M) {
            z(e, H, M), C(H, t, M), Z && Z.m(H, M), C(H, o, M), T && T.m(H, M), C(H, l, M), te && te.m(H, M), C(H, s, M), j && j.m(H, M), C(H, a, M), ie && ie.m(H, M), C(H, r, M), G && G.m(H, M), C(H, c, M), J && J.m(H, M), C(H, f, M), ue && ue.m(H, M), C(H, h, M), w && w.m(H, M), C(H, g, M), oe && oe.m(H, M), C(H, v, M), fe && fe.m(H, M), C(H, b, M), z(_, H, M), C(H, A, M), z(S, H, M), C(H, P, M), Ee && Ee.m(H, M), C(H, N, M), we && we.m(H, M), C(H, W, M), X = !0;
        },
        p (H, M) {
            const Y = {};
            M[0] & 32 | M[1] & 12 && (Y.hidden = H[34] !== Ne.Thumb || H[33] || H[89] && H[5]), M[0] & 4 && (Y.thumbUrl = H[2]), M[0] & 268435456 && (Y.startVideo = H[28]), e.$set(Y), M[0] & 64 | M[1] & 65536 && (n = H[6] && H[78] && !H[47].has(ct.TIMELINE)), n ? Z ? (Z.p(H, M), M[0] & 64 | M[1] & 65536 && m(Z, 1)) : (Z = er(H), Z.c(), m(Z, 1), Z.m(o.parentNode, o)) : Z && (me(), p(Z, 1, 1, ()=>{
                Z = null;
            }), he()), H[34] === Ne.WaitingLive ? T ? (T.p(H, M), M[1] & 8 && m(T, 1)) : (T = ir(H), T.c(), m(T, 1), T.m(l.parentNode, l)) : T && (me(), p(T, 1, 1, ()=>{
                T = null;
            }), he()), H[34] === Ne.WaitingRecord ? te ? M[1] & 8 && m(te, 1) : (te = nr(), te.c(), m(te, 1), te.m(s.parentNode, s)) : te && (me(), p(te, 1, 1, ()=>{
                te = null;
            }), he()), H[7] && H[21] ? j ? (j.p(H, M), M[0] & 2097280 && m(j, 1)) : (j = or(H), j.c(), m(j, 1), j.m(a.parentNode, a)) : j && (me(), p(j, 1, 1, ()=>{
                j = null;
            }), he()), H[41] && H[17] && H[18] ? ie ? (ie.p(H, M), M[0] & 393216 | M[1] & 1024 && m(ie, 1)) : (ie = lr(H), ie.c(), m(ie, 1), ie.m(r.parentNode, r)) : ie && (me(), p(ie, 1, 1, ()=>{
                ie = null;
            }), he()), H[49] ? G ? M[1] & 262144 && m(G, 1) : (G = sr(), G.c(), m(G, 1), G.m(c.parentNode, c)) : G && (me(), p(G, 1, 1, ()=>{
                G = null;
            }), he()), H[50] ? J ? (J.p(H, M), M[1] & 524288 && m(J, 1)) : (J = ar(), J.c(), m(J, 1), J.m(f.parentNode, f)) : J && (me(), p(J, 1, 1, ()=>{
                J = null;
            }), he()), H[35] ? ue ? (ue.p(H, M), M[1] & 16 && m(ue, 1)) : (ue = rr(H), ue.c(), m(ue, 1), ue.m(h.parentNode, h)) : ue && (me(), p(ue, 1, 1, ()=>{
                ue = null;
            }), he()), H[52].value !== "off" ? w ? (w.p(H, M), M[1] & 2097152 && m(w, 1)) : (w = ur(H), w.c(), m(w, 1), w.m(g.parentNode, g)) : w && (me(), p(w, 1, 1, ()=>{
                w = null;
            }), he()), H[1].features.annotations ? oe ? (oe.p(H, M), M[0] & 2 && m(oe, 1)) : (oe = cr(H), oe.c(), m(oe, 1), oe.m(v.parentNode, v)) : oe && (me(), p(oe, 1, 1, ()=>{
                oe = null;
            }), he()), H[33] ? fe ? (fe.p(H, M), M[1] & 4 && m(fe, 1)) : (fe = fr(H), fe.c(), m(fe, 1), fe.m(b.parentNode, b)) : fe && (me(), p(fe, 1, 1, ()=>{
                fe = null;
            }), he());
            const pe = {};
            M[1] & 8 && (pe.bottomHidden = H[34] === Ne.Thumb || H[34] === Ne.WaitingLive || H[34] === Ne.WaitingRecord || H[34] === Ne.Ads), M[0] & 1073741824 && (pe.showControls = H[30]), M[1] & 16384 && (pe.bottomNoSmooth = H[45]), M[1] & 8 && (pe.isAds = H[34] === Ne.Ads), M[0] & 64 | M[1] & 8388608 && (pe.canRewindLive = H[6] && H[54] !== 0), M[0] & 4096 && (pe.logoClickable = H[12]), M[0] & 8192 && (pe.logoHidden = H[13]), M[0] & 8 && (pe.videoLogoUrl = H[3]), M[0] & 16384 && (pe.showNextPrevButtons = H[14]), M[0] & 32768 && (pe.nextButtonActive = H[15]), M[0] & 65536 && (pe.prevButtonActive = H[16]), M[0] & 524288 && (pe.isOneVideoPlaylist = H[19]), M[0] & 1048576 && (pe.supportLink = H[20]), M[1] & 256 && (pe.customFullscreenSupported = H[39]), M[0] & 4194304 && (pe.playNextVideo = H[22]), M[0] & 8388608 && (pe.playPrevVideo = H[23]), M[0] & 16777216 && (pe.repeatPlaylist = H[24]), M[0] & 33554432 && (pe.seekToInteractive = H[25]), M[0] & 67108864 && (pe.toggleGraph = H[26]), M[0] & 134217728 && (pe.playPrevChapter = H[27]), !V && M[1] & 64 && (V = !0, pe.controlsElementRef = H[37], gt(()=>V = !1)), _.$set(pe);
            const ee = {};
            M[1] & 16777216 && (ee.isLive = H[55]), M[1] & 512 && (ee.isHidden = !H[40]), M[1] & 33554432 && (ee.isPlaying = H[56]), M[1] & 8192 && (ee.position = H[44]), M[1] & 4096 && (ee.duration = H[43]), S.$set(ee), H[38] ? Ee ? M[1] & 128 && m(Ee, 1) : (Ee = dr(), Ee.c(), m(Ee, 1), Ee.m(N.parentNode, N)) : Ee && (me(), p(Ee, 1, 1, ()=>{
                Ee = null;
            }), he()), H[57] ? we ? M[1] & 67108864 && m(we, 1) : (we = mr(), we.c(), m(we, 1), we.m(W.parentNode, W)) : we && (me(), p(we, 1, 1, ()=>{
                we = null;
            }), he());
        },
        i (H) {
            X || (m(e.$$.fragment, H), m(Z), m(T), m(te), m(j), m(ie), m(G), m(J), m(ue), m(w), m(oe), m(fe), m(_.$$.fragment, H), m(S.$$.fragment, H), m(Ee), m(we), X = !0);
        },
        o (H) {
            p(e.$$.fragment, H), p(Z), p(T), p(te), p(j), p(ie), p(G), p(J), p(ue), p(w), p(oe), p(fe), p(_.$$.fragment, H), p(S.$$.fragment, H), p(Ee), p(we), X = !1;
        },
        d (H) {
            H && (y(t), y(o), y(l), y(s), y(a), y(r), y(c), y(f), y(h), y(g), y(v), y(b), y(A), y(P), y(N), y(W)), O(e, H), Z && Z.d(H), T && T.d(H), te && te.d(H), j && j.d(H), ie && ie.d(H), G && G.d(H), J && J.d(H), ue && ue.d(H), w && w.d(H), oe && oe.d(H), fe && fe.d(H), O(_, H), O(S, H), Ee && Ee.d(H), we && we.d(H);
        }
    };
}
function F3(i) {
    let e, t, n, o, l, s = i[46], a, r, c, f, h, g = hr(i);
    return {
        c () {
            e = k("div"), t = k("div"), n = k("div"), l = B(), g.c(), a = B(), r = k("div"), u(n, "class", "video-container v-1jy89ut"), u(n, "style", o = `transform: rotate(${i[32]}deg) scale(${i[42]})`), L(n, "fast-rotate", !i[1].isSmoothVideoRotate), u(t, "class", "video-wrapper v-1jy89ut"), L(t, "hidden", i[34] !== Ne.Video), u(r, "class", "overlay-container"), u(e, "class", "player-wrapper v-1jy89ut");
        },
        m (v, b) {
            C(v, e, b), d(e, t), d(t, n), i[126](n), d(e, l), g.m(e, null), d(e, a), d(e, r), i[130](r), i[131](e), c = !0, f || (h = [
                Ae(D3, "blur", i[98]),
                Ae(t, "click", di(i[99])),
                Ae(e, "click", i[101], !0),
                Ae(e, "focusin", i[102], !0)
            ], f = !0);
        },
        p (v, b) {
            (!c || b[1] & 2050 && o !== (o = `transform: rotate(${v[32]}deg) scale(${v[42]})`)) && u(n, "style", o), (!c || b[0] & 2) && L(n, "fast-rotate", !v[1].isSmoothVideoRotate), (!c || b[1] & 8) && L(t, "hidden", v[34] !== Ne.Video), b[1] & 32768 && ge(s, s = v[46]) ? (me(), p(g, 1, 1, K), he(), g = hr(v), g.c(), m(g, 1), g.m(e, a)) : g.p(v, b);
        },
        i (v) {
            c || (m(g), c = !0);
        },
        o (v) {
            p(g), c = !1;
        },
        d (v) {
            v && y(e), i[126](null), g.d(v), i[130](null), i[131](null), f = !1, xt(h);
        }
    };
}
function U3(i, e, t) {
    let n, o, l, s, a, r, c, f, h, g, v, b, _, V, A, S, P, N, W, X, Z, T, te, j, ie, G, J, ue, w, oe, fe, ve, Me, Ee, we, H, { store: M } = e, { uiConfig: Y } = e, { thumbUrl: pe } = e, { videoLogoUrl: ee } = e, { videoContainer: R } = e, { interactiveContainer: Q } = e, { live: Ve } = e, { autoplay: ye } = e, { canRewindLive: Te } = e, { showAds: x } = e, { adsSlotId: le } = e, { adsParams: be } = e, { adsPreviewParam: ae } = e, { duration: Ue } = e, { logoClickable: qe } = e, { logoHidden: Je } = e, { showNextPrevButtons: tt = !1 } = e, { nextButtonActive: Be = !1 } = e, { prevButtonActive: at = !1 } = e, { endScreenVideoTitle: St } = e, { endScreenVideoThumb: Re } = e, { isOneVideoPlaylist: Le = !1 } = e, { supportLink: kt } = e, { outerContainerRef: Dt } = e, { showMiniTimer: mt = !1 } = e, { fullScreenTarget: ot } = e, { playerStarted: re = !1 } = e, { playNextVideo: xe = (0, _esnextEsmJs1.noop) } = e, { playPrevVideo: Ye = (0, _esnextEsmJs1.noop) } = e, { repeatPlaylist: it = (0, _esnextEsmJs1.noop) } = e, { seekToInteractive: Ge } = e, { toggleGraph: ft } = e, { playPrevChapter: $e } = e, { firstStart: Bt } = e, { seekTime: wt } = e;
    const nt = M.getLogger().createComponentLog("Root component"), Ht = M.interfaceLanguage$;
    F(i, Ht, ($)=>t(46, ie = $));
    const ut = M.state.playbackState$;
    F(i, ut, ($)=>t(123, T = $));
    const Ze = M.ads.playbackState;
    F(i, Ze, ($)=>t(124, te = $));
    const Tt = M.state.positionWithScrubbing$;
    F(i, Tt, ($)=>t(44, s = $));
    const lt = M.state.duration$;
    F(i, lt, ($)=>t(43, l = $));
    const oi = M.playerPhase;
    F(i, oi, ($)=>t(34, N = $));
    const de = M.ui.isFullscreen;
    F(i, de, ($)=>t(137, r = $));
    const Ce = M.ui.controlsVisible;
    F(i, Ce, ($)=>t(30, o = $));
    const Ie = M.ui.interactiveHideMobileControls;
    F(i, Ie, ($)=>t(115, g = $));
    const Pt = M.ui.settingsMenuVisible;
    F(i, Pt, ($)=>t(114, n = $));
    const Mi = M.ui.scrubbingInProgress;
    F(i, Mi, ($)=>t(116, b = $));
    const $t = M.ui.debugPanelVisible;
    F(i, $t, ($)=>t(57, H = $));
    const _i = M.state.isLoaderVisible;
    F(i, _i, ($)=>t(125, j = $));
    const Ri = M.state.isEnded$;
    F(i, Ri, ($)=>t(118, A = $));
    const Vt = M.state.chromecastConnected$;
    F(i, Vt, ($)=>t(35, W = $));
    const Pe = M.state.chromecastDeviceName$;
    F(i, Pe, ($)=>t(51, oe = $));
    const Nt = M.ads.postrollPassed;
    F(i, Nt, ($)=>t(119, S = $));
    const Bi = M.ui.mobileUnmuteButtonExpanded, li = M.ui.mobileUnmuteButtonVisible, ki = M.state.isLive$;
    F(i, ki, ($)=>t(55, Ee = $));
    const wi = M.state.isPlaying$;
    F(i, wi, ($)=>t(56, we = $));
    const yi = M.state.isActiveLive$;
    F(i, yi, ($)=>t(48, J = $));
    const si = M.state.isRewindableLive$, Qi = M.state.crashed$;
    F(i, Qi, ($)=>t(33, V = $));
    const hi = M.webApi.pictureInPictureApi, Ci = M.state.videoSize$;
    F(i, Ci, ($)=>t(138, f = $));
    const Pi = M.state.currentSubtitle$;
    F(i, Pi, ($)=>t(52, fe = $));
    const Ni = M.state.currentSubtitleCaptions$;
    F(i, Ni, ($)=>t(53, ve = $));
    const Si = M.state.duration$;
    F(i, Si, ($)=>t(54, Me = $));
    const Zi = M.state.graphIsOpened$;
    F(i, Zi, ($)=>t(122, Z = $));
    const ei = M.ui.playerSize;
    F(i, ei, ($)=>t(31, c = $));
    const ai = M.ui.is3DVideo;
    F(i, ai, ($)=>t(49, ue = $));
    const Ti = M.ui.icon3DVideoVisible;
    F(i, Ti, ($)=>t(50, w = $));
    const Ft = M.ui.rotateAlpha;
    F(i, Ft, ($)=>t(32, v = $));
    const yt = M.state.isInteractive, Ut = M.state.isInteractiveTime$;
    F(i, Ut, ($)=>t(117, _ = $));
    const zi = M.state.isInteractiveExpectation$;
    F(i, zi, ($)=>t(121, X = $));
    const Xi = M.state.hasInteractiveBranches, Oi = M.ui.controls.disabledControls$;
    F(i, Oi, ($)=>t(47, G = $));
    const ti = M.ui.touched;
    F(i, ti, ($)=>t(120, P = $));
    const qi = M.ui.clientInfo$;
    F(i, qi, ($)=>t(136, a = $));
    const ji = M.ui.overlayContainer$;
    let ri, Di, Ai, Ei, Li, pi, qt;
    const ui = De(!1);
    F(i, ui, ($)=>t(45, h = $));
    let gi, Wt = !1, Zt, ii = !1, ci, jt = !0, bi, ni, Hi = !1, Vi;
    hi?.setContext(Er());
    const Gi = ($)=>{
        clearTimeout(Ei), $ && (li.set(!0), Bi.set(!0), Ei = window.setTimeout(()=>{
            Bi.set(!1);
        }, Y.controls.collapseMobileUnmute), yt || fi(Y.controls.hideTimeoutMobile));
    };
    M.setUiCallbacks({
        onStarted: Gi
    });
    const Fi = ()=>{
        window.clearTimeout(Ai), t(109, Wt = !1), g && Ie.set(!1);
    }, fi = ($)=>{
        Fi(), t(109, Wt = !0), Ai = window.setTimeout(()=>t(109, Wt = !1), $);
        const _t = $ - 100;
        gi = window.setTimeout(()=>{
            h && ui.set(!1);
        }, _t > 0 ? _t : $);
    }, Wi = ai.subscribe(($)=>{
        Ti.set($), $ && (window.clearTimeout(Li), Li = window.setTimeout(()=>Ti.set(!1), Y.controls.hide360IconTimeout));
    }), Ii = async ()=>{
        const $ = po();
        if ($) {
            fi(Y.controls.hideTimeoutFullscreen);
            try {
                await hi?.remove();
            } catch (_t) {
                nt({
                    message: String(_t)
                });
            }
            try {
                const _t = f?.width && f?.height ? f : c;
                await uc(_t);
            } catch (_t) {
                nt({
                    message: String(_t)
                });
            }
        }
        de.set($), M.getAdmanWrapper().setFullscreen($), r ? M.callbacks?.onFullscreenEnter?.() : M.callbacks?.onFullscreenExit?.();
    }, se = ($)=>{
        const _t = $;
        ei.set({
            width: _t.target.width,
            height: _t.target.height
        });
    };
    Ki(()=>(xr(Ii), Mo(hi) && (hi?.assignPlayerContainer(ri), hi?.registryExternalEventHandlers({
            resize: se
        })), t(39, jt = !M3(a)), Q && R.parentElement?.insertBefore(Q, R.nextSibling), ()=>{
            window.clearTimeout(Ai), window.clearTimeout(gi), window.clearTimeout(Ei), window.clearTimeout(Li), Wi(), hi?.dispose(), $r(Ii);
        }));
    const Gt = ($)=>{
        let _t = s + ($ === "forward" ? 1 : -1) * Y.controls.seekStepMobile / 1e3;
        _t < 0 ? _t = 0 : _t > l && (_t = l - 1), t(111, ii = !0), wt(_t);
    }, Ui = async ()=>{
        if (po()) await Jr(document), nt({
            message: "exit fullscreen"
        });
        else {
            nt({
                message: "request fullscreen"
            });
            const $ = Dt ?? ri, _t = $.getRootNode(), Mn = _t instanceof ShadowRoot ? _t.host : _t, Rn = ot instanceof HTMLElement && ot.contains(Mn), Bn = Y.allowChangingFullscreenTarget && ot && Rn ? ot : $;
            await Xr(Bn);
        }
    }, Ji = ()=>{
        Pt.set(!1);
    }, dn = ()=>{
        if (n) {
            Ji();
            return;
        }
        if (!re) {
            Bt(), fi(Y.controls.hideTimeoutCursor);
            return;
        }
        t(111, ii = !1), o ? Fi() : fi(Y.controls.hideTimeoutMobile);
    }, mn = ()=>{
        if (n) {
            Ji();
            return;
        }
    }, Kt = ()=>{
        ti.set(!0);
    }, Ln = ()=>{
        yt || (ui.set(!0), fi(Y.controls.hideTimeoutCursor));
    };
    function Vn($) {
        We[$ ? "unshift" : "push"](()=>{
            R = $, t(0, R);
        });
    }
    const hn = ()=>Gt("backward"), Sn = ()=>Gt("forward");
    function rn($) {
        Di = $, t(37, Di);
    }
    function en($) {
        We[$ ? "unshift" : "push"](()=>{
            qt = $, t(29, qt);
        });
    }
    function In($) {
        We[$ ? "unshift" : "push"](()=>{
            ri = $, t(36, ri);
        });
    }
    return i.$$set = ($)=>{
        "store" in $ && t(103, M = $.store), "uiConfig" in $ && t(1, Y = $.uiConfig), "thumbUrl" in $ && t(2, pe = $.thumbUrl), "videoLogoUrl" in $ && t(3, ee = $.videoLogoUrl), "videoContainer" in $ && t(0, R = $.videoContainer), "interactiveContainer" in $ && t(104, Q = $.interactiveContainer), "live" in $ && t(4, Ve = $.live), "autoplay" in $ && t(5, ye = $.autoplay), "canRewindLive" in $ && t(6, Te = $.canRewindLive), "showAds" in $ && t(7, x = $.showAds), "adsSlotId" in $ && t(8, le = $.adsSlotId), "adsParams" in $ && t(9, be = $.adsParams), "adsPreviewParam" in $ && t(10, ae = $.adsPreviewParam), "duration" in $ && t(11, Ue = $.duration), "logoClickable" in $ && t(12, qe = $.logoClickable), "logoHidden" in $ && t(13, Je = $.logoHidden), "showNextPrevButtons" in $ && t(14, tt = $.showNextPrevButtons), "nextButtonActive" in $ && t(15, Be = $.nextButtonActive), "prevButtonActive" in $ && t(16, at = $.prevButtonActive), "endScreenVideoTitle" in $ && t(17, St = $.endScreenVideoTitle), "endScreenVideoThumb" in $ && t(18, Re = $.endScreenVideoThumb), "isOneVideoPlaylist" in $ && t(19, Le = $.isOneVideoPlaylist), "supportLink" in $ && t(20, kt = $.supportLink), "outerContainerRef" in $ && t(105, Dt = $.outerContainerRef), "showMiniTimer" in $ && t(106, mt = $.showMiniTimer), "fullScreenTarget" in $ && t(107, ot = $.fullScreenTarget), "playerStarted" in $ && t(21, re = $.playerStarted), "playNextVideo" in $ && t(22, xe = $.playNextVideo), "playPrevVideo" in $ && t(23, Ye = $.playPrevVideo), "repeatPlaylist" in $ && t(24, it = $.repeatPlaylist), "seekToInteractive" in $ && t(25, Ge = $.seekToInteractive), "toggleGraph" in $ && t(26, ft = $.toggleGraph), "playPrevChapter" in $ && t(27, $e = $.playPrevChapter), "firstStart" in $ && t(28, Bt = $.firstStart), "seekTime" in $ && t(108, wt = $.seekTime);
    }, i.$$.update = ()=>{
        i.$$.dirty[1] & 12 | i.$$.dirty[4] & 3 && t(38, pi = (N === Ne.Video && j || N === Ne.Ads && te === Ot.INACTIVE) && !V), i.$$.dirty[0] & 536870912 && ji.set(qt), i.$$.dirty[3] & 1073741824 && t(110, Zt = T !== (0, _esnextEsmJs.PlaybackState).PLAYING), i.$$.dirty[3] & 843251712 && t(112, ci = Z || g || !Wt && (A && !!Xi || Zt && X)), i.$$.dirty[1] & 28 | i.$$.dirty[3] & 11468800 && Ce.set((Zt || n || b || W || Wt && !ii) && !ci && N === Ne.Video && !V), i.$$.dirty[0] & 1073741826 | i.$$.dirty[1] & 12 | i.$$.dirty[3] & 134225920 && t(40, bi = Y.features.thumbTimer && mt && N === Ne.Video && !o && !V && !yt && (Y.hideThumbTimerAfterTouch && !P || !Y.hideThumbTimerAfterTouch)), i.$$.dirty[0] & 128 | i.$$.dirty[1] & 4 | i.$$.dirty[3] & 100663296 && t(41, ni = (x && S || !x) && A && !V), i.$$.dirty[0] & 2 | i.$$.dirty[3] & 26214400 && (!b && Hi && !_ && fi(Y.controls.hideTimeoutMobile), t(113, Hi = b)), i.$$.dirty[0] & 1 | i.$$.dirty[1] & 3 && t(42, Vi = R && v % 180 ? c.height / c.width : 1);
    }, [
        R,
        Y,
        pe,
        ee,
        Ve,
        ye,
        Te,
        x,
        le,
        be,
        ae,
        Ue,
        qe,
        Je,
        tt,
        Be,
        at,
        St,
        Re,
        Le,
        kt,
        re,
        xe,
        Ye,
        it,
        Ge,
        ft,
        $e,
        Bt,
        qt,
        o,
        c,
        v,
        V,
        N,
        W,
        ri,
        Di,
        pi,
        jt,
        bi,
        ni,
        Vi,
        l,
        s,
        h,
        ie,
        G,
        J,
        ue,
        w,
        oe,
        fe,
        ve,
        Me,
        Ee,
        we,
        H,
        Ht,
        ut,
        Ze,
        Tt,
        lt,
        oi,
        de,
        Ce,
        Ie,
        Pt,
        Mi,
        $t,
        _i,
        Ri,
        Vt,
        Pe,
        Nt,
        ki,
        wi,
        yi,
        si,
        Qi,
        Ci,
        Pi,
        Ni,
        Si,
        Zi,
        ei,
        ai,
        Ti,
        Ft,
        yt,
        Ut,
        zi,
        Oi,
        ti,
        qi,
        ui,
        Gt,
        Ui,
        Ji,
        dn,
        mn,
        Kt,
        Ln,
        M,
        Q,
        Dt,
        mt,
        ot,
        wt,
        Wt,
        Zt,
        ii,
        ci,
        Hi,
        n,
        g,
        b,
        _,
        A,
        S,
        P,
        X,
        Z,
        T,
        te,
        j,
        Vn,
        hn,
        Sn,
        rn,
        en,
        In
    ];
}
class q3 extends ke {
    constructor(e){
        super(), _e(this, e, U3, F3, ge, {
            store: 103,
            uiConfig: 1,
            thumbUrl: 2,
            videoLogoUrl: 3,
            videoContainer: 0,
            interactiveContainer: 104,
            live: 4,
            autoplay: 5,
            canRewindLive: 6,
            showAds: 7,
            adsSlotId: 8,
            adsParams: 9,
            adsPreviewParam: 10,
            duration: 11,
            logoClickable: 12,
            logoHidden: 13,
            showNextPrevButtons: 14,
            nextButtonActive: 15,
            prevButtonActive: 16,
            endScreenVideoTitle: 17,
            endScreenVideoThumb: 18,
            isOneVideoPlaylist: 19,
            supportLink: 20,
            outerContainerRef: 105,
            showMiniTimer: 106,
            fullScreenTarget: 107,
            playerStarted: 21,
            playNextVideo: 22,
            playPrevVideo: 23,
            repeatPlaylist: 24,
            seekToInteractive: 25,
            toggleGraph: 26,
            playPrevChapter: 27,
            firstStart: 28,
            seekTime: 108
        }, H3, [
            -1,
            -1,
            -1,
            -1,
            -1
        ]);
    }
}
function W3(i) {
    Fe(i, "v-labq99", `.root.v-labq99{--white:#fff;--black:#000;--red:#ff3347;--blue-light:#70c1ff;--black-alpha-40:rgba(0, 0, 0, 0.40);--white-alpha-24:rgba(255, 255, 255, 0.24);--white-alpha-72:rgba(255, 255, 255, 0.72);--devider-gray:#dce1e6;--text-gray:#626d7a;--controls-height:40px;--controls-gradient-height:100px;--controls-transition-duration:0.25s;--controls-transition-fn:cubic-bezier(0.455, 0.03, 0.515, 0.955);--controls-desktop-item-margin-left:4px;--focused:var(--white);--focused-element-shadow:inset 0 0 0 2px var(--focused);--focused-slider-shadow:0 0 0 2px var(--focused);--big-play-size:96px;--big-play-radius:50%;--big-play-bg-color:rgba(0, 0, 0, 0.5);--big-play-hover-bg-color:rgba(0, 0, 0, 0.6);--big-play-icon-width:38px;--big-play-icon-height:33px;--interactive-episode-complete:rgba(92, 156, 230, 1);--slider-height:5px;--slider-video-episode-gap:1.5px;--slider-radius:calc(var(--slider-height) / 2);--slider-handle-size:13px;--slider-bg:rgba(255, 255, 255, 0.4);--slider-loaded-bg:rgba(255, 255, 255, 0.4);--slider-filled-bg:var(--white);--slider-filled-active-live-bg:var(--red);--slider-filled-ads:rgba(103, 165, 235, 1);--slider-disabled-color:rgba(248, 248, 248, 0.31);--controls-gradient:linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.00) 0%,
      rgba(0, 0, 0, 0.01) 6.67%,
      rgba(0, 0, 0, 0.04) 13.33%,
      rgba(0, 0, 0, 0.08) 20%,
      rgba(0, 0, 0, 0.15) 26.67%,
      rgba(0, 0, 0, 0.23) 33.33%,
      rgba(0, 0, 0, 0.33) 40%,
      rgba(0, 0, 0, 0.44) 46.67%,
      rgba(0, 0, 0, 0.56) 53.33%,
      rgba(0, 0, 0, 0.67) 60%,
      rgba(0, 0, 0, 0.77) 66.67%,
      rgba(0, 0, 0, 0.85) 73.33%,
      rgba(0, 0, 0, 0.92) 80%,
      rgba(0, 0, 0, 0.96) 86.67%,
      rgba(0, 0, 0, 0.99) 93.33%,
      #000 100%
    );--timeline-preview-shadow:rgba(0, 0, 0, 0.08);--timeline-preview-bg:rgba(34, 34, 34, 1);--mobile-settings-bg:#2C2D2E;--button-hover-transition:opacity 0.2s;--video-container-z-index:0;--rotate-transition-duration:0.25s;position:relative;width:100%;height:100%;color:var(--white);font-size:12px;line-height:normal;overflow:hidden;outline:0;user-select:none;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;background:var(--black)}button{border:none;margin:0;padding:0;width:auto;overflow:visible;background:transparent;color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;cursor:pointer}svg{pointer-events:none}*:focus, *:focus-visible{outline:none}*:focus-visible{box-shadow:var(--focused-element-shadow)}.hidden{visibility:hidden;opacity:0}.overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%;position:fixed;z-index:10000}`);
}
function Z3(i) {
    let e, t, n;
    function o(s) {
        i[55](s);
    }
    let l = {
        store: i[0],
        uiConfig: i[35],
        title: i[1],
        thumbUrl: i[2],
        videoLogoUrl: i[3],
        interactiveContainer: i[4],
        live: i[5],
        autoplay: i[6],
        canRewindLive: i[7],
        showAds: i[8],
        adsSlotId: i[9],
        adsParams: i[10],
        adsPreviewParam: i[11],
        duration: i[12],
        logoClickable: i[13],
        logoHidden: i[14],
        showNextPrevButtons: i[16],
        nextButtonActive: i[17],
        prevButtonActive: i[18],
        endScreenVideoTitle: i[19],
        endScreenVideoThumb: i[20],
        isOneVideoPlaylist: i[21],
        supportLink: i[22],
        outerContainerRef: i[23],
        fullScreenTarget: i[24],
        showMiniTimer: i[25],
        playerStarted: i[34],
        playNextVideo: i[26],
        playPrevVideo: i[27],
        repeatPlaylist: i[28],
        seekToInteractive: i[29],
        toggleGraph: i[30],
        playPrevChapter: i[31],
        firstStart: i[36]
    };
    return i[33] !== void 0 && (l.videoContainer = i[33]), e = new I3({
        props: l
    }), We.push(()=>bt(e, "videoContainer", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[0] & 1 && (r.store = s[0]), a[0] & 2 && (r.title = s[1]), a[0] & 4 && (r.thumbUrl = s[2]), a[0] & 8 && (r.videoLogoUrl = s[3]), a[0] & 16 && (r.interactiveContainer = s[4]), a[0] & 32 && (r.live = s[5]), a[0] & 64 && (r.autoplay = s[6]), a[0] & 128 && (r.canRewindLive = s[7]), a[0] & 256 && (r.showAds = s[8]), a[0] & 512 && (r.adsSlotId = s[9]), a[0] & 1024 && (r.adsParams = s[10]), a[0] & 2048 && (r.adsPreviewParam = s[11]), a[0] & 4096 && (r.duration = s[12]), a[0] & 8192 && (r.logoClickable = s[13]), a[0] & 16384 && (r.logoHidden = s[14]), a[0] & 65536 && (r.showNextPrevButtons = s[16]), a[0] & 131072 && (r.nextButtonActive = s[17]), a[0] & 262144 && (r.prevButtonActive = s[18]), a[0] & 524288 && (r.endScreenVideoTitle = s[19]), a[0] & 1048576 && (r.endScreenVideoThumb = s[20]), a[0] & 2097152 && (r.isOneVideoPlaylist = s[21]), a[0] & 4194304 && (r.supportLink = s[22]), a[0] & 8388608 && (r.outerContainerRef = s[23]), a[0] & 16777216 && (r.fullScreenTarget = s[24]), a[0] & 33554432 && (r.showMiniTimer = s[25]), a[1] & 8 && (r.playerStarted = s[34]), a[0] & 67108864 && (r.playNextVideo = s[26]), a[0] & 134217728 && (r.playPrevVideo = s[27]), a[0] & 268435456 && (r.repeatPlaylist = s[28]), a[0] & 536870912 && (r.seekToInteractive = s[29]), a[0] & 1073741824 && (r.toggleGraph = s[30]), a[1] & 1 && (r.playPrevChapter = s[31]), !t && a[1] & 4 && (t = !0, r.videoContainer = s[33], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function j3(i) {
    let e, t, n;
    function o(s) {
        i[54](s);
    }
    let l = {
        store: i[0],
        uiConfig: i[35],
        thumbUrl: i[2],
        videoLogoUrl: i[3],
        interactiveContainer: i[4],
        live: i[5],
        autoplay: i[6],
        canRewindLive: i[7],
        showAds: i[8],
        adsSlotId: i[9],
        adsParams: i[10],
        adsPreviewParam: i[11],
        duration: i[12],
        logoClickable: i[13],
        logoHidden: i[14],
        showNextPrevButtons: i[16],
        nextButtonActive: i[17],
        prevButtonActive: i[18],
        endScreenVideoTitle: i[19],
        endScreenVideoThumb: i[20],
        isOneVideoPlaylist: i[21],
        supportLink: i[22],
        outerContainerRef: i[23],
        fullScreenTarget: i[24],
        showMiniTimer: i[25],
        playerStarted: i[34],
        playNextVideo: i[26],
        playPrevVideo: i[27],
        repeatPlaylist: i[28],
        seekToInteractive: i[29],
        toggleGraph: i[30],
        playPrevChapter: i[31],
        firstStart: i[36],
        seekTime: i[32]
    };
    return i[33] !== void 0 && (l.videoContainer = i[33]), e = new q3({
        props: l
    }), We.push(()=>bt(e, "videoContainer", o)), {
        c () {
            D(e.$$.fragment);
        },
        m (s, a) {
            z(e, s, a), n = !0;
        },
        p (s, a) {
            const r = {};
            a[0] & 1 && (r.store = s[0]), a[0] & 4 && (r.thumbUrl = s[2]), a[0] & 8 && (r.videoLogoUrl = s[3]), a[0] & 16 && (r.interactiveContainer = s[4]), a[0] & 32 && (r.live = s[5]), a[0] & 64 && (r.autoplay = s[6]), a[0] & 128 && (r.canRewindLive = s[7]), a[0] & 256 && (r.showAds = s[8]), a[0] & 512 && (r.adsSlotId = s[9]), a[0] & 1024 && (r.adsParams = s[10]), a[0] & 2048 && (r.adsPreviewParam = s[11]), a[0] & 4096 && (r.duration = s[12]), a[0] & 8192 && (r.logoClickable = s[13]), a[0] & 16384 && (r.logoHidden = s[14]), a[0] & 65536 && (r.showNextPrevButtons = s[16]), a[0] & 131072 && (r.nextButtonActive = s[17]), a[0] & 262144 && (r.prevButtonActive = s[18]), a[0] & 524288 && (r.endScreenVideoTitle = s[19]), a[0] & 1048576 && (r.endScreenVideoThumb = s[20]), a[0] & 2097152 && (r.isOneVideoPlaylist = s[21]), a[0] & 4194304 && (r.supportLink = s[22]), a[0] & 8388608 && (r.outerContainerRef = s[23]), a[0] & 16777216 && (r.fullScreenTarget = s[24]), a[0] & 33554432 && (r.showMiniTimer = s[25]), a[1] & 8 && (r.playerStarted = s[34]), a[0] & 67108864 && (r.playNextVideo = s[26]), a[0] & 134217728 && (r.playPrevVideo = s[27]), a[0] & 268435456 && (r.repeatPlaylist = s[28]), a[0] & 536870912 && (r.seekToInteractive = s[29]), a[0] & 1073741824 && (r.toggleGraph = s[30]), a[1] & 1 && (r.playPrevChapter = s[31]), !t && a[1] & 4 && (t = !0, r.videoContainer = s[33], gt(()=>t = !1)), e.$set(r);
        },
        i (s) {
            n || (m(e.$$.fragment, s), n = !0);
        },
        o (s) {
            p(e.$$.fragment, s), n = !1;
        },
        d (s) {
            O(e, s);
        }
    };
}
function G3(i) {
    let e, t, n, o;
    const l = [
        j3,
        Z3
    ], s = [];
    function a(r, c) {
        return r[15] ? 0 : 1;
    }
    return t = a(i), n = s[t] = l[t](i), {
        c () {
            e = k("div"), n.c(), u(e, "class", "root v-labq99");
        },
        m (r, c) {
            C(r, e, c), s[t].m(e, null), o = !0;
        },
        p (r, c) {
            let f = t;
            t = a(r), t === f ? s[t].p(r, c) : (me(), p(s[f], 1, 1, ()=>{
                s[f] = null;
            }), he(), n = s[t], n ? n.p(r, c) : (n = s[t] = l[t](r), n.c()), m(n, 1), n.m(e, null));
        },
        i (r) {
            o || (m(n), o = !0);
        },
        o (r) {
            p(n), o = !1;
        },
        d (r) {
            r && y(e), s[t].d();
        }
    };
}
function K3(i, e, t) {
    let { sources: n } = e, { store: o } = e, { microStoresRoot: l } = e, { uiConfig: s } = e, { title: a } = e, { thumbUrl: r } = e, { videoLogoUrl: c } = e, { interactiveContainer: f } = e, { subtitles: h } = e, { live: g } = e, { preload: v } = e, { autoplay: b } = e, { volume: _ } = e, { muted: V } = e, { fromTime: A } = e, { canRewindLive: S } = e, { showAds: P } = e, { adsSlotId: N } = e, { adsParams: W } = e, { adsPreviewParam: X } = e, { duration: Z } = e, { logoClickable: T } = e, { logoHidden: te } = e, { isMobile: j } = e, { showNextPrevButtons: ie = !1 } = e, { nextButtonActive: G = !1 } = e, { prevButtonActive: J = !1 } = e, { endScreenVideoTitle: ue } = e, { endScreenVideoThumb: w } = e, { isOneVideoPlaylist: oe = !1 } = e, { supportLink: fe } = e, { outerContainerRef: ve } = e, { fullScreenTarget: Me } = e, { failoverHosts: Ee } = e, { showMiniTimer: we = !1 } = e, { playNextVideo: H = (0, _esnextEsmJs1.noop) } = e, { playPrevVideo: M = (0, _esnextEsmJs1.noop) } = e, { repeatPlaylist: Y = (0, _esnextEsmJs1.noop) } = e, { seekToInteractive: pe = (0, _esnextEsmJs1.noop) } = e, { toggleGraph: ee = (0, _esnextEsmJs1.noop) } = e, { playPrevChapter: R = (0, _esnextEsmJs1.noop) } = e;
    const { subscribers: Q, stores: Ve } = l;
    Mu(s);
    const ye = Yi(), Te = o.ui.debugPanelVisible, x = o.ui.playerSize;
    let le, be = null, ae = !1;
    o.getAdmanWrapper().init({
        switchFromAdsToVideo: o.actions.internal.switchFromAdsToVideo,
        switchFromVideoToAds: o.actions.internal.switchFromVideoToAds,
        setMuted: o.actions.external.setMuted
    }, o.ads, {
        isMobile: o.ui.isMobile,
        mobileUnmuteButtonVisible: o.ui.mobileUnmuteButtonVisible,
        vsid: o.vsid
    }), Hu(o, Ve);
    const Ue = (re = !1)=>{
        t(34, ae = !0), re ? o.actions.external.firstStart(P) : o.actions.internal.firstStart(P);
    };
    function qe(re) {
        const xe = n || re;
        xe && o.initVideo({
            container: le,
            sources: xe,
            failoverHosts: Ee,
            subtitles: h
        });
        const Ye = (0, _esnextEsmJs1.safeStorage).get($o) === "true";
        Te.set(Ye), A > 0 && o.actions.external.seekTime(A);
        const it = j ? ye.volumeDefault : _ ?? qr() ?? ye.volumeDefault, Ge = V ?? ju();
        if (o.actions.external.setVolume(it), o.actions.external.setMuted(Ge), o.getAdmanWrapper().setInitialVolume(Ge ? 0 : it), ye.features.trafficSaving) {
            const $e = Ku();
            $e && o.actions.internal.setTrafficSavingEnabled($e);
        }
        const ft = Zu(o.videoId);
        ft && o.actions.internal.setQuality(ft), o.ui.isAutoplay.set(b), b ? Ue() : v && ye.features.preload && o.actions.internal.preload();
    }
    const Je = (re)=>{
        if (window.ResizeObserver) {
            let xe, Ye;
            be = new ResizeObserver((0, _esnextEsmJs1.debounceFn)((it)=>{
                const Ge = it[0];
                if (Ge) {
                    if (Ge.contentBoxSize) {
                        const ft = Array.isArray(Ge.contentBoxSize) ? Ge.contentBoxSize[0] : Ge.contentBoxSize;
                        xe = ft.inlineSize, Ye = ft.blockSize;
                    } else Ge.contentRect && (xe = Ge.contentRect.width, Ye = Ge.contentRect.height);
                    x.set({
                        width: xe,
                        height: Ye
                    });
                }
            }, Vr)), be.observe(re);
        }
        x.set({
            width: re.clientWidth,
            height: re.clientHeight
        });
    };
    Ki(()=>{
        Je(le);
        const re = Q.map((Ye)=>Ye.init(o, Ve));
        if (g?.status === "upcoming" || g?.status === "waiting") {
            o.actions.internal.setWaitingLive(!0);
            return;
        }
        if ((g?.status === "finished" || g?.status === "postlive") && !Object.keys(n || []).length) {
            o.actions.internal.setWaitingRecord(!0);
            return;
        }
        return qe(), ()=>{
            be?.disconnect(), re.forEach((Ye)=>Ye.unsubscribe()), o.destroy();
        };
    });
    function tt() {
        ae ? o.actions.external.play() : Ue(!0);
    }
    function Be() {
        o.actions.external.pause();
    }
    function at(re) {
        j || o.actions.external.setMuted(re);
    }
    function St(re) {
        j || re >= 0 && re <= 1 && o.actions.external.setVolume(re);
    }
    function Re(re) {
        o.actions.internal.seekTime(re, (0, _esnextEsmJs2.SeekAction).UNKNOWN);
    }
    function Le(re) {
        o.actions.external.seekEpisodeStartTime(re);
    }
    function kt(re) {
        o.actions.external.setPlaybackRate(re);
    }
    function Dt(re) {
        o.actions.external.setAutoQualityLimits(re);
    }
    function mt(re) {
        le = re, t(33, le);
    }
    function ot(re) {
        le = re, t(33, le);
    }
    return i.$$set = (re)=>{
        "sources" in re && t(37, n = re.sources), "store" in re && t(0, o = re.store), "microStoresRoot" in re && t(38, l = re.microStoresRoot), "uiConfig" in re && t(39, s = re.uiConfig), "title" in re && t(1, a = re.title), "thumbUrl" in re && t(2, r = re.thumbUrl), "videoLogoUrl" in re && t(3, c = re.videoLogoUrl), "interactiveContainer" in re && t(4, f = re.interactiveContainer), "subtitles" in re && t(40, h = re.subtitles), "live" in re && t(5, g = re.live), "preload" in re && t(41, v = re.preload), "autoplay" in re && t(6, b = re.autoplay), "volume" in re && t(42, _ = re.volume), "muted" in re && t(43, V = re.muted), "fromTime" in re && t(44, A = re.fromTime), "canRewindLive" in re && t(7, S = re.canRewindLive), "showAds" in re && t(8, P = re.showAds), "adsSlotId" in re && t(9, N = re.adsSlotId), "adsParams" in re && t(10, W = re.adsParams), "adsPreviewParam" in re && t(11, X = re.adsPreviewParam), "duration" in re && t(12, Z = re.duration), "logoClickable" in re && t(13, T = re.logoClickable), "logoHidden" in re && t(14, te = re.logoHidden), "isMobile" in re && t(15, j = re.isMobile), "showNextPrevButtons" in re && t(16, ie = re.showNextPrevButtons), "nextButtonActive" in re && t(17, G = re.nextButtonActive), "prevButtonActive" in re && t(18, J = re.prevButtonActive), "endScreenVideoTitle" in re && t(19, ue = re.endScreenVideoTitle), "endScreenVideoThumb" in re && t(20, w = re.endScreenVideoThumb), "isOneVideoPlaylist" in re && t(21, oe = re.isOneVideoPlaylist), "supportLink" in re && t(22, fe = re.supportLink), "outerContainerRef" in re && t(23, ve = re.outerContainerRef), "fullScreenTarget" in re && t(24, Me = re.fullScreenTarget), "failoverHosts" in re && t(45, Ee = re.failoverHosts), "showMiniTimer" in re && t(25, we = re.showMiniTimer), "playNextVideo" in re && t(26, H = re.playNextVideo), "playPrevVideo" in re && t(27, M = re.playPrevVideo), "repeatPlaylist" in re && t(28, Y = re.repeatPlaylist), "seekToInteractive" in re && t(29, pe = re.seekToInteractive), "toggleGraph" in re && t(30, ee = re.toggleGraph), "playPrevChapter" in re && t(31, R = re.playPrevChapter);
    }, i.$$.update = ()=>{
        i.$$.dirty[0] & 32769 && o.ui.isMobile.set(j);
    }, [
        o,
        a,
        r,
        c,
        f,
        g,
        b,
        S,
        P,
        N,
        W,
        X,
        Z,
        T,
        te,
        j,
        ie,
        G,
        J,
        ue,
        w,
        oe,
        fe,
        ve,
        Me,
        we,
        H,
        M,
        Y,
        pe,
        ee,
        R,
        Re,
        le,
        ae,
        ye,
        Ue,
        n,
        l,
        s,
        h,
        v,
        _,
        V,
        A,
        Ee,
        qe,
        tt,
        Be,
        at,
        St,
        Le,
        kt,
        Dt,
        mt,
        ot
    ];
}
class Y3 extends ke {
    constructor(e){
        super(), _e(this, e, K3, G3, ge, {
            sources: 37,
            store: 0,
            microStoresRoot: 38,
            uiConfig: 39,
            title: 1,
            thumbUrl: 2,
            videoLogoUrl: 3,
            interactiveContainer: 4,
            subtitles: 40,
            live: 5,
            preload: 41,
            autoplay: 6,
            volume: 42,
            muted: 43,
            fromTime: 44,
            canRewindLive: 7,
            showAds: 8,
            adsSlotId: 9,
            adsParams: 10,
            adsPreviewParam: 11,
            duration: 12,
            logoClickable: 13,
            logoHidden: 14,
            isMobile: 15,
            showNextPrevButtons: 16,
            nextButtonActive: 17,
            prevButtonActive: 18,
            endScreenVideoTitle: 19,
            endScreenVideoThumb: 20,
            isOneVideoPlaylist: 21,
            supportLink: 22,
            outerContainerRef: 23,
            fullScreenTarget: 24,
            failoverHosts: 45,
            showMiniTimer: 25,
            playNextVideo: 26,
            playPrevVideo: 27,
            repeatPlaylist: 28,
            seekToInteractive: 29,
            toggleGraph: 30,
            playPrevChapter: 31,
            initVideo: 46,
            play: 47,
            pause: 48,
            setMuted: 49,
            setVolume: 50,
            seekTime: 32,
            seekEpisodeStartTime: 51,
            setPlaybackRate: 52,
            setAutoQualityLimits: 53
        }, W3, [
            -1,
            -1
        ]);
    }
    get initVideo() {
        return this.$$.ctx[46];
    }
    get play() {
        return this.$$.ctx[47];
    }
    get pause() {
        return this.$$.ctx[48];
    }
    get setMuted() {
        return this.$$.ctx[49];
    }
    get setVolume() {
        return this.$$.ctx[50];
    }
    get seekTime() {
        return this.$$.ctx[32];
    }
    get seekEpisodeStartTime() {
        return this.$$.ctx[51];
    }
    get setPlaybackRate() {
        return this.$$.ctx[52];
    }
    get setAutoQualityLimits() {
        return this.$$.ctx[53];
    }
}
function Q3(i) {
    let e, t;
    return {
        c () {
            e = I("svg"), t = I("path"), u(t, "fill", i[0]), u(t, "d", "M38.245 6c3.566 0 4.859.371 6.162 1.069a7.27 7.27 0 0 1 3.025 3.024c.697 1.303 1.068 2.597 1.068 6.163v23.489c0 3.566-.371 4.859-1.069 6.162a7.27 7.27 0 0 1-3.024 3.025C43.104 49.629 41.811 50 38.245 50h-19.49c-3.565 0-4.859-.371-6.162-1.069a7.27 7.27 0 0 1-3.024-3.024C8.87 44.604 8.5 43.311 8.5 39.745v-23.49c0-3.565.371-4.859 1.069-6.162a7.27 7.27 0 0 1 3.024-3.024C13.896 6.37 15.19 6 18.756 6h19.489zm.314 3H18.756c-2.799 0-3.761.186-4.749.714a4.27 4.27 0 0 0-1.793 1.793c-.508.95-.7 1.876-.713 4.434L11.5 39.744c0 2.799.186 3.761.714 4.749a4.27 4.27 0 0 0 1.793 1.793c.988.528 1.95.714 4.749.714h19.489c2.798 0 3.76-.186 4.748-.714a4.27 4.27 0 0 0 1.793-1.793c.528-.988.714-1.95.714-4.748v-23.49c0-2.798-.186-3.76-.714-4.748a4.27 4.27 0 0 0-1.793-1.793c-.95-.508-1.876-.7-4.434-.713zM19.22 38c.445 0 .607.046.77.134a.91.91 0 0 1 .377.378c.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.908.908 0 0 1-.378.378c-.162.088-.324.134-.77.134h-1.436c-.446 0-.608-.046-.77-.134a.908.908 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-1.436c0-.446.046-.607.134-.77a.908.908 0 0 1 .378-.378c.162-.088.324-.134.77-.134h1.436zm20 0c.445 0 .606.046.77.134a.91.91 0 0 1 .377.378c.088.163.134.324.134.77v1.436c0 .446-.046.607-.134.77a.908.908 0 0 1-.378.378c-.163.088-.324.134-.77.134h-1.436c-.446 0-.607-.046-.77-.134a.908.908 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-1.436c0-.446.046-.607.134-.77a.908.908 0 0 1 .378-.378c.163-.088.324-.134.77-.134h1.436zm-20-8c.445 0 .607.046.77.134a.91.91 0 0 1 .377.378c.088.162.134.324.134.77v1.436c0 .446-.046.607-.134.77a.908.908 0 0 1-.378.378c-.162.088-.324.134-.77.134h-1.436c-.446 0-.608-.046-.77-.134a.908.908 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-1.436c0-.446.046-.608.134-.77a.908.908 0 0 1 .378-.378c.162-.088.324-.134.77-.134h1.436zm20 0c.445 0 .606.046.77.134a.91.91 0 0 1 .377.378c.088.162.134.324.134.77v1.436c0 .446-.046.607-.134.77a.908.908 0 0 1-.378.378c-.163.088-.324.134-.77.134h-1.436c-.446 0-.607-.046-.77-.134a.908.908 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-1.436c0-.446.046-.608.134-.77a.908.908 0 0 1 .378-.378c.163-.088.324-.134.77-.134h1.436zm-20-8c.445 0 .607.046.77.134a.91.91 0 0 1 .377.378c.088.162.134.324.134.77v1.436c0 .446-.046.608-.134.77a.908.908 0 0 1-.378.378c-.162.088-.324.134-.77.134h-1.436c-.446 0-.608-.046-.77-.134a.908.908 0 0 1-.378-.378c-.088-.162-.134-.324-.134-.77v-1.436c0-.446.046-.608.134-.77a.908.908 0 0 1 .378-.378c.162-.088.324-.134.77-.134h1.436zm20 0c.445 0 .606.046.77.134a.91.91 0 0 1 .377.378c.088.162.134.324.134.77v1.436c0 .446-.046.608-.134.77a.908.908 0 0 1-.378.378c-.163.088-.324.134-.77.134h-1.436c-.446 0-.607-.046-.77-.134a.908.908 0 0 1-.378-.378c-.088-.162-.134-.324-.134-.77v-1.436c0-.446.046-.608.134-.77a.908.908 0 0 1 .378-.378c.163-.088.324-.134.77-.134h1.436zm-20-8c.445 0 .607.046.77.134a.91.91 0 0 1 .377.378c.088.162.134.324.134.77v1.436c0 .446-.046.608-.134.77a.908.908 0 0 1-.378.378c-.162.088-.324.134-.77.134h-1.436c-.446 0-.608-.046-.77-.134a.908.908 0 0 1-.378-.378c-.088-.162-.134-.324-.134-.77v-1.436c0-.446.046-.607.134-.77a.908.908 0 0 1 .378-.378c.162-.088.324-.134.77-.134h1.436zm20 0c.445 0 .606.046.77.134a.91.91 0 0 1 .377.378c.088.162.134.324.134.77v1.436c0 .446-.046.608-.134.77a.908.908 0 0 1-.378.378c-.163.088-.324.134-.77.134h-1.436c-.446 0-.607-.046-.77-.134a.908.908 0 0 1-.378-.378c-.088-.162-.134-.324-.134-.77v-1.436c0-.446.046-.607.134-.77a.908.908 0 0 1 .378-.378c.163-.088.324-.134.77-.134h1.436z"), u(e, "width", "57"), u(e, "height", "60"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-hidden", "true"), u(e, "data-testid", "stub-icon");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p (n, [o]) {
            o & 1 && u(t, "fill", n[0]);
        },
        i: K,
        o: K,
        d (n) {
            n && y(e);
        }
    };
}
function X3(i, e, t) {
    let { isWhite: n = !1 } = e, o;
    return i.$$set = (l)=>{
        "isWhite" in l && t(1, n = l.isWhite);
    }, i.$$.update = ()=>{
        i.$$.dirty & 2 && t(0, o = n ? "#fff" : "#909499");
    }, [
        o,
        n
    ];
}
class J3 extends ke {
    constructor(e){
        super(), _e(this, e, X3, Q3, ge, {
            isWhite: 1
        });
    }
}
function x3(i) {
    Fe(i, "v-1y9fytq", ".playerStub.v-1y9fytq{width:100%;height:100%;background-color:#222;display:flex;justify-content:center;align-items:center;position:relative;background-position:center;background-size:cover;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif}.title.v-1y9fytq{position:absolute;left:0;top:0;width:100%;font-size:15px;color:#fff;box-sizing:border-box;padding:18px 20px 10px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}");
}
function pr(i) {
    let e, t;
    return {
        c () {
            e = k("div"), t = ze(i[0]), u(e, "class", "title v-1y9fytq");
        },
        m (n, o) {
            C(n, e, o), d(e, t);
        },
        p (n, o) {
            o & 1 && Xe(t, n[0]);
        },
        d (n) {
            n && y(e);
        }
    };
}
function gr(i) {
    let e, t;
    return e = new J3({
        props: {
            isWhite: !!i[1]
        }
    }), {
        c () {
            D(e.$$.fragment);
        },
        m (n, o) {
            z(e, n, o), t = !0;
        },
        p (n, o) {
            const l = {};
            o & 2 && (l.isWhite = !!n[1]), e.$set(l);
        },
        i (n) {
            t || (m(e.$$.fragment, n), t = !0);
        },
        o (n) {
            p(e.$$.fragment, n), t = !1;
        },
        d (n) {
            O(e, n);
        }
    };
}
function $3(i) {
    let e, t, n, o, l = i[0] && pr(i), s = (!i[0] || !i[1]) && gr(i);
    return {
        c () {
            e = k("div"), l && l.c(), t = B(), s && s.c(), u(e, "class", "playerStub v-1y9fytq"), u(e, "style", n = i[1] ? `background-image: url('${i[1]}')` : "");
        },
        m (a, r) {
            C(a, e, r), l && l.m(e, null), d(e, t), s && s.m(e, null), o = !0;
        },
        p (a, [r]) {
            a[0] ? l ? l.p(a, r) : (l = pr(a), l.c(), l.m(e, t)) : l && (l.d(1), l = null), !a[0] || !a[1] ? s ? (s.p(a, r), r & 3 && m(s, 1)) : (s = gr(a), s.c(), m(s, 1), s.m(e, null)) : s && (me(), p(s, 1, 1, ()=>{
                s = null;
            }), he()), (!o || r & 2 && n !== (n = a[1] ? `background-image: url('${a[1]}')` : "")) && u(e, "style", n);
        },
        i (a) {
            o || (m(s), o = !0);
        },
        o (a) {
            p(s), o = !1;
        },
        d (a) {
            a && y(e), l && l.d(), s && s.d();
        }
    };
}
function eh(i, e, t) {
    let { title: n } = e, { thumbUrl: o } = e;
    return i.$$set = (l)=>{
        "title" in l && t(0, n = l.title), "thumbUrl" in l && t(1, o = l.thumbUrl);
    }, [
        n,
        o
    ];
}
class th extends ke {
    constructor(e){
        super(), _e(this, e, eh, $3, ge, {
            title: 0,
            thumbUrl: 1
        }, x3);
    }
}
class br {
    constructor(){
        Object.defineProperty(this, "listeners", {
            value: {},
            writable: !0,
            configurable: !0
        });
    }
    addEventListener(e, t, n) {
        e in this.listeners || (this.listeners[e] = []), this.listeners[e].push({
            callback: t,
            options: n
        });
    }
    removeEventListener(e, t) {
        if (!(e in this.listeners)) return;
        const n = this.listeners[e];
        for(let o = 0, l = n.length; o < l; o++)if (n[o].callback === t) {
            n.splice(o, 1);
            return;
        }
    }
    dispatchEvent(e) {
        if (!(e.type in this.listeners)) return;
        const n = this.listeners[e.type].slice();
        for(let o = 0, l = n.length; o < l; o++){
            const s = n[o];
            try {
                s.callback.call(this, e);
            } catch (a) {
                Promise.resolve().then(()=>{
                    throw a;
                });
            }
            s.options && s.options.once && this.removeEventListener(e.type, s.callback);
        }
        return !e.defaultPrevented;
    }
}
class W1 extends br {
    constructor(){
        super(), this.listeners || br.call(this), Object.defineProperty(this, "aborted", {
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
let ih = class {
    constructor(){
        Object.defineProperty(this, "signal", {
            value: new W1,
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
        let n = e;
        if (n === void 0) {
            if (typeof document > "u") n = new Error("This operation was aborted"), n.name = "AbortError";
            else try {
                n = new DOMException("signal is aborted without reason");
            } catch  {
                n = new Error("This operation was aborted"), n.name = "AbortError";
            }
        }
        this.signal.reason = n, this.signal.dispatchEvent(t);
    }
    toString() {
        return "[object AbortController]";
    }
};
typeof Symbol < "u" && Symbol.toStringTag && (ih.prototype[Symbol.toStringTag] = "AbortController", W1.prototype[Symbol.toStringTag] = "AbortSignal");
function Z1(i) {
    return i.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"), !0) : typeof i.Request == "function" && !i.Request.prototype.hasOwnProperty("signal") || !i.AbortController;
}
function nh(i) {
    typeof i == "function" && (i = {
        fetch: i
    });
    const { fetch: e, Request: t = e.Request, AbortController: n, __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: o = !1 } = i;
    if (!Z1({
        fetch: e,
        Request: t,
        AbortController: n,
        __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: o
    })) return {
        fetch: e,
        Request: l
    };
    let l = t;
    (l && !l.prototype.hasOwnProperty("signal") || o) && (l = function(c, f) {
        let h;
        f && f.signal && (h = f.signal, delete f.signal);
        const g = new t(c, f);
        return h && Object.defineProperty(g, "signal", {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: h
        }), g;
    }, l.prototype = t.prototype);
    const s = e;
    return {
        fetch: (r, c)=>{
            const f = l && l.prototype.isPrototypeOf(r) ? r.signal : c ? c.signal : void 0;
            if (f) {
                let h;
                try {
                    h = new DOMException("Aborted", "AbortError");
                } catch  {
                    h = new Error("Aborted"), h.name = "AbortError";
                }
                if (f.aborted) return Promise.reject(h);
                const g = new Promise((v, b)=>{
                    f.addEventListener("abort", ()=>b(h), {
                        once: !0
                    });
                });
                return c && c.signal && delete c.signal, Promise.race([
                    g,
                    s(r, c)
                ]);
            }
            return s(r, c);
        },
        Request: l
    };
}
const pl = Z1({
    fetch: window.fetch,
    Request: window.Request,
    AbortController: window.AbortController
}), j1 = pl ? nh({
    fetch: window.fetch,
    Request: window.Request,
    AbortController: window.AbortController
}) : void 0, oh = pl ? j1.fetch : window.fetch;
pl ? j1.Request : window.Request;
const lh = (i, e)=>i < 400 || e < 225 ? 5 : i < 640 || e < 360 ? 0 : i < 960 || e < 540 ? 1 : i < 1280 || e < 720 ? 2 : 3, sh = "//ad.mail.ru/static/admanhtml/rbadman-html5.min.js";
class ah {
    adman = null;
    initialVolume = 1;
    videoElement = null;
    currentAdSection = null;
    actions = null;
    adsState = null;
    playerState = null;
    log;
    loadTimeout;
    initTimeout;
    events = {
        slotRequested$: new (0, _esnextEsmJs1.Subject),
        started$: new (0, _esnextEsmJs1.Subject),
        paused$: new (0, _esnextEsmJs1.Subject),
        resumed$: new (0, _esnextEsmJs1.Subject),
        ended$: new (0, _esnextEsmJs1.Subject),
        skipped$: new (0, _esnextEsmJs1.Subject),
        clicked$: new (0, _esnextEsmJs1.Subject)
    };
    constructor(e, t){
        this.log = e.createComponentLog("AdmanWrapper"), this.loadTimeout = t.loadTimeout, this.initTimeout = t.initTimeout;
    }
    init(e, t, n) {
        this.actions = e, this.adsState = t, this.playerState = n;
    }
    loadAdman = (e)=>new Promise((t, n)=>{
            let o;
            const l = ()=>{
                clearTimeout(o), delete window.admanAsyncInit, window.AdmanHTML ? t() : n();
            };
            (0, _esnextEsmJs1.addScript)(sh, e, this.loadTimeout).then(()=>{
                window.AdmanHTML ? t() : (window.admanAsyncInit = l, o = window.setTimeout(l, this.initTimeout));
            }).catch(()=>{
                n();
            });
        });
    onAdmanLoadingError() {
        this.log({
            message: "adman loading error"
        }), this.switchToVideo(!0);
    }
    initAdman(e) {
        const { width: t, height: n, isFullscreen: o, isAutoplay: l, adsContainer: s, adsVideoElement: a, slotId: r, params: c = {}, duration: f, previewParam: h } = e;
        let g;
        const v = this.playerState && Qe(this.playerState.vsid);
        v && (g = parseInt(v, 36));
        const b = {
            dl: encodeURIComponent(window.location.href),
            autoplay: l,
            player_width: t,
            player_height: n,
            puid10: lh(t, n),
            puid11: o ? 0 : 1,
            preview: h,
            ...g ? {
                request_id: g
            } : {},
            duration: f,
            ...c
        }, _ = {
            slot: r,
            wrapper: s,
            videoEl: a,
            videoQuality: n,
            params: b,
            browser: {
                mobile: !1
            }
        }, V = new window.AdmanHTML;
        V.setDebug(!1), V.onReady(this.onAdsReady), V.onStarted(this.onAdStarted), V.onPlayed(this.onAdPlayed), V.onPaused(this.onAdPaused), V.adMidrollPoint(this.onAdMidrollPoint), V.onClosed(this.onAdClosed), V.onSkipped(this.onAdSkipped), V.onClicked(this.onAdClicked), V.onTimeRemained(this.onAdTimeRemained), V.onCompleted(this.onAdCompleted), V.onError(this.onAdError), V.init(_), this.adman = V, this.videoElement = a, this.events.slotRequested$.next(), this.log({
            message: `adman init, config: ${JSON.stringify(_)}`
        });
    }
    switchToVideo(e = !1) {
        if (this.currentAdSection === null && !e) {
            this.log({
                message: "switch to video, no currentAdSection. can't switch"
            });
            return;
        }
        (0, _esnextEsmJs1.assertNonNullable)(this.actions), (0, _esnextEsmJs1.assertNonNullable)(this.adsState), (0, _esnextEsmJs1.assertNonNullable)(this.playerState);
        const t = this.currentAdSection === gn.Postroll;
        this.adsState.playbackState.set(Ot.INACTIVE), this.currentAdSection = null, this.playerState.mobileUnmuteButtonVisible.set(!1), this.log({
            message: `switch to video, isPostroll: ${t}`
        }), t && (this.adsState.postrollPassed.set(!0), this.log({
            message: "postroll passed"
        })), this.actions.switchFromAdsToVideo(!t);
    }
    togglePlay() {
        (0, _esnextEsmJs1.assertNonNullable)(this.adsState), this.log({
            message: "toggle play"
        });
        const e = Qe(this.adsState.playbackState);
        e === Ot.PLAYING ? this.pause() : e === Ot.PAUSED && this.play();
    }
    setInitialVolume(e) {
        this.log({
            message: `set initial volume ${e}`
        }), this.initialVolume = e;
    }
    setVolume(e) {
        this.log({
            message: `set volume ${e}`
        }), this.adman?.setVolume(e), this.videoElement && (this.videoElement.volume = e);
    }
    setFullscreen(e) {
        this.log({
            message: `set fullscreen ${e}`
        }), this.adman?.setFullscreen(e);
    }
    startPreroll() {
        (0, _esnextEsmJs1.assertNonNullable)(this.adman), this.log({
            message: "start preroll"
        }), this.setVolume(this.initialVolume), this.currentAdSection = gn.Preroll, this.adman.start(gn.Preroll);
    }
    startPostroll() {
        (0, _esnextEsmJs1.assertNonNullable)(this.adman), (0, _esnextEsmJs1.assertNonNullable)(this.actions), this.log({
            message: "start postroll"
        }), this.actions.switchFromVideoToAds(), this.currentAdSection = gn.Postroll, this.adman.start(gn.Postroll);
    }
    onAdsReady = ()=>{
        this.log({
            message: "ads ready"
        }), this.startPreroll();
    };
    onAdStarted = (e, t)=>{
        (0, _esnextEsmJs1.assertNonNullable)(this.adsState), (0, _esnextEsmJs1.assertNonNullable)(this.playerState), (0, _esnextEsmJs1.assertNonNullable)(this.actions), this.log({
            message: `ad started, section: ${e}, banner: ${JSON.stringify(t)}`
        }), this.events.started$.next(e), t.muted && (this.setVolume(0), this.actions.setMuted(!0), this.log({
            message: "ad muted start"
        }), Qe(this.playerState.isMobile) && this.playerState.mobileUnmuteButtonVisible.set(!0)), this.adsState.duration.set(t.duration), this.adsState.playbackState.set(Ot.PLAYING), this.adsState.canSkip.set(t.allowClose), this.adsState.secondsToWatchBeforeSkip.set(t.allowCloseDelay);
    };
    onAdTimeRemained = ({ currentTime: e })=>{
        (0, _esnextEsmJs1.assertNonNullable)(this.adsState), this.adsState.position.set(e);
    };
    onAdPaused = ()=>{
        (0, _esnextEsmJs1.assertNonNullable)(this.adsState), this.log({
            message: "ad paused"
        }), this.adsState.playbackState.set(Ot.PAUSED);
    };
    onAdPlayed = ()=>{
        (0, _esnextEsmJs1.assertNonNullable)(this.adsState), this.log({
            message: "ad played"
        }), this.adsState.playbackState.set(Ot.PLAYING);
    };
    onAdMidrollPoint = ()=>{
        (0, _esnextEsmJs1.assertNonNullable)(this.adman), (0, _esnextEsmJs1.assertNonNullable)(this.actions), this.log({
            message: "midroll point"
        }), this.actions.switchFromVideoToAds(), this.currentAdSection = gn.Midroll, this.adman.start(gn.Midroll);
    };
    onAdSkipped = ()=>{
        this.log({
            message: "ad skipped"
        }), this.switchToVideo();
    };
    onAdClosed = ()=>{
        this.log({
            message: "ad closed"
        }), this.switchToVideo();
    };
    onAdCompleted = ()=>{
        this.log({
            message: "ad completed"
        }), this.events.ended$.next(), this.switchToVideo();
    };
    onAdClicked = ()=>{
        this.log({
            message: "ad clicked"
        }), this.videoElement?.pause(), this.events.clicked$.next();
    };
    onAdError = ()=>{
        this.log({
            message: "ad error"
        }), this.switchToVideo(!0);
    };
    play() {
        (0, _esnextEsmJs1.assertNonNullable)(this.adman), this.log({
            message: "ad play"
        }), this.adman.resume(), this.events.resumed$.next();
    }
    pause() {
        (0, _esnextEsmJs1.assertNonNullable)(this.adman), this.log({
            message: "ad pause"
        }), this.adman.pause(), this.events.paused$.next();
    }
    skip() {
        (0, _esnextEsmJs1.assertNonNullable)(this.adman), this.log({
            message: "ad skip"
        }), this.adman.skip(), this.events.skipped$.next();
    }
    setPosition(e, t) {
        this.adman?.setPosition(Math.floor(e), Math.floor(t));
    }
    destroy() {
        this.log({
            message: "destroy"
        }), this.adman?.destroy();
    }
}
const rh = (i)=>{
    const e = Math.round(i);
    return isNaN(e) || e < 40 ? "" : e >= 40 && e < 55 ? 50 : e >= 55 && e < 90 ? 60 : e >= 90 && e < 180 ? 120 : e >= 180 ? 240 : "";
};
class uh {
    oneLineRegExp = /\r\n|\n|\r/;
    twoLinesRegExp = /\r\n\r\n|\n\n|\r\r/;
    parse(e) {
        const t = [], n = e.split(this.twoLinesRegExp);
        for (const o of n){
            const l = {
                startTime: 0,
                endTime: 0,
                texts: [],
                lang: ""
            }, s = o.split(this.oneLineRegExp);
            for (const a of s)if (!l.startTime && !l.endTime) {
                const r = new G1, { startTime: c, endTime: f } = r.parse(a);
                l.startTime = c, l.endTime = f;
            } else if (a.trim() !== "") {
                const r = new ch, { texts: c } = r.parse(a);
                l.texts = [
                    ...l.texts,
                    ...c
                ];
            }
            (l.startTime || l.endTime) && l.texts.length > 0 && t.push(l);
        }
        return t;
    }
}
class G1 {
    timeRegExp = /(\d{2})?:?(\d{2}):(\d{2}).(\d{2,3})/;
    timingRegExp = new RegExp(`${this.timeRegExp.source}( ?--> ?)${this.timeRegExp.source}`);
    parse(e) {
        const t = {
            startTime: 0,
            endTime: 0
        }, n = this.timingRegExp.exec(e);
        return n && (t.startTime = this.calcTime(n[1], n[2], n[3], n[4]), t.endTime = this.calcTime(n[6], n[7], n[8], n[9])), t;
    }
    parseTime(e) {
        const t = this.timeRegExp.exec(e);
        return t ? this.calcTime(t[1], t[2], t[3], t[4]) : 0;
    }
    isTime(e) {
        return this.timeRegExp.test(e);
    }
    calcTime(e = "0", t = "0", n = "0", o = "0") {
        const l = Number(e) * 3600, s = Number(t) * 60, a = Number(n), r = +`0.${o}`;
        return l + s + a + r;
    }
}
class ch {
    letterTagRegExp = /<[a-z]*>|<\/[a-z]*>/;
    parse(e) {
        const t = {
            texts: []
        }, o = e.replace(new RegExp(this.letterTagRegExp, "g"), "").split({
            [Symbol.split] (s) {
                let a = 0;
                const r = [];
                for(; a < s.length;){
                    const c = [
                        "<",
                        ">"
                    ].reduce((f, h)=>{
                        const g = s.indexOf(h, a);
                        return f === -1 || f > g ? g : f;
                    }, -1);
                    if (c === -1) {
                        r.push(s.substring(a));
                        break;
                    }
                    r.push(s.substring(a, c)), a = c + 1;
                }
                return r;
            }
        }), l = new G1;
        for (const s of o)l.isTime(s) ? t.texts.push({
            type: "timestamp",
            value: l.parseTime(s)
        }) : t.texts.push({
            type: "text",
            value: s
        });
        return t;
    }
}
let An, xi, Go = 0, Ko = !1;
const fh = (i, e, t)=>{
    const n = i >= Go, o = i < Go, l = (c, f = 0, h = 0)=>c < f && c < h, s = (c, f = 0, h = 0)=>c >= f && c <= h, a = (c, f = 0, h = 0)=>c > f && c > h, r = t.find(({ lang: c })=>c === e.value)?.subtitles;
    if (Go = i, o && (Ko = !1), (0, _esnextEsmJs1.isNonNullable)(An) && s(i, An.startTime, An.endTime) && An.lang === e.value) return An;
    if (!(0, _esnextEsmJs1.isNonNullable)(xi) && r?.length && !Ko) {
        const c = r.find(({ startTime: f, endTime: h })=>s(i, f, h) || n && l(i, f, h));
        xi = c && {
            ...c,
            lang: e.value
        }, An = void 0, !(0, _esnextEsmJs1.isNonNullable)(xi) && r[r.length - 1].endTime < i && (Ko = !0);
        return;
    } else {
        if (s(i, xi?.startTime, xi?.endTime)) return An = xi, xi = void 0, An;
        (n && a(i, xi?.startTime, xi?.endTime) || o && l(i, xi?.startTime, xi?.endTime)) && (xi = void 0);
    }
}, Yo = {
    ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    en: "English",
    uk: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
    be: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F (\u0442\u0430\u0440\u0430\u0448\u043A\u0435\u0432i\u0446\u0430)",
    es: "Espa\xf1ol",
    fi: "Suomi",
    de: "Deutsch",
    it: "Italiano",
    bg: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438",
    hr: "Hrvatski",
    hu: "Magyar",
    sr: "\u0421\u0440\u043F\u0441\u043A\u0438",
    "pt-PT": "Portugu\xeas",
    el: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
    pl: "Polski",
    fr: "Fran\xe7ais",
    ko: "\uD55C\uAD6D\uC5B4",
    "zh-CN": "\u6C49\u8BED",
    lt: "Lietuvi\u0173",
    ja: "\u65E5\u672C\u8A9E",
    cs: "\u010Ce\u0161tina",
    et: "Eesti",
    tt: "\u0422\u0430\u0442\u0430\u0440\u0447\u0430",
    ba: "\u0411\u0430\u0448\u04A1\u043E\u0440\u0442\u0441\u0430",
    cv: "\u0427\u0103\u0432\u0430\u0448\u043B\u0430",
    sk: "Sloven\u010Dina",
    ro: "Rom\xe2n\u0103",
    no: "Norsk",
    lv: "Latvie\u0161u",
    az: "Az\u0259rbaycan dili",
    hy: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576",
    sv: "Svenska",
    nl: "Nederlands",
    tk: "T\xfcrkmen",
    ka: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8",
    da: "Dansk",
    uz: "O\u2018zbek",
    th: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22",
    id: "Bahasa Indonesia",
    tg: "\u0422\u043E\u04B7\u0438\u043A\u04E3",
    sl: "Sloven\u0161\u010Dina",
    bs: "Bosanski",
    "pt-BR": "Portugu\xeas brasileiro",
    fa: "\u0641\u0627\u0631\u0633\u06CC",
    vi: "Ti\u1EBFng Vi\u1EC7t",
    hi: "\u0939\u093F\u0928\u094D\u0926\u0940",
    si: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD",
    bn: "\u09AC\u09BE\u0982\u09B2\u09BE",
    tl: "Tagalog",
    mn: "\u041C\u043E\u043D\u0433\u043E\u043B",
    my: "\u1017\u1019\u102C\u1005\u102C",
    tr: "T\xfcrk\xe7e",
    ne: "\u0928\u0947\u092A\u093E\u0932\u0940",
    ur: "\u0627\u0631\u062F\u0648",
    ky: "\u041A\u044B\u0440\u0433\u044B\u0437 \u0442\u0438\u043B\u0438",
    pa: "\u067E\u0646\u062C\u0627\u0628\u06CC",
    os: "\u0418\u0440\u043E\u043D",
    kn: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1",
    sw: "Kiswahili",
    kk: "\u049A\u0430\u0437\u0430\u049B\u0448\u0430",
    ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
    he: "\u05E2\u05D1\u05E8\u05D9\u05EA",
    ab: "\u0410\u04A7\u0441\u0448\u04D9\u0430",
    eu: "Euskara",
    eo: "Esperanto"
};
let To = null;
class fo {
    constructor(e, t){
        if (!To) {
            const n = new (0, _esnextEsmJs2.OneStat)(e, t), o = new (0, _esnextEsmJs1.Subscription);
            To = Object.freeze({
                oneStat: n,
                statSubscription: o,
                destroy: ()=>{
                    n?.destroy(), o?.unsubscribe(), To = null;
                }
            });
        }
    }
    static getInstance() {
        return To;
    }
}
const dh = ({ interfaceLanguage: i, videoId: e, isClip: t, isLiveCatchUpMode: n, statAuthToken: o, isAudioDisabled: l, canDownload: s, callbacks: a, webApi: r, videoEpisodes: c, previewThumbsData: f, uiConfig: h, coreConfig: g, player: v, disabledControls: b, isInteractive: _, interactiveRanges: V, replayInteractive: A, hasInteractiveBranches: S, playPrevChapterDisabledTooltip: P, additionalButtons: N, looped: W = !1 })=>{
    const X = {
        ...g,
        configName: [
            ...g.configName ?? [],
            "ui"
        ],
        isAudioDisabled: l,
        live: {
            ...g.live ?? {},
            isLiveCatchUpMode: !!n
        }
    }, Z = h, T = v || new (0, _esnextEsmJs.Player)(X);
    T.setLooped(W);
    const te = new (0, _esnextEsmJs1.Logger), j = new ah(te, {
        loadTimeout: Z.ads.loadTimeout,
        initTimeout: Z.ads.initTimeout
    }), ie = fo.getInstance(), G = el.getInstance(), J = r?.pictureInPictureApi, ue = r?.annotationsApi, w = te.createComponentLog("Store");
    let oe, fe, ve = {};
    const Me = (0, _esnextEsmJs1.getCurrentBrowser)(), Ee = ie ? pt(ie.oneStat.vsid$) : un(void 0), we = De(po()), H = J?.info.isActive$ ?? new (0, _esnextEsmJs1.ValueSubject)(!1), M = J?.info.type, Y = De(0), pe = De([]), ee = (0, _esnextEsmJs1.merge)(T.events.fatalError$, T.events.managedError$).subscribe((E)=>pe.update((ce)=>[
                ...ce,
                E
            ])), R = un(!1, (E)=>{
        const ce = T.events.fatalError$.subscribe(()=>E(!0));
        return ()=>ce.unsubscribe();
    }), Q = async (E)=>{
        const ce = Object.values((0, _esnextEsmJs1.InterfaceLanguage)).includes(E);
        if (Z.downloadVKLanguages && (ce && Z.updateBuiltinLanguages || !Sl(E))) {
            let Oe;
            try {
                Oe = await (0, _esnextEsmJs1.loadVKLangPack)(E, Ru, Bu);
            } catch (Ke) {
                ie?.oneStat?.logError({
                    errorType: "VKLangPack",
                    fatal: !1
                }), G?.report(Ke, {
                    errorType: "VKLangPack",
                    fatal: !1
                });
            }
            Oe && (Pl({
                language: E,
                pack: Oe,
                fallback: Z.defaultLanguage
            }), Ve.set(E));
        }
        Sl(E) && Ve.set(E);
    }, Ve = De(i);
    Q(i);
    const ye = (E, ce)=>{
        const Se = Qe(Ve);
        return Yr(Se, E, ce, Z.defaultLanguage);
    }, Te = De(Ne.Thumb), x = (()=>{
        const E = Jt([
            R,
            Te
        ], ([ce, Se])=>ce ? Ne.Crashed : Se);
        return {
            ...E,
            is: (ce)=>Qe(E) === ce
        };
    })(), le = (()=>{
        const E = De(new Set(b));
        return {
            ...E,
            add: (ce)=>{
                E.update((Se)=>new Set([
                        ...Se
                    ].concat(ce)));
            },
            remove: (ce)=>{
                E.update((Se)=>{
                    const Oe = [
                        ...Se
                    ];
                    return new Set(Array.isArray(ce) ? Oe.filter((Ke)=>!ce.includes(Ke)) : Oe.filter((Ke)=>Ke !== ce));
                });
            },
            includes: (ce)=>{
                const Se = Qe(E);
                return Array.isArray(ce) ? ce.every((Oe)=>Se.has(Oe)) : Se.has(ce);
            }
        };
    })();
    w({
        message: "create store"
    });
    const be = (E)=>{
        w({
            message: `init video, config: ${JSON.stringify(E)}`
        }), _ ? E.container.append(T.experimental.element$.getValue()) : T.initVideo(E), E.subtitles && T.setExternalTextTracks(E.subtitles), oe = E;
    }, ae = new (0, _esnextEsmJs1.Subject), Ue = (E)=>ae.next(E), qe = new (0, _esnextEsmJs1.Subject), Je = new (0, _esnextEsmJs1.Subject), tt = new (0, _esnextEsmJs1.Subject), Be = {
        actionRewind$: qe,
        actionSeek$: Je,
        inPiP$: H,
        inFullscreen$: new (0, _esnextEsmJs1.Observable)((E)=>we.subscribe((ce)=>E.next(ce))),
        actionSetSubtitle$: tt,
        nextMovie$: ae
    };
    if (ie) {
        const { oneStat: E, statSubscription: ce } = ie;
        ce.add(E.attachTo(T)), ce.add(E.attachToUi(Be)), ce.add(E.attachToAds(j.events)), E.authorize(o).catch((Se)=>{
            w({
                message: `onestat auth error ${String(Se)}`
            });
        });
    }
    if (G) {
        const E = new (0, _esnextEsmJs1.Subscription), ce = (Se, Oe)=>E.add(Se.subscribe(Oe));
        if (ce(T.events.managedError$, (Se)=>{
            G.logIError(Se);
        }), ce(T.events.fatalError$, (Se)=>{
            G.logIError(Se, !0);
        }), ie) {
            const { oneStat: Se } = ie;
            ce(Se.experimental.error$, (Oe)=>{
                G.logIError(Oe);
            });
        }
        G.sentrySubscription.add(E);
    }
    const at = ()=>{
        (0, _esnextEsmJs1.isIOS)() && fe && rc(fe);
    }, St = new (0, _esnextEsmJs1.Subscription)().add(T.experimental.element$.subscribe((E)=>{
        E && (fe = E, E.classList.add("player-media"), Mo(J) && (J.updateVideoElement(), J.registryEventHandlers()), _ && E.setAttribute("pip", "false"));
    })).add(T.events.ended$.subscribe(()=>{
        at(), a?.onEnded?.();
    })).add(T.events.started$.subscribe(async ()=>{
        Mo(J) && await J?.revealPictureInPicture();
        const E = T.info.muted$.getValue();
        a?.onStarted?.(), ve.onStarted?.(E);
    })).add(T.events.willSeek$.subscribe(({ from: E, to: ce })=>{
        a?.onSeek?.(E, ce);
    })).add(T.info.position$.subscribe((E)=>{
        const ce = T.info.duration$.getValue();
        a?.onTimeupdate?.(ce, E), j.setPosition(E, ce);
    })).add(T.events.fatalError$.subscribe(()=>{
        a?.onCrashed?.();
    })).add(T.info.is3DVideo$.subscribe((E)=>{
        Et.ui.is3DVideo.set(E);
    })).add(T.info.isEnded$.subscribe((E)=>{
        _ && (E ? (Qe(Ho) && le.add(Mr), le.add(ct.PLAY_BUTTON)) : le.remove(ct.PLAY_BUTTON));
    })).add(T.info.liveTime$.subscribe((E)=>{
        a?.onLiveTime?.(E);
    })), Re = new (0, _esnextEsmJs1.Subscription), Le = ()=>{
        Re.add(T.events.log$.subscribe((E)=>{
            console.debug("%c sdk ", "background:#9ddcf7;", `sdk component: ${E.component}`, E.message);
        })).add(te.log$.subscribe((E)=>{
            console.debug("%c ui ", "background:#f3da0b;", `ui component: ${E.component}.`, E.message);
        }));
    }, kt = ()=>{
        Re.unsubscribe();
    }, Dt = (E, ce)=>{
        T.startCameraManualRotation(E, ce);
    }, mt = (E = !1)=>{
        T.stopCameraManualRotation(E);
    }, ot = (E, ce, Se)=>{
        T.moveCameraFocusPX(E, ce, Se);
    }, re = ()=>{
        T.holdCamera();
    }, xe = ()=>{
        T.releaseCamera();
    }, Ye = un(T.info.position$.getValue(), (E)=>{
        let ce, Se;
        const Oe = ()=>{
            const Ke = T.info.playbackState$.getValue(), Qt = T.info.isLive$.getValue(), vi = T.info.duration$.getValue(), Xt = T.info.position$.getValue();
            if ([
                (0, _esnextEsmJs.PlaybackState).PLAYING,
                (0, _esnextEsmJs.PlaybackState).PAUSED
            ].includes(Ke)) {
                const Tn = Qt ? Xt - vi : T.getExactTime();
                Tn !== Se && E(Tn), Se = Tn;
            }
            ce = requestAnimationFrame(Oe);
        };
        return Oe(), ()=>cancelAnimationFrame(ce);
    }), it = pt(H), Ge = pt(T.info.playbackState$), ft = pt(T.info.currentBuffer$), $e = pt(T.info.isEnded$), Bt = pt(T.info.isLive$), wt = Z.features.playbackRate ? pt(T.info.canChangePlaybackSpeed$) : un(!1), nt = pt(T.info.liveBufferTime$), Ht = pt(T.info.volume$), ut = pt(T.info.muted$), Ze = Or(T.info.autoQualityLimits$.pipe((0, _esnextEsmJs1.map)(({ max: E })=>E !== void 0)), T.info.autoQualityLimits$.getValue()?.max !== void 0), Tt = pt(T.info.autoQualityLimitingAvailable$), lt = pt(T.info.availableQualities$), oi = pt(T.info.availableQualitiesFps$), de = pt(T.info.chromecastState$), Ce = pt(T.info.chromecastDeviceName$), Ie = pt(T.info.currentFormat$), Pt = pt(T.info.throughputEstimation$), Mi = pt(T.info.videoBitrate$), $t = pt(T.info.intrinsicVideoSize$), _i = pt(T.info.duration$), Ri = pt(T.info.isAudioAvailable$);
    let Vt = null;
    const Pe = T.info.isBuffering$, Nt = un(Pe.getValue(), (E)=>{
        const ce = Pe.subscribe((Se)=>{
            Se && Vt === null ? Vt = window.setTimeout(()=>{
                E(Pe.getValue()), Vt = null;
            }, Z.loaderDelay) : E(Se);
        });
        return ()=>{
            ce.unsubscribe(), Vt && clearTimeout(Vt);
        };
    }), Bi = ()=>{
        Vt && clearTimeout(Vt), Vt = null;
    }, li = Jt([
        _i,
        Bt
    ], ([E, ce])=>ce ? -E : E), ki = Jt([
        Ge
    ], ([E])=>E === (0, _esnextEsmJs.PlaybackState).PLAYING), wi = pt(T.info.atLiveEdge$), yi = pt(T.info.atLiveDurationEdge$), si = pt(T.info.position$), Qi = Jt([
        si,
        _i
    ], ([E, ce])=>isFinite(E) && isFinite(ce) && !!ce), hi = Jt([
        de
    ], ([E])=>E === (0, _esnextEsmJs.ChromecastState).CONNECTED), Ci = De(void 0), Pi = pt(T.info.isAutoQualityEnabled$, (E)=>E && Ci.set(void 0)), Ni = pt(T.info.currentQuality$, ()=>Ci.set(void 0)), Si = Jt([
        Ci,
        Ni
    ], ([E, ce])=>E ?? ce), Zi = Jt([
        lt,
        oi,
        Pi,
        Si,
        Ie
    ], ([E, ce, Se, Oe, Ke])=>{
        const Qt = [];
        Ke !== (0, _esnextEsmJs.VideoFormat).MPEG && Qt.push({
            value: Xn.AUTO,
            displayValue: ye("auto_quality_option"),
            selected: Se
        });
        const vi = E.filter((Xt)=>Xt !== (0, _esnextEsmJs1.VideoQuality).INVARIANT);
        for (const Xt of vi){
            const Tn = ce[Xt], ko = Xt === (0, _esnextEsmJs1.VideoQuality).INVARIANT ? ye("auto_quality_option") : Xt;
            Qt.push({
                value: Xt,
                displayValue: `${ko}${Tn ? rh(Tn) : ""}`,
                selected: Se ? !1 : Xt === Oe
            });
        }
        return Qt;
    }), ei = pt(T.info.currentPlaybackRate$), ai = Jt([
        ei,
        wi,
        yi
    ], ([E, ce, Se])=>{
        const Oe = Se || _ ? 1 : Z.controls.playbackRateMin, Ke = ce ? 1 : Z.controls.playbackRateMax, Qt = Z.controls.playbackRateStep, vi = [];
        for(let Xt = Oe; Xt <= Ke; Xt += Qt)vi.push({
            value: Xt,
            displayValue: Xt === 1 ? ye("playback_rate_1") : ye("playback_rate", {
                multiplier: Xt.toString(10)
            }),
            selected: E === Xt
        });
        return vi;
    }), Ti = Z.features.subtitles ? pt(T.info.availableTextTracks$) : un([]), Ft = Jt([
        Ti
    ], ([E], ce)=>{
        const Se = [], Oe = [];
        for (const Ke of E)Ke.url && Se.push(oh(Ke.url));
        Promise.allSettled(Se).then((Ke)=>{
            for (const [Qt, vi] of Ke.entries())vi.status === "fulfilled" && vi.value.text().then((Xt)=>{
                const Tn = new uh, ko = E[Qt].language, X1 = !!E[Qt].isAuto, bl = Tn.parse(Xt);
                ko && bl && Oe.push({
                    lang: ko,
                    subtitles: bl,
                    isAuto: X1
                }), Qt === Ke.length - 1 && ce(Oe);
            });
        });
    }), yt = {
        displayValue: ye("subtitles_off"),
        value: "off"
    }, Ut = De({
        ...yt
    }), zi = Jt([
        Ft,
        Ut,
        Ft
    ], ([E, ce])=>{
        if (E?.length > 0) {
            const Se = [
                {
                    ...yt,
                    selected: ce?.value === yt.value
                }
            ];
            for (const { lang: Oe, isAuto: Ke } of E)Yo[Oe] && Se.push({
                displayValue: Ke ? ye("subtitles_auto", {
                    language: Yo[Oe]
                }) : Yo[Oe],
                value: Oe,
                selected: ce?.value === Oe,
                isAuto: Ke
            });
            return Se;
        } else return [];
    }), Xi = Jt([
        Ye,
        Ut,
        Ft
    ], ([E, ce, Se])=>{
        if (ce && ce.value !== yt.value) return fh(E, ce, Se);
    }), Oi = Jt([
        Xi
    ], ([E])=>E?.texts ? E.texts : []), ti = De(!0), qi = Jt([
        ft,
        li,
        si,
        nt
    ], ([E, ce, Se, Oe])=>{
        const Ke = E?.end ?? 0;
        if (!Oe) return Ke / ce;
        const vi = -Se + Oe - ce;
        return (Ke - vi) / ce;
    }), ji = pt(T.info.availableSources$), ri = Jt([
        ji
    ], ([E])=>Object.keys(E?.[(0, _esnextEsmJs.VideoFormat).MPEG] || {}).length > 0), Di = ()=>{
        const E = Object.keys(T.info.availableSources$?.getValue()?.[(0, _esnextEsmJs.VideoFormat).MPEG] || {}), ce = (0, _esnextEsmJs1.getHighestQuality)(E) || (0, _esnextEsmJs1.VideoQuality).Q_144P;
        return oe.sources[(0, _esnextEsmJs.VideoFormat).MPEG]?.[ce];
    }, Ai = ()=>{
        const E = Di();
        E ? qu(E, oe?.meta?.title || "video") : w({
            message: "There is no URL for download video"
        });
    }, Ei = ()=>{
        w({
            message: "toggle muted"
        });
        const E = T.info.muted$.getValue(), Oe = !(T.info.volume$.getValue() === 0 || E);
        pi(Oe);
    }, Li = (E, ce = E, Se = !1)=>{
        const Oe = !Se, Ke = T.info.muted$.getValue();
        w({
            message: `set volume, volume: ${E}, preferredVolume: ${ce}, internalCall: ${Oe}`
        }), T.setVolume(E), j.setVolume(E), Oe && a?.onVolumeChange?.(E), Cl(ce), Ke ? (T.setMuted(!1), Oe && a?.onUnmute?.(), Uo(!1)) : !Ke && E === 0 && (T.setMuted(!0), Oe && a?.onMute?.(), Uo(!0));
    }, pi = (E, ce = !1)=>{
        const Se = !ce, Oe = T.info.volume$.getValue();
        if (w({
            message: `set muted, currentVolume: ${Oe}, mute: ${E}, internalCall: ${Se}`
        }), T.setMuted(E), j.setVolume(E ? 0 : Oe), Uo(E), Se && (E ? a?.onMute?.() : a?.onUnmute?.()), Oe === 0) {
            let Ke = qr() ?? Z.volumeDefault;
            Ke === 0 && (Ke = Z.volumeMinRestore, Cl(Ke)), T.setVolume(Ke), j.setVolume(Ke), Se && a?.onVolumeChange?.(Ke);
        }
    }, qt = ()=>{
        T.prepare();
    }, ui = ()=>{
        if ((0, _esnextEsmJs1.assertNonNullable)(Et), !Qe(Et.ui.controls.disabledControls$).has(ct.PLAY_BUTTON)) {
            if (w({
                message: "toggle play"
            }), Qe(Et.playerPhase) === Ne.Ads) {
                j.togglePlay();
                return;
            }
            if (T.info.playbackState$.getValue() !== (0, _esnextEsmJs.PlaybackState).PLAYING) {
                if (T.info.isEnded$.getValue()) {
                    if (w({
                        message: "toggle play, video ended, seek to 0"
                    }), qe.next(), Je.next((0, _esnextEsmJs2.SeekAction).REWIND), _) {
                        A?.();
                        return;
                    }
                    T.seekTime(0);
                }
                w({
                    message: "toggle play, call player.play"
                }), T.play(), a?.onPlay?.();
            } else w({
                message: "toggle play, call player.pause"
            }), T.pause(), a?.onPause?.();
        }
    }, gi = (E)=>{
        w({
            message: `set quality, quality: ${E}`
        }), T.setAutoQuality(E === Xn.AUTO), E !== Xn.AUTO ? (Wu(e, E), Ci.set(E), T.setQuality(E)) : Wr();
    }, Wt = (E)=>{
        w({
            message: `set trafficSavingEnabled, value: ${E}`
        }), T.setAutoQualityLimits({
            max: E ? Z.trafficSavingLimit : void 0
        }), Gu(E);
    }, Zt = (E)=>{
        T.setPlaybackRate(E);
    }, ii = ()=>{
        const E = Qe(ai), ce = E.findIndex(({ selected: Oe })=>Oe);
        if (ce === E.length - 1) return;
        const Se = E[ce + 1];
        Zt(Se.value);
    }, ci = ()=>{
        const E = Qe(ai), ce = E.findIndex(({ selected: Oe })=>Oe);
        if (ce === 0) return;
        const Se = E[ce - 1];
        Zt(Se.value);
    }, jt = (E)=>{
        E && E.value !== yt.value && tt.next(E.isAuto ? E.value + "_auto" : E.value), Ut.set(E);
    }, bi = ()=>{
        const E = Qe(zi), ce = Qe(Ut), Se = Qe(Ve);
        if (ce?.value === yt.value) {
            const Oe = E.filter((Ke)=>Ke.value !== yt.value).find((Ke)=>Ke.value === Se) || E[1];
            jt(Oe ?? {
                ...yt
            });
        } else jt({
            ...yt,
            selected: !1
        });
    }, ni = (E, ce, Se = !0)=>{
        if (w({
            message: `seek to time, time: ${E}`
        }), Je.next(ce), T.info.isLive$.getValue()) {
            const Oe = T.info.duration$.getValue(), Ke = Math.min(0, Oe + E);
            T.seekTime(Ke, Se);
        } else {
            if (Qe(Ho)) return;
            T.seekTime(gl(E), Se);
        }
    }, Hi = (E)=>{
        w({
            message: `seek to episode start time: ${E}`
        }), ni(E, (0, _esnextEsmJs2.SeekAction).EPISODE, !0);
    }, Vi = (E, ce)=>{
        w({
            message: `seek to percent, percent: ${E}`
        });
        const Se = Math.round(Qe(li) * E);
        ni(Se, ce, !1);
    }, Gi = (E)=>{
        w({
            message: `seek external, time: ${E}`
        }), Je.next((0, _esnextEsmJs2.SeekAction).UNKNOWN), T.seekTime(T.info.isLive$.getValue() ? -E : E);
    }, Fi = (E)=>{
        w({
            message: `set auto quality limitation. Max: ${E.max ?? "none"}. Min: ${E.min ?? "none"}`
        }), T.setAutoQualityLimits(E);
    }, fi = (E)=>{
        w({
            message: `seek external to episode start time: ${E}`
        }), ni(E, (0, _esnextEsmJs2.SeekAction).EPISODE, !0);
    }, Wi = (E)=>{
        w({
            message: `set playback rate to: ${E}`
        }), T.setPlaybackRate(E);
    }, Ii = De(void 0), se = De(!1), Gt = (E)=>{
        w({
            message: `start scrubbing, progress: ${E}`
        }), se.set(!0), Ui(E);
    }, Ui = (E)=>{
        Ii.set(E);
    };
    let Ji, dn;
    const mn = ()=>{
        Ii.set(void 0), se.set(!1);
    }, Kt = ()=>{
        clearTimeout(dn), clearTimeout(Ji), Ji = window.setTimeout(()=>{
            mn();
        }, 500), fe?.removeEventListener("seeked", Kt);
    }, Ln = (E)=>{
        w({
            message: `complete scrubbing, progress: ${E}`
        }), Vi(E, (0, _esnextEsmJs2.SeekAction).SLIDER), Qe(Et.ui.isMobile) && Qe(Et.state.currentFormat$) === (0, _esnextEsmJs.VideoFormat).HLS ? (fe?.addEventListener("seeked", Kt), dn = window.setTimeout(()=>{
            Kt();
        }, 300)) : mn();
    }, Vn = Jt([
        Ye,
        li,
        Ii
    ], ([E, ce, Se], Oe)=>{
        Oe((0, _esnextEsmJs1.isNonNullable)(Se) ? Se * ce : E);
    }), hn = De({
        width: 0,
        height: 0
    }), Sn = Jt([
        hn
    ], ([{ width: E }], ce)=>{
        const Se = pd(E);
        ce(Se);
    }), rn = De(!1), en = Jt([
        Sn,
        rn
    ], ([E, ce])=>ce ? N.filter((Se)=>!Se.hideOnMobile) : N.filter((Se)=>!Se.hideOnDesktopGridTypes?.includes(E))), In = Jt([
        rn,
        R
    ], ([E, ce], Se)=>{
        Se(E && ce);
    }), $ = ()=>{
        Je.next((0, _esnextEsmJs2.SeekAction).LIVE), w({
            message: "switch to active live"
        }), T.seekTime(0), T.info.playbackState$.getValue() !== (0, _esnextEsmJs.PlaybackState).PLAYING && Et.actions.internal.togglePlay();
    }, _t = ()=>j.skip(), Mn = (E = !0)=>{
        (0, _esnextEsmJs1.assertNonNullable)(Et), w({
            message: `switch from ads to video, callPlay: ${E}`
        }), Te.set(Ne.Video), E && T.play();
    }, Rn = ()=>{
        (0, _esnextEsmJs1.assertNonNullable)(Et), w({
            message: "switch from video to ads"
        }), Et.actions.internal.pause(), at(), Te.set(Ne.Ads);
    }, Bn = (E)=>{
        (0, _esnextEsmJs1.assertNonNullable)(Et);
        const ce = E ? Ne.WaitingLive : Ne.Thumb;
        Te.set(ce);
    }, to = (E)=>{
        (0, _esnextEsmJs1.assertNonNullable)(Et);
        const ce = E ? Ne.WaitingRecord : Ne.Thumb;
        Te.set(ce);
    }, io = ()=>((0, _esnextEsmJs1.assertNonNullable)(Et), Fu(T, oe, Et)), no = ()=>((0, _esnextEsmJs1.assertNonNullable)(Et), Uu(T, oe, Et)), oo = ()=>fe, lo = ()=>{
        w({
            message: "toggle chromecast"
        }), T.toggleChromecast();
    }, Fn = (E)=>{
        (0, _esnextEsmJs1.assertNonNullable)(Et);
        const ce = !E;
        if (Qe(Et.playerPhase) === Ne.Ads) {
            w({
                message: `pause ads, internalCall: ${ce}`
            }), j.pause();
            return;
        }
        w({
            message: `pause video, internalCall: ${ce}`
        }), ce && a?.onPause?.(), T.pause();
    }, so = (E)=>{
        (0, _esnextEsmJs1.assertNonNullable)(Et);
        const ce = !E;
        if (Qe(Et.playerPhase) === Ne.Ads) {
            w({
                message: `play ads, internalCall: ${ce}`
            }), j.play();
            return;
        }
        w({
            message: `play video, internalCall: ${ce}`
        }), ce && a?.onPlay?.(), T.play();
    }, ne = (E, ce)=>{
        (0, _esnextEsmJs1.assertNonNullable)(Et), w({
            message: `first start, show ads: ${E}, internalCall: ${!ce}`
        }), E ? Te.set(Ne.Ads) : (Te.set(Ne.Video), ce ? T.play() : Et.actions.internal.togglePlay());
    }, tn = ()=>(w({
            message: "getting time codes"
        }), c), st = ()=>{
        const E = tn();
        if (!E || [
            0,
            1
        ].includes(E.length)) return;
        const ce = T.info.position$.getValue();
        return E.find((Se)=>Se.time > ce);
    }, zt = (E)=>{
        let ce = E;
        ce || (ce = st()), ce && (w({
            message: "seek to next episode"
        }), ni(ce.time, (0, _esnextEsmJs2.SeekAction).EPISODE, !0));
    }, nn = ()=>{
        const E = tn();
        if (!E || [
            0,
            1
        ].includes(E.length)) return;
        const ce = T.info.position$.getValue(), Se = E.findIndex((Ke)=>Ke.time > ce), Oe = Se === -1 ? E.length - 2 : Se - 2;
        if (!(Oe < 0)) return E[Oe];
    }, pn = (E)=>{
        let ce = E;
        ce || (ce = nn()), ce && (w({
            message: "seek to prev episode"
        }), ni(ce.time, (0, _esnextEsmJs2.SeekAction).EPISODE, !0));
    }, ao = ()=>(w({
            message: "getting preview thumbs data"
        }), f), Nn = async ()=>{
        J?.isActive() ? await J?.remove() : await J?.request();
    }, q = (E = -90)=>{
        Y.update((ce)=>ce + E);
    }, Yt = De(V), Un = Jt([
        Yt
    ], ([E = []])=>{
        const ce = [];
        for(let Se = 0; Se < E.length; Se++){
            const { range: [Oe, Ke], subjects: Qt } = E[Se];
            Se === 0 && Oe !== 0 && ce.push({
                time: 0,
                text: ""
            }), ce.push({
                time: Oe / 1e3,
                text: "",
                interactive: !0,
                completed: !Qt.length
            }), Ke !== 1 / 0 && ce.push({
                time: Ke / 1e3,
                text: "",
                interactive: !1,
                completed: !Qt.length
            });
        }
        return ce;
    }), qn = (E)=>{
        const ce = Qe(Yt);
        Yt.set(ce.map((Se)=>({
                ...Se,
                subjects: Se.subjects.filter((Oe)=>Oe !== E)
            })));
    }, _o = De(!1), Ho = Jt([
        si,
        Yt,
        _o
    ], ([E, ce, Se])=>{
        if (!_) return !1;
        if (Se) return !0;
        const Oe = E * 1e3, Ke = ce?.find(({ range: [Qt, vi], subjects: Xt })=>Qt < Oe && Oe < vi && Xt.length);
        return Ke && Qe(se) && mn(), !!Ke;
    }), gl = (E)=>{
        if (!_) return E;
        const ce = Qe(Un), Se = Qe(li), Ke = Qe(si) / Se, Qt = ce.find((vi)=>vi.interactive && !vi.completed && vi.time > Ke);
        return typeof Qt?.time == "number" ? Math.min(E, Qt.time - .05) : E;
    }, Q1 = ()=>{
        clearTimeout(dn), clearTimeout(Ji), St.unsubscribe(), Re.unsubscribe(), T.destroy(), j.destroy(), ie?.destroy(), G?.destroy(), ee.unsubscribe();
    }, Et = {
        interfaceLanguage$: Ve,
        initVideo: be,
        videoId: e,
        isClip: t,
        playerPhase: x,
        vsid: Ee,
        state: {
            positionExact$: Ye,
            positionWithScrubbing$: Vn,
            duration$: li,
            playbackState$: Ge,
            isPlaying$: ki,
            isLoaderVisible: Nt,
            bufferedProgress$: qi,
            isLive$: Bt,
            canChangePlaybackSpeed$: wt,
            isActiveLive$: wi,
            isOldestAvailableLive$: yi,
            isRewindableLive$: Qi,
            isEnded$: $e,
            muted$: ut,
            volume$: Ht,
            trafficSavingEnabled$: Ze,
            autoQualityLimitingAvailable$: Tt,
            currentQuality$: Si,
            isAutoQualityEnabled$: Pi,
            availableQualities$: Zi,
            currentPlaybackRate$: ei,
            availablePlaybackRates$: ai,
            currentSubtitle$: Ut,
            availableSubtitlesList$: zi,
            currentSubtitleCaptions$: Oi,
            isAutoSubtitleCaptionVisible$: ti,
            chromecastState$: de,
            chromecastDeviceName$: Ce,
            chromecastConnected$: hi,
            currentFormat$: Ie,
            throughputEstimation$: Pt,
            videoBitrate$: Mi,
            videoSize$: $t,
            errorLog$: pe,
            crashed$: R,
            isAudioAvailable$: Ri,
            isAudioDisabled: !!l,
            canDownload: Z.features.download && !!s,
            availableSources$: ji,
            hasMpegSources$: ri,
            isInteractive: _,
            isInteractiveGraphEnabled: Z.features.interactiveGraph,
            isSeekToInteractiveEnable: Z.features.seekToInteractive,
            isPlayPrevChapterEnabled: Z.features.interactivePlayPrevChapter,
            interactiveEpisodes$: Un,
            isInteractiveTime$: Ho,
            graphIsOpened$: De(!1),
            isInteractiveExpectation$: _o,
            hasInteractiveBranches: S,
            playPrevChapterDisabledTooltip: P
        },
        ui: {
            controlsVisible: De(!1),
            touched: De(!1),
            controls: {
                prevButton: De(void 0),
                playButton: De(void 0),
                replayButton: De(void 0),
                nextButton: De(void 0),
                playPrevChapterButton: De(void 0),
                seekToInteractiveButton: De(void 0),
                interactiveGraphButton: De(void 0),
                liveButton: De(void 0),
                time: De(void 0),
                episodes: De(void 0),
                volume: De(void 0),
                subtitles: De(void 0),
                settings: De(void 0),
                chromecast: De(void 0),
                fullscreen: De(void 0),
                vkLogo: De(void 0),
                additionalButtons: N.length ? N.reduce((E)=>[
                        ...E,
                        De(void 0)
                    ], []) : [],
                disabledControls$: le
            },
            modals: {
                hotKeyMap: {
                    show: De(!1),
                    data: De({
                        title: "",
                        closeBtnText: "",
                        groups: []
                    })
                }
            },
            isFullscreen: we,
            rotateAlpha: Y,
            isAutoplay: De(!1),
            contextMenuVisible: De(!1),
            debugPanelVisible: De(!1),
            playerSize: hn,
            isMobile: rn,
            mobileNotReportControlHidden$: In,
            mobileUnmuteButtonExpanded: De(!1),
            mobileUnmuteButtonVisible: De(!1),
            icon3DVideoVisible: De(!1),
            settingsMenuVisible: De(!1),
            scrubbingInProgress: se,
            is3DVideo: De(!1),
            isPictureInPictureActive$: it,
            pictureInPictureType$: un(M),
            clientInfo$: un(Me),
            currentGridType$: Sn,
            additionalButtons$: en,
            interactiveHideMobileControls: De(!1),
            overlayContainer$: De(void 0)
        },
        ads: {
            position: De(0),
            duration: De(0),
            playbackState: De(Ot.INACTIVE),
            canSkip: De(!1),
            secondsToWatchBeforeSkip: De(0),
            postrollPassed: De(!1)
        },
        webApi: {
            pictureInPictureApi: J,
            annotationsApi: ue
        },
        actions: {
            internal: {
                preload: qt,
                firstStart: (E)=>ne(E, !1),
                pause: ()=>Fn(!1),
                togglePlay: ui,
                toggleMuted: Ei,
                setVolume: Li,
                setQuality: gi,
                setTrafficSavingEnabled: (E)=>Wt(E),
                setPlaybackRate: Zt,
                incrementPlaybackRate: ii,
                decrementPlaybackRate: ci,
                setSubtitle: jt,
                toggleSubtitle: bi,
                togglePictureInPicture: Nn,
                startScrubbing: Gt,
                progressScrubbing: Ui,
                completeScrubbing: Ln,
                toggleChromecast: lo,
                switchToActiveLive: $,
                switchFromAdsToVideo: Mn,
                switchFromVideoToAds: Rn,
                skipAd: _t,
                setWaitingLive: Bn,
                setWaitingRecord: to,
                getDebugTextData: io,
                getDebugPanelData: no,
                getVideoElement: oo,
                seekTime: (E, ce, Se)=>ni(E, ce, Se),
                clearDelayedBufferingCheckTimeout: Bi,
                seekEpisodeStartTime: Hi,
                seekToPercent: Vi,
                getNextEpisode: st,
                seekToNextEpisode: zt,
                getPrevEpisode: nn,
                seekToPrevEpisode: pn,
                startLogging: Le,
                stopLogging: kt,
                startCameraManualRotation: Dt,
                stopCameraManualRotation: mt,
                moveCameraFocusPX: ot,
                holdCamera: re,
                releaseCamera: xe,
                getVideoEpisodes: tn,
                getPreviewThumbsData: ao,
                downloadVideo: Ai,
                addLanguage: Pl,
                setLanguage: Q,
                nextMovie: Ue,
                videoRotate: q,
                completeInteractiveRange: qn,
                correctSeekTimeToInteractive: gl,
                replayInteractive: A
            },
            external: {
                firstStart: (E)=>ne(E, !0),
                play: ()=>so(!0),
                pause: ()=>Fn(!0),
                seekTime: (E)=>Gi(E),
                seekEpisodeStartTime: (E)=>fi(E),
                setPlaybackRate: (E)=>Wi(E),
                setAutoQualityLimits: (E)=>Fi(E),
                setMuted: (E)=>pi(E, !0),
                setVolume: (E)=>Li(E, E, !0)
            }
        },
        callbacks: a,
        setUiCallbacks: (E)=>{
            ve = {
                ...E
            };
        },
        getAdmanWrapper: ()=>j,
        getLogger: ()=>te,
        destroy: Q1
    };
    return Et;
};
class mh {
    isSupported() {
        return "mediaSession" in navigator;
    }
    setMetaData({ title: e, artist: t = "", thumbUrl: n = "" }) {
        this.isSupported() && (navigator.mediaSession.metadata = new MediaMetadata({
            title: e,
            artist: t,
            artwork: [
                {
                    src: n,
                    sizes: "96x96",
                    type: "image/png"
                },
                {
                    src: n,
                    sizes: "128x128",
                    type: "image/png"
                },
                {
                    src: n,
                    sizes: "192x192",
                    type: "image/png"
                },
                {
                    src: n,
                    sizes: "256x256",
                    type: "image/png"
                },
                {
                    src: n,
                    sizes: "384x384",
                    type: "image/png"
                },
                {
                    src: n,
                    sizes: "512x512",
                    type: "image/png"
                }
            ]
        }));
    }
    updateActionHandlers(e) {
        this.resetActionHandlers(), this.setActionHandlers(e);
    }
    resetActionHandlers() {
        const e = [
            [
                "play",
                null
            ],
            [
                "pause",
                null
            ],
            [
                "stop",
                null
            ],
            [
                "nexttrack",
                null
            ],
            [
                "previoustrack",
                null
            ],
            [
                "seekto",
                (t)=>null
            ],
            [
                "seekbackward",
                (t)=>null
            ],
            [
                "seekforward",
                (t)=>null
            ]
        ];
        this.setActionHandlers(e);
    }
    setActionHandlers(e) {
        if (this.isSupported()) for (const [t, n] of e)try {
            navigator.mediaSession.setActionHandler(t, n);
        } catch  {
            throw new Error(`The media session action "${t}" is not supported yet.`);
        }
    }
}
function hh(i) {
    let e, t, n, o;
    return {
        c () {
            e = I("svg"), t = I("g"), n = I("path"), o = I("path"), u(n, "d", "m30.744 4 .744.005c2.981.046 4.526.385 6.127 1.24a8.766 8.766 0 0 1 3.475 3.347l.174.312.15.292c.772 1.553 1.066 3.18 1.085 6.251v9.045a1.5 1.5 0 0 1-3 .016l-.008-9.651c-.04-2.032-.228-3.12-.627-4.035l-.126-.27-.13-.252A5.77 5.77 0 0 0 36.2 7.891c-1.187-.635-2.339-.873-5.115-.89L22.255 7c-2.737 0-4.003.2-5.071.698l-.133.064-.251.13a5.77 5.77 0 0 0-2.409 2.408c-.635 1.187-.873 2.339-.89 5.114l-.001 20.83c0 2.738.2 4.004.698 5.072l.064.133.13.251a5.769 5.769 0 0 0 2.408 2.409c1.1.588 2.134.825 4.438.88l.323.006 3.695.005H26a1.5 1.5 0 0 1 0 3h-.756l-3.718-.005c-2.989-.047-4.526-.377-6.14-1.24a8.766 8.766 0 0 1-3.476-3.347l-.174-.312-.15-.292c-.731-1.472-1.036-3.016-1.08-5.803l-.006-.756v-20.49l.005-.743c.046-2.981.385-4.526 1.24-6.127a8.765 8.765 0 0 1 3.347-3.475l.312-.174.292-.15c1.472-.731 3.016-1.036 5.803-1.08L22.256 4h8.488Z"), u(o, "d", "M30.5 33.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C32.78 29 33.62 29 35.3 29h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162v13.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C44.22 52 43.38 52 41.7 52h-6.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C30.5 49.72 30.5 48.88 30.5 47.2V33.8Z"), u(t, "fill", "#fff"), u(e, "width", "57"), u(e, "height", "56"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "aria-label", "dummy-image"), u(e, "data-testid", "pip-dummy-icon");
        },
        m (l, s) {
            C(l, e, s), d(e, t), d(t, n), d(t, o);
        },
        p: K,
        i: K,
        o: K,
        d (l) {
            l && y(e);
        }
    };
}
class ph extends ke {
    constructor(e){
        super(), _e(this, e, null, hh, ge, {});
    }
}
function gh(i) {
    Fe(i, "v-1pbsod4", ".player-pip-dummy.v-1pbsod4{width:100%;height:100%;background-color:#19191A;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif}.player-pip-dummy.is-pip-api.v-1pbsod4{position:relative}.dummy-image.v-1pbsod4 svg{transform:scale(1.07143)}.dummy-image.desktop.v-1pbsod4{transform:scale(1.07143) rotate(-90deg) rotateY(180deg)}.title.v-1pbsod4{font-size:16px;color:#fff;padding:18px 20px 10px;text-align:center}");
}
function bh(i) {
    let e, t, n, o, l, s, a;
    return n = new ph({}), {
        c () {
            e = k("div"), t = k("div"), D(n.$$.fragment), o = B(), l = k("span"), s = ze(i[0]), u(t, "class", "dummy-image v-1pbsod4"), L(t, "desktop", !i[1]), u(l, "class", "title v-1pbsod4"), u(e, "class", "player-pip-dummy v-1pbsod4"), L(e, "is-pip-api", i[2]);
        },
        m (r, c) {
            C(r, e, c), d(e, t), z(n, t, null), d(e, o), d(e, l), d(l, s), a = !0;
        },
        p (r, [c]) {
            (!a || c & 2) && L(t, "desktop", !r[1]), (!a || c & 1) && Xe(s, r[0]);
        },
        i (r) {
            a || (m(n.$$.fragment, r), a = !0);
        },
        o (r) {
            p(n.$$.fragment, r), a = !1;
        },
        d (r) {
            r && y(e), O(n);
        }
    };
}
function vh(i, e, t) {
    let n, o;
    const l = vt(), s = !!l.webApi.pictureInPictureApi, a = l.interfaceLanguage$;
    F(i, a, (f)=>t(5, n = f));
    const r = l.ui.isMobile;
    F(i, r, (f)=>t(1, o = f));
    let c;
    return i.$$.update = ()=>{
        i.$$.dirty & 32 && t(0, c = n && U("pip_dummy_title"));
    }, [
        c,
        o,
        s,
        a,
        r,
        n
    ];
}
class _h extends ke {
    constructor(e){
        super(), _e(this, e, vh, bh, ge, {}, gh);
    }
}
const kh = 460, wh = 280;
class K1 {
    playerDomElement;
    playerParentShadowRoot;
    playerDummyElement;
    svelteContext;
    pipWindow;
    info = {
        isActive$: new (0, _esnextEsmJs1.ValueSubject)(!1),
        type: vn.DocumentPictureInPicture
    };
    isSupported() {
        const e = (0, _esnextEsmJs1.getCurrentBrowser)().browser === (0, _esnextEsmJs1.CurrentClientBrowser).Yandex, { isEmbed: t } = (0, _esnextEsmJs1.detectEmbed)();
        return "documentPictureInPicture" in window && !e && !t;
    }
    isActive() {
        return this.isSupported() && !!documentPictureInPicture.window;
    }
    setPlayerDomElement(e, t) {
        this.playerDomElement = e, this.playerParentShadowRoot = t;
    }
    setContext(e) {
        this.svelteContext = e;
    }
    async request() {
        if (!this.isSupported() || !this.playerDomElement || !this.playerParentShadowRoot) return;
        this.pipWindow = await documentPictureInPicture.requestWindow({
            width: kh,
            height: wh,
            copyStyleSheets: !0
        }), this.pipWindow.document.body.style.margin = "0";
        const e = [
            ...this.playerParentShadowRoot.styleSheets
        ].map((l)=>[
                ...l.cssRules
            ].map((s)=>s.cssText).join(" ")).filter(Boolean).join(`
`), t = document.createElement("style");
        t.textContent = e;
        const n = this.createStretchedContainer(), o = n.attachShadow({
            mode: "open"
        });
        o.append(t), o.append(this.playerDomElement), this.playerDummyElement = new _h({
            target: this.playerParentShadowRoot,
            context: this.svelteContext
        }), this.pipWindow?.document.body.append(n), this.info.isActive$.next(!0), this.pipWindow?.addEventListener("unload", (l)=>{
            !this.playerDomElement || !this.playerParentShadowRoot || !this.playerDummyElement || (this.playerDummyElement.$destroy(), this.playerParentShadowRoot.append(this.playerDomElement), this.info.isActive$.next(!1));
        });
    }
    async remove() {
        return new Promise((e)=>{
            documentPictureInPicture.window?.close(), e();
        });
    }
    async dispose() {
        await this.remove();
    }
    createStretchedContainer() {
        const e = document.createElement("div");
        return e.style.width = "100%", e.style.height = "100%", e;
    }
}
function yh(i) {
    return i instanceof K1;
}
class Ch {
    static getLatestSupportedVersion() {
        const e = new rl, t = new K1;
        if (t.isSupported()) return t;
        if (e.isSupported()) return e;
    }
}
function vr(i, e) {
    const t = new Set([
        ...Object.keys(i),
        ...Object.keys(e)
    ]), n = {};
    for (const o of t)n[o] = e[o] ?? i[o] ?? void 0;
    return n;
}
const _r = "Inner error. Unexpectedly root annotation container null reference exception", Ph = "Annotation layer with such name already exists";
class Qo extends Error {
    constructor(e){
        super(e), this.name = "AnnotationError";
    }
}
class Sh {
    rootAnnotationsContainer;
    layers = new Map;
    registryRootContainer(e) {
        this.detach(), this.rootAnnotationsContainer = e;
    }
    addLayer(e) {
        if (!this.rootAnnotationsContainer) throw new Qo(_r);
        if (this.layers.has(e)) throw new Qo(Ph);
        const t = document.createElement("div");
        return t.className = "annotations-layer", t.style.width = "100%", t.style.height = "100%", t.style.position = "absolute", t.style.left = "0", t.style.top = "0", this.rootAnnotationsContainer.append(t), this.layers.set(e, t), t;
    }
    getLayer(e) {
        return this.layers.get(e);
    }
    removeLayer(e) {
        const t = this.layers.get(e);
        t && this.layers.delete(e) && t.remove();
    }
    clearLayer(e) {
        const t = this.layers.get(e);
        for(; t?.lastChild;)t.lastChild.remove();
    }
    detach() {
        for (const e of this.layers.values())e.remove();
    }
    reattach() {
        if (!this.rootAnnotationsContainer) throw new Qo(_r);
        for (const e of this.layers.values())this.rootAnnotationsContainer.append(e);
    }
    destroy() {
        this.detach(), this.layers.clear(), this.rootAnnotationsContainer = void 0;
    }
}
class Y1 {
    stateName;
    state$;
    subscription;
    init(e, t) {
        return (0, _esnextEsmJs1.assertNonNullable)(e), (0, _esnextEsmJs1.assertNonNullable)(t), this.subscription = new (0, _esnextEsmJs1.Subscription), this.subscription;
    }
}
class Th extends Y1 {
    stateName = "fakeIsPlaying$";
    state$ = {
        ...De(null),
        toggle: ()=>this.state$.update((e)=>!e)
    };
    init(e, t) {
        const n = super.init(e, t), { isInteractiveExpectation$: o } = e.state;
        return n.add(o.subscribe((l)=>{
            this.state$.set(l ? !0 : null);
        })), n;
    }
}
class Ah extends Y1 {
    stateName = "interactiveControlsOpacity$";
    state$ = {
        ...De(null),
        toggle: ()=>this.state$.update((e)=>!e)
    };
    init(e, t) {
        const n = super.init(e, t), { fakeIsPlaying$: o } = t, { isInteractiveExpectation$: l, isPlaying$: s } = e.state, { controlsVisible: a, isMobile: r } = e.ui, c = Qe(r), f = ()=>c && Qe(a);
        return n.add(a.subscribe((h)=>{
            if (!c) return;
            const g = Qe(o);
            Qe(s) ? this.state$.set(h) : g !== null && this.state$.set(!g || h);
        })), n.add(s.subscribe((h)=>{
            this.state$.set(!h || f());
        })), n.add(o.subscribe((h)=>{
            if (h === null) return;
            const g = Qe(l);
            if (f()) {
                this.state$.set(!0);
                return;
            }
            g && this.state$.set(!h);
        })), n;
    }
}
const Eh = ()=>[
        Th,
        Ah
    ].reduce(({ subscribers: i, stores: e }, t)=>{
        const n = new t;
        return {
            subscribers: [
                ...i,
                n
            ],
            stores: {
                ...e,
                [n.stateName]: n.state$
            }
        };
    }, {
        subscribers: [],
        stores: {}
    }), Lh = {
    preload: !0,
    autoplay: !1,
    repeat: !1,
    fromTime: 0,
    canRewindLive: !0,
    showAds: !1,
    interfaceLanguage: (0, _esnextEsmJs1.InterfaceLanguage).RU,
    logoClickable: !1,
    logoHidden: !1,
    isMobile: (0, _esnextEsmJs1.isMobile)(),
    isMediaSessionEnabled: !0,
    isPictureInPictureEnabled: !0,
    isAudioDisabled: !1,
    callbacks: {
        uiInfo: {}
    },
    tuningConfig: {
        configName: []
    }
};
class Vh extends HTMLElement {
    svelteStubComponent;
    svelteRootComponent;
    store;
    microStoresRoot;
    statistics;
    sentry;
    _shadowRoot;
    playerContainer;
    uiConfig;
    coreConfig;
    interactiveController;
    interactiveContainer;
    graphMadePause;
    currentPlayingVideoIndex = 0;
    needToRepeatPlaylist = !1;
    videoConfig = void 0;
    pictureInPictureApi = void 0;
    mediaSessionApi = void 0;
    unsubscribePlayerPhaseSubscription = void 0;
    logger;
    log;
    subscription;
    annotationsApi = void 0;
    createPlayerTimeout;
    prevIsid = void 0;
    isInited = !1;
    constructor(){
        super(), this._shadowRoot = this.attachShadow({
            mode: "open"
        }), this.playerContainer = document.createElement("div"), this.playerContainer.style.all = "initial", this.playerContainer.style.display = "block", this.playerContainer.style.contain = "strict", this.playerContainer.style.width = "100%", this.playerContainer.style.height = "100%", this._shadowRoot.append(this.playerContainer), this.logger = new (0, _esnextEsmJs1.Logger), this.log = this.logger.createComponentLog("VKVideoPlayer"), this.subscription = new (0, _esnextEsmJs1.Subscription), this.graphMadePause = !1, window?.videoPlayerConfig?.debugLogs && this.subscription.add(this.logger.log$.subscribe((e)=>{
            console.log("%c player web component ", "background:#77dd77;", `${e.component}`, e.message);
        }));
    }
    connectedCallback() {
        if (this.isInited) return;
        const e = this.getAttribute("stub-title") ?? void 0, t = this.getAttribute("stub-thumb-url") ?? void 0;
        this.svelteStubComponent = new th({
            target: this.playerContainer,
            props: {
                title: e,
                thumbUrl: t
            }
        });
    }
    disconnectedCallback() {
        this.annotationsApi?.destroy(), this.svelteRootComponent?.$destroy(), this.svelteStubComponent?.$destroy(), this.subscription.unsubscribe(), this.unsubscribePlayerPhaseSubscription?.(), this.interactiveController?.destroy();
    }
    needToShowNextPrevButtons() {
        return this.videoConfig ? this.videoConfig.videos.length > 1 : !1;
    }
    isNextButtonActive() {
        return this.videoConfig ? this.needToShowNextPrevButtons() && (this.currentPlayingVideoIndex < this.videoConfig.videos.length - 1 || this.needToRepeatPlaylist) : !1;
    }
    isPrevButtonActive() {
        return this.videoConfig ? this.needToShowNextPrevButtons() && (this.currentPlayingVideoIndex > 0 || this.needToRepeatPlaylist) : !1;
    }
    isControlDisabled(e) {
        return this.store?.ui.controls.disabledControls$?.includes(e) || !1;
    }
    getNextVideoInfo() {
        if (!this.videoConfig) return {
            nextVideoTitle: void 0,
            nextVideoThumb: void 0
        };
        const e = this.videoConfig.videos[this.currentPlayingVideoIndex + 1] || {};
        return {
            nextVideoTitle: e.title,
            nextVideoThumb: e.thumbUrl
        };
    }
    createPlayer(e, t = {}, n) {
        if (!this.videoConfig) return;
        const { albumId: o, statPlace: l, statUserSalt: s, statAuthToken: a, statTrackCode: r, refreshStatAuthToken: c, preload: f, autoplay: h, volume: g, muted: v, fromTime: b, canRewindLive: _, supportLink: V, showAds: A, adsSlotId: S, adsParams: P = {}, adsPreviewParam: N, interfaceLanguage: W, logoClickable: X, logoHidden: Z, isMobile: T, isAudioDisabled: te, isLiveCatchUpMode: j, fullScreenTarget: ie, failoverHosts: G, canDownload: J, callbacks: ue, interactiveData: w, showThumbTimer: oe, additionalButtons: fe = [], repeat: ve } = vr(this.videoConfig, t), { sources: Me, title: Ee, thumbUrl: we, videoLogoUrl: H, unitedVideoId: M, isClip: Y = !1, duration: pe, adsParams: ee = {}, videoEpisodes: R, previewThumbsData: Q, subtitles: Ve, live: ye } = e, Te = {
            ...P,
            ...ee
        }, x = this.getNextVideoInfo(), le = {
            sources: Me,
            title: Ee,
            thumbUrl: we,
            subtitles: Ve,
            unitedVideoId: M,
            isClip: Y,
            live: ye,
            albumId: o,
            statPlace: l,
            autoplay: h,
            muted: v,
            volume: g,
            fromTime: b,
            canRewindLive: _,
            showAds: A,
            adsSlotId: S,
            adsParams: Te,
            adsPreviewParam: N,
            duration: pe,
            logoClickable: X,
            logoHidden: Z,
            isMobile: T,
            repeat: ve,
            showNextPrevButtons: this.needToShowNextPrevButtons(),
            nextButtonActive: this.isNextButtonActive(),
            prevButtonActive: this.isPrevButtonActive(),
            endScreenVideoTitle: x.nextVideoTitle,
            endScreenVideoThumb: x.nextVideoThumb,
            isOneVideoPlaylist: this.isOneVideoPlaylist()
        }, be = {
            pictureInPictureApi: this.pictureInPictureApi,
            annotationsApi: this.annotationsApi
        };
        this.log({
            message: `create player, props: ${JSON.stringify(le)}`
        });
        const ae = this.uiConfig.features.statistics && !!M, { pid: Ue } = this.videoConfig?.interactiveData?.projectInfo || {};
        ae && new fo({
            movieId: M,
            albumId: o,
            place: l,
            trackCode: r,
            autoplay: (h && !this.interactiveController) ?? !1,
            mobile: T,
            clip: Y,
            ...Ue && !this.isInited && {
                projectId: Number(Ue)
            }
        }, {
            refreshAuthToken: c,
            userSalt: s,
            config: this.statistics.config,
            ...this.interactiveController && {
                useIsid: !0,
                isid: this.prevIsid
            }
        }), this.uiConfig.features.sentry && this.uiConfig.sentry.dsn && new el(this.uiConfig.sentry, {
            version: ll,
            env: Du
        }, {
            movieId: M,
            albumId: o,
            place: l,
            autoplay: (h && !this.interactiveController) ?? !1,
            mobile: T,
            clip: Y
        }), this.interactiveController && (this.prevIsid ??= fo.getInstance()?.oneStat.isid$.getValue()), this.statistics = {
            ...this.statistics,
            ...fo.getInstance()
        }, this.sentry = {
            ...this.sentry,
            ...el.getInstance()
        };
        const Je = !!w, tt = this.interactiveController?.getInteractiveRanges(), Be = [];
        let at;
        if (Je && this.interactiveController) {
            const Le = this.interactiveController.state, kt = this.interactiveController.getHistoryState();
            Le.isInitialChapter$.getValue() && Be.push(ct.REPLAY_BUTTON), this.interactiveController.getIsSeekable().getValue() || Be.push(ct.SEEK_TO_INTERACTIVE_BUTTON), kt.hasPrevChapter$.getValue() || (Le.isInitialChapter$.getValue() ? at = "tooltip_interactive_go_back_disabled_first" : Le.lastChapterChangeWasInitiatedByInteractive$.getValue() ? at = "tooltip_interactive_go_back_disabled" : at = "tooltip_interactive_go_back_disabled_limit", Be.push(ct.PLAY_PREV_CHAPTER_BUTTON));
        }
        const St = ()=>{
            this.isInited = !1, this.prevIsid = void 0;
            const Le = n?.info.isEnded$.getValue() && this.interactiveController?.state.isEndChapter$.getValue();
            ue.onReplayInteractiveVideo && !Le ? ue.onReplayInteractiveVideo() : this.replayInteractiveVideo();
        };
        this.store = dh({
            player: n,
            interfaceLanguage: W,
            videoId: M,
            isClip: Y,
            isLiveCatchUpMode: j,
            isAudioDisabled: te,
            statAuthToken: a,
            callbacks: ue,
            webApi: be,
            videoEpisodes: R,
            previewThumbsData: Q,
            canDownload: J,
            uiConfig: this.uiConfig,
            coreConfig: this.coreConfig,
            disabledControls: Be,
            isInteractive: Je,
            interactiveRanges: tt,
            replayInteractive: St,
            playPrevChapterDisabledTooltip: at,
            hasInteractiveBranches: !!this.interactiveController?.getChapterBranches()?.length,
            additionalButtons: this.uiConfig.features.additionalButtons ? fe : [],
            looped: ve && this.videoConfig.videos.length === 1
        });
        const { stores: Re } = this.microStoresRoot = Eh();
        this.subscription.add(this.store.state.currentFormat$.subscribe((Le)=>ue?.onCurrentFormatChanged?.(Le))), this.subscription.add(Re.interactiveControlsOpacity$.subscribe((Le)=>{
            Le !== null && this?.interactiveController?.setDisabledControls(Le);
        })), this.subscription.add(this.store.state.throughputEstimation$.subscribe((Le)=>ue?.onThroughputEstimationChanged?.(Le))), this.subscription.add(this.store.state.videoBitrate$.subscribe((Le)=>ue?.onVideoBitrateChanged?.(Le))), this.subscription.add(this.store.state.isInteractiveTime$.subscribe((Le)=>{
            const kt = this.store?.ui.controls.disabledControls$;
            kt && (Le && !kt.includes(Lo) && kt.add(Lo), Le || kt.remove(Lo));
        })), this.initMediaSession(), this.interactiveController && ae && this.initInteractivesStatistics(), this.svelteRootComponent = new Y3({
            target: this.playerContainer,
            props: {
                interactiveContainer: this.interactiveContainer,
                sources: Me,
                store: this.store,
                microStoresRoot: this.microStoresRoot,
                uiConfig: this.uiConfig,
                title: Ee,
                thumbUrl: we,
                videoLogoUrl: H,
                subtitles: Ve,
                live: ye,
                preload: f,
                autoplay: h,
                muted: v,
                volume: g,
                fromTime: b,
                canRewindLive: _,
                supportLink: V,
                showAds: A,
                adsSlotId: S,
                adsParams: Te,
                adsPreviewParam: N,
                duration: pe,
                logoClickable: X,
                logoHidden: Z,
                isMobile: T,
                failoverHosts: G,
                fullScreenTarget: ie,
                showMiniTimer: oe,
                outerContainerRef: this.playerContainer,
                showNextPrevButtons: this.needToShowNextPrevButtons(),
                nextButtonActive: this.isNextButtonActive(),
                prevButtonActive: this.isPrevButtonActive(),
                endScreenVideoTitle: x.nextVideoTitle,
                endScreenVideoThumb: x.nextVideoThumb,
                isOneVideoPlaylist: this.isOneVideoPlaylist(),
                playNextVideo: ()=>this.playNextVideo(),
                playPrevVideo: ()=>this.playPrevVideo(),
                repeatPlaylist: ()=>this.repeatPlaylist(),
                playPrevChapter: ()=>this.playPrevChapter(),
                seekToInteractive: ()=>this.seekToInteractive(),
                toggleGraph: ()=>this.toggleGraph()
            }
        }), this.addPlayerInfoSubscriptions(), this.isInited || (this.isInited = !0, this.videoConfig?.callbacks?.onInited?.());
    }
    addPlayerInfoSubscriptions() {
        if (this.isInited) return;
        const e = this.store, t = this.videoConfig?.callbacks;
        t && this.subscription.add(e.playerPhase.subscribe((o)=>t.onPlayerPhaseChanged?.(o))).add(e.state.playbackState$.subscribe((o)=>t.onPlaybackStateChanged?.(o))).add(e.state.isLive$.subscribe((o)=>t.onIsLiveChanged?.(o))).add(e.state.isActiveLive$.subscribe((o)=>t.onIsActiveLiveChanged?.(o))).add(e.state.isAudioAvailable$.subscribe((o)=>t.onIsAudioAvailableChanged?.(o))).add(e.state.currentQuality$.subscribe((o)=>t.onCurrentQualityChanged?.(o))).add(e.state.availableQualities$.subscribe((o)=>t.onAvailableQualitiesChanged?.(o.map(({ value: l })=>l).filter((l)=>l !== Xn.AUTO)))).add(e.ui.isPictureInPictureActive$.subscribe((o)=>o ? t.onPiPEnter?.() : t.onPiPExit?.()));
        const n = t?.uiInfo;
        n && this.subscription.add(e.ui.controlsVisible.subscribe((o)=>n.onControlsVisibleChanged?.(o))).add(e.ui.isMobile.subscribe((o)=>n.onIsMobileChanged?.(o))).add(e.ui.playerSize.subscribe((o)=>n.onPlayerSizeChanged?.(o))).add(e.ui.controls.prevButton.subscribe((o)=>n.onPrevButtonChanged?.(o))).add(e.ui.controls.playButton.subscribe((o)=>n.onPlayButtonChanged?.(o))).add(e.ui.controls.replayButton.subscribe((o)=>n.onReplayButtonChanged?.(o))).add(e.ui.controls.nextButton.subscribe((o)=>n.onNextButtonChanged?.(o))).add(e.ui.controls.playPrevChapterButton.subscribe((o)=>n.onPlayPrevChapterChanged?.(o))).add(e.ui.controls.seekToInteractiveButton.subscribe((o)=>n.onSeekToInteractiveButtonChanged?.(o))).add(e.ui.controls.interactiveGraphButton.subscribe((o)=>n.onGraphButtonChanged?.(o))).add(e.ui.controls.liveButton.subscribe((o)=>n.onLiveButtonChanged?.(o))).add(e.ui.controls.time.subscribe((o)=>n.onTimeUpdateChanged?.(o))).add(e.ui.controls.episodes.subscribe((o)=>n.onEpisodesChanged?.(o))).add(e.ui.controls.volume.subscribe((o)=>n.onVolumeChanged?.(o))).add(e.ui.controls.subtitles.subscribe((o)=>n.onSubtitlesChanged?.(o))).add(e.ui.controls.settings.subscribe((o)=>n.onSettingsChanged?.(o))).add(e.ui.controls.fullscreen.subscribe((o)=>n.onFullscreenChanged?.(o))).add(e.ui.controls.chromecast.subscribe((o)=>n.onChromecastChanged?.(o))).add(e.ui.controls.vkLogo.subscribe((o)=>n.onVkLogoChanged?.(o)));
    }
    playNextVideo() {
        if (!this.videoConfig) return;
        let e = !0;
        if (this.videoConfig.callbacks?.onNextVideoClick) try {
            e = this.videoConfig.callbacks.onNextVideoClick();
        } catch  {
            this.log({
                message: "onNextVideoClick callback failed to execute"
            });
        }
        e && (this.currentPlayingVideoIndex++, this.currentPlayingVideoIndex >= this.videoConfig.videos.length && (this.currentPlayingVideoIndex = 0), this.log({
            message: `play next video, index: ${this.currentPlayingVideoIndex}`
        }), this.createPlayerWithCurrentVideo());
    }
    playPrevVideo() {
        if (!this.videoConfig) return;
        let e = !0;
        if (this.videoConfig.callbacks?.onPrevVideoClick) try {
            e = this.videoConfig.callbacks.onPrevVideoClick();
        } catch  {
            this.log({
                message: "onPrevVideoClick callback failed to execute"
            });
        }
        e && (this.currentPlayingVideoIndex--, this.currentPlayingVideoIndex < 0 && (this.currentPlayingVideoIndex = this.videoConfig.videos.length - 1), this.log({
            message: `play prev video, index: ${this.currentPlayingVideoIndex}`
        }), this.createPlayerWithCurrentVideo());
    }
    repeatPlaylist() {
        this.currentPlayingVideoIndex = 0, this.log({
            message: "repeat playlist"
        }), this.createPlayerWithCurrentVideo();
    }
    createPlayerWithCurrentVideo(e, t = !0) {
        if (!this.videoConfig) return;
        const n = this.videoConfig.videos[this.currentPlayingVideoIndex];
        if (!n) {
            this.log({
                message: "no next video"
            });
            return;
        }
        this.isInited && (0, _esnextEsmJs1.isNonNullable)(n.unitedVideoId) && this.store.actions.internal.nextMovie(n.unitedVideoId), this.svelteRootComponent?.$destroy(), this.createPlayer(n, {
            autoplay: t,
            fromTime: 0
        }, e);
    }
    playPrevChapter() {
        this.interactiveController?.playPrevChapter();
    }
    seekToInteractive() {
        const e = this.interactiveController?.getNextInteractiveStartTime();
        typeof e == "number" && this.seekTime(e / 1e3);
    }
    toggleGraph() {
        if (!this.isInited) return;
        const e = this.store, { isEnded$: t, playbackState$: n, graphIsOpened$: o } = e.state, { disabledControls$: l } = e.ui.controls, s = Qe(t), a = Qe(n);
        Qe(o) ? (o.set(!1), this.interactiveController?.toggleGraphView(!1), l.remove(yl), !s && this.graphMadePause && this.play()) : (this.graphMadePause = a === "playing", o.set(!0), this.interactiveController?.toggleGraphView(!0), l.add(yl), !s && this.graphMadePause && this.pause());
    }
    async initInteractives() {
        if (this.videoConfig?.interactiveData) try {
            const { Interactives: e, EVENT_NAMES: t, CustomError: n } = await require("1415cdfbcd39154e");
            this.interactiveContainer = document.createElement("div"), this.interactiveContainer.classList.add("interactiveContainer");
            const o = this.store?.interfaceLanguage$, l = o ? Qe(o) : this.videoConfig.interfaceLanguage, { projectInfo: s, historyApi: a, videoLoader: r } = this.videoConfig.interactiveData;
            this.interactiveController = new e({
                parentElement: this.interactiveContainer,
                fullscreenTargetElement: this.playerContainer,
                lang: l,
                graph: this.uiConfig.features.interactiveGraph,
                projectInfo: s,
                historyApi: a,
                vkVideoLoader: r,
                lastFrame: this.uiConfig.features.interactiveLastFrame,
                permanentTextControls: this.uiConfig.features.interactiveTextPermanent,
                initSeamless: !0
            }), await this.interactiveController.setManifest(this.videoConfig.interactiveData.manifest);
            const { isInteractiveExpectation$: c } = this.interactiveController.state;
            this.uiConfig.features.seekToInteractive && this.subscription.add(this.interactiveController.getIsSeekable().subscribe((h)=>{
                if (!this.isInited) return;
                const g = this.store;
                h ? g.ui.controls.disabledControls$.remove(ct.SEEK_TO_INTERACTIVE_BUTTON) : g.ui.controls.disabledControls$.add(ct.SEEK_TO_INTERACTIVE_BUTTON);
            })), this.subscription.add(c.subscribe((h)=>{
                this.store && this.store.state.isInteractiveExpectation$.set(h);
            }));
            let f = !0;
            if (this.interactiveController.on(t.playerChanged, (h)=>{
                if (!this.videoConfig) return;
                this.videoConfig.videos[this.currentPlayingVideoIndex] = {
                    ...h.config,
                    title: s?.title || h.config.title
                };
                const g = f ? this.videoConfig.autoplay : !0;
                this.createPlayerWithCurrentVideo(h.player, g), f && (f = !1);
            }), this.interactiveController.on(t.interactives, ({ type: h, subjectId: g, actionType: v })=>{
                if (!this.store) return;
                const b = c.getValue();
                if (h === "container-removed" && this.store.actions.internal.completeInteractiveRange(g), h === "action-choice" && v === "setRandomBranch" && (this.store.state.graphIsOpened$.set(!1), this.store.ui.controls.disabledControls$.remove(Mr)), h === "action-choice-canceled") {
                    const _ = Qe(this.store.state.isPlaying$) || b;
                    if (this.videoConfig?.isMobile && _) {
                        this.store.ui.interactiveHideMobileControls.set(!0);
                        return;
                    }
                    this.videoConfig?.callbacks.onDisabledInteractiveClick?.();
                }
            }), this.videoConfig?.callbacks?.onInteractiveHistoryChanged) {
                const h = this.interactiveController.getHistoryState();
                this.subscription.add(h.history$.subscribe((g)=>{
                    g.length && this.videoConfig?.callbacks?.onInteractiveHistoryChanged?.(g);
                }));
            }
            this.interactiveController.on(t.errors, (h)=>{
                this.log({
                    message: h.toString()
                });
            });
        } catch (e) {
            this.log({
                message: e.message
            });
        }
    }
    async initInteractivesStatistics() {
        const { statSubscription: e, oneStat: t } = this.statistics;
        if (!(!e || !t || !this.interactiveController)) try {
            const { INTERACTIVE_CLICK_ACTIONS: n } = await require("1415cdfbcd39154e"), o = {
                [n.GO_NEXT_BUTTON]: (0, _esnextEsmJs2.InteractiveInterfaceClick).NEXT_BUTTON,
                [n.GO_NEXT_AREA]: (0, _esnextEsmJs2.InteractiveInterfaceClick).NEXT_AREA,
                [n.WATCH_AGAIN]: (0, _esnextEsmJs2.InteractiveInterfaceClick).WATCH_AGAIN,
                [n.OPEN_GRAPH]: (0, _esnextEsmJs2.InteractiveInterfaceClick).GRAPH_SHOW,
                [n.CLOSE_GRAPH]: (0, _esnextEsmJs2.InteractiveInterfaceClick).GRAPH_HIDE
            }, { click$: l, nextMovie$: s } = this.interactiveController.getStatEvents(), a = new (0, _esnextEsmJs1.Subject);
            l.subscribe((r)=>{
                r in o ? a.next(o[r]) : (t?.logError({
                    errorType: "InteractiveVideosAction",
                    fatal: !1
                }), this.sentry.report?.(new Error("InteractiveVideosAction"), {
                    errorType: "InteractiveVideosAction",
                    fatal: !1
                }));
            }), e.add(t.attachToInteractive({
                click$: a,
                nextMovie$: s
            }));
        } catch (n) {
            t?.logError({
                errorType: "InteractiveVideos",
                fatal: !1
            }), this.sentry.report?.(n, {
                errorType: "InteractiveVideosAction",
                fatal: !1
            });
        }
    }
    initPlayer(e, t = {}) {
        if (!Array.isArray(e.videos) || e.videos.length === 0 && !e.interactiveData) throw new Error("empty videos");
        this.videoConfig = vr(Lh, (0, _esnextEsmJs1.cloneDeepWith)(e, (n)=>n instanceof HTMLElement ? n : void 0)), this.uiConfig = Iu(t.ui ?? {}), this.coreConfig = t.core ?? {
            configName: []
        }, this.statistics = {
            config: t.statistics ?? {}
        }, this.sentry = {
            config: this.uiConfig.sentry ?? {}
        }, (0, _esnextEsmJs1.isNonNullable)(this.videoConfig.isMediaSessionEnabled) && (this.uiConfig.features.mediaSession = this.videoConfig.isMediaSessionEnabled ?? !0), (0, _esnextEsmJs1.isNonNullable)(this.videoConfig.isPictureInPictureEnabled) && (this.uiConfig.features.pip = this.uiConfig.features.pip ?? this.videoConfig.isPictureInPictureEnabled ?? !0, this.uiConfig.features.dpip = this.uiConfig.features.dpip ?? this.videoConfig.isPictureInPictureEnabled ?? !0), this.videoConfig.isMobile = this.uiConfig.isMobile ?? this.videoConfig.isMobile, this.videoConfig.autoplay &&= this.uiConfig.features.autoplay, this.videoConfig.showAds = this.uiConfig.ads.enable ?? this.videoConfig.showAds, this.videoConfig.adsSlotId = this.uiConfig.ads.slot ?? this.videoConfig.adsSlotId, this.videoConfig.adsPreviewParam = this.uiConfig.ads.preview ?? this.videoConfig.adsPreviewParam, this.videoConfig.logoHidden = !(this.uiConfig.showLogo ?? !this.videoConfig.logoHidden), this.videoConfig.canRewindLive &&= this.uiConfig.features.liveRewind, this.videoConfig.supportLink = this.videoConfig.supportLink ?? this.uiConfig.supportLink, this.currentPlayingVideoIndex = 0, this.needToRepeatPlaylist = this.videoConfig.repeat, this.uiConfig.features.pip && (this.uiConfig.features.dpip ? this.pictureInPictureApi = Ch.getLatestSupportedVersion() : this.pictureInPictureApi = new rl), this.mediaSessionApi = this.uiConfig.features.mediaSession ? new mh : void 0, this.annotationsApi = this.uiConfig.features.annotations ? new Sh : void 0, this.svelteStubComponent?.$destroy(), this.svelteRootComponent?.$destroy(), this.isInited = !1, this.prevIsid = void 0, this.interactiveController && (this.interactiveController.destroy(), this.interactiveController = void 0), e.interactiveData ? this.initInteractives() : this.createPlayer(e.videos[0]), yh(this.pictureInPictureApi) && this.pictureInPictureApi.setPlayerDomElement(this.playerContainer, this._shadowRoot);
    }
    isOneVideoPlaylist() {
        return this.videoConfig ? this.videoConfig.videos.length === 1 : !1;
    }
    updateNextVideos(e) {
        if (!this.videoConfig) return;
        this.log({
            message: `update next videos, videos: ${JSON.stringify(e)}`
        }), this.videoConfig.videos.splice(this.currentPlayingVideoIndex + 1), this.videoConfig.videos.push(...e);
        const t = this.getNextVideoInfo();
        this.svelteRootComponent?.$set({
            showNextPrevButtons: this.needToShowNextPrevButtons(),
            nextButtonActive: this.isNextButtonActive(),
            prevButtonActive: this.isPrevButtonActive(),
            endScreenVideoTitle: t.nextVideoTitle,
            endScreenVideoThumb: t.nextVideoThumb,
            isOneVideoPlaylist: this.isOneVideoPlaylist()
        });
    }
    initMediaSession() {
        this.mediaSessionApi && (this.unsubscribePlayerPhaseSubscription?.(), this.unsubscribePlayerPhaseSubscription = this.store?.playerPhase.subscribe((e)=>{
            e === Ne.Video ? this.setupMediaSessionForVideo() : e === Ne.Ads && this.setupMediaSessionForAds();
        }));
    }
    setupMediaSessionForVideo() {
        if (!(!this.videoConfig || !this.mediaSessionApi)) try {
            const { title: e, thumbUrl: t } = {
                ...this.videoConfig.videos[this.currentPlayingVideoIndex]
            }, n = [
                [
                    "play",
                    ()=>this.play()
                ],
                [
                    "pause",
                    ()=>this.pause()
                ],
                [
                    "seekto",
                    (o)=>this.seekTime(o.seekTime)
                ]
            ];
            this.videoConfig.videos.length > 1 && (this.currentPlayingVideoIndex < this.videoConfig.videos.length - 1 && n.push([
                "nexttrack",
                ()=>this.playNextVideo()
            ]), this.currentPlayingVideoIndex > 0 && n.push([
                "previoustrack",
                ()=>this.playPrevVideo()
            ])), this.mediaSessionApi.setMetaData({
                title: e,
                thumbUrl: t
            }), this.mediaSessionApi.updateActionHandlers(n);
        } catch (e) {
            this.log({
                message: e.message
            });
        }
    }
    setupMediaSessionForAds() {
        if (!(!this.videoConfig || !this.mediaSessionApi)) try {
            const e = "\u0420\u0435\u043A\u043B\u0430\u043C\u0430", t = [
                [
                    "play",
                    ()=>this.play()
                ],
                [
                    "pause",
                    ()=>this.pause()
                ]
            ];
            this.mediaSessionApi.setMetaData({
                title: e
            }), this.mediaSessionApi.updateActionHandlers(t);
        } catch (e) {
            this.log({
                message: e.message
            });
        }
    }
    play() {
        this.isControlDisabled(ct.PLAY_BUTTON) || this.store?.playerPhase.is(Ne.WaitingLive) || (this.log({
            message: "play"
        }), this.svelteRootComponent?.play());
    }
    pause() {
        this.log({
            message: "pause"
        }), this.svelteRootComponent?.pause();
    }
    stop() {
        if (!this.videoConfig) return;
        this.log({
            message: "stop"
        }), this.svelteStubComponent?.$destroy();
        const e = this.videoConfig.videos[0];
        e && (this.svelteRootComponent?.$destroy(), this.createPlayer(e));
    }
    setMuted(e) {
        this.log({
            message: `set muted, muted: ${e}`
        }), this.svelteRootComponent?.setMuted(e);
    }
    setVolume(e) {
        this.log({
            message: `set volume, volume: ${e}`
        }), this.svelteRootComponent?.setVolume(e);
    }
    setRepeat(e) {
        this.log({
            message: `set repeat, repeat: ${e}`
        }), this.needToRepeatPlaylist = e, this.svelteRootComponent?.$set({
            needToRepeatPlaylist: this.needToRepeatPlaylist,
            showNextPrevButtons: this.needToShowNextPrevButtons(),
            nextButtonActive: this.isNextButtonActive(),
            prevButtonActive: this.isPrevButtonActive()
        });
    }
    seekTime(e) {
        this.isControlDisabled(ct.TIMELINE) || (this.log({
            message: `seek time, time: ${e}`
        }), this.svelteRootComponent?.seekTime(e));
    }
    seekEpisodeStartTime(e) {
        this.log({
            message: `seek episode start time, time: ${e}`
        }), this.svelteRootComponent?.seekEpisodeStartTime(e);
    }
    setPlaybackRate(e) {
        this.log({
            message: `set playback rate to: ${e}`
        }), this.svelteRootComponent?.setPlaybackRate(e);
    }
    setAutoQualityLimits(e) {
        this.log({
            message: `set auto quality limitation. Max: ${e.max ?? "none"}. Min: ${e.min ?? "none"}`
        }), this.svelteRootComponent?.setAutoQualityLimits(e);
    }
    addLanguage(e) {
        this.store?.actions.internal.addLanguage(e);
    }
    async setLanguage(e) {
        await this.store?.actions.internal.setLanguage(e);
    }
    setLiveStart(e) {
        this.log({
            message: "live started"
        }), this.store?.actions.internal.setWaitingLive(!1), this.svelteRootComponent?.initVideo(e), this.play();
    }
    setWaitRecord() {
        this.log({
            message: "post live"
        }), this.store?.actions.internal.setWaitingRecord(!0), this.store?.destroy();
    }
    setLiveEnd(e) {
        this.log({
            message: "live ended"
        }), this.store?.actions.internal.setWaitingRecord(!1), this.svelteRootComponent?.$destroy(), this.createPlayer(e, {
            autoplay: !1
        });
    }
    getDeviceId() {
        return fo.getInstance()?.oneStat.getDeviceId() ?? void 0;
    }
    replayInteractiveVideo() {
        this.interactiveController && this.interactiveController.setChapter();
    }
}
const zh = ()=>{
    window.customElements.define("vk-video-player", Vh);
};

},{"@vkontakte/videoplayer-core/esnext.esm.js":"24ag6","@vkontakte/videoplayer-shared/esnext.esm.js":"2RPwF","@vkontakte/videoplayer-statistics/esnext.esm.js":"fpSgi","1415cdfbcd39154e":"dbKwj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fpSgi":[function(require,module,exports) {
/**
 * @vkontakte/videoplayer-statistics v1.0.47
 * Fri, 26 Apr 2024 14:16:39 GMT
 * https://st.mycdn.me/static/vkontakte-videoplayer/1-0-47/doc/
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApiEnv", ()=>E);
parcelHelpers.export(exports, "ConnectionType", ()=>O);
parcelHelpers.export(exports, "ContentType", ()=>g);
parcelHelpers.export(exports, "InteractiveInterfaceClick", ()=>tt);
parcelHelpers.export(exports, "OneStat", ()=>Qt);
parcelHelpers.export(exports, "Quality", ()=>m);
parcelHelpers.export(exports, "SeekAction", ()=>U);
parcelHelpers.export(exports, "VERSION", ()=>et);
var _esnextEsmJs = require("@vkontakte/videoplayer-shared/esnext.esm.js");
var _esnextEsmJs1 = require("@vkontakte/videoplayer-core/esnext.esm.js");
var E;
(function(e) {
    e.PROD = "prod", e.VK_ALIAS = "vk_alias", e.VIDEOTEST = "videotest", e.TEST = "test", e.AUTO = "auto";
})(E || (E = {}));
var m;
(function(e) {
    e.Q144P = "mobile", e.Q240P = "lowest", e.Q360P = "low", e.Q480P = "medium", e.Q720P = "high", e.Q1080P = "fullhd", e.Q1440P = "quadhd", e.Q2160P = "ultrahd", e.UNKNOWN = "unknown";
})(m || (m = {}));
var g;
(function(e) {
    e.MP4 = "mp4", e.DASH = "dash", e.DASH_SEP = "dash_sep", e.ONDEMAND_DASH = "ondemand_dash", e.HLS = "hls", e.ONDEMAND_HLS = "ondemand_hls", e.WEBM = "webm", e.AV1 = "av1", e.ONDEMAND_DASH_LIVE = "ondemand_dash_live", e.ONDEMAND_HLS_LIVE = "ondemand_hls_live", e.WEBRTC = "webrtc", e.UNKNOWN = "unknown", e.RTMP = "rtmp";
})(g || (g = {}));
var B;
(function(e) {
    e.AUTO = "auto", e.MANUAL = "";
})(B || (B = {}));
var O;
(function(e) {
    e.HTTP1 = "http1", e.HTTP2 = "http2", e.HTTP3 = "http3";
})(O || (O = {}));
var A;
(function(e) {
    e[e.YES = 1] = "YES", e[e.NO = 0] = "NO";
})(A || (A = {}));
var $;
(function(e) {
    e.EXCELLENT = "excellent", e.GOOD = "good", e.POOR = "poor";
})($ || ($ = {}));
var T;
(function(e) {
    e.PIP = "pip", e.FULLSCREEN = "fullscreen", e.EXTERNAL = "external", e.PREFETCH = "prefetch", e.AIRPLAY = "airplay", e.CHROMECAST = "chromecast", e.INVISIBLE = "invisible";
})(T || (T = {}));
var U;
(function(e) {
    e.SLIDER = "slider", e.DOUBLE_TAP = "double_tap", e.TIME_CODE = "time_code", e.EPISODE = "episode", e.REWIND = "rewind", e.LIVE = "live", e.UNKNOWN = "unknown";
})(U || (U = {}));
var tt;
(function(e) {
    e.GRAPH_SHOW = "iGraphShow", e.GRAPH_HIDE = "iGraphHide", e.NEXT_AREA = "iNextChapterArea", e.NEXT_BUTTON = "iNextChapterBtn", e.WATCH_AGAIN = "iWatchAgainBtn";
})(tt || (tt = {}));
const vt = {
    action_play: "ap",
    action_play_interactive: "api",
    first_bytes: "fb",
    player_ready: "pr",
    first_frame: "ff",
    seek: "sk",
    watch_coverage_record: "wr",
    watch_coverage_live: "wl",
    empty_buffer: "eb",
    action_stop: "as",
    close_at_empty_buffer: "cb",
    content_error: "er",
    player_interface_click: "pc",
    next_movie: "nm",
    track_switch: "ts",
    failover: "fo"
}, yt = {
    vsid: "si",
    isid: "is",
    vid: "vi",
    place: "pl",
    quality: "qt",
    cdn_host: "ch",
    stat_type: "st",
    param: "pm",
    vk_app_id: "va",
    track_code: "tc",
    connection_type: "cnt",
    connection_reused: "cr",
    cached_data: "cd",
    live: "lv",
    muted: "mu",
    mode: "mo",
    subtitles: "sb",
    failover: "fo",
    download_speed: "ds",
    manual_quality: "mq",
    ref_domain: "rd",
    direct_url: "du"
}, Pt = {
    unknown: "un",
    mobile: "m",
    lowest: "ls",
    low: "l",
    medium: "md",
    high: "h",
    fullhd: "f",
    quadhd: "q",
    ultrahd: "u"
}, Tt = {
    pip: "pi",
    fullscreen: "fs",
    external: "ex",
    prefetch: "pr",
    airplay: "ap",
    chromecast: "cc",
    invisible: "iv"
}, xt = {
    apiEnv: E.VK_ALIAS,
    requestRetryCount: 1,
    firstFlushTime: 5e3,
    flushDebounceTime: 1e4,
    flushMaxWait: 6e4,
    storageExpiration: 129600000,
    watchCoverageInterval: 15e3,
    disabledOperations: [],
    disabledCustomFields: [],
    shorten: !0,
    maxLoops: 100,
    embedUrlParams: [],
    useBeacon: !0,
    synchronizeTime: !0,
    debugLog: !1,
    backoff: {
        start: 1e3,
        factor: 1.5,
        max: 300000,
        random: .1
    }
}, $t = (e)=>(0, _esnextEsmJs.fillWithDefault)(e, xt);
function Lt() {
    const e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), t = new Array(36);
    let i = 0, s, o;
    for(o = 0; o < 36; o++)o === 8 || o === 13 || o === 18 || o === 23 ? t[o] = "-" : o === 14 ? t[o] = "4" : (i <= 2 && (i = 33554432 + Math.random() * 16777216 | 0), s = i & 15, i = i >> 4, t[o] = e[o === 19 ? s & 3 | 8 : s]);
    return t.join("");
}
const Nt = (e)=>{
    const { operation: t, custom: i } = e, s = Object.fromEntries(Object.entries(i).map(([o, n])=>{
        const a = yt[o] ?? o;
        let u = n;
        return n && (o === "mode" ? u = Tt[n] ?? n : o === "quality" && (u = Pt[n] ?? n)), [
            a,
            u
        ];
    }));
    return {
        ...e,
        operation: vt[t] ?? t,
        custom: s
    };
}, et = "1.0.47", Ct = "CIOPGQJGDIHBABABA", st = {
    [E.PROD]: "https://api.ok.ru",
    [E.VK_ALIAS]: "https://api.mycdn.me",
    [E.VIDEOTEST]: "https://videotestapi.ok.ru/api",
    [E.TEST]: "https://apitest.ok.ru",
    [E.AUTO]: ""
};
var P;
(function(e) {
    e[e.PARAM_SESSION_EXPIRED = 102] = "PARAM_SESSION_EXPIRED", e[e.PARAM_SESSION_KEY = 103] = "PARAM_SESSION_KEY", e[e.PARAM_SIGNATURE = 104] = "PARAM_SIGNATURE", e[e.AUTH_LOGIN = 401] = "AUTH_LOGIN";
})(P || (P = {}));
class Ot {
    params;
    authToken;
    sessionKey;
    authorizePromise;
    refreshAuthTokenPromise;
    consequentAuthErrors = 0;
    authorized$ = new (0, _esnextEsmJs.ValueSubject)(!1);
    backoffTimeoutId;
    constructor(t){
        this.params = t;
    }
    async authorize(t) {
        return this.authToken = t ?? await this.refreshAuthToken(), this._authorizeWithBackoff();
    }
    logBeacon(t) {
        const i = "log.externalLog", s = this.createLogParams(t), o = this.sessionKey;
        if (!o) return;
        this.params.apiTransport.sendBeacon(i, s, o) || this.logRequest(t);
    }
    async logRequest(t) {
        const i = "log.externalLog", s = this.createLogParams(t), o = this.sessionKey ?? await this._authorizeWithBackoff();
        if (!o) return;
        const n = async (a, u = this.params.config.requestRetryCount)=>{
            try {
                return await this.params.apiTransport.sendRequest(i, s, o);
            } catch (h) {
                if (!h || !("error_code" in h)) {
                    this.params.error$.next({
                        id: "logRequestUnknown",
                        category: (0, _esnextEsmJs.ErrorCategory).NETWORK,
                        message: `Unknown ${i} error`,
                        thrown: h
                    });
                    return;
                }
                const l = h?.error_code;
                switch(l){
                    case P.PARAM_SESSION_EXPIRED:
                    case P.PARAM_SESSION_KEY:
                    case P.PARAM_SIGNATURE:
                        return this.authorized$.next(!1), this.sessionKey = await this._authorizeWithBackoff(), u > 0 ? n(a, u - 1) : void 0;
                    case P.AUTH_LOGIN:
                        return this.authorized$.next(!1), this.authToken = await this.refreshAuthToken(), this.sessionKey = await this._authorizeWithBackoff(), u > 0 ? n(a, u - 1) : void 0;
                    default:
                        this.params.error$.next({
                            id: `LogRequest#${l}`,
                            category: (0, _esnextEsmJs.ErrorCategory).EXTERNAL_API,
                            message: `${i} error`,
                            data: h
                        });
                        return;
                }
            }
        };
        return n(t);
    }
    destroy() {
        window.clearTimeout(this.backoffTimeoutId), this.backoffTimeoutId = 0;
    }
    async refreshAuthToken() {
        if (this.params.refreshAuthToken) return this.refreshAuthTokenPromise || (this.refreshAuthTokenPromise = this.params.refreshAuthToken().finally(()=>{
            this.refreshAuthTokenPromise = void 0;
        })), this.refreshAuthTokenPromise;
    }
    createLogParams(t) {
        return {
            collector: "ok.mobile.apps.video",
            data: JSON.stringify({
                application: `@vkontakte/videoplayer-statistics:${et}`,
                platform: this.params.mobile ? "M_WEB" : "WEB",
                items: this.params.config.shorten ? t.map(Nt) : t
            })
        };
    }
    _authorizeWithBackoff() {
        if (!this.consequentAuthErrors) return this._authorize();
        const t = (0, _esnextEsmJs.getExponentialDelay)(this.consequentAuthErrors, this.params.config.backoff);
        return new Promise((i)=>{
            this.backoffTimeoutId || (this.backoffTimeoutId = window.setTimeout(()=>{
                this._authorize().then(i).catch((s)=>this.params.error$.next({
                        id: "AuthorizeBackoff",
                        category: (0, _esnextEsmJs.ErrorCategory).NETWORK,
                        message: "Otherwise unhandled error in authorization",
                        thrown: s
                    })).finally(()=>this.backoffTimeoutId = 0);
            }, t));
        });
    }
    async _authorize() {
        if (this.authorizePromise) return this.authorizePromise;
        this.sessionKey = void 0, this.authorized$.next(!1);
        const t = "auth.anonymLogin", i = {
            session_data: {
                version: 2,
                device_id: this.params.uuid,
                client_version: et.split("-")[0],
                client_type: "SDK_JS"
            }
        };
        return this.authToken !== void 0 && (i.session_data.auth_token = this.authToken, i.session_data.version = 3), this.authorizePromise = this.params.apiTransport.sendRequest(t, i).then((s)=>((!s || !s.session_key) && this.params.error$.next({
                id: "AuthorizeFailed",
                category: (0, _esnextEsmJs.ErrorCategory).EXTERNAL_API,
                message: "No session key",
                data: s
            }), this.sessionKey = s?.session_key ?? void 0, this.sessionKey)).catch(async (s)=>{
            this.sessionKey = void 0;
            const o = s?.error_code;
            switch(o){
                case P.AUTH_LOGIN:
                    return this.authToken = await this.refreshAuthToken(), this._authorizeWithBackoff();
            }
            o ? this.params.error$.next({
                id: `Authorize#${o}`,
                category: (0, _esnextEsmJs.ErrorCategory).EXTERNAL_API,
                message: "authorize error",
                data: s
            }) : this.params.error$.next({
                id: "AuthorizeUnknown",
                category: (0, _esnextEsmJs.ErrorCategory).NETWORK,
                message: "authorize error",
                thrown: s
            });
        }).finally(()=>{
            this.authorizePromise = void 0, this.consequentAuthErrors = this.sessionKey ? 0 : this.consequentAuthErrors + 1, this.authorized$.next(this.sessionKey !== void 0);
        }), this.authorizePromise;
    }
}
class it {
    constructor(){
        Object.defineProperty(this, "listeners", {
            value: {},
            writable: !0,
            configurable: !0
        });
    }
    addEventListener(t, i, s) {
        t in this.listeners || (this.listeners[t] = []), this.listeners[t].push({
            callback: i,
            options: s
        });
    }
    removeEventListener(t, i) {
        if (!(t in this.listeners)) return;
        const s = this.listeners[t];
        for(let o = 0, n = s.length; o < n; o++)if (s[o].callback === i) {
            s.splice(o, 1);
            return;
        }
    }
    dispatchEvent(t) {
        if (!(t.type in this.listeners)) return;
        const s = this.listeners[t.type].slice();
        for(let o = 0, n = s.length; o < n; o++){
            const a = s[o];
            try {
                a.callback.call(this, t);
            } catch (u) {
                Promise.resolve().then(()=>{
                    throw u;
                });
            }
            a.options && a.options.once && this.removeEventListener(t.type, a.callback);
        }
        return !t.defaultPrevented;
    }
}
class at extends it {
    constructor(){
        super(), this.listeners || it.call(this), Object.defineProperty(this, "aborted", {
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
class Rt {
    constructor(){
        Object.defineProperty(this, "signal", {
            value: new at,
            writable: !0,
            configurable: !0
        });
    }
    abort(t) {
        let i;
        try {
            i = new Event("abort");
        } catch  {
            typeof document < "u" ? document.createEvent ? (i = document.createEvent("Event"), i.initEvent("abort", !1, !1)) : (i = document.createEventObject(), i.type = "abort") : i = {
                type: "abort",
                bubbles: !1,
                cancelable: !1
            };
        }
        let s = t;
        if (s === void 0) {
            if (typeof document > "u") s = new Error("This operation was aborted"), s.name = "AbortError";
            else try {
                s = new DOMException("signal is aborted without reason");
            } catch  {
                s = new Error("This operation was aborted"), s.name = "AbortError";
            }
        }
        this.signal.reason = s, this.signal.dispatchEvent(i);
    }
    toString() {
        return "[object AbortController]";
    }
}
typeof Symbol < "u" && Symbol.toStringTag && (Rt.prototype[Symbol.toStringTag] = "AbortController", at.prototype[Symbol.toStringTag] = "AbortSignal");
function ct(e) {
    return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"), !0) : typeof e.Request == "function" && !e.Request.prototype.hasOwnProperty("signal") || !e.AbortController;
}
function kt(e) {
    typeof e == "function" && (e = {
        fetch: e
    });
    const { fetch: t, Request: i = t.Request, AbortController: s, __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: o = !1 } = e;
    if (!ct({
        fetch: t,
        Request: i,
        AbortController: s,
        __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: o
    })) return {
        fetch: t,
        Request: n
    };
    let n = i;
    (n && !n.prototype.hasOwnProperty("signal") || o) && (n = function(l, r) {
        let c;
        r && r.signal && (c = r.signal, delete r.signal);
        const d = new i(l, r);
        return c && Object.defineProperty(d, "signal", {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: c
        }), d;
    }, n.prototype = i.prototype);
    const a = t;
    return {
        fetch: (h, l)=>{
            const r = n && n.prototype.isPrototypeOf(h) ? h.signal : l ? l.signal : void 0;
            if (r) {
                let c;
                try {
                    c = new DOMException("Aborted", "AbortError");
                } catch  {
                    c = new Error("Aborted"), c.name = "AbortError";
                }
                if (r.aborted) return Promise.reject(c);
                const d = new Promise((S, w)=>{
                    r.addEventListener("abort", ()=>w(c), {
                        once: !0
                    });
                });
                return l && l.signal && delete l.signal, Promise.race([
                    d,
                    a(h, l)
                ]);
            }
            return a(h, l);
        },
        Request: n
    };
}
const j = ct({
    fetch: window.fetch,
    Request: window.Request,
    AbortController: window.AbortController
}), ut = j ? kt({
    fetch: window.fetch,
    Request: window.Request,
    AbortController: window.AbortController
}) : void 0, ot = j ? ut.fetch : window.fetch;
j ? ut.Request : window.Request;
class It {
    apiKey;
    apiBaseUrl;
    apiEnv;
    timeSynchronisation;
    isApiBaseUrlFetched;
    params;
    constructor(t){
        this.params = t, this.apiKey = t.apiKey, this.apiEnv = t.config.apiEnv, this.apiBaseUrl = st[this.apiEnv], this.timeSynchronisation = t.timeSynchronisation, this.isApiBaseUrlFetched = !1;
    }
    async resolveApiBaseUrl() {
        if (this.apiEnv !== E.AUTO || this.isApiBaseUrlFetched) return this.apiBaseUrl;
        try {
            const t = atob("aHR0cHM6Ly9kbnMuZ29vZ2xlL3Jlc29sdmU/bmFtZT12aWRlby5fZW5kcG9pbnQub2sucnUmdHlwZT1UWFQ="), o = (await (await ot(t, {
                method: "GET",
                mode: "cors",
                cache: "no-cache"
            })).json())?.Answer[0]?.data;
            if (!o) throw new Error("Wrong DNS response");
            return o;
        } catch (t) {
            return this.params.error$.next({
                id: "OneStat:ApiTransport:resolveApiBaseUrl",
                category: (0, _esnextEsmJs.ErrorCategory).NETWORK,
                message: "Unhandled resolve api base url error",
                thrown: t
            }), st[E.VK_ALIAS];
        } finally{
            this.isApiBaseUrlFetched = !0;
        }
    }
    sendBeacon(t, i, s) {
        if (!window.Blob || !window.navigator.sendBeacon) return !1;
        const o = this._prepareQueryParams({
            method: t,
            queryParams: i,
            sessionKey: s
        }), n = new window.Blob([
            o.toString()
        ], {
            type: "application/x-www-form-urlencoded"
        });
        try {
            return window.navigator.sendBeacon(`${this.apiBaseUrl}/fb.do`, n);
        } catch (a) {
            this.params.error$.next({
                id: "OneStat:ApiTransport:sendBeacon",
                category: (0, _esnextEsmJs.ErrorCategory).NETWORK,
                message: "Unhandled beacon error",
                thrown: a,
                data: {
                    method: t,
                    params: i
                }
            });
        }
        return !1;
    }
    async sendRequest(t, i, s) {
        const o = (0, _esnextEsmJs.now)(), n = (a)=>{
            if (a instanceof TypeError && [
                "Failed to fetch",
                "NetworkError when attempting to fetch resource."
            ].includes(a.message)) {
                this.params.error$.next({
                    id: "Network",
                    category: (0, _esnextEsmJs.ErrorCategory).NETWORK,
                    message: "Request failed",
                    thrown: a
                });
                return;
            }
            this.params.error$.next({
                id: "OneStat:ApiTransport:sendRequest",
                category: (0, _esnextEsmJs.ErrorCategory).NETWORK,
                message: "Unhandled request error",
                thrown: a,
                data: {
                    method: t,
                    params: i,
                    sessionKey: s,
                    time: (0, _esnextEsmJs.now)() - o
                }
            });
        };
        return this.apiBaseUrl = await this.resolveApiBaseUrl(), ot(`${this.apiBaseUrl}/fb.do`, {
            method: "post",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            body: this._prepareQueryParams({
                method: t,
                queryParams: i,
                sessionKey: s
            })
        }).then((a)=>{
            const u = Number(a.headers.get("content-length")) === 0, h = new Date(a.headers.get("date") ?? "").getTime(), l = (0, _esnextEsmJs.now)() - o;
            if (isFinite(h) && this.timeSynchronisation?.addServerTime(h, l), !u) return a.json().then((r)=>Object.prototype.hasOwnProperty.call(r, "error_msg") ? Promise.reject(r) : r, n);
        }, n);
    }
    _prepareQueryParams(t) {
        const i = new URLSearchParams({
            format: "JSON",
            method: t.method,
            application_key: this.apiKey
        });
        return t.sessionKey !== void 0 && i.append("session_key", t.sessionKey), Object.entries(t.queryParams).forEach(([s, o])=>i.append(s, typeof o == "string" ? o : JSON.stringify(o))), i;
    }
}
const R = "onestat_events", V = (e)=>(t)=>t.timestamp + e >= (0, _esnextEsmJs.now)();
class Dt {
    params;
    api;
    error$;
    subscription;
    userSalt;
    unsaltedStorage = [];
    lastVsid;
    isPaused = !1;
    firstFlush;
    debouncedFlush;
    loggerDebugLog;
    constructor(t){
        this.params = t, this.api = t.api, this.error$ = t.error$, this.userSalt = t.userSalt, this.loggerDebugLog = t.debugLogger.createComponentLog("stat logger"), this.firstFlush = (0, _esnextEsmJs.debounceFn)(()=>this.safeFlush(), this.params.config.firstFlushTime, {
            maxWait: this.params.config.firstFlushTime
        });
        const i = (0, _esnextEsmJs.safeStorage).isPersistent() ? this.params.config.flushMaxWait : 0;
        this.debouncedFlush = (0, _esnextEsmJs.debounceFn)(()=>this.safeFlush(), this.params.config.flushDebounceTime, {
            maxWait: i
        }), this.subscription = this.api.authorized$.subscribe((s)=>{
            s && this.debouncedFlush();
        }), this.housekeepStorage();
    }
    isUrgent = (t)=>{
        const { operation: i } = t;
        return [
            "action_play",
            "watch_coverage_record",
            "watch_coverage_live"
        ].includes(i);
    };
    safeFlush() {
        try {
            this.flush();
        } catch (t) {
            this.error$.next({
                id: "LoggerError",
                category: (0, _esnextEsmJs.ErrorCategory).WTF,
                message: String(t) ?? "Unknown logger error",
                thrown: t
            });
        }
    }
    readFromStorage() {
        const t = (0, _esnextEsmJs.safeStorage).get(R);
        try {
            return t ? JSON.parse(t) : {};
        } catch  {}
        return {};
    }
    addToStorage(t) {
        if (!this.userSalt) {
            this.unsaltedStorage.push(t);
            return;
        }
        const i = this.readFromStorage(), o = (i[this.userSalt] ?? []).filter(V(this.params.config.storageExpiration));
        (0, _esnextEsmJs.safeStorage).set(R, JSON.stringify({
            ...i,
            [this.userSalt]: [
                ...o,
                t
            ]
        }));
    }
    getFromStorage() {
        return this.userSalt ? (this.readFromStorage()[this.userSalt] ?? []).filter(V(this.params.config.storageExpiration)) : this.unsaltedStorage;
    }
    markStorageSent() {
        if (!this.userSalt) {
            this.unsaltedStorage = [];
            return;
        }
        const t = this.readFromStorage();
        delete t[this.userSalt], (0, _esnextEsmJs.safeStorage).set(R, JSON.stringify(t));
    }
    housekeepStorage() {
        const t = this.readFromStorage();
        for (const [i, s] of Object.entries(t)){
            const o = s.filter(V(this.params.config.storageExpiration));
            o.length ? t[i] = o : delete t[i], this.loggerDebugLog({
                message: `${s.length} retrieved from storage, ${o.length} of them actual`
            });
        }
        (0, _esnextEsmJs.safeStorage).set(R, JSON.stringify(t));
    }
    log(t) {
        this.addToStorage(t), !this.isPaused && (this.isUrgent(t) ? this.flush() : this.lastVsid !== t.custom.vsid ? this.firstFlush() : this.debouncedFlush(), this.lastVsid = t.custom.vsid);
    }
    flush(t = !1) {
        const i = this.getFromStorage();
        i.length !== 0 && (this.api.authorized$.getValue() ? (t && this.params.config.useBeacon ? (this.loggerDebugLog({
            message: `Flushing ${i.length} events through beacon`
        }), this.api.logBeacon(i)) : (this.loggerDebugLog({
            message: `Flushing ${i.length} events`
        }), this.api.logRequest(i)), this.markStorageSent()) : this.api.authorize(), this.firstFlush.cancel(), this.debouncedFlush.cancel());
    }
    pause() {
        this.isPaused = !0, this.debouncedFlush.cancel();
    }
    resume() {
        this.isPaused = !1, this.debouncedFlush();
    }
    destroy() {
        this.subscription.unsubscribe(), this.firstFlush.cancel(), this.debouncedFlush.cancel();
    }
}
const Ft = (e)=>e && ({
        [(0, _esnextEsmJs1.VideoQuality).INVARIANT]: m.UNKNOWN,
        [(0, _esnextEsmJs1.VideoQuality).Q_144P]: m.Q144P,
        [(0, _esnextEsmJs1.VideoQuality).Q_240P]: m.Q240P,
        [(0, _esnextEsmJs1.VideoQuality).Q_360P]: m.Q360P,
        [(0, _esnextEsmJs1.VideoQuality).Q_480P]: m.Q480P,
        [(0, _esnextEsmJs1.VideoQuality).Q_720P]: m.Q720P,
        [(0, _esnextEsmJs1.VideoQuality).Q_1080P]: m.Q1080P,
        [(0, _esnextEsmJs1.VideoQuality).Q_1440P]: m.Q1440P,
        [(0, _esnextEsmJs1.VideoQuality).Q_2160P]: m.Q2160P,
        [(0, _esnextEsmJs1.VideoQuality).Q_4320P]: m.UNKNOWN
    })[e], rt = (e)=>e && ({
        [(0, _esnextEsmJs1.HttpConnectionType).HTTP1]: O.HTTP1,
        [(0, _esnextEsmJs1.HttpConnectionType).HTTP2]: O.HTTP2,
        [(0, _esnextEsmJs1.HttpConnectionType).QUIC]: O.HTTP3
    })[e], Bt = (e)=>{
    if (e !== void 0) switch(e){
        case (0, _esnextEsmJs1.VideoFormat).MPEG:
            return g.MP4;
        case (0, _esnextEsmJs1.VideoFormat).DASH_LIVE:
            return g.DASH;
        case (0, _esnextEsmJs1.VideoFormat).DASH_SEP:
            return g.DASH_SEP;
        case (0, _esnextEsmJs1.VideoFormat).DASH_ONDEMAND:
            return g.ONDEMAND_DASH;
        case (0, _esnextEsmJs1.VideoFormat).DASH_WEBM:
        case (0, _esnextEsmJs1.VideoFormat).DASH_LIVE_WEBM:
            return g.WEBM;
        case (0, _esnextEsmJs1.VideoFormat).DASH_WEBM_AV1:
            return g.AV1;
        case (0, _esnextEsmJs1.VideoFormat).DASH_LIVE_CMAF:
            return g.ONDEMAND_DASH_LIVE;
        case (0, _esnextEsmJs1.VideoFormat).HLS:
        case (0, _esnextEsmJs1.VideoFormat).HLS_LIVE:
            return g.HLS;
        case (0, _esnextEsmJs1.VideoFormat).HLS_ONDEMAND:
            return g.ONDEMAND_HLS;
        case (0, _esnextEsmJs1.VideoFormat).HLS_LIVE_CMAF:
            return g.ONDEMAND_HLS_LIVE;
        case (0, _esnextEsmJs1.VideoFormat).WEB_RTC_LIVE:
            return g.WEBRTC;
        default:
            return (0, _esnextEsmJs.assertNever)(e);
    }
}, W = (e)=>{
    if (e !== void 0) switch(e){
        case (0, _esnextEsmJs1.Surface).NONE:
        case (0, _esnextEsmJs1.Surface).INLINE:
            return;
        case (0, _esnextEsmJs1.Surface).FULLSCREEN:
            return T.FULLSCREEN;
        case (0, _esnextEsmJs1.Surface).SECOND_SCREEN:
            return T.CHROMECAST;
        case (0, _esnextEsmJs1.Surface).PIP:
            return T.PIP;
        default:
            return (0, _esnextEsmJs.assertNever)(e);
    }
}, Ut = (e)=>{
    switch(e){
        case "slow-2g":
            return $.POOR;
        case "2g":
            return $.POOR;
        case "3g":
            return $.GOOD;
        case "4g":
            return $.EXCELLENT;
    }
};
class qt {
    offset = void 0;
    constructor(t){
        this.offset = t;
    }
    getOffset() {
        return this.offset ?? 0;
    }
    setOffset(t) {
        this.offset = t;
    }
    now() {
        return Date.now() + (this.offset ?? 0);
    }
    date(t = new Date) {
        return t.setTime(t.getTime() + (this.offset ?? 0)), t;
    }
    addServerTime(t, i) {
        const s = Date.now(), o = t - s - i / 2;
        if (Math.abs(o) < 1e3) {
            this.offset = 0;
            return;
        }
        this.offset === void 0 ? this.offset = Math.round(o) : this.offset = Math.round(.2 * o + 0.8 * this.offset);
    }
}
const Mt = ()=>Math.floor(Math.random() * 2 ** 32).toString(36).padStart(7, "0"), Ht = ()=>Math.floor(Math.random() * 2 ** 64).toString(36).padStart(13, "0"), Vt = (e, t)=>new (0, _esnextEsmJs.Observable)((i)=>{
        const s = new (0, _esnextEsmJs.Subscription), o = (0, _esnextEsmJs.merge)((0, _esnextEsmJs.fromEvent)(window, "beforeunload"), e.events.willDestruct$), n = new (0, _esnextEsmJs.ValueSubject)(void 0);
        let a;
        s.add(e.info.isLive$.pipe((0, _esnextEsmJs.filterChanged)()).subscribe((v)=>{
            a && (a.unsubscribe(), n.next(void 0)), v ? a = e.info.liveTime$.pipe((0, _esnextEsmJs.map)((M)=>M && M / 1e3)).subscribe(n) : a = e.info.position$.subscribe(n), s.add(a);
        }));
        const { playing$: u, paused$: h } = e.events, l = e.events.willSeek$.pipe((0, _esnextEsmJs.filter)(()=>e.info.playbackState$.getValue() === (0, _esnextEsmJs1.PlaybackState).PLAYING)), r = e.events.seeked$.pipe((0, _esnextEsmJs.filter)(()=>e.info.playbackState$.getValue() === (0, _esnextEsmJs1.PlaybackState).PLAYING));
        let c = !1;
        const d = new (0, _esnextEsmJs.Subject);
        s.add(l.subscribe(()=>{
            c || d.next(), c = !0;
        })), s.add(r.subscribe(()=>c = !1));
        const S = new (0, _esnextEsmJs.Subject), w = new (0, _esnextEsmJs.Subject), q = (0, _esnextEsmJs.merge)(u, r, S), G = (0, _esnextEsmJs.merge)(h, d, o, e.events.looped$, w);
        let L;
        const ht = ()=>L = n.getValue(), lt = ()=>{
            const v = n.getValue();
            (0, _esnextEsmJs.isNullable)(L) || L === v || (0, _esnextEsmJs.isNullable)(v) || (i.next({
                from: L,
                to: v
            }), L = void 0);
        }, dt = ()=>{
            w.next(), S.next();
        };
        if (s.add(q.subscribe(ht)), s.add(G.subscribe(lt)), t.forceInterval && isFinite(t.forceInterval)) {
            let v = 0;
            s.add(q.subscribe(()=>v = window.setTimeout(dt, t.forceInterval))), s.add(G.subscribe(()=>window.clearTimeout(v)));
        }
        return s;
    }), Wt = "_one-stat_", K = `${Wt}uuid`, z = ()=>{
    const e = new (0, _esnextEsmJs.Subscription);
    return {
        subscription: e,
        subscribe: (t, i)=>{
            t && e.add(t.subscribe(i));
        }
    };
};
class Qt {
    api;
    logger;
    config;
    subscription = new (0, _esnextEsmJs.Subscription);
    beforeunloadSubscription;
    timeSynchronisation;
    debugLogger = new (0, _esnextEsmJs.Logger);
    oneStatDebugLog = this.debugLogger.createComponentLog("onestat");
    loopCounter = 0;
    disabled = !1;
    experimental;
    vsid$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    isid$ = new (0, _esnextEsmJs.ValueSubject)(void 0);
    statContext;
    isEmbed;
    embedParent;
    uiEvents;
    player;
    seekAction$ = new (0, _esnextEsmJs.ValueSubject)(U.UNKNOWN);
    uuid;
    constructor(t, i){
        this.statContext = t, this.config = $t(i.config ?? {}), (0, _esnextEsmJs.isNonNullable)(i.apiEnv) && (this.config.apiEnv = i.apiEnv), this.config.synchronizeTime && (this.timeSynchronisation = new qt);
        const s = new (0, _esnextEsmJs.Subject);
        this.experimental = {
            error$: s
        };
        const o = (0, _esnextEsmJs.safeStorage).get(K);
        o ? o.startsWith('"') && o.endsWith('"') ? (this.uuid = o.replaceAll('"', ""), (0, _esnextEsmJs.safeStorage).set(K, this.uuid)) : this.uuid = o : (this.uuid = Lt(), (0, _esnextEsmJs.safeStorage).set(K, this.uuid)), this.resetViewSession(), i.useIsid && this.isid$.next(i.isid ?? Ht());
        const n = new It({
            apiKey: Ct,
            config: this.config,
            error$: s,
            timeSynchronisation: this.timeSynchronisation
        });
        this.api = new Ot({
            config: this.config,
            apiTransport: n,
            refreshAuthToken: i.refreshAuthToken,
            mobile: this.statContext.mobile ?? !1,
            uuid: this.uuid,
            error$: s
        }), this.logger = new Dt({
            config: this.config,
            debugLogger: this.debugLogger,
            api: this.api,
            error$: s,
            userSalt: i.userSalt
        });
        const { isEmbed: a, host: u } = (0, _esnextEsmJs.detectEmbed)();
        this.isEmbed = a, this.embedParent = u, this.subscribe();
    }
    updateContext(t) {
        this.statContext = {
            ...this.statContext,
            ...t
        };
    }
    attachTo(t) {
        const i = new (0, _esnextEsmJs.Subscription), s = (r, c)=>i.add(r.subscribe(c));
        s(t.events.willStart$, ()=>{
            const r = t.info.position$.getValue();
            this.logActionPlay({
                position: r
            }), this.statContext.projectId && this.logActionPlayInteractive({
                position: r
            });
        }), s(t.events.looped$, ()=>{
            this.resetViewSession(), ++this.loopCounter > this.config.maxLoops && (this.disabled = !0), this.logActionPlay({
                position: t.info.position$.getValue()
            });
        }), s(t.events.seeked$, ()=>{
            this.logSeek({
                action: this.seekAction$.getValue(),
                time: t.info.position$.getValue()
            }), this.seekAction$.next(U.UNKNOWN);
        }), s(t.events.paused$, ()=>{
            this.logPause({
                position: t.info.position$.getValue()
            });
        }), s(t.events.willResume$, ()=>{
            this.logPlay();
        }), s(t.events.started$, ()=>{
            this.statContext.clip && this.logWatchCoverageRecord({
                start: 0,
                end: 0
            });
        }), s(Vt(t, {
            forceInterval: this.config.watchCoverageInterval
        }), (r)=>{
            const c = t.info.isLive$.getValue(), d = {
                start: parseFloat(r.from.toFixed(3)),
                end: parseFloat(r.to.toFixed(3))
            };
            c ? this.logWatchCoverageLive(d) : this.logWatchCoverageRecord(d);
        });
        let o;
        s(t.info.isStalled$, (r)=>{
            r ? o = (0, _esnextEsmJs.now)() : ((0, _esnextEsmJs.isNonNullable)(o) && this.logEmptyBuffer({
                duration: (0, _esnextEsmJs.now)() - o
            }), o = void 0);
        });
        let n = !1;
        i.add(t.events.fatalError$.pipe((0, _esnextEsmJs.once)()).subscribe(()=>n = !0)), s(t.events.willStop$, ()=>{
            if (t.info.isStalled$.getValue()) {
                const c = (0, _esnextEsmJs.isNonNullable)(o) ? (0, _esnextEsmJs.now)() - o : void 0;
                this.logCloseAtEmptyBuffer({
                    duration: c ?? 0
                }), o = void 0;
            } else n || this.logActionStop();
        }), s(t.events.managedError$, ({ id: r })=>{
            this.logError({
                fatal: !1,
                errorType: r
            });
        }), s(t.events.fatalError$, ({ id: r })=>{
            this.logError({
                fatal: !0,
                errorType: r
            });
        });
        let a, u, h = !1;
        s(t.events.firstBytes$, (r)=>{
            a = (0, _esnextEsmJs.now)(), this.logFirstBytes({
                time: r
            });
        }), s(t.events.willStart$, ()=>u = (0, _esnextEsmJs.now)()), s(t.info.currentBuffer$, (r)=>{
            !h && r && r.end - r.start > 0 && (0, _esnextEsmJs.isNonNullable)(a) && (this.logPlayerReady({
                duration: (0, _esnextEsmJs.now)() - a
            }), h = !0);
        }), s(t.events.firstFrame$, ()=>{
            (0, _esnextEsmJs.isNonNullable)(a) && !h && (this.logPlayerReady({
                duration: (0, _esnextEsmJs.now)() - a
            }), h = !0), (0, _esnextEsmJs.isNonNullable)(u) && this.logFirstFrame({
                time: (0, _esnextEsmJs.now)() - u
            });
        }), s(t.info.atLiveEdge$, (r)=>this.updateContext({
                liveEdge: r
            })), s((0, _esnextEsmJs.combine)({
            muted: t.info.muted$,
            volume: t.info.volume$
        }), ({ muted: r, volume: c })=>this.updateContext({
                audible: !r && c > 0
            })), s(t.info.currentQuality$, (r)=>this.updateContext({
                quality: Ft(r)
            })), s(t.info.isAutoQualityEnabled$, (r)=>this.updateContext({
                autoQuality: r
            })), s(t.info.currentFormat$, (r)=>this.updateContext({
                contentType: Bt(r)
            })), s(t.info.currentPlaybackRate$, (r)=>this.updateContext({
                rate: r
            })), s(t.info.is3DVideo$, (r)=>this.updateContext({
                is3d: r
            }));
        let l;
        return s(t.info.hostname$, (r)=>{
            const c = l !== void 0 && l !== r;
            this.updateContext({
                cdnHostname: r,
                failover: c
            }), c && this.logFailover(r), l = r;
        }), s(t.info.throughputEstimation$, (r)=>this.updateContext({
                downloadSpeed: r
            })), s(t.info.httpConnectionType$, (r)=>{
            this.statContext.firstConnectionType || this.updateContext({
                firstConnectionType: rt(r)
            }), this.updateContext({
                connectionType: rt(r)
            });
        }), s(t.info.httpConnectionReused$, (r)=>{
            (0, _esnextEsmJs.isNullable)(this.statContext.firstConnectionReused) && this.updateContext({
                firstConnectionReused: r
            }), this.updateContext({
                connectionReused: r
            });
        }), s(t.info.surface$, (r)=>this.updateContext({
                mode: W(r)
            })), s((0, _esnextEsmJs.combine)({
            current: t.info.currentTextTrack$,
            available: t.info.availableTextTracks$
        }), ({ current: r, available: c })=>{
            const d = c.find(({ id: w })=>w === r), S = d && (d.isAuto ? `${d.language}_auto` : d.language);
            this.updateContext({
                subtitles: S
            });
        }), this.player = t, this.uiEvents && this.attachToUi(this.uiEvents), this.resubscribeBeforeunload(), this.subscription.add(i), i;
    }
    attachToUi(t) {
        this.uiEvents = t;
        const { subscription: i, subscribe: s } = z();
        return this.player && (s(t.actionRewind$, ()=>{
            this.player && (this.resetViewSession(), this.logActionPlay({
                position: this.player.info.position$.getValue()
            }));
        }), s(t.actionSeek$, this.seekAction$), s(t.inPiP$, (o)=>{
            const n = o ? T.PIP : W(this.player?.info.surface$.getValue());
            this.updateContext({
                mode: n
            });
        }), s(t.inFullscreen$, (o)=>{
            const n = o ? T.FULLSCREEN : W(this.player?.info.surface$.getValue());
            this.updateContext({
                mode: n
            });
        }), s(t.actionSetSubtitle$, (o)=>this.updateContext({
                subtitles: o
            })), s(t.nextMovie$, (o)=>this.logNextMovie(o)), this.resubscribeBeforeunload(), this.subscription.add(i)), i;
    }
    attachToAds(t) {
        const { subscription: i, subscribe: s } = z();
        return s(t.slotRequested$, ()=>this.logAdSlotRequest()), s(t.started$, (o)=>this.logAdStarted(o)), s(t.paused$, ()=>this.logAdPaused()), s(t.resumed$, ()=>this.logAdResumed()), s(t.ended$, ()=>this.logAdEnded()), s(t.skipped$, ()=>this.logAdSkipped()), s(t.clicked$, ()=>this.logAdClicked()), this.resubscribeBeforeunload(), this.subscription.add(i), i;
    }
    attachToInteractive(t) {
        const { subscription: i, subscribe: s } = z();
        return s(t.click$, (o)=>this.logInterfaceClick(o)), s(t.nextMovie$, (o)=>this.logNextMovie(o)), this.resubscribeBeforeunload(), this.subscription.add(i), i;
    }
    authorize(t) {
        return this.api.authorize(t);
    }
    pause() {
        this.logger.pause(), this.oneStatDebugLog({
            message: "paused"
        });
    }
    resume() {
        this.logger.resume(), this.oneStatDebugLog({
            message: "resumed"
        });
    }
    destroy() {
        this.logger.flush(), this.subscription.unsubscribe(), this.api.destroy(), this.logger.destroy();
    }
    resetViewSession() {
        this.oneStatDebugLog({
            message: "VSID reset"
        }), this.vsid$.next(Mt());
    }
    getDeviceId() {
        return this.uuid;
    }
    setFieldBlacklist() {}
    logInited() {}
    logReady(t) {
        this.log({
            operation: "player_ready",
            param: String(t.time)
        });
    }
    logStarted(...t) {
        this.logActionPlay(...t);
    }
    logPlay() {
        this.log({
            operation: "play_toggle"
        });
    }
    logPause(t) {
        this.log({
            operation: "pause",
            param: String(Math.round(t.position))
        });
    }
    logSeek(t) {
        this.log({
            operation: "seek",
            param: t.action,
            time: t.time
        });
    }
    logFirstBytes(t) {
        this.log({
            operation: "first_bytes",
            param: String(t.time)
        });
    }
    logFirstFrame(t) {
        this.log({
            operation: "first_frame",
            param: String(t.time)
        });
    }
    logError(t) {
        this.log({
            operation: "content_error",
            param: `${t.fatal ? "fatal" : "recoverable"}_${t.errorType}`
        });
    }
    logWatchCoverageRecord(t) {
        this.log({
            operation: "watch_coverage_record",
            param: `${t.start}-${t.end}`
        });
    }
    logWatchCoverageLive(t) {
        const i = this.timeSynchronisation?.getOffset() ?? 0, s = t.start + i, o = t.end + i;
        this.log({
            operation: "watch_coverage_live",
            param: `${s}-${o}`
        });
    }
    logEmptyBuffer(t) {
        this.log({
            operation: "empty_buffer",
            param: String(t.duration)
        });
    }
    logDownloadSpeed() {}
    logAdSlotRequest() {
        this.log({
            operation: "adv",
            param: "slot_request"
        });
    }
    logAdStarted(t) {
        this.log({
            operation: "adv",
            param: t
        });
    }
    logAdPaused() {
        this.log({
            operation: "adv",
            param: "pause"
        });
    }
    logAdResumed() {
        this.log({
            operation: "adv",
            param: "resume"
        });
    }
    logAdEnded() {
        this.log({
            operation: "adv",
            param: "ended"
        });
    }
    logAdSkipped() {
        this.log({
            operation: "adv",
            param: "skip"
        });
    }
    logAdClicked() {
        this.log({
            operation: "adv",
            param: "click"
        });
    }
    logInterfaceClick(t) {
        this.log({
            operation: "player_interface_click",
            param: t
        });
    }
    logNextMovie(t) {
        this.log({
            operation: "next_movie",
            param: String(t)
        });
    }
    subscribe() {
        this.resubscribeBeforeunload();
        const t = window.navigator.connection;
        t && "onchange" in t && "effectiveType" in t && this.subscription.add((0, _esnextEsmJs.merge)((0, _esnextEsmJs.fromEvent)(t, "change"), (0, _esnextEsmJs.observableFrom)([
            "init"
        ])).subscribe(()=>this.updateContext({
                network: Ut(t.effectiveType)
            }))), this.config.debugLog && this.debugLogger.log$.subscribe((i)=>{
            console.debug("%c stat ", "background:#fa6470;", `component: ${i.component}.`, i.message);
        });
    }
    resubscribeBeforeunload() {
        this.beforeunloadSubscription?.unsubscribe(), this.beforeunloadSubscription = (0, _esnextEsmJs.fromEvent)(window, "beforeunload").subscribe(()=>this.logger.flush(!0)), this.subscription.add(this.beforeunloadSubscription);
    }
    logPlayerReady(t) {
        this.log({
            operation: "player_ready",
            param: String(Math.round(t.duration))
        });
    }
    logActionPlay(t) {
        this.log({
            operation: "action_play",
            param: String(Math.round(t.position))
        });
    }
    logActionPlayInteractive(t) {
        this.statContext.projectId && this.log({
            operation: "action_play_interactive",
            param: String(Math.round(t.position))
        }, {
            vid: this.statContext.projectId
        });
    }
    logFailover(t) {
        this.log({
            operation: "failover",
            param: t
        });
    }
    logCloseAtEmptyBuffer(t) {
        this.log({
            operation: "close_at_empty_buffer",
            param: String(Math.round(t.duration))
        });
    }
    logActionStop() {
        this.log({
            operation: "action_stop"
        });
    }
    log(t, i = {}) {
        if (this.disabled) {
            this.oneStatDebugLog({
                message: `operation ${t.operation} but statistics is disabled`
            });
            return;
        }
        if (this.config.disabledOperations.includes(t.operation)) {
            this.oneStatDebugLog({
                message: `operation ${t.operation} but it is disabled`
            });
            return;
        }
        this.oneStatDebugLog({
            message: `operation ${t.operation} ${t.param}`
        });
        const s = this.createLogItem(t, i);
        this.logger.log(s);
    }
    createLogItem({ operation: t, param: i, time: s }, o = {}) {
        const n = this.timeSynchronisation?.now() ?? (0, _esnextEsmJs.now)(), a = this.vsid$.getValue();
        (0, _esnextEsmJs.assertNonNullable)(a);
        const u = this.isid$.getValue(), h = t === "empty_buffer" || t === "close_at_empty_buffer" ? this.statContext.connectionType : this.statContext.firstConnectionType, l = this.statContext.firstConnectionReused;
        let r, c;
        if (this.isEmbed) {
            r = this.embedParent;
            const S = [
                ...new URLSearchParams(location.search).entries()
            ].filter(([w, q])=>this.config.embedUrlParams.includes(w));
            c = new URLSearchParams(S).toString();
        } else this.statContext.place === "direct" && (document.referrer && (r = new URL(document.referrer).hostname), c = location.href.substring(0, 1024));
        const d = {
            vsid: a,
            isid: u,
            vid: this.statContext.movieId,
            ct: this.statContext.contentType,
            place: this.isEmbed ? "embed" : this.statContext.place,
            quality: this.statContext.quality,
            cdn_host: this.statContext.cdnHostname,
            stat_type: this.statContext.autoplay === !0 ? B.AUTO : this.statContext.autoplay === !1 ? B.MANUAL : void 0,
            param: i,
            vk_app_id: this.statContext.vkAppId,
            track_code: this.statContext.trackCode,
            connection_type: h,
            connection_reused: l === !0 ? A.YES : l === !1 ? A.NO : void 0,
            cached_data: this.statContext.cached === !0 ? A.YES : this.statContext.cached === !1 ? A.NO : void 0,
            live: this.statContext.liveEdge ? A.YES : void 0,
            muted: this.statContext.audible === !1 ? A.YES : void 0,
            mode: this.statContext.mode,
            subtitles: this.statContext.subtitles,
            download_speed: this.statContext.downloadSpeed,
            manual_quality: this.statContext.autoQuality ? void 0 : A.YES,
            ref_domain: r,
            direct_url: c,
            rate: this.statContext.rate === 1 || (0, _esnextEsmJs.isNullable)(this.statContext.rate) ? void 0 : this.statContext.rate.toFixed(2),
            view_360: this.statContext.is3d ? 1 : void 0,
            aid: this.statContext.albumId,
            vk_playlist_id: this.statContext.vkPlaylistId,
            ...o
        };
        for (const S of this.config.disabledCustomFields)delete d[S];
        return {
            operation: t,
            type: 1,
            time: s,
            network: this.statContext.network,
            timestamp: n,
            custom: d
        };
    }
}

},{"@vkontakte/videoplayer-shared/esnext.esm.js":"2RPwF","@vkontakte/videoplayer-core/esnext.esm.js":"24ag6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"dbKwj":[function(require,module,exports) {
module.exports = Promise.all([
    require("fda8ae7ee13a8e86")(require("75085b70b36a3eca").getBundleURL("1M2EE") + "esnext.esm.010e8b8d.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("fda8ae7ee13a8e86")(require("75085b70b36a3eca").getBundleURL("1M2EE") + "esnext.esm.a3b06bfc.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("HcClw"));

},{"fda8ae7ee13a8e86":"61B45","75085b70b36a3eca":"lgJ39"}]},["1dlwI"], null, "parcelRequireb792")

//# sourceMappingURL=esnext.esm.6eab7b84.js.map
