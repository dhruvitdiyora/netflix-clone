"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubTitle = exports.Title = exports.Container = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  font-size: 26px;\n  font-weight: normal;\n  margin: 16px auto;\n  @media (max-width: 600px) {\n    font-size: 18px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  max-width: 640px;\n  font-size: 50px;\n  font-weight: 500;\n  margin: auto;\n  @media (max-width: 600px) {\n    font-size: 35px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border-bottom: 8px solid #222;\n  text-align: center;\n  padding: 165px 45px;\n"]);

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

var SubTitle = _macro["default"].h2(_templateObject3());

exports.SubTitle = SubTitle;