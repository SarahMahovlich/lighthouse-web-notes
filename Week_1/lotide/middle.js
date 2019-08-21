const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🙂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☹️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let midArray = [];
  let middle = "";
  if (array.length <= 2) {
    return midArray;
  } else if (array.length % 2 === 0) { //should return two elements in the array
    middle = (array.length / 2);
    midArray.push(array[middle - 1]);
    midArray.push(array[middle]);
  } else if (array.length % 2 !== 0) { // should return one element in the array
    middle = Math.floor(array.length / 2);
    midArray.push(array[middle]);
  }
  return midArray;
};

assertArraysEqual(middle([2]), [1]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);


//EVEN
// if the array is even should return two elements in the array
// need to determine what index are middle two
// then return an array with the elements at those two indices

//ODD
// if the array is odd should return one element in the array
// need to determine what index is the middle one
// then return an array with the elements at the index
