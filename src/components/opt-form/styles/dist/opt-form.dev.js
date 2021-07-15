"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Button = exports.Break = exports.Input = exports.Container = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 19.2px;\n  color: white;\n  text-align: center;\n  @media (max-width: 600px) {\n    font-size: 16px;\n    line-height: 22px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  height: 70px;\n  background: #e50914;\n  color: white;\n  text-transform: uppercase;\n  padding: 0 32px;\n  font-size: 26px;\n  border: 0;\n  cursor: pointer;\n  img {\n    margin-left: 10px;\n    filter: brightness(0) invert(1);\n    width: 24px;\n    @media (max-width: 1000px) {\n      width: 16px;\n    }\n  }\n  &:hover {\n    background: #f40612;\n  }\n  @media (max-width: 1000px) {\n    height: 50px;\n    font-size: 16px;\n    margin-top: 20px;\n    font-weight: bold;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex-basis: 100%;\n  height: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  max-width: 450px;\n  width: 100%;\n  border: 0;\n  padding: 10px;\n  height: 70px;\n  box-sizing: border-box;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  margin-top: 20px;\n  flex-wrap: wrap;\n  @media (max-width: 1000px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _macro["default"].div(_templateObject());

exports.Container = Container;

var Input = _macro["default"].input(_templateObject2());

exports.Input = Input;

var Break = _macro["default"].div(_templateObject3());

exports.Break = Break;

var Button = _macro["default"].button(_templateObject4());

exports.Button = Button;

var Text = _macro["default"].p(_templateObject5());

exports.Text = Text;