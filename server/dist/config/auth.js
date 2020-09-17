"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  jwt: {
    secret: process.env.APP_JWT_SECRET,
    expiresIn: process.env.APP_JWT_EXPIRES_IN
  }
};
exports.default = _default;