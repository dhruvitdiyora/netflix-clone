"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayButton = exports.Logo = exports.Text = exports.FeatureCallOut = exports.Feature = exports.Profile = exports.Dropdown = exports.Picture = exports.ButtonLink = exports.SearchIcon = exports.Search = exports.SearchInput = exports.Group = exports.Link = exports.Container = exports.Background = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);\n  background-color: #e6e6e6;\n  color: #000;\n  border-width: 0;\n  padding: 10px 20px;\n  border-radius: 5px;\n  max-width: 130px;\n  font-weight: bold;\n  font-size: 20px;\n  margin-top: 10px;\n  cursor: pointer;\n  transition: background-color 0.5s ease;\n  &:hover {\n    background-color: #ff1e1e;\n    color: white;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  height: 32px;\n  width: 108px;\n  margin-right: 40px;\n  @media (min-width: 1449px) {\n    height: 45px;\n    width: 167px;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  font-size: 22px;\n  line-height: normal;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  font-size: 50px;\n  line-height: normal;\n  font-weight: bold;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);\n  margin: 0;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  padding: 150px 0 500px 0;\n  flex-direction: column;\n  align-items: normal;\n  width: 50%;\n  @media (max-width: 1100px) {\n    display: none;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n  position: relative;\n  button {\n    cursor: pointer;\n  }\n  &:hover > ", " {\n    display: flex;\n    flex-direction: column;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  position: absolute;\n  background-color: black;\n  padding: 10px;\n  width: 100px;\n  top: 32px;\n  right: 10px;\n  ", ":last-of-type ", " {\n    cursor: pointer;\n  }\n  ", " {\n    margin-bottom: 10px;\n    &:last-of-type {\n      margin-bottom: 0;\n    }\n    ", ", ", " {\n      cursor: default;\n    }\n  }\n  button {\n    margin-right: 10px;\n  }\n  p {\n    font-size: 12px;\n    margin-bottom: 0;\n    margin-top: 0;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background: url(", ");\n  background-size: contain;\n  border: 0;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  background-color: #e50914;\n  width: 84px;\n  height: fit-content;\n  color: white;\n  border: 0;\n  font-size: 15px;\n  border-radius: 3px;\n  padding: 8px 17px;\n  cursor: pointer;\n  text-decoration: none;\n  box-sizing: border-box;\n  &:hover {\n    background: #f40612;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  background-color: transparent;\n  border: 0;\n  img {\n    filter: brightness(0) invert(1);\n    width: 16px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  svg {\n    color: white;\n    cursor: pointer;\n  }\n  @media (max-width: 700px) {\n    display: none;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-color: #44444459;\n  color: white;\n  border: 1px solid white;\n  transition: width 0.5s;\n  height: 30px;\n  font-size: 14px;\n  margin-left: ", ";\n  padding: ", ";\n  opacity: ", ";\n  width: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  text-decoration: none;\n  margin-right: 30px;\n  font-weight: ", ";\n  cursor: pointer;\n  &:hover {\n    font-weight: bold;\n  }\n  &:last-of-type {\n    margin-right: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0 56px;\n  height: 64px;\n  padding: 18px 0;\n  justify-content: space-between;\n  align-items: center;\n  a {\n    display: flex;\n  }\n  @media (max-width: 1000px) {\n    margin: 0 30px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  background: url(", ") top left / cover\n    no-repeat;\n  @media (max-width: 1100px) {\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Background = _macro["default"].div(_templateObject(), function (_ref) {
  var src = _ref.src;
  return src ? "../images/misc/".concat(src, ".jpg") : '../images/misc/home-bg.jpg';
}, function (_ref2) {
  var dontShowOnSmallViewPort = _ref2.dontShowOnSmallViewPort;
  return dontShowOnSmallViewPort && "background: none;";
});

exports.Background = Background;

var Container = _macro["default"].div(_templateObject2());

exports.Container = Container;

var Link = _macro["default"].p(_templateObject3(), function (_ref3) {
  var active = _ref3.active;
  return active === 'true' ? '700' : 'normal';
});

exports.Link = Link;

var Group = _macro["default"].div(_templateObject4());

exports.Group = Group;

var SearchInput = _macro["default"].input(_templateObject5(), function (_ref4) {
  var active = _ref4.active;
  return active === true ? '10px' : '0';
}, function (_ref5) {
  var active = _ref5.active;
  return active === true ? '0 10px' : '0';
}, function (_ref6) {
  var active = _ref6.active;
  return active === true ? '1' : '0';
}, function (_ref7) {
  var active = _ref7.active;
  return active === true ? '200px' : '0px';
});

exports.SearchInput = SearchInput;

var Search = _macro["default"].div(_templateObject6());

exports.Search = Search;

var SearchIcon = _macro["default"].button(_templateObject7());

exports.SearchIcon = SearchIcon;
var ButtonLink = (0, _macro["default"])(_reactRouterDom.Link)(_templateObject8());
exports.ButtonLink = ButtonLink;

var Picture = _macro["default"].button(_templateObject9(), function (_ref8) {
  var src = _ref8.src;
  return src;
});

exports.Picture = Picture;

var Dropdown = _macro["default"].div(_templateObject10(), Group, Link, Group, Link, Picture);

exports.Dropdown = Dropdown;

var Profile = _macro["default"].div(_templateObject11(), Dropdown);

exports.Profile = Profile;
var Feature = (0, _macro["default"])(Container)(_templateObject12());
exports.Feature = Feature;

var FeatureCallOut = _macro["default"].h2(_templateObject13());

exports.FeatureCallOut = FeatureCallOut;

var Text = _macro["default"].p(_templateObject14());

exports.Text = Text;

var Logo = _macro["default"].img(_templateObject15());

exports.Logo = Logo;

var PlayButton = _macro["default"].button(_templateObject16());

exports.PlayButton = PlayButton;