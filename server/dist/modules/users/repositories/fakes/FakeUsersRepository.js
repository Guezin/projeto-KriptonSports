"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuidv = require("uuidv4");

var _User = _interopRequireDefault(require("../../infra/typeorm/entities/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FakeUsersRepository {
  constructor() {
    this.users = [];
  }

  async create(dataUser) {
    const user = new _User.default();
    Object.assign(user, {
      id: (0, _uuidv.uuid)()
    }, dataUser);
    this.users.push(user);
    return user;
  }

  async findById(user_id) {
    const findUser = this.users.find(user => user.id === user_id);
    return findUser;
  }

  async findByEmail(email) {
    const findUser = this.users.find(user => user.email === email);
    return findUser;
  }

  async save(user) {
    const index = this.users.findIndex(_user => _user.id === user.id);
    this.users[index] = user;
    return user;
  }

}

var _default = FakeUsersRepository;
exports.default = _default;