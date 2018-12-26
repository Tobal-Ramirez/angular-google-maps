"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LazyMapsAPILoaderConfigLiteral = LazyMapsAPILoaderConfigLiteral;
exports.LazyMapsAPILoader = exports.LAZY_MAPS_API_CONFIG = exports.GoogleMapsScriptProtocol = void 0;

var _core = require("@angular/core");

var _browserGlobals = require("../../utils/browser-globals");

var _mapsApiLoader = require("./maps-api-loader");

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


/** @enum {number} */
var GoogleMapsScriptProtocol = {
  HTTP: 1,
  HTTPS: 2,
  AUTO: 3
};
exports.GoogleMapsScriptProtocol = GoogleMapsScriptProtocol;
GoogleMapsScriptProtocol[GoogleMapsScriptProtocol.HTTP] = 'HTTP';
GoogleMapsScriptProtocol[GoogleMapsScriptProtocol.HTTPS] = 'HTTPS';
GoogleMapsScriptProtocol[GoogleMapsScriptProtocol.AUTO] = 'AUTO';
/** *
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {\@link
 * LazyMapsAPILoaderConfig}.
  @type {?} */

var LAZY_MAPS_API_CONFIG = new _core.InjectionToken('angular-google-maps LAZY_MAPS_API_CONFIG');
/**
 * Configuration for the {\@link LazyMapsAPILoader}.
 * @record
 */

exports.LAZY_MAPS_API_CONFIG = LAZY_MAPS_API_CONFIG;

function LazyMapsAPILoaderConfigLiteral() {}
/**
 * The Google Maps API Key (see:
 * https://developers.google.com/maps/documentation/javascript/get-api-key)
 * @type {?|undefined}
 */


LazyMapsAPILoaderConfigLiteral.prototype.apiKey;
/**
 * The Google Maps client ID (for premium plans).
 * When you have a Google Maps APIs Premium Plan license, you must authenticate
 * your application with either an API key or a client ID.
 * The Google Maps API will fail to load if both a client ID and an API key are included.
 * @type {?|undefined}
 */

LazyMapsAPILoaderConfigLiteral.prototype.clientId;
/**
 * The Google Maps channel name (for premium plans).
 * A channel parameter is an optional parameter that allows you to track usage under your client
 * ID by assigning a distinct channel to each of your applications.
 * @type {?|undefined}
 */

LazyMapsAPILoaderConfigLiteral.prototype.channel;
/**
 * Google Maps API version.
 * @type {?|undefined}
 */

LazyMapsAPILoaderConfigLiteral.prototype.apiVersion;
/**
 * Host and Path used for the `<script>` tag.
 * @type {?|undefined}
 */

LazyMapsAPILoaderConfigLiteral.prototype.hostAndPath;
/**
 * Protocol used for the `<script>` tag.
 * @type {?|undefined}
 */

LazyMapsAPILoaderConfigLiteral.prototype.protocol;
/**
 * Defines which Google Maps libraries should get loaded.
 * @type {?|undefined}
 */

LazyMapsAPILoaderConfigLiteral.prototype.libraries;
/**
 * The default bias for the map behavior is US.
 * If you wish to alter your application to serve different map tiles or bias the
 * application, you can overwrite the default behavior (US) by defining a `region`.
 * See https://developers.google.com/maps/documentation/javascript/basics#Region
 * @type {?|undefined}
 */

LazyMapsAPILoaderConfigLiteral.prototype.region;
/**
 * The Google Maps API uses the browser's preferred language when displaying
 * textual information. If you wish to overwrite this behavior and force the API
 * to use a given language, you can use this setting.
 * See https://developers.google.com/maps/documentation/javascript/basics#Language
 * @type {?|undefined}
 */

LazyMapsAPILoaderConfigLiteral.prototype.language;

var LazyMapsAPILoader =
/** @class */
function (_super) {
  __extends(LazyMapsAPILoader, _super);

  function LazyMapsAPILoader(config, w, d) {
    if (config === void 0) {
      config = null;
    }

    var _this = _super.call(this) || this;

    _this._SCRIPT_ID = 'agmGoogleMapsApiScript';
    _this.callbackName = "agmLazyMapsAPILoader";
    _this._config = config || {};
    _this._windowRef = w;
    _this._documentRef = d;
    return _this;
  }
  /**
   * @return {?}
   */


  LazyMapsAPILoader.prototype.load =
  /**
  * @return {?}
  */
  function () {
    /** @type {?} */
    var window =
    /** @type {?} */
    this._windowRef.getNativeWindow();

    if (window.google && window.google.maps) {
      // Google maps already loaded on the page.
      return Promise.resolve();
    }

    if (this._scriptLoadingPromise) {
      return this._scriptLoadingPromise;
    }
    /** @type {?} */


    var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);

    if (scriptOnPage) {
      this._assignScriptLoadingPromise(scriptOnPage);

      return this._scriptLoadingPromise;
    }
    /** @type {?} */


    var script = this._documentRef.getNativeDocument().createElement('script');

    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.id = this._SCRIPT_ID;
    script.src = this._getScriptSrc(this.callbackName);

    this._assignScriptLoadingPromise(script);

    this._documentRef.getNativeDocument().body.appendChild(script);

    return this._scriptLoadingPromise;
  };
  /**
   * @param {?} scriptElem
   * @return {?}
   */


  LazyMapsAPILoader.prototype._assignScriptLoadingPromise =
  /**
  * @param {?} scriptElem
  * @return {?}
  */
  function (scriptElem) {
    var _this = this;

    this._scriptLoadingPromise = new Promise(function (resolve, reject) {
      /** @type {?} */
      _this._windowRef.getNativeWindow()[_this.callbackName] = function () {
        resolve();
      };

      scriptElem.onerror = function (error) {
        reject(error);
      };
    });
  };
  /**
   * @param {?} callbackName
   * @return {?}
   */


  LazyMapsAPILoader.prototype._getScriptSrc =
  /**
  * @param {?} callbackName
  * @return {?}
  */
  function (callbackName) {
    /** @type {?} */
    var protocolType = this._config && this._config.protocol || GoogleMapsScriptProtocol.HTTPS;
    /** @type {?} */

    var protocol;

    switch (protocolType) {
      case GoogleMapsScriptProtocol.AUTO:
        protocol = '';
        break;

      case GoogleMapsScriptProtocol.HTTP:
        protocol = 'http:';
        break;

      case GoogleMapsScriptProtocol.HTTPS:
        protocol = 'https:';
        break;
    }
    /** @type {?} */


    var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
    /** @type {?} */

    var queryParams = {
      v: this._config.apiVersion || '3',
      callback: callbackName,
      key: this._config.apiKey,
      client: this._config.clientId,
      channel: this._config.channel,
      libraries: this._config.libraries,
      region: this._config.region,
      language: this._config.language
    };
    /** @type {?} */

    var params = Object.keys(queryParams).filter(function (k) {
      return queryParams[k] != null;
    }).filter(function (k) {
      // remove empty arrays
      return !Array.isArray(queryParams[k]) || Array.isArray(queryParams[k]) && queryParams[k].length > 0;
    }).map(function (k) {
      /** @type {?} */
      var i = queryParams[k];

      if (Array.isArray(i)) {
        return {
          key: k,
          value: i.join(',')
        };
      }

      return {
        key: k,
        value: queryParams[k]
      };
    }).map(function (entry) {
      return entry.key + "=" + entry.value;
    }).join('&');
    return protocol + "//" + hostAndPath + "?" + params;
  };

  LazyMapsAPILoader.decorators = [{
    type: _core.Injectable
  }];
  /** @nocollapse */

  LazyMapsAPILoader.ctorParameters = function () {
    return [{
      type: undefined,
      decorators: [{
        type: _core.Optional
      }, {
        type: _core.Inject,
        args: [LAZY_MAPS_API_CONFIG]
      }]
    }, {
      type: _browserGlobals.WindowRef
    }, {
      type: _browserGlobals.DocumentRef
    }];
  };

  return LazyMapsAPILoader;
}(_mapsApiLoader.MapsAPILoader);

exports.LazyMapsAPILoader = LazyMapsAPILoader;

if (false) {
  /** @type {?} */
  LazyMapsAPILoader.prototype._scriptLoadingPromise;
  /** @type {?} */

  LazyMapsAPILoader.prototype._config;
  /** @type {?} */

  LazyMapsAPILoader.prototype._windowRef;
  /** @type {?} */

  LazyMapsAPILoader.prototype._documentRef;
  /** @type {?} */

  LazyMapsAPILoader.prototype._SCRIPT_ID;
  /** @type {?} */

  LazyMapsAPILoader.prototype.callbackName;
}