"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _path = require("path");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));

var _IUserTokenRepository = _interopRequireDefault(require("../repositories/IUserTokenRepository"));

var _IEtherealEmail = _interopRequireDefault(require("../../../shared/providers/EmailProvider/models/IEtherealEmail"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ForgotPasswordService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UserTokenRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('EtherealEmail')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default, typeof _IUserTokenRepository.default === "undefined" ? Object : _IUserTokenRepository.default, typeof _IEtherealEmail.default === "undefined" ? Object : _IEtherealEmail.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class ForgotPasswordService {
  constructor(usersRepository, userTokenRepository, etherealEmail) {
    this.usersRepository = usersRepository;
    this.userTokenRepository = userTokenRepository;
    this.etherealEmail = etherealEmail;
  }

  async execute({
    email
  }) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new _AppError.default('Sorry, user not found!', 401);
    }

    const templateForgotPassword = (0, _path.resolve)(__dirname, '..', '..', '..', 'shared', 'providers', 'EmailProvider', 'views', 'forgotPassword.hbs');

    try {
      const token = await this.userTokenRepository.generate(user.id);
      await this.etherealEmail.sendMail({
        to: {
          name: user.name,
          email: user.email
        },
        subject: '[Kripton Sports] Recuperar Senha!',
        templateData: {
          file: templateForgotPassword,
          variables: {
            name: user.name,
            link: `http://localhost:3000/reset-password?token=${token}`
          }
        }
      });
    } catch (err) {
      console.log(err);
      throw new _AppError.default('Sorry, failed to send email! ');
    }
  }

}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = ForgotPasswordService;
exports.default = _default;