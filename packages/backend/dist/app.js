"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _server = _interopRequireDefault(require("server"));

var _github = require("./services/github");

// Include the server in your file
var get = _server["default"].router.get;
var header = _server["default"].reply.header;
var cors = [function () {
  return header('Access-Control-Allow-Origin', '*');
}, function () {
  return header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
}, function (ctx) {
  return ctx.method.toLowerCase() === 'options' ? 200 : false;
}];
(0, _server["default"])({
  port: 4000
}, cors, [get('/', function () {
  return 'Hello world';
})].concat((0, _toConsumableArray2["default"])(_github.routes)));