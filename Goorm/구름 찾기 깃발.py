n, k = list(map(int, input().split()))

# 1. 게임판을 입력받으며, 구름이 있는 위치를 저장한다.
board = [[] for _ in range(n)]
flags = []

for i in range(n):
	board[i] = list(map(int, input().split()))
	
	for j in range(n):
		if board[i][j] == 1:
			flags.append((i, j))
			
# 2. 구름이 있는 위치들을 순회하며 인접한 여덟 칸 중 깃발을 놓을 수 있는 칸에 깃발을 세운다. 깃발을 세웠다는 의미로 0에서 1씩 뺀다.
pos = [(-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1, -1), (0, -1), (-1, -1)]

for r, c in flags:
	for i, j in pos:
		nr = r + i
		nc = c + j
		if 0 <= nr < n and 0 <= nc < n and board[nr][nc] != 1:
			board[nr][nc] -= 1

count = 0
for i in range(n):
	for j in range(n):
		if board[i][j] == -k:
			count += 1

print(count)
