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
})({"t6GTB":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ec1cacbea3b06bfc";
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

},{}],"HcClw":[function(require,module,exports) {
/**
 * @vkontakte/videoplayer-interactive v1.0.9
 * Fri, 26 Apr 2024 14:14:12 GMT
 * https://st.mycdn.me/static/vkontakte-videoplayer/1-0-9/doc/
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CustomError", ()=>E);
parcelHelpers.export(exports, "EVENT_NAMES", ()=>y);
parcelHelpers.export(exports, "INTERACTIVE_CLICK_ACTIONS", ()=>F);
parcelHelpers.export(exports, "Interactives", ()=>Ui);
parcelHelpers.export(exports, "ManifestController", ()=>oi);
parcelHelpers.export(exports, "SDKInfo", ()=>Wi);
parcelHelpers.export(exports, "chapterIdsToVKVideoIds", ()=>Mt);
parcelHelpers.export(exports, "compareVersions", ()=>Z);
parcelHelpers.export(exports, "getChapterIdByVkVideoId", ()=>Oi);
parcelHelpers.export(exports, "getVKVideoIdByMedia", ()=>ae);
parcelHelpers.export(exports, "getVideoRawIdByMedia", ()=>Ai);
parcelHelpers.export(exports, "graphEventTypes", ()=>jt);
parcelHelpers.export(exports, "hasEndTemplate", ()=>ei);
parcelHelpers.export(exports, "interactivesEventTypes", ()=>T);
parcelHelpers.export(exports, "isLastChapter", ()=>it);
parcelHelpers.export(exports, "isSupportedManifest", ()=>Jt);
parcelHelpers.export(exports, "isVKVariantItem", ()=>Li);
parcelHelpers.export(exports, "utils", ()=>Gi);
parcelHelpers.export(exports, "vkVideoIdsToChapterIds", ()=>ji);
var _esnextEsmJs = require("@vkontakte/videoplayer-shared/esnext.esm.js");
var _uuid = require("uuid");
var _esnextEsmJs1 = require("@vkontakte/videoplayer-core/esnext.esm.js");
const fe = "1.0.9";
function kt(i, t = 1) {
    let e = "0", n = "0", r = "0";
    return i.length === 4 ? (e = "0x" + i[1] + i[1], n = "0x" + i[2] + i[2], r = "0x" + i[3] + i[3]) : i.length === 7 && (e = "0x" + i[1] + i[2], n = "0x" + i[3] + i[4], r = "0x" + i[5] + i[6]), `rgba(${+e},${+n},${+r},${t})`;
}
const _ = "SDK_NAME", me = "SDK_NAME-controls-container", Bt = ()=>document.querySelector(`.${me}`), ye = .4, V = {
    textColor: "#000",
    textSize: .4,
    textContent: "",
    roundCorners: 0,
    borderWidth: 0,
    borderColor: "#000",
    borderAlpha: 1,
    backgroundColor: "#fff",
    backgroundAlpha: 1,
    innerSizesDependOn: "self",
    angle: 0
}, vt = {
    top: "flex-start",
    bottom: "flex-end",
    center: "center"
}, bt = {
    start: "flex-start",
    end: "flex-end",
    center: "center"
}, Ct = {
    start: "left",
    end: "right",
    center: "center"
}, Ft = ({ target: i, props: t })=>{
    i.style.alignItems = vt[t?.text?.gravityVertical] ?? vt.center, i.style.justifyContent = bt[t?.text?.gravityHorizontal] ?? bt.center, i.style.textAlign = Ct[t?.text?.alignment] ?? Ct.start;
}, Dt = ({ target: i, props: t, fallback: e, dependsOn: n })=>{
    i.style.color = t?.text?.color ?? e.textColor, i.style.fontSize = `calc(${n.height} * ${t?.text?.size ?? e.textSize})`, i.textContent = t?.text?.value ?? e.textContent;
}, Ht = ({ target: i, props: t, fallback: e })=>{
    i.style.backgroundColor = kt(t?.background?.color ?? e.backgroundColor, t?.background?.alpha ?? e.backgroundAlpha);
}, Ut = ({ target: i, props: t, fallback: e, dependsOn: n })=>{
    i.style.border = `calc(${n.height} * ${t?.shape?.border?.width ?? e.borderWidth}) solid ${kt(t?.shape?.border?.color ?? e.borderColor, t?.shape?.border?.alpha ?? e.borderAlpha)}`, i.style.borderRadius = `calc(${n.height} * ${t?.shape?.roundCorners ?? e.roundCorners})`;
}, ct = ({ target: i, layoutParams: t, fallback: e })=>{
    i.style.transform = `rotate(${-t.angle}rad)`;
}, nt = "int", lt = {
    AREA: `${nt}_area`,
    TEXT: `${nt}_text`,
    BUTTON: `${nt}_bttn`
};
class ht {
    constructor(t){
        this.control = t;
    }
    createView(t) {
        const e = document.createElement("div");
        e.classList.add(`${_}-control-container-${this.control.id}`), t(e, this.control.layoutParams);
        const n = (this.control.layoutParams.innerSizesDependOn ?? V.innerSizesDependOn) === "self" ? {
            height: e.style.height,
            width: e.style.width
        } : {
            height: "var(--interactive-content-height)",
            width: "var(--interactive-content-width)"
        };
        return {
            controlContainerEl: e,
            dependsOn: n
        };
    }
    setEvents(t, e) {
        t && this.control.events.forEach((n)=>{
            switch(n.type.trim().toLowerCase()){
                case "onclick":
                    t.addEventListener("click", (s)=>{
                        s.stopPropagation(), e && e({
                            action: n.action,
                            controlId: this.control.id,
                            controlType: this.control.type
                        });
                    });
                    break;
            }
        });
    }
    getElement() {
        return document.querySelector(`.${_}-control-container-${this.control.id}`);
    }
}
const Gt = (i)=>{
    if (i.type.trim().toLowerCase() === "area") return new ge(i);
};
class ge extends ht {
    constructor(t){
        super(t);
    }
    createView({ parent: t, layoutFn: e }) {
        const { dependsOn: n, controlContainerEl: r } = super.createView(e), s = document.createElement("button");
        return s.classList.add(`${_}-${this.control.id}`), s.setAttribute("data-testid", lt.AREA), s.style.display = "flex", s.style.width = "100%", s.style.height = "100%", s.style.cursor = "pointer", s.type = "button", Ht({
            target: s,
            props: this.control.props,
            fallback: {
                ...V,
                backgroundColor: "transparent"
            }
        }), Ut({
            target: s,
            props: this.control.props,
            fallback: {
                ...V,
                borderAlpha: 0
            },
            dependsOn: n
        }), ct({
            target: s,
            layoutParams: this.control.layoutParams,
            fallback: V
        }), r.append(s), t.append(r), this.controlEl = s, r;
    }
    disable() {
        this.controlEl && (this.controlEl.style.cursor = "default");
    }
    enable() {
        this.controlEl && (this.controlEl.style.cursor = "pointer");
    }
    getElement() {
        return document.querySelector(`.${_}-${this.control.id}`);
    }
}
const Wt = (i)=>{
    if (i.type.trim().toLowerCase() === "button") return new ve(i);
};
class ve extends ht {
    constructor(t){
        super(t);
    }
    createView({ parent: t, layoutFn: e }) {
        const { dependsOn: n, controlContainerEl: r } = super.createView(e), s = document.createElement("button");
        s.type = "button", s.classList.add(`${_}-${this.control.id}`), s.setAttribute("data-testid", lt.BUTTON), s.style.display = "flex", s.style.width = "100%", s.style.height = "100%", s.style.cursor = "pointer", s.style.fontFamily = "inherit";
        const o = document.createElement("span");
        return o.style.display = "inline-block", o.style.whiteSpace = "pre", o.style.overflow = "hidden", o.style.textOverflow = "ellipsis", ct({
            target: s,
            layoutParams: this.control.layoutParams,
            fallback: V
        }), Ht({
            target: s,
            props: this.control.props,
            fallback: V
        }), Ut({
            target: s,
            props: this.control.props,
            fallback: V,
            dependsOn: n
        }), Ft({
            target: s,
            props: this.control.props
        }), Dt({
            target: o,
            props: this.control.props,
            fallback: V,
            dependsOn: n
        }), s.append(o), r.append(s), t.append(r), this.controlEl = s, r;
    }
    disable() {
        this.controlEl && (this.controlEl.style.cursor = "default");
    }
    enable() {
        this.controlEl && (this.controlEl.style.cursor = "pointer");
    }
    getElement() {
        return document.querySelector(`.${_}-${this.control.id}`);
    }
}
const be = (i)=>{
    if (i.type.trim().toLowerCase() === "text") return new Ce(i);
};
class Ce extends ht {
    constructor(t){
        super(t);
    }
    createView({ parent: t, layoutFn: e }) {
        const { dependsOn: n, controlContainerEl: r } = super.createView(e), s = document.createElement("div");
        s.classList.add(`${_}-${this.control.id}`), s.setAttribute("data-testid", lt.TEXT), s.style.display = "flex", s.style.width = "100%", s.style.height = "100%", s.style.fontFamily = "inherit";
        const o = document.createElement("span");
        return o.style.whiteSpace = "pre", ct({
            target: s,
            layoutParams: this.control.layoutParams,
            fallback: V
        }), Ft({
            target: s,
            props: this.control.props
        }), Dt({
            target: o,
            props: this.control.props,
            fallback: V,
            dependsOn: n
        }), s.append(o), r.append(s), t.append(r), this.controlEl = s, r;
    }
    disable() {}
    enable() {}
    getElement() {
        return document.querySelector(`.${_}-${this.control.id}`);
    }
}
class Ee {
    constructor(t){
        this.layout = t;
    }
}
const we = (i)=>{
    if (i.type.trim().toLowerCase() === "relative") return new zt(i);
};
class zt extends Ee {
    constructor(t){
        super(t);
    }
    setContainerLayout(t) {
        t.style.position = "relative";
    }
    setControlLayout(t, e) {
        t.style.position = "absolute", t.style.width = `calc(var(--interactive-content-width) * ${e.width})`, t.style.height = `calc(var(--interactive-content-height) * ${e.height})`, t.style.left = `calc(var(--interactive-content-width) * ${e.x} + ((var(--interactive-width) - var(--interactive-content-width)) / 2))`, t.style.top = `calc(var(--interactive-content-height) * ${e.y} + ((var(--interactive-height) - var(--interactive-content-height)) / 2))`;
    }
}
class qt {
    constructor(t){
        this.container = t, this.factories = new Map, this.#s();
    }
    addControlFactory(t, e) {
        this.factories.set(t.trim().toLowerCase(), e), this.#s();
    }
    removeControlFactory(t) {
        this.factories.delete(t.trim().toLowerCase()), this.#s();
    }
    #s() {
        this.controls = this.#a();
    }
    #a() {
        return this.container.controls?.reduce((t, e)=>{
            const n = e.type.trim().toLowerCase(), r = this.factories.get(n);
            return r ? [
                ...t,
                r(e)
            ] : [
                ...t
            ];
        }, []);
    }
}
const Qt = (i, t)=>{
    if (i.type.trim().toLowerCase() === "choice") return new Ie(i, t);
};
class Ie extends qt {
    constructor(t, e){
        super(t), this.rootElement = e ?? Bt(), this.layout = new zt(this.container.layout), this.isRemoved = !1, this.isDisabled = !1, this.addControlFactory("button", Wt), this.addControlFactory("text", be), this.addControlFactory("area", Gt);
    }
    createView(t) {
        const e = document.createElement("div");
        return e.classList.add(`${_}-${this.container.id}`), this.layout.setContainerLayout(e), this.controls.forEach((n)=>{
            const r = n.createView({
                parent: e,
                layoutFn: this.layout.setControlLayout
            });
            n.setEvents(r, t);
        }), this.rootElement.append(e), this.isRemoved = !1, e;
    }
    hide() {
        const t = this.getElement();
        t && (t.style.visibility = "hidden");
    }
    show() {
        const t = this.getElement();
        t && (t.style.visibility = "visible");
    }
    enable() {
        const t = this.getElement();
        t && (this.controls.forEach((e)=>e.enable()), t.style.opacity = 1, this.isDisabled = !1);
    }
    disable() {
        const t = this.getElement();
        t && (this.controls.forEach((e)=>e.disable()), t.style.opacity = ye, this.isDisabled = !0);
    }
    removeView() {
        this.isRemoved || (this.getElement()?.remove(), this.isRemoved = !0);
    }
    getElement() {
        return this.rootElement.querySelector(`.${_}-${this.container.id}`);
    }
}
function Xt(i, t) {
    let e;
    return (...n)=>{
        clearTimeout(e), e = setTimeout(()=>i(...n), t);
    };
}
const z = {
    Object: "Object",
    String: "String",
    Array: "Array",
    Number: "Number",
    Function: "Function",
    Boolean: "Boolean"
}, G = (i, t)=>Object.prototype.toString.call(i) === `[object ${t}]`, dt = (i)=>G(i, z.Object), at = (i)=>G(i, z.String), ut = (i)=>G(i, z.Array), Yt = (i)=>G(i, z.Number), Se = (i)=>G(i, z.Function), Et = (i)=>Yt(i) && !isNaN(i), W = (i)=>dt(i) && Object.keys(i).length === 0, Kt = (i)=>ut(i) && !i.length, Q = (i, t)=>at(i) && (t ? i.trim() : i).length, Zt = window.navigator.userAgent.toLowerCase(), Te = /mobi/i.test(Zt);
Zt.indexOf("android");
const xe = "video_interactive", Re = "videoint", Ae = 250;
class Le {
    constructor(t){
        this.init(t);
    }
    init({ root: t, onOpenPreviewClick: e, onError: n, lang: r, visitedChapters: s = [] }) {
        this.isHidden = !0, this.currentManifestId = void 0, this.currentChapterId = void 0, this.visitedChapterIds = new Set(s), this.onOpenPreviewClick = e, this.onError = n, this.lang = r ?? "ru", this.zoom = .7, this.isReady = !1, this.lastZoomInfo = void 0, this.ngEditorSize = void 0, this.ngEditor = void 0, this.graphWrapperElement = Oe(t), this.resizeObserver = new ResizeObserver(Xt(this.onResize, Ae)), this.resizeObserver.observe(this.graphWrapperElement);
    }
    onResize = (t)=>{
        this.isReady && (!t[0].contentRect.width || !t[0].contentRect.height || (this.lastZoomInfo && this.ngEditor.zoomTo(this.getNextPoint()), this.ngEditorSize = {
            width: t[0].contentRect.width,
            height: t[0].contentRect.height
        }));
    };
    getNextPoint(t = this.ngEditorSize) {
        return [
            (this.lastZoomInfo.x - t.width / 2) / this.lastZoomInfo.value * -1,
            (this.lastZoomInfo.y - t.height / 2) / this.lastZoomInfo.value * -1
        ];
    }
    handleChapterChange = (t)=>{
        if (this.isReady) {
            if (this.isHidden || this.hide(), !t?.id) {
                this.onError?.("Id is not found"), console.error("Id is not found");
                return;
            }
            this.visitedChapterIds.add(t.id), this.ngEditor.selectChapter(t.id), this.ngEditor.setVisitedChapters(Array.from(this.visitedChapterIds)), this.currentChapterId = t.id, this.lastZoomInfo = void 0;
        }
    };
    handleManifestChange = async (t, e = [])=>{
        if (!Yt(t.graph.edit.chapters[0].x)) {
            this.isReady = !1, this.onError?.("Can't show graph"), console.error("Can't show graph");
            return;
        }
        if (this.lastZoomInfo = void 0, !this.ngEditor) {
            let n;
            try {
                n = await (0, _esnextEsmJs.loadVKLangPack)(this.lang, xe, Re);
            } catch  {
                console.log("Unable to load graph language pack");
            }
            const { GraphEditor: r } = await require("c4c641d41a92bd8c");
            this.ngEditor = new r(this.graphWrapperElement, {
                mode: "read",
                lang: this.lang,
                translation: n
            }), this.ngEditor.on("control", ({ name: s, chapterId: o })=>{
                s === "openPreview" && this.onOpenPreviewClick(o);
            }), this.ngEditor.on("zoomEnd", (s)=>{
                this.lastZoomInfo = {
                    ...s
                };
            });
        }
        this.visitedChapterIds = new Set(e), t.metadata.id !== this.currentManifestId ? (this.ngEditor.update(t), this.currentManifestId = t.metadata.id) : this.ngEditor.setVisitedChapters(Array.from(this.visitedChapterIds)), this.isReady = !0;
    };
    setVisitedChapters(t) {
        this.visitedChapterIds = new Set([
            ...this.visitedChapterIds,
            ...t
        ]), this.ngEditor.setVisitedChapters(Array.from(this.visitedChapterIds));
    }
    updateVideosInfo(t) {
        this.ngEditor.updateVideosInfo(t);
    }
    show() {
        !this.ngEditor || !this.isReady || (this.graphWrapperElement.style.display = "block", this.lastZoomInfo || this.ngEditor.focusChapter(this.currentChapterId), this.isHidden = !1);
    }
    hide() {
        this.graphWrapperElement.style.display = "none", this.isHidden = !0;
    }
    destroy() {
        this.hide(), this.resizeObserver.disconnect(), this.ngEditor?.setVisitedChapters([]), this.onOpenPreviewClick = void 0, this.ngEditor?.dispose(), this.graphWrapperElement.remove(), this.isReady = !1;
    }
}
function Oe(i) {
    const t = document.createElement("div");
    return t.style.position = "absolute", t.style.top = "0", t.style.left = "0", t.style.height = "100%", t.style.width = "100%", t.style.display = "none", i.append(t), t;
}
const Z = (i = "", t = "")=>{
    i = i.split("."), t = t.split(".");
    let e = 0;
    for(let n = 0; n < Math.max(i.length, t.length) && !e; n++)i[n] > t[n] ? e = 1 : i[n] < t[n] ? e = -1 : e = 0;
    return e;
}, je = "3.1", wt = {
    default: "setNextBranch",
    random: "setRandomBranch",
    weightlessRandom: "setWeightlessRandomBranch",
    max: "setMaxWeightBranch",
    min: "setMinWeightBranch"
}, Ne = {
    type: "onSuspense",
    action: {
        type: "continuePlayback",
        args: {
            shouldOpenNow: !0,
            isDetachContainer: !0
        }
    }
}, _e = (i)=>{
    const t = [];
    for (const e of i.chapters){
        let n;
        const r = [];
        for (const { isDefault: a, ...c } of e.branches)a && (n = c.id), r.push(c);
        let s = [];
        const o = [];
        for (const { fallbackStrategy: a, ...c } of e.containers){
            const l = !!c.endTime;
            let f = [
                Ne
            ];
            switch(a){
                case "await":
                    l ? f = [] : s = [];
                    break;
                case "default":
                    {
                        const p = {
                            type: "onSuspense",
                            action: {
                                type: wt.default,
                                args: {
                                    branchId: n,
                                    shouldOpenNow: !l,
                                    isDetachContainer: !0
                                }
                            }
                        };
                        l ? f = [
                            p
                        ] : s = [
                            p
                        ];
                        break;
                    }
                case "random":
                case "weightlessRandom":
                case "max":
                case "min":
                    {
                        const p = {
                            type: "onSuspense",
                            action: {
                                type: wt[a],
                                args: {}
                            }
                        };
                        l ? f = [
                            p
                        ] : s = [
                            p
                        ];
                        break;
                    }
            }
            for (const p of c.controls)o.push({
                ...c,
                controls: [
                    {
                        ...p
                    }
                ],
                id: (0, _uuid.v4)(),
                events: f
            });
        }
        t.push({
            ...e,
            containers: o,
            events: s,
            branches: r
        });
    }
    return i.metadata.version = je, i.metadata.updated = new Date().toISOString(), {
        ...i,
        chapters: t
    };
}, Ve = "3.2", $e = (i)=>{
    if (!i.media) {
        const { media: t, ...e } = i.metadata;
        return {
            ...i,
            metadata: {
                ...e,
                version: Ve
            },
            media: t
        };
    }
    return i;
}, Pe = "3.3", Me = (i = [])=>({
        edit: {
            chapters: i
        },
        view: {}
    }), It = {
    type: "onSuspense",
    action: {
        type: "expect",
        args: {
            shouldOpenNow: !0,
            isDetachContainer: !0
        }
    }
}, ke = (i)=>{
    const t = [], e = [];
    for (const n of i.chapters){
        const { id: r, x: s, y: o, ...a } = n, c = a.containers.map((l)=>({
                ...l,
                controls: l.controls.map(({ subtype: f, type: p, ...b })=>({
                        ...b,
                        type: f ?? p
                    })),
                events: l.events?.length ? l.events : [
                    It
                ]
            }));
        t.push({
            id: r,
            ...a,
            containers: c,
            events: a.events?.length ? a.events : [
                It
            ]
        }), e.push({
            id: r,
            x: s,
            y: o
        });
    }
    return {
        ...i,
        chapters: t,
        graph: Me(e),
        metadata: {
            ...i.metadata,
            version: Pe
        }
    };
}, Be = [
    {
        version: "3.0",
        migrate: _e
    },
    {
        version: "3.1",
        migrate: $e
    },
    {
        version: "3.2",
        migrate: ke
    }
], Fe = (i)=>Be.reduce((t, e)=>Z(t.metadata.version, e.version) ? t : e.migrate(t), i), De = Object.freeze({
    Button: "Button",
    Area: "Area",
    Text: "Text"
}), I = Object.freeze({
    openURI: "openURI",
    setNextBranch: "setNextBranch",
    setWeightlessRandomBranch: "setWeightlessRandomBranch",
    setRandomBranch: "setRandomBranch",
    setMaxWeightBranch: "setMaxWeightBranch",
    setMinWeightBranch: "setMinWeightBranch",
    setDefaultBranch: "setDefaultBranch",
    continuePlayback: "continuePlayback",
    expect: "expect"
});
var F;
(function(i) {
    i.GO_NEXT_BUTTON = "GO_NEXT_BUTTON", i.GO_NEXT_AREA = "GO_NEXT_AREA", i.WATCH_AGAIN = "WATCH_AGAIN", i.OPEN_GRAPH = "OPEN_GRAPH", i.CLOSE_GRAPH = "CLOSE_GRAPH";
})(F || (F = {}));
const St = {
    metadata: "Object",
    chapters: "Array"
}, He = "3.0.0", Ue = "3.3.0", Jt = (i)=>{
    const t = Z(i, He);
    return t === -1 ? !1 : t === 0 ? !0 : Z(i, Ue) !== 1;
}, Ge = (i)=>{
    if (!dt(i)) return !1;
    for(const t in St)if (!i[t] || !G(i[t], St[t])) return !1;
    return Jt(i.metadata.version);
}, te = (i)=>i.type === De.Text;
class E {
    constructor(t, e, ...n){
        this.severity = t, this.category = e, this.data = n;
    }
    toString() {
        return `SDK_NAME ERROR ${JSON.stringify(this, null, "  ")}`;
    }
    static Severity = {
        RECOVERABLE: 1,
        CRITICAL: 2
    };
    static Category = {
        VIDEO: 0,
        INTERACTIVES: 1,
        GRAPH: 2,
        MANIFEST: 3,
        LOADERS: 4,
        HISTORY: 5,
        SEAMLESS: 6
    };
}
class ee {
    listeners = {};
    addListener(t, e) {
        return this.listeners[t] = this.listeners[t] || [], this.listeners[t].push(e), this;
    }
    on(t, e) {
        return this.addListener(t, e);
    }
    once(t, e) {
        this.listeners[t] = this.listeners[t] || [];
        const n = ()=>{
            e(), this.off(t, n);
        };
        return this.listeners[t].push(n), this;
    }
    off(t, e) {
        return this.removeListener(t, e);
    }
    reset() {
        this.listeners = {};
    }
    removeListener(t, e) {
        const n = this.listeners[t];
        if (!n) return this;
        for(let r = n.length; r > 0; r--)if (n[r] === e) {
            n.splice(r, 1);
            break;
        }
        return this;
    }
    emit(t, ...e) {
        const n = this.listeners[t];
        return n ? (n.forEach((r)=>{
            r(...e);
        }), !0) : !1;
    }
    listenerCount(t) {
        return (this.listeners[t] || []).length;
    }
    rawListeners(t) {
        return this.listeners[t];
    }
}
class We {
    constructor(t){
        this.raf, this.fn, this.fns = [], this.addFn(t);
    }
    addFn = (t, e = !1)=>{
        Se(t) && (this.fns.push(t), e && this.updateFn());
    };
    removeFn = (t, e = !1)=>{
        this.fns = this.fns.filter((n)=>n !== t), e && this.updateFn();
    };
    updateFn = ()=>{
        this.fn = ()=>{
            this.fns.forEach((t)=>t()), this.raf && this.forceRequestAnimation();
        };
    };
    forceRequestAnimation = ()=>{
        this.fn && (this.raf = requestAnimationFrame(this.fn));
    };
    requestAnimation = ()=>{
        this.raf || this.forceRequestAnimation();
    };
    cancelAnimation = ()=>{
        cancelAnimationFrame(this.raf), this.raf = void 0;
    };
    release() {
        this.cancelAnimation(), this.fn = void 0, this.fns = [];
    }
}
class ze {
    loaders;
    constructor(t){
        this.loaders = {
            chapterLoaders: t?.chapterLoaders ?? [],
            manifestLoaders: t?.manifestLoaders ?? []
        };
    }
    async exec(t, e) {
        return qe(...this.loaders[t])(e);
    }
}
function qe(...i) {
    return async function(e) {
        const n = [
            ...i
        ];
        for(; n.length > 0;)e = await n.shift()(e);
        return e;
    };
}
function J(i, t, e) {
    return i ? {
        ...i,
        [t]: i[t] ? [
            e,
            ...i[t]
        ] : [
            e
        ]
    } : {
        [t]: [
            e
        ]
    };
}
function ot({ actions: i, errors: t, chapterId: e, ...n }) {
    if (e) {
        const r = i.getManifest(), s = i.getChapter(r.chapters, e);
        if (s) {
            const o = i.getMedia(r.media, s.videoId), a = i.getGraph(r.graph, s.id);
            return o ? {
                ...n,
                actions: i,
                errors: t,
                result: {
                    chapter: s,
                    media: o,
                    graph: a
                }
            } : {
                ...n,
                errors: J(t, ot.name, "Could not find media"),
                actions: i
            };
        }
    }
    return {
        ...n,
        errors: J(t, ot.name, "Could not find chapter"),
        actions: i
    };
}
class Tt {
    constructor(){
        Object.defineProperty(this, "listeners", {
            value: {},
            writable: !0,
            configurable: !0
        });
    }
    addEventListener(t, e, n) {
        t in this.listeners || (this.listeners[t] = []), this.listeners[t].push({
            callback: e,
            options: n
        });
    }
    removeEventListener(t, e) {
        if (!(t in this.listeners)) return;
        const n = this.listeners[t];
        for(let r = 0, s = n.length; r < s; r++)if (n[r].callback === e) {
            n.splice(r, 1);
            return;
        }
    }
    dispatchEvent(t) {
        if (!(t.type in this.listeners)) return;
        const n = this.listeners[t.type].slice();
        for(let r = 0, s = n.length; r < s; r++){
            const o = n[r];
            try {
                o.callback.call(this, t);
            } catch (a) {
                Promise.resolve().then(function() {
                    return require("c4c641d41a92bd8c");
                }).then((res)=>{
                    throw a;
                });
            }
            o.options && o.options.once && this.removeEventListener(t.type, o.callback);
        }
        return !t.defaultPrevented;
    }
}
class ie extends Tt {
    constructor(){
        super(), this.listeners || Tt.call(this), Object.defineProperty(this, "aborted", {
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
class Qe {
    constructor(){
        Object.defineProperty(this, "signal", {
            value: new ie,
            writable: !0,
            configurable: !0
        });
    }
    abort(t) {
        let e;
        try {
            e = new Event("abort");
        } catch  {
            typeof document < "u" ? document.createEvent ? (e = document.createEvent("Event"), e.initEvent("abort", !1, !1)) : (e = document.createEventObject(), e.type = "abort") : e = {
                type: "abort",
                bubbles: !1,
                cancelable: !1
            };
        }
        let n = t;
        if (n === void 0) {
            if (typeof document > "u") n = new Error("This operation was aborted"), n.name = "AbortError";
            else try {
                n = new DOMException("signal is aborted without reason");
            } catch  {
                n = new Error("This operation was aborted"), n.name = "AbortError";
            }
        }
        this.signal.reason = n, this.signal.dispatchEvent(e);
    }
    toString() {
        return "[object AbortController]";
    }
}
typeof Symbol < "u" && Symbol.toStringTag && (Qe.prototype[Symbol.toStringTag] = "AbortController", ie.prototype[Symbol.toStringTag] = "AbortSignal");
function ne(i) {
    return i.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"), !0) : typeof i.Request == "function" && !i.Request.prototype.hasOwnProperty("signal") || !i.AbortController;
}
function Xe(i) {
    typeof i == "function" && (i = {
        fetch: i
    });
    const { fetch: t, Request: e = t.Request, AbortController: n, __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: r = !1 } = i;
    if (!ne({
        fetch: t,
        Request: e,
        AbortController: n,
        __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: r
    })) return {
        fetch: t,
        Request: s
    };
    let s = e;
    (s && !s.prototype.hasOwnProperty("signal") || r) && (s = function(l, f) {
        let p;
        f && f.signal && (p = f.signal, delete f.signal);
        const b = new e(l, f);
        return p && Object.defineProperty(b, "signal", {
            writable: !1,
            enumerable: !1,
            configurable: !0,
            value: p
        }), b;
    }, s.prototype = e.prototype);
    const o = t;
    return {
        fetch: (c, l)=>{
            const f = s && s.prototype.isPrototypeOf(c) ? c.signal : l ? l.signal : void 0;
            if (f) {
                let p;
                try {
                    p = new DOMException("Aborted", "AbortError");
                } catch  {
                    p = new Error("Aborted"), p.name = "AbortError";
                }
                if (f.aborted) return Promise.reject(p);
                const b = new Promise((C, L)=>{
                    f.addEventListener("abort", ()=>L(p), {
                        once: !0
                    });
                });
                return l && l.signal && delete l.signal, Promise.race([
                    b,
                    o(c, l)
                ]);
            }
            return o(c, l);
        },
        Request: s
    };
}
const pt = ne({
    fetch: window.fetch,
    Request: window.Request,
    AbortController: window.AbortController
}), se = pt ? Xe({
    fetch: window.fetch,
    Request: window.Request,
    AbortController: window.AbortController
}) : void 0, xt = pt ? se.fetch : window.fetch;
pt ? se.Request : window.Request;
const Ye = async (i)=>{
    try {
        let t, e;
        if (dt(i)) t = i;
        else if (at(i)) {
            e = new URL(i).href;
            const r = await xt(e);
            if (!r.ok) return {};
            t = await r.json();
        } else return {};
        if (!Ge(t)) return {};
        const n = t.metadata.media;
        if (at(n) && !t.media) try {
            let r;
            e ? r = new URL(n, e).href : (r = new URL(n).href, e = r);
            const s = await xt(r);
            if (!s.ok) throw new Error;
            t.metadata.media = await s.json();
        } catch  {
            return ti(t.metadata.version) ? {
                manifest: t
            } : {};
        }
        return {
            manifest: t,
            manifestURL: e
        };
    } catch  {
        return {};
    }
};
async function Ke(i) {
    const { manifest: t, manifestURL: e } = await Ye(i), n = Fe(t);
    return n.media = Ze(n.media, e), delete n.metadata.media, n;
}
function st(i, t) {
    return i.find((e)=>e.id === t);
}
function Rt(i, t) {
    return i.edit?.chapters ? i.edit.chapters.find((e)=>e.id === t) : i.view?.chapters ? i.view.chapters.find((e)=>e.id === t) : void 0;
}
function At(i, t) {
    return i.videos.find((e)=>e.id === t);
}
function Ze(i, t) {
    return {
        ...i,
        videos: i.videos.map((e)=>({
                ...e,
                variants: e.variants.map((n)=>{
                    const r = Je(n.url, t);
                    return {
                        ...n,
                        url: r || n.url
                    };
                })
            }))
    };
}
function Je(i, t) {
    try {
        return new URL(i, t).href;
    } catch  {
        return "";
    }
}
function ti(i) {
    return Z(i, "3.2.0") >= 0;
}
const S = Object.freeze({
    nothing: 0,
    beforeInteractive: 1,
    interactive: 2,
    afterInteractive: 3,
    end: 4,
    removed: 5,
    destroyed: 6
}), ft = (i)=>ut(i) && !Kt(i), it = (i)=>i.order === "end", ei = (i)=>ut(i.containers) && !Kt(i.containers) && it(i), ii = (i, t)=>{
    const e = i * 1e3;
    return ft(t.controls) && e < (t.startTime ?? 0);
}, Lt = (i, t)=>{
    const e = i * 1e3;
    return ft(t.controls) && e >= (t.startTime ?? 0) && e <= (t.endTime ?? 1 / 0);
}, tt = (i)=>i.some((t)=>t.action.type === "expect"), Ot = (i)=>i.find((t)=>t.action.type === "expect"), ni = (i)=>i?.length === 1, re = (i)=>ni(i) && te(i[0]), si = ({ fn: i, type: t = 1 }, ...e)=>(...n)=>t ? i(...n, ...e) : i({
            ...n[t],
            ...e[t]
        }), ri = (i = [])=>i.reduce((t, e, n)=>{
        const r = (e?.controls ?? []).filter((s)=>!te(s));
        if (ft(r)) {
            const s = [
                e.startTime ?? 0,
                e.endTime ?? 1 / 0
            ], o = e.id;
            if (!n) t.push({
                subjects: [
                    o
                ],
                range: s
            });
            else {
                const a = [];
                let c = -1 / 0, l = 1 / 0, f = [];
                const p = [];
                for(let b = 0; b < t.length; b++){
                    const C = t[b];
                    if (p.push(...C.subjects), C.range[0] < l && (l = C.range[0]), C.range[1] > c && (c = C.range[1]), C.range[0] <= s[0] && C.range[1] >= s[1]) return t[b].subjects.push(o), t;
                    s[0] >= C.range[0] && s[0] <= C.range[1] && (a.push(b), f = f.concat(C.subjects), s[0] = C.range[0]), s[1] >= C.range[0] && s[1] <= C.range[1] && (a.push(b), f = f.concat(C.subjects), s[1] = C.range[1]);
                }
                if (p.push(o), s[0] <= l && s[1] >= c) return [
                    {
                        subjects: p,
                        range: s
                    }
                ];
                a.length && a.reverse().forEach((b)=>{
                    t.splice(b, 1);
                }), t.push({
                    subjects: f.concat([
                        o
                    ]),
                    range: s
                });
            }
        }
        return t;
    }, []).sort((t, e)=>t.range[0] - e.range[0]), ai = (i, t)=>tt(i.events) ? !1 : t.some(({ container: e })=>e.container.id !== i.id && tt(e.container.events) && e.container.endTime === i.endTime && !e.isRemoved);
class oi extends ze {
    constructor(t, e){
        super(t), this.onError = e, this.prevChapter$ = new (0, _esnextEsmJs.ValueSubject)(null), this.release();
    }
    release() {
        return this.manifest = null, this.chapter = null, this.media = null, this.graph = null, this.prevChapter$.next(null), this;
    }
    async setManifest(t) {
        this.release();
        const e = await this.exec("manifestLoaders", {
            actions: {
                addErrorMessage: J
            },
            result: null,
            errors: null,
            source: t
        });
        e.errors && this.errorHandler(e.errors);
        const n = await Ke(e.result ?? t);
        return this.manifest = n, this;
    }
    async setInitial() {
        return this.setNext();
    }
    async setNext(t = this.manifest.metadata.initChapterId) {
        this.prevChapter$.next(this.chapter);
        const e = await this.exec("chapterLoaders", ot({
            actions: {
                getManifest: ()=>this.manifest,
                getCurrent: this.getCurrent,
                getGraph: Rt,
                getChapter: st,
                getMedia: At,
                getByBranches: this.getByBranches.bind(this),
                addErrorMessage: J
            },
            result: null,
            errors: null,
            chapterId: t
        }));
        return e.errors && this.errorHandler(e.errors), this.chapter = e.result.chapter, this.media = e.result.media, this.graph = e.result.graph, this;
    }
    errorHandler(t) {
        this.onError(t), console.error("Something went wrong with loaders", {
            errors: t
        });
    }
    getInitial() {
        return this.getByChapterId(this.manifest.metadata.initChapterId) || null;
    }
    getByChapterId(t = this.manifest.metadata.initChapterId) {
        const e = st(this.manifest.chapters, t);
        if (e) {
            const n = At(this.manifest.media, e.videoId), r = Rt(this.manifest.graph, e.id);
            if (n) return {
                chapter: e,
                media: n,
                graph: r
            };
        }
        return null;
    }
    getBranches(t = this.chapter.id) {
        if (t === this.chapter.id) return this.getByBranches(this.chapter.branches);
        {
            const e = st(this.manifest.chapters, t);
            return this.getByBranches(e?.branches);
        }
    }
    getByBranches(t = []) {
        return t.reduce((e, n)=>{
            const r = this.getByChapterId(n.chapterId);
            return r && e.push(r), e;
        }, []);
    }
    getCurrent() {
        return {
            chapter: this.chapter,
            media: this.media,
            graph: this.graph
        };
    }
    isInitialChapter() {
        return this.chapter.id === this.manifest.metadata.initChapterId;
    }
    isEndChapter() {
        return it(this.chapter);
    }
}
const ci = (i)=>{
    const t = i.variants.find((e)=>e.payload?.type === "vk");
    if (t && "payload" in t) {
        const [e, n] = t.payload.id.split("_");
        return [
            e,
            n
        ];
    }
    return [];
}, y = {
    graph: "graph",
    interactives: "interactives",
    chapterChanged: "chapter-changed",
    playerChanged: "player-changed",
    manifestChanged: "manifest-changed",
    errors: "errors",
    eachTick: "eachTick",
    historyInited: "history-inited",
    historyDestroyed: "history-destroyed"
}, jt = {
    visibility: "visibility",
    watchAgainClicked: "watchAgainClicked"
}, T = {
    actionChoiceCanceled: "action-choice-canceled",
    actionChoice: "action-choice",
    actionExecution: "action-execution",
    visibility: "visibility",
    containerRemoved: "container-removed",
    rangeEnded: "range-ended"
};
function li() {
    const i = new Map;
    function t({ listId: r = Math.random().toString(), itemId: s = Math.random().toString(), ...o }) {
        const a = i.get(r), c = {
            ...o
        };
        return a ? a[s] = c : i.set(r, {
            [s]: c
        }), {
            listId: r,
            itemId: s,
            ...o
        };
    }
    function e(r, s) {
        const o = i.get(r);
        if (o) {
            if (s) return o[s]?.player.destroy(), o[s]?.container.remove(), o[s]?.subscription.unsubscribe(), delete o[s], Object.keys(o).length || i.delete(r), !0;
            for (const a of Object.values(o))a.player.destroy(), a.container.remove();
            return i.delete(r), !0;
        } else throw Error("Can't remove. Not find.");
    }
    function n() {
        for (const r of i)e(r[0]);
    }
    return {
        createPlayer: t,
        removePlayer: e,
        map: i,
        removeAll: n
    };
}
function Nt(i, t = []) {
    let e = {}, n;
    const r = !t.length;
    for (const s of i.variants)if (!n && "cover" in s && (n = s.cover), "url" in s) switch(s.type.toLowerCase()){
        case "mp4":
            (r || t.includes("mp4")) && (e.MPEG = {
                ...e.MPEG,
                [s.standard ?? "Invariant quality"]: s.url
            });
            break;
        case "mpeg":
            (r || t.includes("mpeg")) && (e.MPEG = {
                ...e.MPEG,
                [s.standard ?? "Invariant quality"]: s.url
            });
            break;
        case "hls":
            (r || t.includes("hls")) && (e = {
                ...e,
                HLS: {
                    type: "url",
                    url: s.url
                }
            });
            break;
        case "dash":
            (r || t.includes("dash")) && (e = {
                ...e,
                DASH_SEP: {
                    compatibilityMode: !0,
                    type: "url",
                    url: s.url
                }
            });
            break;
    }
    return {
        sources: e,
        thumbUrl: n,
        title: i.title ?? ""
    };
}
const X = (i, t)=>{
    const e = i.info.currentQuality$.getValue(), n = i.info.availableQualities$.getValue();
    e !== t && n.includes(t) && (i.setQuality(t), i.setAutoQuality(!1));
}, K = {
    activePlayerChanged: "sc-active-player-changed",
    initiated: "sc-initiated",
    playerCreated: "sc-player-created"
}, hi = 2;
function di(i) {
    const t = li();
    let e, n;
    const r = new ee;
    let s = {}, o = !1, a = null, c = !1, l;
    i && f(i);
    function f(d) {
        a = d;
    }
    function p(d, g, m) {
        if (!a) throw Error("need to set interactive controller");
        const w = (t.map.get(d) ?? {})[g];
        if (w) {
            s = {
                chapterId: m,
                listId: d,
                itemId: g,
                ...w
            };
            const R = s.player;
            n = R.info.currentQuality$.subscribe((v)=>{
                if (!(!v || !R.info.position$.getValue())) {
                    e = v;
                    for (const O of t.map)Object.values(O[1]).forEach(({ player: j })=>{
                        R.info.isAutoQualityEnabled$.getValue() || X(j, v);
                    });
                }
            }), w.container.remove(), o = !1, a.setPlayer(w.player), c || (a.init(), c = !0), r.emit(K.activePlayerChanged, {
                player: s.player,
                config: s.config
            });
            return;
        }
        throw Error("Can't set. Not find.");
    }
    async function b(d, g, m) {
        if (!a) throw Error("need to set interactive controller");
        if (W(s) || d !== s.itemId) return;
        if (m >= 0 && !o) {
            const w = a.getChapterBranches();
            o = !0;
            const R = new Set;
            for (const v of w)R.has(v.media.id) || (await L({
                media: v.media,
                chapterId: v.chapter.id,
                setAsActive: !1,
                title: v.chapter.label
            }), R.add(v.media.id));
        }
    }
    async function C({ chapter: { id: d }, media: g }) {
        if (W(s)) return;
        n?.unsubscribe();
        const m = s.player.info.muted$.getValue(), x = s.player.info.currentQuality$.getValue(), w = s.player.info.isAutoQualityEnabled$.getValue(), R = s.player.info.volume$.getValue(), v = s.player.info.currentPlaybackRate$.getValue(), O = !w;
        let j = !1;
        for (const A of t.map)if (A[0] === g.id) {
            const k = Object.keys(A[1]);
            for (const $ of k)$ === s.itemId ? (k.length < hi || (j = !0), t.removePlayer(A[0], $)) : (j = !0, p(A[0], $, d), O ? X(s.player, x) : s.player.setAutoQuality(!0), s.player.setVolume(R), s.player.setMuted(m), s.player.setPlaybackRate(v));
        } else t.removePlayer(A[0]);
        j || (await L({
            media: g,
            chapterId: d,
            setAsActive: !0,
            playbackRate: v
        }), O ? X(s.player, x) : s.player.setAutoQuality(!0), s.player.setVolume(R), s.player.setMuted(m));
    }
    async function L({ media: d, chapterId: g, prefetch: m = !0, setAsActive: x = !0, autoplay: w = !1, preferredExt: R, title: v, playbackRate: O }) {
        const j = Math.random().toString(), A = document.createElement("div");
        l.append(A);
        const k = s?.player?.info.isAutoQualityEnabled$.getValue();
        let $;
        if (a?.options?.vkVideoLoader) {
            const q = ci(d);
            q.length && ($ = await a.options.vkVideoLoader(...q));
        }
        const mt = {
            container: A,
            ...$?.videos?.[0] || {
                sources: Nt(d, R).sources
            },
            title: v
        }, B = new (0, _esnextEsmJs1.Player);
        B.initVideo(mt);
        const oe = A.lastChild, yt = new (0, _esnextEsmJs.Subscription);
        yt.add(B.info.position$.subscribe(function(q) {
            b(j, B.info.duration$.getValue(), q);
        })).add(B.events.canplay$.subscribe(function() {
            k || X(B, e), O && B.setPlaybackRate(O);
        })), oe && (A.style.display = "none", A.classList.add(g));
        const D = t.createPlayer({
            listId: d.id,
            itemId: j,
            player: B,
            container: A,
            sources: Nt(d, R).sources,
            config: mt,
            subscription: yt
        });
        return x && p(d.id, D.itemId, g), w && D.player.play(), m && !w && D.player.prepare(), r.emit(K.playerCreated, D.player), {
            player: D.player,
            config: D.config
        };
    }
    function M() {
        u(), a = null;
    }
    function u() {
        a?.off(y.chapterChanged, C), t.removeAll(), s = {}, c = !1, o = !1;
    }
    async function h({ container: d }) {
        if (!a) throw Error("need to set interactive controller");
        u(), l = d;
        const { media: g, chapter: m } = a.getCurrentChapter();
        if (g) {
            a.on(y.chapterChanged, C);
            const { player: x, config: w } = await L({
                media: g,
                chapterId: m.id,
                title: m.label
            });
            return r.emit(K.initiated, {
                container: d,
                media: g,
                chapterId: m.id
            }), {
                player: x,
                config: w
            };
        } else console.error("not found");
    }
    return {
        ...t,
        on: r.on.bind(r),
        off: r.off.bind(r),
        init: h,
        setInteractiveController: f,
        createPlayer: L,
        removeAll: M,
        getActivePlayer: function() {
            return s;
        }
    };
}
const ui = 3e3, pi = ()=>{
    let i = [], t = null;
    return {
        setPlayer: (o)=>{
            t = o;
        },
        setContainers: (o)=>{
            i = o;
        },
        deleteContainer: (o)=>{
            i = i.filter((a)=>a.id !== o);
        },
        getNextInteractiveTime: (o = ui)=>{
            if (!i.length || t === null) return null;
            let a = -1, c = !1;
            const l = Math.round(t.info.position$.getValue() * 1e3);
            for (const f of i){
                const p = f.startTime - o;
                if (p <= l && (l <= f.endTime || f.endTime === null)) {
                    c = !0;
                    break;
                }
                l < p && (a = a === -1 ? p : Math.min(a, p));
            }
            return !c && a !== -1 ? a : null;
        }
    };
}, H = pi();
class fi {
    constructor({ player: t, container: e, branches: n, selectBranches: r, interactiveEvents: s, globalEventEmitter: o, ignoreContainerEvent: a, permanentTextControls: c, disabledControls$: l }){
        this.container = e, this.branches = n, this.selectBranches = r, this.subscription = new (0, _esnextEsmJs.Subscription), this.player = t, this.interactiveEvents = s, this.ignoreContainerEvent = a, this.isPermanentText = c && re(e.container.controls), this.disabledControls$ = l, this.globalEventEmitter = o, this.gameState = S.nothing, this.isSelectedControlEvent = !1, this.isSelectedContainerEvent = !1, this.registerEvents();
    }
    registerEvents() {
        this.subscription.add(this.player.events.playing$.subscribe(this.show)).add(this.player.events.paused$.subscribe(this.hide)).add(this.player.events.ended$.subscribe(this.onEndOfVideo)), this.subscription.add(this.disabledControls$.subscribe((t)=>{
            t ? this.container.disable?.() : this.container.enable?.();
        }));
    }
    hide = ()=>{
        setTimeout(()=>{
            this.gameState !== S.end && (tt(this.container.container.events) && this.gameState === S.afterInteractive || this.selectBranches.state.isExpect || (this.gameState !== S.interactive && this.container.hide?.(), this.globalEventEmitter.emit(y.interactives, {
                subjectId: this.container.container.id,
                subjectName: "container",
                type: T.visibility,
                visibility: !1
            })));
        });
    };
    show = ()=>{
        if (this.gameState === S.interactive && !this.isSelectedControlEvent) {
            if (this.container.getElement()) this.container.show?.(), this.globalEventEmitter.emit(y.interactives, {
                subjectId: this.container.container.id,
                subjectName: "container",
                type: T.visibility,
                visibility: !0,
                isFirst: !1
            });
            else {
                const e = si({
                    fn: this.selectBranches.onControlEvent,
                    type: 0
                }, {
                    isDisabled: ()=>this.container.isDisabled,
                    branches: this.branches,
                    containerId: this.container.container.id,
                    onDetachContainer: ()=>{
                        this.removeView(), this.globalEventEmitter.emit(y.interactives, {
                            subjectId: this.container.container.id,
                            subjectName: "container",
                            type: T.visibility,
                            visibility: !1
                        });
                    },
                    onEvent: (n, r)=>{
                        this.isSelectedControlEvent = !0, n !== !1 && (this.removeView(), this.globalEventEmitter.emit(y.interactives, {
                            subjectId: this.container.container.id,
                            subjectName: "container",
                            type: T.visibility,
                            visibility: !1
                        })), (this.gameState === S.end || this.gameState === S.afterInteractive || this.selectBranches.state.isExpect) && (this.selectBranches.stopExpect(), r(), this.removeView(), this.globalEventEmitter.emit(y.interactives, {
                            subjectId: this.container.container.id,
                            subjectName: "container",
                            type: T.visibility,
                            visibility: !1
                        })), H.deleteContainer(this.container.container.id);
                    },
                    isEOV: ()=>this.gameState === S.end
                });
                this.container.createView(e), this.globalEventEmitter.emit(y.interactives, {
                    subjectId: this.container.container.id,
                    subjectName: "container",
                    type: T.visibility,
                    visibility: !0,
                    isFirst: !0
                }), this.disabledControls$.getValue() && this.container.disable?.();
            }
        }
    };
    selectContainerEvent(t = !1) {
        this.interactiveEvents.containersEventsCallState.setCalled({
            timestamp: t ? 1 / 0 : this.container.container.endTime,
            id: this.container.container.id
        }), !(this.isSelectedControlEvent || this.isSelectedContainerEvent) && (this.isSelectedContainerEvent = !0, this.ignoreContainerEvent() || this.selectBranches.setManifestContainerEvents({
            container: this.container.container,
            branches: this.branches,
            isEOV: t
        }), !t && this.interactiveEvents.exec(this.container.container.endTime));
    }
    onStartTime() {
        this.show();
    }
    onEndTime() {
        this.selectContainerEvent(!1);
        const t = tt(this.container.container.events) || this.ignoreContainerEvent();
        (this.isSelectedControlEvent || !t) && this.removeView();
    }
    onBeforeStartTime() {
        this.container.hide?.(), this.globalEventEmitter.emit(y.interactives, {
            subjectId: this.container.container.id,
            subjectName: "container",
            type: T.visibility,
            visibility: !1
        });
    }
    onEndOfVideo = ()=>{
        this.gameState = S.end, this.selectContainerEvent(!0);
    };
    whilePlaying = ()=>{
        if (this.player.experimental.element$.getValue()?.readyState < 1 || [
            S.destroyed,
            S.removed
        ].includes(this.gameState) && !this.isPermanentText) return;
        const e = this.player.getExactTime();
        if (ii(e, this.container.container)) this.gameState !== S.beforeInteractive && (this.gameState = S.beforeInteractive, this.onBeforeStartTime());
        else if (Lt(e, this.container.container)) this.gameState !== S.interactive && (this.gameState = S.interactive, this.onStartTime());
        else if (this.gameState !== S.afterInteractive) {
            const s = this.gameState;
            this.gameState = S.afterInteractive, s === S.interactive && this.onEndTime();
        } else this.gameState !== S.destroyed && this.removeView();
        const n = Lt(e, this.container.container), r = this.container.container.startTime ? [
            this.container.container.startTime,
            this.container.container.endTime ?? 1 / 0
        ] : [];
        this.container.onProgress?.(e, n), this.globalEventEmitter.emit(y.eachTick, {
            subjectId: this.container.container.id,
            subjectName: "container",
            range: r,
            currentTime: e,
            isInteractiveTime: n
        });
    };
    reset() {
        this.isSelectedControlEvent = !1, this.isSelectedContainerEvent = !1, this.gameState = S.beforeInteractive;
    }
    removeView() {
        this.container.removeView(), this.globalEventEmitter.emit(y.interactives, {
            subjectId: this.container.container.id,
            subjectName: "container",
            type: T.containerRemoved,
            visibility: !1
        }), this.gameState = S.removed;
    }
    destroy() {
        this.reset(), this.removeView(), this.gameState = S.destroyed, this.subscription.unsubscribe(), this.branches = [], this.interactiveEvents.containersEventsCallState.setCalled({
            timestamp: this.container.container.endTime ?? 1 / 0,
            id: this.container.container.id
        }), H.deleteContainer(this.container.container.id);
    }
}
function mi() {
    const i = {};
    function t() {
        for(const a in i)Object.prototype.hasOwnProperty.call(i, a) && delete i[a];
        return !0;
    }
    function e(a) {
        const c = {};
        for(const l in i)+l <= a && (c[l] = i[l]);
        return c;
    }
    function n(a) {
        const c = {};
        for(const l in i)+l >= a && (c[l] = i[l]);
        return c;
    }
    function r({ timestamp: a, priority: c, initiator: l }) {
        if (Et(a)) {
            const f = i[a] ?? null;
            if (f && Q(c, !0)) {
                let p = {};
                const b = f[c];
                return b && (p = {
                    ...p,
                    ...b
                }), p = W(p) ? null : p, p && Q(l, !0) ? p[l] ?? null : p;
            }
            return f;
        }
        return null;
    }
    function s({ timestamp: a, priority: c, initiator: l }) {
        if (Et(a)) {
            if (i[a]) {
                if (Q(c, !0)) {
                    if (i[a][c]) {
                        if (Q(l, !0)) {
                            if (i[a][c][l]) {
                                if (delete i[a][c][l], !W(i[a][c])) return !0;
                            } else return !1;
                        }
                        if (delete i[a][c], !W(i[a])) return !0;
                    } else return !1;
                }
                return delete i[a];
            } else return !1;
        }
    }
    function o({ timestamp: a, priority: c, initiator: l, ...f }) {
        i[a]?.[c]?.[l] ? i[a][c][l].push({
            ...f
        }) : i[a]?.[c] ? i[a][c] = {
            ...i[a][c],
            [l]: [
                {
                    ...f
                }
            ]
        } : i[a] ? i[a] = {
            ...i[a],
            [c]: {
                [l]: [
                    {
                        ...f
                    }
                ]
            }
        } : i[a] = {
            [c]: {
                [l]: [
                    {
                        ...f
                    }
                ]
            }
        };
    }
    return {
        map: i,
        remove: s,
        add: o,
        removeAll: t,
        get: r,
        getLte: e,
        getGte: n
    };
}
const yi = [
    I.expect,
    I.setNextBranch
], gi = 1 / 0;
function _t(i) {
    let t = i, e;
    const n = vi(), r = new mi;
    let s;
    const o = ()=>{
        b(), u();
    }, a = (h)=>{
        r.add.call(void 0, h), C();
    }, c = (h = [])=>{
        for (const d of h)if (d.action(), yi.includes(d.actionType)) break;
    }, l = (h = 1 / 0)=>{
        const d = Y(r.get({
            timestamp: h,
            priority: "control"
        }) ?? {}), g = Y(r.get({
            timestamp: h,
            priority: "container"
        }) ?? {}), m = Y(r.get({
            timestamp: h,
            priority: "chapter"
        }) ?? {});
        return [
            ...d,
            ...g,
            ...m
        ];
    }, f = (h)=>{
        n.isReady(h) && c(l(h));
    }, p = ()=>{
        c([
            ...Y(r.get({
                timestamp: 1 / 0,
                priority: "chapter"
            }) ?? {})
        ]);
    }, b = ()=>{
        e && (s?.unsubscribe(), e = void 0);
    }, C = ()=>{
        e || (e = ()=>setTimeout(()=>{
                f(1 / 0);
            }), s = t.events.ended$.subscribe(e));
    }, L = (h)=>{
        b(), t = h;
    }, M = (h)=>{
        h.priority === "container" && n.resetCalled(h.timestamp), r.remove(h);
    }, u = ()=>{
        n.release(), r.removeAll();
    };
    return {
        setPlayer: L,
        add: a,
        remove: M,
        exec: f,
        execEndOfVideo: p,
        listen: C,
        unlisten: b,
        release: o,
        containersEventsCallState: n,
        getPreparedToExecActions: l
    };
}
function vi() {
    const i = new Map;
    return {
        setCalled: ({ timestamp: o, id: a })=>{
            const c = i.get(o);
            c && c[a] !== void 0 && (c[a] = !0);
        },
        setData: (o = [])=>{
            for (const a of o){
                const c = a.endTime ?? gi, l = i.get(c) ?? {};
                i.set(c, {
                    ...l,
                    [a.id]: !1
                });
            }
        },
        resetCalled: (o)=>{
            const a = i.get(o);
            if (a) for(const c in a)a[c] = !1;
        },
        isReady: (o)=>{
            const a = i.get(o);
            return a ? !Object.values(a).some((c)=>!c) : !0;
        },
        release: ()=>i.clear()
    };
}
function Y(i) {
    return Object.values(i).flat().sort((t)=>t.actionType === I.expect ? -1 : 1);
}
const bi = (i, t)=>{
    const { height: e, width: n } = t.info.intrinsicVideoSize$.getValue() || {};
    if (!(e && n)) return {
        videoContentHeight: 0,
        videoContentWidth: 0
    };
    const { clientHeight: r, clientWidth: s } = t.experimental.element$.value || {};
    if (!(r && s)) return {
        videoContentHeight: 0,
        videoContentWidth: 0
    };
    const o = e / n, a = r / s;
    let c, l;
    return a > o ? (l = s, c = s * o) : a < o ? (l = r / o, c = r) : (l = s, c = r), {
        videoContentWidth: l,
        videoContentHeight: c
    };
}, Ci = 250;
function Ei(i) {
    let t = ()=>{};
    const e = new ResizeObserver((a)=>{
        s(a), t = s.bind(null, a);
    });
    function n(a) {
        const { parentElement: c, player: l } = i();
        if (c && l) {
            const { videoContentWidth: f, videoContentHeight: p } = bi(c, l);
            c.style.setProperty("--interactive-content-width", `${f}px`), c.style.setProperty("--interactive-content-height", `${p}px`), c.style.setProperty("--interactive-width", `${a[0].contentRect.width}px`), c.style.setProperty("--interactive-height", `${a[0].contentRect.height}px`);
        }
    }
    function r() {
        const { parentElement: a } = i();
        a.removeAttribute("style");
    }
    const s = Xt((a)=>{
        const { fns: c = [] } = i();
        n(a);
        for (const l of c)l();
    }, Ci);
    function o() {
        t = void 0, e.disconnect(), r();
    }
    return {
        resizeObserver: e,
        calc: ()=>{
            t();
        },
        release: o
    };
}
class wi {
    constructor(){
        this.map = {};
    }
    push(t, e) {
        t in this.map ? this.map[t].push(e) : this.map[t] = [
            e
        ];
    }
    get(t) {
        const e = this.map[t];
        return e ? e.slice() : null;
    }
    getAll() {
        const t = [];
        for(const e in this.map)t.push(...this.map[e]);
        return t;
    }
    remove(t, e) {
        t in this.map && (this.map[t] = this.map[t].filter((n)=>n !== e), this.map[t].length === 0 && delete this.map[t]);
    }
    clear() {
        this.map = {};
    }
    size() {
        return Object.keys(this.map).length;
    }
    keys() {
        return Object.keys(this.map);
    }
}
const Ii = (i)=>Math.floor(Math.random() * i), Si = (i)=>{
    let t = i.length, e = 1 / 0, n = null;
    for(; t--;)i[t].weight < e && (e = i[t].weight, n = i[t]);
    return n;
}, Ti = (i)=>{
    let t = i.length, e = -1 / 0, n = null;
    for(; t--;)i[t].weight > e && (e = i[t].weight, n = i[t]);
    return n;
}, xi = (i)=>{
    const t = i.length, e = Ii(t);
    return i[e];
}, Vt = 1, Ri = (i)=>{
    let t = 0;
    for(let n = 0; n < i.length; ++n)t += i[n].weight ?? Vt;
    const e = Math.random() * t;
    t = 0;
    for(let n = 0; n < i.length - 1; ++n)if (t += i[n].weight ?? Vt, t >= e) return i[n];
    return i[i.length - 1];
}, $t = Object.freeze({
    shouldOpenNow: !0,
    isDetachContainer: !0
}), rt = (i, t = !1)=>({
        ...i,
        args: t ? {
            ...i.args,
            ...$t
        } : {
            ...$t,
            ...i.args
        }
    }), Pt = ({ globalEventEmitter: i, player: t, interactiveEvents: e, removeControllers: n })=>{
    const r = {
        isExpect: !1
    }, s = ()=>{
        r.isExpect && (r.isExpect = !1);
    }, o = ({ action: u, controlType: h, controlId: d, containerId: g, branches: m = [], onEvent: x, isEOV: w = ()=>!1, isDisabled: R = ()=>!1 })=>{
        const v = rt(u, w()), O = {
            timestamp: 1 / 0,
            priority: "control",
            initiator: d,
            actionType: v.type
        }, j = R(), A = i.emit.bind(i, y.interactives, {
            subjectId: d,
            subjectType: h,
            subjectName: "control",
            type: j ? T.actionChoiceCanceled : T.actionChoice,
            actionType: u.type,
            payload: {
                containerId: g,
                ...v.args
            }
        });
        if (j) {
            A();
            return;
        }
        switch(v.type.trim().toLowerCase()){
            case I.setNextBranch.trim().toLowerCase():
                {
                    const k = m.find(($)=>$.id === v.args.branchId);
                    if (!k) return;
                    x(v.args.isDetachContainer, b.bind(null, {
                        subjectId: d,
                        subjectName: "control"
                    })), A(), v.args.shouldOpenNow ? L({
                        subjectId: d,
                        subjectName: "control",
                        subjectType: h,
                        action: v,
                        payload: {
                            chapterId: k.chapterId,
                            autoSelect: !1
                        }
                    }) : (e.add({
                        ...O,
                        action: L.bind(null, {
                            subjectId: d,
                            subjectName: "control",
                            subjectType: h,
                            action: v,
                            payload: {
                                chapterId: k.chapterId,
                                autoSelect: !1
                            }
                        })
                    }), n?.());
                    return;
                }
            case I.continuePlayback.trim().toLowerCase():
                x(v.args.isDetachContainer, b.bind(null, {
                    subjectId: d,
                    subjectName: "control"
                })), A(), v.args.shouldOpenNow ? C({
                    subjectId: d,
                    subjectName: "control",
                    subjectType: h,
                    action: u
                }) : e.add({
                    ...O,
                    action: C.bind(null, {
                        subjectId: d,
                        subjectName: "control",
                        subjectType: h,
                        action: u
                    })
                });
                return;
            case I.openURI.trim().toLowerCase():
                x(v.args.isDetachContainer, b.bind(null, {
                    subjectId: d,
                    subjectName: "control"
                })), A(), v.args.shouldOpenNow ? M({
                    subjectId: d,
                    subjectName: "control",
                    subjectType: h,
                    action: v,
                    payload: {
                        URI: u.args.uri
                    }
                }) : (e.add({
                    ...O,
                    action: M.bind(null, {
                        subjectId: d,
                        subjectName: "control",
                        subjectType: h,
                        action: v,
                        payload: {
                            URI: u.args.uri
                        }
                    })
                }), n?.());
                return;
            default:
                console.error("Unexpected control event"), i.emit(y.errors, new E(E.Severity.RECOVERABLE, E.Category.INTERACTIVES, {
                    message: "Unexpected control event"
                }));
                return;
        }
    }, a = ({ action: u, container: { id: h, endTime: d }, branches: g = [], isEOV: m = !1, autoSelected: x = !1 })=>{
        const w = rt(u, m), R = {
            timestamp: !w.args.shouldOpenNow || m ? 1 / 0 : d,
            priority: "container",
            initiator: h,
            actionType: w.type
        }, v = i.emit.bind(i, y.interactives, {
            subjectId: h,
            subjectName: "container",
            type: T.actionChoice,
            actionType: w.type,
            payload: w.args
        });
        switch(w.type.trim().toLowerCase()){
            case I.setNextBranch.trim().toLowerCase():
                {
                    const O = g.find((j)=>j.id === w.args.branchId);
                    if (!O) return;
                    v(), e.add({
                        ...R,
                        action: L.bind(null, {
                            subjectId: h,
                            subjectName: "container",
                            action: w,
                            payload: {
                                chapterId: O.chapterId,
                                autoSelect: x
                            }
                        })
                    }), n?.();
                    return;
                }
            case I.setMaxWeightBranch.trim().toLowerCase():
                return;
            case I.setMinWeightBranch.trim().toLowerCase():
                return;
            case I.setRandomBranch.trim().toLowerCase():
                return;
            case I.setWeightlessRandomBranch.trim().toLowerCase():
                return;
            case I.continuePlayback.trim().toLowerCase():
                v(), e.add({
                    ...R,
                    action: C.bind(null, {
                        subjectId: h,
                        subjectName: "container",
                        action: w
                    })
                });
                return;
            case I.openURI.trim().toLowerCase():
                v(), e.add({
                    ...R,
                    action: M.bind(null, {
                        subjectId: h,
                        subjectName: "container",
                        action: w,
                        payload: {
                            URI: u.args.uri
                        }
                    })
                }), n?.();
                return;
            default:
                console.error("Unexpected container event"), i.emit(y.errors, new E(E.Severity.RECOVERABLE, E.Category.INTERACTIVES, {
                    message: "Unexpected container event"
                }));
                return;
        }
    };
    function c({ container: u, branches: h, isEOV: d = !1 }) {
        const g = Ot(u.events);
        if (g) {
            const m = rt(g.action, d);
            i.emit(y.interactives, {
                subjectId: u.id,
                subjectName: "container",
                type: T.actionChoice,
                actionType: m.type,
                payload: m.args
            }), e.add({
                timestamp: d ? 1 / 0 : u.endTime,
                priority: "container",
                initiator: u.id,
                actionType: I.expect,
                action: p.bind(null, {
                    subjectId: u.id,
                    subjectName: "container"
                })
            }), r.isExpect = !0;
        } else for (const m of u.events)a({
            action: m.action,
            container: u,
            branches: h,
            isEOV: d
        });
    }
    const l = ({ chapterId: u, action: h, branches: d = [] })=>{
        const g = i.emit.bind(i, y.interactives, {
            subjectId: u,
            subjectName: "chapter",
            type: T.actionChoice,
            actionType: h.type,
            payload: h.args
        });
        switch(h.type.trim().toLowerCase()){
            case I.setNextBranch.trim().toLowerCase():
                {
                    const m = d.find((x)=>x.id === h.args.branchId);
                    return m?.chapterId ? (g(), L.bind(null, {
                        subjectId: u,
                        subjectName: "chapter",
                        action: h,
                        payload: {
                            chapterId: m.chapterId,
                            autoSelect: !0
                        }
                    })) : void 0;
                }
            case I.setWeightlessRandomBranch.trim().toLowerCase():
                {
                    const m = xi(d);
                    return m?.chapterId ? (g(), L.bind(null, {
                        subjectId: u,
                        subjectName: "chapter",
                        action: h,
                        payload: {
                            chapterId: m.chapterId,
                            autoSelect: !0
                        }
                    })) : void 0;
                }
            case I.setRandomBranch.trim().toLowerCase():
                {
                    const m = Ri(d);
                    return m?.chapterId ? (g(), L.bind(null, {
                        subjectId: u,
                        subjectName: "chapter",
                        action: h,
                        payload: {
                            chapterId: m.chapterId,
                            autoSelect: !0
                        }
                    })) : void 0;
                }
            case I.setMaxWeightBranch.trim().toLowerCase():
                {
                    const m = Ti(d);
                    return m?.chapterId ? (g(), L.bind(null, {
                        subjectId: u,
                        subjectName: "chapter",
                        action: h,
                        payload: {
                            chapterId: m.chapterId,
                            autoSelect: !0
                        }
                    })) : void 0;
                }
            case I.setMinWeightBranch.trim().toLowerCase():
                {
                    const m = Si(d);
                    return m?.chapterId ? (g(), L.bind(null, {
                        subjectId: u,
                        subjectName: "chapter",
                        action: h,
                        payload: {
                            chapterId: m.chapterId,
                            autoSelect: !0
                        }
                    })) : void 0;
                }
            case I.continuePlayback.trim().toLowerCase():
                return g(), C.bind(null, {
                    subjectId: u,
                    subjectName: "chapter",
                    action: h
                });
            case I.openURI.trim().toLowerCase():
                return g(), M.bind(null, {
                    subjectId: u,
                    subjectName: "chapter",
                    action: h,
                    payload: {
                        URI: h.args.uri
                    }
                });
            default:
                console.error("Unexpected chapter event"), i.emit(y.errors, new E(E.Severity.RECOVERABLE, E.Category.INTERACTIVES, {
                    message: "Unexpected chapter event"
                }));
                return;
        }
    };
    function f(u) {
        const h = Ot(u.events);
        if (h) {
            if (it(u)) return;
            i.emit(y.interactives, {
                subjectId: u.id,
                subjectName: "chapter",
                type: T.actionChoice,
                actionType: h.action.type,
                payload: h.action.args
            }), e.add({
                timestamp: 1 / 0,
                priority: "chapter",
                initiator: u.id,
                actionType: I.expect,
                action: p.bind(null, {
                    subjectId: u.id,
                    subjectName: "chapter"
                })
            });
        } else u.events.forEach((d)=>{
            const g = l({
                chapterId: u.id,
                action: d.action,
                branches: u.branches
            });
            g && e.add({
                timestamp: 1 / 0,
                priority: "chapter",
                initiator: u.id,
                actionType: d.action.type,
                action: g
            });
        });
    }
    const p = ({ subjectId: u, subjectName: h, action: d })=>{
        t.pause(), i.emit(y.interactives, {
            subjectId: u,
            subjectName: h,
            type: T.actionExecution,
            actionType: d?.type ?? I.expect
        });
    }, b = ({ subjectId: u, subjectName: h })=>{
        t.info.isEnded$.getValue() ? e.execEndOfVideo() : t.play(), i.emit(y.interactives, {
            subjectId: u,
            subjectName: h,
            type: T.actionExecution,
            actionType: "after-expect"
        });
    }, C = ({ subjectId: u, subjectName: h, subjectType: d, action: g })=>{
        i.emit(y.interactives, {
            subjectId: u,
            subjectName: h,
            subjectType: d,
            type: T.actionExecution,
            actionType: g.type
        });
    }, L = ({ subjectId: u, subjectName: h, subjectType: d, action: g, payload: m })=>{
        m.behaviour = "change-chapter", i.emit(y.interactives, {
            subjectId: u,
            subjectName: h,
            subjectType: d,
            type: T.actionExecution,
            actionType: g.type,
            payload: m
        });
    }, M = ({ subjectId: u, subjectName: h, subjectType: d, action: g, payload: m })=>{
        if (!m.URI) return;
        const x = window.open(m.URI, "_blank", "noopener,noreferrer");
        x && (x.opener = null), i.emit(y.interactives, {
            subjectId: u,
            subjectName: h,
            subjectType: d,
            type: T.actionExecution,
            actionType: g.type
        });
    };
    return {
        onControlEvent: o,
        onContainerEvent: a,
        onChapterEvent: l,
        onExpectEvent: p,
        expectEventHandler: b,
        setManifestChapterEvents: f,
        setManifestContainerEvents: c,
        stopExpect: s,
        state: r
    };
}, Mt = (i, t)=>{
    const e = {};
    return i.map((n)=>{
        if (!e[n]) {
            const r = t.chapters.find((o)=>o.id === n);
            if (!r) return null;
            const s = t.media.videos.find((o)=>r.videoId === o.id);
            if (!s) return null;
            e[n] = ae(s);
        }
        return e[n];
    }).filter(Boolean);
}, Ai = (i)=>{
    for (const t of i.variants)if (Li(t) && "payload" in t) return t.payload.id;
}, Li = (i)=>i.type === "custom" && "payload" in i && i.payload.type === "vk", ae = (i)=>{
    const t = Ai(i);
    if (!t) return null;
    const e = t.split("_").pop();
    return e ? parseInt(e, 10) : null;
}, Oi = (i, t)=>{
    for (const e of i.media.videos)if (t === ae(e)) {
        for (const n of i.chapters)if (n.videoId === e.id) return n.id;
        return;
    }
}, ji = (i, t)=>i.reduce((e, n)=>{
        const r = Oi(t, n);
        return r ? [
            ...e,
            r
        ] : e;
    }, []), Ni = 100;
class _i {
    state = {
        history$: new (0, _esnextEsmJs.ValueSubject)([]),
        hasPrevChapter$: new (0, _esnextEsmJs.ValueSubject)(!1),
        prevChapter$: new (0, _esnextEsmJs.ValueSubject)(null),
        isInitialChapter$: new (0, _esnextEsmJs.ValueSubject)(!1)
    };
    #s = null;
    #a;
    #h = !1;
    #i = null;
    #d = null;
    #n = null;
    #r = null;
    #o = null;
    #t = new (0, _esnextEsmJs.Subscription);
    constructor({ globalEventEmitter: t, videoId: e, interactiveController: n, historyApi: r, historyParams: s }){
        this.#n = e, this.#o = t, this.#r = n, this.#s = r, this.#a = {
            maxLength: s?.maxLength || Ni
        }, this.state?.history$ && this.#t && this.#t?.add(this.state?.history$.subscribe((o)=>{
            this.state?.prevChapter$.next(o.at(-2) || null), this.state?.hasPrevChapter$.next(o.length > 1), this.state?.isInitialChapter$.next(this.getInitialChapterId() === this.#i?.metadata?.initChapterId);
        }));
    }
    async setManifest(t) {
        !this.#r || !this.#o || (this.#i = t, await this.getProjectHistory(), await this.#r.setChapter({
            chapterId: this.getInitialChapterId(),
            pushToHistory: !1
        }), this.#h || (this.#h = !0, this.#o.emit(y.historyInited, {
            initChapterId: this.getInitialChapterId()
        })));
    }
    get inited() {
        return this.#h;
    }
    async updateHistory(t, e = !0) {
        if (!this.#i) return;
        const n = this.#i, r = t.length - this.#a.maxLength, s = r > 0 ? t.slice(r) : t, o = Mt(s, n);
        if (this.#d = o, this?.state?.history$.next(s), !(!e || !this.#s || !this.#n)) try {
            await this.#s.save(this.#n, o);
        } catch  {
            this.#o?.emit(y.errors, new E(E.Severity.RECOVERABLE, E.Category.HISTORY, "Unable to save interactive history"));
        }
    }
    async goBack() {
        if (!this.state || !this.#r) return this.#o?.emit(y.errors, new E(E.Severity.RECOVERABLE, E.Category.HISTORY, "Cannot go back because HistoryController has not been initialized"));
        const t = this.state.history$.getValue().slice(0, -1), e = t.pop();
        this.state.history$.next(t), await this.#r.setChapter({
            chapterId: e
        });
    }
    async getProjectHistory() {
        if (!this.#i || !this.#n) return;
        const t = this.#i;
        let e = [
            this.getInitialVideoId()
        ];
        if (this.#s) try {
            const r = await this.#s.get(this.#n);
            r.length && (e = r);
        } catch  {
            this.#o?.emit(y.errors, new E(E.Severity.RECOVERABLE, E.Category.HISTORY, "Error while trying to fetch data"));
        }
        const n = ji(e, t);
        this?.state?.history$.next(n);
    }
    getInitialChapterId() {
        return this.state?.history$.getValue()?.at(-1) || this.#i?.metadata.initChapterId;
    }
    getInitialVideoId() {
        if (this.#i) {
            const t = this.getInitialChapterId();
            return Mt([
                t
            ], this.#i).pop();
        }
        return null;
    }
    destroy() {
        this.state = null, this.#n = null, this.#s = null, this.#r = null, this.#t?.unsubscribe(), this.#t = null, this.#h = !1, this.#o?.emit(y.historyDestroyed), this.#o = null;
    }
}
class U {
    constructor(t, e, n, r){
        this.target = t, this.type = e, this.listener = n, this.options = U.#s(t, r), this.target.addEventListener(e, n, this.options);
    }
    unlisten() {
        this.target.removeEventListener(this.type, this.listener, this.options), this.target = null, this.listener = null, this.options = !1;
    }
    static #s(t, e) {
        if (e === void 0) return !1;
        if (typeof e == "boolean") return e;
        {
            const n = new Set([
                "passive",
                "capture"
            ]), r = Object.keys(e).filter((o)=>!n.has(o));
            return r.length === 0 && console.warn("Unsupported flag(s) to addEventListener: " + r.join(",")), U.#h(t) ? e : e.capture || !1;
        }
    }
    static #a = void 0;
    static #h(t) {
        let e = U.#a;
        if (e === void 0) {
            e = !1;
            try {
                const n = {}, r = {
                    get: ()=>(e = !0, !1)
                };
                Object.defineProperty(n, "passive", r), Object.defineProperty(n, "capture", r);
                const s = ()=>{};
                t.addEventListener("test", s, n), t.removeEventListener("test", s, n);
            } catch  {
                e = !1;
            }
            U.#a = e;
        }
        return e || !1;
    }
}
class Vi {
    constructor(){
        this.bindingMap = new wi;
    }
    release() {
        this.removeAll(), this.bindingMap = null;
    }
    listen(t, e, n, r) {
        if (!this.bindingMap) return;
        const s = new U(t, e, n, r);
        this.bindingMap.push(e, s);
    }
    listenOnce(t, e, n, r) {
        const s = (o)=>{
            this.unlisten(t, e, s), n(o);
        };
        this.listen(t, e, s, r);
    }
    unlisten(t, e, n) {
        if (!this.bindingMap) return;
        const r = this.bindingMap.get(e) || [];
        for (const s of r)s.target === t && (n === s.listener || !n) && (s.unlisten(), this.bindingMap.remove(e, s));
    }
    removeAll() {
        if (!this.bindingMap) return;
        const t = this.bindingMap.getAll();
        for (const e of t)e.unlisten();
        this.bindingMap.clear();
    }
}
class $i {
    rootElement;
    canvasImgSrc;
    _prevSizeId = 0;
    constructor(){
        this.rootElement = document.createElement("canvas");
    }
    clear() {
        this.rootElement.getContext("2d")?.clearRect(0, 0, this.rootElement.width, this.rootElement.height);
    }
    isImageDrawn() {
        const t = this.rootElement.getContext("2d")?.getImageData(0, 0, this.rootElement.width, this.rootElement.height);
        if (!t) return !1;
        const e = t.data, n = e.length;
        for(let r = 3; r < n; r += 40)if (e[r] !== 0) return !0;
        return !1;
    }
    destroy() {
        this.rootElement.remove();
    }
    show() {
        this.rootElement.style.visibility = "visible";
    }
    hide() {
        this.rootElement.style.visibility = "hidden";
    }
    setCanvasImageSource(t) {
        this.canvasImgSrc = t;
    }
    draw() {
        this.canvasImgSrc && this.rootElement.getContext("2d")?.drawImage(this.canvasImgSrc, 0, 0, this.rootElement.width, this.rootElement.height);
    }
    async updateCanvasDimensions(t, e = !1) {
        const n = t.width + t.height;
        if (this._prevSizeId === n) return;
        let r;
        e && (r = await this.save()), this.rootElement.width = t.width, this.rootElement.height = t.height, e && r && this.restore(r), this._prevSizeId = n;
    }
    async save() {
        const t = this.rootElement.toDataURL("image/jpeg", 1), e = new Image;
        return e.crossOrigin = "anonymous", e.src = t, await e.decode(), e;
    }
    restore(t) {
        this.rootElement && this.rootElement.getContext("2d")?.drawImage(t, 0, 0, this.rootElement.width, this.rootElement.height);
    }
}
class Pi {
    lastFrameCanvas;
    endOffsetMs;
    currentChapter;
    currentVideoDurationMs = 1 / 0;
    rootElement;
    _containerTimeFrameShouldReceived = !1;
    _endTimeFrameReceived = !1;
    _shouldCallSkip = !1;
    _callbacks;
    constructor({ parentElement: t, endOffsetMs: e = 250, onError: n }){
        this.rootElement = document.createElement("div"), this.rootElement.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: var(--interactive-width);
      height: var(--interactive-height);
      background-color: var(--black);
      visibility: hidden;
    `, this.lastFrameCanvas = new $i, this.endOffsetMs = e, this._callbacks = {
            onError: n
        }, this.lastFrameCanvas.rootElement.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `, this.rootElement.prepend(this.lastFrameCanvas.rootElement), t.prepend(this.rootElement);
    }
    destroy() {
        this.hide(), this.reset(), this._callbacks = void 0, this.lastFrameCanvas.destroy(), this.rootElement.remove();
    }
    setVideoDuration(t) {
        this.currentVideoDurationMs = t;
    }
    setVideoElement(t) {
        this.lastFrameCanvas.setCanvasImageSource(t);
    }
    setCurrentChapter(t) {
        this.currentChapter = t;
    }
    show() {
        this.rootElement.style.visibility = "visible";
    }
    hide() {
        this.rootElement.style.visibility = "hidden";
    }
    async updateCanvasDimensions(t = !1) {
        this._containerTimeFrameShouldReceived || this._endTimeFrameReceived || (t = !1);
        const e = getComputedStyle(this.rootElement), n = {
            width: parseInt(e.getPropertyValue("--interactive-content-width"), 10),
            height: parseInt(e.getPropertyValue("--interactive-content-height"), 10)
        };
        try {
            this.lastFrameCanvas.updateCanvasDimensions(n, t);
        } catch (r) {
            this._onError(r);
        }
    }
    draw() {
        (this._containerTimeFrameShouldReceived || !this._containerTimeFrameShouldReceived && !this._endTimeFrameReceived) && this.lastFrameCanvas.draw();
    }
    isChapterEndTime(t) {
        return this.currentVideoDurationMs && t >= this.currentVideoDurationMs - this.endOffsetMs;
    }
    isContainerTime(t) {
        if (this.currentChapter) return this.currentChapter.containers.some((e)=>e.controls?.length && t >= (e.startTime ?? 0) && t <= Math.min(e.endTime ?? 1 / 0, this.currentVideoDurationMs - this.endOffsetMs));
    }
    onEachTick = (t)=>{
        const e = t ?? this.lastFrameCanvas.canvasImgSrc.currentTime * 1e3, n = this.isChapterEndTime(e);
        if (this.isContainerTime(e)) this._endTimeFrameReceived = !1, this._containerTimeFrameShouldReceived = !0, this._shouldCallSkip = !0;
        else if (n) this._containerTimeFrameShouldReceived = !1, this._shouldCallSkip = !1, this._endTimeFrameReceived || (this.draw(), this._endTimeFrameReceived = !0, this.show());
        else {
            if (this._shouldCallSkip) {
                this._shouldCallSkip = !1;
                return;
            }
            this.reset();
        }
    };
    onSeek = ()=>{
        this.onEachTick(), !this._containerTimeFrameShouldReceived && !this._endTimeFrameReceived && (this.hide(), this.lastFrameCanvas.clear());
    };
    reset() {
        this._endTimeFrameReceived = !1, this._containerTimeFrameShouldReceived = !1, this._shouldCallSkip = !1;
    }
    _onError(t) {
        this._callbacks?.onError?.(t);
    }
}
function Mi(i = 0) {
    return new Promise((t)=>{
        setTimeout(()=>{
            t(0);
        }, i);
    });
}
const ki = Object.freeze({
    parentElement: null,
    fullscreenTargetElement: null,
    lang: "ru",
    loaders: {},
    graph: !1,
    historyApi: null,
    historyParams: null,
    projectInfo: {},
    initSeamless: !1,
    lastFrame: !1,
    permanentTextControls: !0
}), P = Object.freeze({
    created: 0,
    initiated: 1,
    ready: 2,
    destroyed: 3
});
function Bi() {
    const i = document.createElement("div");
    return i.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
  `, i;
}
class Ui {
    #s = null;
    #a = null;
    #h = null;
    #i = null;
    #d = null;
    #n = null;
    #r = null;
    #o = null;
    #t = null;
    #u = new (0, _esnextEsmJs.ValueSubject)(!1);
    #m = new Set;
    #l = null;
    #y = null;
    #c = null;
    #e = null;
    state = {
        prevChapter$: new (0, _esnextEsmJs.ValueSubject)(null),
        isInitialChapter$: new (0, _esnextEsmJs.ValueSubject)(!1),
        isEndChapter$: new (0, _esnextEsmJs.ValueSubject)(!1),
        isInteractiveExpectation$: new (0, _esnextEsmJs.ValueSubject)(!1),
        calledByInteractive$: new (0, _esnextEsmJs.ValueSubject)(!1),
        lastChapterChangeWasInitiatedByInteractive$: new (0, _esnextEsmJs.ValueSubject)(!1),
        disabledControls$: new (0, _esnextEsmJs.ValueSubject)(!1)
    };
    constructor(t){
        this.options = {
            ...ki,
            ...t
        }, this.#a = [], this.factories = new Map([
            [
                "choice",
                Qt
            ]
        ]), this.rootElement = Bi(), this.options.parentElement.append(this.rootElement), this.#e = new ee, this.#d = new (0, _esnextEsmJs.Subscription), this.#h = new Vi, this.#i = new _i({
            interactiveController: this,
            globalEventEmitter: this.#e,
            videoId: this.options.projectInfo?.videoId,
            historyApi: this.options.historyApi,
            params: this.options.historyParams
        }), this.options.lastFrame && (this.#c = new Pi({
            parentElement: this.options.parentElement,
            interactivesRootElement: this.rootElement,
            onError: (e)=>this.#e.emit(y.errors, new E(E.Severity.RECOVERABLE, E.Category.SEAMLESS, e))
        })), this.#h.listen(this.rootElement, "mousedown", (e)=>e.stopPropagation()), this.#h.listen(this.rootElement, "mouseup", (e)=>e.stopPropagation()), this.#t = new oi(this.options.loaders, (e)=>this.#e.emit(y.errors, new E(E.Severity.RECOVERABLE, E.Category.MANIFEST, e))), this.#n = _t(this.options.player), this.#r = new We, this.#o = Pt({
            player: this.options.player,
            interactiveEvents: this.#n,
            globalEventEmitter: this.#e,
            removeControllers: this.#p
        }), this.#s = Ei(()=>({
                player: this.options?.player,
                parentElement: this.options.parentElement,
                fns: this.options.lastFrame ? [
                    ()=>{
                        this.#c.updateCanvasDimensions(!0);
                    }
                ] : []
            })), this.options.graph && (this.#l = new Le({
            root: this.options.parentElement,
            lang: this.options.lang,
            onOpenPreviewClick: (e)=>{
                this.setChapter({
                    chapterId: e
                }), this.#e.emit(y.graph, {
                    type: jt.watchAgainClicked,
                    chapterId: e
                });
            },
            onError: (e)=>this.#e.emit(y.errors, new E(E.Severity.RECOVERABLE, E.Category.LOADERS, {
                    message: e
                }))
        })), this.#C(this.options.initSeamless), this.isFirstChapterFetched = !1, this.appState = P.created;
    }
    emitPlayerChanged = (t)=>{
        setTimeout(()=>{
            this.#e.emit(y.playerChanged, t);
        });
    };
    #C(t = !1) {
        this.#e.on(y.historyInited, async ({ initChapterId: e, videosInfo: n = [] })=>{
            t && await this.#E({
                initialChapter: e,
                videosInfo: n
            });
        }), this.#e.on(y.interactives, async (e)=>{
            if (e.type === T.actionExecution) {
                if (this.state.calledByInteractive$.next(!0), this.state.lastChapterChangeWasInitiatedByInteractive$.next(!0), e.payload?.behaviour === "change-chapter") {
                    const { chapterId: r } = e.payload;
                    this.setChapter({
                        chapterId: r
                    });
                }
                if (e.payload?.behaviour === "change-manifest") {
                    const { manifestURL: r } = e.payload;
                    this.setManifest(r);
                }
                const n = e.type === "action-execution";
                n && e.actionType === "expect" ? this.state.isInteractiveExpectation$.next(!0) : n && e.actionType === "after-expect" && this.state.isInteractiveExpectation$.next(!1);
            }
        }), this.#e.on(y.manifestChanged, ()=>{
            this.state.calledByInteractive$.next(!1), this.state.lastChapterChangeWasInitiatedByInteractive$.next(!1);
        });
    }
    async #E({ source: t, videosInfo: e = [] }) {
        this.#y = di(this);
        const n = document.createElement("div");
        this.#y.on(K.activePlayerChanged, this.emitPlayerChanged);
        const { player: r, config: s } = await this.#y.init({
            source: t,
            initialChapter: this.#i.getInitialChapterId(),
            container: n
        });
        return this.updateGraphVideosInfo(e), {
            player: r,
            config: s
        };
    }
    getStatEvents() {
        return {
            click$: new (0, _esnextEsmJs.Observable)((t)=>{
                this.#e.on(y.graph, ({ type: e, visibility: n })=>{
                    e === "visibility" && t.next(n ? F.OPEN_GRAPH : F.CLOSE_GRAPH), e === "watchAgainClicked" && t.next(F.WATCH_AGAIN);
                }), this.#e.on(y.interactives, ({ type: e, subjectName: n, subjectType: r })=>{
                    e !== "action-choice" || n !== "control" || (r === "Button" && t.next(F.GO_NEXT_BUTTON), r === "Area" && t.next(F.GO_NEXT_AREA));
                });
            }),
            nextMovie$: new (0, _esnextEsmJs.Observable)((t)=>{
                this.#e.on(y.playerChanged, ({ config: e })=>{
                    e?.unitedVideoId && t.next(e.unitedVideoId);
                });
            })
        };
    }
    setPlayer(t) {
        this.#g(), this.options.player = t, H.setPlayer(this.options.player), this.#n ? this.#n.setPlayer(this.options.player) : this.#n = _t(this.options.player), this.#o = Pt({
            player: this.options.player,
            interactiveEvents: this.#n,
            globalEventEmitter: this.#e,
            removeControllers: ()=>this.#p(!1)
        }), this.appState === P.initiated && (this.#v(), this.#f(this.#t.chapter));
    }
    async setManifest(t) {
        this.#g(), this.isFirstChapterFetched = !1;
        const e = await this.#t.setManifest(t);
        return this.#l && await this.#l.handleManifestChange(e.manifest), await this.#i.setManifest(e.manifest), this.#e.emit(y.manifestChanged, {
            manifest: e.manifest
        }), this.#f(this.#t.chapter), e.manifest;
    }
    setVisitedChapters(t) {
        Array.isArray(t) && this.#l?.setVisitedChapters(t);
    }
    updateGraphVideosInfo(t) {
        Array.isArray(t) && this.#l?.updateVideosInfo(t);
    }
    async setChapter({ chapterId: t, pushToHistory: e = !0 } = {}) {
        this.#g(), this.#c && this.isFirstChapterFetched && (this.#c.draw(), this.#c.show()), (0, _esnextEsmJs.getCurrentBrowser)().browser === (0, _esnextEsmJs.CurrentClientBrowser).Safari && await Mi(35);
        const r = await (t ? this.#t.setNext(t) : this.#t.setInitial()), { chapter: s, media: o, graph: a } = r;
        return e && this.#x(s.id), this.state.isInitialChapter$.next(this.#t.isInitialChapter()), this.state.isEndChapter$.next(this.#t.isEndChapter()), this.#l && this.#l.handleChapterChange(a), this.#c?.setCurrentChapter(this.getCurrentChapter().chapter), this.#e.emit(y.chapterChanged, {
            chapter: s,
            media: o,
            graph: a
        }), this.#f(this.#t.chapter), this.#m = new Set, this.isFirstChapterFetched = !0, {
            chapter: s,
            media: o,
            graph: a
        };
    }
    toggleGraphView(t = !0) {
        this.#l && (t ? (this.#l.show(), this.#u.next(!1)) : (this.#l.hide(), this.#b()), this.#e.emit(y.graph, {
            type: jt.visibility,
            visibility: t
        }));
    }
    init() {
        this.#t.chapter && this.options.parentElement && this.options.player && this.options.fullscreenTargetElement && this.appState === P.created && (this.#s.resizeObserver.observe(this.options.fullscreenTargetElement), this.#v(), this.appState = P.initiated, this.#f(this.#t.chapter));
    }
    #g() {
        this.appState === P.ready && (this.#p(), this.#a = [], this.#r.release(), this.#n?.release(), this.appState = P.initiated, this.#u.next(!1));
    }
    #R = ()=>{
        this.#r.fns.forEach((n)=>n());
        const t = this.options.player.info.position$.getValue() * 1e3, e = (this.#t.chapter.containers || []).filter((n)=>n.startTime >= Math.floor(t));
        for (const n of e){
            this.#n.remove({
                timestamp: 1 / 0,
                priority: "container",
                initiator: n.id
            });
            for (const r of n.controls)this.#n.remove({
                timestamp: 1 / 0,
                priority: "control",
                initiator: r.id
            });
            this.#a.find((r)=>r.container.container.id === n.id).reset();
        }
    };
    #w = ()=>{
        this.#s.calc(), this.#r.requestAnimation();
    };
    #I(t) {
        (!this.#l || this.#l.isHidden) && this.#b();
        const e = t * 1e3, r = this.getInteractiveRanges().findLast(({ range: s })=>e >= s[1]);
        if (r) {
            const s = r.range.join("-");
            this.#m.has(s) || (this.#m.add(s), this.#e.emit(y.interactives, {
                type: T.rangeEnded,
                payload: r,
                visibility: !0
            }));
        }
    }
    deadEndCheck() {
        return !(this.#n?.getPreparedToExecActions() ?? []).some((n)=>n.actionType === I.setNextBranch);
    }
    allControlsAreRemoved() {
        return !this.#a.some((e)=>!e.container.isRemoved);
    }
    #v() {
        this.#d.unsubscribe(), this.#d.add(this.options.player.events.started$.pipe((0, _esnextEsmJs.once)()).subscribe(this.#w)).add(this.options.player.events.playing$.subscribe(this.#r.requestAnimation)).add(this.options.player.events.willPause$.subscribe(this.#r.cancelAnimation)).add(this.options.player.info.position$.subscribe(this.#I.bind(this))).add(this.#t.prevChapter$.subscribe((t)=>this.state.prevChapter$.next(t))), this.options.lastFrame && this.#d.add(this.options.player.info.duration$.subscribe((t)=>{
            this.#c.setVideoDuration(t * 1e3);
        })).add(this.options.player.experimental.element$.subscribe((t)=>{
            t && this.#c.setVideoElement(t);
        })).add(this.options.player.events.firstFrame$.subscribe(()=>{
            this.#c.reset(), setTimeout(()=>{
                this.#c.hide(), this.#c.lastFrameCanvas.clear();
            }, 50);
        })).add(this.options.player.events.seeked$.subscribe(this.#c.onSeek));
    }
    #p = (t = !0)=>{
        this.#a.forEach((e)=>{
            !t && e.isPermanentText || (this.#r.removeFn(e.whilePlaying), e.destroy());
        });
    };
    #f(t) {
        this.#t.chapter && this.appState === P.initiated && (this.#o.setManifestChapterEvents(t), this.#a = this.#S(t), this.#n.containersEventsCallState.setData(t.containers), H.setContainers(this.#a.map((e)=>e.container.container).filter((e)=>!re(e.controls))), this.options.lastFrame && this.#r.addFn(()=>{
            this.#c.onEachTick(this.options.player.info.position$.getValue() * 1e3);
        }, !0), this.appState = P.ready);
    }
    #S(t) {
        return t?.containers?.reduce((e, n)=>{
            const r = n.type.trim().toLowerCase(), s = this.factories.get(r);
            if (s) {
                const o = new fi({
                    player: this.options.player,
                    container: s(n, this.rootElement),
                    branches: this.#t.chapter.branches,
                    selectBranches: this.#o,
                    interactiveEvents: this.#n,
                    globalEventEmitter: this.#e,
                    ignoreContainerEvent: ()=>ai(n, this.#a),
                    permanentTextControls: this.options.permanentTextControls,
                    disabledControls$: this.state.disabledControls$
                });
                return this.#r.addFn(o.whilePlaying, !0), [
                    ...e,
                    o
                ];
            }
            return [
                ...e
            ];
        }, []) ?? [];
    }
    #b() {
        if (this.state.isInteractiveExpectation$.getValue()) {
            this.#u.next(!1);
            return;
        }
        const e = this.#u.getValue(), n = !!H.getNextInteractiveTime();
        (n && !e || !n && e) && this.#u.next(!e);
    }
    #T() {
        this.state.calledByInteractive$.getValue() ? this.state.calledByInteractive$.next(!1) : this.state.lastChapterChangeWasInitiatedByInteractive$.next(!1);
    }
    #x(t) {
        if (this.#T(), !this.#i.inited) return;
        const e = this.state.lastChapterChangeWasInitiatedByInteractive$.getValue(), n = this.state.prevChapter$.getValue(), r = (n && it(n) && ei(n)) ?? !1, s = this.#t.manifest.metadata.initChapterId === t, o = this.#i.state.history$.getValue();
        if (s || r && e) {
            this.#i.updateHistory([
                t
            ]);
            return;
        }
        o.at(-1) !== t && this.#i.updateHistory([
            ...o,
            t
        ]);
    }
    playPrevChapter() {
        this.#i?.goBack();
    }
    setDisabledControls(t) {
        this.state.disabledControls$.next(t);
    }
    isSupport(t = this.#t.manifest) {
        return Jt(t.metadata.version);
    }
    getInitialVideoInfo() {
        return {
            videoId: this.#i.getInitialVideoId(),
            chapterId: this.#i.getInitialChapterId()
        };
    }
    getHistoryState() {
        return this.#i.state;
    }
    getIsSeekable() {
        return this.#u;
    }
    getInteractiveRanges() {
        return ri(this.#t.chapter?.containers);
    }
    getNextInteractiveStartTime(t) {
        return H.getNextInteractiveTime(t);
    }
    getChapterBranches(t) {
        return this.#t.getBranches(t);
    }
    getCurrentChapter() {
        return this.#t.getCurrent();
    }
    getCurrentManifest() {
        return this.#t.manifest;
    }
    addFactory(t, e) {
        this.factories.set(t.trim().toLowerCase(), e);
    }
    removeFactory(t) {
        this.factories.delete(t.trim().toLowerCase());
    }
    on(...t) {
        return this.#e.on(...t), this;
    }
    off(...t) {
        return this.#e.off(...t), this;
    }
    once(...t) {
        return this.#e.once(...t), this;
    }
    destroy() {
        this.#p(), this.#a = void 0, this.state = void 0, this.#l?.destroy(), this.#l = void 0, this.#s.release(), this.#s = void 0, this.#o = void 0, this.#r.release(), this.#r = void 0, this.#n.release(), this.#n = void 0, this.#t.release(), this.#o = void 0, this.#h.release(), this.#h = void 0, this.#d.unsubscribe(), this.#d = void 0, this.#e.reset(), this.#e = void 0, this.#c?.destroy(), this.#c = void 0, this.rootElement.remove(), this.rootElement = void 0, this.#i.destroy(), this.#i = void 0, this.factories = void 0, this.options = void 0, this.isFirstChapterFetched = !1, this.appState = P.destroyed;
    }
}
const Gi = {
    Container: qt,
    createChoiceContainer: Qt,
    createAreaControl: Gt,
    createButtonControl: Wt,
    createRelativeLayout: we,
    getRootEl: Bt,
    classnamesPrefix: _
}, Wi = {
    version: fe
};

},{"@vkontakte/videoplayer-shared/esnext.esm.js":"2RPwF","uuid":"2lPuk","@vkontakte/videoplayer-core/esnext.esm.js":"24ag6","c4c641d41a92bd8c":"hk71O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2lPuk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":false,"./v3.js":false,"./v4.js":"ggQ62","./v5.js":false,"./nil.js":false,"./version.js":false,"./validate.js":false,"./stringify.js":false,"./parse.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ggQ62":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"4E7YW","./rng.js":"aZlRb","./stringify.js":"7wDAx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4E7YW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

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

},{}],"aZlRb":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rng);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return getRandomValues(rnds8);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wDAx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Stringified UUID is invalid");
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"lTJJZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lTJJZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === "string" && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"SRy5W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"SRy5W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hk71O":[function(require,module,exports) {
module.exports = require("31d2b51a88ca150")(require("f1cd3c92aff74b27").getBundleURL("kgOL3") + "movika-graph-editor.f396fcfb.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("fYhV5"));

},{"31d2b51a88ca150":"61B45","f1cd3c92aff74b27":"lgJ39"}]},["t6GTB"], null, "parcelRequireb792")

//# sourceMappingURL=esnext.esm.a3b06bfc.js.map
