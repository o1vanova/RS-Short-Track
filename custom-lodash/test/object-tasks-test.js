const assert = require('assert');
const _ = require('../src/object-tasks');
it.optional = require('../extensions/it-optional');


describe('array-tasks', () => {
  it.optional('merge test', () => {
    const object = {
      'a': [{ 'b': 2 }, { 'd': 4 }]
    };

    const other = {
      'a': [{ 'c': 3 }, { 'e': 5 }]
    };

    const result = _.merge(object, other);
    assert.equal(typeof result, 'object');
    assert.equal(result.a.length, 2);
    assert.equal(result.a[0].b, 2);
    assert.equal(result.a[0].c, 3);
    assert.equal(result.a[1].d, 4);
    assert.equal(result.a[1].e, 5);
  });

  it.optional('omit test', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };

    const result = _.omit(object, ['a', 'c']);
    assert.equal(result.b, 2);
  });

  it.optional('omitBy test', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };

    const result = _.omitBy(object, _.isNumber);
    assert.equal(result.b, 2);
  });

  it.optional('pick test', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };

    const result = _.pick(object, ['a', 'c']);
    assert.equal(result.a, 1);
    assert.equal(result.c, 3);
  });

  it.optional('pickBy test', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };

    const result = _.pickBy(object, ['a', 'c'], _.isNumber);
    assert.equal(result.a, 1);
    assert.equal(result.c, 3);
  });

  it.optional('toPairs test', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }

    Foo.prototype.c = 3;

    const result = _.toPairs(new Foo);
    assert.equal(result.length, 2);
    assert.equal(result[0].length, 2);
    assert.equal(result[1].length, 2);
  });

  it.optional('isNumber tests', () => {
    assert.equal(_.isNumber(3), true);
    assert.equal(_.isNumber(Number.MIN_VALUE), true);
    assert.equal(_.isNumber(Infinity), true);
    assert.equal(_.isNumber('3'), false);
  });

});
