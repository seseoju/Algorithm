# bfs
from collections import deque

n = int(input())
grid = [list(input()) for _ in range(n)]
directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

def in_range(i, j):
  if 0 <= i < n and 0 <= j < n:
    return True
  return False

def is_same(prev, cur, is_divided_RG):
  if is_divided_RG:
    return prev == cur
  
  else:
    if (prev == 'R' or prev == 'G') and (cur == 'R' or cur == 'G'):
      return True
    else:
      return prev == cur

def dfs(r, c, visited, is_divide_RG = True):
  q = deque([(r, c)])
  visited[r][c] = True

  while q:
    cur_r, cur_c = q.popleft()
    
    for dr, dc in directions:
      new_r, new_c = cur_r + dr, cur_c + dc

      if (
        in_range(new_r, new_c) 
        and not visited[new_r][new_c]
        and is_same(grid[cur_r][cur_c], grid[new_r][new_c], is_divide_RG)
      ):
        q.append((new_r, new_c))
        visited[new_r][new_c] = True

def divide_RG():
  cnt = 0
  visited = [[False] * n for _ in range(n)]

  for i in range(n):
    for j in range(n):
      if visited[i][j] == False:
        dfs(i, j, visited)
        cnt += 1
  
  return cnt

def not_divide_RG():
  cnt = 0
  visited = [[False] * n for _ in range(n)]

  for i in range(n):
    for j in range(n):
      if visited[i][j] == False:
        dfs(i, j, visited, False)
        cnt += 1
  
  return cnt

print(divide_RG(), not_divide_RG())
