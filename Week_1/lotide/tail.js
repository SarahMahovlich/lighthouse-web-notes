const tail = function(array) {
  let tailArr = array.slice(1);
  return tailArr;
};

//Test Code
console.log(tail([1]));
console.log(tail([]));

const assertEqual = function(actual, expected) {
  if (actual.join() === expected.join()) {
    console.log(`🙂 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☹️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Test Code
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
const result2 = tail([1]);
assertEqual(result2, [1]);


