"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = exports.Picture = exports.Name = exports.List = exports.Title = exports.Container = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  max-height: 200px;\n  max-width: 200px;\n  list-style-type: none;\n  text-align: center;\n  margin-right: 30px;\n  &:hover > ", " {\n    border: 3px solid white;\n  }\n  &:hover ", " {\n    font-weight: bold;\n    color: white;\n  }\n  &:last-of-type {\n    margin-right: 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 150px;\n  height: auto;\n  border: 3px solid black;\n  cursor: pointer;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #808080;\n  text-overflow: ellipsis;\n  font-size: 16px;\n  &:hover {\n    font-weight: bold;\n    color: #e5e5e5;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  color: #fff;\n  font-size: 48px;\n  text-align: center;\n  font-weight: 500;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  max-width: 80%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _macro["default"].div(_templateObject());

exports.Container = Container;

var Title = _macro["default"].h1(_templateObject2());

exports.Title = Title;

var List = _macro["default"].ul(_templateObject3());

exports.List = List;

var Name = _macro["default"].p(_templateObject4());

exports.Name = Name;

var Picture = _macro["default"].img(_templateObject5());

exports.Picture = Picture;

var Item = _macro["default"].li(_templateObject6(), Picture, Name);

exports.Item = Item;