import sys

n = int(sys.stdin.readline())
answer = 0

for _ in range(n):
    word = sys.stdin.readline().strip()
    
    stack = []
    for i in word:
      if len(stack) > 0 and stack[-1] == i:
         stack.pop()
      else:
         stack.append(i)

    if len(stack) == 0:
       answer += 1

print(answer)