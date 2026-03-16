# 완전탐색 -> 0번째(가능한 볼륨: 2^0), 1번째(2^1), ... , 50번째(2^50) -> 시간 초과
# dp 활용 -> n번째 곡 연주때 가능한 볼륨만 메모 -> 다음 곡에서 해당 볼륨으로만 계산

import sys
input = sys.stdin.readline

n, s, m = list(map(int, input().split()))
volumes = list(map(int, input().split()))
current= {s}

for i in range(n):
  next = set()

  for volume in current:
    if volume + volumes[i] <= m:
      next.add(volume + volumes[i])
    if volume - volumes[i] >= 0:
      next.add(volume - volumes[i])
  
  current = next
  if not current:
    break

if not current:
  print(-1)
else:
  print(max(current))
