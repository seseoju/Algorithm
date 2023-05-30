from collections import deque

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

N = int(input())
graph = [list(map(int, input())) for i in range(N)]

def bfs(graph, x, y):
    queue = deque()
    queue.append((x, y))
    graph[x][y] = 0
    count = 1

    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx < 0 or nx >= N or ny < 0 or ny >= N: # 범위 벗어나면 아래 수행 안되도록.
                continue
            if graph[nx][ny] == 1:
                queue.append((nx, ny))
                graph[nx][ny] = 0
                count += 1
    return count

# 현재 탐색 요소 == 1 -> dfs 수행
cnt = [bfs(graph, i, j) for i in range(N) for j in range(N) if graph[i][j] == 1]
print(len(cnt))
cnt.sort()
for i in range(len(cnt)):
    print(cnt[i])
