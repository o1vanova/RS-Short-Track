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

module.exports = {
  chunk,
};
