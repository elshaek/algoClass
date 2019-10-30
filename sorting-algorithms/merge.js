/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  var midpoint = Math.floor(arr.length/2);
  var leftArr = arr.slice(0, midpoint);
  var rightArr = arr.slice(midpoint, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  var sortedArr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return sortedArr.concat(left, right);
}

var givenArr = [4, 6, 324, 345, 78, 34, 3874, 37, 78, 12, 48, 52];

console.log(mergeSort(givenArr));
