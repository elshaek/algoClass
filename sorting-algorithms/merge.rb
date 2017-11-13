def mergeSort(arr)
  return arr if arr.length < 2

  midpoint = arr.length / 2
  leftArr = arr[0...midpoint]
  rightArr = arr[midpoint...arr.length]

  merge(mergeSort(leftArr), mergeSort(rightArr))
end

def merge(left, right)
  sortedArr = []

  while left.length > 0 && right.length > 0 do
    if left[0] <= right[0]
      sortedArr << left.shift
    else
      sortedArr << right.shift
    end
  end

  sortedArr.concat(left).concat(right)
end

givenArr = [4, 6, 324, 345, 78, 34, 3874, 37, 78, 12, 48, 52]

p mergeSort(givenArr);
