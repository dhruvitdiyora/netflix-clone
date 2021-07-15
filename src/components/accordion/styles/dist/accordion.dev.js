"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body = exports.Header = exports.Item = exports.Title = exports.Inner = exports.Frame = exports.Container = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  max-height: 1200px;\n  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);\n  font-size: 26px;\n  font-weight: normal;\n  line-height: normal;\n  background: #303030;\n  padding: 0.8em 2.2em 0.8em 1.2em;\n  white-space: pre-wrap;\n  user-select: none;\n  @media (max-width: 600px) {\n    font-size: 16px;\n    line-height: 22px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n  margin-bottom: 1px;\n  font-size: 26px;\n  font-weight: normal;\n  background: #303030;\n  padding: 0.8em 1.2em 0.8em 1.2em;\n  user-select: none;\n  align-items: center;\n  img {\n    filter: brightness(0) invert(1);\n    width: 24px;\n    @media (max-width: 600px) {\n      width: 16px;\n    }\n  }\n  @media (max-width: 600px) {\n    font-size: 16px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  margin-bottom: 10px;\n  margin: auto;\n  max-width: 670px;\n  width: 100%;\n  &:first-of-type {\n    margin-top: 3em;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 50px;\n  line-height: 1.1;\n  margin-top: 0;\n  margin-bottom: 8px;\n  color: white;\n  text-align: center;\n  @media (max-width: 600px) {\n    font-size: 35px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 70px 45px;\n  flex-direction: column;\n  max-width: 815px;\n  margin: auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 40px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  border-bottom: 8px solid #222;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _macro["default"].div(_templateObject());

exports.Container = Container;

var Frame = _macro["default"].div(_templateObject2());

exports.Frame = Frame;

var Inner = _macro["default"].div(_templateObject3());

exports.Inner = Inner;

var Title = _macro["default"].h1(_templateObject4());

exports.Title = Title;

var Item = _macro["default"].div(_templateObject5());

exports.Item = Item;

var Header = _macro["default"].div(_templateObject6());

exports.Header = Header;

var Body = _macro["default"].div(_templateObject7());

exports.Body = Body;