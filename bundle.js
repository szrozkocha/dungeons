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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _engine_webgl_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/webgl/Animation */ \"./src/engine/webgl/Animation.ts\");\n/* harmony import */ var _engine_webgl_Sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/webgl/Sprite */ \"./src/engine/webgl/Sprite.ts\");\n/* harmony import */ var _engine_GameWithLoop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/GameWithLoop */ \"./src/engine/GameWithLoop.ts\");\n/* harmony import */ var _engine_entity_StaticEntity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/entity/StaticEntity */ \"./src/engine/entity/StaticEntity.ts\");\n/* harmony import */ var _engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine/input/InputSignal */ \"./src/engine/input/InputSignal.ts\");\n/* harmony import */ var _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./engine/entity/wall/Wall */ \"./src/engine/entity/wall/Wall.ts\");\n/* harmony import */ var _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./engine/entity/wall/WallType */ \"./src/engine/entity/wall/WallType.ts\");\n/* harmony import */ var _engine_webgl_Translatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./engine/webgl/Translatable */ \"./src/engine/webgl/Translatable.ts\");\n/* harmony import */ var _engine_entity_FireColumn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./engine/entity/FireColumn */ \"./src/engine/entity/FireColumn.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Game extends _engine_GameWithLoop__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\r\n    constructor(render, inputManager) {\r\n        super(60);\r\n        this.render = render;\r\n        this.inputManager = inputManager;\r\n        this.entities = [];\r\n        this.createFloors();\r\n        this.createWalls();\r\n        this.entities.push(new _engine_entity_FireColumn__WEBPACK_IMPORTED_MODULE_8__[\"default\"](-20, -30, 1, 0), new _engine_entity_FireColumn__WEBPACK_IMPORTED_MODULE_8__[\"default\"](20, -30, 1, 0), new _engine_entity_FireColumn__WEBPACK_IMPORTED_MODULE_8__[\"default\"](-20, 10, 1, 0), new _engine_entity_FireColumn__WEBPACK_IMPORTED_MODULE_8__[\"default\"](20, 10, 1, 0));\r\n        this.entities.push(new _engine_entity_StaticEntity__WEBPACK_IMPORTED_MODULE_3__[\"default\"](0, 0, 1, 0, new _engine_webgl_Animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([\r\n            \"bat_up\",\r\n            \"bat_down\",\r\n        ], 20)));\r\n        inputManager.addMapping(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].UP, \"w\");\r\n        inputManager.addMapping(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].RIGHT, \"d\");\r\n        inputManager.addMapping(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].DOWN, \"s\");\r\n        inputManager.addMapping(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].LEFT, \"a\");\r\n    }\r\n    tick(frame) {\r\n        const x = +this.inputManager.getStatus(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].LEFT) * -1 + +this.inputManager.getStatus(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].RIGHT);\r\n        const y = +this.inputManager.getStatus(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].UP) * -1 + +this.inputManager.getStatus(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].DOWN);\r\n        this.render.move(x, y);\r\n        for (const sprite of this.entities) {\r\n            sprite.tick(frame);\r\n        }\r\n    }\r\n    draw() {\r\n        this.render.clear();\r\n        this.entities.sort(_engine_webgl_Translatable__WEBPACK_IMPORTED_MODULE_7__[\"default\"].compare);\r\n        for (const sprite of this.entities) {\r\n            this.render.drawEntity(sprite);\r\n        }\r\n    }\r\n    createFloors() {\r\n        for (let x = -1; x <= 1; ++x) {\r\n            for (let y = -4; y <= 4; ++y) {\r\n                this.entities.push(new _engine_entity_StaticEntity__WEBPACK_IMPORTED_MODULE_3__[\"default\"](x * 16, y * 16, 0, 0, new _engine_webgl_Sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"floor\")));\r\n            }\r\n        }\r\n        for (let x = -4; x <= -2; ++x) {\r\n            for (let y = -1; y <= 1; ++y) {\r\n                this.entities.push(new _engine_entity_StaticEntity__WEBPACK_IMPORTED_MODULE_3__[\"default\"](x * 16, y * 16, 0, 0, new _engine_webgl_Sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"floor\")));\r\n            }\r\n        }\r\n        for (let x = 2; x <= 4; ++x) {\r\n            for (let y = -1; y <= 1; ++y) {\r\n                this.entities.push(new _engine_entity_StaticEntity__WEBPACK_IMPORTED_MODULE_3__[\"default\"](x * 16, y * 16, 0, 0, new _engine_webgl_Sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"floor\")));\r\n            }\r\n        }\r\n    }\r\n    createWalls() {\r\n        for (let x = -4; x <= -3; ++x) {\r\n            this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](x * 16, -40, -1, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].TOP));\r\n        }\r\n        for (let x = -1; x <= 1; ++x) {\r\n            this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](x * 16, -5 * 16 - 8, -1, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].TOP));\r\n        }\r\n        for (let x = 3; x <= 4; ++x) {\r\n            this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](x * 16, -40, -1, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].TOP));\r\n        }\r\n        for (let x = -4; x <= -3; ++x) {\r\n            this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](x * 16, 16, 2, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].BOTTOM));\r\n        }\r\n        for (let x = -1; x <= 1; ++x) {\r\n            this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](x * 16, 4 * 16, 2, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].BOTTOM));\r\n        }\r\n        for (let x = 3; x <= 4; ++x) {\r\n            this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](x * 16, 16, 2, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].BOTTOM));\r\n        }\r\n        for (let y = -5; y <= -4; ++y) {\r\n            this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](-32, y * 16, -1, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].LEFT));\r\n        }\r\n        for (let y = -2; y <= 0; ++y) {\r\n            this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](-5 * 16, y * 16, -1, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].LEFT));\r\n        }\r\n        for (let y = 2; y <= 3; ++y) {\r\n            this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](-32, y * 16, -1, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].LEFT));\r\n        }\r\n        for (let y = -5; y <= -4; ++y) {\r\n            this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](32, y * 16, -1, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].RIGHT));\r\n        }\r\n        for (let y = -2; y <= 0; ++y) {\r\n            this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](5 * 16, y * 16, -1, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].RIGHT));\r\n        }\r\n        for (let y = 2; y <= 3; ++y) {\r\n            this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](32, y * 16, -1, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].RIGHT));\r\n        }\r\n        this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](-5 * 16, -48, -1, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CONCAVE_CORNER_TOP_LEFT));\r\n        this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](-5 * 16, 16, 2, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CONCAVE_CORNER_BOTTOM_LEFT));\r\n        this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](-32, -6 * 16, -1, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CONCAVE_CORNER_TOP_LEFT));\r\n        this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](-32, 4 * 16, 2, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CONCAVE_CORNER_BOTTOM_LEFT));\r\n        this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](32, -6 * 16, -1, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CONCAVE_CORNER_TOP_RIGHT));\r\n        this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](32, 4 * 16, 2, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CONCAVE_CORNER_BOTTOM_RIGHT));\r\n        this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](5 * 16, -48, -1, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CONCAVE_CORNER_TOP_RIGHT));\r\n        this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](5 * 16, 16, 2, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CONCAVE_CORNER_BOTTOM_RIGHT));\r\n        this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](-2 * 16, -40, -1, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CONVEX_CORNER_TOP_LEFT));\r\n        this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](2 * 16, -40, -1, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CONVEX_CORNER_TOP_RIGHT));\r\n        this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](2 * 16, 16, 2, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CONVEX_CORNER_BOTTOM_RIGHT));\r\n        this.entities.push(new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](-2 * 16, 16, 2, 0, _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CONVEX_CORNER_BOTTOM_LEFT));\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Game.ts?");

/***/ }),

/***/ "./src/data/shaders/fragment.glsl":
/*!****************************************!*\
  !*** ./src/data/shaders/fragment.glsl ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"varying highp vec2 vTextureCoord;\\r\\n\\r\\nuniform sampler2D uSampler;\\r\\nuniform highp float uRotation;\\r\\n\\r\\nuniform highp float uMaxSize;\\r\\nuniform highp vec2 uInnerPos;\\r\\n\\r\\nvoid main() {\\r\\n    highp vec2 translated = floor(vTextureCoord * uMaxSize) + 0.5;\\r\\n    highp vec2 moved = translated - uMaxSize / 2.0;\\r\\n    highp vec2 rotated = vec2(moved.x * cos(uRotation) - moved.y * sin(uRotation), moved.x * sin(uRotation) + moved.y * cos(uRotation));\\r\\n    highp vec2 movedBack = rotated + uMaxSize / 2.0;\\r\\n    highp vec2 textureCoord = (movedBack - uInnerPos) / (uMaxSize - 2.0 * uInnerPos);\\r\\n\\r\\n    if(0.0 <= textureCoord.x && textureCoord.x <= 1.0 &&\\r\\n    0.0 <= textureCoord.y && textureCoord.y <= 1.0) {\\r\\n        gl_FragColor = texture2D(uSampler, textureCoord);\\r\\n    } else {\\r\\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\\r\\n    }\\r\\n}\");\n\n//# sourceURL=webpack:///./src/data/shaders/fragment.glsl?");

/***/ }),

/***/ "./src/data/shaders/vertex.glsl":
/*!**************************************!*\
  !*** ./src/data/shaders/vertex.glsl ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"attribute vec2 aPosition;\\r\\n\\r\\nuniform float uZ;\\r\\nuniform vec2 uPosition;\\r\\nuniform float uScale;\\r\\nuniform float uRatio;\\r\\n\\r\\nuniform highp float uMaxSize;\\r\\n\\r\\nvarying highp vec2 vTextureCoord;\\r\\n\\r\\nvoid main() {\\r\\n    vec2 translated = floor(aPosition * uMaxSize);\\r\\n    vec2 moved = translated + uPosition - uMaxSize / 2.0;\\r\\n    vec2 scaled = moved / uScale;\\r\\n    vec2 transformed = scaled * vec2(1.0, uRatio);\\r\\n    vec2 mirrored = transformed * vec2(1.0, -1.0);\\r\\n\\r\\n    gl_Position = vec4(mirrored, (-uZ + 128.0) / 256.0, 1.0);\\r\\n\\r\\n    vTextureCoord = aPosition;\\r\\n}\");\n\n//# sourceURL=webpack:///./src/data/shaders/vertex.glsl?");

/***/ }),

/***/ "./src/data/textrues/descriptor/fireColumn.json":
/*!******************************************************!*\
  !*** ./src/data/textrues/descriptor/fireColumn.json ***!
  \******************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"fire_column_0\\\",\\\"x\\\":112,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"fire_column_1\\\",\\\"x\\\":128,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"fire_column_2\\\",\\\"x\\\":144,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"fire_column_3\\\",\\\"x\\\":160,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"fire_column_4\\\",\\\"x\\\":176,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"fire_column_5\\\",\\\"x\\\":192,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"fire_column_6\\\",\\\"x\\\":208,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"fire_column_7\\\",\\\"x\\\":224,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":32}]\");\n\n//# sourceURL=webpack:///./src/data/textrues/descriptor/fireColumn.json?");

/***/ }),

/***/ "./src/data/textrues/descriptor/knight.json":
/*!**************************************************!*\
  !*** ./src/data/textrues/descriptor/knight.json ***!
  \**************************************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"knight_top\\\",\\\"x\\\":0,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"knight_down\\\",\\\"x\\\":0,\\\"y\\\":16,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"knight_down_right\\\",\\\"x\\\":0,\\\"y\\\":32,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"knight_down_left\\\",\\\"x\\\":0,\\\"y\\\":48,\\\"width\\\":16,\\\"height\\\":16}]\");\n\n//# sourceURL=webpack:///./src/data/textrues/descriptor/knight.json?");

/***/ }),

/***/ "./src/data/textrues/descriptor/others.json":
/*!**************************************************!*\
  !*** ./src/data/textrues/descriptor/others.json ***!
  \**************************************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"floor\\\",\\\"x\\\":16,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"sword\\\",\\\"x\\\":16,\\\"y\\\":16,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"bat_up\\\",\\\"x\\\":96,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"bat_down\\\",\\\"x\\\":96,\\\"y\\\":16,\\\"width\\\":16,\\\"height\\\":16}]\");\n\n//# sourceURL=webpack:///./src/data/textrues/descriptor/others.json?");

/***/ }),

/***/ "./src/data/textrues/descriptor/wall.json":
/*!************************************************!*\
  !*** ./src/data/textrues/descriptor/wall.json ***!
  \************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"wall_top\\\",\\\"x\\\":0,\\\"y\\\":64,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"wall_left\\\",\\\"x\\\":16,\\\"y\\\":64,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_right\\\",\\\"x\\\":16,\\\"y\\\":80,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_bottom\\\",\\\"x\\\":32,\\\"y\\\":64,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_concave_corner_top_left\\\",\\\"x\\\":32,\\\"y\\\":80,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_concave_corner_top_right\\\",\\\"x\\\":48,\\\"y\\\":64,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_concave_corner_bottom_left\\\",\\\"x\\\":48,\\\"y\\\":80,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_concave_corner_bottom_right\\\",\\\"x\\\":64,\\\"y\\\":64,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_convex_corner_bottom_left\\\",\\\"x\\\":64,\\\"y\\\":80,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_convex_corner_top_left\\\",\\\"x\\\":80,\\\"y\\\":64,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"wall_convex_corner_top_right\\\",\\\"x\\\":96,\\\"y\\\":64,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"wall_convex_corner_bottom_right\\\",\\\"x\\\":112,\\\"y\\\":64,\\\"width\\\":16,\\\"height\\\":16}]\");\n\n//# sourceURL=webpack:///./src/data/textrues/descriptor/wall.json?");

/***/ }),

/***/ "./src/data/textrues/textures.png":
/*!****************************************!*\
  !*** ./src/data/textrues/textures.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAEACAMAAADyTj5VAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAABQMERwRFx0SGBgaHhUZMiEUGyMVHSsSHzsaGiQXKSEdIyoeIiwbJDAdJzUnHzApHyUoLisvNjojLzskLzgmLTskMDszKDs+KDE1PTg4OAorTSYhRSwlUCI/TTU1YTRHJx5Bdh9RdSRSaTVSYUoYGEIbLlAqFkAmM0EnNEIoNUcuOkkhMUUyJEA9NkU9O0oxPEsyPVYlL1Y/KnUfIHI3F2siImEpNWktMm05MnozM1E5QVI6QkU9a0Yxcloxc09cN1BUNkR3M11iP157N2ZHKWFML3tCI3pZN01NTVpNRl9LTUJCa1BQeGtbTmJdUnxeRmhuRnNlXnRmX3J4UXVnYHd6dytjgCxmgzN3mS55snU8hkhwhVF+lmRGpER8z2SUOGSRVFqMpmqMnHqWo36erVujx5ImO6ozM7YvMYVHG59aOo9+KLtVM6pmIrh8LL97P4dAQIRhQY1oRYBxXYJ3ZIZ1bYd2boh3b4d9eJF/a6pJUaJtSqR9W/8AAMN9KMx3M9BGSJRKnIKKWIqSXa+AVaCMY6m3V8iUN8GAZ86QacufdsyqRM+8RNa8a9vCRNnIaNzFf5+iiJmqmYmsvou0uL2clKuxhqampo670aPBl6vCzcSTh9mvg9nFiczMqszMvsTSuNbLtuTamebRvMfHx8LS3tHRwt7Wxcja49Xo8OXHx+TgxvDw3evr6/D3+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJWzJKwAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA6/AAAOvwE4BVMkAAA0oElEQVR4Xu2dj4McR33lTSWsICRjTDAmATkKgr1jk8NYcXxhs3aQsHyJjxh0uo0tbDikgG2SeCPf2bFyAmLHEHwgskngIBxnbnEIBIPMn6h77/t99bN7pmd2ZqW16c/udPWrqu6e6e/rquofO3vTtYaNhrBlWMLJTQuwsb19Sas9rHxR6dxoV3ii2Q1PbEa7bSrt8v+5QZu5bgwboEg4UWzn4vVogGqPlDuHpJlZtMtjldzrMbnOzGOASUz4fhXbuXjdGiDukTg7MSxvmHp5rNF+bd2eXFeGDdCg2M7Fxtmzz2q1h5WFDaDd0HD77bdrTrttKqqWsJUeZgNsTWKv5VPFdi780+Z9xjlt5rCwjzHABHsCOyV35pNw+0MPPQQH3Aql3TYV1EflSNjSao0DNMDUHT9oAOK29qliOxfsAsK7Q7jn6NGj99xzFDP3vOYNkPdEShB/OBsOcD1IuD39XLc+P1yYsucXMwD6LsV2LtwA7w5XYYCrV48i/q8fA6DPR9dvKjD+nHrnPghqxp8DM0B7xIcLj/bv+oMdA7wODaDdUHb7CGSeardNxWvGn4PqEsMnP1mvef8G8H4u9Xe3KrZzwUEgDIDwG4j/a98Avh+qbj88NEEkJ+jQw9at2m1Tsfrp59ZqDLAywoVPfrIO+P4NIOTssFgXQLujBTh69fJltAKzxgCbSqfSVBisPyf76gKwH8pufwIHTBB/P08e5sDHAOECDVBFfCkD6KyVLGiA7W20ABj8XwZH8QZCMkAbwM2Lmom0AZ9tgH37YT8GwP7AwUvYiTODA3vEfz4DVGcB0wzQ6cMX0Ii/GaAMeWMAvnmfO+gxwBY3pEWx9vQ+24hdvFjntOWtQRrZNUCd09orsd8xQNntV2i3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\"\n\n//# sourceURL=webpack:///./src/data/textrues/textures.png?");

/***/ }),

/***/ "./src/engine/GameWithLoop.ts":
/*!************************************!*\
  !*** ./src/engine/GameWithLoop.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameWithLoop; });\nclass GameWithLoop {\r\n    constructor(fps) {\r\n        this.lastFrameTimeMs = 0;\r\n        this.delta = 0;\r\n        this.fps = 1000 / fps;\r\n        this.frame = 0;\r\n    }\r\n    update(timestamp) {\r\n        const timePerFrame = timestamp - this.lastFrameTimeMs;\r\n        const fps = 1 / (timePerFrame / 1000);\r\n        GameWithLoop.updateFps(fps);\r\n        this.delta += timePerFrame;\r\n        this.lastFrameTimeMs = timestamp;\r\n        while (this.delta >= this.fps) {\r\n            this.tick(this.frame);\r\n            this.delta -= this.fps;\r\n            ++this.frame;\r\n        }\r\n        this.draw();\r\n    }\r\n    static updateFps(fps) {\r\n        document.getElementById(\"fps\").innerText = Math.round(fps) + \"FPS\";\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/GameWithLoop.ts?");

/***/ }),

/***/ "./src/engine/entity/Entity.ts":
/*!*************************************!*\
  !*** ./src/engine/entity/Entity.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Entity; });\n/* harmony import */ var _webgl_Translatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl/Translatable */ \"./src/engine/webgl/Translatable.ts\");\n\r\nclass Entity extends _webgl_Translatable__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/entity/Entity.ts?");

/***/ }),

/***/ "./src/engine/entity/FireColumn.ts":
/*!*****************************************!*\
  !*** ./src/engine/entity/FireColumn.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FireColumn; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ \"./src/engine/entity/Entity.ts\");\n/* harmony import */ var _webgl_Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/Animation */ \"./src/engine/webgl/Animation.ts\");\n\r\n\r\nclass FireColumn extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(x, y, z, rotation) {\r\n        super(x, y, z, rotation);\r\n        this.animation = new _webgl_Animation__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([\r\n            \"fire_column_0\",\r\n            \"fire_column_1\",\r\n            \"fire_column_2\",\r\n            \"fire_column_3\",\r\n            \"fire_column_4\",\r\n            \"fire_column_5\",\r\n            \"fire_column_6\",\r\n            \"fire_column_7\",\r\n        ], 10);\r\n    }\r\n    getTexture() {\r\n        return this.animation.getTexture();\r\n    }\r\n    tick() {\r\n        this.animation.tick();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/entity/FireColumn.ts?");

/***/ }),

/***/ "./src/engine/entity/StaticEntity.ts":
/*!*******************************************!*\
  !*** ./src/engine/entity/StaticEntity.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StaticEntity; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ \"./src/engine/entity/Entity.ts\");\n\r\nclass StaticEntity extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(x, y, z, rotation, processable) {\r\n        super(x, y, z, rotation);\r\n        this.processable = processable;\r\n    }\r\n    getTexture() {\r\n        return this.processable.getTexture();\r\n    }\r\n    tick(frame) {\r\n        this.processable.tick(frame);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/entity/StaticEntity.ts?");

/***/ }),

/***/ "./src/engine/entity/wall/Wall.ts":
/*!****************************************!*\
  !*** ./src/engine/entity/wall/Wall.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Wall; });\n/* harmony import */ var _WallType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WallType */ \"./src/engine/entity/wall/WallType.ts\");\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Entity */ \"./src/engine/entity/Entity.ts\");\n\r\n\r\nclass Wall extends _Entity__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n    constructor(x, y, z, rotation, wallType) {\r\n        super(x, y, z, rotation);\r\n        switch (wallType) {\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LEFT:\r\n                this.texture = \"wall_left\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RIGHT:\r\n                this.texture = \"wall_right\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BOTTOM:\r\n                this.texture = \"wall_bottom\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONCAVE_CORNER_TOP_LEFT:\r\n                this.texture = \"wall_concave_corner_top_left\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONCAVE_CORNER_TOP_RIGHT:\r\n                this.texture = \"wall_concave_corner_top_right\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONCAVE_CORNER_BOTTOM_LEFT:\r\n                this.texture = \"wall_concave_corner_bottom_left\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONCAVE_CORNER_BOTTOM_RIGHT:\r\n                this.texture = \"wall_concave_corner_bottom_right\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONVEX_CORNER_BOTTOM_LEFT:\r\n                this.texture = \"wall_convex_corner_bottom_left\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONVEX_CORNER_TOP_LEFT:\r\n                this.texture = \"wall_convex_corner_top_left\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONVEX_CORNER_TOP_RIGHT:\r\n                this.texture = \"wall_convex_corner_top_right\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONVEX_CORNER_BOTTOM_RIGHT:\r\n                this.texture = \"wall_convex_corner_bottom_right\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TOP:\r\n            default:\r\n                this.texture = \"wall_top\";\r\n        }\r\n    }\r\n    getTexture() {\r\n        return this.texture;\r\n    }\r\n    tick() {\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/entity/wall/Wall.ts?");

/***/ }),

/***/ "./src/engine/entity/wall/WallType.ts":
/*!********************************************!*\
  !*** ./src/engine/entity/wall/WallType.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar WallType;\r\n(function (WallType) {\r\n    WallType[\"TOP\"] = \"TOP\";\r\n    WallType[\"LEFT\"] = \"LEFT\";\r\n    WallType[\"RIGHT\"] = \"RIGHT\";\r\n    WallType[\"BOTTOM\"] = \"BOTTOM\";\r\n    WallType[\"CONCAVE_CORNER_TOP_LEFT\"] = \"CONCAVE_CORNER_TOP_LEFT\";\r\n    WallType[\"CONCAVE_CORNER_TOP_RIGHT\"] = \"CONCAVE_CORNER_TOP_RIGHT\";\r\n    WallType[\"CONCAVE_CORNER_BOTTOM_LEFT\"] = \"CONCAVE_CORNER_BOTTOM_LEFT\";\r\n    WallType[\"CONCAVE_CORNER_BOTTOM_RIGHT\"] = \"CONCAVE_CORNER_BOTTOM_RIGHT\";\r\n    WallType[\"CONVEX_CORNER_BOTTOM_LEFT\"] = \"CONVEX_CORNER_BOTTOM_LEFT\";\r\n    WallType[\"CONVEX_CORNER_TOP_LEFT\"] = \"CONVEX_CORNER_TOP_LEFT\";\r\n    WallType[\"CONVEX_CORNER_TOP_RIGHT\"] = \"CONVEX_CORNER_TOP_RIGHT\";\r\n    WallType[\"CONVEX_CORNER_BOTTOM_RIGHT\"] = \"CONVEX_CORNER_BOTTOM_RIGHT\";\r\n})(WallType || (WallType = {}));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (WallType);\r\n\n\n//# sourceURL=webpack:///./src/engine/entity/wall/WallType.ts?");

/***/ }),

/***/ "./src/engine/exception/BaseException.ts":
/*!***********************************************!*\
  !*** ./src/engine/exception/BaseException.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseException; });\nclass BaseException {\r\n    constructor(message) {\r\n        this.message = message;\r\n    }\r\n    getMessage() {\r\n        return this.message;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/exception/BaseException.ts?");

/***/ }),

/***/ "./src/engine/exception/GlException.ts":
/*!*********************************************!*\
  !*** ./src/engine/exception/GlException.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GlException; });\n/* harmony import */ var _BaseException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseException */ \"./src/engine/exception/BaseException.ts\");\n\r\nclass GlException extends _BaseException__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(message) {\r\n        super(message);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/exception/GlException.ts?");

/***/ }),

/***/ "./src/engine/exception/HtmlException.ts":
/*!***********************************************!*\
  !*** ./src/engine/exception/HtmlException.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HtmlException; });\n/* harmony import */ var _BaseException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseException */ \"./src/engine/exception/BaseException.ts\");\n\r\nclass HtmlException extends _BaseException__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(message) {\r\n        super(message);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/exception/HtmlException.ts?");

/***/ }),

/***/ "./src/engine/input/InputManager.ts":
/*!******************************************!*\
  !*** ./src/engine/input/InputManager.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputManager; });\n/* harmony import */ var _InputSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputSignal */ \"./src/engine/input/InputSignal.ts\");\n\r\nclass InputManager {\r\n    constructor() {\r\n        this.states = new Map();\r\n        this.mapping = new Map();\r\n        for (let item in _InputSignal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n            if (isNaN(Number(item))) {\r\n                this.states.set(item, false);\r\n            }\r\n        }\r\n    }\r\n    getStatus(inputSignal) {\r\n        return this.states.get(inputSignal);\r\n    }\r\n    addMapping(inputSignal, key) {\r\n        this.mapping.set(key, inputSignal);\r\n    }\r\n    onKeyDown(event) {\r\n        this.changeKey(event, true);\r\n    }\r\n    onKeyUp(event) {\r\n        this.changeKey(event, false);\r\n    }\r\n    changeKey(event, value) {\r\n        const inputSignal = this.mapping.get(event.key);\r\n        if (inputSignal !== undefined) {\r\n            this.states.set(inputSignal, value);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/input/InputManager.ts?");

/***/ }),

/***/ "./src/engine/input/InputSignal.ts":
/*!*****************************************!*\
  !*** ./src/engine/input/InputSignal.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar InputSignal;\r\n(function (InputSignal) {\r\n    InputSignal[\"LEFT\"] = \"LEFT\";\r\n    InputSignal[\"UP\"] = \"UP\";\r\n    InputSignal[\"RIGHT\"] = \"RIGHT\";\r\n    InputSignal[\"DOWN\"] = \"DOWN\";\r\n    InputSignal[\"ATTACK\"] = \"ATTACK\";\r\n    InputSignal[\"MOUSE_LEFT\"] = \"MOUSE_LEFT\";\r\n    InputSignal[\"MOUSE_RIGHT\"] = \"MOUSE_RIGHT\";\r\n    InputSignal[\"MOUSE_CENTER\"] = \"MOUSE_CENTER\";\r\n})(InputSignal || (InputSignal = {}));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputSignal);\r\n\n\n//# sourceURL=webpack:///./src/engine/input/InputSignal.ts?");

/***/ }),

/***/ "./src/engine/webgl/Animation.ts":
/*!***************************************!*\
  !*** ./src/engine/webgl/Animation.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Animation; });\nclass Animation {\r\n    constructor(textures, tpf) {\r\n        this.textures = textures;\r\n        this.tpf = tpf;\r\n        this.activeTexture = 0;\r\n        this.activeFrames = 0;\r\n    }\r\n    getTexture() {\r\n        return this.textures[this.activeTexture];\r\n    }\r\n    tick() {\r\n        ++this.activeFrames;\r\n        if (this.activeFrames >= this.tpf) {\r\n            this.activeFrames = 0;\r\n            ++this.activeTexture;\r\n            if (this.activeTexture >= this.textures.length) {\r\n                this.activeTexture = 0;\r\n            }\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/webgl/Animation.ts?");

/***/ }),

/***/ "./src/engine/webgl/Render.ts":
/*!************************************!*\
  !*** ./src/engine/webgl/Render.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Render; });\n/* harmony import */ var _exception_HtmlException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exception/HtmlException */ \"./src/engine/exception/HtmlException.ts\");\n/* harmony import */ var _exception_GlException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exception/GlException */ \"./src/engine/exception/GlException.ts\");\n/* harmony import */ var _SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpriteShaderProgram */ \"./src/engine/webgl/SpriteShaderProgram.ts\");\n/* harmony import */ var _TextureManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextureManager */ \"./src/engine/webgl/TextureManager.ts\");\n/* harmony import */ var _data_shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/shaders/vertex.glsl */ \"./src/data/shaders/vertex.glsl\");\n/* harmony import */ var _data_shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/shaders/fragment.glsl */ \"./src/data/shaders/fragment.glsl\");\n/* harmony import */ var _Translatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Translatable */ \"./src/engine/webgl/Translatable.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Render extends _Translatable__WEBPACK_IMPORTED_MODULE_6__[\"default\"] {\r\n    constructor(canvasId, textures) {\r\n        super(0, 0, 0, 0);\r\n        this.gl = Render.getWebGl(Render.getCanvas(canvasId));\r\n        this.gl.enable(WebGLRenderingContext.DEPTH_TEST);\r\n        this.gl.enable(WebGLRenderingContext.CULL_FACE);\r\n        this.gl.enable(WebGLRenderingContext.BLEND);\r\n        this.gl.blendEquation(WebGLRenderingContext.FUNC_ADD);\r\n        this.gl.blendFunc(WebGLRenderingContext.SRC_ALPHA, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA);\r\n        this.gl.depthFunc(WebGLRenderingContext.LEQUAL);\r\n        this.spriteShaderProgram = new _SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.gl, _data_shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _data_shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n        this.textureManager = new _TextureManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.gl, textures);\r\n        this.positionBuffer = this.createBuffer();\r\n    }\r\n    resize(innerWidth, innerHeight) {\r\n        this.gl.canvas.width = innerWidth;\r\n        this.gl.canvas.height = innerHeight;\r\n        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);\r\n    }\r\n    clear() {\r\n        this.gl.clearColor(0, 0, 0, 1);\r\n        this.gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);\r\n        this.gl.clear(WebGLRenderingContext.DEPTH_BUFFER_BIT);\r\n    }\r\n    drawEntity(entity) {\r\n        this.draw(entity, entity.getX(), entity.getY(), entity.getZ(), entity.getRotation());\r\n    }\r\n    draw(drawable, x, y, z, rotation) {\r\n        this.spriteShaderProgram.use();\r\n        const texture = this.textureManager.getTexture(drawable.getTexture());\r\n        const positionAttribute = this.spriteShaderProgram.getAttribute(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].POSITION_ATTRIBUTE);\r\n        this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.positionBuffer);\r\n        const vertices = [\r\n            1.0, 0.0,\r\n            0.0, 0.0,\r\n            1.0, 1.0,\r\n            0.0, 1.0\r\n        ];\r\n        this.gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array(vertices), WebGLRenderingContext.STATIC_DRAW);\r\n        this.gl.enableVertexAttribArray(positionAttribute);\r\n        this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.positionBuffer);\r\n        this.gl.vertexAttribPointer(positionAttribute, 2, WebGLRenderingContext.FLOAT, false, 0, 0);\r\n        const zUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Z_UNIFORM);\r\n        this.gl.uniform1f(zUniform, z + this.z);\r\n        const positionUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].POSITION_UNIFORM);\r\n        const rotatedX = x * Math.cos(this.rotation) - y * Math.sin(this.rotation);\r\n        const rotatedY = x * Math.sin(this.rotation) + y * Math.cos(this.rotation);\r\n        const finalX = rotatedX + this.x;\r\n        const finalY = rotatedY + this.y;\r\n        this.gl.uniform2fv(positionUniform, new Float32Array([finalX, finalY]));\r\n        const scaleUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SCALE_UNIFORM);\r\n        this.gl.uniform1f(scaleUniform, Render.SCALE);\r\n        const ratioUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].RATIO_UNIFORM);\r\n        this.gl.uniform1f(ratioUniform, this.gl.canvas.width / this.gl.canvas.height);\r\n        const maxSizeUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].MAX_SIZE_UNIFORM);\r\n        const maxSize = Math.ceil(Math.sqrt(Math.pow(texture.getWidth() / 2.0, 2.0) + Math.pow(texture.getHeight() / 2.0, 2.0))) * 2.0;\r\n        this.gl.uniform1f(maxSizeUniform, maxSize);\r\n        const innerPosUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INNER_POS_UNIFORM);\r\n        this.gl.uniform2fv(innerPosUniform, [(maxSize - texture.getWidth()) / 2.0, (maxSize - texture.getHeight()) / 2.0]);\r\n        const rotationUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ROTATION_UNIFORM);\r\n        this.gl.uniform1f(rotationUniform, rotation);\r\n        const samplerUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SAMPLER_UNIFORM);\r\n        this.gl.activeTexture(WebGLRenderingContext.TEXTURE0);\r\n        this.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture.getData());\r\n        this.gl.uniform1i(samplerUniform, 0);\r\n        const primitiveType = WebGLRenderingContext.TRIANGLE_STRIP;\r\n        const offset = 0;\r\n        const count = 4;\r\n        this.gl.drawArrays(primitiveType, offset, count);\r\n    }\r\n    createBuffer() {\r\n        const buffer = this.gl.createBuffer();\r\n        if (null === buffer) {\r\n            throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Can't create buffer!\");\r\n        }\r\n        return buffer;\r\n    }\r\n    static getCanvas(canvasId) {\r\n        const canvas = document.getElementById(canvasId);\r\n        if (canvas instanceof HTMLCanvasElement) {\r\n            return canvas;\r\n        }\r\n        throw new _exception_HtmlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Canvas don't exists!\");\r\n    }\r\n    static getWebGl(canvas) {\r\n        const gl = canvas.getContext(\"webgl\");\r\n        if (gl instanceof WebGLRenderingContext) {\r\n            return gl;\r\n        }\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Canvas don't provide webgl\");\r\n    }\r\n}\r\nRender.SCALE = 256;\r\n\n\n//# sourceURL=webpack:///./src/engine/webgl/Render.ts?");

/***/ }),

/***/ "./src/engine/webgl/ShaderProgram.ts":
/*!*******************************************!*\
  !*** ./src/engine/webgl/ShaderProgram.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ShaderProgram; });\n/* harmony import */ var _exception_GlException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exception/GlException */ \"./src/engine/exception/GlException.ts\");\n\r\nclass ShaderProgram {\r\n    constructor(gl, vertexShaderSource, fragmentShaderSource) {\r\n        this.gl = gl;\r\n        this.attributes = {};\r\n        this.uniforms = {};\r\n        const vertexShader = this.createShader(vertexShaderSource, WebGLRenderingContext.VERTEX_SHADER);\r\n        const fragmentShader = this.createShader(fragmentShaderSource, WebGLRenderingContext.FRAGMENT_SHADER);\r\n        this.glShaderProgram = this.createProgram(vertexShader, fragmentShader);\r\n    }\r\n    getAttribute(name) {\r\n        if (this.attributes.hasOwnProperty(name)) {\r\n            return this.attributes[name];\r\n        }\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Can't get attribute!\");\r\n    }\r\n    getUniform(name) {\r\n        if (this.uniforms.hasOwnProperty(name)) {\r\n            return this.uniforms[name];\r\n        }\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Can't get uniform!\");\r\n    }\r\n    use() {\r\n        this.gl.useProgram(this.glShaderProgram);\r\n    }\r\n    getAttributeLocation(attributeName) {\r\n        let attributeLocation = this.gl.getAttribLocation(this.glShaderProgram, attributeName);\r\n        if (-1 === attributeLocation) {\r\n            throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Can't get attribute location!\");\r\n        }\r\n        return attributeLocation;\r\n    }\r\n    getUniformLocation(uniformName) {\r\n        let uniformLocation = this.gl.getUniformLocation(this.glShaderProgram, uniformName);\r\n        if (null === uniformLocation) {\r\n            throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Can't get uniform location!\");\r\n        }\r\n        return uniformLocation;\r\n    }\r\n    createShader(source, type) {\r\n        const shader = this.gl.createShader(type);\r\n        if (null === shader) {\r\n            throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Can't create shader!\");\r\n        }\r\n        this.gl.shaderSource(shader, source);\r\n        this.gl.compileShader(shader);\r\n        const success = this.gl.getShaderParameter(shader, WebGLRenderingContext.COMPILE_STATUS);\r\n        if (success) {\r\n            return shader;\r\n        }\r\n        console.log(this.gl.getShaderInfoLog(shader));\r\n        this.gl.deleteShader(shader);\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Can't compile shader!\");\r\n    }\r\n    createProgram(vertexShader, fragmentShader) {\r\n        const program = this.gl.createProgram();\r\n        if (null === program) {\r\n            throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Can't create program!\");\r\n        }\r\n        this.gl.attachShader(program, vertexShader);\r\n        this.gl.attachShader(program, fragmentShader);\r\n        this.gl.linkProgram(program);\r\n        const success = this.gl.getProgramParameter(program, WebGLRenderingContext.LINK_STATUS);\r\n        if (success) {\r\n            return program;\r\n        }\r\n        this.gl.deleteProgram(program);\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Can't link program!\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/webgl/ShaderProgram.ts?");

/***/ }),

/***/ "./src/engine/webgl/Sprite.ts":
/*!************************************!*\
  !*** ./src/engine/webgl/Sprite.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sprite; });\nclass Sprite {\r\n    constructor(texture) {\r\n        this.texture = texture;\r\n    }\r\n    getTexture() {\r\n        return this.texture;\r\n    }\r\n    tick() {\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/webgl/Sprite.ts?");

/***/ }),

/***/ "./src/engine/webgl/SpriteShaderProgram.ts":
/*!*************************************************!*\
  !*** ./src/engine/webgl/SpriteShaderProgram.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SpriteShaderProgram; });\n/* harmony import */ var _ShaderProgram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShaderProgram */ \"./src/engine/webgl/ShaderProgram.ts\");\n\r\nclass SpriteShaderProgram extends _ShaderProgram__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(gl, vertexShaderSource, fragmentShaderSource) {\r\n        super(gl, vertexShaderSource, fragmentShaderSource);\r\n        this.attributes[SpriteShaderProgram.POSITION_ATTRIBUTE] = this.getAttributeLocation(SpriteShaderProgram.POSITION_ATTRIBUTE);\r\n        this.uniforms[SpriteShaderProgram.Z_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.Z_UNIFORM);\r\n        this.uniforms[SpriteShaderProgram.POSITION_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.POSITION_UNIFORM);\r\n        this.uniforms[SpriteShaderProgram.SCALE_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.SCALE_UNIFORM);\r\n        this.uniforms[SpriteShaderProgram.RATIO_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.RATIO_UNIFORM);\r\n        this.uniforms[SpriteShaderProgram.MAX_SIZE_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.MAX_SIZE_UNIFORM);\r\n        this.uniforms[SpriteShaderProgram.INNER_POS_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.INNER_POS_UNIFORM);\r\n        this.uniforms[SpriteShaderProgram.ROTATION_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.ROTATION_UNIFORM);\r\n        this.uniforms[SpriteShaderProgram.SAMPLER_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.SAMPLER_UNIFORM);\r\n    }\r\n}\r\nSpriteShaderProgram.POSITION_ATTRIBUTE = \"aPosition\";\r\nSpriteShaderProgram.Z_UNIFORM = \"uZ\";\r\nSpriteShaderProgram.POSITION_UNIFORM = \"uPosition\";\r\nSpriteShaderProgram.SCALE_UNIFORM = \"uScale\";\r\nSpriteShaderProgram.RATIO_UNIFORM = \"uRatio\";\r\nSpriteShaderProgram.MAX_SIZE_UNIFORM = \"uMaxSize\";\r\nSpriteShaderProgram.INNER_POS_UNIFORM = \"uInnerPos\";\r\nSpriteShaderProgram.ROTATION_UNIFORM = \"uRotation\";\r\nSpriteShaderProgram.SAMPLER_UNIFORM = \"uSampler\";\r\n\n\n//# sourceURL=webpack:///./src/engine/webgl/SpriteShaderProgram.ts?");

/***/ }),

/***/ "./src/engine/webgl/Texture.ts":
/*!*************************************!*\
  !*** ./src/engine/webgl/Texture.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Texture; });\nclass Texture {\r\n    constructor(name, width, height, data) {\r\n        this.name = name;\r\n        this.width = width;\r\n        this.height = height;\r\n        this.data = data;\r\n    }\r\n    getName() {\r\n        return this.name;\r\n    }\r\n    getWidth() {\r\n        return this.width;\r\n    }\r\n    getHeight() {\r\n        return this.height;\r\n    }\r\n    getData() {\r\n        return this.data;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/webgl/Texture.ts?");

/***/ }),

/***/ "./src/engine/webgl/TextureManager.ts":
/*!********************************************!*\
  !*** ./src/engine/webgl/TextureManager.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextureManager; });\n/* harmony import */ var _data_textrues_descriptor_fireColumn_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/textrues/descriptor/fireColumn.json */ \"./src/data/textrues/descriptor/fireColumn.json\");\nvar _data_textrues_descriptor_fireColumn_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/textrues/descriptor/fireColumn.json */ \"./src/data/textrues/descriptor/fireColumn.json\", 1);\n/* harmony import */ var _data_textrues_descriptor_knight_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/textrues/descriptor/knight.json */ \"./src/data/textrues/descriptor/knight.json\");\nvar _data_textrues_descriptor_knight_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/textrues/descriptor/knight.json */ \"./src/data/textrues/descriptor/knight.json\", 1);\n/* harmony import */ var _data_textrues_descriptor_others_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/textrues/descriptor/others.json */ \"./src/data/textrues/descriptor/others.json\");\nvar _data_textrues_descriptor_others_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/textrues/descriptor/others.json */ \"./src/data/textrues/descriptor/others.json\", 1);\n/* harmony import */ var _data_textrues_descriptor_wall_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/textrues/descriptor/wall.json */ \"./src/data/textrues/descriptor/wall.json\");\nvar _data_textrues_descriptor_wall_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/textrues/descriptor/wall.json */ \"./src/data/textrues/descriptor/wall.json\", 1);\n/* harmony import */ var _exception_GlException__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../exception/GlException */ \"./src/engine/exception/GlException.ts\");\n/* harmony import */ var _Texture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Texture */ \"./src/engine/webgl/Texture.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass TextureManager {\r\n    constructor(gl, textures) {\r\n        this.textures = {};\r\n        for (const textureData of _data_textrues_descriptor_fireColumn_json__WEBPACK_IMPORTED_MODULE_0__) {\r\n            this.createTexture(textures, textureData, gl);\r\n        }\r\n        for (const textureData of _data_textrues_descriptor_knight_json__WEBPACK_IMPORTED_MODULE_1__) {\r\n            this.createTexture(textures, textureData, gl);\r\n        }\r\n        for (const textureData of _data_textrues_descriptor_others_json__WEBPACK_IMPORTED_MODULE_2__) {\r\n            this.createTexture(textures, textureData, gl);\r\n        }\r\n        for (const textureData of _data_textrues_descriptor_wall_json__WEBPACK_IMPORTED_MODULE_3__) {\r\n            this.createTexture(textures, textureData, gl);\r\n        }\r\n    }\r\n    getTexture(name) {\r\n        if (this.textures.hasOwnProperty(name)) {\r\n            return this.textures[name];\r\n        }\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Can't get texture!\");\r\n    }\r\n    createTexture(image, textureData, gl) {\r\n        let textureCanvas = document.createElement(\"canvas\");\r\n        textureCanvas.width = textureData.width;\r\n        textureCanvas.height = textureData.height;\r\n        let textureCtx = textureCanvas.getContext(\"2d\");\r\n        if (textureCtx === null) {\r\n            throw \"Cant create context 2d\";\r\n        }\r\n        textureCtx.drawImage(image, textureData.x, textureData.y, textureData.width, textureData.height, 0, 0, textureData.width, textureData.height);\r\n        const texture = TextureManager.createGlTexture(gl);\r\n        gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);\r\n        gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, textureCanvas);\r\n        gl.generateMipmap(gl.TEXTURE_2D);\r\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\r\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\r\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);\r\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);\r\n        this.textures[textureData.name] = new _Texture__WEBPACK_IMPORTED_MODULE_5__[\"default\"](textureData.name, textureData.width, textureData.height, texture);\r\n    }\r\n    static createGlTexture(gl) {\r\n        const texture = gl.createTexture();\r\n        if (null !== texture) {\r\n            return texture;\r\n        }\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Can't create texture!\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/webgl/TextureManager.ts?");

/***/ }),

/***/ "./src/engine/webgl/Translatable.ts":
/*!******************************************!*\
  !*** ./src/engine/webgl/Translatable.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Translatable; });\nclass Translatable {\r\n    constructor(x, y, z, rotation) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.z = z;\r\n        this.rotation = rotation;\r\n    }\r\n    getX() {\r\n        return this.x;\r\n    }\r\n    setX(x) {\r\n        this.x = x;\r\n    }\r\n    getY() {\r\n        return this.y;\r\n    }\r\n    setY(y) {\r\n        this.y = y;\r\n    }\r\n    move(x, y) {\r\n        this.x += x;\r\n        this.y += y;\r\n    }\r\n    getZ() {\r\n        return this.z;\r\n    }\r\n    setZ(z) {\r\n        this.z = z;\r\n    }\r\n    getRotation() {\r\n        return this.rotation;\r\n    }\r\n    setRotation(rotation) {\r\n        this.rotation = rotation;\r\n    }\r\n    rotate(angle) {\r\n        this.rotation += angle;\r\n    }\r\n    static compare(a, b) {\r\n        if (a.getZ() < b.getZ()) {\r\n            return -1;\r\n        }\r\n        if (b.getZ() < a.getZ()) {\r\n            return 1;\r\n        }\r\n        return 0;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/webgl/Translatable.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine_webgl_Render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/webgl/Render */ \"./src/engine/webgl/Render.ts\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n/* harmony import */ var _engine_input_InputManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/input/InputManager */ \"./src/engine/input/InputManager.ts\");\n/* harmony import */ var _data_textrues_textures_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/textrues/textures.png */ \"./src/data/textrues/textures.png\");\n/* harmony import */ var _data_textrues_textures_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_textrues_textures_png__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\nwindow.onload = function () {\r\n    let image = new Image();\r\n    image.onload = () => {\r\n        const render = new _engine_webgl_Render__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"canvas\", image);\r\n        render.resize(window.innerWidth, window.innerHeight);\r\n        const inputManager = new _engine_input_InputManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n        const game = new _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](render, inputManager);\r\n        function run(timestamp) {\r\n            game.update(timestamp);\r\n            requestAnimationFrame(run);\r\n        }\r\n        window.onresize = () => {\r\n            render.resize(window.innerWidth, window.innerHeight);\r\n        };\r\n        window.onkeydown = (event) => {\r\n            inputManager.onKeyDown(event);\r\n        };\r\n        window.onkeyup = (event) => {\r\n            inputManager.onKeyUp(event);\r\n        };\r\n        requestAnimationFrame(run);\r\n    };\r\n    image.src = _data_textrues_textures_png__WEBPACK_IMPORTED_MODULE_3___default.a;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });