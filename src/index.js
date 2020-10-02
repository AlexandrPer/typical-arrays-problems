
exports.min = function min (array) {
  if(array) {
    return array.length ? Math.min(...array) : 0;
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if(array) {
    return array.length ? Math.max(...array) : 0;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if(array) {
    return array.length ? array.reduce((a, b) => (a + b)) / array.length : 0;
  } else {
    return 0;
  }
}
