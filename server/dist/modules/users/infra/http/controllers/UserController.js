"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _CreateUserService = _interopRequireDefault(require("../../../services/CreateUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserController {
  async create(request, response) {
    const {
      name,
      surname,
      email,
      password,
      manager
    } = request.body;

    const createUser = _tsyringe.container.resolve(_CreateUserService.default);

    const user = await createUser.execute({
      name,
      surname,
      email,
      password,
      manager
    });
    return response.json((0, _classTransformer.classToClass)(user));
  }

}

var _default = UserController;
exports.default = _default;