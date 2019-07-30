webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Pictures.js":
/*!********************************!*\
  !*** ./components/Pictures.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Picture */ "./components/Picture.js");

var _jsxFileName = "/Users/marcllopis/Desktop/dev/personal/graphsite/frontend/components/Pictures.js";

function _templateObject() {
  const data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query ALL_PICTURES_QUERY {\n    pictures {\n      id\n      title\n      description\n      image\n      largeImage\n    }\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}






const ALL_PICTURES_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
const Center = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Pictures__Center",
  componentId: "sc-11cw7rd-0"
})(["text-align:center;"]);
const PicturesList = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Pictures__PicturesList",
  componentId: "sc-11cw7rd-1"
})(["display:grid;grid-template-columns:2fr 1fr;grid-gap:60px;max-width:", ";margin:0 auto;"], props => props.theme.maxWidth);

class Pictures extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Center, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Pictures"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: ALL_PICTURES_QUERY,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, ({
      data,
      error,
      loading
    }) => {
      console.log('pay', data, error, loading);
      if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Loading...");
      if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Error: ", error.message);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PicturesList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, data.pictures.map(picture => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Picture__WEBPACK_IMPORTED_MODULE_5__["default"], {
        picture: picture,
        key: picture.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })));
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Pictures);

/***/ })

})
//# sourceMappingURL=index.js.165558677c9444efa752.hot-update.js.map