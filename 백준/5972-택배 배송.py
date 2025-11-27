# 시작 정점에서 특정 정점까지의 최소 거리 -> 다익스트라
# 시간 복잡도: O(ElogV) 최대 정점개수 순회 -> heap 연산 logV
# 공간 복잡도: O (V + E) graph 리스트 정점 개수 + 최대 간선 개수
import heapq
INF = int(1e9)

n, m = list(map(int, input().split()))
graph = [[] for _ in range(n + 1)]

for _ in range(m):
  a, b, c = list(map(int, input().split()))
  graph[a].append((c, b))
  graph[b].append((c, a))

distance = [INF] * (n + 1)
distance[1] = 0
pq = [(0, 1)]

while pq:
  edge, node = heapq.heappop(pq)

  if distance[node] < edge:
    continue

  for new_e, new_n in graph[node]:
    new_edge = edge + new_e

    if new_edge < distance[new_n]:
      distance[new_n] = new_edge
      heapq.heappush(pq, (new_edge, new_n))

print(distance[n])
