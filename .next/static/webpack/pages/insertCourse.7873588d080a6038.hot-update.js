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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SlideShow\": function() { return /* binding */ SlideShow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SlideShow(param) {\n    var img_1 = param.img_1, img_2 = param.img_2, img_3 = param.img_3;\n    var _this = this;\n    _s();\n    var background = [\n        {\n            img_1: img_1\n        },\n        {\n            img_2: img_2\n        },\n        {\n            img_3: img_3\n        }\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), index = ref[0], setIndex = ref[1];\n    var delay = 1500;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setTimeout(function() {\n            return setIndex(function(prevIndex) {\n                return prevIndex === background.length - 1 ? 0 : prevIndex + 1;\n            });\n        }, delay);\n        return function() {};\n    }, [\n        index\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"a80a04f1097f0cc\",\n                        [\n                            -index * 100,\n                            img_1\n                        ]\n                    ]\n                ]) + \" \" + \"slideshow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                        [\n                            \"a80a04f1097f0cc\",\n                            [\n                                -index * 100,\n                                img_1\n                            ]\n                        ]\n                    ]) + \" \" + \"slideshowSlider\",\n                    children: background.map(function(image, index1) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                backgroundImage: \"url(\".concat(image, \")\")\n                            },\n                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                [\n                                    \"a80a04f1097f0cc\",\n                                    [\n                                        -index * 100,\n                                        img_1\n                                    ]\n                                ]\n                            ]) + \" \" + \"slide\"\n                        }, index1, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\components\\\\SlideShow.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\components\\\\SlideShow.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\components\\\\SlideShow.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"a80a04f1097f0cc\",\n                dynamic: [\n                    -index * 100,\n                    img_1\n                ],\n                children: \".slideshow.__jsx-style-dynamic-selector{overflow:hidden;max-width:500px}.slideshowSlider.__jsx-style-dynamic-selector{white-space:nowrap;-webkit-transform:translate3d(\".concat(-index * 100, \"%, 0, 0);-moz-transform:translate3d(\").concat(-index * 100, \"%, 0, 0);transform:translate3d(\").concat(-index * 100, \"%, 0, 0);-webkit-transition:ease 1s;-moz-transition:ease 1s;-o-transition:ease 1s;transition:ease 1s}.slide.__jsx-style-dynamic-selector{display:inline-block;height:400px;width:100%;background-image:url(\").concat(img_1, \");-webkit-background-size:100%;-moz-background-size:100%;-o-background-size:100%;background-size:100%;background-repeat:no-repeat}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n}\n_s(SlideShow, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = SlideShow;\nvar _c;\n$RefreshReg$(_c, \"SlideShow\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TbGlkZVNob3cuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBQTBCO0FBQzZCO0FBRWhELFNBQVNJLFNBQVMsQ0FBQyxLQUF1QixFQUFFO1FBQXZCQyxLQUFLLEdBQVAsS0FBdUIsQ0FBckJBLEtBQUssRUFBRUMsS0FBSyxHQUFkLEtBQXVCLENBQWRBLEtBQUssRUFBRUMsS0FBSyxHQUFyQixLQUF1QixDQUFQQSxLQUFLOzs7SUFDN0MsSUFBTUMsVUFBVSxHQUFHO1FBQUM7WUFBRUgsS0FBSyxFQUFMQSxLQUFLO1NBQUU7UUFBRTtZQUFFQyxLQUFLLEVBQUxBLEtBQUs7U0FBRTtRQUFFO1lBQUVDLEtBQUssRUFBTEEsS0FBSztTQUFFO0tBQUM7SUFDcEQsSUFBMEJOLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUJRLEtBQUssR0FBY1IsR0FBVyxHQUF6QixFQUFFUyxRQUFRLEdBQUlULEdBQVcsR0FBZjtJQUN0QixJQUFNVSxLQUFLLEdBQUcsSUFBSTtJQUVsQlIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RTLFVBQVUsQ0FDUjttQkFDRUYsUUFBUSxDQUFDLFNBQVVHLFNBQVMsRUFBRTtnQkFDNUIsT0FBT0EsU0FBUyxLQUFLTCxVQUFVLENBQUNNLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHRCxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2pFLENBQUMsQ0FBQztTQUFBLEVBQ0pGLEtBQUssQ0FDTixDQUFDO1FBRUYsT0FBTyxXQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUMsRUFBRTtRQUFDRixLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBQ1oscUJBQ0U7OzBCQUNFLDhEQUFDTSxLQUFHOzs7Ozs0QkF1QjJCLENBQUNOLEtBQUssR0FBRyxHQUFHOzRCQVFiSixLQUFLOzs7MkJBL0JwQixXQUFXOzBCQUN4Qiw0RUFBQ1UsS0FBRzs7Ozs7Z0NBc0J5QixDQUFDTixLQUFLLEdBQUcsR0FBRztnQ0FRYkosS0FBSzs7OytCQTlCbEIsaUJBQWlCOzhCQUM3QkcsVUFBVSxDQUFDUSxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFFUixNQUFLOzZDQUMzQiw4REFBQ00sS0FBRzs0QkFHRkcsS0FBSyxFQUFFO2dDQUFFQyxlQUFlLEVBQUUsTUFBSyxDQUFRLE1BQUMsQ0FBUEYsS0FBSyxFQUFDLEdBQUMsQ0FBQzs2QkFBRTs7Ozs7d0NBaUJwQixDQUFDUixLQUFLLEdBQUcsR0FBRzt3Q0FRYkosS0FBSzs7O3VDQTNCakIsT0FBTzsyQkFDWkksTUFBSzs7OztpQ0FFVjtxQkFDSCxDQUFDOzs7Ozt3QkFDRTs7Ozs7b0JBQ0Y7Ozs7b0JBYXlCLENBQUNBLEtBQUssR0FBRyxHQUFHO29CQVFiSixLQUFLOztvTUFSSixNQUFZLENBQVosQ0FBQ0ksS0FBSyxHQUFHLEdBQUcseUNBQUMsQ0FBYixNQUFZLENBQVosQ0FBQ0EsS0FBSyxHQUFHLEdBQUcsb0NBQUMsQ0FRZEosTUFBSyxDQVJKLENBQUNJLEtBQUssR0FBRyxHQUFHLGdOQVFQLFFBQU5KLEtBQUssdUlBcER6Qzs7O29CQTBETyxDQUNIO0FBQ0osQ0FBQztHQXpEZUQsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NsaWRlU2hvdy5qc3g/Nzc2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCBVc2VFZmZlY3QsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNsaWRlU2hvdyh7IGltZ18xLCBpbWdfMiwgaW1nXzMgfSkge1xyXG4gIGNvbnN0IGJhY2tncm91bmQgPSBbeyBpbWdfMSB9LCB7IGltZ18yIH0sIHsgaW1nXzMgfV07XHJcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBkZWxheSA9IDE1MDA7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAoKSA9PlxyXG4gICAgICAgIHNldEluZGV4KGZ1bmN0aW9uIChwcmV2SW5kZXgpIHtcclxuICAgICAgICAgIHJldHVybiBwcmV2SW5kZXggPT09IGJhY2tncm91bmQubGVuZ3RoIC0gMSA/IDAgOiBwcmV2SW5kZXggKyAxO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICBkZWxheVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge307XHJcbiAgfSwgW2luZGV4XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVzaG93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXNob3dTbGlkZXJcIj5cclxuICAgICAgICAgIHtiYWNrZ3JvdW5kLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZVwiXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLyogU2xpZGVzaG93ICovXHJcblxyXG4gICAgICAgICAgLnNsaWRlc2hvdyB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNsaWRlc2hvd1NsaWRlciB7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHstaW5kZXggKiAxMDB9JSwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGVhc2UgMXM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNsaWRlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aW1nXzF9KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVXNlRWZmZWN0IiwidXNlRWZmZWN0IiwiU2xpZGVTaG93IiwiaW1nXzEiLCJpbWdfMiIsImltZ18zIiwiYmFja2dyb3VuZCIsImluZGV4Iiwic2V0SW5kZXgiLCJkZWxheSIsInNldFRpbWVvdXQiLCJwcmV2SW5kZXgiLCJsZW5ndGgiLCJkaXYiLCJtYXAiLCJpbWFnZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SlideShow.jsx\n"));

/***/ })

});