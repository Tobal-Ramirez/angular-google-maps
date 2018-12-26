"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleMap = GoogleMap;
exports.LatLng = LatLng;
exports.Marker = Marker;
exports.MarkerOptions = MarkerOptions;
exports.MarkerLabel = MarkerLabel;
exports.Circle = Circle;
exports.CircleOptions = CircleOptions;
exports.Rectangle = Rectangle;
exports.RectangleOptions = RectangleOptions;
exports.LatLngBounds = LatLngBounds;
exports.LatLngBoundsLiteral = LatLngBoundsLiteral;
exports.LatLngLiteral = LatLngLiteral;
exports.MouseEvent = MouseEvent;
exports.MapOptions = MapOptions;
exports.MapTypeStyle = MapTypeStyle;
exports.MapTypeStyler = MapTypeStyler;
exports.InfoWindow = InfoWindow;
exports.MVCObject = MVCObject;
exports.MapsEventListener = MapsEventListener;
exports.Size = Size;
exports.InfoWindowOptions = InfoWindowOptions;
exports.Point = Point;
exports.GoogleSymbol = GoogleSymbol;
exports.IconSequence = IconSequence;
exports.PolylineOptions = PolylineOptions;
exports.Polyline = Polyline;
exports.PolyMouseEvent = PolyMouseEvent;
exports.PolygonOptions = PolygonOptions;
exports.Polygon = Polygon;
exports.KmlLayer = KmlLayer;
exports.KmlLayerMetadata = KmlLayerMetadata;
exports.KmlAuthor = KmlAuthor;
exports.KmlLayerOptions = KmlLayerOptions;
exports.KmlFeatureData = KmlFeatureData;
exports.KmlMouseEvent = KmlMouseEvent;
exports.Data = Data;
exports.Feature = Feature;
exports.DataOptions = DataOptions;
exports.DataMouseEvent = DataMouseEvent;
exports.GeoJsonOptions = GeoJsonOptions;
exports.Geometry = Geometry;
exports.MapTypeControlOptions = MapTypeControlOptions;
exports.OverviewMapControlOptions = OverviewMapControlOptions;
exports.PanControlOptions = PanControlOptions;
exports.RotateControlOptions = RotateControlOptions;
exports.ScaleControlOptions = ScaleControlOptions;
exports.StreetViewControlOptions = StreetViewControlOptions;
exports.ZoomControlOptions = ZoomControlOptions;
exports.FullscreenControlOptions = FullscreenControlOptions;
exports.ZoomControlStyle = exports.ScaleControlStyle = exports.MapTypeControlStyle = exports.MapTypeId = exports.ControlPosition = exports.KmlLayerStatus = exports.google = void 0;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */
var google;
/**
 * @record
 */

exports.google = google;

function GoogleMap() {}
/** @type {?|undefined} */


GoogleMap.prototype.data;
/** @type {?} */

GoogleMap.prototype.constructor;
/** @type {?} */

GoogleMap.prototype.panTo;
/** @type {?} */

GoogleMap.prototype.panBy;
/** @type {?} */

GoogleMap.prototype.setZoom;
/** @type {?} */

GoogleMap.prototype.getCenter;
/** @type {?} */

GoogleMap.prototype.setCenter;
/** @type {?} */

GoogleMap.prototype.getBounds;
/** @type {?} */

GoogleMap.prototype.getMapTypeId;
/** @type {?} */

GoogleMap.prototype.getZoom;
/** @type {?} */

GoogleMap.prototype.setOptions;
/** @type {?} */

GoogleMap.prototype.panToBounds;
/** @type {?} */

GoogleMap.prototype.fitBounds;
/**
 * @record
 */

function LatLng() {}
/** @type {?} */


LatLng.prototype.constructor;
/** @type {?} */

LatLng.prototype.lat;
/** @type {?} */

LatLng.prototype.lng;
/** @type {?} */

LatLng.prototype.toString;
/**
 * @record
 */

function Marker() {}
/** @type {?} */


Marker.prototype.constructor;
/** @type {?} */

Marker.prototype.setMap;
/** @type {?} */

Marker.prototype.setPosition;
/** @type {?} */

Marker.prototype.setTitle;
/** @type {?} */

Marker.prototype.setLabel;
/** @type {?} */

Marker.prototype.setDraggable;
/** @type {?} */

Marker.prototype.setIcon;
/** @type {?} */

Marker.prototype.setOpacity;
/** @type {?} */

Marker.prototype.setVisible;
/** @type {?} */

Marker.prototype.setZIndex;
/** @type {?} */

Marker.prototype.setAnimation;
/** @type {?} */

Marker.prototype.getLabel;
/** @type {?} */

Marker.prototype.setClickable;
/**
 * @record
 */

function MarkerOptions() {}
/** @type {?} */


MarkerOptions.prototype.position;
/** @type {?|undefined} */

MarkerOptions.prototype.title;
/** @type {?|undefined} */

MarkerOptions.prototype.map;
/** @type {?|undefined} */

MarkerOptions.prototype.label;
/** @type {?|undefined} */

MarkerOptions.prototype.draggable;
/** @type {?|undefined} */

MarkerOptions.prototype.icon;
/** @type {?|undefined} */

MarkerOptions.prototype.opacity;
/** @type {?|undefined} */

MarkerOptions.prototype.visible;
/** @type {?|undefined} */

MarkerOptions.prototype.zIndex;
/** @type {?} */

MarkerOptions.prototype.clickable;
/** @type {?|undefined} */

MarkerOptions.prototype.animation;
/**
 * @record
 */

function MarkerLabel() {}
/** @type {?} */


MarkerLabel.prototype.color;
/** @type {?} */

MarkerLabel.prototype.fontFamily;
/** @type {?} */

MarkerLabel.prototype.fontSize;
/** @type {?} */

MarkerLabel.prototype.fontWeight;
/** @type {?} */

MarkerLabel.prototype.text;
/**
 * @record
 */

function Circle() {}
/** @type {?} */


Circle.prototype.getBounds;
/** @type {?} */

Circle.prototype.getCenter;
/** @type {?} */

Circle.prototype.getDraggable;
/** @type {?} */

Circle.prototype.getEditable;
/** @type {?} */

Circle.prototype.getMap;
/** @type {?} */

Circle.prototype.getRadius;
/** @type {?} */

Circle.prototype.getVisible;
/** @type {?} */

Circle.prototype.setCenter;
/** @type {?} */

Circle.prototype.setDraggable;
/** @type {?} */

Circle.prototype.setEditable;
/** @type {?} */

Circle.prototype.setMap;
/** @type {?} */

Circle.prototype.setOptions;
/** @type {?} */

Circle.prototype.setRadius;
/** @type {?} */

Circle.prototype.setVisible;
/**
 * @record
 */

function CircleOptions() {}
/** @type {?|undefined} */


CircleOptions.prototype.center;
/** @type {?|undefined} */

CircleOptions.prototype.clickable;
/** @type {?|undefined} */

CircleOptions.prototype.draggable;
/** @type {?|undefined} */

CircleOptions.prototype.editable;
/** @type {?|undefined} */

CircleOptions.prototype.fillColor;
/** @type {?|undefined} */

CircleOptions.prototype.fillOpacity;
/** @type {?|undefined} */

CircleOptions.prototype.map;
/** @type {?|undefined} */

CircleOptions.prototype.radius;
/** @type {?|undefined} */

CircleOptions.prototype.strokeColor;
/** @type {?|undefined} */

CircleOptions.prototype.strokeOpacity;
/** @type {?|undefined} */

CircleOptions.prototype.strokePosition;
/** @type {?|undefined} */

CircleOptions.prototype.strokeWeight;
/** @type {?|undefined} */

CircleOptions.prototype.visible;
/** @type {?|undefined} */

CircleOptions.prototype.zIndex;
/**
 * @record
 */

function Rectangle() {}
/** @type {?} */


Rectangle.prototype.getBounds;
/** @type {?} */

Rectangle.prototype.getDraggable;
/** @type {?} */

Rectangle.prototype.getEditable;
/** @type {?} */

Rectangle.prototype.getMap;
/** @type {?} */

Rectangle.prototype.getVisible;
/** @type {?} */

Rectangle.prototype.setBounds;
/** @type {?} */

Rectangle.prototype.setDraggable;
/** @type {?} */

Rectangle.prototype.setEditable;
/** @type {?} */

Rectangle.prototype.setMap;
/** @type {?} */

Rectangle.prototype.setOptions;
/** @type {?} */

Rectangle.prototype.setVisible;
/**
 * @record
 */

function RectangleOptions() {}
/** @type {?|undefined} */


RectangleOptions.prototype.bounds;
/** @type {?|undefined} */

RectangleOptions.prototype.clickable;
/** @type {?|undefined} */

RectangleOptions.prototype.draggable;
/** @type {?|undefined} */

RectangleOptions.prototype.editable;
/** @type {?|undefined} */

RectangleOptions.prototype.fillColor;
/** @type {?|undefined} */

RectangleOptions.prototype.fillOpacity;
/** @type {?|undefined} */

RectangleOptions.prototype.map;
/** @type {?|undefined} */

RectangleOptions.prototype.strokeColor;
/** @type {?|undefined} */

RectangleOptions.prototype.strokeOpacity;
/** @type {?|undefined} */

RectangleOptions.prototype.strokePosition;
/** @type {?|undefined} */

RectangleOptions.prototype.strokeWeight;
/** @type {?|undefined} */

RectangleOptions.prototype.visible;
/** @type {?|undefined} */

RectangleOptions.prototype.zIndex;
/**
 * @record
 */

function LatLngBounds() {}
/** @type {?} */


LatLngBounds.prototype.contains;
/** @type {?} */

LatLngBounds.prototype.equals;
/** @type {?} */

LatLngBounds.prototype.extend;
/** @type {?} */

LatLngBounds.prototype.getCenter;
/** @type {?} */

LatLngBounds.prototype.getNorthEast;
/** @type {?} */

LatLngBounds.prototype.getSouthWest;
/** @type {?} */

LatLngBounds.prototype.intersects;
/** @type {?} */

LatLngBounds.prototype.isEmpty;
/** @type {?} */

LatLngBounds.prototype.toJSON;
/** @type {?} */

LatLngBounds.prototype.toSpan;
/** @type {?} */

LatLngBounds.prototype.toString;
/** @type {?} */

LatLngBounds.prototype.toUrlValue;
/** @type {?} */

LatLngBounds.prototype.union;
/**
 * @record
 */

function LatLngBoundsLiteral() {}
/** @type {?} */


LatLngBoundsLiteral.prototype.east;
/** @type {?} */

LatLngBoundsLiteral.prototype.north;
/** @type {?} */

LatLngBoundsLiteral.prototype.south;
/** @type {?} */

LatLngBoundsLiteral.prototype.west;
/**
 * @record
 */

function LatLngLiteral() {}
/** @type {?} */


LatLngLiteral.prototype.lat;
/** @type {?} */

LatLngLiteral.prototype.lng;
/**
 * @record
 */

function MouseEvent() {}
/** @type {?} */


MouseEvent.prototype.latLng;
/**
 * @record
 */

function MapOptions() {}
/** @type {?|undefined} */


MapOptions.prototype.center;
/** @type {?|undefined} */

MapOptions.prototype.zoom;
/** @type {?|undefined} */

MapOptions.prototype.minZoom;
/** @type {?|undefined} */

MapOptions.prototype.maxZoom;
/** @type {?|undefined} */

MapOptions.prototype.disableDoubleClickZoom;
/** @type {?|undefined} */

MapOptions.prototype.disableDefaultUI;
/** @type {?|undefined} */

MapOptions.prototype.scrollwheel;
/** @type {?|undefined} */

MapOptions.prototype.backgroundColor;
/** @type {?|undefined} */

MapOptions.prototype.draggable;
/** @type {?|undefined} */

MapOptions.prototype.draggableCursor;
/** @type {?|undefined} */

MapOptions.prototype.draggingCursor;
/** @type {?|undefined} */

MapOptions.prototype.keyboardShortcuts;
/** @type {?|undefined} */

MapOptions.prototype.styles;
/** @type {?|undefined} */

MapOptions.prototype.zoomControl;
/** @type {?|undefined} */

MapOptions.prototype.zoomControlOptions;
/** @type {?|undefined} */

MapOptions.prototype.streetViewControl;
/** @type {?|undefined} */

MapOptions.prototype.streetViewControlOptions;
/** @type {?|undefined} */

MapOptions.prototype.scaleControl;
/** @type {?|undefined} */

MapOptions.prototype.scaleControlOptions;
/** @type {?|undefined} */

MapOptions.prototype.mapTypeControl;
/** @type {?|undefined} */

MapOptions.prototype.mapTypeControlOptions;
/** @type {?|undefined} */

MapOptions.prototype.panControl;
/** @type {?|undefined} */

MapOptions.prototype.panControlOptions;
/** @type {?|undefined} */

MapOptions.prototype.rotateControl;
/** @type {?|undefined} */

MapOptions.prototype.rotateControlOptions;
/** @type {?|undefined} */

MapOptions.prototype.fullscreenControl;
/** @type {?|undefined} */

MapOptions.prototype.fullscreenControlOptions;
/** @type {?|undefined} */

MapOptions.prototype.mapTypeId;
/** @type {?|undefined} */

MapOptions.prototype.clickableIcons;
/** @type {?|undefined} */

MapOptions.prototype.gestureHandling;
/**
 * @record
 */

function MapTypeStyle() {}
/** @type {?|undefined} */


MapTypeStyle.prototype.elementType;
/** @type {?|undefined} */

MapTypeStyle.prototype.featureType;
/** @type {?} */

MapTypeStyle.prototype.stylers;
/**
 *  If more than one key is specified in a single MapTypeStyler, all but one will be ignored.
 * @record
 */

function MapTypeStyler() {}
/** @type {?|undefined} */


MapTypeStyler.prototype.color;
/** @type {?|undefined} */

MapTypeStyler.prototype.gamma;
/** @type {?|undefined} */

MapTypeStyler.prototype.hue;
/** @type {?|undefined} */

MapTypeStyler.prototype.invert_lightness;
/** @type {?|undefined} */

MapTypeStyler.prototype.lightness;
/** @type {?|undefined} */

MapTypeStyler.prototype.saturation;
/** @type {?|undefined} */

MapTypeStyler.prototype.visibility;
/** @type {?|undefined} */

MapTypeStyler.prototype.weight;
/**
 * @record
 */

function InfoWindow() {}
/** @type {?} */


InfoWindow.prototype.constructor;
/** @type {?} */

InfoWindow.prototype.close;
/** @type {?} */

InfoWindow.prototype.getContent;
/** @type {?} */

InfoWindow.prototype.getPosition;
/** @type {?} */

InfoWindow.prototype.getZIndex;
/** @type {?} */

InfoWindow.prototype.open;
/** @type {?} */

InfoWindow.prototype.setContent;
/** @type {?} */

InfoWindow.prototype.setOptions;
/** @type {?} */

InfoWindow.prototype.setPosition;
/** @type {?} */

InfoWindow.prototype.setZIndex;
/**
 * @record
 */

function MVCObject() {}
/** @type {?} */


MVCObject.prototype.addListener;
/**
 * @record
 */

function MapsEventListener() {}
/** @type {?} */


MapsEventListener.prototype.remove;
/**
 * @record
 */

function Size() {}
/** @type {?} */


Size.prototype.height;
/** @type {?} */

Size.prototype.width;
/** @type {?} */

Size.prototype.constructor;
/** @type {?} */

Size.prototype.equals;
/** @type {?} */

Size.prototype.toString;
/**
 * @record
 */

function InfoWindowOptions() {}
/** @type {?|undefined} */


InfoWindowOptions.prototype.content;
/** @type {?|undefined} */

InfoWindowOptions.prototype.disableAutoPan;
/** @type {?|undefined} */

InfoWindowOptions.prototype.maxWidth;
/** @type {?|undefined} */

InfoWindowOptions.prototype.pixelOffset;
/** @type {?|undefined} */

InfoWindowOptions.prototype.position;
/** @type {?|undefined} */

InfoWindowOptions.prototype.zIndex;
/**
 * @record
 */

function Point() {}
/** @type {?} */


Point.prototype.x;
/** @type {?} */

Point.prototype.y;
/** @type {?} */

Point.prototype.equals;
/** @type {?} */

Point.prototype.toString;
/**
 * @record
 */

function GoogleSymbol() {}
/** @type {?|undefined} */


GoogleSymbol.prototype.anchor;
/** @type {?|undefined} */

GoogleSymbol.prototype.fillColor;
/** @type {?|undefined} */

GoogleSymbol.prototype.fillOpacity;
/** @type {?|undefined} */

GoogleSymbol.prototype.labelOrigin;
/** @type {?|undefined} */

GoogleSymbol.prototype.path;
/** @type {?|undefined} */

GoogleSymbol.prototype.rotation;
/** @type {?|undefined} */

GoogleSymbol.prototype.scale;
/** @type {?|undefined} */

GoogleSymbol.prototype.strokeColor;
/** @type {?|undefined} */

GoogleSymbol.prototype.strokeOpacity;
/** @type {?|undefined} */

GoogleSymbol.prototype.strokeWeight;
/**
 * @record
 */

function IconSequence() {}
/** @type {?|undefined} */


IconSequence.prototype.fixedRotation;
/** @type {?|undefined} */

IconSequence.prototype.icon;
/** @type {?|undefined} */

IconSequence.prototype.offset;
/** @type {?|undefined} */

IconSequence.prototype.repeat;
/**
 * @record
 */

function PolylineOptions() {}
/** @type {?|undefined} */


PolylineOptions.prototype.clickable;
/** @type {?|undefined} */

PolylineOptions.prototype.draggable;
/** @type {?|undefined} */

PolylineOptions.prototype.editable;
/** @type {?|undefined} */

PolylineOptions.prototype.geodesic;
/** @type {?|undefined} */

PolylineOptions.prototype.icons;
/** @type {?|undefined} */

PolylineOptions.prototype.map;
/** @type {?|undefined} */

PolylineOptions.prototype.path;
/** @type {?|undefined} */

PolylineOptions.prototype.strokeColor;
/** @type {?|undefined} */

PolylineOptions.prototype.strokeOpacity;
/** @type {?|undefined} */

PolylineOptions.prototype.strokeWeight;
/** @type {?|undefined} */

PolylineOptions.prototype.visible;
/** @type {?|undefined} */

PolylineOptions.prototype.zIndex;
/**
 * @record
 */

function Polyline() {}
/** @type {?} */


Polyline.prototype.getDraggable;
/** @type {?} */

Polyline.prototype.getEditable;
/** @type {?} */

Polyline.prototype.getMap;
/** @type {?} */

Polyline.prototype.getPath;
/** @type {?} */

Polyline.prototype.getVisible;
/** @type {?} */

Polyline.prototype.setDraggable;
/** @type {?} */

Polyline.prototype.setEditable;
/** @type {?} */

Polyline.prototype.setMap;
/** @type {?} */

Polyline.prototype.setOptions;
/** @type {?} */

Polyline.prototype.setPath;
/** @type {?} */

Polyline.prototype.setVisible;
/**
 * PolyMouseEvent gets emitted when the user triggers mouse events on a polyline.
 * @record
 */

function PolyMouseEvent() {}
/** @type {?} */


PolyMouseEvent.prototype.edge;
/** @type {?} */

PolyMouseEvent.prototype.path;
/** @type {?} */

PolyMouseEvent.prototype.vertex;
/**
 * @record
 */

function PolygonOptions() {}
/** @type {?|undefined} */


PolygonOptions.prototype.clickable;
/** @type {?|undefined} */

PolygonOptions.prototype.draggable;
/** @type {?|undefined} */

PolygonOptions.prototype.editable;
/** @type {?|undefined} */

PolygonOptions.prototype.fillColor;
/** @type {?|undefined} */

PolygonOptions.prototype.fillOpacity;
/** @type {?|undefined} */

PolygonOptions.prototype.geodesic;
/** @type {?|undefined} */

PolygonOptions.prototype.icon;
/** @type {?|undefined} */

PolygonOptions.prototype.map;
/** @type {?|undefined} */

PolygonOptions.prototype.paths;
/** @type {?|undefined} */

PolygonOptions.prototype.strokeColor;
/** @type {?|undefined} */

PolygonOptions.prototype.strokeOpacity;
/** @type {?|undefined} */

PolygonOptions.prototype.strokeWeight;
/** @type {?|undefined} */

PolygonOptions.prototype.visible;
/** @type {?|undefined} */

PolygonOptions.prototype.zIndex;
/**
 * @record
 */

function Polygon() {}
/** @type {?} */


Polygon.prototype.getDraggable;
/** @type {?} */

Polygon.prototype.getEditable;
/** @type {?} */

Polygon.prototype.getMap;
/** @type {?} */

Polygon.prototype.getPath;
/** @type {?} */

Polygon.prototype.getPaths;
/** @type {?} */

Polygon.prototype.getVisible;
/** @type {?} */

Polygon.prototype.setDraggable;
/** @type {?} */

Polygon.prototype.setEditable;
/** @type {?} */

Polygon.prototype.setMap;
/** @type {?} */

Polygon.prototype.setPath;
/** @type {?} */

Polygon.prototype.setOptions;
/** @type {?} */

Polygon.prototype.setPaths;
/** @type {?} */

Polygon.prototype.setVisible;
/**
 * @record
 */

function KmlLayer() {}
/** @type {?} */


KmlLayer.prototype.getDefaultViewport;
/** @type {?} */

KmlLayer.prototype.getMap;
/** @type {?} */

KmlLayer.prototype.getMetadata;
/** @type {?} */

KmlLayer.prototype.getStatus;
/** @type {?} */

KmlLayer.prototype.getUrl;
/** @type {?} */

KmlLayer.prototype.getZIndex;
/** @type {?} */

KmlLayer.prototype.setMap;
/** @type {?} */

KmlLayer.prototype.setOptions;
/** @type {?} */

KmlLayer.prototype.setUrl;
/** @type {?} */

KmlLayer.prototype.setZIndex;
/** @typedef {?} */

var KmlLayerStatus;
exports.KmlLayerStatus = KmlLayerStatus;

/**
 * See: https://developers.google.com/maps/documentation/javascript/reference?hl=de#KmlLayerMetadata
 * @record
 */
function KmlLayerMetadata() {}
/** @type {?} */


KmlLayerMetadata.prototype.author;
/** @type {?} */

KmlLayerMetadata.prototype.description;
/** @type {?} */

KmlLayerMetadata.prototype.hasScreenOverlays;
/** @type {?} */

KmlLayerMetadata.prototype.name;
/** @type {?} */

KmlLayerMetadata.prototype.snippet;
/**
 * @record
 */

function KmlAuthor() {}
/** @type {?} */


KmlAuthor.prototype.email;
/** @type {?} */

KmlAuthor.prototype.name;
/** @type {?} */

KmlAuthor.prototype.uri;
/**
 * @record
 */

function KmlLayerOptions() {}
/** @type {?|undefined} */


KmlLayerOptions.prototype.clickable;
/** @type {?|undefined} */

KmlLayerOptions.prototype.map;
/** @type {?|undefined} */

KmlLayerOptions.prototype.preserveViewport;
/** @type {?|undefined} */

KmlLayerOptions.prototype.screenOverlays;
/** @type {?|undefined} */

KmlLayerOptions.prototype.suppressInfoWindows;
/** @type {?|undefined} */

KmlLayerOptions.prototype.url;
/** @type {?|undefined} */

KmlLayerOptions.prototype.zIndex;
/**
 * @record
 */

function KmlFeatureData() {}
/** @type {?} */


KmlFeatureData.prototype.author;
/** @type {?} */

KmlFeatureData.prototype.description;
/** @type {?} */

KmlFeatureData.prototype.id;
/** @type {?} */

KmlFeatureData.prototype.infoWindowHtml;
/** @type {?} */

KmlFeatureData.prototype.name;
/** @type {?} */

KmlFeatureData.prototype.snippet;
/**
 * @record
 */

function KmlMouseEvent() {}
/** @type {?} */


KmlMouseEvent.prototype.featureData;
/** @type {?} */

KmlMouseEvent.prototype.pixelOffset;
/**
 * @record
 */

function Data() {}
/** @type {?} */


Data.prototype.features;
/** @type {?} */

Data.prototype.constructor;
/** @type {?} */

Data.prototype.addGeoJson;
/** @type {?} */

Data.prototype.remove;
/** @type {?} */

Data.prototype.setControlPosition;
/** @type {?} */

Data.prototype.setControls;
/** @type {?} */

Data.prototype.setDrawingMode;
/** @type {?} */

Data.prototype.setMap;
/** @type {?} */

Data.prototype.setStyle;
/** @type {?} */

Data.prototype.forEach;
/** @type {?} */

Data.prototype.loadGeoJson;
/**
 * @record
 */

function Feature() {}
/** @type {?|undefined} */


Feature.prototype.id;
/** @type {?} */

Feature.prototype.geometry;
/** @type {?} */

Feature.prototype.properties;
/**
 * @record
 */

function DataOptions() {}
/** @type {?|undefined} */


DataOptions.prototype.controlPosition;
/** @type {?|undefined} */

DataOptions.prototype.controls;
/** @type {?|undefined} */

DataOptions.prototype.drawingMode;
/** @type {?|undefined} */

DataOptions.prototype.featureFactory;
/** @type {?|undefined} */

DataOptions.prototype.map;
/** @type {?|undefined} */

DataOptions.prototype.style;
/**
 * @record
 */

function DataMouseEvent() {}
/** @type {?} */


DataMouseEvent.prototype.feature;
/**
 * @record
 */

function GeoJsonOptions() {}
/** @type {?} */


GeoJsonOptions.prototype.idPropertyName;
/**
 * @record
 */

function Geometry() {}
/** @type {?} */


Geometry.prototype.type;
/** @enum {number} */

var ControlPosition = {
  RIGHT_BOTTOM: 0,
  TOP_LEFT: 1,
  TOP_CENTER: 2,
  TOP_RIGHT: 3,
  LEFT_CENTER: 4,
  LEFT_TOP: 5,
  LEFT_BOTTOM: 6,
  RIGHT_TOP: 7,
  RIGHT_CENTER: 8,
  BOTTOM_RIGHT: 9,
  BOTTOM_LEFT: 10,
  BOTTOM_CENTER: 11
};
exports.ControlPosition = ControlPosition;
ControlPosition[ControlPosition.RIGHT_BOTTOM] = 'RIGHT_BOTTOM';
ControlPosition[ControlPosition.TOP_LEFT] = 'TOP_LEFT';
ControlPosition[ControlPosition.TOP_CENTER] = 'TOP_CENTER';
ControlPosition[ControlPosition.TOP_RIGHT] = 'TOP_RIGHT';
ControlPosition[ControlPosition.LEFT_CENTER] = 'LEFT_CENTER';
ControlPosition[ControlPosition.LEFT_TOP] = 'LEFT_TOP';
ControlPosition[ControlPosition.LEFT_BOTTOM] = 'LEFT_BOTTOM';
ControlPosition[ControlPosition.RIGHT_TOP] = 'RIGHT_TOP';
ControlPosition[ControlPosition.RIGHT_CENTER] = 'RIGHT_CENTER';
ControlPosition[ControlPosition.BOTTOM_RIGHT] = 'BOTTOM_RIGHT';
ControlPosition[ControlPosition.BOTTOM_LEFT] = 'BOTTOM_LEFT';
ControlPosition[ControlPosition.BOTTOM_CENTER] = 'BOTTOM_CENTER';
/** @enum {number} */

var MapTypeId = {
  /** This map type displays a transparent layer of major streets on satellite images. */
  HYBRID: 0,

  /** This map type displays a normal street map. */
  ROADMAP: 1,

  /** This map type displays satellite images. */
  SATELLITE: 2,

  /** This map type displays maps with physical features such as terrain and vegetation. */
  TERRAIN: 3
};
exports.MapTypeId = MapTypeId;
MapTypeId[MapTypeId.HYBRID] = 'HYBRID';
MapTypeId[MapTypeId.ROADMAP] = 'ROADMAP';
MapTypeId[MapTypeId.SATELLITE] = 'SATELLITE';
MapTypeId[MapTypeId.TERRAIN] = 'TERRAIN';
/**
 * Options for the rendering of the map type control.
 * @record
 */

function MapTypeControlOptions() {}
/**
 * IDs of map types to show in the control.
 * @type {?|undefined}
 */


MapTypeControlOptions.prototype.mapTypeIds;
/**
 * Position id. Used to specify the position of the control on the map.
 * The default position is TOP_RIGHT.
 * @type {?|undefined}
 */

MapTypeControlOptions.prototype.position;
/**
 * Style id. Used to select what style of map type control to display.
 * @type {?|undefined}
 */

MapTypeControlOptions.prototype.style;
/** @enum {number} */

var MapTypeControlStyle = {
  DEFAULT: 0,
  DROPDOWN_MENU: 1,
  HORIZONTAL_BAR: 2
};
exports.MapTypeControlStyle = MapTypeControlStyle;
MapTypeControlStyle[MapTypeControlStyle.DEFAULT] = 'DEFAULT';
MapTypeControlStyle[MapTypeControlStyle.DROPDOWN_MENU] = 'DROPDOWN_MENU';
MapTypeControlStyle[MapTypeControlStyle.HORIZONTAL_BAR] = 'HORIZONTAL_BAR';
/**
 * @record
 */

function OverviewMapControlOptions() {}
/** @type {?|undefined} */


OverviewMapControlOptions.prototype.opened;
/**
 * Options for the rendering of the pan control.
 * @record
 */

function PanControlOptions() {}
/**
 * Position id. Used to specify the position of the control on the map.
 * The default position is TOP_LEFT.
 * @type {?|undefined}
 */


PanControlOptions.prototype.position;
/**
 * Options for the rendering of the rotate control.
 * @record
 */

function RotateControlOptions() {}
/**
 * Position id. Used to specify the position of the control on the map.
 * The default position is TOP_LEFT.
 * @type {?|undefined}
 */


RotateControlOptions.prototype.position;
/**
 * Options for the rendering of the scale control.
 * @record
 */

function ScaleControlOptions() {}
/**
 * Style id. Used to select what style of scale control to display.
 * @type {?|undefined}
 */


ScaleControlOptions.prototype.style;
/** @enum {number} */

var ScaleControlStyle = {
  DEFAULT: 0
};
exports.ScaleControlStyle = ScaleControlStyle;
ScaleControlStyle[ScaleControlStyle.DEFAULT] = 'DEFAULT';
/**
 * Options for the rendering of the Street View pegman control on the map.
 * @record
 */

function StreetViewControlOptions() {}
/**
 * Position id. Used to specify the position of the control on the map. The
 * default position is embedded within the navigation (zoom and pan) controls.
 * If this position is empty or the same as that specified in the
 * zoomControlOptions or panControlOptions, the Street View control will be
 * displayed as part of the navigation controls. Otherwise, it will be displayed
 * separately.
 * @type {?|undefined}
 */


StreetViewControlOptions.prototype.position;
/**
 * Options for the rendering of the zoom control.
 * @record
 */

function ZoomControlOptions() {}
/**
 * Position id. Used to specify the position of the control on the map.
 * The default position is TOP_LEFT.
 * @type {?|undefined}
 */


ZoomControlOptions.prototype.position;
/** @type {?|undefined} */

ZoomControlOptions.prototype.style;
/** @enum {number} */

var ZoomControlStyle = {
  DEFAULT: 0,
  LARGE: 1,
  SMALL: 2
};
exports.ZoomControlStyle = ZoomControlStyle;
ZoomControlStyle[ZoomControlStyle.DEFAULT] = 'DEFAULT';
ZoomControlStyle[ZoomControlStyle.LARGE] = 'LARGE';
ZoomControlStyle[ZoomControlStyle.SMALL] = 'SMALL';
/**
 * Options for the rendering of the fullscreen control.
 * @record
 */

function FullscreenControlOptions() {}
/**
 * Position id. Used to specify the position of the control on the map.
 * The default position is RIGHT_TOP.
 * @type {?|undefined}
 */


FullscreenControlOptions.prototype.position;