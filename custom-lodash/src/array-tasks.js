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

function take() {
}

function filter() {
}

function find() {
}

function includes() {
}

function map() {
}

function zip() {
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
