const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🙂 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `☹️ Assertion Failed: ${actual} !== ${expected}`;
  }
};

const findKeyByValue = function(object, value) {
  for (const keyValue in object) {
    if (object[keyValue] === value) {
      return keyValue;
    }
  }
};

// Test Cases

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  romance: "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
