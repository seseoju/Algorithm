import sys
input = sys.stdin.readline

r, c = list(map(int, input().split()))

# X: 땅, .: 바다
# 순차적으로 하면 이전변경이 현재 변경에 영향을 주므로 안됌.
# 일괄 덮어쓰기 하도록 복사본을 만들어야함
before = [list(input().strip()) for _ in range(r)]
after = [row[:] for row in before] # list comprehension

directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
min_row, max_row = r, 0
min_col, max_col = c, 0

def will_disappear(i, j):
  global min_row, max_row, min_col, max_col

  cnt = 0
  for dir_i, dir_j in directions:
    new_i, new_j = i + dir_i, j + dir_j
    if new_i < 0 or new_j < 0 or new_i >= r or new_j >= c or before[new_i][new_j] == '.':
      cnt += 1
  
  if cnt >= 3:
    after[i][j] = '.'

for i in range(r):
  for j in range(c):
    if before[i][j] == 'X':
      will_disappear(i, j)
    if after[i][j] == 'X':
      min_row = min(min_row, i)
      max_row = max(max_row, i)
      min_col = min(min_col, j)
      max_col = max(max_col, j)

for i in range(min_row, max_row + 1):
  print(''.join(after[i][min_col: max_col + 1]))
