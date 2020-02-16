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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _engine_webgl_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/webgl/Animation */ \"./src/engine/webgl/Animation.ts\");\n/* harmony import */ var _engine_webgl_Sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/webgl/Sprite */ \"./src/engine/webgl/Sprite.ts\");\n/* harmony import */ var _engine_GameWithLoop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/GameWithLoop */ \"./src/engine/GameWithLoop.ts\");\n/* harmony import */ var _engine_entity_StaticEntity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/entity/StaticEntity */ \"./src/engine/entity/StaticEntity.ts\");\n/* harmony import */ var _engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine/input/InputSignal */ \"./src/engine/input/InputSignal.ts\");\n\r\n\r\n\r\n\r\n\r\nclass Game extends _engine_GameWithLoop__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\r\n    constructor(render, inputManager) {\r\n        super(60);\r\n        this.render = render;\r\n        this.inputManager = inputManager;\r\n        this.sprites = [];\r\n        this.sprites.push(new _engine_entity_StaticEntity__WEBPACK_IMPORTED_MODULE_3__[\"default\"](-24, 0, 0, 0, new _engine_webgl_Sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"wall\")), new _engine_entity_StaticEntity__WEBPACK_IMPORTED_MODULE_3__[\"default\"](0, 0, 0, Math.PI / 2, new _engine_webgl_Sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"sword\")), new _engine_entity_StaticEntity__WEBPACK_IMPORTED_MODULE_3__[\"default\"](24, 0, 0, 0, new _engine_webgl_Sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"bat_up\")), new _engine_entity_StaticEntity__WEBPACK_IMPORTED_MODULE_3__[\"default\"](0, 24, 0, 0, new _engine_webgl_Animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([\r\n            \"fire_column_0\",\r\n            \"fire_column_1\",\r\n            \"fire_column_2\",\r\n            \"fire_column_3\",\r\n            \"fire_column_4\",\r\n            \"fire_column_5\",\r\n            \"fire_column_6\",\r\n            \"fire_column_7\",\r\n        ], 10)));\r\n        inputManager.addMapping(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].UP, \"w\");\r\n        inputManager.addMapping(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].RIGHT, \"d\");\r\n        inputManager.addMapping(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].DOWN, \"s\");\r\n        inputManager.addMapping(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].LEFT, \"a\");\r\n    }\r\n    tick(frame) {\r\n        const x = +this.inputManager.getStatus(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].LEFT) * -1 + +this.inputManager.getStatus(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].RIGHT);\r\n        const y = +this.inputManager.getStatus(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].UP) * -1 + +this.inputManager.getStatus(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].DOWN);\r\n        this.render.move(x, y);\r\n        const angle = Math.PI / (1000 / 60 * 10);\r\n        this.render.rotate(angle);\r\n        for (const sprite of this.sprites) {\r\n            sprite.rotate(angle);\r\n            sprite.tick(frame);\r\n        }\r\n    }\r\n    draw() {\r\n        this.render.resize();\r\n        this.render.clear();\r\n        for (const sprite of this.sprites) {\r\n            this.render.drawEntity(sprite);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Game.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"attribute vec2 aPosition;\\r\\n\\r\\nuniform float uZ;\\r\\nuniform vec2 uPosition;\\r\\nuniform float uScale;\\r\\nuniform float uRatio;\\r\\n\\r\\nuniform highp float uMaxSize;\\r\\n\\r\\nvarying highp vec2 vTextureCoord;\\r\\n\\r\\nvoid main() {\\r\\n    vec2 translated = floor(aPosition * uMaxSize);\\r\\n    vec2 moved = translated + uPosition - uMaxSize / 2.0;\\r\\n    vec2 scaled = moved / uScale;\\r\\n    vec2 transformed = scaled * vec2(1.0, uRatio);\\r\\n    vec2 mirrored = transformed * vec2(1.0, -1.0);\\r\\n\\r\\n    gl_Position = vec4(mirrored, uZ, 1.0);\\r\\n\\r\\n    vTextureCoord = aPosition;\\r\\n}\");\n\n//# sourceURL=webpack:///./src/data/shaders/vertex.glsl?");

/***/ }),

/***/ "./src/data/textrues/textures.json":
/*!*****************************************!*\
  !*** ./src/data/textrues/textures.json ***!
  \*****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"knight_top\\\",\\\"x\\\":0,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"knight_down\\\",\\\"x\\\":0,\\\"y\\\":16,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"knight_down_right\\\",\\\"x\\\":0,\\\"y\\\":32,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"knight_down_left\\\",\\\"x\\\":0,\\\"y\\\":48,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"floor\\\",\\\"x\\\":16,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall\\\",\\\"x\\\":32,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_left_end\\\",\\\"x\\\":32,\\\"y\\\":16,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_right_end\\\",\\\"x\\\":32,\\\"y\\\":32,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_top\\\",\\\"x\\\":48,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_convave_corner\\\",\\\"x\\\":64,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_convex_corner\\\",\\\"x\\\":80,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"sword\\\",\\\"x\\\":16,\\\"y\\\":16,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"bat_up\\\",\\\"x\\\":96,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"bat_down\\\",\\\"x\\\":96,\\\"y\\\":16,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"fire_column_0\\\",\\\"x\\\":112,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"fire_column_1\\\",\\\"x\\\":128,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"fire_column_2\\\",\\\"x\\\":144,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"fire_column_3\\\",\\\"x\\\":160,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"fire_column_4\\\",\\\"x\\\":176,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"fire_column_5\\\",\\\"x\\\":192,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"fire_column_6\\\",\\\"x\\\":208,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"fire_column_7\\\",\\\"x\\\":224,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":32}]\");\n\n//# sourceURL=webpack:///./src/data/textrues/textures.json?");

/***/ }),

/***/ "./src/data/textrues/textures.png":
/*!****************************************!*\
  !*** ./src/data/textrues/textures.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAEACAMAAADyTj5VAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAABQMERwRFx0SGBgaHhUZMiEUGyMVHSsSHzsaGiQXKSEdIyoeIiwbJDAdJzUnHzApHyUoLisvNjojLzskLzgmLTskMDszKDs+KDE1PTg4OAorTSYhRSwlUCI/TTU1YTRHJx5Bdh9RdSRSaTVSYUoYGEIbLlAqFkIoNUcuOkkhMUUyJEA9NkU9O0oxPEsyPVYlL1Y/KnUfIHI3F2siImEpNWktMm05MnozM1I6QkU9a0Yxcloxc09cN1BUNkR3M11iP157N2ZHKWFML3tCI3pZN01NTVpNRl9LTUJCa1BQeGtbTmJdUnxeRmhuRnRmX3J4UXVnYHd6dytjgCxmgzN3mS55snU8hkhwhVF+lmRGpER8z2SUOGSRVFqMpmqMnHqWo36erVujx5ImO6ozM7YvMYVHG59aOo9+KLtVM6pmIrh8LL97P4dAQIRhQY1oRYBxXYJ3ZId2boh3b4d9eJF/a6pJUaJtSqR9W/8AAMN9KMx3M9BGSJRKnIKKWIqSXa+AVaCMY6m3V8iUN8GAZ86QacufdsyqRM+8RNa8a9vCRNnIaNzFf5+iiJmqmYmsvou0uL2clKuxhqampo670aPBl6vCzcSTh9mvg9nFiczMqszMvsTSuNbLtuTamebRvMfHx8LS3tHRwt7Wxcja49Xo8OXHx+TgxvDw3evr6/D3+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPmQWAAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA6/AAAOvwE4BVMkAAAxyklEQVR4Xu2djWNdR3nmwxSkAOWGUEJoiYOLE+0tS7AbvCA5RCbO0iwNcddNTAyL3ZCYFgt5N163DiFuoMmCQKWwfCybrEiBQIKTf1L7PO/7zuf5ulf3Slbi+V3dM+eZmXPO1XmfMzPnQ1c3bReMC9yKIAknN03B+NSpy7ba/cqzlk6M7QpNbHasiczYbuukXP6/FNhm9oxhAyQJJxbbiXg7GiDbI+nOIWGmj3J5rJJ73Sd7zCQGGPmEn9diOxFvWwP4PeJnR4LkDZMvjzXKj6xbkz1l2AAFFtuJGP/N3/xPW+1+ZWoD2G4ouPPOO23OdlsnVi0gK93PBlgZ+V5LpxbbidDfNu4zztlm9gs7GAOMsCewU2JnPnJ3Pvroo3DAbVC22zpBfVT2uBVbrbCLBujc8YMGIGprnVpsJ4JdgLvDuWMHDhw4duwAZo695Q0Q90RIEH84Gw5QPYi7M7z2rM935zr2/HQGQN9lsZ0INcAd7hoMcO3aAcT/7WMA9Pno+kU5xp9T7dwHQU3/2jUDlEe8O3emfdfv7hjgbWgA2w1pt49Axqnttk60pn/tVpfovvzlfM07N4D2c6G/u81iOxEcBMIACL+A+L/1DaD7Iev23aMjRHKEDt2t3Ga7rROpH163ZWOAueHOffnLecB3bgDDnO2m6wJod7QAB65duYJWoG8MsGxpJ0WFwfoTsqMuAPsh7fZHcMAI8dfz5GF2fQzgztEAWcRnMoCdtZIpDXDqFFoADP6vgAP4AC4YoAzg8rrNeMqA9xtgx37YiQGwP3DwEnbizODAHvGfzADZWUCXARp9+BQa8RcDpCEvDMAPr3O7PQZY4YZsUaw9fM4yYuvreU5ZXhqkkE0D5DmlvQI7HQOk3X6G7bZO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\"\n\n//# sourceURL=webpack:///./src/data/textrues/textures.png?");

/***/ }),

/***/ "./src/engine/GameWithLoop.ts":
/*!************************************!*\
  !*** ./src/engine/GameWithLoop.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameWithLoop; });\nclass GameWithLoop {\r\n    constructor(fps) {\r\n        this.lastFrameTimeMs = 0;\r\n        this.delta = 0;\r\n        this.fps = 1000 / fps;\r\n        this.frame = 0;\r\n    }\r\n    update(timestamp) {\r\n        this.delta += timestamp - this.lastFrameTimeMs;\r\n        this.lastFrameTimeMs = timestamp;\r\n        while (this.delta >= this.fps) {\r\n            this.tick(this.frame);\r\n            this.delta -= this.fps;\r\n            ++this.frame;\r\n        }\r\n        this.draw();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/GameWithLoop.ts?");

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

/***/ "./src/engine/entity/StaticEntity.ts":
/*!*******************************************!*\
  !*** ./src/engine/entity/StaticEntity.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StaticEntity; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ \"./src/engine/entity/Entity.ts\");\n\r\nclass StaticEntity extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(x, y, z, rotation, processable) {\r\n        super(x, y, z, rotation);\r\n        this.processable = processable;\r\n    }\r\n    getTexture() {\r\n        return this.processable.getTexture();\r\n    }\r\n    tick(frame) {\r\n        this.processable.tick(frame);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/entity/StaticEntity.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Render; });\n/* harmony import */ var _exception_HtmlException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exception/HtmlException */ \"./src/engine/exception/HtmlException.ts\");\n/* harmony import */ var _exception_GlException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exception/GlException */ \"./src/engine/exception/GlException.ts\");\n/* harmony import */ var _SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpriteShaderProgram */ \"./src/engine/webgl/SpriteShaderProgram.ts\");\n/* harmony import */ var _TextureManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextureManager */ \"./src/engine/webgl/TextureManager.ts\");\n/* harmony import */ var _data_shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/shaders/vertex.glsl */ \"./src/data/shaders/vertex.glsl\");\n/* harmony import */ var _data_shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/shaders/fragment.glsl */ \"./src/data/shaders/fragment.glsl\");\n/* harmony import */ var _Translatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Translatable */ \"./src/engine/webgl/Translatable.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Render extends _Translatable__WEBPACK_IMPORTED_MODULE_6__[\"default\"] {\r\n    constructor(canvasId) {\r\n        super(0, 0, 0, 0);\r\n        this.gl = Render.getWebGl(Render.getCanvas(canvasId));\r\n        this.gl.enable(WebGLRenderingContext.DEPTH_TEST);\r\n        this.gl.enable(WebGLRenderingContext.CULL_FACE);\r\n        this.gl.enable(WebGLRenderingContext.BLEND);\r\n        this.gl.blendFunc(WebGLRenderingContext.ONE, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA);\r\n        this.gl.depthFunc(WebGLRenderingContext.LEQUAL);\r\n        this.spriteShaderProgram = new _SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.gl, _data_shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _data_shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n        this.textureManager = new _TextureManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.gl);\r\n    }\r\n    resize() {\r\n        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);\r\n    }\r\n    clear() {\r\n        this.gl.clearColor(0, 0, 0, 1);\r\n        this.gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);\r\n        this.gl.clear(WebGLRenderingContext.DEPTH_BUFFER_BIT);\r\n    }\r\n    drawEntity(entity) {\r\n        this.draw(entity, entity.getX(), entity.getY(), entity.getZ(), entity.getRotation());\r\n    }\r\n    draw(drawable, x, y, z, rotation) {\r\n        this.spriteShaderProgram.use();\r\n        const texture = this.textureManager.getTexture(drawable.getTexture());\r\n        const positionAttribute = this.spriteShaderProgram.getAttribute(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].POSITION_ATTRIBUTE);\r\n        const positionBuffer = this.createBuffer();\r\n        this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, positionBuffer);\r\n        const vertices = [\r\n            1.0, 0.0,\r\n            0.0, 0.0,\r\n            1.0, 1.0,\r\n            0.0, 1.0\r\n        ];\r\n        this.gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array(vertices), WebGLRenderingContext.STATIC_DRAW);\r\n        this.gl.enableVertexAttribArray(positionAttribute);\r\n        this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, positionBuffer);\r\n        this.gl.vertexAttribPointer(positionAttribute, 2, WebGLRenderingContext.FLOAT, false, 0, 0);\r\n        const zUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Z_UNIFORM);\r\n        this.gl.uniform1f(zUniform, z + this.z);\r\n        const positionUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].POSITION_UNIFORM);\r\n        const rotatedX = x * Math.cos(this.rotation) - y * Math.sin(this.rotation);\r\n        const rotatedY = x * Math.sin(this.rotation) + y * Math.cos(this.rotation);\r\n        const finalX = rotatedX + this.x;\r\n        const finalY = rotatedY + this.y;\r\n        this.gl.uniform2fv(positionUniform, new Float32Array([finalX, finalY]));\r\n        const scaleUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SCALE_UNIFORM);\r\n        this.gl.uniform1f(scaleUniform, 128);\r\n        const ratioUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].RATIO_UNIFORM);\r\n        this.gl.uniform1f(ratioUniform, this.gl.canvas.width / this.gl.canvas.height);\r\n        const maxSizeUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].MAX_SIZE_UNIFORM);\r\n        const maxSize = Math.ceil(Math.sqrt(Math.pow(texture.getWidth() / 2.0, 2.0) + Math.pow(texture.getHeight() / 2.0, 2.0))) * 2.0;\r\n        this.gl.uniform1f(maxSizeUniform, maxSize);\r\n        const innerPosUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INNER_POS_UNIFORM);\r\n        this.gl.uniform2fv(innerPosUniform, [(maxSize - texture.getWidth()) / 2.0, (maxSize - texture.getHeight()) / 2.0]);\r\n        const rotationUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ROTATION_UNIFORM);\r\n        this.gl.uniform1f(rotationUniform, rotation);\r\n        const samplerUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SAMPLER_UNIFORM);\r\n        this.gl.activeTexture(WebGLRenderingContext.TEXTURE0);\r\n        this.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture.getData());\r\n        this.gl.uniform1i(samplerUniform, 0);\r\n        const primitiveType = WebGLRenderingContext.TRIANGLE_STRIP;\r\n        const offset = 0;\r\n        const count = 4;\r\n        this.gl.drawArrays(primitiveType, offset, count);\r\n    }\r\n    createBuffer() {\r\n        const buffer = this.gl.createBuffer();\r\n        if (null === buffer) {\r\n            throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Can't create buffer!\");\r\n        }\r\n        return buffer;\r\n    }\r\n    static getCanvas(canvasId) {\r\n        const canvas = document.getElementById(canvasId);\r\n        if (canvas instanceof HTMLCanvasElement) {\r\n            return canvas;\r\n        }\r\n        throw new _exception_HtmlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Canvas don't exists!\");\r\n    }\r\n    static getWebGl(canvas) {\r\n        const gl = canvas.getContext(\"webgl\");\r\n        if (gl instanceof WebGLRenderingContext) {\r\n            return gl;\r\n        }\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Canvas don't provide webgl\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/webgl/Render.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextureManager; });\n/* harmony import */ var _data_textrues_textures_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/textrues/textures.json */ \"./src/data/textrues/textures.json\");\nvar _data_textrues_textures_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/textrues/textures.json */ \"./src/data/textrues/textures.json\", 1);\n/* harmony import */ var _data_textrues_textures_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/textrues/textures.png */ \"./src/data/textrues/textures.png\");\n/* harmony import */ var _data_textrues_textures_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_textrues_textures_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _exception_GlException__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exception/GlException */ \"./src/engine/exception/GlException.ts\");\n/* harmony import */ var _Texture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Texture */ \"./src/engine/webgl/Texture.ts\");\n\r\n\r\n\r\n\r\nclass TextureManager {\r\n    constructor(gl) {\r\n        this.textures = {};\r\n        let image = new Image();\r\n        image.src = _data_textrues_textures_png__WEBPACK_IMPORTED_MODULE_1___default.a;\r\n        for (const textureData of _data_textrues_textures_json__WEBPACK_IMPORTED_MODULE_0__) {\r\n            let textureCanvas = document.createElement(\"canvas\");\r\n            textureCanvas.width = textureData.width;\r\n            textureCanvas.height = textureData.height;\r\n            let textureCtx = textureCanvas.getContext(\"2d\");\r\n            if (textureCtx === null) {\r\n                throw \"Cant create context 2d\";\r\n            }\r\n            textureCtx.drawImage(image, textureData.x, textureData.y, textureData.width, textureData.height, 0, 0, textureData.width, textureData.height);\r\n            const texture = TextureManager.createTexture(gl);\r\n            gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);\r\n            gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, textureCanvas);\r\n            gl.generateMipmap(gl.TEXTURE_2D);\r\n            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\r\n            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\r\n            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);\r\n            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);\r\n            this.textures[textureData.name] = new _Texture__WEBPACK_IMPORTED_MODULE_3__[\"default\"](textureData.name, textureData.width, textureData.height, texture);\r\n        }\r\n    }\r\n    getTexture(name) {\r\n        if (this.textures.hasOwnProperty(name)) {\r\n            return this.textures[name];\r\n        }\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Can't get texture!\");\r\n    }\r\n    static createTexture(gl) {\r\n        const texture = gl.createTexture();\r\n        if (null !== texture) {\r\n            return texture;\r\n        }\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Can't create texture!\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/webgl/TextureManager.ts?");

/***/ }),

/***/ "./src/engine/webgl/Translatable.ts":
/*!******************************************!*\
  !*** ./src/engine/webgl/Translatable.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Translatable; });\nclass Translatable {\r\n    constructor(x, y, z, rotation) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.z = z;\r\n        this.rotation = rotation;\r\n    }\r\n    getX() {\r\n        return this.x;\r\n    }\r\n    setX(x) {\r\n        this.x = x;\r\n    }\r\n    getY() {\r\n        return this.y;\r\n    }\r\n    setY(y) {\r\n        this.y = y;\r\n    }\r\n    move(x, y) {\r\n        this.x += x;\r\n        this.y += y;\r\n    }\r\n    getZ() {\r\n        return this.z;\r\n    }\r\n    setZ(z) {\r\n        this.z = z;\r\n    }\r\n    getRotation() {\r\n        return this.rotation;\r\n    }\r\n    setRotation(rotation) {\r\n        this.rotation = rotation;\r\n    }\r\n    rotate(angle) {\r\n        this.rotation += angle;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/webgl/Translatable.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine_webgl_Render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/webgl/Render */ \"./src/engine/webgl/Render.ts\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n/* harmony import */ var _engine_input_InputManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/input/InputManager */ \"./src/engine/input/InputManager.ts\");\n\r\n\r\n\r\nwindow.onload = function () {\r\n    const render = new _engine_webgl_Render__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"canvas\");\r\n    const inputManager = new _engine_input_InputManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    const game = new _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](render, inputManager);\r\n    function run(timestamp) {\r\n        game.update(timestamp);\r\n        requestAnimationFrame(run);\r\n    }\r\n    window.onkeydown = function (event) {\r\n        inputManager.onKeyDown(event);\r\n    };\r\n    window.onkeyup = function (event) {\r\n        inputManager.onKeyUp(event);\r\n    };\r\n    requestAnimationFrame(run);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });