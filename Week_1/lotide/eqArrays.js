const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☹️ Assertion Failed: ${actual} !== ${expected}`);
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays([1, 2, 3], [2, 2, 3]), false);
assertEqual(eqArrays([], []), true);
