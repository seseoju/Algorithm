# 백트래킹

n, m = list(map(int, input().split()))
grid = [list(map(int, input().split())) for _ in range(n)]

house = []
chicken = []

for i in range(n):
  for j in range(n):
    if grid[i][j] == 1:
      house.append((i, j))
    if grid[i][j] == 2:
      chicken.append((i, j))

H = len(house)
C = len(chicken)

dist = [[0] * C for _ in range(H)]
for i in range(H):
  for j in range(C):
    dist[i][j] = abs(house[i][0] - chicken[j][0]) + abs(house[i][1] - chicken[j][1])

selected = []
answer = float('inf')

def dfs(idx, depth):
  global answer

  if depth == m:
    total = 0
    for i in range(H):
      total += min(dist[i][j] for j in selected)
    
      if total >= answer:
        return

    answer = min(answer, total)
    return
  
  if idx == C:
    return
  selected.append(idx)
  dfs(idx + 1, depth + 1)
  selected.pop()
  dfs(idx + 1, depth)

dfs(0, 0)
print(answer)
