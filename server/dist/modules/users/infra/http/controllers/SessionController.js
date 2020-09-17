"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classTransformer = require("class-transformer");

var _tsyringe = require("tsyringe");

var _CreateSessionService = _interopRequireDefault(require("../../../services/CreateSessionService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SessionController {
  async create(request, response) {
    const {
      email,
      password
    } = request.body;

    const createSessionService = _tsyringe.container.resolve(_CreateSessionService.default);

    const {
      user,
      token
    } = await createSessionService.execute({
      email,
      password
    });
    return response.json((0, _classTransformer.classToClass)({
      user,
      token
    }));
  }

}

var _default = SessionController;
exports.default = _default;