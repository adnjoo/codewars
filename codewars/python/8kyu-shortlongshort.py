def solution(a, b):
    longest = a
    shortest = b
    if(len(b) > len(a)):
      longest = b
      shortest = a
    return shortest+longest+shortest