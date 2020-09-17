"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class FakeBCrypt {
  async generateHash(password) {
    return password;
  }

  async compareHash(password, passwordHash) {
    return password === passwordHash;
  }

}

var _default = FakeBCrypt;
exports.default = _default;