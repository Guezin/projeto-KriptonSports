"use strict";

var _tsyringe = require("tsyringe");

var _EtherealEmail = _interopRequireDefault(require("./implementations/EtherealEmail"));

var _HandlebarsTemplate = _interopRequireDefault(require("./EmailTemplateProvider/implementations/HandlebarsTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('HandlebarsTemplate', _HandlebarsTemplate.default);

_tsyringe.container.registerInstance('EtherealEmail', _tsyringe.container.resolve(_EtherealEmail.default));