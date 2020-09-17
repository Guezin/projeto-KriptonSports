"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _ILotRepository = _interopRequireDefault(require("../repositories/ILotRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateLotService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('LotRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ILotRepository.default === "undefined" ? Object : _ILotRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateLotService {
  constructor(lotRepository) {
    this.lotRepository = lotRepository;
  }

  async execute({
    name,
    product_code,
    quantity,
    price,
    expiration_date
  }) {
    const productExists = await this.lotRepository.findByProductCode(product_code);

    if (productExists) {
      throw new _AppError.default('Sorry, but this product code already exists!', 401);
    }

    const {
      lot,
      product
    } = await this.lotRepository.create({
      name,
      product_code,
      quantity,
      price,
      expiration_date
    });
    return {
      lot,
      product
    };
  }

}) || _class) || _class) || _class) || _class);
var _default = CreateLotService;
exports.default = _default;