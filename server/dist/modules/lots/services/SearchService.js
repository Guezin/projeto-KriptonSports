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

let SearchService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('LotRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ILotRepository.default === "undefined" ? Object : _ILotRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class SearchService {
  constructor(lotRepository) {
    this.lotRepository = lotRepository;
  }

  async execute({
    type,
    target
  }) {
    const lotsFound = await this.lotRepository.searchTarget({
      type,
      target
    });

    if (!lotsFound) {
      throw new _AppError.default('No results were found for your search');
    }

    const response = lotsFound.map(lot => {
      return {
        lot: lot.id,
        expiration_date: lot.expiration_date,
        product: lot.product
      };
    });
    return response;
  }

}) || _class) || _class) || _class) || _class);
var _default = SearchService;
exports.default = _default;