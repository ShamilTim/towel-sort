
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return [];
  }
  let result = [];
  for (const [idx, val] of matrix.entries()) {
    idx % 2 ? result.push(val.reverse()) : result.push(val);
  }
  return [].concat(...Object.values(result));
}