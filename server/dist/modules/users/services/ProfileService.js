"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));

var _IEncryptedPassword = _interopRequireDefault(require("../providers/ProvidesEncryptedPassword/models/IEncryptedPassword"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ProfileService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('EncryptedPassword')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IEncryptedPassword.default === "undefined" ? Object : _IEncryptedPassword.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class ProfileService {
  constructor(usersRepository, encryptedPassword) {
    this.usersRepository = usersRepository;
    this.encryptedPassword = encryptedPassword;
  }

  async execute({
    id: user_id,
    name,
    surname,
    email,
    old_password,
    password
  }) {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new _AppError.default('User not found!');
    }

    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists && userExists.id !== user.id) {
      throw new _AppError.default('Email is already in use!');
    }

    if (password && !old_password) {
      throw new _AppError.default('You need to inform the old password to set a new password.');
    }

    if (password && old_password) {
      const passwordIsValid = await this.encryptedPassword.compareHash(old_password, user.password);

      if (!passwordIsValid) {
        throw new _AppError.default('Old password does not match, try again.');
      }
    }

    if (password) {
      user.password = await this.encryptedPassword.generateHash(password);
    }

    user.name = name;
    user.surname = surname;
    user.email = email;
    return await this.usersRepository.save(user);
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = ProfileService;
exports.default = _default;