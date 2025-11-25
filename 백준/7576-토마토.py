from collections import deque

m, n = list(map(int, input().split()))
graph = [list(map(int, input().split())) for _ in range(n)]
search_q = deque()

for i in range(n):
  for j in range(m):
    if graph[i][j] == 1:
      search_q.append((i, j))

drc = [(-1, 0), (1, 0), (0, 1), (0, -1)]

# 익은 토마토 기준으로 bfs
while search_q:
  r, c = search_q.popleft()

  for dr, dc in drc:
    nr, nc = r + dr, c + dc

    if 0 <= nr < n and 0 <= nc < m and graph[nr][nc] == 0:
      # 해당 토마토가 익는 일수 갱신
      graph[nr][nc] = graph[r][c] + 1
      search_q.append((nr, nc))
      
answer = 0
for row in graph:
  for el in row:
    # 토마토가 모두 안익으면 -1 출력
    if el == 0:
      print(-1)
      exit()
    else:
      answer = max(answer, el)

print(answer - 1)
