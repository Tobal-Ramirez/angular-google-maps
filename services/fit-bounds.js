"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FitBoundsDetails = FitBoundsDetails;
exports.FitBoundsService = exports.FitBoundsAccessor = exports.BoundsMap = void 0;

var _core = require("@angular/core");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _mapsApiLoader = require("./maps-api-loader/maps-api-loader");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @record
 */
function FitBoundsDetails() {}
/** @type {?} */


FitBoundsDetails.prototype.latLng;
/** @typedef {?} */

var BoundsMap;
exports.BoundsMap = BoundsMap;

/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 * @abstract
 */
var
/**
* Class to implement when you what to be able to make it work with the auto fit bounds feature
* of AGM.
* @abstract
*/
FitBoundsAccessor =
/** @class */
function () {
  function FitBoundsAccessor() {}

  return FitBoundsAccessor;
}();
/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 * @abstract
 */


exports.FitBoundsAccessor = FitBoundsAccessor;

if (false) {
  /**
   * @abstract
   * @return {?}
   */
  FitBoundsAccessor.prototype.getFitBoundsDetails$ = function () {};
}
/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */


var FitBoundsService =
/** @class */
function () {
  function FitBoundsService(loader) {
    var _this = this;

    this._boundsChangeSampleTime$ = new _rxjs.BehaviorSubject(200);
    this._includeInBounds$ = new _rxjs.BehaviorSubject(new Map());
    this.bounds$ = (0, _rxjs.from)(loader.load()).pipe((0, _operators.flatMap)(function () {
      return _this._includeInBounds$;
    }), (0, _operators.sample)(this._boundsChangeSampleTime$.pipe((0, _operators.switchMap)(function (time) {
      return (0, _rxjs.timer)(0, time);
    }))), (0, _operators.map)(function (includeInBounds) {
      return _this._generateBounds(includeInBounds);
    }), (0, _operators.shareReplay)(1));
  }
  /**
   * @param {?} includeInBounds
   * @return {?}
   */


  FitBoundsService.prototype._generateBounds =
  /**
  * @param {?} includeInBounds
  * @return {?}
  */
  function (includeInBounds) {
    /** @type {?} */
    var bounds =
    /** @type {?} */
    new google.maps.LatLngBounds();
    includeInBounds.forEach(function (b) {
      return bounds.extend(b);
    });
    return bounds;
  };
  /**
   * @param {?} latLng
   * @return {?}
   */


  FitBoundsService.prototype.addToBounds =
  /**
  * @param {?} latLng
  * @return {?}
  */
  function (latLng) {
    /** @type {?} */
    var id = this._createIdentifier(latLng);

    if (this._includeInBounds$.value.has(id)) {
      return;
    }
    /** @type {?} */


    var map = this._includeInBounds$.value;
    map.set(id, latLng);

    this._includeInBounds$.next(map);
  };
  /**
   * @param {?} latLng
   * @return {?}
   */


  FitBoundsService.prototype.removeFromBounds =
  /**
  * @param {?} latLng
  * @return {?}
  */
  function (latLng) {
    /** @type {?} */
    var map = this._includeInBounds$.value;
    map.delete(this._createIdentifier(latLng));

    this._includeInBounds$.next(map);
  };
  /**
   * @param {?} timeMs
   * @return {?}
   */


  FitBoundsService.prototype.changeFitBoundsChangeSampleTime =
  /**
  * @param {?} timeMs
  * @return {?}
  */
  function (timeMs) {
    this._boundsChangeSampleTime$.next(timeMs);
  };
  /**
   * @return {?}
   */


  FitBoundsService.prototype.getBounds$ =
  /**
  * @return {?}
  */
  function () {
    return this.bounds$;
  };
  /**
   * @param {?} latLng
   * @return {?}
   */


  FitBoundsService.prototype._createIdentifier =
  /**
  * @param {?} latLng
  * @return {?}
  */
  function (latLng) {
    return latLng.lat + "+" + latLng.lng;
  };

  FitBoundsService.decorators = [{
    type: _core.Injectable
  }];
  /** @nocollapse */

  FitBoundsService.ctorParameters = function () {
    return [{
      type: _mapsApiLoader.MapsAPILoader
    }];
  };

  return FitBoundsService;
}();

exports.FitBoundsService = FitBoundsService;

if (false) {
  /** @type {?} */
  FitBoundsService.prototype.bounds$;
  /** @type {?} */

  FitBoundsService.prototype._boundsChangeSampleTime$;
  /** @type {?} */

  FitBoundsService.prototype._includeInBounds$;
}