/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    _classCallCheck(this, Gameboard);
    // Initialize the gameboard grid as a 10x10 grid with all cells initially set to null.
    this.grid = this.createGrid(10, 10, null);

    // Initialize an array to track missed attacks.
    this.missedAttacks = [];
  }

  // Create a 2D grid with the specified number of rows and columns, initialized with a given value.
  _createClass(Gameboard, [{
    key: "createGrid",
    value: function createGrid(rows, cols, initialValue) {
      var grid = [];
      for (var i = 0; i < rows; i++) {
        var row = [];
        for (var j = 0; j < cols; j++) {
          row.push(initialValue);
        }
        grid.push(row);
      }
      return grid;
    }

    // Check if a cell at given coordinates (y, x) is empty (null).
  }, {
    key: "emptyCellGrid",
    value: function emptyCellGrid(y, x) {
      return this.grid[y][x] === null;
    }

    // Place a ship on the gameboard at specified coordinates (y, x) and with a given orientation.
  }, {
    key: "placeShip",
    value: function placeShip(ship, y, x, orientation) {
      var _this = this;
      var coordinatesToCheck = [];
      switch (orientation) {
        case 'horizontal':
          // Check if the ship would go out of bounds horizontally.
          if (x + ship.length > 10) {
            throw new Error("Ship placement would go out of bounds horizontally: it takes ".concat(ship.length, " spaces."));
          }
          for (var i = 0; i < ship.length; i++) {
            coordinatesToCheck.push([y, x + i]);
          }
          break;
        case 'vertical':
          // Check if the ship would go out of bounds vertically.
          if (y + ship.length > 10) {
            throw new Error("Ship placement would go out of bounds vertically: it takes ".concat(ship.length, " spaces."));
          }
          for (var _i = 0; _i < ship.length; _i++) {
            coordinatesToCheck.push([y + _i, x]);
          }
          break;
      }

      // Check if all specified coordinates are empty before placing the ship.
      if (coordinatesToCheck.every(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          cy = _ref2[0],
          cx = _ref2[1];
        return _this.emptyCellGrid(cy, cx);
      })) {
        coordinatesToCheck.forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
            cy = _ref4[0],
            cx = _ref4[1];
          _this.grid[cy][cx] = ship;
        });
      } else {
        throw new Error('There is already a ship at the specified coordinates');
      }
    }

    // Process an attack at specified coordinates (y, x) and record hits or misses.
  }, {
    key: "receiveAttack",
    value: function receiveAttack(y, x) {
      // If the coordinates are not occupied by a ship.
      if (this.grid[y][x] === null) {
        // Record a miss and add the attack coordinates to the missedAttacks array.
        this.grid[y][x] = 'miss';
        this.missedAttacks.push({
          x: x,
          y: y
        });
      } else if (this.grid[y][x] !== 'miss' && this.grid[y][x] !== 'hit') {
        // If a ship occupies the cell, record a hit.
        var ship = this.grid[y][x];
        ship.hit(1);
        this.grid[y][x] = 'hit';
      }
    }

    // Get the array of missed attack coordinates.
  }, {
    key: "getMissedAttacks",
    value: function getMissedAttacks() {
      return this.missedAttacks;
    }

    // Check if all ships on the gameboard have been sunk, indicating a win condition.
  }, {
    key: "allShipsSunk",
    value: function allShipsSunk() {
      // Flatten the grid to get a single array of all grid cells containing ships.
      var allShips = this.grid.flat().filter(function (coordinate) {
        return coordinate instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"];
      });

      // Check if every ship in the array is sunk, returning true for all ships sunk.
      return allShips.every(function (ship) {
        return ship.isSunk();
      });
    }
  }]);
  return Gameboard;
}();


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Ship = /*#__PURE__*/function () {
  function Ship(length) {
    var hitsTaken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    _classCallCheck(this, Ship);
    this.length = length;
    this.hitsTaken = hitsTaken;
  }
  _createClass(Ship, [{
    key: "hit",
    value: function hit(num) {
      this.hitsTaken += num;
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      return this.length <= this.hitsTaken;
    }
  }]);
  return Ship;
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Styling for the game container */
.game-container {
  display: flex;
  justify-content: space-between;
  width: 800px; /* Adjust the width as needed */
  margin: 0 auto;
}

/* Styling for each player's board */
.player-board {
  flex: 1;
  text-align: center;
  padding: 20px;
}

/* Styling for the board itself */
.board {
  display: grid;
  grid-template-columns: repeat(10, 40px); /* Adjust the number of columns and cell size */
  grid-template-rows: repeat(10, 40px); /* Adjust the number of rows and cell size */
  gap: 2px; /* Gap between cells for a border effect */
}

/* Styling for individual cells */
.cell {
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

/* Styling for missed attack cells */
.cell.miss {
  background-color: #a3ddff;
}

/* Styling for hit cells */
.cell.hit {
  background-color: #ff0000;
}

/* Styling for cells with ships */
.cell.ship {
  background-color: #35424a;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,mCAAmC;AACnC;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY,EAAE,+BAA+B;EAC7C,cAAc;AAChB;;AAEA,oCAAoC;AACpC;EACE,OAAO;EACP,kBAAkB;EAClB,aAAa;AACf;;AAEA,iCAAiC;AACjC;EACE,aAAa;EACb,uCAAuC,EAAE,+CAA+C;EACxF,oCAAoC,EAAE,4CAA4C;EAClF,QAAQ,EAAE,0CAA0C;AACtD;;AAEA,iCAAiC;AACjC;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA,oCAAoC;AACpC;EACE,yBAAyB;AAC3B;;AAEA,0BAA0B;AAC1B;EACE,yBAAyB;AAC3B;;AAEA,iCAAiC;AACjC;EACE,yBAAyB;AAC3B","sourcesContent":["/* Styling for the game container */\n.game-container {\n  display: flex;\n  justify-content: space-between;\n  width: 800px; /* Adjust the width as needed */\n  margin: 0 auto;\n}\n\n/* Styling for each player's board */\n.player-board {\n  flex: 1;\n  text-align: center;\n  padding: 20px;\n}\n\n/* Styling for the board itself */\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 40px); /* Adjust the number of columns and cell size */\n  grid-template-rows: repeat(10, 40px); /* Adjust the number of rows and cell size */\n  gap: 2px; /* Gap between cells for a border effect */\n}\n\n/* Styling for individual cells */\n.cell {\n  width: 40px;\n  height: 40px;\n  background-color: #ffffff;\n  border: 1px solid #999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n/* Styling for missed attack cells */\n.cell.miss {\n  background-color: #a3ddff;\n}\n\n/* Styling for hit cells */\n.cell.hit {\n  background-color: #ff0000;\n}\n\n/* Styling for cells with ships */\n.cell.ship {\n  background-color: #35424a;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



var player1Board = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
var player2Board = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

// Function to create the grid for a player's board
function createBoardGrid(board) {
  var grid = board.grid;
  var boardSize = grid.length;
  var boardHTML = document.createElement('div');
  boardHTML.className = 'board';
  for (var i = 0; i < boardSize; i++) {
    for (var j = 0; j < boardSize; j++) {
      var cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.row = i;
      cell.dataset.column = j;
      boardHTML.appendChild(cell);
    }
  }
  return boardHTML;
}

// Function to update the HTML representation of a board
function updateBoardHTML(board, boardElement) {
  var grid = board.grid;
  var cells = boardElement.querySelectorAll('.cell');
  cells.forEach(function (cell) {
    var row = parseInt(cell.dataset.row);
    var column = parseInt(cell.dataset.column);

    // Customize the cell based on the content of the grid cell
    if (grid[row][column] === 'miss') {
      cell.classList.add('miss');
    } else if (grid[row][column] === 'hit') {
      cell.classList.add('hit');
    } else if (grid[row][column] instanceof _ship__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      cell.classList.add('ship');
    } else {
      cell.classList.remove('miss', 'hit', 'ship');
    }
  });
}
var player1BoardHTML = createBoardGrid(player1Board);
var player2BoardHTML = createBoardGrid(player2Board);
document.querySelector('#player1-board').appendChild(player1BoardHTML);
document.querySelector('#player2-board').appendChild(player2BoardHTML);
player1Board.grid[0][0] = 'miss';
player1Board.grid[0][1] = 'hit';
player1Board.grid[1][0] = 'miss';
player2Board.grid[0][0] = 'miss';
player2Board.grid[1][0] = 'hit';
updateBoardHTML(player1Board, player1BoardHTML);
updateBoardHTML(player2Board, player2BoardHTML);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNO0FBQ2hDMEMsWUFBWSxDQUFDMUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUs7QUFDL0IwQyxZQUFZLENBQUMxQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTTtBQUVoQzJDLFlBQVksQ0FBQzNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNO0FBQ2hDMkMsWUFBWSxDQUFDM0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUs7QUFFL0J1RCxlQUFlLENBQUNiLFlBQVksRUFBRXFCLGdCQUFnQixDQUFDO0FBQy9DUixlQUFlLENBQUNaLFlBQVksRUFBRXFCLGdCQUFnQixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIEluaXRpYWxpemUgdGhlIGdhbWVib2FyZCBncmlkIGFzIGEgMTB4MTAgZ3JpZCB3aXRoIGFsbCBjZWxscyBpbml0aWFsbHkgc2V0IHRvIG51bGwuXG4gICAgdGhpcy5ncmlkID0gdGhpcy5jcmVhdGVHcmlkKDEwLCAxMCwgbnVsbCk7XG5cbiAgICAvLyBJbml0aWFsaXplIGFuIGFycmF5IHRvIHRyYWNrIG1pc3NlZCBhdHRhY2tzLlxuICAgIHRoaXMubWlzc2VkQXR0YWNrcyA9IFtdO1xuICB9XG4gIFxuICAvLyBDcmVhdGUgYSAyRCBncmlkIHdpdGggdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygcm93cyBhbmQgY29sdW1ucywgaW5pdGlhbGl6ZWQgd2l0aCBhIGdpdmVuIHZhbHVlLlxuICBjcmVhdGVHcmlkKHJvd3MsIGNvbHMsIGluaXRpYWxWYWx1ZSkge1xuICAgIGNvbnN0IGdyaWQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xuICAgICAgICByb3cucHVzaChpbml0aWFsVmFsdWUpO1xuICAgICAgfVxuICAgICAgZ3JpZC5wdXNoKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiBncmlkO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYSBjZWxsIGF0IGdpdmVuIGNvb3JkaW5hdGVzICh5LCB4KSBpcyBlbXB0eSAobnVsbCkuXG4gIGVtcHR5Q2VsbEdyaWQoeSwgeCkge1xuICAgIHJldHVybiB0aGlzLmdyaWRbeV1beF0gPT09IG51bGw7XG4gIH1cblxuICAvLyBQbGFjZSBhIHNoaXAgb24gdGhlIGdhbWVib2FyZCBhdCBzcGVjaWZpZWQgY29vcmRpbmF0ZXMgKHksIHgpIGFuZCB3aXRoIGEgZ2l2ZW4gb3JpZW50YXRpb24uXG4gIHBsYWNlU2hpcChzaGlwLCB5LCB4LCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzVG9DaGVjayA9IFtdO1xuXG4gICAgc3dpdGNoIChvcmllbnRhdGlvbikge1xuICAgICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBzaGlwIHdvdWxkIGdvIG91dCBvZiBib3VuZHMgaG9yaXpvbnRhbGx5LlxuICAgICAgICBpZiAoeCArIHNoaXAubGVuZ3RoID4gMTApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNoaXAgcGxhY2VtZW50IHdvdWxkIGdvIG91dCBvZiBib3VuZHMgaG9yaXpvbnRhbGx5OiBpdCB0YWtlcyAke3NoaXAubGVuZ3RofSBzcGFjZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXNUb0NoZWNrLnB1c2goW3ksIHggKyBpXSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd2ZXJ0aWNhbCc6XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBzaGlwIHdvdWxkIGdvIG91dCBvZiBib3VuZHMgdmVydGljYWxseS5cbiAgICAgICAgaWYgKHkgKyBzaGlwLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTaGlwIHBsYWNlbWVudCB3b3VsZCBnbyBvdXQgb2YgYm91bmRzIHZlcnRpY2FsbHk6IGl0IHRha2VzICR7c2hpcC5sZW5ndGh9IHNwYWNlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb29yZGluYXRlc1RvQ2hlY2sucHVzaChbeSArIGksIHhdKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBhbGwgc3BlY2lmaWVkIGNvb3JkaW5hdGVzIGFyZSBlbXB0eSBiZWZvcmUgcGxhY2luZyB0aGUgc2hpcC5cbiAgICBpZiAoY29vcmRpbmF0ZXNUb0NoZWNrLmV2ZXJ5KChbY3ksIGN4XSkgPT4gdGhpcy5lbXB0eUNlbGxHcmlkKGN5LCBjeCkpKSB7XG4gICAgICBjb29yZGluYXRlc1RvQ2hlY2suZm9yRWFjaCgoW2N5LCBjeF0pID0+IHtcbiAgICAgICAgdGhpcy5ncmlkW2N5XVtjeF0gPSBzaGlwO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgaXMgYWxyZWFkeSBhIHNoaXAgYXQgdGhlIHNwZWNpZmllZCBjb29yZGluYXRlcycpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFByb2Nlc3MgYW4gYXR0YWNrIGF0IHNwZWNpZmllZCBjb29yZGluYXRlcyAoeSwgeCkgYW5kIHJlY29yZCBoaXRzIG9yIG1pc3Nlcy5cbiAgcmVjZWl2ZUF0dGFjayh5LCB4KSB7XG4gICAgLy8gSWYgdGhlIGNvb3JkaW5hdGVzIGFyZSBub3Qgb2NjdXBpZWQgYnkgYSBzaGlwLlxuICAgIGlmICh0aGlzLmdyaWRbeV1beF0gPT09IG51bGwpIHtcbiAgICAgIC8vIFJlY29yZCBhIG1pc3MgYW5kIGFkZCB0aGUgYXR0YWNrIGNvb3JkaW5hdGVzIHRvIHRoZSBtaXNzZWRBdHRhY2tzIGFycmF5LlxuICAgICAgdGhpcy5ncmlkW3ldW3hdID0gJ21pc3MnO1xuICAgICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goeyB4LCB5IH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ncmlkW3ldW3hdICE9PSAnbWlzcycgJiYgdGhpcy5ncmlkW3ldW3hdICE9PSAnaGl0Jykge1xuICAgICAgLy8gSWYgYSBzaGlwIG9jY3VwaWVzIHRoZSBjZWxsLCByZWNvcmQgYSBoaXQuXG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5ncmlkW3ldW3hdO1xuICAgICAgc2hpcC5oaXQoMSk7XG4gICAgICB0aGlzLmdyaWRbeV1beF0gPSAnaGl0JztcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgdGhlIGFycmF5IG9mIG1pc3NlZCBhdHRhY2sgY29vcmRpbmF0ZXMuXG4gIGdldE1pc3NlZEF0dGFja3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlzc2VkQXR0YWNrcztcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGFsbCBzaGlwcyBvbiB0aGUgZ2FtZWJvYXJkIGhhdmUgYmVlbiBzdW5rLCBpbmRpY2F0aW5nIGEgd2luIGNvbmRpdGlvbi5cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIC8vIEZsYXR0ZW4gdGhlIGdyaWQgdG8gZ2V0IGEgc2luZ2xlIGFycmF5IG9mIGFsbCBncmlkIGNlbGxzIGNvbnRhaW5pbmcgc2hpcHMuXG4gICAgY29uc3QgYWxsU2hpcHMgPSB0aGlzLmdyaWQuZmxhdCgpLmZpbHRlcihjb29yZGluYXRlID0+IGNvb3JkaW5hdGUgaW5zdGFuY2VvZiBTaGlwKTtcbiAgICBcbiAgICAvLyBDaGVjayBpZiBldmVyeSBzaGlwIGluIHRoZSBhcnJheSBpcyBzdW5rLCByZXR1cm5pbmcgdHJ1ZSBmb3IgYWxsIHNoaXBzIHN1bmsuXG4gICAgcmV0dXJuIGFsbFNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgsIGhpdHNUYWtlbiA9IDApIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHNUYWtlbiA9IGhpdHNUYWtlbjtcbiAgfVxuICBcbiAgaGl0KG51bSkge1xuICAgIHRoaXMuaGl0c1Rha2VuICs9IG51bTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPD0gdGhpcy5oaXRzVGFrZW47XG4gIH1cbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogU3R5bGluZyBmb3IgdGhlIGdhbWUgY29udGFpbmVyICovXG4uZ2FtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA4MDBweDsgLyogQWRqdXN0IHRoZSB3aWR0aCBhcyBuZWVkZWQgKi9cbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi8qIFN0eWxpbmcgZm9yIGVhY2ggcGxheWVyJ3MgYm9hcmQgKi9cbi5wbGF5ZXItYm9hcmQge1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi8qIFN0eWxpbmcgZm9yIHRoZSBib2FyZCBpdHNlbGYgKi9cbi5ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0MHB4KTsgLyogQWRqdXN0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgY2VsbCBzaXplICovXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MHB4KTsgLyogQWRqdXN0IHRoZSBudW1iZXIgb2Ygcm93cyBhbmQgY2VsbCBzaXplICovXG4gIGdhcDogMnB4OyAvKiBHYXAgYmV0d2VlbiBjZWxscyBmb3IgYSBib3JkZXIgZWZmZWN0ICovXG59XG5cbi8qIFN0eWxpbmcgZm9yIGluZGl2aWR1YWwgY2VsbHMgKi9cbi5jZWxsIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLyogU3R5bGluZyBmb3IgbWlzc2VkIGF0dGFjayBjZWxscyAqL1xuLmNlbGwubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhM2RkZmY7XG59XG5cbi8qIFN0eWxpbmcgZm9yIGhpdCBjZWxscyAqL1xuLmNlbGwuaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbn1cblxuLyogU3R5bGluZyBmb3IgY2VsbHMgd2l0aCBzaGlwcyAqL1xuLmNlbGwuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQyNGE7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbUNBQW1DO0FBQ25DO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZLEVBQUUsK0JBQStCO0VBQzdDLGNBQWM7QUFDaEI7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QyxFQUFFLCtDQUErQztFQUN4RixvQ0FBb0MsRUFBRSw0Q0FBNEM7RUFDbEYsUUFBUSxFQUFFLDBDQUEwQztBQUN0RDs7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTdHlsaW5nIGZvciB0aGUgZ2FtZSBjb250YWluZXIgKi9cXG4uZ2FtZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA4MDBweDsgLyogQWRqdXN0IHRoZSB3aWR0aCBhcyBuZWVkZWQgKi9cXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBlYWNoIHBsYXllcidzIGJvYXJkICovXFxuLnBsYXllci1ib2FyZCB7XFxuICBmbGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIGJvYXJkIGl0c2VsZiAqL1xcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDQwcHgpOyAvKiBBZGp1c3QgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBjZWxsIHNpemUgKi9cXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MHB4KTsgLyogQWRqdXN0IHRoZSBudW1iZXIgb2Ygcm93cyBhbmQgY2VsbCBzaXplICovXFxuICBnYXA6IDJweDsgLyogR2FwIGJldHdlZW4gY2VsbHMgZm9yIGEgYm9yZGVyIGVmZmVjdCAqL1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBpbmRpdmlkdWFsIGNlbGxzICovXFxuLmNlbGwge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBtaXNzZWQgYXR0YWNrIGNlbGxzICovXFxuLmNlbGwubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNkZGZmO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBoaXQgY2VsbHMgKi9cXG4uY2VsbC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgY2VsbHMgd2l0aCBzaGlwcyAqL1xcbi5jZWxsLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1NDI0YTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNvbnN0IHBsYXllcjFCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbmNvbnN0IHBsYXllcjJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgdGhlIGdyaWQgZm9yIGEgcGxheWVyJ3MgYm9hcmRcbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkR3JpZChib2FyZCkge1xuICBjb25zdCBncmlkID0gYm9hcmQuZ3JpZDtcbiAgY29uc3QgYm9hcmRTaXplID0gZ3JpZC5sZW5ndGg7XG4gIGNvbnN0IGJvYXJkSFRNTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZEhUTUwuY2xhc3NOYW1lID0gJ2JvYXJkJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkU2l6ZTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFNpemU7IGorKykge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgICBjZWxsLmRhdGFzZXQucm93ID0gaTtcbiAgICAgIGNlbGwuZGF0YXNldC5jb2x1bW4gPSBqO1xuICAgICAgYm9hcmRIVE1MLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib2FyZEhUTUw7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgSFRNTCByZXByZXNlbnRhdGlvbiBvZiBhIGJvYXJkXG5mdW5jdGlvbiB1cGRhdGVCb2FyZEhUTUwoYm9hcmQsIGJvYXJkRWxlbWVudCkge1xuICBjb25zdCBncmlkID0gYm9hcmQuZ3JpZDtcbiAgY29uc3QgY2VsbHMgPSBib2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcblxuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdyk7XG4gICAgY29uc3QgY29sdW1uID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbHVtbik7XG5cbiAgICAvLyBDdXN0b21pemUgdGhlIGNlbGwgYmFzZWQgb24gdGhlIGNvbnRlbnQgb2YgdGhlIGdyaWQgY2VsbFxuICAgIGlmIChncmlkW3Jvd11bY29sdW1uXSA9PT0gJ21pc3MnKSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICB9IGVsc2UgaWYgKGdyaWRbcm93XVtjb2x1bW5dID09PSAnaGl0Jykge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICB9IGVsc2UgaWYgKGdyaWRbcm93XVtjb2x1bW5dIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnbWlzcycsICdoaXQnLCAnc2hpcCcpO1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IHBsYXllcjFCb2FyZEhUTUwgPSBjcmVhdGVCb2FyZEdyaWQocGxheWVyMUJvYXJkKTtcbmNvbnN0IHBsYXllcjJCb2FyZEhUTUwgPSBjcmVhdGVCb2FyZEdyaWQocGxheWVyMkJvYXJkKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjEtYm9hcmQnKS5hcHBlbmRDaGlsZChwbGF5ZXIxQm9hcmRIVE1MKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIyLWJvYXJkJykuYXBwZW5kQ2hpbGQocGxheWVyMkJvYXJkSFRNTCk7XG5cbnBsYXllcjFCb2FyZC5ncmlkWzBdWzBdID0gJ21pc3MnO1xucGxheWVyMUJvYXJkLmdyaWRbMF1bMV0gPSAnaGl0JztcbnBsYXllcjFCb2FyZC5ncmlkWzFdWzBdID0gJ21pc3MnO1xuXG5wbGF5ZXIyQm9hcmQuZ3JpZFswXVswXSA9ICdtaXNzJztcbnBsYXllcjJCb2FyZC5ncmlkWzFdWzBdID0gJ2hpdCc7XG5cbnVwZGF0ZUJvYXJkSFRNTChwbGF5ZXIxQm9hcmQsIHBsYXllcjFCb2FyZEhUTUwpO1xudXBkYXRlQm9hcmRIVE1MKHBsYXllcjJCb2FyZCwgcGxheWVyMkJvYXJkSFRNTCk7Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsIlNoaXAiLCJHYW1lYm9hcmQiLCJfY2xhc3NDYWxsQ2hlY2siLCJncmlkIiwiY3JlYXRlR3JpZCIsIm1pc3NlZEF0dGFja3MiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJvd3MiLCJjb2xzIiwiaW5pdGlhbFZhbHVlIiwicm93IiwiaiIsImVtcHR5Q2VsbEdyaWQiLCJ5IiwieCIsInBsYWNlU2hpcCIsInNoaXAiLCJvcmllbnRhdGlvbiIsIl90aGlzIiwiY29vcmRpbmF0ZXNUb0NoZWNrIiwiRXJyb3IiLCJldmVyeSIsIl9yZWYiLCJfcmVmMiIsIl9zbGljZWRUb0FycmF5IiwiY3kiLCJjeCIsImZvckVhY2giLCJfcmVmMyIsIl9yZWY0IiwicmVjZWl2ZUF0dGFjayIsImhpdCIsImdldE1pc3NlZEF0dGFja3MiLCJhbGxTaGlwc1N1bmsiLCJhbGxTaGlwcyIsImZsYXQiLCJmaWx0ZXIiLCJjb29yZGluYXRlIiwiaXNTdW5rIiwiZGVmYXVsdCIsImhpdHNUYWtlbiIsImFyZ3VtZW50cyIsIm51bSIsInBsYXllcjFCb2FyZCIsInBsYXllcjJCb2FyZCIsImNyZWF0ZUJvYXJkR3JpZCIsImJvYXJkIiwiYm9hcmRTaXplIiwiYm9hcmRIVE1MIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY2VsbCIsImRhdGFzZXQiLCJjb2x1bW4iLCJhcHBlbmRDaGlsZCIsInVwZGF0ZUJvYXJkSFRNTCIsImJvYXJkRWxlbWVudCIsImNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnNlSW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicGxheWVyMUJvYXJkSFRNTCIsInBsYXllcjJCb2FyZEhUTUwiLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==