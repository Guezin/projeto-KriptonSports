"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _ForgotPasswordController = _interopRequireDefault(require("../controllers/ForgotPasswordController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
const forgotPasswordController = new _ForgotPasswordController.default();
routes.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: _celebrate.Joi.object().keys({
    email: _celebrate.Joi.string().email().required()
  })
}), forgotPasswordController.create);
var _default = routes;
exports.default = _default;