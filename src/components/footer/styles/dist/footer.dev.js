"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Break = exports.Text = exports.Title = exports.Link = exports.Row = exports.Column = exports.Container = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  flex-basis: 100%;\n  height: 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 13px;\n  color: #757575;\n  margin-bottom: 40px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  color: #757575;\n  margin-bottom: 40px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #757575;\n  margin-bottom: 20px;\n  font-size: 13px;\n  text-decoration: none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n  grid-gap: 15px;\n  @media (max-width: 1000px) {\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 70px 56px;\n  margin: auto;\n  max-width: 1000px;\n  flex-direction: column;\n  @media (max-width: 1000px) {\n    padding: 70px 30px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _macro["default"].div(_templateObject());

exports.Container = Container;

var Column = _macro["default"].div(_templateObject2());

exports.Column = Column;

var Row = _macro["default"].div(_templateObject3());

exports.Row = Row;

var Link = _macro["default"].a(_templateObject4());

exports.Link = Link;

var Title = _macro["default"].p(_templateObject5());

exports.Title = Title;

var Text = _macro["default"].p(_templateObject6());

exports.Text = Text;

var Break = _macro["default"].div(_templateObject7());

exports.Break = Break;