import sys
sys.stdin = open("input.txt", "r")
input = sys.stdin.readline

n = int(input())
cnt = int(input())
candidates = list(map(int, input().split()))
time = 0
dict = {} # [추천 횟수, 게시 순서]

for i in range(cnt):
  candidate = candidates[i]

  if candidate in dict:
    dict[candidate][0] += 1
  else:
    if len(dict) >= n:
      target = min(dict, key=lambda x: (dict[x][0], dict[x][1]))
      del dict[target]
    
    time += 1
    dict[candidate] = [1, time]

print(' '.join(map(str, sorted(dict.keys()))))
