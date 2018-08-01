/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _webview = __webpack_require__(/*! ./webview */ \"./src/webview/index.js\");\n\nvar _webview2 = _interopRequireDefault(_webview);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (plus) {\n\tdocument.getElementById('share').addEventListener('click', function () {\n\t\tplus.share.sendWithSystem({\n\t\t\tcontent: 'wangjin\\'s first app',\n\t\t\thref: 'http://www.baidu.com'\n\t\t});\n\t});\n\tdocument.getElementById('camera').addEventListener('click', function () {\n\t\tvar camera = plus.camera.getCamera(2);\n\t\tvar resolution = camera.supportedImageResolutions[0];\n\t\tvar format = camera.supportedImageFormats[0];\n\t\tcamera.captureImage(function (path) {\n\t\t\tconsole.log(path);\n\t\t}, function (err) {\n\t\t\tconsole.log(err);\n\t\t}, {\n\t\t\tresolution: resolution,\n\t\t\tformat: format\n\t\t});\n\t});\n\tdocument.getElementById('toast').addEventListener('click', function () {\n\t\tplus.nativeUI.toast('haha 这是一个toast信息');\n\t});\n\tdocument.getElementById('pay').addEventListener('click', function () {\n\t\tplus.payment.getChannels(function (channels) {\n\t\t\tconsole.log(channels);\n\t\t}, function (err) {\n\t\t\tconsole.log(err);\n\t\t});\n\t});\n\tdocument.getElementById('fullscreen').addEventListener('click', function () {\n\t\tplus.navigator.setFullscreen(!plus.navigator.isFullscreen());\n\t});\n\tdocument.getElementById('turnpage').addEventListener('click', function () {\n\t\t_webview2.default.open('http://www.loveprob.com/home');\n\t});\n};\n\n//# sourceURL=webpack:///./src/init.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _init = __webpack_require__(/*! ./init */ \"./src/init.js\");\n\nvar _init2 = _interopRequireDefault(_init);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener('plusready', function () {\n\t(0, _init2.default)(plus);\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/webview/index.js":
/*!******************************!*\
  !*** ./src/webview/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n// 已打开的webview，最多同时打开3个\nvar opened = [];\n// 判断是否已打开\nvar isOpened = function isOpened(url) {\n\tfor (var i = 0; i < opened.length; i++) {\n\t\tvar webviewInfo = opened[i];\n\t\tif (webviewInfo.url === url) {\n\t\t\treturn webviewInfo.webview;\n\t\t}\n\t}\n\treturn false;\n};\n// 缓存webview\nvar cacheWebview = function cacheWebview(url, webview) {\n\tif (opened.length >= 3) {\n\t\topened.splice(0, 1);\n\t}\n\topened.push({ url: url, webview: webview });\n};\n// 打开一个webview窗口\nvar open = function open(url) {\n\tvar wb = void 0;\n\tvar cachedWebview = isOpened(url);\n\tif (openedWebview) {\n\t\tcachedWebview.show();\n\t} else {\n\t\twb = plus.webview.create(url);\n\t\twb.addEventListener('loading', function () {\n\t\t\tplus.nativeUI.showWaiting();\n\t\t});\n\t\twb.addEventListener('loaded', function () {\n\t\t\tplus.nativeUI.closeWaiting();\n\t\t\twb.show();\n\t\t\tcacheWebview(url, wb);\n\t\t});\n\t\twb.addEventListener('error', function () {\n\t\t\tplus.nativeUI.closeWaiting();\n\t\t\tplus.nativeUI.toast('加载失败，请检查您的网络');\n\t\t});\n\t}\n};\nexports.default = { open: open };\n\n//# sourceURL=webpack:///./src/webview/index.js?");

/***/ })

/******/ });