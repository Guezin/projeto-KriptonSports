"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _tsyringe = require("tsyringe");

var _IHandlebarsTemplate = _interopRequireDefault(require("../EmailTemplateProvider/models/IHandlebarsTemplate"));

var _dec, _dec2, _dec3, _dec4, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let EtherealEmail = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('HandlebarsTemplate')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IHandlebarsTemplate.default === "undefined" ? Object : _IHandlebarsTemplate.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_temp = class EtherealEmail {
  constructor(handlebarsTemplate) {
    this.handlebarsTemplate = handlebarsTemplate;
    this.client = void 0;

    _nodemailer.default.createTestAccount().then(account => {
      const transporter = _nodemailer.default.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass
        }
      });

      this.client = transporter;
    });
  }

  async sendMail({
    to,
    from,
    subject,
    templateData
  }) {
    const template = await this.handlebarsTemplate.parse(templateData);
    const message = await this.client.sendMail({
      from: {
        name: (from === null || from === void 0 ? void 0 : from.name) || 'Equipe Kripton Sports',
        address: (from === null || from === void 0 ? void 0 : from.email) || 'kriptonsports@email.com'
      },
      to: {
        name: to.name,
        address: to.email
      },
      subject,
      html: template
    });
    console.log('Mensagem enviada: ', message.messageId);
    console.log('Preview URL: ', _nodemailer.default.getTestMessageUrl(message));
  }

}, _temp)) || _class) || _class) || _class) || _class);
var _default = EtherealEmail;
exports.default = _default;