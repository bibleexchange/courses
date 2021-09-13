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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/course/[course].js");
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

/***/ "./pages/course/Course.module.css":
/*!****************************************!*\
  !*** ./pages/course/Course.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textbook": "Course_textbook__5bnui",
	"textbookBody": "Course_textbookBody__378Rf",
	"textbookNav": "Course_textbookNav__qhXuR",
	"textbookContent": "Course_textbookContent__g6-Op",
	"textbookAside": "Course_textbookAside__3aTuh"
};


/***/ }),

/***/ "./pages/course/[course].js":
/*!**********************************!*\
  !*** ./pages/course/[course].js ***!
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
/* harmony import */ var _Course_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Course.module.css */ "./pages/course/Course.module.css");
/* harmony import */ var _Course_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Course_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Common_SelectLessonForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Common/SelectLessonForm */ "./pages/Common/SelectLessonForm.js");
/* harmony import */ var _Blocks_Line__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Blocks/Line */ "./pages/Blocks/Line.js");

var _jsxFileName = "D:\\sites\\github\\courses\\sermon-outlines\\stephen-reynolds-jr\\Youth Revelation Study\\youth-bible-study\\pages\\course\\[course].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Course extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      file: false,
      lineTypes: _Blocks_Line__WEBPACK_IMPORTED_MODULE_7__["lineTypes"],
      lines: [],
      lesson: 1,
      lessons: []
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
    const lesson = this.state.lesson;
    const handleSelectLesson = this.handleSelectLesson.bind(this);
    const columnStyle = {
      height: "500px",
      overflow: "scroll"
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Course | Youth Revelation Study"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 10
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 10
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          charset: "UTF-8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 10
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 8
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("body", {
          className: _Course_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.textbook,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: [this.props.router.query.course ? this.props.router.query.course.toUpperCase() : "", " | Lesson ", this.state.lesson]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Course_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.textbookBody,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
              className: _Course_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.textbookContent,
              children: this.state.lines.map(function (line, i) {
                if (line.lesson === lesson) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Blocks_Line__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    index: i,
                    data: line,
                    read: true,
                    style: columnStyle
                  }, i, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 22
                  }, this);
                }
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
              className: _Course_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.textbookNav,
              children: this.state.lessons.map(function (less, k) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_SelectLessonForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  lesson: less,
                  handleSelectLesson: handleSelectLesson
                }, k, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 20
                }, this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("aside", {
              className: _Course_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.textbookAside
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 2
    }, this);
  }

  handleSelectLesson(e) {
    e.preventDefault();
    const id = e.target.id.value;

    let newState = _objectSpread({}, this.state);

    newState.lesson = parseInt(id);
    this.setState(_objectSpread({}, newState));
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

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Course));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQmxvY2tzL0gxLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL0Jsb2Nrcy9MaW5lLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL0Jsb2Nrcy9NYXJrZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9CbG9ja3MvUC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9CbG9ja3MvUXVpei5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9CbG9ja3MvVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQ29tbW9uL1NlbGVjdExlc3NvbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY291cnNlL0NvdXJzZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvdXJzZS9bY291cnNlXS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvUmV2ZWxhdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXJrZG93bi93aXRoLWh0bWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJIMSIsInByb3BzIiwiZGF0YSIsInVwZGF0ZSIsImluZGV4IiwicmVhZCIsInZhbHVlIiwiZSIsImwiLCJ0YXJnZXQiLCJoMVRlbXBsYXRlIiwidHlwZSIsIkxpbmUiLCJxdWl6VGVtcGxhdGUiLCJwVGVtcGxhdGUiLCJtYXJrZG93blRlbXBsYXRlIiwidGltZWxpbmVUZW1wbGF0ZSIsImJsb2NrcyIsImxpbmVUeXBlcyIsInRlbXBsYXRlcyIsInF1aXoiLCJsZXNzb24iLCJoMSIsInAiLCJtZCIsInRpbWVsaW5lIiwiTWFya2Rvd24iLCJoZWlnaHQiLCJQIiwiUXVpeiIsInF1ZXN0aW9ucyIsIm1hcCIsInEiLCJpIiwia2V5cyIsIk9iamVjdCIsImsiLCJhbnMiLCJjb2xvciIsInBvaW50cyIsInRleHQiLCJzdHlsZXMiLCJxdWVzdGlvbkxhYmVsIiwidGl0bGUiLCJtYXJnaW5MZWZ0IiwibmV3RGF0YSIsImFuc3dlcmlkIiwib3B0aW9uIiwic3BsaWNlIiwicHJldmVudERlZmF1bHQiLCJwcm9wIiwidmFsIiwicHVzaCIsIlRpbWVsaW5lIiwic3R5bGUiLCJlbnRyaWVzIiwiU2VsZWN0TGVzc29uRm9ybSIsImhhbmRsZVNlbGVjdExlc3NvbiIsIm1hcmdpbiIsIndpZHRoIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZCIsImlkIiwiY291bnQiLCJDb3Vyc2UiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwiZmlsZSIsImxpbmVzIiwibGVzc29ucyIsImNvbXBvbmVudERpZE1vdW50IiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXdQcm9wcyIsInJvdXRlciIsInF1ZXJ5IiwiY291cnNlIiwidW5kZWZpbmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJzZXRTdGF0ZSIsImdldExlc3NvbnMiLCJyZW5kZXIiLCJiaW5kIiwiY29sdW1uU3R5bGUiLCJvdmVyZmxvdyIsImVTdHlsZXMiLCJ0ZXh0Ym9vayIsInRvVXBwZXJDYXNlIiwidGV4dGJvb2tCb2R5IiwidGV4dGJvb2tDb250ZW50IiwibGluZSIsInRleHRib29rTmF2IiwibGVzcyIsInRleHRib29rQXNpZGUiLCJuZXdTdGF0ZSIsInBhcnNlSW50IiwibGluZGV4IiwibGVuZ3RoIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0xlLEdBQWQ7O0FBNkxBLE1BQUdqRCxJQUFI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QUFBUUMsZUFBSyxFQUFDO0FBQWQsU0FBbEI7QUFDRCxPQUZELE1BRUs7QUFDSE8sZUFBTyxDQUFDK0IsTUFBRCxDQUFQLEdBQWtCO0FBQUN2QyxZQUFFLEVBQUNBLEVBQUo7QUFBUUMsZUFBSyxFQUFDTyxPQUFPLENBQUMrQixNQUFELENBQVAsQ0FBZ0J0QyxLQUFoQixHQUFzQjtBQUFwQyxTQUFsQjtBQUNEO0FBRUY7O0FBRUQsV0FBT08sT0FBUDtBQUNEOztBQTFHOEI7O0FBOEdoQmlDLDZIQUFVLENBQUN2QyxNQUFELENBQXpCLEU7Ozs7Ozs7Ozs7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9jb3Vyc2UvW2NvdXJzZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NvdXJzZS9bY291cnNlXS5qc1wiKTtcbiIsImZ1bmN0aW9uIEgxKHByb3BzKXtcclxuXHJcblx0Y29uc3QgeyBkYXRhLCB1cGRhdGUsIGluZGV4LCByZWFkIH0gPSBwcm9wc1xyXG5cclxuXHRpZihyZWFkKXtcclxuXHRcdHJldHVybiA8aDE+e2RhdGEudmFsdWV9PC9oMT5cclxuXHR9ZWxzZXtcclxuXHRyZXR1cm4gKDw+PHNwYW4+aDE8L3NwYW4+PGgxPjxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtwcm9wcy5kYXRhLnZhbHVlfSBvbkNoYW5nZT17KGUpPT57XHJcblx0XHRsZXQgbCA9IHsuLi5wcm9wcy5kYXRhfVxyXG5cdFx0bC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcblx0XHR1cGRhdGUoaW5kZXgsIGwpXHJcblx0fX0vPjwvaDE+PC8+KVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBoMVRlbXBsYXRlID0geyB0eXBlOlwiaDFcIiwgdmFsdWU6XCJcIiB9XHJcbmV4cG9ydCBkZWZhdWx0IEgxOyIsImltcG9ydCBRdWl6ICwge3F1aXpUZW1wbGF0ZX0gZnJvbSAnLi9RdWl6J1xyXG5pbXBvcnQgSDEgLCB7aDFUZW1wbGF0ZX0gZnJvbSAnLi9IMSdcclxuaW1wb3J0IFAgLCB7cFRlbXBsYXRlfSBmcm9tICcuL1AnXHJcbmltcG9ydCBNYXJrZG93biAsIHttYXJrZG93blRlbXBsYXRlfSBmcm9tICcuL01hcmtkb3duJ1xyXG5pbXBvcnQgVGltZWxpbmUgLCB7dGltZWxpbmVUZW1wbGF0ZX0gZnJvbSAnLi9UaW1lbGluZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmUocHJvcHMpe1xyXG5cclxuXHRzd2l0Y2gocHJvcHMuZGF0YS50eXBlKXtcclxuXHRcdGNhc2UgcXVpelRlbXBsYXRlLnR5cGU6XHJcblx0XHRcdHJldHVybiA8UXVpeiB7Li4ucHJvcHN9Lz5cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSBoMVRlbXBsYXRlLnR5cGU6XHJcblx0XHRcdHJldHVybiA8SDEgey4uLnByb3BzfS8+XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHJcblx0XHRjYXNlIHBUZW1wbGF0ZS50eXBlOlxyXG5cdFx0XHRyZXR1cm4gPFAgey4uLnByb3BzfS8+XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgbWFya2Rvd25UZW1wbGF0ZS50eXBlOlxyXG5cdFx0XHRyZXR1cm4gPE1hcmtkb3duIHsuLi5wcm9wc30vPlxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRpbWVsaW5lVGVtcGxhdGUudHlwZTpcclxuXHRcdFx0cmV0dXJuIDxUaW1lbGluZSB7Li4ucHJvcHN9Lz5cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIDxkaXYvPlxyXG5cdH1cclxuXHRyZXR1cm4gYmxvY2tzW3Byb3BzLnR5cGVdIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGluZVR5cGVzID0gWyBtYXJrZG93blRlbXBsYXRlLnR5cGUsIGgxVGVtcGxhdGUudHlwZSxcImgyXCIscFRlbXBsYXRlLnR5cGUsXCJibG9ja3F1b3RlXCIscXVpelRlbXBsYXRlLnR5cGVdXHJcblxyXG5leHBvcnQgY29uc3QgdGVtcGxhdGVzID0ge1xyXG5cdHF1aXo6IHsgLi4ucXVpelRlbXBsYXRlLCBsZXNzb246MX0sXHJcblx0aDE6IHsgLi4uaDFUZW1wbGF0ZSwgbGVzc29uOjF9LFxyXG5cdHA6IHsgLi4ucFRlbXBsYXRlLCBsZXNzb246MX0sXHJcblx0bWQ6IHsgLi4ubWFya2Rvd25UZW1wbGF0ZSwgbGVzc29uOjF9LFxyXG5cdHRpbWVsaW5lOiB7IC4uLnRpbWVsaW5lVGVtcGxhdGUsIGxlc3NvbjoxfVxyXG59IiwiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24vd2l0aC1odG1sJ1xyXG5cclxuZnVuY3Rpb24gTWFya2Rvd24ocHJvcHMpe1xyXG5cclxuXHRjb25zdCB7IGRhdGEsIHVwZGF0ZSwgaW5kZXgsIHJlYWQgfSA9IHByb3BzXHJcblxyXG5cclxuXHJcblx0aWYocmVhZCl7XHJcblx0XHRyZXR1cm4gPFJlYWN0TWFya2Rvd24gYWxsb3dEYW5nZXJvdXNIdG1sPntkYXRhLnZhbHVlfTwvUmVhY3RNYXJrZG93bj5cclxuXHR9ZWxzZXtcclxuXHRyZXR1cm4gKDx0ZXh0YXJlYSBzdHlsZT17e2hlaWdodDpcIjEwMCVcIn19IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2RhdGEudmFsdWV9IG9uQ2hhbmdlPXsoZSk9PntcclxuXHRcdGxldCBsID0gey4uLmRhdGF9XHJcblx0XHRsLnZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuXHRcdHVwZGF0ZShpbmRleCwgbClcclxuXHR9fT48L3RleHRhcmVhPilcclxufVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG1hcmtkb3duVGVtcGxhdGUgPSB7IHR5cGU6XCJtZFwiLCB2YWx1ZTpcIlwiIH1cclxuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd247IiwiZnVuY3Rpb24gUChwcm9wcyl7XHJcblxyXG5cdGNvbnN0IHsgZGF0YSwgdXBkYXRlLCBpbmRleCwgcmVhZCB9ID0gcHJvcHNcclxuXHJcblx0aWYocmVhZCl7XHJcblx0XHRyZXR1cm4gPHA+e2RhdGEudmFsdWV9PC9wPlxyXG5cdH1lbHNle1xyXG5cdHJldHVybiAoPD48c3Bhbj5wPC9zcGFuPjxwPjxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtkYXRhLnZhbHVlfSBvbkNoYW5nZT17KGUpPT57XHJcblx0XHRsZXQgbCA9IHsuLi5kYXRhfVxyXG5cdFx0bC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcblx0XHR1cGRhdGUoaW5kZXgsIGwpXHJcblx0fX0vPjwvcD48Lz4pXHJcbn1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwVGVtcGxhdGUgPSB7IHR5cGU6XCJwXCIsIHZhbHVlOlwiXCIgfVxyXG5leHBvcnQgZGVmYXVsdCBQOyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi8uLi9zdHlsZXMvUmV2ZWxhdGlvbi5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gUXVpeihwcm9wcyl7XHJcblxyXG5cdGNvbnN0IHsgZGF0YSwgdXBkYXRlLCBpbmRleCwgcmVhZCB9ID0gcHJvcHNcclxuXHJcblx0aWYocmVhZCl7XHJcblx0XHRyZXR1cm4gKDxvbD4ge3Byb3BzLmRhdGEucXVlc3Rpb25zLm1hcChmdW5jdGlvbihxLGkpe1xyXG5cclxuXHRcdFx0PGxpPlFVRVNUSU9OIFRZUEVTOiBCdXp6ZXIgUXVlc3Rpb24gPC9saT5cclxuXHJcblx0ICAgIFx0Y29uc3Qga2V5cyA9IHE/IE9iamVjdC5rZXlzKHEpOltdXHJcblx0ICAgIFx0cmV0dXJuIDxsaSBrZXk9e2l9PlxyXG5cclxuXHQgICAgXHRcdHtrZXlzLm1hcChmdW5jdGlvbihrKXtcclxuXHQgICAgXHRcdFx0aWYoayA9PT0gXCJhbnN3ZXJzXCIpe1xyXG5cdCAgICBcdFx0XHRcdHJldHVybiBxW2tdLm1hcChmdW5jdGlvbihhbnMsaW5kZXgpe1xyXG5cdCAgICBcdFx0XHRcdFx0bGV0IGNvbG9yID0gXCJncmVlblwiXHJcblxyXG5cdCAgICBcdFx0XHRcdFx0aWYoYW5zLnBvaW50cyA9PT0gXCIwXCIgfHwgYW5zLnBvaW50cyA9PT0gMCl7XHJcblx0ICAgIFx0XHRcdFx0XHRcdGNvbG9yID0gXCJyZWRcIlxyXG5cdCAgICBcdFx0XHRcdFx0fVxyXG5cdCAgICBcdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXtpbmRleH0+PHAgc3R5bGU9e3tjb2xvcjpjb2xvcn19PjxzcGFuPnthbnMudGV4dH08L3NwYW4+PHNwYW4+IDoge2Fucy5wb2ludHN9PC9zcGFuPjwvcD48L2Rpdj5cclxuXHQgICAgXHRcdFx0XHR9KVxyXG5cdCAgICBcdFx0XHR9ZWxzZXtcclxuXHQgICAgXHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9e2t9PjxwIGNsYXNzTmFtZT17XCJxdWVzdGlvbnMgXCIgKyBzdHlsZXNba119IHR5cGU9XCJ0ZXh0XCI+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25MYWJlbH0+e2t9OiA8L3NwYW4+e3Fba119PC9wPjwvZGl2PlxyXG5cdCAgICBcdFx0XHR9XHJcblx0ICAgIFx0XHRcdFxyXG5cdCAgICBcdFx0fSl9XHJcblxyXG5cdFx0XHQgICAgICA8aHIvPlxyXG5cdCAgICBcdFx0PC9saT5cclxuXHQgICAgfSl9XHJcblx0ICAgIDwvb2w+XHJcbilcclxuXHR9ZWxzZXtcclxuXHRyZXR1cm4gKDw+PGgyPjxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtwcm9wcy5kYXRhLnRpdGxlfSBvbkNoYW5nZT17KGUpPT57XHJcblx0XHRsZXQgbCA9IHsuLi5wcm9wcy5kYXRhfVxyXG5cdFx0bC50aXRsZSA9IGUudGFyZ2V0LnZhbHVlXHJcblx0XHR1cGRhdGUoaW5kZXgsIGwpXHJcblx0fX0vPjwvaDI+PG9sPlxyXG5cdCAgICB7cHJvcHMuZGF0YS5xdWVzdGlvbnMubWFwKGZ1bmN0aW9uKHEsaSl7XHJcblxyXG5cdCAgICBcdGNvbnN0IGtleXMgPSBxPyBPYmplY3Qua2V5cyhxKTpbXVxyXG5cdCAgICBcdHJldHVybiA8bGkga2V5PXtpfT5cclxuXHJcblx0ICAgIFx0XHQgICAgXHQ8YnV0dG9uIHN0eWxlPXt7Y29sb3I6XCJyZWRcIiwgbWFyZ2luTGVmdDpcIjE1cHhcIn19IG9uQ2xpY2s9eyhlKT0+e1xyXG5cdFx0XHQgICAgXHRcdFx0bGV0IG5ld0RhdGEgPSB7Li4ucHJvcHMuZGF0YX1cclxuXHRcdFx0ICAgIFx0XHRcdGRlbGV0ZSBuZXdEYXRhLnF1ZXN0aW9uc1tpXVxyXG5cdFx0XHQgICAgXHRcdFx0dXBkYXRlKGluZGV4LG5ld0RhdGEpXHJcblx0XHRcdCAgICBcdFx0fX0+eDwvYnV0dG9uPlxyXG5cclxuXHQgICAgXHRcdHtrZXlzLm1hcChmdW5jdGlvbihrKXtcclxuXHQgICAgXHRcdFx0aWYoayA9PT0gXCJhbnN3ZXJzXCIpe1xyXG5cdCAgICBcdFx0XHRcdHJldHVybiAocHJvcHMuZGF0YS5xdWVzdGlvbnNbaV1ba10ubWFwKGZ1bmN0aW9uKHEsYW5zd2VyaWQpe1xyXG5cdCAgICBcdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXthbnN3ZXJpZH0+PHRleHRhcmVhIGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0gdHlwZT1cInRleHRcIiBvbkNoYW5nZT17XHJcblx0XHRcdFx0XHRcdCAgICBcdFx0KGUpPT57XHJcblx0XHRcdFx0XHRcdCAgICBcdFx0XHRsZXQgbmV3RGF0YSA9IHsuLi5wcm9wcy5kYXRhfVxyXG5cdFx0XHRcdFx0XHQgICAgXHRcdFx0bmV3RGF0YS5xdWVzdGlvbnNbaV1ba11bYW5zd2VyaWRdLnRleHQgPSBlLnRhcmdldC52YWx1ZVxyXG5cdFx0XHRcdFx0XHQgICAgXHRcdFx0dXBkYXRlKGluZGV4LG5ld0RhdGEpXHJcblx0XHRcdFx0XHRcdCAgICBcdFx0fX0gdmFsdWU9e3Byb3BzLmRhdGEucXVlc3Rpb25zW2ldW2tdW2Fuc3dlcmlkXS50ZXh0fT48L3RleHRhcmVhPjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uTGFiZWx9PlRFWFQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdCAgICBcdFx0PHRleHRhcmVhIGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0gdHlwZT1cInRleHRcIiBvbkNoYW5nZT17XHJcblx0XHRcdFx0XHRcdCAgICBcdFx0KGUpPT57XHJcblx0XHRcdFx0XHRcdCAgICBcdFx0XHRsZXQgbmV3RGF0YSA9IHsuLi5wcm9wcy5kYXRhfVxyXG5cdFx0XHRcdFx0XHQgICAgXHRcdFx0bmV3RGF0YS5xdWVzdGlvbnNbaV1ba11bYW5zd2VyaWRdLnBvaW50cyA9IGUudGFyZ2V0LnZhbHVlXHJcblx0XHRcdFx0XHRcdCAgICBcdFx0XHR1cGRhdGUoaW5kZXgsbmV3RGF0YSlcclxuXHRcdFx0XHRcdFx0ICAgIFx0XHR9fSB2YWx1ZT17cHJvcHMuZGF0YS5xdWVzdGlvbnNbaV1ba11bYW5zd2VyaWRdLnBvaW50c30+PC90ZXh0YXJlYT48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbkxhYmVsfT5QT0lOVFM8L3NwYW4+XHJcblx0XHRcdFx0ICAgIFx0XHQ8L2Rpdj5cclxuXHQgICAgXHRcdFx0XHR9KSkgXHJcblxyXG5cdCAgICBcdFx0XHR9ZWxzZXtcclxuXHJcblx0ICAgIFx0XHRcdHJldHVybiA8ZGl2IGtleT17a30+PHRleHRhcmVhIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9ucyArXCIgXCIgKyBzdHlsZXNba119IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e1xyXG5cdFx0XHQgICAgXHRcdChlKT0+e1xyXG5cdFx0XHQgICAgXHRcdFx0bGV0IG5ld0RhdGEgPSB7Li4ucHJvcHMuZGF0YX1cclxuXHRcdFx0ICAgIFx0XHRcdG5ld0RhdGEucXVlc3Rpb25zW2ldW2tdID0gZS50YXJnZXQudmFsdWVcclxuXHRcdFx0ICAgIFx0XHRcdHVwZGF0ZShpbmRleCxuZXdEYXRhKVxyXG5cdFx0XHQgICAgXHRcdH19IHZhbHVlPXtxW2tdfT48L3RleHRhcmVhPjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uTGFiZWx9PntrfTwvc3Bhbj5cclxuXHJcblx0XHRcdCAgICBcdFx0PGJ1dHRvbiBzdHlsZT17e2NvbG9yOlwicmVkXCIsIG1hcmdpbkxlZnQ6XCIxNXB4XCJ9fSBvbkNsaWNrPXsoZSk9PntcclxuXHRcdFx0ICAgIFx0XHRcdGxldCBuZXdEYXRhID0gey4uLnByb3BzLmRhdGF9XHJcblx0XHRcdCAgICBcdFx0XHRuZXdEYXRhLnF1ZXN0aW9ucy5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdCAgICBcdFx0XHR1cGRhdGUoaW5kZXgsbmV3RGF0YSlcclxuXHRcdFx0ICAgIFx0XHR9fT54PC9idXR0b24+XHJcblx0ICAgIFx0XHQ8L2Rpdj5cclxuXHQgICAgXHRcdFx0fVxyXG5cdCAgICBcdFx0fSl9XHJcblxyXG5cdCAgICBcdFx0ICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+e1xyXG5cdFx0XHQgICAgICBcdCAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHQgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5pbmRleC52YWx1ZVxyXG5cdFx0XHRcdFx0ICAgIGNvbnN0IHByb3AgPSBlLnRhcmdldC5wcm9wLnZhbHVlXHJcblx0XHRcdFx0XHQgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsLnZhbHVlXHJcblxyXG5cdFx0XHRcdFx0ICAgIGxldCBuZXdEYXRhID0gey4uLnByb3BzLmRhdGF9XHJcblx0XHRcdFx0XHQgICAgbmV3RGF0YS5xdWVzdGlvbnNbaW5kZXhdW3Byb3BdID0gdmFsXHJcblx0XHRcdFx0XHQgICAgdXBkYXRlKGluZGV4LG5ld0RhdGEpXHJcblxyXG5cdCAgICBcdFx0ICAgfX0+XHJcblx0ICAgIFx0XHQgICBcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImluZGV4XCIgdmFsdWU9e2l9IC8+XHJcblx0XHRcdCAgICAgICAgPGxhYmVsPlxyXG5cdFx0XHQgICAgICAgICAgS2V5OlxyXG5cdFx0XHQgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb3BcIiAvPlxyXG5cdFx0XHQgICAgICAgIDwvbGFiZWw+XHJcblx0XHRcdCAgXHRcdDxsYWJlbD5cclxuXHRcdFx0ICAgICAgICAgIFZhbHVlOlxyXG5cdFx0XHQgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInZhbFwiLz5cclxuXHRcdFx0ICAgICAgICA8L2xhYmVsPlxyXG5cdFx0XHQgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCIrXCIgLz5cclxuXHRcdFx0ICAgICAgPC9mb3JtPlxyXG5cclxuXHRcdFx0ICAgICAgPGhyLz5cclxuXHQgICAgXHRcdDwvbGk+XHJcblx0ICAgIH0pfVxyXG5cdCAgICA8L29sPlxyXG5cclxuXHQgICAgXHQ8YnV0dG9uIG9uQ2xpY2s9e2Z1bmN0aW9uKGUpe1xyXG5cdCAgICBcdFx0bGV0IG5ld0RhdGEgPSB7Li4ucHJvcHMuZGF0YX1cclxuXHRcdFx0ICAgIG5ld0RhdGEucXVlc3Rpb25zLnB1c2gocXVpelRlbXBsYXRlLnF1ZXN0aW9uc1swXSlcclxuXHRcdFx0ICAgIHVwZGF0ZShpbmRleCxuZXdEYXRhKVxyXG5cdCAgICBcdH19PmFkZCBuZXcgcXVlc3Rpb248L2J1dHRvbj5cclxuXHQgICAgXHQ8Lz4pXHJcblx0ICAgIH1cclxuXHQgICAgXHJcblx0ICAgIH1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcXVpelRlbXBsYXRlID0geyB0eXBlOlwicXVpelwiLCB0aXRsZTpcIlRJVExFXCIsIHF1ZXN0aW9uczpbe1xyXG4gICAgICAgIFwicVwiOiBcIlwiLFxyXG4gICAgICAgIFwicmVmXCI6IFwiXCIsXHJcbiAgICAgICAgXCJ0eXBlXCI6IFwiQUxMX0FOU1dFUlwiLFxyXG4gICAgICAgIFwiYW5zd2Vyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcInBvaW50c1wiOiBcIjBcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwicG9pbnRzXCI6IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcInBvaW50c1wiOiAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInRleHRcIjogXCJcIixcclxuICAgICAgICAgICAgXCJwb2ludHNcIjogNTAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgIH1dIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1aXo7IiwiZnVuY3Rpb24gVGltZWxpbmUocHJvcHMpe1xyXG5cclxuXHRjb25zdCB7IGRhdGEsIHVwZGF0ZSwgaW5kZXgsIHJlYWQgfSA9IHByb3BzXHJcblxyXG5cdGNvbnN0IHN0eWxlID0ge1xyXG5cclxuLyouZmxleC1wYXJlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmlucHV0LWZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDM0U1MDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5pbnB1dDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbnB1dDo6YmVmb3JlLCAuaW5wdXQ6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDM0U1MDtcclxuICB3aWR0aDogNHZ3O1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIG1heC13aWR0aDogNTBweDtcclxufVxyXG4uaW5wdXQ6OmJlZm9yZSB7XHJcbiAgbGVmdDogY2FsYygtNHZ3ICsgMTIuNXB4KTtcclxufVxyXG4uaW5wdXQ6OmFmdGVyIHtcclxuICByaWdodDogY2FsYygtNHZ3ICsgMTIuNXB4KTtcclxufVxyXG4uaW5wdXQuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzRTUwO1xyXG59XHJcbi5pbnB1dC5hY3RpdmU6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDM0U1MDtcclxufVxyXG4uaW5wdXQuYWN0aXZlOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FFQjZCRjtcclxufVxyXG4uaW5wdXQuYWN0aXZlIHNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmlucHV0LmFjdGl2ZSBzcGFuOjpiZWZvcmUge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uaW5wdXQuYWN0aXZlIHNwYW46OmFmdGVyIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmlucHV0LmFjdGl2ZSB+IC5pbnB1dCwgLmlucHV0LmFjdGl2ZSB+IC5pbnB1dDo6YmVmb3JlLCAuaW5wdXQuYWN0aXZlIH4gLmlucHV0OjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FFQjZCRjtcclxufVxyXG4uaW5wdXQgc3BhbiB7XHJcbiAgd2lkdGg6IDFweDtcclxuICBoZWlnaHQ6IDFweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uaW5wdXQgc3Bhbjo6YmVmb3JlLCAuaW5wdXQgc3Bhbjo6YWZ0ZXIge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG4uaW5wdXQgc3Bhbjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS15ZWFyKTtcclxuICB0b3A6IDI1cHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uaW5wdXQgc3Bhbjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBhdHRyKGRhdGEtaW5mbyk7XHJcbiAgdG9wOiAtNjVweDtcclxuICB3aWR0aDogNzBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCkgcm90YXRlWigtNDVkZWcpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWluZGVudDogLTEwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1mbGV4LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbn1cclxuLmRlc2NyaXB0aW9uLWZsZXgtY29udGFpbmVyIHAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZGVzY3JpcHRpb24tZmxleC1jb250YWluZXIgcC5hY3RpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI1MHB4KSB7XHJcbiAgLmlucHV0OjpiZWZvcmUge1xyXG4gICAgbGVmdDogLTM3LjVweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dDo6YWZ0ZXIge1xyXG4gICAgcmlnaHQ6IC0zNy41cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICB3aWR0aDogMTdweDtcclxuICAgIGhlaWdodDogMTdweDtcclxuICB9XHJcbiAgLmlucHV0OjpiZWZvcmUsIC5pbnB1dDo6YWZ0ZXIge1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgfVxyXG4gIC5pbnB1dDo6YmVmb3JlIHtcclxuICAgIGxlZnQ6IGNhbGMoLTR2dyArIDguNXB4KTtcclxuICB9XHJcbiAgLmlucHV0OjphZnRlciB7XHJcbiAgICByaWdodDogY2FsYygtNHZ3ICsgOC41cHgpO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuZmxleC1wYXJlbnQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBpbml0aWFsO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWZsZXgtY29udGFpbmVyIHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0IHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luOiAwIDEwcHggNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBRUI2QkY7XHJcbiAgfVxyXG4gIC5pbnB1dDo6YmVmb3JlLCAuaW5wdXQ6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgfVxyXG4gIC5pbnB1dCBzcGFuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5pbnB1dCBzcGFuOjpiZWZvcmUge1xyXG4gICAgdG9wOiBjYWxjKDEwMCUgKyA1cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pbnB1dCBzcGFuOjphZnRlciB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgY29sb3I6ICNFQ0YwRjE7XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcHRpb24tZmxleC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgYm9keSB7XHJcbiAgICBtaW4taGVpZ2h0OiA5NTBweDtcclxuICB9XHJcbn0qL31cclxuXHJcblx0aWYocmVhZCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2PntzdHlsZX1cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZsZXgtcGFyZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZmxleC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgICAgICAgICAgPHNwYW4gZGF0YS15ZWFyPVwiMTkxMFwiIGRhdGEtaW5mbz1cImhlYWRzZXRcIj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGRhdGEteWVhcj1cIjE5MjBcIiBkYXRhLWluZm89XCJqdW5nbGUgZ3ltXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dCBhY3RpdmVcIj5cclxuICAgICAgICAgICAgPHNwYW4gZGF0YS15ZWFyPVwiMTkzMFwiIGRhdGEtaW5mbz1cImNob2NvbGF0ZSBjaGlwIGNvb2tpZVwiPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgICAgICAgICAgPHNwYW4gZGF0YS15ZWFyPVwiMTk0MFwiIGRhdGEtaW5mbz1cIkplZXBcIj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGRhdGEteWVhcj1cIjE5NTBcIiBkYXRhLWluZm89XCJsZWFmIGJsb3dlclwiPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cclxuICAgICAgICAgICAgPHNwYW4gZGF0YS15ZWFyPVwiMTk2MFwiIGRhdGEtaW5mbz1cIm1hZ25ldGljIHN0cmlwZSBjYXJkXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBkYXRhLXllYXI9XCIxOTcwXCIgZGF0YS1pbmZvPVwid2lyZWxlc3MgTEFOXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBkYXRhLXllYXI9XCIxOTgwXCIgZGF0YS1pbmZvPVwiZmxhc2ggbWVtb3J5XCI+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBkYXRhLXllYXI9XCIxOTkwXCIgZGF0YS1pbmZvPVwiV29ybGQgV2lkZSBXZWJcIj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGRhdGEteWVhcj1cIjIwMDBcIiBkYXRhLWluZm89XCJHb29nbGUgQWRXb3Jkc1wiPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWZsZXgtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHA+QW5kIGZ1dHVyZSBDYWxsIG9mIER1dHkgcGxheWVycyB3b3VsZCB0aGFuayB0aGVtLjwvcD5cclxuICAgICAgICA8cD5CZWNhdXNlIGV2ZXJ5IGtpZCBzaG91bGQgZ2V0IHRvIGJlIFRhcnphbiBmb3IgYSBkYXkuPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiYWN0aXZlXCI+QW5kIHRoZSB3b3JsZCByZWpvaWNlZC48L3A+XHJcbiAgICAgICAgPHA+QmVjYXVzZSBidWlsZGluZyByb2FkcyBpcyBpbmNvbnZlbmllbnQuPC9wPlxyXG4gICAgICAgIDxwPkFpbuKAmXQgbm9ib2R5IGdvdCB0aW1lIHRvIHJha2UuPC9wPlxyXG4gICAgICAgIDxwPkJlY2F1c2UgcGFwZXIgY3VycmVuY3kgaXMgZm9yIG5vb2JzLjwvcD5cclxuICAgICAgICA8cD5Ob2JvZHkgbGlrZXMgY29yZHMuIE5vYm9keS48L3A+XHJcbiAgICAgICAgPHA+QnJpZ2h0ZXIgdGhhbiBnbG93IG1lbW9yeS48L3A+XHJcbiAgICAgICAgPHA+VG8gY2FwaXRhbGl6ZSBvbiBhbiBhcy15ZXQgbmFzY2VudCBtYXJrZXQgZm9yIGNhdCBwaG90b3MuPC9wPlxyXG4gICAgICAgIDxwPkJlY2F1c2Ugb3JnYW5pYyBzZWFyY2ggcmFua2luZ3MgdGFrZSB3b3JrLjwvcD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiA0MHB4OyByaWdodDogMTBweDsgZm9udC1zaXplOiAxMnB4XCI+XHJcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL2NqbDc1MC9wZW4vWE15Um9CXCIgdGFyZ2V0PVwiX2JsYW5rXCI+b3JpZ2luYWwgdmVyc2lvbiB3aXRoIHNsaW5reSBtb2JpbGUgbWVudTwvYT48L2Rpdj5cclxuPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAxNXB4OyByaWdodDogMTBweDsgZm9udC1zaXplOiAxMnB4XCI+XHJcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL2NqbDc1MC9wZW4vd2RWeHpWXCIgdGFyZ2V0PVwiX2JsYW5rXCI+YWx0ZXJuYXRlIHZlcnNpb24gd2l0aCBjdXN0b20gcmFuZ2UgaW5wdXQ8L2E+PC9kaXY+XHJcbjxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMTVweDsgbGVmdDogMTBweDsgZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogYm9sZFwiPlxyXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9jamw3NTAvcGVuL01YdlltZ1wiIHRhcmdldD1cIl9ibGFua1wiPnZlcnNpb24gNDogcHVyZSBDU1MhPC9hPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuKVxyXG5cdH1lbHNle1xyXG5cdHJldHVybiAoPD48aDI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Byb3BzLmRhdGEudGl0bGV9IG9uQ2hhbmdlPXsoZSk9PntcclxuXHRcdGxldCBsID0gey4uLnByb3BzLmRhdGF9XHJcblx0XHRsLnRpdGxlID0gZS50YXJnZXQudmFsdWVcclxuXHRcdHVwZGF0ZShpbmRleCwgbClcclxuXHR9fS8+PC9oMj48b2w+XHJcblx0ICAgIHtwcm9wcy5kYXRhLnF1ZXN0aW9ucy5tYXAoZnVuY3Rpb24ocSxpKXtcclxuXHJcblx0ICAgIFx0Y29uc3Qga2V5cyA9IHE/IE9iamVjdC5rZXlzKHEpOltdXHJcblx0ICAgIFx0cmV0dXJuIDxsaSBrZXk9e2l9PlxyXG5cclxuXHQgICAgXHRcdCAgICBcdDxidXR0b24gc3R5bGU9e3tjb2xvcjpcInJlZFwiLCBtYXJnaW5MZWZ0OlwiMTVweFwifX0gb25DbGljaz17KGUpPT57XHJcblx0XHRcdCAgICBcdFx0XHRsZXQgbmV3RGF0YSA9IHsuLi5wcm9wcy5kYXRhfVxyXG5cdFx0XHQgICAgXHRcdFx0ZGVsZXRlIG5ld0RhdGEucXVlc3Rpb25zW2ldXHJcblx0XHRcdCAgICBcdFx0XHR1cGRhdGUoaW5kZXgsbmV3RGF0YSlcclxuXHRcdFx0ICAgIFx0XHR9fT54PC9idXR0b24+XHJcblxyXG5cdCAgICBcdFx0e2tleXMubWFwKGZ1bmN0aW9uKGspe1xyXG5cdCAgICBcdFx0XHRpZihrID09PSBcImFuc3dlcnNcIil7XHJcblx0ICAgIFx0XHRcdFx0cmV0dXJuIChwcm9wcy5kYXRhLnF1ZXN0aW9uc1tpXVtrXS5tYXAoZnVuY3Rpb24ocSxhbnN3ZXJpZCl7XHJcblx0ICAgIFx0XHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9e2Fuc3dlcmlkfT48dGV4dGFyZWEgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufSB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtcclxuXHRcdFx0XHRcdFx0ICAgIFx0XHQoZSk9PntcclxuXHRcdFx0XHRcdFx0ICAgIFx0XHRcdGxldCBuZXdEYXRhID0gey4uLnByb3BzLmRhdGF9XHJcblx0XHRcdFx0XHRcdCAgICBcdFx0XHRuZXdEYXRhLnF1ZXN0aW9uc1tpXVtrXVthbnN3ZXJpZF0udGV4dCA9IGUudGFyZ2V0LnZhbHVlXHJcblx0XHRcdFx0XHRcdCAgICBcdFx0XHR1cGRhdGUoaW5kZXgsbmV3RGF0YSlcclxuXHRcdFx0XHRcdFx0ICAgIFx0XHR9fSB2YWx1ZT17cHJvcHMuZGF0YS5xdWVzdGlvbnNbaV1ba11bYW5zd2VyaWRdLnRleHR9PjwvdGV4dGFyZWE+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25MYWJlbH0+VEVYVDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0ICAgIFx0XHQ8dGV4dGFyZWEgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufSB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtcclxuXHRcdFx0XHRcdFx0ICAgIFx0XHQoZSk9PntcclxuXHRcdFx0XHRcdFx0ICAgIFx0XHRcdGxldCBuZXdEYXRhID0gey4uLnByb3BzLmRhdGF9XHJcblx0XHRcdFx0XHRcdCAgICBcdFx0XHRuZXdEYXRhLnF1ZXN0aW9uc1tpXVtrXVthbnN3ZXJpZF0ucG9pbnRzID0gZS50YXJnZXQudmFsdWVcclxuXHRcdFx0XHRcdFx0ICAgIFx0XHRcdHVwZGF0ZShpbmRleCxuZXdEYXRhKVxyXG5cdFx0XHRcdFx0XHQgICAgXHRcdH19IHZhbHVlPXtwcm9wcy5kYXRhLnF1ZXN0aW9uc1tpXVtrXVthbnN3ZXJpZF0ucG9pbnRzfT48L3RleHRhcmVhPjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9uTGFiZWx9PlBPSU5UUzwvc3Bhbj5cclxuXHRcdFx0XHQgICAgXHRcdDwvZGl2PlxyXG5cdCAgICBcdFx0XHRcdH0pKSBcclxuXHJcblx0ICAgIFx0XHRcdH1lbHNle1xyXG5cclxuXHQgICAgXHRcdFx0cmV0dXJuIDxkaXYga2V5PXtrfT48dGV4dGFyZWEgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25zICtcIiBcIiArIHN0eWxlc1trXX0gdHlwZT1cInRleHRcIiBvbkNoYW5nZT17XHJcblx0XHRcdCAgICBcdFx0KGUpPT57XHJcblx0XHRcdCAgICBcdFx0XHRsZXQgbmV3RGF0YSA9IHsuLi5wcm9wcy5kYXRhfVxyXG5cdFx0XHQgICAgXHRcdFx0bmV3RGF0YS5xdWVzdGlvbnNbaV1ba10gPSBlLnRhcmdldC52YWx1ZVxyXG5cdFx0XHQgICAgXHRcdFx0dXBkYXRlKGluZGV4LG5ld0RhdGEpXHJcblx0XHRcdCAgICBcdFx0fX0gdmFsdWU9e3Fba119PjwvdGV4dGFyZWE+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb25MYWJlbH0+e2t9PC9zcGFuPlxyXG5cclxuXHRcdFx0ICAgIFx0XHQ8YnV0dG9uIHN0eWxlPXt7Y29sb3I6XCJyZWRcIiwgbWFyZ2luTGVmdDpcIjE1cHhcIn19IG9uQ2xpY2s9eyhlKT0+e1xyXG5cdFx0XHQgICAgXHRcdFx0bGV0IG5ld0RhdGEgPSB7Li4ucHJvcHMuZGF0YX1cclxuXHRcdFx0ICAgIFx0XHRcdG5ld0RhdGEucXVlc3Rpb25zLnNwbGljZShpLCAxKTtcclxuXHRcdFx0ICAgIFx0XHRcdHVwZGF0ZShpbmRleCxuZXdEYXRhKVxyXG5cdFx0XHQgICAgXHRcdH19Png8L2J1dHRvbj5cclxuXHQgICAgXHRcdDwvZGl2PlxyXG5cdCAgICBcdFx0XHR9XHJcblx0ICAgIFx0XHR9KX1cclxuXHJcblx0ICAgIFx0XHQgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT57XHJcblx0XHRcdCAgICAgIFx0ICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdCAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmluZGV4LnZhbHVlXHJcblx0XHRcdFx0XHQgICAgY29uc3QgcHJvcCA9IGUudGFyZ2V0LnByb3AudmFsdWVcclxuXHRcdFx0XHRcdCAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWwudmFsdWVcclxuXHJcblx0XHRcdFx0XHQgICAgbGV0IG5ld0RhdGEgPSB7Li4ucHJvcHMuZGF0YX1cclxuXHRcdFx0XHRcdCAgICBuZXdEYXRhLnF1ZXN0aW9uc1tpbmRleF1bcHJvcF0gPSB2YWxcclxuXHRcdFx0XHRcdCAgICB1cGRhdGUoaW5kZXgsbmV3RGF0YSlcclxuXHJcblx0ICAgIFx0XHQgICB9fT5cclxuXHQgICAgXHRcdCAgIFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaW5kZXhcIiB2YWx1ZT17aX0gLz5cclxuXHRcdFx0ICAgICAgICA8bGFiZWw+XHJcblx0XHRcdCAgICAgICAgICBLZXk6XHJcblx0XHRcdCAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJvcFwiIC8+XHJcblx0XHRcdCAgICAgICAgPC9sYWJlbD5cclxuXHRcdFx0ICBcdFx0PGxhYmVsPlxyXG5cdFx0XHQgICAgICAgICAgVmFsdWU6XHJcblx0XHRcdCAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidmFsXCIvPlxyXG5cdFx0XHQgICAgICAgIDwvbGFiZWw+XHJcblx0XHRcdCAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIitcIiAvPlxyXG5cdFx0XHQgICAgICA8L2Zvcm0+XHJcblxyXG5cdFx0XHQgICAgICA8aHIvPlxyXG5cdCAgICBcdFx0PC9saT5cclxuXHQgICAgfSl9XHJcblx0ICAgIDwvb2w+XHJcblxyXG5cdCAgICBcdDxidXR0b24gb25DbGljaz17ZnVuY3Rpb24oZSl7XHJcblx0ICAgIFx0XHRsZXQgbmV3RGF0YSA9IHsuLi5wcm9wcy5kYXRhfVxyXG5cdFx0XHQgICAgbmV3RGF0YS5xdWVzdGlvbnMucHVzaChxdWl6VGVtcGxhdGUucXVlc3Rpb25zWzBdKVxyXG5cdFx0XHQgICAgdXBkYXRlKGluZGV4LG5ld0RhdGEpXHJcblx0ICAgIFx0fX0+YWRkIG5ldyBxdWVzdGlvbjwvYnV0dG9uPlxyXG5cdCAgICBcdDwvPilcclxuXHQgICAgfVxyXG5cdCAgICBcclxuXHQgICAgfVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB0aW1lbGluZVRlbXBsYXRlID0geyB0eXBlOlwidGltZWxpbmVcIiwgdGl0bGU6XCJORVcgVElNRUxJTkVcIiwgZW50cmllczpbe1xyXG4gICAgICAgIFwiZGF0ZVwiOiBcImRhdGVcIixcclxuICAgICAgICBcImJvZHlcIjogXCJib2R5XCJcclxuICAgICAgfV0gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7IiwiZnVuY3Rpb24gU2VsZWN0TGVzc29uRm9ybSh7bGVzc29uLCBoYW5kbGVTZWxlY3RMZXNzb259KXtcclxuICByZXR1cm4gKDxkaXYgc3R5bGU9e3sgbWFyZ2luOlwiMTVweFwiLCB3aWR0aDpcIjEwMCVcIiwgdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICA8Zm9ybSBzdHlsZT17eyBiYWNrZ3JvdW5kOlwibm9uZVwifX0gb25TdWJtaXQ9e2hhbmRsZVNlbGVjdExlc3Nvbn0+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaWRcIiB2YWx1ZT17bGVzc29uLmlkfS8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7YmFja2dyb3VuZDpcIm5vbmVcIn19IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT17XCJMZXNzb24gXCIgKyBsZXNzb24uaWQgKyBcIiAoXCIrbGVzc29uLmNvdW50K1wiKVwifSAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+PC9kaXY+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RMZXNzb25Gb3JtIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGV4dGJvb2tcIjogXCJDb3Vyc2VfdGV4dGJvb2tfXzVibnVpXCIsXG5cdFwidGV4dGJvb2tCb2R5XCI6IFwiQ291cnNlX3RleHRib29rQm9keV9fMzc4UmZcIixcblx0XCJ0ZXh0Ym9va05hdlwiOiBcIkNvdXJzZV90ZXh0Ym9va05hdl9fcWhYdVJcIixcblx0XCJ0ZXh0Ym9va0NvbnRlbnRcIjogXCJDb3Vyc2VfdGV4dGJvb2tDb250ZW50X19nNi1PcFwiLFxuXHRcInRleHRib29rQXNpZGVcIjogXCJDb3Vyc2VfdGV4dGJvb2tBc2lkZV9fM2FUdWhcIlxufTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvUmV2ZWxhdGlvbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgZVN0eWxlcyBmcm9tICcuL0NvdXJzZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgU2VsZWN0TGVzc29uRm9ybSBmcm9tICcuLi9Db21tb24vU2VsZWN0TGVzc29uRm9ybSdcclxuaW1wb3J0IExpbmUsIHtsaW5lVHlwZXMsIHRlbXBsYXRlc30gZnJvbSAnLi4vQmxvY2tzL0xpbmUnXHJcblxyXG5jbGFzcyBDb3Vyc2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgXHRmaWxlOmZhbHNlLFxyXG4gICAgXHRsaW5lVHlwZXM6IGxpbmVUeXBlcyxcclxuICAgIFx0bGluZXM6W10sXHJcbiAgICAgIGxlc3NvbjogMSxcclxuICAgICAgbGVzc29uczpbXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7IC8qKi8gfVxyXG5cclxuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpe1xyXG5cclxuICBpZihuZXdQcm9wcy5yb3V0ZXIucXVlcnkuY291cnNlICE9PSB0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5jb3Vyc2UgfHwgdGhpcy5zdGF0ZS5saW5lcyA9PT0gdW5kZWZpbmVkKXtcclxuICAgIFxyXG4gICAgbGV0IGxpbmVzID0gW11cclxuICAgIGNvbnN0IGNvdXJzZSA9IG5ld1Byb3BzLnJvdXRlci5xdWVyeS5jb3Vyc2VcclxuXHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjb3Vyc2UpID09PSBudWxsKXtcclxuICAgICAgbGluZXMgPSBbXTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY291cnNlLCBKU09OLnN0cmluZ2lmeShsaW5lcykpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGxpbmVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjb3Vyc2UpKTtcclxuICAgICAgaWYobGluZXMgPT09IG51bGwpIGxpbmVzID0gW11cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbGluZXM6IGxpbmVzLFxyXG4gICAgICBsZXNzb25zOiB0aGlzLmdldExlc3NvbnMobGluZXMpXHJcbiAgICB9KVxyXG5cclxuICB9XHJcbn1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgY29uc3QgbGVzc29uID0gdGhpcy5zdGF0ZS5sZXNzb25cclxuICAgICAgY29uc3QgaGFuZGxlU2VsZWN0TGVzc29uID0gdGhpcy5oYW5kbGVTZWxlY3RMZXNzb24uYmluZCh0aGlzKVxyXG4gICAgICBjb25zdCBjb2x1bW5TdHlsZSA9IHtoZWlnaHQ6XCI1MDBweFwiLCBvdmVyZmxvdzpcInNjcm9sbFwifVxyXG5cclxuICAgIHJldHVybiAoXHJcblx0PGRpdj5cclxuXHQgICAgICA8SGVhZD5cclxuXHQgICAgICAgIDx0aXRsZT5Db3Vyc2UgfCBZb3V0aCBSZXZlbGF0aW9uIFN0dWR5PC90aXRsZT5cclxuXHQgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuXHQgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XHJcblx0ICAgICAgPC9IZWFkPlxyXG5cclxuXHRcdDxtYWluPlxyXG4gICAgPGJvZHkgY2xhc3NOYW1lPXtlU3R5bGVzLnRleHRib29rfT5cclxuICAgICAgPGhlYWRlcj48aDE+e3RoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmNvdXJzZT8gdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkuY291cnNlLnRvVXBwZXJDYXNlKCk6XCJcIn0gfCBMZXNzb24ge3RoaXMuc3RhdGUubGVzc29ufTwvaDE+PC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtlU3R5bGVzLnRleHRib29rQm9keX0+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtlU3R5bGVzLnRleHRib29rQ29udGVudH0+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5saW5lcy5tYXAoZnVuY3Rpb24obGluZSwgaSl7XHJcbiAgICAgICAgICAgIGlmKGxpbmUubGVzc29uID09PSBsZXNzb24pe1xyXG4gICAgICAgICAgICAgIHJldHVybiA8TGluZSBrZXk9e2l9IGluZGV4PXtpfSBkYXRhPXtsaW5lfSByZWFkPXt0cnVlfSBzdHlsZT17Y29sdW1uU3R5bGV9Lz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2VTdHlsZXMudGV4dGJvb2tOYXZ9PlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUubGVzc29ucy5tYXAoZnVuY3Rpb24obGVzcywgayl7XHJcbiAgICAgICAgICAgIHJldHVybiA8U2VsZWN0TGVzc29uRm9ybSBrZXk9e2t9IGxlc3Nvbj17bGVzc30gaGFuZGxlU2VsZWN0TGVzc29uPXtoYW5kbGVTZWxlY3RMZXNzb259Lz5cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e2VTdHlsZXMudGV4dGJvb2tBc2lkZX0+PC9hc2lkZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxmb290ZXI+PC9mb290ZXI+XHJcbiAgICA8L2JvZHk+XHJcblx0XHQ8L21haW4+XHJcblxyXG5cclxuPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbmhhbmRsZVNlbGVjdExlc3NvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWQudmFsdWVcclxuICAgIGxldCBuZXdTdGF0ZSA9IHsuLi50aGlzLnN0YXRlfVxyXG4gICAgbmV3U3RhdGUubGVzc29uID0gcGFyc2VJbnQoaWQpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsuLi5uZXdTdGF0ZX0pXHJcbn1cclxuXHJcbmdldExlc3NvbnMobGluZXMpe1xyXG5cclxuICBsZXQgbGVzc29ucyA9IFtdXHJcbiAgbGV0IGk7XHJcbiAgbGV0IGlkID0gMDtcclxuICBsZXQgbGluZGV4ID0gMDtcclxuXHJcbiAgZm9yKGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgaWQgPSBwYXJzZUludChsaW5lc1tpXS5sZXNzb24pXHJcbiAgICBsaW5kZXggPSBpZC0xXHJcblxyXG4gICAgaWYobGVzc29uc1tsaW5kZXhdID09PSB1bmRlZmluZWQpe1xyXG4gICAgICBsZXNzb25zW2xpbmRleF0gPSB7aWQ6aWQsIGNvdW50OjF9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgbGVzc29uc1tsaW5kZXhdID0ge2lkOmlkLCBjb3VudDpsZXNzb25zW2xpbmRleF0uY291bnQrMX1cclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGxlc3NvbnNcclxufVxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihDb3Vyc2UpIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3BlY2lhbC1vdXRsaW5lXCI6IFwiUmV2ZWxhdGlvbl9zcGVjaWFsLW91dGxpbmVfXzFXN2UwXCIsXG5cdFwiY29sbGFwc2libGVcIjogXCJSZXZlbGF0aW9uX2NvbGxhcHNpYmxlX19Kc2FqTlwiLFxuXHRcImFjdGl2ZVwiOiBcIlJldmVsYXRpb25fYWN0aXZlX18xMnZEWFwiLFxuXHRcImNvbnRlbnRcIjogXCJSZXZlbGF0aW9uX2NvbnRlbnRfXzJJcExXXCIsXG5cdFwid2hvbGUtb2YtYm9va1wiOiBcIlJldmVsYXRpb25fd2hvbGUtb2YtYm9va19fMS16WG1cIixcblx0XCJhbnN3ZXJcIjogXCJSZXZlbGF0aW9uX2Fuc3dlcl9fMmMzbFlcIixcblx0XCJhXCI6IFwiUmV2ZWxhdGlvbl9hX18yTDdidVwiLFxuXHRcInF1ZXN0aW9uXCI6IFwiUmV2ZWxhdGlvbl9xdWVzdGlvbl9fMXJ4WExcIixcblx0XCJxXCI6IFwiUmV2ZWxhdGlvbl9xX18yeWJ2OFwiLFxuXHRcInJlZlwiOiBcIlJldmVsYXRpb25fcmVmX18xRF84b1wiLFxuXHRcInF1ZXN0aW9uTGFiZWxcIjogXCJSZXZlbGF0aW9uX3F1ZXN0aW9uTGFiZWxfXzNSNVNwXCIsXG5cdFwicXVlc3Rpb25zXCI6IFwiUmV2ZWxhdGlvbl9xdWVzdGlvbnNfXzFra2U1XCIsXG5cdFwib3B0aW9uXCI6IFwiUmV2ZWxhdGlvbl9vcHRpb25fXzNiSXlIXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFya2Rvd24vd2l0aC1odG1sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9