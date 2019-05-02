"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listOfRepositories = void 0;

var _commons = require("./commons");

/* eslint-disable import/prefer-default-export */
var listOfRepositories = function listOfRepositories(owner, isOrganization, pagination, customQuery) {
  var page = (0, _commons.managePagination)(pagination);
  return "query {\n      ".concat(isOrganization ? 'organization' : 'user', "(login:\"").concat(owner, "\") {\n        repositories(").concat(page, ") {\n          edges {\n            node {\n              id\n              name\n              ").concat(customQuery || '', "\n            }\n            cursor\n          }\n        }\n      }\n    }");
};

exports.listOfRepositories = listOfRepositories;