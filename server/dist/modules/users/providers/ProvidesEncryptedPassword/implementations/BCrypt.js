"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = require("bcryptjs");

class BCrypt {
  async generateHash(password) {
    const hashed = await (0, _bcryptjs.hash)(password, 8);
    return hashed;
  }

  async compareHash(password, passwordHash) {
    const passwordValid = await (0, _bcryptjs.compare)(password, passwordHash);
    return passwordValid;
  }

}

var _default = BCrypt;
exports.default = _default;