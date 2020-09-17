"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _ResetPasswordController = _interopRequireDefault(require("../controllers/ResetPasswordController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
const resetPassword = new _ResetPasswordController.default();
routes.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: _celebrate.Joi.object().keys({
    token: _celebrate.Joi.string().required(),
    password: _celebrate.Joi.string().required()
  })
}), resetPassword.create);
var _default = routes;
exports.default = _default;