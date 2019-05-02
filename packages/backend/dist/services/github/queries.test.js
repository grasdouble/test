"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _queries = require("./queries");

describe('test user queries', function () {
  it('function getUserInformations', function () {
    var login = 'defunkt';
    return (0, _queries.getUserInformations)(login).then(function (data) {
      expect(data.user).toBeDefined();
      expect(data.user.login).toBe(login);
      expect(data.user.avatarUrl).toBeDefined();
      expect(data.user.bio).toBeDefined();
      expect(data.user.company).toBeDefined();
      expect(data.user.createdAt).toBeDefined();
      expect(data.user.email).toBeDefined();
      expect(data.user.followers).toBeDefined();
      expect(data.user.following).toBeDefined();
      expect(data.user.name).toBeDefined();
      expect(data.user.watching).toBeDefined();
    });
  });
});
describe('test repositorie queries', function () {
  var pagination = {
    nbItem: 2,
    isFirst: true,
    isAfter: true,
    cursor: null
  };
  var customQuery = 'createdAt';
  it('function getListOfRepositories: User',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var owner, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            owner = 'defunkt';
            _context.next = 3;
            return (0, _queries.getListOfRepositories)(owner, false, pagination, undefined);

          case 3:
            data = _context.sent;
            expect(data).toBeDefined();
            expect(data.user).toBeDefined();
            expect(data.user.repositories).toBeDefined();
            expect(data.user.repositories.edges[0].node.name).toBeDefined();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('function getListOfRepositories: Organization',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var owner, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            owner = 'grasdouble';
            _context2.next = 3;
            return (0, _queries.getListOfRepositories)(owner, true, pagination, undefined);

          case 3:
            data = _context2.sent;
            expect(data).toBeDefined();
            expect(data.organization).toBeDefined();
            expect(data.organization.repositories).toBeDefined();
            expect(data.organization.repositories.edges[0].node.name).toBeDefined();

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('function getListOfRepositories: User, with customQuery',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3() {
    var owner, data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            owner = 'defunkt';
            _context3.next = 3;
            return (0, _queries.getListOfRepositories)(owner, false, pagination, customQuery);

          case 3:
            data = _context3.sent;
            expect(data).toBeDefined();
            expect(data.user).toBeDefined();
            expect(data.user.repositories).toBeDefined();
            expect(data.user.repositories.edges[0].node.name).toBeDefined();
            expect(data.user.repositories.edges[0].node.createdAt).toBeDefined();

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('function getListOfRepositories: Organization, with customQuery',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4() {
    var owner, data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            owner = 'grasdouble';
            _context4.next = 3;
            return (0, _queries.getListOfRepositories)(owner, true, pagination, customQuery);

          case 3:
            data = _context4.sent;
            expect(data).toBeDefined();
            expect(data.organization).toBeDefined();
            expect(data.organization.repositories).toBeDefined();
            expect(data.organization.repositories.edges[0].node.name).toBeDefined();
            expect(data.organization.repositories.edges[0].node.createdAt).toBeDefined();

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
});