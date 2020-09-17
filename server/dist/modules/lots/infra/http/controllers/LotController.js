"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ListLotsService = _interopRequireDefault(require("../../../services/ListLotsService"));

var _CreateLotService = _interopRequireDefault(require("../../../services/CreateLotService"));

var _UpdateLotService = _interopRequireDefault(require("../../../services/UpdateLotService"));

var _DeleteLotService = _interopRequireDefault(require("../../../services/DeleteLotService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LotController {
  async index(request, response) {
    const listLots = _tsyringe.container.resolve(_ListLotsService.default);

    const lots = await listLots.execute();
    return response.json(lots);
  }

  async create(request, response) {
    const {
      name,
      product_code,
      quantity,
      price,
      expiration_date
    } = request.body;

    const createLot = _tsyringe.container.resolve(_CreateLotService.default);

    const {
      lot,
      product
    } = await createLot.execute({
      name,
      product_code,
      quantity,
      price,
      expiration_date
    });
    return response.json({
      lot: lot.id,
      expiration_date: lot.expiration_date,
      product
    });
  }

  async update(request, response) {
    const {
      id
    } = request.params;
    const {
      name,
      product_code,
      quantity,
      price,
      expiration_date
    } = request.body;

    const updateLot = _tsyringe.container.resolve(_UpdateLotService.default);

    const {
      id: lot,
      expiration_date: expirationDate,
      product
    } = await updateLot.execute({
      lot: Number(id),
      name,
      product_code,
      quantity,
      price,
      expiration_date
    });
    return response.json({
      lot,
      expiration_date: expirationDate,
      product
    });
  }

  async delete(request, response) {
    const {
      id: lot
    } = request.params;

    const deleteLot = _tsyringe.container.resolve(_DeleteLotService.default);

    await deleteLot.execute(Number(lot));
    return response.status(200).json();
  }

}

var _default = LotController;
exports.default = _default;