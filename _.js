const _ = {};

// .clamp()
_.clamp = function (num, lower, upper) {
  let minClampedValue = 0;
  let clampedValue = 0;

  minClampedValue = Math.max(num, lower);
  clampedValue = Math.min(minClampedValue, upper);

  return clampedValue;
};
