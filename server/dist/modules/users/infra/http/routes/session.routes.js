"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _SessionController = _interopRequireDefault(require("../controllers/SessionController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sessionsRouter = (0, _express.Router)();
const sessionController = new _SessionController.default();
sessionsRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: _celebrate.Joi.object().keys({
    email: _celebrate.Joi.string().email().required(),
    password: _celebrate.Joi.string().required()
  })
}), sessionController.create);
var _default = sessionsRouter;
exports.default = _default;