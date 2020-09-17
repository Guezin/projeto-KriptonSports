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

let DeleteLotService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('LotRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ILotRepository.default === "undefined" ? Object : _ILotRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteLotService {
  constructor(lotRepository) {
    this.lotRepository = lotRepository;
  }

  async execute(lot) {
    const lotExists = await this.lotRepository.findByLot(lot);

    if (!lotExists) {
      throw new _AppError.default('Sorry, lot not found!');
    }

    const {
      product_id
    } = lotExists;
    const product = await this.lotRepository.findProductById(product_id);

    if (!product) {
      throw new _AppError.default('Sorry, product not found!');
    }

    await this.lotRepository.destroy(lotExists, product);
  }

}) || _class) || _class) || _class) || _class);
var _default = DeleteLotService;
exports.default = _default;