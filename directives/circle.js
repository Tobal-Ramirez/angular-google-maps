"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AgmCircle = void 0;

var _core = require("@angular/core");

var _circleManager = require("../services/managers/circle-manager");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AgmCircle =
/** @class */
function () {
  function AgmCircle(_manager) {
    this._manager = _manager;
    /**
     * Indicates whether this Circle handles mouse events. Defaults to true.
     */

    this.clickable = true;
    /**
     * If set to true, the user can drag this circle over the map. Defaults to false.
     */

    this.draggable = false;
    /**
     * If set to true, the user can edit this circle by dragging the control points shown at
     * the center and around the circumference of the circle. Defaults to false.
     */

    this.editable = false;
    /**
     * The radius in meters on the Earth's surface.
     */

    this.radius = 0;
    /**
     * The stroke position. Defaults to CENTER.
     * This property is not supported on Internet Explorer 8 and earlier.
     */

    this.strokePosition = 'CENTER';
    /**
     * The stroke width in pixels.
     */

    this.strokeWeight = 0;
    /**
     * Whether this circle is visible on the map. Defaults to true.
     */

    this.visible = true;
    /**
     * This event is fired when the circle's center is changed.
     */

    this.centerChange = new _core.EventEmitter();
    /**
     * This event emitter gets emitted when the user clicks on the circle.
     */

    this.circleClick = new _core.EventEmitter();
    /**
     * This event emitter gets emitted when the user clicks on the circle.
     */

    this.circleDblClick = new _core.EventEmitter();
    /**
     * This event is repeatedly fired while the user drags the circle.
     */

    this.drag = new _core.EventEmitter();
    /**
     * This event is fired when the user stops dragging the circle.
     */

    this.dragEnd = new _core.EventEmitter();
    /**
     * This event is fired when the user starts dragging the circle.
     */

    this.dragStart = new _core.EventEmitter();
    /**
     * This event is fired when the DOM mousedown event is fired on the circle.
     */

    this.mouseDown = new _core.EventEmitter();
    /**
     * This event is fired when the DOM mousemove event is fired on the circle.
     */

    this.mouseMove = new _core.EventEmitter();
    /**
     * This event is fired on circle mouseout.
     */

    this.mouseOut = new _core.EventEmitter();
    /**
     * This event is fired on circle mouseover.
     */

    this.mouseOver = new _core.EventEmitter();
    /**
     * This event is fired when the DOM mouseup event is fired on the circle.
     */

    this.mouseUp = new _core.EventEmitter();
    /**
     * This event is fired when the circle's radius is changed.
     */

    this.radiusChange = new _core.EventEmitter();
    /**
     * This event is fired when the circle is right-clicked on.
     */

    this.rightClick = new _core.EventEmitter();
    this._circleAddedToManager = false;
    this._eventSubscriptions = [];
  }
  /** @internal */

  /**
   * \@internal
   * @return {?}
   */


  AgmCircle.prototype.ngOnInit =
  /**
  * \@internal
  * @return {?}
  */
  function () {
    this._manager.addCircle(this);

    this._circleAddedToManager = true;

    this._registerEventListeners();
  };
  /** @internal */

  /**
   * \@internal
   * @param {?} changes
   * @return {?}
   */


  AgmCircle.prototype.ngOnChanges =
  /**
  * \@internal
  * @param {?} changes
  * @return {?}
  */
  function (changes) {
    if (!this._circleAddedToManager) {
      return;
    }

    if (changes['latitude'] || changes['longitude']) {
      this._manager.setCenter(this);
    }

    if (changes['editable']) {
      this._manager.setEditable(this);
    }

    if (changes['draggable']) {
      this._manager.setDraggable(this);
    }

    if (changes['visible']) {
      this._manager.setVisible(this);
    }

    if (changes['radius']) {
      this._manager.setRadius(this);
    }

    this._updateCircleOptionsChanges(changes);
  };
  /**
   * @param {?} changes
   * @return {?}
   */


  AgmCircle.prototype._updateCircleOptionsChanges =
  /**
  * @param {?} changes
  * @return {?}
  */
  function (changes) {
    /** @type {?} */
    var options = {};
    /** @type {?} */

    var optionKeys = Object.keys(changes).filter(function (k) {
      return AgmCircle._mapOptions.indexOf(k) !== -1;
    });
    optionKeys.forEach(function (k) {
      options[k] = changes[k].currentValue;
    });

    if (optionKeys.length > 0) {
      this._manager.setOptions(this, options);
    }
  };
  /**
   * @return {?}
   */


  AgmCircle.prototype._registerEventListeners =
  /**
  * @return {?}
  */
  function () {
    var _this = this;
    /** @type {?} */


    var events = new Map();
    events.set('center_changed', this.centerChange);
    events.set('click', this.circleClick);
    events.set('dblclick', this.circleDblClick);
    events.set('drag', this.drag);
    events.set('dragend', this.dragEnd);
    events.set('dragStart', this.dragStart);
    events.set('mousedown', this.mouseDown);
    events.set('mousemove', this.mouseMove);
    events.set('mouseout', this.mouseOut);
    events.set('mouseover', this.mouseOver);
    events.set('mouseup', this.mouseUp);
    events.set('radius_changed', this.radiusChange);
    events.set('rightclick', this.rightClick);
    events.forEach(function (eventEmitter, eventName) {
      _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
        switch (eventName) {
          case 'radius_changed':
            _this._manager.getRadius(_this).then(function (radius) {
              return eventEmitter.emit(radius);
            });

            break;

          case 'center_changed':
            _this._manager.getCenter(_this).then(function (center) {
              return eventEmitter.emit(
              /** @type {?} */
              {
                lat: center.lat(),
                lng: center.lng()
              });
            });

            break;

          default:
            eventEmitter.emit(
            /** @type {?} */
            {
              coords: {
                lat: value.latLng.lat(),
                lng: value.latLng.lng()
              }
            });
        }
      }));
    });
  };
  /** @internal */

  /**
   * \@internal
   * @return {?}
   */


  AgmCircle.prototype.ngOnDestroy =
  /**
  * \@internal
  * @return {?}
  */
  function () {
    this._eventSubscriptions.forEach(function (s) {
      s.unsubscribe();
    });

    this._eventSubscriptions = null;

    this._manager.removeCircle(this);
  };
  /**
   * Gets the LatLngBounds of this Circle.
   */

  /**
   * Gets the LatLngBounds of this Circle.
   * @return {?}
   */


  AgmCircle.prototype.getBounds =
  /**
  * Gets the LatLngBounds of this Circle.
  * @return {?}
  */
  function () {
    return this._manager.getBounds(this);
  };
  /**
   * @return {?}
   */


  AgmCircle.prototype.getCenter =
  /**
  * @return {?}
  */
  function () {
    return this._manager.getCenter(this);
  };

  AgmCircle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];
  AgmCircle.decorators = [{
    type: _core.Directive,
    args: [{
      selector: 'agm-circle'
    }]
  }];
  /** @nocollapse */

  AgmCircle.ctorParameters = function () {
    return [{
      type: _circleManager.CircleManager
    }];
  };

  AgmCircle.propDecorators = {
    latitude: [{
      type: _core.Input
    }],
    longitude: [{
      type: _core.Input
    }],
    clickable: [{
      type: _core.Input
    }],
    draggable: [{
      type: _core.Input,
      args: ['circleDraggable']
    }],
    editable: [{
      type: _core.Input
    }],
    fillColor: [{
      type: _core.Input
    }],
    fillOpacity: [{
      type: _core.Input
    }],
    radius: [{
      type: _core.Input
    }],
    strokeColor: [{
      type: _core.Input
    }],
    strokeOpacity: [{
      type: _core.Input
    }],
    strokePosition: [{
      type: _core.Input
    }],
    strokeWeight: [{
      type: _core.Input
    }],
    visible: [{
      type: _core.Input
    }],
    zIndex: [{
      type: _core.Input
    }],
    centerChange: [{
      type: _core.Output
    }],
    circleClick: [{
      type: _core.Output
    }],
    circleDblClick: [{
      type: _core.Output
    }],
    drag: [{
      type: _core.Output
    }],
    dragEnd: [{
      type: _core.Output
    }],
    dragStart: [{
      type: _core.Output
    }],
    mouseDown: [{
      type: _core.Output
    }],
    mouseMove: [{
      type: _core.Output
    }],
    mouseOut: [{
      type: _core.Output
    }],
    mouseOver: [{
      type: _core.Output
    }],
    mouseUp: [{
      type: _core.Output
    }],
    radiusChange: [{
      type: _core.Output
    }],
    rightClick: [{
      type: _core.Output
    }]
  };
  return AgmCircle;
}();

exports.AgmCircle = AgmCircle;

if (false) {
  /** @type {?} */
  AgmCircle._mapOptions;
  /**
   * The latitude position of the circle (required).
   * @type {?}
   */

  AgmCircle.prototype.latitude;
  /**
   * The clickable position of the circle (required).
   * @type {?}
   */

  AgmCircle.prototype.longitude;
  /**
   * Indicates whether this Circle handles mouse events. Defaults to true.
   * @type {?}
   */

  AgmCircle.prototype.clickable;
  /**
   * If set to true, the user can drag this circle over the map. Defaults to false.
   * @type {?}
   */

  AgmCircle.prototype.draggable;
  /**
   * If set to true, the user can edit this circle by dragging the control points shown at
   * the center and around the circumference of the circle. Defaults to false.
   * @type {?}
   */

  AgmCircle.prototype.editable;
  /**
   * The fill color. All CSS3 colors are supported except for extended named colors.
   * @type {?}
   */

  AgmCircle.prototype.fillColor;
  /**
   * The fill opacity between 0.0 and 1.0.
   * @type {?}
   */

  AgmCircle.prototype.fillOpacity;
  /**
   * The radius in meters on the Earth's surface.
   * @type {?}
   */

  AgmCircle.prototype.radius;
  /**
   * The stroke color. All CSS3 colors are supported except for extended named colors.
   * @type {?}
   */

  AgmCircle.prototype.strokeColor;
  /**
   * The stroke opacity between 0.0 and 1.0
   * @type {?}
   */

  AgmCircle.prototype.strokeOpacity;
  /**
   * The stroke position. Defaults to CENTER.
   * This property is not supported on Internet Explorer 8 and earlier.
   * @type {?}
   */

  AgmCircle.prototype.strokePosition;
  /**
   * The stroke width in pixels.
   * @type {?}
   */

  AgmCircle.prototype.strokeWeight;
  /**
   * Whether this circle is visible on the map. Defaults to true.
   * @type {?}
   */

  AgmCircle.prototype.visible;
  /**
   * The zIndex compared to other polys.
   * @type {?}
   */

  AgmCircle.prototype.zIndex;
  /**
   * This event is fired when the circle's center is changed.
   * @type {?}
   */

  AgmCircle.prototype.centerChange;
  /**
   * This event emitter gets emitted when the user clicks on the circle.
   * @type {?}
   */

  AgmCircle.prototype.circleClick;
  /**
   * This event emitter gets emitted when the user clicks on the circle.
   * @type {?}
   */

  AgmCircle.prototype.circleDblClick;
  /**
   * This event is repeatedly fired while the user drags the circle.
   * @type {?}
   */

  AgmCircle.prototype.drag;
  /**
   * This event is fired when the user stops dragging the circle.
   * @type {?}
   */

  AgmCircle.prototype.dragEnd;
  /**
   * This event is fired when the user starts dragging the circle.
   * @type {?}
   */

  AgmCircle.prototype.dragStart;
  /**
   * This event is fired when the DOM mousedown event is fired on the circle.
   * @type {?}
   */

  AgmCircle.prototype.mouseDown;
  /**
   * This event is fired when the DOM mousemove event is fired on the circle.
   * @type {?}
   */

  AgmCircle.prototype.mouseMove;
  /**
   * This event is fired on circle mouseout.
   * @type {?}
   */

  AgmCircle.prototype.mouseOut;
  /**
   * This event is fired on circle mouseover.
   * @type {?}
   */

  AgmCircle.prototype.mouseOver;
  /**
   * This event is fired when the DOM mouseup event is fired on the circle.
   * @type {?}
   */

  AgmCircle.prototype.mouseUp;
  /**
   * This event is fired when the circle's radius is changed.
   * @type {?}
   */

  AgmCircle.prototype.radiusChange;
  /**
   * This event is fired when the circle is right-clicked on.
   * @type {?}
   */

  AgmCircle.prototype.rightClick;
  /** @type {?} */

  AgmCircle.prototype._circleAddedToManager;
  /** @type {?} */

  AgmCircle.prototype._eventSubscriptions;
  /** @type {?} */

  AgmCircle.prototype._manager;
}