"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/insertCourse",{

/***/ "./src/components/SlideShow.jsx":
/*!**************************************!*\
  !*** ./src/components/SlideShow.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SlideShow\": function() { return /* binding */ SlideShow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SlideShow(param) {\n    var img_1 = param.img_1, img_2 = param.img_2, img_3 = param.img_3;\n    var _this = this;\n    _s();\n    var background = [\n        \"background-image: url(\".concat(img_1, \")\"),\n        \"background-image: url(\".concat(img_2, \")\"),\n        \"background-image: url(\".concat(img_3, \")\"), \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), index = ref[0], setIndex = ref[1];\n    var delay = 2500;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setTimeout(function() {\n            return setIndex(function(prevIndex) {\n                return prevIndex === background.length - 1 ? 0 : prevIndex + 1;\n            });\n        }, delay);\n        return function() {};\n    }, [\n        index\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"c2dc73c67bff086d\",\n                        [\n                            -index * 100\n                        ]\n                    ]\n                ]) + \" \" + \"slide_container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                        [\n                            \"c2dc73c67bff086d\",\n                            [\n                                -index * 100\n                            ]\n                        ]\n                    ]) + \" \" + \"slideshow\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"c2dc73c67bff086d\",\n                                [\n                                    -index * 100\n                                ]\n                            ]\n                        ]) + \" \" + \"slideshowSlider\",\n                        children: background.map(function(backgroundImage) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    backgroundImage: \"url()\"\n                                },\n                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                    [\n                                        \"c2dc73c67bff086d\",\n                                        [\n                                            -index * 100\n                                        ]\n                                    ]\n                                ]) + \" \" + \"slide\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\components\\\\SlideShow.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\components\\\\SlideShow.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\components\\\\SlideShow.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\components\\\\SlideShow.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"c2dc73c67bff086d\",\n                dynamic: [\n                    -index * 100\n                ],\n                children: \".slideshow.__jsx-style-dynamic-selector{margin:0 auto;overflow:hidden;max-width:500px}.slideshowSlider.__jsx-style-dynamic-selector{white-space:nowrap;-webkit-transform:translate3d(\".concat(-index * 100, \"%, 0, 0);-moz-transform:translate3d(\").concat(-index * 100, \"%, 0, 0);transform:translate3d(\").concat(-index * 100, \"%, 0, 0);-webkit-transition:ease 1e3ms;-moz-transition:ease 1e3ms;-o-transition:ease 1e3ms;transition:ease 1e3ms}.slide.__jsx-style-dynamic-selector{display:inline-block;height:400px;width:100%;-webkit-border-radius:40px;-moz-border-radius:40px;border-radius:40px}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n}\n_s(SlideShow, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = SlideShow;\nvar _c;\n$RefreshReg$(_c, \"SlideShow\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TbGlkZVNob3cuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBQTBCO0FBQzZCO0FBRWhELFNBQVNJLFNBQVMsQ0FBQyxLQUF1QixFQUFFO1FBQXZCQyxLQUFLLEdBQVAsS0FBdUIsQ0FBckJBLEtBQUssRUFBRUMsS0FBSyxHQUFkLEtBQXVCLENBQWRBLEtBQUssRUFBRUMsS0FBSyxHQUFyQixLQUF1QixDQUFQQSxLQUFLOzs7SUFDN0MsSUFBTUMsVUFBVSxHQUFHO1FBQ2hCLHdCQUFzQixDQUFRLE1BQUMsQ0FBUEgsS0FBSyxFQUFDLEdBQUMsQ0FBQztRQUNoQyx3QkFBc0IsQ0FBUSxNQUFDLENBQVBDLEtBQUssRUFBQyxHQUFDLENBQUM7UUFDaEMsd0JBQXNCLENBQVEsTUFBQyxDQUFQQyxLQUFLLEVBQUMsR0FBQyxDQUFDO0tBQ2xDO0lBQ0QsSUFBMEJOLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUJRLEtBQUssR0FBY1IsR0FBVyxHQUF6QixFQUFFUyxRQUFRLEdBQUlULEdBQVcsR0FBZjtJQUN0QixJQUFNVSxLQUFLLEdBQUcsSUFBSTtJQUVsQlIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RTLFVBQVUsQ0FDUjttQkFDRUYsUUFBUSxDQUFDLFNBQUNHLFNBQVM7dUJBQ2pCQSxTQUFTLEtBQUtMLFVBQVUsQ0FBQ00sTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUdELFNBQVMsR0FBRyxDQUFDO2FBQUEsQ0FDeEQ7U0FBQSxFQUNIRixLQUFLLENBQ04sQ0FBQztRQUVGLE9BQU8sV0FBTSxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDLEVBQUU7UUFBQ0YsS0FBSztLQUFDLENBQUMsQ0FBQztJQUNaLHFCQUNFOzswQkFDRSw4REFBQ00sS0FBRzs7Ozs7NEJBdUIyQixDQUFDTixLQUFLLEdBQUcsR0FBRzs7OzJCQXZCNUIsaUJBQWlCOzBCQUU5Qiw0RUFBQ00sS0FBRzs7Ozs7Z0NBcUJ5QixDQUFDTixLQUFLLEdBQUcsR0FBRzs7OytCQXJCMUIsV0FBVzs4QkFDeEIsNEVBQUNNLEtBQUc7Ozs7O29DQW9CdUIsQ0FBQ04sS0FBSyxHQUFHLEdBQUc7OzttQ0FwQnhCLGlCQUFpQjtrQ0FDN0JELFVBQVUsQ0FBQ1EsR0FBRyxDQUFDLFNBQUNDLGVBQWU7aURBQzlCLDhEQUFDRixLQUFHO2dDQUFtQkcsS0FBSyxFQUFFO29DQUFHRCxlQUFlLEVBQUcsT0FBSztpQ0FBRzs7Ozs7NENBa0JwQyxDQUFDUixLQUFLLEdBQUcsR0FBRzs7OzJDQWxCcEIsT0FBTzs7Ozs7cUNBQXlDO3lCQUNoRSxDQUFDOzs7Ozs0QkFDRTs7Ozs7d0JBQ0Y7Ozs7O29CQUNGOzs7O29CQWN5QixDQUFDQSxLQUFLLEdBQUcsR0FBRzs7a05BQVosTUFBWSxDQUFaLENBQUNBLEtBQUssR0FBRyxHQUFHLHlDQUFDLENBQWIsTUFBWSxDQUFaLENBQUNBLEtBQUssR0FBRyxHQUFHLG9DQUFDLFFBQWIsQ0FBQ0EsS0FBSyxHQUFHLEdBQUcsNlFBaERqRDs7O29CQTRETyxDQUNIO0FBQ0osQ0FBQztHQTNEZUwsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NsaWRlU2hvdy5qc3g/Nzc2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCBVc2VFZmZlY3QsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNsaWRlU2hvdyh7IGltZ18xLCBpbWdfMiwgaW1nXzMgfSkge1xyXG4gIGNvbnN0IGJhY2tncm91bmQgPSBbXHJcbiAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aW1nXzF9KWAsXHJcbiAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aW1nXzJ9KWAsXHJcbiAgICBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aW1nXzN9KWAsXHJcbiAgXTtcclxuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGRlbGF5ID0gMjUwMDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICgpID0+XHJcbiAgICAgICAgc2V0SW5kZXgoKHByZXZJbmRleCkgPT5cclxuICAgICAgICAgIHByZXZJbmRleCA9PT0gYmFja2dyb3VuZC5sZW5ndGggLSAxID8gMCA6IHByZXZJbmRleCArIDFcclxuICAgICAgICApLFxyXG4gICAgICBkZWxheVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge307XHJcbiAgfSwgW2luZGV4XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVfY29udGFpbmVyXCI+XHJcbiAgICAgICAge31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlc2hvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXNob3dTbGlkZXJcIj5cclxuICAgICAgICAgICAge2JhY2tncm91bmQubWFwKChiYWNrZ3JvdW5kSW1hZ2UpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlXCIgc3R5bGU9e3sgIGJhY2tncm91bmRJbWFnZTogYHVybCgpYCB9fSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC8qIFNsaWRlc2hvdyAqL1xyXG5cclxuICAgICAgICAgIC5zbGlkZXNob3cge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2xpZGVzaG93U2xpZGVyIHtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkey1pbmRleCAqIDEwMH0lLCAwLCAwKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogZWFzZSAxMDAwbXM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNsaWRlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlVzZUVmZmVjdCIsInVzZUVmZmVjdCIsIlNsaWRlU2hvdyIsImltZ18xIiwiaW1nXzIiLCJpbWdfMyIsImJhY2tncm91bmQiLCJpbmRleCIsInNldEluZGV4IiwiZGVsYXkiLCJzZXRUaW1lb3V0IiwicHJldkluZGV4IiwibGVuZ3RoIiwiZGl2IiwibWFwIiwiYmFja2dyb3VuZEltYWdlIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SlideShow.jsx\n"));

/***/ })

});