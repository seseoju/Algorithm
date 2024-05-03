# 섬의 개수 구하기와 동일, dfs

import sys
input = sys.stdin.readline

def dfs (i, j):
	stack = [(i, j)]
	
	while stack:
		cx, cy = stack.pop()
		visited[cx][cy] = True
		
		for x, y in pos:
			nx = cx + x
			ny = cy + y
			
			if 0 <= nx < n and 0 <= ny < n and village[nx][ny] == 1 and visited[nx][ny] == False:
				stack.append((nx, ny))
			
n = int(input())

village = [list(map(int, input().split())) for _ in range(n)]
visited = [[False] * n for _ in range(n)]

pos = [(-1, 0), (1, 0), (0, -1), (0, 1)]
count = 0

for i in range(n):
	for j in range(n):
		if village[i][j] == 1 and not visited[i][j]:
			count += 1
			dfs(i, j)

print(count)
