
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🙂 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `☹️ Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = function(arr1, arr2) {
  let arr1String = arr1.toString();
  let arr2String = arr2.toString();
  if (arr1String === arr2String) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(assertEqual(true, true));
  } else console.log(assertEqual(false, false));
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);