"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _User = _interopRequireDefault(require("../entities/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UsersRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_User.default);
  }

  async create({
    name,
    surname,
    email,
    password,
    manager
  }) {
    const user = this.ormRepository.create({
      name,
      surname,
      email,
      password,
      manager
    });
    await this.ormRepository.save(user);
    return user;
  }

  async findById(user_id) {
    const user = this.ormRepository.findOne({
      where: {
        id: user_id
      }
    });
    return user;
  }

  async findByEmail(email) {
    const user = this.ormRepository.findOne({
      where: {
        email
      }
    });
    return user;
  }

  async save(user) {
    return await this.ormRepository.save(user);
  }

}

var _default = UsersRepository;
exports.default = _default;