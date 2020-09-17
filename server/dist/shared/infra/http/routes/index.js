"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ensureAuthenticated = _interopRequireDefault(require("../../../../modules/users/infra/http/middlewares/ensureAuthenticated"));

var _session = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/session.routes"));

var _user = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/user.routes"));

var _profile = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/profile.routes"));

var _forgotPassword = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/forgotPassword.routes"));

var _resetPassword = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/resetPassword.routes"));

var _lot = _interopRequireDefault(require("../../../../modules/lots/infra/http/routes/lot.routes"));

var _search = _interopRequireDefault(require("../../../../modules/lots/infra/http/routes/search.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/sessions', _session.default);
routes.use('/users', _user.default);
routes.use('/profile', _ensureAuthenticated.default, _profile.default);
routes.use('/forgot-password', _forgotPassword.default);
routes.use('/reset-password', _resetPassword.default);
routes.use('/lots', _ensureAuthenticated.default, _lot.default);
routes.use('/search', _ensureAuthenticated.default, _search.default);
var _default = routes;
exports.default = _default;