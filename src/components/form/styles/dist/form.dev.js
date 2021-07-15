"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Submit = exports.Input = exports.Link = exports.TextSmall = exports.Text = exports.Title = exports.Base = exports.Error = exports.Container = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background: #e50914;\n  border-radius: 4px;\n  font-size: 16px;\n  font-weight: bold;\n  margin: 24px 0 12px;\n  padding: 16px;\n  border: 0;\n  color: white;\n  cursor: pointer;\n  &:disabled {\n    opacity: 0.5;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background: #333;\n  border-radius: 4px;\n  border: 0;\n  color: #fff;\n  height: 50px;\n  line-height: 50px;\n  padding: 5px 20px;\n  margin-bottom: 20px;\n  &:last-of-type {\n    margin-bottom: 30px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  font-size: 13px;\n  line-height: normal;\n  color: #8c8c8c;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: #737373;\n  font-size: 16px;\n  font-weight: 500;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  font-size: 32px;\n  font-weight: bold;\n  margin-bottom: 28px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  max-width: 450px;\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: #e87c03;\n  border-radius: 4px;\n  font-size: 14px;\n  margin: 0 0 16px;\n  color: white;\n  padding: 15px 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  min-height: 660px;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 5px;\n  box-sizing: border-box;\n  width: 100%;\n  margin: auto;\n  max-width: 450px;\n  padding: 60px 68px 40px;\n  margin-bottom: 100px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _macro["default"].div(_templateObject());

exports.Container = Container;

var Error = _macro["default"].div(_templateObject2());

exports.Error = Error;

var Base = _macro["default"].form(_templateObject3());

exports.Base = Base;

var Title = _macro["default"].h1(_templateObject4());

exports.Title = Title;

var Text = _macro["default"].p(_templateObject5());

exports.Text = Text;

var TextSmall = _macro["default"].p(_templateObject6());

exports.TextSmall = TextSmall;
var Link = (0, _macro["default"])(_reactRouterDom.Link)(_templateObject7());
exports.Link = Link;

var Input = _macro["default"].input(_templateObject8());

exports.Input = Input;

var Submit = _macro["default"].button(_templateObject9());

exports.Submit = Submit;