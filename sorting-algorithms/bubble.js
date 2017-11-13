/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/
// Solution 1

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// function bubbleSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 1; j < arr.length; j++) {
//       if (arr[j - 1] > arr[j]) {
//         swap(arr, j - 1, j);
//       }
//     }
//   }
//   return arr;
// }

// Solution 2

function bubbleSort(arr) {
  var swapped;
  do {
    swapped = false;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i-1]) {
        swap(arr, i, i-1);
        swapped = true;
      }
    }
  } while(swapped);
  return arr;
}

var givenArr = [4, 6, 324, 345, 78, 34, 3874, 37, 78, 12, 48, 52];

console.log(bubbleSort(givenArr));
