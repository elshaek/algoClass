/*
QUICK SORT

*** Description

Like merge sort, quick sort employs a divide and conquer strategy.

It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.

*** Exercises

- Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
- Implement quicksort
- Identify time complexity

- Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)

*** Extra Credit

Variants:
- Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)

*/

// Solution 1
// function quicksort(arr) {
//   if (arr.length < 2) return arr;

//   var lesser = [];
//   var greater = [];
//   var pivot = arr[arr.length - 1];

//   for (var i = 0; i < arr.length - 1; i++) {
//     if (arr[i] <= pivot) {
//       lesser.push(arr[i]);
//     } else {
//       greater.push(arr[i]);
//     }
//   }
//   return quicksort(lesser).concat(pivot, quicksort(greater));
// }


// Solution 2
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quicksort(arr, minIndex, maxIndex) {
  minIndex = minIndex || 0;
  maxIndex = maxIndex || arr.length - 1;

  var pivotIndex = partition(arr, minIndex, maxIndex);

  if (minIndex < pivotIndex - 1) {
    quicksort(arr, minIndex, pivotIndex - 1);
  }
  if (maxIndex > pivotIndex) {
    quicksort(arr, pivotIndex, maxIndex);
  }
  return arr;
}

function partition(arr, minIndex, maxIndex) {
  var pivot = Math.floor((minIndex + maxIndex) / 2);

  while (minIndex < maxIndex) {
    while (arr[minIndex] < arr[pivot]) {
      minIndex++;
    }
    while (arr[maxIndex] > arr[pivot]) {
      maxIndex--;
    }
    if (minIndex <= maxIndex) {
      swap(arr, minIndex, maxIndex);
      minIndex++;
      maxIndex--;
    }
  }
  return minIndex;
}

var givenArr = [4, 6, 324, 345, 78, 34, 3874, 37, 78, 12, 48, 52];

console.log(quicksort(givenArr));
