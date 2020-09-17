"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _ProfileService = _interopRequireDefault(require("../../../services/ProfileService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProfileController {
  async create(request, response) {
    const {
      id
    } = request.user;
    const {
      name,
      surname,
      email,
      old_password,
      password
    } = request.body;

    const profileService = _tsyringe.container.resolve(_ProfileService.default);

    const user = await profileService.execute({
      id,
      name,
      surname,
      email,
      old_password,
      password
    });
    return response.json((0, _classTransformer.classToClass)(user));
  }

}

var _default = ProfileController;
exports.default = _default;