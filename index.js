const produceDrivingRange = function(blockRange) {
  return function(start, end) {
    const distance = Math.abs();
    const difference = blockRange - distance;
    if (difference >= 0) {
      return `within range by ${difference}`;
    } else {
      return `${-difference} blocks out of range`;
    }
  }
}