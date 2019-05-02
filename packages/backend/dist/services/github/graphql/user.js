"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listOfNotification = exports.listOfFollowing = exports.listOfFollowers = exports.listOfStar = exports.listOfOrganizations = exports.listOfProjects = exports.userInformations = void 0;

/**
 * Get basic information related to a specified login name
 * @param {string} login
 */
var userInformations = function userInformations(login) {
  return "query {\n    user(login: \"".concat(login, "\") {\n      login\n      name\n      email\n      company\n      bio\n      avatarUrl\n      createdAt\n      watching {\n        totalCount\n      }\n      following {\n        totalCount\n      }\n      followers {\n        totalCount\n      }\n    }\n  }");
};

exports.userInformations = userInformations;

var listOfProjects = function listOfProjects() {// TODO Implement
};

exports.listOfProjects = listOfProjects;

var listOfOrganizations = function listOfOrganizations() {// TODO Implement
};

exports.listOfOrganizations = listOfOrganizations;

var listOfStar = function listOfStar() {// TODO Implement
};

exports.listOfStar = listOfStar;

var listOfFollowers = function listOfFollowers() {// TODO Implement
};

exports.listOfFollowers = listOfFollowers;

var listOfFollowing = function listOfFollowing() {// TODO Implement
};

exports.listOfFollowing = listOfFollowing;

var listOfNotification = function listOfNotification() {// TODO Implement
};

exports.listOfNotification = listOfNotification;