"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (error, request, response, _) => {
  if (error instanceof _AppError.default) {
    return response.status(error.statusCode).json({
      error: error.message
    });
  }

  console.log(error);
  return response.status(500).json({
    error: 'Internal Server Error'
  });
};

exports.default = _default;