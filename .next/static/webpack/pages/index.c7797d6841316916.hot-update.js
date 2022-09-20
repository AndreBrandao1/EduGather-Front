"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/auth */ \"./src/hooks/auth.js\");\n/* harmony import */ var _components_CourseCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CourseCard */ \"./src/components/CourseCard.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layouts_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Layouts/Button */ \"./src/components/Layouts/Button.jsx\");\n/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Stats */ \"./src/components/Stats.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var user = (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuth)({\n        middleware: \"guest\"\n    }).user;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]), courses = ref[0], setCourse = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_5___default().get(\"http://localhost:8000/api/courses\").then(function(response) {\n            // handle success\n            setCourse(response.data);\n            console.log(response.data);\n        }).catch(function(error) {\n            // handle error\n            console.log(error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            courses.map(function(c) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CourseCard__WEBPACK_IMPORTED_MODULE_4__.CourseCard, {\n                    trainer_img: c.cou_logo,\n                    trainer_name: \"\".concat(c.first_name, \" \").concat(c.last_name),\n                    course_title: c.cou_title,\n                    course_category: c.cat_title,\n                    course_tags: c.tags.tag_title,\n                    course_desc: c.cou_description\n                }, c.id, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_Button__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                btn_txt: \"Details\",\n                bk_color: \"linear-gradient(49deg, rgba(16,178,163,1) 1%, rgba(162,11,232,1) 84%)\",\n                color: \"white\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Stats__WEBPACK_IMPORTED_MODULE_8__.Stats, {\n                first_field: \"Followers\",\n                second_field: \"20000k\",\n                first_color: \"white\",\n                second_color: \"grey\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"iu66lW9r6bJ2uflXt+tCOqWrAp8=\", false, function() {\n    return [\n        _hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ0E7QUFFVTtBQUNjO0FBQzNCO0FBQzZCO0FBQ0Y7QUFDVjtBQUU1QixTQUFTVSxJQUFJLEdBQUc7O0lBQzdCLElBQU0sSUFBTSxHQUFLUixvREFBTyxDQUFDO1FBQUVVLFVBQVUsRUFBRSxPQUFPO0tBQUUsQ0FBQyxDQUF6Q0QsSUFBSTtJQUNaLElBQTZCTixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQWxDUSxPQUFPLEdBQWVSLEdBQVksR0FBM0IsRUFBRVMsU0FBUyxHQUFJVCxHQUFZLEdBQWhCO0lBQ3pCRSxnREFBUyxDQUFDLFdBQU07UUFDZEgsZ0RBQ00sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUN4Q1ksSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtZQUN4QixpQkFBaUI7WUFDakJILFNBQVMsQ0FBQ0csUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztZQUN6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQ0RHLEtBQUssQ0FBQyxTQUFVQyxLQUFLLEVBQUU7WUFDdEIsZUFBZTtZQUNmSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRTs7WUFDR1QsT0FBTyxDQUFDVSxHQUFHLENBQUMsU0FBVUMsQ0FBQyxFQUFFO2dCQUN4QixxQkFDRSw4REFBQ3JCLDhEQUFVO29CQUNUc0IsV0FBVyxFQUFFRCxDQUFDLENBQUNFLFFBQVE7b0JBQ3ZCQyxZQUFZLEVBQUUsRUFBQyxDQUFrQkgsTUFBVyxDQUEzQkEsQ0FBQyxDQUFDSSxVQUFVLEVBQUMsR0FBQyxDQUFjLFFBQVpKLENBQUMsQ0FBQ0ssU0FBUyxDQUFFO29CQUM5Q0MsWUFBWSxFQUFFTixDQUFDLENBQUNPLFNBQVM7b0JBQ3pCQyxlQUFlLEVBQUVSLENBQUMsQ0FBQ1MsU0FBUztvQkFDNUJDLFdBQVcsRUFBRVYsQ0FBQyxDQUFDVyxJQUFJLENBQUNDLFNBQVM7b0JBQzdCQyxXQUFXLEVBQUViLENBQUMsQ0FBQ2MsZUFBZTttQkFDekJkLENBQUMsQ0FBQ2UsRUFBRTs7Ozt3QkFDVCxDQUNGO1lBQ0osQ0FBQyxDQUFDOzBCQUNGLDhEQUFDL0IsOERBQU07Z0JBQ0xnQyxPQUFPLEVBQUMsU0FBUztnQkFDakJDLFFBQVEsRUFBQyx1RUFBdUU7Z0JBQ2hGQyxLQUFLLEVBQUMsT0FBTzs7Ozs7b0JBQ2I7MEJBRUYsOERBQUNDLElBQUU7Ozs7b0JBQU07MEJBQ1QsOERBQUNsQyxvREFBSztnQkFDSm1DLFdBQVcsRUFBQyxXQUFXO2dCQUN2QkMsWUFBWSxFQUFDLFFBQVE7Z0JBQ3JCQyxXQUFXLEVBQUMsT0FBTztnQkFDbkJDLFlBQVksRUFBQyxNQUFNOzs7OztvQkFDbkI7O29CQUNELENBQ0g7QUFDSixDQUFDO0dBL0N1QnJDLElBQUk7O1FBQ1RSLGdEQUFPOzs7QUFERlEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiQC9ob29rcy9hdXRoXCI7XHJcbmltcG9ydCB7IENvdXJzZUNhcmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NvdXJzZUNhcmRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgVXNlRWZmZWN0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRzL0J1dHRvblwiO1xyXG5pbXBvcnQgeyBTdGF0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvU3RhdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKHsgbWlkZGxld2FyZTogXCJndWVzdFwiIH0pO1xyXG4gIGNvbnN0IFtjb3Vyc2VzLCBzZXRDb3Vyc2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9jb3Vyc2VzXCIpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIC8vIGhhbmRsZSBzdWNjZXNzXHJcbiAgICAgICAgc2V0Q291cnNlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgLy8gaGFuZGxlIGVycm9yXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Y291cnNlcy5tYXAoZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPENvdXJzZUNhcmRcclxuICAgICAgICAgICAgdHJhaW5lcl9pbWc9e2MuY291X2xvZ299XHJcbiAgICAgICAgICAgIHRyYWluZXJfbmFtZT17YCR7Yy5maXJzdF9uYW1lfSAke2MubGFzdF9uYW1lfWB9XHJcbiAgICAgICAgICAgIGNvdXJzZV90aXRsZT17Yy5jb3VfdGl0bGV9XHJcbiAgICAgICAgICAgIGNvdXJzZV9jYXRlZ29yeT17Yy5jYXRfdGl0bGV9XHJcbiAgICAgICAgICAgIGNvdXJzZV90YWdzPXtjLnRhZ3MudGFnX3RpdGxlfVxyXG4gICAgICAgICAgICBjb3Vyc2VfZGVzYz17Yy5jb3VfZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGtleT17Yy5pZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBidG5fdHh0PVwiRGV0YWlsc1wiXHJcbiAgICAgICAgYmtfY29sb3I9XCJsaW5lYXItZ3JhZGllbnQoNDlkZWcsIHJnYmEoMTYsMTc4LDE2MywxKSAxJSwgcmdiYSgxNjIsMTEsMjMyLDEpIDg0JSlcIlxyXG4gICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxTdGF0c1xyXG4gICAgICAgIGZpcnN0X2ZpZWxkPVwiRm9sbG93ZXJzXCJcclxuICAgICAgICBzZWNvbmRfZmllbGQ9XCIyMDAwMGtcIlxyXG4gICAgICAgIGZpcnN0X2NvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgIHNlY29uZF9jb2xvcj1cImdyZXlcIlxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJ1c2VBdXRoIiwiQ291cnNlQ2FyZCIsImF4aW9zIiwidXNlU3RhdGUiLCJVc2VFZmZlY3QiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJTdGF0cyIsIkhvbWUiLCJ1c2VyIiwibWlkZGxld2FyZSIsImNvdXJzZXMiLCJzZXRDb3Vyc2UiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJtYXAiLCJjIiwidHJhaW5lcl9pbWciLCJjb3VfbG9nbyIsInRyYWluZXJfbmFtZSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJjb3Vyc2VfdGl0bGUiLCJjb3VfdGl0bGUiLCJjb3Vyc2VfY2F0ZWdvcnkiLCJjYXRfdGl0bGUiLCJjb3Vyc2VfdGFncyIsInRhZ3MiLCJ0YWdfdGl0bGUiLCJjb3Vyc2VfZGVzYyIsImNvdV9kZXNjcmlwdGlvbiIsImlkIiwiYnRuX3R4dCIsImJrX2NvbG9yIiwiY29sb3IiLCJiciIsImZpcnN0X2ZpZWxkIiwic2Vjb25kX2ZpZWxkIiwiZmlyc3RfY29sb3IiLCJzZWNvbmRfY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});