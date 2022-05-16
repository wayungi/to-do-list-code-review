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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  font-size: 12px;\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\n  color: black;\\n}\\n\\n.container {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  padding-top: 5em;\\n}\\n\\n.todo {\\n  width: 60%;\\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);\\n}\\n\\n.title-bar {\\n  justify-content: space-between;\\n  padding: 20px 20px;\\n}\\n\\n.fa-rotate,\\n.title {\\n  font-size: 2em;\\n}\\n\\n.fa-rotate:active {\\n  color: rgba(0, 0, 0, 0.5);\\n}\\n\\n.title-bar,\\n.form-elements {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: nowrap;\\n}\\n\\n.add-item {\\n  width: 100%;\\n  box-sizing: border-box;\\n  padding: 15px 10px;\\n  border: none;\\n}\\n\\n.form-elements {\\n  border-top: 1px solid rgba(211, 211, 211, 0.5);\\n  border-bottom: 1px solid rgba(211, 211, 211, 0.5);\\n}\\n\\n.add-item:focus {\\n  outline: none;\\n}\\n\\n.todo-task {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: nowrap;\\n  align-items: center;\\n  border-bottom: 1px solid rgba(211, 211, 211, 0.5);\\n  padding: 10px 0 10px 10px;\\n}\\n\\n.fa-solid {\\n  display: inline-block;\\n  cursor: pointer;\\n  padding: 2px 4px;\\n}\\n\\n.text {\\n  width: 85%;\\n  padding: 5px 10px;\\n  box-sizing: border-box;\\n  border: none;\\n}\\n\\n.task-color {\\n  color: grey;\\n}\\n\\n.text:focus {\\n  outline: none;\\n}\\n\\n.text:not(:read-only) {\\n  color: black;\\n}\\n\\na.remove-completed {\\n  display: inline-block;\\n  width: 100%;\\n  box-sizing: border-box;\\n  height: 40px;\\n  text-align: center;\\n  line-height: 40px;\\n  text-decoration: none;\\n  border: none;\\n  background-color: rgba(211, 211, 211, 0.5);\\n  color: rgba(115, 115, 115, 1);\\n}\\n\\na.remove-completed:active {\\n  background-color: rgba(211, 211, 211, 0.8);\\n  color: #fff;\\n}\\n\\ninput.completed {\\n  color: rgba(211, 211, 211, 0.8);\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\n\n\nconst form = document.querySelector('.todo-form');\nconst input = document.querySelector('.add-item');\nconst toDosList = document.querySelector('.todos');\nconst allCompleted = document.querySelector('#remove-completed-tasks');\nconst refresh = document.querySelector('.fa-rotate');\nconst userInterface = new _ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n// on form submit\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const inputValue = input.value;\n  if (inputValue) {\n    const length = userInterface.getTasksArrayLength() + 1;\n    const task = { description: inputValue, completed: false, index: length };\n    const todoTask = userInterface.addTaskToToDosList(task);\n    toDosList.appendChild(todoTask);\n    input.value = '';\n    //  update tasksArray & localStorage\n    userInterface.updatetasksArray(task);\n  }\n});\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const tasksArray = userInterface.checkStorage();\n  if (tasksArray.length < 1) return;\n  tasksArray.forEach((task) => {\n    const todoTask = userInterface.addTaskToToDosList(task);\n    toDosList.appendChild(todoTask);\n  });\n});\n\nallCompleted.addEventListener('click', () => {\n  userInterface.removeAllChecked();\n});\n\nrefresh.addEventListener('click', () => {\n  userInterface.removeAllChecked();\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\n  checkLocalStorage = () => {\n    const tasksArray = localStorage.getItem('tasksArray');\n    return tasksArray ? JSON.parse(tasksArray) : [];\n  }\n\n  updateLocalStorage = (tasksArray) => {\n    localStorage.setItem('tasksArray', JSON.stringify(tasksArray));\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/storage.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppInterface)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\nconst store = new _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nlet tasksArray = store.checkLocalStorage();\n\nclass AppInterface {\n  addTaskToToDosList = (task) => {\n    const toDoTaskElement = this.toDoTask();\n    const hiddenInputElement = this.hiddenInputElement(task.index);\n    const checkbox = this.createCheckBox(task.completed);\n    this.addCompleteListener(checkbox);\n    const inputElement = this.createTextInput(task.description);\n    const optionsElement = this.createOptions();\n    toDoTaskElement.appendChild(hiddenInputElement);\n    toDoTaskElement.appendChild(checkbox);\n    toDoTaskElement.appendChild(inputElement);\n    toDoTaskElement.appendChild(optionsElement);\n    return toDoTaskElement;\n  }\n\n  toDoTask = () => {\n    const todoTaskEl = document.createElement('div');\n    todoTaskEl.classList.add('todo-task');\n    return todoTaskEl;\n  }\n\n  hiddenInputElement = (index) => {\n    const input = document.createElement('input');\n    input.setAttribute('type', 'hidden');\n    input.setAttribute('name', 'index');\n    input.setAttribute('value', index);\n    return input;\n  }\n\n  createCheckBox = (state) => {\n    const checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n    if (state) {\n      checkbox.setAttribute('checked', 'checked');\n    }\n    this.addCheckBoxListener(checkbox);\n    return checkbox;\n  }\n\n  createTextInput = (inputValue) => {\n    const input = document.createElement('input');\n    input.classList.add('text', 'task-color');\n    input.value = inputValue;\n    input.setAttribute('readonly', 'readonly');\n    input.setAttribute('name', 'my-task');\n    return input;\n  }\n\n  createOptions = () => {\n    const edit = document.createElement('i');\n    edit.classList.add('fa-solid', 'fa-pen-to-square');\n    edit.classList.add('hidden');\n\n    const save = document.createElement('i');\n    save.classList.add('fa-solid', 'fa-floppy-disk');\n    save.classList.add('hidden');\n\n    const trash = document.createElement('i');\n    trash.classList.add('fa-solid', 'fa-trash');\n    trash.classList.add('hidden');\n\n    const ellipsis = document.createElement('i');\n    ellipsis.classList.add('fa-solid', 'fa-ellipsis-vertical');\n\n    this.addEditListener(edit, save);\n    this.addSaveListener(save, edit);\n    this.addDeleteListener(trash);\n    this.addDisplayModifier(ellipsis);\n\n    const optionsEl = document.createElement('div');\n    optionsEl.classList.add('options');\n    optionsEl.appendChild(edit);\n    optionsEl.appendChild(save);\n    optionsEl.appendChild(trash);\n    optionsEl.appendChild(ellipsis);\n    return optionsEl;\n  };\n\n  addCheckBoxListener = (elem) => {\n    elem.addEventListener('click', (e) => {\n      const todoTask = e.target.parentElement;\n      const index = +todoTask.querySelector('input[name=\"index\"]').value;\n      const elementIndex = index - 1;\n      if (e.target.checked) {\n        this.updateCompleted(elementIndex, true);\n      } else {\n        this.updateCompleted(elementIndex, false);\n      }\n    });\n  };\n\n  addEditListener = (edit, save) => {\n    edit.addEventListener('click', (e) => {\n      // hide edit icon & show save icon\n      this.toggleVisibility(edit, save);\n      // get the input field and make it editable with focus\n      const todoTask = e.target.parentElement.parentElement;\n      const inputFieldEl = todoTask.querySelector('input[name=\"my-task\"]');\n      inputFieldEl.removeAttribute('readonly');\n      inputFieldEl.focus();\n    });\n  };\n\n  addSaveListener = (save, edit) => {\n    save.addEventListener('click', (e) => {\n      // hide save icon & display edit icon\n      this.toggleVisibility(save, edit);\n      // get the input field and make it uneditable\n      const todoTask = e.target.parentElement.parentElement;\n      const inputFieldEl = todoTask.querySelector('input[name=\"my-task\"]');\n      inputFieldEl.setAttribute('readonly', 'readonly');\n      // get the parameters for the edit\n      const hiddenInputEl = todoTask.querySelector('input[name=\"index\"]');\n      this.saveTaskEdit(inputFieldEl.value, hiddenInputEl.value);\n    });\n  };\n\n  addDeleteListener = (elem) => {\n    elem.addEventListener('click', (e) => {\n      const todoTask = e.target.parentElement.parentElement;\n      // index of element to be removed from array\n      const index = todoTask.querySelector('input[name=\"index\"]').value;\n      todoTask.remove();\n      this.deleteTask(index);\n    });\n  };\n\n  // on clicking ellipsis, display edit and delete icons\n  addDisplayModifier = (elem) => {\n    elem.addEventListener('click', (e) => {\n      e.target.classList.add('hidden');\n      const parent = e.target.parentElement;\n      // display edit & delete buttons\n      parent.querySelector('.fa-pen-to-square').classList.remove('hidden');\n      parent.querySelector('.fa-trash').classList.remove('hidden');\n    });\n  };\n\n  addCompleteListener = (elem) => {\n    elem.addEventListener('click', (e) => {\n      const todoTask = e.target.parentElement;\n      const inputFieldEl = todoTask.querySelector('input[name=\"my-task\"]');\n      if (e.target.checked) {\n        inputFieldEl.classList.remove('task-color');\n        inputFieldEl.classList.add('completed');\n      } else {\n        inputFieldEl.classList.add('task-color');\n        inputFieldEl.classList.remove('completed');\n      }\n    });\n  };\n\n  removeAllChecked = () => {\n    const deleteTracker = [...tasksArray];\n    tasksArray = tasksArray.filter((task) => task.completed === false);\n    this.updateAllIndex();\n    store.updateLocalStorage(tasksArray);\n    // remove deleted elements from interface\n    const deleteTarget = deleteTracker.filter((task) => task.completed === true);\n    deleteTarget.forEach((task) => {\n      const { index } = task;\n      const victimTask = document.querySelector(`input[value=\"${index}\"]`);\n      const { parentElement } = victimTask;\n      parentElement.remove();\n    });\n  }\n\n  toggleVisibility =(hideThisEl, showThisEl) => {\n    hideThisEl.classList.add('hidden');\n    showThisEl.classList.remove('hidden');\n  }\n\n  updatetasksArray = (task) => {\n    tasksArray.push(task);\n    store.updateLocalStorage(tasksArray);\n  }\n\n  checkStorage = () => {\n    const tasksArray = store.checkLocalStorage();\n    return tasksArray;\n  }\n\n  saveTaskEdit = (editedTask, taskIndex) => {\n    const index = +taskIndex;\n    const elementIndex = index - 1;\n    // update the task description\n    tasksArray[elementIndex].description = editedTask;\n    store.updateLocalStorage(tasksArray);\n  }\n\n  deleteTask = (index) => {\n    const elementIndex = +index - 1;\n    tasksArray.splice(elementIndex, 1);\n    this.updateIndex(elementIndex);\n  }\n\n  // reduce the index of all elements after the element that was removed\n  updateIndex = (startIndex) => {\n    for (let i = startIndex; i < tasksArray.length; i += 1) {\n      tasksArray[i].index -= 1;\n    }\n    store.updateLocalStorage(tasksArray);\n  }\n\n  updateAllIndex = () => {\n    let assignedIndex = 0;\n    tasksArray.forEach((task) => {\n      assignedIndex += 1;\n      task.index = assignedIndex;\n    });\n  }\n\n  getTasksArrayLength = () => tasksArray.length\n\n  updateCompleted = (elementIndex, state) => {\n    tasksArray[elementIndex].completed = state;\n    store.updateLocalStorage(tasksArray);\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/ui.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;