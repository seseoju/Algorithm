import sys

n = int(sys.stdin.readline())
nums = [map(int,sys.stdin.readline().split()) for x in range(n)]

count = 1
for a, b in nums:
  print(f'Case #{count}: {int(a)} + {int(b)} = {int(a) + int(b)}')
  count += 1