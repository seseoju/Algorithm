'''
점수가 높은 순으로 매번 최대한 마감일에 가깝게 과제하기 -> 그리디

heapq를 사용해 점수가 높은 순으로 탐색 -> 마감일부터 역순 탐색하며 마감일에 최대한 가깝게 과제 배정 -> 10775-공항 문제와 다르게 1000 * 1000 시간 초과 x
'''

import sys, heapq

input = sys.stdin.readline
n = int(input())
max_day = 0
pq = []

for _ in range(n):
  d, w = list(map(int, input().split()))
  heapq.heappush(pq, (-w, d))

  max_day = max(max_day, d)

days = [False] * (max_day + 1)
score = 0

while pq:
  # 점수가 높은 순으로 처리
  cur_score, cur_day  = heapq.heappop(pq)
  cur_score = -cur_score

  for i in range(cur_day, 0, -1):
    if not days[i]:
      days[i] = True
      score += cur_score
      break

print(score)
