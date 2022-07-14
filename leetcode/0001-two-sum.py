# TC: O(1) - hashmap lookup
# utilize hashmap

def twoSum(self, nums, target):
    dict = {}
    # sum megapost sol - https://tinyurl.com/yttmf4e4
    for idx, ele in enumerate(nums):
        remain = target - ele
        if remain in dict:
            return [dict[remain], idx]
        else:
            dict[ele] = idx

# TC: O N^2
# nested for loop
# def twoSum(nums, target):
#     for i in range(len(nums)-1):
#         for j in range(i+1, len(nums)):
#             if(nums[i]+nums[j] == target):
#                 return [i, j]


print(twoSum([2, 7, 11, 15], 9))
