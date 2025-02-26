# https://www.acmicpc.net/problem/20920

import sys
from collections import Counter, defaultdict

n, m = map(int, sys.stdin.readline().split(' '))
words = [sys.stdin.readline().strip() for i in range(n)]
filtered_words = list(filter(lambda x: len(x) >= m, words))

dict = defaultdict(list)

words_cnt = Counter(filtered_words)

for key, value in words_cnt.items():
    dict[value].append(key)

for key in sorted(list(dict.keys()), key = lambda x: -x):
    words = sorted(dict[key], key = lambda x: (-len(x), x))
    
    for word in words:
        print(word)
