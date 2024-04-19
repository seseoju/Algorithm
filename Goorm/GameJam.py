import sys

def getPosInList(arr):
	row, col = arr
	return [row - 1, col - 1]

def controlIdxOutOfRange(command, r, c):
	if command == 'U' and r < 0:
		r = n - 1
	elif command == 'D' and r >= n:
		r = 0
	elif command == 'L' and c < 0:
		c = n - 1
	elif command == 'R' and c >= n:
		c = 0
		
	return (r, c)

def play(r, c):
	move = True
	score = 1
	visited = [[False] * n for _ in range(n)]
	visited[r][c] = True

	while move:
		guide = board[(r, c)]

		for i in range(guide['cnt']):
			dr, dc = pos[guide['command']]

			r += dr
			c += dc

			r, c = controlIdxOutOfRange(guide['command'], r, c) # 보드 밖으로 나가는 경우 처리

			if visited[r][c] == True:
				move = False
				break

			visited[r][c] = True
			score += 1

		if move == False:
			break
      
	return score
	
input = sys.stdin.readline

n = int(input())

goorm_r, goorm_c = getPosInList(list(map(int, input().split()))) # (실제 보드 칸 - 1)로 관리
player_r, player_c = getPosInList(list(map(int, input().split())))

board = {}

for i in range(n):
	arr = input().split()
	for idx, val in enumerate(arr):
		board[(i, idx)] = {'cnt': int(val[:-1]), 'command': val[-1]}

pos = {'U': (-1, 0), 'D': (1, 0), 'L': (0, -1), 'R': (0, 1)}

goorm_score = play(goorm_r, goorm_c)
player_score = play(player_r, player_c)

if goorm_score > player_score:
	print('goorm', goorm_score)
else:
	print('player', player_score)
