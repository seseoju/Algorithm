N, k = map(int, input().split())
coins = [int(input()) for i in range(N)]

answer = 0
for coin in reversed(coins):
    answer += k // coin
    k %= coin
print(answer)