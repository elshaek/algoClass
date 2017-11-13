# Solution 1

def insertionSort(arr)
  arr.each_index do |i|
    num = arr[i]
    j = i - 1

    while arr[j] > num && j >= 0 do
      arr[j+1] = arr[j]
      j -= 1
    end

    arr[j+1] = num
  end

  arr
end


givenArr = [4, 6, 324, 345, 78, 34, 3874, 37, 78, 12, 48, 52]

p insertionSort(givenArr)
