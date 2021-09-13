module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/editor/[course].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Blocks/H1.js":
/*!****************************!*\
  !*** ./pages/Blocks/H1.js ***!
  \****************************/
/*! exports provided: h1Template, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h1Template", function() { return h1Template; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "D:\\sites\\github\\courses\\sermon-outlines\\stephen-reynolds-jr\\Youth Revelation Study\\youth-bible-study\\pages\\Blocks\\H1.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function H1(props) {
  const {
    data,
    update,
    index,
    read
  } = props;

  if (read) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: data.value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }, this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "h1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          value: props.data.value,
          onChange: e => {
            let l = _objectSpread({}, props.data);

            l.value = e.target.value;
            update(index, l);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 31
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 27
      }, this)]
    }, void 0, true);
  }
}

const h1Template = {
  type: "h1",
  value: ""
};
/* harmony default export */ __webpack_exports__["default"] = (H1);

/***/ }),

/***/ "./pages/Blocks/Line.js":
/*!******************************!*\
  !*** ./pages/Blocks/Line.js ***!
  \******************************/
/*! exports provided: default, lineTypes, templates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineTypes", function() { return lineTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templates", function() { return templates; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Quiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quiz */ "./pages/Blocks/Quiz.js");
/* harmony import */ var _H1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./H1 */ "./pages/Blocks/H1.js");
/* harmony import */ var _P__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./P */ "./pages/Blocks/P.js");
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Markdown */ "./pages/Blocks/Markdown.js");
/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Timeline */ "./pages/Blocks/Timeline.js");

var _jsxFileName = "D:\\sites\\github\\courses\\sermon-outlines\\stephen-reynolds-jr\\Youth Revelation Study\\youth-bible-study\\pages\\Blocks\\Line.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function Line(props) {
  switch (props.data.type) {
    case _Quiz__WEBPACK_IMPORTED_MODULE_1__["quizTemplate"].type:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Quiz__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, this);
      break;

    case _H1__WEBPACK_IMPORTED_MODULE_2__["h1Template"].type:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_H1__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, this);
      break;

    case _P__WEBPACK_IMPORTED_MODULE_3__["pTemplate"].type:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_P__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this);
      break;

    case _Markdown__WEBPACK_IMPORTED_MODULE_4__["markdownTemplate"].type:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Markdown__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, this);
      break;

    case _Timeline__WEBPACK_IMPORTED_MODULE_5__["timelineTemplate"].type:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Timeline__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, this);
      break;

    default:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, this);
  }

  return blocks[props.type];
}
const lineTypes = [_Markdown__WEBPACK_IMPORTED_MODULE_4__["markdownTemplate"].type, _H1__WEBPACK_IMPORTED_MODULE_2__["h1Template"].type, "h2", _P__WEBPACK_IMPORTED_MODULE_3__["pTemplate"].type, "blockquote", _Quiz__WEBPACK_IMPORTED_MODULE_1__["quizTemplate"].type];
const templates = {
  quiz: _objectSpread(_objectSpread({}, _Quiz__WEBPACK_IMPORTED_MODULE_1__["quizTemplate"]), {}, {
    lesson: 1
  }),
  h1: _objectSpread(_objectSpread({}, _H1__WEBPACK_IMPORTED_MODULE_2__["h1Template"]), {}, {
    lesson: 1
  }),
  p: _objectSpread(_objectSpread({}, _P__WEBPACK_IMPORTED_MODULE_3__["pTemplate"]), {}, {
    lesson: 1
  }),
  md: _objectSpread(_objectSpread({}, _Markdown__WEBPACK_IMPORTED_MODULE_4__["markdownTemplate"]), {}, {
    lesson: 1
  }),
  timeline: _objectSpread(_objectSpread({}, _Timeline__WEBPACK_IMPORTED_MODULE_5__["timelineTemplate"]), {}, {
    lesson: 1
  })
};

/***/ }),

/***/ "./pages/Blocks/Markdown.js":
/*!**********************************!*\
  !*** ./pages/Blocks/Markdown.js ***!
  \**********************************/
/*! exports provided: markdownTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markdownTemplate", function() { return markdownTemplate; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown/with-html */ "react-markdown/with-html");
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\sites\\github\\courses\\sermon-outlines\\stephen-reynolds-jr\\Youth Revelation Study\\youth-bible-study\\pages\\Blocks\\Markdown.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function Markdown(props) {
  const {
    data,
    update,
    index,
    read
  } = props;

  if (read) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_1___default.a, {
      allowDangerousHtml: true,
      children: data.value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }, this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
      style: {
        height: "100%"
      },
      type: "text",
      value: data.value,
      onChange: e => {
        let l = _objectSpread({}, data);

        l.value = e.target.value;
        update(index, l);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }, this);
  }
}

const markdownTemplate = {
  type: "md",
  value: ""
};
/* harmony default export */ __webpack_exports__["default"] = (Markdown);

/***/ }),

/***/ "./pages/Blocks/P.js":
/*!***************************!*\
  !*** ./pages/Blocks/P.js ***!
  \***************************/
/*! exports provided: pTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pTemplate", function() { return pTemplate; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "D:\\sites\\github\\courses\\sermon-outlines\\stephen-reynolds-jr\\Youth Revelation Study\\youth-bible-study\\pages\\Blocks\\P.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function P(props) {
  const {
    data,
    update,
    index,
    read
  } = props;

  if (read) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: data.value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }, this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "p"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          value: data.value,
          onChange: e => {
            let l = _objectSpread({}, data);

            l.value = e.target.value;
            update(index, l);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 26
      }, this)]
    }, void 0, true);
  }
}

const pTemplate = {
  type: "p",
  value: ""
};
/* harmony default export */ __webpack_exports__["default"] = (P);

/***/ }),

/***/ "./pages/Blocks/Quiz.js":
/*!******************************!*\
  !*** ./pages/Blocks/Quiz.js ***!
  \******************************/
/*! exports provided: quizTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quizTemplate", function() { return quizTemplate; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Revelation_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../styles/Revelation.module.css */ "./styles/Revelation.module.css");
/* harmony import */ var _styles_Revelation_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Revelation_module_css__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\sites\\github\\courses\\sermon-outlines\\stephen-reynolds-jr\\Youth Revelation Study\\youth-bible-study\\pages\\Blocks\\Quiz.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function Quiz(props) {
  const {
    data,
    update,
    index,
    read
  } = props;

  if (read) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
      children: [" ", props.data.questions.map(function (q, i) {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: "QUESTION TYPES: Buzzer Question "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 4
        }, this);

        const keys = q ? Object.keys(q) : [];
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [keys.map(function (k) {
            if (k === "answers") {
              return q[k].map(function (ans, index) {
                let color = "green";

                if (ans.points === "0" || ans.points === 0) {
                  color = "red";
                }

                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    style: {
                      color: color
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: ans.text
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 60
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [" : ", ans.points]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 83
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 23,
                    columnNumber: 35
                  }, this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 18
                }, this);
              });
            } else {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "questions " + _styles_Revelation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a[k],
                  type: "text",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: _styles_Revelation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.questionLabel,
                    children: [k, ": "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                    columnNumber: 82
                  }, this), q[k]]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 30
                }, this)
              }, k, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 17
              }, this);
            }
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 10
          }, this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 14
        }, this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }, this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          value: props.data.title,
          onChange: e => {
            let l = _objectSpread({}, props.data);

            l.title = e.target.value;
            update(index, l);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 16
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
        children: props.data.questions.map(function (q, i) {
          const keys = q ? Object.keys(q) : [];
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              style: {
                color: "red",
                marginLeft: "15px"
              },
              onClick: e => {
                let newData = _objectSpread({}, props.data);

                delete newData.questions[i];
                update(index, newData);
              },
              children: "x"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 13
            }, this), keys.map(function (k) {
              if (k === "answers") {
                return props.data.questions[i][k].map(function (q, answerid) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                      className: _styles_Revelation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.option,
                      type: "text",
                      onChange: e => {
                        let newData = _objectSpread({}, props.data);

                        newData.questions[i][k][answerid].text = e.target.value;
                        update(index, newData);
                      },
                      value: props.data.questions[i][k][answerid].text
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 38
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: _styles_Revelation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.questionLabel,
                      children: "TEXT"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 77
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                      className: _styles_Revelation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.option,
                      type: "text",
                      onChange: e => {
                        let newData = _objectSpread({}, props.data);

                        newData.questions[i][k][answerid].points = e.target.value;
                        update(index, newData);
                      },
                      value: props.data.questions[i][k][answerid].points
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 13
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: _styles_Revelation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.questionLabel,
                      children: "POINTS"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 79
                    }, this)]
                  }, answerid, true, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 18
                  }, this);
                });
              } else {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                    className: _styles_Revelation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.questions + " " + _styles_Revelation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a[k],
                    type: "text",
                    onChange: e => {
                      let newData = _objectSpread({}, props.data);

                      newData.questions[i][k] = e.target.value;
                      update(index, newData);
                    },
                    value: q[k]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 29
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: _styles_Revelation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.questionLabel,
                    children: k
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    style: {
                      color: "red",
                      marginLeft: "15px"
                    },
                    onClick: e => {
                      let newData = _objectSpread({}, props.data);

                      newData.questions.splice(i, 1);
                      update(index, newData);
                    },
                    children: "x"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 10
                  }, this)]
                }, k, true, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 16
                }, this);
              }
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              onSubmit: e => {
                e.preventDefault();
                const index = e.target.index.value;
                const prop = e.target.prop.value;
                const val = e.target.val.value;

                let newData = _objectSpread({}, props.data);

                newData.questions[index][prop] = val;
                update(index, newData);
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "index",
                value: i
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 12
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: ["Key:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "text",
                  name: "prop"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 14
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 12
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: ["Value:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "text",
                  name: "val"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 14
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "submit",
                value: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 12
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 10
            }, this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 14
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function (e) {
          let newData = _objectSpread({}, props.data);

          newData.questions.push(quizTemplate.questions[0]);
          update(index, newData);
        },
        children: "add new question"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 7
      }, this)]
    }, void 0, true);
  }
}

const quizTemplate = {
  type: "quiz",
  title: "TITLE",
  questions: [{
    "q": "",
    "ref": "",
    "type": "ALL_ANSWER",
    "answers": [{
      "text": "",
      "points": "0"
    }, {
      "text": "",
      "points": 0
    }, {
      "text": "",
      "points": 0
    }, {
      "text": "",
      "points": 500
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (Quiz);

/***/ }),

/***/ "./pages/Blocks/Timeline.js":
/*!**********************************!*\
  !*** ./pages/Blocks/Timeline.js ***!
  \**********************************/
/*! exports provided: timelineTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timelineTemplate", function() { return timelineTemplate; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "D:\\sites\\github\\courses\\sermon-outlines\\stephen-reynolds-jr\\Youth Revelation Study\\youth-bible-study\\pages\\Blocks\\Timeline.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Timeline(props) {
  const {
    data,
    update,
    index,
    read
  } = props;
  const style = {
    /*.flex-parent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    
    .input-flex-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 80vw;
      height: 100px;
      max-width: 1000px;
      position: relative;
      z-index: 0;
    }
    
    .input {
      width: 25px;
      height: 25px;
      background-color: #2C3E50;
      position: relative;
      border-radius: 50%;
    }
    .input:hover {
      cursor: pointer;
    }
    .input::before, .input::after {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      top: 50%;
      transform: translateY(-50%);
      background-color: #2C3E50;
      width: 4vw;
      height: 5px;
      max-width: 50px;
    }
    .input::before {
      left: calc(-4vw + 12.5px);
    }
    .input::after {
      right: calc(-4vw + 12.5px);
    }
    .input.active {
      background-color: #2C3E50;
    }
    .input.active::before {
      background-color: #2C3E50;
    }
    .input.active::after {
      background-color: #AEB6BF;
    }
    .input.active span {
      font-weight: 700;
    }
    .input.active span::before {
      font-size: 13px;
    }
    .input.active span::after {
      font-size: 15px;
    }
    .input.active ~ .input, .input.active ~ .input::before, .input.active ~ .input::after {
      background-color: #AEB6BF;
    }
    .input span {
      width: 1px;
      height: 1px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      visibility: hidden;
    }
    .input span::before, .input span::after {
      visibility: visible;
      position: absolute;
      left: 50%;
    }
    .input span::after {
      content: attr(data-year);
      top: 25px;
      transform: translateX(-50%);
      font-size: 14px;
    }
    .input span::before {
      content: attr(data-info);
      top: -65px;
      width: 70px;
      transform: translateX(-5px) rotateZ(-45deg);
      font-size: 12px;
      text-indent: -10px;
    }
    
    .description-flex-container {
      width: 80vw;
      font-weight: 400;
      font-size: 22px;
      margin-top: 100px;
      max-width: 1000px;
    }
    .description-flex-container p {
      margin-top: 0;
      display: none;
    }
    .description-flex-container p.active {
      display: block;
    }
    
    @media (min-width: 1250px) {
      .input::before {
        left: -37.5px;
      }
    
      .input::after {
        right: -37.5px;
      }
    }
    @media (max-width: 850px) {
      .input {
        width: 17px;
        height: 17px;
      }
      .input::before, .input::after {
        height: 3px;
      }
      .input::before {
        left: calc(-4vw + 8.5px);
      }
      .input::after {
        right: calc(-4vw + 8.5px);
      }
    }
    @media (max-width: 600px) {
      .flex-parent {
        justify-content: initial;
      }
    
      .input-flex-container {
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        height: auto;
        margin-top: 15vh;
      }
    
      .input {
        width: 60px;
        height: 60px;
        margin: 0 10px 50px;
        background-color: #AEB6BF;
      }
      .input::before, .input::after {
        content: none;
      }
      .input span {
        width: 100%;
        height: 100%;
        display: block;
      }
      .input span::before {
        top: calc(100% + 5px);
        transform: translateX(-50%);
        text-indent: 0;
        text-align: center;
      }
      .input span::after {
        top: 50%;
        transform: translate(-50%, -50%);
        color: #ECF0F1;
      }
    
      .description-flex-container {
        margin-top: 30px;
        text-align: center;
      }
    }
    @media (max-width: 400px) {
      body {
        min-height: 950px;
      }
    }*/
  };

  if (read) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [style, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "flex-parent",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "input-flex-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "input",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "data-year": "1910",
              "data-info": "headset"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "input",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "data-year": "1920",
              "data-info": "jungle gym"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "input active",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "data-year": "1930",
              "data-info": "chocolate chip cookie"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "input",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "data-year": "1940",
              "data-info": "Jeep"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "input",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "data-year": "1950",
              "data-info": "leaf blower"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "input",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "data-year": "1960",
              "data-info": "magnetic stripe card"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "input",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "data-year": "1970",
              "data-info": "wireless LAN"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "input",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "data-year": "1980",
              "data-info": "flash memory"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "input",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "data-year": "1990",
              "data-info": "World Wide Web"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "input",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "data-year": "2000",
              "data-info": "Google AdWords"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "description-flex-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "And future Call of Duty players would thank them."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Because every kid should get to be Tarzan for a day."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            class: "active",
            children: "And the world rejoiced."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Because building roads is inconvenient."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Ain\u2019t nobody got time to rake."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Because paper currency is for noobs."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Nobody likes cords. Nobody."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Brighter than glow memory."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "To capitalize on an as-yet nascent market for cat photos."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Because organic search rankings take work."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 4
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: "position: absolute; bottom: 40px; right: 10px; font-size: 12px",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://codepen.io/cjl750/pen/XMyRoB",
          target: "_blank",
          children: "original version with slinky mobile menu"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: "position: absolute; bottom: 15px; right: 10px; font-size: 12px",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://codepen.io/cjl750/pen/wdVxzV",
          target: "_blank",
          children: "alternate version with custom range input"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: "position: absolute; bottom: 15px; left: 10px; font-size: 18px; font-weight: bold",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://codepen.io/cjl750/pen/MXvYmg",
          target: "_blank",
          children: "version 4: pure CSS!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 1
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 4
    }, this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          value: props.data.title,
          onChange: e => {
            let l = _objectSpread({}, props.data);

            l.title = e.target.value;
            update(index, l);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 16
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 12
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
        children: props.data.questions.map(function (q, i) {
          const keys = q ? Object.keys(q) : [];
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              style: {
                color: "red",
                marginLeft: "15px"
              },
              onClick: e => {
                let newData = _objectSpread({}, props.data);

                delete newData.questions[i];
                update(index, newData);
              },
              children: "x"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 13
            }, this), keys.map(function (k) {
              if (k === "answers") {
                return props.data.questions[i][k].map(function (q, answerid) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                      className: styles.option,
                      type: "text",
                      onChange: e => {
                        let newData = _objectSpread({}, props.data);

                        newData.questions[i][k][answerid].text = e.target.value;
                        update(index, newData);
                      },
                      value: props.data.questions[i][k][answerid].text
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 274,
                      columnNumber: 38
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: styles.questionLabel,
                      children: "TEXT"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 279,
                      columnNumber: 77
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                      className: styles.option,
                      type: "text",
                      onChange: e => {
                        let newData = _objectSpread({}, props.data);

                        newData.questions[i][k][answerid].points = e.target.value;
                        update(index, newData);
                      },
                      value: props.data.questions[i][k][answerid].points
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 280,
                      columnNumber: 13
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: styles.questionLabel,
                      children: "POINTS"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 285,
                      columnNumber: 79
                    }, this)]
                  }, answerid, true, {
                    fileName: _jsxFileName,
                    lineNumber: 274,
                    columnNumber: 18
                  }, this);
                });
              } else {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                    className: styles.questions + " " + styles[k],
                    type: "text",
                    onChange: e => {
                      let newData = _objectSpread({}, props.data);

                      newData.questions[i][k] = e.target.value;
                      update(index, newData);
                    },
                    value: q[k]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 291,
                    columnNumber: 29
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: styles.questionLabel,
                    children: k
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    style: {
                      color: "red",
                      marginLeft: "15px"
                    },
                    onClick: e => {
                      let newData = _objectSpread({}, props.data);

                      newData.questions.splice(i, 1);
                      update(index, newData);
                    },
                    children: "x"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 298,
                    columnNumber: 10
                  }, this)]
                }, k, true, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 16
                }, this);
              }
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              onSubmit: e => {
                e.preventDefault();
                const index = e.target.index.value;
                const prop = e.target.prop.value;
                const val = e.target.val.value;

                let newData = _objectSpread({}, props.data);

                newData.questions[index][prop] = val;
                update(index, newData);
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "hidden",
                name: "index",
                value: i
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 318,
                columnNumber: 12
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: ["Key:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "text",
                  name: "prop"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 321,
                  columnNumber: 14
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 319,
                columnNumber: 12
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: ["Value:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "text",
                  name: "val"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 325,
                  columnNumber: 14
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 323,
                columnNumber: 8
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "submit",
                value: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 327,
                columnNumber: 12
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 10
            }, this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 14
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function (e) {
          let newData = _objectSpread({}, props.data);

          newData.questions.push(quizTemplate.questions[0]);
          update(index, newData);
        },
        children: "add new question"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 7
      }, this)]
    }, void 0, true);
  }
}

const timelineTemplate = {
  type: "timeline",
  title: "NEW TIMELINE",
  entries: [{
    "date": "date",
    "body": "body"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./pages/Common/SelectLessonForm.js":
/*!******************************************!*\
  !*** ./pages/Common/SelectLessonForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\sites\\github\\courses\\sermon-outlines\\stephen-reynolds-jr\\Youth Revelation Study\\youth-bible-study\\pages\\Common\\SelectLessonForm.js";

function SelectLessonForm({
  lesson,
  handleSelectLesson
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      margin: "15px",
      width: "100%",
      textAlign: "center"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      style: {
        background: "none"
      },
      onSubmit: handleSelectLesson,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "hidden",
        name: "id",
        value: lesson.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 4,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        style: {
          background: "none"
        },
        type: "submit",
        value: "Lesson " + lesson.id + " (" + lesson.count + ")"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 15
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 11
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SelectLessonForm);

/***/ }),

/***/ "./pages/editor/Editor.module.css":
/*!****************************************!*\
  !*** ./pages/editor/Editor.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"row": "Editor_row__wSlFf",
	"column": "Editor_column__noSEn",
	"smallColumn": "Editor_smallColumn__3WIb-",
	"raw": "Editor_raw__25_aH"
};


/***/ }),

/***/ "./pages/editor/[course].js":
/*!**********************************!*\
  !*** ./pages/editor/[course].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Revelation_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Revelation.module.css */ "./styles/Revelation.module.css");
/* harmony import */ var _styles_Revelation_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Revelation_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Editor_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Editor.module.css */ "./pages/editor/Editor.module.css");
/* harmony import */ var _Editor_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Editor_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Common_SelectLessonForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Common/SelectLessonForm */ "./pages/Common/SelectLessonForm.js");
/* harmony import */ var _Blocks_Line__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Blocks/Line */ "./pages/Blocks/Line.js");

var _jsxFileName = "D:\\sites\\github\\courses\\sermon-outlines\\stephen-reynolds-jr\\Youth Revelation Study\\youth-bible-study\\pages\\editor\\[course].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function NewLineForm({
  index,
  handleNewLine
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      height: "25px",
      backgroundColor: "#dcdcdc",
      color: "#dcdcdc",
      margin: "15px",
      width: "100%",
      textAlign: "center"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      style: {
        background: "none"
      },
      onSubmit: handleNewLine,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "hidden",
        name: "index",
        value: index
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "raw"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        style: {
          background: "none"
        },
        name: "lineType",
        id: "lineTypes" + index,
        defaultValue: "md",
        children: [_Blocks_Line__WEBPACK_IMPORTED_MODULE_7__["lineTypes"].map(function (t) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            value: t,
            children: t
          }, t, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 28
          }, this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "raw",
          children: "raw"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 19
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        style: {
          background: "none"
        },
        type: "submit",
        value: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 133
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 11
  }, this);
}

function MoveToLessonForm({
  index,
  lesson,
  handleMoveToLesson
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      backgroundColor: "#dcdcdc",
      color: "#dcdcdc",
      margin: "15px",
      width: "100%",
      textAlign: "center"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      style: {
        background: "none"
      },
      onSubmit: handleMoveToLesson,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "hidden",
        name: "index",
        value: index
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "lesson",
        defaultValue: lesson
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        style: {
          background: "none"
        },
        type: "submit",
        value: "move to lesson"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 11
  }, this);
}

class Editor extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      file: false,
      lineTypes: _Blocks_Line__WEBPACK_IMPORTED_MODULE_7__["lineTypes"],
      lines: [],
      lesson: 1,
      lessons: [],
      showRaw: false
    };
  }

  componentDidMount() {
    /**/
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.router.query.course !== this.props.router.query.course || this.state.lines === undefined) {
      let lines = [];
      const course = newProps.router.query.course;

      if (localStorage.getItem(course) === null) {
        lines = [];
        localStorage.setItem(course, JSON.stringify(lines));
      } else {
        lines = JSON.parse(localStorage.getItem(course));
        if (lines === null) lines = [];
      }

      this.setState({
        lines: lines,
        lessons: this.getLessons(lines)
      });
    }
  }

  render() {
    const handleNewLine = this.handleNewLine.bind(this);
    const update = this.update.bind(this);
    const deleteLine = this.deleteLine.bind(this);
    const moveToLesson = this.handleMoveToLesson.bind(this);
    const lesson = this.state.lesson;
    const handleSelectLesson = this.handleSelectLesson.bind(this);
    const showRaw = this.state.showRaw;
    const toggleRaw = this.toggleRaw.bind(this);
    const copyTextToClipboard = this.copyTextToClipboard.bind(this);
    let rawStyle = {};
    const columnStyle = {
      height: "500px",
      overflow: "scroll"
    };

    if (showRaw) {
      rawStyle = {
        display: "block"
      };
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Block Editor | Youth Revelation Study"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 10
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 10
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          charset: "UTF-8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 10
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          style: {
            borderBottom: "solid 2px gray",
            position: "fixed",
            top: "0",
            height: "75px",
            backgroundColor: "white",
            width: "75%",
            marginTop: "0"
          },
          children: ["Editor | Lesson ", this.state.lesson, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: this.save.bind(this),
            children: "SAVE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 180
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              float: "right",
              fontSize: ".7rem"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "file",
              id: "input-file",
              onChange: this.getFile.bind(this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 280
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 232
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: "75px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Editor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.row,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Editor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.column + " " + _Editor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.smallColumn,
            children: this.state.lessons.map(function (less, k) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_SelectLessonForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
                lesson: less,
                handleSelectLesson: handleSelectLesson
              }, k, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 20
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Editor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.column,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NewLineForm, {
              index: 0,
              handleNewLine: handleNewLine
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, this), this.state.lines.map(function (line, i) {
              if (line.lesson === lesson) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: toggleRaw,
                    children: "raw"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 27
                  }, this), " >", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                    readOnly: true,
                    className: _Editor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.raw,
                    style: rawStyle,
                    value: JSON.stringify(line),
                    onClick: copyTextToClipboard
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 33
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _Editor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.row,
                    style: {
                      height: "400px",
                      overflow: "scroll"
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: _Editor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.column,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Blocks_Line__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        index: i,
                        data: line,
                        update: update,
                        style: columnStyle
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 33
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        style: {
                          color: "red",
                          marginLeft: "15px"
                        },
                        onClick: e => {
                          deleteLine(i);
                        },
                        children: "x"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 137,
                        columnNumber: 33
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MoveToLessonForm, {
                        index: i,
                        lesson: line.lesson,
                        handleMoveToLesson: moveToLesson
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 140,
                        columnNumber: 33
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 31
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: _Editor_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.column,
                      style: {
                        fontSize: "60%",
                        paddingLeft: "15px"
                      },
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Blocks_Line__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        index: i,
                        data: line,
                        read: true,
                        style: columnStyle
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 145,
                        columnNumber: 31
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NewLineForm, {
                      index: i + 1,
                      handleNewLine: handleNewLine
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 29
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 29
                  }, this)]
                }, i, true, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 26
                }, this);
              }
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 2
    }, this);
  }

  save() {
    const txt = JSON.stringify(this.state.lines);
    localStorage.setItem(this.props.router.query.course, txt); // Start file download.

    this.download(this.props.router.query.course + ".json", txt);
  }

  download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  getFile(event) {
    const input = event.target;

    if ('files' in input && input.files.length > 0) {
      const lines = this.placeFileContent(input.files[0]).then(lines => {
        this.setState({
          lines: lines,
          lessons: this.getLessons(lines)
        });
      });
    }
  }

  placeFileContent(file) {
    return this.readFileContent(file).then(content => {
      return JSON.parse(content);
    }).catch(error => console.log(error));
  }

  readFileContent(file) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = event => resolve(event.target.result);

      reader.onerror = error => reject(error);

      reader.readAsText(file);
    });
  }

  handleNewLine(e) {
    e.preventDefault();
    const lineType = e.target.lineType.value;
    const index = e.target.index.value;

    let newState = _objectSpread({}, this.state);

    if (lineType === "raw") {
      newState.lines.splice(index, 0, _objectSpread(_objectSpread({}, JSON.parse(e.target.raw.value)), {}, {
        lesson: this.state.lesson
      }));
    } else {
      newState.lines.splice(index, 0, _objectSpread(_objectSpread({}, _Blocks_Line__WEBPACK_IMPORTED_MODULE_7__["templates"][lineType]), {}, {
        lesson: this.state.lesson
      }));
    }

    newState.lessons = this.getLessons(newState.lines);
    this.setState(_objectSpread({}, newState));
  }

  handleMoveToLesson(e) {
    e.preventDefault();
    const lesson = parseInt(e.target.lesson.value);
    const index = e.target.index.value;

    let newState = _objectSpread({}, this.state);

    newState.lines[index].lesson = lesson;
    newState.lessons = this.getLessons(newState.lines);
    this.setState(_objectSpread({}, newState));
  }

  handleSelectLesson(e) {
    e.preventDefault();
    const id = e.target.id.value;

    let newState = _objectSpread({}, this.state);

    newState.lesson = parseInt(id);
    this.setState(_objectSpread({}, newState));
  }

  update(line, data) {
    let newState = _objectSpread({}, this.state);

    newState.lines[line] = _objectSpread({}, data);
    newState.lessons = this.getLessons(newState.lines);
    this.setState(newState);
  }

  deleteLine(line) {
    let newData = _objectSpread({}, this.state);

    newData.lines.splice(line, 1);
    newData.lessons = this.getLessons(newData.lines);
    this.setState(newData);
  }

  getLessons(lines) {
    let lessons = [];
    let i;
    let id = 0;
    let lindex = 0;

    for (i = 0; i < lines.length; i++) {
      id = parseInt(lines[i].lesson);
      lindex = id - 1;

      if (lessons[lindex] === undefined) {
        lessons[lindex] = {
          id: id,
          count: 1
        };
      } else {
        lessons[lindex] = {
          id: id,
          count: lessons[lindex].count + 1
        };
      }
    }

    return lessons;
  }

  toggleRaw(e) {
    let newState = _objectSpread({}, this.state);

    newState.showRaw = !newState.showRaw;
    this.setState(newState);
  }

  copyTextToClipboard(e) {
    const context = e.target;
    context.select();
    document.execCommand("copy");
    alert("Copied to clipoard!" + context.value);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Editor));
/*
1-4 Ellyanna
5-11 Jeremiah
12-16 Benjamin
17-22 Rosemary

1. Summaries
2. Conclusing of Book 1 sentence

		<Quiz line={1} questions={this.state.questions} updateQuestion={updateQuestion}/>

    */

/***/ }),

/***/ "./styles/Revelation.module.css":
/*!**************************************!*\
  !*** ./styles/Revelation.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"special-outline": "Revelation_special-outline__1W7e0",
	"collapsible": "Revelation_collapsible__JsajN",
	"active": "Revelation_active__12vDX",
	"content": "Revelation_content__2IpLW",
	"whole-of-book": "Revelation_whole-of-book__1-zXm",
	"answer": "Revelation_answer__2c3lY",
	"a": "Revelation_a__2L7bu",
	"question": "Revelation_question__1rxXL",
	"q": "Revelation_q__2ybv8",
	"ref": "Revelation_ref__1D_8o",
	"questionLabel": "Revelation_questionLabel__3R5Sp",
	"questions": "Revelation_questions__1kke5",
	"option": "Revelation_option__3bIyH"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-markdown/with-html":
/*!*******************************************!*\
  !*** external "react-markdown/with-html" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown/with-html");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQmxvY2tzL0gxLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL0Jsb2Nrcy9MaW5lLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL0Jsb2Nrcy9NYXJrZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9CbG9ja3MvUC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9CbG9ja3MvUXVpei5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9CbG9ja3MvVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQ29tbW9uL1NlbGVjdExlc3NvbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZWRpdG9yL0VkaXRvci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2VkaXRvci9bY291cnNlXS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvUmV2ZWxhdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXJrZG93bi93aXRoLWh0bWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJIMSIsInByb3BzIiwiZGF0YSIsInVwZGF0ZSIsImluZGV4IiwicmVhZCIsInZhbHVlIiwiZSIsImwiLCJ0YXJnZXQiLCJoMVRlbXBsYXRlIiwidHlwZSIsIkxpbmUiLCJxdWl6VGVtcGxhdGUiLCJwVGVtcGxhdGUiLCJtYXJrZG93blRlbXBsYXRlIiwidGltZWxpbmVUZW1wbGF0ZSIsImJsb2NrcyIsImxpbmVUeXBlcyIsInRlbXBsYXRlcyIsInF1aXoiLCJsZXNzb24iLCJoMSIsInAiLCJtZCIsInRpbWVsaW5lIiwiTWFya2Rvd24iLCJoZWlnaHQiLCJQIiwiUXVpeiIsInF1ZXN0aW9ucyIsIm1hcCIsInEiLCJpIiwia2V5cyIsIk9iamVjdCIsImsiLCJhbnMiLCJjb2xvciIsInBvaW50cyIsInRleHQiLCJzdHlsZXMiLCJxdWVzdGlvbkxhYmVsIiwidGl0bGUiLCJtYXJnaW5MZWZ0IiwibmV3RGF0YSIsImFuc3dlcmlkIiwib3B0aW9uIiwic3BsaWNlIiwicHJldmVudERlZmF1bHQiLCJwcm9wIiwidmFsIiwicHVzaCIsIlRpbWVsaW5lIiwic3R5bGUiLCJlbnRyaWVzIiwiU2VsZWN0TGVzc29uRm9ybSIsImhhbmRsZVNlbGVjdExlc3NvbiIsIm1hcmdpbiIsIndpZHRoIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZCIsImlkIiwiY291bnQiLCJOZXdMaW5lRm9ybSIsImhhbmRsZU5ld0xpbmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0IiwiTW92ZVRvTGVzc29uRm9ybSIsImhhbmRsZU1vdmVUb0xlc3NvbiIsIkVkaXRvciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJmaWxlIiwibGluZXMiLCJsZXNzb25zIiwic2hvd1JhdyIsImNvbXBvbmVudERpZE1vdW50IiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXdQcm9wcyIsInJvdXRlciIsInF1ZXJ5IiwiY291cnNlIiwidW5kZWZpbmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJzZXRTdGF0ZSIsImdldExlc3NvbnMiLCJyZW5kZXIiLCJiaW5kIiwiZGVsZXRlTGluZSIsIm1vdmVUb0xlc3NvbiIsInRvZ2dsZVJhdyIsImNvcHlUZXh0VG9DbGlwYm9hcmQiLCJyYXdTdHlsZSIsImNvbHVtblN0eWxlIiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwiYm9yZGVyQm90dG9tIiwicG9zaXRpb24iLCJ0b3AiLCJtYXJnaW5Ub3AiLCJzYXZlIiwiZmxvYXQiLCJmb250U2l6ZSIsImdldEZpbGUiLCJlU3R5bGVzIiwicm93IiwiY29sdW1uIiwic21hbGxDb2x1bW4iLCJsZXNzIiwibGluZSIsInJhdyIsInBhZGRpbmdMZWZ0IiwidHh0IiwiZG93bmxvYWQiLCJmaWxlbmFtZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwiZXZlbnQiLCJpbnB1dCIsImZpbGVzIiwibGVuZ3RoIiwicGxhY2VGaWxlQ29udGVudCIsInRoZW4iLCJyZWFkRmlsZUNvbnRlbnQiLCJjb250ZW50IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwicmVhZEFzVGV4dCIsImxpbmVUeXBlIiwibmV3U3RhdGUiLCJwYXJzZUludCIsImxpbmRleCIsImNvbnRleHQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImFsZXJ0Iiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNB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cUosT0FBTyxHQUFHckosQ0FBQyxDQUFDRSxNQUFsQjtBQUNBbUosV0FBTyxDQUFDQyxNQUFSO0FBQ0FsQyxZQUFRLENBQUNtQyxXQUFULENBQXFCLE1BQXJCO0FBQ0FDLFNBQUssQ0FBQyx3QkFBd0JILE9BQU8sQ0FBQ3RKLEtBQWpDLENBQUw7QUFDRDs7QUFuUTRCOztBQXNRaEIwSiw2SEFBVSxDQUFDMUYsTUFBRCxDQUF6QjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNOzs7Ozs7Ozs7OztBQ3pUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZkEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvZWRpdG9yL1tjb3Vyc2VdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9lZGl0b3IvW2NvdXJzZV0uanNcIik7XG4iLCJmdW5jdGlvbiBIMShwcm9wcyl7XHJcblxyXG5cdGNvbnN0IHsgZGF0YSwgdXBkYXRlLCBpbmRleCwgcmVhZCB9ID0gcHJvcHNcclxuXHJcblx0aWYocmVhZCl7XHJcblx0XHRyZXR1cm4gPGgxPntkYXRhLnZhbHVlfTwvaDE+XHJcblx0fWVsc2V7XHJcblx0cmV0dXJuICg8PjxzcGFuPmgxPC9zcGFuPjxoMT48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17cHJvcHMuZGF0YS52YWx1ZX0gb25DaGFuZ2U9eyhlKT0+e1xyXG5cdFx0bGV0IGwgPSB7Li4ucHJvcHMuZGF0YX1cclxuXHRcdGwudmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG5cdFx0dXBkYXRlKGluZGV4LCBsKVxyXG5cdH19Lz48L2gxPjwvPilcclxuXHR9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaDFUZW1wbGF0ZSA9IHsgdHlwZTpcImgxXCIsIHZhbHVlOlwiXCIgfVxyXG5leHBvcnQgZGVmYXVsdCBIMTsiLCJpbXBvcnQgUXVpeiAsIHtxdWl6VGVtcGxhdGV9IGZyb20gJy4vUXVpeidcclxuaW1wb3J0IEgxICwge2gxVGVtcGxhdGV9IGZyb20gJy4vSDEnXHJcbmltcG9ydCBQICwge3BUZW1wbGF0ZX0gZnJvbSAnLi9QJ1xyXG5pbXBvcnQgTWFya2Rvd24gLCB7bWFya2Rvd25UZW1wbGF0ZX0gZnJvbSAnLi9NYXJrZG93bidcclxuaW1wb3J0IFRpbWVsaW5lICwge3RpbWVsaW5lVGVtcGxhdGV9IGZyb20gJy4vVGltZWxpbmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5lKHByb3BzKXtcclxuXHJcblx0c3dpdGNoKHByb3BzLmRhdGEudHlwZSl7XHJcblx0XHRjYXNlIHF1aXpUZW1wbGF0ZS50eXBlOlxyXG5cdFx0XHRyZXR1cm4gPFF1aXogey4uLnByb3BzfS8+XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgaDFUZW1wbGF0ZS50eXBlOlxyXG5cdFx0XHRyZXR1cm4gPEgxIHsuLi5wcm9wc30vPlxyXG5cdFx0XHRicmVhaztcclxuXHJcblxyXG5cdFx0Y2FzZSBwVGVtcGxhdGUudHlwZTpcclxuXHRcdFx0cmV0dXJuIDxQIHsuLi5wcm9wc30vPlxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIG1hcmtkb3duVGVtcGxhdGUudHlwZTpcclxuXHRcdFx0cmV0dXJuIDxNYXJrZG93biB7Li4ucHJvcHN9Lz5cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aW1lbGluZVRlbXBsYXRlLnR5cGU6XHJcblx0XHRcdHJldHVybiA8VGltZWxpbmUgey4uLnByb3BzfS8+XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiA8ZGl2Lz5cclxuXHR9XHJcblx0cmV0dXJuIGJsb2Nrc1twcm9wcy50eXBlXSBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmVUeXBlcyA9IFsgbWFya2Rvd25UZW1wbGF0ZS50eXBlLCBoMVRlbXBsYXRlLnR5cGUsXCJoMlwiLHBUZW1wbGF0ZS50eXBlLFwiYmxvY2txdW90ZVwiLHF1aXpUZW1wbGF0ZS50eXBlXVxyXG5cclxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlcyA9IHtcclxuXHRxdWl6OiB7IC4uLnF1aXpUZW1wbGF0ZSwgbGVzc29uOjF9LFxyXG5cdGgxOiB7IC4uLmgxVGVtcGxhdGUsIGxlc3NvbjoxfSxcclxuXHRwOiB7IC4uLnBUZW1wbGF0ZSwgbGVzc29uOjF9LFxyXG5cdG1kOiB7IC4uLm1hcmtkb3duVGVtcGxhdGUsIGxlc3NvbjoxfSxcclxuXHR0aW1lbGluZTogeyAuLi50aW1lbGluZVRlbXBsYXRlLCBsZXNzb246MX1cclxufSIsImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duL3dpdGgtaHRtbCdcclxuXHJcbmZ1bmN0aW9uIE1hcmtkb3duKHByb3BzKXtcclxuXHJcblx0Y29uc3QgeyBkYXRhLCB1cGRhdGUsIGluZGV4LCByZWFkIH0gPSBwcm9wc1xyXG5cclxuXHJcblxyXG5cdGlmKHJlYWQpe1xyXG5cdFx0cmV0dXJuIDxSZWFjdE1hcmtkb3duIGFsbG93RGFuZ2Vyb3VzSHRtbD57ZGF0YS52YWx1ZX08L1JlYWN0TWFya2Rvd24+XHJcblx0fWVsc2V7XHJcblx0cmV0dXJuICg8dGV4dGFyZWEgc3R5bGU9e3toZWlnaHQ6XCIxMDAlXCJ9fSB0eXBlPVwidGV4dFwiIHZhbHVlPXtkYXRhLnZhbHVlfSBvbkNoYW5nZT17KGUpPT57XHJcblx0XHRsZXQgbCA9IHsuLi5kYXRhfVxyXG5cdFx0bC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcblx0XHR1cGRhdGUoaW5kZXgsIGwpXHJcblx0fX0+PC90ZXh0YXJlYT4pXHJcbn1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBtYXJrZG93blRlbXBsYXRlID0geyB0eXBlOlwibWRcIiwgdmFsdWU6XCJcIiB9XHJcbmV4cG9ydCBkZWZhdWx0IE1hcmtkb3duOyIsImZ1bmN0aW9uIFAocHJvcHMpe1xyXG5cclxuXHRjb25zdCB7IGRhdGEsIHVwZGF0ZSwgaW5kZXgsIHJlYWQgfSA9IHByb3BzXHJcblxyXG5cdGlmKHJlYWQpe1xyXG5cdFx0cmV0dXJuIDxwPntkYXRhLnZhbHVlfTwvcD5cclxuXHR9ZWxzZXtcclxuXHRyZXR1cm4gKDw+PHNwYW4+cDwvc3Bhbj48cD48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17ZGF0YS52YWx1ZX0gb25DaGFuZ2U9eyhlKT0+e1xyXG5cdFx0bGV0IGwgPSB7Li4uZGF0YX1cclxuXHRcdGwudmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG5cdFx0dXBkYXRlKGluZGV4LCBsKVxyXG5cdH19Lz48L3A+PC8+KVxyXG59XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcFRlbXBsYXRlID0geyB0eXBlOlwicFwiLCB2YWx1ZTpcIlwiIH1cclxuZXhwb3J0IGRlZmF1bHQgUDsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vLi4vc3R5bGVzL1JldmVsYXRpb24ubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIFF1aXoocHJvcHMpe1xyXG5cclxuXHRjb25zdCB7IGRhdGEsIHVwZGF0ZSwgaW5kZXgsIHJlYWQgfSA9IHByb3BzXHJcblxyXG5cdGlmKHJlYWQpe1xyXG5cdFx0cmV0dXJuICg8b2w+IHtwcm9wcy5kYXRhLnF1ZXN0aW9ucy5tYXAoZnVuY3Rpb24ocSxpKXtcclxuXHJcblx0XHRcdDxsaT5RVUVTVElPTiBUWVBFUzogQnV6emVyIFF1ZXN0aW9uIDwvbGk+XHJcblxyXG5cdCAgICBcdGNvbnN0IGtleXMgPSBxPyBPYmplY3Qua2V5cyhxKTpbXVxyXG5cdCAgICBcdHJldHVybiA8bGkga2V5PXtpfT5cclxuXHJcblx0ICAgIFx0XHR7a2V5cy5tYXAoZnVuY3Rpb24oayl7XHJcblx0ICAgIFx0XHRcdGlmKGsgPT09IFwiYW5zd2Vyc1wiKXtcclxuXHQgICAgXHRcdFx0XHRyZXR1cm4gcVtrXS5tYXAoZnVuY3Rpb24oYW5zLGluZGV4KXtcclxuXHQgICAgXHRcdFx0XHRcdGxldCBjb2xvciA9IFwiZ3JlZW5cIlxyXG5cclxuXHQgICAgXHRcdFx0XHRcdGlmKGFucy5wb2ludHMgPT09IFwiMFwiIHx8IGFucy5wb2ludHMgPT09IDApe1xyXG5cdCAgICBcdFx0XHRcdFx0XHRjb2xvciA9IFwicmVkXCJcclxuXHQgICAgXHRcdFx0XHRcdH1cclxuXHQgICAgXHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17aW5kZXh9PjxwIHN0eWxlPXt7Y29sb3I6Y29sb3J9fT48c3Bhbj57YW5zLnRleHR9PC9zcGFuPjxzcGFuPiA6IHthbnMucG9pbnRzfTwvc3Bhbj48L3A+PC9kaXY+XHJcblx0ICAgIFx0XHRcdFx0fSlcclxuXHQgICAgXHRcdFx0fWVsc2V7XHJcblx0ICAgIFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXtrfT48cCBjbGFzc05hbWU9e1wicXVlc3Rpb25zIFwiICsgc3R5bGVzW2tdfSB0eXBlPVwidGV4dFwiPjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uTGFiZWx9PntrfTogPC9zcGFuPntxW2tdfTwvcD48L2Rpdj5cclxuXHQgICAgXHRcdFx0fVxyXG5cdCAgICBcdFx0XHRcclxuXHQgICAgXHRcdH0pfVxyXG5cclxuXHRcdFx0ICAgICAgPGhyLz5cclxuXHQgICAgXHRcdDwvbGk+XHJcblx0ICAgIH0pfVxyXG5cdCAgICA8L29sPlxyXG4pXHJcblx0fWVsc2V7XHJcblx0cmV0dXJuICg8PjxoMj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17cHJvcHMuZGF0YS50aXRsZX0gb25DaGFuZ2U9eyhlKT0+e1xyXG5cdFx0bGV0IGwgPSB7Li4ucHJvcHMuZGF0YX1cclxuXHRcdGwudGl0bGUgPSBlLnRhcmdldC52YWx1ZVxyXG5cdFx0dXBkYXRlKGluZGV4LCBsKVxyXG5cdH19Lz48L2gyPjxvbD5cclxuXHQgICAge3Byb3BzLmRhdGEucXVlc3Rpb25zLm1hcChmdW5jdGlvbihxLGkpe1xyXG5cclxuXHQgICAgXHRjb25zdCBrZXlzID0gcT8gT2JqZWN0LmtleXMocSk6W11cclxuXHQgICAgXHRyZXR1cm4gPGxpIGtleT17aX0+XHJcblxyXG5cdCAgICBcdFx0ICAgIFx0PGJ1dHRvbiBzdHlsZT17e2NvbG9yOlwicmVkXCIsIG1hcmdpbkxlZnQ6XCIxNXB4XCJ9fSBvbkNsaWNrPXsoZSk9PntcclxuXHRcdFx0ICAgIFx0XHRcdGxldCBuZXdEYXRhID0gey4uLnByb3BzLmRhdGF9XHJcblx0XHRcdCAgICBcdFx0XHRkZWxldGUgbmV3RGF0YS5xdWVzdGlvbnNbaV1cclxuXHRcdFx0ICAgIFx0XHRcdHVwZGF0ZShpbmRleCxuZXdEYXRhKVxyXG5cdFx0XHQgICAgXHRcdH19Png8L2J1dHRvbj5cclxuXHJcblx0ICAgIFx0XHR7a2V5cy5tYXAoZnVuY3Rpb24oayl7XHJcblx0ICAgIFx0XHRcdGlmKGsgPT09IFwiYW5zd2Vyc1wiKXtcclxuXHQgICAgXHRcdFx0XHRyZXR1cm4gKHByb3BzLmRhdGEucXVlc3Rpb25zW2ldW2tdLm1hcChmdW5jdGlvbihxLGFuc3dlcmlkKXtcclxuXHQgICAgXHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17YW5zd2VyaWR9Pjx0ZXh0YXJlYSBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e1xyXG5cdFx0XHRcdFx0XHQgICAgXHRcdChlKT0+e1xyXG5cdFx0XHRcdFx0XHQgICAgXHRcdFx0bGV0IG5ld0RhdGEgPSB7Li4ucHJvcHMuZGF0YX1cclxuXHRcdFx0XHRcdFx0ICAgIFx0XHRcdG5ld0RhdGEucXVlc3Rpb25zW2ldW2tdW2Fuc3dlcmlkXS50ZXh0ID0gZS50YXJnZXQudmFsdWVcclxuXHRcdFx0XHRcdFx0ICAgIFx0XHRcdHVwZGF0ZShpbmRleCxuZXdEYXRhKVxyXG5cdFx0XHRcdFx0XHQgICAgXHRcdH19IHZhbHVlPXtwcm9wcy5kYXRhLnF1ZXN0aW9uc1tpXVtrXVthbnN3ZXJpZF0udGV4dH0+PC90ZXh0YXJlYT48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbkxhYmVsfT5URVhUPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQgICAgXHRcdDx0ZXh0YXJlYSBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e1xyXG5cdFx0XHRcdFx0XHQgICAgXHRcdChlKT0+e1xyXG5cdFx0XHRcdFx0XHQgICAgXHRcdFx0bGV0IG5ld0RhdGEgPSB7Li4ucHJvcHMuZGF0YX1cclxuXHRcdFx0XHRcdFx0ICAgIFx0XHRcdG5ld0RhdGEucXVlc3Rpb25zW2ldW2tdW2Fuc3dlcmlkXS5wb2ludHMgPSBlLnRhcmdldC52YWx1ZVxyXG5cdFx0XHRcdFx0XHQgICAgXHRcdFx0dXBkYXRlKGluZGV4LG5ld0RhdGEpXHJcblx0XHRcdFx0XHRcdCAgICBcdFx0fX0gdmFsdWU9e3Byb3BzLmRhdGEucXVlc3Rpb25zW2ldW2tdW2Fuc3dlcmlkXS5wb2ludHN9PjwvdGV4dGFyZWE+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25MYWJlbH0+UE9JTlRTPC9zcGFuPlxyXG5cdFx0XHRcdCAgICBcdFx0PC9kaXY+XHJcblx0ICAgIFx0XHRcdFx0fSkpIFxyXG5cclxuXHQgICAgXHRcdFx0fWVsc2V7XHJcblxyXG5cdCAgICBcdFx0XHRyZXR1cm4gPGRpdiBrZXk9e2t9Pjx0ZXh0YXJlYSBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbnMgK1wiIFwiICsgc3R5bGVzW2tdfSB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtcclxuXHRcdFx0ICAgIFx0XHQoZSk9PntcclxuXHRcdFx0ICAgIFx0XHRcdGxldCBuZXdEYXRhID0gey4uLnByb3BzLmRhdGF9XHJcblx0XHRcdCAgICBcdFx0XHRuZXdEYXRhLnF1ZXN0aW9uc1tpXVtrXSA9IGUudGFyZ2V0LnZhbHVlXHJcblx0XHRcdCAgICBcdFx0XHR1cGRhdGUoaW5kZXgsbmV3RGF0YSlcclxuXHRcdFx0ICAgIFx0XHR9fSB2YWx1ZT17cVtrXX0+PC90ZXh0YXJlYT48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbkxhYmVsfT57a308L3NwYW4+XHJcblxyXG5cdFx0XHQgICAgXHRcdDxidXR0b24gc3R5bGU9e3tjb2xvcjpcInJlZFwiLCBtYXJnaW5MZWZ0OlwiMTVweFwifX0gb25DbGljaz17KGUpPT57XHJcblx0XHRcdCAgICBcdFx0XHRsZXQgbmV3RGF0YSA9IHsuLi5wcm9wcy5kYXRhfVxyXG5cdFx0XHQgICAgXHRcdFx0bmV3RGF0YS5xdWVzdGlvbnMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHQgICAgXHRcdFx0dXBkYXRlKGluZGV4LG5ld0RhdGEpXHJcblx0XHRcdCAgICBcdFx0fX0+eDwvYnV0dG9uPlxyXG5cdCAgICBcdFx0PC9kaXY+XHJcblx0ICAgIFx0XHRcdH1cclxuXHQgICAgXHRcdH0pfVxyXG5cclxuXHQgICAgXHRcdCAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PntcclxuXHRcdFx0ICAgICAgXHQgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0ICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuaW5kZXgudmFsdWVcclxuXHRcdFx0XHRcdCAgICBjb25zdCBwcm9wID0gZS50YXJnZXQucHJvcC52YWx1ZVxyXG5cdFx0XHRcdFx0ICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbC52YWx1ZVxyXG5cclxuXHRcdFx0XHRcdCAgICBsZXQgbmV3RGF0YSA9IHsuLi5wcm9wcy5kYXRhfVxyXG5cdFx0XHRcdFx0ICAgIG5ld0RhdGEucXVlc3Rpb25zW2luZGV4XVtwcm9wXSA9IHZhbFxyXG5cdFx0XHRcdFx0ICAgIHVwZGF0ZShpbmRleCxuZXdEYXRhKVxyXG5cclxuXHQgICAgXHRcdCAgIH19PlxyXG5cdCAgICBcdFx0ICAgXHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpbmRleFwiIHZhbHVlPXtpfSAvPlxyXG5cdFx0XHQgICAgICAgIDxsYWJlbD5cclxuXHRcdFx0ICAgICAgICAgIEtleTpcclxuXHRcdFx0ICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcm9wXCIgLz5cclxuXHRcdFx0ICAgICAgICA8L2xhYmVsPlxyXG5cdFx0XHQgIFx0XHQ8bGFiZWw+XHJcblx0XHRcdCAgICAgICAgICBWYWx1ZTpcclxuXHRcdFx0ICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ2YWxcIi8+XHJcblx0XHRcdCAgICAgICAgPC9sYWJlbD5cclxuXHRcdFx0ICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiK1wiIC8+XHJcblx0XHRcdCAgICAgIDwvZm9ybT5cclxuXHJcblx0XHRcdCAgICAgIDxoci8+XHJcblx0ICAgIFx0XHQ8L2xpPlxyXG5cdCAgICB9KX1cclxuXHQgICAgPC9vbD5cclxuXHJcblx0ICAgIFx0PGJ1dHRvbiBvbkNsaWNrPXtmdW5jdGlvbihlKXtcclxuXHQgICAgXHRcdGxldCBuZXdEYXRhID0gey4uLnByb3BzLmRhdGF9XHJcblx0XHRcdCAgICBuZXdEYXRhLnF1ZXN0aW9ucy5wdXNoKHF1aXpUZW1wbGF0ZS5xdWVzdGlvbnNbMF0pXHJcblx0XHRcdCAgICB1cGRhdGUoaW5kZXgsbmV3RGF0YSlcclxuXHQgICAgXHR9fT5hZGQgbmV3IHF1ZXN0aW9uPC9idXR0b24+XHJcblx0ICAgIFx0PC8+KVxyXG5cdCAgICB9XHJcblx0ICAgIFxyXG5cdCAgICB9XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHF1aXpUZW1wbGF0ZSA9IHsgdHlwZTpcInF1aXpcIiwgdGl0bGU6XCJUSVRMRVwiLCBxdWVzdGlvbnM6W3tcclxuICAgICAgICBcInFcIjogXCJcIixcclxuICAgICAgICBcInJlZlwiOiBcIlwiLFxyXG4gICAgICAgIFwidHlwZVwiOiBcIkFMTF9BTlNXRVJcIixcclxuICAgICAgICBcImFuc3dlcnNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInRleHRcIjogXCJcIixcclxuICAgICAgICAgICAgXCJwb2ludHNcIjogXCIwXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcInBvaW50c1wiOiAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInRleHRcIjogXCJcIixcclxuICAgICAgICAgICAgXCJwb2ludHNcIjogMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwicG9pbnRzXCI6IDUwMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICB9XSB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWl6OyIsImZ1bmN0aW9uIFRpbWVsaW5lKHByb3BzKXtcclxuXHJcblx0Y29uc3QgeyBkYXRhLCB1cGRhdGUsIGluZGV4LCByZWFkIH0gPSBwcm9wc1xyXG5cclxuXHRjb25zdCBzdHlsZSA9IHtcclxuXHJcbi8qLmZsZXgtcGFyZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnB1dC1mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQzNFNTA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uaW5wdXQ6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW5wdXQ6OmJlZm9yZSwgLmlucHV0OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQzNFNTA7XHJcbiAgd2lkdGg6IDR2dztcclxuICBoZWlnaHQ6IDVweDtcclxuICBtYXgtd2lkdGg6IDUwcHg7XHJcbn1cclxuLmlucHV0OjpiZWZvcmUge1xyXG4gIGxlZnQ6IGNhbGMoLTR2dyArIDEyLjVweCk7XHJcbn1cclxuLmlucHV0OjphZnRlciB7XHJcbiAgcmlnaHQ6IGNhbGMoLTR2dyArIDEyLjVweCk7XHJcbn1cclxuLmlucHV0LmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDM0U1MDtcclxufVxyXG4uaW5wdXQuYWN0aXZlOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQzNFNTA7XHJcbn1cclxuLmlucHV0LmFjdGl2ZTo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBRUI2QkY7XHJcbn1cclxuLmlucHV0LmFjdGl2ZSBzcGFuIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5pbnB1dC5hY3RpdmUgc3Bhbjo6YmVmb3JlIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmlucHV0LmFjdGl2ZSBzcGFuOjphZnRlciB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5pbnB1dC5hY3RpdmUgfiAuaW5wdXQsIC5pbnB1dC5hY3RpdmUgfiAuaW5wdXQ6OmJlZm9yZSwgLmlucHV0LmFjdGl2ZSB+IC5pbnB1dDo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBRUI2QkY7XHJcbn1cclxuLmlucHV0IHNwYW4ge1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmlucHV0IHNwYW46OmJlZm9yZSwgLmlucHV0IHNwYW46OmFmdGVyIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuLmlucHV0IHNwYW46OmFmdGVyIHtcclxuICBjb250ZW50OiBhdHRyKGRhdGEteWVhcik7XHJcbiAgdG9wOiAyNXB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmlucHV0IHNwYW46OmJlZm9yZSB7XHJcbiAgY29udGVudDogYXR0cihkYXRhLWluZm8pO1xyXG4gIHRvcDogLTY1cHg7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpIHJvdGF0ZVooLTQ1ZGVnKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1pbmRlbnQ6IC0xMHB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tZmxleC1jb250YWluZXIge1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG59XHJcbi5kZXNjcmlwdGlvbi1mbGV4LWNvbnRhaW5lciBwIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmRlc2NyaXB0aW9uLWZsZXgtY29udGFpbmVyIHAuYWN0aXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyNTBweCkge1xyXG4gIC5pbnB1dDo6YmVmb3JlIHtcclxuICAgIGxlZnQ6IC0zNy41cHg7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQ6OmFmdGVyIHtcclxuICAgIHJpZ2h0OiAtMzcuNXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAuaW5wdXQge1xyXG4gICAgd2lkdGg6IDE3cHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgfVxyXG4gIC5pbnB1dDo6YmVmb3JlLCAuaW5wdXQ6OmFmdGVyIHtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gIH1cclxuICAuaW5wdXQ6OmJlZm9yZSB7XHJcbiAgICBsZWZ0OiBjYWxjKC00dncgKyA4LjVweCk7XHJcbiAgfVxyXG4gIC5pbnB1dDo6YWZ0ZXIge1xyXG4gICAgcmlnaHQ6IGNhbGMoLTR2dyArIDguNXB4KTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmZsZXgtcGFyZW50IHtcclxuICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTV2aDtcclxuICB9XHJcblxyXG4gIC5pbnB1dCB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbjogMCAxMHB4IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUVCNkJGO1xyXG4gIH1cclxuICAuaW5wdXQ6OmJlZm9yZSwgLmlucHV0OjphZnRlciB7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxuICAuaW5wdXQgc3BhbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuaW5wdXQgc3Bhbjo6YmVmb3JlIHtcclxuICAgIHRvcDogY2FsYygxMDAlICsgNXB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHRleHQtaW5kZW50OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuaW5wdXQgc3Bhbjo6YWZ0ZXIge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGNvbG9yOiAjRUNGMEYxO1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uLWZsZXgtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIGJvZHkge1xyXG4gICAgbWluLWhlaWdodDogOTUwcHg7XHJcbiAgfVxyXG59Ki99XHJcblxyXG5cdGlmKHJlYWQpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj57c3R5bGV9XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4LXBhcmVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWZsZXgtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGRhdGEteWVhcj1cIjE5MTBcIiBkYXRhLWluZm89XCJoZWFkc2V0XCI+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBkYXRhLXllYXI9XCIxOTIwXCIgZGF0YS1pbmZvPVwianVuZ2xlIGd5bVwiPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQgYWN0aXZlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGRhdGEteWVhcj1cIjE5MzBcIiBkYXRhLWluZm89XCJjaG9jb2xhdGUgY2hpcCBjb29raWVcIj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGRhdGEteWVhcj1cIjE5NDBcIiBkYXRhLWluZm89XCJKZWVwXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBkYXRhLXllYXI9XCIxOTUwXCIgZGF0YS1pbmZvPVwibGVhZiBibG93ZXJcIj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGRhdGEteWVhcj1cIjE5NjBcIiBkYXRhLWluZm89XCJtYWduZXRpYyBzdHJpcGUgY2FyZFwiPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgICAgICAgICAgPHNwYW4gZGF0YS15ZWFyPVwiMTk3MFwiIGRhdGEtaW5mbz1cIndpcmVsZXNzIExBTlwiPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgICAgICAgICAgPHNwYW4gZGF0YS15ZWFyPVwiMTk4MFwiIGRhdGEtaW5mbz1cImZsYXNoIG1lbW9yeVwiPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgICAgICAgICAgPHNwYW4gZGF0YS15ZWFyPVwiMTk5MFwiIGRhdGEtaW5mbz1cIldvcmxkIFdpZGUgV2ViXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBkYXRhLXllYXI9XCIyMDAwXCIgZGF0YS1pbmZvPVwiR29vZ2xlIEFkV29yZHNcIj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbi1mbGV4LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxwPkFuZCBmdXR1cmUgQ2FsbCBvZiBEdXR5IHBsYXllcnMgd291bGQgdGhhbmsgdGhlbS48L3A+XHJcbiAgICAgICAgPHA+QmVjYXVzZSBldmVyeSBraWQgc2hvdWxkIGdldCB0byBiZSBUYXJ6YW4gZm9yIGEgZGF5LjwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImFjdGl2ZVwiPkFuZCB0aGUgd29ybGQgcmVqb2ljZWQuPC9wPlxyXG4gICAgICAgIDxwPkJlY2F1c2UgYnVpbGRpbmcgcm9hZHMgaXMgaW5jb252ZW5pZW50LjwvcD5cclxuICAgICAgICA8cD5BaW7igJl0IG5vYm9keSBnb3QgdGltZSB0byByYWtlLjwvcD5cclxuICAgICAgICA8cD5CZWNhdXNlIHBhcGVyIGN1cnJlbmN5IGlzIGZvciBub29icy48L3A+XHJcbiAgICAgICAgPHA+Tm9ib2R5IGxpa2VzIGNvcmRzLiBOb2JvZHkuPC9wPlxyXG4gICAgICAgIDxwPkJyaWdodGVyIHRoYW4gZ2xvdyBtZW1vcnkuPC9wPlxyXG4gICAgICAgIDxwPlRvIGNhcGl0YWxpemUgb24gYW4gYXMteWV0IG5hc2NlbnQgbWFya2V0IGZvciBjYXQgcGhvdG9zLjwvcD5cclxuICAgICAgICA8cD5CZWNhdXNlIG9yZ2FuaWMgc2VhcmNoIHJhbmtpbmdzIHRha2Ugd29yay48L3A+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogNDBweDsgcmlnaHQ6IDEwcHg7IGZvbnQtc2l6ZTogMTJweFwiPlxyXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9jamw3NTAvcGVuL1hNeVJvQlwiIHRhcmdldD1cIl9ibGFua1wiPm9yaWdpbmFsIHZlcnNpb24gd2l0aCBzbGlua3kgbW9iaWxlIG1lbnU8L2E+PC9kaXY+XHJcbjxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMTVweDsgcmlnaHQ6IDEwcHg7IGZvbnQtc2l6ZTogMTJweFwiPlxyXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9jamw3NTAvcGVuL3dkVnh6VlwiIHRhcmdldD1cIl9ibGFua1wiPmFsdGVybmF0ZSB2ZXJzaW9uIHdpdGggY3VzdG9tIHJhbmdlIGlucHV0PC9hPjwvZGl2PlxyXG48ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDE1cHg7IGxlZnQ6IDEwcHg7IGZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IGJvbGRcIj5cclxuICAgIDxhIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vY2psNzUwL3Blbi9NWHZZbWdcIiB0YXJnZXQ9XCJfYmxhbmtcIj52ZXJzaW9uIDQ6IHB1cmUgQ1NTITwvYT48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcbilcclxuXHR9ZWxzZXtcclxuXHRyZXR1cm4gKDw+PGgyPjxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtwcm9wcy5kYXRhLnRpdGxlfSBvbkNoYW5nZT17KGUpPT57XHJcblx0XHRsZXQgbCA9IHsuLi5wcm9wcy5kYXRhfVxyXG5cdFx0bC50aXRsZSA9IGUudGFyZ2V0LnZhbHVlXHJcblx0XHR1cGRhdGUoaW5kZXgsIGwpXHJcblx0fX0vPjwvaDI+PG9sPlxyXG5cdCAgICB7cHJvcHMuZGF0YS5xdWVzdGlvbnMubWFwKGZ1bmN0aW9uKHEsaSl7XHJcblxyXG5cdCAgICBcdGNvbnN0IGtleXMgPSBxPyBPYmplY3Qua2V5cyhxKTpbXVxyXG5cdCAgICBcdHJldHVybiA8bGkga2V5PXtpfT5cclxuXHJcblx0ICAgIFx0XHQgICAgXHQ8YnV0dG9uIHN0eWxlPXt7Y29sb3I6XCJyZWRcIiwgbWFyZ2luTGVmdDpcIjE1cHhcIn19IG9uQ2xpY2s9eyhlKT0+e1xyXG5cdFx0XHQgICAgXHRcdFx0bGV0IG5ld0RhdGEgPSB7Li4ucHJvcHMuZGF0YX1cclxuXHRcdFx0ICAgIFx0XHRcdGRlbGV0ZSBuZXdEYXRhLnF1ZXN0aW9uc1tpXVxyXG5cdFx0XHQgICAgXHRcdFx0dXBkYXRlKGluZGV4LG5ld0RhdGEpXHJcblx0XHRcdCAgICBcdFx0fX0+eDwvYnV0dG9uPlxyXG5cclxuXHQgICAgXHRcdHtrZXlzLm1hcChmdW5jdGlvbihrKXtcclxuXHQgICAgXHRcdFx0aWYoayA9PT0gXCJhbnN3ZXJzXCIpe1xyXG5cdCAgICBcdFx0XHRcdHJldHVybiAocHJvcHMuZGF0YS5xdWVzdGlvbnNbaV1ba10ubWFwKGZ1bmN0aW9uKHEsYW5zd2VyaWQpe1xyXG5cdCAgICBcdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXthbnN3ZXJpZH0+PHRleHRhcmVhIGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0gdHlwZT1cInRleHRcIiBvbkNoYW5nZT17XHJcblx0XHRcdFx0XHRcdCAgICBcdFx0KGUpPT57XHJcblx0XHRcdFx0XHRcdCAgICBcdFx0XHRsZXQgbmV3RGF0YSA9IHsuLi5wcm9wcy5kYXRhfVxyXG5cdFx0XHRcdFx0XHQgICAgXHRcdFx0bmV3RGF0YS5xdWVzdGlvbnNbaV1ba11bYW5zd2VyaWRdLnRleHQgPSBlLnRhcmdldC52YWx1ZVxyXG5cdFx0XHRcdFx0XHQgICAgXHRcdFx0dXBkYXRlKGluZGV4LG5ld0RhdGEpXHJcblx0XHRcdFx0XHRcdCAgICBcdFx0fX0gdmFsdWU9e3Byb3BzLmRhdGEucXVlc3Rpb25zW2ldW2tdW2Fuc3dlcmlkXS50ZXh0fT48L3RleHRhcmVhPjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uTGFiZWx9PlRFWFQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdCAgICBcdFx0PHRleHRhcmVhIGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0gdHlwZT1cInRleHRcIiBvbkNoYW5nZT17XHJcblx0XHRcdFx0XHRcdCAgICBcdFx0KGUpPT57XHJcblx0XHRcdFx0XHRcdCAgICBcdFx0XHRsZXQgbmV3RGF0YSA9IHsuLi5wcm9wcy5kYXRhfVxyXG5cdFx0XHRcdFx0XHQgICAgXHRcdFx0bmV3RGF0YS5xdWVzdGlvbnNbaV1ba11bYW5zd2VyaWRdLnBvaW50cyA9IGUudGFyZ2V0LnZhbHVlXHJcblx0XHRcdFx0XHRcdCAgICBcdFx0XHR1cGRhdGUoaW5kZXgsbmV3RGF0YSlcclxuXHRcdFx0XHRcdFx0ICAgIFx0XHR9fSB2YWx1ZT17cHJvcHMuZGF0YS5xdWVzdGlvbnNbaV1ba11bYW5zd2VyaWRdLnBvaW50c30+PC90ZXh0YXJlYT48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbkxhYmVsfT5QT0lOVFM8L3NwYW4+XHJcblx0XHRcdFx0ICAgIFx0XHQ8L2Rpdj5cclxuXHQgICAgXHRcdFx0XHR9KSkgXHJcblxyXG5cdCAgICBcdFx0XHR9ZWxzZXtcclxuXHJcblx0ICAgIFx0XHRcdHJldHVybiA8ZGl2IGtleT17a30+PHRleHRhcmVhIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9ucyArXCIgXCIgKyBzdHlsZXNba119IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e1xyXG5cdFx0XHQgICAgXHRcdChlKT0+e1xyXG5cdFx0XHQgICAgXHRcdFx0bGV0IG5ld0RhdGEgPSB7Li4ucHJvcHMuZGF0YX1cclxuXHRcdFx0ICAgIFx0XHRcdG5ld0RhdGEucXVlc3Rpb25zW2ldW2tdID0gZS50YXJnZXQudmFsdWVcclxuXHRcdFx0ICAgIFx0XHRcdHVwZGF0ZShpbmRleCxuZXdEYXRhKVxyXG5cdFx0XHQgICAgXHRcdH19IHZhbHVlPXtxW2tdfT48L3RleHRhcmVhPjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uTGFiZWx9PntrfTwvc3Bhbj5cclxuXHJcblx0XHRcdCAgICBcdFx0PGJ1dHRvbiBzdHlsZT17e2NvbG9yOlwicmVkXCIsIG1hcmdpbkxlZnQ6XCIxNXB4XCJ9fSBvbkNsaWNrPXsoZSk9PntcclxuXHRcdFx0ICAgIFx0XHRcdGxldCBuZXdEYXRhID0gey4uLnByb3BzLmRhdGF9XHJcblx0XHRcdCAgICBcdFx0XHRuZXdEYXRhLnF1ZXN0aW9ucy5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdCAgICBcdFx0XHR1cGRhdGUoaW5kZXgsbmV3RGF0YSlcclxuXHRcdFx0ICAgIFx0XHR9fT54PC9idXR0b24+XHJcblx0ICAgIFx0XHQ8L2Rpdj5cclxuXHQgICAgXHRcdFx0fVxyXG5cdCAgICBcdFx0fSl9XHJcblxyXG5cdCAgICBcdFx0ICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+e1xyXG5cdFx0XHQgICAgICBcdCAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHQgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5pbmRleC52YWx1ZVxyXG5cdFx0XHRcdFx0ICAgIGNvbnN0IHByb3AgPSBlLnRhcmdldC5wcm9wLnZhbHVlXHJcblx0XHRcdFx0XHQgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsLnZhbHVlXHJcblxyXG5cdFx0XHRcdFx0ICAgIGxldCBuZXdEYXRhID0gey4uLnByb3BzLmRhdGF9XHJcblx0XHRcdFx0XHQgICAgbmV3RGF0YS5xdWVzdGlvbnNbaW5kZXhdW3Byb3BdID0gdmFsXHJcblx0XHRcdFx0XHQgICAgdXBkYXRlKGluZGV4LG5ld0RhdGEpXHJcblxyXG5cdCAgICBcdFx0ICAgfX0+XHJcblx0ICAgIFx0XHQgICBcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImluZGV4XCIgdmFsdWU9e2l9IC8+XHJcblx0XHRcdCAgICAgICAgPGxhYmVsPlxyXG5cdFx0XHQgICAgICAgICAgS2V5OlxyXG5cdFx0XHQgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb3BcIiAvPlxyXG5cdFx0XHQgICAgICAgIDwvbGFiZWw+XHJcblx0XHRcdCAgXHRcdDxsYWJlbD5cclxuXHRcdFx0ICAgICAgICAgIFZhbHVlOlxyXG5cdFx0XHQgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInZhbFwiLz5cclxuXHRcdFx0ICAgICAgICA8L2xhYmVsPlxyXG5cdFx0XHQgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCIrXCIgLz5cclxuXHRcdFx0ICAgICAgPC9mb3JtPlxyXG5cclxuXHRcdFx0ICAgICAgPGhyLz5cclxuXHQgICAgXHRcdDwvbGk+XHJcblx0ICAgIH0pfVxyXG5cdCAgICA8L29sPlxyXG5cclxuXHQgICAgXHQ8YnV0dG9uIG9uQ2xpY2s9e2Z1bmN0aW9uKGUpe1xyXG5cdCAgICBcdFx0bGV0IG5ld0RhdGEgPSB7Li4ucHJvcHMuZGF0YX1cclxuXHRcdFx0ICAgIG5ld0RhdGEucXVlc3Rpb25zLnB1c2gocXVpelRlbXBsYXRlLnF1ZXN0aW9uc1swXSlcclxuXHRcdFx0ICAgIHVwZGF0ZShpbmRleCxuZXdEYXRhKVxyXG5cdCAgICBcdH19PmFkZCBuZXcgcXVlc3Rpb248L2J1dHRvbj5cclxuXHQgICAgXHQ8Lz4pXHJcblx0ICAgIH1cclxuXHQgICAgXHJcblx0ICAgIH1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgdGltZWxpbmVUZW1wbGF0ZSA9IHsgdHlwZTpcInRpbWVsaW5lXCIsIHRpdGxlOlwiTkVXIFRJTUVMSU5FXCIsIGVudHJpZXM6W3tcclxuICAgICAgICBcImRhdGVcIjogXCJkYXRlXCIsXHJcbiAgICAgICAgXCJib2R5XCI6IFwiYm9keVwiXHJcbiAgICAgIH1dIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lOyIsImZ1bmN0aW9uIFNlbGVjdExlc3NvbkZvcm0oe2xlc3NvbiwgaGFuZGxlU2VsZWN0TGVzc29ufSl7XHJcbiAgcmV0dXJuICg8ZGl2IHN0eWxlPXt7IG1hcmdpbjpcIjE1cHhcIiwgd2lkdGg6XCIxMDAlXCIsIHRleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgPGZvcm0gc3R5bGU9e3sgYmFja2dyb3VuZDpcIm5vbmVcIn19IG9uU3VibWl0PXtoYW5kbGVTZWxlY3RMZXNzb259PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImlkXCIgdmFsdWU9e2xlc3Nvbi5pZH0vPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e2JhY2tncm91bmQ6XCJub25lXCJ9fSB0eXBlPVwic3VibWl0XCIgdmFsdWU9e1wiTGVzc29uIFwiICsgbGVzc29uLmlkICsgXCIgKFwiK2xlc3Nvbi5jb3VudCtcIilcIn0gLz5cclxuICAgICAgICAgICAgPC9mb3JtPjwvZGl2PilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0TGVzc29uRm9ybSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJvd1wiOiBcIkVkaXRvcl9yb3dfX3dTbEZmXCIsXG5cdFwiY29sdW1uXCI6IFwiRWRpdG9yX2NvbHVtbl9fbm9TRW5cIixcblx0XCJzbWFsbENvbHVtblwiOiBcIkVkaXRvcl9zbWFsbENvbHVtbl9fM1dJYi1cIixcblx0XCJyYXdcIjogXCJFZGl0b3JfcmF3X18yNV9hSFwiXG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9SZXZlbGF0aW9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBlU3R5bGVzIGZyb20gJy4vRWRpdG9yLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBTZWxlY3RMZXNzb25Gb3JtIGZyb20gJy4uL0NvbW1vbi9TZWxlY3RMZXNzb25Gb3JtJ1xyXG5pbXBvcnQgTGluZSwge2xpbmVUeXBlcywgdGVtcGxhdGVzfSBmcm9tICcuLi9CbG9ja3MvTGluZSdcclxuXHJcbmZ1bmN0aW9uIE5ld0xpbmVGb3JtKHtpbmRleCwgaGFuZGxlTmV3TGluZX0pe1xyXG4gIHJldHVybiAoPGRpdiBzdHlsZT17e2hlaWdodDpcIjI1cHhcIiwgYmFja2dyb3VuZENvbG9yOlwiI2RjZGNkY1wiLCBjb2xvcjpcIiNkY2RjZGNcIiwgbWFyZ2luOlwiMTVweFwiLCB3aWR0aDpcIjEwMCVcIiwgdGV4dEFsaWduOlwiY2VudGVyXCJ9fT48Zm9ybSBzdHlsZT17eyBiYWNrZ3JvdW5kOlwibm9uZVwifX0gb25TdWJtaXQ9e2hhbmRsZU5ld0xpbmV9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImluZGV4XCIgdmFsdWU9e2luZGV4fS8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJhd1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBzdHlsZT17e2JhY2tncm91bmQ6XCJub25lXCJ9fSBuYW1lPVwibGluZVR5cGVcIiBpZD17XCJsaW5lVHlwZXNcIiArIGluZGV4fSBkZWZhdWx0VmFsdWU9XCJtZFwiPlxyXG4gICAgICAgICAgICAgICAgICB7bGluZVR5cGVzLm1hcChmdW5jdGlvbih0KXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e3R9IHZhbHVlPXt0fT57dH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmF3XCI+cmF3PC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3tiYWNrZ3JvdW5kOlwibm9uZVwifX0gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiK1wiIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT48L2Rpdj4pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBNb3ZlVG9MZXNzb25Gb3JtKHtpbmRleCwgbGVzc29uLCBoYW5kbGVNb3ZlVG9MZXNzb259KXtcclxuICByZXR1cm4gKDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZGNkY2RjXCIsIGNvbG9yOlwiI2RjZGNkY1wiLCBtYXJnaW46XCIxNXB4XCIsIHdpZHRoOlwiMTAwJVwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgIDxmb3JtIHN0eWxlPXt7IGJhY2tncm91bmQ6XCJub25lXCJ9fSBvblN1Ym1pdD17aGFuZGxlTW92ZVRvTGVzc29ufT5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpbmRleFwiIHZhbHVlPXtpbmRleH0vPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsZXNzb25cIiBkZWZhdWx0VmFsdWU9e2xlc3Nvbn0vPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e2JhY2tncm91bmQ6XCJub25lXCJ9fSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJtb3ZlIHRvIGxlc3NvblwiIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT48L2Rpdj4pXHJcbn1cclxuXHJcblxyXG5cclxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIFx0ZmlsZTpmYWxzZSxcclxuICAgIFx0bGluZVR5cGVzOiBsaW5lVHlwZXMsXHJcbiAgICBcdGxpbmVzOltdLFxyXG4gICAgICBsZXNzb246IDEsXHJcbiAgICAgIGxlc3NvbnM6W10sXHJcbiAgICAgIHNob3dSYXc6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHsgLyoqLyB9XHJcblxyXG5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcyl7XHJcblxyXG4gIGlmKG5ld1Byb3BzLnJvdXRlci5xdWVyeS5jb3Vyc2UgIT09IHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmNvdXJzZSB8fCB0aGlzLnN0YXRlLmxpbmVzID09PSB1bmRlZmluZWQpe1xyXG4gICAgXHJcbiAgICBsZXQgbGluZXMgPSBbXVxyXG4gICAgY29uc3QgY291cnNlID0gbmV3UHJvcHMucm91dGVyLnF1ZXJ5LmNvdXJzZVxyXG5cclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvdXJzZSkgPT09IG51bGwpe1xyXG4gICAgICBsaW5lcyA9IFtdO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjb3Vyc2UsIEpTT04uc3RyaW5naWZ5KGxpbmVzKSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgbGluZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvdXJzZSkpO1xyXG4gICAgICBpZihsaW5lcyA9PT0gbnVsbCkgbGluZXMgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsaW5lczogbGluZXMsXHJcbiAgICAgIGxlc3NvbnM6IHRoaXMuZ2V0TGVzc29ucyhsaW5lcylcclxuICAgIH0pXHJcblxyXG4gIH1cclxufVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gIFx0ICBjb25zdCBoYW5kbGVOZXdMaW5lID0gdGhpcy5oYW5kbGVOZXdMaW5lLmJpbmQodGhpcylcclxuICBcdCAgY29uc3QgdXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKVxyXG4gIFx0ICBjb25zdCBkZWxldGVMaW5lID0gdGhpcy5kZWxldGVMaW5lLmJpbmQodGhpcylcclxuICAgICAgY29uc3QgbW92ZVRvTGVzc29uID0gdGhpcy5oYW5kbGVNb3ZlVG9MZXNzb24uYmluZCh0aGlzKVxyXG4gICAgICBjb25zdCBsZXNzb24gPSB0aGlzLnN0YXRlLmxlc3NvblxyXG4gICAgICBjb25zdCBoYW5kbGVTZWxlY3RMZXNzb24gPSB0aGlzLmhhbmRsZVNlbGVjdExlc3Nvbi5iaW5kKHRoaXMpXHJcbiAgICAgIGNvbnN0IHNob3dSYXcgPSB0aGlzLnN0YXRlLnNob3dSYXdcclxuICAgICAgY29uc3QgdG9nZ2xlUmF3ID0gdGhpcy50b2dnbGVSYXcuYmluZCh0aGlzKVxyXG4gICAgICBjb25zdCBjb3B5VGV4dFRvQ2xpcGJvYXJkID0gdGhpcy5jb3B5VGV4dFRvQ2xpcGJvYXJkLmJpbmQodGhpcylcclxuICAgICAgbGV0IHJhd1N0eWxlID0ge31cclxuICAgICAgY29uc3QgY29sdW1uU3R5bGUgPSB7aGVpZ2h0OlwiNTAwcHhcIiwgb3ZlcmZsb3c6XCJzY3JvbGxcIn1cclxuICAgICAgaWYoc2hvd1Jhdyl7XHJcbiAgICAgICAgIHJhd1N0eWxlID0ge2Rpc3BsYXk6XCJibG9ja1wifSAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIHJldHVybiAoXHJcblx0PGRpdj5cclxuXHQgICAgICA8SGVhZD5cclxuXHQgICAgICAgIDx0aXRsZT5CbG9jayBFZGl0b3IgfCBZb3V0aCBSZXZlbGF0aW9uIFN0dWR5PC90aXRsZT5cclxuXHQgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuXHQgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XHJcblxyXG5cdCAgICAgIDwvSGVhZD5cclxuXHJcblx0XHQ8bWFpbj5cclxuXHJcbiAgICA8aDEgc3R5bGU9e3tib3JkZXJCb3R0b206XCJzb2xpZCAycHggZ3JheVwiLCBwb3NpdGlvbjpcImZpeGVkXCIsIHRvcDpcIjBcIiwgaGVpZ2h0OlwiNzVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCB3aWR0aDpcIjc1JVwiLCBtYXJnaW5Ub3A6XCIwXCJ9fT5FZGl0b3IgfCBMZXNzb24ge3RoaXMuc3RhdGUubGVzc29ufSA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2F2ZS5iaW5kKHRoaXMpfT5TQVZFPC9idXR0b24+PHNwYW4gc3R5bGU9e3tmbG9hdDpcInJpZ2h0XCIsIGZvbnRTaXplOlwiLjdyZW1cIn19PjxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiaW5wdXQtZmlsZVwiIG9uQ2hhbmdlPXt0aGlzLmdldEZpbGUuYmluZCh0aGlzKX0gLz48L3NwYW4+XHJcbiAgICA8L2gxPlxyXG5cclxuICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6XCI3NXB4XCJ9fT48L2Rpdj5cclxuXHQgICAgXHJcbiAgICBcdCA8ZGl2IGNsYXNzTmFtZT17ZVN0eWxlcy5yb3d9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtlU3R5bGVzLmNvbHVtbiArIFwiIFwiICsgZVN0eWxlcy5zbWFsbENvbHVtbn0+XHJcbiAgICAgICAgICAge3RoaXMuc3RhdGUubGVzc29ucy5tYXAoZnVuY3Rpb24obGVzcywgayl7XHJcbiAgICAgICAgICAgIHJldHVybiA8U2VsZWN0TGVzc29uRm9ybSBrZXk9e2t9IGxlc3Nvbj17bGVzc30gaGFuZGxlU2VsZWN0TGVzc29uPXtoYW5kbGVTZWxlY3RMZXNzb259Lz5cclxuICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2VTdHlsZXMuY29sdW1ufT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TmV3TGluZUZvcm0gaW5kZXg9ezB9IGhhbmRsZU5ld0xpbmU9e2hhbmRsZU5ld0xpbmV9Lz5cclxuXHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUubGluZXMubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGxpbmUubGVzc29uID09PSBsZXNzb24pe1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVSYXd9PnJhdzwvYnV0dG9uPiA+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZVN0eWxlcy5yYXd9IHN0eWxlPXtyYXdTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0pTT04uc3RyaW5naWZ5KGxpbmUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb3B5VGV4dFRvQ2xpcGJvYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtlU3R5bGVzLnJvd30gc3R5bGU9e3toZWlnaHQ6XCI0MDBweFwiLCBvdmVyZmxvdzpcInNjcm9sbFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtlU3R5bGVzLmNvbHVtbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmUgaW5kZXg9e2l9IGRhdGE9e2xpbmV9IHVwZGF0ZT17dXBkYXRlfSBzdHlsZT17Y29sdW1uU3R5bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7Y29sb3I6XCJyZWRcIiwgbWFyZ2luTGVmdDpcIjE1cHhcIn19IG9uQ2xpY2s9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlTGluZShpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Png8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92ZVRvTGVzc29uRm9ybSBpbmRleD17aX0gbGVzc29uPXtsaW5lLmxlc3Nvbn0gaGFuZGxlTW92ZVRvTGVzc29uPXttb3ZlVG9MZXNzb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2VTdHlsZXMuY29sdW1ufSBzdHlsZT17e2ZvbnRTaXplOlwiNjAlXCIsIHBhZGRpbmdMZWZ0OlwiMTVweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lIGluZGV4PXtpfSBkYXRhPXtsaW5lfSByZWFkPXt0cnVlfSBzdHlsZT17Y29sdW1uU3R5bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdMaW5lRm9ybSBpbmRleD17aSsxfSBoYW5kbGVOZXdMaW5lPXtoYW5kbGVOZXdMaW5lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHRcdDwvbWFpbj5cclxuXHJcblxyXG48L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuc2F2ZSgpe1xyXG5cdGNvbnN0IHR4dCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUubGluZXMpXHJcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkuY291cnNlLCB0eHQpXHJcblxyXG5cdC8vIFN0YXJ0IGZpbGUgZG93bmxvYWQuXHJcblx0dGhpcy5kb3dubG9hZCh0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5jb3Vyc2UrXCIuanNvblwiLHR4dCk7XHJcbn1cclxuXHJcbmRvd25sb2FkKGZpbGVuYW1lLCB0ZXh0KSB7XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XHJcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZmlsZW5hbWUpO1xyXG5cclxuICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgZWxlbWVudC5jbGljaygpO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG59XHJcblxyXG5nZXRGaWxlKGV2ZW50KSB7XHJcblx0Y29uc3QgaW5wdXQgPSBldmVudC50YXJnZXRcclxuICBpZiAoJ2ZpbGVzJyBpbiBpbnB1dCAmJiBpbnB1dC5maWxlcy5sZW5ndGggPiAwKSB7XHJcblx0ICBjb25zdCBsaW5lcyA9IHRoaXMucGxhY2VGaWxlQ29udGVudChpbnB1dC5maWxlc1swXSkudGhlbigobGluZXMpPT57XHJcblx0ICBcdHRoaXMuc2V0U3RhdGUoe2xpbmVzOmxpbmVzLCBsZXNzb25zOiB0aGlzLmdldExlc3NvbnMobGluZXMpfSlcclxuXHQgIH0pXHJcblxyXG4gIFx0fVxyXG59XHJcblxyXG5wbGFjZUZpbGVDb250ZW50KGZpbGUpIHtcclxuXHRyZXR1cm4gdGhpcy5yZWFkRmlsZUNvbnRlbnQoZmlsZSkudGhlbihjb250ZW50ID0+IHtcclxuICBcdHJldHVybiBKU09OLnBhcnNlKGNvbnRlbnQpXHJcbiAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG59XHJcblxyXG5yZWFkRmlsZUNvbnRlbnQoZmlsZSkge1xyXG5cdGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IGV2ZW50ID0+IHJlc29sdmUoZXZlbnQudGFyZ2V0LnJlc3VsdClcclxuICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKVxyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSlcclxuICB9KVxyXG59XHJcblxyXG5oYW5kbGVOZXdMaW5lKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGxpbmVUeXBlID0gZS50YXJnZXQubGluZVR5cGUudmFsdWVcclxuICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuaW5kZXgudmFsdWVcclxuXHJcbiAgICBsZXQgbmV3U3RhdGUgPSB7Li4udGhpcy5zdGF0ZX1cclxuXHJcbiAgICBpZihsaW5lVHlwZSA9PT0gXCJyYXdcIil7XHJcbiAgICAgIG5ld1N0YXRlLmxpbmVzLnNwbGljZShpbmRleCwgMCwgey4uLkpTT04ucGFyc2UoZS50YXJnZXQucmF3LnZhbHVlKSwgbGVzc29uOnRoaXMuc3RhdGUubGVzc29ufSlcclxuICAgIH1lbHNle1xyXG4gICAgICBuZXdTdGF0ZS5saW5lcy5zcGxpY2UoaW5kZXgsIDAsIHsuLi50ZW1wbGF0ZXNbbGluZVR5cGVdLCBsZXNzb246dGhpcy5zdGF0ZS5sZXNzb259KSAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5ld1N0YXRlLmxlc3NvbnMgPSB0aGlzLmdldExlc3NvbnMobmV3U3RhdGUubGluZXMpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsuLi5uZXdTdGF0ZX0pXHJcbn1cclxuXHJcbmhhbmRsZU1vdmVUb0xlc3NvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGxlc3NvbiA9IHBhcnNlSW50KGUudGFyZ2V0Lmxlc3Nvbi52YWx1ZSlcclxuICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuaW5kZXgudmFsdWVcclxuXHJcbiAgICBsZXQgbmV3U3RhdGUgPSB7Li4udGhpcy5zdGF0ZX1cclxuICAgIG5ld1N0YXRlLmxpbmVzW2luZGV4XS5sZXNzb24gPSBsZXNzb25cclxuICAgIG5ld1N0YXRlLmxlc3NvbnMgPSB0aGlzLmdldExlc3NvbnMobmV3U3RhdGUubGluZXMpXHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Li4ubmV3U3RhdGV9KVxyXG59XHJcblxyXG5oYW5kbGVTZWxlY3RMZXNzb24oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkLnZhbHVlXHJcbiAgICBsZXQgbmV3U3RhdGUgPSB7Li4udGhpcy5zdGF0ZX1cclxuICAgIG5ld1N0YXRlLmxlc3NvbiA9IHBhcnNlSW50KGlkKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Li4ubmV3U3RhdGV9KVxyXG59XHJcblxyXG51cGRhdGUobGluZSwgZGF0YSl7XHJcbiAgICBsZXQgbmV3U3RhdGUgPSB7Li4udGhpcy5zdGF0ZX1cclxuICAgIG5ld1N0YXRlLmxpbmVzW2xpbmVdID0gey4uLmRhdGF9XHJcbiAgICBuZXdTdGF0ZS5sZXNzb25zID0gdGhpcy5nZXRMZXNzb25zKG5ld1N0YXRlLmxpbmVzKVxyXG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcclxufVxyXG5cclxuZGVsZXRlTGluZShsaW5lKXtcclxuICAgIGxldCBuZXdEYXRhID0gey4uLnRoaXMuc3RhdGV9XHJcbiAgICBuZXdEYXRhLmxpbmVzLnNwbGljZShsaW5lLCAxKTtcclxuICAgIG5ld0RhdGEubGVzc29ucyA9IHRoaXMuZ2V0TGVzc29ucyhuZXdEYXRhLmxpbmVzKVxyXG4gICAgdGhpcy5zZXRTdGF0ZShuZXdEYXRhKVxyXG59XHJcblxyXG5nZXRMZXNzb25zKGxpbmVzKXtcclxuXHJcbiAgbGV0IGxlc3NvbnMgPSBbXVxyXG4gIGxldCBpO1xyXG4gIGxldCBpZCA9IDA7XHJcbiAgbGV0IGxpbmRleCA9IDA7XHJcblxyXG4gIGZvcihpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKXtcclxuICAgIGlkID0gcGFyc2VJbnQobGluZXNbaV0ubGVzc29uKVxyXG4gICAgbGluZGV4ID0gaWQtMVxyXG5cclxuICAgIGlmKGxlc3NvbnNbbGluZGV4XSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgbGVzc29uc1tsaW5kZXhdID0ge2lkOmlkLCBjb3VudDoxfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGxlc3NvbnNbbGluZGV4XSA9IHtpZDppZCwgY291bnQ6bGVzc29uc1tsaW5kZXhdLmNvdW50KzF9XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHJldHVybiBsZXNzb25zXHJcbn1cclxuXHJcbnRvZ2dsZVJhdyhlKXtcclxuICBsZXQgbmV3U3RhdGUgPSB7Li4udGhpcy5zdGF0ZX1cclxuICBuZXdTdGF0ZS5zaG93UmF3ID0gIW5ld1N0YXRlLnNob3dSYXdcclxuICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKVxyXG59XHJcblxyXG4gIGNvcHlUZXh0VG9DbGlwYm9hcmQoZSl7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gZS50YXJnZXQ7XHJcbiAgICBjb250ZXh0LnNlbGVjdCgpO1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgYWxlcnQoXCJDb3BpZWQgdG8gY2xpcG9hcmQhXCIgKyBjb250ZXh0LnZhbHVlKVxyXG4gIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihFZGl0b3IpXHJcblxyXG4vKlxyXG4xLTQgRWxseWFubmFcclxuNS0xMSBKZXJlbWlhaFxyXG4xMi0xNiBCZW5qYW1pblxyXG4xNy0yMiBSb3NlbWFyeVxyXG5cclxuMS4gU3VtbWFyaWVzXHJcbjIuIENvbmNsdXNpbmcgb2YgQm9vayAxIHNlbnRlbmNlXHJcblxyXG5cdFx0PFF1aXogbGluZT17MX0gcXVlc3Rpb25zPXt0aGlzLnN0YXRlLnF1ZXN0aW9uc30gdXBkYXRlUXVlc3Rpb249e3VwZGF0ZVF1ZXN0aW9ufS8+XHJcblxyXG4gICAgKi8iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzcGVjaWFsLW91dGxpbmVcIjogXCJSZXZlbGF0aW9uX3NwZWNpYWwtb3V0bGluZV9fMVc3ZTBcIixcblx0XCJjb2xsYXBzaWJsZVwiOiBcIlJldmVsYXRpb25fY29sbGFwc2libGVfX0pzYWpOXCIsXG5cdFwiYWN0aXZlXCI6IFwiUmV2ZWxhdGlvbl9hY3RpdmVfXzEydkRYXCIsXG5cdFwiY29udGVudFwiOiBcIlJldmVsYXRpb25fY29udGVudF9fMklwTFdcIixcblx0XCJ3aG9sZS1vZi1ib29rXCI6IFwiUmV2ZWxhdGlvbl93aG9sZS1vZi1ib29rX18xLXpYbVwiLFxuXHRcImFuc3dlclwiOiBcIlJldmVsYXRpb25fYW5zd2VyX18yYzNsWVwiLFxuXHRcImFcIjogXCJSZXZlbGF0aW9uX2FfXzJMN2J1XCIsXG5cdFwicXVlc3Rpb25cIjogXCJSZXZlbGF0aW9uX3F1ZXN0aW9uX18xcnhYTFwiLFxuXHRcInFcIjogXCJSZXZlbGF0aW9uX3FfXzJ5YnY4XCIsXG5cdFwicmVmXCI6IFwiUmV2ZWxhdGlvbl9yZWZfXzFEXzhvXCIsXG5cdFwicXVlc3Rpb25MYWJlbFwiOiBcIlJldmVsYXRpb25fcXVlc3Rpb25MYWJlbF9fM1I1U3BcIixcblx0XCJxdWVzdGlvbnNcIjogXCJSZXZlbGF0aW9uX3F1ZXN0aW9uc19fMWtrZTVcIixcblx0XCJvcHRpb25cIjogXCJSZXZlbGF0aW9uX29wdGlvbl9fM2JJeUhcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXJrZG93bi93aXRoLWh0bWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=