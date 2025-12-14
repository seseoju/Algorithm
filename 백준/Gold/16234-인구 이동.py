# dfs 사용한 연합 탐색
# 정답을 보니 bfs가 메모리는 좀더 써도 속도가 좀더 빠른것 같다..

# import sys
# sys.stdin = open("input.txt", "r")

N, L, R = list(map(int, input().split()))
graph = [list(map(int, input().split())) for _ in range(N)]

drc = [(-1, 0), (1, 0), (0, -1), (0, 1)]

def in_range(r, c):
  if 0 <= r < N and 0 <= c < N:
    return True
  return False

def is_valid_diff(a, b):
  if L <= abs(a - b) <= R:
    return True
  return False

def dfs(r, c, visited):
  stack = [(r, c)]
  union = [(r, c)]

  while stack:
    cur_r, cur_c = stack.pop()

    for dr, dc in drc:
      nr, nc = cur_r + dr, cur_c + dc

      if in_range(nr, nc) and is_valid_diff(graph[cur_r][cur_c], graph[nr][nc]) and not visited[nr][nc]:
        visited[nr][nc] = True
        stack.append((nr, nc))
        union.append((nr, nc))
  
  result = sum(graph[i][j] for i, j in union) // len(union)
  for i, j in union:
    graph[i][j] = result

day = 0
cnt = 0
while True:
  visited = [[False] * N for _ in range(N)]
  for r in range(N):
    for c in range(N):
      for dr, dc in drc:
        nr, nc = r + dr, c + dc

        if in_range(nr, nc) and is_valid_diff(graph[r][c], graph[nr][nc]) and not visited[r][c]:
          visited[r][c] = True
          cnt += 1
          dfs(r, c, visited)
  
  if cnt == 0:
    break

  day += 1
  cnt = 0

print(day)


    

