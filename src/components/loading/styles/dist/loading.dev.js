"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Picture = exports.Spinner = exports.ReleaseBody = exports.LockBody = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -22px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  z-index: 999;\n  :after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    background-image: url(/images/misc/spinner.png);\n    background-size: contain;\n    background-repeat: no-repeat;\n    margin-top: -150px;\n    margin-left: -75px;\n    width: 150px;\n    height: 150px;\n    animation-name: spin;\n    animation-duration: 1000ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n  @-ms-keyframes spin {\n    from {\n      -ms-transform: rotate(0deg);\n    }\n    to {\n      -ms-transform: rotate(360deg);\n    }\n  }\n  @-moz-keyframes spin {\n    from {\n      -moz-transform: rotate(0deg);\n    }\n    to {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    from {\n      -webkit-transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  body {\n    overflow: visible;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  body {\n    overflow: hidden;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LockBody = (0, _styledComponents.createGlobalStyle)(_templateObject());
exports.LockBody = LockBody;
var ReleaseBody = (0, _styledComponents.createGlobalStyle)(_templateObject2());
exports.ReleaseBody = ReleaseBody;

var Spinner = _styledComponents["default"].div(_templateObject3());

exports.Spinner = Spinner;

var Picture = _styledComponents["default"].img(_templateObject4());

exports.Picture = Picture;