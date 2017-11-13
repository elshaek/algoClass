/*
BINARY SEARCH ARRAY

*** Description

Given a sorted array and a value, determine if the value is in the array using the binary search (divide and conquer) method.

*** Exercises

Write a function that takes a sorted array and a value and returns the index of the value in the array. Return null if the value is not found in the array. What is the time complexity?

Extra credit: Implement the function both iteratively and recursively.

*/

// Recursive solution
function binarySearchRecursive(arr, val, minIndex, maxIndex) {
  var midpoint = Math.floor((minIndex + maxIndex) / 2);
  if (val === arr[midpoint]) return midpoint;

  while (minIndex <= maxIndex) {
    if (val < arr[midpoint]) {
      return binarySearchRecursive(arr, val, minIndex, midpoint - 1);
    } else {
      return binarySearchRecursive(arr, val, midpoint + 1, maxIndex);
    }
  }
  return -(arr.length + 1);;
}


// Iterative solution
function binarySearchIterative(arr, val){
  while (minIndex <= maxIndex) {
    var minIndex = minIndex || 0;
    var maxIndex = maxIndex || arr.length - 1;
    var midpoint = Math.floor((minIndex + maxIndex) / 2);

    if (val === arr[midpoint]) return midpoint;
    else if (val < arr[midpoint]) maxIndex = midpoint - 1;
    else minIndex = midpoint + 1;
  }
  return -(arr.length + 1);
}

var sortedArray = [1,2,4,5,10,12,44,89,99,304];
var valueToFind = 305;
var minIndex = 0;
var maxIndex = sortedArray.length - 1;
var resultRecursive = binarySearchRecursive(sortedArray, valueToFind, minIndex, maxIndex);
var resultIterative = binarySearchIterative(sortedArray, valueToFind);

console.log("(Recursive) Value: " + sortedArray[resultRecursive]);
console.log("(Recursive) Index: " + resultRecursive);

console.log("(Iterative) Value: " + sortedArray[resultIterative]);
console.log("(Iterative) Index: " + resultIterative);
