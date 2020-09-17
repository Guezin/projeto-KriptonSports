"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _handlebars = _interopRequireDefault(require("handlebars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HandlebarsTemplate {
  async parse({
    file,
    variables
  }) {
    const fileTemplateHbs = await _fs.default.promises.readFile(file, {
      encoding: 'utf-8'
    });

    const template = _handlebars.default.compile(fileTemplateHbs);

    return template(variables);
  }

}

var _default = HandlebarsTemplate;
exports.default = _default;