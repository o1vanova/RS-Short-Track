function merge() {
}

function omit() {
}

function omitBy() {
}

function pick() {
}

function pickBy() {
}

function toPairs() {
}

/**
 * Checks if value is classified as a Number primitive or object.
 * Note: To exclude Infinity, -Infinity, and NaN,
 * which are classified as numbers, use the _.isFinite method.
 *
 * @param {value} any The value to check.
 * @returns {boolean} Returns true if value is a number, else false.
 *
 * @example
 *    _.isNumber(3) => true
 *    _.isNumber(Number.MIN_VALUE) => true
 *    _.isNumber(Infinity) => true
 *    _.isNumber('3') => false
 */
function isNumber(value) {
  return typeof value === 'number';
}

function get(obj, format) {
  return format.split('.').reduce((prev, value) => prev && prev[value], obj);
}

module.exports = {
  merge,
  omit,
  omitBy,
  pick,
  pickBy,
  toPairs,
  isNumber,
  get,
};
