const assert = require('assert');
const tasks = require('../src/array-tasks');

describe('chunk-tasks', () => {
  const arr1 = tasks.chunk(['a', 'b', 'c', 'd'], 2);
  const arr2 = tasks.chunk(['a', 'b', 'c', 'd'], 3);

  assert.equal(arr1.length, 2);
  assert.equal(arr2.length, 2);
  assert.equal(arr1[0], 'a,b');
  assert.equal(arr2[0], 'a,b,c');
});
