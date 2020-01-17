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

  it.optional('compact test', () => {
    const arr = tasks.compact([0, 1, false, 2, '', 3]);
    assert.equal(arr, '1,2,3');
  });

  it.optional('drop test', () => {
    assert.equal(tasks.drop([1, 2, 3]), '2,3');
    assert.equal(tasks.drop([1, 2, 3], 2), '3');
    assert.equal(tasks.drop([1, 2, 3], 5), '');
    assert.equal(tasks.drop([1, 2, 3], 0), '1,2,3');
  });

  it.optional('dropWhile test', () => {
  });

  it.optional('take test', () => {
  });

  it.optional('filter test', () => {
  });

  it.optional('find test', () => {
  });

  it.optional('includes test', () => {
  });

  it.optional('map test', () => {
  });

  it.optional('zip test', () => {
  });

});
