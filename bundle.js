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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _engine_webgl_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/webgl/Animation */ \"./src/engine/webgl/Animation.ts\");\n/* harmony import */ var _engine_webgl_Sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/webgl/Sprite */ \"./src/engine/webgl/Sprite.ts\");\n/* harmony import */ var _engine_GameWithLoop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/GameWithLoop */ \"./src/engine/GameWithLoop.ts\");\n/* harmony import */ var _engine_entity_StaticEntity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/entity/StaticEntity */ \"./src/engine/entity/StaticEntity.ts\");\n/* harmony import */ var _engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine/input/InputSignal */ \"./src/engine/input/InputSignal.ts\");\n/* harmony import */ var _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./engine/entity/wall/Wall */ \"./src/engine/entity/wall/Wall.ts\");\n/* harmony import */ var _engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./engine/entity/wall/WallType */ \"./src/engine/entity/wall/WallType.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Game extends _engine_GameWithLoop__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\r\n    constructor(render, inputManager) {\r\n        super(60);\r\n        this.render = render;\r\n        this.inputManager = inputManager;\r\n        this.sprites = [];\r\n        this.sprites.push(new _engine_entity_StaticEntity__WEBPACK_IMPORTED_MODULE_3__[\"default\"](-24, 0, 0, 0, new _engine_entity_wall_Wall__WEBPACK_IMPORTED_MODULE_5__[\"default\"](_engine_entity_wall_WallType__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CONVEX_CORNER_BOTTOM_RIGHT)), new _engine_entity_StaticEntity__WEBPACK_IMPORTED_MODULE_3__[\"default\"](0, 0, 0, Math.PI / 2, new _engine_webgl_Sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"sword\")), new _engine_entity_StaticEntity__WEBPACK_IMPORTED_MODULE_3__[\"default\"](24, 0, 0, 0, new _engine_webgl_Animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([\r\n            \"bat_up\",\r\n            \"bat_down\",\r\n        ], 20)), new _engine_entity_StaticEntity__WEBPACK_IMPORTED_MODULE_3__[\"default\"](0, 24, 0, 0, new _engine_webgl_Animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([\r\n            \"fire_column_0\",\r\n            \"fire_column_1\",\r\n            \"fire_column_2\",\r\n            \"fire_column_3\",\r\n            \"fire_column_4\",\r\n            \"fire_column_5\",\r\n            \"fire_column_6\",\r\n            \"fire_column_7\",\r\n        ], 10)));\r\n        inputManager.addMapping(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].UP, \"w\");\r\n        inputManager.addMapping(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].RIGHT, \"d\");\r\n        inputManager.addMapping(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].DOWN, \"s\");\r\n        inputManager.addMapping(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].LEFT, \"a\");\r\n    }\r\n    tick(frame) {\r\n        const x = +this.inputManager.getStatus(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].LEFT) * -1 + +this.inputManager.getStatus(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].RIGHT);\r\n        const y = +this.inputManager.getStatus(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].UP) * -1 + +this.inputManager.getStatus(_engine_input_InputSignal__WEBPACK_IMPORTED_MODULE_4__[\"default\"].DOWN);\r\n        this.render.move(x, y);\r\n        const angle = Math.PI / (1000 / 60 * 10);\r\n        this.sprites[1].rotate(angle);\r\n        for (const sprite of this.sprites) {\r\n            sprite.tick(frame);\r\n        }\r\n    }\r\n    draw() {\r\n        this.render.resize();\r\n        this.render.clear();\r\n        for (const sprite of this.sprites) {\r\n            this.render.drawEntity(sprite);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Game.ts?");

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

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAEACAMAAADyTj5VAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAABQMERwRFx0SGBgaHhUZMiEUGyMVHSsSHzsaGiQXKSEdIyoeIiwbJDAdJzUnHzApHyUoLisvNjojLzskLzgmLTskMDszKDs+KDE1PTg4OAorTSYhRSwlUCI/TTU1YTRHJx5Bdh9RdSRSaTVSYUoYGEIbLlAqFkAmM0EnNEIoNUcuOkkhMUUyJEA9NkU9O0oxPEsyPVYlL1Y/KnUfIHI3F2siImEpNWktMm05MnozM1E5QVI6QkU9a0Yxcloxc09cN1BUNkR3M11iP157N2ZHKWFML3tCI3pZN01NTVpNRl9LTUJCa1BQeGtbTmJdUnxeRmhuRnNlXnRmX3J4UXVnYHd6dytjgCxmgzN3mS55snU8hkhwhVF+lmRGpER8z2SUOGSRVFqMpmqMnHqWo36erVujx5ImO6ozM7YvMYVHG59aOo9+KLtVM6pmIrh8LL97P4dAQIRhQY1oRYBxXYJ3ZIZ1bYd2boh3b4d9eJF/a6pJUaJtSqR9W/8AAMN9KMx3M9BGSJRKnIKKWIqSXa+AVaCMY6m3V8iUN8GAZ86QacufdsyqRM+8RNa8a9vCRNnIaNzFf5+iiJmqmYmsvou0uL2clKuxhqampo670aPBl6vCzcSTh9mvg9nFiczMqszMvsTSuNbLtuTamebRvMfHx8LS3tHRwt7Wxcja49Xo8OXHx+TgxvDw3evr6/D3+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJWzJKwAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA6/AAAOvwE4BVMkAAA0z0lEQVR4Xu2dj4McR33lTSWsICRjTDAmATkKgr1jk8NYcXxhs3aQsHyJjxh0uo0tbDikgG2SeCPf2bFyAmLHEHwgskngIBxnbnEIBIPMn6h77/t99bN7pmd2ZqW16c/udPWrqu6e6e/rquofO3vTtYaNhrBlWMLJTQuwsb19Sas9rHxR6dxoV3ii2Q1PbEa7bSrt8v+5QZu5bgwboEg4UWzn4vVogGqPlDuHpJlZtMtjldzrMbnOzGOASUz4fhXbuXjdGiDukTg7MSxvmHp5rNF+bd2eXFeGDdCg2M7Fxtmzz2q1h5WFDaDd0HD77bdrTrttKqqWsJUeZgNsTWKv5VPFdi780+Z9xjlt5rCwjzHABHsCOyV35pNw+0MPPQQH3Aql3TYV1EflSNjSao0DNMDUHT9oAOK29qliOxfsAsK7Q7jn6NGj99xzFDP3vOYNkPdEShB/OBsOcD1IuD39XLc+P1yYsucXMwD6LsV2LtwA7w5XYYCrV48i/q8fA6DPR9dvKjD+nHrnPghqxp8DM0B7xIcLj/bv+oMdA7wODaDdUHb7CGSeardNxWvGn4PqEsMnP1mvef8G8H4u9Xe3KrZzwUEgDIDwG4j/a98Avh+qbj88NEEkJ+jQw9at2m1Tsfrp59ZqDLAywoVPfrIO+P4NIOTssFgXQLujBTh69fJltAKzxgCbSqfSVBisPyf76gKwH8pufwIHTBB/P08e5sDHAOECDVBFfCkD6KyVLGiA7W20ABj8XwZH8QZCMkAbwM2Lmom0AZ9tgH37YT8GwP7AwUvYiTODA3vEfz4DVGcB0wzQ6cMX0Ii/GaAMeWMAvnmfO+gxwBY3pEWx9vQ+24hdvFjntOWtQRrZNUCd09orsd8xQNntV2i3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\"\n\n//# sourceURL=webpack:///./src/data/textrues/textures.png?");

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

/***/ "./src/engine/entity/wall/Wall.ts":
/*!****************************************!*\
  !*** ./src/engine/entity/wall/Wall.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Wall; });\n/* harmony import */ var _WallType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WallType */ \"./src/engine/entity/wall/WallType.ts\");\n\r\nclass Wall {\r\n    constructor(wallType) {\r\n        switch (wallType) {\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LEFT:\r\n                this.texture = \"wall_left\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RIGHT:\r\n                this.texture = \"wall_right\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BOTTOM:\r\n                this.texture = \"wall_bottom\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONCAVE_CORNER_TOP_LEFT:\r\n                this.texture = \"wall_concave_corner_top_left\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONCAVE_CORNER_TOP_RIGHT:\r\n                this.texture = \"wall_concave_corner_top_right\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONCAVE_CORNER_BOTTOM_LEFT:\r\n                this.texture = \"wall_concave_corner_bottom_left\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONCAVE_CORNER_BOTTOM_RIGHT:\r\n                this.texture = \"wall_concave_corner_bottom_right\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONVEX_CORNER_BOTTOM_LEFT:\r\n                this.texture = \"wall_convex_corner_bottom_left\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONVEX_CORNER_TOP_LEFT:\r\n                this.texture = \"wall_convex_corner_top_left\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONVEX_CORNER_TOP_RIGHT:\r\n                this.texture = \"wall_convex_corner_top_right\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONVEX_CORNER_BOTTOM_RIGHT:\r\n                this.texture = \"wall_convex_corner_bottom_right\";\r\n                break;\r\n            case _WallType__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TOP:\r\n            default:\r\n                this.texture = \"wall_up\";\r\n        }\r\n    }\r\n    getTexture() {\r\n        return this.texture;\r\n    }\r\n    tick() {\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/entity/wall/Wall.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Render; });\n/* harmony import */ var _exception_HtmlException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exception/HtmlException */ \"./src/engine/exception/HtmlException.ts\");\n/* harmony import */ var _exception_GlException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exception/GlException */ \"./src/engine/exception/GlException.ts\");\n/* harmony import */ var _SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpriteShaderProgram */ \"./src/engine/webgl/SpriteShaderProgram.ts\");\n/* harmony import */ var _TextureManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextureManager */ \"./src/engine/webgl/TextureManager.ts\");\n/* harmony import */ var _data_shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/shaders/vertex.glsl */ \"./src/data/shaders/vertex.glsl\");\n/* harmony import */ var _data_shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/shaders/fragment.glsl */ \"./src/data/shaders/fragment.glsl\");\n/* harmony import */ var _Translatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Translatable */ \"./src/engine/webgl/Translatable.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Render extends _Translatable__WEBPACK_IMPORTED_MODULE_6__[\"default\"] {\r\n    constructor(canvasId, textures) {\r\n        super(0, 0, 0, 0);\r\n        this.gl = Render.getWebGl(Render.getCanvas(canvasId));\r\n        this.gl.enable(WebGLRenderingContext.DEPTH_TEST);\r\n        this.gl.enable(WebGLRenderingContext.CULL_FACE);\r\n        this.gl.enable(WebGLRenderingContext.BLEND);\r\n        this.gl.blendFunc(WebGLRenderingContext.ONE, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA);\r\n        this.gl.depthFunc(WebGLRenderingContext.LEQUAL);\r\n        this.spriteShaderProgram = new _SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.gl, _data_shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _data_shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n        this.textureManager = new _TextureManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.gl, textures);\r\n    }\r\n    resize() {\r\n        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);\r\n    }\r\n    clear() {\r\n        this.gl.clearColor(0, 0, 0, 1);\r\n        this.gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);\r\n        this.gl.clear(WebGLRenderingContext.DEPTH_BUFFER_BIT);\r\n    }\r\n    drawEntity(entity) {\r\n        this.draw(entity, entity.getX(), entity.getY(), entity.getZ(), entity.getRotation());\r\n    }\r\n    draw(drawable, x, y, z, rotation) {\r\n        this.spriteShaderProgram.use();\r\n        const texture = this.textureManager.getTexture(drawable.getTexture());\r\n        const positionAttribute = this.spriteShaderProgram.getAttribute(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].POSITION_ATTRIBUTE);\r\n        const positionBuffer = this.createBuffer();\r\n        this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, positionBuffer);\r\n        const vertices = [\r\n            1.0, 0.0,\r\n            0.0, 0.0,\r\n            1.0, 1.0,\r\n            0.0, 1.0\r\n        ];\r\n        this.gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array(vertices), WebGLRenderingContext.STATIC_DRAW);\r\n        this.gl.enableVertexAttribArray(positionAttribute);\r\n        this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, positionBuffer);\r\n        this.gl.vertexAttribPointer(positionAttribute, 2, WebGLRenderingContext.FLOAT, false, 0, 0);\r\n        const zUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Z_UNIFORM);\r\n        this.gl.uniform1f(zUniform, z + this.z);\r\n        const positionUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].POSITION_UNIFORM);\r\n        const rotatedX = x * Math.cos(this.rotation) - y * Math.sin(this.rotation);\r\n        const rotatedY = x * Math.sin(this.rotation) + y * Math.cos(this.rotation);\r\n        const finalX = rotatedX + this.x;\r\n        const finalY = rotatedY + this.y;\r\n        this.gl.uniform2fv(positionUniform, new Float32Array([finalX, finalY]));\r\n        const scaleUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SCALE_UNIFORM);\r\n        this.gl.uniform1f(scaleUniform, 128);\r\n        const ratioUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].RATIO_UNIFORM);\r\n        this.gl.uniform1f(ratioUniform, this.gl.canvas.width / this.gl.canvas.height);\r\n        const maxSizeUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].MAX_SIZE_UNIFORM);\r\n        const maxSize = Math.ceil(Math.sqrt(Math.pow(texture.getWidth() / 2.0, 2.0) + Math.pow(texture.getHeight() / 2.0, 2.0))) * 2.0;\r\n        this.gl.uniform1f(maxSizeUniform, maxSize);\r\n        const innerPosUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INNER_POS_UNIFORM);\r\n        this.gl.uniform2fv(innerPosUniform, [(maxSize - texture.getWidth()) / 2.0, (maxSize - texture.getHeight()) / 2.0]);\r\n        const rotationUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ROTATION_UNIFORM);\r\n        this.gl.uniform1f(rotationUniform, rotation);\r\n        const samplerUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SAMPLER_UNIFORM);\r\n        this.gl.activeTexture(WebGLRenderingContext.TEXTURE0);\r\n        this.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture.getData());\r\n        this.gl.uniform1i(samplerUniform, 0);\r\n        const primitiveType = WebGLRenderingContext.TRIANGLE_STRIP;\r\n        const offset = 0;\r\n        const count = 4;\r\n        this.gl.drawArrays(primitiveType, offset, count);\r\n    }\r\n    createBuffer() {\r\n        const buffer = this.gl.createBuffer();\r\n        if (null === buffer) {\r\n            throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Can't create buffer!\");\r\n        }\r\n        return buffer;\r\n    }\r\n    static getCanvas(canvasId) {\r\n        const canvas = document.getElementById(canvasId);\r\n        if (canvas instanceof HTMLCanvasElement) {\r\n            return canvas;\r\n        }\r\n        throw new _exception_HtmlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Canvas don't exists!\");\r\n    }\r\n    static getWebGl(canvas) {\r\n        const gl = canvas.getContext(\"webgl\");\r\n        if (gl instanceof WebGLRenderingContext) {\r\n            return gl;\r\n        }\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Canvas don't provide webgl\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/webgl/Render.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Translatable; });\nclass Translatable {\r\n    constructor(x, y, z, rotation) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.z = z;\r\n        this.rotation = rotation;\r\n    }\r\n    getX() {\r\n        return this.x;\r\n    }\r\n    setX(x) {\r\n        this.x = x;\r\n    }\r\n    getY() {\r\n        return this.y;\r\n    }\r\n    setY(y) {\r\n        this.y = y;\r\n    }\r\n    move(x, y) {\r\n        this.x += x;\r\n        this.y += y;\r\n    }\r\n    getZ() {\r\n        return this.z;\r\n    }\r\n    setZ(z) {\r\n        this.z = z;\r\n    }\r\n    getRotation() {\r\n        return this.rotation;\r\n    }\r\n    setRotation(rotation) {\r\n        this.rotation = rotation;\r\n    }\r\n    rotate(angle) {\r\n        this.rotation += angle;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/engine/webgl/Translatable.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine_webgl_Render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/webgl/Render */ \"./src/engine/webgl/Render.ts\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n/* harmony import */ var _engine_input_InputManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/input/InputManager */ \"./src/engine/input/InputManager.ts\");\n/* harmony import */ var _data_textrues_textures_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/textrues/textures.png */ \"./src/data/textrues/textures.png\");\n/* harmony import */ var _data_textrues_textures_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_textrues_textures_png__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\nwindow.onload = function () {\r\n    let image = new Image();\r\n    image.onload = () => {\r\n        const render = new _engine_webgl_Render__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"canvas\", image);\r\n        const inputManager = new _engine_input_InputManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n        const game = new _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](render, inputManager);\r\n        function run(timestamp) {\r\n            game.update(timestamp);\r\n            requestAnimationFrame(run);\r\n        }\r\n        window.onkeydown = function (event) {\r\n            inputManager.onKeyDown(event);\r\n        };\r\n        window.onkeyup = function (event) {\r\n            inputManager.onKeyUp(event);\r\n        };\r\n        requestAnimationFrame(run);\r\n    };\r\n    image.src = _data_textrues_textures_png__WEBPACK_IMPORTED_MODULE_3___default.a;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });