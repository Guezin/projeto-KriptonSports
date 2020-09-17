"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _SearchService = _interopRequireDefault(require("../../../services/SearchService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SearchController {
  async create(request, response) {
    const {
      type,
      target
    } = request.body;

    const searchService = _tsyringe.container.resolve(_SearchService.default);

    const lots = await searchService.execute({
      type,
      target
    });
    return response.json(lots);
  }

}

var _default = SearchController;
exports.default = _default;