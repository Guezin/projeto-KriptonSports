"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _SearchController = _interopRequireDefault(require("../controllers/SearchController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
const searchController = new _SearchController.default();
routes.post('/', searchController.create);
var _default = routes;
exports.default = _default;