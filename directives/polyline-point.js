"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AgmPolylinePoint = void 0;

var _core = require("@angular/core");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * AgmPolylinePoint represents one element of a polyline within a  {\@link
 * SembGoogleMapPolyline}
 */
var AgmPolylinePoint =
/** @class */
function () {
  function AgmPolylinePoint() {
    /**
     * This event emitter gets emitted when the position of the point changed.
     */
    this.positionChanged = new _core.EventEmitter();
  }
  /**
   * @param {?} changes
   * @return {?}
   */


  AgmPolylinePoint.prototype.ngOnChanges =
  /**
  * @param {?} changes
  * @return {?}
  */
  function (changes) {
    if (changes['latitude'] || changes['longitude']) {
      /** @type {?} */
      var position =
      /** @type {?} */
      {
        lat: changes['latitude'].currentValue,
        lng: changes['longitude'].currentValue
      };
      this.positionChanged.emit(position);
    }
  };

  AgmPolylinePoint.decorators = [{
    type: _core.Directive,
    args: [{
      selector: 'agm-polyline-point'
    }]
  }];
  /** @nocollapse */

  AgmPolylinePoint.ctorParameters = function () {
    return [];
  };

  AgmPolylinePoint.propDecorators = {
    latitude: [{
      type: _core.Input
    }],
    longitude: [{
      type: _core.Input
    }],
    positionChanged: [{
      type: _core.Output
    }]
  };
  return AgmPolylinePoint;
}();

exports.AgmPolylinePoint = AgmPolylinePoint;

if (false) {
  /**
   * The latitude position of the point.
   * @type {?}
   */
  AgmPolylinePoint.prototype.latitude;
  /**
   * The longitude position of the point;
   * @type {?}
   */

  AgmPolylinePoint.prototype.longitude;
  /**
   * This event emitter gets emitted when the position of the point changed.
   * @type {?}
   */

  AgmPolylinePoint.prototype.positionChanged;
}