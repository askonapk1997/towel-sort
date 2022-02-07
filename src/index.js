
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resultArr = [];
  if (matrix == undefined || matrix.length == 0) {
    return [];
  }

  // for (let i = 0; i < matrix.length; i++) {
    matrix.forEach((item, index) => {
      if (index % 2 !== 0) {
        resultArr = resultArr.concat(item.reverse());
      } else {
        resultArr = resultArr.concat(item);
      }
      
    });
  return resultArr;
}
