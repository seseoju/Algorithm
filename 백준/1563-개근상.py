import sys
sys.setrecursionlimit(10 ** 9)
input = sys.stdin.readline

memo = {}
def dp(total, day, late, absent):
  if late >= 2 or absent >= 3:
    return 0
  
  if day == total:
    return 1

  # dp -> 같은 날, 같은 지각 수, 같은 결석 수 메모이제이션해 중복 계산 방지
  if (day, late, absent) in memo:
    return memo[(day, late, absent)]
  
  memo[(day, late, absent)] = dp(total, day + 1, late, 0) + dp(total, day + 1, late + 1, 0) + dp(total, day + 1, late, absent + 1)
  return memo[(day, late, absent)]

n = int(input())
print(dp(n, 0, 0, 0) % 1000000)
