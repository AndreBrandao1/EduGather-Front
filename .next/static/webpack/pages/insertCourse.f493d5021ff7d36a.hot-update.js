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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SlideShow\": function() { return /* binding */ SlideShow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SlideShow(param) {\n    var img_1 = param.img_1, img_2 = param.img_2, img_3 = param.img_3;\n    var _this = this;\n    _s();\n    var background = [\n        {\n            img_1: img_1\n        },\n        {\n            img_2: img_2\n        },\n        {\n            img_3: img_3\n        }\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), index = ref[0], setIndex = ref[1];\n    var delay = 1500;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setTimeout(function() {\n            return setIndex(function(prevIndex) {\n                return prevIndex === background.length - 1 ? 0 : prevIndex + 1;\n            });\n        }, 3500);\n        return function() {};\n    }, [\n        index\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"a80a04f1097f0cc\",\n                        [\n                            -index * 100,\n                            img_1\n                        ]\n                    ]\n                ]) + \" \" + \"slideshow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                        [\n                            \"a80a04f1097f0cc\",\n                            [\n                                -index * 100,\n                                img_1\n                            ]\n                        ]\n                    ]) + \" \" + \"slideshowSlider\",\n                    children: background.map(function(image, index1) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                backgroundImage: \"url(\".concat(image, \")\")\n                            },\n                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                [\n                                    \"a80a04f1097f0cc\",\n                                    [\n                                        -index * 100,\n                                        img_1\n                                    ]\n                                ]\n                            ]) + \" \" + \"slide\"\n                        }, index1, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\components\\\\SlideShow.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\components\\\\SlideShow.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\components\\\\SlideShow.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"a80a04f1097f0cc\",\n                dynamic: [\n                    -index * 100,\n                    img_1\n                ],\n                children: \".slideshow.__jsx-style-dynamic-selector{overflow:hidden;max-width:500px}.slideshowSlider.__jsx-style-dynamic-selector{white-space:nowrap;-webkit-transform:translate3d(\".concat(-index * 100, \"%, 0, 0);-moz-transform:translate3d(\").concat(-index * 100, \"%, 0, 0);transform:translate3d(\").concat(-index * 100, \"%, 0, 0);-webkit-transition:ease 1s;-moz-transition:ease 1s;-o-transition:ease 1s;transition:ease 1s}.slide.__jsx-style-dynamic-selector{display:inline-block;height:400px;width:100%;background-image:url(\").concat(img_1, \");-webkit-background-size:100%;-moz-background-size:100%;-o-background-size:100%;background-size:100%;background-repeat:no-repeat}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n}\n_s(SlideShow, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = SlideShow;\nvar _c;\n$RefreshReg$(_c, \"SlideShow\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TbGlkZVNob3cuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBQTBCO0FBQzZCO0FBRWhELFNBQVNJLFNBQVMsQ0FBQyxLQUF1QixFQUFFO1FBQXZCQyxLQUFLLEdBQVAsS0FBdUIsQ0FBckJBLEtBQUssRUFBRUMsS0FBSyxHQUFkLEtBQXVCLENBQWRBLEtBQUssRUFBRUMsS0FBSyxHQUFyQixLQUF1QixDQUFQQSxLQUFLOzs7SUFDN0MsSUFBTUMsVUFBVSxHQUFHO1FBQUM7WUFBRUgsS0FBSyxFQUFMQSxLQUFLO1NBQUU7UUFBRTtZQUFFQyxLQUFLLEVBQUxBLEtBQUs7U0FBRTtRQUFFO1lBQUVDLEtBQUssRUFBTEEsS0FBSztTQUFFO0tBQUM7SUFDcEQsSUFBMEJOLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUJRLEtBQUssR0FBY1IsR0FBVyxHQUF6QixFQUFFUyxRQUFRLEdBQUlULEdBQVcsR0FBZjtJQUN0QixJQUFNVSxLQUFLLEdBQUcsSUFBSTtJQUVsQlIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RTLFVBQVUsQ0FDUjttQkFDRUYsUUFBUSxDQUFDLFNBQVVHLFNBQVMsRUFBRTtnQkFDNUIsT0FBT0EsU0FBUyxLQUFLTCxVQUFVLENBQUNNLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHRCxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQztTQUFBLEVBQ0osSUFBSSxDQUNMLENBQUM7UUFFRixPQUFPLFdBQU0sQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQyxFQUFFO1FBQUNKLEtBQUs7S0FBQyxDQUFDLENBQUM7SUFDWixxQkFDRTs7MEJBQ0UsOERBQUNNLEtBQUc7Ozs7OzRCQXVCMkIsQ0FBQ04sS0FBSyxHQUFHLEdBQUc7NEJBUWJKLEtBQUs7OzsyQkEvQnBCLFdBQVc7MEJBQ3hCLDRFQUFDVSxLQUFHOzs7OztnQ0FzQnlCLENBQUNOLEtBQUssR0FBRyxHQUFHO2dDQVFiSixLQUFLOzs7K0JBOUJsQixpQkFBaUI7OEJBQzdCRyxVQUFVLENBQUNRLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUVSLE1BQUs7NkNBQzNCLDhEQUFDTSxLQUFHOzRCQUdGRyxLQUFLLEVBQUU7Z0NBQUVDLGVBQWUsRUFBRSxNQUFLLENBQVEsTUFBQyxDQUFQRixLQUFLLEVBQUMsR0FBQyxDQUFDOzZCQUFFOzs7Ozt3Q0FpQnBCLENBQUNSLEtBQUssR0FBRyxHQUFHO3dDQVFiSixLQUFLOzs7dUNBM0JqQixPQUFPOzJCQUNaSSxNQUFLOzs7O2lDQUVWO3FCQUNILENBQUM7Ozs7O3dCQUNFOzs7OztvQkFDRjs7OztvQkFheUIsQ0FBQ0EsS0FBSyxHQUFHLEdBQUc7b0JBUWJKLEtBQUs7O29NQVJKLE1BQVksQ0FBWixDQUFDSSxLQUFLLEdBQUcsR0FBRyx5Q0FBQyxDQUFiLE1BQVksQ0FBWixDQUFDQSxLQUFLLEdBQUcsR0FBRyxvQ0FBQyxDQVFkSixNQUFLLENBUkosQ0FBQ0ksS0FBSyxHQUFHLEdBQUcsZ05BUVAsUUFBTkosS0FBSyx1SUFwRHpDOzs7b0JBMERPLENBQ0g7QUFDSixDQUFDO0dBekRlRCxTQUFTO0FBQVRBLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2xpZGVTaG93LmpzeD83NzY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIFVzZUVmZmVjdCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2xpZGVTaG93KHsgaW1nXzEsIGltZ18yLCBpbWdfMyB9KSB7XHJcbiAgY29uc3QgYmFja2dyb3VuZCA9IFt7IGltZ18xIH0sIHsgaW1nXzIgfSwgeyBpbWdfMyB9XTtcclxuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGRlbGF5ID0gMTUwMDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICgpID0+XHJcbiAgICAgICAgc2V0SW5kZXgoZnVuY3Rpb24gKHByZXZJbmRleCkge1xyXG4gICAgICAgICAgcmV0dXJuIHByZXZJbmRleCA9PT0gYmFja2dyb3VuZC5sZW5ndGggLSAxID8gMCA6IHByZXZJbmRleCArIDE7XHJcbiAgICAgICAgfSksXHJcbiAgICAgIDM1MDBcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHt9O1xyXG4gIH0sIFtpbmRleF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlc2hvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVzaG93U2xpZGVyXCI+XHJcbiAgICAgICAgICB7YmFja2dyb3VuZC5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVcIlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2V9KWAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC8qIFNsaWRlc2hvdyAqL1xyXG5cclxuICAgICAgICAgIC5zbGlkZXNob3cge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zbGlkZXNob3dTbGlkZXIge1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR7LWluZGV4ICogMTAwfSUsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBlYXNlIDFzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zbGlkZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2ltZ18xfSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlVzZUVmZmVjdCIsInVzZUVmZmVjdCIsIlNsaWRlU2hvdyIsImltZ18xIiwiaW1nXzIiLCJpbWdfMyIsImJhY2tncm91bmQiLCJpbmRleCIsInNldEluZGV4IiwiZGVsYXkiLCJzZXRUaW1lb3V0IiwicHJldkluZGV4IiwibGVuZ3RoIiwiZGl2IiwibWFwIiwiaW1hZ2UiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SlideShow.jsx\n"));

/***/ })

});