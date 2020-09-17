"use strict";

var _tsyringe = require("tsyringe");

require("../../modules/users/providers");

require("../providers/EmailProvider");

var _UsersRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UsersRepository"));

var _UserTokenRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UserTokenRepository"));

var _LotRepository = _interopRequireDefault(require("../../modules/lots/infra/typeorm/repositories/LotRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('UsersRepository', _UsersRepository.default);

_tsyringe.container.registerSingleton('UserTokenRepository', _UserTokenRepository.default);

_tsyringe.container.registerSingleton('LotRepository', _LotRepository.default);