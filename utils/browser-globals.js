"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BROWSER_GLOBALS_PROVIDERS = exports.DocumentRef = exports.WindowRef = void 0;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WindowRef =
/** @class */
function () {
  function WindowRef() {}
  /**
   * @return {?}
   */


  WindowRef.prototype.getNativeWindow =
  /**
  * @return {?}
  */
  function () {
    return window;
  };

  return WindowRef;
}();

exports.WindowRef = WindowRef;

var DocumentRef =
/** @class */
function () {
  function DocumentRef() {}
  /**
   * @return {?}
   */


  DocumentRef.prototype.getNativeDocument =
  /**
  * @return {?}
  */
  function () {
    return document;
  };

  return DocumentRef;
}();

exports.DocumentRef = DocumentRef;

/** @type {?} */
var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
exports.BROWSER_GLOBALS_PROVIDERS = BROWSER_GLOBALS_PROVIDERS;