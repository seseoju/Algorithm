import sys
input = sys.stdin.readline

N = int(input())
arr = [int(input()) for _ in range(N)]
arr.sort(reverse = True)

p = 0
answer = 0

while p < N:
  sub = arr[p:p+3]

  if len(sub) == 3:
    answer += sum(sub[0:2])
  else:
    answer += sum(sub)
  
  p += 3

print(answer)
