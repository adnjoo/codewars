def solution(a, b)
  longest = b
  shortest = a
  if a.length > b.length
    longest = a
    shortest = b
  end
  return shortest+longest+shortest
end
