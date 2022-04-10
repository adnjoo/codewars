# TC O(n)
# hint - sliding window algorithm / two-pointer
def subArraySum(arr, n, s):
    left = 0
    currentSum = 0
    # right pointer to traverse
    for right, num in enumerate(arr):
        # calc current sum
        currentSum += arr[right]
        while (currentSum > s):
            # move left index and subtract from currentSum
            currentSum -= arr[left]
            left += 1
        if (currentSum == s):
            return ([left+1, right+1])
    # not found
    return [-1]


ans = subArraySum([1, 2, 3, 7, 5], 5, 12)
print(ans)
