const assert = require('assert');
const _ = require('../src/array-tasks');
it.optional = require('../extensions/it-optional');

describe('array-tasks', () => {
  it.optional('chunk test', () => {
    const arr1 = _.chunk(['a', 'b', 'c', 'd'], 2);
    const arr2 = _.chunk(['a', 'b', 'c', 'd'], 3);

    assert.equal(arr1.length, 2);
    assert.equal(arr2.length, 2);
    assert.equal(arr1[0], 'a,b');
    assert.equal(arr2[0], 'a,b,c');
  });

  it.optional('compact test', () => {
    const arr = _.compact([0, 1, false, 2, '', 3]);
    assert.equal(arr, '1,2,3');
  });

  it.optional('drop test', () => {
    assert.equal(_.drop([1, 2, 3]), '2,3');
    assert.equal(_.drop([1, 2, 3], 2), '3');
    assert.equal(_.drop([1, 2, 3], 5), '');
    assert.equal(_.drop([1, 2, 3], 0), '1,2,3');
  });

  it.optional('dropWhile test', () => {
    const users = [
      { 'user': 'barney',  'active': false },
      { 'user': 'fred',    'active': false },
      { 'user': 'pebbles', 'active': true }
    ];

    const pebbles = _.dropWhile(users, function(o) { return !o.active; });
    assert.equal(pebbles.length, 1);
    assert.equal(pebbles[0].user, 'pebbles');

    const pebbles1 = _.dropWhile(users, { 'user': 'barney', 'active': false });
    assert.equal(pebbles1.length, 2);
    assert.equal(pebbles1[0].user, 'fred');
    assert.equal(pebbles1[1].user, 'pebbles');

    const pebbles2 = _.dropWhile(users, ['active', false]);
    assert.equal(pebbles2.length, 1);
    assert.equal(pebbles2[0].user, 'pebbles');

    const result = _.dropWhile(users, 'active');
    assert.equal(result.length, 3);
    assert.equal(result[0].user, 'barney');
    assert.equal(result[1].user, 'fred');
    assert.equal(result[2].user, 'pebbles');
  });

  it.optional('take test', () => {
    assert.equal(_.take([1, 2, 3]), '1');
    assert.equal(_.take([1, 2, 3], 2), '1,2');
    assert.equal(_.take([1, 2, 3], 5), '1,2,3');
    assert.equal(_.take([1, 2, 3], 0), '');
  });

  it.optional('filter test', () => {
    const users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred',   'age': 40, 'active': false }
    ];

    const fred1 = _.filter(users, function(o) { return !o.active; });
    assert.equal(fred1.length, 1);
    assert.equal(fred1[0].user, 'fred');

    const barney1 = _.filter(users, { 'age': 36, 'active': true });
    assert.equal(barney1.length, 1);
    assert.equal(barney1[0].user, 'barney');

    const fred2 = _.filter(users, ['active', false]);
    assert.equal(fred2.length, 1);
    assert.equal(fred2[0].user, 'fred');

    const barney2 = _.filter(users, 'active');
    assert.equal(barney2.length, 1);
    assert.equal(barney2[0].user, 'barney');
  });

  it.optional('find test', () => {
    const users = [
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ];

    const barney = _.find(users, function(o) { return o.age < 40; });
    assert.equal(typeof barney, 'object');
    assert.equal(barney.user, 'barney');

    const pebbles = _.find(users, { 'age': 1, 'active': true });
    assert.equal(typeof pebbles, 'object');
    assert.equal(pebbles.user, 'pebbles');

    const fred = _.find(users, ['active', false]);
    assert.equal(typeof fred, 'object');
    assert.equal(fred.user, 'fred');

    const barney2 = _.find(users, 'active');
    assert.equal(typeof barney2, 'object');
    assert.equal(barney2.user, 'barney');
  });

  it.optional('includes test', () => {
    assert.equal(_.includes([1, 2, 3], 1), true);
    assert.equal(_.includes([1, 2, 3], 1, 2), false);
    assert.equal(_.includes({ 'a': 1, 'b': 2 }, 1), true);
    assert.equal(_.includes('abcd', 'bc'), true);
  });

  it.optional('map test', () => {
    function square(n) {
      return n * n;
    }

    assert.equal(_.map([4, 8], square), '16,64');
    assert.equal(_.map({ 'a': 4, 'b': 8 }, square), '16,64');

    const users = [
      { 'user': 'barney' },
      { 'user': 'fred' }
    ];

    assert.equal(_.map(users, 'user'), 'barney,fred');
  });

  it.optional('zip test', () => {
    const result = _.zip(['a', 'b'], [1, 2], [true, false]);
    assert.equal(result[0], 'a,1,true');
    assert.equal(result[1], 'b,2,false');
  });

});
