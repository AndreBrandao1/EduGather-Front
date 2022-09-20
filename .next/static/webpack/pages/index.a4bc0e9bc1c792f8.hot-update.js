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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/auth */ \"./src/hooks/auth.js\");\n/* harmony import */ var _components_CourseCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CourseCard */ \"./src/components/CourseCard.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layouts_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Layouts/Button */ \"./src/components/Layouts/Button.jsx\");\n/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Stats */ \"./src/components/Stats.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var user = (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuth)({\n        middleware: \"guest\"\n    }).user;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]), courses = ref[0], setCourse = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_5___default().get(\"http://localhost:8000/api/courses\").then(function(response) {\n            // handle success\n            setCourse(response.data);\n        }).catch(function(error) {\n            // handle error\n            console.log(error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            courses.map(function(c) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CourseCard__WEBPACK_IMPORTED_MODULE_4__.CourseCard, {\n                    trainer_img: c.cou_logo,\n                    trainer_name: \"\".concat(c.first_name, \" \").concat(c.last_name),\n                    course_title: c.cou_title,\n                    course_category: c.cat_title,\n                    course_tags: c.tags.forEach(function(tag) {\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"tag.tag_title\"\n                        }, void 0, false, void 0, void 0);\n                    }),\n                    course_desc: c.cou_description\n                }, c.id, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_Button__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                btn_txt: \"Details\",\n                bk_color: \"linear-gradient(49deg, rgba(16,178,163,1) 1%, rgba(162,11,232,1) 84%)\",\n                color: \"white\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Stats__WEBPACK_IMPORTED_MODULE_8__.Stats, {\n                first_field: \"Followers\",\n                second_field: \"20000k\",\n                first_color: \"white\",\n                second_color: \"grey\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\EduGather-Front\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"iu66lW9r6bJ2uflXt+tCOqWrAp8=\", false, function() {\n    return [\n        _hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ0E7QUFFVTtBQUNjO0FBQzNCO0FBQzZCO0FBQ0Y7QUFDVjtBQUU1QixTQUFTVSxJQUFJLEdBQUc7O0lBQzdCLElBQU0sSUFBTSxHQUFLUixvREFBTyxDQUFDO1FBQUVVLFVBQVUsRUFBRSxPQUFPO0tBQUUsQ0FBQyxDQUF6Q0QsSUFBSTtJQUNaLElBQTZCTixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQWxDUSxPQUFPLEdBQWVSLEdBQVksR0FBM0IsRUFBRVMsU0FBUyxHQUFJVCxHQUFZLEdBQWhCO0lBQ3pCRSxnREFBUyxDQUFDLFdBQU07UUFDZEgsZ0RBQ00sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUN4Q1ksSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtZQUN4QixpQkFBaUI7WUFDakJILFNBQVMsQ0FBQ0csUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FDREMsS0FBSyxDQUFDLFNBQVVDLEtBQUssRUFBRTtZQUN0QixlQUFlO1lBQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFOztZQUNHUCxPQUFPLENBQUNVLEdBQUcsQ0FBQyxTQUFVQyxDQUFDLEVBQUU7Z0JBQ3hCLHFCQUNFLDhEQUFDckIsOERBQVU7b0JBQ1RzQixXQUFXLEVBQUVELENBQUMsQ0FBQ0UsUUFBUTtvQkFDdkJDLFlBQVksRUFBRSxFQUFDLENBQWtCSCxNQUFXLENBQTNCQSxDQUFDLENBQUNJLFVBQVUsRUFBQyxHQUFDLENBQWMsUUFBWkosQ0FBQyxDQUFDSyxTQUFTLENBQUU7b0JBQzlDQyxZQUFZLEVBQUVOLENBQUMsQ0FBQ08sU0FBUztvQkFDekJDLGVBQWUsRUFBRVIsQ0FBQyxDQUFDUyxTQUFTO29CQUM1QkMsV0FBVyxFQUFFVixDQUFDLENBQUNXLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDLEdBQUcsRUFBSztzQ0FDbkMsOERBQUNDLEdBQUM7c0NBQUMsZUFBYTt5REFBSSxDQUFDO29CQUN2QixDQUFDLENBQUM7b0JBQ0ZDLFdBQVcsRUFBRWYsQ0FBQyxDQUFDZ0IsZUFBZTttQkFDekJoQixDQUFDLENBQUNpQixFQUFFOzs7O3dCQUNULENBQ0Y7WUFDSixDQUFDLENBQUM7MEJBQ0YsOERBQUNqQyw4REFBTTtnQkFDTGtDLE9BQU8sRUFBQyxTQUFTO2dCQUNqQkMsUUFBUSxFQUFDLHVFQUF1RTtnQkFDaEZDLEtBQUssRUFBQyxPQUFPOzs7OztvQkFDYjswQkFFRiw4REFBQ0MsSUFBRTs7OztvQkFBTTswQkFDVCw4REFBQ3BDLG9EQUFLO2dCQUNKcUMsV0FBVyxFQUFDLFdBQVc7Z0JBQ3ZCQyxZQUFZLEVBQUMsUUFBUTtnQkFDckJDLFdBQVcsRUFBQyxPQUFPO2dCQUNuQkMsWUFBWSxFQUFDLE1BQU07Ozs7O29CQUNuQjs7b0JBQ0QsQ0FDSDtBQUNKLENBQUM7R0FoRHVCdkMsSUFBSTs7UUFDVFIsZ0RBQU87OztBQURGUSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCJAL2hvb2tzL2F1dGhcIjtcclxuaW1wb3J0IHsgQ291cnNlQ2FyZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ291cnNlQ2FyZFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCBVc2VFZmZlY3QsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dHMvQnV0dG9uXCI7XHJcbmltcG9ydCB7IFN0YXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9TdGF0c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoeyBtaWRkbGV3YXJlOiBcImd1ZXN0XCIgfSk7XHJcbiAgY29uc3QgW2NvdXJzZXMsIHNldENvdXJzZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2NvdXJzZXNcIilcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy8gaGFuZGxlIHN1Y2Nlc3NcclxuICAgICAgICBzZXRDb3Vyc2UocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAvLyBoYW5kbGUgZXJyb3JcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtjb3Vyc2VzLm1hcChmdW5jdGlvbiAoYykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Q291cnNlQ2FyZFxyXG4gICAgICAgICAgICB0cmFpbmVyX2ltZz17Yy5jb3VfbG9nb31cclxuICAgICAgICAgICAgdHJhaW5lcl9uYW1lPXtgJHtjLmZpcnN0X25hbWV9ICR7Yy5sYXN0X25hbWV9YH1cclxuICAgICAgICAgICAgY291cnNlX3RpdGxlPXtjLmNvdV90aXRsZX1cclxuICAgICAgICAgICAgY291cnNlX2NhdGVnb3J5PXtjLmNhdF90aXRsZX1cclxuICAgICAgICAgICAgY291cnNlX3RhZ3M9e2MudGFncy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICA8cD50YWcudGFnX3RpdGxlPC9wPjtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIGNvdXJzZV9kZXNjPXtjLmNvdV9kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAga2V5PXtjLmlkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGJ0bl90eHQ9XCJEZXRhaWxzXCJcclxuICAgICAgICBia19jb2xvcj1cImxpbmVhci1ncmFkaWVudCg0OWRlZywgcmdiYSgxNiwxNzgsMTYzLDEpIDElLCByZ2JhKDE2MiwxMSwyMzIsMSkgODQlKVwiXHJcbiAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPFN0YXRzXHJcbiAgICAgICAgZmlyc3RfZmllbGQ9XCJGb2xsb3dlcnNcIlxyXG4gICAgICAgIHNlY29uZF9maWVsZD1cIjIwMDAwa1wiXHJcbiAgICAgICAgZmlyc3RfY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgc2Vjb25kX2NvbG9yPVwiZ3JleVwiXHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsInVzZUF1dGgiLCJDb3Vyc2VDYXJkIiwiYXhpb3MiLCJ1c2VTdGF0ZSIsIlVzZUVmZmVjdCIsInVzZUVmZmVjdCIsIkJ1dHRvbiIsIlN0YXRzIiwiSG9tZSIsInVzZXIiLCJtaWRkbGV3YXJlIiwiY291cnNlcyIsInNldENvdXJzZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImMiLCJ0cmFpbmVyX2ltZyIsImNvdV9sb2dvIiwidHJhaW5lcl9uYW1lIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImNvdXJzZV90aXRsZSIsImNvdV90aXRsZSIsImNvdXJzZV9jYXRlZ29yeSIsImNhdF90aXRsZSIsImNvdXJzZV90YWdzIiwidGFncyIsImZvckVhY2giLCJ0YWciLCJwIiwiY291cnNlX2Rlc2MiLCJjb3VfZGVzY3JpcHRpb24iLCJpZCIsImJ0bl90eHQiLCJia19jb2xvciIsImNvbG9yIiwiYnIiLCJmaXJzdF9maWVsZCIsInNlY29uZF9maWVsZCIsImZpcnN0X2NvbG9yIiwic2Vjb25kX2NvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});