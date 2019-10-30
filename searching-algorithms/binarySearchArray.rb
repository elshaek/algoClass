# Recursive solution
def binarySearchRecursive(arr, val, minIndex, maxIndex)
  midpoint = (minIndex + maxIndex) / 2
  return midpoint if arr[midpoint] == val

  while minIndex <= maxIndex
    if (val < arr[midpoint])
      return binarySearchRecursive(arr, val, minIndex, midpoint - 1)
    else
      return binarySearchRecursive(arr, val, midpoint + 1, maxIndex)
    end
  end
  arr.length
end

# Iterative solution
def binarySearchIterative(arr, val)
  minIndex = 0
  maxIndex = arr.length - 1


  while (minIndex <= maxIndex)
    midpoint = (minIndex + maxIndex) / 2
    return midpoint if arr[midpoint] == val

    if val < arr[midpoint]
      maxIndex = midpoint - 1
    else
      minIndex = midpoint + 1
    end
  end
  arr.length
end

sortedArray = [1,2,4,5,10,12,44,89,99,304]
valueToFind = 89
minIndex = 0
maxIndex = sortedArray.length - 1
resultRecursive = binarySearchRecursive(sortedArray, valueToFind, minIndex, maxIndex)
resultIterative = binarySearchIterative(sortedArray, valueToFind)

puts "(Recursive) Index: #{resultRecursive}"
puts "(Recursive) Value: #{sortedArray[resultRecursive]}"

puts "(Iterative) Index: #{resultIterative}"
puts "(Iterative) Value: #{sortedArray[resultIterative]}"
