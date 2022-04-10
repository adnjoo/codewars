# TC: O(1) - hashmap lookup
# utilize hashmap
def twoSum(nums, target):
    dict = {}
    for i, n in enumerate(nums):
        m = target - n
        if m in dict:
            return [dict[m], i]
        else:
            dict[n] = i

# TC: O N^2
# nested for loop
# def twoSum(nums, target):
#     for i in range(len(nums)-1):
#         for j in range(i+1, len(nums)):
#             if(nums[i]+nums[j] == target):
#                 return [i, j]


print(twoSum([2, 7, 11, 15], 9))
