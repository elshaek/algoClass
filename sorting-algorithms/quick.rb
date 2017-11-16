# Solution 1
# def quicksort(arr)
#   return arr if arr.length < 2

#   pivot = arr[-1]
#   lesser = []
#   greater = []

#   arr.each_index do |i|
#     if i != arr.length - 1
#       if arr[i] < pivot
#         lesser << arr[i]
#       end

#       if arr[i] > pivot
#         greater << arr[i]
#       end
#     end
#   end

#   quicksort(lesser) + [pivot] + quicksort(greater)
# end

# Solution 2
def swap(arr, i, j)
  temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
end

def quicksort(arr, minIndex = 0, maxIndex = arr.length - 1)
  pivot = partitionHoare(arr, minIndex, maxIndex)
  # pivot = partitionLomuto(arr, minIndex, maxIndex)

  if minIndex < pivot - 1
    quicksort(arr, minIndex, pivot - 1)
  end

  if maxIndex > pivot
    quicksort(arr, pivot, maxIndex)
  end

  arr
end

def partitionHoare(arr, minIndex, maxIndex)
  pivotIndex = (minIndex + maxIndex) / 2

  while minIndex < maxIndex
    while arr[minIndex] < arr[pivotIndex]
      minIndex += 1
    end

    while arr[maxIndex] > arr[pivotIndex]
      maxIndex -= 1
    end

    if minIndex <= maxIndex
      swap(arr, minIndex, maxIndex)
      minIndex += 1
      maxIndex -= 1
    end
  end
  return minIndex
end

def partitionLomuto(arr, minIndex, maxIndex)
  pivot = maxIndex
  i = minIndex

  for j in minIndex...maxIndex
    if arr[j] <= arr[pivot]
      swap(arr, i, j)
      i += 1
    end
  end
  swap(arr, i, maxIndex)
  return i
end


givenArr = [4, 6, 324, 345, 78, 34, 3874, 37, 78, 12, 48, 52]

p quicksort(givenArr)
