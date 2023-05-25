// Unit test for findCommonElements function
const assert = require('assert');

// Import the findCommonElements function here

const testCases = [
  [[1, 2, 3], [4, 5, 6], []],
  [[1, 2, 3, 4], [4, 5, 6], [4]],
  [[1, 2, 3, 4], [5, 6], []],
  [[1, 2, 3, 4, 5], [4, 5, 6], [4, 5]],
  [[1, 1, 2, 2, 3], [2, 3, 4, 5], [2, 3]],
];

for (const [arr1, arr2, expected] of testCases) {
  const result = findCommonElements(arr1, arr2);
  assert.deepStrictEqual(result, expected);
}

console.log('All test cases passed!');
