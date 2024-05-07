# Try 1. filter (js에서는 filter가 익숙해서..)
import sys
from collections import defaultdict
input = sys.stdin.readline

n, m, k = map(int, input().split())
visited = [False] * (n + 1)

nodes = defaultdict(list)

for _ in range(m):
	n1, n2 = map(int, input().split())
	nodes[n1].append(n2)
	nodes[n2].append(n1)
	
cnt = 0
current = k

while True:	
	visited[current] = True
	cnt += 1
	next_list = list(filter(lambda x: not visited[x], nodes[current]))
	
	if len(next_list) == 0:
		break
	else:
		current = min(next_list)

print(cnt, current)
	
# ----------------------------------------------------------------------------------------------------------------

# 2. filter, min 제거 -> 실행시간 단축
import sys
from collections import defaultdict
input = sys.stdin.readline

	
n, m, k = map(int, input().split())
visited = [False] * (n + 1)

nodes = defaultdict(list)

for _ in range(m):
	n1, n2 = map(int, input().split())
	nodes[n1].append(n2)
	nodes[n2].append(n1)
	
cnt = 0
current = k

while True:
	if visited[current]:
		break
	
	visited[current] = True
	cnt += 1
	
	for to in sorted(nodes[current]):
		if not visited[to]:
			current = to
			break

print(cnt, current)
