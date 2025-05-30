import sys
import heapq

n = int(sys.stdin.readline())

heap = []

for i in range(n):
    row = list(map(int, sys.stdin.readline().split(' ')))
    for el in row:
        if len(heap) < n:
            heapq.heappush(heap, el)
        else:
            if heap[0] < el:
                heapq.heappop(heap)
                heapq.heappush(heap, el)
