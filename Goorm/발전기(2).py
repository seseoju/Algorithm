import sys
input = sys.stdin.readline

def dfs(i, j):
	stack = [(i, j)]
	cnt = 0
	building_type = village[i][j]

	while stack:
		x, y = stack.pop()

		if village[x][y] != building_type:
			continue
		
		village[x][y] = 0
		cnt += 1
		
		for i in range(4):
			nx = x + dx[i]
			ny = y + dy[i]
			
			if nx in (-1, n) or ny in (-1, n) or village[nx][ny] != building_type:
				continue
			stack.append((nx, ny))
	
	if cnt >= k:
		danji[building_type] += 1

n, k = map(int, input().split())

village = [list(map(int, input().split())) for _ in range(n)]
danji = [0] * 31

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for i in range(n):
	for j in range(n):
		if village[i][j]:
			dfs(i, j)

result, cnt = 0, 0 # result: 건물의 유형 번호, cnt: result 건물 유형에 해당하는 단지의 개수
for i in range(31):
	if cnt <= danji[i]:
		result = i
		cnt = danji[i]
print(result)
	


