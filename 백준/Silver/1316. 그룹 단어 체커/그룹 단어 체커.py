import sys

n = int(sys.stdin.readline())
answer = n
for i in range(n):
  word = sys.stdin.readline()
  for j in range(len(word) - 1):
    if word[j] != word[j+1] and word[j] in word[j+1:]:
      answer -= 1
      break

print(answer)