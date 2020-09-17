"use strict";

require("reflect-metadata");

require("dotenv/config");

var _express = _interopRequireWildcard(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _celebrate = require("celebrate");

require("express-async-errors");

require("../typeorm/connectionDB");

require("../../container");

var _routes = _interopRequireDefault(require("./routes"));

var _error = _interopRequireDefault(require("./middlewares/error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import rateLimiter from '@shared/infra/http/middlewares/rateLimiter';
const server = (0, _express.default)(); // server.use(rateLimiter);

server.use((0, _cors.default)());
server.use((0, _express.json)());
server.use(_routes.default);
server.use((0, _celebrate.errors)({
  statusCode: 401
}));
server.use(_error.default);
server.listen(3333, () => console.log('🚀 Server started on port 3333'));