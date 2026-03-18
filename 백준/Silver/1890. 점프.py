# 경로 개수: 최대 2^{63}-1 -> dfs 시간 초과
# 각 칸에 올수 있는 경로를 체크하는 dp 2차원 배열로 기록

import sys
input = sys.stdin.readline

n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

dp = [[0] * n for _ in range(n)]
dp[0][0] = 1

for i in range(n):
  for j in range(n):
    step = arr[i][j]

    if (i == n - 1 and j == n - 1) or dp[i][j] == 0:
      continue

    if j + step < n:
      dp[i][j + step] += dp[i][j]
    if i + step < n:
      dp[i + step][j] += dp[i][j]

print(dp[n - 1][n - 1])
