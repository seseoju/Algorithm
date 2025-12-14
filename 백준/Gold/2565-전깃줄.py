'''
LIS(Longest Increasing Subsequence, 최장 증가 수열 : 어떤 수열에서 가장 긴 오름차순 수열) by DP

전깃줄 A기준 오름차순 정렬했을 때,
전깃줄이 교차하지 않으려면 이전 전깃줄의 B 위치가 현재 전깃줄의 B 위치보다 작아야 한다.
[(A1, B1), (A2, B2)] => B1 < B2 -> 교차 X
따라서 B의 숫자만 탐색해도 LIS 계산을 기반으로 연결된 전깃줄의 최대 개수가 계산된다.

시뮬레이션 
(A 기준 오름차순 정렬) | 해당 전깃줄이 맨 아래 전깃줄일때, 연결할 수 있는 최대 전깃줄 갯수
(1, 8) | (1, 8) -> 1개
(2, 2) | (2, 2) -> 1개
(3, 9) | (2, 2), (2, 9) -> 2개
(4, 1) | (4, 1) -> 1개
(6, 4) | (4, 1), (6, 4) -> 2개
(7, 6) | (4, 1), (6, 4), (7, 6) -> 3개
(9, 7) | (4, 1), (6, 4), (7, 6), (9, 7) -> 4개
(10, 10) | (4, 1), (6, 4), (7, 6), (9, 7), (10, 10) -> 5개
'''

import sys

sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

n = int(input()) # 전깃줄 개수
pairs = [tuple(map(int, input().split())) for _ in range(n)]
pairs.sort()


# 각 전깃줄을 마지막으로 연결했을때, 연결할 수 있는 전기선의 최대 갯수
dp = [1] * n

for i in range(1, n):
  for j in range(0, i):
    if pairs[j][1] < pairs[i][1]:
      dp[i] = max(dp[i], dp[j] + 1)

print(n - max(dp))
