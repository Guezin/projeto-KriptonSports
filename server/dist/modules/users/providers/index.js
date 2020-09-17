"use strict";

var _tsyringe = require("tsyringe");

var _BCrypt = _interopRequireDefault(require("./ProvidesEncryptedPassword/implementations/BCrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('EncryptedPassword', _BCrypt.default);