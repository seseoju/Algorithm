import sys
from collections import defaultdict
input = sys.stdin.readline

N = int(input())
shortcuts = set()

def assignShorcut(words):
  words_arr = words.split()
  
  for i in range(len(words_arr)):
    first = words_arr[i][0].lower()

    if first not in shortcuts:
      shortcuts.add(first)
      words_arr[i] = f"[{words_arr[i][0]}]{words_arr[i][1:]}"
      return " ".join(words_arr)
    
  for i in range(len(words)):
    target_word = words[i].lower()

    if target_word != ' ' and target_word not in shortcuts:
      shortcuts.add(target_word)
      return words[:i] + f"[{words[i]}]" + words[i+1:]

  return words

for _ in range(N):
  words = input().rstrip()
  print(assignShorcut(words), end='\n')
