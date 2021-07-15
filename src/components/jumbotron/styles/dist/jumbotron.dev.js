"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.Item = exports.Image = exports.SubTitle = exports.Title = exports.Pane = exports.Inner = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  @media (max-width: 1000px) {\n    ", ":last-of-type h2 {\n      margin-bottom: 50px;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  border-bottom: 8px solid #222;\n  padding: 50px 5%;\n  color: white;\n  overflow: hidden;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  height: auto;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 26px;\n  font-weight: normal;\n  line-height: normal;\n  @media (max-width: 600px) {\n    font-size: 18px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 50px;\n  line-height: 1.1;\n  margin-bottom: 8px;\n  @media (max-width: 600px) {\n    font-size: 35px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  @media (max-width: 1000px) {\n    width: 100%;\n    padding: 0 45px;\n    text-align: center;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: ", ";\n  max-width: 1100px;\n  margin: auto;\n  width: 100%;\n  @media (max-width: 1000px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Inner = _macro["default"].div(_templateObject(), function (_ref) {
  var direction = _ref.direction;
  return direction;
});

exports.Inner = Inner;

var Pane = _macro["default"].div(_templateObject2());

exports.Pane = Pane;

var Title = _macro["default"].h1(_templateObject3());

exports.Title = Title;

var SubTitle = _macro["default"].h2(_templateObject4());

exports.SubTitle = SubTitle;

var Image = _macro["default"].img(_templateObject5());

exports.Image = Image;

var Item = _macro["default"].div(_templateObject6());

exports.Item = Item;

var Container = _macro["default"].div(_templateObject7(), Item);

exports.Container = Container;