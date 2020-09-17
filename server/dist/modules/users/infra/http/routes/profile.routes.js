"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ProfileController = _interopRequireDefault(require("../controllers/ProfileController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const profileRouter = (0, _express.Router)();
const profileController = new _ProfileController.default();
profileRouter.put('/', profileController.create);
var _default = profileRouter;
exports.default = _default;