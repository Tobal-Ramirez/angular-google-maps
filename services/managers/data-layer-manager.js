"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataLayerManager = void 0;

var _core = require("@angular/core");

var _rxjs = require("rxjs");

var _googleMapsApiWrapper = require("./../google-maps-api-wrapper");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager =
/** @class */
function () {
  function DataLayerManager(_wrapper, _zone) {
    this._wrapper = _wrapper;
    this._zone = _zone;
    this._layers = new Map();
  }
  /**
   * Adds a new Data Layer to the map.
   */

  /**
   * Adds a new Data Layer to the map.
   * @param {?} layer
   * @return {?}
   */


  DataLayerManager.prototype.addDataLayer =
  /**
  * Adds a new Data Layer to the map.
  * @param {?} layer
  * @return {?}
  */
  function (layer) {
    var _this = this;
    /** @type {?} */


    var newLayer = this._wrapper.createDataLayer(
    /** @type {?} */
    {
      style: layer.style
    }).then(function (d) {
      if (layer.geoJson) {
        _this.getDataFeatures(d, layer.geoJson).then(function (features) {
          return d.features = features;
        });
      }

      return d;
    });

    this._layers.set(layer, newLayer);
  };
  /**
   * @param {?} layer
   * @return {?}
   */


  DataLayerManager.prototype.deleteDataLayer =
  /**
  * @param {?} layer
  * @return {?}
  */
  function (layer) {
    var _this = this;

    this._layers.get(layer).then(function (l) {
      l.setMap(null);

      _this._layers.delete(layer);
    });
  };
  /**
   * @param {?} layer
   * @param {?} geoJson
   * @return {?}
   */


  DataLayerManager.prototype.updateGeoJson =
  /**
  * @param {?} layer
  * @param {?} geoJson
  * @return {?}
  */
  function (layer, geoJson) {
    var _this = this;

    this._layers.get(layer).then(function (l) {
      l.forEach(function (feature) {
        l.remove(feature);
        /** @type {?} */

        var index = l.features.indexOf(feature, 0);

        if (index > -1) {
          l.features.splice(index, 1);
        }
      });

      _this.getDataFeatures(l, geoJson).then(function (features) {
        return l.features = features;
      });
    });
  };
  /**
   * @param {?} layer
   * @param {?} options
   * @return {?}
   */


  DataLayerManager.prototype.setDataOptions =
  /**
  * @param {?} layer
  * @param {?} options
  * @return {?}
  */
  function (layer, options) {
    this._layers.get(layer).then(function (l) {
      l.setControlPosition(options.controlPosition);
      l.setControls(options.controls);
      l.setDrawingMode(options.drawingMode);
      l.setStyle(options.style);
    });
  };
  /**
   * Creates a Google Maps event listener for the given DataLayer as an Observable
   */

  /**
   * Creates a Google Maps event listener for the given DataLayer as an Observable
   * @template T
   * @param {?} eventName
   * @param {?} layer
   * @return {?}
   */


  DataLayerManager.prototype.createEventObservable =
  /**
  * Creates a Google Maps event listener for the given DataLayer as an Observable
  * @template T
  * @param {?} eventName
  * @param {?} layer
  * @return {?}
  */
  function (eventName, layer) {
    var _this = this;

    return new _rxjs.Observable(function (observer) {
      _this._layers.get(layer).then(function (d) {
        d.addListener(eventName, function (e) {
          return _this._zone.run(function () {
            return observer.next(e);
          });
        });
      });
    });
  };
  /**
   * Extract features from a geoJson using google.maps Data Class
   * @param d : google.maps.Data class instance
   * @param geoJson : url or geojson object
   */

  /**
   * Extract features from a geoJson using google.maps Data Class
   * @param {?} d : google.maps.Data class instance
   * @param {?} geoJson : url or geojson object
   * @return {?}
   */


  DataLayerManager.prototype.getDataFeatures =
  /**
  * Extract features from a geoJson using google.maps Data Class
  * @param {?} d : google.maps.Data class instance
  * @param {?} geoJson : url or geojson object
  * @return {?}
  */
  function (d, geoJson) {
    return new Promise(function (resolve, reject) {
      if (_typeof(geoJson) === 'object') {
        try {
          /** @type {?} */
          var features = d.addGeoJson(geoJson);
          resolve(features);
        } catch (e) {
          reject(e);
        }
      } else if (typeof geoJson === 'string') {
        d.loadGeoJson(geoJson, null, resolve);
      } else {
        reject("Impossible to extract features from geoJson: wrong argument type");
      }
    });
  };

  DataLayerManager.decorators = [{
    type: _core.Injectable
  }];
  /** @nocollapse */

  DataLayerManager.ctorParameters = function () {
    return [{
      type: _googleMapsApiWrapper.GoogleMapsAPIWrapper
    }, {
      type: _core.NgZone
    }];
  };

  return DataLayerManager;
}();

exports.DataLayerManager = DataLayerManager;

if (false) {
  /** @type {?} */
  DataLayerManager.prototype._layers;
  /** @type {?} */

  DataLayerManager.prototype._wrapper;
  /** @type {?} */

  DataLayerManager.prototype._zone;
}