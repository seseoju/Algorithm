# https://www.acmicpc.net/problem/2108

import sys
from collections import Counter

n = int(sys.stdin.readline())

data = [int(sys.stdin.readline().strip()) for i in range(n)]
data_len = len(data)

# 1. 산술평균
avg = round(sum(data) / data_len)
print(avg)

# 2. 중앙값
sorted_data = sorted(data)
print(sorted_data[data_len // 2])

# 3. 최빈값
dict = Counter(data)
max_cnt_num = max(dict.values())
arr = sorted([num for num in dict.keys() if dict[num] == max_cnt_num], key = lambda x: -x)

if len(arr) > 1:
    print(arr[-2])
else:
    print(arr[0])

# 4. 최댓값과 최솟값의 차
print(sorted_data[-1] - sorted_data[0])
