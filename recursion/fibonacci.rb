def fibonacci(position)
  return 0 if position == 0
  return 1 if position == 1
  fibonacci(position - 1) + fibonacci(position - 2)
end

p fibonacci(9)
