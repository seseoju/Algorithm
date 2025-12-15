'''
LCS(Longest Common Subsequence, 최장 공통 부분 수열): 두 수열(a,b)이 주어졌을 때, 모두의 부분 수열이 되는 수열 중 가장 긴 수열 찾기
매트릭스 테이블 기반 dp값 전이
'''
a, b = input(), input()
len_a, len_b = len(a), len(b)
dp = [[0] * (len_a + 1) for _ in range(0, len_b + 1)]

for i in range(1, len_b + 1):
  for j in range(1, len_a + 1):
    if a[j-1] == b[i-1]:
      dp[i][j] = dp[i-1][j-1] + 1
    else:
      dp[i][j] = max(dp[i-1][j], dp[i][j-1])

print(dp[-1][-1])
