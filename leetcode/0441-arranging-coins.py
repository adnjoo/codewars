# why is this slow? 860ms
def arrangeCoins(self, n: int) -> int:
    sum = 0
    i = 1
    while(sum <= n):
        sum += i
        i += 1
    return i - 2


print(arrangeCoins('', 5))

