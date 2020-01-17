const assert = require('assert');
const tasks = require('../src/array-tasks');
it.optional = require('../extensions/it-optional');

describe('array-tasks', () => {
  it.optional('chunk test', () => {
    const arr1 = tasks.chunk(['a', 'b', 'c', 'd'], 2);
    const arr2 = tasks.chunk(['a', 'b', 'c', 'd'], 3);

    assert.equal(arr1.length, 2);
    assert.equal(arr2.length, 2);
    assert.equal(arr1[0], 'a,b');
    assert.equal(arr2[0], 'a,b,c');
  });


});

describe('compact-tasks', () => {
});

describe('drop-tasks', () => {
});

describe('dropWhile-tasks', () => {
});

describe('take-tasks', () => {
});

describe('filter-tasks', () => {
});

describe('find-tasks', () => {
});

describe('includes-tasks', () => {
});

describe('map-tasks', () => {
});

describe('zip-tasks', () => {
});
