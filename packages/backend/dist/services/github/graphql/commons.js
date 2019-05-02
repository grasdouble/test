"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.managePagination = void 0;

/* eslint-disable import/prefer-default-export */
var managePagination = function managePagination(_ref) {
  var _ref$nbItem = _ref.nbItem,
      nbItem = _ref$nbItem === void 0 ? 5 : _ref$nbItem,
      _ref$isFirst = _ref.isFirst,
      isFirst = _ref$isFirst === void 0 ? true : _ref$isFirst,
      _ref$isAfter = _ref.isAfter,
      isAfter = _ref$isAfter === void 0 ? true : _ref$isAfter,
      cursor = _ref.cursor,
      orderBy = _ref.orderBy,
      orderDirection = _ref.orderDirection;
  var count = 5;

  if (nbItem > 20) {
    // eslint-disable-next-line no-console
    console.warn("The maximum value authorized for the pagination is 20. the default value is used: ".concat(count));
  } else {
    count = nbItem;
  }

  var startFrom = isFirst ? "first:".concat(count) : "last:".concat(count); // PAGINATION

  var pagination = '';

  if (cursor) {
    pagination = isAfter ? ", after:\"".concat(cursor, "\"") : ", before:\"".concat(cursor, "\"");
  } // ORDER


  var order = '';

  if (orderBy) {
    order = ", orderBy:{".concat(orderBy, ", direction:").concat(orderDirection === 'DESC' ? orderDirection : 'ASC', "}");
  }

  return startFrom + pagination + order;
};

exports.managePagination = managePagination;