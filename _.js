const _ = {};

// .clamp()
_.clamp = function (num, lower, upper) {
  let minClampedValue = 0;
  let clampedValue = 0;

  minClampedValue = Math.max(num, lower);
  clampedValue = Math.min(minClampedValue, upper);

  return clampedValue;
};

//.inRange()
_.inRange = function (number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = 0;
  }
  if (lower > upper) {
    let swap = 0;
    swap = lower;
    lower = upper;
    upper = swap;
  }
  if (number > lower && number < upper) {
    return true;
  }
  return false;
};
