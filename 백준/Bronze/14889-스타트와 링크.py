```
백트래킹
```

import sys
input = sys.stdin.readline

N = int(input())
grid = [list(map(int, input().split())) for _ in range(N)]
visited = [False] * N
answer = float('inf')

def dfs(idx, depth):
  global answer
  if depth == N // 2:
    team1, team2 = 0, 0
    for i in range(N):
      for j in range(N):
        if visited[i] and visited[j]:
          team1 += grid[i][j]
        elif not visited[i] and not visited[j]:
          team2 += grid[i][j]
    answer = min(answer, abs(team1 - team2))
    return

  for i in range(idx, N):
    if not visited[i]:
      visited[i] = True
      dfs(i + 1, depth + 1)
      visited[i] = False 
visited[0] = True
dfs(1, 1)
print(answer)
