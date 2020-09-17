"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IUserTokenRepository = _interopRequireDefault(require("../repositories/IUserTokenRepository"));

var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));

var _IEncryptedPassword = _interopRequireDefault(require("../providers/ProvidesEncryptedPassword/models/IEncryptedPassword"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ResetPasswordService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UserTokenRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('EncryptedPassword')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IUserTokenRepository.default === "undefined" ? Object : _IUserTokenRepository.default, typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IEncryptedPassword.default === "undefined" ? Object : _IEncryptedPassword.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class ResetPasswordService {
  constructor(userTokenRepository, usersRepository, encryptedPassword) {
    this.userTokenRepository = userTokenRepository;
    this.usersRepository = usersRepository;
    this.encryptedPassword = encryptedPassword;
  }

  async execute({
    token,
    password
  }) {
    const findToken = await this.userTokenRepository.findByToken(token);

    if (!findToken) {
      throw new _AppError.default('Sorry, verification token not found!', 401);
    }

    const {
      user_id
    } = findToken;
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new _AppError.default('Sorry, user not found!', 401);
    }

    user.password = await this.encryptedPassword.generateHash(password);
    await this.usersRepository.save(user);
  }

}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = ResetPasswordService;
exports.default = _default;