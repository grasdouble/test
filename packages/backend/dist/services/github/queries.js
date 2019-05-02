"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserInformations = getUserInformations;
exports.getListOfRepositories = getListOfRepositories;
exports.fetchGithub = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _defaultConfig = require("./defaultConfig");

var _config = require("../../config");

var _user = require("./graphql/user");

var _repository = require("./graphql/repository");

var config = (0, _objectSpread2["default"])({}, _defaultConfig.github, _config.github);

var fetchGithub =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(query) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _nodeFetch["default"])('https://api.github.com/graphql', {
              method: 'POST',
              headers: {
                Authorization: "Bearer ".concat(config.token)
              },
              body: JSON.stringify({
                query: query
              })
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              return data.data || data.errors;
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchGithub(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchGithub = fetchGithub;

function getUserInformations(_x2) {
  return _getUserInformations.apply(this, arguments);
}

function _getUserInformations() {
  _getUserInformations = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(login) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", fetchGithub((0, _user.userInformations)(login)));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getUserInformations.apply(this, arguments);
}

function getListOfRepositories(_x3, _x4, _x5, _x6) {
  return _getListOfRepositories.apply(this, arguments);
}

function _getListOfRepositories() {
  _getListOfRepositories = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(owner, isOrganization, pagination, customQuery) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", fetchGithub((0, _repository.listOfRepositories)(owner, isOrganization, pagination, customQuery)));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getListOfRepositories.apply(this, arguments);
}