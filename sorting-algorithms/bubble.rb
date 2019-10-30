def swap(arr, i, j)
  temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
end

def bubbleSort(arr)
  swapped = true;

  while swapped == true do
    swapped = false
    arr.each_index do |i|
      if arr[i] && arr[i+1] && arr[i] > arr[i+1]
        swap(arr, i, i+1)
        swapped = true
      end
    end
  end
  arr
end


givenArr = [4, 6, 324, 345, 78, 34, 3874, 37, 78, 12, 48, 52]

p bubbleSort(givenArr)
