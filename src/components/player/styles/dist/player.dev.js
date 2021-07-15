"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Close = exports.Inner = exports.Overlay = exports.Container = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-color: #e50914;\n  border-color: #ff0a16;\n  width: 115px;\n  height: 45px;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: white;\n  font-size: 18px;\n  height: 45px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 0;\n  &:hover {\n    transform: scale(1.05);\n    background-color: #ff0a16;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  width: 22px;\n  height: 22px;\n  opacity: 0.3;\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  &:hover {\n    opacity: 1;\n  }\n  &:before,\n  &:after {\n    position: absolute;\n    left: 10px;\n    top: 0;\n    content: ' ';\n    height: 22px;\n    width: 2px;\n    background-color: #333;\n  }\n  &:before {\n    transform: rotate(45deg);\n  }\n  &:after {\n    transform: rotate(-45deg);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  max-width: 900px;\n  margin: auto;\n  video {\n    height: 100%;\n    width: 100%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  margin: 0 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _macro["default"].div(_templateObject());

exports.Container = Container;

var Overlay = _macro["default"].div(_templateObject2());

exports.Overlay = Overlay;

var Inner = _macro["default"].div(_templateObject3());

exports.Inner = Inner;

var Close = _macro["default"].button(_templateObject4());

exports.Close = Close;

var Button = _macro["default"].button(_templateObject5());

exports.Button = Button;