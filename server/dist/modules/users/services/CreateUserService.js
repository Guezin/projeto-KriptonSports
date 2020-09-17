"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("reflect-metadata");

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));

var _IEncryptedPassword = _interopRequireDefault(require("../providers/ProvidesEncryptedPassword/models/IEncryptedPassword"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateUserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('EncryptedPassword')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IEncryptedPassword.default === "undefined" ? Object : _IEncryptedPassword.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateUserService {
  constructor(userRepository, encryptedPassword) {
    this.userRepository = userRepository;
    this.encryptedPassword = encryptedPassword;
  }

  async execute({
    name,
    surname,
    email,
    password,
    manager
  }) {
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new _AppError.default('Sorry, but that user already exists!', 401);
    }

    const passwordHashed = await this.encryptedPassword.generateHash(password);
    const user = await this.userRepository.create({
      name,
      surname,
      email,
      password: passwordHashed,
      manager
    });
    return user;
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = CreateUserService;
exports.default = _default;