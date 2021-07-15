"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyles = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html, body {\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: #000000;\n  color: #333333;\n  font-size: 16px;\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject());
exports.GlobalStyles = GlobalStyles;