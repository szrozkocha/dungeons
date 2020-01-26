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
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"knight_top\\\",\\\"x\\\":0,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"knight_down\\\",\\\"x\\\":0,\\\"y\\\":16,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"knight_down_right\\\",\\\"x\\\":0,\\\"y\\\":32,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"knight_down_left\\\",\\\"x\\\":0,\\\"y\\\":48,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"floor\\\",\\\"x\\\":16,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall\\\",\\\"x\\\":32,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_left_end\\\",\\\"x\\\":32,\\\"y\\\":16,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_right_end\\\",\\\"x\\\":32,\\\"y\\\":32,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_top\\\",\\\"x\\\":48,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_convave_corner\\\",\\\"x\\\":64,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"wall_convex_corner\\\",\\\"x\\\":80,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"sword\\\",\\\"x\\\":16,\\\"y\\\":16,\\\"width\\\":16,\\\"height\\\":32},{\\\"name\\\":\\\"sword_top\\\",\\\"x\\\":16,\\\"y\\\":16,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"sword_bottom\\\",\\\"x\\\":16,\\\"y\\\":32,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"bat_up\\\",\\\"x\\\":96,\\\"y\\\":0,\\\"width\\\":16,\\\"height\\\":16},{\\\"name\\\":\\\"bat_down\\\",\\\"x\\\":96,\\\"y\\\":16,\\\"width\\\":16,\\\"height\\\":16}]\");\n\n//# sourceURL=webpack:///./src/data/textrues/textures.json?");

/***/ }),

/***/ "./src/data/textrues/textures.png":
/*!****************************************!*\
  !*** ./src/data/textrues/textures.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAEACAMAAADyTj5VAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAAFAwRHBEXHRIYGBoeFRkyIRQbIxUdKxIfOxoaJBcpIR0jKh4iLBskMB0nNScfMCkfJSguKy82OiMvOyQvOCYtOyQwOzMoOz4oMTU9ODg4CitNJiFFLCVQIj9NNTVhNEcnHkF2H1F1JFJpNVJhShgYQhsuUCoWQig1Ry46SSExRTIkQD02RT07SjE8SzI9ViUvVj8qdR8gcjcXayIiYSk1aS0ybTkyejMzUjpCRT1rRjFyWjFzT1w3UFQ2RHczXWI/Xns3ZkcpYUwve0Ijelk3TU1NWk1GX0tNQkJrUFB4a1tOYl1SfF5GaG5GdGZfcnhRdWdgd3p3K2OALGaDM3eZLnmydTyGSHCFUX6WZEakRHzPZJQ4ZJFUWoymaoycepajfp6tW6PHkiY7qjMzti8xhUcbn1o6j34ou1UzqmYiuHwsv3s/h0BAhGFBjWhFgHFdgndkh3ZuiHdvh314kX9rqklRom1KpH1b/wAAw30ozHcz0EZIlEqcgopYipJdr4BVoIxjqbdXyJQ3wYBnzpBpy592zKpEz7xE1rxr28JE2cho3MV/n6KImaqZiay+i7S4vZyUq7GGpqamjrvRo8GXq8LNxJOH2a+D2cWJzMyqzMy+xNK41su25NqZ5tG8x8fHwtLe0dHC3tbFyNrj1ejw5cfH5ODG8PDd6+vr8Pf6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI+ZBYAAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAAJcEhZcwAADsAAAA7AAWrWiQkAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTnU1rJkAAAwt0lEQVR4Xu2djYNdRZnmsUa7UceLsCLOaDBDoPeOKyaDWe0O0oG4Dusgmc1AJLomgxBnTJvsms1sUMmgA6utPY6uyjCwDaOiYOCf7H2e933r83zd2/d2p0nq131Pnaeqzjn3nvc5VXU++vZNWwXjArciSMLJTVMwPnHikq22i+9a6rnWehDbFZrY7FgTmbHd1km5/H8tsM3sGsMGSBJOLLYTcT0aINsj6c4hYaaPcnmsknvdJ7vMJAYY+YTv12I7EdetAfwe8bMjQfKGyZfHGuVX1q3JrjJsgAKL7USM//qv/5ettot5B3BWPYjthoI777zT5my3dWLVArLSvWyAlZHvtXRqsZ0I/bRxn3HONuOZdwBn1YOsYIc47pTYmY/cnY899hgccDuU7bZOUB+VPW7FVivsoAEaO94zaACittapxXYi2AW4jzl3ZN++fUeO7MPMkXe8AeKeCAniD2fDAaoHcXeGn13r892ZDgdMZwD0XRbbiVADfMxdhQGuXt2H+F8/BkCfj65flGP8OdXOfRDU9D87ZoDyiHdnTrU7YGfHANehAWw3pN0+Ahmntts60Zr+p7NlnhH3la/ka96+AbSfC/3d7RbbieAgEAZA+AXE/51vAN0PWbfvHhshkiN06G7ldtttnUj98HN7NgaYG+7MV76SB3z7BjDM2W66LoB2Rwuw7+rly2gFrpsxAPZD2u2P4IAR4q/nycPs+BjAnaEBsojPZAA7ayVTGuDECbQAGPxfBvvwBtx1YQDsDxy8hJ04MziwR/wnM0B2FtBlgEYfPoVG/MUAacgLA/DN69xOjwFWuCFbFGsv3/fcAzirHsQ+S9rtZ9hu68SqBWy1Be7Y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\"\n\n//# sourceURL=webpack:///./src/data/textrues/textures.png?");

/***/ }),

/***/ "./src/exception/BaseException.ts":
/*!****************************************!*\
  !*** ./src/exception/BaseException.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseException; });\nclass BaseException {\r\n    constructor(message) {\r\n        this.message = message;\r\n    }\r\n    getMessage() {\r\n        return this.message;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/exception/BaseException.ts?");

/***/ }),

/***/ "./src/exception/GlException.ts":
/*!**************************************!*\
  !*** ./src/exception/GlException.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GlException; });\n/* harmony import */ var _BaseException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseException */ \"./src/exception/BaseException.ts\");\n\r\nclass GlException extends _BaseException__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(message) {\r\n        super(message);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/exception/GlException.ts?");

/***/ }),

/***/ "./src/exception/HtmlException.ts":
/*!****************************************!*\
  !*** ./src/exception/HtmlException.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HtmlException; });\n/* harmony import */ var _BaseException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseException */ \"./src/exception/BaseException.ts\");\n\r\nclass HtmlException extends _BaseException__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(message) {\r\n        super(message);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/exception/HtmlException.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webgl_Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl/Sprite */ \"./src/webgl/Sprite.ts\");\n/* harmony import */ var _webgl_Render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl/Render */ \"./src/webgl/Render.ts\");\n\r\n\r\nconst render = new _webgl_Render__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"canvas\");\r\nconst wall = new _webgl_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-24, 0, 0, 0, \"wall\");\r\nconst sword = new _webgl_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 0, Math.PI / 2, \"sword\");\r\nconst bat = new _webgl_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](24, 0, 0, 0, \"bat_up\");\r\nsetInterval(() => {\r\n    const angle = Math.PI / (1000 / 60 * 10);\r\n    wall.rotate(angle);\r\n    sword.rotate(angle);\r\n    bat.rotate(angle);\r\n    render.resize();\r\n    render.clear();\r\n    render.draw(sword);\r\n    render.draw(wall);\r\n    render.draw(bat);\r\n}, 1000 / 60);\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/webgl/Render.ts":
/*!*****************************!*\
  !*** ./src/webgl/Render.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Render; });\n/* harmony import */ var _exception_HtmlException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exception/HtmlException */ \"./src/exception/HtmlException.ts\");\n/* harmony import */ var _exception_GlException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exception/GlException */ \"./src/exception/GlException.ts\");\n/* harmony import */ var _SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpriteShaderProgram */ \"./src/webgl/SpriteShaderProgram.ts\");\n/* harmony import */ var _TextureManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextureManager */ \"./src/webgl/TextureManager.ts\");\n/* harmony import */ var _data_shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/shaders/vertex.glsl */ \"./src/data/shaders/vertex.glsl\");\n/* harmony import */ var _data_shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/shaders/fragment.glsl */ \"./src/data/shaders/fragment.glsl\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Render {\r\n    constructor(canvasId) {\r\n        this.gl = Render.getWebGl(Render.getCanvas(canvasId));\r\n        this.gl.enable(WebGLRenderingContext.DEPTH_TEST);\r\n        this.gl.enable(WebGLRenderingContext.CULL_FACE);\r\n        this.gl.enable(WebGLRenderingContext.BLEND);\r\n        this.gl.blendFunc(WebGLRenderingContext.ONE, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA);\r\n        this.gl.depthFunc(WebGLRenderingContext.LEQUAL);\r\n        this.spriteShaderProgram = new _SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.gl, _data_shaders_vertex_glsl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _data_shaders_fragment_glsl__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n        this.textureManager = new _TextureManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.gl);\r\n    }\r\n    resize() {\r\n        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);\r\n    }\r\n    clear() {\r\n        this.gl.clearColor(0, 0, 0, 1);\r\n        this.gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);\r\n        this.gl.clear(WebGLRenderingContext.DEPTH_BUFFER_BIT);\r\n    }\r\n    draw(sprite) {\r\n        this.spriteShaderProgram.use();\r\n        const texture = this.textureManager.getTexture(sprite.getTexture());\r\n        const positionAttribute = this.spriteShaderProgram.getAttribute(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].POSITION_ATTRIBUTE);\r\n        const positionBuffer = this.createBuffer();\r\n        this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, positionBuffer);\r\n        const vertices = [\r\n            1.0, 0.0,\r\n            0.0, 0.0,\r\n            1.0, 1.0,\r\n            0.0, 1.0\r\n        ];\r\n        this.gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array(vertices), WebGLRenderingContext.STATIC_DRAW);\r\n        this.gl.enableVertexAttribArray(positionAttribute);\r\n        this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, positionBuffer);\r\n        this.gl.vertexAttribPointer(positionAttribute, 2, WebGLRenderingContext.FLOAT, false, 0, 0);\r\n        const zUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Z_UNIFORM);\r\n        this.gl.uniform1f(zUniform, sprite.getZ());\r\n        const positionUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].POSITION_UNIFORM);\r\n        this.gl.uniform2fv(positionUniform, new Float32Array([sprite.getX(), sprite.getY()]));\r\n        const scaleUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SCALE_UNIFORM);\r\n        this.gl.uniform1f(scaleUniform, 128);\r\n        const ratioUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].RATIO_UNIFORM);\r\n        this.gl.uniform1f(ratioUniform, this.gl.canvas.width / this.gl.canvas.height);\r\n        const maxSizeUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].MAX_SIZE_UNIFORM);\r\n        const maxSize = Math.ceil(Math.sqrt(Math.pow(texture.getWidth() / 2.0, 2.0) + Math.pow(texture.getHeight() / 2.0, 2.0))) * 2.0;\r\n        this.gl.uniform1f(maxSizeUniform, maxSize);\r\n        const innerPosUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INNER_POS_UNIFORM);\r\n        this.gl.uniform2fv(innerPosUniform, [(maxSize - texture.getWidth()) / 2.0, (maxSize - texture.getHeight()) / 2.0]);\r\n        const rotationUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ROTATION_UNIFORM);\r\n        this.gl.uniform1f(rotationUniform, sprite.getRotation());\r\n        const samplerUniform = this.spriteShaderProgram.getUniform(_SpriteShaderProgram__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SAMPLER_UNIFORM);\r\n        this.gl.activeTexture(WebGLRenderingContext.TEXTURE0);\r\n        this.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture.getData());\r\n        this.gl.uniform1i(samplerUniform, 0);\r\n        const primitiveType = WebGLRenderingContext.TRIANGLE_STRIP;\r\n        const offset = 0;\r\n        const count = 4;\r\n        this.gl.drawArrays(primitiveType, offset, count);\r\n    }\r\n    createBuffer() {\r\n        const buffer = this.gl.createBuffer();\r\n        if (null === buffer) {\r\n            throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Can't create buffer!\");\r\n        }\r\n        return buffer;\r\n    }\r\n    static getCanvas(canvasId) {\r\n        const canvas = document.getElementById(canvasId);\r\n        if (canvas instanceof HTMLCanvasElement) {\r\n            return canvas;\r\n        }\r\n        throw new _exception_HtmlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Canvas don't exists!\");\r\n    }\r\n    static getWebGl(canvas) {\r\n        const gl = canvas.getContext(\"webgl\");\r\n        if (gl instanceof WebGLRenderingContext) {\r\n            return gl;\r\n        }\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Canvas don't provide webgl\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/webgl/Render.ts?");

/***/ }),

/***/ "./src/webgl/ShaderProgram.ts":
/*!************************************!*\
  !*** ./src/webgl/ShaderProgram.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ShaderProgram; });\n/* harmony import */ var _exception_GlException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exception/GlException */ \"./src/exception/GlException.ts\");\n\r\nclass ShaderProgram {\r\n    constructor(gl, vertexShaderSource, fragmentShaderSource) {\r\n        this.gl = gl;\r\n        this.attributes = {};\r\n        this.uniforms = {};\r\n        const vertexShader = this.createShader(vertexShaderSource, WebGLRenderingContext.VERTEX_SHADER);\r\n        const fragmentShader = this.createShader(fragmentShaderSource, WebGLRenderingContext.FRAGMENT_SHADER);\r\n        this.glShaderProgram = this.createProgram(vertexShader, fragmentShader);\r\n    }\r\n    getAttribute(name) {\r\n        if (this.attributes.hasOwnProperty(name)) {\r\n            return this.attributes[name];\r\n        }\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Can't get attribute!\");\r\n    }\r\n    getUniform(name) {\r\n        if (this.uniforms.hasOwnProperty(name)) {\r\n            return this.uniforms[name];\r\n        }\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Can't get uniform!\");\r\n    }\r\n    use() {\r\n        this.gl.useProgram(this.glShaderProgram);\r\n    }\r\n    getAttributeLocation(attributeName) {\r\n        let attributeLocation = this.gl.getAttribLocation(this.glShaderProgram, attributeName);\r\n        if (-1 === attributeLocation) {\r\n            throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Can't get attribute location!\");\r\n        }\r\n        return attributeLocation;\r\n    }\r\n    getUniformLocation(uniformName) {\r\n        let uniformLocation = this.gl.getUniformLocation(this.glShaderProgram, uniformName);\r\n        if (null === uniformLocation) {\r\n            throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Can't get uniform location!\");\r\n        }\r\n        return uniformLocation;\r\n    }\r\n    createShader(source, type) {\r\n        const shader = this.gl.createShader(type);\r\n        if (null === shader) {\r\n            throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Can't create shader!\");\r\n        }\r\n        this.gl.shaderSource(shader, source);\r\n        this.gl.compileShader(shader);\r\n        const success = this.gl.getShaderParameter(shader, WebGLRenderingContext.COMPILE_STATUS);\r\n        if (success) {\r\n            return shader;\r\n        }\r\n        console.log(this.gl.getShaderInfoLog(shader));\r\n        this.gl.deleteShader(shader);\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Can't compile shader!\");\r\n    }\r\n    createProgram(vertexShader, fragmentShader) {\r\n        const program = this.gl.createProgram();\r\n        if (null === program) {\r\n            throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Can't create program!\");\r\n        }\r\n        this.gl.attachShader(program, vertexShader);\r\n        this.gl.attachShader(program, fragmentShader);\r\n        this.gl.linkProgram(program);\r\n        const success = this.gl.getProgramParameter(program, WebGLRenderingContext.LINK_STATUS);\r\n        if (success) {\r\n            return program;\r\n        }\r\n        this.gl.deleteProgram(program);\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Can't link program!\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/webgl/ShaderProgram.ts?");

/***/ }),

/***/ "./src/webgl/Sprite.ts":
/*!*****************************!*\
  !*** ./src/webgl/Sprite.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sprite; });\nclass Sprite {\r\n    constructor(x, y, z, rotation, texture) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.z = z;\r\n        this.rotation = rotation;\r\n        this.texture = texture;\r\n    }\r\n    getX() {\r\n        return this.x;\r\n    }\r\n    getY() {\r\n        return this.y;\r\n    }\r\n    getZ() {\r\n        return this.z;\r\n    }\r\n    getRotation() {\r\n        return this.rotation;\r\n    }\r\n    setRotation(rotation) {\r\n        this.rotation = rotation;\r\n    }\r\n    rotate(angle) {\r\n        this.rotation += angle;\r\n    }\r\n    getTexture() {\r\n        return this.texture;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/webgl/Sprite.ts?");

/***/ }),

/***/ "./src/webgl/SpriteShaderProgram.ts":
/*!******************************************!*\
  !*** ./src/webgl/SpriteShaderProgram.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SpriteShaderProgram; });\n/* harmony import */ var _ShaderProgram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShaderProgram */ \"./src/webgl/ShaderProgram.ts\");\n\r\nclass SpriteShaderProgram extends _ShaderProgram__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(gl, vertexShaderSource, fragmentShaderSource) {\r\n        super(gl, vertexShaderSource, fragmentShaderSource);\r\n        this.attributes[SpriteShaderProgram.POSITION_ATTRIBUTE] = this.getAttributeLocation(SpriteShaderProgram.POSITION_ATTRIBUTE);\r\n        this.uniforms[SpriteShaderProgram.Z_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.Z_UNIFORM);\r\n        this.uniforms[SpriteShaderProgram.POSITION_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.POSITION_UNIFORM);\r\n        this.uniforms[SpriteShaderProgram.SCALE_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.SCALE_UNIFORM);\r\n        this.uniforms[SpriteShaderProgram.RATIO_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.RATIO_UNIFORM);\r\n        this.uniforms[SpriteShaderProgram.MAX_SIZE_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.MAX_SIZE_UNIFORM);\r\n        this.uniforms[SpriteShaderProgram.INNER_POS_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.INNER_POS_UNIFORM);\r\n        this.uniforms[SpriteShaderProgram.ROTATION_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.ROTATION_UNIFORM);\r\n        this.uniforms[SpriteShaderProgram.SAMPLER_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.SAMPLER_UNIFORM);\r\n    }\r\n}\r\nSpriteShaderProgram.POSITION_ATTRIBUTE = \"aPosition\";\r\nSpriteShaderProgram.Z_UNIFORM = \"uZ\";\r\nSpriteShaderProgram.POSITION_UNIFORM = \"uPosition\";\r\nSpriteShaderProgram.SCALE_UNIFORM = \"uScale\";\r\nSpriteShaderProgram.RATIO_UNIFORM = \"uRatio\";\r\nSpriteShaderProgram.MAX_SIZE_UNIFORM = \"uMaxSize\";\r\nSpriteShaderProgram.INNER_POS_UNIFORM = \"uInnerPos\";\r\nSpriteShaderProgram.ROTATION_UNIFORM = \"uRotation\";\r\nSpriteShaderProgram.SAMPLER_UNIFORM = \"uSampler\";\r\n\n\n//# sourceURL=webpack:///./src/webgl/SpriteShaderProgram.ts?");

/***/ }),

/***/ "./src/webgl/Texture.ts":
/*!******************************!*\
  !*** ./src/webgl/Texture.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Texture; });\nclass Texture {\r\n    constructor(name, width, height, data) {\r\n        this.name = name;\r\n        this.width = width;\r\n        this.height = height;\r\n        this.data = data;\r\n    }\r\n    getName() {\r\n        return this.name;\r\n    }\r\n    getWidth() {\r\n        return this.width;\r\n    }\r\n    getHeight() {\r\n        return this.height;\r\n    }\r\n    getData() {\r\n        return this.data;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/webgl/Texture.ts?");

/***/ }),

/***/ "./src/webgl/TextureManager.ts":
/*!*************************************!*\
  !*** ./src/webgl/TextureManager.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextureManager; });\n/* harmony import */ var _data_textrues_textures_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/textrues/textures.json */ \"./src/data/textrues/textures.json\");\nvar _data_textrues_textures_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/textrues/textures.json */ \"./src/data/textrues/textures.json\", 1);\n/* harmony import */ var _data_textrues_textures_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/textrues/textures.png */ \"./src/data/textrues/textures.png\");\n/* harmony import */ var _data_textrues_textures_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_textrues_textures_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _exception_GlException__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exception/GlException */ \"./src/exception/GlException.ts\");\n/* harmony import */ var _Texture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Texture */ \"./src/webgl/Texture.ts\");\n\r\n\r\n\r\n\r\nclass TextureManager {\r\n    constructor(gl) {\r\n        this.textures = {};\r\n        let image = new Image();\r\n        image.src = _data_textrues_textures_png__WEBPACK_IMPORTED_MODULE_1___default.a;\r\n        for (const textureData of _data_textrues_textures_json__WEBPACK_IMPORTED_MODULE_0__) {\r\n            let textureCanvas = document.createElement(\"canvas\");\r\n            textureCanvas.width = textureData.width;\r\n            textureCanvas.height = textureData.height;\r\n            let textureCtx = textureCanvas.getContext(\"2d\");\r\n            if (textureCtx === null) {\r\n                throw \"Cant create context 2d\";\r\n            }\r\n            textureCtx.drawImage(image, textureData.x, textureData.y, textureData.width, textureData.height, 0, 0, textureData.width, textureData.height);\r\n            const texture = TextureManager.createTexture(gl);\r\n            gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);\r\n            gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, textureCanvas);\r\n            gl.generateMipmap(gl.TEXTURE_2D);\r\n            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\r\n            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\r\n            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);\r\n            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);\r\n            this.textures[textureData.name] = new _Texture__WEBPACK_IMPORTED_MODULE_3__[\"default\"](textureData.name, textureData.width, textureData.height, texture);\r\n        }\r\n    }\r\n    getTexture(name) {\r\n        if (this.textures.hasOwnProperty(name)) {\r\n            return this.textures[name];\r\n        }\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Can't get texture!\");\r\n    }\r\n    static createTexture(gl) {\r\n        const texture = gl.createTexture();\r\n        if (null !== texture) {\r\n            return texture;\r\n        }\r\n        throw new _exception_GlException__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Can't create texture!\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/webgl/TextureManager.ts?");

/***/ })

/******/ });