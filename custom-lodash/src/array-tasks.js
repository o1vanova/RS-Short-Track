/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param {array} array The array to process
 * @param {number} size The length of each chunk. 1 by default
 * @return {array} Returns the new array of chunks.
 *
 * @example
 *    _.chunk(['a', 'b', 'c', 'd'], 2) => [['a', 'b'], ['c', 'd']]
 *    _.chunk(['a', 'b', 'c', 'd'], 3) => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size = 1) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    const res = array.slice(i, i + size);
    result.push(res);
  }
  return result;
}

/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * @param {array} array The array to compact.
 * @return {array} Returns the new array of filtered values.
 *
 * @example
 *    _.compact([0, 1, false, 2, '', 3]) => [1, 2, 3]
 */
function compact(array) {
  return array.filter((a) => a);
}

/**
 * Creates a slice of array with n elements dropped from the beginning.
 *
 * @param {array} array The array to query.
 * @param {n} number The number of elements to drop.
 * @returns {array} Returns the slice of array.
 *
 * @example
 *    _.drop([1, 2, 3]) => [2, 3]
 *    _.drop([1, 2, 3], 2) => [3]
 *    _.drop([1, 2, 3], 5) => []
 *    _.drop([1, 2, 3], 0) => [1, 2, 3]
 */
function drop(array, n = 1) {
  return array.splice(n);
}

function dropWhile() {
}

/**
 * Creates a slice of array with n elements taken from the beginning.
 *
 * @param {array} array The array to query.
 * @param {n} number The number of elements to take.
 * @returns {array} Returns the slice of array.
 *
 * @example
 *    _.take([1, 2, 3]) => [1]
 *    _.take([1, 2, 3], 2) => [1, 2]
 *    _.take([1, 2, 3], 5) => [1, 2, 3]
 *    _.take([1, 2, 3], 0) => []
 */
function take(array, n = 1) {
  return array.slice(0, n);
}

/**
 * Iterates over elements of collection,
 * returning an array of all elements predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, index|key, collection).
 *
 * @param {array|object} collection The collection to iterate over.
 * @param {function} predicate The function invoked per iteration.
 * @returns {array} Returns the new filtered array.
 *
 * @example
 *    const users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred',   'age': 40, 'active': false }
      ];
 *    _.filter(users, function(o) { return !o.active; }) => objects for ['fred']
 *    _.filter(users, { 'age': 36, 'active': true }) => objects for ['barney']
 *    _.filter(users, ['active', false]) => objects for ['fred']
 *    _.filter(users, 'active') => objects for ['barney']
 */
function filter() {
}

function find() {
}

/**
 * Checks if value is in collection.
 * If collection is a string, it's checked for a substring of value,
 * otherwise SameValueZero is used for equality comparisons.
 * If fromIndex is negative, it's used as the offset from the end of collection.
 *
 * @param {array|object|string} collection The collection to inspect.
 * @param {any} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {boolean} Returns true if value is found, else false
 *
 * @example
 *    _.includes([1, 2, 3], 1) => true
 *    _.includes([1, 2, 3], 1, 2) => false
 *    _.includes({ 'a': 1, 'b': 2 }, 1) => true
 *    _.includes('abcd', 'bc') => true
 */
function includes(collection, value, fromIndex = 0) {
  if (typeof collection === 'string') {
    return collection.substring(fromIndex).indexOf(value);
  }

  const isArray = Array.isArray(collection);
  const array = isArray ? collection : Object.values(collection);
  return array.slice(fromIndex).find((c) => c === value) !== undefined;
}

function map() {
}

/**
 * Creates an array of grouped elements,
 * the first of which contains the first elements of the given arrays,
 * the second of which contains the second elements of the given arrays, and so on.
 *
 * @param {arrays} arrays The arrays to process.
 * @returns {array} Returns the new array of grouped elements.
 *
 * @example
 *    _.zip(['a', 'b'], [1, 2], [true, false]) => [['a', 1, true], ['b', 2, false]]
 */
function zip(...arrays) {
  const result = [];
  const len = Math.max(...arrays.map((array) => array.length));

  for (let i = 0; i < len; i += 1) {
    result[i] = arrays.map((array) => array[i]);
  }
  return result;
}

module.exports = {
  chunk,
  compact,
  drop,
  dropWhile,
  take,
  filter,
  find,
  includes,
  map,
  zip,
};
