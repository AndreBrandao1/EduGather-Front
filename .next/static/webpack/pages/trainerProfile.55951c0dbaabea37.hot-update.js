"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/trainerProfile",{

/***/ "./src/components/Collapsable.jsx":
/*!****************************************!*\
  !*** ./src/components/Collapsable.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Collapsable\": function() { return /* binding */ Collapsable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Collapsable(param) {\n    var label = param.label, children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-da6bdb942ebfcb0b\" + \" \" + \"collapsable\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return setIsOpen(!isOpen);\n                        },\n                        className: \"jsx-da6bdb942ebfcb0b\" + \" \" + \"toggle\",\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\components\\\\Collapsable.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: containerRef,\n                        style: isOpen ? {\n                            height: containerRef.current.scrollHeight + \"px\"\n                        } : {\n                            height: \"0px\"\n                        },\n                        className: \"jsx-da6bdb942ebfcb0b\" + \" \" + \"content-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-da6bdb942ebfcb0b\" + \" \" + \"content\",\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\components\\\\Collapsable.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\components\\\\Collapsable.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\components\\\\Collapsable.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"da6bdb942ebfcb0b\",\n                children: \".toggle.jsx-da6bdb942ebfcb0b{border:unset;width:100%;text-align:left;-webkit-border-top-left-radius:15px;-moz-border-radius-topleft:15px;border-top-left-radius:15px;border\\r\\n\\r\\n            padding: 5px 5px 0 5px;}.collapsable.jsx-da6bdb942ebfcb0b .content.jsx-da6bdb942ebfcb0b{padding:.5rem;border:1px solid black}.collapsable.jsx-da6bdb942ebfcb0b .content-container.jsx-da6bdb942ebfcb0b{height:0px;overflow:hidden;-webkit-transition:height ease.3s;-moz-transition:height ease.3s;-o-transition:height ease.3s;transition:height ease.3s}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n}\n_s(Collapsable, \"NmZSPM66ZfbiZXF4hhD+p1ZfSbk=\");\n_c = Collapsable;\nvar _c;\n$RefreshReg$(_c, \"Collapsable\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db2xsYXBzYWJsZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFBMEI7QUFDSztBQUNFO0FBQ0E7QUFFMUIsU0FBU0ksV0FBVyxDQUFDLEtBQW1CLEVBQUU7UUFBbkJDLEtBQUssR0FBUCxLQUFtQixDQUFqQkEsS0FBSyxFQUFFQyxRQUFRLEdBQWpCLEtBQW1CLENBQVZBLFFBQVE7O0lBQzNDLElBQTRCSCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXBDSSxNQUFNLEdBQWVKLEdBQWUsR0FBOUIsRUFBRUssU0FBUyxHQUFJTCxHQUFlLEdBQW5CO0lBRXhCLElBQU1NLFlBQVksR0FBR1IsNkNBQU0sRUFBRTtJQUM3QixxQkFDRTs7MEJBQ0UsOERBQUNTLEtBQUc7MERBQVcsYUFBYTs7a0NBQzFCLDhEQUFDQyxRQUFNO3dCQUFvQkMsT0FBTyxFQUFFO21DQUFNSixTQUFTLENBQUMsQ0FBQ0QsTUFBTSxDQUFDO3lCQUFBO2tFQUExQyxRQUFRO2tDQUN2QkYsS0FBSzs7Ozs7NEJBQ0M7a0NBQ1QsOERBQUNLLEtBQUc7d0JBRUZHLEdBQUcsRUFBRUosWUFBWTt3QkFDakJLLEtBQUssRUFDSFAsTUFBTSxHQUNGOzRCQUNFUSxNQUFNLEVBQUVOLFlBQVksQ0FBQ08sT0FBTyxDQUFDQyxZQUFZLEdBQUcsSUFBSTt5QkFDakQsR0FDRDs0QkFDRUYsTUFBTSxFQUFFLEtBQUs7eUJBQ2Q7a0VBVEcsbUJBQW1CO2tDQVk3Qiw0RUFBQ0wsS0FBRztzRUFBVyxTQUFTO3NDQUFFSixRQUFROzs7OztnQ0FBTzs7Ozs7NEJBQ3JDOzs7Ozs7b0JBQ0Y7Ozs7OztvQkF5QkwsQ0FDSDtBQUNKLENBQUM7R0FwRGVGLFdBQVc7QUFBWEEsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db2xsYXBzYWJsZS5qc3g/NDU5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbGxhcHNhYmxlKHsgbGFiZWwsIGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzYWJsZVwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidG9nZ2xlXCIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT5cclxuICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiXHJcbiAgICAgICAgICByZWY9e2NvbnRhaW5lclJlZn1cclxuICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgaXNPcGVuXHJcbiAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogY29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC50b2dnbGUge1xyXG4gICAgICAgICAgICBib3JkZXI6IHVuc2V0O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyXHJcblxyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDAgNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbGxhcHNhYmxlIC5jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29sbGFwc2FibGUgLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCBlYXNlIDAuM3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiQ2hpbGRyZW4iLCJ1c2VTdGF0ZSIsIkNvbGxhcHNhYmxlIiwibGFiZWwiLCJjaGlsZHJlbiIsImlzT3BlbiIsInNldElzT3BlbiIsImNvbnRhaW5lclJlZiIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZWYiLCJzdHlsZSIsImhlaWdodCIsImN1cnJlbnQiLCJzY3JvbGxIZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Collapsable.jsx\n"));

/***/ })

});