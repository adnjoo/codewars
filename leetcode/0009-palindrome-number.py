class Solution:
    def isPalindrome(self, x: int) -> bool:
        return str(x)[::-1] == str(x)


t = Solution()
ans = t.isPalindrome(10)
print(ans)

# Follow up: Could you solve it without converting the integer to a string?
