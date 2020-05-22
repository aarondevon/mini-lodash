const _ = {};

// .clamp()
_.clamp = function (num, lower, upper) {
  if (num >= lower && num <= upper) {
    return num;
  }
  if (num < lower) {
    return lower;
  }
  return upper;
};

console.log(_.clamp(4, 5, 10));
