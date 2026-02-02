import sys
input = sys.stdin.readline

N = int(input())
arr = list(map(int, input().split()))

arr2 = sorted(list(set(arr)))

dict = {}
for i in range(len(arr2)):
  dict[arr2[i]] = i

for i in arr:
  print(dict[i], end=' ')
