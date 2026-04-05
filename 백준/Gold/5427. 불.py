from collections import deque
import sys
input = sys.stdin.readline

n = int(input())

for i in range(n):
  w, h = list(map(int, input().split(' ')))

  building = [list(input().strip()) for _ in range(h)]
  fire = deque()
  person = deque()
  escaped = False

  for i in range(h):
    for j in range(w):
      if building[i][j] == '@':
        person.append((i, j))
      if building[i][j] == '*':
        fire.append((i, j))

  # 매초 순회하면서 탈출하기
  time = 0
  while person:
    time += 1

    # 불 퍼짐
    for _ in range(len(fire)):
      r, c = fire.popleft()

      for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        new_r, new_c = r + dr, c + dc

        if 0 <= new_r < h and 0 <= new_c < w:
          if building[new_r][new_c] == '.' or building[new_r][new_c] == '@':
            building[new_r][new_c] = '*'
            fire.append((new_r, new_c))

    # 상근이의 이동
    for _ in range(len(person)):
      r, c = person.popleft()

      for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        new_r, new_c = r + dr, c + dc

        # 탈출!
        if new_r < 0 or new_r >= h or new_c < 0 or new_c >= w:
          escaped = True
          break

        if building[new_r][new_c] == '.':
          building[new_r][new_c] = '@'
          person.append((new_r, new_c))

      if escaped:
        break
    if escaped:
      break
  
  if escaped:
    print(time)
  
  else:
    print('IMPOSSIBLE')
