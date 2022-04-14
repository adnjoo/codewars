# TC O(N)

def maxProfit(prices):
    minPriceSoFar = prices[0]
    maxProfit = 0
    for price in prices:
        maxProfitToday = price - minPriceSoFar
        maxProfit = max(maxProfitToday, maxProfit)
        minPriceSoFar = min(minPriceSoFar, price)
    return maxProfit


p = [7, 1, 5, 3, 6, 4]
p2 = [7, 6, 4, 3, 1]

x = maxProfit(p), maxProfit(p2)
print(x)
