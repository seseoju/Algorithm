# https://www.acmicpc.net/problem/2304

import sys

n = int(sys.stdin.readline())
pos = sorted([list(map(int, sys.stdin.readline().split(' ')))
             for i in range(n)], key=lambda x: x[0])

max_height = max(pos, key=lambda x: x[1])
pos_len = len(pos)

result = 0

cur_max = 0

for i in range(pos_len):
    x, y = pos[i]

    if x == max_height[0]:
        break

    if cur_max < y:
        cur_max = y

    next_x, next_y = pos[i + 1]

    result += (next_x - x) * cur_max

cur_max = 0

for i in range(pos_len - 1, -1, -1):
    x, y = pos[i]

    if x == max_height[0]:
        break

    if cur_max < y:
        cur_max = y

    prev_x, prev_y = pos[i - 1]

    result += (x - prev_x) * cur_max

result += max_height[1]

print(result)
