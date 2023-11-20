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

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Computer)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Computer = /*#__PURE__*/function () {
  function Computer() {
    _classCallCheck(this, Computer);
    this.name = 'player2';
    this.attackedCoordinates = [];
  }
  _createClass(Computer, [{
    key: "randomAttack",
    value: function randomAttack(enemyBoard) {
      var y, x;
      while (true) {
        y = Math.floor(Math.random() * enemyBoard.grid.length);
        x = Math.floor(Math.random() * enemyBoard.grid[0].length);
        if (!this.attackedCoordinates.some(function (coords) {
          return coords[0] === y && coords[1] === x;
        })) {
          break;
        }
      }
      this.attackedCoordinates.push([y, x]);
      enemyBoard.receiveAttack(y, x);
      return [y, x];
    }
  }, {
    key: "populateBoard",
    value: function populateBoard(board, shipsObj) {
      for (var shipName in shipsObj) {
        var placed = false;
        var ship = shipsObj[shipName];
        while (!placed) {
          var y = Math.floor(Math.random() * board.grid.length);
          var x = Math.floor(Math.random() * board.grid[0].length);
          var orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
          try {
            board.placeShip(ship, y, x, orientation);
            placed = true; // Ship is placed successfully
          } catch (error) {
            // if placing fails
            placed = false;
          }
        }
      }
    }
  }]);
  return Computer;
}();


/***/ }),

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBoardGrid: () => (/* binding */ createBoardGrid),
/* harmony export */   updateBoardHTML: () => (/* binding */ updateBoardHTML)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


// Function to create the grid for a player's board 
function createBoardGrid(board) {
  var boardSize = board.grid.length;
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
    } else if (grid[row][column] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      cell.classList.add('ship');
    } else {
      cell.classList.remove('miss', 'hit', 'ship');
    }
  });
}


/***/ }),

/***/ "./src/drag-drop-ships.js":
/*!********************************!*\
  !*** ./src/drag-drop-ships.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateShipsContainer)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");

function populateShipsContainer() {
  var shipsContainer = document.querySelector('.ships-container');
  var ships = {
    "Carrier": new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](5, "Carrier"),
    "Battleship": new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](4, "Battleship"),
    "Cruiser": new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](3, "Cruiser"),
    "Submarine": new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](3, "Submarine"),
    "Destroyer": new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](2, "Destroyer")
  };
  var _loop = function _loop() {
    if (ships.hasOwnProperty(shipName)) {
      var ship = ships[shipName];
      var shipDiv = document.createElement("div");
      shipDiv.className = "draggable-ship";
      shipDiv.setAttribute('data-ship', shipName);
      shipDiv.innerHTML = "<p>".concat(shipName, "</p>");
      shipDiv.addEventListener('click', function () {
        ship.toggleOrientation();
        updateShipDivOrientation(shipDiv, ship.orientation);
      });
      shipsContainer.appendChild(shipDiv);
    }
  };
  for (var shipName in ships) {
    _loop();
  }
  return ships;
}
function updateShipDivOrientation(div, orientation) {
  div.classList.toggle('vertical', orientation === 'vertical');
}

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
    this.player = null;
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
        // Create a new Ship instance from the ship parameter
        // I was having trouble with both board sharing the same Ship instance
        var newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](ship.length, ship.name);

        // Place the new ship on this board's grid
        coordinatesToCheck.forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
            cy = _ref4[0],
            cx = _ref4[1];
          _this.grid[cy][cx] = newShip;
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
        this.displayMessage('You missed!');
        this.missedAttacks.push({
          x: x,
          y: y
        });
      } else if (this.grid[y][x] !== 'miss' && this.grid[y][x] !== 'hit') {
        // If a ship occupies the cell, record a hit.
        var ship = this.grid[y][x];
        ship.hit(1);
        this.displayMessage("".concat(ship.name, " has taken a hit"));
        this.grid[y][x] = 'hit';
        if (ship.isSunk()) {
          this.displayMessage("".concat(ship.name, " has been sunk!"));
        }
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
  }, {
    key: "displayMessage",
    value: function displayMessage(message) {
      var messageBox = document.querySelector("#".concat(this.player.name, "-message-box"));
      if (messageBox) {
        messageBox.textContent = message;
      }
    }
  }]);
  return Gameboard;
}();


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Player = /*#__PURE__*/function () {
  function Player(name) {
    _classCallCheck(this, Player);
    this.name = name;
    this.attackedCoordinates = [];
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  _createClass(Player, [{
    key: "attack",
    value: function attack(enemyBoard, y, x) {
      if (this.attackedCoordinates.some(function (coords) {
        return coords[0] === y && coords[1] === x;
      })) {
        throw new Error('Cannot attack the same coordinates');
      } else {
        enemyBoard.receiveAttack(y, x);
        this.attackedCoordinates.push([y, x]);
      }
    }
  }]);
  return Player;
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
  function Ship(length, name) {
    _classCallCheck(this, Ship);
    this.length = length;
    this.hitsTaken = 0;
    this.orientation = 'horizontal';
    this.name = name;
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
  }, {
    key: "toggleOrientation",
    value: function toggleOrientation() {
      this.orientation = this.orientation === 'horizontal' ? 'vertical' : 'horizontal';
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
  width: 800px;
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
  grid-template-columns: repeat(10, 40px);
  grid-template-rows: repeat(10, 40px);
  gap: 2px;
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
.cell.ship.hit {
  background-color: #ff0000;
}

/* Styling for cells with ships */
.cell.ship {
  background-color: #35424a;
}

/* Styling for the instruction heading */
.instruction-heading {
  text-align: center;
  color: #35424a;
  margin-bottom: 10px;
}

/* Styling for the draggable ships container */
.ships-container {
  border: 2px dashed #35424a;
  max-width: 400px;
  padding: 10px;
  margin: 0 auto;
}

/* Styling for individual draggable ships */
.draggable-ship {
  margin: 5px;
  padding: 10px;
  background-color: #35424a;
  color: #fff;
  cursor: move;
}

.draggable-ship.vertical {
  background-color: #a9710a;
}

/* Styling for the message box*/
.message-box {
  background-color: #fff;
  color: #35424a;
  padding: 10px;
  margin: 10px;
  text-align: center;
  font-size: 1.2rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,mCAAmC;AACnC;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,cAAc;AAChB;;AAEA,oCAAoC;AACpC;EACE,OAAO;EACP,kBAAkB;EAClB,aAAa;AACf;;AAEA,iCAAiC;AACjC;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,QAAQ;AACV;;AAEA,iCAAiC;AACjC;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA,oCAAoC;AACpC;EACE,yBAAyB;AAC3B;;AAEA,0BAA0B;AAC1B;EACE,yBAAyB;AAC3B;;AAEA,iCAAiC;AACjC;EACE,yBAAyB;AAC3B;;AAEA,wCAAwC;AACxC;EACE,kBAAkB;EAClB,cAAc;EACd,mBAAmB;AACrB;;AAEA,8CAA8C;AAC9C;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,aAAa;EACb,cAAc;AAChB;;AAEA,2CAA2C;AAC3C;EACE,WAAW;EACX,aAAa;EACb,yBAAyB;EACzB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,sBAAsB;EACtB,cAAc;EACd,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB","sourcesContent":["/* Styling for the game container */\n.game-container {\n  display: flex;\n  justify-content: space-between;\n  width: 800px;\n  margin: 0 auto;\n}\n\n/* Styling for each player's board */\n.player-board {\n  flex: 1;\n  text-align: center;\n  padding: 20px;\n}\n\n/* Styling for the board itself */\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 40px);\n  grid-template-rows: repeat(10, 40px);\n  gap: 2px;\n}\n\n/* Styling for individual cells */\n.cell {\n  width: 40px;\n  height: 40px;\n  background-color: #ffffff;\n  border: 1px solid #999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n/* Styling for missed attack cells */\n.cell.miss {\n  background-color: #a3ddff;\n}\n\n/* Styling for hit cells */\n.cell.ship.hit {\n  background-color: #ff0000;\n}\n\n/* Styling for cells with ships */\n.cell.ship {\n  background-color: #35424a;\n}\n\n/* Styling for the instruction heading */\n.instruction-heading {\n  text-align: center;\n  color: #35424a;\n  margin-bottom: 10px;\n}\n\n/* Styling for the draggable ships container */\n.ships-container {\n  border: 2px dashed #35424a;\n  max-width: 400px;\n  padding: 10px;\n  margin: 0 auto;\n}\n\n/* Styling for individual draggable ships */\n.draggable-ship {\n  margin: 5px;\n  padding: 10px;\n  background-color: #35424a;\n  color: #fff;\n  cursor: move;\n}\n\n.draggable-ship.vertical {\n  background-color: #a9710a;\n}\n\n/* Styling for the message box*/\n.message-box {\n  background-color: #fff;\n  color: #35424a;\n  padding: 10px;\n  margin: 10px;\n  text-align: center;\n  font-size: 1.2rem;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./computer */ "./src/computer.js");
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");
/* harmony import */ var _drag_drop_ships__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drag-drop-ships */ "./src/drag-drop-ships.js");
// Import necessary modules and styles








// Initialize player and computer boards, players, and assign them to their respective boards
var player1Board = new _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
var player2Board = new _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
var player1 = new _player__WEBPACK_IMPORTED_MODULE_3__["default"]('player1');
var player2 = new _computer__WEBPACK_IMPORTED_MODULE_4__["default"]();
player1Board.player = player1;
player2Board.player = player2;

// Create HTML representations of player boards
var player1BoardHTML = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_5__.createBoardGrid)(player1Board);
var player2BoardHTML = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_5__.createBoardGrid)(player2Board);

// Append player board HTML to the DOM
document.querySelector('#player1-board').appendChild(player1BoardHTML);
document.querySelector('#player2-board').appendChild(player2BoardHTML);

// Populate ship containers for drag and drop functionality
var ships = (0,_drag_drop_ships__WEBPACK_IMPORTED_MODULE_6__["default"])();

// Initialize drag and drop functionality for ships
function initializeDragAndDrop() {
  var draggableShips = document.querySelectorAll('.draggable-ship');
  var gridCells = document.querySelectorAll('#player1-board .board .cell');

  // Drag events for ships
  draggableShips.forEach(function (ship) {
    var shipName = ship.getAttribute('data-ship');
    ship.setAttribute('draggable', 'true');
    ship.addEventListener('dragstart', function (e) {
      e.dataTransfer.setData('ship', shipName);
    });
  });

  // Drop events for cells on the player's board
  gridCells.forEach(function (cell) {
    cell.addEventListener('dragover', function (e) {
      e.preventDefault();
    });
    cell.addEventListener('drop', function (e) {
      e.preventDefault();
      try {
        var shipName = e.dataTransfer.getData('ship');
        var ship = ships[shipName];
        handleDrop(player1Board, ship, cell);
      } catch (error) {
        player1Board.displayMessage(error.message);
      }
    });
  });
}

// Handling ship drop onto the board
function handleDrop(board, ship, cell) {
  var y = parseInt(cell.dataset.row);
  var x = parseInt(cell.dataset.column);
  board.placeShip(ship, y, x, ship.orientation);
  displayGameState();

  // Hide the dragged ships and the ship container when all ships are placed
  var draggedShip = document.querySelector("[data-ship=\"".concat(ship.name, "\"]"));
  if (draggedShip) {
    draggedShip.style.display = 'none';
  }
  var shipsContainer = document.querySelector('.ships-container');
  var draggedShips = document.querySelectorAll('.draggable-ship');
  var allShipsDragged = Array.from(draggedShips).every(function (ship) {
    return ship.style.display === 'none';
  });
  if (allShipsDragged) {
    shipsContainer.style.display = 'none';
    gameLoop();
  }
}

// Displaying game state on the boards
function displayGameState() {
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_5__.updateBoardHTML)(player1Board, player1BoardHTML);
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_5__.updateBoardHTML)(player2Board, player2BoardHTML);
}

// Computer's turn to attack player's board
function computerTurn(enemyBoard) {
  player2.randomAttack(enemyBoard);
  displayGameState();
}

// Player's turn to attack computer's board
function playerTurn(enemyBoard, enemyBoardHTML) {
  return new Promise(function (resolve) {
    enemyBoardHTML.addEventListener('click', function (e) {
      var cellDiv = e.target.closest('.cell');
      if (!cellDiv) return; // Ignore if not clicked on a cell
      var y = parseInt(cellDiv.dataset.row);
      var x = parseInt(cellDiv.dataset.column);
      enemyBoard.receiveAttack(y, x);
      displayGameState();
      resolve(); // Resolve the Promise once a cell is clicked
    });
  });
}

// Check for the game winner
function checkWinner(board1, board2) {
  if (board1.allShipsSunk()) {
    board1.displayMessage('You lost!');
    return true;
  } else if (board2.allShipsSunk()) {
    board2.displayMessage('You win!');
    return true;
  } else {
    return false;
  }
}

// Main game loop
function gameLoop() {
  if (checkWinner(player1Board, player2Board)) {
    return;
  }
  playerTurn(player2Board, player2BoardHTML).then(function () {
    if (!checkWinner(player1Board, player2Board)) {
      computerTurn(player1Board);
      requestAnimationFrame(gameLoop);
    }
  });
}

// Populate the computer's board with ships and initialize drag and drop
player2.populateBoard(player2Board, ships);
initializeDragAndDrop();
gameLoop(); // Start the game loop
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixhQUFhLENBQUNvRixZQUFZLEVBQUVqRCxLQUFLLENBQUM7QUFDMUNzRCxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3ZCa0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20tbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZHJhZy1kcm9wLXNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcHV0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm5hbWUgPSAncGxheWVyMic7XG4gICAgdGhpcy5hdHRhY2tlZENvb3JkaW5hdGVzID0gW107XG4gIH1cblxuICByYW5kb21BdHRhY2soZW5lbXlCb2FyZCkge1xuICAgIGxldCB5LCB4O1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW5lbXlCb2FyZC5ncmlkLmxlbmd0aCk7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW5lbXlCb2FyZC5ncmlkWzBdLmxlbmd0aCk7XG4gICAgICBpZiAoIXRoaXMuYXR0YWNrZWRDb29yZGluYXRlcy5zb21lKGNvb3JkcyA9PiBjb29yZHNbMF0gPT09IHkgJiYgY29vcmRzWzFdID09PSB4KSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hdHRhY2tlZENvb3JkaW5hdGVzLnB1c2goW3ksIHhdKTtcbiAgICBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeSwgeCk7XG4gICAgcmV0dXJuIFt5LCB4XTtcbiAgfVxuXG4gIHBvcHVsYXRlQm9hcmQoYm9hcmQsIHNoaXBzT2JqKSB7XG4gICAgZm9yKGxldCBzaGlwTmFtZSBpbiBzaGlwc09iaikge1xuICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xuICAgICAgbGV0IHNoaXAgPSBzaGlwc09ialtzaGlwTmFtZV07XG5cbiAgICAgIHdoaWxlKCFwbGFjZWQpIHtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkLmdyaWQubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkLmdyaWRbMF0ubGVuZ3RoKTtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41PyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXAsIHksIHgsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICBwbGFjZWQgPSB0cnVlOyAvLyBTaGlwIGlzIHBsYWNlZCBzdWNjZXNzZnVsbHlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLyBpZiBwbGFjaW5nIGZhaWxzXG4gICAgICAgICAgcGxhY2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBncmlkIGZvciBhIHBsYXllcidzIGJvYXJkIFxuZnVuY3Rpb24gY3JlYXRlQm9hcmRHcmlkKGJvYXJkKSB7XG4gIGNvbnN0IGJvYXJkU2l6ZSA9IGJvYXJkLmdyaWQubGVuZ3RoO1xuICBjb25zdCBib2FyZEhUTUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmRIVE1MLmNsYXNzTmFtZSA9ICdib2FyZCc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZFNpemU7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRTaXplOyBqKyspIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ2NlbGwnO1xuICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IGk7XG4gICAgICBjZWxsLmRhdGFzZXQuY29sdW1uID0gajtcbiAgICAgIGJvYXJkSFRNTC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9hcmRIVE1MO1xufVxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIEhUTUwgcmVwcmVzZW50YXRpb24gb2YgYSBib2FyZFxuZnVuY3Rpb24gdXBkYXRlQm9hcmRIVE1MKGJvYXJkLCBib2FyZEVsZW1lbnQpIHtcbiAgY29uc3QgZ3JpZCA9IGJvYXJkLmdyaWQ7XG4gIGNvbnN0IGNlbGxzID0gYm9hcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG5cbiAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpO1xuICAgIGNvbnN0IGNvbHVtbiA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2x1bW4pO1xuXG4gICAgLy8gQ3VzdG9taXplIHRoZSBjZWxsIGJhc2VkIG9uIHRoZSBjb250ZW50IG9mIHRoZSBncmlkIGNlbGxcbiAgICBpZiAoZ3JpZFtyb3ddW2NvbHVtbl0gPT09ICdtaXNzJykge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgfSBlbHNlIGlmIChncmlkW3Jvd11bY29sdW1uXSA9PT0gJ2hpdCcpIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgfSBlbHNlIGlmIChncmlkW3Jvd11bY29sdW1uXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ21pc3MnLCAnaGl0JywgJ3NoaXAnKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVCb2FyZEdyaWQsIHVwZGF0ZUJvYXJkSFRNTCB9O1xuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZVNoaXBzQ29udGFpbmVyKCkge1xuICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwcy1jb250YWluZXInKTtcbiAgY29uc3Qgc2hpcHMgPSB7XG4gICAgXCJDYXJyaWVyXCI6IG5ldyBTaGlwKDUsIFwiQ2FycmllclwiKSxcbiAgICBcIkJhdHRsZXNoaXBcIjogbmV3IFNoaXAoNCwgXCJCYXR0bGVzaGlwXCIpLFxuICAgIFwiQ3J1aXNlclwiOiBuZXcgU2hpcCgzLCBcIkNydWlzZXJcIiksXG4gICAgXCJTdWJtYXJpbmVcIjogbmV3IFNoaXAoMywgXCJTdWJtYXJpbmVcIiksXG4gICAgXCJEZXN0cm95ZXJcIjogbmV3IFNoaXAoMiwgXCJEZXN0cm95ZXJcIiksXG4gIH07XG5cbiAgZm9yIChjb25zdCBzaGlwTmFtZSBpbiBzaGlwcykge1xuICAgIGlmIChzaGlwcy5oYXNPd25Qcm9wZXJ0eShzaGlwTmFtZSkpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBzaGlwc1tzaGlwTmFtZV07XG5cbiAgICAgIGNvbnN0IHNoaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2hpcERpdi5jbGFzc05hbWUgPSBcImRyYWdnYWJsZS1zaGlwXCI7XG4gICAgICBzaGlwRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1zaGlwJywgc2hpcE5hbWUpO1xuICAgICAgc2hpcERpdi5pbm5lckhUTUwgPSBgPHA+JHtzaGlwTmFtZX08L3A+YDtcblxuICAgICAgc2hpcERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2hpcC50b2dnbGVPcmllbnRhdGlvbigpO1xuICAgICAgICB1cGRhdGVTaGlwRGl2T3JpZW50YXRpb24oc2hpcERpdiwgc2hpcC5vcmllbnRhdGlvbik7XG4gICAgICB9KVxuXG4gICAgICBzaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwRGl2KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2hpcHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNoaXBEaXZPcmllbnRhdGlvbihkaXYsIG9yaWVudGF0aW9uKSB7XG4gIGRpdi5jbGFzc0xpc3QudG9nZ2xlKCd2ZXJ0aWNhbCcsIG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKTtcbn0iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIEluaXRpYWxpemUgdGhlIGdhbWVib2FyZCBncmlkIGFzIGEgMTB4MTAgZ3JpZCB3aXRoIGFsbCBjZWxscyBpbml0aWFsbHkgc2V0IHRvIG51bGwuXG4gICAgdGhpcy5ncmlkID0gdGhpcy5jcmVhdGVHcmlkKDEwLCAxMCwgbnVsbCk7XG5cbiAgICAvLyBJbml0aWFsaXplIGFuIGFycmF5IHRvIHRyYWNrIG1pc3NlZCBhdHRhY2tzLlxuICAgIHRoaXMubWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gICAgdGhpcy5wbGF5ZXIgPSBudWxsO1xuICB9XG4gIFxuICAvLyBDcmVhdGUgYSAyRCBncmlkIHdpdGggdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygcm93cyBhbmQgY29sdW1ucywgaW5pdGlhbGl6ZWQgd2l0aCBhIGdpdmVuIHZhbHVlLlxuICBjcmVhdGVHcmlkKHJvd3MsIGNvbHMsIGluaXRpYWxWYWx1ZSkge1xuICAgIGNvbnN0IGdyaWQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xuICAgICAgICByb3cucHVzaChpbml0aWFsVmFsdWUpO1xuICAgICAgfVxuICAgICAgZ3JpZC5wdXNoKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiBncmlkO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYSBjZWxsIGF0IGdpdmVuIGNvb3JkaW5hdGVzICh5LCB4KSBpcyBlbXB0eSAobnVsbCkuXG4gIGVtcHR5Q2VsbEdyaWQoeSwgeCkge1xuICAgIHJldHVybiB0aGlzLmdyaWRbeV1beF0gPT09IG51bGw7XG4gIH1cblxuICAvLyBQbGFjZSBhIHNoaXAgb24gdGhlIGdhbWVib2FyZCBhdCBzcGVjaWZpZWQgY29vcmRpbmF0ZXMgKHksIHgpIGFuZCB3aXRoIGEgZ2l2ZW4gb3JpZW50YXRpb24uXG4gIHBsYWNlU2hpcChzaGlwLCB5LCB4LCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzVG9DaGVjayA9IFtdO1xuXG4gICAgc3dpdGNoIChvcmllbnRhdGlvbikge1xuICAgICAgY2FzZSAnaG9yaXpvbnRhbCc6XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBzaGlwIHdvdWxkIGdvIG91dCBvZiBib3VuZHMgaG9yaXpvbnRhbGx5LlxuICAgICAgICBpZiAoeCArIHNoaXAubGVuZ3RoID4gMTApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNoaXAgcGxhY2VtZW50IHdvdWxkIGdvIG91dCBvZiBib3VuZHMgaG9yaXpvbnRhbGx5OiBpdCB0YWtlcyAke3NoaXAubGVuZ3RofSBzcGFjZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXNUb0NoZWNrLnB1c2goW3ksIHggKyBpXSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd2ZXJ0aWNhbCc6XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBzaGlwIHdvdWxkIGdvIG91dCBvZiBib3VuZHMgdmVydGljYWxseS5cbiAgICAgICAgaWYgKHkgKyBzaGlwLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTaGlwIHBsYWNlbWVudCB3b3VsZCBnbyBvdXQgb2YgYm91bmRzIHZlcnRpY2FsbHk6IGl0IHRha2VzICR7c2hpcC5sZW5ndGh9IHNwYWNlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb29yZGluYXRlc1RvQ2hlY2sucHVzaChbeSArIGksIHhdKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBhbGwgc3BlY2lmaWVkIGNvb3JkaW5hdGVzIGFyZSBlbXB0eSBiZWZvcmUgcGxhY2luZyB0aGUgc2hpcC5cbiAgICBpZiAoY29vcmRpbmF0ZXNUb0NoZWNrLmV2ZXJ5KChbY3ksIGN4XSkgPT4gdGhpcy5lbXB0eUNlbGxHcmlkKGN5LCBjeCkpKSB7XG4gICAgICAvLyBDcmVhdGUgYSBuZXcgU2hpcCBpbnN0YW5jZSBmcm9tIHRoZSBzaGlwIHBhcmFtZXRlclxuICAgICAgLy8gSSB3YXMgaGF2aW5nIHRyb3VibGUgd2l0aCBib3RoIGJvYXJkIHNoYXJpbmcgdGhlIHNhbWUgU2hpcCBpbnN0YW5jZVxuICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKHNoaXAubGVuZ3RoLCBzaGlwLm5hbWUpO1xuXG4gICAgICAvLyBQbGFjZSB0aGUgbmV3IHNoaXAgb24gdGhpcyBib2FyZCdzIGdyaWRcbiAgICAgIGNvb3JkaW5hdGVzVG9DaGVjay5mb3JFYWNoKChbY3ksIGN4XSkgPT4ge1xuICAgICAgICB0aGlzLmdyaWRbY3ldW2N4XSA9IG5ld1NoaXA7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBpcyBhbHJlYWR5IGEgc2hpcCBhdCB0aGUgc3BlY2lmaWVkIGNvb3JkaW5hdGVzJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gUHJvY2VzcyBhbiBhdHRhY2sgYXQgc3BlY2lmaWVkIGNvb3JkaW5hdGVzICh5LCB4KSBhbmQgcmVjb3JkIGhpdHMgb3IgbWlzc2VzLlxuICByZWNlaXZlQXR0YWNrKHksIHgpIHtcbiAgICAvLyBJZiB0aGUgY29vcmRpbmF0ZXMgYXJlIG5vdCBvY2N1cGllZCBieSBhIHNoaXAuXG4gICAgaWYgKHRoaXMuZ3JpZFt5XVt4XSA9PT0gbnVsbCkge1xuICAgICAgLy8gUmVjb3JkIGEgbWlzcyBhbmQgYWRkIHRoZSBhdHRhY2sgY29vcmRpbmF0ZXMgdG8gdGhlIG1pc3NlZEF0dGFja3MgYXJyYXkuXG4gICAgICB0aGlzLmdyaWRbeV1beF0gPSAnbWlzcyc7XG4gICAgICB0aGlzLmRpc3BsYXlNZXNzYWdlKCdZb3UgbWlzc2VkIScpO1xuICAgICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goeyB4LCB5IH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ncmlkW3ldW3hdICE9PSAnbWlzcycgJiYgdGhpcy5ncmlkW3ldW3hdICE9PSAnaGl0Jykge1xuICAgICAgLy8gSWYgYSBzaGlwIG9jY3VwaWVzIHRoZSBjZWxsLCByZWNvcmQgYSBoaXQuXG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5ncmlkW3ldW3hdO1xuICAgICAgc2hpcC5oaXQoMSk7XG4gICAgICB0aGlzLmRpc3BsYXlNZXNzYWdlKGAke3NoaXAubmFtZX0gaGFzIHRha2VuIGEgaGl0YCk7XG4gICAgICB0aGlzLmdyaWRbeV1beF0gPSAnaGl0JztcbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheU1lc3NhZ2UoYCR7c2hpcC5uYW1lfSBoYXMgYmVlbiBzdW5rIWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldCB0aGUgYXJyYXkgb2YgbWlzc2VkIGF0dGFjayBjb29yZGluYXRlcy5cbiAgZ2V0TWlzc2VkQXR0YWNrcygpIHtcbiAgICByZXR1cm4gdGhpcy5taXNzZWRBdHRhY2tzO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYWxsIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQgaGF2ZSBiZWVuIHN1bmssIGluZGljYXRpbmcgYSB3aW4gY29uZGl0aW9uLlxuICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgLy8gRmxhdHRlbiB0aGUgZ3JpZCB0byBnZXQgYSBzaW5nbGUgYXJyYXkgb2YgYWxsIGdyaWQgY2VsbHMgY29udGFpbmluZyBzaGlwcy5cbiAgICBjb25zdCBhbGxTaGlwcyA9IHRoaXMuZ3JpZC5mbGF0KCkuZmlsdGVyKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZSBpbnN0YW5jZW9mIFNoaXApO1xuICAgIFxuICAgIC8vIENoZWNrIGlmIGV2ZXJ5IHNoaXAgaW4gdGhlIGFycmF5IGlzIHN1bmssIHJldHVybmluZyB0cnVlIGZvciBhbGwgc2hpcHMgc3Vuay5cbiAgICByZXR1cm4gYWxsU2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfVxuICBcbiAgZGlzcGxheU1lc3NhZ2UobWVzc2FnZSkge1xuICAgIGNvbnN0IG1lc3NhZ2VCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLnBsYXllci5uYW1lfS1tZXNzYWdlLWJveGApO1xuICAgIGlmIChtZXNzYWdlQm94KSB7XG4gICAgICBtZXNzYWdlQm94LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYXR0YWNrZWRDb29yZGluYXRlcyA9IFtdO1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZDtcbiAgfVxuXG4gIGF0dGFjayhlbmVteUJvYXJkLCB5LCB4KSB7XG4gICAgaWYgKHRoaXMuYXR0YWNrZWRDb29yZGluYXRlcy5zb21lKGNvb3JkcyA9PiBjb29yZHNbMF0gPT09IHkgJiYgY29vcmRzWzFdID09PSB4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYXR0YWNrIHRoZSBzYW1lIGNvb3JkaW5hdGVzJylcbiAgICB9IGVsc2Uge1xuICAgICAgZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHksIHgpO1xuICAgICAgdGhpcy5hdHRhY2tlZENvb3JkaW5hdGVzLnB1c2goW3ksIHhdKTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBuYW1lKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzVGFrZW4gPSAwO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBcbiAgaGl0KG51bSkge1xuICAgIHRoaXMuaGl0c1Rha2VuICs9IG51bTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPD0gdGhpcy5oaXRzVGFrZW47XG4gIH1cblxuICB0b2dnbGVPcmllbnRhdGlvbigpIHtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gdGhpcy5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnPyAndmVydGljYWwnOiAnaG9yaXpvbnRhbCc7XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBTdHlsaW5nIGZvciB0aGUgZ2FtZSBjb250YWluZXIgKi9cbi5nYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLyogU3R5bGluZyBmb3IgZWFjaCBwbGF5ZXIncyBib2FyZCAqL1xuLnBsYXllci1ib2FyZCB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyogU3R5bGluZyBmb3IgdGhlIGJvYXJkIGl0c2VsZiAqL1xuLmJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDQwcHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDBweCk7XG4gIGdhcDogMnB4O1xufVxuXG4vKiBTdHlsaW5nIGZvciBpbmRpdmlkdWFsIGNlbGxzICovXG4uY2VsbCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi8qIFN0eWxpbmcgZm9yIG1pc3NlZCBhdHRhY2sgY2VsbHMgKi9cbi5jZWxsLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNkZGZmO1xufVxuXG4vKiBTdHlsaW5nIGZvciBoaXQgY2VsbHMgKi9cbi5jZWxsLnNoaXAuaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbn1cblxuLyogU3R5bGluZyBmb3IgY2VsbHMgd2l0aCBzaGlwcyAqL1xuLmNlbGwuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQyNGE7XG59XG5cbi8qIFN0eWxpbmcgZm9yIHRoZSBpbnN0cnVjdGlvbiBoZWFkaW5nICovXG4uaW5zdHJ1Y3Rpb24taGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzNTQyNGE7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi8qIFN0eWxpbmcgZm9yIHRoZSBkcmFnZ2FibGUgc2hpcHMgY29udGFpbmVyICovXG4uc2hpcHMtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkICMzNTQyNGE7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vKiBTdHlsaW5nIGZvciBpbmRpdmlkdWFsIGRyYWdnYWJsZSBzaGlwcyAqL1xuLmRyYWdnYWJsZS1zaGlwIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQyNGE7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi5kcmFnZ2FibGUtc2hpcC52ZXJ0aWNhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhOTcxMGE7XG59XG5cbi8qIFN0eWxpbmcgZm9yIHRoZSBtZXNzYWdlIGJveCovXG4ubWVzc2FnZS1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzM1NDI0YTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtQ0FBbUM7QUFDbkM7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBQ3BDLFFBQVE7QUFDVjs7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSx3Q0FBd0M7QUFDeEM7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQSw4Q0FBOEM7QUFDOUM7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBLDJDQUEyQztBQUMzQztFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogU3R5bGluZyBmb3IgdGhlIGdhbWUgY29udGFpbmVyICovXFxuLmdhbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgZWFjaCBwbGF5ZXIncyBib2FyZCAqL1xcbi5wbGF5ZXItYm9hcmQge1xcbiAgZmxleDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHRoZSBib2FyZCBpdHNlbGYgKi9cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MHB4KTtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBpbmRpdmlkdWFsIGNlbGxzICovXFxuLmNlbGwge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBtaXNzZWQgYXR0YWNrIGNlbGxzICovXFxuLmNlbGwubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNkZGZmO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBoaXQgY2VsbHMgKi9cXG4uY2VsbC5zaGlwLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBjZWxscyB3aXRoIHNoaXBzICovXFxuLmNlbGwuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0MjRhO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgaW5zdHJ1Y3Rpb24gaGVhZGluZyAqL1xcbi5pbnN0cnVjdGlvbi1oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMzU0MjRhO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIGRyYWdnYWJsZSBzaGlwcyBjb250YWluZXIgKi9cXG4uc2hpcHMtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjMzU0MjRhO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgaW5kaXZpZHVhbCBkcmFnZ2FibGUgc2hpcHMgKi9cXG4uZHJhZ2dhYmxlLXNoaXAge1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1NDI0YTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLXNoaXAudmVydGljYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E5NzEwYTtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIG1lc3NhZ2UgYm94Ki9cXG4ubWVzc2FnZS1ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMzU0MjRhO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBJbXBvcnQgbmVjZXNzYXJ5IG1vZHVsZXMgYW5kIHN0eWxlc1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBDb21wdXRlciBmcm9tICcuL2NvbXB1dGVyJztcbmltcG9ydCB7IGNyZWF0ZUJvYXJkR3JpZCwgdXBkYXRlQm9hcmRIVE1MIH0gZnJvbSAnLi9kb20tbWFuaXB1bGF0aW9uJztcbmltcG9ydCBwb3B1bGF0ZVNoaXBzQ29udGFpbmVyIGZyb20gJy4vZHJhZy1kcm9wLXNoaXBzJztcblxuLy8gSW5pdGlhbGl6ZSBwbGF5ZXIgYW5kIGNvbXB1dGVyIGJvYXJkcywgcGxheWVycywgYW5kIGFzc2lnbiB0aGVtIHRvIHRoZWlyIHJlc3BlY3RpdmUgYm9hcmRzXG5jb25zdCBwbGF5ZXIxQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5jb25zdCBwbGF5ZXIyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5jb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllcigncGxheWVyMScpO1xuY29uc3QgcGxheWVyMiA9IG5ldyBDb21wdXRlcigpO1xuXG5wbGF5ZXIxQm9hcmQucGxheWVyID0gcGxheWVyMTtcbnBsYXllcjJCb2FyZC5wbGF5ZXIgPSBwbGF5ZXIyO1xuXG4vLyBDcmVhdGUgSFRNTCByZXByZXNlbnRhdGlvbnMgb2YgcGxheWVyIGJvYXJkc1xuY29uc3QgcGxheWVyMUJvYXJkSFRNTCA9IGNyZWF0ZUJvYXJkR3JpZChwbGF5ZXIxQm9hcmQpO1xuY29uc3QgcGxheWVyMkJvYXJkSFRNTCA9IGNyZWF0ZUJvYXJkR3JpZChwbGF5ZXIyQm9hcmQpO1xuXG4vLyBBcHBlbmQgcGxheWVyIGJvYXJkIEhUTUwgdG8gdGhlIERPTVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllcjEtYm9hcmQnKS5hcHBlbmRDaGlsZChwbGF5ZXIxQm9hcmRIVE1MKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIyLWJvYXJkJykuYXBwZW5kQ2hpbGQocGxheWVyMkJvYXJkSFRNTCk7XG5cbi8vIFBvcHVsYXRlIHNoaXAgY29udGFpbmVycyBmb3IgZHJhZyBhbmQgZHJvcCBmdW5jdGlvbmFsaXR5XG5jb25zdCBzaGlwcyA9IHBvcHVsYXRlU2hpcHNDb250YWluZXIoKTtcblxuLy8gSW5pdGlhbGl6ZSBkcmFnIGFuZCBkcm9wIGZ1bmN0aW9uYWxpdHkgZm9yIHNoaXBzXG5mdW5jdGlvbiBpbml0aWFsaXplRHJhZ0FuZERyb3AoKSB7XG4gIGNvbnN0IGRyYWdnYWJsZVNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdnYWJsZS1zaGlwJyk7XG4gIGNvbnN0IGdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXIxLWJvYXJkIC5ib2FyZCAuY2VsbCcpO1xuXG4gIC8vIERyYWcgZXZlbnRzIGZvciBzaGlwc1xuICBkcmFnZ2FibGVTaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgIGNvbnN0IHNoaXBOYW1lID0gc2hpcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hpcCcpO1xuICAgIHNoaXAuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZSA9PiB7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCdzaGlwJywgc2hpcE5hbWUpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBEcm9wIGV2ZW50cyBmb3IgY2VsbHMgb24gdGhlIHBsYXllcidzIGJvYXJkXG4gIGdyaWRDZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnc2hpcCcpO1xuICAgICAgICBjb25zdCBzaGlwID0gc2hpcHNbc2hpcE5hbWVdO1xuICAgICAgICBoYW5kbGVEcm9wKHBsYXllcjFCb2FyZCwgc2hpcCwgY2VsbCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBwbGF5ZXIxQm9hcmQuZGlzcGxheU1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBIYW5kbGluZyBzaGlwIGRyb3Agb250byB0aGUgYm9hcmRcbmZ1bmN0aW9uIGhhbmRsZURyb3AoYm9hcmQsIHNoaXAsIGNlbGwpIHtcbiAgY29uc3QgeSA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpO1xuICBjb25zdCB4ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbHVtbik7XG4gIGJvYXJkLnBsYWNlU2hpcChzaGlwLCB5LCB4LCBzaGlwLm9yaWVudGF0aW9uKTtcbiAgZGlzcGxheUdhbWVTdGF0ZSgpO1xuXG4gIC8vIEhpZGUgdGhlIGRyYWdnZWQgc2hpcHMgYW5kIHRoZSBzaGlwIGNvbnRhaW5lciB3aGVuIGFsbCBzaGlwcyBhcmUgcGxhY2VkXG4gIGNvbnN0IGRyYWdnZWRTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtc2hpcD1cIiR7c2hpcC5uYW1lfVwiXWApO1xuICBpZiAoZHJhZ2dlZFNoaXApIHtcbiAgICBkcmFnZ2VkU2hpcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIGNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzLWNvbnRhaW5lcicpO1xuICBjb25zdCBkcmFnZ2VkU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ2dhYmxlLXNoaXAnKTtcbiAgY29uc3QgYWxsU2hpcHNEcmFnZ2VkID0gQXJyYXkuZnJvbShkcmFnZ2VkU2hpcHMpLmV2ZXJ5KHNoaXAgPT4gc2hpcC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpO1xuICBpZiAoYWxsU2hpcHNEcmFnZ2VkKSB7XG4gICAgc2hpcHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBnYW1lTG9vcCgpO1xuICB9XG59XG5cbi8vIERpc3BsYXlpbmcgZ2FtZSBzdGF0ZSBvbiB0aGUgYm9hcmRzXG5mdW5jdGlvbiBkaXNwbGF5R2FtZVN0YXRlKCkge1xuICB1cGRhdGVCb2FyZEhUTUwocGxheWVyMUJvYXJkLCBwbGF5ZXIxQm9hcmRIVE1MKTtcbiAgdXBkYXRlQm9hcmRIVE1MKHBsYXllcjJCb2FyZCwgcGxheWVyMkJvYXJkSFRNTCk7XG59XG5cbi8vIENvbXB1dGVyJ3MgdHVybiB0byBhdHRhY2sgcGxheWVyJ3MgYm9hcmRcbmZ1bmN0aW9uIGNvbXB1dGVyVHVybihlbmVteUJvYXJkKSB7XG4gIHBsYXllcjIucmFuZG9tQXR0YWNrKGVuZW15Qm9hcmQpO1xuICBkaXNwbGF5R2FtZVN0YXRlKCk7XG59XG5cbi8vIFBsYXllcidzIHR1cm4gdG8gYXR0YWNrIGNvbXB1dGVyJ3MgYm9hcmRcbmZ1bmN0aW9uIHBsYXllclR1cm4oZW5lbXlCb2FyZCwgZW5lbXlCb2FyZEhUTUwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGVuZW15Qm9hcmRIVE1MLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGNlbGxEaXYgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2VsbCcpO1xuICAgICAgaWYgKCFjZWxsRGl2KSByZXR1cm47IC8vIElnbm9yZSBpZiBub3QgY2xpY2tlZCBvbiBhIGNlbGxcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUludChjZWxsRGl2LmRhdGFzZXQucm93KTtcbiAgICAgIGNvbnN0IHggPSBwYXJzZUludChjZWxsRGl2LmRhdGFzZXQuY29sdW1uKTtcbiAgICAgIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh5LCB4KTtcbiAgICAgIGRpc3BsYXlHYW1lU3RhdGUoKTtcbiAgICAgIHJlc29sdmUoKTsgLy8gUmVzb2x2ZSB0aGUgUHJvbWlzZSBvbmNlIGEgY2VsbCBpcyBjbGlja2VkXG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBDaGVjayBmb3IgdGhlIGdhbWUgd2lubmVyXG5mdW5jdGlvbiBjaGVja1dpbm5lcihib2FyZDEsIGJvYXJkMikge1xuICBpZiAoYm9hcmQxLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgYm9hcmQxLmRpc3BsYXlNZXNzYWdlKCdZb3UgbG9zdCEnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChib2FyZDIuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICBib2FyZDIuZGlzcGxheU1lc3NhZ2UoJ1lvdSB3aW4hJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIE1haW4gZ2FtZSBsb29wXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgaWYgKGNoZWNrV2lubmVyKHBsYXllcjFCb2FyZCwgcGxheWVyMkJvYXJkKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgcGxheWVyVHVybihwbGF5ZXIyQm9hcmQsIHBsYXllcjJCb2FyZEhUTUwpLnRoZW4oKCkgPT4ge1xuICAgIGlmICghY2hlY2tXaW5uZXIocGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQpKSB7XG4gICAgICBjb21wdXRlclR1cm4ocGxheWVyMUJvYXJkKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gUG9wdWxhdGUgdGhlIGNvbXB1dGVyJ3MgYm9hcmQgd2l0aCBzaGlwcyBhbmQgaW5pdGlhbGl6ZSBkcmFnIGFuZCBkcm9wXG5wbGF5ZXIyLnBvcHVsYXRlQm9hcmQocGxheWVyMkJvYXJkLCBzaGlwcyk7XG5pbml0aWFsaXplRHJhZ0FuZERyb3AoKTtcbmdhbWVMb29wKCk7IC8vIFN0YXJ0IHRoZSBnYW1lIGxvb3BcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJDb21wdXRlciIsIl9jbGFzc0NhbGxDaGVjayIsIm5hbWUiLCJhdHRhY2tlZENvb3JkaW5hdGVzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyYW5kb21BdHRhY2siLCJlbmVteUJvYXJkIiwieSIsIngiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJncmlkIiwic29tZSIsImNvb3JkcyIsInJlY2VpdmVBdHRhY2siLCJwb3B1bGF0ZUJvYXJkIiwiYm9hcmQiLCJzaGlwc09iaiIsInNoaXBOYW1lIiwicGxhY2VkIiwic2hpcCIsIm9yaWVudGF0aW9uIiwicGxhY2VTaGlwIiwiZXJyb3IiLCJkZWZhdWx0IiwiU2hpcCIsImNyZWF0ZUJvYXJkR3JpZCIsImJvYXJkU2l6ZSIsImJvYXJkSFRNTCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImoiLCJjZWxsIiwiZGF0YXNldCIsInJvdyIsImNvbHVtbiIsImFwcGVuZENoaWxkIiwidXBkYXRlQm9hcmRIVE1MIiwiYm9hcmRFbGVtZW50IiwiY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInBhcnNlSW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicG9wdWxhdGVTaGlwc0NvbnRhaW5lciIsInNoaXBzQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsInNoaXBzIiwiX2xvb3AiLCJoYXNPd25Qcm9wZXJ0eSIsInNoaXBEaXYiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlT3JpZW50YXRpb24iLCJ1cGRhdGVTaGlwRGl2T3JpZW50YXRpb24iLCJkaXYiLCJ0b2dnbGUiLCJHYW1lYm9hcmQiLCJjcmVhdGVHcmlkIiwibWlzc2VkQXR0YWNrcyIsInBsYXllciIsInJvd3MiLCJjb2xzIiwiaW5pdGlhbFZhbHVlIiwiZW1wdHlDZWxsR3JpZCIsIl90aGlzIiwiY29vcmRpbmF0ZXNUb0NoZWNrIiwiRXJyb3IiLCJldmVyeSIsIl9yZWYiLCJfcmVmMiIsIl9zbGljZWRUb0FycmF5IiwiY3kiLCJjeCIsIm5ld1NoaXAiLCJfcmVmMyIsIl9yZWY0IiwiZGlzcGxheU1lc3NhZ2UiLCJoaXQiLCJpc1N1bmsiLCJnZXRNaXNzZWRBdHRhY2tzIiwiYWxsU2hpcHNTdW5rIiwiYWxsU2hpcHMiLCJmbGF0IiwiZmlsdGVyIiwiY29vcmRpbmF0ZSIsIm1lc3NhZ2UiLCJtZXNzYWdlQm94IiwidGV4dENvbnRlbnQiLCJQbGF5ZXIiLCJnYW1lYm9hcmQiLCJhdHRhY2siLCJoaXRzVGFrZW4iLCJudW0iLCJwbGF5ZXIxQm9hcmQiLCJwbGF5ZXIyQm9hcmQiLCJwbGF5ZXIxIiwicGxheWVyMiIsInBsYXllcjFCb2FyZEhUTUwiLCJwbGF5ZXIyQm9hcmRIVE1MIiwiaW5pdGlhbGl6ZURyYWdBbmREcm9wIiwiZHJhZ2dhYmxlU2hpcHMiLCJncmlkQ2VsbHMiLCJnZXRBdHRyaWJ1dGUiLCJlIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsInByZXZlbnREZWZhdWx0IiwiZ2V0RGF0YSIsImhhbmRsZURyb3AiLCJkaXNwbGF5R2FtZVN0YXRlIiwiZHJhZ2dlZFNoaXAiLCJzdHlsZSIsImRpc3BsYXkiLCJkcmFnZ2VkU2hpcHMiLCJhbGxTaGlwc0RyYWdnZWQiLCJBcnJheSIsImZyb20iLCJnYW1lTG9vcCIsImNvbXB1dGVyVHVybiIsInBsYXllclR1cm4iLCJlbmVteUJvYXJkSFRNTCIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2VsbERpdiIsInRhcmdldCIsImNsb3Nlc3QiLCJjaGVja1dpbm5lciIsImJvYXJkMSIsImJvYXJkMiIsInRoZW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9