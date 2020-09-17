"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _LotController = _interopRequireDefault(require("../controllers/LotController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const route = (0, _express.Router)();
const lotController = new _LotController.default();
route.get('/', lotController.index);
route.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: _celebrate.Joi.object().keys({
    name: _celebrate.Joi.string().required(),
    product_code: _celebrate.Joi.number().required(),
    quantity: _celebrate.Joi.number().required(),
    price: _celebrate.Joi.number().required(),
    expiration_date: _celebrate.Joi.string().required()
  })
}), lotController.create);
route.put('/:id/update', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: _celebrate.Joi.object().keys({
    name: _celebrate.Joi.string().required(),
    product_code: _celebrate.Joi.number().required(),
    quantity: _celebrate.Joi.number().required(),
    price: _celebrate.Joi.number().required(),
    expiration_date: _celebrate.Joi.string().required()
  })
}), lotController.update);
route.delete('/:id/delete', lotController.delete);
var _default = route;
exports.default = _default;