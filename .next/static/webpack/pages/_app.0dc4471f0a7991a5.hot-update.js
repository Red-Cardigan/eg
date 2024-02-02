"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/FormComponent.js":
/*!*****************************************!*\
  !*** ./src/components/FormComponent.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ContentTypeDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentTypeDropdown */ \"./src/components/ContentTypeDropdown.js\");\n/* harmony import */ var _AudienceDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AudienceDropdown */ \"./src/components/AudienceDropdown.js\");\n/* harmony import */ var _DescriptionTextArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DescriptionTextArea */ \"./src/components/DescriptionTextArea.js\");\n/* harmony import */ var _ToneTextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ToneTextArea */ \"./src/components/ToneTextArea.js\");\n/* harmony import */ var _apiHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../apiHandler */ \"./src/apiHandler.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar FormComponent = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), contentType = _useState[0], setContentType = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), audience = _useState1[0], setAudience = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), description = _useState2[0], setDescription = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), tone = _useState3[0], setTone = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), responseText = _useState4[0], setResponseText = _useState4[1]; // Added this line\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isCopied = _useState5[0], setIsCopied = _useState5[1]; // Added this line\n    var handleContentTypeChange = function(value) {\n        setContentType(value);\n    };\n    var handleAudienceChange = function(value) {\n        setAudience(value);\n    };\n    var handleDescriptionChange = function(value) {\n        setDescription(value);\n    };\n    var handleToneChange = function(value) {\n        setTone(value);\n    };\n    var handleCopy = function() {\n        navigator.clipboard.writeText(responseText);\n        setIsCopied(true);\n        setTimeout(function() {\n            return setIsCopied(false);\n        }, 3000); // Reset copied status after 3 seconds\n    };\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function(e) {\n            var formData, prompt, response, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        e.preventDefault();\n                        formData = {\n                            contentType: contentType,\n                            audience: audience,\n                            description: description,\n                            tone: tone\n                        };\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        prompt = \"Write a \".concat(formData.contentType, \" for a \").concat(formData.audience, \" to persuade them to \").concat(formData.description, \". Use a tone which is \").concat(formData.tone, \".\");\n                        return [\n                            4,\n                            (0,_apiHandler__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(prompt)\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (response.generatedText) {\n                            setResponseText(response.generatedText.trim()); // Update the state with the response\n                        } else {\n                            throw new Error(\"Invalid response from the server\");\n                        }\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(\"Error submitting form:\", error);\n                        alert(\"Failed to submit form.\");\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-header\",\n                children: \"LLMs like it when you're clear and specific\"\n            }, void 0, false, {\n                fileName: \"/Users/cardigan/Documents/GitHub/votespeaker/src/components/FormComponent.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContentTypeDropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onContentTypeChange: handleContentTypeChange\n                    }, void 0, false, {\n                        fileName: \"/Users/cardigan/Documents/GitHub/votespeaker/src/components/FormComponent.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AudienceDropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onAudienceChange: handleAudienceChange\n                    }, void 0, false, {\n                        fileName: \"/Users/cardigan/Documents/GitHub/votespeaker/src/components/FormComponent.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DescriptionTextArea__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        description: description,\n                        setDescription: handleDescriptionChange\n                    }, void 0, false, {\n                        fileName: \"/Users/cardigan/Documents/GitHub/votespeaker/src/components/FormComponent.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToneTextArea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        onToneChange: handleToneChange\n                    }, void 0, false, {\n                        fileName: \"/Users/cardigan/Documents/GitHub/votespeaker/src/components/FormComponent.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"submit-button\",\n                        children: \"Write Text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/cardigan/Documents/GitHub/votespeaker/src/components/FormComponent.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cardigan/Documents/GitHub/votespeaker/src/components/FormComponent.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"response-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"response-header \".concat(isCopied ? \"copied\" : \"\"),\n                        onClick: handleCopy,\n                        children: [\n                            \"Response\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"copy-text\",\n                                children: isCopied ? \"Copied\" : \"Copy\"\n                            }, void 0, false, {\n                                fileName: \"/Users/cardigan/Documents/GitHub/votespeaker/src/components/FormComponent.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cardigan/Documents/GitHub/votespeaker/src/components/FormComponent.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"response-body\",\n                        children: responseText || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"placeholder-text\",\n                            children: \"Your generated text will appear here...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cardigan/Documents/GitHub/votespeaker/src/components/FormComponent.js\",\n                            lineNumber: 78,\n                            columnNumber: 28\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/cardigan/Documents/GitHub/votespeaker/src/components/FormComponent.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cardigan/Documents/GitHub/votespeaker/src/components/FormComponent.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cardigan/Documents/GitHub/votespeaker/src/components/FormComponent.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, _this);\n};\n_s(FormComponent, \"UhDeNHQQIal0F23liPO0FfgS1jM=\");\n_c = FormComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormComponent);\nvar _c;\n$RefreshReg$(_c, \"FormComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNEO3dCQUFJQyxXQUFXLG1CQUE0QyxPQUF6QnpCLFdBQVcsV0FBVzt3QkFBTWlDLFNBQVMxQjs7NEJBQVk7MENBRWxGLDhEQUFDMkI7Z0NBQUtULFdBQVU7MENBQWF6QixXQUFXLFdBQVc7Ozs7Ozs7Ozs7OztrQ0FFckQsOERBQUN3Qjt3QkFBSUMsV0FBVTtrQ0FDWjNCLDhCQUFnQiw4REFBQ29DOzRCQUFLVCxXQUFVO3NDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUQ7R0EzRU1wQztLQUFBQTtBQTZFTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3JtQ29tcG9uZW50LmpzP2QyZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRlbnRUeXBlRHJvcGRvd24gZnJvbSAnLi9Db250ZW50VHlwZURyb3Bkb3duJztcbmltcG9ydCBBdWRpZW5jZURyb3Bkb3duIGZyb20gJy4vQXVkaWVuY2VEcm9wZG93bic7XG5pbXBvcnQgRGVzY3JpcHRpb25UZXh0QXJlYSBmcm9tICcuL0Rlc2NyaXB0aW9uVGV4dEFyZWEnO1xuaW1wb3J0IFRvbmVUZXh0QXJlYSBmcm9tICcuL1RvbmVUZXh0QXJlYSc7XG5pbXBvcnQgaGFuZGxlRm9ybVN1Ym1pc3Npb24gZnJvbSAnLi4vYXBpSGFuZGxlcic7XG5cbmNvbnN0IEZvcm1Db21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb250ZW50VHlwZSwgc2V0Q29udGVudFR5cGVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYXVkaWVuY2UsIHNldEF1ZGllbmNlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0b25lLCBzZXRUb25lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Jlc3BvbnNlVGV4dCwgc2V0UmVzcG9uc2VUZXh0XSA9IHVzZVN0YXRlKCcnKTsgLy8gQWRkZWQgdGhpcyBsaW5lXG4gIGNvbnN0IFtpc0NvcGllZCwgc2V0SXNDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBBZGRlZCB0aGlzIGxpbmVcblxuICBjb25zdCBoYW5kbGVDb250ZW50VHlwZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHNldENvbnRlbnRUeXBlKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBdWRpZW5jZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHNldEF1ZGllbmNlKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHNldERlc2NyaXB0aW9uKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUb25lQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0VG9uZSh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29weSA9ICgpID0+IHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChyZXNwb25zZVRleHQpO1xuICAgIHNldElzQ29waWVkKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNDb3BpZWQoZmFsc2UpLCAzMDAwKTsgLy8gUmVzZXQgY29waWVkIHN0YXR1cyBhZnRlciAzIHNlY29uZHNcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IHtcbiAgICAgIGNvbnRlbnRUeXBlLFxuICAgICAgYXVkaWVuY2UsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHRvbmUsXG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvbXB0ID0gYFdyaXRlIGEgJHtmb3JtRGF0YS5jb250ZW50VHlwZX0gZm9yIGEgJHtmb3JtRGF0YS5hdWRpZW5jZX0gdG8gcGVyc3VhZGUgdGhlbSB0byAke2Zvcm1EYXRhLmRlc2NyaXB0aW9ufS4gVXNlIGEgdG9uZSB3aGljaCBpcyAke2Zvcm1EYXRhLnRvbmV9LmA7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGhhbmRsZUZvcm1TdWJtaXNzaW9uKHByb21wdCk7XG4gICAgICBpZiAocmVzcG9uc2UuZ2VuZXJhdGVkVGV4dCkge1xuICAgICAgICBzZXRSZXNwb25zZVRleHQocmVzcG9uc2UuZ2VuZXJhdGVkVGV4dC50cmltKCkpOyAvLyBVcGRhdGUgdGhlIHN0YXRlIHdpdGggdGhlIHJlc3BvbnNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN1Ym1pdHRpbmcgZm9ybTonLCBlcnJvcik7XG4gICAgICBhbGVydCgnRmFpbGVkIHRvIHN1Ym1pdCBmb3JtLicpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1oZWFkZXJcIj5cbiAgICAgICAgTExNcyBsaWtlIGl0IHdoZW4geW91J3JlIGNsZWFyIGFuZCBzcGVjaWZpY1xuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPENvbnRlbnRUeXBlRHJvcGRvd24gb25Db250ZW50VHlwZUNoYW5nZT17aGFuZGxlQ29udGVudFR5cGVDaGFuZ2V9IC8+XG4gICAgICAgIDxBdWRpZW5jZURyb3Bkb3duIG9uQXVkaWVuY2VDaGFuZ2U9e2hhbmRsZUF1ZGllbmNlQ2hhbmdlfSAvPlxuICAgICAgICA8RGVzY3JpcHRpb25UZXh0QXJlYSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IHNldERlc2NyaXB0aW9uPXtoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZX0gLz5cbiAgICAgICAgPFRvbmVUZXh0QXJlYSBvblRvbmVDaGFuZ2U9e2hhbmRsZVRvbmVDaGFuZ2V9IC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b25cIj5Xcml0ZSBUZXh0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3BvbnNlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJlc3BvbnNlLWhlYWRlciAke2lzQ29waWVkID8gJ2NvcGllZCcgOiAnJ31gfSBvbkNsaWNrPXtoYW5kbGVDb3B5fT5cbiAgICAgICAgICBSZXNwb25zZVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvcHktdGV4dFwiPntpc0NvcGllZCA/ICdDb3BpZWQnIDogJ0NvcHknfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzcG9uc2UtYm9keVwiPlxuICAgICAgICAgIHtyZXNwb25zZVRleHQgfHwgPHNwYW4gY2xhc3NOYW1lPVwicGxhY2Vob2xkZXItdGV4dFwiPllvdXIgZ2VuZXJhdGVkIHRleHQgd2lsbCBhcHBlYXIgaGVyZS4uLjwvc3Bhbj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250ZW50VHlwZURyb3Bkb3duIiwiQXVkaWVuY2VEcm9wZG93biIsIkRlc2NyaXB0aW9uVGV4dEFyZWEiLCJUb25lVGV4dEFyZWEiLCJoYW5kbGVGb3JtU3VibWlzc2lvbiIsIkZvcm1Db21wb25lbnQiLCJjb250ZW50VHlwZSIsInNldENvbnRlbnRUeXBlIiwiYXVkaWVuY2UiLCJzZXRBdWRpZW5jZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJ0b25lIiwic2V0VG9uZSIsInJlc3BvbnNlVGV4dCIsInNldFJlc3BvbnNlVGV4dCIsImlzQ29waWVkIiwic2V0SXNDb3BpZWQiLCJoYW5kbGVDb250ZW50VHlwZUNoYW5nZSIsInZhbHVlIiwiaGFuZGxlQXVkaWVuY2VDaGFuZ2UiLCJoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSIsImhhbmRsZVRvbmVDaGFuZ2UiLCJoYW5kbGVDb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic2V0VGltZW91dCIsImhhbmRsZVN1Ym1pdCIsImUiLCJmb3JtRGF0YSIsInByb21wdCIsInJlc3BvbnNlIiwiZXJyb3IiLCJwcmV2ZW50RGVmYXVsdCIsImdlbmVyYXRlZFRleHQiLCJ0cmltIiwiRXJyb3IiLCJjb25zb2xlIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJvbkNvbnRlbnRUeXBlQ2hhbmdlIiwib25BdWRpZW5jZUNoYW5nZSIsIm9uVG9uZUNoYW5nZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FormComponent.js\n"));

/***/ })

});