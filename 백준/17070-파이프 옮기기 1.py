'''
유형: dfs + dp

가로, 대각선 파이프를 옮겼을 때 -> 가로 파이프
세로, 대각선 파이프를 옮겼을 때 -> 세로 파이프
가로, 세로, 대각선 파이프를 옮겼을 때 -> 대각선 파이프

옮길 수 있는 이전 위치의 파이프 갯수를 더해 현재 위치의 가로, 세로, 대각선 파이프의 수를 갱신한다
'''

import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]
dp = [[[0] * 3 for _ in range(n)] for _ in range(n)] # [가로, 세로, 대각선]

dp[0][1][0] = 1

for i in range(n):
  for j in range(2, n):
    if grid[i][j] == 1:
      continue

    dp[i][j][0] = dp[i][j - 1][0] + dp[i][j - 1][2]

    if i > 0:
      dp[i][j][1] = dp[i - 1][j][1] + dp[i - 1][j][2]
    
    if i > 0 and grid[i][j - 1] == 0 and grid[i - 1][j] == 0:
      dp[i][j][2] = dp[i - 1][j - 1][0] + dp[i - 1][j - 1][1] + dp[i - 1][j - 1][2]

print(sum(dp[n - 1][n - 1]))

# def check_range(type, i, j):
#   match type:
#     case 0:
#       if j + 1 < n and grid[i][j + 1] == 0:
#         return True
#       return False
#     case 1:
#       if i + 1 < n and grid[i + 1][j] == 0:
#         return True
#       return False
#     case 2:
#       if i + 1 < n and j + 1 < n and grid[i + 1][j + 1] == 0 and grid[i][j + 1] == 0 and grid[i + 1][j] == 0:
#         return True
#       return False
#     case default:
#       return False

# for i in range(n):
#   for j in range(n):
#     # 파이프가 가로로 놓인 경우
#     if check_range(0, i, j):
#       dp[i][j + 1][0] += dp[i][j][0]
#     if check_range(2, i, j):
#       dp[i + 1][j + 1][2] += dp[i][j][0]
    
#     # 파이프가 세로로 놓인 경우
#     if check_range(1, i, j):
#       dp[i + 1][j][1] += dp[i][j][1]
#     if check_range(2, i, j):
#       dp[i + 1][j + 1][2] += dp[i][j][1]

#     # 파이프가 대각선으로 놓인 경우
#     if check_range(0, i, j):
#       dp[i][j + 1][0] += dp[i][j][2]
#     if check_range(1, i, j):
#       dp[i + 1][j][1] += dp[i][j][2]
#     if check_range(2, i, j):
#       dp[i + 1][j + 1][2] += dp[i][j][2]
  
# result = sum(dp[n - 1][n - 1])
# print(result)
