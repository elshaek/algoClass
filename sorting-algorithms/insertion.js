/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/

// Solution 1

// function swap(arr, i, j) {
//   var temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// function insertionSort(arr) {
//   for (var i = 1; i < arr.length; i++) {
//     var num = arr[i];
//     var index = i;
//     for (var j = index - 1; j >= 0; j--) {
//       if(arr[j] > num) {
//         swap(arr, index, j);
//         index--;
//       }
//     }
//   }
//   return arr;
// }

// Solution 2

function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    var j = i - 1;

    while (j >= 0 && arr[j] > num) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j+1] = num;
  }
  return arr;
}

var givenArr = [5, 4, 6, 324, 345, 78, 3874, 37, 78, 12, 48, 52];
//givenArr = [3, 4, 1, 2, 6];

console.log(insertionSort(givenArr));
