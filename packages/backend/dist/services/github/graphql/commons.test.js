"use strict";

var _commons = require("./commons");

describe('test managePagination', function () {
  it('basic usage: First 5', function () {
    var pagination = {
      nbItem: undefined,
      isFirst: undefined,
      isAfter: undefined,
      cursor: undefined,
      orderBy: undefined,
      orderDirection: undefined
    };
    var expectedResult = 'first:5';
    expect((0, _commons.managePagination)(pagination)).toBe(expectedResult);
    pagination.nbItem = 5;
    pagination.isFirst = true;
    expect((0, _commons.managePagination)(pagination)).toBe(expectedResult);
  });
  it('basic usage: Last 5', function () {
    var pagination = {
      nbItem: 5,
      isFirst: false,
      isAfter: undefined,
      cursor: undefined,
      orderBy: undefined,
      orderDirection: undefined
    };
    var expectedResult = 'last:5';
    expect((0, _commons.managePagination)(pagination)).toBe(expectedResult);
  });
  it('Use Cursor position: after it', function () {
    var pagination = {
      nbItem: 5,
      isFirst: true,
      isAfter: undefined,
      cursor: 'cursorRef',
      orderBy: undefined,
      orderDirection: undefined
    };
    var expectedResult = 'first:5, after:"cursorRef"';
    expect((0, _commons.managePagination)(pagination)).toBe(expectedResult);
    pagination.isAfter = true;
    expect((0, _commons.managePagination)(pagination)).toBe(expectedResult);
  });
  it('Use Cursor position: before it', function () {
    var pagination = {
      nbItem: 5,
      isFirst: true,
      isAfter: false,
      cursor: 'cursorRef',
      orderBy: undefined,
      orderDirection: undefined
    };
    var expectedResult = 'first:5, before:"cursorRef"';
    expect((0, _commons.managePagination)(pagination)).toBe(expectedResult);
  });
  it('Use OrderBy: ASC', function () {
    var pagination = {
      nbItem: 5,
      isFirst: undefined,
      isAfter: undefined,
      cursor: undefined,
      orderBy: 'name',
      orderDirection: undefined
    };
    var expectedResult = 'first:5, orderBy:{name, direction:ASC}';
    expect((0, _commons.managePagination)(pagination)).toBe(expectedResult);
    pagination.orderDirection = 'ASC';
    expect((0, _commons.managePagination)(pagination)).toBe(expectedResult);
  });
  it('Use OrderBy: DESC', function () {
    var pagination = {
      nbItem: 5,
      isFirst: undefined,
      isAfter: undefined,
      cursor: undefined,
      orderBy: 'name',
      orderDirection: 'DESC'
    };
    var expectedResult = 'first:5, orderBy:{name, direction:DESC}';
    expect((0, _commons.managePagination)(pagination)).toBe(expectedResult);
  });
  it('Full test', function () {
    var pagination = {
      nbItem: 5,
      isFirst: false,
      isAfter: false,
      cursor: 'cursorRef',
      orderBy: 'id',
      orderDirection: 'DESC'
    };
    var expectedResult = 'last:5, before:"cursorRef", orderBy:{id, direction:DESC}';
    expect((0, _commons.managePagination)(pagination)).toBe(expectedResult);
  });
});