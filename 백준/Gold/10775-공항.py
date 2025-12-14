"""
비행기를 최대로 도킹하려면, 각 비행기가 매번 도킹 가능한 최대 게이트에 도킹해야함 -> 그리디

<처음에 시도한 방식>
각 비행기를 순회하며, 최대 게이트 번호부터 역순 탐색하며 도킹 가능한 게이트 찾기 -> 최대 10^5 * 10^5 시간초과

<탐색에 유니온 파인드 사용>
- find(x) : x 이하에서 가장 가까운 빈 게이트를 찾음
- 빈 게이트 도킹하면 바로 왼쪽 게이트로 parent 업데이트
"""

import sys
input = sys.stdin.readline

G = int(input())
P = int(input())
parent = [i for i in range(G + 1)]

def find(x):
  if parent[x] != x:
    parent[x] = find(parent[x])
  return parent[x]

def union(a, b):
  a = find(a)
  b = find(b)
  parent[a] = b

cnt = 0
for _ in range(P):
  max_gate = int(input())
  root = find(max_gate)

  # 도킹 가능한 곳 없음 -> 탐색 중지
  if root == 0:
    break

  # 도킹 시 다음으로 가능한 게이트 탐색
  union(root, root - 1)
  cnt += 1

print(cnt)
