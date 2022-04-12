# hints - Kadane's algorithm, DP solution
# TC O(N) - we go through every element at least once
# SC O(1) - space complexity is constant

def maxSubArray(nums):
    currSum = globalSum = nums[0]
    for i in range(1, len(nums)):
        currSum = max(nums[i], currSum+nums[i])
        globalSum = max(currSum, globalSum)
    return (globalSum)


nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
nums2 = [5, 4, -1, 7, 8]
maxSubArray(nums)
maxSubArray(nums2)
