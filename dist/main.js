/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\nbody {\\r\\n  background-color: bisque;\\r\\n}\\r\\n\\r\\n.hello {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\ni {\\r\\n  color: gray;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  background-color: #fff;\\r\\n  width: 30%;\\r\\n  margin: 100px auto;\\r\\n  border: 1px solid #eee;\\r\\n  padding: 5px 0 0 0;\\r\\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\\r\\n}\\r\\n\\r\\n.wrapper p {\\r\\n  margin: 0;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.mini-section {\\r\\n  border-bottom: 1px solid rgb(224, 224, 224);\\r\\n  margin: 0;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  border: none;\\r\\n  font-style: italic;\\r\\n  width: 90%;\\r\\n  padding: 8px;\\r\\n}\\r\\n\\r\\n.task:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.do {\\r\\n  padding: 5px;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.clear-all {\\r\\n  padding: 5px;\\r\\n  text-align: center;\\r\\n  color: grey;\\r\\n  background-color: rgb(241, 241, 241);\\r\\n}\\r\\n\\r\\n.clear-all p {\\r\\n  padding: 10px;\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  padding: 1rem;\\r\\n  background-color: rgb(247, 247, 247);\\r\\n}\\r\\n\\r\\n.clear-all p:hover,\\r\\n.item:hover {\\r\\n  background-color: rgb(235, 235, 235);\\r\\n}\\r\\n\\r\\n.check {\\r\\n  width: 10px;\\r\\n  margin: 0 10px;\\r\\n}\\r\\n\\r\\n.desc {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.dragging {\\r\\n  opacity: 0.5;\\r\\n}\\r\\n\\r\\n.trash {\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.trash:hover {\\r\\n  cursor: pointer;\\r\\n  color: rgb(241, 198, 198);\\r\\n}\\r\\n\\r\\n.invalid {\\r\\n  outline-color: rgb(241, 198, 198);\\r\\n}\\r\\n\\r\\n.clear-all:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.ellipsis:hover {\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.todo {\\r\\n  border: none;\\r\\n  font-style: italic;\\r\\n  width: 90%;\\r\\n  padding: 8px;\\r\\n}\\r\\n\\r\\n.todo:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.green {\\r\\n  color: lightgreen;\\r\\n}\\r\\n\\r\\n.red {\\r\\n  color: lightcoral;\\r\\n}\\r\\n\\r\\n.blue {\\r\\n  color: skyblue;\\r\\n}\\r\\n#todoList { font-size: 1.5rem; }\\r\\n.show { display: block; }\\r\\n.hide { display: none; }\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo2.0/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = []; // return the list of modules as css string\r\n\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = cssWithMappingToString(item);\r\n\r\n      if (item[2]) {\r\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n      }\r\n\r\n      return content;\r\n    }).join(\"\");\r\n  }; // import a list of modules into the list\r\n  // eslint-disable-next-line func-names\r\n\r\n\r\n  list.i = function (modules, mediaQuery, dedupe) {\r\n    if (typeof modules === \"string\") {\r\n      // eslint-disable-next-line no-param-reassign\r\n      modules = [[null, modules, \"\"]];\r\n    }\r\n\r\n    var alreadyImportedModules = {};\r\n\r\n    if (dedupe) {\r\n      for (var i = 0; i < this.length; i++) {\r\n        // eslint-disable-next-line prefer-destructuring\r\n        var id = this[i][0];\r\n\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    for (var _i = 0; _i < modules.length; _i++) {\r\n      var item = [].concat(modules[_i]);\r\n\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        // eslint-disable-next-line no-continue\r\n        continue;\r\n      }\r\n\r\n      if (mediaQuery) {\r\n        if (!item[2]) {\r\n          item[2] = mediaQuery;\r\n        } else {\r\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n        }\r\n      }\r\n\r\n      list.push(item);\r\n    }\r\n  };\r\n\r\n  return list;\r\n};\n\n//# sourceURL=webpack://todo2.0/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://todo2.0/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDom = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDom.length; i++) {\r\n    if (stylesInDom[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var index = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3]\r\n    };\r\n\r\n    if (index !== -1) {\r\n      stylesInDom[index].references++;\r\n      stylesInDom[index].updater(obj);\r\n    } else {\r\n      stylesInDom.push({\r\n        identifier: identifier,\r\n        updater: addStyle(obj, options),\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction addStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n  return function updateStyle(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\r\n        return;\r\n      }\r\n\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDom[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDom[_index].references === 0) {\r\n        stylesInDom[_index].updater();\r\n\r\n        stylesInDom.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://todo2.0/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n/* istanbul ignore next  */\r\n\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n\r\n    memo[target] = styleTarget;\r\n  }\r\n\r\n  return memo[target];\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n\r\n  target.appendChild(style);\r\n}\r\n\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo2.0/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var style = document.createElement(\"style\");\r\n  options.setAttributes(style, options.attributes);\r\n  options.insert(style);\r\n  return style;\r\n}\r\n\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo2.0/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(style) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n  if (nonce) {\r\n    style.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\n\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo2.0/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(style, options, obj) {\r\n  var css = obj.css;\r\n  var media = obj.media;\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (media) {\r\n    style.setAttribute(\"media\", media);\r\n  } else {\r\n    style.removeAttribute(\"media\");\r\n  }\r\n\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  options.styleTagTransform(css, style);\r\n}\r\n\r\nfunction removeStyleElement(style) {\r\n  // istanbul ignore if\r\n  if (style.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  style.parentNode.removeChild(style);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction domAPI(options) {\r\n  var style = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(style, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(style);\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo2.0/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, style) {\r\n  if (style.styleSheet) {\r\n    style.styleSheet.cssText = css;\r\n  } else {\r\n    while (style.firstChild) {\r\n      style.removeChild(style.firstChild);\r\n    }\r\n\r\n    style.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo2.0/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/complete.js":
/*!*************************!*\
  !*** ./src/complete.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getContainer\": () => (/* binding */ getContainer)\n/* harmony export */ });\n/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag.js */ \"./src/drag.js\");\n/* eslint-disable import/prefer-default-export */\r\n/* eslint-disable import/no-cycle */\r\n\r\n\r\n\r\n// Checks if input are checked or not, and Add Or remove Css Class => The line through style.\r\nconst getContainer = (newContainer) => {\r\n  const d = [...newContainer.querySelectorAll('input')];\r\n  d.forEach((input) => {\r\n    input.addEventListener('change', (e) => {\r\n      if (e.target.checked) {\r\n        input.parentNode.classList.add('desc');\r\n        (0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.saveChanges)();\r\n      } else {\r\n        input.parentNode.classList.remove('desc');\r\n        (0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.saveChanges)();\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo2.0/./src/complete.js?");

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tasks\": () => (/* binding */ tasks),\n/* harmony export */   \"saveLocalstorage\": () => (/* binding */ saveLocalstorage),\n/* harmony export */   \"saveChanges\": () => (/* binding */ saveChanges),\n/* harmony export */   \"inputListener\": () => (/* binding */ inputListener),\n/* harmony export */   \"reloadContainer\": () => (/* binding */ reloadContainer),\n/* harmony export */   \"getDragAfterElement\": () => (/* binding */ getDragAfterElement),\n/* harmony export */   \"dragOver\": () => (/* binding */ dragOver),\n/* harmony export */   \"editListener\": () => (/* binding */ editListener),\n/* harmony export */   \"deleteAll\": () => (/* binding */ deleteAll),\n/* harmony export */   \"addListeners\": () => (/* binding */ addListeners)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n// Initials tasks\r\n/* eslint-disable import/no-mutable-exports,  */\r\n/* eslint-disable import/no-cycle */\r\n/* eslint-disable no-loop-func */\r\n\r\n\r\n\r\nlet tasks = [];\r\n\r\nif (localStorage.getItem('tasks')) {\r\n  const getList = JSON.parse(localStorage.getItem('tasks'));\r\n  tasks = getList;\r\n}\r\n\r\n// Add Drag-start and drag-End listeners --- Add Css Class\r\nconst addListeners = (elements) => {\r\n  elements.forEach((item) => {\r\n    item.addEventListener('dragstart', () => {\r\n      item.classList.add('dragging');\r\n\r\n      item.addEventListener('dragend', () => {\r\n        item.classList.remove('dragging');\r\n      });\r\n    });\r\n  });\r\n};\r\n\r\n/// Code for local Storage Save.\r\n\r\nconst saveLocalstorage = () => {\r\n  localStorage.setItem('tasks', JSON.stringify(tasks));\r\n};\r\n\r\n// Help save any changes in real time (Save position after DragDrop, etc...)\r\n//----------------------\r\n\r\nconst saveChanges = () => {\r\n  const newList = [];\r\n  const listTasks = document.querySelectorAll('.item');\r\n  if (listTasks.length === 0) {\r\n    tasks = [];\r\n    saveLocalstorage(tasks);\r\n  } else {\r\n    for (let i = 0; i < listTasks.length; i += 1) {\r\n      newList.push({\r\n        index: i + 1,\r\n        description: listTasks[i].firstChild.nextSibling.firstChild.nextSibling.value,\r\n        completed: listTasks[i].firstChild.nextSibling.firstChild.nextSibling.checked,\r\n      });\r\n\r\n      tasks = newList;\r\n      saveLocalstorage(tasks);\r\n    }\r\n  }\r\n};\r\n\r\nconst addTask = (task) => {\r\n  const newTask = document.createElement('div');\r\n  newTask.classList.add('mini-section');\r\n  newTask.classList.add('item');\r\n  newTask.setAttribute('draggable', 'true');\r\n  newTask.innerHTML = `\r\n  <span>\r\n  <input class='check' type='checkbox' id='task-description' name='task-description' value='${task}'>${task}\r\n  <i class=\"fas fa-ellipsis-v ellipsis\" style=\"color: gray; float: right;\"></i>\r\n  </span>\r\n  `;\r\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.tasksList.appendChild(newTask);\r\n  saveChanges();\r\n  saveLocalstorage(tasks);\r\n  document.location.reload(true);\r\n};\r\n\r\nconst inputListener = (input) => {\r\n  input.addEventListener('keypress', (e) => {\r\n    if (e.key === 'Enter') {\r\n      addTask(input.value);\r\n    }\r\n  });\r\n};\r\n\r\nconst reloadContainer = (elements) => {\r\n  elements.forEach((item) => {\r\n    item.addEventListener('drop', () => {\r\n      saveChanges();\r\n    });\r\n  });\r\n};\r\n\r\n// ----------------\r\n\r\n// Get the element just after the location of the mouse\r\nconst getDragAfterElement = (container, y) => {\r\n  const draggableElements = [...container.querySelectorAll('.item:not(.dragging)')];\r\n\r\n  return draggableElements.reduce((closest, child) => {\r\n    const box = child.getBoundingClientRect();\r\n    const offset = y - box.top - box.height / 2;\r\n\r\n    if (offset < 0 && offset > closest.offset) {\r\n      return { offset, element: child };\r\n    }\r\n    return closest;\r\n  }, { offset: Number.NEGATIVE_INFINITY }).element;\r\n};\r\n\r\n// Add event listener DragOver to dragzone\r\nconst dragOver = (container) => {\r\n  container.addEventListener('dragover', (e) => {\r\n    e.preventDefault();\r\n    const afterElement = getDragAfterElement(container, e.clientY);\r\n    const draggable = document.querySelector('.dragging');\r\n    if (afterElement === undefined) {\r\n      container.appendChild(draggable);\r\n    } else {\r\n      container.insertBefore(draggable, afterElement);\r\n    }\r\n  });\r\n};\r\n\r\nconst editListener = () => {\r\n  for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.items.length; i += 1) {\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].addEventListener('dblclick', () => {\r\n      const oldValue = _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].children[0];\r\n      const oldElement = _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].children[0].nextSibling.nextSibling;\r\n      oldElement.remove();\r\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].children[0].nextSibling.remove();\r\n      const newInput = document.createElement('input');\r\n      const icon = document.createElement('i');\r\n      icon.classList.add('fa', 'fa-trash', 'trash');\r\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].firstChild.nextSibling.removeChild(_index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].children[0]);\r\n      newInput.placeholder = oldValue.value;\r\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].insertBefore(newInput, _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].children[0]);\r\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].insertBefore(icon, _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].children[0]);\r\n\r\n      newInput.addEventListener('keypress', (e) => {\r\n        if (e.key === 'Enter') {\r\n          if (newInput.value.trim() === '') {\r\n            newInput.classList.add('invalid');\r\n          } else {\r\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].id = i;\r\n            newInput.setAttribute('description', newInput.value);\r\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].firstChild.nextSibling.removeChild(_index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].children[0].children[0]);\r\n\r\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.items[i].firstChild.nextSibling.innerHTML = `\r\n           <input class='check' type='checkbox' id='task-description' name='task-description' value='${newInput.value}'>${newInput.value}\r\n           <i class=\"fas fa-ellipsis-v ellipsis\" style=\"color: gray; float: right;\"></i>\r\n          `;\r\n            tasks[i].description = newInput.value;\r\n            tasks[i].completed = false;\r\n            saveChanges();\r\n          }\r\n        }\r\n      });\r\n\r\n      icon.addEventListener('click', (e) => {\r\n        e.target.parentElement.parentElement.remove();\r\n        saveChanges();\r\n        document.location.reload(true);\r\n      });\r\n    });\r\n  }\r\n};\r\n\r\nconst deleteAll = () => {\r\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.clearAll.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    tasks = tasks.filter((task) => task.completed === false);\r\n    saveLocalstorage();\r\n    document.location.reload(true);\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo2.0/./src/drag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tasksList\": () => (/* binding */ tasksList),\n/* harmony export */   \"clearAll\": () => (/* binding */ clearAll),\n/* harmony export */   \"showTask\": () => (/* binding */ showTask),\n/* harmony export */   \"items\": () => (/* binding */ items)\n/* harmony export */ });\n/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag.js */ \"./src/drag.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _complete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complete.js */ \"./src/complete.js\");\n// * eslint-disable import/no-cycle */\r\n/* eslint-disable import/no-duplicates */\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst tasksList = document.querySelector('.tasksList');\r\nconst clearAll = document.querySelector('.clear-all');\r\n\r\nconst task = document.querySelector('.task');\r\nconst showTask = (tasks) => {\r\n  tasks.forEach((e) => {\r\n    const task = document.createElement('div');\r\n    task.classList.add('mini-section');\r\n    task.classList.add('item');\r\n    task.setAttribute('draggable', 'true');\r\n    if (e.completed === true) {\r\n      task.innerHTML = `\r\n      <span class='desc'>\r\n      <input class='check' type='checkbox' id='task-description' name='task-description' value='${e.description}' checked = true>${e.description}</input>\r\n      <i class=\"fas fa-ellipsis-v ellipsis\" style=\"color: gray; float: right;\"></i>\r\n      </span>\r\n      `;\r\n    } else {\r\n      task.innerHTML = `\r\n      <span>\r\n      <input class='check' type='checkbox' id='task-description' name='task-description' value='${e.description}'>${e.description}</input>\r\n      <i class=\"fas fa-ellipsis-v ellipsis\" style=\"color: gray; float: right;\"></i>\r\n      </span>\r\n      `;\r\n    }\r\n\r\n    tasksList.appendChild(task);\r\n  });\r\n};\r\n\r\nshowTask(_drag_js__WEBPACK_IMPORTED_MODULE_0__.tasks);\r\n(0,_complete_js__WEBPACK_IMPORTED_MODULE_2__.getContainer)(tasksList);\r\nconst items = document.querySelectorAll('.item');\r\n\r\n(0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.inputListener)(task);\r\n(0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.editListener)();\r\n(0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.addListeners)(items);\r\n(0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.dragOver)(tasksList);\r\n(0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.reloadContainer)(items);\r\n(0,_drag_js__WEBPACK_IMPORTED_MODULE_0__.deleteAll)();\r\n\n\n//# sourceURL=webpack://todo2.0/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;