const _ = {};

// .clamp()
_.clamp = function (num, lower, upper) {
  let minClampedValue = 0;
  let clampedValue = 0;

  minClampedValue = Math.max(num, lower);
  clampedValue = Math.min(minClampedValue, upper);

  return clampedValue;
};

// .inRange()
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

// .words()
_.words = function (string) {
  return string.split(' ');
};

// .pad()
_.pad = function (string, length) {
  if (string.length >= length) {
    return string;
  }

  let arrString = string.split('');
  let pad = length - string.length;

  for (let i = 0; i < pad; i++) {
    if (i < Math.floor(pad / 2)) {
      arrString.unshift(' ');
    } else {
      arrString.push(' ');
    }
  }
  string = arrString.join('');
  return string;
};

// .has()
_.has = function (object, key) {
  if (object[key]) {
    return true;
  }
  return false;
};

// .invert()
_.invert = function (object) {
  const invertedObject = {};
  const objKeysArr = Object.keys(object);
  const objValuesArr = Object.values(object);

  for (let i = 0; i < objKeysArr.length; i++) {
    invertedObject[objValuesArr[i]] = objKeysArr[i];
  }
  return invertedObject;
};

// .drop()
_.drop = function (arr, number) {
  let droppedArray = [];
  if (number === undefined) {
    number = 1;
    droppedArray = arr.slice(number);
    // arr[0] = 5;
    return droppedArray;
  }
  droppedArray = arr.slice(number);
  return droppedArray;
};
