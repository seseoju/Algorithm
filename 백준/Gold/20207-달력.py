import sys
input = sys.stdin.readline

n = int(input())
days = [tuple(map(int, input().split())) for _ in range(n)]

height = [0] * 366

for start, end in days:
  for i in range(start, end + 1):
    height[i] += 1

answer, day, max_height = 0, 0, 0
for i in range(1, len(height)):
  if height[i] == 0:
    answer += day * max_height
    day = 0
    max_height = 0
  else:
    day += 1
    max_height = max(max_height, height[i])

answer += day * max_height

print(answer)
