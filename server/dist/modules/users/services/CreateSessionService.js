"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _tsyringe = require("tsyringe");

var _auth = _interopRequireDefault(require("../../../config/auth"));

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));

var _IEncryptedPassword = _interopRequireDefault(require("../providers/ProvidesEncryptedPassword/models/IEncryptedPassword"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateSessionService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('EncryptedPassword')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IEncryptedPassword.default === "undefined" ? Object : _IEncryptedPassword.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateSessionService {
  constructor(usersRepository, encryptedPassword) {
    this.usersRepository = usersRepository;
    this.encryptedPassword = encryptedPassword;
  }

  async execute({
    email,
    password
  }) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new _AppError.default('User does not exists!');
    }

    const passwordIsValid = await this.encryptedPassword.compareHash(password, user.password);

    if (!passwordIsValid) {
      throw new _AppError.default('Credencials email/password incorret, try again!');
    }

    const {
      secret,
      expiresIn
    } = _auth.default.jwt;
    const token = (0, _jsonwebtoken.sign)({}, secret, {
      expiresIn,
      subject: user.id
    });
    return {
      user,
      token
    };
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = CreateSessionService;
exports.default = _default;