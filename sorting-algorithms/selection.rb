def swap(arr, i, j)
  temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
end

def selectionSort(arr)
  arr.each_index do |i|
    indexOfMin = i
    for j in i...arr.length
      indexOfMin = j if arr[j] < arr[indexOfMin]
    end

    swap(arr, i, indexOfMin) if i != indexOfMin
  end
end

givenArr = [4, 6, 324, 345, 78, 34, 3874, 37, 78, 12, 48, 52]

p selectionSort(givenArr)
