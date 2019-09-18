function produceDrivingRange(blockRange) {
  return function(range) {
    return range - blockRange;
  }
}