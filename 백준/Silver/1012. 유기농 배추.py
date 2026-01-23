import sys
from collections import deque

input = sys.stdin.readline
T = int(input())
dxy = [(-1, 0), (1, 0), (0, -1), (0, 1)]

class Land:
  def __init__(self, m, n):
    self.grid = [[0] * m for _ in range(n)]
    self.m = m
    self.n = n
  
  def in_range(self, x, y):
    return 0 <= x < self.m and 0 <= y < self.n

  def add(self, x, y):
    self.grid[y][x] = 1

  def bfs(self, x, y):
    q = deque([(x, y)])

    while q:
      x, y = q.popleft()
      
      for i in range(4):
        dx, dy = dxy[i]
        nx, ny = x + dx, y + dy

        if self.in_range(nx, ny) and self.grid[ny][nx] == 1:
          q.append((nx, ny))
          self.grid[ny][nx] = 0

for _ in range(T):
  M, N, K = list(map(int, input().split()))

  # 배추 위치 초기화
  land = Land(M, N)
  
  for i in range(K):
    x, y = tuple(map(int, input().split()))
    land.add(x, y)

  cnt = 0
  for i in range(N):
      for j in range(M):
        if land.grid[i][j] == 1:
          land.bfs(j, i)
          cnt += 1

  print(cnt)
